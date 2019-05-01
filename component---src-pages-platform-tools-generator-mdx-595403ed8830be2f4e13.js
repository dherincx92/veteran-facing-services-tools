(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{336:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),i=a(2),m=a.n(i),c=a(4),l=a(347),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},m.a.createElement("h1",{id:"vagov-application-generator"},"VA.gov application generator"),m.a.createElement(c.MDXTag,{name:"p",components:t},"We have a Yeoman generator for starting up new React applications in vets-website. This page will guide you through setting up the generator and explaining the questions that are asked as part of the setup process."),m.a.createElement(c.MDXTag,{name:"blockquote",components:t},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"You can find more information about creating forms in the ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/veteran-facing-services-tools/forms"}},"forms section"),".")),m.a.createElement("h2",{id:"getting-started"},"Getting Started"),m.a.createElement(c.MDXTag,{name:"p",components:t},"To install the generator, you'll need to do the following:"),m.a.createElement(c.MDXTag,{name:"pre",components:t},m.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"npm install -g yo\nnpm install -g @department-of-veterans-affairs/generator-vets-website\n")),m.a.createElement("h2",{id:"usage"},"Usage"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Once you have the generator installed, navigate to the root of the vets-website repository and run:"),m.a.createElement(c.MDXTag,{name:"pre",components:t},m.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"yo @department-of-veterans-affairs/vets-website\n")),m.a.createElement(c.MDXTag,{name:"p",components:t},"After running the above command, the generator will start up and ask you a series of questions:"),m.a.createElement("h3",{id:"whats-the-name-of-your-application"},"What's the name of your application?"),m.a.createElement(c.MDXTag,{name:"blockquote",components:t},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"This will be the default page title. Examples: '21P-530 Burials benefits form' or 'GI Bill School Feedback Tool'")),m.a.createElement(c.MDXTag,{name:"p",components:t},"This value will be used as the page title. If you're creating a form, it will also be used as the header for the introduction page and as a header on the confirmation page."),m.a.createElement("h3",{id:"what-folder-in-srcapplications-should-your-app-live-in"},"What folder in src/applications/ should your app live in?"),m.a.createElement(c.MDXTag,{name:"blockquote",components:t},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"This can be a subfolder. Examples: 'burials' or 'edu-benefits/0993'")),m.a.createElement(c.MDXTag,{name:"p",components:t},"Most of our React applications have their own folder in src/applications, so normally you want to pick a new folder. However, if you're building an application that's related to other applications, there may be a folder that your app should go in. An example would be if you were creating a new education form, you would probably create your app in edu-benefits/newform."),m.a.createElement("h3",{id:"what-should-be-the-name-of-your-apps-entry-bundle"},"What should be the name of your app's entry bundle?"),m.a.createElement(c.MDXTag,{name:"blockquote",components:t},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Examples: '0993-edu-benefits' or 'feedback-tool'")),m.a.createElement(c.MDXTag,{name:"p",components:t},"This is the name of the bundle that Webpack builds for your application. They're normally lower case with dashes separating words. This is primarily used to link your bundle to the content page that is created as a base for your application. It doesn't show up in your code anywhere. It's also separate from the entry file."),m.a.createElement("h3",{id:"whats-the-root-url-for-this-app"},"What's the root url for this app?"),m.a.createElement(c.MDXTag,{name:"blockquote",components:t},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Examples: '/gi-bill-comparison-tool/' or 'education/opt-out-information-sharing/opt-out-form-0993'")),m.a.createElement(c.MDXTag,{name:"p",components:t},"This is the url your application will live at. In your React apps you will likely have multiple pages and the urls for those pages will have this as the base. This value also gets translated into the page for the content page, which lives in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages"),"."),m.a.createElement("h3",{id:"is-this-a-form-app"},"Is this a form app?"),m.a.createElement(c.MDXTag,{name:"p",components:t},"If this is a form, there are some more questions after this step. If not, you're done!"),m.a.createElement("h3",{id:"whats-your-form-number-examples-22-0993-or-21p-530"},"What's your form number? Examples: '22-0993' or '21P-530'"),m.a.createElement(c.MDXTag,{name:"p",components:t},"This is the form number for the paper form you're converting. Normally it's something like 22-1990 or 21-22. This is used in a couple places in the UI and also as a key for the save in progress functionality of our forms."),m.a.createElement("h3",{id:"whats-the-google-analytics-event-prefix-that-you-want-to-use-examples-burials-530--or-edu-0993-"},"What's the Google Analytics event prefix that you want to use? Examples: 'burials-530-' or 'edu-0993-'"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Our shared form code sends events to Google Analytics and we need a unique prefix to be able to categorize the events by form. It's normally a dash separated value like ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"hca-")," or ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"edu-1990-")," and is made up by developers."),m.a.createElement("h3",{id:"whats-the-respondent-burden-of-this-form-in-minutes"},"What's the respondent burden of this form in minutes?"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Each paper form has OMB information that lives in the margins of each page (usually in the top right):"),m.a.createElement(c.MDXTag,{name:"p",components:t},m.a.createElement(c.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"../../images/omb_form_info.png",alt:"Form page with OMB info"}})),m.a.createElement(c.MDXTag,{name:"p",components:t},"This is the respondent burden value from that information. All the information from this question and the next two can be found in the props for the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"OMBInfo")," component in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"containers/IntroductionPage.jsx"),", if you need to change it later."),m.a.createElement("h3",{id:"whats-the-omb-control-number-for-this-form"},"What's the OMB control number for this form?"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),m.a.createElement("h3",{id:"whats-the-omb-expiration-date-in-mdyyyy-format-for-this-form-example-1312019"},"What's the OMB expiration date (in M/D/YYYY format) for this form? Example: '1/31/2019'"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Again similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),m.a.createElement("h3",{id:"whats-the-benefit-description-for-this-form-examples-education-benefits-or-disability-claims-increase"},"What's the benefit description for this form? Examples: 'education benefits' or 'disability claims increase'"),m.a.createElement(c.MDXTag,{name:"p",components:t},'This question is a bit more nebulous. We have a description of the type of benefits that you would be getting by using this form. Other examples are "health care benefits" and "veteran id card."'),m.a.createElement("h3",{id:"what-kind-of-form-template-would-you-like-to-start-with"},"What kind of form template would you like to start with?"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Choose from the following options:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"BLANK: A form without any fields"),"\nThis option gives you a bare bones form config object in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"form.js")," pre-filled with basic boilerplate data based on the answers to the generator's questions.")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"SIMPLE: A single-chapter form with a single field"),"\nThis option gives you a simple form config object in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"form.js")," that renders a simple form composed of a single input field on a single page chapter.")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"COMPLEX: A complex, multi-chapter form with multiple fields"),"\nThis option gives you a complex form config object in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"form.js"),' that renders a "playground" form composed of multiple chapters, including both single page and multi-page chapters, and a variety of form components to inspect and experiment with.'))),m.a.createElement("h2",{id:"youre-done"},"You're done!"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Once you've answered all those questions, you're done and the generator will create the files for you. To see them in your local development environment, you'll need to build again or restart the watch task you have running."),m.a.createElement(c.MDXTag,{name:"p",components:t},"To learn more about using the generator and working with the generated code, see our ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/veteran-facing-services-tools/forms"}},"forms documentation"),"."))},t}(m.a.Component),u={}},340:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(68),m=a.n(i);a.d(t,"a",function(){return m.a});a(342);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},341:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,t,a){var n;e.exports=(n=a(344))&&n.default||n},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),i=a(13),m=a.n(i),c=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(c.a,o()({location:t,pageResources:a},a.json)):null};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},t.default=p},345:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(343),s=a(2),i=a.n(s),m=a(13),c=a.n(m),l=a(348),p=a.n(l),d=a(340),u=(a(17),a(133),a(134),a(341)),h=a.n(u),f=a(18),g=a.n(f),v=a(349),b=a.n(v),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return g()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),w=(a(350),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:a}),t)},data:r})},t}(i.a.Component));w.propTypes={children:c.a.node.isRequired};t.a=w},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(345),m=(a(133),a(134),a(135),a(17),a(346)),c=a(340);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(341),u=a.n(d);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function f(e){var t=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-generator-mdx-595403ed8830be2f4e13.js.map