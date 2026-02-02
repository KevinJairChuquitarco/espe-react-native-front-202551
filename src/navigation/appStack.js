import { HomeScreen } from "../screens/home/home";
import { AutorScreen } from "../screens/autor/autor";
import { LibroScreen } from "../screens/libro/libro";
import { AutorFormScreen } from "../screens/autor/autor-form";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react";

const Stack = createStackNavigator();

export const AppStack = () => {
  const {signOut} = useContext(AuthContext)
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Inicio",
            headerRight: () => (<Button
              onPress={()=>Alert.alert("Alerta","Deseas salir?",[
                {
                  text:"No",
                  style:"cancel"
                },
                {
                  text: "Si",
                  onPress: signOut
                }
              ])}
              title="Salir"
            />)
           }}
        />
        <Stack.Screen name="Autor" component={AutorScreen} />
        <Stack.Screen name="Libro" component={LibroScreen} />
        <Stack.Screen
          name="AutorForm"
          component={AutorFormScreen}
          options={{ title: "Crear Autor" }}
        />
      </Stack.Navigator>
  );
}
