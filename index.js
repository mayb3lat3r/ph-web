const filterBtn = document.querySelector('#filter-button')
const toolbar = document.querySelector('.options')

filterBtn.addEventListener('click', showToolbar)

let t = 0
function showToolbar() {
    if (t % 2 === 0){
        toolbar.style.display = 'none'
        filterBtn.style.color = '#e8e8e8'
        filterBtn.style.borderBottom = ''
    }else{
        toolbar.style.display = 'block'
        filterBtn.style.color = '#0092fa'
        filterBtn.style.borderBottom = '3px solid dodgerblue'
    }
    t++
}
