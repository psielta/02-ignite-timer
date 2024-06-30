import { Button } from "./components/Button";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button tipo="primary"></Button>
      <Button tipo="danger"></Button>
      <Button tipo="secondary"></Button>
      <Button tipo="warning"></Button>
      <Button tipo="sucess"></Button>
      <Button></Button>
      <Button></Button>
      <GlobalStyle />
    </ThemeProvider>
  )
}