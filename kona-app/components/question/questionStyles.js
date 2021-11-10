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
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 16
  },
  cardsContainerLeft: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 16
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
        width: '40%',
        marginTop: 12
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
