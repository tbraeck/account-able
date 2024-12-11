import Logo from './Logo'
const Header = () => {
  return (
    <div className='bg-white h-46 w-full flex justify-center items-left flex-col'>
        {/* absolute left-0  */}
        <div>
            <Logo src="/account.gif" alt='' width={50} height={50} unoptimized/>
        </div>
        {/* <div className='pb-4'> */}
          {/* <Image src="/welcome.png" alt='' width={200} height={50} /> */}
        {/* </div> */}
    </div>
  )
}

export default Header
