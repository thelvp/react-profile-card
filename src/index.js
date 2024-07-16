import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Avatar } from './components/avatar';
import { Intro } from './components/intro';
import { SkillList } from './components/skill-list';

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
