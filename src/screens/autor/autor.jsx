import { useState, useCallback } from "react";
import { FlatList, Button, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Container } from "../../components/container/container";
import { Card } from "../../components/card/card";
import { EDPOINTS } from "../../config/api";

export const AutorScreen = ({ navigation }) => {
  const [autores, setAutores] = useState([]);

  const getAutores = async () => {
    try {
      const response = await fetch(EDPOINTS.AUTOR);
      const json = await response.json();
      setAutores(json);
    } catch (error) {
      console.log("Error al consumir servicio Get Autor" + error);
    }
  };
  // useEffect(() => {
  //   getAutores();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      getAutores();
    }, [])
  );

  const eliminarAutor = async (id) => {
    try {
      const response = await fetch(`${EDPOINTS.AUTOR}/${id}`, {method:"DELETE"});

      if (!response.ok) {
        throw new Error("Error al eliminar");
      }

      Alert.alert("Éxito","Se eliminó correctamente");

      setAutores(autores => autores.filter(autor => autor.id != id));
    } catch (error) {
      console.log("Error: "+error);
      Alert.alert("Error","No se pudo eliminar");
    }
  }

  return (
    <Container>
      <Button
        title="Crear Nuevo autor"
        onPress={() => navigation.navigate("AutorForm")}
      />
      <FlatList
        data={autores}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            nombre={item.nombre}
            nacionalidad={item.nacionalidad}
            onDelete = {()=>eliminarAutor(item.id)}
          />
        )}
        keyExtractor={({ id }) => id}
      />
      {/* {autores.map((autor) => (
        <>
        <Text style={styles.texto}>Id: {autor.id}</Text>
        <Text style={styles.texto}>Nombre: {autor.nombre}</Text>
        <Text style={styles.texto}>nacionalidad: {autor.nacionalidad}</Text>
        </>
      ))} */}
    </Container>
  );
};
