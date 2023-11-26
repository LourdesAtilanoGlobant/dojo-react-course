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
      <NavBar className="text-white border border-red-700 solid">
        <NavBarBackGround></NavBarBackGround>
        <NavBarSections></NavBarSections>
      </NavBar>
    </>
  );
}
