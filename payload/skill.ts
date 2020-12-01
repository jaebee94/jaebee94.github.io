import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Django',
      level: 3,
    },
    {
      title: 'Python',
      level: 1,
    },
    {
      title: 'RESTful API',
      level: 1,
    },
    {
      title: 'Spring Framework',
      level: 1,
    },
    {
      title: 'NginX',
      level: 1,
    },
    {
      title: 'AWS',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Redis',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Vue.js',
      level: 2,
    },
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'HTML',
      level: 2,
    },
    {
      title: 'CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Jenkins',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
