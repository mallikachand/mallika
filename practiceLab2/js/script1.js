// Event handling
var cnt=0;
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
            if(cnt==0)
    {
     title += " & Lovin' it!";
      cnt++;
    }
    // Unobtrusive event binding
    document
      .querySelector("button")
      .addEventListener("click", sayHello);

      }
    }
  else
  {
    cnt=0;
    var title = "Lecture 54"
    document
          .querySelector("button")
          .textContent = title;
    
  }
  }
);



// document.querySelector("button")
//   .onclick = sayHello;
