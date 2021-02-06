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
  banner: {
    filename: string;
  };
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMeetup() {
      setLoading(true);
      const response = await getOne(meetupId);
      const data = {
        ...response.data,
        formatedDate: formatDate(response.data.date),
      };
      setMeetup(data);
      setLoading(false);
    }

    loadMeetup();
  }, [meetupId]);

  const { title, banner, description, locale, formatedDate } = meetup;

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <Title>
              <h1>{title}</h1>
              <div>
                <Button type="button" color="#4DBAF9">
                  Editar
                </Button>
                <Button type="button">Cancelar</Button>
              </div>
            </Title>
            <Image
              src={`http://localhost:3333/files/${banner?.filename}`}
              alt={title}
            />
            <p>{description}</p>

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
                {locale}
              </strong>
              <strong>{formatedDate}</strong>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Read;
