
//console.log("This will log to the browser console!!")
//n.1 exercise


const toggleAllHeaderClasses = function () {
   const headerNodes = document.getElementsByTagName('h1')
    
   for (let i = 0; i < headerNodes.length; i++) {
        const node = headerNodes[i]
        console.log("for loop", node)
        node.classList.toggle("selected")
        node.innerHTML = "<i><span class='color-blue'>WELCOME!</span></i>"
      }
    }
 
function changeBackgroundColor() {
  document.body.style.backgroundColor = "#65adb8";
}

/*
//n.12 exercise
 function amazonlink(changecolor) {
   let amazonLinksCssNode = document.getElementsByClassName("amazonlink")
   for(let i=0 ; i < amazonLinksCssNode.length ; i++)
 } {
 amazonLinksCssNode[i].style.color = changecolor 
 }
 //n.12 exercise
 function colorOfPrice (){
   let changePriceColorNode = document.getElementsByClassName("cost")
   for(let i = 0; i < changePriceColorNode.length; i++){
       const red = Math.round(Math.random() * 255)
       const green = Math.round(Math.random() * 255)
       const blue = Math.round(Math.random() * 255)
       changePriceColorNode[i].style.color = "rgb(" + red + ", " + green + "," + blue + ")";
     }
 }
*/
