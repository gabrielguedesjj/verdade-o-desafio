//import {base_perguntas_infantil} from "/base_perguntas/base_perguntas_infantil.js";





// window.addEventListener('load', e => {
//     const nav = document.querySelector('.nave');

//     document.addEventListener('scroll', e => {
//         if ( window.scrollY >= 50 ) {
//             nav.classList.toggle('scrolled')
//         } else {
//             nav.classList.remove('scrolled')
//         }
//     })
// })

  
  let base_desafios_adulto = [
    'Tomar um danoninho usando apenas a língua;',
    'Fazer uma lap dance (dança no colo) para alguém da roda',
    'Dar uma aula de educação sexual de uma maneira muito sexy',
    'Colocar um preservativo em uma banana ou pepino',
    'Colocar um preservativo em uma fruta com a boca',
    'Massagear alguém da roda',
    'Faça uma massagem nas costas de alguém sem usar as mãos',
    'Tirar o sutiã sem tirar a camiseta',
    'Simule uma dança em pole dance',
    'Desabotoar o sutiã de alguém usando só uma mão',
    'Fingir um orgasmo',
    'Tirar a camiseta de alguém usando a boca',
    'Sussurrar uma frase sensual no ouvido de alguém',
    'Beijar a orelha de alguém da roda',
    'Fazer um discurso como se estivesse prestes à chegar a um orgasmo',
    'Poste uma foto fazendo cara de sensual no seu stories do Instagram',
    'Recitar um poema erótico',
    'Uma rodada fazendo cafuné em alguém da roda',
    'Explique onde está o clítoris',
    'Faça uma selfie sensual',
    'Simule o seu olhar mais sexy para alguém da roda:',
    'Tomar um shot no umbigo de alguém (body shot)',
    'Sussurre no ouvido de alguém as coisas que você costuma dizer na hora do sexo',
    'Morder (de leve) o pescoço de alguém da roda',
    'Com os olhos fechados, encoste a mão em alguém da roda e adivinhe qual é a parte do corpo',
    'Passar a próxima rodada no colo de alguém',
    'Chupar uma fruta como se fosse um órgão sexual',
    'Simule sexo oral com uma fruta',
    'Masturbar uma fruta com os dedos como se você estivesse falando com outra pessoa',
    'Com o consentimento, beije alguém da roda',
    'Simular um strip tease tirando uma peça de roupa',
    'Faça uma simulação no ar da sua posição sexual favorita',
    'Coloque um cubo de gelo na boca e dê um beijo no pescoço de alguém da roda',
    'Mande uma mensagem de voz sexy para seu crush',
    'Lamber alguma parte do corpo de outra pessoa',
    'Passe creme em alguém',
    'Feche os olhos, alguém da roda te dá um beijo, você precisa adivinhar quem é',
    'Mande uma mensagem para o crush perguntando se ele quer jogar verdade ou desafio virtual',
    'Envie um sticker sexy para seu crush',
    'Publique: "hoje eu tô soltinh@" no seu Facebook'
  ];
  let base_verdades_adulto = [
    'Já fez sexo casual?', 
    'Já transou com alguém do Tinder ou app de paquera?',
    'Tem algum trauma sexual, qual?',
    'Já fez sexo no avião?',
    'Peito ou bunda?',
    'Já foi pego no flagra transando ou se masturbando?',
    'Você gosta de receber sexo oral?',
    'Já ficou com vontade de vomitar durante o sexo oral?',
    'Já fez sexo anal?',
    'Já teve orgasmos múltiplos?',
    'Já ficou com vontade de ir ao banheiro durante o sexo anal?',
    'Já ficou com alguém comprometido?',
    'Já fez sexo com mais de uma pessoa ao mesmo tempo?',
    'Já usou alguma coisa para lubrificar que não era lubrificante?',
    'Já deu ou recebeu um beijo grego? Tem vontade de experimentar?',
    'Qual brinquedinho erótico você gosta mais ou tem mais vontade de experimentar?',
    'Conte uma fantasia sexual sua.',
    'Dar ou receber sexo oral?',
    'Qual a sua posição sexual preferida?',
    'Qual a posiçao sexual que você menos gosta?',
    'Depilad@ ou com pelos?',
    'Qual a sua posição preferida para se masturbar?',
    'Já broxou?',
    'Já fingiu orgasmo?',
    'Qual a coisa mais estranha que já te pediram na hora H?',
    'Já participou de um trio ou sexo com mais pessoas?',
    'Trocaria parceiros?',
    'Se você pudesse repetir uma transa na sua vida, qual seria?',
    'O que é que você tem mais medo que te aconteça durante o sexo?',
    'Prefere sexo devagarzinho ou rápido?',
    'O que para você é proibido no sexo?',
    'Quanto tempo você costuma demorar para gozar?',
    'O que você gosta de escutar na hora do sexo?',
    'O que é sexo selvagem para você?',
    'Você toparia usar uma cueca comestível?',
    'O que é fundamental nas preliminares?',
    'Qual tipo de camisinha você gosta de usar?',
    'Prefere ficar por cima ou por baixo?',
    'Já transou na frente do espelho?',
    'O que você pensa sobre ser tocado na parte do trás?',
    'Já transou com alguém que acabou de conhecer?',
    'Qual o seu segredo para deixar alguém louco de tesão?',
    'Como foi a primeira vez que alguém te chupou?',
    'Qual o sexo mais louco que você já teve?',
    'Qual experiência sexual você prefere esquecer?',
    'No que você pensa quando está se masturbando?',
    'Você prefere dominar ou ser dominad@?',
    'Você já teve orgasmo enquanto dormia?',
    'Já usou Viagra?',
    'Você geme alto ou baixinho?',
  ];
  
  let base = [];
