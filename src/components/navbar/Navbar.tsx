import './navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar"> 
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>syscodes</span>
      </div>
      <div className="links">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="users">
          <img src="/pfp.jpg" alt=""  />
          <span>senju</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar