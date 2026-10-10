function Header() {
 return (
   <header className="site-header">
     <div className="container header-inner">
       <a href="#home" className="logo">Shrijal Singh</a>
       <nav aria-label="Main navigation">
         <ul className="nav-list">
           <li><a href="#about">About</a></li>
           <li><a href="#skills">Skills</a></li>
           <li><a href="#projects">Projects</a></li>
           <li><a href="#education">Education</a></li>
           <li><a href="#contact">Contact</a></li>
         </ul>
       </nav>
     </div>
   </header>
 );
}


export default Header;


