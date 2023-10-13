var settingmenu= document.querySelector(".setting-menu")
var darkbtn= document.getElementById("dark-btn");

function settingsmenutogle(){
    settingmenu.classList.toggle("setting-menu-height");
}

darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dar-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");    
    }
}

if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dar-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dar-theme");
}
else{
    localStorage.setItem("theme","light");
}