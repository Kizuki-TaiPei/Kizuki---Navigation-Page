# 导航站 - 磨砂玻璃风格

一个现代化的导航站，采用磨砂玻璃UI设计，使用阿里巴巴图标库。

## 功能特性

- 🎨 **磨砂玻璃UI** - 使用CSS backdrop-filter实现的毛玻璃效果
- 🏷️ **分类导航** - 按工作、学习、娱乐、工具、社交分类
- 🔍 **搜索功能** - 实时搜索网站名称和描述
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🎯 **阿里巴巴图标库** - 使用iconfont.cn的图标
- 🖼️ **自定义背景** - 支持自定义背景图片

## 项目结构

```
daohangzhan/
├── index.html          # 主页面
├── style.css          # 样式文件
├── script.js          # 交互脚本
├── girl_cloak_road_1075362_3840x2160.jpg  # 背景图片
├── vercel.json        # Vercel部署配置
└── README.md          # 说明文档
```

## 使用方法

### 本地运行

1. 直接在浏览器中打开 `index.html` 文件
2. 或使用任何HTTP服务器：
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx serve .
   ```

### 部署到Vercel

1. 安装Vercel CLI：
   ```bash
   npm i -g vercel
   ```

2. 部署项目：
   ```bash
   vercel
   ```

3. 或通过GitHub部署：
   - 将项目推送到GitHub仓库
   - 访问 [vercel.com](https://vercel.com)
   - 导入GitHub仓库
   - 自动部署完成

## 自定义配置

### 修改网站列表

编辑 `script.js` 文件中的 `websites` 数组：

```javascript
const websites = [
    {
        id: 1,
        name: "网站名称",
        description: "网站描述",
        url: "https://example.com",
        category: "分类",
        icon: "icon-图标名称"
    },
    // 更多网站...
];
```

### 修改分类

编辑 `script.js` 文件中的 `categories` 数组：

```javascript
const categories = [
    { id: "all", name: "全部", icon: "icon-apps" },
    { id: "work", name: "工作", icon: "icon-work" },
    // 更多分类...
];
```

### 更换背景图片

1. 将新的背景图片放入项目根目录
2. 修改 `style.css` 文件中的背景图片路径：
   ```css
   .background-overlay {
       background-image: url('你的图片文件名.jpg');
   }
   ```

### 使用自定义图标库

1. 访问 [iconfont.cn](https://www.iconfont.cn)
2. 创建图标项目并添加图标
3. 获取CSS链接
4. 修改 `index.html` 中的图标库链接：
   ```html
   <link rel="stylesheet" href="你的图标库链接.css">
   ```

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, backdrop-filter)
- JavaScript (ES6+)
- 阿里巴巴图标库 (iconfont)
- Google Fonts (Inter字体)

## 浏览器支持

- Chrome 76+
- Firefox 70+
- Safari 13+
- Edge 79+

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request！

## 联系

如有问题或建议，请通过GitHub Issues反馈。