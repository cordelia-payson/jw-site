/* eslint-disable max-len */
import Title from '../title.js';
import Indent from '../indent.js';
import { presentations } from '../info.js';

function Presentations() {
  return (
    <div className="flex flex-col ml-0 mb-4">
      <Title title="Publications" />

      <div className="ml-14 -indent-14 max-w-2xl">
        Wilton, Jessica. ““Busting Up the Baths”: Toronto’s Queer Past and the Legacy of the Barracks
        Raid in
        {' '}
        <em>The Body Politic</em>
        {' '}
        .” The CLGBT History Queer History Conference, San
        Francisco CA, June 2022.
      </div>

      {presentations.map((text) => <Indent text={text} />)}
    </div>
  );
}

export default Presentations;
