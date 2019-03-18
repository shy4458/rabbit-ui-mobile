import mix from './color-mix';

const NAMED_Colors = {

  white:'rgba(255,255,255, 1)',
  whiteAlpha0:'rgba(255,255,255, 0)',
  yellow: "rgba(246, 253, 55, 1)",
  green: "rgba(106, 246, 162, 1)",
  purple: "rgba(144, 63, 199, 1)",
  pink: "rgba(245, 64, 199, 1)",
  darkPink: "rgba(200, 40, 159, 1)",
  orange: "rgba(247, 144, 77, 1)",
};


let defaultColor = '#b5b5b5';
let primaryColor = '#1890ff';
let successColor = '#2dd017';
let warningColor = '#f4b234';
let dangerColor  = '#ef5656';

let white = '#ffffff';
let black = '#000000';

export default{

    NAMED_Colors,
    primary: '#06C1AE',
    border: '#e0e0e0',
    paper: '#f3f3f3',
    gray: '#979797',

    /* 主要文字 标题性文字 重要文字 已经输入完文字 结果 */
    titleColor : '#333333',
    /* 说明文字 普通文字 */
    explainColor : '#666666',
    /* 提示文字 不重要文字 */
    subTitleColor : '#999999',
    /* 分割线 */
    lineColor : '#e5e5e5',
    /* 禁用状态 */
    disableColor : '#e9e9e9',
    /* 背景色 */
    backgroundColor : '#f5f5f5',
    /* 背景颜色 按钮 */
    buttonTitleColor : '#ffffff',
    /* 提示类文字颜色 */
    promptColor : '#bfbfbf',
    /* 菜单栏图标颜色 */
    iconColor : '#888888',
    /* 中浅色菜单栏图标颜色 */
    iconLightColor : '#dddddd',

    dark10: '#20303C',
    dark20: '#43515C',
    dark30: '#66737C',
    dark40: '#858F96',
    dark50: '#A3ABB0',
    dark60: '#C2C7CB',
    dark70: '#E0E3E5',
    dark80: '#F2F4F5',
    // BLUE,
    blue10: '#3182C8',
    blue20: '#4196E0',
    blue30: '#459FED',
    blue40: '#57a8ef',
    blue50: '#8fc5f4',
    blue60: '#b5d9f8',
    blue70: '#daecfb',
    blue80: '#ecf5fd',

    // CYAN,
    cyan10: '#00AAAF',
    cyan20: '#32BABC',
    cyan30: '#3CC7C5',
    cyan40: '#64D4D2',
    cyan50: '#8BDFDD',
    cyan60: '#B1E9E9',
    cyan70: '#D8F4F4',
    cyan80: '#EBF9F9',
    // GREEN,
    green10: '#00A65F',
    green20: '#32B76C',
    green30: '#65C888',
    green40: '#84D3A0',
    green50: '#A3DEB8',
    green60: '#C1E9CF',
    green70: '#E8F7EF',
    green80: '#F3FBF7',
    // YELLOW,
    yellow10: '#E2902B',
    yellow20: '#FAA030',
    yellow30: '#FAAD4D',
    yellow40: '#FBBD71',
    yellow50: '#FCCE94',
    yellow60: '#FDDEB8',
    yellow70: '#FEEFDB',
    yellow80: '#FEF7ED',
    // ORANGE,
    orange10: '#D9644A',
    orange20: '#E66A4E',
    orange30: '#F27052',
    orange40: '#F37E63',
    orange50: '#F7A997',
    orange60: '#FAC6BA',
    orange70: '#FCE2DC',
    orange80: '#FEF0ED',
    // RED,
    red10: '#CF262F',
    red20: '#EE2C38',
    red30: '#F2564D',
    red40: '#F57871',
    red50: '#F79A94',
    red60: '#FABBB8',
    red70: '#FCDDDB',
    red80: '#FEEEED',
    // PURPLE,
    purple10: '#8B1079',
    purple20: '#A0138E',
    purple30: '#B13DAC',
    purple40: '#C164BD',
    purple50: '#D08BCD',
    purple60: '#E0B1DE',
    purple70: '#EFD8EE',
    purple80: '#F7EBF7',
    // VIOLET,
    violet10: '#48217B',
    violet20: '#542790',
    violet30: '#733CA6',
    violet40: '#8F63B8',
    violet50: '#AB8ACA',
    violet60: '#C7B1DB',
    violet70: '#E3D8ED',
    violet80: '#F1EBF6',
    // WHITE,
    white,
    black,

    defaultColor,
    defaultColor01 : mix( defaultColor , white , 0.9),
    defaultColor02 : mix( defaultColor , white , 0.8),
    defaultColor03 : mix( defaultColor , white , 0.7),
    defaultColor04 : mix( defaultColor , white , 0.6),
    defaultColor05 : mix( defaultColor , white , 0.5),
    defaultColor06 : mix( defaultColor , white , 0.4),
    defaultColor07 : mix( defaultColor , white , 0.3),
    defaultColor08 : mix( defaultColor , white , 0.2),
    defaultColor09 : mix( defaultColor , white , 0.1),
    defaultHighLight01 : mix(black,defaultColor,0.1),

    primaryColor,
    primaryColor01 : mix( primaryColor , white , 0.9),
    primaryColor02 : mix( primaryColor , white , 0.8),
    primaryColor03 : mix( primaryColor , white , 0.7),
    primaryColor04 : mix( primaryColor , white , 0.6),
    primaryColor05 : mix( primaryColor , white , 0.5),
    primaryColor06 : mix( primaryColor , white , 0.4),
    primaryColor07 : mix( primaryColor , white , 0.3),
    primaryColor08 : mix( primaryColor , white , 0.2),
    primaryColor09 : mix( primaryColor , white , 0.1),
    primaryHighLight01 : mix(black,primaryColor,0.1),

    successColor ,
    successColor01 : mix( successColor , white , 0.9),
    successColor02 : mix( successColor , white , 0.8),
    successColor03 : mix( successColor , white , 0.7),
    successColor04 : mix( successColor , white , 0.6),
    successColor05 : mix( successColor , white , 0.5),
    successColor06 : mix( successColor , white , 0.4),
    successColor07 : mix( successColor , white , 0.3),
    successColor08 : mix( successColor , white , 0.2),
    successColor09 : mix( successColor , white , 0.1),
    successHighLight01 : mix(black,successColor,0.1),

    warningColor ,
    warningColor01 : mix( warningColor , white , 0.9),
    warningColor02 : mix( warningColor , white , 0.8),
    warningColor03 : mix( warningColor , white , 0.7),
    warningColor04 : mix( warningColor , white , 0.6),
    warningColor05 : mix( warningColor , white , 0.5),
    warningColor06 : mix( warningColor , white , 0.4),
    warningColor07 : mix( warningColor , white , 0.3),
    warningColor08 : mix( warningColor , white , 0.2),
    warningColor09 : mix( warningColor , white , 0.1),
    warningHighLight01 : mix(black,warningColor,0.1),

    dangerColor,
    dangerColor01 : mix( dangerColor , white , 0.9),
    dangerColor02 : mix( dangerColor , white , 0.8),
    dangerColor03 : mix( dangerColor , white , 0.7),
    dangerColor04 : mix( dangerColor , white , 0.6),
    dangerColor05 : mix( dangerColor , white , 0.5),
    dangerColor06 : mix( dangerColor , white , 0.4),
    dangerColor07 : mix( dangerColor , white , 0.3),
    dangerColor08 : mix( dangerColor , white , 0.2),
    dangerColor09 : mix( dangerColor , white , 0.1),
    dangerHighLight01 : mix(black,dangerColor,0.1),


    colorWithAlpha(name,opacity){
        if(!THEME_Color[name]){
            name = 'Theme';
        }
        return THEME_Color[name].split(", 1)").join(`, ${opacity})`);
    },

}
