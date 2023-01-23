let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let screen = {
    offX: 10,
    offY: 10,
    drawCircle: function (x, y, r, color) {
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.arc(x - this.xOff, y - this.yOff, r, 0, 2 * Math.PI);
        ctx.fill()
        ctx.closePath()
    },
    drawRect: function (x, y, w, h, color) {
        ctx.fillStyle = color
        ctx.fillRect(x - this.xOff, y - this.yOff, w, h)
    },
    drawLine: function (x1, y1, x2, y2, color, width) {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.moveTo(x1 - this.xOff, y1 - this.yOff)
        ctx.lineTo(x2 - this.xOff, y2 - this.yOff)
        ctx.stroke()
        ctx.closePath()
    },
    drawText: function (text, x, y, color, background) {
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.textAlign = "center"
        ctx.lineWidth = 6
        ctx.font = "bold 35px Tahoma, Verdana, Segoe, sans-serif"
        ctx.strokeStyle = background
        ctx.strokeText(text, x, y)
        ctx.fillText(text, x, y)
        ctx.closePath()
    },
    follow: function (obj) {
        let xOffset = obj.x - (canvas.width / 2);
        let yOffset = obj.y - (canvas.height / 2);

        this.xOff = xOffset;
        this.yOff = yOffset;
    }
}

const player = {
    x: 10,
    y: 10,
    radius: 15,
    speed: 17,
    movement: {
        "left": false, "right": false,
        "top": false, "down": false,
        "shift": false, "mouse": false,
        "mouX": 0, "mouY": 0,
        "z": false
    },
    firstAbilityTimer: 0,
    color: [255, 0, 0, 1],
    noColide: false,
    move: function () {
        let shiftCoef = this.movement.shift ? 0.5 : 1
        let move = false
        if (!this.movement.mouse) {
            if (this.movement.top) {
                this.y -= (this.speed / 2) * shiftCoef; move = true
            }
            if (this.movement.down) {
                this.y += (this.speed / 2) * shiftCoef; move = true
            }
            if (this.movement.left) {
                this.x -= (this.speed / 2) * shiftCoef; move = true
            }
            if (this.movement.right) {
                this.x += (this.speed / 2) * shiftCoef; move = true
            }
        }
        if (this.movement.mouse) {
            let angle = Math.atan2(this.movement.mouY, this.movement.mouX)
            let distance = this.d(0, 0, this.movement.mouX, this.movement.mouY) / 15
            let speedX = (Math.cos(angle) * (Math.min(this.speed, distance) * shiftCoef) / 2)
            let speedY = (Math.sin(angle) * (Math.min(this.speed, distance) * shiftCoef) / 2)
            this.x += speedX
            this.y += speedY
            move = true
        }
        return move
    },
    d: function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
    },
    initKeys: function () {
        document.addEventListener("keydown", (event) => {
            console.log(event.keyCode)
            if (!event.repeat) {
                if (event.keyCode == 87 || event.keyCode == 38)
                    player.movement.top = true
                if (event.keyCode == 83 || event.keyCode == 40)
                    player.movement.down = true
                if (event.keyCode == 65 || event.keyCode == 37)
                    player.movement.left = true
                if (event.keyCode == 68 || event.keyCode == 39)
                    player.movement.right = true
                if (event.keyCode == 16)
                    player.movement.shift = true
                if (event.keyCode == 86) {
                    player.noColide = !player.noColide
                    if (player.noColide)
                        player.color = mixColors([255, 0, 0, 255], [117, 28, 160, 159])
                    else player.color = [255, 0, 0, 1]
                }
                if (event.keyCode == 90) {
                    player.movement.z = !player.movement.z
                    if (!player.movement.z) {
                        player.speed = 17
                        this.firstAbilityTimer = 0
                    }
                }
                if (event.keyCode == 69 && MAP.arrayMap[MAP.area - 1] != undefined) {
                    MAP.changeArea(MAP.area - 1)
                    this.x = 150
                }
                if (event.keyCode == 82 && MAP.arrayMap[MAP.area + 1] != undefined) {
                    MAP.changeArea(MAP.area + 1)
                    this.x = 150
                }
            }
        })
        document.addEventListener("keyup", (event) => {
            if (event.keyCode == 87 || event.keyCode == 38)
                player.movement.top = false
            if (event.keyCode == 83 || event.keyCode == 40)
                player.movement.down = false
            if (event.keyCode == 65 || event.keyCode == 37)
                player.movement.left = false
            if (event.keyCode == 68 || event.keyCode == 39)
                player.movement.right = false
            if (event.keyCode == 16)
                player.movement.shift = false
        })
        document.addEventListener("mousedown", event => {
            if (event.buttons == 1)
                player.movement.mouse = !player.movement.mouse
        })
        document.addEventListener("mousemove", event => {
            if (player.movement.mouse) {
                player.movement.mouX = Math.round((event.pageX - document.documentElement.clientWidth / 2) * 100) / 100
                player.movement.mouY = Math.round((event.pageY - document.documentElement.clientHeight / 2) * 100) / 100
            }
        })
    },
    update: function () {
        let move = this.move()
        if (!move || this.speed > 30) { this.firstAbilityTimer = 0; this.speed = 17 }
        if (this.movement.z && move) {
            this.firstAbilityTimer += 1 / 500
            this.speed += this.firstAbilityTimer
        }
    },
    draw: function () {
        screen.drawCircle(this.x, this.y, this.radius, `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.color[3]})`)
    }
}

