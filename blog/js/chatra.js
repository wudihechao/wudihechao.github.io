/*!
 * ··· Chatra | https://chatra.io/
 */
!function(a,b){function c(){}function d(a,b){a=a||{},b=b||{};for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function e(a){var b=0;for(var c in a)a.hasOwnProperty(c)&&b++;return b}function f(a,b){if(e(a)!=e(b))return!1;for(var c in a)if(a.hasOwnProperty(c)&&b[c]!=a[c])return!1;return!0}function g(a,b){new RegExp("(\\s|^)"+b+"(\\s|$)").test(a.className)||(a.className+=" "+b)}function h(a,b){a.className=a.className.replace(new RegExp("(\\s+|^)"+b+"(\\s+|$)","g")," ").replace(/^\s+|\s+$/g,"")}function i(a){a.parentNode&&a.parentNode.removeChild(a)}function j(a){var c=["Webkit","Moz","ms"],d=b.createElement("div");if(void 0!==d.style[a])return!0;a=a.charAt(0).toUpperCase()+a.slice(1);for(var e in c)if(void 0!==d.style[c[e]+a])return!0;return!1}function k(a,b,c,d){return b?(a.addEventListener(b,c,!!d),function(){l(a,b,c,d)}):void 0}function l(a,b,c,d){b&&a.removeEventListener(b,c,!!d)}function m(a,c){var d=new Date;d.setTime(d.getTime()+31536e7),b.cookie=a+"="+c+";expires="+d.toGMTString()+";"}function n(a){var c=b.cookie.split(";");a+="=";for(var d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(a))return e.substring(a.length,e.length)}}function o(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function p(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))}function q(a){return a%2==1}function r(b){var c=!0;for(var d in b)b.hasOwnProperty(d)&&!{string:1,"boolean":1,number:1}[typeof b[d]]&&null!==b[d]&&(a.console&&a.console.warn&&a.console.warn("Chatra integration error: We accept Strings, Numbers, Booleans and null as integration property values. `"+d+"`’s type is `"+typeof b[d]+"`."),c=!1);return c}function s(a){for(var b in a)null!==a[b]&&(a[b]=a[b].toString());return a}function t(a){if(!a)return{};var b=document.createElement("a");return b.href=a,b}function u(){var a;try{a=b.querySelector('meta[name="viewport" i]')}catch(c){a=b.querySelector('meta[name="viewport"]')}return a}function v(){function e(a){return function(){C[a].apply(C,arguments)}}var l=function(){arguments.length&&("function"==typeof l[arguments[0]]&&"_"!=arguments[0][0]?l[arguments[0]].apply(l,Array.prototype.slice.call(arguments,1)):console.warn("Chatra: No such method: "+arguments[0]))},C=l;d(l,{_init:function(){if(!a.ChatraID)return void console.warn("Chatra: No ChatraID specified, shutting down");if(x){var c=C._sniff=x(a.navigator.userAgent),d=C._setup=a.ChatraSetup||{},e=C._displayMode=d.mode||"widget";if(C._isMobile=c.features.mobile,"trident"==c.browser.engine&&c.browser.majorVersion&&c.browser.majorVersion<=10)return void C.kill();if(C._isSafari="safari"===c.browser.name||"ios"===c.os.name,"widget"==e&&d.mobileOnly===!0&&!C._isMobile)return void C.kill();if("widget"==e&&d.disabledOnMobile===!0&&C._isMobile)return void C.kill();C._features={transform:j("transform"),transition:j("transition")};var f=C._iframe=b.createElement("iframe"),g=C._wrapper=b.createElement("div"),h=C._iframeWrapper=b.createElement("div"),i=C._style=b.createElement("style"),k=b.getElementsByTagName("head")[0],l=a.ChatraProtocol||"https:",m=a.ChatraHost||"chat.chatra.io",n=a.ChatraID,p=C._clientId=C._getClientId(),q=function(c){var e=function(){f||(!C._killed&&c(),f=!0)},f=!1;d.deferredLoading?"complete"===b.readyState?e():a.addEventListener("load",e,!1):(b.attachEvent?"complete"===b.readyState:"loading"!==b.readyState)?e():(b.addEventListener("DOMContentLoaded",e,!1),a.addEventListener("load",e,!1))};C._isSafari&&C._addClass("safari"),"webkit"===c.browser.engine&&C._addClass("webkit"),k.appendChild(i),i.textContent=y,f.setAttribute("frameborder","0"),f.setAttribute("id","chatra__iframe"),f.setAttribute("allowtransparency","true"),f.setAttribute("title","Chatra live chat"),f.setAttribute("allow","autoplay"),g.setAttribute("id","chatra"),h.setAttribute("id","chatra__iframe-wrapper"),C._addAutoRemovableEvent(a,"message",function(a){if(C._iframe.contentWindow===a.source){var b;try{b=JSON.parse(a.data)}catch(c){return}b&&b.type&&"string"==typeof b.type&&"Chatra"===b.sender&&C._messageHandler(b.type,b.data)}}),C._addAutoRemovableEvent(a,"focus",function(){C._postMessage("focus")}),C._addAutoRemovableEvent(a,"blur",function(){C._postMessage("blur")}),C._addAutoRemovableEvent(a,"mousedown",function(){C._postMessage("mousedown")}),C._addAutoRemovableEvent(a,"keyup",function(){C._postMessage("keyup")}),d.groupId=window.ChatraGroupID||d.groupId,C._setReferrer();var r=(navigator.language||navigator.userLanguage||"en").split("-")[0],s=encodeURIComponent(b.referrer),u=encodeURIComponent(C._referrer);if("trident"==c.browser.engine||"edgehtml"==c.browser.engine){if(s.length>800){var v=t(b.referrer);s=encodeURIComponent(v.protocol+"//"+v.host)}if(u.length>800){var w=t(C._referrer);u=encodeURIComponent(w.protocol+"//"+w.host)}}var z="hostId="+n+"&mode="+encodeURIComponent(e)+"#clientId="+encodeURIComponent(p)+("undefined"!=typeof d.groupId?"&groupId="+encodeURIComponent(d.groupId):"")+(C._isMobile?"&isMobile=1":"")+(d.buttonStyle?"&buttonType="+encodeURIComponent(d.buttonStyle):"")+(d.language&&"string"==typeof d.language?"&langOverride="+encodeURIComponent(d.language):"")+"&lang="+encodeURIComponent(r)+"&currentPage="+encodeURIComponent(location.href)+"&currentPageTitle="+encodeURIComponent(b.title)+"&prevPage="+s+"&referrer="+u,A=l+"//"+m+"/?"+z;switch(e){case"frame":var D,E=d.injectTo;if(!E)return console.warn("Chatra: `ChatraSetup.injectTo` is required when using `frame` mode!"),void C.kill();q(function(){return"string"==typeof E?D=b.getElementById(E):E[0]&&E[0].appendChild?D=E[0]:E.appendChild&&(D=E),D?(f.src=A,f.className="chatra__iframe--mode-frame",D.innerHTML="",D.appendChild(f),void(C._attachedToDom=!0)):(console.warn("Chatra: something is wrong with your `ChatraSetup.injectTo`"),void C.kill())});break;default:C._isMobile&&C._addClass("mobile-widget"),C._setButtonType("tab"),C._setChatPosition("br"),f.src=A,f.style.position="absolute",h.appendChild(f),g.appendChild(h),q(function(){if("webkit"==c.browser.engine&&C._addAutoRemovableEvent(g,"wheel",function(a){C._chatExpanded&&o(a)}),C._isMobile&&C._features.transform){setTimeout(function(){C._adjustZoomLevel()},100);var d=C._adjustZoomLevel.bind(C);C._addAutoRemovableEvent(b.body,"touchend",d),C._addAutoRemovableEvent(a,"scroll",d),C._addAutoRemovableEvent(a,"orientationchange",d),C._addAutoRemovableEvent(a,"resize",d)}if(b.body.appendChild(g),C._attachedToDom=!0,a.Shopify&&"function"==typeof a.doShift){var e=a.doShift;a.doShift=function(){var a,b=g.style.position;return g.style.position="absolute",a=e.apply(this,arguments),g.style.position=b,a}}})}a.ChatraIntegration&&C.setIntegrationData(a.ChatraIntegration),d.startHidden&&C.hide(),C.setZIndex("number"==typeof d.zIndex?d.zIndex:C._zIndex),"function"==typeof d.onInit&&d.onInit(),d.colors&&C.setColors(d.colors),d.chatWidth&&C.setChatWidth(d.chatWidth),d.buttonSize&&C.setButtonSize(d.buttonSize),d.chatHeight&&C.setChatHeight(d.chatHeight),d.buttonPosition&&C.setButtonPosition(d.buttonPosition),d.locale&&C.setLocale(d.locale),C.pageView();for(var F=0;F<B.length;F++)C.apply(C,B[F])}},_chatWidth:380,_chatMinWidth:150,_transparentChatWidth:300,_mobileTransparentChatWidth:285,_chatHeight:600,_labelHeight:40,_mobileLabelHeight:40,_roundButtonSize:A,_labelMinWidth:70,_zIndex:9999,setIntegrationData:function(a){r(a)&&C._postMessage("integrationData",s(a))},updateIntegrationData:function(a){r(a)&&C._postMessage("updateIntegrationData",s(a))},pageView:function(){var a={currentPage:b.location.href,currentPageTitle:b.title==C._titleBlink.newTitle?C._titleBlink.originalTitle:b.title,referrer:C._referrer};f(C._lastPageData,a)||(C._lastPageData=a,C._chatReady?C._sendPageInfo(a):C._pageInfoQ.push(a),C._setStoredItem("Chatra.lastPageViewAt",+new Date+""))},setChatWidth:function(a){"number"==typeof a&&(C._chatWidth=a,C._recalcChatSize())},setButtonSize:function(a){"number"==typeof a&&(20>a&&(a=20),C._roundButtonSize=a,C._recalcChatSize())},setChatHeight:function(a){"number"==typeof a&&(C._chatHeight=a,C._recalcChatSize())},setZIndex:function(a){"number"==typeof a&&(C._zIndex=a,C._refreshZIndex())},setButtonPosition:function(a){return-1==["lt","lm","lb","bl","bc","br","rt","rm","rb"].indexOf(a)?void console.warn("Chatra: invalid `positionCode`!"):void C._postMessage("setPosition",a)},resetButtonPosition:function(){C._postMessage("resetPosition")},setColors:function(a){C._postMessage("colors",a)},resetColors:function(){C._postMessage("resetColors")},setLocale:function(a){C._postMessage("setLocale",a)},_openChat:function(a){C._postMessage("openChat",!!a)},openChat:function(a){"widget"==C._displayMode&&C._openChat(!!a)},expandWidget:function(a){"widget"==C._displayMode&&(C._isMobile||C._openChat(!!a))},minimizeWidget:function(){"widget"==C._displayMode&&C._postMessage("collapseChat")},expandChat:e("expandWidget"),collapseChat:e("minimizeWidget"),closeChat:e("minimizeWidget"),hide:function(){"widget"==C._displayMode&&(C._chatHiddenByUser=!0,C._refreshChatVisibility())},show:function(){"widget"==C._displayMode&&(C._chatHiddenByUser=!1,C._refreshChatVisibility())},hideChat:e("hide"),showChat:e("show"),setGroupId:function(a){"undefined"!=typeof a&&C._postMessage("setGroupId",a)},_messageHandler:function(a,b){switch(a){case"setHostedItem":if(!b||"object"!=typeof b||"string"!=typeof b.key)return;C._setHostedItem(b.key,b.value);break;case"apiReady":C._apiReady=!0,C._sendMessageQ();break;case"readyToRetriveHostedStorage":C._sendHostedStorage();break;case"readyToRetriveData":C._chatReady=!0,C._sendFocus(),C._resolvePageInfoQ();break;case"headerReady":C._chatRendered=!0,"function"==typeof C._setup.onRendered&&C._setup.onRendered();break;case"collapseWindow":C._collapseChatWindow();break;case"expandWindow":C._expandChatWindow(b);break;case"hideChat":C._hideChatFromFrame();break;case"showChat":C._showChatFromFrame();break;case"setPosition":if(!b||"string"!=typeof b)return;C._setChatPosition(b);break;case"buttonType":if(!b||"string"!=typeof b)return;C._setButtonType(b);break;case"titleBlink":C._titleBlink(b);break;case"banned":C._setStoredItem("Chatra.banned",b?C._clientId:""),C._refreshChatVisibility();break;case"restart":C.restart();break;case"analyticsEvent":if(!b)return;"string"==typeof b?C._logAnalyticsEvent(b):"object"==typeof b&&C._logAnalyticsEvent(b[0],b[1]);break;case"labelWidth":if("number"!=typeof b&&null!==b)return;C._animating(),C._computedLabelWidth=b,C._recalcChatSize();break;case"transparentChatHeight":if("number"!=typeof b)return;C._transparentChatHeight=b,C._recalcChatSize();break;case"s":C.kill()}},_hideChatFromFrame:function(){C._chatHiddenByFrame=!0,C._refreshChatVisibility()},_showChatFromFrame:function(){C._chatHiddenByFrame=!1,C._refreshChatVisibility()},_getScaleLevel:function(){var c,d=a.screen,e=d.width;return{90:1,"-90":1}[a.orientation]&&"winphone"==C._sniff.os.name&&"trident"==C._sniff.browser.engine&&(e=d.height),c=e<b.documentElement.clientWidth?a.innerWidth/e:a.innerWidth/b.documentElement.clientWidth},_adjustZoomLevel:function(){if(C._isMobile&&C._features.transform&&("webkit"!=C._sniff.browser.engine||"ios"!=C._sniff.os.name)){var a=1;C._chatExpanded&&!C._chatTransparent||(a=C._getScaleLevel()),1.1>a&&(a=1),a=a.toFixed(2),a!=C._scale&&(C._transform.scale=a,C._recalcTransform(),C._scale=a)}},_transform:{},_recalcTransform:function(){var a=(C._transform,"");for(var b in C._transform)C._transform[b]&&C._transform.hasOwnProperty(b)&&(a+=" "+b+"("+C._transform[b]+")");a||(a="none"),C._wrapper.style.transform=C._wrapper.style.WebkitTransform=C._wrapper.style.MozTransform=C._wrapper.style.msTransform=a},_refreshZIndex:function(){C._wrapper.style.zIndex=C._chatExpanded?2147483647:C._zIndex},_refreshChatVisibility:function(){!C._chatRendered||C._chatHiddenByUser||C._chatHiddenByFrame||C._getStoredItem("Chatra.banned")===C._clientId?(C._visible=!1,C._removeClass("visible"),C._postMessage("visible",!1)):(C._visible=!0,C._addClass("visible"),C._postMessage("visible",!0),C._isSafari&&C._safariForceRedraw()),C._refreshMobileBodyFix(),C._refreshMobileViewportFix()},_refreshMobileBodyFix:function(){if(C._isMobile&&"widget"==C._displayMode)if(C._visible&&C._chatExpanded&&!C._chatTransparent){if(C._mobileBodyFixEnabled)return;C._lastScrollTop=a.pageYOffset,C._lastScrollLeft=a.pageXOffset,g(b.body,"chatra-mobile-widget-expanded"),g(b.documentElement,"chatra-mobile-widget-expanded"),C._mobileBodyFixEnabled=!0}else{if(!C._mobileBodyFixEnabled)return;h(b.body,"chatra-mobile-widget-expanded"),h(b.documentElement,"chatra-mobile-widget-expanded"),a.scrollTo(C._lastScrollLeft,C._lastScrollTop),C._mobileBodyFixEnabled=!1}},_refreshMobileViewportFix:function(){if(C._isMobile&&"widget"==C._displayMode&&("android"==C._sniff.os.name&&"webkit"==C._sniff.browser.engine&&C._sniff.os.majorVersion>=4||"ios"==C._sniff.os.name&&"webkit"==C._sniff.browser.engine||"gecko"==C._sniff.browser.engine))if(C._visible&&C._chatExpanded&&!C._chatTransparent){var a=u();a||(a=b.createElement("meta"),a.setAttribute("name","viewport"),document.head.appendChild(a)),C._lastMetaViewportValue=a.getAttribute("content")||"width=none",a.setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no")}else{var a=u();a&&"string"==typeof C._lastMetaViewportValue&&a.setAttribute("content",C._lastMetaViewportValue)}},_chatExpanded:!1,_expandChatWindow:function(a){var b=C._chatTransparent;C._chatExpanded=!0,C._addClass("expanded"),a?(C._chatTransparent=!0,C._addClass("transparent")):(C._chatTransparent=!1,C._removeClass("transparent")),C._refreshZIndex(),C._adjustZoomLevel(),C._isToggling=!0,C._addClass("toggling"),C._animating(function(){C._isToggling=!1,C._removeClass("toggling"),C._isSafari&&C._recalcChatSize(),C._refreshMobileViewportFix(),setTimeout(C._refreshMobileBodyFix.bind(C),250)},b),C._recalcChatSize()},_collapseChatWindow:function(){var a=C._chatTransparent;C._chatExpanded=!1,C._chatTransparent=!1,C._refreshMobileViewportFix(),C._refreshMobileBodyFix(),C._removeClass("expanded"),C._removeClass("transparent"),C._isToggling=!0,C._addClass("toggling"),C._animating(function(){C._isToggling=!1,C._removeClass("toggling"),C._isSafari&&C._recalcChatSize(),C._adjustZoomLevel(),C._refreshZIndex()},a),C._recalcChatSize()},_animating:function(a,b){if(!C._features.transition||!C._chatRendered)return void(a&&a());if("round"==C._buttonType||C._isMobile||C._chatTransparent||b)return C._addClass("fast-toggle"),void(a&&a());C._removeClass("fast-toggle"),C._addClass("animating"),clearTimeout(C._animatingTimer);var c=z+30;C._animatingTimer=setTimeout(function(){C._removeClass("animating"),a&&a()},c)},_setChatPosition:function(a){var b={r:"right",l:"left",c:"center",t:"top",b:"bottom",m:"middle"},c=b[a.charAt(0)],d=b[a.charAt(1)];if(C._isMobile){var e=["0%","0%"];"center"==d&&(e[0]="50%"),"right"!=d&&"right"!=c||(e[0]="100%"),"middle"==d&&(e[1]="50%"),"bottom"==d&&(e[1]="100%"),"bottom"==c&&(e[1]="100%"),C._wrapper.style.transformOrigin=C._wrapper.style.WebkitTransformOrigin=C._wrapper.style.MozTransformOrigin=C._wrapper.style.msTransformOrigin=e.join(" ")}C._side&&C._removeClass("side-"+C._side),C._position&&C._removeClass("pos-"+C._position),C._addClass("side-"+c),C._addClass("pos-"+d),C._side=c,C._position=d,C._recalcChatSize()},_setButtonType:function(a){C._buttonType&&C._removeClass("style-"+C._buttonType),C._addClass("style-"+a),C._buttonType=a,C._recalcChatSize()},_recalcChatSize:function(){var a,b,c=Math.max(C._chatWidth,C._chatMinWidth),d=C._chatHeight,e=Math.max(C._computedLabelWidth||C._chatWidth,C._labelMinWidth),f=C._chatExpanded&&C._isMobile&&!C._chatTransparent,g=!!{left:1,right:1}[C._side];C._iframe.style.width=Math.max(c,g?0:e)+"px",C._iframe.style.height=Math.max(d,g?e:0)+"px",C._chatExpanded?C._chatTransparent?(a=C._isMobile?C._mobileTransparentChatWidth:C._transparentChatWidth,b=C._transparentChatHeight?Math.min(C._transparentChatHeight,d):d):(a=c,b=d):"round"==C._buttonType?a=b=C._roundButtonSize:(a=e,b=C._isMobile?C._mobileLabelHeight:C._labelHeight,g&&(b=[a,a=b][0])),"center"==C._position&&!f&&q(a)&&a++,"middle"==C._position&&!C._chatExpanded&&q(b)&&b++,f?(C._wrapper.style.width="100%",C._wrapper.style.height="100%"):(C._wrapper.style.width=a+"px",C._wrapper.style.height=b+"px"),"middle"!=C._position||C._chatExpanded?"top"!=C._position||C._chatExpanded||"round"==C._buttonType?C._transform.translateY=void 0:C._transform.translateY=C._isToggling&&C._isSafari?b+"px":"100%":C._transform.translateY=C._isToggling&&C._isSafari?b/2+"px":"50%","center"!=C._position||f?C._transform.translateX=void 0:C._transform.translateX="-50%",C._recalcTransform()},_postMessageQ:[],_postMessage:function(a,b){C._apiReady?C._iframe.contentWindow&&C._iframe.contentWindow.postMessage(JSON.stringify({type:a,data:b,sender:"Chatra"}),"*"):C._postMessageQ.push([a,b])},_sendMessageQ:function(){for(;C._postMessageQ.length;)C._postMessage.apply(C,C._postMessageQ.shift())},_pageInfoQ:[],_resolvePageInfoQ:function(){for(;C._pageInfoQ.length;)C._sendPageInfo(C._pageInfoQ.shift())},_sendPageInfo:function(a){C._postMessage("clientData",a)},_sendFocus:function(){var a=b.hasFocus?b.hasFocus():!0;C._postMessage(a?"focus":"blur")},_getClientId:function(){var a=C._getStoredItem("Chatra.clientId"),b=C._setup.clientId;if(b){var c=typeof b;"string"!==c&&"number"!==c||(a=b)}if(a)return a;try{a=w(40)}catch(d){for(var e=(+new Date+"").split(""),f="abcdefghijklmnopqrstuvwxyz".split("");f.length;)e.splice(p(e.length-1),0,f.splice(p(f.length-1),1)[0]);a=e.join("")}return C._setStoredItem("Chatra.clientId",a),a},_setReferrer:function(){var a=b.referrer;if(a&&t(a).host!==location.host)C._referrer=a;else{var c=+(C._getStoredItem("Chatra.lastPageViewAt")||"");new Date-c>36e5?C._referrer=a:C._referrer=C._getStoredItem("Chatra.referrer")||""}C._setStoredItem("Chatra.referrer",C._referrer||"")},_getHostedStorage:function(){var a;try{a=JSON.parse(C._getStoredItem("Chatra.hostedItems"))}catch(b){a={},C._setStoredItem("Chatra.hostedItems","{}")}return a},_sendHostedStorage:function(){C._postMessage("hostedStorage",C._getHostedStorage())},_setHostedItem:function(a,b){if("string"==typeof a){var c=C._getHostedStorage();c[a]=b,C._setStoredItem("Chatra.hostedItems",JSON.stringify(c))}},_getStoredItem:function(a){var b;try{b=localStorage.getItem(a)}catch(c){}return b||n(a)},_setStoredItem:function(a,b){try{localStorage.setItem(a,b)}catch(c){m(a,b)}},_addClass:function(a){for(var b=C._wrapper,c=[].concat(a),d=c.length-1;d>=0;d--)g(b,"chatra--"+c[d])},_removeClass:function(a){for(var b=C._wrapper,c=[].concat(a),d=c.length-1;d>=0;d--)h(b,"chatra--"+c[d])},_safariForceRedraw:function(){C._wrapper.style.zIndex=C._zIndex-1,C._wrapper.offsetWidth,C._refreshZIndex()},_titleBlink:function(a){clearTimeout(C._titleBlink._timeout),C._titleBlink.originalNow&&a?(C._titleBlink.originalTitle=b.title,b.title=C._titleBlink.newTitle=a):(b.title!==C._titleBlink.newTitle&&(C._titleBlink.originalTitle=b.title),b.title=C._titleBlink.originalTitle),C._titleBlink.originalNow=!a||!C._titleBlink.originalNow,a&&(C._titleBlink._timeout=setTimeout(function(){C._titleBlink(a)},p(1e3,2e3)))},_logAnalyticsEvent:function(b,c){if(c=c||{custom:!0,metrika:!0,ga:!0},c.custom)try{"function"==typeof C._setup.onAnalyticEvent&&C._setup.onAnalyticEvent(b)}catch(d){console.warn("Chatra: Error while trying to execute `ChatraSetup.onAnalyticEvent` function:",d)}if(c.ga)try{var e;if(a.GoogleAnalyticsObject&&"function"==typeof a[a.GoogleAnalyticsObject]?e=a[a.GoogleAnalyticsObject]:"function"==typeof a.ga&&(e=a.ga),e)if(C._setup.gaTrackerName){if("function"==typeof e.getByName){var f=e.getByName(C._setup.gaTrackerName);f&&"function"==typeof f.send&&f.send("event","Chatra",b),f||console.warn("Chatra: Could’t find Google Analytics tracker named “"+C._setup.gaTrackerName+"”.")}}else if(C._setup.gaTrackingId){if("function"==typeof e.getAll){var g=(e.getAll()||[]).some(function(a){return a&&"function"==typeof a.get&&a.get("trackingId")==C._setup.gaTrackingId?("function"==typeof a.send&&a.send("event","Chatra",b),!0):void 0});g||console.warn("Chatra: Could’t find Google Analytics tracker with tracking ID “"+C._setup.gaTrackingId+"”.")}}else{var f="function"==typeof e.getAll?(e.getAll()||[])[0]:void 0;f&&"function"==typeof f.send?f.send("event","Chatra",b):e("send","event","Chatra",b)}else a._gaq&&"function"==typeof a._gaq.push&&a._gaq.push(["_trackEvent","Chatra",b])}catch(d){console.warn("Chatra: Error while trying to create Google Analytics event:",d)}if(c.metrika)try{var h;if(C._setup.yaCounterId)a["yaCounter"+C._setup.yaCounterId]?h=a["yaCounter"+C._setup.yaCounterId]:console.warn("Chatra: Could’t find Yandex Metrika counter with ID “"+C._setup.yaCounterId+"”.");else{var i=a.Ya&&(a.Ya.Metrika||a.Ya.Metrika2),j=i&&"function"==typeof i.counters&&i.counters(),k=j&&j[0]&&j[0].id;k&&a["yaCounter"+k]&&(h=a["yaCounter"+k])}h&&h.reachGoal&&h.reachGoal("Chatra_"+b.replace(/\s/g,"_"))}catch(d){console.warn("Chatra: Error while trying to create Yandex.Metrika event:",d)}},_eventRemovers:[],_addAutoRemovableEvent:function(){C._eventRemovers.push(k.apply(C,arguments))},_cleanEventListeners:function(){for(var a=C._eventRemovers.length-1;a>=0;a--)C._eventRemovers[a]()},restart:function(){C.kill(),v()},kill:function(){if(!C._killed){C._cleanEventListeners(),C._style&&(i(C._style),delete C._style),C._iframe&&(i(C._iframe),C._iframe.src="",delete C._iframe),C._iframeWrapper&&(i(C._iframeWrapper),delete C._iframeWrapper),C._wrapper&&(i(C._wrapper),delete C._wrapper),C._killed=!0;for(var a in C)C.hasOwnProperty(a)&&"function"==typeof C[a]&&"restart"!=a&&(C[a]=c)}}}),a.Chatra&&a.Chatra.kill&&a.Chatra.kill(),a.Chatra=l,l._init()}var w;!function(){var a="Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-";w=function(b){b=b||21;var c=window.crypto||window.msCrypto;if(!c)throw new Error("This browser doesn’t support `crypto` :—(");for(var d="",e=c.getRandomValues(new Uint8Array(b));0<b--;)d+=a[63&e[b]];return d}}();var x=function(a){function b(){for(var a in g)c(g[a])}function c(b){for(var c=0;c<b.length;c++){for(var e=!0,f=0;f<b[c].test.length;f++)if(b[c].test[f]instanceof RegExp){if(!b[c].test[f].test(a)){e=!1;break}}else if(-1==a.indexOf(b[c].test[f])){e=!1;break}if(e){d(b[c]);break}}}function d(a){for(var b in g)if(g.hasOwnProperty(b)&&a[b]){if(a[b].$version){var c=e(a[b].$version.search);if(c){var d=c.split(".");a[b].version=c,d[0]&&(a[b].majorVersion=parseInt(d[0])),d[1]&&(a[b].minorVersion=parseInt(d[1])),d[2]&&(a[b].patchVersion=parseInt(d[2]))}}for(var h in a[b])a[b].hasOwnProperty(h)&&"$"!==h[0]&&(f[b][h]=a[b][h])}}function e(b){var c;if(b instanceof RegExp){if(c=(a.match(b)||[])[0],!c)return}else c=b;var d,e=a.indexOf(c);if(-1!=e&&(d=a.substring(e+c.length),regexpResult=/^(\d+(\.|_)){0,2}\d+/.exec(d),regexpResult))return regexpResult[0].replace(/_/g,".")}var f={browser:{name:"",version:"",majorVersion:null,minorVersion:null,patchVersion:null,engine:""},os:{name:"",version:"",majorVersion:null,minorVersion:null,patchVersion:null},features:{bw:!1,mobile:!1,tv:!1,proxy:!1}},g={browser:[{test:["SailfishBrowser"],browser:{name:"sailfishbrowser",engine:"gecko",$version:{search:"SailfishBrowser/"}},features:{mobile:!0}},{test:["Edge/"],browser:{name:"edge",engine:"edgehtml",$version:{search:"Edge/"}}},{test:["MSIE"],browser:{name:"ie",engine:"trident",$version:{search:"MSIE "}}},{test:["Trident"],browser:{name:"ie",engine:"trident",$version:{search:"rv:"}}},{test:["OPR/"],browser:{name:"opera",engine:"webkit",$version:{search:"OPR/"}}},{test:["Chrome"],browser:{name:"chrome",engine:"webkit",$version:{search:"Chrome/"}}},{test:["Firefox"],browser:{name:"firefox",engine:"gecko",$version:{search:"Firefox/"}}},{test:["NokiaBrowser"],browser:{name:"nokiabrowser",engine:"webkit",$version:{search:"NokiaBrowser/"}},features:{mobile:!0}},{test:["Opera Mini","Presto"],browser:{name:"operamini",engine:"presto",$version:{search:"Version/"}},features:{mobile:!0,proxy:!0}},{test:["Opera Mini","WebKit"],browser:{name:"operamini",engine:"webkit"},features:{mobile:!0,proxy:!0}},{test:["Opera"],browser:{name:"opera",engine:"presto",$version:{search:"Version/"}}},{test:["OviBrowser"],browser:{name:"ovi",engine:"gecko",$version:{search:"OviBrowser/"}},features:{mobile:!0,proxy:!0}},{test:["CriOS/"],browser:{name:"chrome",engine:"webkit",$version:{search:"CriOS/"}}},{test:["Coast/"],browser:{name:"coast",engine:"webkit",$version:{search:"Coast/"}}},{test:["Safari","Version/",/(iPhone|iPod|iPad|Macintosh|Windows)/],browser:{name:"safari",engine:"webkit",$version:{search:"Version/"}}},{test:["WebKit"],browser:{engine:"webkit"}},{test:["Gecko/"],browser:{engine:"gecko"}}],os:[{test:["Sailfish"],os:{name:"sailfish"},features:{mobile:!0}},{test:["Windows Phone"],os:{name:"winphone",$version:{search:"Windows Phone "}},features:{mobile:!0}},{test:["Windows"],os:{name:"win",$version:{search:"Windows NT "}}},{test:["Macintosh","OS X 10"],os:{name:"osx",$version:{search:/OS X /}}},{test:["Ubuntu"],os:{name:"ubuntu"}},{test:["Fedora"],os:{name:"fedora",$version:{search:"Fedora/"}}},{test:["Kindle"],os:{name:"kindle",$version:{search:"Kindle/"}},features:{bw:!0,mobile:!0}},{test:[/(BlackBerry|BB\d+)/],os:{name:"blackberry",$version:{search:"Version/"}},features:{mobile:!0}},{test:["Symbian"],os:{name:"symbian"},features:{mobile:!0}},{test:["Series40"],os:{name:"symbian"},features:{mobile:!0}},{test:["PlayStation Vita"],os:{name:"psvita"},features:{mobile:!0}},{test:["Nintendo DSi"],os:{name:"dsi"},features:{mobile:!0}},{test:["New Nintendo 3DS"],os:{name:"n3ds"},browser:{engine:"webkit"},features:{mobile:!0}},{test:["Nintendo 3DS"],os:{name:"3ds"},browser:{engine:"webkit"},features:{mobile:!0}},{test:["Viera"],os:{name:"viera"},browser:{engine:"webkit"},features:{tv:!0}},{test:["SonyDTV"],features:{tv:!0}},{test:["Android"],os:{name:"android",$version:{search:"Android "}},features:{mobile:!0}},{test:[/iPhone|iPod|iPad/],os:{name:"ios",$version:{search:"OS "}},features:{mobile:!0}}],features:[{test:[/mobile/i],features:{mobile:!0}},{test:[/smart-{0,1}tv/i],features:{tv:!0}}]};return a?(b(),f):f},y="@-webkit-keyframes chatra-chat-appear-from-bottom{from{opacity:0;-webkit-transform:translateY(20px) scale(.97);transform:translateY(20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@keyframes chatra-chat-appear-from-bottom{from{opacity:0;-webkit-transform:translateY(20px) scale(.97);transform:translateY(20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@-webkit-keyframes chatra-chat-appear-from-top{from{opacity:0;-webkit-transform:translateY(-20px) scale(.97);transform:translateY(-20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@keyframes chatra-chat-appear-from-top{from{opacity:0;-webkit-transform:translateY(-20px) scale(.97);transform:translateY(-20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@-webkit-keyframes chatra-chat-appear{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes chatra-chat-appear{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes chatra-round-button-appear{from{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes chatra-round-button-appear{from{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes chatra-tab-button-appear{from{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes chatra-tab-button-appear{from{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes chatra-transparent-appear{from{opacity:0}to{opacity:1}}@keyframes chatra-transparent-appear{from{opacity:0}to{opacity:1}}html.chatra-mobile-widget-expanded,body.chatra-mobile-widget-expanded{overflow:hidden !important;height:100% !important;width:100% !important;position:fixed !important;margin:0 !important;top:0 !important;left:0 !important}#chatra{visibility:hidden;opacity:0;position:fixed;max-height:calc(100% - 40px);max-width:calc(100% - 40px);-webkit-transition:.2s linear;transition:.2s linear;-webkit-transition-property:visibility,opacity;transition-property:visibility,opacity;-webkit-backface-visibility:hidden;backface-visibility:hidden;width:auto;height:auto;min-height:0;min-width:0;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;padding:0;margin:0;}@media print{#chatra{display:none}}#chatra__iframe-wrapper,#chatra__iframe{left:0 !important;top:0 !important;margin:0 !important;padding:0 !important;display:block !important;background:transparent !important}#chatra__iframe-wrapper,#chatra:not(.chatra--toggling) #chatra__iframe,#chatra__iframe.chatra__iframe--mode-frame{height:100% !important;width:100% !important;min-width:100% !important;max-width:100% !important;min-height:100% !important;max-height:100% !important}#chatra__iframe-wrapper{position:absolute;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 10px rgba(0,0,0,0.3);box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 10px rgba(0,0,0,0.3);overflow:hidden !important}#chatra #chatra__iframe-wrapper,#chatra.chatra--safari #chatra__iframe,#chatra.chatra--webkit.chatra--expanded #chatra__iframe{border-radius:10px}#chatra.chatra--mobile-widget:not(.chatra--expanded),#chatra.chatra--mobile-widget:not(.chatra--expanded) *{cursor:pointer}#chatra.chatra--safari #chatra__iframe,#chatra.chatra--webkit.chatra--expanded #chatra__iframe{-webkit-mask-image:-webkit-gradient(linear,left top, left bottom,from(#000),to(#000));-webkit-mask-image:linear-gradient(#000,#000);mask-image:-webkit-gradient(linear,left top, left bottom,from(#000),to(#000));mask-image:linear-gradient(#000,#000);-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}#chatra:not(.chatra--expanded) #chatra__iframe-wrapper{-webkit-transition:.2s linear;transition:.2s linear;-webkit-transition-property:-webkit-box-shadow;transition-property:-webkit-box-shadow;transition-property:box-shadow;transition-property:box-shadow, -webkit-box-shadow}#chatra:not(.chatra--expanded):hover #chatra__iframe-wrapper{-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 15px rgba(0,0,0,0.4);box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 15px rgba(0,0,0,0.4)}#chatra.chatra--visible{visibility:visible;opacity:1}#chatra.chatra--animating{-webkit-transition:350ms cubic-bezier(.25,.1,0,1);transition:350ms cubic-bezier(.25,.1,0,1);-webkit-transition-property:height,width,max-width,max-height,top,bottom,left,right,-webkit-transform;transition-property:height,width,max-width,max-height,top,bottom,left,right,-webkit-transform;transition-property:height,width,max-width,max-height,top,bottom,left,right,transform;transition-property:height,width,max-width,max-height,top,bottom,left,right,transform,-webkit-transform}#chatra.chatra--style-round:not(.chatra--expanded) #chatra__iframe-wrapper,#chatra.chatra--style-round.chatra--safari:not(.chatra--expanded) #chatra__iframe{border-radius:50%}#chatra.chatra--fast-toggle.chatra--style-round:not(.chatra--expanded) #chatra__iframe-wrapper{-webkit-animation:chatra-round-button-appear 150ms ease-out 50ms both;animation:chatra-round-button-appear 150ms ease-out 50ms both}#chatra.chatra--fast-toggle.chatra--style-tab:not(.chatra--expanded) #chatra__iframe-wrapper{-webkit-animation:chatra-tab-button-appear 150ms ease-out 50ms both;animation:chatra-tab-button-appear 150ms ease-out 50ms both}#chatra.chatra--fast-toggle.chatra--expanded #chatra__iframe-wrapper{-webkit-animation:chatra-chat-appear 150ms ease-out 50ms both;animation:chatra-chat-appear 150ms ease-out 50ms both}#chatra.chatra--fast-toggle.chatra--transparent #chatra__iframe-wrapper{-webkit-animation-name:chatra-transparent-appear;animation-name:chatra-transparent-appear}#chatra.chatra--fast-toggle.chatra--expanded:not(.chatra--mobile-widget):not(.chatra--transparent) #chatra__iframe-wrapper{-webkit-animation-name:chatra-chat-appear-from-bottom;animation-name:chatra-chat-appear-from-bottom}#chatra.chatra--fast-toggle.chatra--pos-top.chatra--expanded:not(.chatra--mobile-widget):not(.chatra--transparent) #chatra__iframe-wrapper{-webkit-animation-name:chatra-chat-appear-from-top;animation-name:chatra-chat-appear-from-top}#chatra.chatra--expanded #chatra__iframe-wrapper{-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1),0 5px 50px rgba(0,0,0,0.2);box-shadow:0 0 3px rgba(0,0,0,0.1),0 5px 50px rgba(0,0,0,0.2)}#chatra.chatra--side-bottom{bottom:55px}#chatra.chatra--side-left{left:20px}#chatra.chatra--side-left.chatra--style-tab:not(.chatra--expanded){left:10px}#chatra.chatra--side-right{right:20px}#chatra.chatra--side-right.chatra--style-tab:not(.chatra--expanded){right:10px}#chatra.chatra--side-left.chatra--expanded{bottom:20px;left:20px}#chatra.chatra--side-right.chatra--expanded{bottom:20px;right:20px}#chatra.chatra--pos-right{right:20px}#chatra.chatra--pos-left{left:20px}#chatra.chatra--pos-center{left:50%}#chatra.chatra--pos-top.chatra--style-tab:not(.chatra--expanded){bottom:100%;margin-bottom:-20px}#chatra.chatra--pos-top.chatra--style-round:not(.chatra--expanded){top:20px}#chatra.chatra--pos-bottom:not(.chatra--expanded){bottom:20px}#chatra.chatra--pos-middle:not(.chatra--expanded){bottom:50%}#chatra.chatra--mobile-widget.chatra--expanded:not(.chatra--transparent){max-width:none;max-height:none;top:0 !important;bottom:0 !important}#chatra.chatra--mobile-widget.chatra--expanded #chatra__iframe-wrapper,#chatra.chatra--safari.chatra--mobile-widget.chatra--expanded #chatra__iframe{border-radius:.1px}#chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-right:not(.chatra--transparent){right:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-left:not(.chatra--transparent){left:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-center:not(.chatra--transparent){left:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--side-right:not(.chatra--transparent){right:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--side-left:not(.chatra--transparent){left:0}#chatra.chatra--transparent.chatra--expanded{bottom:10px;}#chatra.chatra--transparent.chatra--expanded #chatra__iframe-wrapper{-webkit-box-shadow:none;box-shadow:none}#chatra.chatra--side-left.chatra--transparent,#chatra.chatra--pos-left.chatra--transparent{left:10px}#chatra.chatra--side-right.chatra--transparent,#chatra.chatra--pos-right.chatra--transparent{right:10px}#chatra.chatra--mobile-widget.chatra--transparent{max-height:251px}",z=350,A=60,B=[];
a.Chatra&&a.Chatra.q&&(B=a.Chatra.q),v()}(window,document);