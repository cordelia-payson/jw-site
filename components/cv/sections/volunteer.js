import Title from '../title.js';
import Year from '../year.js';
import Subtitle from '../subtitle.js';
import Bullet from '../bullet.js';
import { volunteer } from '../info.js';

function Volunteer() {
  return (
    <div className="flex flex-col ml-0">
      <Title title="Activism, Leadership, and Volunteer Experience" />
      <div className="flex flex-col">
        {volunteer.map((job) => (
          <div className="flex flex-row">
            <Year year={job.year} />
            <div className="flex flex-col">
              <Subtitle bold={job.bold} italic={job.italic} />
              {job.bullets.map((bullet) => <Bullet bullet={bullet} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Volunteer;
