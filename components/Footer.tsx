export default function Footer() {
  return (
    <footer className="text-sm mt-20 flex items-center text-gray-500 dark:text-slate-400">
      <div className="flex">
        <a
          className="underline"
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          rel="noopener noreferrer"
        >
          CC BY-NC-SA 4.0
        </a>
        <p className="mx-2">Yucihent ©2023-present</p>
        <p>
          Created by <span className="font-bold">yucihent</span>
        </p>
      </div>
    </footer>
  )
}
