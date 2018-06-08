
$(document).ready( function(){
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/products',
      method: 'GET',
      dataType: 'JSON'
    }).done( function(products) {
      debugger
      var list = $('#products');
      list.empty();
      products.forEach( function(item) {
        var li = '<li data-character-id="' + item.id + '">' + item.name + '</li>'
        list.append(li)
        list.append('<hr/>')
      });
    });

})
