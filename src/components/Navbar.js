import { Icon } from 'antd';


const Navbar = () => {
    return (
        <div className ="">
  <div className="Card-menu">
        <div className="Card-one">
        {/* <Icon type="question" style={{ fontSize: 16, color: '#08c' }} /> */}
        <h1 className="name-tndaily">TN DAILY</h1>
        </div>
        <div className="wigth-nav">
        <a href="/"> <h1 className="report"> <Icon type="file" style={{ fontSize: 16, color: '#fff' }} />รายงานประจำวัน</h1></a>
        </div>
        <div className="wigth-nav">
        <a href="/"> <h1 className="setting"><Icon type="setting" style={{ fontSize: 16, color: '#fff' }} />ตั้งค่า</h1></a>
        </div>
        <div className="wigth-nav">
       <a> <h1 className="user"><Icon type="user" style={{ fontSize: 16, color: '#fff' }} />Username<Icon type="caret-down" style={{ fontSize: 10, color: '#fff' }} /></h1></a>
        </div>
      </div>
         
        </div>
    )
}
export default Navbar