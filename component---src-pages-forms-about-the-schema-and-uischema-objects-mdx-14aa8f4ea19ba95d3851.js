(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("q1tI"),i=t.n(a),r=t("Wbzz");function s(){return i.a.createElement(r.StaticQuery,{query:"68798663",render:function(e){return i.a.createElement(d,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function o(e){var n=e.item;return n.href?i.a.createElement("li",{key:n.name},i.a.createElement(r.Link,{to:n.href},n.name)):i.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(o,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(o,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,null)):i.a.createElement(o,{item:e,key:e.name})}))):null}var c=t("MEl4"),m=t.n(c);function l(e){var n=e.location,t=m.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(d,{items:t.items}))):null}function h(e){var n=e.sourceUrl;return n?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:n},"Edit this page on GitHub")):null}var u=t("8FPV");function p(e){var n=e.children,t=e.location,a=e.pageContext;return i.a.createElement(u.a,{location:t},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(l,{location:t}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n,i.a.createElement(h,{sourceUrl:a.sourceUrl}))))}},eJvW:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t("zLVn"),i=(t("q1tI"),t("7ljp")),r=t("3dLD"),s={},o={_frontmatter:s},d=r.a;function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.mdx)(d,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"about-the-schema-and-uischema-objects"},"About the schema and uiSchema objects"),Object(i.mdx)("p",null,"The VA.gov Forms System lets you build web-based forms using the JSON Schema standard for form data and React for the form UI. The form data and UI are represented by ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," objects, respectively, which are included in the form configuration file."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#understanding-the-schema-object"}),"Understanding the ",Object(i.mdx)("inlineCode",{parentName:"a"},"schema")," object"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#describing-object-fields-and-arrays"}),"Describing object fields and arrays")))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#understanding-the-uischema-object"}),"Understanding the ",Object(i.mdx)("inlineCode",{parentName:"a"},"uiSchema")," object"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#configuring-uischema-using-rjsf-options"}),"Configuring ",Object(i.mdx)("inlineCode",{parentName:"a"},"uiSchema")," using RJSF options")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"#configuring-uischema-using-vafs-options"}),"Configuring ",Object(i.mdx)("inlineCode",{parentName:"a"},"uiSchema")," using VAFS options"))))),Object(i.mdx)("h2",{id:"understanding-the-schema-object"},"Understanding the schema object"),Object(i.mdx)("p",null,"The JSON Schema standard describes the allowed shape of JSON objects. Using a ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema")," object, a JSON schema provides information about structured JSON data. For more information about the JSON Schema Standard, see ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://spacetelescope.github.io/understanding-json-schema/"}),"Understanding JSON Schema"),"."),Object(i.mdx)("p",null,"For JSON Schema validator libraries, VAFS uses ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/ajv"}),"ajv")," for unit tests and ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/jsonschema"}),"jsonschema")," in the VAFS code."),Object(i.mdx)("h3",{id:"describing-object-fields-and-arrays"},"Describing object fields and arrays"),Object(i.mdx)("p",null,"This example describes a JSON document that is an object with one property called ",Object(i.mdx)("inlineCode",{parentName:"p"},"myField"),", which is a number, meaning ",Object(i.mdx)("inlineCode",{parentName:"p"},"{ myField: 2 }")," would be valid:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"{\n  type: 'object',\n  properties: {\n    myField: {\n      type: 'number'\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"However, ",Object(i.mdx)("inlineCode",{parentName:"p"},"{}")," is also valid. To require a property in an object, use the ",Object(i.mdx)("inlineCode",{parentName:"p"},"required")," property, which takes an array of property names passed as strings. As in this example, ",Object(i.mdx)("inlineCode",{parentName:"p"},"required")," is always on the object that contains the field, not the field itself:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"{\n  type: 'object',\n  required: ['myField'],\n  properties: {\n    myField: {\n      type: 'number'\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"Arrays work similarly to objects. This example describes an array of boolean values: ",Object(i.mdx)("inlineCode",{parentName:"p"},"[true, false, true]"),". Items can be an object schema or any other type of schema as well:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"{\n  type: 'array',\n  items: {\n    type: 'boolean'\n  }\n}\n")),Object(i.mdx)("h2",{id:"understanding-the-uischema-object"},"Understanding the uiSchema object"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," object was introduced by ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/mozilla-services/react-jsonschema-form#react-jsonschema-form"}),"react-jsonschema-form"),", or ",Object(i.mdx)("em",{parentName:"p"},"RJSF"),", as a means of describing how a form page should be rendered from a ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema"),". To generate a form, react-jsonschema-form steps through the schema depth and renders different React components based on the type of data each property in the schema represents. In VAFS, ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," follows the format described in the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/mozilla-services/react-jsonschema-form#the-uischema-object"}),"react-jsonschema-form documentation"),", with some custom VAFS additions. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," objects should have a similar structure, with the same fields organized in the same way with these exceptions:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"uiSchema")," doesn't need to contain all the fields found in the ",Object(i.mdx)("inlineCode",{parentName:"li"},"schema")," object."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"uiSchema")," doesn't need a ",Object(i.mdx)("inlineCode",{parentName:"li"},"properties")," object for sub-fields.")),Object(i.mdx)("p",null,"For example, given this schema:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"The matching ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," would be:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"{\n  'ui:title': 'My form',\n  field1: {\n    'ui:title': 'My field'\n  }\n}\n")),Object(i.mdx)("p",null,"For array fields, you must specify an ",Object(i.mdx)("inlineCode",{parentName:"p"},"items")," object that contains the fields for each row in the array in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," object:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"{\n  'ui:title': 'My form',\n  toursOfDuty: {\n    items: {\n      branchName: {\n        'ui:title': 'Branch'\n      }\n    }\n  }\n}\n")),Object(i.mdx)("h3",{id:"configuring-uischema-using-rjsf-options"},"Configuring uiSchema using RJSF options"),Object(i.mdx)("p",null,"If you're not already familiar with the RJSF uiSchema options, see the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/mozilla-services/react-jsonschema-form#the-uischema-object"}),"RJSF library documentation"),". Some commonly used options include:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/mozilla-services/react-jsonschema-form#object-fields-ordering"}),"ui:order"),": An array of field names in the order in which they should appear."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/mozilla-services/react-jsonschema-form#alternative-widgets"}),"ui:widget"),": The name of an alternative widget to use for the field, for example, a custom widget called ",Object(i.mdx)("inlineCode",{parentName:"li"},"yesNo"),"."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/mozilla-services/react-jsonschema-form#custom-field-components"}),"ui:field"),": The name of a custom field."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/mozilla-services/react-jsonschema-form#custom-css-class-names"}),"classNames"),": The class names to put on the component.")),Object(i.mdx)("h3",{id:"configuring-uischema-using-vafs-options"},"Configuring uiSchema using VAFS options"),Object(i.mdx)("p",null,"The VAFS code includes additional ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," functionality not found in the RJSF library."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"{\n  // Used instead of the `title` property in the JSON Schema.\n  'ui:title': '',\n  // It can also be a component, which passes the current form data as a property.\n  'ui:title': ({ formData }) => <legend>{`A ${formData.thing} title`}</legend>,\n\n  // Used instead of the `description` property in the JSON Schema. This can be a string\n  // or a React component, and is normally used on object fields in the schema to provide\n  // description text or HTML before a block of fields.\n  'ui:description': '' || DescriptionComponent,\n\n  // Customizes the field or widget you're using.\n  'ui:field': '' || FieldComponent,\n  'ui:widget': '' || WidgetComponent,\n\n  // Renders string fields on the review page. Always used when you specify a custom widget\n  // component. Can also be used with regular widgets.\n  'ui:reviewWidget': WidgetComponent,\n\n  // Renders a custom review field on the review page. Only used when you specify a widget\n  // component. The `children` parameter is a component from the `'ui:reviewWidget'`, but\n  // is only rendered by this custom reviewField if the schema for it is not an `object`\n  // or `array`; NOTE: you must return a div with a \"review-row\" class name and include\n  // child <dt> and <dd> elements to maintain accessibility standards\n  'ui:reviewField': ({ children, schema, uiSchema }) => (\n    <div className=\"review-row\">\n      <dt>\n        {uiSchema['ui:title']}\n        {uiSchema['ui:description]}\n      </dt>\n      <dd>{children}</dd>\n    </div>\n  ),\n\n  // Provides a function to make a field conditionally required. The data in the whole form,\n  // with no page breaks, is the only parameter. Don't make a field required in the JSON\n  // schema and in addition to using `ui:required` on that field. The index argument is\n  // provided if you use `ui:required` on data inside an array.\n  'ui:required': function (formData, index) {\n    return true || false;\n  },\n\n  // An array of validation functions or objects that you can use to add validation that's\n  // not possible through JSON Schema. See below for the properties passed to the validation\n  // functions and how to use them.\n  'ui:validations': [\n    /**\n     * Note the difference between the three data parameters:\n     *\n     * @param {any} fieldData The data for the current field being validated\n     * @param {object} formData The data for all the fields in every page\n     */\n    function (errors, fieldData, formData, fieldSchema, errorMessages) {\n      errors.addError('My error');\n    },\n    {\n      validator: (errors, fieldData, formData, fieldSchema, errorMessages, options) => {\n        errors.addError('My other error');\n      },\n      options: {}\n    }\n  ],\n\n  // An object with field-specific error messages. Structured by error name (from JSON Schema\n  // error types). This is passed to custom validations in `ui:validations` in order to allow\n  // configurable error messages in a validator.\n  'ui:errorMessages': {\n    'pattern': 'Please provide a value in the right format'\n  },\n  'ui:options': {\n\n    // An map of enum values to labels that are shown by the select and radio widgets.\n    labels: {\n      chapter30: 'A readable description (Chapter 30)'\n    },\n\n    // A map of values to a component, text, or JSX\n    // (https://reactjs.org/docs/introducing-jsx.html). If your field is a radio widget, the\n    // content here is shown underneath the radio button for that value when it's selected.\n    nestedContent: {\n      'value': <p>Some text</p>\n    },\n\n    // A string of class names that are added to the widget for the current field.\n    // `widgetClassNames` is similar to the default `classNames` property, but it puts the\n    // class names on the input/select/etc element itself, rather than a surrounding `div`.\n    widgetClassNames: '',\n\n    // For array fields, this component is shown when the item in the array is rendered as\n    // read-only on a page that is not a review page.\n    viewField: RowViewComponent,\n\n    // To show a field only when another field is true, set this option to the property name.\n    // It wraps the fields with an ExpandingGroup component using the `expandUnder` field as\n    // the first question.\n    expandUnder: '',\n\n    // To match to a specific value, use the `expandUnderCondition` option to specify the\n    // value that the `expandUnder` field's data should equal.\n    expandUnderCondition: 'someValue',\n    // `expandUnderCondition` can also be a function that receives the data from the\n    // `expandUnder` field as an argument.\n    expandUnderCondition: (field) => field === 'someValue' || field === 'someOtherValue',\n\n    // When using the expandUnder option, you can set `expandUnderClassNames` on the field\n    // specified by `expandUnder` and it will add classes to the `div` that wraps all of the\n    // fields when they're expanded. See cookbook for an example use case.\n    expandUnderClassNames: '',\n\n    // Hides the specified field on the review page.\n    hideOnReview: true || false,\n\n    // Hides the specified field on the review page when the field value is `false`.\n    hideOnReviewIfFalse: true || false,\n\n    // Hide review row entry if the form value is an empty string, null or undefined\n    // This option is ignored if there is a custom `'ui:reviewField'` defined\n    hideEmptyValueInReview: true || false,\n\n    // Hides label added before the widget\n    hideLabelText: true || false,\n\n    // use label or legend (inside fieldset)\n    showFieldLabel: 'label', // vs anything other than 'label'\n\n    // A function that conditionally hides fields in the form. `hideIf` provides the `index`\n    // argument when you use `ui:required` on data inside an array.\n    hideIf: function (formData, index) {\n      return true || false;\n    },\n\n    // A function that conditionally replaces the current field's schema. `updateSchema`\n    // provides the `index` argument when you use `ui:required` on data inside an array.\n    updateSchema: function (formData, schema, uiSchema, index, pathToCurrentData) {\n      // This function returns an object with the properties you want to update. Instead of\n      // replacing the existing schema, it updates the individual properties.\n      return {\n        type: 'string'\n      };\n    },\n\n    // By default, array fields that are displayed on a single page in a form, such as\n    // information for multiple dependents, are displayed in a separate section on the\n    // review page. To keep the information in a single section on a review page, set\n    // this property to `true`.\n    keepInPageOnReview: true\n  }\n}\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-forms-about-the-schema-and-uischema-objects-mdx-14aa8f4ea19ba95d3851.js.map