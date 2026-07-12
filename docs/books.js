/**
 * 📖 3D立体书 & 前端控制台 大一统配置中心
 * * 以后不管是增加 3D 书籍还是修改控制台卡片皮肤，全在这里统一操作！
 */
/**
 * 📖 3D立体书 & 前端控制台 大一统配置中心
 * * 以后不管是增加 3D 书籍还是修改控制台卡片皮肤，全在这里统一操作！
 */
const my3DBooksDataset = [
    {
        bookId: "progress",
        title: "我的学习报告",
        typeTag: "全库盲刷",
        author: "SYSTEM",
        slogan: "打破边界，盲区空投。",
        sloganColor: "text-amber-600 font-extrabold animate-pulse", 
        coverBg: "#1c1a16",          
        coverBorder: "#967633",      
        backBg: "#282520",           
        spineBg: "#12100e",          
        initLeft: "55%",             // 🌟 错开左侧小盆栽
        initTop: "18%",              // 🌟 垂直空投！从 6.5% 降落到 33%，直达实体木书架搁板
        
        scopeCode: "SHUFFLE_MODE",
        lockBadgeStyle: "bg-amber-600/20 text-amber-600 border border-amber-600/30",
        cardTheme: "border-amber-600/20 hover:border-amber-600 hover:bg-amber-50/10",
        dotColor: "bg-amber-600 shadow-amber-600/50"
    },
    {
        bookId: "gold",
        title: "金之流",
        typeTag: "新形式对应",
        author: "XXXX",
        slogan: "最新、最強。",
        sloganColor: "text-red-600",
        coverBg: "#b59247",          
        coverBorder: "#967633",      
        backBg: "#a0803b",           
        spineBg: "#8c6e30",          
        initLeft: "65%",             // 🌟 保持并排空隙
        initTop: "18%",              // 🌟 同步降落到 33% 书架线
        
        scopeCode: "ALPHA",                                                           
        lockBadgeStyle: "bg-amber-500/20 text-amber-700 border border-amber-500/30", 
        cardTheme: "border-amber-500/30 hover:border-amber-500 hover:bg-amber-50/20",  
        dotColor: "bg-amber-500 shadow-amber-500/50"                                  
    },
    {
        bookId: "black",
        title: "黒之流",
        typeTag: "顶级突破",
        author: "XXXX",
        slogan: "顶点を極めよ。",
        sloganColor: "text-neutral-400",
        coverBg: "#1a202c",          
        coverBorder: "#2d3748",      
        backBg: "#2d3748", 
        spineBg: "#111827",
        initLeft: "75%",             // 🌟 保持并排空隙
        initTop: "18%",              // 🌟 同步降落到 33% 书架线
        
        scopeCode: "GAMMA",
        lockBadgeStyle: "bg-neutral-800/20 text-neutral-800 border border-neutral-800/30",
        cardTheme: "border-neutral-800/30 hover:border-neutral-800 hover:bg-neutral-800/10",
        dotColor: "bg-neutral-800 shadow-neutral-800/50"
    }
];

// =====================================================================
// ⚡ 自动化渲染与独立拖拽引擎（保持纯净，无需再改）
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    inject3DBookStyles(); 
    render3DBooks();      
    initBookDraggable();      //
});

