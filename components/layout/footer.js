export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-accent text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>
          Built by
          {' '}
          <button type="button">
            <a className="link" href="https://www.cordeliapayson.com" target="_blank" rel="noreferrer noopener">Cordelia Payson</a>
          </button>
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="linkedin">linkedin</a>
        <a href="social media">social media</a>
      </div>
    </footer>
  );
}
