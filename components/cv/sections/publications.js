import Title from '../title.js';
import { Publication1, Publication2 } from '../info.js';

function Publication() {
  return (
    <div className="flex flex-col ml-0">
      <Title title="Publications" />
      <Publication1 />
      <Publication2 />
    </div>
  );
}

export default Publication;
