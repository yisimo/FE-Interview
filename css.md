1  盒模型：
  box-sizing：content-box (标准盒模型)｜ border-box （IE盒模型）
  标准：内容宽度＝width
  IE：内容宽度＝width － border － margin － padding

2 BFC：块级格式化上下文
  触发条件：display：inline-block/table
          float: left/right
          overflow: hidden  
          position: absolute/fixed 
          IE下：zoom：1  

  应用场景：
  1解决浮动元素父元素高度坍塌
  2组织margin重叠
  3避免元素被浮动元素覆盖
  4自适应两列布局

3 层叠上下文
  

4 剧中布局
  水平剧中：
  行内元素：text-align:center
  块级元素：margin:0 auto
  display:flex; justify-content:center
  position:absolute; transform: translate(－50% －50%)
  垂直剧中：
  display:table-cell;vertical-align:middle
  line-height:height
  display:flex; align-items:center
  position:absolute; transform: translate(－50% －50%)

5 选择器优先级
  !important > 行内 > id > class > tag > 继承

6 清楚浮动
  创建空div，clear：both
  父元素：over－flow:hidden
  父元素设置高度

7 link和@import区别
  link可以用来引入其他文件，rss等，@import只能引入css
  link可以用js动态加载，@import不行
  link引入的css可以和页面同时加载，@import需要等页面加载完再加载css

8 CSS预处理器（sass／less）
  CSS预处理器的原理: 是将类 CSS 语言通过 Webpack 编译 转成浏览器可读的真正 CSS。在这层编译之上，便可以赋予 CSS 更多更强大的功能
   1 变量使用
   2 嵌套
   3 标识符&
   4 群组嵌套
   5 混合器
   6 继承
   混合器会导致属性重复，css体积大，继承只继承css规则，不继承重复属性
