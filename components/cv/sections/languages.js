import Title from '../title.js';
import Bullet from '../bullet.js';
import { languages } from '../info.js';

function Languages() {
  return (
    <div className="flex flex-col">
      <Title title="Languages" />
      <div>
        {languages.map((language) => <Bullet bullet={language} />)}
      </div>
    </div>
  );
}

export default Languages;
