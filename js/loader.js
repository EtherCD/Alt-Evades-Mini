const random = (min, max) => Math.random() * (max - min) + min;

const combineColors = (bg, color) => `rgb(${[Math.round((1 - color[3]) * bg[0] + color[3] * color[0]), Math.round((1 - color[3]) * bg[1] + color[3] * color[1]), Math.round((1 - color[3]) * bg[2] + color[3] * color[2])].join()})`

function mixColors(t, e) {
    var i = t[3] / 255;
    var a = e[3] / 255;
    var n = [];
    var r = 1 - (1 - a) * (1 - i);
    return n[0] = Math.round(e[0] * a / r + t[0] * i * (1 - a) / r), n[1] = Math.round(e[1] * a / r + t[1] * i * (1 - a) / r), n[2] = Math.round(e[2] * a / r + t[2] * i * (1 - a) / r), n[3] = r, n
}

let world_name = "Missing Map"
let map = {
    "1": {
        "zones": [
            {
                "type": "spawner",
                "x": "0t",
                "y": "0t",
                "w": "16t",
                "h": "16t",
                "enemies": [
                ]
            },
            {
                "type": "save",
                "x": "0t",
                "y": "0t",
                "w": "4t",
                "h": "4t"
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "0t",
                "w": "1t",
                "h": "4t"
            },
            {
                "type": "teleport",
                "x": "5t",
                "y": "0t",
                "w": "1t",
                "h": "4t",
                "tpArea": "_next",
                "translate": {
                    "x": "0t",
                    "y": "0t",
                    "w": "0t",
                    "h": "0t"
                }
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "4t",
                "w": "8t",
                "h": "8t"
            }
        ],
        "properties": {
            "size": {
                "width": 16,
                "height": 16
            },
            "msg": "No cheats! ;}"
        }
    },
    "2": {
        "zones": [
            {
                "type": "spawner",
                "x": "0t",
                "y": "0t",
                "w": "16t",
                "h": "16t",
                "enemies": []
            },
            {
                "type": "save",
                "x": "0t",
                "y": "0t",
                "w": "4t",
                "h": "4t"
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "0t",
                "w": "1t",
                "h": "4t"
            },
            {
                "type": "teleport",
                "x": "1t",
                "y": "0t",
                "w": "2t",
                "h": "1t",
                "tpArea": "_prev",
                "translate": {
                    "x": "5t",
                    "y": "0t",
                    "w": "1t",
                    "h": "4t"
                }
            },
            {
                "type": "teleport",
                "x": "5t",
                "y": "0t",
                "w": "1t",
                "h": "4t",
                "tpArea": "_next",
                "translate": {
                    "x": "0t",
                    "y": "0t",
                    "w": "0t",
                    "h": "0t"
                }
            },
            {
                "type": "teleport",
                "x": "1tn",
                "y": "1tn",
                "w": "1t",
                "h": "1t",
                "tpArea": "_next",
                "translate": {
                    "x": "0t",
                    "y": "0t",
                    "w": "0t",
                    "h": "0t"
                }
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "4t",
                "w": "8t",
                "h": "8t"
            },
            {
                "type": "wall",
                "x": "0t",
                "y": "4t",
                "w": "2t",
                "h": "4t"
            },
            {
                "type": "wall",
                "x": "3t",
                "y": "6t",
                "w": "2t",
                "h": "4t"
            },
            {
                "type": "wall",
                "x": "1t",
                "y": "9t",
                "w": "4t",
                "h": "1t"
            },
            {
                "type": "wall",
                "x": "0t",
                "y": "11t",
                "w": "3t",
                "h": "1t"
            },
            {
                "type": "wall",
                "x": "1t",
                "y": "13t",
                "w": "2t",
                "h": "2t"
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "12t",
                "w": "1t",
                "h": "3t"
            },
            {
                "type": "wall",
                "x": "6t",
                "y": "13t",
                "w": "1t",
                "h": "3t"
            },
            {
                "type": "wall",
                "x": "8t",
                "y": "12t",
                "w": "1t",
                "h": "3t"
            },
            {
                "type": "wall",
                "x": "10t",
                "y": "13t",
                "w": "1t",
                "h": "3t"
            },
            {
                "type": "wall",
                "x": "12t",
                "y": "13t",
                "w": "4t",
                "h": "2t"
            },
            {
                "type": "wall",
                "x": "4tn",
                "y": "4t",
                "w": "3t",
                "h": "1t"
            },
            {
                "type": "wall",
                "x": "3tn",
                "y": "6t",
                "w": "2t",
                "h": "7t"
            },
            {
                "type": "teleport",
                "x": "1tn",
                "y": "4tn",
                "w": "1t",
                "h": "1t"
            },
            {
                "type": "wall",
                "x": "8t",
                "y": "1t",
                "w": "8t",
                "h": "2t"
            },
            {
                "type": "wall",
                "x": "6t",
                "y": "1t",
                "w": "1t",
                "h": "3t"
            },
            {
                "type": "teleport",
                "x": "15t",
                "y": "0t",
                "w": "1t",
                "h": "1t"
            }
        ],
        "properties": {
            "size": {
                "width": 16,
                "height": 16
            }
        }
    },
    "3": {
        "zones": [
            {
                "type": "spawner",
                "x": "0t",
                "y": "0t",
                "w": "16t",
                "h": "16t",
                "enemies": [
                ]
            },
            {
                "type": "save",
                "x": "0t",
                "y": "0t",
                "w": "4t",
                "h": "4t"
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "0t",
                "w": "1t",
                "h": "4t"
            },
            {
                "type": "teleport",
                "x": "1t",
                "y": "0t",
                "w": "2t",
                "h": "1t",
                "tpArea": "_prev",
                "translate": {
                    "x": "5t",
                    "y": "0t",
                    "w": "1t",
                    "h": "4t"
                }
            },
            {
                "type": "teleport",
                "x": "5t",
                "y": "0t",
                "w": "1t",
                "h": "4t",
                "tpArea": "_next",
                "translate": {
                    "x": "0t",
                    "y": "0t",
                    "w": "0t",
                    "h": "0t"
                }
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "4t",
                "w": "8t",
                "h": "8t"
            },
            {
                "type": "inversivity",
                "x": "0t",
                "y": "4t",
                "w": "16t",
                "h": "12t"
            }
        ],
        "properties": {
            "size": {
                "width": 16,
                "height": 16
            },
            "msg": "Oh NO! Inversivity!"
        }
    },
    "4": {
        "zones": [
            {
                "type": "spawner",
                "x": "0t",
                "y": "0t",
                "w": "16t",
                "h": "16t",
                "enemies": [
                ]
            },
            {
                "type": "save",
                "x": "0t",
                "y": "0t",
                "w": "4t",
                "h": "4t"
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "0t",
                "w": "1t",
                "h": "4t"
            },
            {
                "type": "teleport",
                "x": "1t",
                "y": "0t",
                "w": "2t",
                "h": "1t",
                "tpArea": "_prev",
                "translate": {
                    "x": "5t",
                    "y": "0t",
                    "w": "1t",
                    "h": "4t"
                }
            },
            {
                "type": "teleport",
                "x": "5t",
                "y": "0t",
                "w": "1t",
                "h": "4t",
                "tpArea": "_next",
                "translate": {
                    "x": "0t",
                    "y": "0t",
                    "w": "0t",
                    "h": "0t"
                }
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "4t",
                "w": "8t",
                "h": "8t"
            },
            {
                "type": "slowdown",
                "x": "0t",
                "y": "4t",
                "w": "8t",
                "h": "12t",
                "slowdown": 2
            },
            {
                "type": "slowdown",
                "x": "8t",
                "y": "4t",
                "w": "8t",
                "h": "12t",
                "slowdown": -2
            }
        ],
        "properties": {
            "size": {
                "width": 16,
                "height": 16
            },
            "msg": "Slowdown or Acceleration?"
        }
    },
    "5": {
        "zones": [
            {
                "type": "spawner",
                "x": "0t",
                "y": "0t",
                "w": "16t",
                "h": "16t",
                "enemies": [
                ]
            },
            {
                "type": "save",
                "x": "0t",
                "y": "0t",
                "w": "4t",
                "h": "4t"
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "0t",
                "w": "1t",
                "h": "4t"
            },
            {
                "type": "teleport",
                "x": "1t",
                "y": "0t",
                "w": "2t",
                "h": "1t",
                "tpArea": "_prev",
                "translate": {
                    "x": "5t",
                    "y": "0t",
                    "w": "1t",
                    "h": "4t"
                }
            },
            {
                "type": "teleport",
                "x": "5t",
                "y": "0t",
                "w": "1t",
                "h": "4t",
                "tpArea": "_next",
                "translate": {
                    "x": "0t",
                    "y": "0t",
                    "w": "0t",
                    "h": "0t"
                }
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "4t",
                "w": "8t",
                "h": "8t"
            },
            {
                "type": "magnetism",
                "x": "0t",
                "y": "4t",
                "w": "8t",
                "h": "12t",
                "magnite": true,
                "efSpeed": 10
            },
            {
                "type": "magnetism",
                "x": "8t",
                "y": "4t",
                "w": "8t",
                "h": "12t",
                "magnite": false,
                "efSpeed": 10
            }
        ],
        "properties": {
            "size": {
                "width": 16,
                "height": 16
            },
            "msg": "Magnetism or Attraction?"
        }
    },
    "6": {
        "zones": [
            {
                "type": "spawner",
                "x": "0t",
                "y": "0t",
                "w": "16t",
                "h": "16t",
                "enemies": [
                ]
            },
            {
                "type": "save",
                "x": "0t",
                "y": "0t",
                "w": "4t",
                "h": "4t"
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "0t",
                "w": "1t",
                "h": "4t"
            },
            {
                "type": "teleport",
                "x": "1t",
                "y": "0t",
                "w": "2t",
                "h": "1t",
                "tpArea": "_prev",
                "translate": {
                    "x": "5t",
                    "y": "0t",
                    "w": "1t",
                    "h": "4t"
                }
            },
            {
                "type": "teleport",
                "x": "5t",
                "y": "0t",
                "w": "1t",
                "h": "4t",
                "tpArea": "_next",
                "translate": {
                    "x": "0t",
                    "y": "0t",
                    "w": "0t",
                    "h": "0t"
                }
            },
            {
                "type": "wall",
                "x": "4t",
                "y": "4t",
                "w": "8t",
                "h": "8t"
            },
            {
                "type": "storm",
                "x": "0t",
                "y": "0t",
                "w": "16t",
                "h": "16t",
                "dir": 1,
                "efSpeed": 10
            }
        ],
        "properties": {
            "size": {
                "width": 16,
                "height": 16
            },
            "msg": "Storm.. (With efSpeed)"
        }
    },
    "datas": {
        "fillStyle": "#969696",
        "title": {
            "fillStyle": "#fff",
            "strokeStyle": "#969696"
        }
    }
}

