// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
var cnt=0;
function sayHello () 
{
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student")
  {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    if(cnt==0)
    {
     title += " & Lovin' it!";
      cnt++;
    }
    
    document
        .querySelector("h1")
        .textContent = title;
  }
  else
  {
    cnt=0;
    var title = "Lecture 53"
    document
          .querySelector("h1")
          .textContent = title;
    
  }
}
