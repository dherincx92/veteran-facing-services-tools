(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{317:function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return r}),o.d(n,"pageQuery",function(){return s});var t=o(1),a=o.n(t),c=o(397);var r=function(e){var n,o;function t(){return e.apply(this,arguments)||this}return o=e,(n=t).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o,t.prototype.render=function(){var e=this.props,n=e.data,o=e.location;return a.a.createElement(c.a,{location:o},a.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:n.markdownRemark.html}}))},t}(t.Component),s="666931849"},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,o){"use strict";var t=o(1),a=o.n(t),c=o(400),r=(o(130),o(131),o(184),o(6),o(396)),s=o(398);function m(){return a.a.createElement(s.b,{query:"157057713",render:function(e){return a.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:r})}function i(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(s.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function p(e){var n=e.items,o=e.isSublist,t=void 0!==o&&o;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},t&&a.a.createElement(i,{item:e}),!t&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},t&&a.a.createElement(i,{item:e}),!t&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(m,null)):a.a.createElement(i,{item:e,key:e.name})})):null}var l=o(399),u=o.n(l);function d(e){var n=e.location,o=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return o?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(p,{items:o.items}))):null}function h(e){var n=e.children,o=e.location;return a.a.createElement(c.a,{location:o},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(d,{location:o}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}o.d(n,"a",function(){return h})}}]);
//# sourceMappingURL=component---src-layouts-external-layout-js-fa87bd516f0ef0fb82c4.js.map