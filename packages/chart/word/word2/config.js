let mockData = [
  { name: '微信', value: 3328 },
  { name: '南方+', value: 1045 },
  { name: '东莞时间网', value: 834 },
  { name: 'i东莞', value: 804 },
  { name: '新浪微博', value: 532 },
  { name: '今日头条', value: 493 },
  {
    name: '腾讯新闻',
    value: 479
  },
  { name: '东莞阳光网', value: 387 },
  { name: '东莞日报', value: 289 },
  { name: '一点资讯', value: 287 },
  { name: '东方头条网', value: 233 },
  { name: '南方都市报', value: 228 },
  { name: '新粤网', value: 207 },
  { name: '南方plus', value: 206 },
  { name: '网易新闻', value: 201 },
  { name: '东方头条', value: 180 },
  { name: '趣头条', value: 178 },
  { name: '羊城派', value: 151 },
  { name: '东莞时报', value: 143 },
  { name: '莞讯网', value: 139 },
  { name: '广州日报', value: 137 },
  { name: '东莞阳光台', value: 132 },
  { name: '搜狐新闻', value: 129 }
].slice();

function selectFrom(lowerValue, upperValue) {
  //取值范围总数
  var choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}
const defaultOption = {
  legend: {
    show: true,
    textStyle: { color: '#fff' },
    top: '10%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '10%',
    right: '10%',
    top: '28%',
    bottom: '10%',
    containLabel: true
  },
  dataset: {
    source: mockData
  },
  series: [
    {
      type: 'wordCloud',
      gridSize: 8,
      sizeRange: [12, 50],
      rotationRange: [-90, 90],
      shape: 'square',
      width: '80%',
      height: '80%',
      drawOutOfBound: false,
      layoutAnimation: true,
      textStyle: {
        color: function () {
          return (
            'rgb(' +
            [
              selectFrom(50, 255),
              selectFrom(50, 255),
              selectFrom(50, 255)
            ].join(',') +
            ')'
          );
        }
      },
      emphasis: {
        textStyle: {
          shadowBlur: 10,
          shadowColor: '#333',
          color: '#409EFF'
        }
      },
      data: mockData
    }
  ]
};
export default defaultOption;
