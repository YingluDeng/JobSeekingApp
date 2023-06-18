import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.small,
    shadowColor: COLORS.lightW,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.small,
    shadowColor: COLORS.lightW,
  },
  logoImage: {
    width: "80%",
    height: "80%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  companyName: {
    fontSize: SIZES.small,
    color: COLORS.primary,
    fontFamily: FONT.medium,
    marginTop: 3,
  },
 
  locationBox: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left",
    marginTop: 3,
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    marginLeft: 2,
    color: COLORS.lightGreen,
  },
});

export default styles;
