(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/useModal/index.mdx":function(e,n,o){"use strict";o.r(n);o("./node_modules/antd/es/button/style/index.js");var t=o("./node_modules/antd/es/button/index.js"),a=(o("./node_modules/antd/es/card/style/index.js"),o("./node_modules/antd/es/card/index.js")),l=(o("./node_modules/antd/es/modal/style/index.js"),o("./node_modules/antd/es/modal/index.js")),s=o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=o("react"),A=o("./node_modules/@mdx-js/react/dist/index.es.js"),d=o("./node_modules/docz/dist/index.esm.js"),c=o("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),g=o("./src/useToggle/index.ts");"undefined"!==typeof IUseModalResult&&IUseModalResult&&IUseModalResult===Object(IUseModalResult)&&Object.isExtensible(IUseModalResult)&&Object.defineProperty(IUseModalResult,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IUseModalResult",filename:"src/useModal/index.ts"}});var b=function(){var e=Object(g.a)(!1),n=Object(c.a)(e,2),o=n[0],t=n[1],a=Object(i.useState)(),l=Object(c.a)(a,2),s=l[0],A=l[1];return{initValue:s,openModal:function(e){t(!0),A(e)},visible:o,closeModal:function(){t(!1)}}},r=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useModal",filename:"src/useModal/index.ts"}}),o.d(n,"default",(function(){return p}));var u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(A.b)("div",n)}},m=(u("LoginModal"),u("LoginPage"),{}),j="wrapper";function p(e){var n=e.components,o=Object(s.a)(e,["components"]);return Object(A.b)(j,Object.assign({},m,o,{components:n,mdxType:"MDXLayout"}),Object(A.b)("h1",{id:"usemodal"},"useModal"),Object(A.b)("p",null,"\u7b80\u5316",Object(A.b)("inlineCode",{parentName:"p"},"ant-design Modal"),"\u7ec4\u4ef6\u4f7f\u7528\u3002"),Object(A.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(A.b)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(A.b)(d.c,{__position:0,__code:'() => {\n  const LoginModal = props => {\n    const { visible, closeModal } = props\n    return (\n      <Modal\n        title="Basic Modal"\n        visible={visible}\n        onOK={closeModal}\n        onCancel={closeModal}\n      >\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n      </Modal>\n    )\n  }\n\n  const LoginPage = () => {\n    const loginModal = useModal()\n\n    return (\n      <Card>\n        <Button\n          type="primary"\n          onClick={() => {\n            loginModal.openModal()\n          }}\n        >\n          Login\n        </Button>\n\n        <LoginModal {...loginModal} />\n      </Card>\n    )\n  }\n\n  return <LoginPage />\n}',__scope:{props:this?this.props:o,Playground:d.c,Modal:l.a,Card:a.a,Button:t.a,useModal:r},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2D1Jx4iWexXAERZ2GvcIInMNCjVldp3AIdBcIg3I4BgIj0F7Bj3UkOABHISQ8i44ioEkVRsDY_D2EDSV0MY01FTBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ0sgAWez2AANnsxz1jAYCADFvWgRJLP4ZxDgRB1MBgoR-CWIhqEoOAXIRALqyCmhnAgLDLnYABGDynPkVT1KmABBOYDPYCMoPIGwoHQMNUI5AyxHq6MZHYFE9JgbhgGwnSBrgeQtxrYAmugVrggAMnm8ZEnmShmhmlq2u4ba5TAZDJQGVB2nYAB-DZZrDCMOquDa5tQcrqykGQqzfMwYXVY4YDAMIoCmK7Ou6x6auXasLGAf7uC64zQZrSr2AAGUoczuN7Qz-0oQdIaMlca0LVANKg1hbAgDxYCWcgoDSsSeKgVC6vRu4cZrLoCD6cwoxh3GExRqAma58YXlgPgQGvfxYkI8T-D5rmifyUnBuAWWSdgB7-f56gdQAaSGimqZ51W1dx6gyLU-cdcpzj9elixJsNhN62io88ZAgg4Bwd2l1tu26zER3ul0F23Y9yQQbtmsfb9539CDnBPet2tJB5r3cbffmHqZuHEfM6DXDSOqIah6W4cp5HxLq0Seau1TDZZtnAbDxgyIo5O1cYaibmoePcd0-Zhf7flyMSKXObt42oFibYhoL7GR7Dku0B5nAMboSvU7Dmt5ANsOW8NrO0C7hP29oqsD8YPfUB5oz3ZweeL_EtDN3jqQm_QHf2DX3H05H2uBHMM-kbQDnPOj8Yab2jJIYGL0zBfhAIJYSFdxKSXDLgV2gEA76AYHhD6UFRI6SyHTPi8ozQyQ-qJSwSNMTdEIe7ESnFyEYl9Cqf0zosCyR7t0BoABVS24kxT0l-owSw5dwyQGdK_Oq0MLBK3llcLwlBySoCYRYNALwABq8QGQnSuJYJRex5h3xplcCMKiCDqKgJo7RHUsasEoFwXRuseGGPqlYrqNi7FmHkEwswcMEE0zqoI4RmBRHZAbByK4XDHHxD4aEARlgupY0kXjDSABtagSwIgMJgAAXXLnQihsAIzfSgJxD86w4bJJMWYhkSxOIEAaKgNRGjsm5JgHg2ggjQleOrHDZeBjUb1UqU0rRVgXEz27vkmAEZUQMlKTDWp9TGnmMmYMpZsyLCeOrkkqYDjqb9OnokiwGTKGFPiCU3RGzmEWB_uYA5nAGmmKaU5I2-ieZPJrNI2AVw0krh2a89YFyLlvVYR9IJP0pi-PiEwmBcDaEwHoZQpBagcCoO0Og0C4FZI4M4m0mASxRJkQSB4CUux6JuiIYqLp7DGjcLhRM6Jv06rJLkQopYEYWEPKWcMpEoy3HoCyV0nxeTMn5xMRAeIVTCrMvFO-cJNL4WwHpVMBJZTqApNYI8vqo4JU5MMrgggWRGBSvcA2UV4qmmzJVfjKYRzYAtIJVAIlOwIxsuwByixIRUCJFGbciAzQpkrRgGtdg7KJUGR2u0I1R0Oq3IsLUiVLqsBupgGsje0JindBjZqpNEZegCDDEmgGABCXN-aJUpvWf8pYyS41NKyRa6s1z2DJPVUs9JEz-UeK6e9e0oKYngqFZQqFSgQAZW2LnP8mhqBoOAhgsCiT-CoG9IyJA7B-A_GLNUDI5ofxkmXW8_grAMj5E7iu_gVkcDnqskldY_ByjkH6DMbs_pT0gCqn1PCtqd22swGSSgiRcx5AKBOTU5p11_FLNe6s_Aoj7xfVJDQcBIMWFvTAfRmA1IQHgPwK4tz-DMXQNh1dIAAB6SYcAACYyNJiQzWfgylRAvuI0VHyOAACcF6aPIcECBq0hH-BMZY-xq9IB_keOheB3AuhIApH_HAKdqKZ3ouMiAWgPosjYbXaaWg5p6PmlmDMfg8gFCbyAA",mdxType:"Playground"},(function(){var e=function(e){var n=e.visible,o=e.closeModal;return Object(A.b)(l.a,{title:"Basic Modal",visible:n,onOK:o,onCancel:o,mdxType:"Modal"},Object(A.b)("p",null,"Some contents..."),Object(A.b)("p",null,"Some contents..."),Object(A.b)("p",null,"Some contents..."))};return Object(A.b)((function(){var n=r();return Object(A.b)(a.a,{mdxType:"Card"},Object(A.b)(t.a,{type:"primary",onClick:function(){n.openModal()},mdxType:"Button"},"Login"),Object(A.b)(e,Object.assign({},n,{mdxType:"LoginModal"})))}),{mdxType:"LoginPage"})})),Object(A.b)("h3",{id:"\u8bbe\u7f6e\u521d\u59cb\u503c"},"\u8bbe\u7f6e\u521d\u59cb\u503c"),Object(A.b)(d.c,{__position:1,__code:'() => {\n  const LoginModal = props => {\n    const { visible, closeModal, initValue = {} } = props\n    return (\n      <Modal\n        title="Basic Modal"\n        visible={visible}\n        onOK={closeModal}\n        onCancel={closeModal}\n      >\n        <p>{initValue.name}</p>\n      </Modal>\n    )\n  }\n\n  const LoginPage = () => {\n    const loginModal = useModal()\n\n    return (\n      <Card>\n        <Button\n          type="primary"\n          onClick={() => {\n            loginModal.openModal({\n              name: \'Tom\',\n            })\n          }}\n        >\n          Login\n        </Button>\n\n        <LoginModal {...loginModal} />\n      </Card>\n    )\n  }\n\n  return <LoginPage />\n}',__scope:{props:this?this.props:o,Playground:d.c,Modal:l.a,Card:a.a,Button:t.a,useModal:r},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2D1Jx4iWexXAERZ2GvcIInMNCjVldp3AIdBcIg3I4BgIj0F7Bj3UkOABHISQ8i44ioEkVRsDY_D2EDSV0MY01FTBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ0sgAWez2AANnsxz1jAYCADFvWgRJLP4ZxDgRB1MBgoR-CWIhqEoOAXIRALqyCmhnAgLDLnYABGDynPkVT1KmABBOYDPYCMoPIGwoHQMNUI5AyxHq6MZHYFE9JgbhgGwnSBrgeQtxrYAmugVrggAMnm8ZEnmShmhmlq2u4ba5TAZDJQGVB2nYAB-DZZrDCMOquDa5tQcrqykGQqzfMwYXVY4YDAMIoCmK7Ou6x6auXasLGAf7uC64zQZrSr2AAGUoczuN7Qz-0oQdIaMlca0LVANKg1hbAgDxYCWcgoDSsSeKgJY0BeAA1eIGTq4A0LQtGBzgHGay6Ag-nMKMYdxhMUagHmRfGF5YD4EBr38WJCPE_gJZFon8lJwbgHVknYAeyXJeoHUAGkhopqmxf1g3ceoMi1PnM3Kc4y3VYsSbrYTetgHpggmagBkcFQb0YHkJd3YNqQxfD3G30lh6ebhxHzOg1w0jqiGodVuHKeR8S6tEsWrtU62-YFwGPdXcj0GjiPqJuahXZF3T5ll_t-XIxIVeFj3bagWJtiGjPse7iuc7QMWcAxuhC-hivraDo9LMsSIsrnkX5FjtfUKtiua-tpO0Eb7c69oqsj9rA_UDFoycFvser_EtDN0bqQyIovf2E33H4-70uBHMRgl8U5p2fjDeQVspDAxemYL8IBBLCQLuJSS4ZcAEC0BQYC-gGB4Q-lBUSOksioUUiaTUMkPqiWXhiWAxD2i3xEpxShmIYB-jelgWSzdugNAAKrO3EmKekv1GCWHzuGSAzpq6s3WDrTWVwvCUHJKgFU1YfZ-wZCdK4lglEWCng_GmVwIwqOZjAdRVgOpY1YJQLgWiehO2pvEfRZiuoWKsWYeQSizBw0QTTOqQiRGYDEdkBsHIrjcN4TTfhoRBGWC6ljWeeMNIAG1qBLAiFQmAABdfODCkZMIjN9KAnEPzrDhgkwx_sYBLE4gQBoqBGZGMyYZfBBAshCKCe46scMdHX0MgY2pvsjEmMsI44euNUm5NRAyIpMMqk1LqeU3pczJnWLccXeJUxzZhNRvVYZcSLBjNgHk-IhTlntIsH_cwuzOB9NURUlcXTxJOVxtI2AVxkkrg2XY2m6wVn3Xae9e0_ifpTC8fEJRsD4H0JgIw2AyC1A4DQYBXQIEDBgRwfaPBnECG0CWKJMiCQPASl2PRN08ozQsJoCtThPCoU5NgBE36dUElyIUUsCMzosD9PKSYpEwznHoHSe0zx2S0npx9hAeINzZHCAUcExo1LoUwHpVMWJxTqCJNYEYypo4bkNI4jALFMBGDMvFKgBsYqJVGKmaq_GUx9ndEaZxPFUACU7AjGy7AnK1FXB5QDS5EBmgRg4Wtdg7LPX2p2u0Y17hXwjJFlUm57qOU3Kmd_aEBTuiXIsPGoxEZegCDDGGgGABCPNBbk3WIsFbJQ7AEnZvKekq11Zzk1o1eUlJtKMlKJ-aw2SgLInAuFUwsFSgQAZW2KnP8mhqCIswaBEAcT-AL0ZEgdg_AfjFmqBkc0P4yTLseaukArAMj5Abiu_gVkcAXqskldY_ByjkH6DMbs_oz0gCqn1PC1Cd3UMwGSSgiRcx5AKBOTU5p11_FLDe6s_AoiH1fVJDQ3MQD7rvTAeY4Y1IQHgPwK4lz-DMXQDhg9AA9JMOAABMZGkxQdxvwZSohX3EaKj5HAABOS9NGax0dA1aIj_AmMsfY9ekA3zXHgog7gXQkAUj_jgNO7QSKsFgWMiAWgPosg4bXaaWg5p6PmlmDMfg8gFDgKAA",mdxType:"Playground"},(function(){var e=function(e){var n=e.visible,o=e.closeModal,t=e.initValue,a=void 0===t?{}:t;return Object(A.b)(l.a,{title:"Basic Modal",visible:n,onOK:o,onCancel:o,mdxType:"Modal"},Object(A.b)("p",null,a.name))};return Object(A.b)((function(){var n=r();return Object(A.b)(a.a,{mdxType:"Card"},Object(A.b)(t.a,{type:"primary",onClick:function(){n.openModal({name:"Tom"})},mdxType:"Button"},"Login"),Object(A.b)(e,Object.assign({},n,{mdxType:"LoginModal"})))}),{mdxType:"LoginPage"})})),Object(A.b)("h2",{id:"api"},"API"),Object(A.b)("pre",null,Object(A.b)("code",Object.assign({parentName:"pre"},{}),"const { visible, initValue, openModal, closeModal } = useControlledValue(params);\n")),Object(A.b)("h2",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),Object(A.b)("table",null,Object(A.b)("thead",{parentName:"table"},Object(A.b)("tr",{parentName:"thead"},Object(A.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(A.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8aac\u660e"),Object(A.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),Object(A.b)("tbody",{parentName:"table"},Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"visible"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u63a7\u5236Modal\u663e\u793a\u9690\u85cf"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(A.b)("inlineCode",{parentName:"td"},"boolean"))),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"initValue"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u9700\u8981\u4f20\u5165\u7684\u503c"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(A.b)("inlineCode",{parentName:"td"},"any"))),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"openModal"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6253\u5f00Modal\u7684\u65b9\u6cd5"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(A.b)("inlineCode",{parentName:"td"},"function"))),Object(A.b)("tr",{parentName:"tbody"},Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"closeModal"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5173\u95edModal\u7684\u65b9\u6cd5"),Object(A.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(A.b)("inlineCode",{parentName:"td"},"function"))))),Object(A.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(A.b)("p",null,"\u65e0"))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/useModal/index.mdx"}}),p.isMDXComponent=!0},"./src/useToggle/index.ts":function(e,n,o){"use strict";var t=o("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=o("react"),l=function(e){var n=Object(a.useState)(e),o=Object(t.a)(n,2),l=o[0],s=o[1];return[l,Object(a.useCallback)((function(e){s("boolean"===typeof e?e:function(e){return!e})}),[s])]};n.a=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useToggle",filename:"src/useToggle/index.ts"}})}}]);