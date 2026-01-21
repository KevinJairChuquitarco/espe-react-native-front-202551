import { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { Container } from "../../components/container/container";
import { EDPOINTS } from "../../config/api";

export const AutorFormScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [data, setData] = useState();
  const [url, setUrl] = useState(null);

  const guardarAutor = async (metodo) => {
    try {
      if (metodo == "POST") {
        setUrl(EDPOINTS.AUTOR);
      }else{
        setUrl(EDPOINTS.AUTOR+`/${id}`);
      }

      const response = await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          nacionalidad: nacionalidad,
        }),
      });
      const json = await response.json();
      console.log(json);
      setData(json);
      Alert.alert("Éxito", "Guardado Correctamente", [
        {
          text: "Listo",
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      console.log("Error " + error);
      Alert.alert("Error", "Error en guardar");
    }
  };

  return (
    <Container>
      <View>
        <TextInput
          placeholder="Ingrese el Nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput
          placeholder="Ingrese la Nacionalidad"
          value={nacionalidad}
          onChangeText={(text) => {
            setNacionalidad(text);
            console.log(nacionalidad);
          }}
        />
        <Button title="Guardar" onPress={() => guardarAutor("POST")} />
      </View>
    </Container>
  );
};
