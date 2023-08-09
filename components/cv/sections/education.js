import Title from '../title.js';
import Year from '../year.js';
import Subtitle from '../subtitle.js';
import Bullet from '../bullet.js';
import { york, queens, kings } from '../info.js';

function Education() {
  return (
    <div className="flex flex-col ml-0">
      <Title title="Education" />
      <div className="flex flex-col">

        <div className="flex flex-row">
          <Year year={york.year} />
          <div className="flex flex-col">
            <Subtitle bold={york.bold} italic={york.italic} />
            {york.bullets.map((bullet) => <Bullet bullet={bullet} />) }
          </div>
        </div>

        <div className="flex flex-row">
          <Year year={queens.year} />
          <div className="flex flex-col">
            <Subtitle bold={queens.bold} italic={queens.italic} />
            {queens.bullets.map((bullet) => <Bullet bullet={bullet} />) }
          </div>
        </div>

        <div className="flex flex-row">
          <Year year={kings.year} />
          <div className="flex flex-col">
            <Subtitle bold={kings.bold} italic={kings.italic} />
            {kings.bullets.map((bullet) => <Bullet bullet={bullet} />) }
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;
