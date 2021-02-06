import styled from 'styled-components';

interface ButtonProps {
  color?: string;
}

export const Container = styled.div`
  width: 940px;
  margin: 50px auto;

  p {
    color: #fff;
    margin-top: 10px;
  }

  strong {
    margin-top: 30px;
    color: #fff;
    opacity: 0.7;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: #fff;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 138px;
  height: 42px;
  color: #fff;
  background: ${props => (props.color ? props.color : '#D44059')};
  border: 0;
  margin-left: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  border-radius: 10px;
`;
