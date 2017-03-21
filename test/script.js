// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function findMarks() {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Finding marks of " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title = "Student not found ";
    document
        .querySelector("h1")
        .textContent = title;
  }
  if (name === "Mallika") {
<src="Mallika.txt">
            };
    

  
  }
}
