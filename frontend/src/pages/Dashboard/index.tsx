import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

import Header from '../components/Header';
import { Content, Title, List } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Title>
          <h1>Meus meetups</h1>
          <a href="/meetups">
            <AiOutlinePlusCircle />
            Novo meetup
          </a>
        </Title>

        <List>
          <li>
            <a href="/1">
              Meetup de React Native
              <div>
                <strong>17 de junho, ás 13h</strong>
                <FiChevronRight />
              </div>
            </a>
          </li>
          <li>
            <a href="/1">
              NodeJs Meetup
              <div>
                <strong>17 de junho, ás 13h</strong>
                <FiChevronRight />
              </div>
            </a>
          </li>
          <li>
            <a href="/1">
              Rocketseat meetup
              <div>
                <strong>30 de agosto, ás 20h</strong>
                <FiChevronRight />
              </div>
            </a>
          </li>
          <li>
            <a href="/1">
              React on the House
              <div>
                <strong>17 de novembro, ás 20h</strong>
                <FiChevronRight />
              </div>
            </a>
          </li>
        </List>
      </Content>
    </>
  );
};

export default Dashboard;
