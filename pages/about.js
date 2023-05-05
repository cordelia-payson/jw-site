import Image from 'next/image';
import Layout from '../components/layout.js';

function About() {
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {/* <Image src="/jess1.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <h1 className="text-5xl font-bold">About</h1>
            <p className="py-6">Provident cupiditat voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
