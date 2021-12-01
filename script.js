// Tier List by Will
// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1300;
cnv.height = 1000;

// tier list
ctx.fillStyle = "rgb(255, 127, 127)"
ctx.fillRect(7, 7, 120, 120)
ctx.fillStyle = "rgb(255, 191, 127)"
ctx.fillRect(7, 127, 120, 120)
ctx.fillStyle = "rgb(255, 255, 127)"
ctx.fillRect(7, 247, 120, 120)
ctx.fillStyle = "rgb(127, 255, 127)"
ctx.fillRect(7, 367, 120, 120)
ctx.fillStyle = "rgb(127, 191, 255)"
ctx.fillRect(7, 487, 120, 120)
ctx.fillStyle = "rgb(127, 127, 255)"
ctx.fillRect(7, 607, 120, 120)
ctx.fillStyle = "rgb(255, 127, 255)"
ctx.fillRect(7, 727, 120, 120)

ctx.font = "55px Arial"
ctx.fillStyle = "black"
ctx.fillText



for (let y = 0; y <= 847; y += 120) {
    ctx.fillRect(0, y, 1300, 7)
    for (let x = 0; x <= 125; x += 120) {
        ctx.fillRect(x, 0, 7, 847)
    }
}
ctx.fillRect(1293, 0, 7, 847)

