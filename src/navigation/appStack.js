import { HomeScreen } from "../screens/home/home";
import { AutorScreen } from "../screens/autor/autor";
import { LibroScreen } from "../screens/libro/libro";
import { AutorFormScreen } from "../screens/autor/autor-form";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Inicio" }}
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
