(this["webpackJsonpcapture-selfie"]=this["webpackJsonpcapture-selfie"]||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(6),o=a.n(n),s=(a(11),a(4)),i=a(3),l=a.p+"static/media/LOGO-CORE.cb87a809.jpg",r=a(0);var d=()=>{const[e,t]=Object(c.useState)([]),[a,n]=Object(c.useState)(null),[o,d]=Object(c.useState)(null),[m,p]=Object(c.useState)(""),[j,u]=Object(c.useState)(!1),[h,g]=Object(c.useState)(""),b=t=>{e.length>0&&window.location.reload(),g(t.target.value)},O=()=>{document.getElementById("fileInput").click()},x=()=>"Pasaporte"==h?null!==o?"Reemplazar Imagen":0===e.length?"CARGAR PASAPORTE":1===e.length?"CARGAR SELFIE":2===e.length?"CARGAR COMPROBANTE DE DOMICILIO":"VALIDAR DOCUMENTOS":null!==o?"Reemplazar Imagen":0===e.length?"CARGAR INE FRENTE":1===e.length?"CARGAR INE REVERSO":2===e.length?"CARGAR SELFIE":3===e.length?"CARGAR COMPROBANTE DE DOMICILIO":"VALIDAR DOCUMENTOS";function f(){if(4===e.length){const t=new Headers;t.append("Content-Type","application/json");const a=JSON.stringify({ineFront:e[0],ineBack:e[1],selfie:e[2],comprobante:e[3]});console.log("JSON: "+a);const c={method:"POST",headers:t,body:a,redirect:"follow"};console.log("FOTOS: "+a),u(!0),p("Estamos validando los documentos \n Espera un momento..."),fetch("https://server-capture-selfie-d4c65bd43858.herokuapp.com/app/verificacion",c).then((e=>e.text())).then((e=>{console.log("RESULT: "+e),"Biometria Facial Fallida"==e&&(p("No se encontraron coincidencias en los documentos."),u(!1)),"Comprobante no valido"==e&&(p("Comprobante de domicilio no valido."),u(!1)),"El customer fue registrado"==e?(p("Identidad Verificada."),u(!1)):"Biometria Facial Fallida"!=e&&"El customer fue registrado"!=e&&(p(e),u(!1))})).catch((e=>{p("Verificaci\xf3n Facial Fallida"),u(!1),console.log("ERR: "+e)}))}else{const t=new Headers;t.append("Content-Type","application/json");const a=JSON.stringify({ineFront:e[0],ineBack:"",selfie:e[1],comprobante:e[2]});console.log("JSON: "+a);const c={method:"POST",headers:t,body:a,redirect:"follow"};console.log("FOTOS: "+a),u(!0),p("Estamos validando los documentos \n Espera un momento..."),fetch("https://server-capture-selfie-d4c65bd43858.herokuapp.com/app/verificacion",c).then((e=>e.text())).then((e=>{if(console.log("RESULTADO: "+e),"Biometria Facial Fallida"==e)return p("No se encontraron coincidencias en los documentos."),void u(!1);"El customer fue registrado"==e?(p("Identidad Verificada."),u(!1)):"Biometria Facial Fallida"!=e&&"El customer fue registrado"!=e&&(p(e),u(!1))})).catch((e=>{p("Verificaci\xf3n Facial Fallida"),u(!1),console.log("ERR: "+e)}))}}return Object(r.jsxs)("div",{className:"contenedor-imagen",children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("img",{src:l,alt:"Logo",className:"logo"}),Object(r.jsx)("h1",{className:"title",children:"Verificar Documentos"})]}),Object(r.jsxs)("div",{className:"divTexto",children:[Object(r.jsx)("span",{className:"nota",children:Object(r.jsx)("b",{children:"Nota"})})," Si seleccionas un ",Object(r.jsx)("b",{children:" pasaporte"}),", no es necesario cargar el archivo del reverso"]}),Object(r.jsxs)("div",{className:"document-selector",children:[Object(r.jsx)("h3",{children:"Selecciona el tipo de documento con el que te quieres identificar"}),Object(r.jsxs)("div",{className:"checkbox-group",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:"documento_identidad",checked:"documento_identidad"===h,onChange:b}),"Documento de identidad"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:"Pasaporte",checked:"Pasaporte"===h,onChange:b}),"Pasaporte"]})]})]}),Object(r.jsx)("input",{id:"fileInput",type:"file",accept:"image/*",multiple:!0,onChange:a=>{const c=Array.from(a.target.files),s=c.filter((e=>e.type.startsWith("image/")&&e.size<=5242880));if(s.length!==c.length)return void n("Algunos archivos no son im\xe1genes o superan el tama\xf1o m\xe1ximo permitido de 5MB.");if(null===o){if(e.length+s.length>4)return void n("No se pueden cargar m\xe1s de 4 im\xe1genes.")}const i=s.map((e=>new Promise(((t,a)=>{const c=new FileReader;c.onloadend=()=>{const e=c.result.replace(/^data:image\/[a-z]+;base64,/,"");t(e)},c.onerror=a,c.readAsDataURL(e)}))));Promise.all(i).then((e=>{n(null),null!==o?(t((t=>{const a=[...t];return a[o]=e[0],a})),d(null)):t("Pasaporte"==h?t=>[...t,...e].slice(0,3):t=>[...t,...e].slice(0,4))})).catch((()=>{n("Error al cargar las im\xe1genes.")}))},style:{display:"none"}}),a&&Object(r.jsx)("p",{className:"error",children:a}),Object(r.jsxs)("div",{className:"imagenes-container",children:[e.map(((e,t)=>Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"image-wrapper",onClick:()=>(e=>{d(e),O()})(t),children:[Object(r.jsx)("img",{src:"data:image/jpeg;base64,".concat(e),alt:"Cargado por el usuario ".concat(t+1),className:"imagen"}),Object(r.jsx)("span",{className:"image-overlay",children:"Reemplazar"})]},t)," ",Object(r.jsx)("br",{})]}))),Object(r.jsxs)("div",{className:"textoDiv",children:[m,1==j?Object(r.jsx)("img",{src:"https://codigofuente.io/wp-content/uploads/2018/09/progress.gif",alt:"loading",style:{width:"80px",height:"80px",marginRight:"10px"}}):""]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Pasaporte"==h?Object(r.jsxs)("button",{className:"custom-file-upload",onClick:3==e.length?f:O,children:[x()+" ",e.length<=1?Object(r.jsx)(s.a,{icon:i.a}):Object(r.jsx)(s.a,{icon:i.b})]}):Object(r.jsxs)("button",{className:"custom-file-upload",onClick:4==e.length?f:O,children:[x()+" ",e.length<=1?Object(r.jsx)(s.a,{icon:i.a}):Object(r.jsx)(s.a,{icon:i.b})]})]})};a(15);const m=document.getElementById("root");o.a.render(Object(r.jsx)(d,{}),m)}},[[16,1,2]]]);
//# sourceMappingURL=main.d3f5c134.chunk.js.map