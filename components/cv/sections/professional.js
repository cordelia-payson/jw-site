import Title from '../title.js';
import Year from '../year.js';
import Subtitle from '../subTitle.js';
import Bullet from '../bullet.js';
import { professional } from '../info.js';

function Professional() {
  return (
    <div className="flex flex-col mb-4">
      <Title title="Professional & Academic Experience" />
      <div className="flex flex-col">
        {professional.map((job) => (
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

export default Professional;
