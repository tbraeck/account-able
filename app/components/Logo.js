import Image from "next/image"

const Logo = () => {
  return (
    <div className="pt-0">
      <Image src="/account.gif" alt='' width={200} height={200} unoptimized priority/>
    </div>
  )
}

export default Logo
