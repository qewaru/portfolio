import { useState, useEffect } from "react"

export default function useSecondCount() {
    const [timerSeconds, setTimerSeconds] = useState<number>(0)
    const [timerYears, setTimerYears] = useState<number>(0)
    const birthDate = new Date(`2003-12-31`).getTime()
    const msInYear = 365.25 * 24 * 60 * 60 * 1000

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date().getTime()
            const distance = currentDate - birthDate

            const years = Math.floor(distance / msInYear)
            const leftoverMs = distance - years * msInYear
            const leftoverSeconds = Math.floor(leftoverMs / 1000)

            setTimerYears(years)
            setTimerSeconds(leftoverSeconds)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return { timerYears, timerSeconds }
}