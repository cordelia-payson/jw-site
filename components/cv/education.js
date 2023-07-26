import Title from './title.js';
import Year from './year.js';
import SubTitle from './subTitle.js';
import Bullet from './bullet.js';

function Education() {
  return (
    <div className="flex flex-col">
      <Title title="Education" />
      <div className="flex flex-row">
        <Year year="2012" />
        <div className="flex flex-col">
          <SubTitle subtitle="King's" />
          <Bullet bullet="Major Comprehensive Fields: Canadian History & Gender, Women, &
Sexualities"
          />
          <SubTitle subtitle="Queen's" />
        </div>
      </div>
    </div>
  );
}

export default Education;
