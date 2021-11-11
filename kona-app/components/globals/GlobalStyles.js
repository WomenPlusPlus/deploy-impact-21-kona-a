import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 24,
    backgroundColor: "rgb(242,240,240)",
  },
  homepageContainer: {
    position: "relative",
    textAlign: "left",
  },
  handImage: {
    width: 189,
    height: 180,
    position: "absolute",
    right: -25,
    top: 88,
  },
  whiteContainer: {
    flexDirection: "column",
    margin: 20,
  },
  greyContainer: {
    backgroundColor: "#EAEAEA",
  },
  topFilterSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexDirectionColumn: {
    flexDirection: "column",
  },
  titleTextHomepage: {
    fontFamily: "poppins-medium",
    fontSize: 24,
    lineHeight: 36,
    color: "#6B6B6B",
  },
  titleTextBold: {
    fontFamily: "poppins-bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#212121",
  },
  normalText: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#212121",
  },
  placeholderText: {
    fontFamily: "poppins-regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#6B6B6B",
  },
  card: {
    width: 100,
    height: 100,
  },
  button: {
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#212121",
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#ffffff",
    marginVertical: 0,
    marginHorizontal: 10,
  },
  textLink: {
    paddingTop: 10,
    marginRight: 20,
    textDecorationLine: "underline",
    textAlign: "right",
    fontWeight: "bold",
  },
  bigButton: {
    backgroundColor: "#F5F5F5",
    height: 54,
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  cardsContainerLeft: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  pt: {
    paddingTop: 10,
  },
  questionContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: "100%",
  },
  smallerQuestionContainer: {
    alignSelf: "center",
  },
  questionText: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#212121",
  },
  searchContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#6B6B6B",
    height: 52,
  },
  input: {
    width: "100%",
  },
  searchIcon: {
    paddingRight: 10,
    color: "#6B6B6B",
    fontSize: 16,
    paddingTop: 2,
  },
  itemStyle: {
    padding: 10,
  },
  ptpb: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  supportContainer: {
    flex: 1,
  },
  bannerText: {
    fontFamily: "poppins-medium",
    fontSize: 24,
    lineHeight: 36,
    color: "#6B6B6B",
    paddingRight: 20,
    paddingVertical: 100,
  },
});
