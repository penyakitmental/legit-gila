function showFuckOff() {
    const name = document.getElementById("nameInput").value;
    const output = document.getElementById("output");
    const audio = document.getElementById("getOutSound");

    if (name.trim() === "") {
        alert("Type your name first!");
        return;
    }

    output.innerHTML = `FUCK OFF ${name.toUpperCase()}`;
    output.style.display = "block";

    // Play bass-boosted "GET OUT" sound
    audio.play();
}
