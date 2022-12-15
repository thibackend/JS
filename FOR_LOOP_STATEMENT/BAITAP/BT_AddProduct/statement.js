var  header ='<table border="1"><tr><th>No</th><td>Name</td><td>Quantity</td><td>Price</td><td>Sub-total</td></tr>';
var data ='';
var footer='</table>';
var total=0;
var no=1;
function productAdd(){
    //  bên này là phần nhân dữ liệu.
    var path =document.frm_product;  //  frm_product  name của form.
    var name= path.txt_name.value;
    var quantity=path.txt_quantity.value;
    var price =path.txt_price.value;
    // sang phần tính toán.
    var sub_total=quantity*price; // lấy tổng số lượng của đơn măc hàng nhân cho giá và ta được total.

    total +=sub_total;  // phần total lấy tổng số lượng  nhân cho giá và cộng dồn nó lên.

    var sub_data_one='<tr><th>'+no+'</th><td>'+name+'</td><td>'+quantity+'</td><td>'+price+'$</td><td>'+sub_total+'$</td></tr>';
    var sub_data_two ='<tr><th colspan="4">Total</th><td>'+total+'</td></tr>';
    data +=sub_data_one;
    document.getElementById('product_list').innerHTML=header+data+sub_data_two+footer;
    no++;
}

function add(){

    var take =document.frm_product;
    var pro_name=take.txt_name.value;
    var pro_amout= parseInt(take.txt_quantity.vlue);
    var pro_price= parseInt(take.txt_price.value);

    var header = '<tr> <th>No</th> a'

    









    var header =`
    <table border="1">
        <tr>
            <th>No</th>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Sub-total</td>
        </tr>
        `;
    var data='';

}