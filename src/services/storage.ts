export default {
  get (key: string) {
    const data = window.localStorage.getItem(key) || ''
    try {
      return JSON.parse(data)
    } catch (err) {
      return data
    }
  },

  set (key: string, data: any) {
    switch (typeof data) {
      case 'object':
        window.localStorage.setItem(key, JSON.stringify(data))
        break
      default:
        window.localStorage.setItem(key, data)
        break
    }
  }
}
