document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const playerRank = document.querySelector('input').value
    try{
        const response = await fetch(`https://nba-alltime-scorers-api.herokuapp.com/api/${playerRank}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#playerName').innerText = data.name
        document.querySelector('#playerTeam').innerText = data.team
        document.querySelector('#playerYears').innerText = data.years
        document.querySelector('#playerPoints').innerText = data.points
        document.querySelector('#playerGames').innerText = data.gamesPlayed
        document.querySelector('#playerStatus').innerText = data.status
        document.querySelector('body').style.backgroundColor = data.bg
        document.querySelector('body').style.color = data.color
        document.querySelector('#playerPic').src = data.picURL
    }catch(error){
        console.log(error)
    }
}