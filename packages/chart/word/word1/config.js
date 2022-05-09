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
  { name: '搜狐新闻', value: 129 },
  {
    name: '今日头条.APP',
    value: 116
  },
  { name: '东莞阳光平台', value: 108 },
  { name: '腾讯新闻.APP', value: 107 },
  { name: 'UC头条', value: 98 },
  { name: '凤凰新闻', value: 93 },
  { name: '报告诉', value: 77 },
  { name: '网易新闻.APP', value: 74 },
  { name: '中国小康网', value: 64 },
  { name: '东莞万江', value: 63 },
  { name: '信息时报', value: 59 },
  { name: '中国文明网', value: 58 },
  { name: '东莞网', value: 57 },
  { name: '搜狐新闻（自媒体）', value: 54 },
  { name: '南方日报', value: 54 },
  { name: '搜狐焦点', value: 53 },
  { name: '阳光社区', value: 52 },
  { name: '南方plus.APP', value: 47 },
  { name: '阳光望牛墩', value: 46 },
  { name: '中国报道', value: 43 },
  { name: '新浪新闻', value: 43 },
  { name: '房掌柜', value: 39 },
  { name: '广州日报网', value: 38 },
  { name: 'ZAKER', value: 38 },
  { name: '一点资讯.APP', value: 35 },
  { name: '聚焦东莞', value: 35 },
  { name: '广州新闻网', value: 35 },
  { name: '新浪', value: 31 },
  { name: '东莞服务热线12345', value: 31 },
  { name: '人民网', value: 29 },
  { name: '阳光热线问政平台', value: 26 },
  { name: '党报头条', value: 26 },
  { name: '羊城晚报地方版', value: 24 },
  { name: '网易房产', value: 23 },
  { name: '中国网', value: 22 },
  { name: '金羊网', value: 21 },
  { name: '东莞长安', value: 21 },
  { name: '百家号', value: 21 },
  { name: '澎湃新闻', value: 20 },
  { name: '读特', value: 19 },
  { name: '东方头条.APP', value: 17 },
  { name: '阳光石排', value: 16 },
  { name: '新浪乐居', value: 16 },
  { name: '微信邦', value: 16 },
  { name: '搜狐新闻.APP', value: 16 },
  { name: '人民日报', value: 16 },
  { name: '百度新闻', value: 16 },
  { name: '南方都市报.APP', value: 15 },
  { name: '荔枝网', value: 15 },
  { name: '华人头条', value: 15 },
  { name: '广东建设报', value: 15 },
  { name: '中国', value: 14 },
  { name: '阳光黄江', value: 14 },
  { name: '东方网', value: 14 },
  { name: '网易', value: 12 },
  { name: '搜狐网', value: 12 },
  { name: '和讯', value: 12 },
  { name: '文化莞城', value: 11 },
  { name: '58同镇', value: 11 },
  { name: '凤凰网', value: 10 },
  { name: '新浪网', value: 9 },
  { name: '趣头条.APP', value: 9 },
  { name: '凤岗网', value: 9 },
  { name: '新快网_新快报', value: 8 },
  { name: '上游新闻', value: 8 },
  { name: '东莞市城市综合管理局', value: 8 },
  { name: '大众网', value: 8 },
  { name: '中国新闻网', value: 7 },
  { name: '第一推', value: 7 },
  { name: '大洋网', value: 7 },
  { name: '新浪网', value: 6 },
  { name: '新浪看点', value: 6 },
  { name: '手机和讯网', value: 6 }
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
