export const SPACE_NAME = 'Yucihent',
  LINKS = {
    Home: '/',
    Posts: '/posts',
    Videos: '/videos',
    Weekly: '/weekly',
    // Projects: '/projects'
    About: '/about'
  }

// PROMPT
export const SPACE = 'yucihent.space',
  BRANCH = 'main',
  INIT_BLOG_VERSION = '1.0.0',
  FRAMEWORK = 'next',
  INIT_FRAMEWORK_VERSION = '13.4.10'

// CMDS
export const HELP = 'help',
  CLEAR = 'clear',
  LIST = 'list',
  LS = 'ls',
  ABOUT = 'about',
  POSTS = 'posts',
  VIDEOS = 'videos',
  WEEKLY = 'weekly',
  // PROJECTS = 'projects',
  INIT_CMD = ABOUT,
  RMRF = 'rm -rf',
  COMMAND_NOT_FOUND = 'command not found',
  COMMANDS = [POSTS, VIDEOS, WEEKLY, ABOUT, HELP, LIST, LS, CLEAR] as const

export type CommandsType = (typeof COMMANDS)[number]

export const COMMAND_CONTENT_MAP: Record<
  Exclude<CommandsType, 'clear'>,
  any
> = {
  [HELP]: {
    [HELP]: 'show details',
    [`${LIST}/${LS}`]: ['list all commands', COMMANDS],
    [CLEAR]: 'clear all outputs',
    [ABOUT]: 'some information about me',
    [POSTS]: 'list all posts',
    [VIDEOS]: 'list all videos',
    [WEEKLY]: 'list all weekly'
    // [PROJECTS]: 'list all projects'
  },

  [LIST]: COMMANDS,
  [LS]: COMMANDS,

  [ABOUT]: {
    introduction: `我是赫子子, 前端API码农, 对CLI感兴趣, 喜欢音乐🎶数码和浩瀚宇宙, 有个公众号【前端仓库】👈`,
    skills: [
      'javascript',
      'typescript',
      'vue',
      'react',
      'nodejs',
      'vite',
      'rollup',
      'esbuild',
      'nextjs',
      'nuxt'
    ],
    platforms: {
      '✨ juejin': 'https://juejin.cn/user/395479915963752/posts',
      '🚀 segmentfault': 'https://segmentfault.com/u/hezizi/answers?sort=newest'
    }
  },

  [POSTS]: 'post',
  [VIDEOS]: 'video',
  [WEEKLY]: 'weekly'

  // [PROJECTS]: 'project'
}
