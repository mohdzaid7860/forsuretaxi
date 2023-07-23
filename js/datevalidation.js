  $(window).on('load',function(){
        var currentdate = new Date;
        var mintime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
     jQuery('#datetimepickernew').datetimepicker({
          minTime:mintime,
          maxTime:'23:45',
          format:'h:i A',
          step:15,
        });
     //Roundtrip
     jQuery('#datetimepickernew1').datetimepicker({
          minTime:mintime,
          maxTime:'23:45',
          format:'h:i A',
          step:15,
        });
     //Multicity
     jQuery('#datetimepickernew2').datetimepicker({
          minTime:mintime,
          maxTime:'23:45',
          format:'h:i A',
          step:15,
        });
     //Local city
     jQuery('#datetimepickernew3').datetimepicker({
          minTime:mintime,
          maxTime:'23:45',
          format:'h:i A',
          step:15,
        });
     //Airport transfer
     jQuery('#datetimepickernew4').datetimepicker({
          minTime:mintime,
          maxTime:'23:45',
          format:'h:i A',
          step:15,
        });
    });


  $("#datepicker").on("change", function() {
    var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var cdate = $("#datepicker").val();
if(serverDate == cdate){
 var mintime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
}else{
var mintime = '00:00';
}
jQuery('#datetimepickernew').datetimepicker({
  datepicker:false,
  minTime:mintime,
  maxTime:'23:45',
  format:'h:i A',
  step:15,
});

}); 
//Roundtrip
$("#datepicker3").on("change", function() {
    var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var cdate = $("#datepicker3").val();
if(serverDate == cdate){
 var mintime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
}else{
var mintime = '00:00';
}
jQuery('#datetimepickernew1').datetimepicker({
  datepicker:false,
  minTime:mintime,
  maxTime:'23:45',
  format:'h:i A',
  step:15,
});
}); 
//Multicity
$("#datepicker5").on("change", function() {
    var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var cdate = $("#datepicker5").val();
if(serverDate == cdate){
 var mintime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
}else{
var mintime = '00:00';
}
jQuery('#datetimepickernew2').datetimepicker({
  datepicker:false,
  minTime:mintime,
  maxTime:'23:45',
  format:'h:i A',
  step:15,
});
}); 
//Local city

$("#datepicker1").on("change", function() {
    var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var cdate = $("#datepicker1").val();
if(serverDate == cdate){
 var mintime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
}else{
var mintime = '00:00';
}
jQuery('#datetimepickernew3').datetimepicker({
  datepicker:false,
  minTime:mintime,
  maxTime:'23:45',
  format:'h:i A',
  step:15,
});
});
//Airport Transfer
$("#datepicker2").on("change", function() {
    var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var cdate = $("#datepicker2").val();
if(serverDate == cdate){
 var mintime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
}else{
var mintime = '00:00';
}
jQuery('#datetimepickernew4').datetimepicker({
  datepicker:false,
  minTime:mintime,
  maxTime:'23:45',
  format:'h:i A',
  step:15,
});
}); 


 function formattedDate(date) {
 var d = new Date(date || Date.now()),
 month = '' + (d.getMonth() + 1),
 day = '' + d.getDate(),
 year = d.getFullYear();
 if (month.length < 2) month = '0' + month;
 if (day.length < 2) day = '0' + day;
 return [day, month, year].join('-');
 }

 function formattedTime(time) {
 var hours = Number(time.match(/^(\d+)/)[1]);
 var minutes = Number(time.match(/:(\d+)/)[1]);
 var AMPM = time.match(/\s(.*)$/)[1];
 if(AMPM == "PM" && hours<12) hours = hours+12;
 if(AMPM == "AM" && hours==12) hours = hours-12;
 var sHours = hours.toString();
 var sMinutes = minutes.toString();
 if(hours<10) sHours = "0" + sHours;
 if(minutes<10) sMinutes = "0" + sMinutes;
 var newTime = sHours + ":" + sMinutes;
 return newTime;
 }
/*One Way start*/
$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".timeON" ).datetimepicker({ formatTime:'h:i A',datepicker:false,format:'h:i A', step:15,
onClose: function(selectedTime) {
var getWebDate = $('#datepicker').val(); 
var getWebTime = $('#datetimepickernew').val();
var timeweb = formattedTime(getWebTime);

if(getWebDate == serverDate){
if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
}  else{
$('#errorMsgs').modal('hide');
 return true;   
} 
},validateOnBlur: false,

});
});


$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".datetimepickerON" ).datetimepicker({formatDate:'d-m-Y', timepicker:false,format:'d-m-Y',
onClose: function(selectedTime) {
var getWebDate = $('#datepicker').val(); 
var getWebTime = $('#datetimepickernew').val();
var timeweb = formattedTime(getWebTime);
if(getWebDate == serverDate){

if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
} else{
$('#errorMsgs').modal('hide');
 return true;   
} 
}
});
});

/*One Way End*/

/*Roundtrip Start*/
$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".timeOU" ).datetimepicker({ formatTime:'h:i A',datepicker:false,format:'h:i A', step:15,
onClose: function(selectedTime) {
var getWebDate = $('#datepicker3').val(); 
var getWebTime = $('#datetimepickernew1').val();
var timeweb = formattedTime(getWebTime);

if(getWebDate == serverDate){
if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
} else{
$('#errorMsgs').modal('hide');
 return true;   
}  

},validateOnBlur: false,
});
});


