import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '인하대학교',
      subTitle: '기계공학과 학사 졸업',
      startedAt: '2013-03',
      endedAt: '2019-02',
    },
    {
      title: '마산제일고등학교',
      subTitle: '자연계 졸업',
      startedAt: '2010-03',
      endedAt: '2013-02',
    },
  ],
};

export default education;
