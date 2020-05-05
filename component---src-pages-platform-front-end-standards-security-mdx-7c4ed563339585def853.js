(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t("q1tI"),o=t.n(a),r=t("8FPV"),s=(t("gu/5"),t("eoYm"),t("v9g0"),t("pJf4"),t("Yk4M")),m=t("Wbzz");function c(){return o.a.createElement(m.StaticQuery,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:s})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function p(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,null)):o.a.createElement(i,{item:e,key:e.name})}))):null}var l=t("MEl4"),u=t.n(l);function d(e){var n=e.location,t=u.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(d,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},Cbul:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c})),t.d(n,"_frontmatter",(function(){return i}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/");var a=t("q1tI"),o=t.n(a),r=t("6qfE"),s=t("3dLD");var m={},c=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,t),components:n},o.a.createElement("h1",{id:"overview"},"Overview"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," uses modern browser features to provide a secure experience for veterans. In general, these features are automatically included through the deployment process and require no configuration by front end engineers. "),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"This is an overview not an implementation guide. These rules apply to VA.gov production environments. Not all security features will be used in local, development, or staging environments.")," "),o.a.createElement("h2",{id:"https"},"HTTPS"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"All connections made to VA.gov must be secure (HTTPS)"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"VA.gov implements HSTS and automatically redirects to a secure protocol if a non secure connection is attempted ")),o.a.createElement("h2",{id:"cross-origin-resource-sharing-cors"},"Cross-Origin Resource Sharing (CORS)"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Some cross origin connections made to VA.gov must support CORS including ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"all")," XHR connections and web font downloads. "),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Updates to CORS headers returned by ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-api")," services or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," assets must be made through the devops team and must be reviewed by the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group"}},"frontend review group"),". Example:  ",o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Your application is on a VA.gov subdomain, needs to connect to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-api"),", but is not currently listed in the allowed origins"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"More ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}},"info on cors")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"CORS configurations: ",o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/ec2b1802c10e1e48d475a97f75a5a14fd6e552e7/terraform/environments/dsva-vagov-prod/main.tf#L177-L180"}},"production")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/cbab63cdf0595f4172b43d90cd46233997b37324/terraform/environments/dsva-vagov-staging/s3_buckets.tf#L16-L19"}},"staging"))))),o.a.createElement("h2",{id:"content-security-policy-csp"},"Content Security Policy (CSP)"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"All VA.gov pages return a Content Security Policy header that allows only known scripts to run on the page"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The CSP is enforced i.e. not set to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"report-only")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"report-uri")," points to a VA platform error capturing service (Sentry)",o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"VA.gov throttles these reports by including the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"report-uri")," only on a small % of responses"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Updates to CSP headers returned by or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," assets must be made through the devops team and must be reviewed by the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group"}},"frontend review group")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"More ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"}},"info on CSP")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"CSP configurations:",o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml"}},"production")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml"}},"staging")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml"}},"dev"))))))},a}(o.a.Component),i={}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-security-mdx-7c4ed563339585def853.js.map