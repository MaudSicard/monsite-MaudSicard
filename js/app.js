const app = 
{

  init: function ()
  {
    let button = document.querySelector('#button').addEventListener('click', app.handleProjects);
  },

  handleProjects: function(evt)
  {
    for (let currentProject of data)
    {
      app.createProject(currentProject[0], currentProject[1], currentProject[2], currentProject[3], currentProject[4]);
    }
    
  },

  createProject(img, title, content, url, git)
  {
    let currentTemplate = document.querySelector('template').content.cloneNode(true);
   
    let image = currentTemplate.querySelector('.image img');
    image.setAttribute('src', img);

    let titre = currentTemplate.querySelector('h3');
    titre.textContent = title;

    let contenu = currentTemplate.querySelector('p');
    contenu.textContent = content;

    let site = currentTemplate.querySelector('.url');
    site.setAttribute('href', url);
    
    let github = currentTemplate.querySelector('.git');
    github.setAttribute('href', git);

    console.log(git);
    let container = document.querySelector('.container_projects');
    container.appendChild(currentTemplate);
  }

}

document.addEventListener('DOMContentLoaded', app.init);