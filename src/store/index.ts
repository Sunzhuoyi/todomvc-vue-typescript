import Vue from 'vue'
import Vuex from 'vuex'
import * as API from './apis'

Vue.use(Vuex)

export enum MUTATIONS {
  SET_TODOLIST = 'SET_TODOLIST',
  ADD_TODOITEM = 'ADD_TODOITEM'
}

export enum ACTIONS {
  GET_TODOLIST = 'GET_TODOLIST',
  ADD_TODOITEM = 'ADD_TODOITEM'
}

export interface TodoItem {
  content: string
  id?: number
}

const todoList: TodoItem[] = []

export default new Vuex.Store({
  state: {
    todoList
  },

  mutations: {
    [MUTATIONS.SET_TODOLIST] (state, todoList: TodoItem[]): void {
      state.todoList = todoList
    },

    [MUTATIONS.ADD_TODOITEM] (state, todoItem: TodoItem): void {
      state.todoList = [todoItem, ...state.todoList]
    }
  },

  actions: {
    [ACTIONS.ADD_TODOITEM] (store, item: TodoItem): void {
      API.addTodoItem(item)
        .then(() => {
          store.commit(MUTATIONS.ADD_TODOITEM, item)
        })
    },

    [ACTIONS.GET_TODOLIST] (store): void {
      API.getTodoList()
        .then((todoList) => {
          store.commit(MUTATIONS.SET_TODOLIST, todoList)
        })
    }
  }
})
