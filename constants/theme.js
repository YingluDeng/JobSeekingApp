const COLORS = {
  primary: "#52060b",
  secondary: "#f36c08",
  tertiary: "#ebc800",

  gray: "#83829A",
  gray2: "#C1C0C8",

  darkRed: "#52060b",
  lightGreen: "#a9b2b0",

  white: "#F3F4F8",
  // lightWhite: "#Eccb94",
  lightWhite: "#e9e1d3",
  lighterW: "#f2ede5",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
