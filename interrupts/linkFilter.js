const a152_0x3831=['author','content','cache','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20/\x20','discord.js','MANAGE_MESSAGES','channel','whitelist','filters','@bastion/tesseract','length','linkFilter','constructor','URI','includes','MANAGE_CHANNELS','createModerationLog','safelist','document','some','catch','TextChannel','delete','exports','has','../utils/regex','deletable','member','Interrupt','name','return\x20/\x22\x20+\x20this\x20+\x20\x22/','deleteLink','permissionsFor'];(function(_0x3ca0c0,_0x38310e){const _0x1a797e=function(_0x45bf42){while(--_0x45bf42){_0x3ca0c0['push'](_0x3ca0c0['shift']());}},_0x4ca6a4=function(){const _0x564278={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4291c7,_0x368d0f,_0x8850a0,_0x390199){_0x390199=_0x390199||{};let _0x7c05c=_0x368d0f+'='+_0x8850a0,_0x282e3f=0x0;for(let _0x19625e=0x0,_0x56f468=_0x4291c7['length'];_0x19625e<_0x56f468;_0x19625e++){const _0x4f4b0c=_0x4291c7[_0x19625e];_0x7c05c+=';\x20'+_0x4f4b0c;const _0x336e6d=_0x4291c7[_0x4f4b0c];_0x4291c7['push'](_0x336e6d),_0x56f468=_0x4291c7['length'],_0x336e6d!==!![]&&(_0x7c05c+='='+_0x336e6d);}_0x390199['cookie']=_0x7c05c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5d213c,_0x5bcb94){_0x5d213c=_0x5d213c||function(_0x2975a5){return _0x2975a5;};const _0x436c19=_0x5d213c(new RegExp('(?:^|;\x20)'+_0x5bcb94['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3212c5=function(_0x24d443,_0x5a65d7){_0x24d443(++_0x5a65d7);};return _0x3212c5(_0x1a797e,_0x38310e),_0x436c19?decodeURIComponent(_0x436c19[0x1]):undefined;}},_0x1c08db=function(){const _0x129906=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x129906['test'](_0x564278['removeCookie']['toString']());};_0x564278['updateCookie']=_0x1c08db;let _0x114759='';const _0x1aff15=_0x564278['updateCookie']();if(!_0x1aff15)_0x564278['setCookie'](['*'],'counter',0x1);else _0x1aff15?_0x114759=_0x564278['getCookie'](null,'counter'):_0x564278['removeCookie']();};_0x4ca6a4();}(a152_0x3831,0x73));const a152_0x1a79=function(_0x3ca0c0,_0x38310e){_0x3ca0c0=_0x3ca0c0-0x0;let _0x1a797e=a152_0x3831[_0x3ca0c0];return _0x1a797e;};const a152_0x564278=function(){let _0x114759=!![];return function(_0x1aff15,_0x4291c7){const _0x368d0f=_0x114759?function(){if(_0x4291c7){const _0x8850a0=_0x4291c7['apply'](_0x1aff15,arguments);return _0x4291c7=null,_0x8850a0;}}:function(){};return _0x114759=![],_0x368d0f;};}(),a152_0x45bf42=a152_0x564278(this,function(){const _0x390199=function(){const _0x7c05c=_0x390199['constructor'](a152_0x1a79('0x12'))()[a152_0x1a79('0x0')](a152_0x1a79('0x18'));return!_0x7c05c['test'](a152_0x45bf42);};return _0x390199();});a152_0x45bf42();'use strict';const tesseract_1=require(a152_0x1a79('0x1f')),discord_js_1=require(a152_0x1a79('0x1a')),regex=require(a152_0x1a79('0xd'));module[a152_0x1a79('0xb')]=class LinkFilter extends tesseract_1[a152_0x1a79('0x10')]{constructor(){super(a152_0x1a79('0x21'),{'type':0x0}),this[a152_0x1a79('0x13')]=_0x282e3f=>{if(_0x282e3f[a152_0x1a79('0xe')])_0x282e3f[a152_0x1a79('0xa')]()[a152_0x1a79('0x8')](()=>{});},this['exec']=async _0x19625e=>{if(!_0x19625e['guild'])return;if(!(_0x19625e[a152_0x1a79('0x1c')]instanceof discord_js_1[a152_0x1a79('0x9')]))return;if(!_0x19625e[a152_0x1a79('0x16')]||!_0x19625e['content'][a152_0x1a79('0x20')])return![];const _0x56f468=_0x19625e['guild'];if(_0x19625e[a152_0x1a79('0xf')]&&_0x19625e['member']['roles'][a152_0x1a79('0x17')][a152_0x1a79('0x7')](_0x4f4b0c=>_0x4f4b0c[a152_0x1a79('0x11')]['toLowerCase']()===a152_0x1a79('0x5')))return![];if(_0x19625e[a152_0x1a79('0x1c')][a152_0x1a79('0x14')](_0x19625e[a152_0x1a79('0xf')])&&_0x19625e['channel'][a152_0x1a79('0x14')](_0x19625e['member'])[a152_0x1a79('0xc')]([a152_0x1a79('0x3'),a152_0x1a79('0x1b')]))return![];if(!_0x56f468[a152_0x1a79('0x6')]||!_0x56f468[a152_0x1a79('0x6')][a152_0x1a79('0x1e')]||!_0x56f468[a152_0x1a79('0x6')][a152_0x1a79('0x1e')]['linkFilter']||!_0x56f468[a152_0x1a79('0x6')][a152_0x1a79('0x1e')]['linkFilter']['enabled'])return![];if(_0x56f468[a152_0x1a79('0x6')]['filters'][a152_0x1a79('0x21')][a152_0x1a79('0x1d')]){if(_0x56f468['document'][a152_0x1a79('0x1e')][a152_0x1a79('0x21')][a152_0x1a79('0x1d')][a152_0x1a79('0x2')](_0x19625e[a152_0x1a79('0x1c')]['id']))return![];if(_0x56f468[a152_0x1a79('0x6')][a152_0x1a79('0x1e')]['linkFilter']['whitelist'][a152_0x1a79('0x7')](_0x336e6d=>_0x19625e[a152_0x1a79('0xf')]['roles'][a152_0x1a79('0x17')][a152_0x1a79('0xc')](_0x336e6d)))return![];}if(regex[a152_0x1a79('0x1')]['test'](_0x19625e[a152_0x1a79('0x16')]))return _0x19625e[a152_0x1a79('0xf')]['addInfraction']('Unauthorized\x20to\x20send\x20links.'),this[a152_0x1a79('0x13')](_0x19625e),_0x56f468[a152_0x1a79('0x4')]({'event':a152_0x1a79('0x21'),'fields':[{'name':'User','value':_0x19625e[a152_0x1a79('0x15')]['tag']+a152_0x1a79('0x19')+_0x19625e[a152_0x1a79('0x15')]['id']},{'name':'Channel','value':_0x19625e[a152_0x1a79('0x1c')][a152_0x1a79('0x11')]+a152_0x1a79('0x19')+_0x19625e[a152_0x1a79('0x1c')]['id']}]})['catch'](()=>{}),!![];return![];};}};