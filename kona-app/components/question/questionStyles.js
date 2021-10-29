import {StyleSheet} from 'react-native';

export const questionStyles = StyleSheet.create({
  questionContainer: {
    position: 'absolute',
    width: 325,
    height: 109,
    left: 24,
    top: 198,
    display: 'flex',
  },
  dropdownContainer: {
    position: 'absolute',
    width: 325,
    height: 58,
    left: 24,
    top: 290,
  },
  dropdownBtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdownDropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdownRowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxtStyle: { color: "#444", textAlign: "left" },
})
