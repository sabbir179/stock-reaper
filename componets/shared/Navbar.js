import Link from "next/link";

// import Image from "next/image"
// import Logo from "../../public/"

const Navbar = () => {
    return ( 
        <nav >
            <div className="logo">
                
                <img src="/logo.png" width= {135} height= {80} alt="logo" />
                
            </div>
            <div className="items-head ">
                <Link href="/">
                    <a>Home</a> 
                </Link>
                <Link href="/#">
                    <a >About us</a> 
                </Link>
                <Link href="/membership">
                    <a>Membership</a> 
                    </Link>
                <Link href="/contact">
                    <a>Contact</a> 
                </Link>
                <Link href="/signIn">
                    <a>Sign In</a> 
                </Link>
            </div>
                    
            
        </nav>
     );
}
 
export default Navbar;