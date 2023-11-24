export const AvatarImage = () => {
  return ( 
    <span>Avatar</span>
  );
}

export const Collaborator = ({children}) => {
  return ( <>
    <div className="border border-purple-500 rounded-xl">
      {children}
    </div>
  </> );
}

export const AddCollaborator = ({children}) => {
  return ( <>
    <div className="border border-green-500 rounded-xl">
      {children}
    </div>
  </> );
}


export const Section = ({children}) => {
  return ( 
    <>
      <div className="border border-white solid">
        {children }
      </div>
    </>
  );
}
// This sections its gonna be delete later

export const NameSection = ({children}) => {
  return ( <>
    <div className="text-white nameSection">
      {children}
    </div>
  </> );
}

export const CanvaProSection = ({children}) => {
  return ( <>
    <div className="text-white canvaProSection">
      {children}
    </div>
  </> );
}

export const CollaboratorsSection = ({children}) => {
  return ( <>
    <div className="text-white collaboratorsSection">
      {children}
    </div>
  </> );
}

export const InsightsSection = ({children}) => {
  return ( <>
    <div className="text-white insightsSection">
      {children}
    </div>
  </> );
}

export const PrintShareSection = ({children}) => {
  return ( <>
    <div className="text-white printShareSection">
      {children}
    </div>
  </> );
}

export const PrintSection = ({children}) => {
  return ( <>
    <div className="text-white printSection">
      {children}
    </div>
  </> );
}

export const InsightNotification = ({children}) => {
  return ( <>
    <div className="text-white insightNotification">
      <p>insightNotification</p>
    </div>
  </> );
}
