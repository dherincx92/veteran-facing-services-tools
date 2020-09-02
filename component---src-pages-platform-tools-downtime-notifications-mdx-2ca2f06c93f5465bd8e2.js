(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),i=n.n(a),o=n("Wbzz");function r(){return i.a.createElement(o.StaticQuery,{query:"68798663",render:function(e){return i.a.createElement(s,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(c,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(c,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(r,null)):i.a.createElement(c,{item:e,key:e.name})}))):null}var m=n("MEl4"),d=n.n(m);function p(e){var t=e.location,n=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(s,{items:n.items}))):null}function l(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var b=n("8FPV");function h(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(b.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(p,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(l,{sourceUrl:a.sourceUrl}))))}},kDfQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("3dLD"),r={},c={_frontmatter:r},s=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"downtime-notifications"},"Downtime Notifications"),Object(i.mdx)("p",null,"Downtime Notications are a mechanism for handling outages of external services in the consuming front-end applications. "),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Available as a React component in ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/monitoring/DowntimeNotification/index.jsx"}),"vets-website"),"."),Object(i.mdx)("li",{parentName:"ul"},"Consumers of the React component register required-services as dependencies via React props"),Object(i.mdx)("li",{parentName:"ul"},"Driven by ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://dsva.pagerduty.com/maintenance_windows"}),"PagerDuty maintenance windows")," so that downtime for a certain service can be scheduled without requiring a deployment. ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://support.pagerduty.com/docs/maintenance-windows"}),"More info on PagerDuty maintenance windows"),"."),Object(i.mdx)("li",{parentName:"ul"},"After a maintenance window is added in Pager Duty, an application wrapped in the Downtime Notification React component typically responds in one of three ways:",Object(i.mdx)("ol",{parentName:"li"},Object(i.mdx)("li",{parentName:"ol"},"Rendering the application as normal if the maintenance window does not start for upwards of an hour."),Object(i.mdx)("li",{parentName:"ol"},"Displaying a dismissible modal informing the user of upcoming downtime and rendering the application as usual if the maintenance window starts within the hour."),Object(i.mdx)("li",{parentName:"ol"},"Rendering an alert banner informing the user of active downtime instead of rendering the application if the maintenance window has already started.")))),Object(i.mdx)("h2",{id:"how-to-use"},"How to use"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Identify required-services for the application",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"These services should be added into ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/monitoring/DowntimeNotification/config/externalServices.js"}),"externalServices")," if they have not already been. The value must match that in the devops ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/devops/blob/a4b5432061ae60a4f77952bbe5f668a1355ee007/ansible/deployment/config/vets-api/prod-settings.local.yml.j2#L232"}),"config"),"."),Object(i.mdx)("li",{parentName:"ul"},"These dependencies may not be directly accessed by your application, but are more likely to be dependencies of the API method(s) consumed by your application. For example, the Search app requires Search.gov to function, even though it doesn't directly hit Search.gov."))),Object(i.mdx)("li",{parentName:"ol"},"Import the Downtime Notification React component into the application React code, usually the topmost container."),Object(i.mdx)("li",{parentName:"ol"},"In the render method, render a Downtime Notification React component passing the identified dependencies as props and the affected components as React children.")),Object(i.mdx)("h3",{id:"example"},"Example"),Object(i.mdx)("p",null,"Suppose an application ",Object(i.mdx)("em",{parentName:"p"},"My App")," leverages a service called ",Object(i.mdx)("em",{parentName:"p"},"Fancy Service"),", and ",Object(i.mdx)("em",{parentName:"p"},"Fancy Service")," was known to be offline for maintenance every now and then. During those timeframes, it is desirable to show a message to the user explaining that ",Object(i.mdx)("em",{parentName:"p"},"My App")," is unavailable at this time so that users aren't given the impression that they are running into unexpected errors and so that ",Object(i.mdx)("em",{parentName:"p"},"Fancy Service")," isn't needlessly hit. This should also be easy for engineers to do, without requiring any deployments to publish/unpublish the messaging. This is a pretty typical use case for the ",Object(i.mdx)("inlineCode",{parentName:"p"},"DowntimeNotification")," React component."),Object(i.mdx)("h4",{id:"react-code"},"React code"),Object(i.mdx)("p",null,"First, the topmost React container of My App is modified to import and consume the Downtime Notification React component. "),Object(i.mdx)("p",null,"Note that ",Object(i.mdx)("inlineCode",{parentName:"p"},"MyAppDataGrid")," would issue the API request to ",Object(i.mdx)("em",{parentName:"p"},"Fancy Service")," during ",Object(i.mdx)("inlineCode",{parentName:"p"},"componentDidMount"),", rather than ",Object(i.mdx)("inlineCode",{parentName:"p"},"MyApp"),". This is because ",Object(i.mdx)("inlineCode",{parentName:"p"},"MyAppDataGrid")," is passed a child component to ",Object(i.mdx)("inlineCode",{parentName:"p"},"DowntimeNotification"),". ",Object(i.mdx)("inlineCode",{parentName:"p"},"DowntimeNotification")," will fetch the currently-registered maintenance windows from the VA API (which in return reads the maintenance windows from PagerDuty), and if it discovers active downtime  for ",Object(i.mdx)("inlineCode",{parentName:"p"},"fancyService"),", then the ",Object(i.mdx)("inlineCode",{parentName:"p"},"componentDidMount")," lifecycle method of ",Object(i.mdx)("inlineCode",{parentName:"p"},"MyAppDataGrid")," will not execute. This way, API requests to Fancy Service won't continue to send during downtime."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"src/applications/my-app/containers/MyApp.jsx")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"\nimport React from 'react';\nimport { connect } from 'react-redux';\n\nimport {\n  DowntimeNotification,\n  externalServices,\n} from 'platform/monitoring/DowntimeNotifications';\n\nimport {\n  fetchFromFancyService\n} from '../actions';\n\nimport MyAppDataGrid from '../components/MyAppDataGrid';\n\nclass MyApp extends React.component {\n  render() {\n      return (\n        <>\n          <h1>My App</h1>\n          <DowntimeNotification appTitle=\"my app\" dependencies={[ externalServices.fancyService ]}>\n             <MyAppDataGrid fetchFromFancyService={this.props.fetchFromFancyService}/>\n          </DowntimeNotification>\n        </>\n      );\n  }\n\n}\n\nconst mapStateToProps = state => store.myApp;\n\nconst mapDispatchToProps = {\n  fetchFromFancyService,\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps,\n)(MyApp);\n")),Object(i.mdx)("p",null,"The render-flow for this container is:"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("inlineCode",{parentName:"li"},"MyApp"),"'s ",Object(i.mdx)("inlineCode",{parentName:"li"},"render")," method is executed"),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("inlineCode",{parentName:"li"},"DowntimeNotification")," issues a GET request to the VA API for all registered maintenance windows."),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("inlineCode",{parentName:"li"},"DowntimeNotification")," processes the response JSON data into a map."),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("inlineCode",{parentName:"li"},"DowntimeNotification")," searches the downtime map for a service called ",Object(i.mdx)("inlineCode",{parentName:"li"},"fancyService"),", as passed in its ",Object(i.mdx)("inlineCode",{parentName:"li"},"dependencies")," prop."),Object(i.mdx)("li",{parentName:"ol"},"If downtime for ",Object(i.mdx)("inlineCode",{parentName:"li"},"fancyService")," is found:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"If the current time is in the timeframe of the downtime window, render an alert banner informing the user that this application is undergoing maintenance."),Object(i.mdx)("li",{parentName:"ul"},"Otherwise, ",Object(i.mdx)("inlineCode",{parentName:"li"},"DowntimeNotification")," will renders its children, in this case ",Object(i.mdx)("inlineCode",{parentName:"li"},"MyAppDataGrid"),". A dismissible modal is also rendered if downtime is approaching within the hour.")))),Object(i.mdx)("h2",{id:"other-examples"},"Other examples"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"The Search app is a basic ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/search/containers/SearchApp.jsx#L301"}),"example")," of an application having a single service dependency, in this case being Search.gov. The Facility Locator is another ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/facility-locator/containers/FacilityLocatorApp.jsx#L74"}),"example"),"."),Object(i.mdx)("li",{parentName:"ol"},"The Account app is another simple ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/account/containers/AccountApp.jsx#L23"}),"example"),". This application has two dependencies. If either is down, then the application is considered in maintenance."),Object(i.mdx)("li",{parentName:"ol"},"The Sign-In Modal is an ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/user/authentication/components/SignInModal.jsx#L74"}),"example")," of a component that renders messaging about service downtime, but it does not affect the functionality of the component. Instead, it's more a heads-up for the user about potential difficulty. This is also the case for ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/letters/containers/LettersApp.jsx#L63"}),"Letters"),"."),Object(i.mdx)("li",{parentName:"ol"},"The Dashboard app consists of components with their own unique dependencies, so that a certain service being in maintenance should result in reduced but partial functionality for the Dashboard. It serves as an ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/dashboard/containers/DashboardApp.jsx#L398"}),"example")," of a more complex implementation of Downtime Notifications.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-tools-downtime-notifications-mdx-2ca2f06c93f5465bd8e2.js.map