import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.small,
    shadowColor: COLORS.lightW,
  },
  btnImg: (dimension) => ({
    width: 40,
    height: 40,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
