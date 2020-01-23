var isLeapYear = function(year){
  if(year % 1 !==0){
    return false;
  }else if(year % 4 !==0){
    return false;
  }
  else if((year % 4 ===0) && (year %100 !==0)){
    return true;
  }else if(year %400 ===0){
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var year = $("input#year").val();
    $(".result").text(isLeapYear(year));
  });
});

