var friendList = document.getElementById("Steve");


friendList.addEventListener("mouseover", showDescription);
friendList.addEventListener("mouseleave", hideDescription);

function showDescription(){
  // if (e.target.innerHTML === "Steve"){
    // e.target.append("<p>This guy is a crazy guy</p>");
  // }
  friendList.innerHTML += "<p>This guy is a crazy guy</p>";
}
function hideDescription(){
  friendList.innerHTML -= "<p>This guy is a crazy guy</p>";
}
