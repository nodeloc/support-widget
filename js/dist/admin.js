(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var o=t.n(e);function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}const n=flarum.core.compat["forum/app"];var a=t.n(n);const i=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var s=function(t){var e,o;function n(){return t.apply(this,arguments)||this}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,r(e,o);var i=n.prototype;return i.oncreate=function(t){document.getElementById("supporthtml").innerHTML=a().forum.attribute("nodeloc-support-widget.customCode")},i.className=function(){return"support-widget"},i.icon=function(){return"far fa-file-code"},i.content=function(){return m("div",{class:"htmlwidget",id:"supporthtml"})},n}(t.n(i)());const c=flarum.core.compat["admin/app"];var u=t.n(c);u().initializers.add("nodeloc/support-widget",(function(){var t;t=u(),(new(o())).add({key:"Support",component:s,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"nodeloc-support-widget"),u().extensionData.for("nodeloc-support-widget").registerSetting((function(){var t=u().translator.trans("nodeloc-support-widget.admin.warningmessage"),e=u().translator.trans("nodeloc-support-widget.admin.warningtext");return $("textarea").keyup((function(){var t=$("#htmltext").val();$("#liveoutp").attr("srcdoc",t)})),m("div",{className:"Form-group settingscustomhtml"},m("label",null,e),m("aside",{class:"customhtmlwarning"},t),m("div",{class:"textandprw"},m("textarea",{id:"htmltext",className:"FormControl customhtmlbox",bidi:this.setting("nodeloc-support-widget.customCode")}),m("iframe",{class:"liveoutp",id:"liveoutp"})))}))}))})(),module.exports={}})();
//# sourceMappingURL=admin.js.map