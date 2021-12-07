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
let odx = 0;
let ody = 847;
let odPx = 127;
let odPy = -1000;
let s80x = 113;
let s80y = 847;
let s80Px = 127;
let s80Py = -1000;
let gkmcx = 226;
let gkmcy = 847;
let gkmcPx = 127;
let gkmcPy = -1000;
let tpabx = 339;
let tpaby = 847;
let tpabPx = 127;
let tpabPy = -1000;
let uux = 452;
let uuy = 847;
let uuPx = 127;
let uuPy = -1000;
let damnx = 565;
let damny = 847;
let damnPx = 127;
let damnPy = -1000;
let followmouse = "none";
let odRow = "none";
let s80Row = "none";
let gkmcRow = "none";
let tpabRow = "none";
let uuRow = "none";
let damnRow = "none";



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

    if (followmouse === "od") {
        if (mousey < 127) {
            odPy = 7
            odPx = 127
            odRow = "S"
            if (s80Row === "S" || gkmcRow === "S" || tpabRow === "S" || uuRow === "S" || damnRow === "S") {
                odPx = 240
            }
        } else if (mousey < 247) {
            odPy = 127
            odPx = 127
            odRow = "A"
            if (s80Row === "A" || gkmcRow === "A" || tpabRow === "A" || uuRow === "A" || damnRow === "A") {
                odPx = 240
            }
        } else if (mousey < 367) {
            odPy = 247
            odPx = 127
            odRow = "B"
            if (s80Row === "B" || gkmcRow === "B" || tpabRow === "B" || uuRow === "B" || damnRow === "B") {
                odPx = 240
            }
        } else if (mousey < 487) {
            odPy = 367
            odPx = 127
            odRow = "C"
            if (s80Row === "C" || gkmcRow === "C" || tpabRow === "C" || uuRow === "C" || damnRow === "C") {
                odPx = 240
            }
        } else if (mousey < 607) {
            odPy = 487
            odPx = 127
            odRow = "D"
            if (s80Row === "D" || gkmcRow === "D" || tpabRow === "D" || uuRow === "D" || damnRow === "D") {
                odPx = 240
            }
        } else if (mousey < 727) {
            odPy = 607
            odPx = 127
            odRow = "E"
            if (s80Row === "E" || gkmcRow === "E" || tpabRow === "E" || uuRow === "E" || damnRow === "E") {
                odPx = 240
            }
        } else if (mousey < 847) {
            odPy = 727
            odPx = 127
            odRow = "F"
            if (s80Row === "F" || gkmcRow === "F" || tpabRow === "F" || uuRow === "F" || damnRow === "F") {
                odPx = 240
            }
        } else {
            odPy = -1000;
            odRow = "none"
        }
    }



    if (followmouse === "s80") {
        if (mousey < 127) {
            s80Py = 7
            s80Px = 127
            s80Row = "S"
            if (odRow === "S" || gkmcRow === "S" || tpabRow === "S" || uuRow === "S" || damnRow === "S") {
                s80Px = 240
            }
        } else if (mousey < 247) {
            s80Py = 127
            s80Px = 127
            s80Row = "A"
            if (odRow === "A" || gkmcRow === "A" || tpabRow === "A" || uuRow === "A" || damnRow === "A") {
                s80Px = 240
            }
        } else if (mousey < 367) {
            s80Py = 247
            s80Px = 127
            s80Row = "B"
            if (odRow === "B" || gkmcRow === "B" || tpabRow === "B" || uuRow === "B" || damnRow === "B") {
                s80Px = 240
            }
        } else if (mousey < 487) {
            s80Py = 367
            s80Px = 127
            s80Row = "C"
            if (odRow === "C" || gkmcRow === "C" || tpabRow === "C" || uuRow === "C" || damnRow === "C") {
                s80Px = 240
            }
        } else if (mousey < 607) {
            s80Py = 487
            s80Px = 127
            s80Row = "D"
            if (odRow === "D" || gkmcRow === "D" || tpabRow === "D" || uuRow === "D" || damnRow === "D") {
                s80Px = 240
            }
        } else if (mousey < 727) {
            s80Py = 607
            s80Px = 127
            s80Row = "E"
            if (odRow === "E" || gkmcRow === "E" || tpabRow === "E" || uuRow === "E" || damnRow === "E") {
                s80Px = 240
            }
        } else if (mousey < 847) {
            s80Py = 727
            s80Px = 127
            s80Row = "F"
            if (odRow === "F" || gkmcRow === "F" || tpabRow === "F" || uuRow === "F" || damnRow === "F") {
                s80Px = 240
            }
        } else {
            s80Py = -1000;
            s80Row = "none"
        }
    }

    if (followmouse === "gkmc") {
        if (mousey < 127) {
            gkmcPy = 7
            gkmcPx = 127
            gkmcRow = "S"
            if (odRow === "S" || s80Row === "S" || tpabRow === "S" || uuRow === "S" || damnRow === "S") {
                gkmcPx = 240
            }
        } else if (mousey < 247) {
            gkmcPy = 127
            gkmcPx = 127
            gkmcRow = "A"
            if (odRow === "A" || s80Row === "A" || tpabRow === "A" || uuRow === "A" || damnRow === "A") {
                gkmcPx = 240
            }
        } else if (mousey < 367) {
            gkmcPy = 247
            gkmcPx = 127
            gkmcRow = "B"
            if (odRow === "B" || s80Row === "B" || tpabRow === "B" || uuRow === "B" || damnRow === "B") {
                gkmcPx = 240
            }
        } else if (mousey < 487) {
            gkmcPy = 367
            gkmcPx = 127
            gkmcRow = "C"
            if (odRow === "C" || s80Row === "C" || tpabRow === "C" || uuRow === "C" || damnRow === "C") {
                gkmcPx = 240
            }
        } else if (mousey < 607) {
            gkmcPy = 487
            gkmcPx = 127
            gkmcRow = "D"
            if (odRow === "D" || s80Row === "D" || tpabRow === "D" || uuRow === "D" || damnRow === "D") {
                gkmcPx = 240
            }
        } else if (mousey < 727) {
            gkmcPy = 607
            gkmcPx = 127
            gkmcRow = "E"
            if (odRow === "E" || s80Row === "E" || tpabRow === "E" || uuRow === "E" || damnRow === "E") {
                gkmcPx = 240
            }
        } else if (mousey < 847) {
            gkmcPy = 727
            gkmcPx = 127
            gkmcRow = "F"
            if (odRow === "F" || s80Row === "F" || tpabRow === "F" || uuRow === "F" || damnRow === "F") {
                gkmcPx = 240
            }
        } else {
            gkmcPy = -1000;
            gkmcRow = "none"
        }
    }

    if (followmouse === "tpab") {
        if (mousey < 127) {
            tpabPy = 7
            tpabPx = 127
            tpabRow = "S"
            if (odRow === "S" || s80Row === "S" || gkmcRow === "S" || uuRow === "S" || damnRow === "S") {
                tpabPx = 240
            }
        } else if (mousey < 247) {
            tpabPy = 127
            tpabPx = 127
            tpabRow = "A"
            if (odRow === "A" || s80Row === "A" || gkmcRow === "A" || uuRow === "A" || damnRow === "A") {
                tpabPx = 240
            }
        } else if (mousey < 367) {
            tpabPy = 247
            tpabPx = 127
            tpabRow = "B"
            if (odRow === "B" || s80Row === "B" || gkmcRow === "B" || uuRow === "B" || damnRow === "B") {
                tpabPx = 240
            }
        } else if (mousey < 487) {
            tpabPy = 367
            tpabPx = 127
            tpabRow = "C"
            if (odRow === "C" || s80Row === "C" || gkmcRow === "C" || uuRow === "C" || damnRow === "C") {
                tpabPx = 240
            }
        } else if (mousey < 607) {
            tpabPy = 487
            tpabPx = 127
            tpabRow = "D"
            if (odRow === "D" || s80Row === "D" || gkmcRow === "D" || uuRow === "D" || damnRow === "D") {
                tpabPx = 240
            }
        } else if (mousey < 727) {
            tpabPy = 607
            tpabPx = 127
            tpabRow = "E"
            if (odRow === "E" || s80Row === "E" || gkmcRow === "E" || uuRow === "E" || damnRow === "E") {
                tpabPx = 240
            }
        } else if (mousey < 847) {
            tpabPy = 727
            tpabPx = 127
            tpabRow = "F"
            if (odRow === "F" || s80Row === "F" || gkmcRow === "F" || uuRow === "F" || damnRow === "F") {
                tpabPx = 240
            }
        } else {
            tpabPy = -1000;
            tpabRow = "none"
        }
    }

    if (followmouse === "uu") {
        if (mousey < 127) {
            uuPy = 7
            uuPx = 127
            uuRow = "S"
            if (odRow === "S" || s80Row === "S" || gkmcRow === "S" || tpabRow === "S" || damnRow === "S") {
                uuPx = 240
            }
        } else if (mousey < 247) {
            uuPy = 127
            uuPx = 127
            uuRow = "A"
            if (odRow === "A" || s80Row === "A" || gkmcRow === "A" || tpabRow === "A" || damnRow === "A") {
                uuPx = 240
            }
        } else if (mousey < 367) {
            uuPy = 247
            uuPx = 127
            uuRow = "B"
            if (odRow === "B" || s80Row === "B" || gkmcRow === "B" || tpabRow === "B" || damnRow === "B") {
                uuPx = 240
            }
        } else if (mousey < 487) {
            uuPy = 367
            uuPx = 127
            uuRow = "C"
            if (odRow === "C" || s80Row === "C" || gkmcRow === "C" || tpabRow === "C" || damnRow === "C") {
                uuPx = 240
            }
        } else if (mousey < 607) {
            uuPy = 487
            uuPx = 127
            uuRow = "D"
            if (odRow === "D" || s80Row === "D" || gkmcRow === "D" || tpabRow === "D" || damnRow === "D") {
                uuPx = 240
            }
        } else if (mousey < 727) {
            uuPy = 607
            uuPx = 127
            uuRow = "E"
            if (odRow === "E" || s80Row === "E" || gkmcRow === "E" || tpabRow === "E" || damnRow === "E") {
                uuPx = 240
            }
        } else if (mousey < 847) {
            uuPy = 727
            uuPx = 127
            uuRow = "F"
            if (odRow === "F" || s80Row === "F" || gkmcRow === "F" || tpabRow === "F" || damnRow === "F") {
                uuPx = 240
            }
        } else {
            uuPy = -1000;
            uuRow = "none"
        }
    }

    if (followmouse === "damn") {
        if (mousey < 127) {
            damnPy = 7
            damnPx = 127
            damnRow = "S"
            if (odRow === "S" || s80Row === "S" || gkmcRow === "S" || tpabRow === "S" || uuRow === "S") {
                damnPx = 240
            }
        } else if (mousey < 247) {
            damnPy = 127
            damnPx = 127
            damnRow = "A"
            if (odRow === "A" || s80Row === "A" || gkmcRow === "A" || tpabRow === "A" || uuRow === "A") {
                damnPx = 240
            }
        } else if (mousey < 367) {
            damnPy = 247
            damnPx = 127
            damnRow = "B"
            if (odRow === "B" || s80Row === "B" || gkmcRow === "B" || tpabRow === "B" || uuRow === "B") {
                damnPx = 240
            }
        } else if (mousey < 487) {
            damnPy = 367
            damnPx = 127
            damnRow = "C"
            if (odRow === "C" || s80Row === "C" || gkmcRow === "C" || tpabRow === "C" || uuRow === "C") {
                damnPx = 240
            }
        } else if (mousey < 607) {
            damnPy = 487
            damnPx = 127
            damnRow = "D"
            if (odRow === "D" || s80Row === "D" || gkmcRow === "D" || tpabRow === "D" || uuRow === "D") {
                damnPx = 240
            }
        } else if (mousey < 727) {
            damnPy = 607
            damnPx = 127
            damnRow = "E"
            if (odRow === "E" || s80Row === "E" || gkmcRow === "E" || tpabRow === "E" || uuRow === "E") {
                damnPx = 240
            }
        } else if (mousey < 847) {
            damnPy = 727
            damnPx = 127
            damnRow = "F"
            if (odRow === "F" || s80Row === "F" || gkmcRow === "F" || tpabRow === "F" || uuRow === "F") {
                damnPx = 240
            }
        } else {
            damnPy = -1000;
            damnRow = "none"
        }
    }

    ctx.globalAlpha = 0.4
    ctx.drawImage(odImg, odPx, odPy, 113, 113)
    ctx.drawImage(s80Img, s80Px, s80Py, 113, 113)
    ctx.drawImage(gkmcImg, gkmcPx, gkmcPy, 113, 113)
    ctx.drawImage(uuImg, uuPx, uuPy, 113, 113)
    ctx.drawImage(damnImg, damnPx, damnPy, 113, 113)
    ctx.drawImage(tpabImg, tpabPx, tpabPy, 113, 113)
    ctx.globalAlpha = 1




    requestAnimationFrame(loop);
}




