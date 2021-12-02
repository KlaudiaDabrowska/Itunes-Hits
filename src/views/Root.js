import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import './Root.style.js';
import { theme } from 'assets/styles/theme.js';
import { Wrapper } from './Root.style.js';
import { Header } from 'components/atoms/Header/Header.js';
import { FetchList } from 'components/organisms/FetchList/FetchList.js';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <FetchList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
