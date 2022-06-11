import styles from '../styles/Navbar.module.scss'
import {FaPlus, FaSearch} from 'react-icons/fa'
import {BsGearFill} from 'react-icons/bs'
import { signOut } from 'next-auth/react'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.leftSide}>
                <img src={'/logo.svg'} alt="logo" height={65}/>
                <h2>Bedee</h2>
            </div>
            <div className={styles.rightSide}>
                <div className={'btn btn-icon'}><FaPlus/></div>
                <div className={'btn btn-icon'}><FaSearch/></div>
                <div className={'btn btn-icon'} onClick={() => signOut()}><BsGearFill/></div>
            </div>
        </div>
    )
}

export default Navbar
