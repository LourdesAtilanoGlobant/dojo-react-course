export const SpanText = ({children}) => {
  return ( 
    <span className="text-white">
      {children}
    </span> 
  );
}

export const Text = ({children}) => {
  return ( 
    <p>{children}</p>
  );
}

export const PillText = ({children}) => {
  return ( 
    <span className="text-white bg-purple-900 border rounded-md">
      {children}
    </span> 
  );
}