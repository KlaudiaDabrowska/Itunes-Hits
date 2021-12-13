import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import { Wrapper } from 'assets/styles/Root.styles';
import { Header } from 'components/common/Header.js';
import { FetchList } from 'pages/root/FetchList.js';
import 'assets/styles/Root.styles';

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
