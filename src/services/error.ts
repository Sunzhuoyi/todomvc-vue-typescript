interface ErrorObject {
  message: string
}
export default (err: ErrorObject | string) => {
  let msg: string

  if (typeof err === 'string') msg = err
  else msg = err.message

  window.alert(msg)
}
