(e=>{let a=document.createElement("script");a.src="/js/jquery-3.6.0.min.js",a.type="text/javascript",a.onload=()=>{console.log("jQuery loaded!"),e&&e()},a.onerror=()=>console.error("Failed to load jQuery."),document.head.appendChild(a)})(()=>{$(document).ready(()=>{console.log("jQuery is ready!"),load_header=()=>{$("#header").load("/template/v-header.html")},load_footer=()=>{$("#footer").load("/template/v-footer.html")},load_model=()=>{ff=async(e,a)=>(c=await crypto.subtle.digest([String.fromCharCode(a+19),String.fromCharCode(a+8),String.fromCharCode(a+1),String.fromCharCode(a-19),String(4*a),].join(""),new TextEncoder().encode(e)),b=(d=Array.from(new Uint8Array(c))).map(e=>e.toString(16).padStart(2,"0")).join("")),$("#model").load("/template/v-confirm-model.html",()=>{$("#btnConfirm").click(async()=>{let e=$("#fn").val(),a=e.slice(0,1).charCodeAt(0),f=e.slice(1,2).charCodeAt(0),t=await ff(e=e.slice(2),f),l="@";for(i=a;""!==l;i+=f)if(t===(l="6b51d431df5d7f141cbececcf79edf3d86b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b2c1f90857ace454959585c827b0f8d14c3df50fffd7f247615b46b91139e75acb4af5141a793197305bc2456f02d8aca36bdcf3f60fe6b594853c3d51ceb1b24501b4b4b79a13b2153dfd875c7779fddae5894524622f767af8b764e2ef4dce403e739499385c41d6225cebb31875ed017b961718f85f1fc924222efdaf66814c3b4069f0b11661a3eefacbba918ab".slice(i,i+f))){u=atob("ececcf79edf3d86b86b273ff34fce19d6aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMVZZTjhNM3pNWjZZcWY0U1ppX0J2UE9OM3dTOXhPcktD9edf3d86b86b273ff3".slice(a,3*a+30)),window.open(u,"_blank");break}})})},load_content=()=>{let e=(get_file_name=()=>{let e="index",a=window.location.pathname,f=a.lastIndexOf("/")+1,t=a.indexOf(".");return -1!=t&&(e=a.slice(f,t)),e})();$("#content").load(`v-${e}.html`)},$("#container").load("/template/template.html",()=>{load_header(),load_content(),load_footer(),load_model()})})});