function Enemie({ x, y, w, h, radius, speed }) {
    this.x = random(x, w + x)
    this.y = random(y, h + y)
    this.sx = x
    this.sy = y
    this.sw = w
    this.sh = h
    this.radius = radius
    this.angle = Math.random()
    this.speed = speed / 10
    this.update = function () {
        this.x += (Math.cos(this.angle * Math.PI * 2) * this.speed) / 2;
        this.y += (Math.sin(this.angle * Math.PI * 2) * this.speed) / 2;
        if (this.x - this.radius <= this.sx || this.x + this.radius >= this.sw + this.sx) {
            let t = (1 / 360 * 180) - this.angle
            this.angle = t + 180;
            if (this.x - this.radius <= this.sx) {
                this.x = this.radius + this.sx
            }
            if (this.x + this.radius >= this.sx + this.sw) {
                this.x = this.sx + this.sw - this.radius
            }
        }
        if (this.y - this.radius <= this.sy || this.y + this.radius >= this.sy + this.sh) {
            let t = (1 / 360 * 0) - this.angle
            this.angle = t + 180;
            if (this.y - this.radius <= this.sy) {
                this.y = this.radius + this.sy
            }
            if (this.y + this.radius >= this.sy + this.sh) {
                this.y = this.sy + this.sh - this.radius
            }
        }
    }
    this.draw = function () {
        screen.drawCircle(this.x, this.y, this.radius, "#787878")
    }
}

