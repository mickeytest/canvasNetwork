var Singleton = function(name){
    this.name = name;
};

Singleton.prototype.getName = function(){
    return this.name;
};

Singleton.getInstance = function(){
    console.log(this.name)
    return this.name;
};

// var a = new Singleton("test");
// var b = new Singleton("test2");
// console.log(a);
// console.log(b);

// console.log(a.getName());
console.log(Singleton.getInstance());