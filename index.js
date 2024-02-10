const toggler = document.querySelector('#circle-btn');

let level = 1;
toggler.addEventListener("click", ()=>{

    if (level == 1) {
        toggler.style.transform = "translateX(25px)";
        document.documentElement.style.setProperty("--bgr-clr1", "hsl(0, 0%, 90%)");
        document.documentElement.style.setProperty("--bgr-clr2", "hsl(0, 5%, 81%)");
        document.documentElement.style.setProperty("--bgr-clr3", "hsl(0, 0%, 93%)");
        document.documentElement.style.setProperty("--key-bgr-clr1", "hsl(185, 42%, 37%)");
        document.documentElement.style.setProperty("--key-bgr-clr2", "hsl(25, 98%, 40%)");
        document.documentElement.style.setProperty("--key-bgr-clr3", "hsl(45, 7%, 89%)");
        document.documentElement.style.setProperty("--key-shadow1", "hsl(185, 58%, 25%)");
        document.documentElement.style.setProperty("--key-shadow2", "hsl(25, 99%, 27%)");
        document.documentElement.style.setProperty("--key-shadow3", "hsl(35, 11%, 61%)");
        document.documentElement.style.setProperty("--txt-clr1", "hsl(60, 10%, 19%)");
        document.documentElement.style.setProperty("--txt-clr2", "hsl(60, 10%, 19%)");
        document.documentElement.style.setProperty("--txt-clr3", " hsl(0, 0%, 100%) ");
        document.querySelector(".equal-btn").style.color = "white";
        document.documentElement.style.setProperty("--active-clr1", "white");
        document.documentElement.style.setProperty("--active-clr2", "hsl(185deg 44.37% 53.8%)");
        document.documentElement.style.setProperty("--active-clr3", "hsl(25deg 100% 59.73%)");
        level++;
    }else if (level == 2){
        toggler.style.transform = "translateX(50px)";
        document.documentElement.style.setProperty("--bgr-clr1", "hsl(268, 75%, 9%)");
        document.documentElement.style.setProperty("--bgr-clr2", "hsl(268, 71%, 12%)");
        document.documentElement.style.setProperty("--bgr-clr3", "hsl(268, 71%, 12%)");
        document.documentElement.style.setProperty("--key-bgr-clr1", "hsl(281, 89%, 26%)");
        document.documentElement.style.setProperty("--key-bgr-clr2", "hsl(176, 100%, 44%)");
        document.documentElement.style.setProperty("--key-bgr-clr3", "hsl(268, 47%, 21%)");
        document.documentElement.style.setProperty("--key-shadow1", "hsl(285, 91%, 52%)");
        document.documentElement.style.setProperty("--key-shadow2", "hsl(177, 92%, 70%)");
        document.documentElement.style.setProperty("--key-shadow3", "hsl(290, 70%, 36%)");
        document.documentElement.style.setProperty("--txt-clr1", "hsl(52, 100%, 62%)");
        document.documentElement.style.setProperty("--txt-clr2", " hsl(52, 100%, 62%)");
        document.documentElement.style.setProperty("--txt-clr3", " hsl(0, 0%, 100%)");
        document.querySelector(".equal-btn").style.color = "black";
        document.documentElement.style.setProperty("--active-clr1", "hsl(268deg 41.87% 45.09%)");
        document.documentElement.style.setProperty("--active-clr2", "hsl(281deg 65.61% 50.18%)");
        document.documentElement.style.setProperty("--active-clr3", "hsl(176deg 100% 78.21%)");
        level++;
    }else if(level == 3){
        toggler.style.transform = "translateX(0px)";
        document.documentElement.style.setProperty("--bgr-clr1", "hsl(222, 26%, 31%)");
        document.documentElement.style.setProperty("--bgr-clr2", "hsl(223, 31%, 20%)");
        document.documentElement.style.setProperty("--bgr-clr3", "hsl(224, 36%, 15%)");
        document.documentElement.style.setProperty("--key-bgr-clr1", "hsl(225, 21%, 49%)");
        document.documentElement.style.setProperty("--key-bgr-clr2", "hsl(6, 63%, 50%)");
        document.documentElement.style.setProperty("--key-bgr-clr3", "hsl(30, 25%, 89%)");
        document.documentElement.style.setProperty("--key-shadow1", "hsl(224, 28%, 35%)");
        document.documentElement.style.setProperty("--key-shadow2", "hsl(6, 70%, 34%)");
        document.documentElement.style.setProperty("--key-shadow3", "hsl(28, 16%, 65%)");
        document.documentElement.style.setProperty("--txt-clr1", "hsl(221, 14%, 31%)");
        document.documentElement.style.setProperty("--txt-clr2", "hsl(0, 0%, 100%)");
        document.documentElement.style.setProperty("--txt-clr3", "hsl(0, 0%, 100%)");
        document.querySelector(".equal-btn").style.color = "white";
        document.documentElement.style.setProperty("--active-clr1", "white");
        document.documentElement.style.setProperty("--active-clr2", "rgb(131, 141, 171)");
        document.documentElement.style.setProperty("--active-clr3", "rgb(244, 118, 104)");
        level = 1;
    }
    
})