export const SvgImage = ({children}) => {
  return ( 
    <svg>{children}</svg>
  );
}

export const AnchorLink = ({children}) => {
  return ( <a>
    {children}
  </a> );
}

export const Button = ({children}) => {
  return (<>
    {children}
  </>);
}
