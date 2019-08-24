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

    async addRepository(event) {
        event.preventDefault();


        const repoInput = this.inputEl.value;

        console.log(repoInput);

        if (repoInput.length === 0 ) 
            return; 

        
        const response = await api.get(`/repos/${repoInput}`);

        
        console.log(response);

        this.repositories.push({
            name: 'rocketseat.com.br',
            description:'Tire a sua idéia do papel e dê vida à sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat.com.brrocketseat.com.br',
        });

        this.render();
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