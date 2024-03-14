// 导入tesseract.js
const Tesseract = require('tesseract.js');

// 图片的路径
const imagePath = './image.png';

// 使用Tesseract识别图片中的文字
Tesseract.recognize(
  imagePath,
  'chi_sim', // 指定识别的语言。这里是英语，对于中文可以使用'chi_sim'。
  {
    logger: m => console.log(m) // 显示实时进度
  }
).then(({ data: { text } }) => {
  console.log(text); // 打印识别出的文字
}).catch(error => {
  console.error(error); // 打印可能发生的错误
});

