import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:5,
    padding: SIZES.xLarge,
    marginVertical:10,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
  },
  logoContainer:{
    width: 100,
    height: 100,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  pokemonName: {
    fontSize: SIZES.medium,
    // fontFamily: FONT.regular,
    // color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
    textAlign:'center',
    marginHorizontal:5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName:{
    fontSize: SIZES.large,
    // fontFamily: FONT.medium,
    color: COLORS.white,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher:{
    fontSize: SIZES.medium - 2,
    // fontFamily: FONT.bold,
    color: COLORS.white,
  },
  location: {
    fontSize: SIZES.medium - 2,
    // fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
