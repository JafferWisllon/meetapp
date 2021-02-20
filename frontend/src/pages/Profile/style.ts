import { shade } from 'polished';
import styled from 'styled-components';

export const Content = styled.div`
  width: 940px;
  margin: 50px auto;

  form {
    input {
      background: #2b1e30;
      padding: 0 15px;
      color: #ccc;
      width: 100%;
      height: 50px;
      display: block;
      border: 0;
      border-radius: 4px;
      font-size: 18px;

      & + input {
        margin-top: 10px;
      }
    }

    hr {
      margin: 25px 0;
      opacity: 0.1;
    }

    #button {
      margin-top: 15px;
      width: 100%;
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f94d6a;
        width: 160px;
        height: 42px;
        border: 0;
        border-radius: 4px;
        color: #fff;
        transition: background 0.2s;
        font-size: 16px;

        &:hover {
          background: ${shade(0.2, '#f94d6a')};
        }

        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
