(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["forum/app"];var o=t.n(e);const r=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var n=t.n(r);function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}const c=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var i=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,u(e,r);var c=n.prototype;return c.oncreate=function(t){document.getElementById("supporthtml").innerHTML=o().forum.attribute("nodeloc-support-widget.customCode")},c.className=function(){return"support-widget"},c.icon=function(){return"far fa-handshake"},c.title=function(){return o().translator.trans("nodeloc-support-widget.forum.widget.title")},c.content=function(){return m("div",{class:"htmlwidget",id:"supporthtml"})},n}(t.n(c)());o().initializers.add("nodeloc/support-widget",(function(){var t;t=o(),(new(n())).add({key:"Support",component:i,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"nodeloc-support-widget")}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map