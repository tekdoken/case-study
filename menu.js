window.onload=anMenu()
let a=true
function anMenu() {
    document.getElementById("noimenu").style.display = "none";
}
function hienMenu() {
    document.getElementById("noimenu").style.display = "flex";
    a=false
}
function menu(){
    if(a==true){
        hienMenu()
    }else{
        anMenu();
        a=true
    }
}
