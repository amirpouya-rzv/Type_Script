import moment from "jalali-moment";
moment.locale("fa-IR");

export type FormatType = | 'ddd. jD jMMMM jYYYY' | 'jD jMMMM jYYYY' | 'jMM/jDD' | 'jYYYY/jMM/jD'| 'jYYYY/jMM/jD HH:mm:ss'; // شامل زمان

export const converMiladi2Jalali = ( date?: string | undefined,  format: FormatType = 'jD jMMMM jYYYY') => {
  const newDate = moment(date);
  return newDate.format(format);
};




