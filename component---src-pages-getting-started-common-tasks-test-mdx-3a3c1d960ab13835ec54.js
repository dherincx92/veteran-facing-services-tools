(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{318:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(45);var a=t(46),o=t.n(a),r=t(3),m=t.n(r),s=t(2),c=t.n(s),p=t(4),l=t(368),i={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,t),components:n},c.a.createElement("h1",{id:"run-tests"},"Run tests"),c.a.createElement("h2",{id:"prerequisite"},"Prerequisite"),c.a.createElement(p.MDXTag,{name:"ul",components:n},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/getting-started/common-tasks/run-build"}},"Run or build")," the app")),c.a.createElement("h2",{id:"test-commands"},"Test commands"),c.a.createElement(p.MDXTag,{name:"table",components:n},c.a.createElement(p.MDXTag,{name:"thead",components:n,parentName:"table"},c.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"thead"},c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Test type"),c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Test all"),c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Test one"),c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Requires local build to run"),c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Test target"),c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Modules used"))),c.a.createElement(p.MDXTag,{name:"tbody",components:n,parentName:"table"},c.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Unit"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn test:unit")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn test:unit ./PATH-TO-TEST-FILE")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"no"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"*.unit.spec.js(x)")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://mochajs.org/"}},"Mocha"),", ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"http://chaijs.com/"}},"Chai"),", ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://sinonjs.org/"}},"Sinon"),", ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://github.com/jsdom/jsdom"}},"JSDom"),", ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://airbnb.io/enzyme/"}},"Enzyme"))),c.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Lint"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn lint")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn lint:js")," or ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn lint:sass")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"no"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"*.js"),", ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"*.scss")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://eslint.org/"}},"ESLint"),", ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://prettier.io/"}},"Prettier"),", ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://github.com/sasstools/sass-lint"}},"sass-lint"))),c.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"End to end"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn test:e2e")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn test:e2e ./PATH-TO-TEST-FILE")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"yes"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"*.e2e.spec.js")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"http://nightwatchjs.org/"}},"Nightwatch.js"))),c.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Accessibility"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn test:accessibility")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"yes"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"all pages in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"sitemap.xml")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"http://nightwatchjs.org/"}},"Nightwatch.js"))))),c.a.createElement("h2",{id:"requires-local-build-or-run"},"Requires local build or run"),c.a.createElement(p.MDXTag,{name:"p",components:n},"Some tests require ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/getting-started/common-tasks/run-build"}},"running or building"),"\nVA.gov:"),c.a.createElement(p.MDXTag,{name:"ul",components:n},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"li"},"testing while running ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"watch")," task"),": tests will automatically be run against the site running on that server"),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"li"},"testing with a local build"),": if nothing is running at ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"http://localhost:3001"),", tests start an Express server and serve the build output in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"build/localhost"))),c.a.createElement("h2",{id:"unit-tests"},"Unit tests"),c.a.createElement(p.MDXTag,{name:"ul",components:n},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"run all of our ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://mochajs.org/"}},"Mocha"),"/",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://chaijs.com/"}},"Chai"),"/",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://sinonjs.org/"}},"Sinon"),"-based unit tests with the file extension ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".unit.spec.js(x)")),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"use ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/jsdom/jsdom"}},"JSDom")," and ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://airbnb.io/enzyme/"}},"Enzyme")," to test browser and React behavior"),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"are located in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"test/")," directories near the code they're testing in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/"))),c.a.createElement("h2",{id:"linting"},"Linting"),c.a.createElement(p.MDXTag,{name:"ul",components:n},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"verify consistency of JavaScript"),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"enforce code formatting rules"),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"automatically run on ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"git commit")," as a precommit hook")),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"em",components:n,parentName:"p"},"We strongly recommend that you set up your editor to show you ESLint errors automatically as you're writing code. This makes the linter far less annoying in day to day use. ESLint has ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"https://eslint.org/docs/user-guide/integrations"}},"integrations")," for nearly all popular editors.")),c.a.createElement("h2",{id:"end-to-end-tests"},"End to end tests"),c.a.createElement(p.MDXTag,{name:"ul",components:n},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"run all of our ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://nightwatchjs.org/"}},"Nightwatch.js")," tests in headless Chrome with the file extension ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".e2e.spec.js")),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"simulate an actual user completing tasks in our tools and services."),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"are located in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"test/")," directories near the application they're testing in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/"))),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"em",components:n,parentName:"p"},"End to end tests will only pass if they are run against their mock api server. This server is started by the end to end test automatically when vets-api is ",c.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"em"},"not")," running")),c.a.createElement("h2",{id:"accessibility-tests"},"Accessibility tests"),c.a.createElement(p.MDXTag,{name:"ul",components:n},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"a variation of e2e tests that run aXe against our content pages running in Chrome.")))},n}(c.a.Component),d={}},367:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},368:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(14),m=t.n(r),s=t(371),c=(t(149),t(150),t(372),t(21),t(367)),p=t(369);function l(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(p.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var d=t(370),g=t.n(d);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function E(e){var n=e.children,t=e.location;return o.a.createElement(s.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return E}),E.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-test-mdx-3a3c1d960ab13835ec54.js.map