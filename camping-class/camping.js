class SummerCamp {
    constructor (organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150, 
            "student": 300, 
            "collegian": 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money) {
        if(!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.')
        };
        let currentParticipan = this.listOfParticipants.find(p => p.name === name);
        if(currentParticipan) {
            return `The ${name} is already registered at the camp.`
        };

        if(this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        };

        let newParticipant = {
            name, 
            condition, 
            power : 100,
            wins : 0
        };
        this.listOfParticipants.push(newParticipant);
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant (name) {
        let current = this.listOfParticipants.find(p => p.name === name);
        if(!current) {
            throw new Error (`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants = this.listOfParticipants.filter(p => p.name !== name);
        return `The ${name} removed successfully.`
    }
    timeToPlay (typeOfGame, participant1, participant2) {
        if(typeOfGame === 'Battleship') {
            let currentPlayer = this.listOfParticipants.find(p => p.name === participant1);
            if(!currentPlayer) {
                throw new Error (`Invalid entered name/s.`)
            };
            currentPlayer.power += 20;
            return `The ${currentPlayer.name} successfully completed the game ${typeOfGame}.`
        }
        if(typeOfGame === 'WaterBalloonFights') {
            let firstPlayer = this.listOfParticipants.find(p => p.name === participant1);
            let secondPlayer = this.listOfParticipants.find(p => p.name === participant2);

            if(!firstPlayer || !secondPlayer) {
                throw new Error (`Invalid entered name/s.`)
            };
            if(firstPlayer.condition !== secondPlayer.condition) {
                throw new Error (`Choose players with equal condition.`);
            };

            if(firstPlayer.power > secondPlayer.power) {
                firstPlayer.wins += 1;
                return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`
            }else if(secondPlayer.power > firstPlayer.power) {
                secondPlayer.wins += 1;
                return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`
            }else {
                return `There is no winner.`
            }
        }
    }
    toString () {
        let stringArr = [];
        stringArr.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        for(let player of sorted) {
            stringArr.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`)
        };
        return stringArr.join('\n')
    }


}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



