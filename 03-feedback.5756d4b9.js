var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return s.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return g(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,u,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function x(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function h(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function j(){var e,n,i,o=p();if(h(o))return S(o);f=setTimeout(j,(e=o-l,n=o-c,i=t-e,d?v(i,a-n):i))}function S(e){return(f=void 0,b&&o)?x(e):(o=r=void 0,u)}function T(){var e,n=p(),i=h(n);if(o=arguments,r=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(j,t),s?x(e):u;if(d)return f=setTimeout(j,t),x(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=y(t)||0,g(i)&&(s=!!i.leading,a=(d="maxWait"in i)?m(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:S(p())},T}(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},x="feedback-form-state",h={email:"",message:""};b.form.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(){h.email=b.input.value,h.message=b.textarea.value;let e=JSON.stringify(h);localStorage.setItem(x,e)},500)),b.form.addEventListener("submit",function(e){e.preventDefault(),""===b.input.value||""===b.textarea.value?alert("Fill all the fields!"):(console.log(h),e.currentTarget.reset(),localStorage.removeItem(x))}),function(){let e=localStorage.getItem(x),t={};if(e){try{t=JSON.parse(e)}catch(e){console.log(e.name),console.log(e.message)}b.input.value=t.email,b.textarea.value=t.message,h.email=b.input.value,h.message=b.textarea.value}}();
//# sourceMappingURL=03-feedback.5756d4b9.js.map