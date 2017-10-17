import { TodoItem } from './index'
import { STORAGE_KEY } from '@/constants'
import Storage from '@/services/storage'

export const getTodoList = (): Promise<TodoItem[]> => {
  return new Promise((resolve, reject) => {
    resolve(Storage.get(STORAGE_KEY.TODO_LIST) || [])
  })
}
