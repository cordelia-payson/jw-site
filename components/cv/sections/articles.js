import Title from '../title.js';
import { articles } from '../info.js';

function Articles() {
  return (
    <div className="flex flex-col ml-0">
      <Title title="Articles in Progress" />
      <div className="flex flex-col">
        {articles[0].Article1}
      </div>
    </div>
  );
}

export default Articles;
