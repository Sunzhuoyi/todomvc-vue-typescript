import { TodoItem } from './index'
import { STORAGE_KEY } from '@/constants'
import Storage from '@/services/storage'

export const addTodoItem = (item: TodoItem): Promise<void> => {
  return new Promise((resolve, reject) => {
    const todoList = Storage.get(STORAGE_KEY.TODO_LIST) || []
    Storage.set(STORAGE_KEY.TODO_LIST, [Object.assign({}, item, {
      id: todoList.length
    }), ...todoList])
    resolve()
  })
}

export const getTodoList = (): Promise<TodoItem[]> => {
  return new Promise((resolve, reject) => {
    resolve(Storage.get(STORAGE_KEY.TODO_LIST) || [])
  })
}
