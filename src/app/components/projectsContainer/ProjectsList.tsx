import linkTaskWeatherImg1 from '../../../../public/linktaskweather/desktop.webp';
import linkTaskWeatherImg2 from '../../../../public/linktaskweather/mobile.webp';
import linkTaskWeatherImg3 from '../../../../public/linktaskweather/desktop2.webp';
import initialPhoto from '../../../../public/linktaskweather/initialphoto.webp'

import initialPhotoOpus from '../../../../public/opusproject/initialPhoto.webp';
import googleStatusImgOpus from '../../../../public/opusproject/googleStatusImg.webp';
import opusimg1 from '../../../../public/opusproject/opusimg1.webp';
import opusimg2 from '../../../../public/opusproject/opusimg2.webp';
import opusimg3 from '../../../../public/opusproject/opusimg3.webp';
import opusimg4 from '../../../../public/opusproject/opusimg4.webp';
import opusimg5 from '../../../../public/opusproject/opusimg5.webp';

import initialPhotoQuizz from '../../../../public/quizzgame/initialPoto.webp';
import googleStatusImgQuizzgame from '../../../../public/quizzgame/googleStatusImg.webp';
import quizzgameimg11 from '../../../../public/quizzgame/quizzgameimg1.webp';
import quizzgameimg22 from '../../../../public/quizzgame/quizzgameimg2.webp';
import quizzgameimg33 from '../../../../public/quizzgame/quizzgameimg3.webp';
import quizzgameimg44 from '../../../../public/quizzgame/quizzgameimg4.webp';

import initialPhotoKhoder from '../../../../public/khodercart/initialPhoto.webp';
import googleStatusImgKhoder from '../../../../public/khodercart/googleStatusKhoderImg.webp';
import khoderimg1 from '../../../../public/khodercart/khoderimg1.webp';
import khoderimg2 from '../../../../public/khodercart/khoderimg2.webp';
import khoderimg3 from '../../../../public/khodercart/khoderimg3.webp';

import initialPhotoButton from '../../../../public/buttongenerator/initialPhoto.webp';
import googleStatusImgButton from '../../../../public/buttongenerator/googlestatusbutton.webp';
import buttonimg1 from '../../../../public/buttongenerator/buttonimg1.webp';
import buttonimg2 from '../../../../public/buttongenerator/buttonimg2.webp';
import buttonimg3 from '../../../../public/buttongenerator/buttonimg3.webp';
import buttonimg4 from '../../../../public/buttongenerator/buttonimg4.webp';

