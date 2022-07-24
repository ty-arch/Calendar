import {
  createDateNode,
  createWeekDaysNode
} from './creator'

export function render(container) {

  const oTHead = document.createElement('thead')
  const oTBody = document.createElement('tbody')
  const weekNode = createWeekDaysNode()

  oTBody.className = 'my-calendar-body'

  return function(year, month) {
    const dateTrs = createDateNode(year, month)
    oTHead.appendChild(weekNode)

    dateTrs.forEach(tr => {
      oTBody.appendChild(tr)
    })

    container.appendChild(oTHead)
    container.appendChild(oTBody)

    const obj = createDateNode(year, month)
    console.log(obj);
    return container
  }
}

export function update(year, month){
  const oTBody = document.querySelector('.my-calendar-body')
  const dateTrs = createDateNode(year, month)
  oTBody.innerHTML = ''
  
  dateTrs.forEach(tr => {
    oTBody.appendChild(tr)
  })
}