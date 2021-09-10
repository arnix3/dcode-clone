import React from 'react';
import { useTheme } from '@material-ui/core';

import STYLE from './Styled';

function UserNavigation(): JSX.Element {
  const theme = useTheme();

  return (
    <div
      css={[
        STYLE.container,
        {
          padding: theme.spacing(1, 7),
          borderBottom: `1px solid ${theme.palette.grey[400]}`,
        },
      ]}
    >
      <ul css={STYLE.menuList}>
        <li css={[STYLE.menu, { color: theme.palette.grey[600] }]}>
          <a href="/">로그인</a>
        </li>
        <li css={[STYLE.menu, { color: theme.palette.grey[600] }]}>
          <a href="/">회원가입</a>
        </li>
        <li css={[STYLE.menu, { color: theme.palette.grey[600] }]}>
          <a href="/">고객센터</a>
        </li>
      </ul>
    </div>
  );
}

export default UserNavigation;
