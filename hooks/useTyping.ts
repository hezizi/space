import { useState, useEffect } from 'react'
import useCmdStore from 'store'

export default function useTyping(command: string, speed = 100) {
  const [cmd, setCmd] = useState('')
  const { add } = useCmdStore((state) => state)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    for (let i = 0; i < command.length; i++) {
      timer = setTimeout(
        () => {
          setCmd((prev) => prev + command.charAt(i))

          if (i === command.length - 1) {
            setTimeout(() => {
              add(command)
            }, 100)
          }
        },
        speed * (i + 1)
      )
    }

    return () => {
      clearTimeout(timer)
    }
  }, [command, speed])

  return { cmd, setCmd }
}
