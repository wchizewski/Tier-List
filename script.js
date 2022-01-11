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
let followmouse = "none";
let sRow = 1;
let aRow = 1;
let bRow = 1;
let cRow = 1;
let dRow = 1;
let eRow = 1;
let fRow = 1;
let bottom = 1;
let imgEdge;

function newImg(x, y, w, h, row, stay, prow) {
    return {
        x: x,
        y: y,
        w: w,
        h: h,
        row: row,
        stay: stay,
        prow: prow,
    }
}

let od = newImg(127, 847, 113, 113)
let s80 = newImg(240, 847, 113, 113)
let gkmc = newImg(353, 847, 113, 113)
let tpab = newImg(466, 847, 113, 113)
let uu = newImg(579, 847, 113, 113)
let damn = newImg(692, 847, 113, 113)
let odP = newImg(127, 847, 113, 113, "bottom", true, "bottom");
let s80P = newImg(240, 847, 113, 113, "bottom", true, "bottom");
let gkmcP = newImg(353, 847, 113, 113, "bottom", true, "bottom");
let tpabP = newImg(466, 847, 113, 113, "bottom", true, "bottom");
let uuP = newImg(579, 847, 113, 113, "bottom", true, "bottom");
let damnP = newImg(692, 847, 113, 113, "bottom", true, "bottom");

function imgxHandler(anImgP) {
    anImgP.prow = anImgP.row;
    if (anImgP.y < 127) {
        anImgP.row = "S"
    } else if (anImgP.y < 247) {
        anImgP.row = "A"
    } else if (anImgP.y < 367) {
        anImgP.row = "B"
    } else if (anImgP.y < 487) {
        anImgP.row = "C"
    } else if (anImgP.y < 607) {
        anImgP.row = "D"
    } else if (anImgP.y < 727) {
        anImgP.row = "E"
    } else if (anImgP.y < 847) {
        anImgP.row = "F"
    } else {
        anImgP.row = "bottom"
    }
}

function previewYHandler(anImgP) {
    anImgP.y = ((Math.floor(mousey / 120))) * 120 + 7
}

function mover(anImgP) {
    // if (anImgP.prow != anImgP.row) {
    //     anImgP.x = 805
    // }
    if (anImgP.row === "bottom") {
        anImgP.stay = true;
    } else if (anImgP.x === 127) {
        anImgP.stay = true;
    } else if ((anImgP.x === odP.x + odP.w && anImgP.row === odP.row) || (anImgP.x === s80P.x + s80P.w && anImgP.row === s80P.row) || (anImgP.x === gkmcP.x + gkmcP.w && anImgP.row === gkmcP.row) || (anImgP.x === tpabP.x + tpabP.w && anImgP.row === tpabP.row) || (anImgP.x === uuP.x + uuP.w && anImgP.row === uuP.row) || (anImgP.x === damnP.x + damnP.w && anImgP.row === damnP.row)) {
        anImgP.stay = true;
    } else if (anImgP.prow != anImgP.row) {
        anImgP.x = 805
    } else {
        anImgP.stay = false;
    }
    while (anImgP.stay === false) {
        anImgP.x -= 113;
        if (anImgP.x <= 127) {
            anImgP.x = 127;
            anImgP.stay = true;
        }
    }
}

