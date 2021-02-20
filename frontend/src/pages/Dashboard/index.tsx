import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { Content, Title } from './style';

import DashboardList from '../components/DashboardList';
import { getMeetupsRequest } from '../../store/modules/dashboard/action';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetupsRequest());
  }, [dispatch]);

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
        <DashboardList />
      </Content>
    </>
  );
};

export default Dashboard;
