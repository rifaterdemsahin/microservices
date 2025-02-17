// app.js, which fetches data from your Spring Boot backend when the button is clicked. Let me know if you need any changes or enhancements! 🚀

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("fetchData");
    const dataParagraph = document.getElementById("data");

    button.addEventListener("click", async () => {
        try {
            const response = await fetch("http://localhost:8080/api/data");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            dataParagraph.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            dataParagraph.textContent = "Error fetching data: " + error.message;
        }
    });
});