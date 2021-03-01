import { useContext } from 'react'
import { ChallengeContext } from '../Contexts/ChallengeContexts'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
  const { challengeCompleted } = useContext(ChallengeContext)

  return (
    <div className={styles.completedChallengeContainer}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  )
}