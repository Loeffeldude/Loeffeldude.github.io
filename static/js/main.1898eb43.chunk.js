(this["webpackJsonpbackwatch-script-writer"]=this["webpackJsonpbackwatch-script-writer"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={scriptSelector:"style_scriptSelector__sR2F-",scriptSelectorHeader:"style_scriptSelectorHeader__24Pg2",scriptSelectorProperty:"style_scriptSelectorProperty__2UYwT",scriptSelectorScript:"style_scriptSelectorScript__KoP1P",scriptSelectorButton:"style_scriptSelectorButton__3JjFq",scriptSelectorScriptsWrapper:"style_scriptSelectorScriptsWrapper__xNXc0",selectorView:"style_selectorView__dJKdK"}},,,,,function(e,t,n){e.exports={button:"style_button__1e5Pd",blue:"style_blue__aBpfY",green:"style_green__aA9MA",red:"style_red__Wpoh-"}},,function(e,t,n){e.exports={wrapper:"style_wrapper__3W_Y_",headerLine:"style_headerLine__16N3D",show:"style_show__29t7W",hide:"style_hide__2SskX"}},function(e,t,n){e.exports={popupContainer:"style_popupContainer__1tfd1",buttonRow:"style_buttonRow__tv4KM",popupInputWrapper:"style_popupInputWrapper__vaNeY",popupHeadline:"style_popupHeadline__3yWTw"}},function(e,t,n){e.exports={selector:"style_selector__25D3D",topBar:"style_topBar__QPe0O",container:"style_container__26sNB"}},function(e,t,n){e.exports={buttons:"style_buttons__1mn0i",moveButtons:"style_moveButtons__ebG78",deleteButton:"style_deleteButton__MbegH",wrapper:"style_wrapper__2HACK"}},,function(e,t,n){e.exports={header:"style_header__2SdrB",buttonsWrapper:"style_buttonsWrapper__3mTD6",headerText:"style_headerText__1qzoF",uploadButton:"style_uploadButton__2paZS"}},,,,,function(e,t,n){e.exports={textInput:"style_textInput__3skeS",textArea:"style_textArea__2gPSK"}},,function(e,t,n){e.exports={selectors:"style_selectors__276dW"}},function(e,t,n){e.exports={popUpWrapper:"style_popUpWrapper__1Nh9t",popUpContainer:"style_popUpContainer__1TUJQ"}},function(e,t,n){e.exports={backgroundWrapper:"style_backgroundWrapper__3t-sB",card:"style_card__35DFI"}},,,,,,function(e,t,n){e.exports={layout:"style_layout__2E9XO",container:"style_container__M5qVz"}},function(e,t,n){e.exports={property:"style_property__2UNMa"}},,function(e,t,n){e.exports={error:"style_error__2q1bX"}},function(e,t,n){e.exports={property:"style_property__18VeN"}},function(e,t,n){e.exports={scriptCreator:"style_scriptCreator__1Hp5p"}},function(e,t,n){e.exports={selector:"style_selector__3YSxZ"}},function(e,t,n){e.exports={bottomBar:"style_bottomBar__2O7_D"}},function(e,t,n){e.exports={scriptChange:"style_scriptChange__2_gmd"}},,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),o=(n(47),n(2)),s=n(4),l=(n(48),n(76)),u=n(32),d=n.n(u),j=n(17),p=n.n(j),b=n(10),f=n.n(b),h=n(0);function O(e){var t=e.color,n=e.onClick,c=e.children,r=e.className,a=null!==t&&void 0!==t?t:"blue";return Object(h.jsx)("button",{type:"button",className:[r,f.a.button,"blue"===a?f.a.blue:"red"===a?f.a.red:f.a.green].join(" "),onClick:n,children:c})}function v(e){var t=e.onSaveClicked,n=e.onUploadClicked,r=Object(c.useRef)(null);return Object(h.jsx)("header",{className:p.a.header,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:p.a.headerText,children:Object(h.jsx)("span",{children:"BackwashAcademyScriptWriter"})}),Object(h.jsxs)("div",{className:p.a.buttonsWrapper,children:[Object(h.jsx)(O,{onClick:function(){r.current&&r.current.click()},children:Object(h.jsx)("span",{children:"Upload File"})}),Object(h.jsx)(O,{onClick:t,color:"green",children:"Save File"}),Object(h.jsx)("input",{ref:r,type:"file",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=e.target.files.item(0);t&&t.text().then((function(e){n&&n(e)}))}}})]})]})})}function x(e){var t=e.children,n=e.onSaveClick,c=e.onUploadClick;return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{onSaveClicked:n,onUploadClicked:c}),Object(h.jsx)("div",{className:d.a.container,children:t})]})}var g=n(5),m=n.n(g);function _(e){var t=e.scripts,n=e.onCreateNewScript,r=e.onScriptClicked,a=Object(c.useState)(0),i=Object(s.a)(a,2),o=i[0],l=i[1],u=Object(c.useState)(0),d=Object(s.a)(u,2),j=d[0],p=d[1],b=Object(c.useRef)(null);function f(e){b.current&&b.current.setAttribute("style","transform:translateX(".concat((j+12.5)*o*e,"px);"))}function v(){if(b.current){for(var e=b.current.offsetWidth/3-10.5,t=0,n=Array.from(b.current.children);t<n.length;t++){n[t].setAttribute("style","max-width:".concat(e,"px;min-width:").concat(e,"px"))}p(e)}f(-1)}return Object(c.useEffect)((function(){v(),window.onresize=v}),[b]),Object(c.useEffect)((function(){f(-1)}),[o]),Object(h.jsxs)("div",{className:m.a.scriptSelector,children:[Object(h.jsxs)("div",{className:m.a.scriptSelectorHeader,children:[Object(h.jsx)("span",{children:"Select Script"}),Object(h.jsx)(O,{onClick:n,children:Object(h.jsx)("span",{children:"Create New Script"})})]}),Object(h.jsxs)("div",{className:m.a.scriptSelectorScriptsWrapper,children:[Object(h.jsx)("div",{onClick:function(){l(o-1<=0?t.length-3:o-1)},role:"button",tabIndex:0,className:m.a.scriptSelectorButton,children:Object(h.jsx)("span",{children:"<"})}),Object(h.jsx)("div",{className:m.a.selectorView,children:Object(h.jsx)("div",{ref:b,children:t.map((function(e){return Object(h.jsxs)("div",{className:m.a.scriptSelectorScript,onClick:function(){r(e.id)},children:[Object(h.jsxs)("div",{className:m.a.scriptSelectorProperty,children:[Object(h.jsx)("span",{children:"ID:"}),Object(h.jsx)("span",{children:e.id})]}),Object(h.jsxs)("div",{className:m.a.scriptSelectorProperty,children:[Object(h.jsx)("span",{children:"Name:"}),Object(h.jsx)("span",{children:e.name})]}),Object(h.jsxs)("div",{className:m.a.scriptSelectorProperty,children:[Object(h.jsx)("span",{children:"Description:"}),Object(h.jsx)("span",{children:e.description})]})]},e.id)}))})}),Object(h.jsx)("div",{onClick:function(){o+3+1>t.length?l(0):l(o+1)},role:"button",tabIndex:0,className:m.a.scriptSelectorButton,children:Object(h.jsx)("span",{children:">"})})]})]})}var C=n(33),y=n.n(C),N=n(7),S=n(6),k=n(12),A=n.n(k);function w(e){var t=e.defaultOpen,n=e.children,r=e.cardTitle,a=e.className,i=e.innerClassName,o=Object(c.useState)(!!t),l=Object(s.a)(o,2),u=l[0],d=l[1];return Object(h.jsxs)("div",{style:u?void 0:{borderBottomWidth:"0",overflow:"hidden"},className:[A.a.wrapper,a].join(" "),children:[Object(h.jsxs)("div",{className:A.a.headerLine,onClick:function(){d(!u)},children:[Object(h.jsx)("span",{children:r}),Object(h.jsx)(N.a,{icon:u?S.b:S.a})]}),Object(h.jsx)("div",{className:[u?A.a.show:A.a.hide,i].join(" "),children:n})]})}var E=n(34),B=n(22),D=n.n(B);function I(e){var t=e.value,n=e.onChange,r=e.className,a=e.placeholder,i=e.type,o=e.inputType,s=Object(c.useRef)(null);function l(e){n&&n(e.target.value)}return Object(c.useEffect)((function(){s.current&&Object(E.a)(s.current)}),[s]),"input"===(null!==o&&void 0!==o?o:"input")?Object(h.jsx)("input",{type:i,placeholder:a,className:[D.a.textInput,r].join(" "),value:t,onChange:l}):Object(h.jsx)("textarea",{ref:s,placeholder:a,className:[D.a.textInput,r].join(" "),value:t,onChange:l})}var T=n(35),R=n.n(T);function W(e){var t=e.className,n=e.message;return e.show?Object(h.jsx)("span",{className:[R.a.error,t].join(" "),children:n}):null}var U=n(36),L=n.n(U);function P(e){var t=e.entityName,n=e.onChange,r=e.value,a=e.type,i=e.inputType,o=Object(c.useState)(!1),l=Object(s.a)(o,2),u=l[0],d=l[1],j=Object(c.useState)(""),p=Object(s.a)(j,2),b=p[0],f=p[1];return Object(h.jsxs)("div",{className:L.a.property,children:[Object(h.jsxs)("span",{children:[t,":"]}),Object(h.jsx)(I,{inputType:i,type:a,value:r,onChange:function(e){d(!1);var c=n(t,e);c&&(f(c),d(!0))}}),Object(h.jsx)(W,{show:u,message:b})]})}function F(e){var t=e.script,n=e.onChange;function c(e,c){var r=Object(o.a)({},t);if("name"!==e&&"description"!==e)throw Error("Key was not in script object!");r[e]=c,n(r)}return Object(h.jsxs)(w,{cardTitle:"Script: ".concat(t.name),defaultOpen:!0,children:[Object(h.jsxs)("div",{className:y.a.property,children:[Object(h.jsx)("span",{children:"ID:"}),Object(h.jsx)("span",{children:t.id})]}),Object(h.jsx)(P,{entityName:"name",value:t.name,onChange:c}),Object(h.jsx)(P,{entityName:"description",value:t.description,onChange:c})]})}var H=n(37),J=n.n(H);function M(e){var t=e.onCreateElement;return Object(h.jsxs)("div",{className:J.a.scriptCreator,children:[Object(h.jsx)(O,{onClick:function(){return t("dialogue")},children:"Add Dialogue"}),Object(h.jsx)(O,{onClick:function(){return t("choice")},children:"Add Choice"}),Object(h.jsx)(O,{onClick:function(){return t("background-change")},children:"Add Background Change"}),Object(h.jsx)(O,{onClick:function(){return t("script-change")},children:"Add Script Change"}),Object(h.jsx)(O,{onClick:function(){return t("event")},children:"Add Event"})]})}var V=n(42),K=n(23),X=n.n(K);var Y=n(24),q=n.n(Y),z=n(41),Q=n(13),Z=n.n(Q),G=n(25),$=n.n(G);function ee(e){var t=e.show,n=e.children;return t?Object(h.jsx)("div",{className:$.a.popUpWrapper,children:Object(h.jsx)("div",{className:$.a.popUpContainer,children:n})}):null}function te(e){var t=e.errorMessage,n=e.onSave,c=e.inputValue,r=e.onClosePopup,a=e.onInputChanged,i=e.show,o=e.showError,s=e.entityName;return Object(h.jsx)(ee,{show:i,children:Object(h.jsxs)("div",{className:Z.a.popupContainer,children:[Object(h.jsxs)("span",{className:Z.a.popupHeadline,children:["Add ",s]}),Object(h.jsxs)("div",{className:Z.a.popupInputWrapper,children:[Object(h.jsxs)("span",{children:[s," Name: "]}),Object(h.jsx)(I,{value:c,onChange:a})]}),Object(h.jsx)(W,{show:o,message:t}),Object(h.jsxs)("div",{className:Z.a.buttonRow,children:[Object(h.jsx)(O,{color:"green",onClick:n,children:"Save"}),Object(h.jsx)(O,{onClick:r,children:"Cancel"})]})]})})}var ne=n(38),ce=n.n(ne);function re(e,t,n,c,r){return t?(c?"undefined"!==typeof n.find(c):n.includes(t))?"".concat(e," with that name already exists!"):void(r&&r(t)):"".concat(e," name must not be empty!")}function ae(e){var t=e.addable,n=e.entityName,r=e.onChange,a=e.onAddSave,i=e.options,l=e.className,u=e.value,d={control:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{borderColor:t.isFocused?"#3E92CC !important":"#D6D6D6",background:"#2f2930",boxShadow:t.isFocused?"0 0 0 1px #3E92CC":"unset"})},menu:function(e){return Object(o.a)(Object(o.a)({},e),{},{background:"#2f2930"})},option:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{color:"#E0E2DB",background:t.isSelected?"#079cff":t.isFocused?"#307fb0":"#2f2930"})},valueContainer:function(e){return Object(o.a)(Object(o.a)({},e),{},{color:"#E0E2DB"})},placeholder:function(e){return Object(o.a)(Object(o.a)({},e),{},{color:"#E0E2DB"})},input:function(e){return Object(o.a)(Object(o.a)({},e),{},{color:"#E0E2DB"})},singleValue:function(e){return Object(o.a)(Object(o.a)({},e),{},{color:"#E0E2DB"})}},j=Object(c.useState)(!1),p=Object(s.a)(j,2),b=p[0],f=p[1],v=Object(c.useState)(""),x=Object(s.a)(v,2),g=x[0],m=x[1],_=Object(c.useState)(!1),C=Object(s.a)(_,2),y=C[0],N=C[1],S=Object(c.useState)(""),k=Object(s.a)(S,2),A=k[0],w=k[1];return Object(h.jsxs)("div",{className:l,children:[Object(h.jsxs)("div",{className:ce.a.selector,children:[Object(h.jsxs)("span",{children:[n,":"]}),Object(h.jsx)(z.a,{value:u,onChange:r,styles:d,options:i}),t?Object(h.jsxs)(O,{onClick:function(){f(!0)},children:["Add ",n]}):void 0]}),t?Object(h.jsx)(te,{show:b,inputValue:g,onInputChanged:function(e){m(e)},onSave:function(){if(N(!1),a){var e=a(g);if(e)return w(e),void N(!0)}f(!1),m("")},onClosePopup:function(){m(""),f(!1)},entityName:n,errorMessage:A,showError:y}):void 0]})}function ie(e){var t=e.actors,n=e.lineElement,c=e.onChange,r=e.onActorAdd,a=t.map((function(e){return{value:e,label:e}}));function i(e,t){var r=Object(o.a)({},n);"title"===e&&(r.title=t,c(r)),"text"===e&&(r.text=t,c(r))}function s(e){return 0===e.length?"Actor Cannot be empty":t.find((function(t){return t===e}))?"Actor with that name already exists!":void r(e)}return Object(h.jsx)(w,{cardTitle:"Dialogue",children:Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{entityName:"title",value:n.title,onChange:i}),Object(h.jsx)(P,{inputType:"textarea",entityName:"text",value:n.text,onChange:i}),Object(h.jsx)(ae,{entityName:"actorLeft",addable:!0,onAddSave:s,className:q.a.selectors,value:a.find((function(e){return e.value===n.actorLeft})),options:a,onChange:function(e){var t=Object(o.a)({},n);e&&(t.actorLeft=e.value,c(t))}}),Object(h.jsx)(ae,{entityName:"actorRight",addable:!0,onAddSave:s,className:q.a.selectors,value:a.find((function(e){return e.value===n.actorRight})),options:a,onChange:function(e){var t=Object(o.a)({},n);e&&(t.actorRight=e.value,c(t))}})]})})}var oe=n(26),se=n.n(oe);function le(e){var t=e.actors,n=e.backgrounds,r=e.lineElement,a=e.onActorLeftAdd,i=e.onActorRightAdd,l=e.onBackgroundAdd,u=e.onChange,d=n.map((function(e){return{label:e,value:e}})),j=t.map((function(e){return{label:e,value:e}})),p=t.map((function(e){return{label:e,value:e}})),b=Object(c.useState)(r),f=Object(s.a)(b,2),O=f[0],v=f[1];return Object(c.useEffect)((function(){v(r)}),[r]),Object(h.jsx)(w,{cardTitle:"Background Card",className:se.a.card,children:Object(h.jsxs)("div",{className:se.a.backgroundWrapper,children:[Object(h.jsx)(ae,{addable:!0,options:d,entityName:"Background",onChange:function(e){var t,n=Object(o.a)({},O);n.background=null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:"",v(n),u&&u(O)},onAddSave:function(e){return re("Background",e,n,(function(t){return t===e}),l)},value:d.find((function(e){return e.value===r.background}))}),Object(h.jsx)(ae,{addable:!0,options:j,entityName:"Actor Left",onChange:function(e){var t,n=Object(o.a)({},O);n.actorLeft=null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:"",v(n),u&&u(O)},onAddSave:function(e){return re("Background",e,n,(function(t){return t===e}),a)},value:j.find((function(e){return e.value===r.actorLeft}))}),Object(h.jsx)(ae,{addable:!0,options:p,entityName:"Actor Right",onChange:function(e){var t,n=Object(o.a)({},O);n.actorRight=null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:"",v(n),u&&u(O)},onAddSave:function(e){return re("Background",e,n,(function(t){return t===e}),i)},value:p.find((function(e){return e.value===r.actorRight}))})]})})}var ue=n(14),de=n.n(ue);function je(e){var t=e.actors,n=e.choice,c=e.scripts,r=e.onChange,a=e.onActorAdd,i=e.onChoiceDelete,s=t.map((function(e){return{value:e,label:e}})),l=c.map((function(e){return{label:e.name,value:e.id}}));function u(e,t){var c=Object(o.a)({},n);"affection change"===e&&(c.affectionChange=parseFloat(t),r(c)),"text"===e&&(c.text=t,r(c))}return Object(h.jsxs)("div",{className:de.a.container,children:[Object(h.jsxs)("div",{className:de.a.topBar,children:[Object(h.jsx)("span",{children:"Choice Option"}),Object(h.jsx)(O,{color:"red",onClick:function(){i(n)},children:"Delete Choice (choice yoo)"})]}),Object(h.jsx)(P,{entityName:"text",value:n.text,onChange:u}),Object(h.jsx)(ae,{value:l.find((function(e){return e.value===n.jumpToScriptId})),className:de.a.selector,options:l,entityName:"Jump To Script",onChange:function(e){var t=Object(o.a)({},n);t.jumpToScriptId=e?e.value:"",r(t)}}),Object(h.jsx)(P,{type:"number",entityName:"affection change",value:n.affectionChange.toString(),onChange:u}),Object(h.jsx)(ae,{value:s.find((function(e){return e.value===n.affectionActor})),className:de.a.selector,addable:!0,options:s,entityName:"Affection Actor",onChange:function(e){var t=Object(o.a)({},n);t.affectionActor=e?e.value:"",r(t)},onAddSave:function(e){return re("Actor",e,t,(function(t){return t===e}),a)}})]})}var pe=n(39),be=n.n(pe),fe={affectionActor:"",affectionChange:0,id:"",jumpToScriptId:"",text:""};function he(e){var t=e.lineElement,n=e.scripts,c=e.onActorAdd,r=e.actors,a=e.onChange;function i(e){var n=Object(o.a)({},t),c=n.choices.findIndex((function(t){return t.id===e.id}));if(-1===c)throw Error("Couldn't find choice change!");n.choices[c]=e,a(n)}function s(e){var n=Object(o.a)({},t);n.choices=t.choices.filter((function(t){return t.id!==e.id})),a(n)}return Object(h.jsxs)(w,{cardTitle:"Choice",children:[Object(h.jsx)("div",{children:Object(h.jsx)(P,{entityName:"text",value:t.text,onChange:function(e,n){if("text"===e){var c=Object(o.a)({},t);c.text=n,a(c)}}})}),Object(h.jsx)("div",{children:t.choices.map((function(e){return Object(h.jsx)(je,{onChange:i,scripts:n,choice:e,actors:r,onActorAdd:c,onChoiceDelete:s},e.id)}))}),Object(h.jsx)("div",{className:be.a.bottomBar,children:Object(h.jsx)(O,{onClick:function(){var e=Object(o.a)({},t),n=Object(o.a)(Object(o.a)({},fe),{},{id:Object(l.a)()});e.choices.push(n),a(e)},children:"Add Choice"})})]})}var Oe=n(40),ve=n.n(Oe);function xe(e){var t=e.lineElement,n=e.scripts,c=e.onChange,r=n.map((function(e){return{value:e.id,label:e.name}}));return Object(h.jsx)(w,{cardTitle:"Script Change",children:Object(h.jsx)("div",{className:ve.a.scriptChange,children:Object(h.jsx)(ae,{value:r.find((function(e){return e.value===t.scriptChangeToId})),options:r,entityName:"Script",onChange:function(e){if(e){var n=Object(o.a)({},t);n.scriptChangeToId=e.value,c(n)}}})})})}function ge(e){var t=e.lineElement,n=e.onChange;return Object(h.jsx)(w,{cardTitle:"Event",children:Object(h.jsx)(P,{entityName:"eventName",value:t.event,onChange:function(e){var c=Object(o.a)({},t);c.event=e,n(c)}})})}var me=n(15),_e=n.n(me);function Ce(e){var t=e.children,n=e.onDelete,c=e.onDown,r=e.onUp;return Object(h.jsxs)("div",{className:_e.a.wrapper,children:[Object(h.jsxs)("div",{className:_e.a.buttons,children:[Object(h.jsx)("div",{className:_e.a.deleteButton,children:Object(h.jsx)(O,{color:"red",onClick:n,children:Object(h.jsx)(N.a,{icon:S.c})})}),Object(h.jsxs)("div",{className:_e.a.moveButtons,children:[Object(h.jsx)(O,{onClick:r,children:Object(h.jsx)(N.a,{icon:S.b})}),Object(h.jsx)(O,{onClick:c,children:Object(h.jsx)(N.a,{icon:S.a})})]})]}),Object(h.jsx)("div",{children:t})]})}function ye(e){var t=e.actors,n=e.backgrounds,c=e.lineElements,r=e.scripts,a=e.onActorAdd,i=e.onBackgroundAdd,o=e.onChange;function s(e){var t=Object(V.a)(c),n=t.findIndex((function(t){return t.id===e.id}));if(-1===n)throw Error("changed line element couldn't be found!");t[n]=e,o(t)}function l(e){var t=c.findIndex((function(t){return e.id===t.id}));-1!==t&&0!==t&&o(X()(c,t,t-1))}function u(e){var t=c.findIndex((function(t){return e.id===t.id}));-1!==t&&t!==c.length-1&&o(X()(c,t,t+1))}function d(e){o(c.filter((function(t){return t.id!==e.id})))}return Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:c.map((function(e){return"Dialogue"===e.type?Object(h.jsx)(Ce,{onUp:function(){return l(e)},onDown:function(){return u(e)},onDelete:function(){return d(e)},children:Object(h.jsx)(ie,{lineElement:e,onChange:s,actors:t,onActorAdd:a})},e.id):function(e){return"Background"===e.type}(e)?Object(h.jsx)(Ce,{onUp:function(){return l(e)},onDown:function(){return u(e)},onDelete:function(){return d(e)},children:Object(h.jsx)(le,{backgrounds:n,actors:t,lineElement:e,onChange:s,onActorLeftAdd:a,onActorRightAdd:a,onBackgroundAdd:i})},e.id):function(e){return"Choice"===e.type}(e)?Object(h.jsx)(Ce,{onUp:function(){return l(e)},onDown:function(){return u(e)},onDelete:function(){return d(e)},children:Object(h.jsx)(he,{lineElement:e,scripts:r,actors:t,onActorAdd:a,onChange:s},e.id)},e.id):function(e){return"ScriptChangeElement"===e.type}(e)?Object(h.jsx)(Ce,{onUp:function(){return l(e)},onDown:function(){return u(e)},onDelete:function(){return d(e)},children:Object(h.jsx)(xe,{lineElement:e,scripts:r,onChange:s},e.id)},e.id):function(e){return"Event"===e.type}(e)?Object(h.jsx)(Ce,{onUp:function(){return l(e)},onDown:function(){return u(e)},onDelete:function(){return d(e)},children:Object(h.jsx)(ge,{lineElement:e,onChange:s},e.id)},e.id):void 0}))})})}var Ne={scripts:[],config:{actors:[],backgrounds:[]}};function Se(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(Ne),i=Object(s.a)(a,2),u=i[0],d=i[1],j=Object(c.useRef)(null);return Object(h.jsxs)(x,{onSaveClick:function(){if(j.current){var e=new Blob([JSON.stringify(u,null,2)]);j.current.href=URL.createObjectURL(e),j.current.click(),j.current.href="/#"}},onUploadClick:function(e){d(JSON.parse(e))},children:[Object(h.jsx)(_,{onScriptClicked:function(e){var t=u.scripts.find((function(t){return t.id===e}));r(null!==t&&void 0!==t?t:null)},onCreateNewScript:function(){var e=Object(o.a)({},u),t={description:"New Script",id:Object(l.a)(),lineElements:[],name:"New Script"};e.scripts.push(t),d(e)},scripts:u.scripts}),n?Object(h.jsx)(F,{script:n,onChange:function(e){var t=Object(o.a)({},u),n=t.scripts.findIndex((function(t){return t.id===e.id}));-1!==n&&(t.scripts[n]=e),d(t),r(t.scripts[n])}}):void 0,n?Object(h.jsx)(ye,{actors:u.config.actors,backgrounds:u.config.backgrounds,scripts:u.scripts,lineElements:n.lineElements,onActorAdd:function(e){var t=Object(o.a)({},u);t.config.actors.push(e),d(t)},onBackgroundAdd:function(e){var t=Object(o.a)({},u);t.config.backgrounds.push(e),d(t)},onChange:function(e){if(n){var t=Object(o.a)({},u),c=t.scripts.findIndex((function(e){return e.id===n.id})),r=t.scripts[c];r&&(r.lineElements=e,d(t))}}}):void 0,Object(h.jsx)(M,{onCreateElement:function(e){if(n){var t=Object(o.a)({},u),c=t.scripts.findIndex((function(e){return e.id===n.id})),r=t.scripts[c];if(r){var a;switch(e){case"dialogue":a={actorLeft:"",actorRight:"",id:Object(l.a)(),text:"",title:"",type:"Dialogue"};break;case"choice":a={actorLeft:"",actorRight:"",choices:[],id:Object(l.a)(),text:"",type:"Choice"};break;case"background-change":a={actorLeft:"",actorRight:"",background:"",id:Object(l.a)(),type:"Background"};break;case"script-change":a={actorLeft:"",actorRight:"",id:Object(l.a)(),scriptChangeToId:"",type:"ScriptChangeElement"};break;case"event":a={actorLeft:"",actorRight:"",event:"",id:Object(l.a)(),name:"",type:"Event"};break;default:throw Error("Button didn't return right string!")}r.lineElements.push(a),d(t)}}}}),Object(h.jsx)("a",{style:{display:"none"},download:"script.json",href:"/#",ref:j,children:"download it"})]})}var ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Se,{})}),document.getElementById("root")),ke()}],[[75,1,2]]]);
//# sourceMappingURL=main.1898eb43.chunk.js.map