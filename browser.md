1. 跨标签页通讯
1 本地存储：localstorage
2 setInterval 轮询检查

2. 从输入 url 到展示的过程

DNS 解析
TCP 三次握手
发送请求，分析 url，设置请求报文(头，主体)
服务器返回请求的文件 (html)
浏览器渲染 
HTML parser --> DOM Tree 
标记化算法，进行元素状态的标记
dom 树构建
CSS parser --> Style Tree 
解析 css 代码，生成样式树
attachment --> Render Tree 
结合 dom树 与 style树，生成渲染树
layout: 布局
GPU painting: 像素绘制页面

3. 重绘与回流

重绘(repaint): 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要UI层面的重新像素绘制，因此 损耗较少
回流(reflow): 当元素的尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。
触发回流：
页面初次渲染
浏览器窗口大小改变
元素尺寸、位置、内容发生改变
元素字体大小变化
添加或者删除可见的 dom 元素
激活 CSS 伪类（例如：:hover）

回流必定触发重绘，重绘不一定触发回流。重绘的开销较小，回流的代价较高。

