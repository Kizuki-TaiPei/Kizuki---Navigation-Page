# 导航站 - 磨砂玻璃风格

一个现代化的导航站，采用磨砂玻璃UI设计，专门用于展示朋友在B站关注的Vup。

## 功能特性

- 🎨 **磨砂玻璃UI** - 使用CSS backdrop-filter实现的毛玻璃效果
- 📺 **Vup导航** - 专门展示B站Vup直播链接
- 🔍 **搜索功能** - 实时搜索Vup名称和描述
- 📱 **响应式设计** - 适配各种屏幕尺寸
- ⭐ **Font Awesome图标** - 使用Font Awesome图标库
- 🖼️ **自定义背景** - 支持自定义背景图片
- 🔒 **隐私保护** - 防止搜索引擎索引
- 🔗 **GitHub链接** - 项目源代码仓库

## 项目结构

```
daohangzhan/
├── index.html          # 主页面
├── style.css          # 样式文件
├── script.js          # 交互脚本
├── main.jpg           # 背景图片
├── vercel.json        # Vercel部署配置
└── README.md          # 说明文档
```

## 技术实现

### 前端技术
- **HTML5** - 语义化标签结构
- **CSS3** - 磨砂玻璃效果、响应式布局、过渡动画
- **JavaScript** - 动态内容渲染、搜索过滤、交互功能

### 核心特性
1. **磨砂玻璃效果**：使用`backdrop-filter: blur()`实现
2. **背景图片优化**：预加载图片，加载完成后平滑显示，避免刷新黑屏
3. **搜索过滤**：实时过滤Vup列表
4. **防止索引**：添加`<meta name="robots">`标签防止搜索引擎收录
5. **GitHub链接**：页脚添加GitHub仓库链接

### 图标库
- 使用Font Awesome 6.4.0图标库
- 通过CDN加载，确保图标稳定显示

## 使用方法

### 本地运行
1. 直接在浏览器中打开 `index.html` 文件
2. 或使用HTTP服务器：
   ```bash
   # 使用Python
   python -m http.server 8000
   ```

### 功能说明
1. **搜索功能**：在右上角搜索框中输入关键词，实时过滤Vup列表
2. **点击跳转**：点击任意Vup卡片，会在新标签页打开B站直播间
3. **背景优化**：背景图片加载完成后平滑显示，避免刷新黑屏
4. **GitHub链接**：点击页脚GitHub图标访问项目源代码

## 自定义配置

### 修改Vup列表
编辑 `script.js` 文件中的 `websites` 数组：
```javascript
const websites = [
    {
        id: 1,
        name: "Vup名称",
        description: "描述",
        url: "直播间链接",
        category: "分类",
        icon: "fas fa-tv"
    },
    // 更多Vup...
];
```

### 更换背景图片
1. 将新图片命名为 `main.jpg`
2. 替换项目根目录下的 `main.jpg` 文件
3. 确保图片尺寸合适（建议3840x2160或类似比例）

### 修改样式
编辑 `style.css` 文件：
- 调整磨砂玻璃效果：修改`.background-overlay`的`filter`属性
- 修改颜色方案：调整各元素的颜色值
- 调整布局：修改容器尺寸和间距

## 部署到Vercel

项目已配置Vercel部署：
1. 将项目推送到GitHub仓库
2. 在Vercel中导入GitHub仓库
3. 自动部署，无需额外配置

## 注意事项

1. **浏览器兼容性**：磨砂玻璃效果需要现代浏览器支持
2. **图片优化**：背景图片建议压缩以加快加载速度
3. **隐私保护**：已添加防止搜索引擎索引的meta标签
4. **图标显示**：需要网络连接以加载Font Awesome图标库
5. **文件协议限制**：本地打开时可能遇到浏览器安全限制，建议使用HTTP服务器

## 更新记录

### 当前版本
- 简化设计，专注于Vup导航
- 移除语言切换功能
- 优化背景图片加载体验
- 添加GitHub仓库链接
- 添加防止搜索引擎索引功能

## GitHub仓库

项目源代码：https://github.com/Kizuki-TaiPei/Kizuki---Navigation-Page

## 许可证

© 2026 Kizuki Technology. All Rights Reserved.
