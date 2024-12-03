import Image from "next/image"

const Logo = () => {
  return (
    <div>
      <Image src="/account.gif" alt='' width={200} height={200} unoptimized/>
    </div>
  )
}

export default Logo
