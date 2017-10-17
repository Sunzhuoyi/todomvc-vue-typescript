export default (err) => {
  let msg: string

  if (err.message) msg = err.message
  else msg = err

  window.alert(msg)
}
