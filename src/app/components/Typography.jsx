import "./Typography-styles.scss";

export const SpanText = ({children}) => {
  return ( 
    <span className="text-sm text-white">
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
    <span className="flex items-center h-4 px-2 ml-2 text-white rounded-full pillText">
      {children}
    </span> 
  );
}