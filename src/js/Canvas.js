$(document).ready(function(){
  
  // 10進数から2進数の途中式
  $('#calc10').click(function(){
    var Decimal = document.deci.decimal.value;
    var canvas = document.getElementById('leftCanvas');
    var ctx = canvas.getContext('2d');
    var height = 20;
    
    ctx.clearRect(0, 0, 400, 400);
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.font = 'normal 20px "ＭＳ ゴシック"';
    
    // 初期表示
    ctx.fillText("2", 10, height + 10);
    ctx.fillText(Decimal, 50, height + 10);
    ctx.beginPath();
    ctx.arc(20, 20 + height - 20, 20, 315 * Math.PI/ 180, 359 * Math.PI/ 180, false);
    ctx.arc(20, 20 + height - 20, 20, 0 * Math.PI/ 180, 45 * Math.PI/ 180, false);
    ctx.moveTo(35, 35 + height - 20);
    ctx.lineTo(180, 35 + height - 20);
    ctx.stroke();
    height += 40;
    
    while(Decimal != 0){
      console.log(Decimal);
      ctx.fillText(parseInt(Decimal / 2), 50, height + 10);
      ctx.fillText("・・・" + Decimal % 2, 180, height + 10);
      if(Decimal != 0 && Decimal != 1){
        ctx.fillText("2", 10, height + 10);
        ctx.beginPath();
        ctx.arc(20, 20 + height - 20, 20, 315 * Math.PI/ 180, 359 * Math.PI/ 180, false);
        ctx.arc(20, 20 + height - 20, 20, 0 * Math.PI/ 180, 45 * Math.PI/ 180, false);
        ctx.moveTo(35, 35 + height - 20);
        ctx.lineTo(180, 35 + height - 20);
        ctx.stroke();
      }
      height += 40;
      Decimal = parseInt(Decimal / 2);
    }
  })
  
  
  // 10進数から16進数の途中式
  $('#calc10').click(function(){
    var Decimal = document.deci.decimal.value;
    var canvas = document.getElementById('rightCanvas');
    var ctx = canvas.getContext('2d');
    var height = 20;
    
    ctx.clearRect(0, 0, 400, 400);
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.font = 'normal 20px "ＭＳ ゴシック"';
    
    // 初期表示
    ctx.fillText("16", 3, height + 10);
    ctx.fillText(Decimal, 50, height + 10);
    ctx.beginPath();
    ctx.arc(20, 20 + height - 20, 20, 315 * Math.PI/ 180, 359 * Math.PI/ 180, false);
    ctx.arc(20, 20 + height - 20, 20, 0 * Math.PI/ 180, 45 * Math.PI/ 180, false);
    ctx.moveTo(35, 35 + height - 20);
    ctx.lineTo(180, 35 + height - 20);
    ctx.stroke();
    height += 40;
    
    while(Decimal != 0){
      console.log(Decimal);
      ctx.fillText(parseInt(Decimal / 16), 50, height + 10);
      ctx.fillText("・・・" + parseInt(Decimal % 16).toString(16), 180, height + 10);
      if(16 < Decimal){
        ctx.fillText("16", 3, height + 10);
        ctx.beginPath();
        ctx.arc(20, 20 + height - 20, 20, 315 * Math.PI/ 180, 359 * Math.PI/ 180, false);
        ctx.arc(20, 20 + height - 20, 20, 0 * Math.PI/ 180, 45 * Math.PI/ 180, false);
        ctx.moveTo(35, 35 + height - 20);
        ctx.lineTo(180, 35 + height - 20);
        ctx.stroke();
      }
      height += 40;
      Decimal = parseInt(Decimal / 16);
    }
  })
  
})

/*
   ctx.beginPath();
    ctx.arc(70, 70, 20, 315 * Math.PI/ 180, 359 * Math.PI/ 180, false);
    ctx.arc(70, 70, 20, 0 * Math.PI/ 180, 45 * Math.PI/ 180, false);
    ctx.moveTo(90, 90);
    ctx.lineTo(180, 90);
    ctx.stroke();
*/