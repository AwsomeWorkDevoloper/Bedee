import type { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Router from 'next/router'
import styles from '../styles/Signup.module.scss'

const Signup: NextPage = () => {
    const { data: session } = useSession();

    if (session) {
        Router.push("/");
    }

    return (
        <main className={styles.fullBody}>
            <div className={styles.container}>
                <img src={'/logo.svg'} alt="logo" height={65}/>
                <h1>Sign up</h1>
                <div onClick={() => signIn()} className={'btn btn-secondary'}>Sign in with Google</div>
            </div>
        </main>
    )
}

export default Signup
