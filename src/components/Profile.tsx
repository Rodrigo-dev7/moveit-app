import { useContext } from 'react'
import { ChallengeContext } from '../Contexts/ChallengeContexts'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengeContext)

  return (
    <div className={styles.ProfileContainer} >
      <img src="https://github.com/Rodrigo-dev7.png" alt="Rodrigo"/>
      <div>
        <strong>Rodrigo Oliveira</strong>
        <p> 
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}