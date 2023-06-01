function Form() {
  return (
    <div>
      <div>
        <label htmlFor="name">
          <input id="name" type="text" placeholder="Name" className="input border-solid border-0 border-b border-black rounded-none w-full max-w-xs" />

        </label>
      </div>
      <div>
        <label htmlFor="email">
          Your Email
          <input id="name" type="text" placeholder="name@email.com" className="input input-bordered border-b w-full max-w-xs" />

        </label>
      </div>
      <div>
        <label htmlFor="message">
          Your Message
          <textarea id="message" className="textarea border-solid border-0 border-b border-black rounded-none w-full max-w-xs" placeholder="Message" />
        </label>
      </div>
      <button type="button" className="btn btn-outline">Send Message</button>
    </div>
  );
}

export default Form;
