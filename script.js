document.getElementById("ice-cream-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const flavor = document.getElementById("flavor").value;
    document.getElementById("selected-flavor").innerText = `You selected: ${flavor}`;
});
