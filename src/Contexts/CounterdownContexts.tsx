import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContexts";


interface CounterdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCounterdown: () => void;
  resetCounterdown: () => void;
}

interface CounterdownProviderProps {
  children: ReactNode;
}

let counterdownTimeout: NodeJS.Timeout;

export const CounterdownContext = createContext({} as CounterdownContextData)

export function CounterdownProvider({ children }: CounterdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60


  function startCounterdown() {
    setIsActive(true)
  }

  function resetCounterdown() {
    clearTimeout(counterdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      counterdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])


  return (
    <CounterdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCounterdown,
      resetCounterdown,
    }}>
      {children}
    </CounterdownContext.Provider>
  )
}