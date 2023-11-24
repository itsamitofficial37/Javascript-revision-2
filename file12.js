// this keyword 

const clickEvent = document.querySelector(".headline .btn");

const event = clickEvent.addEventListener("click" , ()=> {
    console.log("I am clicked by user");
    console.log("this object ke bare main")
    console.log(this);
})

//  normal function ke case main this keyword ki value  jis element pr hum event lga rhe hai wahi uski value hogi 

//  arrow function ke case main window object uski value hogi 
