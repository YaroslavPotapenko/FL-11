document.addEventListener('DOMContentLoaded',function() {

    class Fighter {

        constructor(object) {
            this.object = object;
        }
        

        getName () {
            return this.object.name;
        }
        getDamage() {
            return this.object.damage;
        }
        getAgility() {
            return this.object.agility;
        }
        logCombatHistory() {
            return `Name: ${this.getName()}, Wins: ${this.addWin()}, Losses: ${this.addLoss()}`
        }

        addWin() {
            if (isNaN(this.wins)) {
                this.wins = 0;
            }
            return this.wins;
        }
        addLoss() {
            if (isNaN(this.losses)) {
                this.losses = 0;
            }
            return this.losses;
        }

        getHealth() {
            if (!isNaN(this.changeHp)) {
                this.currentHp = this.object.hp - this.changeHp;
                return this.currentHp;
            } else {
                this.changeHp = 0;
                this.currentHp = this.object.hp - this.changeHp;
                return this.currentHp;
            }
        }

        attack(object) {
            let res;
            object.changeHp += 0;
            if (Math.floor(Math.random()*101) >= object.getAgility()) {
                object.changeHp += this.getDamage();
                res = `${this.getName()} make ${this.getDamage()} damage to ${object.getName()}`;
            } else {
                res = `${this.getName()}'s attack missed`;
            }
            return res;
        }

        heal(amount) {
            let res;
            if (amount > 0) {
                if (this.getHealth() + amount > this.object.hp) {
                    res = this.object.hp;
                } else {
                    this.changeHp -= amount;
                    return this.getHealth();
                }
            } else {
                console.log('enter a correct value');
            }
            return res;
        }

        dealDamage(amount) {
            if (amount > 0) {
                if (this.getHealth() - amount <= 0) {
                    return 0;
                } else {
                    this.changeHp += amount;
                    return this.getHealth();
                }
            } else {
                console.log('enter a correct value');
            }
        }

    }

    const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
    const fighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});

    function battle (firstFighter,secondFighter) {

        if (firstFighter.getHealth() <= 0 ) {
            console.log(firstFighter.getName() + ' is dead and can`t fight');
        } else if (secondFighter.getHealth() <= 0 ) {
            console.log(secondFighter.getName() + ' is dead and can`t fight');
        } else {
            while (firstFighter.getHealth() > secondFighter.getDamage() / 2
            && secondFighter.getHealth() > firstFighter.getDamage() / 2) {
                firstFighter.logCombatHistory();
                secondFighter.logCombatHistory();
                console.log(firstFighter.attack(secondFighter));
                console.log(secondFighter.attack(firstFighter));
            }
            if (firstFighter.getHealth() > secondFighter.getHealth()) {
                firstFighter.wins++;
                secondFighter.losses++;
            } else if (firstFighter.getHealth() < secondFighter.getHealth()) {
                secondFighter.wins++;
                firstFighter.losses++;
            } else {
                console.log('there is no strongest fighter');
            }
        }
        console.log(firstFighter.logCombatHistory());
        console.log(secondFighter.logCombatHistory());
    }
    battle(fighter1,fighter2);

});