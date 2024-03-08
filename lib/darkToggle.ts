interface DarkThemeOptions {
  isDark: boolean
  setTheme: (theme: string) => void
  coordinates: { x: number; y: number } // 坐标
  mode?: 'circle'
}

export default function darkToggle(options: DarkThemeOptions) {
  const {
    isDark,
    setTheme,
    coordinates: { x, y }
  } = options

  // @ts-expect-error
  if (!document.startViewTransition) {
    setTheme(isDark ? 'light' : 'dark')
  } else {
    // 获取最大半径
    const largerRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    // 剪切路径
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${largerRadius}px at ${x}px ${y}px)`
      // `inset(${y}px ${innerWidth - x}px ${innerHeight - y}px ${x}px round 20px)`,
      // `inset(0 0 0 0)`
    ]

    // @ts-expect-error
    const transition = document.startViewTransition(() => {
      setTheme(isDark ? 'light' : 'dark')
    })
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          // 指定要附加动画的伪元素
          pseudoElement: isDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)'
        }
      )
    })
  }
}
