const bglist = []
const bgFile = import.meta.globEager('./*.jpg')
Object.keys(bgFile).forEach((item)=>{
  const bgItem = bgFile[item].default
  bglist.push(bgItem)
})

export default bglist;