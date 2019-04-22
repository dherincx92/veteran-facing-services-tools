(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),c=n(2),i=n.n(c),s=n(4),l=n(310),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return i.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},i.a.createElement(s.MDXTag,{name:"h1",components:t},"Building VA.gov"),i.a.createElement(s.MDXTag,{name:"p",components:t},"Note: most of the time, it's better to use the ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"watch")," task to build the site locally. This is the most developer-friendly experience."),i.a.createElement(s.MDXTag,{name:"p",components:t},"In order to do a full build of the site, you can run ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn build"),". This will convert the Markdown content in the ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vagov-content")," repository and data queried from the Drupal API into html pages, and copy those pages, along with other asssets, into ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/localhost"),". In addition, it will run Webpack to create bundles for the Javascript that runs on va.gov and will output those files in ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/localhost/generated"),"."),i.a.createElement(s.MDXTag,{name:"h2",components:t},"Building for other environments"),i.a.createElement(s.MDXTag,{name:"p",components:t},"There are four main environments for VA.gov: local, development, staging, and production. Each of those environments has an associated build type: ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"localhost"),", ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vagovdev"),", ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vagovstaging"),", ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vagovprod"),", which you can pass as a flag: "),i.a.createElement(s.MDXTag,{name:"p",components:t},i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn build --buildtype=vagovstaging")),i.a.createElement(s.MDXTag,{name:"p",components:t},"The results of the build will go in the a folder underneath ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/")," that matches the build type: ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/vagovdev"),", ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/vagovstaging"),", etc."),i.a.createElement(s.MDXTag,{name:"p",components:t},"For production-like environments (vagovstaging and vagovprod), you will also need to set the ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"NODE_ENV")," environment variable to be ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"production"),", so Webpack builds our Javascript and included dependencies in production mode: "),i.a.createElement(s.MDXTag,{name:"p",components:t},i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"NODE_ENV=production yarn build --buildtype=vagovprod")),i.a.createElement(s.MDXTag,{name:"h2",components:t},"Using the built output"),i.a.createElement(s.MDXTag,{name:"p",components:t},"Typically, the reason for building the site locally like this is to build it in production mode and check that it is behaving as you'd expect. To do that, you need to run a local http server, which you can do by running "),i.a.createElement(s.MDXTag,{name:"p",components:t},i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npx http-server -p 3001 build/vagovprod")),i.a.createElement(s.MDXTag,{name:"p",components:t},"Be aware that deep-linking to urls that are rendered by React apps on va.gov will not work when you run the site this way, as that relies on some server-side routing that is handled in nginx (or the Webpack dev server when running the ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"watch")," task)."))},t}(i.a.Component),u={}},305:function(e,t,n){var a;e.exports=(a=n(307))&&a.default||a},306:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},307:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),c=n(13),i=n.n(c),s=n(94),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(s.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},308:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}}]}}}},309:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},310:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(306),m=n(2),c=n.n(m),i=n(13),s=n.n(i),l=n(311),p=n.n(l),d=n(68),u=n.n(d),h=(n(305),c.a.createContext({})),g=function(e){return c.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};g.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};n(17),n(133),n(134),n(135);var f=n(308);function v(){return c.a.createElement(g,{query:"157057713",render:function(e){return c.a.createElement(E,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function E(e){var t=e.items;return t.length?c.a.createElement("ul",{className:"menu-list"},t.map(function(e){return c.a.createElement("li",{key:e.name},!!e.items&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(E,{items:e.items})),"componentList"===e.query&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(v,null)),!!e.href&&c.a.createElement("li",{key:e.name},c.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&c.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var b=n(309),y=n.n(b);function x(e){var t=e.location,n=y.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"input-wrap"},c.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,n.name),c.a.createElement(u.a,{className:"home-link",to:""},"Home"),c.a.createElement(E,{items:n.items})),!n&&c.a.createElement("ul",{className:"menu-list"},y.a.sections.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(u.a,{to:e.href},e.name))})))}n(312);var T=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return c.a.createElement(g,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(x,{location:n}),c.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(c.a.Component);T.propTypes={children:s.a.node.isRequired};t.a=T}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-build-mdx-214e542fc012a060a248.js.map