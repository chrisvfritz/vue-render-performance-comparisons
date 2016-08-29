const ListItem = {
  functional: true,
  render (h) {
    return <li>hi</li>
  }
}

const ListItems = {
  functional: true,
  render (h, { props }) {
    return (
      <ul>
        {props.items.map(() =>
          <ListItem/>
        )}
      </ul>
    )
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}

const List = {
  functional: true,
  render (h, { data }) {
    return <div><ListItems {...data}/></div>
  }
}

export default List
