import Image from 'next/image';
import Layout from '../components/layout/layout.js';
import Education from '../components/cv/sections/education.js';
import Awards from '../components/cv/sections/awards.js';
import Interests from '../components/cv/sections/interests.js';
import Professional from '../components/cv/sections/professional.js';
import Volunteer from '../components/cv/sections/volunteer.js';
import Publications from '../components/cv/sections/publications.js';

function CV() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl w-max m-4">Curriculum Vitae</h1>
        </div>
        <div className="min-h-screen m-6">
          <div className="flex flex-col">
            <Education />
            <Awards />
            <Interests />
            <Professional />
            <Volunteer />
            <Publications />
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default CV;
