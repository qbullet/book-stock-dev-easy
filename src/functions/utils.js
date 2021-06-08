const utilFunction = {
  removeUnuseData (_obj, only = []) {
    const obj = _obj
    const keys = Object.keys(obj)
    keys.forEach((key) => {
      const onlyfield = only.length !== 0 ? !only.some((each) => each === key) : true
      if (obj[key] && (isObject(obj[key]) && JSON.stringify(obj[key]) !== '{}')) {
        obj[key] = removeUnuseData(obj[key])
      } else if (!obj[key] || JSON.stringify(obj[key]) === '{}' || onlyfield) {
        delete obj[key]
      }
    })

    return JSON.stringify(obj) !== '{}' ? obj : null
  }
}

function isObject (object) {
  return object != null && typeof object === 'object'
}

module.exports = utilFunction;
