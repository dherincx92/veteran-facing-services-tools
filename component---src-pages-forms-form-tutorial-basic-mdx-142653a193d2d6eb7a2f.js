(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{305:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return g}),n.d(a,"_frontmatter",function(){return d});n(45);var t=n(46),o=n.n(t),r=n(3),m=n.n(r),s=n(2),i=n.n(s),p=n(4),c=n(370),l={},g=function(e){function a(a){var n;return(n=e.call(this,a)||this).layout=c.a,n}return m()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,n=o()(e,["components"]);return i.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:a},i.a.createElement("h1",{id:"basic-tutorial"},"Basic tutorial"),i.a.createElement(p.MDXTag,{name:"p",components:a},"In this doc, we'll walk through creating a new form and making some simple changes."),i.a.createElement(p.MDXTag,{name:"p",components:a},"Prerequisites:"),i.a.createElement(p.MDXTag,{name:"ul",components:a},i.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"VA.gov ",i.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/getting-started"}},"running locally")),i.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/platform/generator"}},"VA.gov Yeoman generator")," installed locally (first step in linked page)")),i.a.createElement(p.MDXTag,{name:"p",components:a},"If you both of those steps completed, you're ready to get started."),i.a.createElement("h2",{id:"create-new-form-application-with-yeoman-generator"},"Create new form application with Yeoman generator"),i.a.createElement(p.MDXTag,{name:"p",components:a},"To begin, run the generator from the root of your local vets-website repository:"),i.a.createElement(p.MDXTag,{name:"pre",components:a},i.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"yo @department-of-veterans-affairs/vets-website\n")),i.a.createElement(p.MDXTag,{name:"p",components:a},"This tutorial uses the following answers to the questions asked by the generator:"),i.a.createElement(p.MDXTag,{name:"table",components:a},i.a.createElement(p.MDXTag,{name:"thead",components:a,parentName:"table"},i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"thead"},i.a.createElement(p.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Question"),i.a.createElement(p.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Answer"))),i.a.createElement(p.MDXTag,{name:"tbody",components:a,parentName:"table"},i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the name of your application?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"My new form")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What folder in ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"src/applications/")," should your app live in?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"new-form")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What should be the name of your app's entry bundle?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"newForm")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the root url for this app?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"/new-form")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Is this a form app?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Y")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's your form number?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"XX-230")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the Google Analytics event prefix you want to use?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"new-form-")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the respondent burden of this form in minutes?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"30")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the OMB control number for this form?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"XX3344")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the OMB expiration date (in M/D/YYYY format) for this form?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"5/31/2018")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"What's the benefit description for this form?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"new form benefits")),i.a.createElement(p.MDXTag,{name:"tr",components:a,parentName:"tbody"},i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Which form template would you like to start with?"),i.a.createElement(p.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"BLANK: A form without any fields")))),i.a.createElement(p.MDXTag,{name:"p",components:a},"After answering the questions, the generator will create several source files for a new form application in ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"/src/applications/new-form"),"."),i.a.createElement("h2",{id:"open-the-new-form-application"},"Open the new form application"),i.a.createElement(p.MDXTag,{name:"p",components:a},"Next you'll need to start the site up locally (restart this task if it is already running):"),i.a.createElement(p.MDXTag,{name:"pre",components:a},i.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),i.a.createElement(p.MDXTag,{name:"p",components:a},"Then navigate to ",i.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://localhost:3001/new-form"}},"http://localhost:3001/new-form"),"."),i.a.createElement(p.MDXTag,{name:"p",components:a},"You should see something like this:"),i.a.createElement(p.MDXTag,{name:"p",components:a},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"816px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.36274509803923%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"initial form",title:"",src:"/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png",srcSet:"/static/627b2f096a0dfa6590c45a87621b3406/f4a45/initial-form.png 259w,\n/static/627b2f096a0dfa6590c45a87621b3406/ef0f6/initial-form.png 518w,\n/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png 816w",sizes:"(max-width: 816px) 100vw, 816px"})))),i.a.createElement("h2",{id:"update-your-form"},"Update your form"),i.a.createElement(p.MDXTag,{name:"p",components:a},"Now that you're up and running, we can add a new page and field to our form. If you open up ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"src/applications/new-form/config.js"),", you should see a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formConfig")," variable:"),i.a.createElement(p.MDXTag,{name:"pre",components:a},i.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n  urlPrefix: '/',\n  submitUrl: '/v0/api',\n  trackingPrefix: 'new-form-',\n  introduction: IntroductionPage,\n  confirmation: ConfirmationPage,\n  formId: 'XX-230',\n  version: 0,\n  prefillEnabled: true,\n  savedFormMessages: {\n    notFound: 'Please start over to apply for new form benefits.',\n    noAuth: 'Please sign in again to continue your application for new form benefits.'\n  },\n  title: 'My new form',\n  defaultDefinitions: {\n  },\n  chapters: {\n    chapter1: {\n      title: 'Chapter 1',\n      pages: {\n        page1: {\n          path: 'first-page',\n          title: 'First Page',\n          uiSchema: {\n          },\n          schema: {\n            type: 'object',\n            properties: {\n            }\n          }\n        }\n      }\n    }\n  }\n};\n")),i.a.createElement(p.MDXTag,{name:"p",components:a},"There's a lot of information already there, and you can check out the ",i.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/forms/docs/spec"}},"form config specification")," to see what each property means. For now, we're going to look at the content of the form, which lives in ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"chapters"),"."),i.a.createElement(p.MDXTag,{name:"p",components:a},"At the most basic level, our forms consist of: widgets, fields, pages, and chapters."),i.a.createElement(p.MDXTag,{name:"ul",components:a},i.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"li"},"Widgets")," are the basic form controls, things like ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<input/>")," and ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<select/>")," elements."),i.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"li"},"Fields")," are the next level up and contain a widget and a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<label/>"),", plus some extra optional description information."),i.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"We then have ",i.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"li"},"pages"),", which are collections of fields."),i.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"li"},"Chapters")," are collections of pages.")),i.a.createElement(p.MDXTag,{name:"p",components:a},"We can see in the config that there's already one chapter, with one page inside it, called ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"page1"),". In the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"page1")," object there are a few pieces of information, which we can mostly ignore for now. The important properties for us right now are ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," and ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema"),". ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema")," is the initial structure of our page, in the form of a ",i.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://spacetelescope.github.io/understanding-json-schema/"}},"JSON Schema"),". This describes the type of data that will result from a user filling in our form. It's also used by the form library to determine what fields and widgets to display in the application, except when overridden by ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema"),". ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," is an object that has extra, user interface-focused information to help render the form."),i.a.createElement(p.MDXTag,{name:"p",components:a},"Let's add a property to ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema"),":"),i.a.createElement(p.MDXTag,{name:"pre",components:a},i.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),i.a.createElement(p.MDXTag,{name:"p",components:a},"Now if you go to ",i.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://localhost:3001/new-form/first-page"}},"http://localhost:3001/new-form/first-page")," you should see this:"),i.a.createElement(p.MDXTag,{name:"p",components:a},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"674px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.34124629080118%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"first field",title:"",src:"/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png",srcSet:"/static/65b5f11ebcfadc7831092f6c2aa79637/f4a45/first-field.png 259w,\n/static/65b5f11ebcfadc7831092f6c2aa79637/ef0f6/first-field.png 518w,\n/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png 674w",sizes:"(max-width: 674px) 100vw, 674px"})))),i.a.createElement(p.MDXTag,{name:"p",components:a},"That's not the most exciting field, but it's a field! We can add a title to it by adding to ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema"),":"),i.a.createElement(p.MDXTag,{name:"pre",components:a},i.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),i.a.createElement(p.MDXTag,{name:"p",components:a},"That makes it look a little more presentable:"),i.a.createElement(p.MDXTag,{name:"p",components:a},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"726px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.3168044077135%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"field with label",title:"",src:"/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png",srcSet:"/static/8110d69efa83f373f2423126a7269553/f4a45/field-with-label.png 259w,\n/static/8110d69efa83f373f2423126a7269553/ef0f6/field-with-label.png 518w,\n/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png 726w",sizes:"(max-width: 726px) 100vw, 726px"})))),i.a.createElement(p.MDXTag,{name:"p",components:a},"Note that ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," doesn't follow exactly the same structure as ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema"),": you don't need the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"properties")," object. This is because ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," treats everything without a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ui:")," prefix as a field name, with one exception for array fields."),i.a.createElement(p.MDXTag,{name:"p",components:a},"Changing the the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type")," property in your field will change the data accepted and also the way it displays on the form. You can change it to be ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"boolean")," and get a checkbox and ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"number")," to get a number input. If you want a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"select")," box, you use JSON Schema's ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," property:"),i.a.createElement(p.MDXTag,{name:"pre",components:a},i.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),i.a.createElement(p.MDXTag,{name:"p",components:a},"That will get you a select box with options:"),i.a.createElement(p.MDXTag,{name:"p",components:a},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.55491329479769%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"select field",title:"",src:"/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png",srcSet:"/static/dbf48af7f1578ec6af86a6dfb0f4389d/f4a45/select-field.png 259w,\n/static/dbf48af7f1578ec6af86a6dfb0f4389d/ef0f6/select-field.png 518w,\n/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png 692w",sizes:"(max-width: 692px) 100vw, 692px"})))),i.a.createElement(p.MDXTag,{name:"p",components:a},"Some types of data might have different valid ways of asking the user for input. For example, a field that uses ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," could also use radio buttons. You can change that with ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ui:widget"),":"),i.a.createElement(p.MDXTag,{name:"pre",components:a},i.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),i.a.createElement(p.MDXTag,{name:"p",components:a},"Now the form offers two radio buttons to choose from:"),i.a.createElement(p.MDXTag,{name:"p",components:a},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"688px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.48837209302325%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"radio buttons",title:"",src:"/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png",srcSet:"/static/eca115081f915c328f66dd7d97edb9c3/f4a45/radio-buttons.png 259w,\n/static/eca115081f915c328f66dd7d97edb9c3/ef0f6/radio-buttons.png 518w,\n/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png 688w",sizes:"(max-width: 688px) 100vw, 688px"})))),i.a.createElement(p.MDXTag,{name:"p",components:a},"You can also mark fields as required, which will prevent you from moving to the next page without filling them out:"),i.a.createElement(p.MDXTag,{name:"pre",components:a},i.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    required: ['myField'],\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),i.a.createElement(p.MDXTag,{name:"p",components:a},"If you do fill in the required information and click Continue, you'll end up on the review page. The review page for our forms is generated based on your chapters and pages and provides a quick way to review the data that you've entered:"),i.a.createElement(p.MDXTag,{name:"p",components:a},i.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png",style:{display:"block"},target:"_blank",rel:"noopener"},i.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"695px"}},i.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.43884892086331%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),i.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"review",title:"",src:"/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png",srcSet:"/static/45223130f8b3010e7fd768288ea3799f/f4a45/review.png 259w,\n/static/45223130f8b3010e7fd768288ea3799f/ef0f6/review.png 518w,\n/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png 695w",sizes:"(max-width: 695px) 100vw, 695px"})))),i.a.createElement(p.MDXTag,{name:"p",components:a},"Note that if you refresh in the middle of the form, your data will be lost and the review page won't have any content to edit."),i.a.createElement(p.MDXTag,{name:"p",components:a},"Once you've reviewed your form, you have to click the checkbox to agree to the privacy policy and then you can submit! For now, though, that Submit button will fail because there's no api to submit the data to."),i.a.createElement(p.MDXTag,{name:"p",components:a},"That's it! Continue on in our documentation to learn about building more complex forms and the whole process for building and submitting a new form."),i.a.createElement(p.MDXTag,{name:"p",components:a},"Next: ",i.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"./form-tutorial-intermediate"}},"Intermediate tutorial")))},a}(i.a.Component),d={}},369:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}}]}}}},370:function(e,a,n){"use strict";var t=n(2),o=n.n(t),r=n(15),m=n.n(r),s=n(373),i=(n(150),n(151),n(374),n(21),n(369)),p=n(371);function c(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(g,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function l(e){var a=e.item;return a.href?o.a.createElement("li",{key:a.name},o.a.createElement(p.a,{to:a.href},a.name)):o.a.createElement("li",{key:a.name},a.name," (future)")}function g(e){var a=e.items,n=e.isSublist,t=void 0!==n&&n;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(g,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var d=n(372),u=n.n(d);function f(e){var a=e.location,n=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(g,{items:n.items}))):null}function h(e){var a=e.children,n=e.location;return o.a.createElement(s.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(f,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}n.d(a,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-basic-mdx-142653a193d2d6eb7a2f.js.map