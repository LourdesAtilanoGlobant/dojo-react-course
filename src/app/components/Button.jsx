import "./Button-styles.scss";

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
  return (
    <>
      {children}
    </>
  );
}

export const ButtonOpacity = ({children}) => {
  return (
    <div className="flex items-center px-3 py-2 text-sm rounded-md buttonOpacity">
      {children}
    </div>
  );
}
