// TODO
var Cucumbers = () => (<li>Cucumbers</li>)
var Kale = () => (<li>Kale</li>)

var GroceryList = () => (
  <ul>
    <Cucumbers />
    <Kale />
  </ul>
  )

// var TodoList = (props) => {
//   //onListItemClick is a JS function
//   var onListItemClick = (event) => {
//     console.log('i got clicked');
//   }
//     return (
//       <ul>
//         <li onClick ={onListItemClick}>{props.todo[0]}</li>
//         <li>{props.todo[1]}</li>
//         <li>{props.todo[2]}</li>
//       </ul>
//     )
// }

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo => <TodoListItem todo ={todo} />)}
  </ul>
  )

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false,
    };
  }

  onListItemClick(event) {
    console.log('i just got clicked!');
    this.setState({
      done: !this.state.done
    })
  } 
  onHover(event) {
    console.log('i just got hovered!');
    this.setState({
      hover: true
    })
  }

  onLeave(event) {
    this.setState({
      hover: false
    })
    console.log('you left me!');
  }

  render() {
    var style;
      if (this.state.done && this.state.hover) {
        style = {textDecoration: 'line-through', 'font-weight': 'bold'};
      } else if (this.state.done && !this.state.hover) {
        style = {textDecoration: 'line-through', 'font-weight': 'normal'}
      } else if (!this.state.done && !this.state.hover) {
        style = {textDecoration: 'none',  'font-weight': 'normal'};
      } else if (!this.state.done && this.state.hover) {
        style = {textDecoration: 'none', 'font-weight': 'bold'};
      }

    var style2;


    return (
      <li style={style}  onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
      )
  }
}

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList />
    <TodoList todos={['wash', 'cook','eat']} />
  </div>
  );

ReactDOM.render(<App />, document.getElementById("app"));