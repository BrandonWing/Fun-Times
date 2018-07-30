window.onload = function(){
    var textFile = "C:/Users/brand/Documents/Fun Times/Dumb Fun/hackerman/randomCode.txt"
    var file = new File(textFile);
    var lines = [];
    file.open("r");
        while(!file.eof){
            lines.push(file.readln());
        }
    file.close;
    
}