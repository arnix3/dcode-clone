import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

import STYLE from './Styled';

interface ITitleData {
  text: string;
  color: string;
  background: string;
}

export interface AdvertisementData {
  title: ITitleData;
  subtitle?: ITitleData;
}

interface IAdvertisementProps extends AdvertisementData {
  show: boolean;
}

function Advertisement(
  data: IAdvertisementProps,
): ReactElement<IAdvertisementProps> {
  const { title, subtitle, show } = data;

  return (
    <div
      css={[
        STYLE.container,
        {
          background: title.background,
          color: title.color,
          opacity: show ? 1 : 0,
        },
      ]}
    >
      <STYLE.SubtitleBadge
        badgeContent={subtitle?.text}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        textColor={subtitle?.color}
        background={subtitle?.background}
      >
        <Typography variant="body1">{title.text}</Typography>
      </STYLE.SubtitleBadge>
    </div>
  );
}

export default React.memo(Advertisement);
