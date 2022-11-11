const id = document.querySelector("#id"),
password = document.querySelector("#password"),
loginBtn = document.querySelector("button");

const login = () => {
    const req = {
        id: id.value,
        password: password.value
    };
    console.log(req)
}

loginBtn.addEventListener("click", login);

