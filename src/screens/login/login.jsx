import { useState, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { Container } from "../../components/container/container";
import { styles } from "./login.styles";
import { AuthContext } from "../../context/AuthContext";
import { loginRequest } from "../../services/auth";

export const LoginScreen = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    if (!username || !password) return; // opcional: evita enviar vacío

    setLoading(true);
    try {
      const token = await loginRequest({ username, password }); // ✅ await
      await signIn(token); // ✅ await (recomendado)
    } catch (error) {
      console.log("No se pudo loguear:", error?.message || error);
    } finally {
      setLoading(false); // ✅ siempre re-habilita el botón
    }
  };

  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre de Usuario"
              placeholderTextColor="#999"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={onLogin}
            disabled={loading}
          >
            <Text style={styles.loginButtonText}>
              {loading ? "Ingresando..." : "Ingresar"}
            </Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>¿No tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerLink}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};
