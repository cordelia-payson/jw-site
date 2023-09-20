import Title from '../title.js';
import Line from '../line.js';
import Year from '../year.js';
import { memberships } from '../info.js';

function Memberships() {
  return (
    <div className="flex flex-col mb-4">
      <Title title="Memberships" />
      {memberships.map(((membership) => (
        <div className="flex flex-row">
          <Year year={membership.year} />
          <div className="flex flex-col">
            <Line line={membership.line} />
          </div>
        </div>
      )))}
    </div>
  );
}

export default Memberships;
