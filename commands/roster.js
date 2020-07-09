const NBA = require("nba")

    
module.exports = {
	name: 'roster',
	description: 'Team Roster Info:',
	execute(message, args) {
        if (args.length < 1) {
			message.channel.send("PUT A NAME THERE STUPID")
			return;
        }
        
		const name = args.join(" ");
		const team = NBA.teamIdFromName(name)

        NBA.stats.commonTeamRoster( {TeamID: team} )  
            .then( response => {


               
                let players = response.commonTeamRoster.map( player => {
                   return `${player.player} Age:${player.age} Height: ${player.height} Year: ${player.exp} Pos: ${player.position} Num: ${player.num} DOB: ${player.birthDate}`
                })
                
                message.channel.send(players);
            })
        
      
	},
};