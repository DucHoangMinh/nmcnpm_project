import Toast from "./toast"
const showNotice = (icon, content) => {
    let iconString = icon===1?'success':'error'
    Toast.fire({
        icon: iconString,
        title: content
    })
}
export default showNotice