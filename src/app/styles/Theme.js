const theme = {
  colors: {
    foregroundColor: '#fff',
    backgroundColor: '#000',
  }
}

export default theme;

/*Access theme in components:
import { styled } from 'styled-components';

export const = styled.div`
  background-color: ${({ theme })} => theme.colors.foregroundColor};
`;
*/