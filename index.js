const alfy = require('alfy')

const keyword = encodeURIComponent(alfy.input)

const data = await alfy.fetch(
  `https://sffc.sh-service.com/wx_miniprogram/sites/feiguan/trashTypes_2/Handler/Handler.ashx?a=GET_KEYWORDS&kw=${keyword}`
)

const getItems = () => {
  if (data.kw_arr) {
    return data.kw_arr.map(element => ({
      title: element.Name,
      subtitle: element.TypeKey,
      arg: element.Name,
      icon: {
        path: `${element.TypeKey}.png`
      }
    }))
  } else {
    return [
      {
        title: `未找到${alfy.input}的分类`,
        subtitle: '回车问问搜索引擎吧',
        arg: alfy.input
      }
    ]
  }
}

alfy.output(getItems())
