import { Flame, Heart, LayoutPanelLeft, Library, LogOut, Play } from "lucide-react"
import SidebarBtn from "./SidebarBtn"

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src='https://i.pinimg.com/originals/5e/f3/dd/5ef3dd2e21003eb7a3a755228176d41f.jpg' alt='profile-pic' className='profile-pic' />
      <div className='sidebar-btn'>
        <SidebarBtn title="Feed" to="/feed" icon={<LayoutPanelLeft size={20} strokeWidth={1.5}/>} />
        <SidebarBtn title="Trending" to="/trending" icon={<Flame size={20} strokeWidth={1.5} />} />
        <SidebarBtn title="Player" to="/player" icon={<Play size={20} strokeWidth={1.5}/>} />
        <SidebarBtn title="Favorites" to="/favorites" icon={<Heart size={20} strokeWidth={1.5}/>} />
        <SidebarBtn title="Library" to="/" icon={<Library size={20} strokeWidth={1.5}/>} />
      </div>
      <SidebarBtn title="Sign Out" to="" icon={<LogOut size={20} strokeWidth={1.5}/>} />
    </div>
  )
}

export default Sidebar