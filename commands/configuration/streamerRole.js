const a35_0x4aa2=['RED','name','@bastion/tesseract','It\x20allows\x20to\x20set\x20the\x20Streamer\x20Role\x20for\x20the\x20server.\x20When\x20a\x20member\x20goes\x20live\x20in\x20the\x20server,\x20they\x27re\x20assigned\x20to\x20this\x20role,\x20provided\x20they\x20have\x20at\x20least\x20one\x20role\x20in\x20the\x20server.','GREEN','streamerRoleUnset','remove','send','COLORS','join','language','errors','Constants','locale','getString','ROLE_NOT_FOUND','return\x20/\x22\x20+\x20this\x20+\x20\x22/','resolveRole','apply','channel','catch','streamerRoleSet','Command','constructor','streamerRoleId','compile','roleNotFound','exports','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','INVALID_COMMAND_SYNTAX','document','DiscordError','client','author','BASTION_ERROR_TYPE','streamerRole','guild'];(function(_0x1f5649,_0x4aa29d){const _0x5c8a2a=function(_0x295639){while(--_0x295639){_0x1f5649['push'](_0x1f5649['shift']());}};const _0x353cb2=function(){const _0x308659={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x141db6,_0x2be082,_0x149711,_0x49d486){_0x49d486=_0x49d486||{};let _0xc09dfc=_0x2be082+'='+_0x149711;let _0x57ab18=0x0;for(let _0x16c1f3=0x0,_0xa991d5=_0x141db6['length'];_0x16c1f3<_0xa991d5;_0x16c1f3++){const _0x47138f=_0x141db6[_0x16c1f3];_0xc09dfc+=';\x20'+_0x47138f;const _0x2e05cf=_0x141db6[_0x47138f];_0x141db6['push'](_0x2e05cf);_0xa991d5=_0x141db6['length'];if(_0x2e05cf!==!![]){_0xc09dfc+='='+_0x2e05cf;}}_0x49d486['cookie']=_0xc09dfc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1aaab,_0x22c371){_0x1aaab=_0x1aaab||function(_0x59a1b8){return _0x59a1b8;};const _0x503998=_0x1aaab(new RegExp('(?:^|;\x20)'+_0x22c371['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5087f8=function(_0x573e6a,_0x58f74b){_0x573e6a(++_0x58f74b);};_0x5087f8(_0x5c8a2a,_0x4aa29d);return _0x503998?decodeURIComponent(_0x503998[0x1]):undefined;}};const _0x12e760=function(){const _0x5d8384=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5d8384['test'](_0x308659['removeCookie']['toString']());};_0x308659['updateCookie']=_0x12e760;let _0x1dbeb9='';const _0x2bf693=_0x308659['updateCookie']();if(!_0x2bf693){_0x308659['setCookie'](['*'],'counter',0x1);}else if(_0x2bf693){_0x1dbeb9=_0x308659['getCookie'](null,'counter');}else{_0x308659['removeCookie']();}};_0x353cb2();}(a35_0x4aa2,0xe7));const a35_0x5c8a=function(_0x1f5649,_0x4aa29d){_0x1f5649=_0x1f5649-0x0;let _0x5c8a2a=a35_0x4aa2[_0x1f5649];return _0x5c8a2a;};const a35_0x308659=function(){let _0x1115b8=!![];return function(_0x493148,_0x224b4c){const _0x414ba3=_0x1115b8?function(){if(_0x224b4c){const _0xfe6ec4=_0x224b4c[a35_0x5c8a('0x9')](_0x493148,arguments);_0x224b4c=null;return _0xfe6ec4;}}:function(){};_0x1115b8=![];return _0x414ba3;};}();const a35_0x295639=a35_0x308659(this,function(){const _0x5e5397=function(){const _0x3f3107=_0x5e5397[a35_0x5c8a('0xe')](a35_0x5c8a('0x7'))()[a35_0x5c8a('0x10')](a35_0x5c8a('0x13'));return!_0x3f3107['test'](a35_0x295639);};return _0x5e5397();});a35_0x295639();'use strict';const tesseract_1=require(a35_0x5c8a('0x1e'));const errors=require('../../utils/errors');module[a35_0x5c8a('0x12')]=class StreamerRoleCommand extends tesseract_1[a35_0x5c8a('0xd')]{constructor(){super(a35_0x5c8a('0x1a'),{'description':a35_0x5c8a('0x1f'),'triggers':[],'arguments':{'alias':{'remove':['r']},'boolean':[a35_0x5c8a('0x22')]},'scope':a35_0x5c8a('0x1b'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':['streamerRole\x20ROLE','streamerRole\x20--remove']});this['exec']=async(_0xeb83e0,_0x43dc86)=>{if(!_0x43dc86['_']['length']&&!_0x43dc86['remove'])throw new errors[(a35_0x5c8a('0x16'))](errors[a35_0x5c8a('0x19')][a35_0x5c8a('0x14')],this[a35_0x5c8a('0x1d')]);const _0x4927b6=_0xeb83e0[a35_0x5c8a('0x1b')];let _0x2944db;if(_0x43dc86[a35_0x5c8a('0x22')]){_0x4927b6['document'][a35_0x5c8a('0xf')]=undefined;delete _0x4927b6['document']['streamerRoleId'];}else{_0x2944db=this[a35_0x5c8a('0x17')]['resolver'][a35_0x5c8a('0x8')](_0xeb83e0[a35_0x5c8a('0x1b')],_0x43dc86['_'][a35_0x5c8a('0x0')]('\x20'));if(!_0x2944db)throw new errors[(a35_0x5c8a('0x16'))](errors[a35_0x5c8a('0x19')][a35_0x5c8a('0x6')],this[a35_0x5c8a('0x17')][a35_0x5c8a('0x4')]['getString'](_0xeb83e0[a35_0x5c8a('0x1b')][a35_0x5c8a('0x15')][a35_0x5c8a('0x1')],a35_0x5c8a('0x2'),a35_0x5c8a('0x11')));_0x4927b6[a35_0x5c8a('0x15')][a35_0x5c8a('0xf')]=_0x2944db['id'];}await _0x4927b6[a35_0x5c8a('0x15')]['save']();await _0xeb83e0[a35_0x5c8a('0xa')][a35_0x5c8a('0x23')]({'embed':{'color':_0x4927b6['document']['streamerRoleId']?tesseract_1[a35_0x5c8a('0x3')][a35_0x5c8a('0x24')][a35_0x5c8a('0x20')]:tesseract_1['Constants'][a35_0x5c8a('0x24')][a35_0x5c8a('0x1c')],'description':this[a35_0x5c8a('0x17')][a35_0x5c8a('0x4')][a35_0x5c8a('0x5')](_0xeb83e0[a35_0x5c8a('0x1b')][a35_0x5c8a('0x15')]['language'],'info',_0x4927b6[a35_0x5c8a('0x15')]['streamerRoleId']?a35_0x5c8a('0xc'):a35_0x5c8a('0x21'),_0xeb83e0[a35_0x5c8a('0x18')]['tag'],_0x2944db?_0x2944db['name']:'')}})[a35_0x5c8a('0xb')](()=>{});};}};