const a67_0x2090=['Role\x20Emoji\x20Removed','\x20Roles','../../models/ReactionRoleGroup','PLATINUM','catch','messages','constructor','Reaction\x20Role\x20Groups','createDocument','channel','../../utils/errors','COLORS','errors','membershipLimitReactionRoleGroups','client','reaction','BASTION_ERROR_TYPE','GOLD','exports','get','reactionRoles','message','Emoji','parseEmoji','fetch','fetchDocument','role','locale','reactionRoles\x20--message\x20ID\x20--role\x20ROLES...\x20--exclusive','MANAGE_ROLES','deleteOne','reactionRoles\x20--message\x20ID\x20--delete','\x20/\x20Exclusive','GREEN','length','Role\x20Emoji\x20Added','user','../../utils/omnic','exclusive','REACTION_ROLES_PER_GROUP','emojis','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Constants','delete','PREMIUM_MEMBERSHIP_REQUIRED','fetchPremiumTier','test','send','react','default','reactionRolesGroupAdd','REACTION_ROLE_GROUPS','reactionRoles\x20--role\x20ROLE\x20--emoji\x20EMOJI','exec','map','membershipLimitReactionRoleGroupRoles','_id','info','document','../../utils/constants','DiscordError','Role\x20Emoji','language','Role','RED','save','reactionRoles\x20--role\x20ROLE\x20--no-emoji','emoji','LIMITED_PREMIUM_MEMBERSHIP','tag','../../models/Role','MESSAGE_NOT_FOUND','resolveRole','IRIS','resolver','guild','isPublicBastion','find','LIMITS','Command','author','NO_REACTION_ROLES','PremiumTier','value','compile','getString','roleNotFound','reactionRolesGroupRemove'];(function(_0x291b22,_0x2090e7){const _0x44e395=function(_0x476725){while(--_0x476725){_0x291b22['push'](_0x291b22['shift']());}};const _0x39f5af=function(){const _0x4c7035={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x532e4b,_0x467dba,_0x39d339,_0x476121){_0x476121=_0x476121||{};let _0x4b6d2f=_0x467dba+'='+_0x39d339;let _0x2486df=0x0;for(let _0x11aa83=0x0,_0xc30017=_0x532e4b['length'];_0x11aa83<_0xc30017;_0x11aa83++){const _0x479f85=_0x532e4b[_0x11aa83];_0x4b6d2f+=';\x20'+_0x479f85;const _0x28c6ef=_0x532e4b[_0x479f85];_0x532e4b['push'](_0x28c6ef);_0xc30017=_0x532e4b['length'];if(_0x28c6ef!==!![]){_0x4b6d2f+='='+_0x28c6ef;}}_0x476121['cookie']=_0x4b6d2f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x21a237,_0x22916f){_0x21a237=_0x21a237||function(_0x4ae3d2){return _0x4ae3d2;};const _0x3b03b4=_0x21a237(new RegExp('(?:^|;\x20)'+_0x22916f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x169e01=function(_0x343da7,_0x166603){_0x343da7(++_0x166603);};_0x169e01(_0x44e395,_0x2090e7);return _0x3b03b4?decodeURIComponent(_0x3b03b4[0x1]):undefined;}};const _0x18c56a=function(){const _0x3f93f3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3f93f3['test'](_0x4c7035['removeCookie']['toString']());};_0x4c7035['updateCookie']=_0x18c56a;let _0x5832b2='';const _0x1ad3fe=_0x4c7035['updateCookie']();if(!_0x1ad3fe){_0x4c7035['setCookie'](['*'],'counter',0x1);}else if(_0x1ad3fe){_0x5832b2=_0x4c7035['getCookie'](null,'counter');}else{_0x4c7035['removeCookie']();}};_0x39f5af();}(a67_0x2090,0x110));const a67_0x44e3=function(_0x291b22,_0x2090e7){_0x291b22=_0x291b22-0x0;let _0x44e395=a67_0x2090[_0x291b22];return _0x44e395;};const a67_0x4c7035=function(){let _0x45fddb=!![];return function(_0x30c73c,_0x24af58){const _0x17c629=_0x45fddb?function(){if(_0x24af58){const _0x33e45d=_0x24af58['apply'](_0x30c73c,arguments);_0x24af58=null;return _0x33e45d;}}:function(){};_0x45fddb=![];return _0x17c629;};}();const a67_0x476725=a67_0x4c7035(this,function(){const _0x52d4ea=function(){const _0x74f06d=_0x52d4ea[a67_0x44e3('0x56')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a67_0x44e3('0x4c')](a67_0x44e3('0x21'));return!_0x74f06d[a67_0x44e3('0x26')](a67_0x476725);};return _0x52d4ea();});a67_0x476725();'use strict';const tesseract_1=require('@bastion/tesseract');const Role_1=require(a67_0x44e3('0x3e'));const ReactionRoleGroup_1=require(a67_0x44e3('0x52'));const constants=require(a67_0x44e3('0x33'));const emojis=require('../../utils/emojis');const errors=require(a67_0x44e3('0x2'));const omnic=require(a67_0x44e3('0x1d'));module[a67_0x44e3('0xa')]=class ReactionRolesCommand extends tesseract_1[a67_0x44e3('0x47')]{constructor(){super(a67_0x44e3('0xc'),{'description':'It\x20allows\x20you\x20to\x20create\x20(and\x20delete)\x20Reaction\x20Role\x20Groups.\x20A\x20Reaction\x20Role\x20Group\x20is\x20a\x20group\x20of\x20reactions\x20emojis\x20that\x20can\x20be\x20used\x20by\x20a\x20member\x20on\x20the\x20Reaction\x20Role\x20Message\x20to\x20add\x20(or\x20remove)\x20roles\x20to\x20themselves.\x20Reaction\x20Roles\x20in\x20a\x20single\x20group\x20can\x20also\x20be\x20set\x20as\x20mutually\x20exclusive.\x20It\x20also\x20allows\x20you\x20to\x20assign\x20emojis\x20to\x20roles,\x20that\x20can\x20be\x20used\x20in\x20reacting\x20to\x20the\x20Reaction\x20Role\x20Message.','triggers':[],'arguments':{'array':[a67_0x44e3('0x12')],'boolean':[a67_0x44e3('0x23'),a67_0x44e3('0x1e')],'string':['message',a67_0x44e3('0x12'),'emoji']},'scope':a67_0x44e3('0x43'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a67_0x44e3('0x15')],'userPermissions':['MANAGE_ROLES'],'syntax':[a67_0x44e3('0xc'),a67_0x44e3('0x2c'),a67_0x44e3('0x3a'),'reactionRoles\x20--message\x20ID\x20--role\x20ROLES...',a67_0x44e3('0x14'),a67_0x44e3('0x17')]});this[a67_0x44e3('0x2d')]=async(_0x13c112,_0x3bb25c)=>{if(_0x3bb25c['message']&&_0x3bb25c[a67_0x44e3('0x23')]){await ReactionRoleGroup_1[a67_0x44e3('0x29')][a67_0x44e3('0x16')]({'_id':_0x3bb25c[a67_0x44e3('0xd')]});return await _0x13c112[a67_0x44e3('0x1')][a67_0x44e3('0x27')]({'embed':{'color':tesseract_1[a67_0x44e3('0x22')]['COLORS']['RED'],'description':this[a67_0x44e3('0x6')][a67_0x44e3('0x13')][a67_0x44e3('0x4d')](_0x13c112[a67_0x44e3('0x43')][a67_0x44e3('0x32')][a67_0x44e3('0x36')],a67_0x44e3('0x31'),a67_0x44e3('0x4f'),_0x13c112['author'][a67_0x44e3('0x3d')],_0x3bb25c[a67_0x44e3('0xd')])}})[a67_0x44e3('0x54')](()=>{});}if(_0x3bb25c[a67_0x44e3('0xd')]&&_0x3bb25c[a67_0x44e3('0x12')]&&_0x3bb25c[a67_0x44e3('0x12')][a67_0x44e3('0x1a')]){if(constants[a67_0x44e3('0x44')](this[a67_0x44e3('0x6')][a67_0x44e3('0x1c')])){const _0x4bca70=await omnic[a67_0x44e3('0x25')](_0x13c112[a67_0x44e3('0x43')])[a67_0x44e3('0x54')](()=>{});if(_0x4bca70){if(_0x4bca70===omnic['PremiumTier'][a67_0x44e3('0x9')]&&_0x3bb25c[a67_0x44e3('0x12')]['length']>constants[a67_0x44e3('0x46')][a67_0x44e3('0x9')][a67_0x44e3('0x1f')]){throw new errors[(a67_0x44e3('0x34'))](errors[a67_0x44e3('0x8')][a67_0x44e3('0x3c')],this['client']['locale'][a67_0x44e3('0x4d')](_0x13c112[a67_0x44e3('0x43')][a67_0x44e3('0x32')][a67_0x44e3('0x36')],a67_0x44e3('0x4'),a67_0x44e3('0x2f'),constants[a67_0x44e3('0x46')][a67_0x44e3('0x9')][a67_0x44e3('0x1f')]));}else if(_0x4bca70===omnic['PremiumTier'][a67_0x44e3('0x53')]&&_0x3bb25c['role']['length']>constants[a67_0x44e3('0x46')]['PLATINUM'][a67_0x44e3('0x1f')]){throw new errors[(a67_0x44e3('0x34'))](errors[a67_0x44e3('0x8')][a67_0x44e3('0x3c')],this[a67_0x44e3('0x6')][a67_0x44e3('0x13')][a67_0x44e3('0x4d')](_0x13c112[a67_0x44e3('0x43')]['document'][a67_0x44e3('0x36')],a67_0x44e3('0x4'),a67_0x44e3('0x2f'),constants[a67_0x44e3('0x46')][a67_0x44e3('0x53')][a67_0x44e3('0x1f')]));}}else if(_0x3bb25c[a67_0x44e3('0x12')][a67_0x44e3('0x1a')]>constants[a67_0x44e3('0x46')]['REACTION_ROLES_PER_GROUP']){throw new errors[(a67_0x44e3('0x34'))](errors['BASTION_ERROR_TYPE'][a67_0x44e3('0x24')],this[a67_0x44e3('0x6')][a67_0x44e3('0x13')][a67_0x44e3('0x4d')](_0x13c112[a67_0x44e3('0x43')]['document'][a67_0x44e3('0x36')],'errors','premiumReactionRoleGroupRoles',constants[a67_0x44e3('0x46')]['REACTION_ROLES_PER_GROUP']));}const _0x554ce9=await ReactionRoleGroup_1[a67_0x44e3('0x29')]['countDocuments']({'guild':_0x13c112[a67_0x44e3('0x43')]['id']});if(_0x4bca70){if(_0x4bca70===omnic[a67_0x44e3('0x4a')][a67_0x44e3('0x9')]&&_0x554ce9>=constants['LIMITS'][a67_0x44e3('0x9')][a67_0x44e3('0x2b')]){throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['LIMITED_PREMIUM_MEMBERSHIP'],this[a67_0x44e3('0x6')][a67_0x44e3('0x13')]['getString'](_0x13c112[a67_0x44e3('0x43')][a67_0x44e3('0x32')][a67_0x44e3('0x36')],a67_0x44e3('0x4'),'membershipLimitReactionRoleGroups',constants['LIMITS']['GOLD'][a67_0x44e3('0x2b')]));}else if(_0x4bca70===omnic[a67_0x44e3('0x4a')]['PLATINUM']&&_0x554ce9>=constants[a67_0x44e3('0x46')][a67_0x44e3('0x53')][a67_0x44e3('0x2b')]){throw new errors[(a67_0x44e3('0x34'))](errors['BASTION_ERROR_TYPE'][a67_0x44e3('0x3c')],this[a67_0x44e3('0x6')]['locale'][a67_0x44e3('0x4d')](_0x13c112['guild'][a67_0x44e3('0x32')][a67_0x44e3('0x36')],a67_0x44e3('0x4'),a67_0x44e3('0x5'),constants[a67_0x44e3('0x46')][a67_0x44e3('0x53')][a67_0x44e3('0x2b')]));}}else if(_0x554ce9>=constants[a67_0x44e3('0x46')][a67_0x44e3('0x2b')]){throw new errors[(a67_0x44e3('0x34'))](errors[a67_0x44e3('0x8')]['PREMIUM_MEMBERSHIP_REQUIRED'],this['client'][a67_0x44e3('0x13')][a67_0x44e3('0x4d')](_0x13c112['guild'][a67_0x44e3('0x32')][a67_0x44e3('0x36')],a67_0x44e3('0x4'),'premiumReactionRoleGroups',constants[a67_0x44e3('0x46')][a67_0x44e3('0x2b')]));}}const _0x44c6ee=await _0x13c112['channel'][a67_0x44e3('0x55')][a67_0x44e3('0x10')](_0x3bb25c[a67_0x44e3('0xd')],![])[a67_0x44e3('0x54')](()=>{});if(!_0x44c6ee)throw new Error(a67_0x44e3('0x3f'));const _0x14d54d=this[a67_0x44e3('0x6')][a67_0x44e3('0x42')]['resolveRoles'](_0x13c112[a67_0x44e3('0x43')],_0x3bb25c[a67_0x44e3('0x12')]);if(!_0x14d54d['length'])throw new errors[(a67_0x44e3('0x34'))](errors[a67_0x44e3('0x8')]['ROLE_NOT_FOUND'],this[a67_0x44e3('0x6')][a67_0x44e3('0x13')][a67_0x44e3('0x4d')](_0x13c112[a67_0x44e3('0x43')][a67_0x44e3('0x32')][a67_0x44e3('0x36')],'errors',a67_0x44e3('0x4e')));await ReactionRoleGroup_1['default']['findByIdAndUpdate'](_0x44c6ee['id'],{'_id':_0x44c6ee['id'],'channel':_0x13c112[a67_0x44e3('0x1')]['id'],'guild':_0x13c112[a67_0x44e3('0x43')]['id'],'roles':_0x14d54d[a67_0x44e3('0x2e')](_0x5a70a2=>_0x5a70a2['id']),'exclusive':_0x3bb25c['exclusive']?_0x3bb25c[a67_0x44e3('0x1e')]:undefined},{'upsert':!![]});await _0x13c112[a67_0x44e3('0x1')]['send']({'embed':{'color':tesseract_1[a67_0x44e3('0x22')][a67_0x44e3('0x3')][a67_0x44e3('0x19')],'description':this[a67_0x44e3('0x6')]['locale'][a67_0x44e3('0x4d')](_0x13c112[a67_0x44e3('0x43')]['document'][a67_0x44e3('0x36')],a67_0x44e3('0x31'),a67_0x44e3('0x2a'),_0x13c112[a67_0x44e3('0x48')][a67_0x44e3('0x3d')],_0x44c6ee['url'])}})[a67_0x44e3('0x54')](()=>{});const _0x3c3e6b=await Role_1[a67_0x44e3('0x29')]['find']({'$or':_0x14d54d[a67_0x44e3('0x2e')](_0x19cb56=>({'_id':_0x19cb56['id']})),'guild':_0x13c112[a67_0x44e3('0x43')]['id'],'emoji':{'$exists':!![]}});if(_0x3c3e6b&&_0x3c3e6b[a67_0x44e3('0x1a')]){for(const _0x117bf2 of _0x3c3e6b){const _0x39e5df=emojis[a67_0x44e3('0xf')](_0x117bf2[a67_0x44e3('0x3b')]);await _0x44c6ee[a67_0x44e3('0x28')](_0x39e5df[a67_0x44e3('0x7')]);}}return;}if(_0x3bb25c['role']){const _0x5a49d6=_0x3bb25c['role']?_0x3bb25c[a67_0x44e3('0x12')]['join']('\x20'):'';const _0x4f8146=this[a67_0x44e3('0x6')][a67_0x44e3('0x42')][a67_0x44e3('0x40')](_0x13c112[a67_0x44e3('0x43')],_0x5a49d6);if(!_0x4f8146)throw new errors[(a67_0x44e3('0x34'))](errors['BASTION_ERROR_TYPE']['ROLE_NOT_FOUND'],this[a67_0x44e3('0x6')]['locale'][a67_0x44e3('0x4d')](_0x13c112['guild']['document'][a67_0x44e3('0x36')],a67_0x44e3('0x4'),a67_0x44e3('0x4e')));let _0x52f579=await _0x4f8146[a67_0x44e3('0x11')]();if(!_0x52f579&&_0x3bb25c[a67_0x44e3('0x3b')]){_0x52f579=await _0x4f8146[a67_0x44e3('0x0')]();}if(_0x3bb25c[a67_0x44e3('0x3b')]){const _0xb29875=emojis[a67_0x44e3('0xf')](_0x3bb25c[a67_0x44e3('0x3b')]);_0x52f579['emoji']=_0xb29875[a67_0x44e3('0x4b')];await _0x52f579[a67_0x44e3('0x39')]();}else if(_0x52f579&&_0x3bb25c[a67_0x44e3('0x3b')]===![]){_0x52f579['emoji']=undefined;await _0x52f579[a67_0x44e3('0x39')]();}const _0x358ced=_0x52f579?emojis[a67_0x44e3('0xf')](_0x52f579[a67_0x44e3('0x3b')]):undefined;return await _0x13c112[a67_0x44e3('0x1')][a67_0x44e3('0x27')]({'embed':{'color':_0x3bb25c[a67_0x44e3('0x3b')]?tesseract_1[a67_0x44e3('0x22')][a67_0x44e3('0x3')]['GREEN']:_0x3bb25c[a67_0x44e3('0x3b')]===![]?tesseract_1['Constants'][a67_0x44e3('0x3')][a67_0x44e3('0x38')]:tesseract_1[a67_0x44e3('0x22')]['COLORS'][a67_0x44e3('0x41')],'title':_0x3bb25c['emoji']?a67_0x44e3('0x1b'):_0x3bb25c['emoji']===![]?a67_0x44e3('0x50'):a67_0x44e3('0x35'),'fields':[{'name':a67_0x44e3('0x37'),'value':_0x4f8146['name']||'-','inline':!![]},{'name':a67_0x44e3('0xe'),'value':_0x358ced?_0x358ced[a67_0x44e3('0x7')]===_0x358ced[a67_0x44e3('0x4b')]?_0x13c112[a67_0x44e3('0x43')][a67_0x44e3('0x20')]['cache'][a67_0x44e3('0xb')](_0x358ced['reaction'])||_0x358ced[a67_0x44e3('0x4b')]:_0x358ced[a67_0x44e3('0x7')]:'-','inline':!![]}]}})[a67_0x44e3('0x54')](()=>{});}const _0x4ebb63=await ReactionRoleGroup_1['default'][a67_0x44e3('0x45')]({});if(!_0x4ebb63)throw new Error(a67_0x44e3('0x49'));await _0x13c112['channel'][a67_0x44e3('0x27')]({'embed':{'title':a67_0x44e3('0x57'),'fields':_0x4ebb63[a67_0x44e3('0x2e')](_0x3ed11a=>({'name':_0x3ed11a[a67_0x44e3('0x30')],'value':_0x3ed11a['roles'][a67_0x44e3('0x1a')]+a67_0x44e3('0x51')+(_0x3ed11a[a67_0x44e3('0x1e')]?a67_0x44e3('0x18'):'')+'\x20/\x20[Jump\x20to\x20Reaction\x20Message](https://discord.com/channels/'+_0x3ed11a[a67_0x44e3('0x43')]+'/'+_0x3ed11a[a67_0x44e3('0x1')]+'/'+_0x3ed11a[a67_0x44e3('0x30')]+')'}))}})[a67_0x44e3('0x54')](()=>{});};}};