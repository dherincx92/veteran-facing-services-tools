(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),s=n(2),c=n.n(s),i=n(4),p=n(310),l={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=p.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:t},c.a.createElement(i.MDXTag,{name:"h1",components:t},"Setting up Save in Progress"),c.a.createElement(i.MDXTag,{name:"p",components:t},"Forms on Vets.gov support the ability to save them in progress to a user's account and resume them later. Enabling Save in Progress requires"),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Configuring naming and messaging options in the ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Form config"),"."),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Making the Save In Progress form retrievable on the ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"User profile")," page."),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Adding links to the Save In Progress on ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Static pages"),".")),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Form config"),c.a.createElement(i.MDXTag,{name:"p",components:t},"There are several configuration options related to Save in Progress (SiP)."),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n  formId: '1010ez',\n  version: 0,\n  prefillEnabled: true,\n  savedFormMessages: {\n    notFound: 'Please start over to apply for health care.',\n    noAuth: 'Please sign in again to resume your application for health care.'\n  },\n  ...\n}\n")),c.a.createElement(i.MDXTag,{name:"p",components:t},"This is from our health care application. The most important piece of information is ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formId"),", which is the key that will be used to save the form data on the backend. Once you choose this, you can't change it in production. We also set a version, typically to 0, which can be incremented if you need to migrate form data in production."),c.a.createElement(i.MDXTag,{name:"p",components:t},"There are also a couple of messages you can set, which show up in various places on the form (primarily on the intro page)."),c.a.createElement(i.MDXTag,{name:"h2",components:t},"User profile"),c.a.createElement(i.MDXTag,{name:"p",components:t},"You will also need to make a couple changes in the user profile code, so that your form can show up in the list of saved forms on the account page. In ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/applications/personalization/profile360/util/helpers.jsx"),", you should add your form to the three configuration objects: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formBenefits"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formLinks"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"trackingPrefixes"),", and ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"sipEnabledForms"),". The information for each of these should be in your form config file."),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Static pages"),c.a.createElement(i.MDXTag,{name:"p",components:t},'Your form will likely be linked somewhere in the static content for Vets.gov. In those places, we have the ability to replace something like an "Apply now" button with a widget to resume or start over an in progress form.'),c.a.createElement(i.MDXTag,{name:"p",components:t},"In your content page, you can add front matter to set up a widget:"),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-yaml"}},"widgets:\n  - root: react-applicationStatus\n    timeout: 20\n    loadingMessage: Checking your application status.\n    errorMessage: <strong>We’re sorry. Something went wrong when we tried to load your saved application.</strong<br/>Please try refreshing your browser in a few minutes.\n")),c.a.createElement(i.MDXTag,{name:"p",components:t},"And somewhere in the file, where you want the widget to show up:"),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},'<div id="react-applicationStatus" class="static-page-widget">\n  <a class="usa-button-primary va-button-primary" href="/health-care/apply/application/">Apply for Health Care Benefits</a>\n</div>\n')),c.a.createElement(i.MDXTag,{name:"p",components:t},"Note that the id matches the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"root")," property in the front matter. This is the link that will show up will the Javascript code is loading or if it fails to load."),c.a.createElement(i.MDXTag,{name:"p",components:t},"Once that's done, you can open up the static pages entry file at ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/applications/static-pages/static-pages-entry.js")," and make your changes. Here's an example for the healh care application:"),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"const healthcarePages = new Set(['/health-care/', '/health-care/apply/', '/health-care/eligibility/']);\n\n...\n\nif (healthcarePages.has(location.pathname)) {\n  createApplicationStatus(store, {\n    formId: '1010ez',\n    additionalText: 'You can start your online application right now.',\n    applyLink: '/health-care/apply/',\n    applyText: 'Apply for Health Care Benefits'\n  });\n}\n")),c.a.createElement(i.MDXTag,{name:"p",components:t},"The main things to note are the set of URLs where this widget will be active. The code block also has some configuration options for your form that should be easy to get from the form config object."),c.a.createElement(i.MDXTag,{name:"p",components:t},"Once you've got all that set up, your form should appear on the profile page:"),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/e0d2d/saved_form.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"742px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.2911051212938%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"saved form",title:"",src:"/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/e0d2d/saved_form.png",srcSet:"/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/c50ea/saved_form.png 259w,\n/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/605b8/saved_form.png 518w,\n/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/e0d2d/saved_form.png 742w",sizes:"(max-width: 742px) 100vw, 742px"})))),c.a.createElement("hr",null),c.a.createElement(i.MDXTag,{name:"p",components:t},"Back: ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"./form-tutorial-advanced"}},"Form Tutorial - Advanced")),c.a.createElement(i.MDXTag,{name:"p",components:t},"Next: ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"./forms-in-production"}},"Vets Website Forms in Production")))},t}(c.a.Component),u={}},305:function(e,t,n){var a;e.exports=(a=n(307))&&a.default||a},306:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},307:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),s=n(13),c=n.n(s),i=n(94),p=n(9),l=function(e){var t=e.location,n=p.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(i.a,o()({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},308:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}}]}}}},309:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},310:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(306),m=n(2),s=n.n(m),c=n(13),i=n.n(c),p=n(311),l=n.n(p),d=n(68),u=n.n(d),g=(n(305),s.a.createContext({})),h=function(e){return s.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};n(17),n(133),n(134),n(135);var f=n(308);function y(){return s.a.createElement(h,{query:"157057713",render:function(e){return s.a.createElement(E,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function E(e){var t=e.items;return t.length?s.a.createElement("ul",{className:"menu-list"},t.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(E,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(y,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var b=n(309),v=n.n(b);function w(e){var t=e.location,n=v.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,n.name),s.a.createElement(u.a,{className:"home-link",to:""},"Home"),s.a.createElement(E,{items:n.items})),!n&&s.a.createElement("ul",{className:"menu-list"},v.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(u.a,{to:e.href},e.name))})))}n(312);var x=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return s.a.createElement(h,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(w,{location:n}),s.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(s.a.Component);x.propTypes={children:i.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-forms-save-in-progress-mdx-d16db515c79a097a26a7.js.map