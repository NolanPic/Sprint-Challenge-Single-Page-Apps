import styled from 'styled-components';

export const colors = {
    darkGreen: '#05200c',
    lightGreen: 'rgb(111, 255, 139)',
    faintGreen: 'rgba(134, 239, 125, 0.15)',
    darkRed: 'rgb(54, 46, 45)',
    lightRed: '#5c4547',
    offWhite: '#b9d0c1'
};

const styles = {
    mainBorder: `10px solid ${colors.darkRed}`,
    faintGreenBorder: `3px solid ${colors.faintGreen}`
}

export const Card = styled.div`
  border: ${styles.faintGreenBorder};
  width: 30%;
  margin-bottom: 4rem;
`;

export const CardImg = styled.img`
  max-width: 100%;
`;

export const CardBody = styled.div`
  padding: 4rem;

  h3 {
    color: ${colors.lightGreen}
  }

  ul {
    padding: 0;
  }
`;


export default styles;

