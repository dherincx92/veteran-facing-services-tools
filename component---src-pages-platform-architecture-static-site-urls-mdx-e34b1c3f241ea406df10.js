(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{357:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s}),t.d(n,"_frontmatter",function(){return i});t(10),t(9),t(5),t(19),t(8);var o=t(1),a=t.n(o),r=t(2),c=t(397);var m={},s=function(e){var n,t;function o(n){var t;return(t=e.call(this,n)||this).layout=c.a,t}return t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,o.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,t),components:n},a.a.createElement("h1",{id:"how-are-urls-created"},"How Are URLs Created?"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Understanding how content URLs are generated by Metalsmith helps prevent build errors. Here's how it works."),a.a.createElement("h2",{id:"pages-in-vagov-content"},"Pages in vagov-content"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Document paths are based on the Markdown file paths."),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Each Markdown file generates a corresponding directory and ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"index.html")," file. For example:",a.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_education/tools-programs.md")," ","→"," ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/education/tools-programs/index.html")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_education/tools-programs/index.md")," ","→"," ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/education/tools-programs/index.html")),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_education/work-learn/non-traditional.md")," ","→"," ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_education/work-learn/non-traditional/index.html"))))),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"em"},"Make sure that every collection sub-directory also has a Markdown file that shares its name."))," Take the the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"_employment/job-seekers/")," directory as an example. It also has an ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"_employment/job-seekers.md")," file. Each Markdown file in ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"_employment/job-seekers/")," compiles to  ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"employment/jobs-seekers/name_of_markdown_file/index.html"),", while ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"_employment/job-seekers.md")," itself compiles to ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"employment/job-seekers/index.html"),"."),a.a.createElement(r.MDXTag,{name:"p",components:n},"Failing to take the above step means that you could generate breadcrumbs to pages that do not exist."),a.a.createElement("h2",{id:"pages-in-drupal"},"Pages in Drupal"),a.a.createElement(r.MDXTag,{name:"p",components:n},"In Drupal, URLs are created based off the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entityUrl.path")," property included on each node. Similar to vagov-content pages, an index.html page is appended to that path, so that urls can reference just the path without an html extension."))},o}(a.a.Component),i={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,t){"use strict";var o=t(1),a=t.n(o),r=t(400),c=(t(130),t(131),t(184),t(6),t(396)),m=t(398);function s(){return a.a.createElement(m.b,{query:"157057713",render:function(e){return a.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function i(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(m.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(i,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(i,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(s,null)):a.a.createElement(i,{item:e,key:e.name})})):null}var p=t(399),d=t.n(p);function u(e){var n=e.location,t=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(l,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return a.a.createElement(r.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(u,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return g})}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-urls-mdx-e34b1c3f241ea406df10.js.map