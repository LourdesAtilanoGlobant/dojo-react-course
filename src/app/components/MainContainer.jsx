export const MainContainer = ({children}) => {
  return ( 
    <div className="text-black bg-gray-100 border">
      {children}
    </div> 
  );
}

export const HeaderMainContainer = ({children}) => {
  return ( 
    <div className="text-black bg-gray-100 border">
      {children}
    </div> 
  );
}

export const CentralMainContainer = ({children}) => {
  return ( 
    <div className="text-black bg-gray-100 border">
      {children}
    </div> 
  );
}

export const ElementsOption = ({children}) => {
  return ( 
    <div className="text-white bg-black border elementsOption">
      {children}
    </div> 
  );
}

export const DesignOption = ({children}) => {
  return ( 
    <div className="text-white bg-black border designOption">
      {children}
    </div> 
  );
}

