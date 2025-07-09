import React from "react";
import Global from "../../assets/global-logo.svg";
import ImagemUsuario from "../../assets/img-user.png";
import Icontransf from "../../assets/transferir.svg";
import Icondeposito from "../../assets/deposito.svg";
import Iconcobrar from "../../assets/cobrar.svg";
import Iconpagar from "../../assets/pagar.svg";
import Iconextrato from "../../assets/extrato.svg";

export function Menu() {
  const menu = [
    { nome: "Início" },
    {
      nome: "Financeiro",
      subitens: [
        { nome: "Transferir", icone: Icontransf },
        { nome: "Depositar", icone: Icondeposito },
        { nome: "Cobrar", icone: Iconcobrar },
        { nome: "Pagar", icone: Iconpagar },
        { nome: "Extrato", icone: Iconextrato },
      ],
    },
    { nome: "Gestão" },
    { nome: "Configuração" },
    { nome: "Ajuda" },
  ];

  return (
    <div className="menu">
      <div>
        <img src={Global} alt="" />
      </div>

      <div>
        <img src={ImagemUsuario} alt="" />
        <h3>Pizza Hut</h3>
        <p>Seu Perfil </p>
      </div>

      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            {item.nome}
            {item.subitens && (
              <ul>
                {item.subitens.map((subitem, subIndex) => (
                  <li key={subIndex}>
                    <img src={subitem.icone} alt="" />
                    {subitem.nome}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
