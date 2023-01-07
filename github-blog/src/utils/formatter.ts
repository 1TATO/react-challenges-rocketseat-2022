import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

export function formatDate(date: string) {
  return moment(date).fromNow();
}
