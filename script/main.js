const pageScroll = () => {
    
    const header = document.querySelector('#mainHeader')
    document.addEventListener('scroll', (e) => {
        var scroll = window.pageYOffset
        var mediaSize = window.innerWidth
        console.log(mediaSize)
        if (scroll > 300 && mediaSize >= 768) {
            header.classList.add('sticky-header')
        } else {
            header.classList.remove('sticky-header')
        }
        
    })

}

pageScroll()