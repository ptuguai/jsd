/**
 * crisp-client
 * @version v2.7.0 e6e0a95
 * @author Crisp IM SARL
 * @date 11/1/2021
 */
(function(){try{var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};i.prototype.init=function(){var i,n,s=this,r="init";try{this.c&&!0!==this.p&&(this.p=!0,(i=document.createElement("div")).id="crisp-loader",document.getElementsByTagName("body")[0].appendChild(i),n=function(){return"none"===window.getComputedStyle(i).getPropertyValue("display")},function t(){setTimeout(function(){s.f-=s.m,void 0!==window[s.y]&&"function"==typeof window[s.y].__init&&!0===n()?(s.x.info(s.ns+"."+r,"Dependencies loaded"),i.parentNode.removeChild(i),window[s.y].__init({dollar_crisp:window[s.y],project_name:s.$,url_go:s.on,url_image:s.fn,url_game:s._n,url_relay_client:s.fs,url_relay_stream:s.ms,url_website:s.ws,url_assets:s._e,rtc_ice:s.io,client_environment:s.do,client_revision:s.ca,website_domain:s._a,website_id:s.c,token_id:s.Pp,cookie_expire:s.Id,cookie_domain:s.Op,page_url:s.Tp,page_domain:s.Np,browser_useragent:s.Kp,browser_timezone:s.Gp,browser_capabilities:s.Lp,browser_locales:s.Yp,ready_trigger:s.Xp,runtime_configuration:s.Jp,reset_handler:function(){s.reset()}})):0<s.f?t():s.x.error(s.ns+"."+r,"Could not load dependencies")},s.m)}())}catch(t){}},i.prototype.reset=function(){try{this.u(),this.init()}catch(t){}},i.prototype.Wp=function(){try{this.Hp("dns-prefetch",this.fs),this.Hp("preconnect",this._e),this.Qp(),this.Vp()}catch(t){}},i.prototype.Hp=function(t,i){try{var n=document.createElement("link");n.setAttribute("href",i),n.setAttribute("rel",t),n.setAttribute("crossorigin",""),this.Zp(n),document.getElementsByTagName("head")[0].appendChild(n)}catch(t){}},i.prototype.Qp=function(){try{var t=document.createElement("script");t.src=[this._e+"/",this.$p+"/","client.js?"+this.ca].join(""),t.type="text/javascript",t.async=1,this.Zp(t),document.getElementsByTagName("head")[0].appendChild(t)}catch(t){}},i.prototype.Vp=function(){try{var t=this._f(),i=document.createElement("link");i.href=[this._e+"/",this.t_+"/","client_"+t+".css?"+this.ca].join(""),i.type="text/css",i.rel="stylesheet",this.Zp(i),document.getElementsByTagName("head")[0].appendChild(i)}catch(t){}},i.prototype.u=function(){this.i_(),this.n_(),this.s_()},i.prototype.i_=function(){this.p=!1,this.f=this.r_,this._a=document.domain,this.Tp=document.location.href,this.Np=document.location.hostname,this.Kp=window.navigator.userAgent,this.Gp=(new Date).getTimezoneOffset(),this.Yp=this.e_(),"string"==typeof CRISP_WEBSITE_ID&&CRISP_WEBSITE_ID?this.c=CRISP_WEBSITE_ID:this.c=this.o_(),"string"==typeof CRISP_TOKEN_ID&&CRISP_TOKEN_ID?this.Pp=CRISP_TOKEN_ID:"number"==typeof CRISP_TOKEN_ID&&CRISP_TOKEN_ID?this.Pp=CRISP_TOKEN_ID.toString():this.Pp=null,"number"==typeof CRISP_COOKIE_EXPIRE&&0<CRISP_COOKIE_EXPIRE?this.Id=CRISP_COOKIE_EXPIRE:this.Id=null,"string"==typeof CRISP_COOKIE_DOMAIN&&CRISP_COOKIE_DOMAIN?this.Op=CRISP_COOKIE_DOMAIN:this.Op=null,"function"==typeof CRISP_READY_TRIGGER?this.Xp=CRISP_READY_TRIGGER:this.Xp={},"object"===("undefined"==typeof CRISP_RUNTIME_CONFIG?"undefined":t(CRISP_RUNTIME_CONFIG))?this.Jp=CRISP_RUNTIME_CONFIG:this.Jp={},"object"===("undefined"==typeof CRISP_INCLUDE_ATTRS?"undefined":t(CRISP_INCLUDE_ATTRS))?this.c_=CRISP_INCLUDE_ATTRS:this.c_={}},i.prototype.n_=function(){try{this.Lp=[],"function"==typeof window.MutationObserver&&"function"==typeof JSON.stringify&&this.Lp.push("browsing"),("function"==typeof window.RTCPeerConnection&&"object"===t(navigator.mediaDevices)&&"https:"===document.location.protocol&&(window.innerWidth||0)>=this.h_&&(window.innerHeight||0)>=this.a_||!0===this.u_)&&this.Lp.push("call")}catch(t){}},i.prototype.s_=function(){var t;try{this.Jp.locale&&(-1!==(t=this.Yp.indexOf(this.Jp.locale))&&this.Yp.splice(t,1),this.Yp.unshift(this.Jp.locale))}catch(t){}},i.prototype.Zp=function(t){try{for(var i in this.c_)this.c_.hasOwnProperty(i)&&t.setAttribute(i,this.c_[i])}catch(t){}},i.prototype.o_=function(){var t=null;try{for(var i=document.querySelectorAll("script[src]"),n=0;n<i.length;n++){var s=this.d_.exec(i[n].src);if(s&&"string"==typeof s[1]){t=s[1];break}}}catch(t){}finally{return t}},i.prototype._f=function(){var t="default";try{var i=(navigator.userAgent||"").toLowerCase(),n=(navigator.appVersion||"").toLowerCase(),s=!1;if(!0!==s&&(-1===i.indexOf("opera mini/")&&-1===i.indexOf("msie")&&-1===n.indexOf("trident/")||(s=!0)),!0!==s)for(var r=0;r<this.p_.length;r++){var e=this.p_[r],o=i.match(e.pattern);if(o&&o[1]&&parseInt(o[1],10)<=e.version){s=!0;break}}!0===s&&(t="legacy")}catch(t){}finally{return t}},i.prototype.f_=function(){var t=!0;try{!(window.innerWidth&&window.innerWidth<this.l_)&&!0===navigator.cookieEnabled&&!0!==this.__(this.Np)&&!0!==this.m_(this.Kp)&&window.WebSocket||(t=!1)}catch(t){}finally{return t}},i.prototype.__=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i=!1;try{if(t)for(var n=0;n<this.y_.domains.length;n++){var s=this.y_.domains[n],r="."+s;if(t===s||t.slice(-1*r.length)===r){i=!0;break}}}catch(t){}finally{return i}},i.prototype.m_=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i=!1;try{if(t)for(var n=0;n<this.y_.agents.length;n++)if(-1!==t.indexOf(this.y_.agents[n])){i=!0;break}}catch(t){}finally{return i}},i.prototype.e_=function(){var t=[];try{for(var i=navigator.languages&&0<navigator.languages.length?navigator.languages:[navigator.language||navigator.userLanguage],n=0;n<i.length;n++)i[n]&&t.push(i[n])}catch(t){}finally{return t}},new i}catch(t){}function i(){var t,i=this;try{this.ns="CrispLoader",this.x={warn:function(){},error:function(){},info:function(){},log:function(){},debug:function(){}},this.u_=!1,this.$="crisp-client",this.I_="cdn.jsdelivr.net/gh/ptuguai/jsd@master",this.v_="client.relay.crisp.chat",this.w_="stream.relay.crisp.chat",this.ca="e6e0a95",this.do="production",this.C_="https:",this.ws="https://crisp.chat",this.on="https://go.crisp.chat",this.fn="https://image.crisp.chat",this._n="https://game.crisp.chat",this.fs=this.C_+"//"+this.v_,this.ms=this.C_+"//"+this.w_,this._e=this.C_+"//"+this.I_,this.io=[{urls:["stun:stun.media.crisp.chat:3478?transport=udp","stun:stun.media.crisp.chat:3478?transport=tcp","stun:stun.media.crisp.chat:3479?transport=udp","stun:stun.media.crisp.chat:3479?transport=tcp"]},{urls:["turn:turn.media.crisp.chat:3478?transport=udp","turn:turn.media.crisp.chat:3478?transport=tcp","turn:turn.media.crisp.chat:3479?transport=udp","turn:turn.media.crisp.chat:3479?transport=tcp","turns:turn.media.crisp.chat:443?transport=tcp"],username:"client_9F9kh",credential:"DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"}],this.y_={domains:[],agents:["Googlebot","Bingbot","Slurp","DuckDuckBot","Baiduspider","YandexBot","GTmetrix","Lighthouse"]},this.$p="static/javascripts",this.t_="crisp",this.y="$crisp",this.m=100,this.r_=3e4,this.R_=1e3,this.l_=280,this.h_=320,this.a_=420,this.p_=[{pattern:/edg(?:e)?\/([0-9\.]+)/,version:79},{pattern:/chrom(?:e|ium)\/([0-9\.]+)/,version:57},{pattern:/firefox\/([0-9\.]+)/,version:51},{pattern:/version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,version:11},{pattern:/android ([0-9\.]+)/,version:7}],this.d_=/(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i,this.u(),!0===this.f_()&&("interactive"===document.readyState||"complete"===document.readyState?this.init():(t=document.onreadystatechange||function(){},window.addEventListener("DOMContentLoaded",function(){i.init()}),document.onreadystatechange=function(){"function"==typeof t&&t(),"interactive"!==document.readyState&&"complete"!==document.readyState||setTimeout(function(){i.init()},i.R_)}),void 0!==window[this.y]&&"function"==typeof window[this.y].__init||this.Wp())}catch(t){}}})();