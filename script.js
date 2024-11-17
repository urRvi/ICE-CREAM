const backendURL = "https://your-backend.onrender.com"; // Replace with your deployed backend URL

document.getElementById("ice-cream-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    const flavor = document.getElementById("flavor").value;

    try {
        const response = await fetch(`${backendURL}/save-flavor`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ flavor }),
        });

        const result = await response.json();
        if (response.ok) {
            document.getElementById("selected-flavor").innerText = `You selected: ${flavor}`;
        } else {
            document.getElementById("selected-flavor").innerText = `Error: ${result.error}`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("selected-flavor").innerText = 'An error occurred.';
    }
});
