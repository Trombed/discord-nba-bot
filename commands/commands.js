module.exports = {
	name: 'commands',
	description: 'List of available commands',
	execute(message, args) {
		message.channel.send('!team team_name, !player player_name');
	},
};