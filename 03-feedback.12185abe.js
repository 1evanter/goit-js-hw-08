!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i="Expected a function",o=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return o;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?o:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),function(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(i);function x(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function h(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function j(){var e,n,i,o=g();if(h(o))return S(o);f=setTimeout(j,(e=o-l,n=o-c,i=t-e,d?p(i,a-n):i))}function S(e){return(f=void 0,m&&o)?x(e):(o=r=void 0,u)}function T(){var e,n=g(),i=h(n);if(o=arguments,r=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(j,t),s?x(e):u;if(d)return f=setTimeout(j,t),x(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:S(g())},T}(e,t,{leading:o,maxWait:t,trailing:r})};let x={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},h="feedback-form-state",j={email:"",message:""};x.form.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(){j.email=x.input.value,j.message=x.textarea.value;let e=JSON.stringify(j);localStorage.setItem(h,e)},500)),x.form.addEventListener("submit",function(e){e.preventDefault(),""===x.input.value||""===x.textarea.value?alert("Fill all the fields!"):(console.log(j),e.currentTarget.reset(),localStorage.removeItem(h))}),function(){let e=localStorage.getItem(h),t={};if(e){try{t=JSON.parse(e)}catch(e){console.log(e.name),console.log(e.message)}x.input.value=t.email,x.textarea.value=t.message,j.email=x.input.value,j.message=x.textarea.value}}()}();
//# sourceMappingURL=03-feedback.12185abe.js.map
