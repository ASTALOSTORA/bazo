let splash_screen = document.querySelector(".splash-screen")
let  screen_1 = document.querySelector(".screen_1");
let  screen_2 = document.querySelector(".screen_2");
let home = document.querySelector(".home")
let main_1 = document.querySelector(".main_1")
let main_2 = document.querySelector(".main_2")
let contian_menu = document.querySelector(".contian_menu")
     

setTimeout(()=>{
    splash_screen.style.cssText="display:none;"
    
    screen_1.style.left ="-900px"
    screen_2.style.right ="-900px"
},5000)
setTimeout(()=>{
    screen_1.style.display ="block"
    screen_2.style.display ="block"
    home.style.display="flex"
    main_1.style.display="flex"
    main_2.style.display="flex"
    contian_menu.style.display="flex"
    
},4970)


//header
let login_img = document.querySelector(".login_img")
let contain_log = document.querySelector(".contain_log")
login_img.onclick=()=>{
    if(login_img.classList.item(1) == "test"){
        contain_log.style.display="inline"
        login_img.classList.toggle("test")
    }
    else{
        contain_log.style.display="none"
        login_img.classList.toggle("test")
        
    }
}

//menu
let menu = document.querySelector(".menu")

let span_1 = document.querySelector(".span-1")
let span_2 = document.querySelector(".span-2")
let span_3 = document.querySelector(".span-3")
let nav = document.querySelector(".nav")



menu.onclick=()=>{
    if(nav.classList.item(1) === "c"){
        nav.style.left="0"
        nav.style.display="flex"
        span_1.classList.add("span_1")
        span_2.classList.add("span_2")
        span_3.classList.add("span_3")
        nav.classList.remove("c")
        main_2.style.display="none"
    }
   else{
    nav.style.left="-100%";
        nav.style.display="none"
        span_1.classList.remove("span_1")
        span_2.classList.remove("span_2")
        span_3.classList.remove("span_3")
        nav.classList.add("c")
        main_2.style.display="flex"
    }
}




// main 2
let img_des = document.querySelector('#img_des')
setInterval(()=>{
    img_des.src = "./imgbazooka/22.jpg";
},12000)
setInterval(()=>{
    img_des.src = "./imgbazooka/1.jpg";
},15000)
setInterval(()=>{
    img_des.src = "./imgbazooka/1.jpg";
},18000)
