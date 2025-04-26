

document.body.style.backgroundColor="blue";

let h=document.createElement("h1");
h.innerHTML="THIS IS THE JS HEADING";
let pt=document.querySelector("body");
pt.append(h);

let btn=document.createElement("button")
btn.innerText="click me";
btn.backgroundColor="green";
console.log(btn);

document.body.prepend(btn);




