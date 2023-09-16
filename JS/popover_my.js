/*Not working*/
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const popover = new bootstrap.Popover('[data-bs-toggle="popover"]', {
    container: 'body',
    trigger: 'focus'
  })


