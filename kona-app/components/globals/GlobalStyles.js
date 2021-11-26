import { Inter_400Regular } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 24,
        paddingHorizontal: 24,
        marginBottom: 15,
        backgroundColor: '#F5DEDE',
    },
    sbWhiteContainer: {
        flexDirection: 'column',
        padding: 24,
    },
    whiteContainer: {
        flexDirection: 'column',
        marginHorizontal: 24,
        marginBottom: 20, 
    },
    roseContainer: {
        backgroundColor: '#F5DEDE',
    },
    bgWhite: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      padding: 10
    },
    count: {
      fontFamily: 'poppins-regular',
      fontSize: 14,
      color: 'rgba(69, 55, 72, 0.5)',
      paddingTop: 30,
      paddingLeft: 24
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
      color: 'rgba(69, 55, 72, 1)',
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
        paddingBottom: 10,
        marginRight: 20,
        textDecorationLine: 'underline',
        textAlign: 'right',
        fontWeight: 'bold'
    },
    mainButton: {
      backgroundColor: 'rgba(255, 246, 246, 1)',
      height: 54,
      borderRadius: 15,
      marginVertical: 5,
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      marginRight: 10,
      borderColor: 'rgba(66, 47, 70, 1)',
      borderWidth: 1,
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
      fontSize: 34,
      lineHeight: 51,
      color: 'rgba(69, 55, 72, 1)',
      paddingRight: 20,
      paddingBottom: 20,
      paddingTop: 80,
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
    searchResText: {
      fontFamily: "poppins-regular",
      fontSize: 16,
      lineHeight: 24,
      color: "#453748",
      paddingBottom: 8,
      paddingTop:8
    },
    seeAllSection: {
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 12
    },
    searchContainer: {
      backgroundColor: "#F5DEDE",
      padding: 10,
      borderRadius: 41,
      flex: 1,
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "#6B6B6B",
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
      color: 'rgba(69, 55, 72, 1)',
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
      alignSelf: 'center'
    },
    homeButtonsGrid: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: "wrap",
      alignContent: "space-between",
      marginTop: -45,
    },
    helpText: {
      fontFamily: 'poppins-regular',
      fontSize: 18,
      lineHeight: 28,
      color: 'rgba(69, 55, 72, 0.63)',
      fontWeight: '400',
      paddingVertical: 19,
    },
    homeFooter: {
      backgroundColor: 'rgba(69, 55, 72, 1)',
      paddingHorizontal: 24,
      paddingTop: 54,
      paddingBottom: 27,
    },
    homeFooterText: {
      fontFamily: 'poppins-regular',
      fontSize: 12,
      lineHeight: 18,
      color: 'white',
      fontWeight: '400',
    },
    homeFooterLinks: {
      fontFamily: 'poppins-regular',
      fontSize: 12,
      lineHeight: 18,
      color: 'white',
      fontWeight: '500',
    },
    homeFooterCopyright: {
      fontFamily: 'poppins-regular',
      fontSize: 12,
      lineHeight: 18,
      color: 'rgba(255, 255, 255, 0.45)',
      textAlign: 'center',
    },
    soloWhite: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 40,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 900,
      margin: -15,
    },
    sdgContainer: {
        flexDirection: 'column',
        paddingTop: 24,
        paddingHorizontal: 24,
        marginBottom: 15,
        backgroundColor: 'rgba(239, 236, 232, 0.7)',
        paddingBottom: 50,
        marginBottom: -15,  
    },
    sdgText : {
        fontFamily: 'poppins-regular',
        fontSize: 16,
        lineHeight: 24,
        color: '#212121',
        fontWeight: '400',
    }
})
