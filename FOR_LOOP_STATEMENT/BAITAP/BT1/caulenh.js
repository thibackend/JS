for(var i= 0; i<=5;i++){
    for(var d=0 ; d<=10;d++){
        document.write("<div id =square></div>")
    }
    document.write("<div style ='clear:both'></div>")
}


for(var i = 0; i<=5;i++){
    for(var j=0; j<=10;j++){
        if (i%2==0) {
            document.write("<div id =square></div>")
        } else {
            document.write("<div id = yellow></div>")
        }
        
    }
    document.write("<div style ='clear:both'></div>")
}