import Logo from './Logo'
const Header = () => {
  return (
    <div className='bg-gray-300 h-46 w-full flex justify-between items-center'>
        {/* absolute left-0  */}
        <div>
            <Logo/>
        </div>
      <h1>Welcome to Account-Able.</h1>
    </div>
  )
}

export default Header
