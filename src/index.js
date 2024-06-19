import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Avatar = (props) => {
  return (
    <img
      className='avatar'
      src={props.filepath}
      alt={props.alt}
    ></img>
  );
};

const Intro = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
    </div>
  );
};

const SkillList = (props) => {
  return (
    <div className='skill-list'>
      <Skill
        skill='HTML/CSS'
        color='lightcoral'
        emoji='🌈'
      />
      <Skill
        skill='Javascript'
        color='indianred'
        emoji='💪'
      />
      <Skill
        skill='React'
        color='palevioletred'
        emoji='✨'
      />
      <Skill
        skill='Ruby/Ruby on Rails'
        color='sandybrown'
        emoji='♦️'
      />
      <Skill
        skill='Git/Github'
        color='lightsteelblue'
        emoji='⚡️'
      />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div
      className='skill'
      style={{ backgroundColor: props.color }}
    >
      {props.emoji} {props.skill}
    </div>
  );
};

function App() {
  return (
    <div className='card'>
      <Avatar
        filepath='/avatar.jpeg'
        alt='Loes van Puijenbroek'
      />
      <div className='data'>
        <Intro
          name='Loes van Puijenbroek'
          intro='Full stack web developer with focus on front end. Tech + Privacy Lawyer with 9+ years of experience. When not coding, I train for (ultra)marathons and read fantasy and scifi books.'
        />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
