const NBA = require("nba")


module.exports = {
	name: 'team',
	description: 'Team Info Info:',
	execute(message, args) {
        if (args.length < 1) {
			message.channel.send("PUT A NAME THERE STUPID")
			return;
        }
        
		const name = args.join(" ");
		const team = NBA.teamIdFromName(name)

        NBA.stats.teamInfoCommon( {TeamID: team} )  
            .then( response => {
               
                let result = response.teamInfoCommon[0]
                message.channel.send(`
                ${result.teamCity} ${result.teamName}\nSeason: ${result.seasonYear}\nW: ${result.w} - L ${result.l} ${result.pct}%\n${result.teamDivision} #${result.divRank}\n${result.teamConference} #${result.confRank}
                                      `);
            })
        
      
	},
};