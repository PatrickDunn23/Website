const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

/* Menu................. */
$(".searchButton").on("click", function(){
  $(".searchButton").toggleClass("active");
  if ($(".searchButton").hasClass("active")) {
    $(".searchBar").css("height", "100vh");
    $("#searchForm").css("opacity","1");
    $(".searchIcon").removeClass("fa-search").addClass("fa-times");
  }
  else {
    $(".searchBar").css('height', "0vh");
    $("#searchForm").css("opacity","0");
    $(".searchIcon").removeClass("fa-times").addClass("fa-search");
  }
});