function Zone({ x, y, w, h, type, Enemies, translate, tpArea }) {
    this.type = type
    this.handlingType = function (element, side) { if (typeof element == 'string') { if (element.endsWith('t')) { return element.slice(0, -1) * MAP.tile } else if (element.endsWith('tn')) { return side * MAP.tile - (element.slice(0, -2) * MAP.tile) } else return eval(element) } else { return element } }
    if (w)
        this.w = this.handlingType(w, MAP.width)
    if (h)
        this.h = this.handlingType(h, MAP.height)
    if (x)
        this.x = this.handlingType(x, MAP.width)
    if (y)
        this.y = this.handlingType(y, MAP.height)

    if (type == "spawner") {
        for (let e in Enemies) {
            for (let i = 0; i < Enemies[e].amount; i++) {
                MAP.enemies[e + i] = new Enemie({
                    x: this.x,
                    y: this.y,
                    w: this.w,
                    h: this.h,
                    radius: Enemies[e].radius,
                    speed: Enemies[e].speed
                })
            }
        }
    }
    if (tpArea == "_next") {
        if (MAP.arrayMap[MAP.area + 1] != undefined)
            this.tpArea = MAP.area + 1
    }
    else if (tpArea == "_prev") {
        if (MAP.arrayMap[MAP.area - 1] != undefined)
            this.tpArea = MAP.area - 1
    }
    else {
        if (MAP.arrayMap[tpArea] != undefined)
            this.tpArea = tpArea
    }
    this.translate = translate
    if (type == "teleport") {
        if (translate.w)
            this.translate.w = this.handlingType(translate.w, MAP.width)
        if (translate.h)
            this.translate.h = this.handlingType(translate.h, MAP.height)
        if (translate.x)
            this.translate.x = this.handlingType(translate.x, MAP.width)
        if (translate.y)
            this.translate.y = this.handlingType(translate.y, MAP.height)
    }
    this.lineal = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) < 0
    this.interactPlayer = function (player) {
        let { x: x1, y: y1, radius } = player
        if (this.checkOverlap(player.radius, player.x, player.y, this.x, this.y, this.w, this.h) && !player.noColide) {
            let side = this.checkSide(player)
            switch (side) {
                case "right": player.x = this.x + this.w + radius; break;
                case "top": player.y = this.y - radius; break;
                case "down": player.y = this.y + this.h + radius; break;
                case "left": player.x = this.x - radius; break;
            }
        }
    }
    this.interactEnemie = function (enemie) {
        let { x: x1, y: y1, radius } = enemie
        if (this.checkOverlap(enemie.radius, enemie.x, enemie.y, this.x + 1, this.y + 1, this.w - 2, this.h - 2)) {
            let side = this.checkSide(enemie)
            let t = 0
            switch (side) {
                case "right": enemie.x = this.x + this.w + radius + 1; t = (1 / 360 * 180) - enemie.angle; enemie.angle = t + 180; break;
                case "top": enemie.y = this.y - radius - 1; t = (1 / 360 * 0) - enemie.angle; enemie.angle = t + 180; break;
                case "down": t = (1 / 360 * 0) - enemie.angle; enemie.angle = t + 180; enemie.y = this.y + this.h + radius + 1; break;
                case "left": enemie.x = this.x - radius - 1; t = (1 / 360 * 180) - enemie.angle; enemie.angle = t + 180; break;
            }
        }
    }
    this.checkSide = function (element) {
        let { x: x1, y: y1, radius } = element
        if (
            this.lineal(
                { x: this.x, y: this.y },
                { x: this.x + this.w, y: this.y + this.h },
                { x: x1, y: y1 }
            )
        ) {
            if (
                this.lineal(
                    { x: this.x + this.w, y: this.y },
                    { x: this.x, y: this.y + this.h },
                    { x: x1, y: y1 }
                )
            ) {
                return "right"
            } else {
                return "top"
            }
        } else {
            if (
                this.lineal(
                    { x: this.x + this.w, y: this.y },
                    { x: this.x, y: this.y + this.h },
                    { x: x1, y: y1 }
                )
            ) {
                return "down"
            } else {
                return "left"
            }
        }
    }
    this.teleportPlayer = function (p) {
        if (this.checkOverlap(p.radius, p.x, p.y, this.x + 1, this.y + 1, this.w - 2, this.h - 2) && this.tpArea != undefined && !player.noColide) {
            MAP.changeArea(this.tpArea)
            /*if (this.translate.x != 0)
                player.x = this.translate.x
            if (this.translate.y != 0)
                player.y = this.translate.y*/
            let side = this.checkSide(p)
            if (side == "left") {
                p.x = this.translate.x + p.radius + 1 + 60
            } else if (side == "right") {
                p.x = (this.translate.x + this.translate.w - 60) - p.radius - 1
            } else if (side == "top") {
                p.y = (this.translate.y + p.radius - 60) + 1
            } else if (side == "down") {
                p.y = (this.translate.y + this.translate.h - 60) - p.radius - 1
            }
        }
    }
    this.checkOverlap = function (R, Xc, Yc, X, Y, W, H) {
        let Xn = Math.max(X, Math.min(Xc, X + W));
        let Yn = Math.max(Y, Math.min(Yc, Y + H));

        let Dx = Xn - Xc;
        let Dy = Yn - Yc;
        return (Dx * Dx + Dy * Dy) <= R * R;
    }
    this.draw = function () {
        let color = "#333"
        switch (this.type) {
            case "spawner": color = "rgba(156,156,156,0.25)"; break;
            case "slowdown": color = "rgba(136,211,198,0.25)"; break;
            case "inversivity": color = "rgba(167,60,227,0.6)"; break;
            case "storm": color = "rgba(242,165,60,0.6)"; break;
            case "save": color = "rgba(216,216,216,0.5)"; break;
            case "magnetism": color = "rgba(164,150,255,0.3)"; break;
            case "teleport": color = "rgba(217,183,63,0.3)"; break;
            default: color = "#333"; break;
        }
        screen.drawRect(this.x,
            this.y,
            this.w,
            this.h,
            color)
        for (let e in MAP.enemies) {
            MAP.enemies[e].draw()
        }
    }
    this.update = function (player) {
        if (this.type == "wall") {
            this.interactPlayer(player)
        }
        if (this.type == "teleport")
            this.teleportPlayer(player)
        for (let e in MAP.enemies) {
            if (this.type == "wall" || this.type == "save")
                this.interactEnemie(MAP.enemies[e])
            MAP.enemies[e].update()
        }
    }
}

