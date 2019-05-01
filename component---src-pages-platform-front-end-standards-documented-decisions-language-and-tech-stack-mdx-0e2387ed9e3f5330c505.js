(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{317:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return u});t(42);var n=t(43),o=t.n(n),r=t(3),s=t.n(r),i=t(2),m=t.n(i),c=t(4),l=t(345),p={},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=l.a,t}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:a},m.a.createElement("h1",{id:"languages-and-tech-stack"},"Languages and Tech Stack"),m.a.createElement(c.MDXTag,{name:"table",components:a},m.a.createElement(c.MDXTag,{name:"thead",components:a,parentName:"table"},m.a.createElement(c.MDXTag,{name:"tr",components:a,parentName:"thead"},m.a.createElement(c.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}}))),m.a.createElement(c.MDXTag,{name:"tbody",components:a,parentName:"table"},m.a.createElement(c.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"td"},"Last Decision Made:")),m.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Yes"),m.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"td"},"Decision Date:")),m.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"05/2016")),m.a.createElement(c.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"td"},"Revisit Decision:")),m.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Yes"),m.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"td"},"Revisit Date:")),m.a.createElement(c.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"05/2017")))),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"Revisit Criteria:")," The technical choices that were made inhibit writing maintainable code in a timely fashion, and/or an inability to hire new developers because the tech stack is out-of-date or not mainstream enough."),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"July 2017 Update:")," The technical decisions in this document are working effectively for the team at this time. This should likely be revisited again in another year (5/2018) to see if this is still the case."),m.a.createElement("h2",{id:"summary"},"Summary"),m.a.createElement(c.MDXTag,{name:"p",components:a},"For building web applications, the team has made the following decision for building stuff:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend Language"),": Ruby"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend Web Framework"),": Rails"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Frontend / Component Library Framework"),": React"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Content Management"),": Metal Smith")),m.a.createElement(c.MDXTag,{name:"p",components:a},"The below describes how we got to the decision. The nutshell of why ultimately feel to Ruby having a slight edge in the team already using it, vendor being hired to work in that stack, and maintaining a common stack across Appeals and Vets.gov."),m.a.createElement("h2",{id:"history"},"History"),m.a.createElement(c.MDXTag,{name:"p",components:a},"Prior to August 2015, USDS @ VA had a handful of application stacks in play across several applications:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Connect VBMS: Ruby + Java"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Appeals Database: Python (Django Framework)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Caseflow: Ruby (Rails Framework, running on JRuby) + Angular JS Framework"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Veteran Employment Center: Ruby (Rails Framework)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"eFolder Express: Python (Twisted Framework) + Connect VBMS (Ruby + Java)")),m.a.createElement(c.MDXTag,{name:"p",components:a},"For a team with less than 10 developers (including contractors), there was clearly tech stack sprawl. This made it hard for developers to move from project-to-project, requiring them to often learn one or more ecosystems each time."),m.a.createElement(c.MDXTag,{name:"p",components:a},"To alleviate this, the DSVA team made the decision to standardize around a few things:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Language"),": Ruby"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Web Framework"),": Rails"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Single Page App Framework"),": React",m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"To be used only for high traffic pages, otherwise just use ERBs")))),m.a.createElement(c.MDXTag,{name:"p",components:a},"The biggest reason for choosing the above was that the majority of our existing applications were in Ruby and that it seemed to be a prevalent stack within the civic tech community (i.e. 18F and civic tech organizations seemed to use it more than other languages)."),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"strong"},"NOTE: The remainder of this document is more vets.gov specific, when that side of the team was re-evaluating its stance on the decision above"))),m.a.createElement(c.MDXTag,{name:"p",components:a},"When 2016 began, the vets.gov team began exploring how to build its platform. The platform included two key things:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Make it easy to build forms via a re-usable component library"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Be able to provide a consistent API layer capable of communicating with internal systems (and provide an SLA consistent with industry web application)")),m.a.createElement(c.MDXTag,{name:"p",components:a},"The first point led us to building reusable components with React, and this hypothesis was tested in building HCA (Healthcare Application). This technology was settled on unanimously by developers involved that this is the approach we should continue to use."),m.a.createElement(c.MDXTag,{name:"p",components:a},'However, it wasn\'t clear what to use to build the API parts of the vets.gov Platform. The team could either stick to building things in Ruby (possibly, but not necessarily, in the Rails Framework) or experiment with Node.js (a stack used for server-side Javascript that is known for good asynchronous I/O performance). The HCA team opted to experiment with Node.js to see if it reduced learning overhead (i.e. front and backend developers only needed to know Javascript), share build architecture (use webpack), improve performance (Node.js is reportedly hyper fast for building APIs in terms of performance), and be able to re-use JS code (example: validation code shared between the front and backend). While the experiment was given the "green light" to build the first version of the HCA backend in Node.js, the expectation was set that if we decided as a team to use Ruby, we would eventually have to port the second version into Ruby at a later point.'),m.a.createElement(c.MDXTag,{name:"p",components:a},"The experiment left us with the following results:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"It did not reduce learning overhead in our case. Frontend developers avoided involvement in the backend. Despite the shared language, frontend JS is not the same as backend JS, and conceptually different things happen at each tier."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Builds did become similar between the front and the backend, both using Webpack. This simplifies knowledge around build systems (not needing to know both Webpack and Ruby Gems)."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"The application will not experience high enough volumes such that performance gains by using Node.js over Ruby are noticeable."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Isomorphic JS (JS used between both the front and the backend) did not provide noteworthy time/cost savings.")),m.a.createElement(c.MDXTag,{name:"p",components:a},"As a result of the experiment, it was not a \"no brainer\" that the team change its direction of building things in Ruby, but rather left the question open. It's clear that Node.js would be an equally good choice to Ruby, but not overwhelming such that it mandated a change in direction. Despite this, a decision wasn't clearly decided upon by the team's tech lead and the door to the decision remained open."),m.a.createElement(c.MDXTag,{name:"p",components:a},"With the vets.gov contract getting signed, it became necessary to make a decision on the language ecosystem in order to hire contract staff. Large parts of the contract, being that they were written ahead of the Node.js experiment, requested Ruby/Rails developers and a contracting firm that is familiar with this ecosystem was selected. Simultaneously, two new vets.gov team members were hired for the Platform team that are experienced and knowledgeable with the Node.js ecosystem."),m.a.createElement(c.MDXTag,{name:"p",components:a},"The contractor is leaning towards Ruby due to their organization being proficient in this ecosystem. The vets.gov Platform team members have similar reasoning for their experience with Node.js."),m.a.createElement("h2",{id:"decision-meeting---may-10-2016"},"Decision Meeting - May 10, 2016"),m.a.createElement(c.MDXTag,{name:"p",components:a},"The meeting included several folks:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Jeff Maher (vets.gov Tech Lead)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Albert Wong (vets.gov HCA and Platform Teams)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Alex Ose (vets.gov Platform Team Lead)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Robbie Holmes (vets.gov Platform Team)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Greg Gershman (Ad Hoc Co-Lead)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Paul Smith (Ad Hoc Co-Lead)")),m.a.createElement(c.MDXTag,{name:"p",components:a},"The team settled on the following criteria for making a decision:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Good for APIs"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Good performance for I/O"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Ecosystem is stable and active"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Operational complexity for DevOps is low"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Maintainable"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Can we afford to retrain folks?")),m.a.createElement(c.MDXTag,{name:"p",components:a},"The discussion bounced around across several topics, but addressed our criteria in the following ways:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Good for APIs"),": Both can easily be utilized to build APIs."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Good performance for I/O"),": Node.js is slightly faster in terms of runtime performance, but speed benefits negligible for our use case."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Ecosystem is stable and active"),": Both ecosystems are active, with ample documentation, libraries, and build systems. Problems that impact one ecosystem, impact the other. Node.js's ecosystem moves more rapidly, making it slightly less stable, but this concern is alleviated due to LTS releases."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Operational complexity for DevOps is low"),": Same for both languages."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Maintainable"),": Both inherently have the same maintainability levels"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Can we afford to retrain folks?"),": If we chose Node.js, Ad Hoc would have to change its hiring criteria and might make folks that have received offers no longer eligible. If we chose Ruby, Alex Ose and Robbie Holmes on the Platform team would have to adjust to using Ruby.")),m.a.createElement(c.MDXTag,{name:"p",components:a},"Based on our criteria, the team essentially winds up back at a crossroads, with one language not being the obvious choice over the other."),m.a.createElement("h2",{id:"other-factors"},"Other Factors"),m.a.createElement(c.MDXTag,{name:"p",components:a},"With the stacks being equal, what are reasons to choose one language over the other? What will get us to functioning products the quickest over the next six months?"),m.a.createElement("h3",{id:"why-ruby"},"Why Ruby?"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Team has existing applications in this stack already"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"We've already figured out tools needed to comply with VA processes (security compliance, 508 accessibility, unit testing)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Maintains parity with the Appeals team's tech stack (Makes ATO paperwork similar, and team members can transition teams easily)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Ad Hoc can use existing hires to send to vets.gov team")),m.a.createElement("h3",{id:"why-nodejs"},"Why Node.js"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Alex Ose and Robbie Holmes are already onboard and can start building the Platform in a stack they are familiar with",m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"USDS's hiring process hones in on polyglot developers that are able to learn new things, so this might be a non-point"))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"According to the Stack Overflow Annual Developer Survey, this ecosystem has already gained a popularity that has surpassed Ruby (might be easier to hire folks)")),m.a.createElement("h3",{id:"content-management-decision"},"Content Management Decision"),m.a.createElement(c.MDXTag,{name:"p",components:a},"The initial decision around tech stack include ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://jekyllrb.com/"}},"Jekyll")," for content management. However, when the decision was made to combine all frontend React applications into a ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"single repo"),", it made sense to move to a content management system driven by Node.js. The content management system chosen is ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://www.metalsmith.io/"}},"Metal Smith"),".  The driving factor was to simplify and streamline our build process for the vets-website content and dynamic front-end components to a single process. We were using ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://webpack.js.org/"}},"Webpack")," for to bundle and transpile our ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://facebook.github.io/react/"}},"React.js")," components into code that could be consumed by web browsers, and the content was in Jekyll and required Ruby, and a seperate build process.  By moving to Metalsmith we were able to align our build process to one language, and because the build script for the content was just Node.js we could call Webpack from within that script."),m.a.createElement("h2",{id:"the-decision"},"The Decision"),m.a.createElement(c.MDXTag,{name:"p",components:a},"For building web applications, the team has made the following decision for building stuff:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend Language"),": Ruby"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend Web Framework"),": Undefined (Rails is preferred, but other frameworks acceptable too based on use cases)"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Frontend / Component Library Framework"),": React"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Content Management"),": Metal Smith")),m.a.createElement(c.MDXTag,{name:"p",components:a},"In the short term, standardizing on these languages and frameworks enables our small team to have a consistent tech stack to learn and hire against. In the long term, we'll aim to utilize API-driven development (i.e. REST/JSON) such that it is easy for the future version of our team to pivot to newer technologies as becomes needed."))},a}(m.a.Component),u={}},338:function(e,a,t){"use strict";t.d(a,"b",function(){return l});var n=t(2),o=t.n(n),r=t(13),s=t.n(r),i=t(68),m=t.n(i);t.d(a,"a",function(){return m.a});t(340);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},339:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,a,t){var n;e.exports=(n=t(342))&&n.default||n},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,a,t){"use strict";t.r(a);var n=t(18),o=t.n(n),r=t(2),s=t.n(r),i=t(13),m=t.n(i),c=t(94),l=t(9),p=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?s.a.createElement(c.a,o()({location:a,pageResources:t},t.json)):null};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},a.default=p},343:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(341),s=t(2),i=t.n(s),m=t(13),c=t.n(m),l=t(346),p=t.n(l),d=t(338),u=(t(17),t(133),t(134),t(339)),h=t.n(u),g=t(18),f=t.n(g),b=t(347),v=t.n(b),E=function(e){function a(a){var t;return(t=e.call(this,a)||this).state=h.a.sections.reduce(function(e,a){var t;return f()(((t={})[a.id]=!1,t),e)},{}),t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.open,n=a.onClose,o=a.location;return i.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(a){return i.a.createElement("div",{key:a.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[a.id]=!e.state[a.id],t))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),i.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(i.a.Component),y=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navOpen:!1},t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(i.a.Component),w=(t(348),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,a=e.children,t=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:t}),a)},data:r})},a}(i.a.Component));w.propTypes={children:c.a.node.isRequired};a.a=w},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(13),s=t.n(r),i=t(343),m=(t(133),t(134),t(135),t(17),t(344)),c=t(338);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var a=e.items,t=e.isSublist,n=void 0!==t&&t;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=t(339),u=t.n(d);function h(e){var a=e.location,t=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function g(e){var a=e.children,t=e.location;return o.a.createElement(i.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}t.d(a,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-language-and-tech-stack-mdx-0e2387ed9e3f5330c505.js.map