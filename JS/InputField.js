function InputField(box, settings){
    settings = settings || DefaultSettingInputField;
    
    this.toString = function(){return "Field";};
    this.valueOf = function(){return 2;};
    this.Enter = null;
    this.Equals = function(obj){
        if(this.toString() == obj.toString()){
            if(this.Text === obj.Text)
                return true;
        }
        return false;
    };
    this.InputFiel
    var Feild = $("<input>")
        .attr("type", "text")
        .addClass("input-field")
        .attr("placeholder", settings.placeholder).get(0);
    $(box).append(Feild);
    
    var KeyDown = function (e){
        if(e.keyCode == 13){
            if(this.Enter != null)
                this.Enter(this);
        }
    }.bind(this);
    Feild.addEventListener("keydown", KeyDown, true);
    
    Object.defineProperties(this,{
        Click:{
            get: function(){
                return Feild.onclick;
            },
            set: function(value){
                Feild.onclick = value;
            }
        },
        Text:{
            get: function(){ return Feild.value;},
            set: function(val){ Feild.value = val;}
        },
        get:{
            get: function(){return Feild;}
        }
    })
}
var DefaultSettingInputField = {
  placeholder: "line"  
    
};