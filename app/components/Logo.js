import Image from "next/image"

const Logo = () => {
  return (
    <div>
      <Image src="/account.gif" alt='' width={300} height={300} unoptimized/>
    </div>
  )
}

export default Logo
