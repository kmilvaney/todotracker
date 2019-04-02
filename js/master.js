$(document).ready(
    function(){
      //Check to see if item is entered; if not display an alert
        $('#add-button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                if (toAdd.length>0){
                  $('ul').append('<li>' + toAdd + '</li>');
                  $('input[name=ListItem]').val('');
                    }
                else {
                  alert("You forgot to enter your to do!");
               }
            });

    //Slowly fade out a to do item when double clicked
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut(2000);
      });

});
