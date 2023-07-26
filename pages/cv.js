import Image from 'next/image';
import Layout from '../components/layout/layout.js';
import Education from '../components/cv/education.js';

function CV() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl w-max m-4">Curriculum Vitae</h1>
        </div>
        <div className="hero min-h-screen">
          <div className="hero-content" />
          <Education />
        </div>
      </div>

    </Layout>
  );
}

export default CV;
