import {StyleSheet} from 'react-native';

export const LocalStyles = StyleSheet.create({
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
    fontFamily: 'poppins-regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#212121',
    fontWeight: '400',
    paddingLeft: 20
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
    borderRadius: 10,
    borderColor: 'rgba(69, 55, 72, 0.4)',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  h2: {
    paddingLeft: 16,
    paddingBottom: 10
  },
  imageContainer: {
    width: '100%',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: 'rgba(250, 238, 238, 0.7)',
    position: 'relative'
  },
  soloImageContainer: {
    width: '100%',
    height: 195,
    backgroundColor: 'rgba(250, 238, 238, 0.7)'
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
  },
  name: {
    fontWeight: '600',
    fontSize: 20,
    paddingVertical: 8,
    lineHeight: 30,
  },
  fieldName: {
    color: '#6B6B6B',
    fontWeight: 'bold'
  },
  field: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingBottom: 2,
  },
  fieldText: {
    alignSelf: 'center',
    color: '#6B6B6B',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24,
  },
  orgContainer: {
    marginHorizontal: 25,
    marginBottom: 30,
  },
  orgTextContainer: {
    padding: 24,
  },
  helpContainer: {
    paddingVertical: 20
  },
  label: {
    width: 96,
    backgroundColor: 'rgb(109, 190, 109)',
    top: 8,
    paddingVertical: 7,
    paddingHorizontal: 15,
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
    elevation: 1
  },
  orgImage: {
    height: 130,
    width: "100%",
    marginVertical: 10,
  },
  topFilterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#212121',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  topFilterCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  accordionTextTitle: {
    fontFamily: 'poppins-medium',
    fontSize: 18,
    lineHeight: 27,
    color: '#212121',
    marginVertical: 10,
  },
  checkboxItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  marginTop: {
    marginTop: 20,
  },
  checkboxText: {
    marginLeft: 10,
    marginTop: 5,
  },
  resultsButton: {
    backgroundColor: '#6b6b6b',
    color: '#FFFFFF',
    width: 323,
    height: 50,
    marginBottom: 200,
  },
  resultsButtonText: {
    color: '#FFFFFF',
    fontFamily: 'poppins-regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    paddingTop: 15,
  },
  subCategories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    marginBottom: 1,
  },
  accordion: {
    width: 300,
  },
  allFiltersButton: {
    backgroundColor: '#453748',
    padding: 10,
    width: '50%',
    borderTopLeftRadius: 10,
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  allOrgsContainer: {
    backgroundColor: '#F5DEDE',
    width: '80%',
    paddingLeft: 20,
    paddingVertical: 50,
    position: 'relative'
  },
  allOrgsText: {
    fontFamily: 'poppins-medium',
    fontSize: 22,
    color: '#453748',
    paddingVertical: 16,
  },
  allFiltersText: {
    color: 'white',
    fontFamily: 'poppins-medium',
    fontSize: 16,
    paddingLeft: 6
  },

})
