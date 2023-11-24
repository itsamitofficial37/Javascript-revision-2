//  little practice with click event 

const allButton = document.querySelectorAll(".my-button button");
// console.log(allButton);

allButton.forEach((button)=> {
    button.addEventListener("click", (event)=> {
        button.style.backgroundColor ="yellow";
        button.style.color ="blue";
    })
})
