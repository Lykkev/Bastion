const a177_0x545b=['delete','➕\x20New','catch','parentID','deletable','channel','setChannel','name','parent','members','fetchPremiumTier','member','../utils/omnic','../utils/constants','size','categories','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','user','compile','error','premiumTier','replace','guild','Constants','voiceSessions','newSessionChannelPrefix','client','voiceStateUpdate','exec','includes','constructor','startsWith','@bastion/tesseract','children','isPublicBastion','../models/Guild','LISTENER_MODE','voice','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Members\x20Left','channelID','tag','apply'];(function(_0xc36907,_0x545ba2){const _0x5c6268=function(_0x39de96){while(--_0x39de96){_0xc36907['push'](_0xc36907['shift']());}};const _0x1efe3a=function(){const _0x29b4ce={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x317c6f,_0x3a904d,_0x1afb2f,_0x52c96b){_0x52c96b=_0x52c96b||{};let _0xb71bb9=_0x3a904d+'='+_0x1afb2f;let _0xd0f19e=0x0;for(let _0x3519a4=0x0,_0x3b1ecd=_0x317c6f['length'];_0x3519a4<_0x3b1ecd;_0x3519a4++){const _0x5670f8=_0x317c6f[_0x3519a4];_0xb71bb9+=';\x20'+_0x5670f8;const _0x5ceda4=_0x317c6f[_0x5670f8];_0x317c6f['push'](_0x5ceda4);_0x3b1ecd=_0x317c6f['length'];if(_0x5ceda4!==!![]){_0xb71bb9+='='+_0x5ceda4;}}_0x52c96b['cookie']=_0xb71bb9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1a39c7,_0x24d23a){_0x1a39c7=_0x1a39c7||function(_0x4ea886){return _0x4ea886;};const _0x94ecd2=_0x1a39c7(new RegExp('(?:^|;\x20)'+_0x24d23a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2b51e0=function(_0x17086d,_0x1045b6){_0x17086d(++_0x1045b6);};_0x2b51e0(_0x5c6268,_0x545ba2);return _0x94ecd2?decodeURIComponent(_0x94ecd2[0x1]):undefined;}};const _0x3d36c2=function(){const _0x84b13=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x84b13['test'](_0x29b4ce['removeCookie']['toString']());};_0x29b4ce['updateCookie']=_0x3d36c2;let _0xb5f1c5='';const _0x30f0c7=_0x29b4ce['updateCookie']();if(!_0x30f0c7){_0x29b4ce['setCookie'](['*'],'counter',0x1);}else if(_0x30f0c7){_0xb5f1c5=_0x29b4ce['getCookie'](null,'counter');}else{_0x29b4ce['removeCookie']();}};_0x1efe3a();}(a177_0x545b,0x97));const a177_0x5c62=function(_0xc36907,_0x545ba2){_0xc36907=_0xc36907-0x0;let _0x5c6268=a177_0x545b[_0xc36907];return _0x5c6268;};const a177_0x29b4ce=function(){let _0x2d8ae9=!![];return function(_0x55cac9,_0x3ee992){const _0x3e8384=_0x2d8ae9?function(){if(_0x3ee992){const _0x5c82aa=_0x3ee992[a177_0x5c62('0x14')](_0x55cac9,arguments);_0x3ee992=null;return _0x5c82aa;}}:function(){};_0x2d8ae9=![];return _0x3e8384;};}();const a177_0x39de96=a177_0x29b4ce(this,function(){const _0x457945=function(){const _0x1828b0=_0x457945[a177_0x5c62('0x8')](a177_0x5c62('0x10'))()[a177_0x5c62('0x27')](a177_0x5c62('0x25'));return!_0x1828b0['test'](a177_0x39de96);};return _0x457945();});a177_0x39de96();'use strict';const tesseract_1=require(a177_0x5c62('0xa'));const Guild_1=require(a177_0x5c62('0xd'));const constants=require(a177_0x5c62('0x22'));const omnic=require(a177_0x5c62('0x21'));module['exports']=class VoiceStateUpdateListener extends tesseract_1['Listener']{constructor(){super(a177_0x5c62('0x5'),{'mode':tesseract_1[a177_0x5c62('0x1')][a177_0x5c62('0xe')]['ON']});this[a177_0x5c62('0x6')]=async(_0x3b69e8,_0x59868b)=>{if(_0x59868b['channelID']===_0x3b69e8[a177_0x5c62('0x12')])return;if(!(_0x3b69e8[a177_0x5c62('0x1a')]&&_0x3b69e8[a177_0x5c62('0x1a')][a177_0x5c62('0x1d')])&&!(_0x59868b[a177_0x5c62('0x1a')]&&_0x59868b[a177_0x5c62('0x1a')]['parent']))return;const _0x175388=await Guild_1['default']['findById'](_0x3b69e8[a177_0x5c62('0x0')]?_0x3b69e8[a177_0x5c62('0x0')]['id']:_0x59868b['guild']['id']);if(!_0x175388['voiceSessions']||!_0x175388[a177_0x5c62('0x2')][a177_0x5c62('0x24')])return;if(constants[a177_0x5c62('0xc')](this[a177_0x5c62('0x4')][a177_0x5c62('0x26')])){const _0x13be63=await omnic[a177_0x5c62('0x1f')](_0x3b69e8[a177_0x5c62('0x0')]||_0x59868b[a177_0x5c62('0x0')])[a177_0x5c62('0x17')](()=>{});if(!_0x13be63)return;}if(_0x3b69e8[a177_0x5c62('0x1a')]&&_0x3b69e8[a177_0x5c62('0x1a')][a177_0x5c62('0x1d')]&&_0x175388[a177_0x5c62('0x2')][a177_0x5c62('0x24')][a177_0x5c62('0x7')](_0x3b69e8['channel'][a177_0x5c62('0x18')])&&!_0x3b69e8[a177_0x5c62('0x1a')][a177_0x5c62('0x1c')]['startsWith'](this['newSessionChannelPrefix'])&&_0x3b69e8[a177_0x5c62('0x1a')][a177_0x5c62('0x1e')][a177_0x5c62('0x23')]===0x0&&_0x3b69e8[a177_0x5c62('0x1a')][a177_0x5c62('0x19')]){_0x3b69e8[a177_0x5c62('0x1a')][a177_0x5c62('0x15')](a177_0x5c62('0x11'));}if(_0x59868b[a177_0x5c62('0x1a')]&&_0x59868b[a177_0x5c62('0x1a')][a177_0x5c62('0x1d')]&&_0x175388[a177_0x5c62('0x2')][a177_0x5c62('0x24')][a177_0x5c62('0x7')](_0x59868b[a177_0x5c62('0x1a')][a177_0x5c62('0x18')])){if(_0x59868b[a177_0x5c62('0x1a')][a177_0x5c62('0x1c')]['startsWith'](this['newSessionChannelPrefix'])){const _0x23da18=_0x59868b[a177_0x5c62('0x1a')][a177_0x5c62('0x1c')][a177_0x5c62('0x2a')](this[a177_0x5c62('0x3')],'')['trim']();const _0x1c1077=await _0x59868b[a177_0x5c62('0x1a')][a177_0x5c62('0x0')]['channels']['create'](_0x23da18+'\x20#'+(_0x59868b[a177_0x5c62('0x1a')][a177_0x5c62('0x1d')][a177_0x5c62('0xb')]['filter'](_0x2a1ed3=>_0x2a1ed3['type']==='voice'&&_0x2a1ed3[a177_0x5c62('0x1c')][a177_0x5c62('0x9')](_0x23da18+'\x20#'))[a177_0x5c62('0x23')]+0x1),{'type':a177_0x5c62('0xf'),'bitrate':_0x59868b[a177_0x5c62('0x1a')][a177_0x5c62('0x0')][a177_0x5c62('0x29')]?_0x59868b[a177_0x5c62('0x1a')][a177_0x5c62('0x0')][a177_0x5c62('0x29')]*0x1f400:0x17700,'parent':_0x59868b[a177_0x5c62('0x1a')][a177_0x5c62('0x1d')],'reason':'Requested\x20by\x20'+(_0x59868b['member'][a177_0x5c62('0x26')]?_0x59868b['member']['user'][a177_0x5c62('0x13')]:_0x59868b[a177_0x5c62('0x20')]['id'])});await _0x59868b['member'][a177_0x5c62('0xf')][a177_0x5c62('0x1b')](_0x1c1077)[a177_0x5c62('0x17')](console[a177_0x5c62('0x28')]);}}};this[a177_0x5c62('0x3')]=a177_0x5c62('0x16');}};