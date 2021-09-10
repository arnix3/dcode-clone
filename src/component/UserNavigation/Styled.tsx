import { css } from '@emotion/react';

const container = css({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'relative',
});

const menuList = css({
  display: 'flex',
  height: 18,
});

const menu = css({
  fontSize: 12,
  paddingLeft: 37,
  transform: 'translateY(1ex)',
});

export default {
  container,
  menuList,
  menu,
};
