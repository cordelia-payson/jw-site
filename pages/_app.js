import '../globals.css';
import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${lora.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