requestAnimationFrame(loop);
function loop() {
    if (followmouse === "od") {
        od.x = mousex - 56.5
        od.y = mousey - 56.5
        previewYHandler(odP);
    }
    if (followmouse === "s80") {
        s80.x = mousex - 56.5
        s80.y = mousey - 56.5
        previewYHandler(s80P);
    }
    if (followmouse === "gkmc") {
        gkmc.x = mousex - 56.5
        gkmc.y = mousey - 56.5
        previewYHandler(gkmcP);
    }
    if (followmouse === "tpab") {
        tpab.x = mousex - 56.5
        tpab.y = mousey - 56.5
        previewYHandler(tpabP);
    }
    if (followmouse === "uu") {
        uu.x = mousex - 56.5
        uu.y = mousey - 56.5
        previewYHandler(uuP);
    }
    if (followmouse === "damn") {
        damn.x = mousex - 56.5
        damn.y = mousey - 56.5
        previewYHandler(damnP);
    }

    mover(odP);
    mover(s80P);
    mover(gkmcP);
    mover(tpabP);
    mover(uuP);
    mover(damnP);

    if (followmouse === "od") {
        imgxHandler(odP);
    }
    if (followmouse === "s80") {
        imgxHandler(s80P);
    }
    if (followmouse === "gkmc") {
        imgxHandler(gkmcP);
    }
    if (followmouse === "tpab") {
        imgxHandler(tpabP);
    }
    if (followmouse === "uu") {
        imgxHandler(uuP);
    }
    if (followmouse === "damn") {
        imgxHandler(damnP);
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

    console.log("row: " + odP.row, "prow: " + odP.prow)

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
    ctx.drawImage(odImg, od.x, od.y, od.w, od.h)
    ctx.drawImage(s80Img, s80.x, s80.y, s80.w, s80.h)
    ctx.drawImage(gkmcImg, gkmc.x, gkmc.y, gkmc.w, gkmc.h)
    ctx.drawImage(uuImg, uu.x, uu.y, uu.w, uu.h)
    ctx.drawImage(damnImg, damn.x, damn.y, damn.w, damn.h)
    ctx.drawImage(tpabImg, tpab.x, tpab.y, tpab.w, tpab.h)

    ctx.globalAlpha = 0.4
    ctx.drawImage(odImg, odP.x, odP.y, 113, 113)
    ctx.drawImage(s80Img, s80P.x, s80P.y, 113, 113)
    ctx.drawImage(gkmcImg, gkmcP.x, gkmcP.y, 113, 113)
    ctx.drawImage(uuImg, uuP.x, uuP.y, 113, 113)
    ctx.drawImage(damnImg, damnP.x, damnP.y, 113, 113)
    ctx.drawImage(tpabImg, tpabP.x, tpabP.y, 113, 113)
    ctx.globalAlpha = 1

    if (!mouseisclicked) {
        if (followmouse != "od") {
            od.x = odP.x
            od.y = odP.y
        }
        if (followmouse != "s80") {
            s80.x = s80P.x
            s80.y = s80P.y
        }
        if (followmouse != "gkmc") {
            gkmc.x = gkmcP.x
            gkmc.y = gkmcP.y
        }
        if (followmouse != "tpab") {
            tpab.x = tpabP.x
            tpab.y = tpabP.y
        }
        if (followmouse != "uu") {
            uu.x = uuP.x
            uu.y = uuP.y
        }
        if (followmouse != "damn") {
            damn.x = damnP.x
            damn.y = damnP.y
        }
    }
    requestAnimationFrame(loop);
}

// event listrebnersd
document.addEventListener("mousemove", mousemovemanager);
document.addEventListener("mousedown", mousedownmanager);
document.addEventListener("mouseup", mouseupmanager);

function whenthemousegoesup(anImgP) {
    if (anImgP.row === "S") {
        sRow++;
    } else if (anImgP.row === "A") {
        aRow++;
    } else if (anImgP.row === "B") {
        bRow++;
    } else if (anImgP.row === "C") {
        cRow++;
    } else if (anImgP.row === "D") {
        dRow++;
    } else if (anImgP.row === "E") {
        eRow++;
    } else if (anImgP.row === "F") {
        fRow++;
    } else {
        bottom++;
    }
}

function whenthemousegoesdown(anImgP) {
    if (anImgP.row === "S") {
        sRow--;
    } else if (anImgP.row === "A") {
        aRow--;
    } else if (anImgP.row === "B") {
        bRow--;
    } else if (anImgP.row === "C") {
        cRow--;
    } else if (anImgP.row === "D") {
        dRow--;
    } else if (anImgP.row === "E") {
        eRow--;
    } else if (anImgP.row === "F") {
        fRow--;
    } else {
        bottom--;
    }
}


function mouseupmanager() {
    if (followmouse === "od") {
        whenthemousegoesup(odP);
    }
    if (followmouse === "s80") {
        whenthemousegoesup(s80P);
    }
    if (followmouse === "gkmc") {
        whenthemousegoesup(gkmcP);
    }
    if (followmouse === "tpab") {
        whenthemousegoesup(tpabP);
    }
    if (followmouse === "uu") {
        whenthemousegoesup(uuP);
    }
    if (followmouse === "damn") {
        whenthemousegoesup(damnP);
    }
    followmouse = "none"
    mouseisclicked = false;
}

function mousedownmanager() {
    mouseisclicked = true;
    if (mouseisclicked && mousex > od.x && mousex < od.x + 113 && mousey > od.y && mousey < od.y + 113) {
        followmouse = "od"
    }
    if (mouseisclicked && mousex > s80.x && mousex < s80.x + 113 && mousey > s80.y && mousey < s80.y + 113) {
        followmouse = "s80"
    }
    if (mouseisclicked && mousex > gkmc.x && mousex < gkmc.x + 113 && mousey > gkmc.y && mousey < gkmc.y + 113) {
        followmouse = "gkmc"
    }
    if (mouseisclicked && mousex > tpab.x && mousex < tpab.x + 113 && mousey > tpab.y && mousey < tpab.y + 113) {
        followmouse = "tpab"
    }
    if (mouseisclicked && mousex > uu.x && mousex < uu.x + 113 && mousey > uu.y && mousey < uu.y + 113) {
        followmouse = "uu"
    }
    if (mouseisclicked && mousex > damn.x && mousex < damn.x + 113 && mousey > damn.y && mousey < damn.y + 113) {
        followmouse = "damn"
    }
    if (followmouse === "od") {
        whenthemousegoesdown(odP);
    }
    if (followmouse === "s80") {
        whenthemousegoesdown(s80P);
    }
    if (followmouse === "gkmc") {
        whenthemousegoesdown(gkmcP);
    }
    if (followmouse === "tpab") {
        whenthemousegoesdown(tpabP);
    }
    if (followmouse === "uu") {
        whenthemousegoesdown(uuP);
    }
    if (followmouse === "damn") {
        whenthemousegoesdown(damnP);
    }
}

function mousemovemanager(event) {
    let cnvRect = cnv.getBoundingClientRect();
    mousex = event.x - cnvRect.x
    mousey = event.y - cnvRect.y
}