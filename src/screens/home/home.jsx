import { Text, Button, Image } from "react-native";
import { styles } from "./home.styles";
import { Container } from "../../components/container/container";
export const HomeScreen = ({navigation}) =>{
    return (
        <Container>
            <Image 
                source={require('../../../assets/icon.png')}
                style={styles.image}
            />
            <Image 
                source={{uri:'https://imagen/imagen.jpeg'}}
                style={styles.image}
            />
            <Text style={styles.texto}>Hola desde home</Text>
            <Button onPress={()=>{navigation.navigate("Autor")}} title="Ir a autor"></Button>
            <Button onPress={()=>{navigation.navigate("Libro")}} title="Ir a Libro"></Button>
        </Container>
    );
};