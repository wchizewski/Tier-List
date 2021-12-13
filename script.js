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

function newImg(x, y, w, h, row) {
    return {
        x: x,
        y: y,
        w: w,
        h: h,
        row: row,
    }
}

let od = newImg(0, 847, 113, 113, "bottom")
let s80 = newImg(113, 847, 113, 113, "bottom")
let gkmc = newImg(226, 847, 113, 113, "bottom")
let tpab = newImg(339, 847, 113, 113, "bottom")
let uu = newImg(452, 847, 113, 113, "bottom")
let damn = newImg(565, 847, 113, 113, "bottom")
let odP = newImg(0, 847, 113, 113, "bottom")
let s80P = newImg(113, 847, 113, 113, "bottom")
let gkmcP = newImg(226, 847, 113, 113, "bottom")
let tpabP = newImg(339, 847, 113, 113, "bottom")
let uuP = newImg(452, 847, 113, 113, "bottom")
let damnP = newImg(565, 847, 113, 113, "bottom")

function imgxHandler(anImgP) {
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

    if (anImgP.row === "S") {
        anImgP.x = sRow * 113 + 14;
    } else if (anImgP.row === "A") {
        anImgP.x = aRow * 113 + 14;
    } else if (anImgP.row === "B") {
        anImgP.x = bRow * 113 + 14;
    } else if (anImgP.row === "C") {
        anImgP.x = cRow * 113 + 14;
    } else if (anImgP.row === "D") {
        anImgP.x = dRow * 113 + 14;
    } else if (anImgP.row === "E") {
        anImgP.x = eRow * 113 + 14;
    } else if (anImgP.row === "F") {
        anImgP.x = fRow * 113 + 14;
    } else {
        anImgP.x = bottom * 113 + 14;
    }

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
    } else if (anImgP.row === "bottom") {
        bottom++;
    }
}

