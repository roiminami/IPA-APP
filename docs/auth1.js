// auth.js - 南式TOEIC鬼特訓 クラウド同期コアスクリプト

// ⚠️ 请在这里替换为你自己的 Supabase 项目 URL 和 Anon Key
const SUPABASE_URL = 'https://kejeprpbzznttoqsujkk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlamVwcnBienpudHRvcXN1amtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4MzU4MTMsImV4cCI6MjA5OTQxMTgxM30.J7ZUE5qBwdZCVPOraaEl4dfDLEwcxGDLocHfUtTJI0A';

// 使用 supabaseClient 避免与全局库同名冲突
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
let currentUser = null;
let isSyncingFromServer = false;

// --- 本地存储的全局监听 ---
const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
    originalSetItem.apply(this, arguments);
    if (key === 'toeic_dict_notebook' && !isSyncingFromServer) {
        uploadDataToCloud();
    }
};

const originalRemoveItem = localStorage.removeItem;
localStorage.removeItem = function(key) {
    originalRemoveItem.apply(this, arguments);
    if (key === 'toeic_dict_notebook' && !isSyncingFromServer) {
        uploadDataToCloud();
    }
};

// 页面加载时的初始化与状态监听
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            currentUser = session.user;
            updateUserUI(currentUser.email);
            await downloadDataFromCloud();
        } else {
            updateUserUI(null);
        }
    } catch (e) {
        console.error("Supabase 初始化检查失败:", e);
    }
    
    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (session) {
            currentUser = session.user;
            updateUserUI(currentUser.email);
            await downloadDataFromCloud();
        } else {
            currentUser = null;
            updateUserUI(null);
        }
    });
});

// 新生注册
async function handleSignUp(email, password) {
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) {
        alert("注册失败: " + error.message);
    } else {
        alert("注册成功！请查收验证邮件（若未收到可直接尝试登录）。");
    }
}

// 登录
async function handleSignIn(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
        alert("登录失败: " + error.message);
    } else {
        alert("登录成功！");
        closeLoginModal();
    }
}

// 退出登录
async function handleLogout() {
    if (confirm("确定要退出登录吗？（您的云端同步数据将安全保留）")) {
        await supabaseClient.auth.signOut();
        isSyncingFromServer = true;
        localStorage.removeItem('toeic_dict_notebook');
        isSyncingFromServer = false;
        alert("已安全退出登录");
        window.location.reload();
    }
}

// 从云端下载数据
async function downloadDataFromCloud() {
    if (!currentUser) return;
    const { data, error } = await supabaseClient
        .from('user_progress')
        .select('*')
        .eq('user_id', currentUser.id)
        .single();

    if (error && error.code !== 'PGRST116') {
        console.error("加载云端数据失败:", error.message);
        return;
    }

    if (data && data.dict_notebook) {
        isSyncingFromServer = true;
        localStorage.setItem('toeic_dict_notebook', JSON.stringify(data.dict_notebook));
        isSyncingFromServer = false;
        if (typeof renderDictNotebook === 'function') {
            renderDictNotebook();
        }
    }
}

// 同步到云端
async function uploadDataToCloud() {
    if (!currentUser) return;
    const dictData = JSON.parse(localStorage.getItem('toeic_dict_notebook')) || {};
    const { error } = await supabaseClient
        .from('user_progress')
        .upsert({
            user_id: currentUser.id,
            dict_notebook: dictData,
            updated_at: new Date()
        });
    if (error) {
        console.error("同步至云端失败:", error.message);
    }
}

// 动态切换顶栏 UI
function updateUserUI(email) {
    const loggedOutDiv = document.getElementById('auth-logged-out');
    const loggedInDiv = document.getElementById('auth-logged-in');
    const emailDisplay = document.getElementById('user-email-display');
    const avatar = document.getElementById('user-avatar');
    
    if (loggedOutDiv && loggedInDiv) {
        if (email) {
            loggedOutDiv.classList.add('hidden');
            loggedInDiv.classList.remove('hidden');
            if (emailDisplay) emailDisplay.textContent = email;
            if (avatar) avatar.textContent = email.charAt(0).toUpperCase();
        } else {
            loggedOutDiv.classList.remove('hidden');
            loggedInDiv.classList.add('hidden');
        }
    }
}

// 弹窗控制函数（必须全局可用）
function openLoginModal() { 
    const modal = document.getElementById('login-modal');
    if(modal) modal.classList.remove('hidden'); 
}
function openRegisterModal() { 
    const modal = document.getElementById('login-modal');
    if(modal) modal.classList.remove('hidden'); 
}
function closeLoginModal() { 
    const modal = document.getElementById('login-modal');
    if(modal) modal.classList.add('hidden'); 
}

function submitAuth(type) {
    const email = document.getElementById('modal-email').value;
    const pass = document.getElementById('modal-password').value;
    if(!email || !pass) return alert("请输入邮箱和密码！");
    if(pass.length < 6) return alert("密码长度至少为6位！");
    if(type === 'login') handleSignIn(email, pass);
    if(type === 'register') handleSignUp(email, pass);
}