import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import { Wrapper } from 'assets/styles/Root.styles';
import { Header } from 'components/common/Header.js';
import 'assets/styles/Root.styles';
import { List } from 'pages/mainView/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoreInfo } from 'pages/moreInfo/MoreInfo';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/more-info/:albumId" element={<MoreInfo />} />
            <Route path="/" element={<List />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
