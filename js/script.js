$(document).ready(function(){

  function parseField(value){
    if(!/^[+-_]?\d+$/gi.test(value)){
        return value.replace(/[a-zA-Z]+/gi,'');
    }
  }

  $('#phoneNum').keyup(function(){
    $(this).val(parseField($(this).val()));
  });
  
});