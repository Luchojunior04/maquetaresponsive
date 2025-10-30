const principalContenido = document.getElementById('itemContenido')



function articuloPrincipal(){

const articuloContenedor = document.createElement('div');
principalContenido.appendChild(articuloContenedor);
articuloContenedor.className = 'castillo'


const parrafo = document.createElement('p');
parrafo.textContent = 'Un castillo es una edificación militar fortificada propia de la Edad Media, construida como residencia para la nobleza o la realeza y para la defensa de un territorio. Se caracteriza por su sistema de murallas, fosos, baluartes y torres, diseñados para resistir ataques. '
articuloContenedor.appendChild(parrafo);
parrafo.className = 'parrafos'
}