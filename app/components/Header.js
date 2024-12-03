import Logo from './Logo'
const Header = () => {
  return (
    <div className='bg-white h-46 w-full flex justify-center items-center flex-col'>
        {/* absolute left-0  */}
        <div>
            <Logo/>
        </div>
        <div className='pb-4'>
          <h1>Welcome to Account-Able.</h1>
        </div>
    </div>
  )
}

export default Header
