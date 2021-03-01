import { useContext } from 'react'

import { CounterdownContext } from '../Contexts/CounterdownContexts';
import styles from '../styles/components/Counterdown.module.css'



export function Counterdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCounterdown,
    resetCounterdown, 
  } = useContext(CounterdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')



  return (
    <div>

      <div className={styles.counterdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.CounterdownButton}
        >
          ciclo encerrado

        </button>
      ) : (
          <>
            {isActive ? (
              <button
                type='button'
                className={`${styles.CounterdownButton} ${styles.CounterdownButtonActive}`}
                onClick={resetCounterdown}
              >
                Abandonar ciclo

              </button>
            ) : (
                <button
                  type='button'
                  className={styles.CounterdownButton}
                  onClick={startCounterdown}
                >
                  Iniciar um ciclo

                </button>
              )}
          </>
        )}
    </div>
  )
}