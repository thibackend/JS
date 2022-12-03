var list=[
    {
        img:"<img id=img src=packpack.webp >",
        name:"<span id=name>túi đựng lap top Backpack</span>",
        price:"<span id=price>400.000đ </span>"
    },
    {
        img:"<img id=img src=nit.webp >",
        name:"<span id=name>Thắt lưng quần jean mặt khóa xỏ kim DJ625-CF</span>",
        price:"<span id=price>180.000 </span>"
    },
    
    {
        img:"<img id=img src=vis.webp ></img>",
        name:"<span id=name >Ví nam dáng ngang cổ điển VNTAN-31N</span>",
        price:"<span id =price>430.000đ</span>",
        
    },
    {
        
        img:" <span><img id=img src=giay.webp ></span>",
        name:"<span id= name>Giày giây vân da nam buộc GNTA2695-N </span>",
        price:"<span id= price>430.000    <del> 1.600.000đ </del> </span>"
    }
];

    // for (let j in list){
    //     document.write(list[j].img )
    // }
    // document.write("<br>")
    // for (let j in list){
    //     document.write(list[j].name)
    // } 
    // document.write("<br>")
    // for (let j in list){
    //     document.write(list[j].price)
    // }
    
for(let j in list){
    for( let i in list){
        if(j ==1){
            document.write(list[i].img );
        }
        else if (j==2){
            document.write(list[i].name);
        }
        else if (j==3){
            document.write(list[i].price);
        }
    }
    document.write("<br>");
}
