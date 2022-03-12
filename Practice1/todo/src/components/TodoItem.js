import React, { Component } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

export default class extends Component {
  render() {
    const { items ,handleDelete ,handleEdit} = this.props;
    return (
      <div>
        {items.map((item) => {
          return (
            <li key={item.id} className="list-item">
              <input value={item.title} className="list"/>
              <div>
                <button onClick={()=>handleEdit(item.id)} className="button-edit task-button">
                <BiEditAlt/>
                </button>
                <button onClick={()=>handleDelete(item.id)} className="button-delete task-button">
                <RiCloseCircleLine />
                </button>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}
