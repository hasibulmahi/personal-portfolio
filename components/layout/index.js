import React from "react";
import Footer from "../footer/footer.component";
import Navigation from "../header/navigation.component";
import SectionTitle from "../section-title/section-title.component";
import Services from "../services/services.component";
import Hero from "../hero/hero.component";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function Layout({ children }) {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const theme = React.useMemo(
  //     () =>
  //       createTheme({
  //         palette: {
  //           mode: prefersDarkMode ? 'dark' : 'light',
  //         },
  //       }),
  //     [prefersDarkMode],
  //   );

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Navigation />
      {children}
      <Footer />
      {/* </ThemeProvider> */}
    </>
  );
}

export default Layout;
