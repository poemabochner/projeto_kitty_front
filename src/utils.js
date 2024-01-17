export function iconExpand(element, expansionFactor = 1.2) {
  element.addEventListener('mouseover', () => {
    element.style.transform = `scale(${expansionFactor})`
  })

  element.addEventListener('mouseout', () => {
    element.style.transform = 'scale(1)'
  })
}