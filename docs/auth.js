// auth.js - 南式TOEIC鬼特訓 克隆云端同步核心脚本

// ⚠️ 【第一步】请在这里填入你真实的 Supabase 项目地址和 Anon 公钥
const SUPABASE_URL = 'https://kejeprpbzznttoqsujkk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlamVwcnBienpudHRvcXN1amtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4MzU4MTMsImV4cCI6MjA5OTQxMTgxM30.J7ZUE5qBwdZCVPOraaEl4dfDLEwcxGDLocHfUtTJI0A';

// 🌟 【修复核心】使用 supabaseClient 变量名，绝对不要跟官方全局变量名 'supabase' 重名冲突！
let supabaseClient = null;

try {
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log("🚀 Supabase 客户端安全初始化成功");
    } else {
        console.error("❌ 错误：检测到网页未成功引入 Supabase CDN 脚本，请检查 HTML 底部！");
    }
} catch (e) {
    console.error("💥 Supabase 初始化失败:", e);
}

let currentUser = null;
let isSyncingFromServer = false;

// --- 🌟 核心升级：获取本地所有的 TOEIC 数据（包含生词本和所有单元进度） ---
function getAllLocalToeicData() {
    const payload = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // 把所有以 toeic_ 开头的本地缓存全部打包 (包括生词本、进度、正确数、总数)
        if (key && key.startsWith('toeic_')) {
            try {
                payload[key] = localStorage.getItem(key);
            } catch (e) {
                console.error(`读取缓存 ${key} 失败:`, e);
            }
        }
    }
    return payload;
}

// --- 本地存储全局实时拦截（只要有任意做题进度或生词本改变，立刻触发秒同步） ---
const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
    originalSetItem.apply(this, arguments);
    if (key && key.startsWith('toeic_') && !isSyncingFromServer) {
        uploadDataToCloud();
    }
};

const originalRemoveItem = localStorage.removeItem;
localStorage.removeItem = function(key) {
    originalRemoveItem.apply(this, arguments);
    if (key && key.startsWith('toeic_') && !isSyncingFromServer) {
        uploadDataToCloud();
    }
};

// 页面加载完毕后，监听登录状态
document.addEventListener('DOMContentLoaded', async () => {
    if (!supabaseClient) return;

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
        console.warn("读取初始化 Session 失败:", e);
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

// 处理账号注册
async function handleSignUp(email, password) {
    if (!supabaseClient) return alert("数据库未连接");
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) {
        alert("注册失败: " + error.message);
    } else {
        alert("注册成功！请前往邮箱查收验证邮件。");
    }
}

// 处理登录
async function handleSignIn(email, password) {
    if (!supabaseClient) return alert("数据库未连接");
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
        alert("登录失败: " + error.message);
    } else {
        alert("登录成功！全量同步已激活。");
        closeLoginModal();
    }
}

// 处理退出登录
async function handleLogout() {
    if (!supabaseClient) return;
    if (confirm("确定要退出登录吗？（您的云端同步数据将安全保留，本地数据将清空）")) {
        await supabaseClient.auth.signOut();
        isSyncingFromServer = true;
        
        // 退出登录时，清空本地所有 toeic 相关缓存
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('toeic_')) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(k => localStorage.removeItem(k));
        
        isSyncingFromServer = false;
        alert("已安全退出登录");
        window.location.reload();
    }
}

