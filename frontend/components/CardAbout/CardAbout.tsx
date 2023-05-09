import { HTMLAttributes } from "react"

interface CardAboutProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  name: string
}

export const CardAbout = ({ name, id }: CardAboutProps) => {
  return (
    <div className={"rounded-3xl bg-black p-10 w-fit hover:bg-blue-200"}>
      <button>+</button>
      <h1>{id}</h1>
      <h1>{name}</h1>
    </div>
  )
}
