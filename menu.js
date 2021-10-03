window.onload = anMenu()
let a = true

function anMenu() {
    document.getElementById("left").style.display = "none";
}

function hienMenu() {
    document.getElementById("left").style.display = "inline-block";
    a = false
}

function menu() {
    if (a == true) {
        hienMenu()
    } else {
        anMenu();
        a = true
    }
}


// window.onload = andk()
// let d = true
//
// function andk() {
//     document.getElementById("fdk").style.display = "none";
// }
//
// function hiendk() {
//     document.getElementById("fdk").style.display = "inline-block";
//     d = false
// }
//
// function dk() {
//
//     if (d == true) {
//         hiendk()
//     } else {
//         andk();
//         d = true
//     }
// }
// window.onload = andn()
// let n = true
//
// function andn() {
//     document.getElementById("fdn").style.display = "none";
// }
//
// function hiendn() {
//     document.getElementById("fdn").style.display = "inline-block";
//     n = false
// }
//
// function dn() {
//     if (n == true) {
//         hiendn()
//     } else {
//         andn();
//         n = true
//     }
// }
//
// window.onload = taoan()
// let t = true
//
// function taoan() {
//     document.getElementById("tao").style.display = "none";
// }
//
// function taohien() {
//     document.getElementById("tao").style.display = "inline-block";
//     t = false
// }
//
// function tao() {
//     if (t == true) {
//         taohien()
//     } else {
//         taoan();
//         t = true
//     }
// }


