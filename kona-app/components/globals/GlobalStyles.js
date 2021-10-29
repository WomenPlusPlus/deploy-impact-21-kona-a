import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 24,
        backgroundColor: 'rgb(242,240,240)'
    },
    titleTextHomepage: {
      fontFamily: 'poppins-medium',
      fontSize: 24,
      lineHeight: 36,
      color: '#6B6B6B',
    },
    titleTextQuestion: {
      fontFamily: 'poppins-bold',
      fontSize: 16,
      lineHeight: 24,
      color: '#212121',
    },
    card: {
        width: 100,
        height: 100
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        width: 150
    },
    buttonText: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    textLink: {
        paddingTop: 10,
        marginRight: 20,
        textDecorationLine: 'underline',
        textAlign: 'right',
        fontWeight: 'bold'
    }
})
