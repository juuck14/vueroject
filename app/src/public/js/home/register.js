const id = document.querySelector("#id"),
name = document.querySelector("#name"),
password = document.querySelector("#password"),
registerBtn = document.querySelector("button");

const register = () => {
    const req = {
        id: id.value,
        name: name.value,
        password: password.value
    };
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then(res => {
        if(res.success) location.href = "/login";
        else alert(res.msg);
    })
    .catch(error => console.error(new Error("dorfed")))
}

registerBtn.addEventListener("click", register);

