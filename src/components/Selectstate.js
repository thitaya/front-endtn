import React, { Component } from 'react';
import { Select } from 'antd';

const Selectstate = () =>{
    const Option = Select.Option;
  
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
  
    return (
      <div>
      <Select defaultValue="ใช้งานปกติ" style={{ width: 100 }} onChange={handleChange}>
        <Option value="ใช้งานปกติ">ใช้งานปกติ</Option>
        <Option value="ระงับใช้งาน">ระงับใช้งาน</Option>
      </Select>
        
      </div>
    )

}

export default Selectstate;