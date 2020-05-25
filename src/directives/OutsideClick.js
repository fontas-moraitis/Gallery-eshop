/* notes:
    class to exclude elements: outside-click-exclude
*/

var handleOutsideClick = {}

const OutsideClick = {
  bind (el, binding) {
    console.dir(el)
    handleOutsideClick[el.id] = e => {
      e.stopPropagation()
      const { handler, exclude } = binding.value
      let clickedOnExcludedEl = false
      if (e.target._prevClass !== undefined) {
        for (const className of exclude) {
          clickedOnExcludedEl = e.target._prevClass.includes(className)
          if (clickedOnExcludedEl) {
            break
          }
        }
      }
      if (!(el.contains(e.target) || clickedOnExcludedEl)) {
        handler()
      }
    }

    document.addEventListener('click', handleOutsideClick[el.id])
  },
  unbind (el) {
    document.removeEventListener('click', handleOutsideClick[el.id])
  }
}

export default OutsideClick
