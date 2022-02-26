import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";


export const loginStyles = StyleSheet.create({
    containerTop:{
        flex: 0.1,
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "flex-start",
        paddingTop: 25,
        paddingLeft: 10,
    },
    roundBtn:{
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 3,
        paddingRight: 2,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: '#272727'
    },
    bottomShadow: {
        shadowOffset: {
          width: 6,
          height: 6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#b6c3db"
    },
    arrow: {
        fontFamily: "PoppinThin",
        fontSize: 40,
        color: "#fff"
    },
    logo: {
        marginLeft: 63,
        marginTop: 4
    },
    formContainer:{
        marginTop: 180,
        paddingHorizontal: 30,
    },
    button: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 80,
        elevation: 3,
        backgroundColor: '#272727',
    },
    btnText: {
        fontSize: 20,
        color: "#fff"
    },
    topShadow: {
        shadowOffset: {
          width: -10,
          height: -10
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#FBFFFF"
    },
    authBtns: {
        marginTop: 35,
        flex : 0.1,
        flexDirection: "row",
        justifyContent: "center"
    },
    extraMarg: {
        marginHorizontal: 40
    },
    disText: {
        color: "#fff",
        
    },
    textBox:{
        flex: 1,
        paddingTop: 80,
        // marginLeft: 40,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    yellow: {
        color: "#FAD655"
    }
})