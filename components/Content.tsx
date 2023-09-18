import { useContext, type MouseEvent } from 'react'
import Link from 'next/link'
import Icon from '@/components/Icon'
import {
  ABOUT,
  COMMAND_CONTENT_MAP,
  COMMAND_NOT_FOUND,
  HELP,
  LIST,
  LS,
  POSTS,
  WEEKLY,
  // PROJECTS,
  type CommandsType
} from '@/constants'
import { CommandContext } from './CommandProvider'

export default function CommandContent(props: Record<string, any>) {
  const { cmd } = props
  const args = {
    ...props,
    content: COMMAND_CONTENT_MAP[cmd as Exclude<CommandsType, 'clear'>]
  }

  if (cmd === HELP) {
    return HelpContent(args)
  } else if (cmd === LIST || cmd === LS) {
    return ListContent(args)
  } else if (cmd === POSTS || cmd === WEEKLY) {
    return MDXContent(cmd)
  }
  // else if (cmd === PROJECTS) {
  //   return ProjectsContent(args)
  // }
  else if (cmd === ABOUT) {
    return AboutContent(args)
  }
  return (
    <p className="text-red-500">
      {COMMAND_NOT_FOUND}: {cmd}
    </p>
  )
}

// help cmd content
function HelpContent(props: Record<string, any>) {
  const { content } = props
  return (
    <>
      <h3 className="mb-8">
        You can enter the following commands to interact:
      </h3>
      <ul>
        {Object.entries(content).map((item: Record<string, any>) => {
          return (
            <li key={item[0]} className="flex flex-row mb-3">
              <span className="basis-1/6 font-bold text-rose-500">
                {item[0]}
              </span>
              {item[0].includes(LIST) ? (
                <div>
                  <p className="mb-2">{item[1][0]}:</p>
                  <div className="mb-2">
                    {ListContent({
                      ...props,
                      source: HELP,
                      cmd: LIST,
                      content: COMMAND_CONTENT_MAP[LIST]
                    })}
                  </div>
                </div>
              ) : (
                <span>{item[1]}</span>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

// list cmd content
function ListContent(props: Record<string, any>) {
  const { source, content, onOutputCmdClick } = props

  const onCmdClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget
    onOutputCmdClick(value)
  }

  const containerStyle = 'grid grid-cols-4 gap-x-12 gap-y-4 text-green-500'

  return (
    <div
      className={
        source && source === HELP ? containerStyle : `${containerStyle} w-1/2`
      }
    >
      {content.map((cmd: string) => (
        <button
          className="text-left"
          key={cmd}
          value={cmd}
          onClick={onCmdClick}
        >
          {cmd}
        </button>
      ))}
    </div>
  )
}

// about cmd content
function AboutContent(props: Record<string, any>) {
  const {
    content: { introduction, skills, platforms }
  } = props
  return (
    <>
      <p className="mb-6">{introduction}</p>
      <div className="flex items-center mb-6">
        <span className="mr-3">常用技术栈✨:</span>
        <div className="grid gap-5 grid-cols-9">
          {skills.map((skill: string) => (
            <Icon key={skill} name={skill} />
          ))}
        </div>
      </div>
      <p className="mb-3">也可以在这些地方找到我:</p>
      <ul className="list-disc list-inside">
        {Object.entries(platforms).map((platform: Record<string, any>) => (
          <li key={platform[0]} className="mb-2">
            <Link href={platform[1]} target="_blank" className="text-sky-500">
              {platform[0]}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

// posts weekly cmd content
function MDXContent(cmd: 'posts' | 'weekly') {
  const { posts, weekly } = useContext(CommandContext)
  const cmdContentMap = { posts, weekly }
  return (
    <ul>
      {cmdContentMap[cmd].map((post) => (
        <li key={post.slug} className="mb-3 list-disc list-inside">
          <Link
            href={`/${cmd}/${post.slug}`}
            className="text-sky-500"
            target="_blank"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

// projects cmd content
// function ProjectsContent(props: Record<string, any>) {
//   return <h2>{props.content}</h2>
// }
