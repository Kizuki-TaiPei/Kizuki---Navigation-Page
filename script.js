// 网站基础数据（不包含可翻译的文本）
const websites = [
    {
        id: 1,
        name: "元宝大王",
        description: "朋友叫他老婆",
        url: "https://live.bilibili.com/1828186820",
        category: "entertainment",
        icon: "fas fa-tv"
    },
    {
        id: 2,
        name: "小温",
        description: "不知名温-",
        url: "https://live.bilibili.com/30370968?spm_id_from=333.1391.0.0&live_from=88001",
        category: "tools",
        icon: "fas fa-tv"
    },
    {
        id: 3,
        name: "破碎白巧-cathy",
        description: "小邓紫棋",
        url: "https://live.bilibili.com/1851659518?spm_id_from=333.1391.0.0&live_from=88001",
        category: "entertainment",
        icon: "fas fa-tv"
    },
    {
        id: 4,
        name: "星见小鹿",
        description: "新V",
        url: "https://live.bilibili.com/1742435516?spm_id_from=333.1391.0.0&live_from=88001",
        category: "study",
        icon:"fas fa-tv"
    },
    {
        id: 5,
        name: "奈奈酱包",
        description: "终末地代肝",
        url: "https://live.bilibili.com/30570184?spm_id_from=333.1391.0.0&live_from=88001",
        category: "work",
        icon: "fas fa-tv"
         },
    {
        id: 6,
        name: "盐栗栗Libra",
        description: "粤语V",
        url: "https://live.bilibili.com/1982333925?spm_id_from=333.1391.0.0&live_from=88001",
        category: "work",
        icon: "fas fa-tv"
    }

];

// 使网站数据全局可用
window.websites = websites;

let currentCategory = "all";
const websitesContainer = document.getElementById('websitesContainer');
const categoryElements = document.querySelectorAll('.category');
const searchInput = document.querySelector('.search-box input');

// 全局渲染函数
window.renderWebsites = function(filteredWebsites) {
    websitesContainer.innerHTML = '';
    
    if (filteredWebsites.length === 0) {
        websitesContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 20px;"></i>
                <h3>未找到匹配的网站</h3>
                <p>尝试使用不同的关键词</p>
            </div>
        `;
        return;
    }
    
    filteredWebsites.forEach(website => {
        const websiteCard = document.createElement('div');
        websiteCard.className = 'website-card';
        
        websiteCard.innerHTML = `
            <div class="website-icon">
                <i class="${website.icon}"></i>
            </div>
            <div class="website-info">
                <h3>${website.name}</h3>
                <p>${website.description}</p>
            </div>
        `;
        
        websiteCard.addEventListener('click', () => {
            window.open(website.url, '_blank');
        });
        
        websitesContainer.appendChild(websiteCard);
    });
    
    updateWebsiteCount(filteredWebsites.length);
}

function updateWebsiteCount(count) {
    const heroSection = document.querySelector('.hero p');
    if (heroSection) {
        const originalText = '朋友D的Vup，关注她的你，一定会喜欢上她的！';
        heroSection.textContent = originalText;
    }
}

function filterWebsites() {
    let filtered = window.websites || websites;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filtered = filtered.filter(website => 
            website.name.toLowerCase().includes(searchTerm) ||
            website.description.toLowerCase().includes(searchTerm)
        );
    }
    
    window.renderWebsites(filtered);
}

function setupCategoryFilters() {
    categoryElements.forEach(categoryElement => {
        categoryElement.addEventListener('click', () => {
            const category = categoryElement.getAttribute('data-category');
            
            categoryElements.forEach(el => el.classList.remove('active'));
            categoryElement.classList.add('active');
            
            currentCategory = category;
            filterWebsites();
        });
    });
}

function setupSearch() {
    searchInput.addEventListener('input', () => {
        filterWebsites();
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterWebsites();
        }
    });
}



function init() {
    setupSearch();
    filterWebsites();
    
    console.log('导航站初始化完成');
    console.log('当前网站数量:', websites.length);
}

function loadBackgroundImage() {
    const backgroundOverlay = document.querySelector('.background-overlay');
    if (!backgroundOverlay) return;
    
    const img = new Image();
    img.src = 'main.jpg';
    
    img.onload = function() {
        backgroundOverlay.classList.add('loaded');
        console.log('背景图片加载完成');
    };
    
    img.onerror = function() {
        console.log('背景图片加载失败，使用默认背景');
        backgroundOverlay.classList.add('loaded');
    };
}

document.addEventListener('DOMContentLoaded', function() {
    init();
    loadBackgroundImage();
});