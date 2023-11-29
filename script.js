//your JS code here. If required.
document.addEventListener('DOMContentLoaded',()=>{
    let body = document.querySelector("body");
   let ptag = document.createElement("p");   
   ptag.innerText="DOM load success";
   body.append(ptag);
});