import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: "#E22d2d",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.small,
    shadowColor: COLORS.lightW,
  },
  likeBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: "#E22d2d",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: COLORS.darkRed,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
    ...SHADOWS.small,
    shadowColor: COLORS.lightW,
  },
  applyBtnText: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;
