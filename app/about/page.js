import Link from "next/link"

export default function page() {
  return (
    <div>
        <Link href={"/"}>main</Link>
      <Link href={"/favourites"}>favourites</Link>
    </div>
  )
}
