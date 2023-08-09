import Title from '../title.js';
import Bullet from '../bullet.js';
import { interests } from '../info.js';

function Interests() {
  return (
    <div className="flex flex-col ml-0">
      <Title title="Teaching & Research Interests" />
      {interests.map((interest) => <Bullet bullet={interest} />)}
    </div>
  );
}

export default Interests;
