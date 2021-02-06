import React from 'react';

import { Content } from './style';

const Form: React.FC = () => {
  return (
    <Content>
      <form>
        <input type="file" />
        <input type="text" placeholder="Titulo do meetup" />
        <textarea placeholder="Descrição completa" />
        <input type="date" placeholder="Data do meetup" />
        <input type="text" placeholder="Localização" />
        <div id="button">
          <button type="submit">Salvar meetup</button>
        </div>
      </form>
    </Content>
  );
};

export default Form;
