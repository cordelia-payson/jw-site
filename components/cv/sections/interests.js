import Title from '../title.js';
import Bullet from '../bullet.js';
import Year from '../year.js';
import { interests } from '../info.js';

function Interests() {
  return (
    <div className="flex flex-col mb-4">
      <Title title="Teaching & Research Interests" />
      <div className="flex flex-col">
        {interests.map((interest) => (
          <div className="flex flex-row">
            <Year year="    " />
            <Bullet bullet={interest} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interests;
