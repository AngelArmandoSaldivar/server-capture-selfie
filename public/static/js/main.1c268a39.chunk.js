(this["webpackJsonpcapture-selfie"]=this["webpackJsonpcapture-selfie"]||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(6),s=a.n(c),o=(a(11),a(4)),i=a(3),l=a.p+"static/media/LOGO-CORE.cb87a809.jpg",r=a(0);var d=()=>{const[e,t]=Object(n.useState)([]),[a,c]=Object(n.useState)(null),[s,d]=Object(n.useState)(null),[p,j]=Object(n.useState)(""),[h,m]=Object(n.useState)(!1),[u,g]=Object(n.useState)(""),O=t=>{e.length>0&&window.location.reload(),g(t.target.value)},b=()=>{document.getElementById("fileInput").click()},x=()=>"Pasaporte"==u?null!==s?"Reemplazar Imagen":0===e.length?"CARGAR PASAPORTE":1===e.length?"CARGAR SELFIE":2===e.length?"CARGAR COMPROBANTE DE DOMICILIO":"VALIDAR DOCUMENTOS":null!==s?"Reemplazar Imagen":0===e.length?"CARGAR INE FRENTE":1===e.length?"CARGAR INE REVERSO":2===e.length?"CARGAR SELFIE":3===e.length?"CARGAR COMPROBANTE DE DOMICILIO":"VALIDAR DOCUMENTOS";function f(){if(4===e.length){const t=new Headers;t.append("Content-Type","application/json");const a=JSON.stringify({ineFront:e[0],ineBack:e[1],selfie:e[2],comprobante:e[3]});console.log("JSON: "+a);const n={method:"POST",headers:t,body:a,redirect:"follow"};console.log("FOTOS: "+a),m(!0),j("Estamos validando los documentos \n Espera un momento..."),fetch("https://server-capture-selfie-d4c65bd43858.herokuapp.com/app/verificacion",n).then((e=>e.text())).then((e=>{console.log("RESULTADO: "+e),"El customer fue registrado"==e?(j("Identidad Verificada."),m(!1)):(j("No se encontraron coincidencias, vuelve a intentarlo."),m(!1))})).catch((e=>{j("Verificaci\xf3n Facial Fallida"),m(!1),console.log("ERR: "+e)}))}else{const t=new Headers;t.append("Content-Type","application/json");const a=JSON.stringify({ineFront:e[0],ineBack:"",selfie:e[1],comprobante:e[2]});console.log("JSON: "+a);const n={method:"POST",headers:t,body:a,redirect:"follow"};console.log("FOTOS: "+a),m(!0),j("Estamos validando los documentos \n Espera un momento..."),fetch("https://server-capture-selfie-d4c65bd43858.herokuapp.com/app/verificacion",n).then((e=>e.text())).then((e=>{console.log("RESULTADO: "+e),"El customer fue registrado"==e?(j("Identidad Verificada."),m(!1)):(j("No se encontraron coincidencias, vuelve a intentarlo."),m(!1))})).catch((e=>{j("Verificaci\xf3n Facial Fallida"),m(!1),console.log("ERR: "+e)}))}}return Object(r.jsxs)("div",{className:"contenedor-imagen",children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("img",{src:l,alt:"Logo",className:"logo"}),Object(r.jsx)("h1",{className:"title",children:"Verificar Documentos"})]}),Object(r.jsxs)("div",{className:"divTexto",children:[Object(r.jsx)("span",{className:"nota",children:Object(r.jsx)("b",{children:"Nota"})})," Si seleccionas un ",Object(r.jsx)("b",{children:" pasaporte"}),", no es necesario cargar el archivo del reverso"]}),Object(r.jsxs)("div",{className:"document-selector",children:[Object(r.jsx)("h3",{children:"Selecciona el tipo de documento con el que te quieres identificar"}),Object(r.jsxs)("div",{className:"checkbox-group",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:"documento_identidad",checked:"documento_identidad"===u,onChange:O}),"Documento de identidad"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:"Pasaporte",checked:"Pasaporte"===u,onChange:O}),"Pasaporte"]})]})]}),Object(r.jsx)("input",{id:"fileInput",type:"file",accept:"image/*",multiple:!0,onChange:a=>{const n=Array.from(a.target.files),o=n.filter((e=>e.type.startsWith("image/")&&e.size<=5242880));if(o.length!==n.length)return void c("Algunos archivos no son im\xe1genes o superan el tama\xf1o m\xe1ximo permitido de 5MB.");if(null===s){if(e.length+o.length>4)return void c("No se pueden cargar m\xe1s de 4 im\xe1genes.")}const i=o.map((e=>new Promise(((t,a)=>{const n=new FileReader;n.onloadend=()=>{const e=n.result.replace(/^data:image\/[a-z]+;base64,/,"");t(e)},n.onerror=a,n.readAsDataURL(e)}))));Promise.all(i).then((e=>{c(null),null!==s?(t((t=>{const a=[...t];return a[s]=e[0],a})),d(null)):t("Pasaporte"==u?t=>[...t,...e].slice(0,3):t=>[...t,...e].slice(0,4))})).catch((()=>{c("Error al cargar las im\xe1genes.")}))},style:{display:"none"}}),a&&Object(r.jsx)("p",{className:"error",children:a}),Object(r.jsxs)("div",{className:"imagenes-container",children:[e.map(((e,t)=>Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"image-wrapper",onClick:()=>(e=>{d(e),b()})(t),children:[Object(r.jsx)("img",{src:"data:image/jpeg;base64,".concat(e),alt:"Cargado por el usuario ".concat(t+1),className:"imagen"}),Object(r.jsx)("span",{className:"image-overlay",children:"Reemplazar"})]},t)," ",Object(r.jsx)("br",{})]}))),Object(r.jsxs)("div",{className:"textoDiv",children:[p,1==h?Object(r.jsx)("img",{src:"https://codigofuente.io/wp-content/uploads/2018/09/progress.gif",alt:"loading",style:{width:"80px",height:"80px",marginRight:"10px"}}):""]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Pasaporte"==u?Object(r.jsxs)("button",{className:"custom-file-upload",onClick:3==e.length?f:b,children:[x()+" ",e.length<=1?Object(r.jsx)(o.a,{icon:i.a}):Object(r.jsx)(o.a,{icon:i.b})]}):Object(r.jsxs)("button",{className:"custom-file-upload",onClick:4==e.length?f:b,children:[x()+" ",e.length<=1?Object(r.jsx)(o.a,{icon:i.a}):Object(r.jsx)(o.a,{icon:i.b})]})]})};a(15);const p=document.getElementById("root");s.a.render(Object(r.jsx)(d,{}),p)}},[[16,1,2]]]);
//# sourceMappingURL=main.1c268a39.chunk.js.map