function previewYHandler(anImgP) {
    anImgP.y = ((Math.floor(mousey / 120))) * 120 + 7
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

    imgxHandler(odP);
    imgxHandler(s80P);
    imgxHandler(gkmcP);
    imgxHandler(tpabP);
    imgxHandler(uuP);
    imgxHandler(damnP);
    sRow = 1;
    aRow = 1;
    bRow = 1;
    cRow = 1;
    dRow = 1;
    eRow = 1;
    fRow = 1;
    bottom = -0.12;

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
    ctx.drawImage(odImg, od.x, od.y, od.w, od.h)
    ctx.drawImage(s80Img, s80.x, s80.y, s80.w, s80.h)
    ctx.drawImage(gkmcImg, gkmc.x, gkmc.y, gkmc.w, gkmc.h)
    ctx.drawImage(uuImg, uu.x, uu.y, uu.w, uu.h)
    ctx.drawImage(damnImg, damn.x, damn.y, damn.w, damn.h)
    ctx.drawImage(tpabImg, tpab.x, tpab.y, tpab.w, tpab.h)

    // if (mousey < 127) {
    //     whichImg(7);
    //     if (followmouse === "od") {
    //         odP.x = sRow * 113 + 14
    //     } else if (followmouse === "s80") {
    //         s80P.x = sRow * 113 + 14
    //     } else if (followmouse === "gkmc") {
    //         gkmcP.x = sRow * 113 + 14
    //     } else if (followmouse === "tpab") {
    //         tpabP.x = sRow * 113 + 14
    //     } else if (followmouse === "uu") {
    //         uuP.x = sRow * 113 + 14
    //     } else if (followmouse === "damn") {
    //         damnP.x = sRow * 113 + 14
    //     }
    // } else if (mousey < 247) {
    //     whichImg(127);
    //     if (followmouse === "od") {
    //         odP.x = aRow * 113 + 14
    //     } else if (followmouse === "s80") {
    //         s80P.x = aRow * 113 + 14
    //     } else if (followmouse === "gkmc") {
    //         gkmcP.x = aRow * 113 + 14
    //     } else if (followmouse === "tpab") {
    //         tpabP.x = aRow * 113 + 14
    //     } else if (followmouse === "uu") {
    //         uuP.x = aRow * 113 + 14
    //     } else if (followmouse === "damn") {
    //         damnP.x = aRow * 113 + 14
    //     }
    // } else if (mousey < 367) {
    //     whichImg(247);
    //     if (followmouse === "od") {
    //         odP.x = bRow * 113 + 14
    //     } else if (followmouse === "s80") {
    //         s80P.x = bRow * 113 + 14
    //     } else if (followmouse === "gkmc") {
    //         gkmcP.x = bRow * 113 + 14
    //     } else if (followmouse === "tpab") {
    //         tpabP.x = bRow * 113 + 14
    //     } else if (followmouse === "uu") {
    //         uuP.x = bRow * 113 + 14
    //     } else if (followmouse === "damn") {
    //         damnP.x = bRow * 113 + 14
    //     }
    // } else if (mousey < 487) {
    //     whichImg(367);
    //     if (followmouse === "od") {
    //         odP.x = cRow * 113 + 14
    //     } else if (followmouse === "s80") {
    //         s80P.x = cRow * 113 + 14
    //     } else if (followmouse === "gkmc") {
    //         gkmcP.x = cRow * 113 + 14
    //     } else if (followmouse === "tpab") {
    //         tpabP.x = cRow * 113 + 14
    //     } else if (followmouse === "uu") {
    //         uuP.x = cRow * 113 + 14
    //     } else if (followmouse === "damn") {
    //         damnP.x = cRow * 113 + 14
    //     }
    // } else if (mousey < 607) {
    //     whichImg(487);
    //     if (followmouse === "od") {
    //         odP.x = dRow * 113 + 14
    //     } else if (followmouse === "s80") {
    //         s80P.x = dRow * 113 + 14
    //     } else if (followmouse === "gkmc") {
    //         gkmcP.x = dRow * 113 + 14
    //     } else if (followmouse === "tpab") {
    //         tpabP.x = dRow * 113 + 14
    //     } else if (followmouse === "uu") {
    //         uuP.x = dRow * 113 + 14
    //     } else if (followmouse === "damn") {
    //         damnP.x = dRow * 113 + 14
    //     }
    // } else if (mousey < 727) {
    //     whichImg(607);
    //     if (followmouse === "od") {
    //         odP.x = eRow * 113 + 14
    //     } else if (followmouse === "s80") {
    //         s80P.x = eRow * 113 + 14
    //     } else if (followmouse === "gkmc") {
    //         gkmcP.x = eRow * 113 + 14
    //     } else if (followmouse === "tpab") {
    //         tpabP.x = eRow * 113 + 14
    //     } else if (followmouse === "uu") {
    //         uuP.x = eRow * 113 + 14
    //     } else if (followmouse === "damn") {
    //         damnP.x = eRow * 113 + 14
    //     }
    // } else if (mousey < 847) {
    //     whichImg(727);
    //     if (followmouse === "od") {
    //         odP.x = fRow * 113 + 14
    //     } else if (followmouse === "s80") {
    //         s80P.x = fRow * 113 + 14
    //     } else if (followmouse === "gkmc") {
    //         gkmcP.x = fRow * 113 + 14
    //     } else if (followmouse === "tpab") {
    //         tpabP.x = fRow * 113 + 14
    //     } else if (followmouse === "uu") {
    //         uuP.x = fRow * 113 + 14
    //     } else if (followmouse === "damn") {
    //         damnP.x = fRow * 113 + 14
    //     }
    // } else {
    //     odP.y = -1000;
    // }

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

// function whichImg(num) {
//     if (followmouse === "od") {
//         odP.y = num;
//     }
//     if (followmouse === "s80") {
//         s80P.y = num;
//     }
//     if (followmouse === "gkmc") {
//         gkmcP.y = num;
//     }
//     if (followmouse === "tpab") {
//         tpabP.y = num;
//     }
//     if (followmouse === "uu") {
//         uuP.y = num;
//     }
//     if (followmouse === "damn") {
//         damnP.y = num;
//     }
// }

// event listrebnersd
document.addEventListener("mousemove", mousemovemanager);
document.addEventListener("mousedown", mousedownmanager);
document.addEventListener("mouseup", mouseupmanager);

function mouseupmanager() {
    // if (followmouse === "od") {
    //     od.x = odP.x
    //     od.y = odP.y
    // } else if (followmouse === "s80") {
    //     s80.x = s80P.x
    //     s80.y = s80P.y
    // } else if (followmouse === "gkmc") {
    //     gkmc.x = gkmcP.x
    //     gkmc.y = gkmcP.y
    // } else if (followmouse === "tpab") {
    //     tpab.x = tpabP.x
    //     tpab.y = tpabP.y
    // } else if (followmouse === "uu") {
    //     uu.x = uuP.x
    //     uu.y = uuP.y
    // } else if (followmouse === "damn") {
    //     damn.x = damnP.x
    //     damn.y = damnP.y
    // }
    // if (followmouse != "none") {
    //     if (mousey < 127) {
    //         sRow++;
    //     } else if (mousey < 247) {
    //         aRow++;
    //     } else if (mousey < 367) {
    //         bRow++;
    //     } else if (mousey < 487) {
    //         cRow++;
    //     } else if (mousey < 607) {
    //         dRow++;
    //     } else if (mousey < 727) {
    //         eRow++;
    //     } else if (mousey < 847) {
    //         fRow++;
    //     } else {
    //         bottom++;
    //     }
    // }
    followmouse = "none"
    mouseisclicked = false;
}

function mousedownmanager() {
    mouseisclicked = true;
    if (mouseisclicked && mousex > od.x && mousex < od.x + 113 && mousey > od.y && mousey < od.y + 113) {
        followmouse = "od"
        console.log("yee")
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
}

function mousemovemanager(event) {
    let cnvRect = cnv.getBoundingClientRect();
    mousex = event.x - cnvRect.x
    mousey = event.y - cnvRect.y
}