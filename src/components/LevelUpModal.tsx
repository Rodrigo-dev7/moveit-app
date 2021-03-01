import { useContext } from 'react'
import { ChallengeContext } from '../Contexts/ChallengeContexts'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type='button' onClick={closeLevelUpModal} >
          <img src="icons/close.svg" alt="Close Modal" />
        </button>
      </div>
    </div>
  )
}