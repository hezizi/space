'use client'

import { useEffect, useRef, useState } from 'react'
import CommandInput from './Input'
import CommandOutput from './Output'
import { CLEAR, HELP } from '@/constants'

export default function CommandLine(props: Record<string, any>) {
  // 当前点击的cmd
  const [currentClickCmd, setCurrentClickCmd] = useState('')
  // 输出内容中的cmd点击
  const onOutputCmdClick = (currentClickCmd: string) => {
    setCurrentClickCmd(currentClickCmd)
  }

  // 键入过的cmd集合
  const [typedCmds, setTypedCmds] = useState<string[]>([])
  const onTypingCmd = (cmd: string) => {
    setTypedCmds(cmd === CLEAR ? [] : (prev) => [...prev, cmd])
  }

  // 出现滚动条自动滚动到可视区域底部
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (props.scroll) {
      props.scroll()
    } else {
      containerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }
  }, [typedCmds])

  return (
    <div ref={containerRef} className="pt-10 pb-16">
      {typedCmds.length
        ? typedCmds.map(
            (cmd: string, index: number) =>
              cmd && (
                <CommandOutput
                  key={`${cmd}-${index}`}
                  cmd={cmd}
                  onOutputCmdClick={onOutputCmdClick}
                />
              )
          )
        : ''}

      <CommandInput
        currentClickCmd={currentClickCmd}
        onTypingCmd={onTypingCmd}
      />

      {typedCmds.length === 2 ? (
        <div className="mt-3 text-slate-400">
          输入
          <button
            className="mx-2 text-sky-500"
            onClick={() => onOutputCmdClick(HELP)}
          >
            help
          </button>
          查看更多命令
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
