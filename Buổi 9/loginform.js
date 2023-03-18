function getFromStorage(key) {

    return window.localStorage.getItem(key);
}
const Register = document.getElementById("Register");

Register.addEventListener("click", function() {
    const inputName = document.getElementById("name").value;
    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("passwword").checked;
    const inputBirthDay = document.getElementById("BirthDay").checked;

    const data = {
        name: inputName,
        email: inputEmail,
        pass: inputPassword,
        birthday: inputBirthDay,
    };
    if (data.name === "") {
        alert("Please input for name!");
        return false;
    }

    if (data.email === "" || isNaN(data.email)) {
        alert("Please input for email!");
        return false;
    }

    if (data.pass === "" || isNaN(data.pass)) {
        alert("Please input for passwword!");
        return false;
    }

    if (data.birthday === "" || isNaN(data.birthday)) {
        alert("Please input for birthday!");
        return false;
    }

    infor.push(data);

    renderTableData(infor);
    resetForm();
    saveToStorage("infor", infor);
});