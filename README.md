# interview
=========================
### 前端行业面试题汇总

#### 收集常见的前端面试套路

==========================

- HTML 常见标准
- CSS及 Less 等
- JavaScript 常见题目
- 工程化工具 Webpack Gulp...
- 三大框架
- 网络协议
- 前端职业发展及面试经验
- 掏粪工具箱
==========================
##### 注释

```
console (控制台)
  > developer (dev)
  > resource (build)

src (官网)
 > components (通用组件)
 > page (页面)
```

1. 通过JIRA任务创建feature或bugfix等分支。
2. 提测时将feature或bugfix分支merge到develop。
3. 测试确认后，merge develop到release(如果不同步发版 只合并相应的feature,bugfix等分支到release)。 
4. 线上验收完成后，release分支合并到master。

#### Development
```
sudo nginx
$ npm run dev // start for dev.
$ npm run test // start app for test. (官网本地调试同时开启dev和test)
```

#### Installation
1. [VS Code](https://code.visualstudio.com/)
    - [Keyboard shortcuts for macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
    - [Keyboard shortcuts for windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)