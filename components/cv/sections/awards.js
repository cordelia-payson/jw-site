import Title from '../title.js';
import Year from '../year.js';
import Line from '../line.js';
import { awards } from '../info.js';

function Awards() {
  return (
    <div className="flex flex-col ml-0 mb-4">
      <Title title="Awards and Honours" />
      <div className="flex flex-col">
        {awards.map((award) => (
          <div className="flex flex-row">
            <Year year={award[0]} />
            <Line line={award[1]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards;