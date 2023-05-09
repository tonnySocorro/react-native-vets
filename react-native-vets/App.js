import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { Navigator } from "./src/navigators";
import { AuthenticationContextProvider } from "./src/services/authentication.context";
import {
  useFonts as useNunito,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import {
  useFonts as useRoboto,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";

import { theme } from "./src/theme";

export default function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigator />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );

}
