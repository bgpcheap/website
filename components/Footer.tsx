import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="fraud-warning">
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <path d="M24 4 44 41H4L24 4Z" />
          <path d="M24 16v12M24 35v.5" />
        </svg>
        <p>
          This project does not initiate communication via support tickets or live chat.
          Anyone claiming to be a bgp.cheap auditor is fraudulent.
        </p>
      </div>
      <a
        className="footer-credit"
        href="https://pdxnet.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Powered by Paradox Networks"
      >
        <span>Powered by</span>
        <Image src="/paradox.svg" alt="Paradox Networks" width={124} height={17} />
      </a>
    </footer>
  );
}
