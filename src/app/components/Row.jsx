export const RowRight= ({children}) => {
  return ( 
    <div className="w-1/2 rowRight" >
      {children}
    </div>
  );
}

export const RowLeft= ({children}) => {
  return ( 
    <div className="w-1/2 rowLeft" >
      {children}
    </div>
  );
}

export const Row = ({children}) => {
  return ( 
    <div className="w-full" >
      {children}
    </div>
  );
}
