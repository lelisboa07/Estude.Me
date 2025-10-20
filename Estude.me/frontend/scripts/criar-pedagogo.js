const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const cellphone = document.querySelector("#cellphone").value;
    const birthDate = document.querySelector("#birthDate").value;

    const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
            cellphone,
            birth_date: birthDate,
            type: "pedagogue"
        }),
    });

    if (!res.ok) {
        alert("Erro");
    }
    location.pathname = "frontend/pedagogo";
});