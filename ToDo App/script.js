var inputtext = document.getElementById("inputtext");
var text = document.querySelector(".text");

function add() {
    if(inputtext.value == "") {
        alert("Please enter task");
    }
    else {
        var newelement = document.createElement("ul");
        newelement.innerHTML = inputtext.value + "<span>Delete</span>";
        text.appendChild(newelement);
        inputtext.value = "";
        newelement.querySelector("span").addEventListener("click", removeelement);
        function removeelement() {
            newelement.remove();
        }
    }
}
