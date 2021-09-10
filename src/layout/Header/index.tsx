import React from 'react';
import _ from 'lodash';
import Advertisement, {
  AdvertisementData,
} from '../../component/Advertisement';
import THEME from '../../theme';
import UserNavigation from '../../component/UserNavigation';
import MenuNavigation from '../../component/MenuNavigation';

const advertisementData: AdvertisementData[] = [
  {
    title: {
      text: '파격적인 가격을 선보이는 OUTLET 서비스 오픈!',
      background: '#1f1f1f',
      color: THEME.palette.common.white,
    },
  },
  {
    title: {
      text: '9월 NEW회원 아크네스튜디오 15% 할인쿠폰!',
      background: '#196cf6',
      color: THEME.palette.common.white,
    },
    subtitle: {
      text: '-9/30',
      background: '#ececec',
      color: '#196cf6',
    },
  },
  {
    title: {
      text: '톰브라운 & Z플립3/ 버즈2/ 가디건 랜덤당첨',
      background: '#1f2049',
      color: THEME.palette.common.white,
    },
    subtitle: {
      text: '-9/30',
      background: '#881a2d',
      color: THEME.palette.common.white,
    },
  },
];

function Header(): JSX.Element {
  const [showIndex, setShowIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      setShowIndex((prevState) => (prevState + 1) % 3);
    }, 3000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <header
      css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        width: '100%',
      }}
    >
      <div css={{ position: 'relative', height: 47 }}>
        {_.map(advertisementData, ({ title, subtitle }, idx) => (
          <Advertisement
            key={title.text}
            title={title}
            subtitle={subtitle}
            show={showIndex === idx}
          />
        ))}
      </div>
      <UserNavigation />
      <MenuNavigation />
    </header>
  );
}

export default Header;
