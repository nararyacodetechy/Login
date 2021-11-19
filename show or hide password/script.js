//Get all of the necessary elements
const input = document.querySelector(".pwd input");
const eye = document.querySelector(".pwd .bxs-show");
const lock = document.querySelector(".pwd .bxs-hide");
const overlay = document.querySelector(".pwd .overlay");

//Add a click event to the eye icon
eye.addEventListener("click", () =>{
    //if the password is hidden...
    if (input.type === "password") {
        //show it
        input.type = "text";
        //Toggle between eye icons
        eye.classList.remove("bxs-show");
        eye.classList.add("bxs-hide");
        //Change the color of Lock eye in 500ms
        setTimeout(() => {
            lock.getElementsByClassName.color = "#dbdbdb";
        },500);
    }
    else{
        //Hide it
        input.type = "password";
        //Toggle between eye icons
        eye.classList.remove("bxs-hide");
        eye.classList.add("bxs-show");
    }
    //Toggle the overlay
    overlay.classList.toggle("overlay-cover");
});