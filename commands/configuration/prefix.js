const a28_0x548d=['guildPrefixUpdate','errors','user','prefix','tag','premiumPrefix','send','membershipLimitPrefix','COLORS','GOLD','length','Constants','concat','exec','IRIS','catch','language','../../utils/omnic','LIMITS','guildPrefixes','isPublicBastion','PREFIXES','test','LIMITED_PREMIUM_MEMBERSHIP','exports','configurations','It\x20allows\x20you\x20set\x20custom\x20prefixes\x20for\x20Bastion\x20in\x20your\x20server.','DiscordError','PREMIUM_MEMBERSHIP_REQUIRED','../../utils/errors','document','guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','PremiumTier','apply','PLATINUM','BASTION_ERROR_TYPE','constructor','channel','author','MANAGE_GUILD','info','return\x20/\x22\x20+\x20this\x20+\x20\x22/','getString','client','fetchPremiumTier','save','prefixes','Prefixes','locale','join','GREEN'];(function(_0xccc245,_0x548dd8){const _0x559bcb=function(_0x4c2992){while(--_0x4c2992){_0xccc245['push'](_0xccc245['shift']());}};const _0x342b31=function(){const _0x5e2e0f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2a3f53,_0x5f5317,_0x2edfa6,_0xc39e4f){_0xc39e4f=_0xc39e4f||{};let _0x597ea9=_0x5f5317+'='+_0x2edfa6;let _0x5a708b=0x0;for(let _0x14990a=0x0,_0x3d54f8=_0x2a3f53['length'];_0x14990a<_0x3d54f8;_0x14990a++){const _0x1e37c0=_0x2a3f53[_0x14990a];_0x597ea9+=';\x20'+_0x1e37c0;const _0x5121a0=_0x2a3f53[_0x1e37c0];_0x2a3f53['push'](_0x5121a0);_0x3d54f8=_0x2a3f53['length'];if(_0x5121a0!==!![]){_0x597ea9+='='+_0x5121a0;}}_0xc39e4f['cookie']=_0x597ea9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x10d0a1,_0x972a2b){_0x10d0a1=_0x10d0a1||function(_0x3c9b83){return _0x3c9b83;};const _0x1c5799=_0x10d0a1(new RegExp('(?:^|;\x20)'+_0x972a2b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x13e884=function(_0x56af96,_0x361a45){_0x56af96(++_0x361a45);};_0x13e884(_0x559bcb,_0x548dd8);return _0x1c5799?decodeURIComponent(_0x1c5799[0x1]):undefined;}};const _0x1fec5f=function(){const _0x4a3088=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4a3088['test'](_0x5e2e0f['removeCookie']['toString']());};_0x5e2e0f['updateCookie']=_0x1fec5f;let _0x29d357='';const _0x1dfa3a=_0x5e2e0f['updateCookie']();if(!_0x1dfa3a){_0x5e2e0f['setCookie'](['*'],'counter',0x1);}else if(_0x1dfa3a){_0x29d357=_0x5e2e0f['getCookie'](null,'counter');}else{_0x5e2e0f['removeCookie']();}};_0x342b31();}(a28_0x548d,0x99));const a28_0x559b=function(_0xccc245,_0x548dd8){_0xccc245=_0xccc245-0x0;let _0x559bcb=a28_0x548d[_0xccc245];return _0x559bcb;};const a28_0x5e2e0f=function(){let _0x3470b2=!![];return function(_0x1ae5ab,_0x592b32){const _0x5220f5=_0x3470b2?function(){if(_0x592b32){const _0xf964ad=_0x592b32[a28_0x559b('0x25')](_0x1ae5ab,arguments);_0x592b32=null;return _0xf964ad;}}:function(){};_0x3470b2=![];return _0x5220f5;};}();const a28_0x4c2992=a28_0x5e2e0f(this,function(){const _0x50458c=function(){const _0x4daf31=_0x50458c[a28_0x559b('0x28')](a28_0x559b('0x2d'))()['compile'](a28_0x559b('0x23'));return!_0x4daf31[a28_0x559b('0x19')](a28_0x4c2992);};return _0x50458c();});a28_0x4c2992();'use strict';const tesseract_1=require('@bastion/tesseract');const constants=require('../../utils/constants');const errors=require(a28_0x559b('0x20'));const omnic=require(a28_0x559b('0x14'));module[a28_0x559b('0x1b')]=class Prefix extends tesseract_1['Command']{constructor(){super(a28_0x559b('0x6'),{'description':a28_0x559b('0x1d'),'triggers':[],'arguments':{},'scope':a28_0x559b('0x22'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a28_0x559b('0x2b')],'syntax':[a28_0x559b('0x6'),'prefix\x20--\x20PREFIX']});this[a28_0x559b('0x10')]=async(_0x36717e,_0xf49820)=>{const _0x50912c=_0x36717e['guild'];if(_0xf49820['_']['length']){if(_0xf49820['_'][a28_0x559b('0xd')]>constants['LIMITS'][a28_0x559b('0x18')]&&constants[a28_0x559b('0x17')](this['client'][a28_0x559b('0x5')])){const _0xe5539e=await omnic[a28_0x559b('0x30')](_0x36717e[a28_0x559b('0x22')])[a28_0x559b('0x12')](()=>{});if(_0xe5539e){if(_0xe5539e===omnic[a28_0x559b('0x24')][a28_0x559b('0xc')]&&_0xf49820['_'][a28_0x559b('0xd')]>constants[a28_0x559b('0x15')][a28_0x559b('0xc')]['PREFIXES']){throw new errors[(a28_0x559b('0x1e'))](errors[a28_0x559b('0x27')][a28_0x559b('0x1a')],this[a28_0x559b('0x2f')][a28_0x559b('0x0')]['getString'](_0x36717e[a28_0x559b('0x22')]['document']['language'],'errors',a28_0x559b('0xa'),constants['LIMITS'][a28_0x559b('0xc')][a28_0x559b('0x18')]));}else if(_0xe5539e===omnic['PremiumTier']['PLATINUM']&&_0xf49820['_'][a28_0x559b('0xd')]>constants['LIMITS']['PLATINUM']['PREFIXES']){throw new errors[(a28_0x559b('0x1e'))](errors[a28_0x559b('0x27')][a28_0x559b('0x1a')],this[a28_0x559b('0x2f')][a28_0x559b('0x0')][a28_0x559b('0x2e')](_0x36717e[a28_0x559b('0x22')][a28_0x559b('0x21')]['language'],a28_0x559b('0x4'),a28_0x559b('0xa'),constants[a28_0x559b('0x15')][a28_0x559b('0x26')][a28_0x559b('0x18')]));}}else{throw new errors[(a28_0x559b('0x1e'))](errors[a28_0x559b('0x27')][a28_0x559b('0x1f')],this[a28_0x559b('0x2f')]['locale'][a28_0x559b('0x2e')](_0x36717e[a28_0x559b('0x22')][a28_0x559b('0x21')][a28_0x559b('0x13')],a28_0x559b('0x4'),a28_0x559b('0x8'),constants[a28_0x559b('0x15')][a28_0x559b('0x18')]));}}_0x50912c[a28_0x559b('0x21')][a28_0x559b('0x32')]=_0xf49820['_'];await _0x50912c[a28_0x559b('0x21')][a28_0x559b('0x31')]();return await _0x36717e[a28_0x559b('0x29')][a28_0x559b('0x9')]({'embed':{'color':tesseract_1[a28_0x559b('0xe')][a28_0x559b('0xb')][a28_0x559b('0x2')],'description':this[a28_0x559b('0x2f')][a28_0x559b('0x0')][a28_0x559b('0x2e')](_0x36717e['guild'][a28_0x559b('0x21')][a28_0x559b('0x13')],a28_0x559b('0x2c'),a28_0x559b('0x3'),_0x36717e[a28_0x559b('0x2a')][a28_0x559b('0x7')],_0x50912c[a28_0x559b('0x21')][a28_0x559b('0x32')][a28_0x559b('0x1')]('\x20\x20'))}})[a28_0x559b('0x12')](()=>{});}const _0x580a1b=this[a28_0x559b('0x2f')][a28_0x559b('0x1c')][a28_0x559b('0x32')][a28_0x559b('0xf')](_0x50912c[a28_0x559b('0x21')]['prefixes']);await _0x36717e['channel'][a28_0x559b('0x9')]({'embed':{'color':tesseract_1[a28_0x559b('0xe')][a28_0x559b('0xb')][a28_0x559b('0x11')],'description':this['client'][a28_0x559b('0x0')]['getString'](_0x36717e['guild'][a28_0x559b('0x21')][a28_0x559b('0x13')],a28_0x559b('0x2c'),a28_0x559b('0x16')),'fields':[{'name':a28_0x559b('0x33'),'value':_0x580a1b['join']('\x20\x20')}]}})[a28_0x559b('0x12')](()=>{});};}};