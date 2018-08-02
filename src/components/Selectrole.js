import React, { Component } from 'react';
import { Select } from 'antd';
const Selectrole = () =>{
  const Option = Select.Option;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

    return (
      <div>
      <Select defaultValue="Admin" style={{ width: 100 }} onChange={handleChange}>
        <Option value="Admin">Admin</Option>
        <Option value="Editer">Editer</Option>
        <Option value="Viewer">Viewer</Option>
      </Select>
    </div>
    )

}

export default Selectrole;