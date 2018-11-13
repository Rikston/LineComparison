var box;
var boxLog;
function Load(){
    box = new BoxInputFields($("body").get(0));
    boxLog = $(".box-log").get(0);
}
window.addEventListener("load", Load, false);

