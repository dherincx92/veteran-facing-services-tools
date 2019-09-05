(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{355:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return l}),a.d(n,"_frontmatter",function(){return i});a(10),a(9),a(5),a(19),a(8);var t=a(1),o=a.n(t),r=a(2),m=a(397);var c={},l=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=m.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,a),components:n},o.a.createElement("h1",{id:"adding-a-collection-of-related-links-for-markdown-pages"},"Adding a collection of related links for Markdown pages"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Our current publishing system, Metalsmith, provides a way to group related content using what it calls ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"collections"),". Using collections requires the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"metalsmith-collections")," plugin (",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/segmentio/metalsmith-collections"}},"documentation"),")."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Content grouped within a collection is displayed in the sidebar navigation, and the next/previous links. Next and previous links are set based on the sorting order (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sortBy")," property of the collection; see below)"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Viewing ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/site/components/navigation-sidebar.html")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/site/components/navigation-next-previous.html")," ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"may")," clarify some of what's in this document."),o.a.createElement("h2",{id:"add-a-new-collection"},"Add a new collection"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"em"},"NOTE"),": Content team, you may wish to file a request with the DevOps team for this task.")),o.a.createElement(r.MDXTag,{name:"p",components:n},"To create a new collection, add a new collection object to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website/script/build.js"),"."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  smith.use(collections({\n    collectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection 1'\n      }\n    },\n    secondCollectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection two'\n      }\n    }\n  }));\n")),o.a.createElement("h3",{id:"what-each-field-means"},"What each field means:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"collectionName"),": should be a camel-cased or snake cased string that summarizes the name of the related documents.")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pattern"),": should be a directory a relative to the site root (without a leading slash), and end with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.md")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.html")," (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*")," is a ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"wildcard")," character that will match every file with an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".md")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.html")," extension.)")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sortBy"),": is any current YAML property used in the front matter metadata (front matter data is the stuff between the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"---")," at the beginning of each content file). This should be:"),o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"order")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"title")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"display_title")))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"metadata"),": must be a JavaScript object that contains a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name")," property. This field is optional. You may add additional properties as here."))),o.a.createElement("h3",{id:"adding-files-to-a-collection-even-when-it-is-not-in-the-collection-path"},"Adding files to a collection even when it is not in the collection path"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Collections can also be defined or augmented by adding a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"collection")," property to front matter fields. For example:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\n---\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"In general you should:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Use a collection objects to configure collections.")," Items within a collection directory will be added to the collection automatically"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Add a collection property to include an index or other file")," in the collection. For example, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"exposure-to-hazardous-materials/agent-orange.md")," is also an index page for several Agent Orange-related disability pages and should have a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"disabilityExposureHazMat")," property.")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"NOTE:")," Adding a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"collection")," property in YAML will not override a path-based collection value. You'll actually need to move the file."),o.a.createElement("h2",{id:"ordering-pages-within-a-collection"},"Ordering pages within a collection"),o.a.createElement(r.MDXTag,{name:"p",components:n},"When defining a collection, you may choose to sort pages by date, or by title. In many cases, however, the desired page order may not use either of those fields."),o.a.createElement(r.MDXTag,{name:"p",components:n},"To control the order of display within a collection, add an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"order")," property to the front matter of each page."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The value of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"order")," should be a number. Pages will be ordered in ascending order."),o.a.createElement("h2",{id:"adding-a-child-collection"},"Adding a child collection"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Collections do not have a hierarchy by default. Create one by adding a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," property to the parent page or index page of a child collection."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\nchildren: disabilityAgentOrange\norder: 1\n---\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," should be the identifier for the child collection."),o.a.createElement("h2",{id:"current-collections-and-hierarchy"},"Current collections and hierarchy"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"See vets-website/script/build.js"),"."),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Label"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Path"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Child collection(s)"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"disabilityExposureHazMat")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"disability-benefits/conditions/exposure-to-hazardous-materials/*.md"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"disabilityAgentOrange"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"disabilityAgentOrange")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"disability-benefits/conditions/exposure-to-hazardous-materials/agent-orange/*.md"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"–")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"education")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"education/*.md"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"educationGIBill"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"educationGIBill")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"education/gi-bill/*.md"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"–")))))},t}(o.a.Component),i={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,a){"use strict";var t=a(1),o=a.n(t),r=a(400),m=(a(130),a(131),a(184),a(6),a(396)),c=a(398);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(s,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function s(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(i,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(s,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(i,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var p=a(399),d=a.n(p);function g(e){var n=e.location,a=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(s,{items:a.items}))):null}function u(e){var n=e.children,a=e.location;return o.a.createElement(r.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return u})}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-collections-mdx-d1f3463d76188fb9de32.js.map