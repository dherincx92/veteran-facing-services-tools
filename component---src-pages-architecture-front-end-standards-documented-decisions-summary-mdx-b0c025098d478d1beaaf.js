(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{287:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"_frontmatter",function(){return p});a(42);var n=a(43),r=a.n(n),o=a(3),c=a.n(o),s=a(2),i=a.n(s),m=a(4),l=a(337),d={},u=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=r()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,a),components:t},i.a.createElement(m.MDXTag,{name:"h1",components:t},"Summary of documented decisions"),i.a.createElement(m.MDXTag,{name:"ul",components:t},i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"May 2016 - ",i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/architecture/front-end-standards/documented-decisions/language-and-tech-stack"}},"Why we build with Ruby, rails, React, and Metalsmith")),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"August 2016 - ",i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/architecture/front-end-standards/documented-decisions/redux"}},"Why we use Redux")),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Fall 2016 - ",i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/architecture/front-end-standards/documented-decisions/browser-support"}},"Browsers supported")),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"May 2017 - ",i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/architecture/front-end-standards/documented-decisions/uswds-foundation"}},"Remove USWDW and Foundation grid")),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"January 2017 - ",i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/architecture/front-end-standards/documented-decisions/building-forms"}},"Why we use react-jsonschema-form to build forms")),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Feb 2017 - ",i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/architecture/front-end-standards/documented-decisions/SOCKS-proxy"}},"Why we use SOCKS proxy to connect to internal tools")),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"March 2018 - ",i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/architecture/front-end-standards/documented-decisions/rjsf-fork"}},"Why we forked react-jsonschema-form")),i.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"December 2018 - ",i.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/architecture/front-end-standards/documented-decisions/jest"}},"Why we use Mocha instead of Jest"))))},t}(i.a.Component),p={}},330:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),r=a.n(n),o=a(13),c=a.n(o),s=a(68),i=a.n(s);a.d(t,"a",function(){return i.a});a(332);var m=r.a.createContext({}),l=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},332:function(e,t,a){var n;e.exports=(n=a(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},334:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),o=a(2),c=a.n(o),s=a(13),i=a.n(s),m=a(94),l=a(9),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?c.a.createElement(m.a,r()({location:t,pageResources:a},a.json)):null};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},335:function(e,t,a){"use strict";var n=a(3),r=a.n(n),o=a(333),c=a(2),s=a.n(c),i=a(13),m=a.n(i),l=a(338),d=a.n(l),u=a(330),p=(a(17),a(133),a(134),a(331)),h=a.n(p),f=a(18),g=a.n(f),v=a(339),b=a.n(v),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return g()(((a={})[t.id]=!1,a),e)},{}),a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,r=t.location;return s.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return s.a.createElement("div",{key:t.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),s.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(u.a,{className:b()("site-c-mobile-nav-list__link",{current:r.pathname===t.href}),to:t.href},"Overview")))))})))},t}(s.a.Component),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(u.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(u.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(s.a.Component),x=(a(340),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return s.a.createElement(u.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(y,{location:a}),t)},data:o})},t}(s.a.Component));x.propTypes={children:m.a.node.isRequired};t.a=x},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(13),c=a.n(o),s=a(335),i=(a(133),a(134),a(135),a(17),a(336)),m=a(330);function l(){return r.a.createElement(m.b,{query:"157057713",render:function(e){return r.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function d(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?r.a.createElement("li",{key:e.name},n&&e.name,!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&e.name,!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,null)):e.href?r.a.createElement("li",{key:e.name},r.a.createElement(m.a,{to:e.href},e.name)):r.a.createElement("li",{key:e.name},e.name," (future)")})):null}var u=a(331),p=a.n(u);function h(e){var t=e.location,a=p.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(d,{items:a.items}))):null}function f(e){var t=e.children,a=e.location;return r.a.createElement(s.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(h,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return f}),f.propTypes={children:c.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-front-end-standards-documented-decisions-summary-mdx-b0c025098d478d1beaaf.js.map