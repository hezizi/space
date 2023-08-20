import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="text-sm mt-20 flex items-center text-gray-500 dark:text-slate-400">
      <div className="flex">
        <p className="mr-3">Yucihent ©2023-present</p>
        <p>Created by yucihent</p>
      </div>
      <a
        className="ml-3"
        href="https://github.com/hezizi/space"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" width={20} height={20} />
      </a>
    </footer>
  )
}
