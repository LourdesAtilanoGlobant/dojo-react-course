export const Footer = ({children}) => {
  return ( 
    <div className="text-black bg-gray-100 border">
      {children}
    </div> 
  );
}

export const RightFooter = ({children}) => {
  return ( 
    <div className="text-black bg-gray-100 border border-red-400 border-solid">
      {children}
    </div> 
  );
}

export const LeftFooter = ({children}) => {
  return ( 
    <div className="text-black bg-gray-100 border border-red-400 border-solid">
      {children}
    </div> 
  );
}

export const Notes = () => {
  return ( 
    <>
      <p>Notes</p>
    </>
  );
}

export const PageInformation = () => {
  return ( 
    <span className="text-black">
      Page 1/1
    </span> 
  );
}

export const RangePorcentageImage = ({children}) => {
  return (
    <>
      {children}
    </>
  );
}

export const PorcentageImage = () => {
  return ( 
    <span className="text-black">
      22%
    </span> 
  );
}

export const GridElments = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5 4h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 4 9.5v-4C4 4.67 4.67 4 5.5 4zm9 0h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5v-4c0-.83.67-1.5 1.5-1.5zm0 9h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5zm-9 0h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 4 18.5v-4c0-.83.67-1.5 1.5-1.5zm0-7.5v4h4v-4h-4zm9 0v4h4v-4h-4zm0 9v4h4v-4h-4zm-9 0v4h4v-4h-4z"></path></svg>
    </>  
  );
}

export const ExpandProject = () => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.636 10.43 18.5 6.565v2.687a.75.75 0 0 0 1.5 0V5.497c0-.966-.53-1.495-1.497-1.495h-3.749a.75.75 0 0 0 0 1.5h2.687l-3.867 3.867a.75.75 0 0 0 1.06 1.061Zm-5.27 3.139-3.867 3.867v-2.688a.75.75 0 0 0-1.5 0v3.75c0 .967.527 1.5 1.493 1.5h3.753a.75.75 0 0 0 0-1.5H6.558l3.869-3.869a.75.75 0 0 0-1.061-1.06Z" fill="currentColor"></path></svg>
    </>  
  );
}

export const QuestionsChat = () => {
  return ( 
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.636 10.43 18.5 6.565v2.687a.75.75 0 0 0 1.5 0V5.497c0-.966-.53-1.495-1.497-1.495h-3.749a.75.75 0 0 0 0 1.5h2.687l-3.867 3.867a.75.75 0 0 0 1.06 1.061Zm-5.27 3.139-3.867 3.867v-2.688a.75.75 0 0 0-1.5 0v3.75c0 .967.527 1.5 1.493 1.5h3.753a.75.75 0 0 0 0-1.5H6.558l3.869-3.869a.75.75 0 0 0-1.061-1.06Z" fill="currentColor"></path></svg>
    </>  
  );
}
