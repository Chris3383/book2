function loadBooks() {
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
 if (this.readystate == 4 && this.status == 200) {
  var books = this.responseText;
  var booksObj = JSON.parse(books);
  for (x = 0; x < booksObj.books.length; x++)
   {
    showBooks(booksObj, x);
   }
  }
 };
 xhttp.open("GET", "books.json", true);
 xhttp.send();
}

function showBooks(booksObj, x){
  var book = booksObj.books[x];
  var titleID = "book" + x + "Title";
  var summaryID = "book" + x + "Summary";
  var coverID = "book" + x + "Cover";
  document.getElementById(titleID).innerHTML = book.title;
  document.getElementById(summaryID).innerHTML = book.summary;
  document.getElementById(coverID).src = book.coverImage;
}

function loadAuthor(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readystate == 4 && this.status == 200) {
   var authors = this.responseText;
   var authorsObj = JSON.parse(authors);
   for (x = 0; x < authorsObj.authors.length; x++)
    {
     showBooks(authorsObj, x);
    }
   }
  };
  xhttp.open("GET", "books.json", true);
  xhttp.send();
 }

 function showAuthors(authorsObj, x){
   var author = authorsObj.authors[x];
   var authorID = "book" + x + "Author";

   document.getElementById(titleID).innerHTML = book.title;
 }
