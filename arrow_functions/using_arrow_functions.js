//Binding this is ES5 (pass through this)
const team = {
    members: ['Jane', 'Tim'],
    teamName: 'Dream Team',
    teamSummary: function(){
        return this.members.map(function(member){
            return `${member} is on team: ${this.teamName}`;
        }.bind(this));
    }
};

//Assigning self to this ES5 / common in Jquery
const team2 = {
    members: ['Jane', 'Tim'],
    teamName: 'Dream Team',
    teamSummary: function(){
        let self = this;
        return this.members.map(function(member){
            return `${member} is on team: ${self.teamName}`;
        });
    }
};

//Using arrow functions properly - only changing function to =>
const team3 = {
    members: ['Jane', 'Tim'],
    teamName: 'Dream Team',
    teamSummary: function(){
        //this === team3
        return this.members.map((member) => {
            return `${member} is on team: ${this.teamName}`;
        });
    }
};


console.log(team.teamSummary())
console.log(team2.teamSummary())
console.log(team3.teamSummary())