import { Text, TouchableOpacity, Image, View } from "react-native";
import { styles } from "./home.styles";
import { Container } from "../../components/container/container";

export const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image 
          source={{ uri: 'https://imagen/imagen.jpeg' }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Bienvenido</Text>
        <Text style={styles.subtitle}>Explora nuestra colección</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Autor")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Ver Autores</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("Libro")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Ver Libros</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};