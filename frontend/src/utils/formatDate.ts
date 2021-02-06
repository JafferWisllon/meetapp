/* eslint-disable import/no-duplicates */
import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

export const formatDate = (date: string): string => {
  const parserDate = parseISO(date);

  return format(parserDate, "dd 'de' MMMM yyyy, 'às' HH 'horas'", {
    locale: ptBr,
  });
};
