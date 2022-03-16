import Background from './index.vue'
import Background1 from './bg/1.jpg'
import Background2 from './bg/2.jpg'
import Background3 from './bg/3.jpg'
import Background4 from './bg/4.jpg'
import Background5 from './bg/5.jpg'
import Background6 from './bg/6.jpg'
import Background7 from './bg/7.jpg'
import Background8 from './bg/8.jpg'
import Background9 from './bg/9.jpg'
import Background10 from './bg/10.jpg'
import Background11 from './bg/11.jpg'
import Background12 from './bg/12.jpg'
import Background13 from './bg/13.jpg'
import Background14 from './bg/14.jpg'
import Background15 from './bg/15.jpg'
import Background16 from './bg/16.jpg'
import Background17 from './bg/17.jpg'
import Background18 from './bg/18.jpg'
import Background19 from './bg/19.jpg'
import Background20 from './bg/20.jpg'
import Background21 from './bg/21.jpg'
import Background22 from './bg/22.jpg'
import Background23 from './bg/23.jpg'
import Background24 from './bg/24.jpg'
// eslint-disable-next-line func-names
export const list= [
  Background1,
  Background2,
  Background3,
  Background4,
  Background5,
  Background6,
  Background7,
  Background8,
  Background9,
  Background10,
  Background11,
  Background12,
  Background13,
  Background14,
  Background15,
  Background16,
  Background17,
  Background18,
  Background19,
  Background20,
  Background21,
  Background22,
  Background23,
  Background24
]

Background.install = function(Vue) {
  Vue.component(Background.name, Background)
}

export default Background