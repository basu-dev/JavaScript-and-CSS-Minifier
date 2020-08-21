
let button=""
function minify(div) {
    button=document.querySelector("#html-submit");
    let originalSize= `${((div.toString().length)/1024).toFixed(3)}KB`;
    patterns = ["\n"," =","= "," ;", "; ", " {", "{ ", " }", "} ", " :", ": ",", "," ,","[ "," ["," ]","] "," (","( ",") "," )"];
    replacePatterns = ["","=","=",";", ";", "{", "{", "}", "}", ":", ":",",",",","[","[","]","]","(","(",")",")","<","<",">",">"];
    this.patterns.forEach((value, i) => {
        while (div.includes(value)) {
            div = div.replace(value, this.replacePatterns[i]);
        }
    });
    let finalSize= `${((div.toString().length)/1024).toFixed(3)}KB`;
    document.querySelector(".minified").textContent = div;
    document.querySelector("#original").innerHTML = originalSize;
    document.querySelector("#final").innerHTML = finalSize;
    
}
