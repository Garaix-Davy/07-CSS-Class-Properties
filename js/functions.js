

var sliderSize = document.getElementById("fontSize");
var sliderStyle = document.getElementById("fontStyle");
var sliderColor = document.getElementById("fontColor");
var style = ["Arial","Verdana","Trebuchet MS","Gill Sans","Arial Narrow","sans-serif","Times","Georgia","Palatino","Courier New","FreeMono","monospace","Comic Sans MS","Apple Chancery","Brush Script MT","Impact"];

document.getElementById('sizeValue').innerHTML = sliderSize.value + "px";
document.getElementById('styleValue').innerHTML = style[sliderStyle.value-1];
document.getElementById('colorValue').innerHTML = "#" + dec2webhex(sliderColor.value);

sliderSize.oninput = function() {
    dynamicText.style.fontSize = this.value + "px";
    document.getElementById('sizeValue').innerHTML = this.value + "px";
}

sliderStyle.oninput = function() {
    dynamicText.style.fontFamily = style[this.value-1];
    document.getElementById('styleValue').innerHTML = style[this.value-1];
}

sliderColor.oninput = function() {
    var webColor = "#" + dec2webhex(this.value);
    dynamicText.style.color = webColor;
    document.getElementById('colorValue').innerHTML = webColor;
}

function dec2webhex(numString){
  var num = parseInt(numString).toString(16);
  while (num.length<6){
    var tmp = "0";
    num = tmp + num;
  }
  return num.toUpperCase();
}