function inject3DBookStyles() {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        .book-3d-space { position: fixed; width: 80px; height: 116px; perspective: 1000px; z-index: 50; cursor: grab; user-select: none; transition: opacity 0.3s ease; }
        .book-3d-space:active { cursor: grabbing; }
        .book-3d-box { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transform: rotateX(54deg) rotateY(0deg) rotateZ(-36deg); transition: transform 0.1s ease; }
        .book-face { position: absolute; box-sizing: border-box; backface-visibility: visible; }
        .book-face.front { width: 80px; height: 116px; border-radius: 1px 2px 2px 1px; box-shadow: inset -2px 0 4px rgba(0, 0, 0, 0.15); font-family: 'Noto Sans JP', sans-serif; }
        .book-face.back { width: 80px; height: 116px; border-radius: 2px 1px 1px 2px; transform: translateZ(-6px) rotateY(180deg); }
        .book-face.spine { width: 12px; height: 116px; left: -6px; transform: rotateY(-90deg); }
        .book-face.page-right { width: 12px; height: 116px; right: -6px; background: #f2ebd9; background-image: linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px); background-size: 100% 2.5px; transform: rotateY(90deg); }
        .book-face.page-top { width: 80px; height: 12px; top: -6px; background: #ebe3cf; background-image: linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px); background-size: 2.5px 100%; transform: rotateX(90deg); }
        .book-face.page-bottom { width: 80px; height: 12px; bottom: -6px; background: #ebe3cf; transform: rotateX(-90deg); }
        .book-ambient-shadow { position: absolute; width: 84px; height: 120px; top: 3px; left: -2px; background: rgba(15, 12, 6, 0.65); filter: blur(5px); transform: translateZ(-10px); pointer-events: none; }
    `;
    document.head.appendChild(styleEl);
}

function render3DBooks() {
    my3DBooksDataset.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-3d-space';
        bookContainer.style.left = book.initLeft;
        bookContainer.style.top = book.initTop;

        bookContainer.innerHTML = `
            <div class="book-3d-box">
                <div class="book-ambient-shadow"></div>
                <div class="book-face front flex flex-col justify-between p-1 overflow-hidden select-none" style="background: ${book.coverBg}; border: 1px solid ${book.coverBorder};">
                    <div class="self-center text-[5px] text-amber-950/80 font-black border border-dashed border-amber-950/40 rounded px-0.5 scale-90 bg-amber-100/10 leading-none">${book.typeTag}</div>
                    <div class="flex flex-col items-center my-auto tracking-tighter">
                        <span class="text-[11px] font-black text-white bg-slate-900/90 px-1.5 py-0.5 rounded shadow-sm my-0.5 leading-none tracking-normal scale-105">${book.title}</span>
                        <span class="text-[5px] text-white/60 font-bold scale-75 leading-none mt-1">${book.author}</span>
                    </div>
                    <div class="bg-white -mx-1 -mb-1 p-0.5 text-center border-t border-amber-950/20">
                        <span class="text-[6px] font-black ${book.sloganColor} block scale-90 tracking-wider">${book.slogan}</span>
                    </div>
                </div>
                <div class="book-face back" style="background: ${book.backBg};"></div>
                <div class="book-face spine" style="background: ${book.spineBg};"></div>
                <div class="book-face page-right"></div>
                <div class="book-face page-top"></div>
                <div class="book-face page-bottom"></div>
            </div>
        `;
        document.body.appendChild(bookContainer);
    });
}

function initBookDraggable() {
    let activeBook = null;
    let offsetX = 0;
    let offsetY = 0;

    const books = document.querySelectorAll('.book-3d-space');

    books.forEach(bookEl => {
        bookEl.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return; 
            activeBook = bookEl;
            
            books.forEach(b => {
                b.style.zIndex = "50";
                b.style.opacity = "0.35";
            });
            activeBook.style.zIndex = "60";
            activeBook.style.opacity = "1";

            const currentBookConfig = my3DBooksDataset[Array.from(books).indexOf(bookEl)];
            if (currentBookConfig && typeof window.setBookFilter === 'function') {
                window.setBookFilter(currentBookConfig.bookId);
            }

            const rect = activeBook.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            
            e.preventDefault();
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (!activeBook) return;
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;
        activeBook.style.left = `${newLeft}px`;
        activeBook.style.top = `${newTop}px`;
    });

    document.addEventListener('mouseup', () => { activeBook = null; });
}

window.resetBookVisuals = function() {
    const books = document.querySelectorAll('.book-3d-space');
    books.forEach(b => {
        b.style.zIndex = "50";
        b.style.opacity = "1";
    });
};