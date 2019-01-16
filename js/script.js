$(document).ready(function(){

  function parseField(value){
    return  value.replace(/[^-+()0-9\s]/gi,'');
  }

  $('#phoneNum').keyup(function(){
    $(this).val(parseField($(this).val()));
  });
  
});