import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row gap-5 m-5">
        <li><Link to='/asid-admin'>Home</Link></li>
        <li><Link to='/asid-admin/about-us'>About us</Link></li>
        <li><Link to='/asid-admin/help'>Help</Link></li>
      </ul>
    </div>
  )
}
