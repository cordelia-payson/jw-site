import Title from '../title.js';
import Bullet from '../bullet.js';
import { interests } from '../info.js';

function Interests() {
  return (
    <div className="flex flex-col">
      <Title title="Teaching & Research Interests" />
      <div className="">
        {interests.map((interest) => <Bullet bullet={interest} />)}
      </div>

    </div>
  );
}

export default Interests;
