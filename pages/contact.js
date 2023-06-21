import Image from 'next/image';
import Layout from '../components/layout/layout.js';
import Form from '../components/contact/form.js';

function Contact() {
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold py-4">Get in touch!</h1>
            <p className="">jesswilton@email.com</p>
            <p className="">jesswilton@email.com</p>
            <p>social media icons</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
