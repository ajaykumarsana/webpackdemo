//COMMON JS MODE
//const add = require("./sum.js");

//ES 2015 MODE
// import sum from "./sum";
// const total = sum(3,4);
//------------------OR -----------

// this is for sample 
// import add from "./sum";
// import './image_viewer'
// const total = add(4,4);
// console.log(total);


// code splitting / lazy loading
const imgBig = document.createElement('button');
imgBig.innerText = 'Click';
imgBig.onclick = ()=>{
    // Loading module dynamically
    System.import('./image_viewer').then(module => {module.default()})

};

document.body.appendChild(imgBig);