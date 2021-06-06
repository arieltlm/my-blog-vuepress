(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{201:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"content"},[this._m(0),this._m(1),t("p",[this._v("在vue demo中测试了此css调试工具，初次test，还没感觉到很大的用处，以后项目过程中加上再试。")]),t("p",[t("a",{attrs:{href:"https://github.com/lucagez/Debucsser",target:"_blank",rel:"noopener noreferrer"}},[this._v("Debucsser github"),t("OutboundLink")],1)]),this._m(2),this._m(3),this._m(4)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"debucsser测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debucsser测试","aria-hidden":"true"}},[this._v("#")]),this._v(" debucsser测试")])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("2018-01-28")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),n("p",[s._v("引用：")]),n("p",[s._v("debucsser是一个简单的CSS调试工具，在您的工作流程中不太引人注目。")]),n("p",[s._v("我经常发现自己在页面上的许多元素上应用一个“大纲”来查看它们的尺寸。")]),n("p",[s._v("使用debugsser，我只需按住ctrl并移动鼠标，就可以在px中查看维度，并对我悬停的每个元素应用一个outline类。")]),n("p",[s._v("如果按住ctrl+shift，则通过添加全局类将大纲类应用于页面上的所有元素。")]),n("p",[s._v("您可以配置一些参数。")]),n("p",[s._v("我发现可以方便地指定一个自定义类，我想应用于不同的元素，而不需要注释和取消注释我的CSS文件。")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("// debugcss.js")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("// only if you installed via NPM")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Debucsser "),n("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'debucsser'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("// pass all the custom properties you want")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    color"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'palevioletred'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// color of the outline")]),s._v("\n    width"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'4px'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// width of the outline")]),s._v("\n    grayscaleOnDebugAll"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("true")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// apply grayscale filter to every element")]),s._v("\n    customClass"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("''")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// a class existent in your stylesheet 给元素统一增加一个自定义的样式")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// init the debugger")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("/* eslint-disable */")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" debug "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[s._v("Debucsser")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("init")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("default")]),s._v(" debug"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("使用时在main中"),t("code",[this._v("import debug from './debugcss'")]),this._v(";")])}],!1,null,null,null);t.default=e.exports}}]);