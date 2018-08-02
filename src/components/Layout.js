import { Collapse } from 'antd';
import Navname from '../components/Navname'
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import Selectrole from '../components/Selectrole'
import Selectstate from '../components/Selectstate'

const Panel = Collapse.Panel;

const text = `
 55
`;

const LayoutComponent = () => {

  return (
    <div>
      <Navname />
      <div className="layout" style={{ width : "120%"}}>
        <div className="users">
          <h2 className="name-user">mapmagic</h2>
        </div>
        <div className="Card-role">
        <Selectrole/>
        </div>
        <div className="Card-state">
         <Selectstate/>
        </div>
      </div>

    </div>
  )
}


export default LayoutComponent;