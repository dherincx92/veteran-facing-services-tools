(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{328:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(45);var o=t(46),a=t.n(o),r=t(3),s=t.n(r),c=t(2),i=t.n(c),m=t(4),l=t(370),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},i.a.createElement("h1",{id:"site-build-process"},"Site build process"),i.a.createElement(m.MDXTag,{name:"p",components:n},"The main build process for VA.gov is controlled with Metalsmith, which is a simple, plugin-based static site generator. We take content from two sources, the vagov-content repo and the VA's Drupal CMS, create pages based on that data plus templates, run a series of other plugins, and then output the resulting html pages."),i.a.createElement("h2",{id:"metalsmith-build-flow"},"Metalsmith build flow"),i.a.createElement("div",{className:"mermaid"},"graph TD\n1[Metalsmith build pipeline] --\x3e|Markdown from vagov-content| A\n1 --\x3e|Drupal content| K\nA[Create page objects from each Markdown file] --\x3eB[Convert Markdown to html]\nB --\x3e C[Generate sidebars for Markdown content]\nC--\x3e D[Add local static assets to pipeline]\nD --\x3e E[Apply layout templates to page data]\nE --\x3eF[Generate header/footer data]\nF --\x3e G[Create sitemap]\nG --\x3e H[Check for broken links]\nH --\x3e|Drupal pages| N[Download assets referenced in Drupal content from Drupal]\nH --\x3e|Markdown pages| I[Webpack build]\nN --\x3e I\nI --\x3e J[Write HTML/CSS/JS and other static files to build output folder]\nK[Query Drupal via GraphQL or fetch from local cache] --\x3e L[Create page objects from query results]\nL --\x3e D"),i.a.createElement(m.MDXTag,{name:"p",components:n},"There are other plugins than the ones listed in this diagram, but these are the most important ones. The process is very similar for Markdown and Drupal content, mostly differing in how the content is initially converted into page objects for Metalsmith to process."),i.a.createElement("h2",{id:"metalsmith-code-organization"},"Metalsmith code organization"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Metalsmith related code is located in ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/site"),". Most of the code in that folder are temlates for Drupal content. The build process code is located in ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/site/stages")," which contains Metalsmith plugins and GraphQL queries. "),i.a.createElement("h2",{id:"drupal-templates-vs-markdown-templates"},"Drupal templates vs Markdown templates"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Due to the differences in the shape of data in vagov-content vs Drupal, we have two different sets of templates, one for each source. There are some shared templates, but these are largely restricted to the header and footer templates. Drupal related templates end with ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".drupal.liquid")," and Markdown templates typically end with ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".html")," or ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".liquid"),"."))},n}(i.a.Component),u={}},369:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}}]}}}},370:function(e,n,t){"use strict";var o=t(2),a=t.n(o),r=t(15),s=t.n(r),c=t(373),i=(t(150),t(151),t(374),t(21),t(369)),m=t(371);function l(){return a.a.createElement(m.b,{query:"157057713",render:function(e){return a.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(m.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,null)):a.a.createElement(p,{item:e,key:e.name})})):null}var u=t(372),h=t.n(u);function g(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(d,{items:t.items}))):null}function v(e){var n=e.children,t=e.location;return a.a.createElement(c.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(g,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return v}),v.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-index-mdx-f5485634d6414e821a2e.js.map