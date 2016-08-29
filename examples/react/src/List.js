import React from 'react'

const ListItem = () => {
  return <li>hi</li>
}

const ListItems = props => {
  return (
    <ul>
      {props.items.map((_, index) =>
        <ListItem key={index}/>
      )}
    </ul>
  )
}

const List = props => {
  return (
    <div>
      <ListItems {...props}/>
    </div>
  )
}

export default List
