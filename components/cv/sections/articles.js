import Title from '../title.js';
import { Article1 } from '../info.js';

function Articles() {
  return (
    <div className="flex flex-col ml-0">
      <Title title="Articles in Progress" />
      <div className="flex flex-col">
        <Article1 />
      </div>
    </div>
  );
}

export default Articles;
