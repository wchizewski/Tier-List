// Tier List by Will
// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1300;
cnv.height = 1000;

// variables
let odImg = document.getElementById("overlydedicated");
let s80Img = document.getElementById("section.80");
let gkmcImg = document.getElementById("goodkidmadcity");
let tpabImg = document.getElementById("topimpabutterfly");
let damnImg = document.getElementById("damn");
let mousex, mousey;
let mouseisclicked;
let odx = 0
let ody = 847
let s80x = 120
let s80y = 847
let gkmcx = 240
let gkmcy = 847
let tpabx = 360
let tpaby = 847
let damnx = 480
let damny = 847
let followmouse;

requestAnimationFrame(loop);
function loop() {

    // draw images
    ctx.drawImage(odImg, odx, ody, 120, 120)
    ctx.drawImage(s80Img, s80x, s80y, 120, 120)
    ctx.drawImage(gkmcImg, gkmcx, gkmcy, 120, 120)
    ctx.drawImage(tpabImg, tpabx, tpaby, 120, 120)
    ctx.drawImage(damnImg, damnx, damny, 120, 120)

    if (mouseisclicked && mousex > 0 && mousex < 120 && mousey > 847 && mousey < 967) {
        followmouse = "od"
    }
    if (followmouse = "od") {
        odx = mousex
        ody = mousey
    }


    // tier list
    ctx.fillStyle = "rgb(26, 26, 26)"
    ctx.fillRect(127, 7, 1167, 840)

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
    ctx.fillText("S", 45, 80)
    ctx.fillText("A", 45, 200)
    ctx.fillText("B", 45, 320)
    ctx.fillText("C", 45, 440)
    ctx.fillText("D", 45, 560)
    ctx.fillText("E", 45, 680)
    ctx.fillText("F", 45, 800)

    for (let y = 0; y <= 847; y += 120) {
        ctx.fillRect(0, y, 1300, 7)
        for (let x = 0; x <= 125; x += 120) {
            ctx.fillRect(x, 0, 7, 847)
        }
    }
    ctx.fillRect(1293, 0, 7, 847)





    requestAnimationFrame(loop);
}

// event listrebnersd
document.addEventListener("mousemove", mousemovemanager);
document.addEventListener("mousedown", mousedownmanager);
document.addEventListener("mouseup", mouseupmanager);

function mouseupmanager() {
    mouseisclicked = false;
    followmouse = "none"
}

function mousedownmanager() {
    mouseisclicked = true;

}


function mousemovemanager(event) {
    let cnvRect = cnv.getBoundingClientRect();
    mousex = event.x - cnvRect.x
    mousey = event.y - cnvRect.y
}


