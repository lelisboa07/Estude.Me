const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const shift = document.querySelector("#shift").value;
    const grade_level = document.querySelector("#grade_level").value;

    const res = await fetch("http://localhost:3000/classes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            shift,
            grade_level,
        }),
    });

    if (!res.ok) {
        alert("Erro");
    }
    
    location.pathname = "frontend/pedagogo";
});