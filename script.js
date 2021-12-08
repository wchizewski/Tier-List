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
let sRow = 1;
let aRow = 1;
let bRow = 1;
let cRow = 1;
let dRow = 1;
let eRow = 1;
let fRow = 1;
let bottom = 1;



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

    if (mousey < 127) {
        whichImg(7);
        if (followmouse === "od") {
            odPx = sRow * 113 + 14
        } else if (followmouse === "s80") {
            s80Px = sRow * 113 + 14
        } else if (followmouse === "gkmc") {
            gkmcPx = sRow * 113 + 14
        } else if (followmouse === "tpab") {
            tpabPx = sRow * 113 + 14
        } else if (followmouse === "uu") {
            uuPx = sRow * 113 + 14
        } else if (followmouse === "damn") {
            damnPx = sRow * 113 + 14 
        }
    } else if (mousey < 247) {
        whichImg(127);
        if (followmouse === "od") {
            odPx = aRow * 113 + 14
        } else if (followmouse === "s80") {
            s80Px = aRow * 113 + 14
        } else if (followmouse === "gkmc") {
            gkmcPx = aRow * 113 + 14
        } else if (followmouse === "tpab") {
            tpabPx = aRow * 113 + 14
        } else if (followmouse === "uu") {
            uuPx = aRow * 113 + 14
        } else if (followmouse === "damn") {
            damnPx = aRow * 113 + 14 
        }
    } else if (mousey < 367) {
        whichImg(247);
        if (followmouse === "od") {
            odPx = bRow * 113 + 14
        } else if (followmouse === "s80") {
            s80Px = bRow * 113 + 14
        } else if (followmouse === "gkmc") {
            gkmcPx = bRow * 113 + 14
        } else if (followmouse === "tpab") {
            tpabPx = bRow * 113 + 14
        } else if (followmouse === "uu") {
            uuPx = bRow * 113 + 14
        } else if (followmouse === "damn") {
            damnPx = bRow * 113 + 14 
        }
    } else if (mousey < 487) {
        whichImg(367);
        if (followmouse === "od") {
            odPx = cRow * 113 + 14
        } else if (followmouse === "s80") {
            s80Px = cRow * 113 + 14
        } else if (followmouse === "gkmc") {
            gkmcPx = cRow * 113 + 14
        } else if (followmouse === "tpab") {
            tpabPx = cRow * 113 + 14
        } else if (followmouse === "uu") {
            uuPx = cRow * 113 + 14
        } else if (followmouse === "damn") {
            damnPx = cRow * 113 + 14 
        }
    } else if (mousey < 607) {
        whichImg(487);
        if (followmouse === "od") {
            odPx = dRow * 113 + 14
        } else if (followmouse === "s80") {
            s80Px = dRow * 113 + 14
        } else if (followmouse === "gkmc") {
            gkmcPx = dRow * 113 + 14
        } else if (followmouse === "tpab") {
            tpabPx = dRow * 113 + 14
        } else if (followmouse === "uu") {
            uuPx = dRow * 113 + 14
        } else if (followmouse === "damn") {
            damnPx = dRow * 113 + 14 
        }
    } else if (mousey < 727) {
        whichImg(607);
        if (followmouse === "od") {
            odPx = eRow * 113 + 14
        } else if (followmouse === "s80") {
            s80Px = eRow * 113 + 14
        } else if (followmouse === "gkmc") {
            gkmcPx = eRow * 113 + 14
        } else if (followmouse === "tpab") {
            tpabPx = eRow * 113 + 14
        } else if (followmouse === "uu") {
            uuPx = eRow * 113 + 14
        } else if (followmouse === "damn") {
            damnPx = eRow * 113 + 14 
        }
    } else if (mousey < 847) {
        whichImg(727);
        if (followmouse === "od") {
            odPx = fRow * 113 + 14
        } else if (followmouse === "s80") {
            s80Px = fRow * 113 + 14
        } else if (followmouse === "gkmc") {
            gkmcPx = fRow * 113 + 14
        } else if (followmouse === "tpab") {
            tpabPx = fRow * 113 + 14
        } else if (followmouse === "uu") {
            uuPx = fRow * 113 + 14
        } else if (followmouse === "damn") {
            damnPx = fRow * 113 + 14 
        }
    } else {
        odPy = -1000;
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

function whichImg(num) {
    if (followmouse === "od") {
        odPy = num;
    }
    if (followmouse === "s80") {
        s80Py = num;
    }
    if (followmouse === "gkmc") {
        gkmcPy = num;
    }
    if (followmouse === "tpab") {
        tpabPy = num;
    }
    if (followmouse === "uu") {
        uuPy = num;
    }
    if (followmouse === "damn") {
        damnPy = num;
    }
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
    if (followmouse != "none") {
        if (mousey < 127) {
            sRow++;
        } else if (mousey < 247) {
            aRow++;

        } else if (mousey < 367) {
            bRow++;

        } else if (mousey < 487) {
            cRow++;

        } else if (mousey < 607) {
            dRow++;

        } else if (mousey < 727) {
            eRow++;

        } else if (mousey < 847) {
            fRow++;

        } else {
            bottom++;
        }
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
    if (followmouse != "none") {
        if (mousey < 127) {
            sRow--;
        } else if (mousey < 247) {
            aRow--;

        } else if (mousey < 367) {
            bRow--;

        } else if (mousey < 487) {
            cRow--;

        } else if (mousey < 607) {
            dRow--;

        } else if (mousey < 727) {
            eRow--;

        } else if (mousey < 847) {
            fRow--;

        } else {
            bottom--;
        }
    }
}



function mousemovemanager(event) {
    let cnvRect = cnv.getBoundingClientRect();
    mousex = event.x - cnvRect.x
    mousey = event.y - cnvRect.y
}
