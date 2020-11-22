function processData(Test_String) {
    var matches = Test_String.match(Regex_Pattern);
    var match = matches != null && matches.length > 0;
    return match
} 

var Regex_Pattern = /^(.{3}\.){3}.{3}$/g;
const string = "123.456.abc.def"
console.log(processData(string))