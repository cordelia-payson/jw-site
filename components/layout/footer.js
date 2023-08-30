export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-accent text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>
          Built by
          {' '}
          <button type="button">
            <a className="link" href="https://www.cordeliapayson.com" target="_blank" rel="noreferrer noopener">Cordelia Payson</a>
          </button>
        </p>
        <p className="ml-4">Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
}
