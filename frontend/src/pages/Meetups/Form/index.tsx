import React from 'react';
import { useFormik } from 'formik';
import { Content } from './style';

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      date: '',
      locale: '',
    },
    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <Content>
      <form onSubmit={formik.handleSubmit}>
        <input type="file" />
        <input
          name="title"
          type="text"
          placeholder="Titulo do meetup"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <textarea
          name="description"
          value={formik.values.description}
          placeholder="Descrição completa"
          onChange={formik.handleChange}
        />
        <input
          name="date"
          type="text"
          placeholder="Data do meetup"
          onChange={formik.handleChange}
          value={formik.values.date}
        />
        <input
          name="locale"
          type="text"
          placeholder="Localização"
          onChange={formik.handleChange}
          value={formik.values.locale}
        />
        <div id="button">
          <button type="submit">Salvar meetup</button>
        </div>
      </form>
    </Content>
  );
};

export default Form;
