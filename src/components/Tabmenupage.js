import { Tabs } from 'antd';
import LayoutComponent from '../../src/components/Layout'
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


const Tabmenupage = () => {
   const adminList = ['พี่เซท', 'พี่ไอซ์']
  const memberList = ['tarn','kwan','karn','ped','nan','wiw']
  const team = ['mapmagic','shop','JTU']
  return (
    <div  style={{ background: '#ECECEC',height: '1000px',padding:'50px' }}>
    <div className="Tabmenupage" > <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="ผู้ดูแลระบบ" key="1"><LayoutComponent  data={adminList}/></TabPane>
        <TabPane tab="สมาชิก slack" key="2"><LayoutComponent  data={memberList}/></TabPane>
        <TabPane tab="ทีม" key="3"><LayoutComponent  data={team}/></TabPane>
      </Tabs>
    </div>
    </div>
  )
}

export default Tabmenupage;