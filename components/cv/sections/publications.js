/* eslint-disable max-len */
import Title from '../title.js';

function Publication() {
  return (
    <div className="flex flex-col ml-0">
      <Title title="Publications" />

      <div className="ml-14 -indent-14 max-w-2xl">
        Wilton, Jessica. “Laughing at Everyone: An Analysis of Satire in Ilf and Petrov&apos;s
        {' '}
        <em>The Little Golden Calf.” Beryoza Dalhousie University Russian Studies Society Journal</em>
        {' '}
        (2018): 6-11.
      </div>

      <div className="ml-14 -indent-14 max-w-2xl">
        Wilton, Jessica. “Film in the Weimar Republic: Pandora’s Box and the Femme Fatale.”
        {' '}
        <em>Supercut Dalhousie Cinema and Media Studies Undergraduate Journal</em>
        {' '}
        1 (2018): 41-48.
      </div>
    </div>
  );
}

export default Publication;