const projects = [
  {
    title:'Link Task Weather',
    isClientReal:false,
    photos:[linkTaskWeatherImg1, linkTaskWeatherImg2, linkTaskWeatherImg3],
    initialPhoto:initialPhoto,
    titlePath:'https://link-task-weather.vercel.app/',
    gitHubPath:'https://github.com/FilipeSall/LinkTaskWeather',
    netlifyPath:'https://deft-travesseiro-b6ef8c.netlify.app/',
    text: `Criei um site para simplificar minha vida acadêmica. Meu objetivo é fornecer uma plataforma eficiente para transcrever e organizar todas as minhas anotações de estudo de forma simples e intuitiva. Criei um calendário interativo que construí do zero. Esse calendário inclui todos os feriados sazonais mais importantes do ano. Além disso, implementei um componente de clima que utiliza uma API interativa para fornecer informações atualizadas sobre o clima em sua localização. A melhor parte é que a animação do componente muda de acordo com as condições climáticas em tempo real.`,
    inConstruction:true,
  },
  {
    title:'Site Opus',
    initialPhoto:initialPhotoOpus,
    isClientReal:true,
    text:'Este projeto foi desenvolvido para criar um site responsivo para o renomado professor de música Luiz Graciliano. O professor Graciliano leciona piano e canto há mais de 35 anos e queria uma presença digital para que atendesse às necessidades de seus alunos e futuros alunos. Para desenvolver o site, utilizei a tecnologia ReactJS, que é conhecida por sua eficiência e capacidade de criar interfaces de usuário ricas e interativas. Além disso, separei o site em containers para cada área do currículo do professor, de forma que a informação pudesse ser apresentada de maneira clara e organizada. O site é totalmente responsivo, adaptando-se a qualquer tipo de tela em todos os dispositivos.',
    titlePath:'https://opus-five.vercel.app/',
    gitHubPath:'https://github.com/FilipeSall/Opus',
    netlifyPath:'https://opus-project.netlify.app/',
    inConstruction:false,
    googleStatusImg:googleStatusImgOpus, 
    photos:[opusimg1, opusimg2, opusimg3, opusimg4, opusimg5]
  },
  {
    title:'New Khoder cart menu',
    initialPhoto:initialPhotoKhoder,
    isClientReal: true,
    inConstruction:false,
    googleStatusImg:googleStatusImgKhoder,
    text:'O New Khoder oferece um cardápio digital acessível aos clientes por meio de um QR code, tornando possível a escolha dos produtos e a solicitação de um garçom. Embora essa opção seja conveniente, os produtos são identificados por códigos numéricos, o que pode causar dificuldades para os garçons, que precisam memorizar cada produto e seu respectivo código. Para solucionar esse problema, os garçons costumavam carregar um papel com todos os códigos e nomes dos produtos, mas essa prática era imprática, ocupava espaço nos bolsos e, muitas vezes, era facilmente danificada por líquidos. Para solucionar esse problema, desenvolvi um projeto que permitia a visualização dos nomes dos produtos juntamente com seus respectivos códigos.Desde então, o uso do cardápio digital tem contribuído para agilizar o atendimento aos clientes, aumentando a rotatividade do estabelecimento e, consequentemente, o número de vendas.',
    photos:[khoderimg1, khoderimg2, khoderimg3],
    titlePath:'https://new-khoder-cart-menu.vercel.app/beer600',
    gitHubPath:'https://github.com/FilipeSall/New-Khoder-Cart-Menu',
    netlifyPath:'https://newkhodercart.netlify.app/beer600',
  },
  {
    title:'Quizzgame',
    isClientReal:false,
    initialPhoto:initialPhotoQuizz,
    inConstruction:false,
    googleStatusImg: googleStatusImgQuizzgame,
    text:'Este é um projeto pessoal onde utilizei meus conhecimentos em ReactJS para criar um quizz educacional. O objetivo deste quizz é ajudar estudantes a testar seus conhecimentos em História, Ciências e Artes. O projeto inclui recursos como embaralhamento de perguntas, pontuação global e por categoria, animações, e muito mais. O projeto conta com mais de 200 perguntas, mas somente 30 são respondidas, sendo 10 de Artes, 10 de História e 10 de Ciência. As perguntas são embaralhadas toda vez que o usuário tenta refazer o quizz.',
    titlePath:'https://quizzgame.vercel.app/',
    gitHubPath:'https://github.com/FilipeSall/Quizzgame',
    netlifyPath:'https://tentegabaritar.netlify.app/',
    photos:[quizzgameimg11, quizzgameimg22, quizzgameimg33, quizzgameimg44],
  },
  {
    title:'Button generator',
    isClientReal:false,
    initialPhoto:initialPhotoButton,
    text:'O button-generator é um simples gerador de botão CSS onde todas as mudanças são salvas em um código CSS visível. As mudanças acontencem imediatamente após o usuário altera-las. O botão continua com os dados salvos mesmo que o usuário feche o navegador ou recarregue a página.',
    googleStatusImg: googleStatusImgButton,
    titlePath:'https://button-generator-smoky.vercel.app/',
    gitHubPath:'https://github.com/FilipeSall/Button-generator',
    netlifyPath:'https://button-generator92.netlify.app/',
    photos:[buttonimg1, buttonimg2, buttonimg3, buttonimg4],
  }
]

export default projects;