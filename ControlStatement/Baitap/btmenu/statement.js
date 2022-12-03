function ok(){
    var a = document.getElementById('choose');
    var value =parseInt(a[a.selectedIndex].value) ;
    switch (value) {
        case 1:
        document.getElementById('PNV24A').style.display="block";
        document.getElementById('PNV24B').style.display="none";
        break;
        case 2: 
        document.getElementById('PNV24B').style.display="block"
        document.getElementById('PNV24A').style.display="none"
        break;
    }
}