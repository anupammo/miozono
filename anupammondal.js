// JavaScript by anupammondal.in
function selectedapp() {
  var x = document.getElementById("apptype").value;
  if (x == "a") {
    document.getElementById("wtt").style.display = "block";
    document.getElementById("wwht").style.display = "none";
    document.getElementById("at").style.display = "none";
    document.getElementById("hvac").style.display = "none";
    document.getElementById("idr").style.display = "block";
    document.getElementById("btns").style.display = "block";
  } else if (x == "b") {
    document.getElementById("wtt").style.display = "none";
    document.getElementById("wwht").style.display = "block";
    document.getElementById("at").style.display = "none";
    document.getElementById("hvac").style.display = "none";
    document.getElementById("idr").style.display = "block";
    document.getElementById("btns").style.display = "block";
  } else if (x == "c") {
    document.getElementById("wtt").style.display = "none";
    document.getElementById("wwht").style.display = "none";
    document.getElementById("at").style.display = "block";
    document.getElementById("hvac").style.display = "none";
    document.getElementById("idr").style.display = "block";
    document.getElementById("btns").style.display = "block";
  } else if (x == "d") {
    document.getElementById("wtt").style.display = "none";
    document.getElementById("wwht").style.display = "none";
    document.getElementById("at").style.display = "none";
    document.getElementById("hvac").style.display = "block";
    document.getElementById("idr").style.display = "block";
    document.getElementById("btns").style.display = "block";
  } else {
    document.getElementById("wtt").style.display = "none";
    document.getElementById("wwht").style.display = "none";
    document.getElementById("at").style.display = "none";
    document.getElementById("hvac").style.display = "none";
    document.getElementById("idr").style.display = "none";
    document.getElementById("btns").style.display = "none";
  }
}
