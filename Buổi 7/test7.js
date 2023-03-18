function myFunction() {
    let name = prompt("Please enter your name", );
    document.getElementById("name").innerHTML =
        "Tên của bạn là" + name;
    let age = prompt("Please enter your age", );
    document.getElementById("age").innerHTML =
        "Tuổi của bạn" + age;
    let gender = prompt("Please enter your gender", );
    document.getElementById("gender").innerHTML =
        "Giới tính của bạn là" + gender;
    let adress = prompt("Please enter youradress", );
    document.getElementById("adress").innerHTML =
        "Địa chỉ" + adress;
    let lop = prompt("Please enter your class", );
    document.getElementById("lop").innerHTML =
        "lớp " + lop;
}

function sum() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let sum = parseInt(a) + b;

    document.getElementById('result').innerHTML = sum;
}
// function Redirect() {
//     let link1 = prompt("Mời bạn chọn", )
//     if
//     window.location = "https://vti.academy.vn";
// }
function taodanhsach() {
    var SoLuong, x;
    var DS = new Array(100);
    SoLuong = prompt("Bạn cần nhập bao nhiêu người: ", 5);
    for (i = 0; i < SoLuong; i++) {
        DS[i] = prompt("Nhập vào họ tên: ", "");
    }
    DS.sort();

    document.write("<h1>Danh sách đã sắp xếp là </h1>");
    for (x in DS) {
        document.write(DS[x]);
        document.write("<BR>");
    }
}