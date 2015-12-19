
import {View} from '../frzr/view'
import {Observable} from '../frzr/observable'

export default function (root: Observable, target: HTMLElement) {
  // h1
  var view: View = new View({el: 'h1', text: 'Todo'})
  // p
  var notice: View = new View({el: 'p', text: '(items stay between refreshes)', 
                              style: {fontStyle: 'italic'}})

  // mount elements
  view.mount(target)
  notice.mount(target)
}
