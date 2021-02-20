import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import { getOne, deleteMeetup } from '../../../services/meetups';

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
  const history = useHistory();
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

  const handleCancel = useCallback(
    async id => {
      try {
        await deleteMeetup(id);
        toast.success('Meetup cancelado com sucesso');
        history.push('/');
      } catch (error) {
        console.log(error);
        toast.error('Não foi possivel cancelar esse meetup');
      }
    },
    [history],
  );

  const { title, banner, description, locale, formatedDate, id } = meetup;

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
                <Button
                  type="button"
                  color="#4DBAF9"
                  onClick={() => history.push(`/meetups/edit/${id}`)}
                >
                  Editar
                </Button>
                <Button type="button" onClick={() => handleCancel(id)}>
                  Cancelar
                </Button>
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
