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
    width: 325,
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
  },
  dropdownDropdownStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
  },
  dropdownRowStyle: {
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#FFFFFF",
  },
  dropdownRowTxtStyle: {
    color: "#212121",
    textAlign: "left",
    fontFamily: 'poppins-medium',
    fontSize: 16,
    lineHeight: 24,
  },
})
