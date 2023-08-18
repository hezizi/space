import './globals.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
// import Particles from '@/components/Particles'

export const metadata: Metadata = {
  creator: 'yucihent',
  title: '赫子子空间',
  description: '赫子子的博客'
}

const NoSSRThemeProvider = dynamic(() => import('@/components/ThemeProvider'), {
  ssr: false
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[--dark-bg] dark:text-white/90">
        {/* next-themes会导致该错误：Warning: Extra attributes from the server: class,style at html
        参考方案：https://github.com/vercel/next.js/discussions/22388#discussioncomment-6329930 */}
        {/* 方案一：在<html>中添加`suppressHydrationWarning`用于消除警告 */}
        {/* 方案二：https://nextjs.org/docs/messages/react-hydration-error#solution-2-disabling-ssr-on-specific-components */}
        <NoSSRThemeProvider attribute="class" defaultTheme="light">
          <section className="flex flex-col min-h-screen mx-auto max-w-5xl pt-12 pb-8 px-8">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </section>
        </NoSSRThemeProvider>

        <BackToTop />

        {/* <Particles /> */}
      </body>
    </html>
  )
}
