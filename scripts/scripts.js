//Selecionando o modal overlay
const modalOverlay = document.querySelector(".modal-overlay");
//Selecionando o modal overlay
const modal = document.querySelector('.modal')
//selecionando todos os cards 
const cards = document.querySelectorAll('.card');
//Percorrendo os cards
for (const card of cards) {
  //Escutando o evento de click no card
  card.addEventListener('click', () => {
  //Pegando o atributo id do card 
  const videoId = card.getAttribute('id');
  //Ao escutar o evento de click, incluindo a classe active que mostra o modal em tela
  modalOverlay.classList.add('active');
  //Adicionando o src no iframe da página com o id dinâmico que foi pego acima ->
  modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`;
  });
}

//Selecionando o "botão X" do close modal e escutando o evento de click sobre ele
document.querySelector('.close-modal').addEventListener('click', () => {
  //Ao escutar o evento de click, retira a classe active que mostra o modal em tela e assim escode o modal
  modalOverlay.classList.remove('active');
  //Retiranto o src no iframe da página, ao fechar o modal para que o video encerre
  modalOverlay.querySelector('iframe').src = "";
  //Retiranto classe maximize do modal ao fechar
  modal.classList.remove('maximize');
});

//Selecionando o "botão D" maximize do close modal e escutando o evento de click sobre ele
document.querySelector('.maximize-modal').addEventListener('click', () => {
  //Verificando se a o modal já está maximizado
    const contain = modal.classList.contains('maximize');
    if (!contain) {
      //Ao escutar o evento de click, inclui a classe maximize que mostra o modal em tela maximizado
      modal.classList.add('maximize');
    }
  });   

  //Selecionando o "botão - " minimize do close modal e escutando o evento de click sobre ele
  document.querySelector('.minimize-modal').addEventListener('click', () => {
  //Verificando se a o modal já está minimizado
    const contain = modal.classList.contains('maximize');
    if (contain) {
       //Ao escutar o evento de click, inclui a classe minimize que mostra o modal em tela minimizado
       modal.classList.remove('maximize');
      }
  });