var aa = "test";
var bb = 1;
var cc = true;
var dd = function(){};
var ee = {};
var ff = [1,3, 4];
var test = [];


var TV = {
    open: function(){
        console.log("open")
    },
    close:function(){
        console.log("close")
    }
};

var OpenTVCommand = function(receive){
    this.receive = receive
}


OpenTVCommand.prototype.myOpen = function(){
    this.receive.open();
}

OpenTVCommand.prototype.myClose = function(){
    this.receive.close();
}

var oOpen = new OpenTVCommand(TV);
oOpen.myClose();


