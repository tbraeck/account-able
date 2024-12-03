import Logo from './Logo'
const Header = () => {
  return (
    <div className=' h-46 w-full flex justify-center items-center flex-col'>
        {/* absolute left-0  */}
        <div>
            <Logo/>
        </div>
        <div>
          <h1>Welcome to Account-Able.</h1>
        </div>
    </div>
  )
}

export default Header
