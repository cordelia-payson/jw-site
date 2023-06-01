/* eslint-disable max-len */
import Image from 'next/image';
import Layout from '../components/layout/layout.js';

function About() {
  return (
    <Layout>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row bg-secondary text-black">
          {/* <Image src="/jess1.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <h1 className="text-5xl font-bold">About</h1>
            <p className="py-6">
              I am a Chinese-Canadian immigrant and native of both Xi’an, China and Toronto, Canada. I am currently a postdoctoral fellow in history at Harvard University and am based out of Boston, MA. Other than English, I am fluent in Mandarin Chinese and work in Italian, French, and Latin. I earned my PhD at York University, my BA Honours at the University of Toronto Victoria College in Political Science and Renaissance Studies and my MA in History at Queen’s University.

              Going into my doctoral studies, I received the Joseph Armand Bombardier CGS award. I have also received the Ontario Graduate Scholarship, the Marjorie McLean Oliver Scholarship, the Paul Oskar Kristeller Renaissance Society of America Fellowship and the Diversity and Inclusion Research Grant from the Medieval Academy of America

              I have taught at York University Glendon in the history department.

              I have also worked in the archives in Florence during 2018-2019, funded by the Micheal Smith Foreign Studies Supplement. I specialize in fourteenth-fifteenth century notarial and merchant hands. I also can do paleography on a contractual basis. Please contact me for more information.

              I am available also for speaking engagements. I have recently guest lectured on slavery in premodern Europe, the problem of citations in the academy, and gender in humanism. If you are interested in booking me for a speaking engagement, please do not hesitate to email me.

            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
