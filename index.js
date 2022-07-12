
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
  document.body.style.backgroundColor = "#a6d1f6";
}

function footeradress() {
  document.getElementById("footer").innerText = "buyithere@gmail.com"
}
