(this["webpackJsonpcapture-selfie"]=this["webpackJsonpcapture-selfie"]||[]).push([[0],{77:function(e,t,o){},79:function(e,t,o){"use strict";o.r(t);var a=o(0),c=o(55),n=o.n(c),i=o(56),s=o.n(i),r=o(57),l=o.n(r),d=(o(71),o(125)),b=o(124),j=o(59),h=o.n(j),p=o(60),O=o.n(p),u=o(50),m=o.n(u),I=o(61),x=o.n(I),g=o(1);var S=()=>{const[e,t]=Object(a.useState)(),o=Object(a.useRef)(null),[c,n]=Object(a.useState)({x:70,y:50,width:220,height:250}),i=Object(a.useRef)(null),[r,j]=Object(a.useState)(!0),[p,u]=Object(a.useState)(!1),[I,S]=Object(a.useState)(!1),[C,w]=Object(a.useState)(!1),[Z,f]=Object(a.useState)([]),[v,y]=Object(a.useState)(""),[T,N]=Object(a.useState)(null),[W,R]=Object(a.useState)(""),[z,k]=Object(a.useState)(""),[G,Y]=Object(a.useState)(""),[J,V]=Object(a.useState)(""),[F,E]=Object(a.useState)(null),[A,B]=Object(a.useState)(""),_=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CLIENT_ID,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CLIENT_SECRET,Object(a.useCallback)((e=>{if(i.current.getScreenshot()){const e=new FileReader;N(i.current.getScreenshot()),t(i.current.getScreenshot());const o=["",new Uint8Array([10]),new Uint32Array([2])],a=new File([o],"file.png",{lastModified:new Date(2022,0,5),type:""});e.readAsDataURL(a),j(!r),u(!p)}}),[i])),L=Object(a.useCallback)((e=>{o.current=e}),[]);const X=(e,t)=>new Promise(((o,a)=>{const c=new Image;c.src=e,c.onload=()=>{const e=document.createElement("canvas"),a=c.naturalWidth/c.width,n=c.naturalHeight/c.height;e.width=t.width,e.height=t.height;e.getContext("2d").drawImage(c,t.x*a,t.y*n,t.width*a,t.height*n,0,0,t.width,t.height),e.toBlob((e=>{const t=new FileReader;t.readAsDataURL(e),t.onloadend=()=>{f(Z.concat(t.result)),o(t.result)}}),"image/jpeg"),u(!p),S(!I)},c.onerror=e=>{a(e)}}));var D=e=>{var t=async function(){const e={method:"GET",redirect:"follow"},t=await fetch("https://server-capture-selfie-b01dd8c9a312.herokuapp.com/getToken",e).then((e=>e.text()));return t}(),o=e[0].replace(new RegExp("data:image/jpeg;base64,","gi"),""),a=e[1].replace(new RegExp("data:image/jpeg;base64,","gi"),""),c=e[2].replace(new RegExp("data:image/jpeg;base64,","gi"),"");const n=new Headers;n.append("Content-Type","application/json"),n.append("Authorization","Bearer "+t);const i=JSON.stringify({id:Object(d.a)(),frontImage:o,backImage:a,faceImage:c});fetch("https://veridocid.azure-api.net/api/id/v3/verify",{method:"POST",headers:n,body:i,redirect:"follow"}).then((e=>e.text())).then((e=>{console.log("=====ENTRASTE A VERIFICACION DOCUMENTO======"),console.log("RESULT: "+e),B("Espere mientras se verifica tu informaci\xf3n..."),setTimeout((()=>{const t=new Headers;t.append("Content-Type","application/json"),t.append("Authorization","Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlF6TnNRbUpBNm45NUt6cWMyb2NVUSJ9.eyJpc3MiOiJodHRwczovL3Zlcmlkb2NpZC5hdXRoMC5jb20vIiwic3ViIjoic01zZUFVeHpTRTJBNXdOZTJ0eW9TMUNxWEtkT2lLUHhAY2xpZW50cyIsImF1ZCI6InZlcmlkb2NpZCIsImlhdCI6MTcxMzg5Mjc4NCwiZXhwIjoxNzEzOTc5MTg0LCJzY29wZSI6ImlkIG9jciBjdXJwIGluZSBuc3MgcmZjOnZhbGlkYXRlIGNyZWRpdCBmYWNlOmVucm9sbCBpZDpmYWNlIGlkOmJsYWNrbGlzdCBpZDpsaXZlbmVzcyBjaGVjazplbWFpbCBjaGVjazpwaG9uZSBjaGVjazppcCBpbXNzIGNoZWNrOmJsYWNrbGlzdCBzaWduOnN1bWEgY2hlY2s6bGlzdDY5IGxlZ2FscmVjb3JkIGNpZiBjZmRpIG9jIGlkOmZyYXVkIHdlYmhvb2s6Z2V0IHdlYmhvb2s6YWRkIHdlYmhvb2s6dXBkYXRlIHdlYmhvb2s6ZGVsZXRlIG11YSByZXBzZSBjaGVjazpmcmF1ZGxpc3QgZW50ZXJwcmlzZSBpZDpzZWN1cml0eWZlYXR1cmVzIGlkOm1hbnkiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJhenAiOiJzTXNlQVV4elNFMkE1d05lMnR5b1MxQ3FYS2RPaUtQeCIsInBlcm1pc3Npb25zIjpbImlkIiwib2NyIiwiY3VycCIsImluZSIsIm5zcyIsInJmYzp2YWxpZGF0ZSIsImNyZWRpdCIsImZhY2U6ZW5yb2xsIiwiaWQ6ZmFjZSIsImlkOmJsYWNrbGlzdCIsImlkOmxpdmVuZXNzIiwiY2hlY2s6ZW1haWwiLCJjaGVjazpwaG9uZSIsImNoZWNrOmlwIiwiaW1zcyIsImNoZWNrOmJsYWNrbGlzdCIsInNpZ246c3VtYSIsImNoZWNrOmxpc3Q2OSIsImxlZ2FscmVjb3JkIiwiY2lmIiwiY2ZkaSIsIm9jIiwiaWQ6ZnJhdWQiLCJ3ZWJob29rOmdldCIsIndlYmhvb2s6YWRkIiwid2ViaG9vazp1cGRhdGUiLCJ3ZWJob29rOmRlbGV0ZSIsIm11YSIsInJlcHNlIiwiY2hlY2s6ZnJhdWRsaXN0IiwiZW50ZXJwcmlzZSIsImlkOnNlY3VyaXR5ZmVhdHVyZXMiLCJpZDptYW55Il19.hzYUMxKpf2mvBPJ67YiW0kAWE39qiQ5LvgpbZ7rY2-K7ek2czP5M71aAm-I2zK294c_YgX7bd7TXqs5nlLBfv53jo26JBl_FOFhZkisXcxguAvVW8XHRF5kOPoehF3Cny9SSKjQPzCOS9jwE4mrLtOjz0nLAg1GvcaivFSSTQDoik4aLUXGEs7yTjV-YNZjXQuml1DvLYcLmk_-Uh1s4B_wO4UceMT4UaBlfl7_FK4ePjrQIeuiou4gzkyTw9fNbHBI_Ub3RGW_jQjUaJdV7fGixvQF6fXnnCDOZ2GN_7MlvjahLJ4Ci94AeoWVL9iawr95RX9WwZCpG4sVxoK5FIQ");const o={method:"POST",headers:t,body:JSON.stringify({uuid:e,includeImages:!1}),redirect:"follow"};fetch("https://veridocid.azure-api.net/api/id/v3/results",o).then((e=>e.text())).then((e=>{e.identifier?(B("Datos enviados con exito!"),H(e)):setTimeout((()=>{fetch("https://veridocid.azure-api.net/api/id/v3/results",o).then((e=>e.text())).then((e=>{e.identifier?(B("Datos enviados con exito!"),H(e)):setTimeout((()=>{fetch("https://veridocid.azure-api.net/api/id/v3/results",o).then((e=>e.text())).then((e=>{B("Datos enviados con exito!"),H(e)}))}),2e4)}))}),2e4)})).catch((e=>console.error(e)))}),2e4)})).catch((e=>console.error(e)))};function H(e){const t=new Headers;t.append("Content-type","application/json"),t.append("Authorization",'OAuth realm="9323217",oauth_consumer_key="6909223765d68229f521ae5355031e937bc39ff684ce9a38ca644f8c9929bf1a",oauth_token="5e39a16ee321f9fab4d635bc694decb02b470de42e13c362d5f0f9b8a6b8b471",oauth_signature_method="HMAC-SHA256",oauth_timestamp="1713912081",oauth_nonce="6Tu5El2vtpR",oauth_version="1.0",oauth_signature="WRW4XjcugcHH2ZvVCG4fvedjR38cGU48o52pw0aTC2E%3D"'),t.append("Cookie","_abck=6D4A99472AEB74D57807B05C3A17AEDB~-1~YAAQT8X3vQ9lDPOOAQAASPMV+AsVpjjapbj7mcumlFM2pZPpqIkbiUbGehCqxvzPkEJWsq8yYJw9JplexuTsWQ//ihXsGyr+rDVytKoTJaqIKgVjMIHBZRG505cwIIYYG1+vE9MXYv145n/K/Jv3b71L1xG3fUJTHe6+hJuFWbKcorIQMg47R1Kd0N3SVHuzN83qR33eyVWma8XS5D5MoYGO7oKVlkE2cRoAmDkyAbgX6nBywfgLbOaEC6g8/AFU8RLiA/dPrqqpxfIzUwKji9WeSBqEAnPH6kI9hg7NpBl+DFbtdiLqLq0KmfJnwxIiPC/8iYcWBXWP/VPtzQTCfFaDn8v4Vqy+/kbjvt/l+dZtb1HT9NlI2lVAUL24jWLQSZgeP5HciwFh~-1~-1~-1");const o=JSON.stringify({nombre:"123"});fetch("https://9323217.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=383&deploy=1&123",{method:"POST",headers:t,body:o,redirect:"follow",mode:"cors"}).then((e=>e.text())).then((e=>console.log(e))).catch((e=>console.error(e)))}const U={contenedor:{width:"100%",border:"1px solid black",textAlign:"center",backgroundColor:"#3f3c38",fontFamily:["Open Sans","Helvetica","sans-serif"].join(",")},botonFoto:{color:"white",border:"1px solid white"},titulo:{fontSize:"12pt"},subtitulo:{fontSize:"11pt"},textoGeneral:{fontSize:"10pt"},colorTexto:{color:"white"}};return Object(g.jsxs)("div",{className:"App",style:U.contenedor,children:[r&&Object(g.jsxs)("div",{style:U.colorTexto,children:[0==Z.length&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{style:U.titulo,children:"Camara Trasera"}),Object(g.jsx)("br",{}),"Coloca tu documento de identidad dentro del ",Object(g.jsx)("br",{}),"reacuadro para realizar la captura ",Object(g.jsx)("br",{})]}),1==Z.length&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Camara Delantera"}),Object(g.jsx)("br",{}),"Coloca tu documento de identidad dentro del ",Object(g.jsx)("br",{}),"reacuadro para realizar la captura ",Object(g.jsx)("br",{})]}),2==Z.length&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"T\xf3mate una Selfie"}),Object(g.jsx)("br",{}),"Coloca tu rostro dentro del ",Object(g.jsx)("br",{}),"reacuadro para realizar la captura ",Object(g.jsx)("br",{})]}),Object(g.jsx)(l.a,{videoConstraints:2==Z.length?{facingMode:"user"}:{facingMode:"environment"},audio:!1,ref:i,screenshotFormat:"image/jpeg",style:{width:"100%",height:"500px"}}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(b.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(g.jsx)(h.a,{}),style:U.botonFoto,onClick:_,children:"Tomar foto"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]}),p&&Object(g.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[Object(g.jsx)("h1",{style:U.titulo,children:"Recortar foto"}),Object(g.jsx)("span",{style:U.textoGeneral,children:"Recorta la foto del documento para obtener un mejor resultado."}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{style:{width:"100%",height:"500px"},children:Object(g.jsx)(s.a,{src:e,onImageLoaded:L,crop:c,onChange:e=>n(e),onComplete:e=>{(e=>{Y(e.x),V(e.y),R(e.width),k(e.height)})(e)}})}),Object(g.jsx)(b.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(g.jsx)(O.a,{}),style:U.botonFoto,onClick:async e=>{if(T&&W&&z){e.width=W,e.height=z,e.x=G,e.y=J;const t=await X(T,e);y(t)}},children:"Recortar Foto"}),Object(g.jsx)("span",{style:{marginLeft:"20px"}}),Object(g.jsx)(b.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(g.jsx)(m.a,{}),style:U.botonFoto,onClick:()=>{if(j(!r),u(!p),1==I)return Z.length>0?Z=[]:""},children:"Repetir foto"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]}),I&&Object(g.jsxs)("div",{style:U.colorTexto,children:[Object(g.jsxs)("div",{style:{width:"100%",height:"15%"},children:[Object(g.jsx)("h2",{style:U.titulo,children:"Foto capturada"}),Object(g.jsxs)("span",{style:U.textoGeneral,children:["Verifique la foto recortada",Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]}),Object(g.jsx)("img",{alt:"Crop",style:{height:"500px"},src:v})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)(b.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(g.jsx)(m.a,{}),style:U.botonFoto,onClick:()=>{S(!I),j(!r),Z.pop()},children:"Repetir foto"}),Object(g.jsx)("span",{style:{marginLeft:"20px"}}),Object(g.jsx)(b.a,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:Object(g.jsx)(x.a,{}),style:U.botonFoto,onClick:()=>{S(!I),j(!r),n({x:70,y:50,width:220,height:250}),3==Z.length&&(j(!1),u(!1),S(!1),w(!C),D(Z))},children:"Continuar"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})]}),C&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{style:U.colorTexto,children:Object(g.jsxs)("h1",{style:U.titulo,children:[" ",A," "]})})})]})};o(77);const C=document.getElementById("root");n.a.render(Object(g.jsx)(S,{}),C)}},[[79,1,2]]]);
//# sourceMappingURL=main.50424d23.chunk.js.map