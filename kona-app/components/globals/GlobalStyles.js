import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 24,
        backgroundColor: 'rgb(242,240,240)'
    },
    whiteContainer: {
        flexDirection: 'column',
        margin: 20,
    },
    greyContainer: {
        backgroundColor: '#EAEAEA',
    },
    flexDirectionColumn: {
      flexDirection: 'column',
    },
    titleTextHomepage: {
      fontFamily: 'poppins-medium',
      fontSize: 24,
      lineHeight: 36,
      color: '#6B6B6B',
    },
    titleTextBold: {
      fontFamily: 'poppins-bold',
      fontSize: 16,
      lineHeight: 24,
      color: '#212121',
    },
    normalText: {
      fontFamily: 'poppins-medium',
      fontSize: 16,
      lineHeight: 24,
      color: '#212121',
    },
    card: {
        width: 100,
        height: 100,
    },
    button: {
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor: '#212121',
      borderRadius: 10,
    },
    buttonText: {
      fontFamily: 'poppins-medium',
      fontSize: 16,
      lineHeight: 24,
      color: '#ffffff',
      marginVertical: 0,
      marginHorizontal: 10,
    },
    textLink: {
        paddingTop: 10,
        marginRight: 20,
        textDecorationLine: 'underline',
        textAlign: 'right',
        fontWeight: 'bold'
    },
    bigButton: {
      backgroundColor: '#F5F5F5',
      height: 54,
      borderRadius: 10,
      marginVertical: 5,
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignSelf: 'flex-start',
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
    pt: {
      paddingTop: 10
    },
    questionContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingVertical: 10,
      paddingHorizontal: 20,
      height: '100%'
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
    searchContainer: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5
    },
    itemStyle: {
      padding: 10,
    },
})
