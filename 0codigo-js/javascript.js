/* Lista de caminhos das minhas fotos. */
const fotosTopo = [
    '../0imagens/photo-output.jpeg',
    '../0imagens/foto-filipe-espelho.png',
    '../0imagens/foto-filipe-live.png',
    '../0imagens/foto-filipe-selfie.png'
];

/* Contador que rastreia qual foto está sendo exibida (começa na posição 0). */
let indiceAtual = 0;

/* Avança para a próxima foto na lista (Chamada pela seta direita). */
function mudarFotoTopo() {
    const imagemElemento = document.getElementById('fotoPrincipal');
   
    // 1. Incrementa o índice.
    indiceAtual++;
   
    // 2. Se o índice ultrapassar o tamanho da lista, ele volta para 0 (loop).
    if (indiceAtual >= fotosTopo.length) {
        indiceAtual = 0;
    }
   
    // 3. Atualiza o atributo src da imagem.
    imagemElemento.src = fotosTopo[indiceAtual];
}


/* Volta para a foto anterior na lista (Chamada pela seta esquerda). */
function voltarFotoTopo() {
    const imagemElemento = document.getElementById('fotoPrincipal');
   
    // 1. Decrementa o índice.
    indiceAtual--;
   
    // 2. Se o índice for menor que 0 (a primeira foto), ele volta para a ÚLTIMA foto da lista (loop).
    if (indiceAtual < 0) {
        indiceAtual = fotosTopo.length - 1; // fotosTopo.length - 1 é sempre a posição da última foto.
    }
   
    // 3. Atualiza o atributo src da imagem.
    imagemElemento.src = fotosTopo[indiceAtual];
}