class NPC {
    constructor(hitpoits) {
        this.name = `NPC${NPC.getID()}`;
        this.hitpoints = hitpoits;
    }

    static getID() {
        return ++this.nameId;
    };

    status() {
        console.log(this.name, this.hitpoints);
    }
}

NPC.nameId = 0;

class Hero extends NPC {
    constructor(name, hitpoints = 100, damage = 10) {
        super(hitpoints);
        this.name = name;
        this.damage = damage;
        this.critical = false;
    }

    attack(other) {
        const damage = this.critical ? this.damage * Hero.CRITICAL_PERCENT: this.damage;
        //console.log(`${this.name} (${this.hitpoints}) attacks ${other.name} (${other.hitpoints}) for ${damage}`);
        other.hitpoints -= damage
    }
}

Hero.CRITICAL_PERCENT = 1.5;

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNPCNumber = randomIntFromInterval(10, 50);
const randomHeroesNumber = randomIntFromInterval(10, 50);

const NPCArray = Array(randomNPCNumber).fill(0).map(() => {
    return new NPC(111);
});
const heroArray = Array(randomHeroesNumber).fill(0).map((value, index) => {
    return new Hero(`Doozy${index}`);
});

const randomHero = randomIntFromInterval(0, randomHeroesNumber - 1);
heroArray[randomHero].critical = true;

const playersArray = [...NPCArray, ...heroArray];

for (let i = 1; ; ++i) {
    //const aliveHeroes = playersArray.filter(value =>
    //    value instanceof Hero
    //);
    //console.log(`\nRound ${i} - Alive Players: ${playersArray.length} (${aliveHeroes.length} Heroes)\n`);
    playersArray.forEach((value, index) => {
        if (value instanceof Hero) {
            let randomEnemyIndex = randomIntFromInterval(0, playersArray.length - 1);
            if (randomEnemyIndex === index) {
                index === 0 ? ++randomEnemyIndex : --randomEnemyIndex;
            }
            const enemy = playersArray[randomEnemyIndex];

            value.attack(enemy);
            if(enemy instanceof Hero && value.critical) {
                enemy.critical = true;
                value.critical = false;
                //console.log(`${enemy.name} has crit now`);
            }

            if (enemy.hitpoints <= 0) {
                //console.log("KILLED");
                if(enemy instanceof Hero && enemy.critical) {
                    //console.log("Crit is lost");
                    enemy.critical = false;
                }
                playersArray.splice(randomEnemyIndex, 1);
            }
        }
    });

    const aliveHero = playersArray.filter(value => {
            if (value instanceof Hero && value.hitpoints <= 0) {
                console.log("ERROR");
            }
            return value instanceof Hero && value.hitpoints > 0
        }
    );
    if (aliveHero.length === 1) {
        console.log(`Winner: ${aliveHero[0].name}, ${aliveHero[0].hitpoints}!`);
        break;
    }
}