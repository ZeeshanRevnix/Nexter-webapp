// var element

// element = document.getElementById("header-h3").innerText = "YO HO HO HO HO!"
// element = document.getElementById("header-h3").setAttribute("class", "yahoooo")
// console.log(element);

// querySelector

// element = document.querySelector(".heading-1").innerHTML = "change value with query selector"
// element = document.querySelectorAll("heading-3").style.backgroundColor = "red"

//single event listner

// element = document.getElementById("header-h3").onclick = ChangeBgColor
// function ChangeBgColor() {
//     document.getElementById("header-h3").style.backgroundColor = "green"
// }

//addEventListener // multiple event listner

// document.getElementById("header-h3").addEventListener("click", ChangeBgColor)
// document.getElementById("header-h3").addEventListener("mouseenter", function () {
//     this.style.border = "2px solid white"
//     this.style.padding = "10px"
// })

// function ChangeBgColor() {
//     document.getElementById("header-h3").style.backgroundColor = "green"
// }

// toggle class

// document.getElementById("header-h3").addEventListener("click", ChangeBgColor)
// function ChangeBgColor() {
//     document.getElementById("header-h3").classList.toggle("toggleClass");
//     var a = this.classList
//     console.log(a);
// }

//TRAVERSAL METHOD
// PARENT ELEMENT  // access parent element with the help of children

// document.getElementById("feature").parentElement.style.background = "blue"
// var x = document.getElementById("feature").parentElement
// console.log(x);

// CHILDREN AND CHILD ELEMENT WITH NODES

// document.getElementById("features").children[3].style.background = "blue";
// var x = document.getElementById("features").children;
// console.log(x);

// child NODE

// document.getElementById("features").child[3].style.background = "blue";
// var x = document.getElementById("features").childNodes;
// console.log(x);


// FIRST, LAST ELEMENT CHILD

// var firstEle = document.getElementById("features").firstElementChild.style.background = "red"
// document.getElementById("features").firstElementChild.style.background = "lightgreen"
// console.log(firstEle);

// SAME AS FOR LAST ELEMENT CHILD

// var firstChildd = document.getElementById("feature").firstChild
// console.log(firstChildd);


// NEXT AND LAST ELEMENT SIBLING

// var PrvSib = document.getElementById("feature_3").previousElemenSibling.style.background = "lightgreen";
// console.log(PrvSib);

// previousSibling and next sibling

// var PrvSib = document.getElementById("feature_3").previousSibling;
// console.log(PrvSib);


// DOM CREATE METHOD
// var newtag = document.createElement("p")
// var newtext = document.createTextNode("this is only for test text")
// var newcomment = document.createComment("this is comment")
// console.log(newtag);
// console.log(newtext);
// console.log(newcomment);


// var newTag = document.createElement("h1");
// var newText = document.createTextNode("This text want to append into feature child one");
// var newcomment = document.createComment("this is comment")
// newTag.appendChild(newText)
// newTag.appendChild(newcomment)

// AND show this elemment and tag in browser

// document.getElementById("feature_3").appendChild(newTag)
// document.getElementById("feature_3").appendChild(newcomment)
// console.log(newTag);

// INSERT THE ELEMENT INTO SPECIFIC POSITION

// var ElePosition = document.getElementById("features")
// ElePosition.insertBefore(newTag, ElePosition.childNodes[5])



