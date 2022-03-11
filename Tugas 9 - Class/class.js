class Animal {
    // Code class di sini
    constructor(name){
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name(){
        return this._name;
    }

   get legs(){
       return this._legs
   }

   set legs(amount){
       this._legs = amount
   }

   get cold_blooded(){
       return this._cold_blooded
   }

}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// release 1
class Ape extends Animal{
    constructor(name){
        super(name);
    }
    yell(){
        return "Auooo"
    }

}

class Frog extends Animal{
    constructor(name){
        super(name);
    }

    jump(){
        return "hop hop"
    }
}
// Code class Ape dan class Frog di sini
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong._legs = 2;
console.log(sungokong.legs)
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 


class Clock {
    // Code di sini
    constructor({template}){
        this.template = template;
        this.timer
    }

    render(){
        var date = new Date();

        
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }

    stop(){
        clearInterval(this.timer());
    }

    start(){
        this.render.bind(this)
        this.timer = setInterval(this.render.bind(this), 1000)
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  