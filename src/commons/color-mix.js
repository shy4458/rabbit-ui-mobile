const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENT = NUMBER + '%';

const rgbReg = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgbaReg = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, PERCENT));
const hslReg = new RegExp('hsl' + call(NUMBER, PERCENT, PERCENT));
const hslaReg = new RegExp('hsla' + call(NUMBER, PERCENT, PERCENT, NUMBER));
const hexRGBReg = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/;
const hexRGBAReg = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/;
const hexRRGGBBReg = /^#([0-9a-fA-F]{6})$/;
const hexRRGGBBAAReg = /^#([0-9a-fA-F]{8})$/;

function call(...args) {
    return '\\(\\s*(' + args.join(')\\s*,\\s*(') + ')\\s*\\)';
}

class Color {

    constructor(colorStr) {
        this.color = colorStr;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1.0;
        this.init(colorStr);
    }

    init(color) {
        let numColor;
        let match;
        if (typeof color === 'number') {
            if (color >= 0 && color <= 0xffffffff) {
                numColor = color;
            }
        } else {
            if ((match = hexRRGGBBReg.exec(color))) {
                numColor = match[1] + 'ff';
            } else if (colorNames.hasOwnProperty(color)) {
                numColor = colorNames[color];
            } else if ((match = rgbReg.exec(color))) {
                numColor = ((parse255(match[1]) << 24) |
                    (parse255(match[2]) << 16) |
                    (parse255(match[3]) << 8) |
                    0x000000ff)
            } else if ((match = rgbaReg.exec(color))) {
                numColor = ((parse255(match[1] << 24)) |
                    (parse255(match[2]) << 16) |
                    (parse255(match[3]) << 8) | (parseAlpha(match[4])));
            } else if ((match = hexRGBReg.exec(color))) {
                numColor = parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + 'ff', 16);
            } else if ((match = hexRRGGBBAAReg.exec(color))) {
                numColor = parseInt(match[1], 16);
            } else if ((match = hexRGBAReg.exec(color))) {
                numColor = parseInt(match[1] + match[1] +
                    match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16);
            }
        }
        if(numColor) {
            numColor = numColor.toString(16);
            this.r = parseInt('0x' + numColor.slice(0, 2));
            this.g = parseInt('0x' + numColor.slice(2, 4));
            this.b = parseInt('0x' + numColor.slice(4, 6));
            this.a = parseInt('0x' + numColor.slice(6, 8)) / 255;
        }
    }

}

function parse255(str) {
    const int = parseInt(str, 10);
    if (int < 0) {
        return 0;
    }
    if (int > 255) {
        return 255;
    }
    return int;
}

function parseAlpha(str) {
    let f = parseFloat(str);
    if(f < 0) {
        return 0;
    }
    if(f > 255) {
        return 255;
    }
    return Math.round(f * 255);
}

function mix(color1, color2, weight) {
    color1 = new Color(color1);
    color2 = new Color(color2);
    if (!weight) {
        weight = 50;
    }
    if(typeof weight === "number") {
        if(weight < 0) {
            weight = 0
        } else if(weight > 1) {
            weight = 1;
        }
        weight = weight * 100.0;
    } else {
        weight = parseInt(weight);
    }
    const p = weight / 100.0;
    const w = p * 2 - 1;
    const a = color1.a - color2.a;
    const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    const w2 = 1 - w1;

    const r = color1.r * w1 + color2.r * w2;
    const g = color1.g * w1 + color2.g * w2;
    const b = color1.b * w1 + color2.b * w2;
    const alpha = color1.a * p + color2.a * (1 - p);
    return '#' + toHex(r) + toHex(g) + toHex(b) + (alpha === 1 ? '' : toHex(Math.round(alpha * 255)));
}

function toHex(c) {
    c = Math.min(Math.max(Math.round(c), 0), 255);
    return (c < 16 ? '0' : '') + c.toString(16);
}

