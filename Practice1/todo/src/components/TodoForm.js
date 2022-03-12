import React, { Component } from 'react'

export default class TodoForm extends Component {
  render() {
    const {item, handleChange,handleSubmit,editItem} = this.props
    return (
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='تسک جدید وارد کنید...'  value={item} onChange={handleChange} className="text-input"/>
          <button type='submit' className="button-add">{editItem?'ویرایش':'اضافه'}</button>
        </form>
      </div>
    )
  }
}
