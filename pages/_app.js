import '../globals.css';
import { Nanum_Myeongjo } from 'next/font/google';

const nanum = Nanum_Myeongjo({
  subsets: ['latin'],
  variable: '--font-nanum',
  weight: '700',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${nanum.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
