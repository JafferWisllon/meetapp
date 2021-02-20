import React from 'react';
import { useSelector } from 'react-redux';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { List } from './style';

import { formatDate } from '../../../utils/formatDate';
import { State } from '../../../store';
import { Meetup } from '../../../store/modules/dashboard/types';

const DashboardList: React.FC = () => {
  const data = useSelector<State, Meetup[]>(state => state.dashboard.data);

  return (
    <List>
      {data.map(item => (
        <li key={item.id}>
          <Link to={`/meetups/${item.id}`}>
            {item.title}
            <div>
              <strong>{formatDate(item.date)}</strong>
              <FiChevronRight />
            </div>
          </Link>
        </li>
      ))}
    </List>
  );
};

export default DashboardList;
