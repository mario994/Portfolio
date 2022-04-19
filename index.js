const projects = document.querySelector('.portfolio-projects');

//Getting and parsing data
const getData = async () => {
    const resp = await fetch('data/projectsData.json');
    const data = await resp.json();
    return data;
};

//Returning data from json
getData()
    .then(data => {
        crateHtmlTemplate(data);
    })
    .catch(err => console.log(err));

//Create the template 
const crateHtmlTemplate = info => {

    //Frist Iterate every element of data
    info.forEach( element => {
        //then create the template
        projects.innerHTML += `
         <div class="project">

            <div class="img-project">
                <a href="${element.linkLive}" target="_blank" rel="noopener noreferrer"><img src="${element.img}" alt="project image"></a>
            </div>

            <div class="info-links">
                <a href="${element.linkRepo}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github github"></i></a>
            </div>

            <div class="info-project">
                <h3>${element.title}</h3>
                <p class="copy">${element.description}</p>
            </div>

        </div>
        `
    })
};
