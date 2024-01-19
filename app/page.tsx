import CommandLine from '@/components/CommandLine'
import CommandProvider from '@/components/CommandProvider'
import getVersions from 'lib/versions'

export default function Home() {
  const versions = getVersions()
  return (
    <>
      <p>
        Hi there👋
        欢迎来到我的空间👀，在下方👇输入命令交互🔥，更多有意思命令即将开放🥳
      </p>
      <CommandProvider versions={versions}>
        <CommandLine />
      </CommandProvider>
    </>
  )
}
