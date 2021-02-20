import React, { useState, useEffect } from 'react';
import { getOne } from '../../services/meetups';
import { formatDate } from '../../utils/formatDate';
import Header from '../components/Header';
import Form from './Form';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const Edit: React.FC<Props> = ({ match }) => {
  const meetupId = match.params.id;
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await getOne(meetupId);
      const data = {
        ...response.data,
        formatedDate: formatDate(response.data.date),
      };
      setMeetup(data);
    }

    loadMeetup();
  }, [meetupId]);

  return (
    <>
      <Header />
      <Form />
    </>
  );
};

export default Edit;
