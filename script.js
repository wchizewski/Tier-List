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
let uuImg = document.getElementById("untitledunmastered")
let damnImg = document.getElementById("damn");
let mousex, mousey;
let mouseisclicked;
let odx = 0
let ody = 847
let odPx = 127
let odPy = -1000
let s80x = 113
let s80y = 847
let s80Px = 127
let s80Py = -1000
let gkmcx = 226
let gkmcy = 847
let gkmcPx = 127
let gkmcPy = -1000
let tpabx = 339
let tpaby = 847
let tpabPx = 127
let tpabPy = -1000
let uux = 452
let uuy = 847
let uuPx = 127
let uuPy = -1000
let damnx = 565
let damny = 847
let damnPx = 127
let damnPy = -1000
let followmouse = "none";

requestAnimationFrame(loop);
function loop() {



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
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0, 847, 1300, 153)


    // draw images
    ctx.drawImage(odImg, odx, ody, 113, 113)
    ctx.drawImage(s80Img, s80x, s80y, 113, 113)
    ctx.drawImage(gkmcImg, gkmcx, gkmcy, 113, 113)
    ctx.drawImage(uuImg, uux, uuy, 113, 113)
    ctx.drawImage(damnImg, damnx, damny, 113, 113)
    ctx.drawImage(tpabImg, tpabx, tpaby, 113, 113)

    if (followmouse === "od") {
        odx = mousex - 56.5
        ody = mousey - 56.5
    }
    if (followmouse === "s80") {
        s80x = mousex - 56.5
        s80y = mousey - 56.5
    }
    if (followmouse === "gkmc") {
        gkmcx = mousex - 56.5
        gkmcy = mousey - 56.5
    }
    if (followmouse === "tpab") {
        tpabx = mousex - 56.5
        tpaby = mousey - 56.5
    }
    if (followmouse === "uu") {
        uux = mousex - 56.5
        uuy = mousey - 56.5
    }
    if (followmouse === "damn") {
        damnx = mousex - 56.5
        damny = mousey - 56.5
    }

    ctx.globalAlpha = 0.4
    ctx.drawImage(odImg, odPx, odPy, 113, 113)
    ctx.drawImage(s80Img, s80Px, s80Py, 113, 113)
    ctx.drawImage(gkmcImg, gkmcPx, gkmcPy, 113, 113)
    ctx.drawImage(uuImg, uuPx, uuPy, 113, 113)
    ctx.drawImage(damnImg, damnPx, damnPy, 113, 113)
    ctx.drawImage(tpabImg, tpabPx, tpabPy, 113, 113)
    ctx.globalAlpha = 1

    if (followmouse === "od") {
        if (mousey < 127) {
            odPy = 7
        } else if (mousey < 247) {
            odPy = 127
        } else if (mousey < 367) {
            odPy = 247
        } else if (mousey < 487) {
            odPy = 367
        } else if (mousey < 607) {
            odPy = 487
        } else if (mousey < 727) {
            odPy = 607
        } else if (mousey < 847) {
            odPy = 727
        }
    } else {
        odPy = -1000;
    }

    if (followmouse === "s80") {
        if (mousey < 127) {
            s80Py = 7
        } else if (mousey < 247) {
            s80Py = 127
        } else if (mousey < 367) {
            s80Py = 247
        } else if (mousey < 487) {
            s80Py = 367
        } else if (mousey < 607) {
            s80Py = 487
        } else if (mousey < 727) {
            s80Py = 607
        } else if (mousey < 847) {
            s80Py = 727
        }
    } else {
        s80Py = -1000;
    }

    if (followmouse === "gkmc") {
        if (mousey < 127) {
            gkmcPy = 7
        } else if (mousey < 247) {
            gkmcPy = 127
        } else if (mousey < 367) {
            gkmcPy = 247
        } else if (mousey < 487) {
            gkmcPy = 367
        } else if (mousey < 607) {
            gkmcPy = 487
        } else if (mousey < 727) {
            gkmcPy = 607
        } else if (mousey < 847) {
            gkmcPy = 727
        }
    } else {
        gkmcPy = -1000;
    }

    if (followmouse === "tpab") {
        if (mousey < 127) {
            tpabPy = 7
        } else if (mousey < 247) {
            tpabPy = 127
        } else if (mousey < 367) {
            tpabPy = 247
        } else if (mousey < 487) {
            tpabPy = 367
        } else if (mousey < 607) {
            tpabPy = 487
        } else if (mousey < 727) {
            tpabPy = 607
        } else if (mousey < 847) {
            tpabPy = 727
        }
    } else {
        tpabPy = -1000;
    }

    if (followmouse === "uu") {
        if (mousey < 127) {
            uuPy = 7
        } else if (mousey < 247) {
            uuPy = 127
        } else if (mousey < 367) {
            uuPy = 247
        } else if (mousey < 487) {
            uuPy = 367
        } else if (mousey < 607) {
            uuPy = 487
        } else if (mousey < 727) {
            uuPy = 607
        } else if (mousey < 847) {
            uuPy = 727
        }
    } else {
        uuPy = -1000;
    }

    if (followmouse === "damn") {
        if (mousey < 127) {
            damnPy = 7
        } else if (mousey < 247) {
            damnPy = 127
        } else if (mousey < 367) {
            damnPy = 247
        } else if (mousey < 487) {
            damnPy = 367
        } else if (mousey < 607) {
            damnPy = 487
        } else if (mousey < 727) {
            damnPy = 607
        } else if (mousey < 847) {
            damnPy = 727
        }
    } else {
        damnPy = -1000;
    }

    if (followmouse === "s80") {
        if (mousey < 127) {
            s80Py = 7
        }
    }
    if (followmouse === "gkmc") {
        if (mousey < 127) {
            gkmcPy = 7
        }
    }
    if (followmouse === "tpab") {
        if (mousey < 127) {
            tpabPy = 7
        }
    }
    if (followmouse === "uu") {
        if (mousey < 127) {
            uuPy = 7
        }
    }
    if (followmouse === "damn") {
        if (mousey < 127) {
            damnPy = 7
        }
    }






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
    if (mouseisclicked && mousex > odx && mousex < odx + 120 && mousey > ody && mousey < ody + 120) {
        followmouse = "od"
    }
    if (mouseisclicked && mousex > s80x && mousex < s80x + 120 && mousey > s80y && mousey < s80y + 120) {
        followmouse = "s80"
    }
    if (mouseisclicked && mousex > gkmcx && mousex < gkmcx + 120 && mousey > gkmcy && mousey < gkmcy + 120) {
        followmouse = "gkmc"
    }
    if (mouseisclicked && mousex > tpabx && mousex < tpabx + 120 && mousey > tpaby && mousey < tpaby + 120) {
        followmouse = "tpab"
    }
    if (mouseisclicked && mousex > uux && mousex < uux + 120 && mousey > uuy && mousey < uuy + 120) {
        followmouse = "uu"
    }
    if (mouseisclicked && mousex > damnx && mousex < damnx + 120 && mousey > damny && mousey < damny + 120) {
        followmouse = "damn"
    }

}


function mousemovemanager(event) {
    let cnvRect = cnv.getBoundingClientRect();
    mousex = event.x - cnvRect.x
    mousey = event.y - cnvRect.y
}


