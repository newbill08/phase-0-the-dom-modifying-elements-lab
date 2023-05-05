// Write your code here!

// grabs main and remove the tag main
const mainpart = document.querySelector("main")
mainpart.remove()

//variable the points to node
let newHeader = document.createElement('h1')

//      make/add id of 'victory'
newHeader.setAttribute('id','victory');

//
newHeader.textContent = 'josh is the champion'
