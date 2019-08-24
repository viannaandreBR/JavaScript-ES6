// App Demo Echama Script ES6, ES7, ES8
//
//

//document.write('App consulta API GitHub');

console.log('App consulta API GitHub');

class App {
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');


        this.registerHandlers();


    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);

    }

    addRepository() {
        event.preventDefault();

        this.repositories.push({
            name: 'rocketseat.com.br',
            despription: 'Tire a sua idéia do papel e dê vida à sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat.com.brrocketseat.com.br'
        });

        console.log(this.repositories);
        
    }
}

//const MeuApp = new App();

new App();