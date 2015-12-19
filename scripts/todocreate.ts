
import {View} from '../frzr/view'
import {shuffle} from '../frzr/utils'
import {Observable} from '../frzr/observable'

// Choose some of these for placeholder
var whattodo: Array<string> = ['Buy milk', 'Feed cat', 'Go fishing', 'Pay rent', 'Watch a movie', 'Learn to cook']

// shuffle
shuffle(whattodo)

export default function (root: Observable, target: HTMLElement): void {
  // Form
  var form: View = new View({
    el: 'form',
    listen: {
      submit: createTodo
    },
    $root: target
  })

  // elements
  var title: View = new View({
    el: 'h2',
    text: 'What to do?',
    parent: form
  })
  var input: View = new View({
    el: 'input',
    attr: {
      autofocus: true,
      placeholder: whattodo[0]
    },
    parent: form
  })
  var insertbutton: View = new View({
    el: 'button',
    text: 'Insert',
    parent: form
  })
  var clearbutton: View = new View({
    el: 'button',
    text: 'Clear done',
    listen: {
      click: clearDone
    },
    $root: target
  })
  var clearallbutton: View = new View({
    el: 'button',
    text: 'Clear all',
    listen: {
      click: clearAll
    },
    $root: target
  })

  // actions

  function createTodo (e: HTMLElement): void {
    e.preventDefault()
    var newTodo = {
      id: Date.now(),
      title: input.$el.value || whattodo[0],
      done: false
    }
    root.trigger('todo-create', newTodo)

    input.$el.value = ''

    shuffle(whattodo)
    input.attr({
      placeholder: whattodo[0]
    })
    input.$el.focus()
  }

  function clearDone (): void {
    clearbutton.$el.blur()
    root.trigger('todo-clear')
  }

  function clearAll (): void {
    clearallbutton.$el.blur()
    root.trigger('todo-clearall')
  }
}
