jQuery.get('/Text/products-p1.txt', function(data) {
    //First paragraph of products page page 
    $('#products-p1').html(data.replace('n',''));
 });

 jQuery.get('/Text/products-p2.txt', function(data) {
  //Second paragraph of products page 
  $('#products-p2').html(data.replace('n',''));
});