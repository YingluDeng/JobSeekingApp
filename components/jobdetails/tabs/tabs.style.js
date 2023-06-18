import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.large,
    backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
    borderRadius: SIZES.medium,
    marginLeft: 4,
    ...SHADOWS.xSmall,
    shadowColor: COLORS.orange,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    ...SHADOWS.xSmall,
    shadowColor: COLORS.orange,
  }),
});

export default styles;
