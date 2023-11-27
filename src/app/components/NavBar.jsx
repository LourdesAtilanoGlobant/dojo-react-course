export const NavBarBackGround = () => {
  return (<>
    <p>NavBarBackGround</p>
  </>);
}

export const NavBarSections = ({children}) => {
  return (<>
    {children}
  </>);
}

export const NavBar = () => {
  return ( 
    <>
      <div className="text-white bg-purple-600 border border-red-700 solid">
        {/* <NavBarBackGround></NavBarBackGround>
        <NavBarSections> */}
          <p>Aquí va el Navbar</p>
        {/* </NavBarSections> */}
      </div>
    </>
  );
}
