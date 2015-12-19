
import {Observable} from '../frzr/observable'

import debug from './debug'
import title from './title'
import todocreate from './todocreate'
import todoitems from './todoitems'

var $rendertime: HTMLElement = document.getElementById('rendertime')
var $container: HTMLElement = document.getElementById('container')
var root: Observable = new Observable()

// mount debug
debug(root, $rendertime)

// mount title
title(root, $container)

// mount input
todocreate(root, $container)

// mount items
todoitems(root, $container)
