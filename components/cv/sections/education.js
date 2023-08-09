import Title from '../title.js';
import Year from '../year.js';
import Subtitle from '../subtitle.js';
import Bullet from '../bullet.js';

function Education() {
  const york = {
    year: '2021-Current',
    bold: 'PhD in History,',
    italic: 'York University, Toronto ON',
    bullets: ['Major Comprehensive Fields: Canadian History & Gender, Women, & Sexualities', 'Minor Field: Cultural History', 'In-progress, Preliminary Title: Archival Practice and Ephemera in the History of Nova Scotia’s Gay and Lesbian Liberation Movement, 1960-1996'],
  };

  return (
    <div className="flex flex-col">
      <Title title="Education" />
      <div className="flex flex-row">
        <Year year={york.year} />
        <div className="flex flex-col">
          <Subtitle bold={york.bold} italic={york.italic} />
          {york.bullets.map((bullet) => <Bullet bullet={bullet} />) }
        </div>
      </div>
    </div>
  );
}

export default Education;