$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".dateOU" ).datetimepicker({formatDate:'d-m-Y', timepicker:false,format:'d-m-Y',
onClose: function(selectedTime) {
var getWebDate = $('#datepicker3').val(); 
var getWebTime = $('#datetimepickernew1').val();
var timeweb = formattedTime(getWebTime);
if(getWebDate == serverDate){

if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
} else{
$('#errorMsgs').modal('hide');
 return true;   
} 
}
});
});
/*Roundtrip End*/

/*Multi city Start*/
$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".timeMC" ).datetimepicker({ formatTime:'h:i A',datepicker:false,format:'h:i A', step:15,
onClose: function(selectedTime) {
var getWebDate = $('#datepicker5').val(); 
var getWebTime = $('#datetimepickernew2').val();
var timeweb = formattedTime(getWebTime);

if(getWebDate == serverDate){
if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
} 
},validateOnBlur: false,
});
});

$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".dateMC" ).datetimepicker({formatDate:'d-m-Y', timepicker:false,format:'d-m-Y',
onClose: function(selectedTime) {
var getWebDate = $('#datepicker5').val(); 
var getWebTime = $('#datetimepickernew2').val();
var timeweb = formattedTime(getWebTime);
if(getWebDate == serverDate){

if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
} else{
$('#errorMsgs').modal('hide');
 return true;   
} 
}
});
});
/*Multi City End*/

/*Local Start*/
$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".timeLL" ).datetimepicker({ formatTime:'h:i A',datepicker:false,format:'h:i A', step:15,
onClose: function(selectedTime) {
var getWebDate = $('#datepicker1').val(); 
var getWebTime = $('#datetimepickernew3').val();
var timeweb = formattedTime(getWebTime);

if(getWebDate == serverDate){
if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
} 
},validateOnBlur: false,
});
});


$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".dateLL" ).datetimepicker({formatDate:'d-m-Y', timepicker:false,format:'d-m-Y',
onClose: function(selectedTime) {
var getWebDate = $('#datepicker1').val(); 
var getWebTime = $('#datetimepickernew3').val();
var timeweb = formattedTime(getWebTime);
if(getWebDate == serverDate){

if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
} else{
$('#errorMsgs').modal('hide');
 return true;   
} 
}
});
});
/*Local End*/
/*Transfer Start*/
$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".timeTF" ).datetimepicker({ formatTime:'h:i A',datepicker:false,format:'h:i A', step:15,
onClose: function(selectedTime) {
var getWebDate = $('#datepicker2').val(); 
var getWebTime = $('#datetimepickernew4').val();
var timeweb = formattedTime(getWebTime);

if(getWebDate == serverDate){
if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
} 
},validateOnBlur: false,
});
});


$(function() {
var currentdate = new Date;
var serverDate = formattedDate(currentdate.toISOString().substring(0, 10)); 
var serverTime = currentdate.getHours()+ 2 +":"+currentdate.getMinutes(); 
$( ".dateTF" ).datetimepicker({formatDate:'d-m-Y', timepicker:false,format:'d-m-Y',
onClose: function(selectedTime) {
var getWebDate = $('#datepicker2').val(); 
var getWebTime = $('#datetimepickernew4').val();
var timeweb = formattedTime(getWebTime);
if(getWebDate == serverDate){

if(serverTime > timeweb){ 
$('#DatTimeError').show(); $('#errorMsgs').modal('show'); 
$('#errorhtml').html('PickupTime should be greater 2 hours from currentTime!');
return false;
}else{
$('#errorMsgs').modal('hide');
 return true;
 }
} else{
$('#errorMsgs').modal('hide');
 return true;   
} 
}
});
});
/*Transfer End*/

jQuery("#datepicker").datetimepicker({i18n:{en:{months:["January","February","March","April","May","Jun","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tues","Wed","Thus","Fri","Sat"]}},timepicker:!1,value:"today",format:"d-m-Y",closeOnDateSelect:!0,minDate:0,weeks:!1}),jQuery("#datepicker1").datetimepicker({i18n:{en:{months:["January","February","March","April","May","Jun","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tues","Wed","Thus","Fri","Sat"]}},timepicker:!1,value:"today",format:"d-m-Y",closeOnDateSelect:!0,minDate:0,weeks:!1}),jQuery("#datepicker2").datetimepicker({i18n:{en:{months:["January","February","March","April","May","Jun","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tues","Wed","Thus","Fri","Sat"]}},timepicker:!1,value:"today",format:"d-m-Y",closeOnDateSelect:!0,minDate:0,weeks:!1}),jQuery("#datepicker3").datetimepicker({i18n:{en:{months:["January","February","March","April","May","Jun","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tues","Wed","Thus","Fri","Sat"]}},timepicker:!1,value:"today",format:"d-m-Y",closeOnDateSelect:!0,minDate:0,weeks:!1}),jQuery("#datepicker4").datetimepicker({i18n:{en:{months:["January","February","March","April","May","Jun","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tues","Wed","Thus","Fri","Sat"]}},timepicker:!1,value:"today",format:"d-m-Y",closeOnDateSelect:!0,minDate:0,weeks:!1}),jQuery("#datepicker5").datetimepicker({i18n:{en:{months:["January","February","March","April","May","Jun","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tues","Wed","Thus","Fri","Sat"]}},timepicker:!1,value:"today",format:"d-m-Y",closeOnDateSelect:!0,minDate:0,weeks:!1}),jQuery("#datepicker6").datetimepicker({i18n:{en:{months:["January","February","March","April","May","Jun","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tues","Wed","Thus","Fri","Sat"]}},timepicker:!1,value:"today",format:"d-m-Y",closeOnDateSelect:!0,minDate:0,weeks:!1});
