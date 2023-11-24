//  event listener with the help of loops

const allButton = document.querySelectorAll(".my-button button");
console.log(allButton);

// for of loop ki help se addEventListener 

/*
for(let button of allButton){
    button.addEventListener("click",function(){
        console.log(this.textContent);
    })
}
*/

// for loop 

/*
for(let i = 0 ; i<allButton.length; i++){
    allButton[i].addEventListener("click",function(){
        console.log(this.textContent);
    })
}

*/

// for each loop 
allButton.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this.textContent);
    })
})