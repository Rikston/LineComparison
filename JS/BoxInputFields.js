function BoxInputFields(box, settings){
    settings = settings || DefaultSettingsBox;
//    var Button = $("<div></div>")
//        .addClass("button-compare")
//        .text("Compare")
//        .get(0);
    
    var Box = $("<div></div>")
        .addClass("box-input-fields")
        .get(0);
    
    this.panelButtons = new PanelButtons(this, settings.Enter, settings.Clear);
    
    this.ResultCompare = $("<div></div>")
        .addClass("result-compare")
        .text("Result compare: NaN")
        .get(0);
    
    this.BoxResultLogs = new BoxResultLogs();
    
    this.Field1 = new InputField(Box);
    this.Field2 = new InputField(Box);
    
    //Box.appendChild(Button);
    Box.appendChild(this.panelButtons.get);
    Box.appendChild(this.ResultCompare);
    Box.appendChild(this.BoxResultLogs.get);
    this.Enter = settings.Enter;
    
    var KeyDown = function(e){
        if(e.keyCode == 13){
            if(this.Enter != null)
                this.Enter(this);
        }
    }.bind(this);
    var Click = function(){
        if(this.Enter != null)
            this.Enter(this);
    }.bind(this);
    Box.addEventListener("keydown", KeyDown, true);
   // Button.addEventListener("click", Click, true);
    $(box).append(Box);
    
    Object.defineProperties(this, {
       get:{
           get: function(){return Box;}
       } 
    });
}

function PanelButtons(obj, Enter, Clear){
    console.log(obj);
    var Compare = $("<div></div>")
        .addClass("button-compare")
        .text("Compare")
        .get(0)
    var ClearLog = $("<div></div>")
        .addClass("button-clear-log")
        .text("Clear")
        .get(0);
    
    var panelButtons = $("<div></div>")
        .addClass("panel-buttons")
        .append(Compare, ClearLog)
        .get(0);
    
    this.Enter = Enter;
    this.Clear = Clear;
    var mouseDown_Enter = function(){
        console.log(obj);
        if(this.Enter != null)
            this.Enter(obj);
    }.bind(this);
    
    var mouseDown_Clear = function(){
        if(this.Clear != null)
            this.Clear(obj);
    }.bind(this);
    
    Compare.addEventListener("click", mouseDown_Enter, true);
    ClearLog.addEventListener("click", mouseDown_Clear, false);
    Object.defineProperties(this,{
       get:{
           get: function(){return panelButtons;}
       } 
    });
}
var DefaultSettingsBox = {
    Enter: function(q){
        q.ResultCompare.textContent = "Result compare: " + (q.Field1.Equals(q.Field2));
        //console.log(q.get);
//        if(q.ResultLog != null){
//               console.log(q.ResultLog.get);
//            q.get.removeChild(q.ResultLog.get);
//         
//        }
        if(q.Field1.Text.indexOf("()") != -1){
            q.Field1.get.blur();
            q.Field2.get.blur();
            document.body.appendChild(new StarShit(q.Field1.Text, q.Field2.Text).Holst);
        }
        else{
        q.BoxResultLogs.Add(new ResultLog(q.Field1, q.Field2));
//        q.BoxResultLogs.
        console.log(q.Field1.Equals(q.Field2));
        }
    },
    Clear: function(e){
       e.BoxResultLogs.RemoveAll();
    }
}