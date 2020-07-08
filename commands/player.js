const NBA = require("nba")


module.exports = {
	name: 'player',
	description: 'Team Info:',
	execute(message, args) {
		const name = args.join(" ");
		const player = NBA.findPlayer(name);
		console.log(player)
		let output;
		NBA.stats.playerInfo( { PlayerID: player.playerId})
			.then (res => message.channel.send(res))
		;
	},
};