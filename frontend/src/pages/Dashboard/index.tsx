import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Header from '../components/Header';
import { Content, Title } from './style';

import { listAll } from '../../services/meetups';
import DashboardList from '../components/DashboardList';

const Dashboard: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadAll() {
      const response = await listAll();
      setData(response.data);
    }

    loadAll();
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Title>
          <h1>Meus meetups</h1>
          <Link to="/meetups/new">
            <AiOutlinePlusCircle />
            Novo meetup
          </Link>
        </Title>
        <DashboardList items={data} />
      </Content>
    </>
  );
};

export default Dashboard;
