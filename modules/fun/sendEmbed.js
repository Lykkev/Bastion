/**
 * @file sendEmbed command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const string = require('../../handlers/languageHandler');

exports.run = (Bastion, message, args) => {
  if (args.length < 1) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return Bastion.emit('commandUsage', message, this.help);
  }

  try {
    args = JSON.parse(args.join(' '));
  }
  catch (e) {
    /**
     * Error condition is encountered.
     * @fires error
     */
    return Bastion.emit('error', 'Invalid Data', `Invalid embed object. Please check that it's an valid embed object or create one [here](https://bastion.js.org/tools/embed_builder/).\`\`\`${e.toString()}\`\`\``, message.channel);
  }

  message.channel.send({
    embed: args
  }).then(() => {
    if (message.deletable) {
      message.delete().catch(e => {
        Bastion.log.error(e.stack);
      });
    }
  }).catch(e => {
    Bastion.log.error(e.stack);
  });
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'sendembed',
  description: string('sendEmbed', 'commandDescription'),
  botPermission: '',
  userPermission: '',
  usage: 'sendEmbed <embedObject>',
  example: [ 'sendEmbed {"title": "Hello", "description": "Isn\'t it cool?"}' ]
};
