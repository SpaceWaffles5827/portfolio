import Link from "next/link";

export default function NavBar() {
  return (
      <div className="navBar">
          <div className="navbarContent">  
            <Link href={'/'}>
              <h1 className="Logo">JH</h1>
            </Link>
            <Link href={'/projects'}>
              <h1>Projects</h1>
            </Link>
            <Link href={'/about'}>
              <h1>About</h1>
            </Link>
            <Link href={'/contact'}>
              <h1>Contact</h1>
            </Link>
          </div>
      </div>
  )
}
