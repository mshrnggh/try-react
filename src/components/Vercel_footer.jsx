import Image from 'next/image';
import styles_footer from '../styles/Vercel_footer.module.css';

export function Vercel_footer() {
  return (  
    <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles_footer.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
    );
}