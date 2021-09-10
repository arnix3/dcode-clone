import React from 'react';
import { useTheme } from '@material-ui/core';

function Logo(): JSX.Element {
  const theme = useTheme();

  return (
    <div
      css={{
        width: 102,
        height: 39,
        color: theme.palette.grey[900],
        textAlign: 'center',
      }}
    >
      d.code
    </div>
  );
}

function MenuNavigation(): JSX.Element {
  const theme = useTheme();

  return (
    <nav
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1, 7),
        height: 72,
      }}
    >
      <Logo />

      <ul
        css={{
          display: 'flex',
          li: {
            padding: theme.spacing(1, 3),
            color: theme.palette.grey[900],
            fontWeight: 700,
            fontSize: 17,
          },
        }}
      >
        <li>PRE-ORDER</li>
        <li>SELECT</li>
        <li>OUTLET</li>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>NEWS</li>
        <li>PRE-VIEW</li>
      </ul>

      <div css={{ display: 'flex' }}>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: `1px solid ${theme.palette.grey[700]}`,
            color: theme.palette.grey[700],
            width: 206,
            padding: '2px 0',
            marginRight: 30,
          }}
        >
          <span css={{ flex: 1 }}>검색</span>
          <i data-eva="search" />
        </div>
        <i data-eva="shopping-cart-outline" />
      </div>
    </nav>
  );
}

export default MenuNavigation;
