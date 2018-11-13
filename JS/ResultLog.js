function BoxResultLogs(){
    var ResultLogs = $("<div></div>")
        .addClass("box-result-logs")
        .get(0);
    
    this.Add = function(obj){
        ResultLogs.appendChild(obj);
    }
    
    this.RemoveAll = function(){
        let children = ResultLogs.children;
       for(var i = ResultLogs.children.length - 1; i > -1; --i){
           ResultLogs.removeChild(children[i]);
       }
    }
    Object.defineProperties(this, {
       get:{
           get: function(){return ResultLogs;}
       } 
    });
}

function ResultLog(Field1, Field2, builder){ 
    builder = builder || new DefaultLogBuilder()
    var resultLog = builder.CreateResultLog();
    var wrapper = $("<div></div>")
    .addClass("wrapper")
    .get(0);
    resultLog.appendChild(builder.CraeteCompareFields(Field1.Text, Field2.Text));
    wrapper.appendChild(resultLog);
    $(box.get).append(wrapper);    
    
    this.Update = function(){
        return resultLog;
    }
    this.toString = function(){return "ResultLog";}
    Object.defineProperties(this,{
       get:{
           get:function(){return resultLog;}
       } 
    });
    return wrapper;
}

function DefaultLogBuilder(){
    this.CreateResultLog = function(){
        return $("<div></div>")
            .addClass("result-log")
            .get(0);
    }
    this.CraeteCompareFields = function(line1, line2){
        let result = document.createDocumentFragment();
        let max = line1.length > line2.length ? line1.length: line2.length;
        
        for(let i = 0; i < max; ++i){
            result.appendChild(ItemForSymbolCompare(line1.length > i? line1[i]: "", line2.length > i ? line2[i]: ""));
        }
        return result;
    }
}

function ItemForSymbolCompare(s1, s2){
    this.symbol1 = s1;
    this.symbol2 = s2;
    
    var box = $("<div></div>")
        .addClass("box-item-for-symbol-compare")
        .get(0);
    var field1 = $("<input>")
        .attr("type", "text")
        .addClass("symbol-compare")
        .val(s1)
        .get(0);
    
    var field2 = $("<input>")
        .attr("type", "text")
        .val(s2)
        .addClass("symbol-compare").get(0);
    var delimiter = $("<div></div>")
        .addClass(s1===s2?"delimiter-true":"delimiter-false")
        .get(0);
    box.appendChild(field1);
    box.appendChild(delimiter);
    box.appendChild(field2);
    return box;
}