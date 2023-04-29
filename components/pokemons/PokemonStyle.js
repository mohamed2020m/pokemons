import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.Large,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  horizontalLine: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  // cardsContainer: {
  //   // marginTop: SIZES.medium,
  //   // gap: SIZES.small,
  //   flex:1,
  // },

  // container: {
  //   paddingHorizontal: 10,
  //   paddingVertical: 20,
  // },
  flatList: {
    marginTop: 10,
  },
  // card: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   padding: 20,
  //   marginHorizontal: 5,
  //   borderRadius: 10,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    // backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
