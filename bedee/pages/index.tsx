import type { NextPage } from 'next'
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    const {data: session} = useSession();

    useEffect(() => {
      if (!session) {
        Router.push("/signup");
      }
    }, [])

    return (
      <div className={styles.container}>
        <Navbar/>
      </div>
    )
}

export default Home
