import React from 'react';
import moment from 'moment';
import { CSSObject } from '@emotion/react';

import THEME from '../../theme';
import getMomentInstance from '../../utils';

export interface ICountdownProps {
  dueDate: moment.Moment;
  prefix?: JSX.Element;
  style?: CSSObject;
  prefixStyle?: CSSObject;
}

function Countdown({
  dueDate,
  prefix,
  style,
  prefixStyle,
}: ICountdownProps): React.ReactElement<ICountdownProps> {
  const [remainDate, setRemainDate] = React.useState(
    dueDate.diff(getMomentInstance()),
  );
  const [formattedRemainDate, setFormattedRemainDate] = React.useState(
    getMomentInstance(remainDate).format('D일 H시간 m분 s초'),
  );

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainDate((prevMilSeconds) => prevMilSeconds - 1000);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  React.useEffect(() => {
    setFormattedRemainDate(
      getMomentInstance(remainDate).format('D일 H시간 m분 s초'),
    );
  }, [remainDate]);

  return (
    <div
      css={[
        {
          color: THEME.palette.common.white,
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
    >
      {prefix && <span css={prefixStyle}>{prefix}</span>}
      <span css={{ position: 'relative', top: '0.25ex' }}>
        {formattedRemainDate}
      </span>
    </div>
  );
}

export default Countdown;
