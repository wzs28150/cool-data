<template>
  <div id="x-spreadsheet-demo" ref="xSpreadsheet" />
</template>
<script>
export default{
  name: 'SpreadsheetForm'
}
</script>
<script setup>
import Spreadsheet from './index';
import zhCN from './locale/zh-cn';
import { onMounted, onUnmounted, ref } from 'vue';
Spreadsheet.locale('zh-cn', zhCN);

const xSpreadsheet = ref('')
let xs = ref(null)
const props = defineProps({
  dataset: {
    type: Object,
    default: () => {
      return {}
    }
  }
})


const init = () => {
  xs.value = new Spreadsheet('#x-spreadsheet-demo', {
    showToolbar: false, showGrid: true, showBottomBar: false,
    view: {
      height: () => xSpreadsheet.value.clientHeight,
      width: () => xSpreadsheet.value.clientWidth
    },
    row: {
      height: 31,
      len: 20
    },
    col: {
      len: 28,
      width: 77,
      indexWidth: 60,
      minWidth: 60
    },
    style: {
      bgcolor: "#061237",
      align: "center",
      valign: "middle",
      textwrap: !1,
      strike: !1,
      underline: !1,
      color: "#DADADA",
      font: {
        name: "PingFangSC-Regular, PingFang SC",
        size: 12,
        bold: !1,
        italic: !1
      }
    }
  })

  if(props.dataset){
     xs.value.loadData(dataset2Rows())
  }
}

const dataset2Rows = () =>{
  let dataObj = {
    name: 'sheet2',
    rows: {
      0: {
        cells: {}
      }
    }
  }
  dataObj.rows[0].cells = props.dataset.dimensions.map((item, index) => {
    if (index == 0) {
      item = ''
    }
    return { text: item }
  })
  props.dataset.source.forEach((item, index) => {
    dataObj.rows[index + 1] = {
      cells: {}
    }
    Object.keys(item).forEach((it, ind) => {
      dataObj.rows[index + 1].cells[ind] = {
        text: item[it]+''
      }
    })

  });
  return dataObj
}

const rows2Dataset = (rows) => {
  let dataset = {
    dimensions: [],
    source: []
  }
  Object.keys(rows).forEach((item,index)=>{
    // console.log(item);
    if(index == 0){
      dataset.dimensions = rows[item].cells.map(item=>{
        if(item.text){
          return item.text
        }else{
          return 'category'
        }
      })
    } else if(item != 'len'){
      dataset.source[index - 1] = {}
      Object.keys(rows[item].cells).forEach((it, ind)=>{
        // console.log(it, ind);
        // console.log(rows[item].cells[it].text);
        Object.assign(dataset.source[index - 1], {
          [dataset.dimensions[ind]]: rows[item].cells[it].text
        })
      })
    }
  })
  return dataset
}

const getDataset = ()=>{
  const d = xs.value.getData()
  console.log(d);
  return rows2Dataset(d[0].rows)
  // return ''
}

defineExpose({getDataset})
onMounted(() => {
  init()
})

onUnmounted(()=>{
  xs.value = null
  // document.getElementById('x-spreadsheet-demo').innerHTML="";
})
</script>

<style lang="less" scoped>
#x-spreadsheet-demo {
  width: 100%;
  height: 100%;
  min-height: 300px;
  overflow: hidden;

  &:deep(.x-spreadsheet) {

    // background: #061237;
    .x-spreadsheet-scrollbar {
      &::-webkit-scrollbar-thumb {
        background: #0072ce;
      }
    }
  }
}
</style>