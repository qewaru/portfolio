import { useState, useEffect } from "react"

export default function useSecondCount() {
    const [timerSeconds, setTimerSeconds] = useState<number>(0)
    const [timerYears, setTimerYears] = useState<number>(0)
    const birthDate = new Date(`2003-12-31`).getTime()

    const startTimer = () => {
        setInterval(() => {
            const currentDate = new Date().getTime()

            const distance = currentDate - birthDate   
            const seconds = Math.floor(distance / 1000)
            const years = Math.floor(distance / (365.25 * 24 * 60 * 60 * 1000))

            setTimerSeconds(seconds)
            setTimerYears(years)
        })
    }

    useEffect(() => {
        startTimer()
    }, [])

  return { timerYears, timerSeconds }
}