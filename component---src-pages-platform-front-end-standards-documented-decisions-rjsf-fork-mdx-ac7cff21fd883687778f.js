(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{364:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m}),t.d(n,"_frontmatter",function(){return i});t(10),t(9),t(5),t(19),t(8);var a=t(1),o=t.n(a),r=t(2),s=t(397);var c={},m=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},o.a.createElement("h1",{id:"moving-to-a-fork-of-rjsf"},"Moving to a fork of RJSF"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Decision Made:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Yes"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Decision Date:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"03/2018")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Revisit Decision:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Yes"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"Revisit Date:")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"July 2018")))),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Revisit Criteria:")," As of 3/2018, we're just starting our fork. After using it for a couple months, we should revist and make sure it's still the best path."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Decision Makers:")," @annekainicUSDS @jbalboni"),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement("h2",{id:"tldr"},"tl;dr"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We've diverged from the react-jsonschema-form functionality enough that forking the library is the best way to continue improving our form building process."),o.a.createElement("h2",{id:"history"},"History"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We've been using a set of components built on top of RJSF for all of our longer forms. This has been working pretty well, but in the process of upgrading RJSF to work with a newer version of React, we've run into several issues. These issues, coupled with the fact that we use very little of the RJSF code currently, suggest that forking is the better option"),o.a.createElement("h2",{id:"breaking-or-suboptimal-changes-in-the-latest-rjsf-version"},"Breaking or suboptimal changes in the latest RJSF version"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Switched JSON Schema validators from jsonschema to ajv. The ajv validator is faster and has more detailed error output, but is also much larger. It nearly doubles the size of RJSF. We have not run into any major issues with jsonschema and one of our goals is to reduce the bundle size of our forms."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Moved defaulting logic out of widgets. This means that all of our widgets now get form data that has empty records, which is contrary to how they were written. It makes it harder to determine when a field is actually empty vs. just defaulted."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Maintains internal state for form data. This is not new, but it causes bugs in our application with autofill, because rapid onChange events can cause stale data to overwrite the current form info. This is a design choice, so it's not really a bug to fix in the library."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"There's a bug in how the default logic for arrays with minItems works. This is fixable in the library and we've submitted a PR, but since we can't update to the latest version due to the above issues, we can't pull it in."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Similarly, we need the changes that have been made to support React 16, but those are post some of the above changes.")),o.a.createElement("h2",{id:"pros"},"Pros"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"We have more control over the code for our forms, making it easier to fix bugs"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Forking addresses all of the above issues"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"We can remove widget and field code that we don't use, making it easier for us to maintain. Eventually that may mean getting away from a separate library entirely.")),o.a.createElement("h2",{id:"cons"},"Cons"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"We take on extra maintenance burden, since this is not code we initially developed. This could include things like security issues.")),o.a.createElement("h2",{id:"example-of-an-alternative-approach"},"Example of an alternative approach"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We could attempt to move to the latest version and push for the above changes in the main repo, but it's not guaranteed that we could be successful, or even that all of our changes make sense for the main library."),o.a.createElement("h2",{id:"decision"},"Decision"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We're going to fork RJSF."))},a}(o.a.Component),i={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,t){"use strict";var a=t(1),o=t.n(a),r=t(400),s=(t(130),t(131),t(184),t(6),t(396)),c=t(398);function m(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(m,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var p=t(399),u=t.n(p);function d(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(d,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return g})}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-rjsf-fork-mdx-ac7cff21fd883687778f.js.map