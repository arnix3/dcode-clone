import moment from 'moment';

moment.locale('ko-kr');

function getMomentInstance(input?: moment.MomentInput): moment.Moment {
  return moment.utc(input, true);
}

export default getMomentInstance;
