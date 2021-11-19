import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 24,
        backgroundColor: 'rgb(242,240,240)',
    },
    sbWhiteContainer: {
        flexDirection: 'column',
        padding: 24,
    },
    whiteContainer: {
        flexDirection: 'column',
        margin: 20,
    },
    greyContainer: {
        backgroundColor: '#EAEAEA',
        
    },
    topFilterSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      flexDirection: 'row',
      marginRight: 40,
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
    itemStyle: {
      padding: 10,
    },
    h2: {
      paddingLeft: 16,
      paddingBottom: 10
    },

    supportContainer: {
      flex: 1,
      },
    bannerText: {
      fontFamily: 'poppins-medium',
      fontSize: 24,
      lineHeight: 36,
      color: '#6B6B6B',
      paddingRight: 20,
      paddingVertical: 100
    },
    homepageContainer: {
      position: 'relative',
      textAlign: "left",
    },
    handImage: {
      width: 189,
      height: 180,
      position: "absolute",
      right: -25,
      top: 88,
    },
    placeholderText: {
      fontFamily: "poppins-regular",
      fontSize: 16,
      lineHeight: 24,
      color: "#6B6B6B",
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
    ptpb: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    sdgTitle: {
      color: '#6B6B6B',
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 24,
    },

    sdgGrid: {
      paddingTop: 24,
      flex: 1,
      flexDirection: 'row',
      flexWrap: "wrap",
      alignContent: "space-between",
    },

    singleSDG: {
      flexBasis: "33.33%",
      paddingBottom: 10,
      alignSelf: "center"
    },
    flexCenter: {
      flexDirection: 'column',
      justifyContent: 'center'
    },
    homeButtonsGrid: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: "wrap",
      alignContent: "space-between",
      marginTop: -50,
    },
    helpText: {
      fontFamily: 'poppins-regular',
      fontSize: 18,
      lineHeight: 28,
      color: '#212121',
      fontWeight: '400',
      paddingVertical: 19,
    },
})
