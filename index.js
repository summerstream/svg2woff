var fontCarrier = require('font-carrier');
var fs = require('fs');
//创建空白字体，使用svg生成字体
var font = fontCarrier.create()
// var love = fs.readFileSync('./input/家庭.svg').toString()
// var mail = fs.readFileSync('./input/箭头-右.svg').toString()

fs.readdir('input',function(err,files){
  files.forEach(function(fname,index){
    console.log(fname);
    var file = fs.readFileSync('./input/'+fname).toString();
    var name = fname.split('.')[0];
    // font.setGlyph(name,{
    //   svg:file,
    //   glyphName:name
    // })
    //E000-F8FF
    var code = 57345 + index;
    // font.setSvg(code.toString(16),file)
    font.setSvg('&#x'+code.toString(16)+';',file);
  });

  font.output({
    path:'./output/iconfont'
  })
});

// //使用汉字
// font.setGlyph('家',{
//   svg:love,
//   glyphName:'家'
// })

//使用unicode
// font.setSvg('arrow-right',mail)

// font.output({
//   path:'./output/iconfont'
// })