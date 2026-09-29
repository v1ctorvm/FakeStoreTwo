import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./src/Screens/Home";

export default function App() {
  return (
    <SafeAreaProvider>
      <Home></Home>
    </SafeAreaProvider>
  );
}
