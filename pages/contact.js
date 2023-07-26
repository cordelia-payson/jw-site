import Image from 'next/image';
import Layout from '../components/layout/layout.js';
import Form from '../components/contact/form.js';

function Contact() {
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col">
            <h1 className="text-5xl font-bold py-4">Get in touch!</h1>
            <button type="button">
              <a className="link" href="mailto:jwilton@yorku.ca" target="_blank" rel="noreferrer noopener">jwilton@yorku.ca</a>
            </button>
            <button type="button">
              <a className="link" href="https://www.linkedin.com/in/jess-wilton-938789266/">LinkedIn</a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
