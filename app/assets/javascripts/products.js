
$(document).ready( function(){
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/products',
      method: 'GET',
      dataType: 'JSON'
    }).done( function(products) {
      var list = $('#products');
      list.empty();
      products.forEach( function(item) {
        var li = '<li data-character-id="' + item.id + '">' + item.name + '</li>'
        list.append(li)
        list.append('<hr/>')
      });
    });


    // var currentGame = {};
    var showForm = false;

  $('#toggle').on('click', function() {
    showForm = !showForm;
    $('#product-form').remove()
    $('#products').toggle()
    if (showForm) {

      $.ajax({
        url: '/products/new',
        method: 'GET'
      }).done( function(html) {
        $('#toggle').after(html);
      });
    }
  });

})
