import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const cursor = document.getElementById('custom_cursor') as HTMLElement;

    const positionElement = (e: any) => {
      const mouseY = e.pageY;
      const mouseX = e.pageX;

      document.documentElement.style.setProperty('--cursorX', mouseX + 'px');
      document.documentElement.style.setProperty('--cursorY', mouseY + 'px');

      cursor.style.transform = `translate3d(${mouseX - 50}px, ${
        mouseY - 50
      }px, 0)`;
    };

    window.addEventListener('mousemove', positionElement);
  }, []);

  // useEffect(() => {
  //   function update(e: any) {
  //     var x = e.pageX || e.clientX || e.touches[0]?.clientX;
  //     var y = e.pageY || e.clientY || e.touches[0]?.clientY;

  //     document.documentElement.style.setProperty('--cursorX', x + 'px');
  //     document.documentElement.style.setProperty('--cursorY', y + 'px');
  //   }

  //   document.addEventListener('mousemove', update);
  //   document.addEventListener('touchmove', update);
  // }, []);
  return (
    <>
      <div className='custom_cursor' id='custom_cursor'></div>
      <Component {...pageProps} />
    </>
  );
}
