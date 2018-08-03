import { Tabs } from 'antd';
import LayoutComponent from '../../src/components/Layout'
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


const Tabmenupage = () => {
  return (
    <div  style={{ background: '#ECECEC',height: '1000px',padding:'50px' }}>
    <div className="Tabmenupage" > <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="ผู้ดูแลระบบ" key="1"><LayoutComponent/></TabPane>
        <TabPane tab="สมาชิก slack" key="2"><LayoutComponent/></TabPane>
        <TabPane tab="ทีม" key="3"><LayoutComponent/></TabPane>
      </Tabs>
    </div>
    </div>
  )
}

export default Tabmenupage;