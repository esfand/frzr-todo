
import {Observable} from '../frzr/index'

var starttime: number;

export default function (root: Observable, target: HTMLElement) {
  // listen to 'render' event and remember time
  root.on('render', function () {
    starttime = Date.now()
  })
  // listen to 'rendered' event and log render time
  root.on('rendered', function () {
    target.textContent = 'Rendering took ' + (Date.now() - starttime) + ' ms'
  })
}
