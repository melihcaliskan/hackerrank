
function processData(Test_String) {
    var Regex = new RegExp(Regex_Pattern, "g");
    var Array = Test_String.match(Regex);
    console.log("Number of matches :", Array.length);
}
const Test_String = "The hackerrank team is on a mission to flatten the world by restructuring the DNA of every company on the planet. We rank programmers based on their coding skills, helping companies source great programmers and reduce the time to hire. As a result, we are revolutionizing the way companies discover and evaluate talented engineers. The hackerrank platform is the destination for the best engineers to hone their skills and companies to find top engineers."
var Regex_Pattern = 'hackerrank';
console.log(processData(Test_String))