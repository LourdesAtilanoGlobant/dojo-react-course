import { RowRight, RowLeft, Row } from "./Row";
import { SectionHeaderLeft, SectionHeaderRight } from "./Sections";
import "./Navbar-styles.scss";

const sectionsHeaderLeft = [
  {id: 2, title: "Ham", type: "svg"},
  {id: 2, title: "Home", type: "anchor"},
  {id: 3, title: "File", type: "button"},
  {id: 4, title: "Magic Switch", type: "svg"},
  {id: 5, title: "Back", type: "svg"},
  {id: 6, title: "Next", type: "svg"},
  {id: 7, title: "Save", type: "svg"},
];

const sectionsHeaderRight = [
  {id: 2, title: "NameProject", type: "input"},
  {id: 2, title: "CanvaPro", type: "button"},
  {id: 3, title: "Collaborators", type: "button"},
  {id: 4, title: "Magic Switch", type: "svg"},
  {id: 5, title: "Insight", type: "svg"},
  {id: 6, title: "Print", type: "svg"},
  {id: 7, title: "Share", type: "svg"},
];

export const NavBarSections = (props) => {
  const {rowRight, rowLeft} = props;

  return (<>
    <Row className="flex items-center border border-green-500 border-solid navBarSections">
      <RowLeft className="z-10 py-3 text-white">
        <ul className="flex">
          {rowLeft.map((item) =>
            <SectionHeaderLeft key={`item-row-left${item.id}`} item={item} />
          )}
        </ul>    
      </RowLeft>
      <RowRight className="z-10 py-3 text-white">
        <ul className="flex justify-end">
          {rowRight.map((item) => 
            <SectionHeaderRight key={`item-row-right${item.id}`} item={item} />
          )}
        </ul>
      </RowRight>
    </Row>
  </>);
}

export const NavBar = () => {
  return ( 
    <>
      <nav className="flex items-center text-white navBarBackground">
          <NavBarSections rowLeft={sectionsHeaderLeft} rowRight={sectionsHeaderRight} />
      </nav>
    </>
  );
}
