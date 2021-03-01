import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from '../components/CompletedChallenges'
import { Counterdown } from '../components/Couterdown'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox'
import { CounterdownProvider } from '../Contexts/CounterdownContexts'
import { ChallengesProvider } from '../Contexts/ChallengeContexts'


import styles from '../styles/Pages/Home.module.css'

interface HomeProps {
  level: number;
  currenteExperience: number;
  challengeCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props);

  return (
    <ChallengesProvider
      level={props.level}
      currenteExperience={props.currenteExperience}
      challengeCompleted={props.challengeCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />

        <CounterdownProvider>

          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Counterdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CounterdownProvider>
      </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currenteExperience, challengeCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currenteExperience: Number(currenteExperience),
      challengeCompleted: Number(challengeCompleted),
    }
  }
}