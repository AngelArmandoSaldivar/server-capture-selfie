(this["webpackJsonpcapture-selfie"]=this["webpackJsonpcapture-selfie"]||[]).push([[0],{77:function(e,t,o){},79:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(56),r=o.n(a),i=o(57),c=o.n(i),s=o(58),d=o.n(s),l=(o(52),o(124)),b=o(60),j=o.n(b),h=o(61),x=o.n(h),p=o(50),u=o.n(p),g=o(62),O=o.n(g),m=o.p+"static/media/contorno1.71e4b493.png",w=o(1);var v=()=>{const[e,t]=Object(n.useState)(),o=Object(n.useRef)(null),a=Object(n.useRef)(null),[r,i]=Object(n.useState)(!0),[s,b]=Object(n.useState)(!1),[h,p]=Object(n.useState)(!1),[g,v]=Object(n.useState)(!1),[S,f]=Object(n.useState)([]),[y,C]=Object(n.useState)({unit:"%",x:20,y:30,width:60,height:40,aspect:1.5}),[R,F]=Object(n.useState)("null"),[T,E]=Object(n.useState)(!0),[I,k]=Object(n.useState)(null),[_,H]=Object(n.useState)(""),[D,P]=Object(n.useState)(""),[W,B]=Object(n.useState)(""),[L,z]=Object(n.useState)(""),[A,N]=Object(n.useState)(null),[G,U]=Object(n.useState)(""),K=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CLIENT_ID,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CLIENT_SECRET,Object(n.useCallback)((e=>{if(a.current.getScreenshot()){C({unit:"%",x:20,y:30,width:60,height:40,aspect:1.5});const e=new FileReader;k(a.current.getScreenshot()),t(a.current.getScreenshot());const o=["",new Uint8Array([10]),new Uint32Array([2])],n=new File([o],"file.png",{lastModified:new Date(2022,0,5),type:""});e.readAsDataURL(n),i(!r),b(!s),E(!1)}}),[a])),J=Object(n.useCallback)((e=>{o.current=e}),[]);const M=(e,t)=>new Promise(((o,n)=>{const a=new Image;a.src=e,a.onload=()=>{const e=document.createElement("canvas"),n=a.naturalWidth/a.width,r=a.naturalHeight/a.height;e.width=t.width,e.height=t.height;e.getContext("2d").drawImage(a,t.x*n,t.y*r,t.width*n,t.height*r,0,0,t.width,t.height),e.toBlob((e=>{const t=new FileReader;t.readAsDataURL(e),t.onloadend=()=>{f(S.concat(t.result)),o(t.result)}}),"image/jpeg"),b(!s),p(!h)},a.onerror=e=>{n(e)}}));var V=async e=>{var t=e[0].replace(new RegExp("data:image/jpeg;base64,","gi"),""),o=e[1].replace(new RegExp("data:image/jpeg;base64,","gi"),""),n=e[2].replace(new RegExp("data:image/jpeg;base64,","gi"),"");const a=new Headers;a.append("Content-Type","application/json");const r=JSON.stringify({ineFront:t,ineBack:o,selfie:n});fetch("https://server-capture-selfie-b01dd8c9a312.herokuapp.com/verificationCustomer",{method:"GET",headers:a,body:r,redirect:"follow"}).then((e=>e.text())).then((e=>{console.log("RESPONSE: "+e)})).catch((e=>console.error(e)))};const q={contenedor:{width:"100%",border:"1px solid black",textAlign:"center",backgroundColor:"#c0c0c0",fontFamily:["Open Sans","Helvetica","sans-serif"].join(","),padding:"20px",boxSizing:"border-box",color:"#333"},botonFoto:{color:"white",border:"1px solid #007BFF",backgroundColor:"#007BFF",margin:"10px",width:"200px",height:"50px",justifyContent:"center",alignItems:"center",borderRadius:"5px",transition:"background-color 0.3s ease"},botonFotoHover:{backgroundColor:"#0056b3",border:"1px solid white",margin:"10px 0"},titulo:{fontSize:"1.5em",fontWeight:"bold",margin:"10px 0",backgroundColor:"#007BFF",color:"white",padding:"10px",borderRadius:"5px","@media (max-width: 768px)":{fontSize:"1.5em"}},subtitulo:{fontSize:"1.5em",margin:"10px 0",backgroundColor:"#007BFF",color:"white",padding:"10px",borderRadius:"5px","@media (max-width: 768px)":{fontSize:"1.2em"},margin:"10px 0",backgroundColor:"#007BFF",color:"white",padding:"10px",borderRadius:"5px"},textoGeneral:{fontSize:"1em",lineHeight:"1.5",margin:"10px 0",backgroundColor:"rgba(255, 255, 255, 0.8)",color:"#333",padding:"10px",borderRadius:"5px","@media (max-width: 768px)":{fontSize:"1em"}},recuadroPunteadoInterno:{border:"2px dashed white",position:"absolute",width:"60%",height:"40%",top:"50%",left:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none",maxWidth:"80%",maxHeight:"60%"},imagenOvalada:{position:"absolute",width:"90%",height:"100%",top:"50%",left:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none",maxWidth:"1000%",maxHeight:"100%"},"@media (min-width: 769px) and (max-width: 1024px)":{width:"85vw",height:"95vh"},"@media (min-width: 1025px)":{width:"90vw",height:"100vh"},webcamContenedor:{position:"relative",width:"100%",height:"auto",marginBottom:"20px",borderRadius:"10px",overflow:"hidden"},webcam:{width:"100%",height:"auto",borderRadius:"10px"},imagenRecortada:{width:"100%",height:"auto",maxWidth:"100%",maxHeight:"500px",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},cropContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"auto",margin:"0 auto",borderRadius:"10px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}};return Object(w.jsxs)("div",{className:"App",style:q.contenedor,children:[r&&Object(w.jsxs)("div",{style:{...q.textoGeneral,...q.colorTexto},children:[0===S.length&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{style:q.titulo,children:"Camara Trasera"}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"Coloca tu documento de identidad dentro del recuadro para realizar la captura."})]}),1===S.length&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{style:q.titulo,children:"Camara Delantera"}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"Coloca tu documento de identidad dentro del recuadro para realizar la captura."})]}),2===S.length&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{children:"T\xf3mate una Selfie"}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"Coloca tu rostro dentro del \xf3valo para realizar la captura."})]}),Object(w.jsxs)("div",{style:q.webcamContenedor,children:[Object(w.jsx)(d.a,{videoConstraints:2===S.length?{facingMode:"user"}:{facingMode:"environment"},audio:!1,ref:a,screenshotFormat:"image/jpeg",style:q.webcam}),T&&Object(w.jsx)("div",{style:2===S.length?q.ovaloPunteadoInterno:q.recuadroPunteadoInterno}),2===S.length?Object(w.jsx)("img",{src:m,alt:"Oval overlay",style:q.imagenOvalada}):Object(w.jsx)("div",{style:q.recuadroPunteadoInterno})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("center",{children:[" ",Object(w.jsx)(l.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(w.jsx)(j.a,{}),style:q.botonFoto,onClick:K,children:"Tomar foto"})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{})]}),s&&Object(w.jsxs)("div",{style:{...q.textoGeneral,...q.colorTexto},children:[Object(w.jsx)("h1",{style:{...q.titulo,...q.colorTexto},children:"Recortar foto"}),Object(w.jsx)("span",{style:{...q.textoGeneral,...q.colorTexto},children:"Recorta la foto del documento para obtener un mejor resultado."}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{style:q.cropContainer,children:Object(w.jsx)(c.a,{src:e,crop:y,onImageLoaded:J,onChange:e=>C(e),onComplete:e=>{B(e.x),z(e.y),H(e.width),P(e.height)},style:{maxWidth:"100%",maxHeight:"100%"}})}),Object(w.jsx)("center",{children:Object(w.jsx)(l.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(w.jsx)(x.a,{}),style:q.botonFoto,onClick:()=>(async e=>{if(I&&_&&D){e.width=_,e.height=D,e.x=W,e.y=L;const t=await M(I,e);F(t)}})(y),children:"Recortar Foto"})}),Object(w.jsx)("span",{style:{marginLeft:"20px"}}),Object(w.jsx)("center",{children:Object(w.jsx)(l.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(w.jsx)(u.a,{}),style:q.botonFoto,onClick:()=>{if(i(!r),b(!s),E(!0),1==h)return S.length>0?S=[]:""},children:"Repetir foto"})}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{})]}),h&&Object(w.jsxs)("div",{style:{...q.textoGeneral,...q.colorTexto},children:[Object(w.jsxs)("div",{style:{...q.textoGeneral,...q.colorTexto},children:[Object(w.jsx)("h2",{style:q.titulo,children:"Foto capturada"}),Object(w.jsxs)("span",{style:q.textoGeneral,children:["Verifique la foto recortada",Object(w.jsx)("br",{}),Object(w.jsx)("br",{})]}),Object(w.jsx)("img",{alt:"Crop",style:q.imagenRecortada,src:R})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("center",{children:Object(w.jsx)(l.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(w.jsx)(u.a,{}),style:q.botonFoto,onClick:()=>{p(!h),i(!r),E(!0),S.pop()},children:"Repetir foto"})}),Object(w.jsx)("span",{style:{marginLeft:"20px"}}),Object(w.jsx)("center",{children:Object(w.jsx)(l.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(w.jsx)(O.a,{}),style:q.botonFoto,onClick:()=>{p(!h),i(!r),E(!0),C({x:70,y:50,width:220,height:250}),3==S.length&&(i(!1),b(!1),p(!1),v(!g),V(S))},children:"Continuar"})}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{})]})]}),g&&Object(w.jsx)("div",{style:{...q.contenedor,...q.colorTexto},children:Object(w.jsx)("h1",{style:q.titulo,children:G})})]})};o(77);const S=document.getElementById("root");r.a.render(Object(w.jsx)(v,{}),S)}},[[79,1,2]]]);
//# sourceMappingURL=main.1d205240.chunk.js.map