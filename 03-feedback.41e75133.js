var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var o,i,r,a,f,u,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,f=setTimeout(w,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=r}function w(){var e=m();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return v?d(n,r-(e-c)):n}(e))}function O(e){return f=void 0,b&&o?y(e):(o=i=void 0,a)}function S(){var e=m(),n=j(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return h(u);if(v)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,r=(v="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},S.flush=function(){return void 0===f?a:O(m())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const b={},y=document.querySelector(".feedback-form");y[2];y.addEventListener("input",t((function(e){b[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),function(){if(localStorage.getItem("feedback-form-state"))try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));for(const t in e)b[t]=e[t],y[t].value=e[t]}catch(e){console.log(e)}}(),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(b),localStorage.removeItem("feedback-form-state"),y.elements.email.value="",y.elements.message.value=""}));
//# sourceMappingURL=03-feedback.41e75133.js.map
