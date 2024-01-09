let colorss = document.querySelector("#color_button");
let shapess = document.querySelector("#shape_button");
let outer_circle = document.querySelector(".outer_circle");
let inner_shape = document.querySelector(".inner_shape")
let body = document.querySelector("body");
let shapes = ["square" , "circle"  , "triangle-up" , "cut-diamond"]

colorss.addEventListener("click" , () =>{
    let str = "123456789abcdef";
    let col = "#"
    for(let i = 0;i<6;i++){
        let index =  Math.floor(Math.random()*15);
        col += str[index];
    }
    outer_circle.style.backgroundColor = col
    
});

shapess.addEventListener("click" , () =>{
    let str1 = "123456789abcdef";
    let col = "#"
    for(let i = 0;i<6;i++){
        let index =  Math.floor(Math.random()*15);
        col += str1[index];
    }
    let index = Math.floor(Math.random()*shapes.length);
    let str = shapes[index]
    inner_shape.setAttribute("class" , str );
    body.style.backgroundColor = col;
});

