// app.js, which fetches data from your Spring Boot backend when the button is clicked. Let me know if you need any changes or enhancements! 🚀
//  Change how the frontend accesses the API. When running in Docker, your frontend should use the service name instead of localhost:

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("fetchData");
    const dataParagraph = document.getElementById("data");

    button.addEventListener("click", async () => {
        try {
            // When running in Docker, use the service name as the hostname
            // For local development, you might need to switch this back to localhost
            const response = await fetch("http://app:8080/api/data");
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