// 📥 从云端数据库加载【全部数据】并平铺注入本地
async function downloadDataFromCloud() {
    if (!currentUser || !supabaseClient) return;

    const { data, error } = await supabaseClient
        .from('user_progress')
        .select('*')
        .eq('user_id', currentUser.id)
        .single();

    if (error && error.code !== 'PGRST116') {
        console.error("加载云端同步备份失败:", error.message);
        return;
    }

    // 🌟 核心升级：完美复原云端保存的所有进度字典
    if (data && data.dict_notebook) {
        isSyncingFromServer = true;
        const cloudData = data.dict_notebook; // 此时这个字段存放的是整个本地数据的打包集合
        
        for (const key in cloudData) {
            if (Object.prototype.hasOwnProperty.call(cloudData, key)) {
                localStorage.setItem(key, cloudData[key]);
            }
        }
        isSyncingFromServer = false;
        
        // 刷新 index.html 的数据看板和关卡网格
        if (typeof calculateAndRenderStats === 'function') {
            calculateAndRenderStats();
        }
        if (typeof filterToeicModules === 'function') {
            filterToeicModules();
        }
        // 兼容 test.html 页面如果存在渲染函数的话
        if (typeof renderDictNotebook === 'function') {
            renderDictNotebook();
        }
    }
}

// 📤 将本地所有的 toeic_ 数据整体打包上传至云端
async function uploadDataToCloud() {
    if (!currentUser || !supabaseClient) return;

    // 抓取当前本地全部最新的数据包
    const allToeicData = getAllLocalToeicData();

    const { error } = await supabaseClient
        .from('user_progress')
        .upsert({
            user_id: currentUser.id,
            dict_notebook: allToeicData, // 直接将整个打包对象塞入数据库字段
            updated_at: new Date()
        });

    if (error) {
        console.error("全量同步至云端失败:", error.message);
    } else {
        console.log("✨ 全量进度与生词本数据已完成云端实时秒同步");
    }
}

// 切换顶栏 UI 状态
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

// 全局弹窗开关控制
window.openLoginModal = function() { 
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.classList.remove('hidden'); 
    } else {
        console.error("未在 HTML 底部找到 id='login-modal' 的弹窗模块！");
    }
};

window.openRegisterModal = function() { window.openLoginModal(); };
window.closeLoginModal = function() { const modal = document.getElementById('login-modal'); if (modal) modal.classList.add('hidden'); };

// 提交登录/注册按钮表单
// 🌟 智能密码强度校验中心（8-18位字母+数字组合，中英双语版）
window.submitAuth = function(type) {
    const email = document.getElementById('modal-email').value.trim();
    const pass = document.getElementById('modal-password').value;

    // 1. 基础空值检查 / Basic check
    if (!email || !pass) {
        return alert("⚠️ Please enter both email and password! / 请输入邮箱和密码！");
    }

    // 2. 长度把关：太短太难都不好，卡死 8-18 位 / Length boundary (8-18 chars)
    if (pass.length < 8) {
        return alert("❌ Password too short! 6 characters is unsafe. / 密码太短啦！6位很容易被破解，请至少设置 8 位。");
    }
    if (pass.length > 18) {
        return alert("❌ Password too long! / 密码太长啦！建议控制在 18 位以内，免得以后忘记。");
    }

    // 3. 智能组合过滤（注册时严格把关 / Sign-up validation）
    if (type === 'register') {
        const hasNumber = /\d/.test(pass);
        const hasLetter = /[a-zA-Z]/.test(pass);
        const isAllSame = /^(.)\1+$/.test(pass); // 检查是否全是同一个字符，如 88888888

        // 拦截全数字、全字母或全相同字符
        if (isAllSame || !hasNumber || !hasLetter) {
            return alert(
                "⚠️ Simple passwords are risky! / 密码太简单有风险！\n\n" +
                "Please use a combination of both [Letters + Numbers] (8-18 chars).\n" +
                "请使用「字母 + 数字」的常用组合，长度为 8 到 18 位。\n\n" +
                "💡 Examples / 例如: toeic2026, hunter888\n" +
                "No special symbols needed, just make it memorable! / 无需复杂符号，常用好记即可！"
            );
        }
    }

    // 4. 校验通过，提交云端 / Verified, submit to cloud
    if (type === 'login') handleSignIn(email, pass);
    if (type === 'register') handleSignUp(email, pass);
};

