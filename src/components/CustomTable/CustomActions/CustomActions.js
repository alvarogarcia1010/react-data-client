import React from 'react'
import MoreActionsMenu from '../../MoreActionsMenu/MoreActionsMenu'

const CustomActions = (props) => {
  return (
    <div className="d-inline-flex">
      {props.children}
      {props.moreActionsMenu?
      <MoreActionsMenu 
        options={props.options} 
        onEditClickedAction={props.onEditClickedAction}
        confirmDeleteAction={props.confirmDeleteAction}
        onAttachFileAction={props.onAttachFileAction}
      /> : null
      }
    </div>
  )
}

export default CustomActions;
