let myButton = document.querySelector("#addToDo");
let myList = document.querySelector("#toDoContainer");
let myInput = document.querySelector("#inputField");

myButton.addEventListener("click", function() {
    // create a new li element held "item" variable
    let item = document.createElement("li");

    //  apply the value of the <input> elemetn to the newly created li
    item.innerText = myInput.value;

    // append (add) the list item to our list (the filled in li element)
    myList.appendChild(item);

    // reset the value of the input field so we can type additional to do items
    myInput.value = "";

    // when a list item is clicked, it should be removed from the page

item.addEventListener("click", function () {
    myList.removeChild(item);

});

});
