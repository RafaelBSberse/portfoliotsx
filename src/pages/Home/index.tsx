import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Mountain, Content } from './style'

export function Home() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  return (
    <>
      <Header/>
      <Mountain scroll={offset}/>
      <Content>
      </Content>
    </>
  )
}