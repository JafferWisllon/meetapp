import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { List } from './style';

import { formatDate } from '../../../utils/formatDate';

interface Item {
  id: string;
  title: string;
  description: string;
  locale: string;
  date: string;
  banner: string;
  user_id: string;
}

interface Props {
  items: Item[];
}

const DashboardList: React.FC<Props> = ({ items }) => {
  return (
    <List>
      {items.map(item => (
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
