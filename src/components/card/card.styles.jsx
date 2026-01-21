import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cad: {
        width: "100%",
        backgroundColor:"#fffafaff",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width:0, height: 5},
        shadowOpacity: 0.20,
        shadowRadius:5,
        elevation: 5,
        marginBottom:10
    },
    titulo: {
        fontSize: 18,
        color:"#333"
    },
    texto: {
        fontSize: 16,
        color:"#686464ff"
    },
    botonesContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10
    }
});