let etypes = {
    'normal': {
        "color": '#787878'
    },
    'spiral': {
        "color": '#D1C732'
    },
    'dasher': {
        "color": '#6789EF'
    },
    'rush': {
        "color": "#ecc4ef"
    },
    'black': {
        "color": 'black'
    },
    'wall': {
        "color": '#222222'
    },
    'slower': {
        "color": 'red'
    },
    'draining': {
        "color": 'blue'
    },
    'disabler': {
        "color": '#A87C86',
        "auraAlpha": 0.5,
        "auraColor": "rgb(255, 191, 206)"
    },
    'superSlower': {
        "color": '#64C1B9',
        "auraAlpha": 0.3
    },
    'shutter': {
        "color": '#003c66'
    },
    'snow': {
        "color": "#adf8ff"
    },
    'snowWarp': {
        "color": '#93C1F5'
    },
    'sizer': {
        "color": '#F27743'
    },
    'mine': {
        "color": '#b4b83f'
    },
    'sniper': {
        "color": '#A05353'
    },
    'iceSniper': {
        "color": '#8C01B7'
    },
    'iceOctoSniper': {
        "color": '#4C0094'
    },
    'iceAcroSniper': {
        "color": '#4B0082'
    },
    'iceDiagSniper': {
        "color": '#6d00bd'
    },
    'acrossSniper': {
        "color": '#B95069'
    },
    'diagonalSniper': {
        "color": '#A9203E'
    },
    'octoSniper': {
        "color": '#D3134F'
    },
    'growing': {
        "color": '#70E099'
    },
    'changer': {
        "color": '#565656'
    },
    'wine': {
        "color": '#1E5945'
    },
    'bee': {
        "color": '#A0780A'
    },
    'warpe': {
        "color": '#4E1609'
    },
    'invisible': {
        "color": '#8A7F8E'
    },
    'oscillating': {
        "color": '#869E0F'
    },
    'zoning': {
        "color": '#A03811'
    },
    'toning': {
        "color": '#9B111E'
    },
    'beeSniper': {
        "color": '#846A20'
    },
    'beeOctoSniper': {
        "color": '#704214'
    },
    'beeDiagSniper': {
        "color": '#593315'
    },
    'beeAcroSniper': {
        "color": '#714B23'
    },
    'flame': {
        "color": '#D53E07'
    },
    'lava': {
        "color": '#A8490A'
    },
    'crossive': {
        "color": '#00EB00'
    },
    'crossiveSniper': {
        "color": '#61FF61'
    },
    'rapiditySniper': {
        "color": '#8C01B7'
    },
    'shield': {
        "color": '#29FFC6',
        "auraAlpha": 0.5
    },
    "turret": {
        "color": "#C90000",
        "auraColor": "#BEC8DD"
    },
    'hell': {
        "color": '#2e0000'
    },
    'pumpkin': {
        "color": '#ff8d18'
    },
    'pull': {
        "color": '#78148C'
    },
    'push': {
        "color": '#7B9DB2'
    },
    'slippery': {
        "color": '#1AACBF',
        "auraAlpha": 0.5
    },
    'snowHorizontal': {
        "color": "#adf8ff"
    },
    'blackWall': {
        "color": '#ffff00'
    },
    'telper': {
        "color": "#FFDB58"
    },
    'telperSniper': {
        "color": '#FDEAA8'
    },
    'doctor': {
        "color": '#ff2d0f'
    },
    'immuneteric': {
        "color": '#A5A5A5'
    },
    'repulsiveGhost': {
        "color": '#9DE3C6'
    },
    'rapidityGhost': {
        "color": '#8C01B7'
    },
    'disableGhost': {
        "color": '#F7B7C6'
    },
    'stretching': {
        "color": '#4d0163',
        "auraAlpha": 0.3
    },
    'switcher': {
        "color": '#FAF46E'
    },
    'stepped': {
        "color": '#B371F2'
    },
    'wagging': {
        "color": '#DD2606'
    },
    'ghost': {
        "color": '#86D7DB'
    },
    "toxic": {
        "color": "#00C700",
        "auraAlpha": 0.2
    },
    "speedSniper": {
        "color": "#FF9000"
    },
    "regenSniper": {
        "color": "#00CC8E"
    },
    "turning": {
        "color": "#29521A"
    },
    "wavy": {
        "color": "#B11E1F"
    },
    "glSizer": {
        "color": "#A65E2E"
    }
}

function loadFileMap(selectedFile) {
    let fr = new FileReader();
    fr.onload = (e) => {
        let lines = e.target.result;
        if (selectedFile.name.endsWith(".json")) {
            world_name = selectedFile.name.slice(0, -5)
            var newArr = JSON.parse(lines);
            map = newArr
        }
        if (selectedFile.name.endsWith(".yaml")
            || selectedFile.name.endsWith(".yml")) {
            if (selectedFile.name.endsWith(".yaml"))
                world_name = selectedFile.name.slice(0, -5)
            else world_name = selectedFile.name.slice(0, -4)
            var newArr = YAML.parse(lines);
            map = newArr
        }
        localStorage.oldFile = selectedFile
    };
    fr.readAsText(selectedFile);
}