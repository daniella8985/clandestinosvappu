function mostrarConteudo(tipo) {
    const conteudo = document.getElementById("conteudo");

    conteudo.classList.add("ativo");
    document.body.style.overflow = "hidden";

    let html = `<span class="fechar" onclick="fecharConteudo()">✖</span>`;

    if (tipo === "historia") {
        html += `<h2>Nossa História</h2><p>O ano era 2022, mês 08, dia 21.</p>
       
        <p>Quatro irmãos de estrada se reuniram em um rolê na Estrada de Manutenção da Imigrantes, em São Paulo. 
        Foi lá que essa história começou e onde surgiu o nome CLANDESTINOS VAPPU. 
        Mas, para isso, precisamos voltar um pouco no tempo.</p>
               
        <p>Meu nome é Sérgio, o Serjão para muitos dos meus irmãos de estrada. No meu coração sempre pulsou o amor pelo motociclismo.
 Sempre amei rodar de moto, mesmo sozinho, estava sempre por aí, gastando gasolina e pneu. Amo demais o bom e velho vento na cara.</p>
        <p> Um dia, fui convidado para rodar com um moto grupo específico de uma determinada moto que eu possuía na época. 
         Assim começou minha experiência em grupo. 
         Meus olhos se enchiam quando via um grupo ou moto clube rodando. 
         Eu sempre cumprimentava os irmãos de estrada com o cumprimento biker e sonhava, um dia, fazer parte de tudo isso. </p>
        
         <p>Mas o grupo do qual eu fazia parte era apenas um grupo de amigos que se reunia para rodar por aí. Não vestíamos colete, rodávamos à paisana mesmo. </p>

         <p>Porém, havia um pequeno problema: naquele grupo, eu me sentia meio preso nos rolês.</p>
        
         <p>Um dia, marcamos um rolê para a Estrada de Manutenção. No ponto de encontro, os ADMs decidiram mudar o destino do nada, sem motivo. Como eu estava muito a fim de conhecer a estrada, 
         avisei que manteria meu destino.</p>

         <p>Meus amigos do grupo me chamaram de “clandestino” por seguir outro caminho.
          Quando saí sozinho para esse destino “clandestino”, percebi que não estava sozinho: vieram comigo Rafael Magnavita, Nilson Mergulhão, Erik Gomes, Leandro Galhardo e eu, Sérgio Delfino.</p>          
    `;
    }

    if (tipo === "historia") {
        html += `
         <div class="modelo">
        <img src="foto1.png">
    </div>


        <p> Na Estrada de Manutenção da Imigrantes, em um ponto próximo à cachoeira, nasceu o CLANDESTINOS.
         Naquele momento, éramos apenas “Os Clandestinos”, por causa do apelido que recebemos. Sentíamos falta de algo: liberdade para rodar de forma mais radical e livre. </p>

         <p> Começamos a rodar frequentemente. 
         Toda semana estávamos no trecho. Até que surgiu, na brincadeira, a expressão “VAPPU”.
          Era zoeira mesmo: marcávamos um rolê e, no final, alguém soltava “é VAPPU, bora então!”.

         Assim nasceu o nome CLANDESTINOS VAPPU.</p>

         <p> Não tínhamos nenhuma pretensão de nos tornar um moto grupo, muito menos um moto clube.
          Mas nunca mais paramos de rodar. Criamos nosso Instagram @clandestinos_vappu, os rolês começaram a crescer e, cada vez mais, novas motos apareciam. 
         O grupo foi ganhando forma e força. </p>

         <p> Começamos a rodar com outros moto grupos e, quando percebi, já estávamos em posição de parceria com alguns deles.
          Quando me dei conta, já era tarde: nós já éramos um moto grupo, só faltava sacramentar nossa existência. </p>

          <p>Veio então a necessidade de vestir o colete, para melhor organização e representação.
           Nosso brasão foi desenhado à mão por mim, durante muitos dias, até chegar à forma que tem hoje.</p>
        
         `;
    }

    if (tipo === "historia") {
        html += `
         <div class="modelo">
        <img src="parceiro2.png">
    </div>
    <h2>Quem somos?</h2>

<p>Somos um grupo de irmãos dispostos a sempre nos apoiar e viver nossa paixão pelas duas rodas. Também realizamos ações sociais, pois entendemos que, sem ajudar o próximo, não faz sentido curtir o vento na cara.

O social é extremamente importante para nós.</p>

<p> Somos uma família unida e demos um significado à palavra VAPPU: </p>

         `;
    }
    if (tipo === "historia") {
        html += `
         <div class="modelo">
        <img src="foto2.png">
    </div>
Com o tempo, passamos por uma repaginada. Hoje somos um grupo menor, e nossa intenção é continuar assim: poucos, porém muito unidos.

Levamos a sério uma palavra que anda meio esquecida no meio do motociclismo: IRMANDADE.
E, através dela, prezamos também pelo respeito.

Todos, sem exceção, são bem-vindos.
Aqui, o respeito é indiscutível: ou você tem, ou não faz parte.

Nossa base é forte. Nada tem o poder de nos manipular. Somos o que somos e nunca vamos mudar.

<h2>Pilares</h2>

         `;
    }
    if (tipo === "historia") {
        html += `
         <div class="modelo">
        <img src="foto3.png">
    </div>

Tudo isso nos move e serve como nosso combustível diário.</p>
    `;
    }

    if (tipo === "integrantes") {
        html += `
        <h2>Integrantes</h2>
        <div class="integrantes-grid">
        <div class="integrante">
        <img src="sergio01.jpeg">
        <h4>Serjão</h4>
        <p>Fundador & Presidente</p>
    </div>

    <div class="integrante">
        <img src="Erik.jpeg">
        <h4>Erik</h4>
        <p>Fundador & Piloto</p>
    </div>

    <div class="integrante">
        <img src="esposasergio.jpeg">
        <h4>esposasergio</h4>
        <p>Membro - Família</p>
    </div>

    <div class="integrante">
        <img src="esposaErik.jpeg">
        <h4>esposaerik</h4>
        <p>Membro - Família</p>
    </div>

        </div>`;
    }

    if (tipo === "parceiro") {
        html += `<h2>Parceiros</h2>
         <div class="integrante">
        <img src="losforasteros.png">
        <h4>Los Forasteros MG</h4>
        <p>Moto Grupo</p>
    </div>
        
        <div class="integrante">
        <img src="maos.jpeg">
        <h4>Orelhas Secas • MAOS</h4>
        <p>Moto Amigos</p>
        </div>
        

    <div class="integrante">
        <img src="parceiro1.png">
        <h4>Renegados na BR</h4>
        <p>Moto Grupo</p>
    </div>

    <div class="integrante">
        <img src="tadeu.png">
        <h4>Tadeu Bichon Frisé</h4>
        <p>O Bichon Frisé Motociclista</p>
    </div>`;
    }
    if (tipo === "musica") {
        html += `
        <h2>Nossa Música</h2>
        <audio controls style="width:100%">
            <source src="music.mp3">
        </audio>`;
    }

    if (tipo === "contato") {
        html += `<h2>Nossas Missões • Ações sociais</h2>
        <h2>Morro Da Chiquinha</h2>
        <p>Boas OBRAS dão sentido à nossa caminhada...</p>
               
        <p>Fazer pelo próximo é aquecer a alma durante o rolê, 
        rodas nas estradas sentindo o vento no  rosto com a sensação de
         dever cumprido não tem preço no mundo que pague.</p>
                  
    `;
    }
    if (tipo === "contato") {
        html += `
         <div class="modelo">
        <img src="morro1.jpeg">
    </div>
 
    <div class="modelo">
        <img src="morro2.jpeg">
    </div>

      <div class="modelo">
        <img src="acao2.png">
    </div>

    <div class="modelo">
        <img src="acao.png">
    </div>


        <p> Ações sociais fazem total sentido a nossas vidas...
         é parte de nós fazer o bem, sem olhar a quem.  </p>
        
         `;
    }

    if (tipo === "nossosroles") {
        html += `<h2>Nossos Rolês</h2>
        <div class="integrante">
            <a href="https://photos.app.goo.gl/yCLP6YDXYSm8bRMa8" target="_blank">
            <img src="nossosroles.jpg">
        </a> 
            <h4>Biblioteca de Fotos</h4>
        <p>Clique ou escaneie o QR Code e confira!</p>
        </div>`;
    }

    if (tipo === "instagram") {
        html += `<h2>Redes Sociais</h2>
    
        <div class="integrante">
            <a href="https://www.instagram.com/clandestinos_vappu?igsi=MWR6OW1yNnBmeDFqcg==" target="_blank">
                <img src="instagram.jpeg">
            </a>
            <h4>@clandestinos_vappu</h4>
            <p>Clique ou escaneie o QR Code e confira!</p>
    
        </div>`;
    }
    conteudo.innerHTML = html;
}

function fecharConteudo() {
    document.getElementById("conteudo").classList.remove("ativo");
    document.body.style.overflow = "auto";
}
