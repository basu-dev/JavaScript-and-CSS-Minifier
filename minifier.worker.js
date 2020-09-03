patterns = ["\n"," =","= "," ;", "; ", " {", "{ ", " }", "} ", " :", ": ",", "," ,","[ "," ["," ]","] "," (","( ",") "," )"," <"," >","< ","> "];
replacePatterns = ["","=","=",";", ";", "{", "{", "}", "}", ":", ":",",",",","[","[","]","]","(","(",")",")","<","<",">",">"];
this.onmessage=function(msg){
    let div=msg.data
    this.patterns.forEach((value, i) => {
        while (div.includes(value)) {
            div = div.replace(value, this.replacePatterns[i]);
        }
    });
    this.postMessage(div);
}