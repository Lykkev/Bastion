const a124_0x1d35=['join','apply','color\x20R\x20G\x20B','color\x20C\x20M\x20Y\x20K','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','hex','../../utils/colors','send','rgb','It\x20allows\x20you\x20the\x20convert\x20the\x20specified\x20color\x20in\x20one\x20format\x20into\x20many\x20differt\x20formats.','BASTION_ERROR_TYPE','guild','Color','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Command','color\x20HEX','channel','test','HEX','INVALID_COMMAND_SYNTAX','CMYK','parse','integer','color','compile','../../utils/errors','colour','@bastion/tesseract','cmyk'];(function(_0xb0a5d8,_0x1d35c9){const _0x301f0e=function(_0x5cf1d1){while(--_0x5cf1d1){_0xb0a5d8['push'](_0xb0a5d8['shift']());}};const _0x4a6611=function(){const _0x50c0a0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x16460c,_0x2af8ba,_0x50239b,_0x7485f2){_0x7485f2=_0x7485f2||{};let _0x27caca=_0x2af8ba+'='+_0x50239b;let _0x2cb1b5=0x0;for(let _0x17105d=0x0,_0x48ecb7=_0x16460c['length'];_0x17105d<_0x48ecb7;_0x17105d++){const _0x2ce53f=_0x16460c[_0x17105d];_0x27caca+=';\x20'+_0x2ce53f;const _0x3d73d7=_0x16460c[_0x2ce53f];_0x16460c['push'](_0x3d73d7);_0x48ecb7=_0x16460c['length'];if(_0x3d73d7!==!![]){_0x27caca+='='+_0x3d73d7;}}_0x7485f2['cookie']=_0x27caca;},'removeCookie':function(){return'dev';},'getCookie':function(_0x24e864,_0x39d67d){_0x24e864=_0x24e864||function(_0x4c693e){return _0x4c693e;};const _0x17dc9f=_0x24e864(new RegExp('(?:^|;\x20)'+_0x39d67d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xbb3fe1=function(_0x2e153e,_0x5ccc2c){_0x2e153e(++_0x5ccc2c);};_0xbb3fe1(_0x301f0e,_0x1d35c9);return _0x17dc9f?decodeURIComponent(_0x17dc9f[0x1]):undefined;}};const _0xafc1ca=function(){const _0x1a7ca8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1a7ca8['test'](_0x50c0a0['removeCookie']['toString']());};_0x50c0a0['updateCookie']=_0xafc1ca;let _0x476606='';const _0x344ca1=_0x50c0a0['updateCookie']();if(!_0x344ca1){_0x50c0a0['setCookie'](['*'],'counter',0x1);}else if(_0x344ca1){_0x476606=_0x50c0a0['getCookie'](null,'counter');}else{_0x50c0a0['removeCookie']();}};_0x4a6611();}(a124_0x1d35,0x92));const a124_0x301f=function(_0xb0a5d8,_0x1d35c9){_0xb0a5d8=_0xb0a5d8-0x0;let _0x301f0e=a124_0x1d35[_0xb0a5d8];return _0x301f0e;};const a124_0x50c0a0=function(){let _0x584d31=!![];return function(_0x53cb89,_0x307460){const _0x5cad54=_0x584d31?function(){if(_0x307460){const _0x34017c=_0x307460[a124_0x301f('0x5')](_0x53cb89,arguments);_0x307460=null;return _0x34017c;}}:function(){};_0x584d31=![];return _0x5cad54;};}();const a124_0x5cf1d1=a124_0x50c0a0(this,function(){const _0x51f479=function(){const _0x37bec6=_0x51f479[a124_0x301f('0x11')](a124_0x301f('0x12'))()[a124_0x301f('0x1d')](a124_0x301f('0x8'));return!_0x37bec6[a124_0x301f('0x16')](a124_0x5cf1d1);};return _0x51f479();});a124_0x5cf1d1();'use strict';const tesseract_1=require(a124_0x301f('0x2'));const colors=require(a124_0x301f('0xa'));const errors=require(a124_0x301f('0x0'));module['exports']=class ColorCommand extends tesseract_1[a124_0x301f('0x13')]{constructor(){super(a124_0x301f('0x1c'),{'description':a124_0x301f('0xd'),'triggers':[a124_0x301f('0x1')],'arguments':{},'scope':a124_0x301f('0xf'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a124_0x301f('0x14'),a124_0x301f('0x6'),a124_0x301f('0x7')]});this['exec']=async(_0x1ae804,_0xf8a926)=>{const _0x6e2df0=colors[a124_0x301f('0x1a')](_0xf8a926['_']['join']('\x20'));if(!_0x6e2df0)throw new errors['DiscordError'](errors[a124_0x301f('0xe')][a124_0x301f('0x18')],this['name']);await _0x1ae804[a124_0x301f('0x15')][a124_0x301f('0xb')]({'embed':{'color':_0x6e2df0['integer'],'title':a124_0x301f('0x10'),'fields':[{'name':'RGB','value':_0x6e2df0[a124_0x301f('0xc')][a124_0x301f('0x4')](',\x20'),'inline':!![]},{'name':a124_0x301f('0x19'),'value':_0x6e2df0[a124_0x301f('0x3')][a124_0x301f('0x4')](',\x20'),'inline':!![]},{'name':a124_0x301f('0x17'),'value':'#'+_0x6e2df0[a124_0x301f('0x9')],'inline':!![]},{'name':'Integer','value':_0x6e2df0[a124_0x301f('0x1b')],'inline':!![]}]}});};}};