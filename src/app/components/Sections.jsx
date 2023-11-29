import { SvgImage, AnchorLink, Button, ButtonOpacity } from "./Button";
import { SpanText, PillText } from "./Typography";
import "./Section-styles.scss";

export const AvatarImage = ({children}) => {
  return ( 
    <SvgImage>
      {children}
    </SvgImage>
  );
}

export const Collaborator = ({children}) => {
  return ( <>
    <div className="flex items-center justify-center w-10 h-10 text-sm text-white border-2 border-green-600 border-solid rounded-full collaborator">
      <span className="rounded-full ">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" />
      </span>
    </div>
  </> );
}

export const AddCollaborator = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 text-sm text-white rounded-full buttonOpacity">
      <span className="w-4 h-4">
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7.25 13.25a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5Z"></path></svg>
      </span>
    </div>
  );
}

export const SectionHeaderLeft = (props) => {
  const { item } = props;

  return ( 
    <>
      <li className="flex items-center px-3 h-7">
          {item.title === "Home" && (
            <div className="text-white">
              <AnchorLink>
                <SpanText className="text-xs text-white border-red-500 bold">{item.title}</SpanText>
              </AnchorLink>
            </div>
          )}
          {item.type === "svg" && item.title !== "Magic Switch" && (
            <div className="w-6 h-6 text-white">
              { item.title === "Back" && (
                  <BackSection className="text-blue-600 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m6.05 7.25 2.22-2.22A.75.75 0 0 0 7.2 3.97L4.43 6.75c-.69.68-.69 1.8 0 2.48l2.83 2.83A.75.75 0 0 0 8.32 11L6.07 8.75H16a4.25 4.25 0 1 1 0 8.5h-4a.75.75 0 1 0 0 1.5h4a5.75 5.75 0 0 0 0-11.5H6.05z"></path></svg>
                  </BackSection>
                  )
                }
                { item.title === "Next" && (
                  <NextSection className="text-blue-600 ">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m18.054 7.252-2.296-2.296a.75.75 0 0 1 1.06-1.06l2.83 2.828a1.75 1.75 0 0 1 0 2.475l-2.832 2.831a.75.75 0 0 1-1.06-1.06l2.219-2.22H8a4.25 4.25 0 0 0 0 8.5h4a.75.75 0 0 1 0 1.5H8a5.75 5.75 0 0 1 0-11.5h10c.018 0 .036 0 .054.002Z"></path></svg>
                  </NextSection>
                  )
                }
                { item.title === "Ham" && (
                    <HamMenu>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"></path></svg>
                    </HamMenu>
                  )
                } 
                { item.title === "Save" && (
                    <SaveSection>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11 3a6 6 0 0 0-5.99 5.661A5.627 5.627 0 0 0 7 19.5v.001h10v-.001a5.625 5.625 0 0 0 2.67-10.506l-1.114 1.114a4.126 4.126 0 0 1-1.806 7.891V18h-9.5v-.002a4.125 4.125 0 0 1-.681-8.21 4.5 4.5 0 0 1 8.549-2.606l1.116-1.117A5.998 5.998 0 0 0 11 3Zm7.631 4.91a.75.75 0 1 0-1.053-1.068L10.67 13.75l-1.93-1.93a.75.75 0 1 0-1.088 1.03l-.001.002 2.444 2.445a.748.748 0 0 0 1.11.037v.001l7.425-7.424Z" fill="currentColor"></path></svg>
                    </SaveSection>
                  )
                }
            </div>
          )}
          { item.title === "Magic Switch" && (
              <MagicSection>
                {item.title}
              </MagicSection>
          )}
          {item.title !== "Home" && item.type !== "svg" && (
            <div className="text-white">
              <Button>
                <SpanText className="text-xs text-white border-red-500 bold">{item.title}</SpanText>
              </Button>
            </div>
          )}
      </li>
    </>
  );
}

