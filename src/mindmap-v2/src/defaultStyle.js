
export function defaultXMindStyle (data, node, index) {
  console.log(data, node, index, '====')
  const style = {}
  if (data && data.title.indexOf('空缺') > -1) {
    style.properties = {
      "svg:fill": "#CF2C2CFF",
      "line-color": "#CF2C2CFF",
      "fo:color": "#FFFFFFFF",         
      "border-line-color": "#CF2C2CFF",
      "border-line-width": "3pt",
      "border-line-pattern": "solid"
    }
  }
  if (index === 0) {
    const properties ={
      "svg:fill": "#CF2C2CFF",
      "line-color": "#CF2C2CFF",
      "border-line-color": "#CF2C2CFF",
      "border-line-width": "3pt",
      "border-line-pattern": "solid",
      "line-class": "org.xmind.branchConnection.elbow"
    }
    style.properties = {
      ...style.properties,
      ...properties
    }
  }
  if (index === 1) {
    const properties = {
      "svg:fill": "#FFFFFFFF",
      "fo:font-size": "18pt",
      "fo:color": "#000000FF",
    }
    style.properties = {
      ...style.properties,
      ...properties
    }
  }

  return style
}