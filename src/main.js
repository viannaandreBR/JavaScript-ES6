// App Demo Echama Script ES6, ES7, ES8
//
//
//document.write('App consulta API GitHub');

import api from './api';

class App {
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();


    };

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);

    };

    setLoading(loading = true) {
        if (loading === true) {
            console.log('carregando...');
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id','loading');

            this.formEl.appendChild(loadingEl);
        }
        else{
            console.log('.......carregado');
            //document.getElementById('id','loading').remove();
            document.getElementById("loading").remove();
  

        };
    };

    
    async addRepository(event) {
        event.preventDefault();


        const repoInput = this.inputEl.value;


        if (repoInput.length === 0 ) 
            return; 

        this.setLoading();

        try {
        const response = await api.get(`/repos/${repoInput}`);


        const { name, description, html_url, owner:{avatar_url}} = response.data;



        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });
        
        this.inputEl.value = '';

        this.render();

    } catch(err){
        alert('O repositorio não existe');

    }

    this.setLoading(false);

    };

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href',repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });


    }
}

//const MeuApp = new App();

new App();