(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{336:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(43);var o=t(44),a=t.n(o),s=t(3),r=t.n(s),c=t(2),m=t.n(c),i=t(4),l=t(363),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return m.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},m.a.createElement("h1",{id:"guidelines-for-good-scss--css"},"Guidelines for good SCSS / CSS"),m.a.createElement(i.MDXTag,{name:"p",components:n},"Some guidelines for writing good CSS that scales well and doesn't make your colleagues ragey."),m.a.createElement("h2",{id:"use-low-specificity-selectors"},"Use low-specificity selectors"),m.a.createElement(i.MDXTag,{name:"p",components:n},"The more specific the selector is, the less reusable the accompanying CSS is and/or the longer a selector you need to override it. (Or you add ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"!important")," in places you shouldn't.)"),m.a.createElement(i.MDXTag,{name:"p",components:n},"The following should be used sparingly in CSS"),m.a.createElement(i.MDXTag,{name:"ul",components:n},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"id")," selectors."),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Complex element/type selectors with attributes such as ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"button[type=button]")," and ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"input[type=text]"),"."),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Descendant combinators such as ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"#main ol li ul")," or ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".process p a"),"."),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Chaining class names. ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"button")," and ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"button.lg"),")")),m.a.createElement(i.MDXTag,{name:"p",components:n},"High specificity selectors are more likely to create side effects, that have to be undone with more CSS rules or longer selectors."),m.a.createElement("h2",{id:"avoid-nesting-scss-selectors-prematurely"},"Avoid nesting SCSS selectors prematurely"),m.a.createElement(i.MDXTag,{name:"p",components:n},"SCSS compiles nested selectors into descendant combinators. For example:"),m.a.createElement(i.MDXTag,{name:"pre",components:n},m.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"#content {\n  ol {\n    p {}\n  }\n}\n")),m.a.createElement(i.MDXTag,{name:"p",components:n},"Compiles to:"),m.a.createElement(i.MDXTag,{name:"pre",components:n},m.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"#content ol p {}\n")),m.a.createElement(i.MDXTag,{name:"p",components:n},"There's a high likelihood, however that your selectors don't need to be that long; ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ol p")," would provide the same styling. If the worry is being overly broad, you can get the same results using a class name. This is related to the previous point. Specific selectors are often caused by SCSS nesting."),m.a.createElement(i.MDXTag,{name:"p",components:n},"Nesting selectors can be useful, however, when creating variants. For example:"),m.a.createElement(i.MDXTag,{name:"pre",components:n},m.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".button {\n  &-link {\n  }\n}\n")),m.a.createElement(i.MDXTag,{name:"p",components:n},"Compiles to ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"button-link"),"."),m.a.createElement("h2",{id:"restrict-class-names-to-a-single-pattern-or-component-type"},"Restrict class names to a single pattern or component type."),m.a.createElement(i.MDXTag,{name:"p",components:n},"For example, don't use ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".process")," for lists ",m.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"and")," as a ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div")," or ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"section")," type. Rules you introduce for ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div.process")," probably aren't related to those for ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ol.process"),". Instead use ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".list-process")," and ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".section-process"),"."),m.a.createElement("h2",{id:"favor-descriptive-class-names-that-describe-what-the-class-does-or-the-kind-of-content-it-affects"},"Favor descriptive class names that describe what the class does or the kind of content it affects"),m.a.createElement(i.MDXTag,{name:"p",components:n},"Class names such as ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".primary"),", or ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".section")," are confusing and more likely to be misused by a colleague than ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".intro-text")," or ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".sidebar"),"."),m.a.createElement("h2",{id:"use-a-product-specific-prefix-to-avoid-class-name-collisions"},"Use a product-specific prefix to avoid class name collisions"),m.a.createElement(i.MDXTag,{name:"p",components:n},"This keeps selector specificity low, while also restricting the side-effects of any one selector."),m.a.createElement("h2",{id:"dont-use-extend"},"Don't use @extend"),m.a.createElement(i.MDXTag,{name:"p",components:n},"SCSS ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@extend")," repeats every instance of the extended selector for the extendee selector. (This will be flagged by our Sass-lint configuration.)"),m.a.createElement(i.MDXTag,{name:"pre",components:n},m.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"h4 {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100;\n}\n\nlabel {\n  @extend h4;\n  cursor: pointer;\n}\n\n.footer h4 {\n  display: inline;\n}\n")),m.a.createElement(i.MDXTag,{name:"p",components:n},"Compiles to:"),m.a.createElement(i.MDXTag,{name:"pre",components:n},m.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"h4, label {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100; }\n\nlabel {\n  cursor: pointer; }\n\n.header h4, .header label {\n  font-weight: bold; }\n\n.footer h4, .footer label {\n  display: inline; }\n")),m.a.createElement(i.MDXTag,{name:"p",components:n},"Every instance of ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"h4")," will also be applied to ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"label"),". This is usually not the behavior we want, particularly across an entire code base."),m.a.createElement("h1",{id:"check-your-output"},"CHECK. YOUR. OUTPUT."),m.a.createElement(i.MDXTag,{name:"p",components:n},"Periodially check your generated CSS files (JavaScript too!) to ensure that you didn't introduce bloat with your selectors or asset imports."),m.a.createElement(i.MDXTag,{name:"p",components:n},"True story: we reduced the size of our home page CSS by ~400K by removing SVG fonts. Our Webpack configuration included base64-encoded versions of SVG fonts which dramatically inflated our file size. This fact was discovered only after viewing the generated CSS files."))},n}(m.a.Component),u={}},362:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}}]}}}},363:function(e,n,t){"use strict";var o=t(2),a=t.n(o),s=t(14),r=t.n(s),c=t(366),m=(t(141),t(142),t(143),t(21),t(362)),i=t(364);function l(){return a.a.createElement(i.b,{query:"157057713",render:function(e){return a.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(i.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,null)):a.a.createElement(p,{item:e,key:e.name})})):null}var u=t(365),g=t.n(u);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(d,{items:t.items}))):null}function E(e){var n=e.children,t=e.location;return a.a.createElement(c.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(h,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return E}),E.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-styles-mdx-3befedf92f44a05e9f7f.js.map