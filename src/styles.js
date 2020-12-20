import { Dimensions, I18nManager } from "react-native";
import {
  COLOR_BLACK_4A,
  COLOR_BLUE_82,
  COLOR_GREY_FA,
  COLOR_WHITE,
  COLOR_GREY_88,
  COLOR_GREY_97,
  COLOR_GREY_DB,
  COLOR_RED_FF,
  COLOR_GREY_9B,
  COLOR_BLACK_00,
  COLOR_YALLOW_ED,
  COLOR_PURPLE_CE,
  COLOR_GREY_F0,
  COLOR_GREY_F2,
  COLOR_BLACK_38,
  COLOR_GREEN_42,
  COLOR_GREY_EB,
  COLOR_GREEN_08,
  COLOR_GREY_CC,
  COLOR_GREY_AF,
  COLOR_GREY_70,
  COLOR_GREY_F5,
  COLOR_GREY_91,
  COLOR_BLUE_4A,
  COLOR_BLUE_07,
  COLOR_YALLOW_FB
} from "./config/Enum";
import Constants from "expo-constants";
const { width, height } = Dimensions.get("window");

export const fontFamilyReguler = "JF-FLAT";
const generalInputStyle = {
  color: "#000",
  paddingRight: 10,
  paddingLeft: 10,
  height: 53,
  fontSize: 14,
  lineHeight: 17
};
const preDefiendStyles = {
  RootContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  flexStyle: {
    flex: 1
  },
  flexWrap: {
    flexWrap: "wrap"
  },
  AlignSelf: {
    alignSelf: "center"
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  AlignSelfflexEnd: {
    alignSelf: "flex-end"
  },
  AlignSelfflexStart: {
    alignSelf: "flex-start"
  },
  AlignSelfCenter: {
    alignSelf: "center"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  alignTextCenter: {
    textAlign: "center"
  },
  alignTextByLanguage: {
    textAlign: I18nManager.isRTL ? "right" : "left"
  },
  writingDirectionRtl: {
    writingDirection: "rtl"
  },
  italic: {
    fontStyle: "italic"
  },
  fontSize8: {
    fontSize: 8
  },
  fontSize10: {
    fontSize: 10
  },
  fontSize12: {
    fontSize: 12
  },
  fontSize14: {
    fontSize: 14,
    writingDirection: "rtl"
  },
  fontSize16: {
    fontSize: 16,
    writingDirection: "rtl"
  },
  fontSize18: {
    fontSize: 18
  },
  fontSize20: {
    fontSize: 20
  },
  fontSize22: {
    fontSize: 22
  },
  fontSize24: {
    fontSize: 24
  },
  fontSize26: {
    fontSize: 26
  },
  fontSize28: {
    fontSize: 28
  },
  fontSize35: {
    fontSize: 35
  },
  fontSize45: {
    fontSize: 45
  },
  fontSize66: {
    fontSize: 66
  },
  lineHeight13: {
    lineHeight: 13
  },
  lineHeight16: {
    lineHeight: 16
  },
  lineHeight20: {
    lineHeight: 20
  },
  lineHeight23: {
    lineHeight: 23
  },
  lineHeight26: {
    lineHeight: 26
  },
  lineHeight34: {
    lineHeight: 34
  },
  paddingTopSmall: {
    paddingTop: 10
  },
  paddingTopMedium: {
    paddingTop: 30
  },
  paddingTopLarge: {
    paddingTop: 40
  },
  paddingTopXLarge: {
    paddingTop: 60
  },
  paddingTopXXLarge: {
    paddingTop: 100
  },
  paddingBottomSmall: {
    paddingBottom: 10
  },
  paddingBottomMedium: {
    paddingBottom: 20
  },
  paddingBottomLarge: {
    paddingBottom: 30
  },
  margintopXsmall: {
    marginTop: 5
  },
  marginTopSmall: {
    marginTop: 10
  },
  marginTopMedium: {
    marginTop: 25
  },
  marginTopLarge: {
    marginTop: 35
  },
  marginTopXLarge: {
    marginTop: 50
  },
  marginLeftSmall: {
    marginLeft: 10
  },
  marginLeftMedium: {
    marginLeft: 20
  },
  marginLeftLarge: {
    marginLeft: 30
  },
  marginRightXSmall: {
    marginRight: 5
  },
  marginRightSmall: {
    marginRight: 10
  },
  marginRightMedium: {
    marginRight: 20
  },
  marginBottomLarge: {
    marginBottom: 30
  },
  marginBottomMedium: {
    marginBottom: 20
  },
  marginBottomXSmall: {
    marginBottom: 5
  },
  marginBottomSmall: {
    marginBottom: 10
  },
  paddingLeftSmall: {
    paddingLeft: 10
  },
  paddingLeftMedium: {
    paddingLeft: 20
  },
  paddingRightSmall: {
    paddingRight: 10
  },
  paddingRightMedium: {
    paddingRight: 20
  },
  paddingRightLarge: {
    paddingRight: 30
  },
  paddingRightXLarge: {
    paddingRight: 50
  },
  paddingLeftSmall: {
    paddingLeft: 10
  },
  paddingLeftMedium: {
    paddingLeft: 20
  },
  paddingLeftLarge: {
    paddingLeft: 30
  },
  zIndex2: {
    zIndex: 2
  },
  flexRow: {
    flexDirection: "row"
  },
  flexRowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  flexRowSpaceAround: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  relativePosition: {
    position: "relative"
  },
  fontFamilyReguler: {
    fontFamily: fontFamilyReguler
  },
  letterSpacing1: {
    letterSpacing: 1
  },
  colorBlue_07: {
    color: COLOR_BLUE_07
  },
  colorGreen_42: {
    color: COLOR_GREEN_42
  },
  colorGreen_08: {
    color: COLOR_GREEN_08
  },
  colorBlack_38: {
    color: COLOR_BLACK_38
  },
  colorBlackMain: {
    color: COLOR_BLACK_4A
  },
  colorGrey70: {
    color: COLOR_GREY_70
  },
  colorWhite: {
    color: COLOR_WHITE
  },
  colorBlue4A: {
    color: COLOR_BLUE_4A
  },
  BgColorBlack: {
    backgroundColor: COLOR_BLACK_00
  },
  BgColorRed: {
    backgroundColor: COLOR_RED_FF
  },
  BgColorBlue: {
    backgroundColor: COLOR_BLUE_07
  },
  BgColorYallow: {
    backgroundColor: COLOR_YALLOW_FB
  },
  BgColorGrey: {
    backgroundColor: COLOR_GREY_FA
  },
  BgColorGreyF2: {
    backgroundColor: COLOR_GREY_F2
  },
  BgColorTransperant: {
    backgroundColor: "transparent"
  },
  BgColorGrey91: {
    backgroundColor: COLOR_GREY_91
  },
  BgColorGreyDB: {
    backgroundColor: COLOR_GREY_DB
  },
  BgColorGreen: {
    backgroundColor: COLOR_GREEN_42
  },
  BgColorGreen08: {
    backgroundColor: COLOR_GREEN_08
  },
  BgColorYallow: {
    backgroundColor: COLOR_YALLOW_ED
  },
  BgColorWhite: {
    backgroundColor: COLOR_WHITE
  },
  BgColorPurple: {
    backgroundColor: COLOR_PURPLE_CE
  }
};

const commonStyle = {
  FormRow: {
    marginBottom: 20
  },
  statusBar: {
    backgroundColor: "#ffffff",
    height: Constants.statusBarHeight
  },
  btnStyle: {
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: COLOR_BLUE_07,
    alignItems: "center",
    justifyContent: "center"
  },
  btnTextStyle: {
    fontFamily: fontFamilyReguler,
    color: COLOR_BLUE_07,
    fontSize: 20
  },
  tabLabelStyle: {
    fontSize: 14,
    fontFamily: fontFamilyReguler,
    marginBottom: 10
  },
  BottomTabBar: {
    backgroundColor: COLOR_BLUE_07,
    paddingTop: 10,
    paddingBottom: 5,
    height: 65,
    borderTopWidth: 0
  },
  labelStyle: {
    color: COLOR_BLUE_07,
    fontSize: 14,
    fontFamily: fontFamilyReguler,
    marginBottom: 10,
    paddingRight: 20
  },
  TextFieldContainer: {
    height: 60,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLOR_BLUE_07,
    borderRadius: 20
  },
  FormTextFieldContainer: {},
  FormlabelStyle: {
    textAlign: "right",
    color: COLOR_GREY_AF,
    fontSize: 12,
    fontFamily: fontFamilyReguler
  },
  FormTextFieldText: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_GREY_CC,
    textAlign: "right",
    fontFamily: fontFamilyReguler,
    color: COLOR_BLACK_38,
    height: 40
  },
  TextFieldText: {
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontFamily: fontFamilyReguler,
    textAlign: "center",
    color: COLOR_BLACK_38
  },
  TextFieldAreaContainer: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 5,
    marginRight: 5,
    justifyContent: "center",
    borderColor: COLOR_GREY_97,
    borderWidth: 1
  },
  TextAreaField: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    color: COLOR_BLACK_4A
  },
  linkBtnTextStyle: {
    fontSize: 12,
    color: COLOR_GREEN_42,
    fontFamily: fontFamilyReguler,
    textDecorationLine: "underline"
  },
  starErrorStyle: {
    color: COLOR_RED_FF,
    position: "absolute",
    right: 10,
    top: 2,
    zIndex: 10
  },
  errorStyle: {
    marginTop: 5,
    color: COLOR_RED_FF,
    fontSize: 12,
    fontFamily: fontFamilyReguler,
    paddingRight: 20,
    writingDirection: "rtl"
  },
  errorInputStyle: {
    borderWidth: 1,
    borderColor: COLOR_RED_FF
  },
  pickerContainer: {
    backgroundColor: COLOR_WHITE,
    justifyContent: "center",
    borderBottomColor: COLOR_GREY_AF,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    height: 40
  },
  pickerInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    borderRadius: 5
  },
  optionContainer: {
    padding: 15,
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLOR_GREY_F0
  },
  optionText: {
    fontSize: 17,
    color: COLOR_BLACK_4A,
    fontFamily: fontFamilyReguler,
    textAlign: "center"
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20
  },
  modalStyle: {
    borderRadius: 5
  },
  pickerSelectedItem: {
    textAlign: "right",
    width: "100%",
    paddingBottom: 5
  },
  customPickerHeader: {
    height: 50,
    backgroundColor: COLOR_BLACK_4A,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  customPickerHeaderText: {
    color: COLOR_BLACK_4A,
    fontSize: 20,
    fontFamily: fontFamilyReguler
  },
  customPickerIcon: {
    width: 7,
    height: 12
  },
  tabLabel: {
    color: COLOR_GREY_9B,
    textAlign: "center",
    fontSize: 11
  },
  PhoneFieldContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLOR_GREY_CC
  },
  PhoneField: {
    flex: 1,
    textAlign: "right",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    fontSize: 12,
    height: 40,
    textAlign: "right",
    fontFamily: fontFamilyReguler
  },
  CodeField: {
    fontSize: 12,
    textAlign: "right",
    fontFamily: fontFamilyReguler
  },
  datePickerStyle: {
    justifyContent: "space-between",
    width: "100%"
  },
  dateInput: {
    borderWidth: 0,
    alignItems: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_GREY_CC
  },
  dateText: {
    color: COLOR_BLACK_4A,
    fontSize: 12
  },
  SwitchFieldContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  tabBarTab: {},
  tabViewBarStyle: {
    backgroundColor: COLOR_GREEN_42
  },
  tabViewLabel: {
    fontSize: 10,
    fontFamily: fontFamilyReguler
  }
};
export const styles = {
  ...preDefiendStyles,
  ...commonStyle,
  playerStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 60,
    alignItems: "center",
    backgroundColor: COLOR_BLUE_07
  },
  audioSep: {
    height: 1,
    width: "100%",
    backgroundColor: COLOR_BLUE_07
  },
  recordingContainer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    zIndex: 10,
    justifyContent: "center"
  },
  recordBtn: {
    width: 70,
    height: 70,
    backgroundColor: COLOR_RED_FF,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  reacordingModal: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR_RED_FF,
    opacity: 1
  },
  insideModalBtn: {
    width: 70,
    height: 70,
    position: "absolute",
    bottom: 50,
    backgroundColor: COLOR_BLUE_07
  },
  closeModalBtn: {
    position: "absolute",
    left: 20,
    top: 20
  },
  doneBtn: {
    position: "absolute",
    bottom: 60,
    right: 20
  }
};
