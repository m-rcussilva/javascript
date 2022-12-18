window.onload = function() {
    const canvas = document.getElementById("gameBoard");
    canvas.width = 500;
    canvas.height = 500;
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // context.lineWidth = 8;
    // context.strokeStyle = "black";
    // context.strokeRect(0, 0, canvas.width, canvas.height);    
}
