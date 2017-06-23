var fontCarrier = require('font-carrier');
var fs = require('fs');
//创建空白字体，使用svg生成字体
var font = fontCarrier.create()
var love = fs.readFileSync('./input/家庭.svg').toString()
var mail = fs.readFileSync('./input/箭头-右.svg').toString()

//使用汉字
font.setGlyph('家',{
  svg:love,
  glyphName:'家'
})

//使用unicode
font.setSvg('arrow-right',mail)

font.output({
  path:'./output/iconfont'
})