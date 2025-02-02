document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form')
    const searchBar = document.getElementById('search-button')
    const img = document.querySelector('img')
    const imgArr = []
    let arrIndex = 0

    form.addEventListener('submit', e=>{
        e.preventDefault()
        const redditUrl = `https://www.reddit.com/search.json?q=${searchBar.value}+nsfw:no`
        fetch(redditUrl)
            .then(redditData =>{
                return redditData.json()
            })
            .then(redditJson=>{
                redditJson.data.children.forEach(result=>{
                    if(result.data.thumbnail != "self"){
                    imgArr.push(result.data.thumbnail)
                    }
                })
                setInterval(()=>{
                    arrIndex += 1
                    if(arrIndex <= imgArr.length -1){
                     img.src = `${imgArr[arrIndex]}`
                    } else {arrIndex = 0}
                }, 2000)

            })
    })
})