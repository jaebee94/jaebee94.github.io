import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '조재빈',
    small: '(Jaebin Cho)',
  },
  contact: [
    {
      title: 'woqls8449@gmail.com',
      link: 'woqls8449@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-9220-8440',
      icon: faPhone,
      // badge: true,
    },
    {
      title: 'https://github.com/jaebee94',
      link: 'https://github.com/jaebee94',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/iu.loen',
    //   icon: faFacebook,
    // },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: '언제든지 연락주시면 빠르게 답변드리겠습니다.',
    icon: faBell,
  },
};

export default profile;
