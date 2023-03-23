import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-stone-800 font-sans text-slate-50 antialiased dark:bg-slate-900 dark:text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
