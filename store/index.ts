import { create } from 'zustand'

type State = {
  command: string
  cmds: string[]
}

type Actions = {
  add: (cmd: string) => void
  clear: () => void
  click: (cmd: string) => void
}

// type Action = {
//   type?: 'add' | 'clear'
//   cmd: string
// }

// type Dispatch = {
//   dispatch: (action: Action) => void
// }

// const cmdReducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case 'add':
//       return { cmds: [...state.cmds, action.cmd] }
//     case 'clear':
//       return { cmds: [] }
//     default:
//       return state
//   }
// }

export default create<State & Actions>((set) => ({
  command: '',
  cmds: [],
  add: (cmd: string) => set((state) => ({ cmds: [...state.cmds, cmd] })),
  clear: () => set(() => ({ cmds: [] })),
  click: (cmd: string) => set(() => ({ command: cmd }))
  // dispatch: (action: Action) => set((state) => cmdReducer(state, action))
}))
