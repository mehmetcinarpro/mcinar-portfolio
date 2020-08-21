import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styles
import theme from './styles/theme';
// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
// Material UI
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';

const App: React.FC = () => {
  return (
    <Router>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route path="/portfolio">
              <PortfolioPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </ThemeProvider>
      </StylesProvider>
    </Router>
  )
}

export default App;
