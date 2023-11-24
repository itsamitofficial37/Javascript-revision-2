// styles change krna with the help of javaScript dom

const mainHeading = document.querySelector("#main-heading");

mainHeading.style.backgroundColor = "white";
mainHeading.style.color = "blue";


const links = document.getElementsByTagName("a");

// for of loop 

for(let link of links){
    link.style.color ="blue";
    link.style.backgroundColor ="white";
    link.style.border ="2px solid black"

}
