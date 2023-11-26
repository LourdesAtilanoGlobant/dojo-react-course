export const HideSubMenuContainer = ({children}) => {
  return ( 
    <div className="text-white bg-gray-800 border border-gray-700 solid">
      {children}
    </div> 
  );
}

export const BottomCentralContainer = ({children}) => {
  return ( 
    <div className="text-white bg-gray-800 border border-white solid">
      {children}
      <p>BottomCentralContainer</p>
    </div> 
  );
}

export const TopCentralContainer = ({children}) => {
  return ( 
    <div className="text-white bg-gray-800 border border-white solid">
      {children}
    </div> 
  );
}

export const CentralContainer = ({children}) => {
  return ( 
    <div className="text-white bg-gray-800 border border-white solid">
      {children}
    </div> 
  );
}

export const SubMenuContainer = ({children}) => {
  return (<>
    <div className="text-white bg-gray-800">
      {children}
    </div>
  </>);
}
