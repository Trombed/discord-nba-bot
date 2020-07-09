const NBA = require("nba")


module.exports = {
	name: 'player',
	description: 'Player Info:',
	execute(message, args) {
		if (args.length < 1) {
			message.channel.send("PUT A NAME THERE STUPID")
			return;
		}
		const name = args.join(" ");
		const player = NBA.findPlayer(name);


		NBA.stats.playerInfo( { PlayerID: player.playerId})
			.then ( response => {
				let info = response.commonPlayerInfo[0]
				let headlineStats = response.playerHeadlineStats[0]
				message.channel.send(`${info.displayFirstLast}\n${info.teamAbbreviation}\n Season Stats: ${headlineStats.timeFrame}\n PTS: ${headlineStats.pts}\n AST: ${headlineStats.ast}\n REB: ${headlineStats.reb} \n Height: ${info.height} Weight: ${info.weight} Seasons: ${info.seasonExp} years. College: ${info.school} Draft: ${info.draftYear} Round: ${info.draftRound} Number: ${info.draftNumber}
				`)
			})
		
			
		
	},
};