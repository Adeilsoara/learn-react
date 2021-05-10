import React from 'react';

function Home(){
    return (      
    <div className="jumbotron">
        <h1 className="display-3">Bem vindo ao seu sistema</h1>
        <p className="lead">Para acessar as funcionalidades do sistema clique na barra de navegação</p>
        <hr className="my-4"/>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
        </p>
    </div>
    )
}

export default Home;