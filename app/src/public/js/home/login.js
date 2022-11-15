const id = document.querySelector("#id"),
password = document.querySelector("#password"),
loginBtn = document.querySelector("button");

const login = () => {
    const req = {
        id: id.value,
        password: password.value
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then(res => {
        if(res.success) location.href = "/";
        else alert(res.msg);
    })
    .catch(error => console.error(new Error("dorfed")))
}

loginBtn.addEventListener("click", login);

