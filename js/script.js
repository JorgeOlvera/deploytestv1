console.log('Aqui vamos a llamar a nuestro mini web server')


$("#searchBtnjQuery").click(function() {
  let searchTerm = $("#searchTerm").val()

  $.ajax({
    url: 'https://miniwebserver.herokuapp.com/omdb?search=' + searchTerm,
    // url: 'http://localhost:3000/omdb?search=' + searchTerm,
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        $('#info').append(`<h2>${data.title}</h2>`)

        console.log(data)
    }, 
    error: function(error) {
      console.log(error)
    }
  })
})



let searchBtn = document.getElementById("searchBtnFetch")

searchBtn.addEventListener("click", function() {
  let searchTerm = document.getElementById("searchTerm").value

  fetch('https://miniwebserver.herokuapp.com/omdb?search=' + searchTerm).then(function(response) {
  // fetch('http://localhost:3000/omdb?search=' + searchTerm).then(function(response) {
    response.json().then(function (data) {
      console.log(data)
      console.log(data.title)
      let info = document.getElementById('info')
      info.innerText = data.title
    })
  })
})
