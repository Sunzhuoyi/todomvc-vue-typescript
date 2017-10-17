import Vue from 'vue'
import Vuex from 'vuex'
import * as API from './apis'
import Storage from '@/services/storage'
import { STORAGE_KEY } from '@/constants'

Vue.use(Vuex)

export enum MUTATIONS {
  SET_TODOLIST = 'SET_TODOLIST',
  ADD_TODOITEM = 'ADD_TODOITEM',
  REMOVE_TODOITEM = 'REMOVE_TODOITEM',
  TOGGLE_COMPLETE = 'TOGGLE_COMPLETE',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  COMPLETE_ALL = 'COMPLETE_ALL',
  UNCOMPLETE_ALL = 'UNCOMPLETE_ALL'
}

export enum ACTIONS {
  GET_TODOLIST = 'GET_TODOLIST'
}

export interface TodoItem {
  content: string,
  isCompleted: boolean,
  id?: number
}

export interface State {
  todoList: TodoItem[]
}

const todoList: TodoItem[] = []

const Store = new Vuex.Store({
  state: {
    todoList
  },

  mutations: {
    [MUTATIONS.SET_TODOLIST] (state, todoList: TodoItem[]): void {
      state.todoList = todoList
    },

    [MUTATIONS.ADD_TODOITEM] (state, todoItem: TodoItem): void {
      state.todoList = [todoItem, ...state.todoList]
    },

    [MUTATIONS.REMOVE_TODOITEM] (state, id): void {
      state.todoList = state.todoList.filter((item: TodoItem): boolean => item.id !== id)
    },

    [MUTATIONS.TOGGLE_COMPLETE] (state, id): void {
      const todoList: TodoItem[] = state.todoList
      const l = todoList.length
      for (let i = 0; i < l; i++) {
        if (todoList[i].id === id) {
          todoList[i].isCompleted = !todoList[i].isCompleted
          return
        }
      }
    },

    [MUTATIONS.CLEAR_COMPLETED] (state): void {
      state.todoList = state.todoList.filter(item => !item.isCompleted)
    },

    [MUTATIONS.COMPLETE_ALL] (state): void {
      state.todoList = state.todoList.map(item => Object.assign({}, item, { isCompleted: true }))
    },

    [MUTATIONS.UNCOMPLETE_ALL] (state): void {
      state.todoList = state.todoList.map(item => Object.assign({}, item, { isCompleted: false }))
    }
  },

  actions: {
    async [ACTIONS.GET_TODOLIST] (store): Promise<void> {
      const todoList: TodoItem[] = await API.getTodoList()
      store.commit(MUTATIONS.SET_TODOLIST, todoList)
    }
  }
})

Store.subscribe((mutation, { todoList }) => {
  Storage.set(STORAGE_KEY.TODO_LIST, todoList)
})

export default Store
