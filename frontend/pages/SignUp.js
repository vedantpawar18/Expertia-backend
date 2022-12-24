import Link from 'next/link';
import styles from "./styles/signup.module.css"
import Image from 'next/image'
import image1 from "./image1.png"

export default function SignUp() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.subContainer}>

                <div className={styles.signUpBox}>

                   <div className={styles.top}>
                    <div>
                        <p className={styles.welcm}>Welcome !</p>
                    </div>
                    <div>
                        <p className={styles.sgnup}>Sign up to</p>
                    </div>
                    <div>
                        <p className={styles.simple}>Lorem ipsum is simply</p>
                    </div>
                   </div>

                   <div className={styles.bottom}>
                        <div>
                            <p className={styles.email}>Email</p>
                            <div className={styles.inputBox}>
                                <input className={styles.nooutline} placeholder='Enter your email' />
                            </div>
                        </div>
                        <div>
                            <p className={styles.email}>User Name</p>
                            <div className={styles.inputBox}>
                                <input className={styles.nooutline} placeholder='Enter your User Name' />
                            </div>
                        </div>
                        <div>
                            <p className={styles.email}>Password</p>
                            <div className={styles.inputBox}>
                                <input className={styles.nooutline} placeholder='Enter your Password' />
                            </div>
                        </div>
                        <div>
                            <p className={styles.email}>Confirm Password</p>
                            <div className={styles.inputBox}>
                                <input className={styles.nooutline} placeholder='Confirm Password' />
                            </div>
                        </div>
                        <div>
                           
                            <div className={styles.registerBOx}>
                               <button className={styles.registerBtn}>Register</button>
                            </div>
                            {/* <p className={styles.email}>Alredy have an account</p> */}
                        </div>
                   </div>

                </div>

                <div className={styles.imageHolder}>
                    <Image src={image1} width={450}
      height={450} />
                </div>
            </div>
        </div>
    </div>
  )
}