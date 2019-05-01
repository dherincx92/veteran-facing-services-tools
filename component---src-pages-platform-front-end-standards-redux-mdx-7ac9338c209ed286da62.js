(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"_frontmatter",function(){return p});n(42);var a=n(43),o=n.n(a),r=n(3),s=n.n(r),i=n(2),c=n.n(i),m=n(4),l=n(346),d={},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,n),components:t},c.a.createElement("h1",{id:"redux-action-guidelines"},"Redux Action Guidelines"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Actions are an important part of Redux and in order to making usage of Redux consistent and maintainable across applications, here are some guidelines to follow."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Important note: actions are the objects that are returned by action creator functions and used by reducers to generate a new state object. Guidelines for reducers and action creators will be in other documentation."),c.a.createElement(m.MDXTag,{name:"ol",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Follow the documentation on the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://redux.js.org"}},"Redux site"),". The basics of actions are ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://redux.js.org/basics/actions"}},"here")," and some frequently asked questions can be found ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://redux.js.org/faq/actions"}},"here"),"."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Define constants for your action types. We typically do this in the same file as the actions, and import them in the reducer."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Actions should reflect something a user did or an external event. It's easy to get in the habit of choosing action types based on what's happening in a component or in the Redux state itself, but choosing them based on implementation details couples the action to that implementation and makes it confusing to change later. Actions are also meant to show the history of what has happened in your application, and a bunch of types like ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"SET_FETCH_FORM_STATUS")," are not easy to understand just from the type itself."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Action types should be uppercase, separated by underscores."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Action types should be in past tense. The user or external event already happened, you're updating the application state to reflect that fact. Most of our code uses present tense currently, but the consensus is that this is the better convention.")),c.a.createElement("h2",{id:"examples"},"Examples"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Say you have a modal that a user can open or close, which is controlled by a status property in the Redux state. One approach might be to create an action with a type of ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SET_MODAL_STATUS")," to handle this. This gets the job done, but that type doesn't reflect what a user is actually trying to do (open a particular modal), it reflects what is changing in the Redux state (the open/closed status flag is being set)."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Instead, a better approach is to think about what a user is trying to do by triggering that action. ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MODAL_OPENED")," is a better action type, but you could still improve that by thinking about the context that modal is in. If the user is clicking on a link to show a modal window with some additional information about a subject, you could consider ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ADDITIONAL_INFORMATION_DISPLAYED")," or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ADDITIONAL_INFORMATION_TOGGLED"),". You should use your best judgment about what makes sense in your code, but the more your action type reflects what the user is trying to accomplish, the buetter."),c.a.createElement("h2",{id:"async-action-objects"},"Async action objects"),c.a.createElement(m.MDXTag,{name:"p",components:t},"A common pattern in Redux is to have several actions related to one asynchronous action, like a server request. You might be updating an address and have actions with types like like ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS"),", ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_SUCCESS"),", and ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_FAILURE"),". To that end, we recommend that you use the suffixes:"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_STARTED")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_SUCCEEDED")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_FAILED"))),c.a.createElement(m.MDXTag,{name:"p",components:t},"For example, if the user trigger an action to update an address, you would have ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_STARTED"),", ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_SUCCEEDED"),", and ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_FAILED"),"."),c.a.createElement(m.MDXTag,{name:"p",components:t},"We also suggest using the following properties for data in those action types:"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"response"),": the response data in a successful action"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"error"),": the error data in a failed action")))},t}(c.a.Component),p={}},339:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(2),o=n.n(a),r=n(13),s=n.n(r),i=n(68),c=n.n(i);n.d(t,"a",function(){return c.a});n(341);var m=o.a.createContext({}),l=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},340:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},341:function(e,t,n){var a;e.exports=(a=n(343))&&a.default||a},342:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},343:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),s=n.n(r),i=n(13),c=n.n(i),m=n(94),l=n(9),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?s.a.createElement(m.a,o()({location:t,pageResources:n},n.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},344:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(342),s=n(2),i=n.n(s),c=n(13),m=n.n(c),l=n(347),d=n.n(l),u=n(339),p=(n(17),n(133),n(134),n(340)),h=n.n(p),g=n(18),f=n.n(g),v=n(348),b=n.n(v),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var n;return f()(((n={})[t.id]=!1,n),e)},{}),n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.open,a=t.onClose,o=t.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":n}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var n;return e.setState(((n={})[t.id]=!e.state[t.id],n))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(u.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navOpen:!1},n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(u.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(u.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),D=(n(349),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return i.a.createElement(u.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:n}),t)},data:r})},t}(i.a.Component));D.propTypes={children:m.a.node.isRequired};t.a=D},345:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},346:function(e,t,n){"use strict";var a=n(2),o=n.n(a),r=n(13),s=n.n(r),i=n(344),c=(n(133),n(134),n(135),n(17),n(345)),m=n(339);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(m.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var u=n(340),p=n.n(u);function h(e){var t=e.location,n=p.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function g(e){var t=e.children,n=e.location;return o.a.createElement(i.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-redux-mdx-7ac9338c209ed286da62.js.map