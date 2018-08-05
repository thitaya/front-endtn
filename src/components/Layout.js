import { Collapse } from 'antd';
import Navname from '../components/Navname'
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import Selectrole from '../components/Selectrole'
import Selectstate from '../components/Selectstate'

const Panel = Collapse.Panel;

const text = `
 55
`;

const LayoutComponent = (props) => {

  return (
    <div className ="loyoutall">
      <Navname />
       {props.data.map(name => 
     ( <div className="layout" >
        <div className="users">
          <h2 className="name-user">{name}</h2>
        </div>
        <div className="Card-role">
        <Selectrole/>
        </div>
        <div className="Card-state">
         <Selectstate/>
        </div>
      </div>)
      )}
    </div>
  )
}


export default LayoutComponent;