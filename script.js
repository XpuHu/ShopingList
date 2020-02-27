var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = ul.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	var newButton = document.createElement("button");

	newButton.innerHTML = "X";
	newButton.classList.add("delete");
	span.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	li.appendChild(newButton);
	ul.appendChild(li);

	input.value = "";
	list = ul.querySelectorAll("li");
	refreshListEventListener();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListElementAfterClick(event) {
	deleteListElement(this);
	list = ul.querySelectorAll("li");
	refreshListEventListener();
}

function deleteListElement(element) {
	element.parentElement.remove();
}

function linethroughAfterClick(event) {
	this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
refreshListEventListener();

function refreshListEventListener() {
	list.forEach(addListEventListener);
}

function addListEventListener(e, i) {
	e.addEventListener("click", linethroughAfterClick);
	e.querySelector("button").addEventListener("click", deleteListElementAfterClick);
}