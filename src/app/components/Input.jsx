export const InputText = () => {
  return ( 
    <input type="text" tabIndex="1" className="" maxLength="255" value="ProjectsName" arial-label="Design title" />
  );
}

export const InputSearch = ({children}) => {
  return ( 
    <input type="search" placeholder="Use 5+ words to describe..." dir="auto" aria-label="Use 5+ words to describe..." aria-describedby=":r1t:0" value="">
      {children}
    </input>
  );
}

export const InputSearchElement = ({children}) => {
  return ( <>
    <div>
      {children}
    </div>
  </> );
}

export const InputRange = () => {
  return ( 
    <input class="c_OUdw" type="range" min="-2.3040000000000003" max="1.61" step="0.001" aria-label="Zoom" value="-1.51"/>
  );
}
