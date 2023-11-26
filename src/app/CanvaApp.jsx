import {
  Row, Header, NavBar, NavBarBackGround, NavBarSections, RowLeft, RowRight, NameSection, InputText, Text, CanvaProSection, Button, SpanText, SvgImage, Collaborator, CollaboratorsSection,
  InsightNotification,InsightsSection, PrintSection, PrintShareSection, BodyContainer,AsidePanel, HomeSection, FileSection, AnchorLink, MagicSection, PillText, BackSection, NextSection,
  SeparationDiv, SaveSection, AddCollaborator, AvatarImage, ShareSection, HamMenu, SidePanel, SideElement, ElementsOption, Option, DesignOption, InputSearchElement, InputSearch, LeftFooter,
  Footer, Notes, RightFooter, PageInformation, RangePorcentageImage, InputRange, PorcentageImage, GridElments, ExpandProject, QuestionsChat, MainContainer, HeaderMainContainer, CentralMainContainer,
  HideSubMenuContainer, BottomCentralContainer, SubMenuContainer, CentralContainer, TopCentralContainer
} from "./components";

export const CanvaApp = () => {
  return ( 
    <>
      <CanvaApp>
        <Row>
          <Header>
            <Row>
              <NavBar>
                <NavBarBackGround></NavBarBackGround>
                <NavBarSections>
                  <RowRight>
                    <HamMenu>
                      <Button></Button>
                    </HamMenu>
                    <HomeSection>
                      <AnchorLink>
                        <SpanText>Home</SpanText>
                      </AnchorLink>
                    </HomeSection>
                    <FileSection>
                      <Button>
                        <SpanText>File</SpanText>
                      </Button>
                    </FileSection>
                    <MagicSection>
                      <Row>
                      <Button>
                        <SpanText>
                          <Row>
                            <SpanText>
                              <SvgImage>Crown</SvgImage>
                            </SpanText>
                          </Row>
                        </SpanText>
                        <SpanText>
                          <Row>
                            <SpanText>Magic Switch</SpanText>
                            <PillText>NEW</PillText>
                          </Row>
                        </SpanText>
                      </Button>
                      </Row>
                    </MagicSection>
                    <SeparationDiv></SeparationDiv>
                    <BackSection>
                      <Row>
                        <Button>
                          <SpanText>
                            <SvgImage>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m6.05 7.25 2.22-2.22A.75.75 0 0 0 7.2 3.97L4.43 6.75c-.69.68-.69 1.8 0 2.48l2.83 2.83A.75.75 0 0 0 8.32 11L6.07 8.75H16a4.25 4.25 0 1 1 0 8.5h-4a.75.75 0 1 0 0 1.5h4a5.75 5.75 0 0 0 0-11.5H6.05z"></path></svg>
                            </SvgImage>
                          </SpanText>
                        </Button>
                      </Row>
                    </BackSection>
                    <NextSection>
                      <Row>
                        <Button>
                        <SpanText>
                          <SvgImage>
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m18.054 7.252-2.296-2.296a.75.75 0 0 1 1.06-1.06l2.83 2.828a1.75 1.75 0 0 1 0 2.475l-2.832 2.831a.75.75 0 0 1-1.06-1.06l2.219-2.22H8a4.25 4.25 0 0 0 0 8.5h4a.75.75 0 0 1 0 1.5H8a5.75 5.75 0 0 1 0-11.5h10c.018 0 .036 0 .054.002Z"></path></svg>
                          </SvgImage>
                        </SpanText>
                        </Button>
                      </Row>
                    </NextSection>
                    <SeparationDiv></SeparationDiv>
                    <SaveSection>
                      <Row>
                        <SpanText>
                          <SvgImage>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 3a6 6 0 0 0-5.99 5.661A5.627 5.627 0 0 0 7 19.5v.001h10v-.001a5.625 5.625 0 0 0 2.67-10.506l-1.114 1.114a4.126 4.126 0 0 1-1.806 7.891V18h-9.5v-.002a4.125 4.125 0 0 1-.681-8.21 4.5 4.5 0 0 1 8.549-2.606l1.116-1.117A5.998 5.998 0 0 0 11 3Zm7.631 4.91a.75.75 0 1 0-1.053-1.068L10.67 13.75l-1.93-1.93a.75.75 0 1 0-1.088 1.03l-.001.002 2.444 2.445a.748.748 0 0 0 1.11.037v.001l7.425-7.424Z" fill="currentColor"></path></svg>
                          </SvgImage>
                        </SpanText>
                      </Row>
                    </SaveSection>
                  </RowRight>
                  <RowLeft>
                    <NameSection>
                      <Row>
                        <InputText />
                        <Text>ProjectsName</Text>
                      </Row>
                    </NameSection>
                    <CanvaProSection>
                      <Button>
                        <SpanText>
                          <SvgImage>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"></path></svg>
                          </SvgImage>
                        </SpanText>
                        <SpanText>Try Canva Pro</SpanText>
                      </Button>
                    </CanvaProSection>
                    <CollaboratorsSection>
                      <Row>
                        <Collaborator>
                          <Button>
                            <AvatarImage></AvatarImage>
                          </Button>
                        </Collaborator>
                        <AddCollaborator>
                          <Button>
                            <SpanText>
                              <SvgImage>
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7.25 13.25a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5Z"></path></svg>
                              </SvgImage>
                            </SpanText>
                          </Button>
                        </AddCollaborator>
                      </Row>
                    </CollaboratorsSection>
                    <InsightsSection>
                      <Row>
                        <Button>
                          <SpanText>
                            <SvgImage>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.75 18h3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h3.5v-6.25a.75.75 0 1 1 1.5 0V18h3.5V3.75a.75.75 0 1 1 1.5 0V18h3.5V7.75a.75.75 0 1 1 1.5 0V18z"></path></svg>
                            </SvgImage>
                          </SpanText>
                        </Button>
                        <InsightNotification></InsightNotification>
                      </Row>
                    </InsightsSection>
                    <PrintShareSection>
                      <PrintSection>
                        <Button>
                          <SpanText>
                            <SvgImage>
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                                <defs>
                                  <path id="icon-print-poster-a" d="M7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,4 C5,2.8954305 5.8954305,2 7,2 Z M7,3.5 C6.72385763,3.5 6.5,3.72385763 6.5,4 L6.5,20 C6.5,20.2761424 6.72385763,20.5 7,20.5 L17,20.5 C17.2761424,20.5 17.5,20.2761424 17.5,20 L17.5,4 C17.5,3.72385763 17.2761424,3.5 17,3.5 L7,3.5 Z M19,14.0234274 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,16.0852095 L6.88514567,13.7289723 C6.97441202,13.6173986 7.07537821,13.5157124 7.18631483,13.4256555 C8.04388596,12.7294906 9.30343786,12.8603363 9.99960274,13.7179074 L10.4630635,14.2888219 L13.2572695,10.7973391 C13.346436,10.6859217 13.4472711,10.5843675 13.5580521,10.4944115 C14.4155271,9.79812819 15.675097,9.92879981 16.3713804,10.7862748 L19,14.0234274 Z M17.5,14.5557421 L15.2069336,11.7318241 C15.0328627,11.5174554 14.7179702,11.4847875 14.5036015,11.6588583 C14.4759062,11.6813473 14.4506975,11.7067359 14.4284058,11.7345902 L11.4305185,15.4805818 L15.5052157,20.5 L17,20.5 C17.2761424,20.5 17.5,20.2761424 17.5,20 L17.5,14.5557421 Z M13.5731845,20.5 L8.83502533,14.6632959 C8.66098411,14.4489031 8.34609614,14.4161917 8.13170336,14.5902329 C8.1039692,14.6127472 8.07872765,14.6381687 8.05641106,14.6660621 L6.5,16.611415 L6.5,20 C6.5,20.2761424 6.72385763,20.5 7,20.5 L13.5731845,20.5 Z M9.5,9 C10.3284271,9 11,8.32842712 11,7.5 C11,6.67157288 10.3284271,6 9.5,6 C8.67157288,6 8,6.67157288 8,7.5 C8,8.32842712 8.67157288,9 9.5,9 Z"></path>
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                  <use fill="currentColor" fill-rule="nonzero" xlink:href="#icon-print-poster-a"></use>
                                </g>
                              </svg>
                            </SvgImage>
                          </SpanText>
                          <SpanText>
                            Print Posters
                          </SpanText>
                        </Button>
                      </PrintSection>
                      <ShareSection>
                        <Button>
                          <SpanText>
                            <SvgImage>
                              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 11.75V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-7.25a.75.75 0 1 1 1.5 0V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.25a.75.75 0 1 1 1.5 0Zm8.323-6.19v9.69a.75.75 0 0 1-1.5 0l-.001-9.69-3.037 3.215a.751.751 0 0 1-1.062-1.06l4.318-4.495a.751.751 0 0 1 1.062 0l4.18 4.495a.749.749 0 1 1-1.06 1.06l-2.9-3.216Z" fill="currentColor" fill-rule="nonzero"></path></svg>
                            </SvgImage>
                          </SpanText>
                          <SpanText>Share</SpanText>
                        </Button>
                      </ShareSection>
                    </PrintShareSection>
                  </RowLeft>
                </NavBarSections>
              </NavBar>
            </Row>
          </Header>
        </Row>
        <Row>
          <BodyContainer>
            <Row>
              <AsidePanel>
                <SidePanel>
                  <SideElement>
                    <DesignOption>
                      <Button>
                        <SpanText>Design</SpanText>
                        <SvgImage>
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.333 4H6.667A2.667 2.667 0 0 0 4 6.667v18.666A2.667 2.667 0 0 0 6.667 28h18.666A2.667 2.667 0 0 0 28 25.333V6.667A2.667 2.667 0 0 0 25.333 4ZM6 6.667C6 6.298 6.298 6 6.667 6h10.666v20H6.667A.667.667 0 0 1 6 25.333V6.667Zm13.333 6.666V6h6c.369 0 .667.298.667.667v6.666h-6.667Zm0 2V26h6a.667.667 0 0 0 .667-.667v-10h-6.667Z" fill="currentColor"></path></svg>
                        </SvgImage>
                      </Button>
                    </DesignOption>
                  </SideElement>
                  <SideElement>
                    <ElementsOption>
                      <Button>
                        <SpanText>Elements</SpanText>
                        <SvgImage>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" d="m6.5 4.25.75-.75a2.121 2.121 0 0 1 3 3L6.5 10.25 2.75 6.5a2.121 2.121 0 0 1 3-3l.75.75zm7 6 4-7.5 4 7.5h-8zm-10.75 3.5h7.5v7.5h-7.5v-7.5zm14.75-.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path></svg>
                        </SvgImage>
                      </Button>
                    </ElementsOption>
                  </SideElement>
                  <SideElement>
                    <Option>
                      <Button>
                        <SpanText>Text</SpanText>
                        <SvgImage>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18 5.5h-5.25V18c0 .28.22.5.5.5h2a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 1 1 0-1.5h2a.5.5 0 0 0 .5-.5V5.5H6a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v1.75a.75.75 0 1 1-1.5 0V6a.5.5 0 0 0-.5-.5z"></path></svg>
                        </SvgImage>
                      </Button>
                    </Option>
                  </SideElement>
                  <SideElement>
                    <Option>
                      <Button>
                        <SpanText>Brand</SpanText>
                        <SvgImage>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.22 3.435 9.532 6.53 5.41 8.03l6.847-5.745a2 2 0 0 1 2.817.246L16.5 4.23a2.99 2.99 0 0 0-1.14.18l-.511.186-.923-1.1a.5.5 0 0 0-.704-.061Zm-1.276 4.878H7.56l8.143-2.964a2 2 0 0 1 2.563 1.195l.644 1.769h-1.597l-.457-1.256a.5.5 0 0 0-.64-.298l-4.27 1.554Zm-6.752 1h14a1.992 1.992 0 0 1 1.492.668c.316.354.508.82.508 1.332v8a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm14.822-.886.009.002-.014-.015.005.013ZM4.75 11.3a.5.5 0 0 1 .5-.5H19.2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H5.25a.5.5 0 0 1-.5-.5v-8Zm6.446 4.326c-.033.905-.768 1.544-1.782 1.544-1.185 0-1.914-.795-1.914-2.086C7.5 13.792 8.227 13 9.414 13c.995 0 1.749.664 1.779 1.56h-.968a.791.791 0 0 0-.811-.721c-.551 0-.889.471-.889 1.242 0 .773.338 1.25.891 1.25.434 0 .757-.28.815-.704h.965ZM13.688 13c1.19 0 1.946.798 1.946 2.084 0 1.288-.756 2.086-1.946 2.086-1.196 0-1.952-.798-1.952-2.086 0-1.286.765-2.084 1.952-2.084Zm0 .834c-.557 0-.927.488-.927 1.25 0 .764.365 1.253.927 1.253.556 0 .924-.489.924-1.253 0-.762-.37-1.25-.924-1.25Zm2.792 3.23a.702.702 0 1 0 0-1.405.702.702 0 0 0 0 1.404Z" fill="currentColor"></path></svg>
                        </SvgImage>
                      </Button>
                    </Option>
                  </SideElement>
                  <SideElement>
                    <Option>
                      <Button>
                        <SpanText>Uploads</SpanText>
                        <SvgImage>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.75 13.81v7.44a.75.75 0 1 1-1.5 0v-7.4L9.49 15.6a.75.75 0 1 1-1.06-1.06l2.35-2.36c.68-.68 1.8-.68 2.48 0l2.35 2.36a.75.75 0 1 1-1.06 1.06l-1.8-1.8zM9 18v1.5H6.75v-.01A5.63 5.63 0 0 1 5.01 8.66a6 6 0 0 1 11.94-.4 5.63 5.63 0 0 1 .3 11.23v.01H15V18h1.88a4.12 4.12 0 1 0-1.5-7.97A4.51 4.51 0 0 0 11 4.5a4.5 4.5 0 0 0-4.43 5.29 4.13 4.13 0 0 0 .68 8.2V18H9z"></path></svg>
                        </SvgImage>
                      </Button>
                    </Option>
                  </SideElement>
                  <SideElement>
                    <Option>
                      <Button>
                        <SpanText>Draw</SpanText>
                        <SvgImage>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.625 13.5H8.25a.75.75 0 0 0 0-1.5H5.625a2.625 2.625 0 1 0 0 5.25h10.5a1.125 1.125 0 0 1 0 2.25H11.25a.75.75 0 1 0 0 1.5h4.875a2.625 2.625 0 1 0 0-5.25h-10.5a1.125 1.125 0 0 1 0-2.25Z" fill="currentColor"></path><path d="M17.25 3a.75.75 0 0 0-.529.221l-4.683 4.68a5.226 5.226 0 0 0-1.538 3.724v1.125a.75.75 0 0 0 .75.75h1.125a5.22 5.22 0 0 0 3.713-1.537l4.69-4.684A.75.75 0 0 0 21 6.75 3.75 3.75 0 0 0 17.25 3Zm-2.212 7.901A3.724 3.724 0 0 1 12.375 12H12v-.375A3.722 3.722 0 0 1 13.1 8.974l4.444-4.455A2.25 2.25 0 0 1 19.5 6.457l-4.462 4.444Z" fill="currentColor"></path></svg>
                        </SvgImage>
                      </Button>
                    </Option>
                  </SideElement>
                  <SideElement>
                    <Option>
                      <Button>
                        <SpanText>Projects</SpanText>
                        <SvgImage>
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.078 5.333H5.334A2.667 2.667 0 0 0 2.667 8v2.667c0 .203.023.402.066.592a2.315 2.315 0 0 0-.066.55v12.382c0 1.367 1.194 2.476 2.667 2.476h21.333c1.473 0 2.667-1.109 2.667-2.477V11.81c0-1.368-1.194-2.477-2.667-2.477h-9.333l-.726-2.176a2.667 2.667 0 0 0-2.53-1.824Zm-8.744 4h9.892L14.71 7.79a.667.667 0 0 0-.633-.456H5.334A.667.667 0 0 0 4.667 8v1.411c.213-.05.436-.078.667-.078Zm-.667 2.477c0-.229.267-.477.667-.477h21.333c.4 0 .667.248.667.477v12.38c0 .229-.267.477-.667.477H5.334c-.4 0-.667-.248-.667-.477V11.81Z" fill="currentColor"></path></svg><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.625 13.5H8.25a.75.75 0 0 0 0-1.5H5.625a2.625 2.625 0 1 0 0 5.25h10.5a1.125 1.125 0 0 1 0 2.25H11.25a.75.75 0 1 0 0 1.5h4.875a2.625 2.625 0 1 0 0-5.25h-10.5a1.125 1.125 0 0 1 0-2.25Z" fill="currentColor"></path><path d="M17.25 3a.75.75 0 0 0-.529.221l-4.683 4.68a5.226 5.226 0 0 0-1.538 3.724v1.125a.75.75 0 0 0 .75.75h1.125a5.22 5.22 0 0 0 3.713-1.537l4.69-4.684A.75.75 0 0 0 21 6.75 3.75 3.75 0 0 0 17.25 3Zm-2.212 7.901A3.724 3.724 0 0 1 12.375 12H12v-.375A3.722 3.722 0 0 1 13.1 8.974l4.444-4.455A2.25 2.25 0 0 1 19.5 6.457l-4.462 4.444Z" fill="currentColor"></path></svg>
                        </SvgImage>
                      </Button>
                    </Option>
                  </SideElement>
                  <SideElement>
                    <Option>
                      <Button>
                        <SpanText>Apps</SpanText>
                        <SvgImage>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6-6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6-6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM5 16h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"></path></svg>
                        </SvgImage>
                      </Button>
                    </Option>
                  </SideElement>
                </SidePanel>
              </AsidePanel>
              <SubMenuContainer>
                <CentralContainer>
                  <Row>
                    <TopCentralContainer>
                      {/* This section is in case of Elements option */}
                      <InputSearchElement>
                        <SpanText>
                          <SvgImage>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.928 1.048c.013-.064.13-.064.144 0 .115.543.38 1.51.875 2.005.495.496 1.462.76 2.006.875.063.013.063.13 0 .144-.544.115-1.51.38-2.006.875-.496.495-.76 1.462-.875 2.005-.013.064-.13.064-.144 0-.115-.543-.38-1.51-.875-2.005-.495-.496-1.462-.76-2.006-.875-.063-.013-.063-.13 0-.144.544-.115 1.51-.38 2.006-.875.496-.495.76-1.462.875-2.005ZM13.067 4.046c-.012-.061-.122-.061-.134 0-.133.67-.477 2.044-1.16 2.727-.683.683-2.057 1.027-2.727 1.16-.061.012-.061.122 0 .134.67.133 2.044.477 2.727 1.16.683.683 1.027 2.057 1.16 2.727.012.061.122.061.134 0 .133-.67.477-2.044 1.16-2.727.683-.683 2.057-1.027 2.727-1.16.061-.012.061-.122 0-.134-.67-.133-2.044-.477-2.727-1.16-.683-.683-1.027-2.057-1.16-2.727Z" fill="currentColor"></path><path d="M2 11.5a7.5 7.5 0 0 0 12.202 5.843l4.156 4.157a1 1 0 1 0 1.415-1.414l-4.193-4.193A7.46 7.46 0 0 0 16.984 12h-1.505A6 6 0 1 1 9 5.52V4.017A7.5 7.5 0 0 0 2 11.5Z" fill="currentColor"></path></svg>
                          </SvgImage>
                        </SpanText>
                        <InputSearch />
                        <Button>
                          <SpanText>
                            <SvgImage>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6.1 17.25a3 3 0 0 1 5.8 0h8.85a.75.75 0 1 1 0 1.5h-8.84a3 3 0 0 1-5.82 0H3.25a.75.75 0 1 1 0-1.5h2.84zm6-6a3 3 0 0 1 5.8 0h2.85a.75.75 0 1 1 0 1.5h-2.84a3 3 0 0 1-5.82 0H3.25a.75.75 0 1 1 0-1.5h8.84zm-6-6a3 3 0 0 1 5.8 0h8.85a.75.75 0 1 1 0 1.5h-8.84a3 3 0 0 1-5.82 0H3.25a.75.75 0 0 1 0-1.5h2.84zM9 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
                            </SvgImage>
                          </SpanText>
                        </Button>
                      </InputSearchElement>
                    </TopCentralContainer>
                  </Row>
                  <Row>
                    <BottomCentralContainer></BottomCentralContainer>
                  </Row>
                </CentralContainer>
                <HideSubMenuContainer>
                  <Button>
                    <SvgImage>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 96" width="13" height="96" fill="none" class="IrLwCg"><path class="QSQMjg" d="M0,0 h1 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32 H0 z"></path><path class="TjrBvg" d="M0.5,0 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32"></path></svg>
                    </SvgImage>
                  </Button>
                </HideSubMenuContainer>
              </SubMenuContainer>
              <MainContainer>
                <Row>
                  <HeaderMainContainer></HeaderMainContainer>
                </Row>
                <Row>
                  <CentralMainContainer></CentralMainContainer>
                </Row>
                <Row>
                  <Footer>
                    <Row>
                      <LeftFooter>
                        <Notes></Notes>
                      </LeftFooter>
                      <RightFooter>
                        <PageInformation></PageInformation>
                        <RangePorcentageImage>
                          <InputRange/>
                        </RangePorcentageImage>
                        <PorcentageImage></PorcentageImage>
                        <GridElments></GridElments>
                        <ExpandProject></ExpandProject>
                        <QuestionsChat></QuestionsChat>
                      </RightFooter>
                    </Row>
                  </Footer>
                </Row>
              </MainContainer>
            </Row>
          </BodyContainer>
        </Row>
      </CanvaApp>
    </>
  );
}