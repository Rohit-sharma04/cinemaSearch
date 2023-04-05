// https://api.tvmaze.com/search/shows?q=girls

const api = async (query) => {
    const shows = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
    //   console.log(shows.data[0].show.name);
    //   console.log(shows.data.length);

    return shows.data;
};

const div = document.getElementById("div");
const showData = (shows) => {

    if(shows.length==0){
        const newImg = document.createElement("h1");
        newImg.textContent ="sorry no movie" 
        div.append(newImg);  
    }

    try {
      
        for (let i = 0; i < shows.length; i++) {
            const newImg = document.createElement("img");
            newImg.src = shows[i].show.image.medium;
            const newdiv=document.createElement("div");
            const h4=document.createElement("h4");
            newdiv.classList.add("design");
            h4.innerHTML=shows[i].show.name;
          
                //   console.log(shows.data[i].show.name);
            newdiv.append(newImg);
            newdiv.append(h4)
            div.append(newdiv)
            // div.append(newImg)
        }

    }
    catch (e) {

        console.log("Error occoured", e);
    }

}

button = document.querySelector(".button");
input = document.querySelector(".input")

const getMovies = async () => {
    div.innerHTML = "";
    const query = input.value;
    const shows = await api(query);
    showData(shows);

}


button.addEventListener("click",()=>{
    getMovies();
} )

document.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        // console.log(event.key)
    
        getMovies();
    }
  
});



