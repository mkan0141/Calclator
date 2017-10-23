$(document).ready(function(){

  var Decimal_to_Binary = function(Decimal) {
    Decimal = parseInt(Decimal);
    return (Decimal.toString(2));
  }

  var Decimal_to_hexadecimal = function(Decimal) {
    Decimal = parseInt(Decimal);
    return (Decimal.toString(16));
  }
  var Binary_to_Decimal = function(Binary) {
    Binary = parseInt(Binary);
    return (parseInt(Binary, 2));
  }

  var Binary_to_Hexadecimal = function(Binary) {
    Binary = parseInt(Binary);
    return Binary_to_Decimal(Binary).toString(16);
  }

  var Hexadecimal_to_Decimal = function(Hexadecimal){
    return parseInt(Hexadecimal, 16);
  }

  var Hexadecimal_to_Binary = function(Hexadecimal){
    Hexadecimal = parseInt(Hexadecimal, 16);
    return Hexadecimal.toString(2);
  }
  
  $('#calc2').click(function(){
    var x = document.bina.binary.value;
    document.deci.decimal.value = Binary_to_Decimal(x);
    document.hexa.hexadecimal.value = Binary_to_Hexadecimal(x);
  })
  
  $('#calc10').click(function(){
    var x=document.deci.decimal.value;
    document.bina.binary.value = Decimal_to_Binary(x);
    document.hexa.hexadecimal.value = Decimal_to_hexadecimal(x);
  });
  
  $('#calc16').click(function(){
    var x=document.hexa.hexadecimal.value;
    document.bina.binary.value = Hexadecimal_to_Binary(x);
    document.deci.decimal.value = Hexadecimal_to_Decimal(x);
  });

  /// 2進数 --> Binary number
  /// 10進数 --> Decimal number
  /// 16進数 --> Hexadecimal
})