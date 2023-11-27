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

export const HomeSection = ({children}) => {
  return ( <>
    <div className="text-white homeSection">
      {children}
    </div>
  </> );
}

export const FileSection = ({children}) => {
  return ( <>
    <div className="text-white fileSection">
      {children}
    </div>
  </> );
}

export const MagicSection = ({children}) => {
  return ( <>
    <div className="text-white magicSection">
      {children}
    </div>
  </> );
}

export const BackSection = ({children}) => {
  return ( <>
    <div className="text-white backSection">
      {children}
    </div>
  </> );
}

export const NextSection = ({children}) => {
  return ( <>
    <div className="text-white nextSection">
      {children}
    </div>
  </> );
}

export const SaveSection = ({children}) => {
  return ( <>
    <div className="text-white saveSection">
      {children}
    </div>
  </> );
}

export const ShareSection = ({children}) => {
  return ( <>
    <div className="text-white shareSection">
      {children}
    </div>
  </> );
}

export const SeparationDiv = () => {
  return ( 
    div.separationDiv.border.border-white
  );
}

export const HamMenu = () => {
  return ( <>
    <div className="text-white hamMenu">
      <p>
      ------
      ------
      ------
      </p>
    </div>
  </> );
}
