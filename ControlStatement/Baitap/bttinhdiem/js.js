function ok(){
    var k1 = parseInt(document.getElementById('s1').value);
    var k2 =parseInt(document.getElementById('s2').value);
    var year = parseInt(document.getElementById('year').value);
    var result;
    if(year ==1){
        result = (k1 +(k2*2))/3 ;
    }
    else if (year ==2){
        result = (k1 +(k2*3))/4;
    }
    else if (year ==3){
        result = (k1+(k2*4))/5;
    }
    document.getElementById('sum').innerHTML=result;
}

function cancel(){
    document.getElementById('s1').value="";
    document.getElementById('s2').value="";
    document.getElementById('year').value="0";
    document. getElementById('sum').value="";
}