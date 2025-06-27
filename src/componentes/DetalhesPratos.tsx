import React from 'react';

type DetalhesPratosProps = {
    nome: string;
    cozinha: string;
    descricao: string;
    imagem: string;
    preco: number;
};

const DetalhesPratos: React.FC<DetalhesPratosProps> = ({nome, cozinha, descricao, imagem, preco}) => {
    return (
        <div>
            <img src={imagem} alt={nome} className="imagem" />
            <h1 className="h1">{nome}</h1>
            <p className="p1">{cozinha}</p>
            <p className="p2">{descricao}</p>
            <p className="p3">R${preco}</p>

        </div>
    );
};

export default DetalhesPratos;