function Form() {
  return (
    <div>
      <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
      <textarea className="textarea textarea-bordered" placeholder="Message" />
    </div>
  );
}

export default Form;
