import Image from "next/image"

const Logo = () => {
  return (
    <div className="pt-0">
      <Image src="/account.gif" alt='' width={130} height={130} unoptimized priority/>
    </div>
  )
}

export default Logo
