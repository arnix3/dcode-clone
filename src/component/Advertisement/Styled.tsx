import { css } from '@emotion/react';
import * as MUI from '@material-ui/core';

const container = css({
  width: '100%',
  height: 47,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  inset: 0,
  transition: 'opacity 0.75s ease-in-out',
});

const SubtitleBadge = MUI.withStyles<
  'badge',
  never,
  { textColor?: string; background?: string } & MUI.BadgeProps
>({
  badge: {
    color: (props) => props.textColor,
    background: (props) => props.background,
    transform: 'translate(calc(-100% - 10px), 10%)',
    padding: '3px 12px',
  },
})(MUI.Badge);

export default {
  container,
  SubtitleBadge,
};
