function them(){
var header =  '<table border="1"> <tr> <th>No</th> <th>Quantity</th><th>Price</th> <th>Sub_total</th></tr>';
var footer = '</table>';
document.getElementById('product_list').innerHTML= header+footer;
// lấy dữ liệu.
var take =document.frm_product;
var pro_name = take.txt_name.value;
var pro_amount = parseInt(take.txtquantity.value);
var pro_price = parseInt(take.txt_price.value);
var sum_price= pro_amount*pro_price;
var sumall =0;
var data;
sumall+=sum_price;
var no = 1;
var data_row1 = '<tr> <td>'+no+'</td> <td>'+pro_name+'</td> <td>'+pro_amount+' </td> <td> '+pro_price+'</td> <td>'+sum_price+'</td> </tr>';
data += data_row1;
var data_rowtotal ='<tr><th colspan="4">Total</th><td>'+sumall+'</td></tr>';
document.getElementById('product_list').innerHTML= header+ data +data_rowtotal +footer;
no++;

 }