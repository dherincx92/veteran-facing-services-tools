(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"3dLD":function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a("q1tI"),o=a.n(t),m=a("8FPV"),r=(a("gu/5"),a("eoYm"),a("v9g0"),a("pJf4"),a("Yk4M")),c=a("Wbzz");function s(){return o.a.createElement(c.StaticQuery,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:r})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function p(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(s,null)):o.a.createElement(l,{item:e,key:e.name})}))):null}var i=a("MEl4"),g=a.n(i);function u(e){var n=e.location,a=g.a.sections.find((function(e){return n.pathname.includes(e.href)}));return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function d(e){var n=e.children,a=e.location;return o.a.createElement(m.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},Uxid:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return s})),a.d(n,"_frontmatter",(function(){return l}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/");var t=a("q1tI"),o=a.n(t),m=a("6qfE"),r=a("3dLD");var c={},s=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=r.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,a),components:n},o.a.createElement("h1",{id:"set-up-vagov-locally"},"Set up VA.gov locally"),o.a.createElement(m.MDXTag,{name:"p",components:n},"These instructions cover the installation of dependencies needed for running VA.gov locally."),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Node setup")," - steps for installing ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"node")," which is needed for building, testing, and running the local development server"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Get the source code")," - steps for cloning the various repos needed to run VA.gov"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Start up the front end")," - installing and running VA.gov locally"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Backend and local tools setup")," - links to other setup instructions for running ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-api")," and retrieving static content")),o.a.createElement("h2",{id:"prerequisites"},"Prerequisites"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://brew.sh/"}},"homebrew")," is recommended for for installing ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nvm")," but other installation approaches are on ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/creationix/nvm#installation-and-update"}},"nvm Github page"))),o.a.createElement("h2",{id:"node-setup"},"Node setup"),o.a.createElement(m.MDXTag,{name:"ol",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Install ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nvm"),":")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Mac:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"brew update && brew install nvm\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Linux:"),o.a.createElement(m.MDXTag,{name:"p",components:n},"To get the latest version of NVM visit the official page. ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/nvm-sh/nvm"}},"NVM")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Follow the post install instructions in the success message.")),o.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:2}},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Install ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"node 10.15.3")," (this also installs ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm"),"):")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"nvm install 10.15.3\n")),o.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:3}},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Configure ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nvm")," to use ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"node 10.15.3")," by default:")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"nvm alias default 10.15.3\n")),o.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:4}},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Install ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn 1.12.3")," globally:")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm i -g yarn@1.12.3\n")),o.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:5}},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Verify correct versions of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"node")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn")," are installed:")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"node --version # 10.15.3\nyarn --version # 1.12.3\n")),o.a.createElement("h2",{id:"get-the-source-code"},"Get the source code"),o.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:6}},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Clone VA.gov git repos ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"as sibling directories"),":")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"git clone git@github.com:department-of-veterans-affairs/vets-website.git\ngit clone git@github.com:department-of-veterans-affairs/vagov-content.git\ngit clone git@github.com:department-of-veterans-affairs/vets-json-schema.git\ngit clone git@github.com:department-of-veterans-affairs/veteran-facing-services-tools.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api-mockdata.git\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Front end repos")),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"vets-website"),": Core front end platform and application code"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"vagov-content"),": Markdown content used to generate static pages"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"veteran-facing-services-tools"),": Shared front end components (including non VA.gov users) and front end documentation site")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Back end repos")),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"vets-api"),": Core Rails API server application code"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"vets-api-mockdata"),": Mock data used when running locally and on dev for the backend")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Shared repos")),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"vets-json-schema"),": Shared JSON Schema definitions used by form applications and the APIs that they consume")),o.a.createElement("h2",{id:"start-up-the-front-end"},"Start up the front end"),o.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:7}},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Install ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," dependencies")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"yarn install\n")),o.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:8}},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Start the local development server")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Build is complete when the CLI says")," ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Compiled successfully")),o.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:9}},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Open ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://localhost:3001"}},"http://localhost:3001")," in a browser")),o.a.createElement("h2",{id:"backend-and-internal-tools-set-up"},"Backend and internal tools set up"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Setting up the backend and internal tools allows local test account login and static content rendering."),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Backend set up")," instructions: ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-api"}},"vets-api"),".")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Follow the Docker instructions, which are in the README for the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"vets-api")," repo.")),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Local test account login")," instructions: ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Administrative/Accessing-Staging.md"}},"Accessing Staging"))),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"li"},"Internal tools setup")," instructions: ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"internal-tools"}},"Accessing internal tools"),".")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"This proxy setup is required to access static content locally and to access to our reporting and monitoring tools. Running the watch task with the SOCK proxy active will automatically pull and cache the static content for ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"vets-website"))))},t}(o.a.Component),l={}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-eadda337361442d13740.js.map