const colorNames = {
    transparent: 0x00000000,

    // http://www.w3.org/TR/css3-color/#svg-color
    aliceblue: 0xf0f8ffff,
    antiquewhite: 0xfaebd7ff,
    aqua: 0x00ffffff,
    aquamarine: 0x7fffd4ff,
    azure: 0xf0ffffff,
    beige: 0xf5f5dcff,
    bisque: 0xffe4c4ff,
    black: 0x000000ff,
    blanchedalmond: 0xffebcdff,
    blue: 0x0000ffff,
    blueviolet: 0x8a2be2ff,
    brown: 0xa52a2aff,
    burlywood: 0xdeb887ff,
    burntsienna: 0xea7e5dff,
    cadetblue: 0x5f9ea0ff,
    chartreuse: 0x7fff00ff,
    chocolate: 0xd2691eff,
    coral: 0xff7f50ff,
    cornflowerblue: 0x6495edff,
    cornsilk: 0xfff8dcff,
    crimson: 0xdc143cff,
    cyan: 0x00ffffff,
    darkblue: 0x00008bff,
    darkcyan: 0x008b8bff,
    darkgoldenrod: 0xb8860bff,
    darkgray: 0xa9a9a9ff,
    darkgreen: 0x006400ff,
    darkgrey: 0xa9a9a9ff,
    darkkhaki: 0xbdb76bff,
    darkmagenta: 0x8b008bff,
    darkolivegreen: 0x556b2fff,
    darkorange: 0xff8c00ff,
    darkorchid: 0x9932ccff,
    darkred: 0x8b0000ff,
    darksalmon: 0xe9967aff,
    darkseagreen: 0x8fbc8fff,
    darkslateblue: 0x483d8bff,
    darkslategray: 0x2f4f4fff,
    darkslategrey: 0x2f4f4fff,
    darkturquoise: 0x00ced1ff,
    darkviolet: 0x9400d3ff,
    deeppink: 0xff1493ff,
    deepskyblue: 0x00bfffff,
    dimgray: 0x696969ff,
    dimgrey: 0x696969ff,
    dodgerblue: 0x1e90ffff,
    firebrick: 0xb22222ff,
    floralwhite: 0xfffaf0ff,
    forestgreen: 0x228b22ff,
    fuchsia: 0xff00ffff,
    gainsboro: 0xdcdcdcff,
    ghostwhite: 0xf8f8ffff,
    gold: 0xffd700ff,
    goldenrod: 0xdaa520ff,
    gray: 0x808080ff,
    green: 0x008000ff,
    greenyellow: 0xadff2fff,
    grey: 0x808080ff,
    honeydew: 0xf0fff0ff,
    hotpink: 0xff69b4ff,
    indianred: 0xcd5c5cff,
    indigo: 0x4b0082ff,
    ivory: 0xfffff0ff,
    khaki: 0xf0e68cff,
    lavender: 0xe6e6faff,
    lavenderblush: 0xfff0f5ff,
    lawngreen: 0x7cfc00ff,
    lemonchiffon: 0xfffacdff,
    lightblue: 0xadd8e6ff,
    lightcoral: 0xf08080ff,
    lightcyan: 0xe0ffffff,
    lightgoldenrodyellow: 0xfafad2ff,
    lightgray: 0xd3d3d3ff,
    lightgreen: 0x90ee90ff,
    lightgrey: 0xd3d3d3ff,
    lightpink: 0xffb6c1ff,
    lightsalmon: 0xffa07aff,
    lightseagreen: 0x20b2aaff,
    lightskyblue: 0x87cefaff,
    lightslategray: 0x778899ff,
    lightslategrey: 0x778899ff,
    lightsteelblue: 0xb0c4deff,
    lightyellow: 0xffffe0ff,
    lime: 0x00ff00ff,
    limegreen: 0x32cd32ff,
    linen: 0xfaf0e6ff,
    magenta: 0xff00ffff,
    maroon: 0x800000ff,
    mediumaquamarine: 0x66cdaaff,
    mediumblue: 0x0000cdff,
    mediumorchid: 0xba55d3ff,
    mediumpurple: 0x9370dbff,
    mediumseagreen: 0x3cb371ff,
    mediumslateblue: 0x7b68eeff,
    mediumspringgreen: 0x00fa9aff,
    mediumturquoise: 0x48d1ccff,
    mediumvioletred: 0xc71585ff,
    midnightblue: 0x191970ff,
    mintcream: 0xf5fffaff,
    mistyrose: 0xffe4e1ff,
    moccasin: 0xffe4b5ff,
    navajowhite: 0xffdeadff,
    navy: 0x000080ff,
    oldlace: 0xfdf5e6ff,
    olive: 0x808000ff,
    olivedrab: 0x6b8e23ff,
    orange: 0xffa500ff,
    orangered: 0xff4500ff,
    orchid: 0xda70d6ff,
    palegoldenrod: 0xeee8aaff,
    palegreen: 0x98fb98ff,
    paleturquoise: 0xafeeeeff,
    palevioletred: 0xdb7093ff,
    papayawhip: 0xffefd5ff,
    peachpuff: 0xffdab9ff,
    peru: 0xcd853fff,
    pink: 0xffc0cbff,
    plum: 0xdda0ddff,
    powderblue: 0xb0e0e6ff,
    purple: 0x800080ff,
    rebeccapurple: 0x663399ff,
    red: 0xff0000ff,
    rosybrown: 0xbc8f8fff,
    royalblue: 0x4169e1ff,
    saddlebrown: 0x8b4513ff,
    salmon: 0xfa8072ff,
    sandybrown: 0xf4a460ff,
    seagreen: 0x2e8b57ff,
    seashell: 0xfff5eeff,
    sienna: 0xa0522dff,
    silver: 0xc0c0c0ff,
    skyblue: 0x87ceebff,
    slateblue: 0x6a5acdff,
    slategray: 0x708090ff,
    slategrey: 0x708090ff,
    snow: 0xfffafaff,
    springgreen: 0x00ff7fff,
    steelblue: 0x4682b4ff,
    tan: 0xd2b48cff,
    teal: 0x008080ff,
    thistle: 0xd8bfd8ff,
    tomato: 0xff6347ff,
    turquoise: 0x40e0d0ff,
    violet: 0xee82eeff,
    wheat: 0xf5deb3ff,
    white: 0xffffffff,
    whitesmoke: 0xf5f5f5ff,
    yellow: 0xffff00ff,
    yellowgreen: 0x9acd32ff,
};

module.exports = mix;
