'use strict';var wF={TAB:0,dD:1,DQ:2},xF=function(a){Jg("MediaRouter.WebRtc.Start.Success",a,wF)};var yF=function(a,b){mh.call(this,b);this.tm=a;this.Fp=new xc;this.D=this.Fp.promise;this.jd=tg.vs(b.id);this.ya=new xc;this.Vy=this.Kb=!1;this.ld=this.Ef=null;this.lq();this.WB();this.Jb(new nh("GET_TURN_CREDENTIALS"))};ja(yF,mh);d=yF.prototype;d.start=function(a){var b=this;return this.D.then(function(c){if(c.Zs())return Promise.reject(new Mg("Mirroring already started"));b.Ef=new Ag("MediaRouter.WebRtc.Session.Launch");c.addStream(a);c.start();return b.ya.promise})};
d.stop=function(){this.ld&&this.ld.end();this.Vy=this.Kb=!1;this.Ef=this.ld=null;this.D.then(function(a){a.stop()});this.jd.Ya();return!0};
d.lq=function(){var a=this;this.jd.onMessage=function(b){if(!b.type)throw Error("Message has no type.");switch(b.type){case "TURN_CREDENTIALS":a.Fp.resolve(new rh(a.bb.id,b.data.credentials));break;case "ANSWER":a.D.then(function(a){a.setRemoteDescription(b.data)});break;case "KNOCK_ANSWER":a.Vy=!0;a.D.then(function(a){a.setRemoteDescription(b.data)});break;case "STOP":a.ya.reject(new Mg("Stop signal received"));a.stop();break;default:throw new Mg("Unknown message type: "+b.type);}}};
d.WB=function(){var a=this;this.D.then(function(b){b.NN(function(b){b=new ph(b,a.tm.wg(),qh);a.Jb(new nh("OFFER",b))});b.MN(function(b){a.Jb(oh(b))});b.LN(function(){a.Kb=!0;a.Jb(new nh("SESSION_START_SUCCESS"));!a.Vy&&a.Ef&&a.Ef.end();a.Ef=null;a.ld=new Fg("MediaRouter.WebRtc.Session.Length");a.ya.resolve(a)});b.JN(function(){a.Jb(new nh("SESSION_END"))});b.KN(function(b){a.Kb||a.ya.reject(b);a.Jb(new nh("SESSION_FAILURE"))})})};d.Jb=function(a){this.jd.sendMessage(a,zF)};d.vg=function(){return this.tm};
var zF={channelType:"cloud"};var AF=function(){lh.call(this,"webrtc")};ja(AF,lh);d=AF.prototype;d.vg=function(a,b,c){return new fk(a,b,c)};d.Ir=function(a,b){return new yF(a,b)};d.hu=function(){xF(0)};d.du=function(){xF(1)};d.LA=function(){xF(2)};d.eu=function(){Ig("MediaRouter.WebRtc.Session.End")};d.fu=function(a){Jg("MediaRouter.WebRtc.Start.Failure",a,Lg)};d.gu=function(){Ig("MediaRouter.WebRtc.Stream.End")};var BF=new AF;jh("mr.mirror.webrtc.WebRtcService",BF);