const MAP = {
    arrayMap: {},
    area: 1,
    tile: 30,
    worldName: world_name,
    width: 80,
    height: 15,
    zones: [],
    enemies: [],
    tileColor: "",
    init: function (map) {
        this.arrayMap = map
        this.width = map[this.area].properties.size.width
        this.height = map[this.area].properties.size.height
        this.backgroundColor = parse(this.arrayMap[this.area].properties.fillStyle || this.arrayMap.datas.fillStyle).values
        this.tileColor = combineColors(this.backgroundColor, [0, 0, 0, 0.2]);
        for (let i in map[this.area].zones) {
            this.zones[i] = new Zone({
                x: map[this.area].zones[i].x,
                y: map[this.area].zones[i].y,
                w: map[this.area].zones[i].w,
                h: map[this.area].zones[i].h,
                type: map[this.area].zones[i].type,
                Enemies: map[this.area].zones[i].enemies,
                translate: map[this.area].zones[i].translate || {},
                tpArea: map[this.area].zones[i].tpArea
            })
        }
    },
    update: function () {
        if (player.x - player.radius < 0) {
            player.x = player.radius
        }
        if (
            player.x + player.radius >
            this.width * this.tile
        ) {
            player.x =
                this.width * this.tile -
                player.radius
        }
        if (player.y - player.radius < 0)
            player.y = +player.radius
        if (
            player.y + player.radius >
            this.height * this.tile
        )
            player.y =
                this.height * this.tile -
                player.radius
        for (let zone in this.zones)
            this.zones[zone].update(player)
    },
    changeArea: function (area) {
        this.area = area
        this.enemies = []
        this.zones = []
        this.init(this.arrayMap)
    },
    draw: function () {
        let size = this.arrayMap[this.area].properties.size
        screen.drawRect(0,
            0,
            size.width * this.tile,
            size.height * this.tile,
            this.arrayMap[this.area].properties.fillStyle || this.arrayMap.datas.fillStyle
        )
        for (let g = 0; g < size.width; g++)
            screen.drawLine(g * this.tile + screen.offX - 10, screen.offY - 10, g * this.tile + screen.offX - 10, size.height * this.tile + screen.offY - 10, this.tileColor, 2.5)
        for (let g = 0; g < size.height; g++)
            screen.drawLine(screen.offX - 10, g * this.tile, size.width * this.tile + screen.offX - 10, g * this.tile, this.tileColor, 2.5)
        for (let zone in this.zones)
            this.zones[zone].draw()
        screen.drawText(this.worldName + `: Area ${this.area}`,
            canvas.width / 2, 50, this.arrayMap.datas.title.fillStyle, this.arrayMap.datas.title.strokeStyle)
        if (this.arrayMap[this.area].properties.msg)
            screen.drawText(this.arrayMap[this.area].properties.msg,
                canvas.width / 2, canvas.height - 100, this.arrayMap.datas.title.fillStyle, this.arrayMap.datas.title.strokeStyle)
    },
}

player.initKeys()
MAP.init(map)

requestAnimationFrame(update)
function update() {
    requestAnimationFrame(update)

    ctx.clearRect(0, 0, 1280, 720)
    ctx.fillStyle = "#333"
    ctx.fillRect(0, 0, 1280, 720)

    player.update()
    MAP.update()
    screen.follow(player)
    MAP.draw()
    player.draw()
}