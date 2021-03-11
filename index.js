const filterButton = document.querySelector('#filter-button')
const imageButton = document.querySelector('#image-button')
const toolbar = document.querySelector('.options')
const url = document.querySelector('.image-url')

const blurSlider = document.querySelector('#blur')
const brightnessSlider = document.querySelector('#brightness')
const contrastSlider = document.querySelector('#contrast')
const grayscaleSlider = document.querySelector('#grayscale')
const rotateSlider = document.querySelector('#hue-rotate')
const invertSlider = document.querySelector('#invert')
const opacitySlider = document.querySelector('#opacity')
const saturateSlider = document.querySelector('#saturate')
const sepiaSlider = document.querySelector('#sepia')
const img = document.querySelector('#image')
const resetButton = document.querySelector('#reset-button')


let fCounter = 1
let uCounter = 1
let sizeImage = 1

const defaultFilterValues = {
    blur: 0,
    brightness: 1,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0
}

filterButton.addEventListener('click', function () {
    if (fCounter % 2 === 0) {
        toolbar.style.display = 'none'
        filterButton.style.color = '#e8e8e8'
        filterButton.style.borderBottom = ''
    } else {
        toolbar.style.display = 'block'
        filterButton.style.color = '#0092fa'
        filterButton.style.borderBottom = '3px solid dodgerblue'
    }
    fCounter++
})

imageButton.addEventListener('click', function () {
    if (uCounter % 2 === 0) {
        url.style.display = 'none'
        imageButton.style.color = '#e8e8e8'
        imageButton.style.borderBottom = ''
    } else {
        url.style.display = 'block'
        imageButton.style.color = '#0092fa'
        imageButton.style.borderBottom = '3px solid dodgerblue'
    }
    uCounter++
})

img.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        if (sizeImage < 5) {
            img.style.transform = `scale(${sizeImage})`
            sizeImage += 0.08
        }
    } else if (event.deltaY > 0) {
        if (sizeImage > 0.15) {
            img.style.transform = `scale(${sizeImage})`
            sizeImage -= 0.08
        }
    }

})

blurSlider.addEventListener('input', updateFilterValue)
brightnessSlider.addEventListener('input', updateFilterValue)
contrastSlider.addEventListener('input', updateFilterValue)
grayscaleSlider.addEventListener('input', updateFilterValue)
rotateSlider.addEventListener('input', updateFilterValue)
invertSlider.addEventListener('input', updateFilterValue)
opacitySlider.addEventListener('input', updateFilterValue)
saturateSlider.addEventListener('input', updateFilterValue)
sepiaSlider.addEventListener('input', updateFilterValue)

function updateFilterValue() {
    img.style.filter = `
    blur(${blurSlider.value}px)
    brightness(${brightnessSlider.value})
    contrast(${contrastSlider.value}%)
    grayscale(${grayscaleSlider.value}%)
    hue-rotate(${rotateSlider.value}deg)
    invert(${invertSlider.value}%)
    opacity(${opacitySlider.value}%)
    saturate(${saturateSlider.value}%)
    sepia(${sepiaSlider.value}%)
    `
}

resetButton.addEventListener('click', function () {

    blurSlider.value = defaultFilterValues.blur
    brightnessSlider.value = defaultFilterValues.brightness
    contrastSlider.value = defaultFilterValues.contrast
    grayscaleSlider.value = defaultFilterValues.grayscale
    rotateSlider.value.value = defaultFilterValues.hueRotate
    invertSlider.value = defaultFilterValues.invert
    opacitySlider.value = defaultFilterValues.opacity
    saturateSlider.value = defaultFilterValues.saturate
    sepiaSlider.value = defaultFilterValues.sepia

    img.style.filter = `
    blur(${defaultFilterValues.blur}px)
    brightness(${defaultFilterValues.brightness})
    contrast(${defaultFilterValues.contrast}%)
    grayscale(${defaultFilterValues.grayscale}%)
    hue-rotate(${defaultFilterValues.hueRotate}deg)
    invert(${defaultFilterValues.invert}%)
    opacity(${defaultFilterValues.opacity}%)
    saturate(${defaultFilterValues.saturate}%)
    sepia(${defaultFilterValues.sepia}%)
    `
})

url.addEventListener('change', function () {
    img.src = url.value
    this.style.display = 'none'
    imageButton.style.color = '#e8e8e8'
    imageButton.style.borderBottom = ''
    uCounter--
})