export const SectionHeaderRight = (props) => {
  const { item } = props;
  return ( 
    <>
      <li className="flex items-center px-3 h-7">
        { item.title === "CanvaPro" && (
          <CanvaProSection>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"></path></svg>
          </CanvaProSection>
        )}
        { item.title === "Collaborators" && (
          <div className="flex">
            <Collaborator>Avatar</Collaborator>
            <AddCollaborator>
              
            </AddCollaborator>
          </div>
        )}
        { item.title === "Insight" && (
          <InsightsSection>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M17.75 18h3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h3.5v-6.25a.75.75 0 1 1 1.5 0V18h3.5V3.75a.75.75 0 1 1 1.5 0V18h3.5V7.75a.75.75 0 1 1 1.5 0V18z"></path></svg>
          </InsightsSection>
        )}
        { item.title === "Print" && (
          <PrintSection>
            {/* Is missing the svg */}
          </PrintSection>
        )}
        {item.title === "Share" && (
          <ShareSection>
            {item.title}
          </ShareSection>
        )}
      </li>
    </>
  )
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
    <div className="canvaProSection">
      <ButtonOpacity>
        <div className="flex w-4 h-4 mr-1 text-yellow-500">
            <SvgImage className="w-4 h-4">
              {children}
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"></path></svg> */}
            </SvgImage>
        </div>
        Try Cavas for Teams
      </ButtonOpacity>
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
  return ( 
    <div className="text-white insightsSection">
      <ButtonOpacity>
        <SvgImage>
          {children}
        </SvgImage>
      </ButtonOpacity>
    </div> 
  );
}

export const ShareSection = ({children}) => {
  return (
    <div className="flex items-center px-3 py-2 text-sm text-white bg-white printShareSection rounded-xl">
        <SvgImage className="">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 11.75V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-7.25a.75.75 0 1 1 1.5 0V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.25a.75.75 0 1 1 1.5 0Zm8.323-6.19v9.69a.75.75 0 0 1-1.5 0l-.001-9.69-3.037 3.215a.751.751 0 0 1-1.062-1.06l4.318-4.495a.751.751 0 0 1 1.062 0l4.18 4.495a.749.749 0 1 1-1.06 1.06l-2.9-3.216Z" fill="currentColor" fillRule="nonzero"></path></svg>
        </SvgImage>
        <SpanText className="">{children}</SpanText>
    </div>
  );
}

export const PrintSection = ({children}) => {
  return (
    <div className="text-white printSection">
      <ButtonOpacity>
        <SvgImage>
          {children}
        </SvgImage>
        <SpanText>Print Posters</SpanText>
      </ButtonOpacity>
    </div>
  );
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
    <li className="p-2 text-white border-white homeSection">
      <AnchorLink>
        <SpanText className="text-xs text-white border-red-500 bold">{children}</SpanText>
      </AnchorLink>
    </li>
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
    <div className="flex items-center text-sm text-white magicSection">
      <div className="flex w-4 h-4 mr-2 bg-yellow-300 rounded-full">
        <SpanText>
          <SvgImage className="bg-yellow-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"></path></svg>
          </SvgImage>
        </SpanText>
      </div>
      {children}
      <PillText>NEW</PillText>
    </div>
  </> );
}

export const BackSection = ({children}) => {
  return (
    <div className="text-white backSection">
      <Button>
          <SvgImage>
            {children}
          </SvgImage>
      </Button>
    </div>
  );
}

export const NextSection = ({children}) => {
  debugger
  return (
    <div className="text-white nextSection">
      <Button>
          <SvgImage>
            {children}
          </SvgImage>
      </Button>
    </div>
  );
}

export const SaveSection = ({children}) => {
  return ( <>
    <div className="text-white saveSection">
      <Button>
          <SvgImage>
            {children}
          </SvgImage>
      </Button>
    </div>
  </> );
}

export const SeparationDiv = () => {
  return ( 
    div.separationDiv.border.border-white
  );
}

export const HamMenu = ({children}) => {
  return (
    <div className="text-white hamMenu">
      <Button>
          <SvgImage>
            {children}
          </SvgImage>
      </Button>
    </div>
  );
}
