const NBA = require("nba")


module.exports = {
	name: 'v2',
	description: 'Player Info:',
	execute(message, args) {
		if (args.length < 1) {
			message.channel.send("PUT A NAME THERE STUPID")
			return;
		}
		const name = args.join(" ");
		const player = NBA.findPlayer(name);


		NBA.stats.playerProfile( { PlayerID: player.playerId})
			.then ( response => {
                console.log(response)
                let stats = response.seasonTotalsRegularSeason.map( player => {
                    return `\n${player.seasonId} ${player.playerAge} ${player.teamAbbreviation} ${player.gp} ${player.gs} ${player.min} ${player.fgm} ${player.fga} ${player.fgPct} ${player.ftm} ${player.fta} ${player.ftPct} ${player.oreb} ${player.dreb} ${player.reb} ${player.ast} ${player.stl} ${player.blk} ${player.tov} ${player.pf} ${player.pts}`
                })
                message.channel.send("| Season  | Age     | Team | GS | MIN | FGM | FGA | FG% | FG3M | FG3A | FG3% | FTM | FTA | FT% | OREB | DREB | REB | AST | STL | BLK | TOV | PF | PTS |\n " + stats)
			})
		
			
		
	},
};