// 🌟 【全新功能：未登录免费体验3个单元的权限拦截中心】
window.checkAuthPermission = function(targetUnit) {
    // 1. 如果用户已经登录，毫无疑问拥有全量访问权限，直接放行
    if (currentUser) {
        return true;
    }

    // 2. 如果未登录，遍历本地缓存，计算用户目前“已经体验过”的单元总数
    const attemptedUnits = new Set();
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // 如果本地存有某个单元的总题数进度，且大于0，说明这个单元已经被点开并做过题了
        if (key && key.startsWith('toeic_total_')) {
            const unitName = key.replace('toeic_total_', '');
            const totalValue = parseInt(localStorage.getItem(key) || '0', 10);
            if (totalValue > 0) {
                attemptedUnits.add(unitName);
            }
        }
    }

    // 3. 检查当前点击的单元，是不是属于“已经体验过”的列表
    if (attemptedUnits.has(targetUnit)) {
        // 如果是已经开始过的单元，允许进去继续复习，不重复扣额度
        return true;
    }

    // 4. 如果点击的是一个全新单元，判断体验过的单元是否已经达到了 3 个
    if (attemptedUnits.size >= 3) {
        // 超过额度，无情拦截并呼出登录弹窗
        alert(`💡 体验额度已满：\n您当前未登录，本地已留下了 ${attemptedUnits.size} 个单元的特训记录。请注册并登录账号，解锁全量 ${localConfigRegistry.length || '多'} 个隐藏特训章节，并激活多端云同步！`);
        window.openLoginModal();
        return false; // 拦截，不让进去
    }

    // 5. 没超 3 个，允许开辟新体验单元
    return true;
};

// 🌟 动态切换登录/注册模式状态机
let currentAuthMode = 'register'; // 默认引导注册

window.toggleAuthMode = function() {
    const title = document.getElementById('auth-modal-title');
    const desc = document.getElementById('auth-modal-desc');
    const submitBtn = document.getElementById('auth-submit-btn');
    const switchText = document.getElementById('auth-switch-text');
    const switchBtn = document.getElementById('auth-switch-btn');
    
    if (currentAuthMode === 'register') {
        currentAuthMode = 'login';
        title.textContent = 'Sign In (登录账号)';
        desc.innerHTML = `Welcome back! Sign in to restore your cloud progress.<br><span class="text-amber-700 font-medium">欢迎回来！输入邮箱和密码即可同步恢复所有进度。</span>`;
        submitBtn.textContent = 'Sign In (立即登录)';
        submitBtn.setAttribute('onclick', "submitAuth('login')");
        switchText.textContent = "New here? (新同学请先)";
        switchBtn.textContent = 'Sign Up (去注册)';
    } else {
        currentAuthMode = 'register';
        title.textContent = 'Create Account (注册新账号)';
        desc.innerHTML = `Sign up first to activate your cloud sync space and protect your local training data.<br><span class="text-amber-700 font-medium">请先注册以激活云端同步，防止刷题进度丢失。</span>`;
        submitBtn.textContent = 'Get Started & Sign Up (立即注册并开始)';
        submitBtn.setAttribute('onclick', "submitAuth('register')");
        switchText.textContent = "Already have an account? (已有账号？)";
        switchBtn.textContent = 'Sign In (去登录)';
    }
};

// 修正原有的打开弹窗函数，确保每次点顶栏的按钮时，弹窗能正确初始化它该有的状态
const originalOpenLoginModal = window.openLoginModal;
window.openLoginModal = function() {
    // 如果点击的是 Sign In，强制调整为登录状态
    if (currentAuthMode !== 'login') window.toggleAuthMode();
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.remove('hidden');
};

window.openRegisterModal = function() {
    // 如果点击的是 Sign Up，强制调整为注册状态
    if (currentAuthMode !== 'register') window.toggleAuthMode();
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.remove('hidden');
};