# 導航頁 - 磨砂玻璃風格

一個現代化的導航頁面，採用磨砂玻璃 UI 設計，專門用於展示朋友在 B 站關注的 Vup。

## ✨ 功能特性

- 🎨 **磨砂玻璃 UI** - 使用 CSS `backdrop-filter` 實現的毛玻璃效果
- 📺 **Vup 導航** - 專門展示 B 站 Vup 直播鏈接
- 🔍 **智能搜尋** - 實時搜尋 Vup 名稱和描述
- 📱 **響應式設計** - 完美適配各種屏幕尺寸
- ⭐ **Font Awesome 圖標** - 使用 Font Awesome 6.4.0 圖標庫
- 🖼️ **自訂背景** - 支援自訂背景圖片
- 🔒 **隱私保護** - 防止搜尋引擎索引
- 🔗 **GitHub 連結** - 項目源代碼倉庫

## 📊 技術棧

| 技術 | 佔比 | 說明 |
|------|------|------|
| CSS | 53.2% | 樣式、磨砂玻璃效果、響應式佈局 |
| JavaScript | 31.0% | 互動功能、搜尋過濾、動態渲染 |
| HTML | 15.8% | 語義化標籤結構 |

## 📁 項目結構

```
Kizuki---Navigation-Page/
├── index.html          # 主頁面
├── style.css           # 樣式文件
├── script.js           # 互動腳本
├── main.jpg            # 背景圖片
├── vercel.json         # Vercel 部署配置
└── README.md           # 說明文檔
```

## 🛠️ 技術實現

### 核心特性
1. **磨砂玻璃效果** - 使用 `backdrop-filter: blur()` 實現
2. **背景圖片優化** - 預加載圖片，加載完成後平滑顯示，避免刷新黑屏
3. **搜尋過濾** - 實時過濾 Vup 列表
4. **防止索引** - 添加 `<meta name="robots">` 標籤防止搜尋引擎收錄
5. **GitHub 連結** - 頁腳添加 GitHub 倉庫連結

### 圖標庫
- Font Awesome 6.4.0
- 通過 CDN 加載，確保圖標穩定顯示

## 🚀 使用方法

### 本地運行

**方式一：直接在瀏覽器中打開**
```bash
# 直接打開 index.html
open index.html
```

**方式二：使用 HTTP 服務器**
```bash
# 使用 Python 3
python -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000
```

然後在瀏覽器中訪問 `http://localhost:8000`

### 功能說明
- **搜尋功能** - 在右上角搜尋框中輸入關鍵詞，實時過濾 Vup 列表
- **點擊跳轉** - 點擊任意 Vup 卡片，會在新標籤頁打開 B 站直播間
- **背景優化** - 背景圖片加載完成後平滑顯示，避免刷新黑屏
- **GitHub 連結** - 點擊頁腳 GitHub 圖標訪問項目源代碼

## ⚙️ 自訂配置

### 修改 Vup 列表
編輯 `script.js` 文件中的 `websites` 數組：

```javascript
const websites = [
    {
        id: 1,
        name: "Vup名稱",
        description: "描述",
        url: "直播間連結",
        category: "分類",
        icon: "fas fa-tv"
    },
    // 更多 Vup...
];
```

### 更換背景圖片
1. 將新圖片命名為 `main.jpg`
2. 替換項目根目錄下的 `main.jpg` 文件
3. 確保圖片尺寸合適（建議 3840x2160 或類似比例）

### 修改樣式
編輯 `style.css` 文件：
- **調整磨砂玻璃效果** - 修改 `.background-overlay` 的 `filter` 屬性
- **修改顏色方案** - 調整各元素的顏色值
- **調整佈局** - 修改容器尺寸和間距

## 🚀 部署到 Vercel

項目已配置 Vercel 部署：

1. 將項目推送到 GitHub 倉庫
2. 在 [Vercel](https://vercel.com) 中導入 GitHub 倉庫
3. 自動部署，無需額外配置

部署後訪問地址：https://kizuki-navigation-page.vercel.app

## ⚠️ 注意事項

1. **瀏覽器相容性** - 磨砂玻璃效果需要現代瀏覽器支持
2. **圖片優化** - 背景圖片建議壓縮以加快加載速度
3. **隱私保護** - 已添加防止搜尋引擎索引的 meta 標籤
4. **圖標顯示** - 需要網路連接以加載 Font Awesome 圖標庫
5. **文件協議限制** - 本地打開時可能遇到瀏覽器安全限制，建議使用 HTTP 服務器

## 📝 更新記錄

### 最新版本 (2026-05-25)
- ✅ 重新編寫 README，使用繁體中文
- ✅ 添加語言組成統計表
- ✅ 改進文檔結構和格式
- ✅ 新增 Vercel 部署連結示例
- ✅ 更新版本控制資訊

### 歷史更新
- 簡化設計，專注於 Vup 導航
- 移除語言切換功能
- 優化背景圖片加載體驗
- 添加 GitHub 倉庫連結
- 添加防止搜尋引擎索引功能

## 📦 相關連結

- **項目倉庫** - https://github.com/Kizuki-TaiPei/Kizuki---Navigation-Page
- **在線訪問** - https://lzg.kizuki.wiki/

## 🎓 貢獻

歡迎提交 Issues 和 Pull Requests！

## 📄 許可證

© 2026 Kizuki Technology. All Rights Reserved.
