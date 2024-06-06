const inputBox = document.getElementById("input box");
const listcontainer = document.getElementById("list-container");

// using function to addTask
function AddTask(){
    // using conditional statemnt we are adding inputbox.value if the input box is empty it will give the image "You must write something"
    if(inputBox.value === ''){
        alert("You must write something ");
    }
    else{
        // storing element in li variable
        let li = document.createElement("li");
        // adding li inner HTML whatever text will be add input field it will added in li
        li.innerHTML = inputBox.value;
        // this li will be displayed in list container
        listcontainer.appendChild(li);
        // adding check icon using span 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // to display this span
        li.appendChild(span);
    }

    inputBox.value = "";
    save();
}


listcontainer.addEventListener("click", function(e){
// This line adds an event listener to an element with the identifier listcontainer. The event listener listens for a "click" event and executes the provided callback function whenever a click event occurs within listcontainer. The false parameter indicates that the event listener is set up in the bubbling phase (default).
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);

function save(){
    // whatever data stored in list container it will save 
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
save();