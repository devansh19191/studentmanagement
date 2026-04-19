// Dummy login credentials
const correctUsername = "admin";
const correctPassword = "1234";

let students = [];

// LOGIN FUNCTION
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === correctUsername && pass === correctPassword) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("portalPage").style.display = "block";
    } else {
        document.getElementById("loginMsg").innerText = "Invalid credentials!";
    }
}

// LOGOUT
function logout() {
    document.getElementById("portalPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

// ADD STUDENT
function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name === "" || age === "") return;

    let student = name + " (" + age + ")";
    students.push(student);

    display();
}

// DISPLAY
function display() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach((s, index) => {
        let li = document.createElement("li");
        li.textContent = s;

        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteStudent(index);

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

// DELETE
function deleteStudent(index) {
    students.splice(index, 1);
    display();
}
