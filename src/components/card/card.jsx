import { View, Text, Button } from "react-native";
import { styles } from "./card.styles";
export const Card = (props) => {
  return (
    <View style={styles.cad}>
      <Text style={styles.titulo}>Id: {props.id}</Text>
      <Text style={styles.texto}>Nombre: {props.nombre}</Text>
      <Text style={styles.texto}>nacionalidad: {props.nacionalidad}</Text>
      <View style={styles.botonesContainer}>
        <Button color="red" title="Eliminar" onPress={props.onDelete} />
        <Button title="Actualizar" onPress={props.onEdit} />
      </View>
    </View>
  );
};
