(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{372:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return i}),t.d(n,"_frontmatter",function(){return m});t(10),t(9),t(5),t(19),t(8);var o=t(1),a=t.n(o),r=t(2),s=t(397);var c={},i=function(e){var n,t;function o(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,o.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},a.a.createElement("h2",{id:"about-the-platform"},"About the platform"),a.a.createElement(r.MDXTag,{name:"p",components:n},"In this documentation we will discuss our platform and how it is setup, This Platform section will detail\nspecifics on how things work, site structure, architecture, tools, technologies, and any relavent\ninformation regarding the platform."),a.a.createElement(r.MDXTag,{name:"p",components:n},"The platform is made up of 4 major components."),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"MetalSmith"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"React/Redux"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Drupal CMS"),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"TeamSite")),a.a.createElement("h3",{id:"metalsmith"},"MetalSmith"),a.a.createElement(r.MDXTag,{name:"p",components:n},"MetalSmith is a static site generator made from Node.js. It is based off a plugin architecture which\nmakes it very flexible when needing to customize the build process or integrating other systems into it."),a.a.createElement("h3",{id:"reactredux"},"React/Redux"),a.a.createElement(r.MDXTag,{name:"p",components:n},"React is a front-end single page application library that helps you create painless interactive UIs.\nWe use React in our platform to create web components and also individual applications within the website.\nThe React applications are injected into specific pages. All applications can be found in ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/applications"),".\nWe use Redux to manage our data and the state of that data."),a.a.createElement("h3",{id:"drupal-cms"},"Drupal CMS"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Drupal content is retrieved via GraphQL and pushed into the Metalsmith pipeline with a custom plugin,\nwhere it is then transformed into static html pages using Liquid templates."),a.a.createElement("h3",{id:"teamsite"},"TeamSite"),a.a.createElement(r.MDXTag,{name:"p",components:n},"TeamSite is a content management system built with PERL. This is the original system VA.gov was built on. Vets.gov and VA.gov were merged and needed to be integrated to use both systems without feeling like different systems. Some webpages still live under TeamSite and will eventually get ported over into the new Platform. Some components are shared such as the the MegaMenu adn the Footer. These components are injected using a script to render on TeamSite pages."))},o}(a.a.Component),m={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,t){"use strict";var o=t(1),a=t.n(o),r=t(400),s=(t(130),t(131),t(184),t(6),t(396)),c=t(398);function i(){return a.a.createElement(c.b,{query:"157057713",render:function(e){return a.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function m(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(c.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(m,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(m,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(i,null)):a.a.createElement(m,{item:e,key:e.name})})):null}var p=t(399),u=t.n(p);function d(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(l,{items:t.items}))):null}function h(e){var n=e.children,t=e.location;return a.a.createElement(r.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(d,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return h})}}]);
//# sourceMappingURL=component---src-pages-platform-index-mdx-2a7ad29a7221b4ab1e4c.js.map