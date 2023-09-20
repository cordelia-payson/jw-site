import Title from '../title.js';
import Year from '../year.js';
import Subtitle from '../subTitle.js';
import Bullet from '../bullet.js';
import { education } from '../info.js';

function Education() {
  return (
    <div className="flex flex-col ml-0 mb-4">
      <Title title="Education" />
      <div className="flex flex-col">
        {education.map((school) => (
          <div className="flex flex-row">
            <Year year={school.year} />
            <div className="flex flex-col">
              <Subtitle bold={school.bold} italic={school.italic} />
              {school.bullets.map((bullet) => <Bullet bullet={bullet} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
