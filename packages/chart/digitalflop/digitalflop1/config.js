const defaultOption = {
  num: 12467,
  fontSize: 50,
  fontFamily: 'DS-DIGI',
  isFormatter: true,
  formatter: (number) => {
    // 取整数部分
    const zhengshu = number.toString().split('.')[0]
    const xiaoshu = number.toString().split('.')[1]
    const numbers = zhengshu.toString().split('').reverse()
    const segs = []
  
    while (numbers.length) segs.push(numbers.splice(0, 3).join(''))
    // console.log(segs.join(',').split('').reverse().join('') + '.' + xiaoshu);
    return segs.join(',').split('').reverse().join('') + '.' + xiaoshu
  }
}
export default defaultOption;