// event listrebnersd
document.addEventListener("mousemove", mousemovemanager);
document.addEventListener("mousedown", mousedownmanager);
document.addEventListener("mouseup", mouseupmanager);

function mouseupmanager() {
    if (followmouse === "od") {
        odx = odPx
        ody = odPy
    } else if (followmouse === "s80") {
        s80x = s80Px
        s80y = s80Py
    } else if (followmouse === "gkmc") {
        gkmcx = gkmcPx
        gkmcy = gkmcPy
    } else if (followmouse === "tpab") {
        tpabx = tpabPx
        tpaby = tpabPy
    } else if (followmouse === "uu") {
        uux = uuPx
        uuy = uuPy
    } else if (followmouse === "damn") {
        damnx = damnPx
        damny = damnPy
    }
    followmouse = "none"
    mouseisclicked = false;
}


function mousedownmanager() {
    mouseisclicked = true;
    if (mouseisclicked && mousex > odx && mousex < odx + 113 && mousey > ody && mousey < ody + 113) {
        followmouse = "od"
    }
    if (mouseisclicked && mousex > s80x && mousex < s80x + 113 && mousey > s80y && mousey < s80y + 113) {
        followmouse = "s80"
    }
    if (mouseisclicked && mousex > gkmcx && mousex < gkmcx + 113 && mousey > gkmcy && mousey < gkmcy + 113) {
        followmouse = "gkmc"
    }
    if (mouseisclicked && mousex > tpabx && mousex < tpabx + 113 && mousey > tpaby && mousey < tpaby + 113) {
        followmouse = "tpab"
    }
    if (mouseisclicked && mousex > uux && mousex < uux + 113 && mousey > uuy && mousey < uuy + 113) {
        followmouse = "uu"
    }
    if (mouseisclicked && mousex > damnx && mousex < damnx + 113 && mousey > damny && mousey < damny + 113) {
        followmouse = "damn"
    }

}


function mousemovemanager(event) {
    let cnvRect = cnv.getBoundingClientRect();
    mousex = event.x - cnvRect.x
    mousey = event.y - cnvRect.y
}