let min = 0;
let max = 0;
let nivel = "";
let arr_excluidos = [];
let count_verdade = 0;
let count_desafio = 0;

const desafio = document.getElementById('desafio');
const verdade = document.getElementById('verdade');

verdade.onclick = () => {
  nivel = verdade.innerText;
  arr_excluidos = [];
  base = [...base_verdades_adulto];
};

desafio.onclick = () => {
  nivel = desafio.innerText;
  arr_excluidos = [];
  base = [...base_desafios_adulto];
};

const button = document.getElementById('random');
const texto_base = document.getElementById('texto_base');

button.addEventListener('click', () => {
  if (nivel !== "") {
    set_category();
    get_text_array(min, max);
    add_text_array(frase_do_array);
    remove_frase_do_array();
    back_text_array();
    write_in_HTML();
  } else {
    texto_base.innerHTML = `<h2>Escolha uma categoria</h2>`;
  }

  console.log(`C.verdade: ${count_verdade}, C.desafio: ${count_desafio}\nNível: ${nivel}, \nArr_excluidos: ${arr_excluidos.length}, \nBase: ${base.length}\n\n`);
});

function set_category() {
  if (nivel === desafio.innerText) {
    max = base.length;
    min = 0;
    count_desafio++;
  } else if (nivel === verdade.innerText) {
    max = base.length;
    min = 0;
    count_verdade++;
  }
}

function get_text_array(min, max) {
  const min_max = get_random_int(min, max);
  frase_do_array = base[min_max];
  return frase_do_array;
}

function add_text_array(frase_do_array) {
  arr_excluidos.push(frase_do_array);
}

function remove_frase_do_array() {
  const index = base.indexOf(frase_do_array);
  if (index !== -1) {
    base.splice(index, 1);
  }
}

function back_text_array() {
  if (base.length === 0) {
    base = arr_excluidos;
    arr_excluidos = [];
  }
}

function write_in_HTML() {
  button.innerText = 'Clique novamente';
  document.getElementById('texto_base').classList.add("texto_base");
  const div_texto_base = document.getElementById('texto_base');
  div_texto_base.classList.add("texto_base");
  texto_base.innerHTML = `<h1>${frase_do_array}</h1>`;
}

function get_random_int(min, max) {
  const random = Math.floor(Math.random() * (max - min) + min);
  console.log('Random: ', random);
  return random;
}
  
  
  
  /*
  time = setInterval( ()=> { 
    console.log(nivel);
  
  }, 2000)
  
  function end_time(){
    setTimeout(function(){
      clearInterval(time);
       console.log('STOPED');
    }, 1000 * 10)
  }
  end_time();
  */