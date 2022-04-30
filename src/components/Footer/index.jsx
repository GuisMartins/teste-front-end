import React from 'react'
import Facebook from '../../assets/imgs/footer/Facebook.png'
import Instagram from '../../assets/imgs/footer/Instagram.png'
import Youtube from '../../assets/imgs/footer/Youtube.png'
import American from '../../assets/imgs/footer/american.png'
import Boleto from '../../assets/imgs/footer/boleto.png'
import Club from '../../assets/imgs/footer/club.png'
import Econverse from '../../assets/imgs/footer/econverse.png'
import Elo from '../../assets/imgs/footer/elo.png'
import Encrypt from '../../assets/imgs/footer/encrypt.png'
import Telefone from '../../assets/imgs/footer/fone.png'
import Master from '../../assets/imgs/footer/master.png'
import Visa from '../../assets/imgs/footer/visa.png'
import Vtex from '../../assets/imgs/footer/vtex.png'

export default function index() {
  return (
    <footer>
      <section className='socialMedia'>
        <h3>
          Nos siga nas nossas redes sociais
        </h3>
        <div className='socialMedia__img'>
          <figure>
            <img src={Facebook} alt="Icone do facebook" />
            <img src={Instagram} alt="Icone do Instagram" />
            <img src={Youtube} alt="Icone do YouTube" />
          </figure>
        </div>
        <div className='socialMedia__text'>
          <h3>
            Sobre O Cãoselheiro
          </h3>
          <p>
            Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!
          </p>
        </div>
      </section>
      <section>
        <section className='menu'>
          <div className="menu__parceiro">
            <h4>Assinatura</h4>
            <h4>Parceiros</h4>
          </div>
          <div className="menu__institucional">
            <h4>Institucional</h4>
            <ul>
              <li>Quem somos</li>
              <li>Política de privacidade</li>
              <li>Política comercial</li>
              <li>Política de devolução</li>
              <li>Regras de frete</li>
            </ul>
          </div>
          <div className="menu__atendimento">
            <h4>Atendimento</h4>
            <ul>
              <li>Fale conosco</li>
              <li><img src={Telefone} alt="Telefone" />(11) 97212-1314</li>
              <li>ocaoselheiro@ocaoselheiro.com.br</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
        </section>
        <section className="methods">
          <div className="methods__payment">
            <h4>Formas de pagamento</h4>
            <figure>
              <img src={Elo} alt="Elo" /><img src={Visa} alt="Visa" /><img src={Master} alt="MasterCard" />
            </figure>
            <figure>
              <img src={Boleto} alt="boleto" /><img src={Club} alt="Club" /><img src={American} alt="American" />
            </figure>
          </div>
          <div className="methods__security">
            <h4>Segurança</h4>
            <figure>
              <img src={Encrypt} alt="Cadeado" />
            </figure>
          </div>
        </section>
        <section className="credits">
          <div className="credits__cnpj">
            <p>O Cãoselheiro Comércio LTDA</p>
            <p>CNPJ: 30.324.633/0001-16</p>
            <p>© Todos os direitos reservados. 2021</p>
          </div>
          <div className="credits__logo">
            <figure>
              <img src={Econverse} alt="Econverse" /><img src={Vtex} alt="Vtex" />
            </figure>
          </div>
        </section>
      </section>
    </footer>
  )
}
