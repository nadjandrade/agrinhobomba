// Lista das plantas e seus emojis
const plants = [
  { name: 'cogumelo', emoji: '🍄' },
  { name: 'tomate', emoji: '🍅' },
  { name: 'beringela', emoji: '🍆' },
  { name: 'milho', emoji: '🌽' },
  { name: 'cenoura', emoji: '🥕' },
  { name: 'batata', emoji: '🥔' },
  { name: 'pimenta', emoji: '🌶️' },
  { name: 'alho', emoji: '🧄' },
  { name: 'cebola', emoji: '🧅' },
  { name: 'abacaxi', emoji: '🍍' }
];

let coins = 0; // Contador de moedinhas

// Função para criar as plantinhas
function createPlant(index) {
  const plant = document.createElement('div');
  plant.classList.add('plant', 'empty'); // Inicialmente vazio
  plant.dataset.name = plants[index].name;
  plant.dataset.planted = 'false'; // Indica se a planta já foi "plantada" ou não

  const emoji = document.createElement('span');
  emoji.textContent = plants[index].emoji;
  emoji.style.display = 'none'; // Inicialmente escondido

  plant.appendChild(emoji);
  
  plant.addEventListener('click', () => togglePlant(plant, emoji));

  return plant;
}

// Função para alternar entre plantar e colher
function togglePlant(plant, emoji) {
  const isPlanted = plant.dataset.planted === 'true';

  if (isPlanted) {
      // Colher a planta: emoji desaparece
      emoji.style.display = 'none';
      coins += 10; // Ganho de moedinhas
      plant.dataset.planted = 'false';
  } else {
      // Plantar a planta: delay de 2 segundos para o emoji aparecer
      setTimeout(() => {
          emoji.style.display = 'inline';
      }, 2000); // 2000ms = 2 segundos
      plant.dataset.planted = 'true';
  }

  // Atualiza a quantidade de moedinhas
  document.getElementById('coins').textContent = coins;
}

// Função para adicionar as plantas na tela
function addPlantsToGame() {
  const gameArea = document.querySelector('.game-area');
  for (let i = 0; i < plants.length; i++) {
      const plant = createPlant(i);
      gameArea.appendChild(plant);
  }
}

// Iniciar o jogo
addPlantsToGame();
