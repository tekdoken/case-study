window.onload=anMenu()
let a=true
function anMenu() {
    document.getElementById("left").style.display = "none";
}
function hienMenu() {
    document.getElementById("left").style.display = "inline-block";
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


window.onload=andk()
let d=true
function andk() {
    document.getElementById("fdk").style.display = "none";
}
function hiendk() {
    document.getElementById("fdk").style.display = "inline-block";
    d=false
}
function dk(){
    if(n==true){
    if(d==true){
        hiendk()
    }else{
        andk();
        d=true
    }}
}
window.onload=andn()
let n=true
function andn() {
    document.getElementById("fdn").style.display = "none";
}
function hiendn() {
    document.getElementById("fdn").style.display = "inline-block";
    n=false
}
function dn(){
    if(d==true){
    if(n==true){
        hiendn()
    }else{
        andn();
        n=true
    }}
}