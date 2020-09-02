(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),i=a.n(n),s=a("Wbzz");function r(){return i.a.createElement(s.StaticQuery,{query:"68798663",render:function(e){return i.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(s.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(c,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},n&&i.a.createElement(c,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(r,null)):i.a.createElement(c,{item:e,key:e.name})}))):null}var m=a("MEl4"),o=a.n(m);function d(e){var t=e.location,a=o.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var b=a("8FPV");function u(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(b.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(d,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(p,{sourceUrl:n.sourceUrl}))))}},EWft:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return m}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("3dLD"),r={},c={_frontmatter:r},l=s.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"writing-an-end-to-end-test"},"Writing an end-to-end test"),Object(i.mdx)("p",null,"Front end engineers use end-to-end (e2e) tests in ",Object(i.mdx)("inlineCode",{parentName:"p"},"vets-website")," to validate multipage applications with client-side routing. They are primarily used to assert that:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"client applications render their inputs"),Object(i.mdx)("li",{parentName:"ul"},"client-side navigation occurs when the required fields are populated")),Object(i.mdx)("h2",{id:"end-to-end-testing-overview"},"End-to-end testing overview"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"vets-website")," uses ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://nightwatchjs.org"}),"Nightwatch")," to run some of the older end-to-end tests",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"New end-to-end tests should be written in Cypress going forward."),Object(i.mdx)("li",{parentName:"ul"},"Refer to the ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/end-to-end/cypress-migration-guide.md"}),"Cypress migration guide")," to convert old tests or write new tests."))),Object(i.mdx)("li",{parentName:"ul"},"end-to-end tests are ",Object(i.mdx)("strong",{parentName:"li"},"collocated in application folder")," with the application they test"),Object(i.mdx)("li",{parentName:"ul"},"Two node apps run with the end-to-end tests:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"mockapi.js")," - hosts mock responses (see ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#mocking-api-responses"}),"Mocking API responses"),")"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"test-server.js")," - builds a server that handles client side routes"))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"vets-website")," must be started before end-to-end tests are run"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"vets-api")," should not be running when end-to-end tests are run")),Object(i.mdx)("h2",{id:"end-to-end-tests-conventions"},"End-to-end tests conventions"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"00-main-test-file.e2e.spec.js")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"const E2eHelpers = require('platform/testing/e2e/helpers')\nconst Timeouts = require('platform/testing/e2e/timeouts.js');\nconst MyApplicationHelpers = require('./my-application-helpers.js');\nconst testData = require('./schema/maximal-test.json');\nconst FormsTestHelpers = require('platform/testing/e2e/form-helpers');\n\n// export the test using E2eHelpers.createE2eTest\nmodule.exports = E2eHelpers.createE2eTest(client => {\n  // mock api responses\n  client.mockData({\n  // path to mock\n    path: '/v0/my-application',\n  // verb to mock\n    verb: 'post',\n  // mock response\n    value: {\n      formSubmissionId: '123fake-submission-id-567',\n      timestamp: '2016-05-16',\n    },\n  });\n\n  // use a comment to indicate what page is being tested\n  // Introduction page\n  client\n    .openUrl(`${E2eHelpers.baseUrl}/my-application`)\n    // use Timeouts constants\n    .waitForElementVisible('body', Timeouts.normal)\n    .assert.title('My Application Title | Veterans Affairs')\n    .click('.schemaform-start-button');\n\n  // disable scrolling\n  FormsTestHelpers.overrideFormsScrolling(client);\n\n  // assert navigation is successful\n  E2eHelpers.expectNavigateAwayFrom(client, '/introduction');\n\n  // Personal Information page.\n  client.expect.element('input[name=\"root_veteranFullName_first\"]').to.be\n    .visible;\n  // use functions from the helper file to perform all actions on the page\n  MyApplicationHelpers.completePersonalInformation(client, testData.data);\n  client.axeCheck('.main').click('.form-panel .usa-button-primary');\n  E2eHelpers.expectNavigateAwayFrom(\n    client,\n    '/my-application/personal-information',\n  );\n")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"my-application-helpers.js")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"const mock = require('platform/testing/e2e/mock-helpers');\nconst Timeouts = require('platform/testing/e2e/timeouts.js');\nconst Auth = require('platform/testing/e2e/auth.js');\nconst moment = require('moment');\n\nfunction completePersonalInformation(client, data) {\n  client\n    .waitForElementVisible(\n      'input[name=\"root_veteranFullName_first\"]',\n      Timeouts.normal,\n    )\n    .fill(\n      'input[name=\"root_veteranFullName_first\"]',\n      data.veteranFullName.first,\n    )\n    .fill('input[name=\"root_veteranFullName_last\"]', data.veteranFullName.last)\n}\n")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"These are recommendations not requirements.")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"separate navigation from field input",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"use a ",Object(i.mdx)("strong",{parentName:"li"},"main test file")," for navigation, assertions, and calls helpers"),Object(i.mdx)("li",{parentName:"ul"},"use a ",Object(i.mdx)("strong",{parentName:"li"},"helper file")," for filling out forms"))),Object(i.mdx)("li",{parentName:"ul"},"create separate, numbered ",Object(i.mdx)("strong",{parentName:"li"},"main test files")," to organize tests by their focus:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"00-all-fields.e2e.spec.js")," - required and optional fields"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"01-required.e2e.spec.js")," - only required fields"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"02-accessibility.e2e.spec.js")," - validates accessibility"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"03-auth.e2e.spec.js")," - validates authentication"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"04-cross-cutting-feature.e2e.spec.js")," - validates one feature used across several pages (e.g. save in progress)"))),Object(i.mdx)("li",{parentName:"ul"},"export the end-to-end test using ",Object(i.mdx)("inlineCode",{parentName:"li"},"E2eHelpers.createE2eTest()"),"- see ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#helpers"}),"Helpers")),Object(i.mdx)("li",{parentName:"ul"},"group tests by pages and use a comment to indicate what page is being tested"),Object(i.mdx)("li",{parentName:"ul"},"mock all api responses before starting the test. See ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#mocking-api-responses"}),"Mocking API responses")),Object(i.mdx)("li",{parentName:"ul"},"use ",Object(i.mdx)("inlineCode",{parentName:"li"},"waitForElementVisible")," before interacting with any element on the page"),Object(i.mdx)("li",{parentName:"ul"},"use ",Object(i.mdx)("inlineCode",{parentName:"li"},"Timeouts")," constants for setting timeouts (",Object(i.mdx)("inlineCode",{parentName:"li"},"platform/testing/e2e/timeouts.js"),")"),Object(i.mdx)("li",{parentName:"ul"},"use helpers for filling data and performing actions on the page"),Object(i.mdx)("li",{parentName:"ul"},"perform ",Object(i.mdx)("inlineCode",{parentName:"li"},"axeCheck")," on the main body of the application on each page - see ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#custom-nightwatch-commands"}),"Custom Nightwatch commands")),Object(i.mdx)("li",{parentName:"ul"},"assert that each navigation is successful")),Object(i.mdx)("h2",{id:"mocking-api-responses"},"Mocking API responses"),Object(i.mdx)("p",null,"A mock server runs with the end-to-end tests to allow tests to make production-like calls."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/6d97a63bd60d79864661cc757814ca041648d5c9/src/platform/testing/e2e/nightwatch-commands/mockData.js#L12-L14"}),Object(i.mdx)("inlineCode",{parentName:"a"},"mockData(data, token = nul)")),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"custom Nighwatch command that mocks the data at the endpoint provided"),Object(i.mdx)("li",{parentName:"ul"},"mock server is started as part of the end-to-end testing script")))),Object(i.mdx)("h2",{id:"custom-nightwatch-commands"},"Custom Nightwatch commands"),Object(i.mdx)("p",null,"Nightwatch supports extending its client api with ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://nightwatchjs.org/guide/#writing-custom-commands"}),"custom commands"),". Custom commands are located in ",Object(i.mdx)("inlineCode",{parentName:"p"},"src/platform/testing/e2e/nightwatch-commands")),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Command commands are available on the Nightwatch client e.g. ",Object(i.mdx)("inlineCode",{parentName:"em"},"client.axeCheck()"),". Below are some of the commonly used custom Nightwatch commands.")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/axeCheck.js#L4-L7"}),Object(i.mdx)("inlineCode",{parentName:"a"},"axeCheck(selector)"))," - uses the ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/dequelabs/axe-core/blob/master/doc/developer-guide.md"}),Object(i.mdx)("inlineCode",{parentName:"a"},"axe-core"))," library to run a series of tests to check for accessibility of content and functionality for DOM nodes in the selector"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/clickIf.js#L4-L7"}),Object(i.mdx)("inlineCode",{parentName:"a"},"clickIf(selector, predicate, ...predicateArguments)"))," - clicks the input at the selector when the predicate returns true"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fill.js#L5-L6"}),Object(i.mdx)("inlineCode",{parentName:"a"},"fill(selector, value, callback)"))," - clears the current value and sets to the value provided"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fillAddress.js#L2-L5"}),Object(i.mdx)("inlineCode",{parentName:"a"},"fillAddress(baseName, address}"),")")," - fills an address widget with the value provided"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/343d77e2d7509cdcecee4b41c723d01ca0147881/src/platform/testing/e2e/nightwatch-commands/fillCheckbox.js#L4-L7"}),Object(i.mdx)("inlineCode",{parentName:"a"},"fillCheckbox(selector, predicate, ...predicateParams"),")")," - clicks the checkbox at the selector when the predicate returns true"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fillDate.js#L4-L6"}),Object(i.mdx)("inlineCode",{parentName:"a"},"fillDate(fieldName, dateString}"),")")," - fills a date widget at the fieldName with the dateString provided e.g. 1990-1-28"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/openUrl.js"}),Object(i.mdx)("inlineCode",{parentName:"a"},"openUrl(url, disableForesee = true)"))," - navigates to url and disables user feedback module (this can interfere with end-to-end tests)"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectRadio.js#L2-L6"}),Object(i.mdx)("inlineCode",{parentName:"a"},"selectRadio(fieldName, value)"))," - selects the provided option on yesNo widget at the field name"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectYesNo.js#L2-L6"}),Object(i.mdx)("inlineCode",{parentName:"a"},"selectYesNo(fieldName, predicate)"))," - selects the provided options on yesNo widget at the field name when the predicate returns true")),Object(i.mdx)("h2",{id:"helpers"},"Helpers"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"src/platform/testing/e2e")," contains other useful helpers"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/helpers.js#L78-L81"}),Object(i.mdx)("inlineCode",{parentName:"a"},"createE2eTest(beginApplication)"))," - disables smooth scrolling and starts and ends test"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectYesNo.js#L2-L6"}),Object(i.mdx)("inlineCode",{parentName:"a"},"overrideSmoothFormsScrolling(client)")," and ",Object(i.mdx)("inlineCode",{parentName:"a"},"overrideFormsScrolling(client)"))," - disables smooth scrolling during end-to-end testing"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/helpers.js#L94"}),Object(i.mdx)("inlineCode",{parentName:"a"},"expectNavigationAwayFrom(client, urlString)"))," - asserts the current page is not at the ",Object(i.mdx)("inlineCode",{parentName:"li"},"urlString"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-end-to-end-test-mdx-85f286a703435281cb50.js.map