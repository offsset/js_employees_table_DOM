parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}function a(e){return i(e)||l(e)||r(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function l(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u=document.querySelector("table"),s=document.createElement("form");function d(e,t){var n=document.createElement("div");n.className="notification "+t,n.innerHTML="<p class=title> ".concat(e,"</p>"),u.after(n),setTimeout(function(){n.remove()},3e3)}s.className="new-employee-form",s.innerHTML='\n    <label>Name: <input name="name" type="text" data-qa="name" ></label>\n    <label>Position: \n    <input name="position" type="text" data-qa="position" ></label>\n    <label>Office: <select name="office" data-qa="office> \n    <option value="value0"></option>\n    <option value="Tokio" selected>Tokio</option>\n    <option value="Singapore">Singapore</option>\n    <option value="London">London</option>\n    <option value="New York">New York</option>\n    <option value="Edinburgh">Edinburgh</option>\n    <option value="San Francisco">San Francisco</option>\n  </select></label>\n   <label>Age: <input name="age" type="text"  data-qa="age"></label>\n   <label>Salary: <input name="salary" type="text"  data-qa="salary" ></label>\n   <button>Save to table</button>\n   ',u.after(s);var m=document.querySelector(".new-employee-form");m.addEventListener("click",function(e){if("BUTTON"===e.target.tagName){e.preventDefault();var t=document.createElement("tr"),n=m.elements.name.value,a=m.elements.age.value;if(n.length<4)d("Имя пользователя должно иметь не менее 4 букв","error");else if(a<18)d("Возраст не должен быть меньше 18 лет","error");else if(a>90)d("Возраст не должен быть больше 90 лет","error");else if(Number(a))if(Number(m.elements.salary.value)){var o="$"+new Intl.NumberFormat("en-us").format(m.elements.salary.value);t.innerHTML="\n    <td>".concat(n,"</td>\n    <td>").concat(m.elements.position.value,"</td>\n    <td>").concat(m.elements.office.value,"</td>\n    <td>").concat(a,"</td>\n    <td>").concat(o,"</td>\n "),document.getElementsByTagName("tbody")[0].append(t),m.elements.name.value="",m.elements.age.value="",m.elements.salary.value="",m.elements.position.value="",d("Пользователь добавлен","success")}else d("Значение зарплата должно быть числом","error");else d("Значение возраста должно быть числом","error")}});var f,p,y,v,b=document.querySelector("thead");function g(e){return e.textContent.replace("$","").replace(",","")}function T(e){f===e?p=!p:(f=e,p=!0);var t=document.getElementsByTagName("tbody")[0],n=a(t.getElementsByTagName("tr")).sort(function(t,n){var a,o;switch(!1===p?(a=n.querySelectorAll("td"),o=t.querySelectorAll("td")):(a=t.querySelectorAll("td"),o=n.querySelectorAll("td")),e){case"Name":return a[0].textContent.localeCompare(o[0].textContent);case"Position":return a[1].textContent.localeCompare(o[1].textContent);case"Office":return a[2].textContent.localeCompare(o[2].textContent);case"Age":return a[3].textContent-o[3].textContent;case"Salary":return g(a[4])-g(o[4])}}),o=document.createElement("tbody");o.innerHTML="\n    ".concat(n.map(function(e){var t=e.querySelectorAll("td");return"<tr>\n    <td>".concat(t[0].innerText,"</td>\n    <td>").concat(t[1].innerText,"</td>\n    <td>").concat(t[2].innerText,"</td>\n    <td>").concat(t[3].innerText,"</td>\n    <td>").concat(t[4].innerText,"</td>\n    </tr>\n    ")}).join(""),"\n    "),t.replaceWith(o)}b.addEventListener("click",function(e){"TH"!==!e.target.tagName&&T(e.target.textContent)});var x=function(){function t(n){e(this,t),this.textarea=n}return n(t,[{key:"activ",value:function(){v.focus()}}]),t}();document.addEventListener("dblclick",function(e){y||(y=e.target.closest("td"))&&((v=document.createElement("textarea")).value=y.innerHTML,v.classList.add("cell-input"),y.style.display="none",y.after(v),new x(v).activ())}),document.addEventListener("keydown",function(e){"Enter"===e.key&&(0!==v.value.length&&(y.innerHTML=v.value),v.remove(),y.style.display="",y="")}),document.addEventListener("keydown",function(e){"Tab"===e.key&&(0!==v.value.length&&(y.innerHTML=v.value),v.remove(),y.style.display="",y="")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ea69c9a9.js.map