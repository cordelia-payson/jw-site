/* eslint-disable max-len */
import Title from '../title.js';
import Line from '../line.js';

function Articles() {
  return (
    <div className="flex flex-col mb-4">
      <Title title="Articles in Progress" />
      <div className="flex flex-col">

        <div>
          <Line line="“A Cultural Biography of the Green Lantern Building: Liminal Space and Cultural Forgetting”" />
          <div className="ml-14 max-w-2xl">
            This article explores the many lives of a building in Halifax, including as a significant
            queer space in the 1980s. I am preparing it for submission to the
            {' '}
            <em>Journal of the History of Sexuality</em>
            .
          </div>
        </div>

        <div>
          <Line line="“Underwater Women: Fragments of Queer Futurity, Lesbian Desire, and Community Contracts”" />
          <div className="ml-14 max-w-2xl">
            This creative historical work is an application of Saidiya Hartman’s “critical fabulation”
            on the historical possibilities of lesbian fiction in Canada using Jane Rule’s
            {' '}
            <em>Contract With the World</em>
            . I am preparing this for
            {' '}
            <em>GLQ: A Journal of Lesbian and Gay Studies.</em>
            .
          </div>
        </div>

      </div>
    </div>
  );
}

export default Articles;
