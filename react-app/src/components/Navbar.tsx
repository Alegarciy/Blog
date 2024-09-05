import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-theme p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-[--primary] no-underline hover:text-[--link-hover-color]"
        >
          My Blog
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-[--primary] no-underline hover:text-[--link-hover-color]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-[--primary] no-underline hover:text-[--link-hover-color]"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
