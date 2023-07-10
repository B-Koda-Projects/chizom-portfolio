import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const cursor = document.getElementById('custom_cursor') as HTMLElement;
    const pointer = document.getElementById('custom_pointer') as HTMLElement;

    const positionElement = (e: any) => {
      const mouseY = e.pageY;
      const mouseX = e.pageX;

      cursor.style.transform = `translate3d(${mouseX - 15}px, ${
        mouseY - 15
      }px, 0)`;
      pointer.style.transform = `translate3d(${mouseX - 3}px, ${
        mouseY - 3
      }px, 0)`;
    };

    window.addEventListener('mousemove', positionElement);
  }, []);
  return (
    <>
      <div className='custom_cursor' id='custom_cursor'></div>
      <div className='custom_pointer' id='custom_pointer'></div>
      <Component {...pageProps} />
    </>
  );
}
