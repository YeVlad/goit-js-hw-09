import"./assets/modulepreload-polyfill-3cfb730f.js";const e="feedback-form-state",a=document.querySelector("input"),s=document.querySelector("textarea"),r=document.querySelector("form");localStorage.getItem(e)===null&&localStorage.setItem(e,JSON.stringify({email:"",message:""}));const m=JSON.parse(localStorage.getItem(e)),i=m.email||"",n=m.message||"";a.value=i;s.value=n;r.addEventListener("input",c);r.addEventListener("submit",g);function c(t){const o=t.target.value.trim(),l=JSON.parse(localStorage.getItem(e));t.target.name==="email"?l.email=o:t.target.name==="message"&&(l.message=o),localStorage.setItem(e,JSON.stringify(l))}function g(t){if(t.preventDefault(),a.value.trim()===""||s.value.trim()===""){alert("All form fields must be filled in!");return}console.log({email:a.value.trim(),message:s.value.trim()}),localStorage.setItem(e,JSON.stringify({})),a.value="",s.value=""}
//# sourceMappingURL=commonHelpers2.js.map