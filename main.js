// Insert a name in between quotes and separated by commas
var names = ["Homer Simpson", "Albert Einstein", "Pedro Almodovar", "Cristiano Ronaldo"]

//Do not touch this code
function insertNames(){
    var ul = document.getElementById("participantsList");
    names.map(name => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(name));
        ul.appendChild(li);
    })
}