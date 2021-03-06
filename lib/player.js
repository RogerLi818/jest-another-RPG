const Potion=require('../lib/Potion');
const Character=require('./Character');



class Player extends Character{
    constructor (name=''){
        super(name);

        // this.name=name;

        // this.health=Math.floor(Math.random()*10+95);
        // this.strength=Math.floor(Math.random()*5+7);
        // this.agility=Math.floor(Math.random()*5+7);

        this.inventory=[new Potion('health'), new Potion()];

    //returns an object with various pllayer properties
//     getStats=function(){
//         return{
//             potions:this.inventory.length,
//             health:this.health,
//             strength:this.strength,
//             agility:this.agility
//         };
//     };

//     //returns the inventory array or false if empty
//     this.getInventory=function(){
//         if(this.inventory.length){
//             return this.inventory;
//         }

//         return false;
//     };
}


//Player.prototype = Object.create(Character.prototype)
Player = Object.create(Character);


getStats(){
    return{
        potions:this.inventory.length,
        health:this.health,
        strength:this.strength,
        agility:this.agility
    };
}

getInventory(){
    if (this.inventory.length){
        return this.inventory;
    }
        return false;
}


addPotion(potion){
    this.inventory.push(potion);
}

//what is the index?
usePotion(index){
    //how splice work?
    const potion=this.inventory.splice(index, 1)[0];

    switch(potion.name){
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
}
};






module.exports=Player;