import Fonts from '../../../commons/Fonts';
import Colors from '../../../commons/Colors';
export default{

  Default:{
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center',
  },


  ButtonSizePadding:{
    largeBtnPadding:{
      paddingLeft: 56,
      paddingRight: 56,
      paddingTop: 12,
      paddingBottom: 12,
    },
    defaultBtnPadding:{
      paddingLeft: 28,
      paddingRight: 28,
      paddingTop: 10,
      paddingBottom: 10,
    },
    smallBtnPadding:{
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 8,
      paddingBottom: 8,
    },
  },


  RadiusStyle:{
    buttonSizeLagre:{
      width: 40,
      height:40,
      borderRadius:20,
    },
    buttonSizeDefault:{
      width: 32,
      height:32,
      borderRadius:16
    },
    buttonSizeSmall:{
      width: 28,
      height:28,
      borderRadius:14
    }
  },


  DisabledStyles : {
    tureStyles : {
      default:{
        backgroundColor:Colors.white,
        borderColor:Colors.defaultColor
      },
      primary:{
        backgroundColor:Colors.primaryColor05,
        borderColor:Colors.primaryColor
      },
      success:{
        backgroundColor:Colors.successColor05,
        borderColor:Colors.successColor
      },
      warning:{
        backgroundColor:Colors.warningColor05,
        borderColor:Colors.warningColor
      },
      danger:{
        backgroundColor:Colors.dangerColor05,
        borderColor:Colors.dangerColor
      }
    },
    falseStyles : {
      default:{
        backgroundColor:Colors.white,
        borderColor:Colors.defaultColor
      },
      primary:{
        backgroundColor:Colors.primaryColor,
        borderColor:Colors.primaryColor
      },
      success:{
        backgroundColor:Colors.successColor,
        borderColor:Colors.successColor
      },
      warning:{
        backgroundColor:Colors.warningColor,
        borderColor:Colors.warningColor
      },
      danger:{
        backgroundColor:Colors.dangerColor,
        borderColor:Colors.dangerColor
      }
    }
  }


}
