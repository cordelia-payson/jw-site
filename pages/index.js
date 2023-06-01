import Image from 'next/image';
import Layout from '../components/layout/layout.js';

function HomePage() {
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row bg-primary">
          <img src="/jess.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Welcome</h1>
            <p className="py-6">I am a postdoctoral fellow at Harvard University. I work on the socio-cultural history of slavery in late Medieval and Early Modern Florence. I earned my PhD in York University, Toronto in 2022. I have held fellowships with the Centre for Feminist Research at York University and the Centre for Reformation and Renaissance Studies at the University of Toronto. I have taught at Glendon College at York University. My work is supported by the SSHRC postdoctoral fellowship, the Joseph-Armand Bombardier SSHRC Doctoral Award, the Ontario Graduate Scholarship, the Paul Oskar Kristeller Fellowship from the Renaissance Society of America and the Inclusion and Diversity Research Grant from the Medieval Academy of America.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
