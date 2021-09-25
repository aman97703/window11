const taskbar = document.getElementById('taskbar');
const startmenu = document.getElementById('startmenu');

taskbar.addEventListener('click',()=>{
    if(startmenu.style.bottom == "0px"){
        startmenu.style.bottom = "-100%";
    }
    else{
        startmenu.style.bottom = "0px"
    }
})