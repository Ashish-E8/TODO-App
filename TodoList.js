import React, { Component } from 'react'
//import {View,Text} from 'react'
class TodoList extends Component {
    handleInput = e => {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
          currentItem,
        })
      }
      addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
          console.log(newItem)
          const items = [...this.state.items, newItem]
          this.setState({
            items: items,
            currentItem: { text: '', key: '' },
          })
        }
      }
    componentDidUpdate() {
      this.props.inputElement.current.focus()
    }
    render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.props.addItem}>
              <input
                placeholder="Task"
                ref={this.props.inputElement}
                value={this.props.currentItem}
                onChange={this.props.handleInput}
              />
              <button type="submit"> Add Task </button>
            </form>
          </div>
        </div>
      )
    }
  }
  export default TodoList