import styled from 'styled-components';
import { shade } from 'polished';

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

      & + input {
        margin-top: 5px;
      }
    }

    input[type='file'] {
      background: #1a151f;
      height: 300px;
      cursor: pointer;
    }

    textarea {
      margin-top: 5px;
      background: #2b1e30;
      padding: 15px;
      color: #ccc;
      width: 100%;
      height: 200px;
      resize: none;
      border: 0;
    }

    #button {
      margin-top: 15px;
      width: 100%;
      display: flex;
      justify-content: flex-end;

      button {
        background: #f94d6a;
        width: 180px;
        height: 42px;
        border: 0;
        border-radius: 4px;
        color: #fff;
        transition: background 0.2s;

        &:hover {
          background: ${shade(0.2, '#f94d6a')};
        }
      }
    }
  }
`;
