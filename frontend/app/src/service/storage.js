const ls = window.localStorage
const storage = {
    setValue: (key, value) => {
        ls.setItem(key, value)
    },
    getValue: (key) => {
        return ls.getItem(key)
    }
}
export default storage