console.log("Dynamic Cards")

function createComponentFactory (){
  //component, border and delete button needs to be create here
  console.log("CLICK")
  uiPainter();
}

function uiPainter (){
// print to the DOM
console.log("CLICK2")
}

document.querySelector("#create-button").addEventListener("click",createComponentFactory)
