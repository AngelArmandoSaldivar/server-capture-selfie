(this["webpackJsonpcapture-selfie"]=this["webpackJsonpcapture-selfie"]||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(6),c=a.n(s),i=(a(11),a(5)),l=a(3),o=a.p+"static/media/LOGO-CORE.cb87a809.jpg",r=a(1);var d=()=>{const[e,t]=Object(n.useState)([]),[a,s]=Object(n.useState)(null),[c,d]=Object(n.useState)(null),[m,g]=Object(n.useState)(""),[p,u]=Object(n.useState)(!1),h=()=>{document.getElementById("fileInput").click()};return Object(r.jsxs)("div",{className:"contenedor-imagen",children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("img",{src:o,alt:"Logo",className:"logo"}),Object(r.jsx)("h1",{className:"title",children:"Verificaci\xf3n Facial"})]}),Object(r.jsxs)("button",{className:"custom-file-upload",onClick:4==e.length?function(){if(4===e.length){const t=new Headers;t.append("Content-Type","application/json");const a=JSON.stringify({ineFront:e[0],ineBack:e[1],selfie:e[2],comprobante:e[3]});console.log("JSON: "+a);const n={method:"POST",headers:t,body:a,redirect:"follow"};console.log("FOTOS: "+a),u(!0),g("Estamos validando los documentos \n Espera un momento..."),fetch("https://server-capture-selfie-d4c65bd43858.herokuapp.com/app/verificacion",n).then((e=>e.text())).then((e=>{console.log("RESULTADO: "+e),"El customer fue registrado"==e?(g("Identidad Verificada."),u(!1)):(g("No se encontraron coincidencias, vuelve a intentarlo."),u(!1))})).catch((e=>{g("Verificaci\xf3n Facial Fallida"),u(!1),console.log("ERR: "+e)}))}}:h,children:[(null!==c?"Reemplazar Imagen":0===e.length?"CARGAR INE FRENTE":1===e.length?"CARGAR INE REVERSO":2===e.length?"CARGAR SELFIE":3===e.length?"CARGAR COMPROBANTE DE DOMICILIO":"VALIDAR DOCUMENTOS")+" ",e.length<=1?Object(r.jsx)(i.a,{icon:l.a}):Object(r.jsx)(i.a,{icon:l.b})]}),Object(r.jsx)("input",{id:"fileInput",type:"file",accept:"image/*",multiple:!0,onChange:a=>{const n=Array.from(a.target.files),i=n.filter((e=>e.type.startsWith("image/")&&e.size<=5242880));if(i.length!==n.length)return void s("Algunos archivos no son im\xe1genes o superan el tama\xf1o m\xe1ximo permitido de 5MB.");if(null===c){if(e.length+i.length>4)return void s("No se pueden cargar m\xe1s de 4 im\xe1genes.")}const l=i.map((e=>new Promise(((t,a)=>{const n=new FileReader;n.onloadend=()=>{const e=n.result.replace(/^data:image\/[a-z]+;base64,/,"");t(e)},n.onerror=a,n.readAsDataURL(e)}))));Promise.all(l).then((e=>{s(null),null!==c?(t((t=>{const a=[...t];return a[c]=e[0],a})),d(null)):t((t=>[...t,...e].slice(0,4)))})).catch((()=>{s("Error al cargar las im\xe1genes.")}))},style:{display:"none"}}),a&&Object(r.jsx)("p",{className:"error",children:a}),Object(r.jsxs)("div",{className:"imagenes-container",children:[e.map(((e,t)=>Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"image-wrapper",onClick:()=>(e=>{d(e),h()})(t),children:[Object(r.jsx)("img",{src:"data:image/jpeg;base64,".concat(e),alt:"Cargado por el usuario ".concat(t+1),className:"imagen"}),Object(r.jsx)("span",{className:"image-overlay",children:"Reemplazar"})]},t)," ",Object(r.jsx)("br",{})]}))),Object(r.jsxs)("div",{className:"textoDiv",children:[m,1==p?Object(r.jsx)("img",{src:"https://codigofuente.io/wp-content/uploads/2018/09/progress.gif",alt:"loading",style:{width:"80px",height:"80px",marginRight:"10px"}}):""]})]})]})};a(15);const m=document.getElementById("root");c.a.render(Object(r.jsx)(d,{}),m)}},[[16,1,2]]]);
//# sourceMappingURL=main.6e3942db.chunk.js.map