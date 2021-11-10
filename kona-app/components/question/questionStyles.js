import {StyleSheet} from 'react-native';

export const QuestionStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  questionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: '100%'
  },
  subjectContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  smallerQuestionContainer: {
    alignSelf: 'center'
  },
  questionText: {
    fontFamily: 'poppins-medium',
    fontSize: 16,
    lineHeight: 24,
    color: '#212121',
  },

  dropdownContainer: {
  },
  btnContainer: {
    alignItems: 'flex-end'
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
  greyText: {
    color: 'grey',
    marginBottom: 5
  },
    bold: {
        fontWeight: 'bold'
  },
    smallContainer: {
        paddingTop: 20,
        flexDirection:'row'
  },
    cardStyle: {
        width: '100%',
        marginTop: 12,
        borderRadius: 5,
        borderColor: 'black',
        padding: 5,
        borderWidth: 1,
        borderStyle: 'solid'
  },
    h2: {
        paddingLeft: 16,
        paddingBottom: 10
  },
    card: {
        width: 100,
        height: 100,
  },
  filterButton: {
  }
})
