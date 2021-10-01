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


window.onload = andk()
let d = true

function andk() {
    document.getElementById("fdk").style.display = "none";
}

function hiendk() {
    document.getElementById("fdk").style.display = "inline-block";
    d = false
}

function dk() {

        if (d == true) {
            hiendk()
        } else {
            andk();
            d = true
        }
}
window.onload = andn()
let n = true
function andn() {
    document.getElementById("fdn").style.display = "none";
}

function hiendn() {
    document.getElementById("fdn").style.display = "inline-block";
    n = false
}

function dn() {
        if (n == true) {
            hiendn()
        } else {
            andn();
            n = true
        }
}
window.onload = taoan()
let t = true

function taoan() {
    document.getElementById("tao").style.display = "none";
}

function taohien() {
    document.getElementById("tao").style.display = "inline-block";
    t = false
}

function tao() {
        if (t == true) {
            taohien()
        } else {
            taoan();
            t = true
        }
}

// let list = ['Ip13', 'S10', 'X18', 'Ip12', 'M20']
// display();
// function display() {
//     // let s = '<div><div>Product Name</div><div></div><div>' + list.length + ' product </div></div>'
//     let s=''
//     for (let i = 0; i < list.length; i++) {
//         s += `<div>`;
//         s += `<div>${list[i]}</div>`;
//         // s += `<div class="grid-item"><img src="" alt=""></div>`;
//         s += `<div><button onclick="showEdit(${i})">Edit</button></div>`;
//         s += `<div><button onclick="Delete(${i})">Delete</button></div>`;
//         s += `</div>`;
//
//     }
//     document.getElementById('image').innerHTML = s;
// }
//
// function showEdit(index) {
//     let s = `<input id="ted" value="${list[index]}"><button onclick="save(${index})">Save</button>`
//     document.getElementById('from').innerHTML = s;
// }
//
// function save(index) {
//     let newL = document.getElementById('ted').value;
//     list[index] = newL;
//     display();
//     document.getElementById('from').innerHTML = ''
// }
//
// function Delete(index) {
//     for (let a = index; a < list.length; a++)
//         list[a] = list[a + 1];
//     list.pop()
//     display()
// }
