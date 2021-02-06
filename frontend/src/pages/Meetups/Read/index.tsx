import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { getOne } from '../../../services/meetups';

import { Container, Title, Button, Image } from './style';
import { formatDate } from '../../../utils/formatDate';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

interface Meetup {
  banner: string;
  date: string;
  description: string;
  id: string;
  locale: string;
  title: string;
  user_id: string;
  formatedDate: string;
}

const Read: React.FC<Props> = ({ match }) => {
  const meetupId = match.params.id;
  const [meetup, setMeetup] = useState<Meetup>({} as Meetup);

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

  const { SERVER_URL } = process.env;

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>{meetup.title}</h1>
          <div>
            <Button type="button" color="#4DBAF9">
              Editar
            </Button>
            <Button type="button">Cancelar</Button>
          </div>
        </Title>
        <Image
          src={`http://localhost:3333/files/${meetup.banner}`}
          alt={meetup.title}
        />
        <p>{meetup.description}</p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <strong
            style={{
              marginRight: '30px',
            }}
          >
            {meetup.locale}
          </strong>
          <strong>{meetup.formatedDate}</strong>
        </div>
      </Container>
    </>
  );
};

export default Read;
