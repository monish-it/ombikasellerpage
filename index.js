// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });




//   Autoclick
var button = document.getElementsByClassName("a.lSNext");
setInterval(function(){
    button.click()
},2000);