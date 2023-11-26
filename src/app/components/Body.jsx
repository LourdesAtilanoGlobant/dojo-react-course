export const Option = ({children}) => {
  return ( <>
    <div className="border border-yellow-400 solid">
      {children}
    </div>
  </> );
}

export const SideOption = ({children}) => {
  return ( <>
    <div className="border border-blue-100 solid">
      {children}
    </div>
  </> );
}

export const SideElement = ({children}) => {
  return ( <>
    <div className="border border-blue-300 solid">
      {children}
    </div>
  </> );
}

export const SidePanel = ({children}) => {
  return ( <>
    <div className="border border-blue-500 solid">
      {children}
    </div>
  </> );
}

export const AsidePanel = ({children}) => {
  return ( <>
    <aside className="border border-black solid">
      {children}
    </aside>
  </> );
}

export const BodyContainer = ({children}) => {
  return (<>
    <body className="border border-gray-600 dotte">
      {children}
    </body>
  </>);
}