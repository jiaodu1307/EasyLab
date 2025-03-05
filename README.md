# 实验室物品管理系统

一个基于微信小程序的实验室物品管理系统，帮助实验室高效管理试剂、器材和耗材等物品。

## 功能特点

- 📊 **实时库存监控**
  - 总库存数量统计
  - 库存预警提醒
  - 物品临期提醒

- 🔍 **多样化查询方式**
  - 扫码查询
  - 语音搜索
  - 位置查看

- 📱 **便捷操作界面**
  - 清晰的数据展示
  - 快捷功能区
  - 最近操作记录

- 🗺️ **位置管理**
  - 物品位置可视化
  - 地图定位功能

## 技术栈

- 微信小程序原生框架
- MobX 状态管理
- 微信云开发
  - 云数据库
  - 云函数
  - 云存储

## 项目结构

```
├── cloudfunctions/    # 云函数目录
├── miniprogram/       # 小程序源码
│   ├── pages/         # 页面文件
│   ├── assets/        # 静态资源
│   ├── app.js         # 入口文件
│   ├── app.json       # 全局配置
│   └── app.wxss       # 全局样式
└── project.config.json # 项目配置文件
```

## 安装部署

1. 克隆项目到本地

2. 打开微信开发者工具，导入项目

3. 在 `app.js` 中配置云开发环境
   ```javascript
   wx.cloud.init({
     env: 'your-env-id',  // 替换为你的云开发环境ID
     traceUser: true
   });
   ```

4. 在 `project.config.json` 中更新小程序 AppID
   ```json
   {
     "appid": "your_appid_here"  // 替换为你的小程序AppID
   }
   ```

5. 部署云函数
   - 在微信开发者工具中，右键点击 `cloudfunctions` 目录下的云函数
   - 选择「上传并部署：云端安装依赖」

## 使用说明

1. **首页功能**
   - 查看库存统计数据
   - 使用快捷功能（扫码、地图、语音搜索）
   - 查看预警提醒
   - 浏览最近操作记录

2. **库存管理**
   - 查看完整库存清单
   - 管理物品信息
   - 设置库存预警阈值

3. **扫码功能**
   - 扫描物品二维码
   - 快速查看物品详情

4. **个人中心**
   - 查看个人信息
   - 管理操作权限

## 贡献指南

欢迎提交问题和改进建议！提交代码请遵循以下步骤：

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 版本历史

- 1.0.0
  - 初始版本发布
  - 基础功能实现

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 联系方式

如有问题或建议，欢迎提交 Issue 或 Pull Request。