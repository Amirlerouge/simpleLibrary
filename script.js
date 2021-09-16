let myLibrary = [];

function Book() {
	// the constructor...
}

function addBookToLibrary(bookTitle) {
	// do stuff here

	myLibrary.push(bookTitle);
}

function getBook() {

	let bookTitle = prompt("Please give the title of th book you would like to store")
	alert("the title of the book is " + bookTitle);

	addBookToLibrary(bookTitle)
	displayBooks(bookTitle);


}

function deleteBook() {
	let bookTitle = prompt("Please give the title of the book you would like to delete")

	myLibrary.pop(bookTitle);
	//console.log(myLibrary);
	let r = document.getElementsByClassName(bookTitle);
  r[0].parentNode.removeChild(r[0]);


  //let r = document.querySelector(bookTitle)
  console.log(r);
	//el.removeAttribute(); // Removes the div with the 'div-02' id


}

function displayBooks(bookTitle) {
	//for (let i = 0; i < myLibrary.length; i++) {
	let tag = document.createElement("div");
	document.body.appendChild(tag);
	tag.className = "book " + bookTitle;




	if (myLibrary[myLibrary.length - 1] === -1) {
		tag.innerHTML = "The book is " + myLibrary[0];
	} else {
		tag.innerHTML = "The book is " + myLibrary[myLibrary.length - 1];
	}
	//  }


}