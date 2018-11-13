var q;
String.prototype.remove = function(symbols){
    let thisLine = this.toString();
    let beginIndex = thisLine.indexOf(symbols);
    if(beginIndex == -1)
        return thisLine;
    let endIndex = beginIndex + symbols.length;
    
    let newLine = thisLine.slice(0, beginIndex) + thisLine.slice(endIndex, thisLine.length);
    return newLine;
}