let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contest) => {
    console.log(contest)
    ihtml = ""
    for (item in contest) {
        console.log(contest[item])
        ihtml += `
        <div class="card" style="width:21rem;">
        <img src='https://source.unsplash.com/random/?technology,fruits,computer' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contest[item].name}</h5>
          <p class="card-text"><a href="">Visit here </a></p>
          <p>Starts at: ${contest[item].start_time}
          <p>Starts at: ${contest[item].end_time}
          <br>
          <a href="${contest[item].url}" class="btn btn-primary">Contest page</a>
        </div>
        </div>`

    }
    cardcontainer.innerHTML = ihtml
})

