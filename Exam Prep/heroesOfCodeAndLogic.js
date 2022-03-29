function solve(input) {
    let n = Number(input.shift());
    let obj = {};
    for(let i = 0; i < n; i++) {
        let tokens = input.shift().split(" ");
        let [hero,hp,mp] = tokens;
        hp = Number(hp);
        mp = Number(mp);
        if(hp <= 100 && mp <= 200) {
            obj[hero] = {
                hp,
                mp
            }
        }
    }
    for(let el of input) {
        let [command,hero,par,name] = el.split(" - ");
        par = +par;
        if(command == "End") {
            break;
        }
        if(command == "CastSpell") {
            if(obj[hero].mp > par) {
                obj[hero].mp -= par;
                console.log(`${hero} has successfully cast ${name} and now has ${obj[hero].mp} MP!`);
            }
        }
        if(command == "TakeDamage") {
            if(obj[hero].hp > par) {
                obj[hero].hp -= par;
                if(obj[hero].hp > 0) {
                    console.log(`${hero} was hit for ${par} HP by ${name} and now has ${obj[hero].hp} HP left!`);
                } else {
                    console.log(`${hero} has been killed by ${name}!`);
                    delete obj[hero];
                }
            }
        }
        if(command == "Recharge") {
            let temp = obj[hero].mp;
            let check = temp += par;
            if(check <= 200) {
                obj[hero].mp += par;
                console.log(`${hero} recharged for ${par} MP!`);
            }
        }
        if(command == "Heal") {
            let temp = obj[hero].hp;
            let check = temp += par;
            if(check <= 100) {
                obj[hero].hp += par;
                console.log(`${hero} healed for ${par} HP!`);
            }   
        }
    }
    for(let el in obj) {
        console.log(`${el}\nHP: ${obj[el].hp}\nMP: ${obj[el].mp}`);
    }
}
solve([2,
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]
    )