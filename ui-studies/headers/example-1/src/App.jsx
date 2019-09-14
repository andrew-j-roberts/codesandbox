import React from "react";
import {
  ColorModeProvider,
  ThemeProvider,
  Stack,
  useColorMode
} from "@chakra-ui/core";
import theme from "./theme";
import Header from "./Header";
import { WindowDimensionsProvider } from "./WindowDimensionsProvider";

export default function App() {
  return (
    <WindowDimensionsProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <AppContainer>
            <Header />
          </AppContainer>
        </ColorModeProvider>
      </ThemeProvider>
    </WindowDimensionsProvider>
  );
}

function AppContainer({ children }) {
  const { colorMode } = useColorMode();
  const brandColorTheme = theme.colors.brand[colorMode];

  return <Stack height="100vh" backgroundColor={brandColorTheme.background}>{children}</Stack>;
}
