document.addEventListener('DOMContentLoaded', () => {
	const principalContenido = document.getElementById('itemContenido');
	const secundarioContenido = document.getElementById('itemContenidoSecundario'); // corregido getElementById

	if (!principalContenido) {
		console.error("Elemento con id 'itemContenido' no encontrado en el DOM.");
		return;
	}
	if (!secundarioContenido) {
		console.error("Elemento con id 'itemContenidoSecundario' no encontrado en el DOM.");
		return;
	}

	// Hacer accesibles las referencias a la función existente (usa window para no cambiar la función)
	window.principalContenido = principalContenido;
	window.secundarioContenido = secundarioContenido;

	function articuloPrincipal(){

		const articuloContenedor = document.createElement('div');
		principalContenido.appendChild(articuloContenedor);
		articuloContenedor.className = 'castillo'


		const parrafo = document.createElement('p');
		parrafo.textContent = 'Un castillo es una edificación militar fortificada propia de la Edad Media, construida como residencia para la nobleza o la realeza y para la defensa de un territorio. Se caracteriza por su sistema de murallas, fosos, baluartes y torres, diseñados para resistir ataques. '
		articuloContenedor.appendChild(parrafo);
		parrafo.className = 'parrafos'

		const itemImagen = document.createElement('img')
		articuloContenedor.appendChild(itemImagen)
        itemImagen.className = 'castillo1'
		itemImagen.src = 'castle.png'
		itemImagen.alt = 'castle'

		const parrafo2 = document.createElement('p');
		parrafo2.textContent = 'Elementos defensivos: Incluye murallas, torres (como la torre del homenaje), fosos, y otros sistemas de fortificación como puentes levadizos, troneras y matacanes. '
		articuloContenedor.appendChild(parrafo2);
		parrafo2.className = 'parrafos2'











		const articuloDos = document.createElement('div');
		secundarioContenido.appendChild(articuloDos);
		articuloDos.className = 'piedra'


		const parraTres = document.createElement('p');
		parraTres.textContent = 'Una piedra es una sustancia mineral dura y compacta que puede ser de origen natural y se utiliza comúnmente en la construcción y la escultura. Geológicamente, se le llama roca, y existen tres tipos principales: ígneas, sedimentarias y metamórficas, según su formación. El término también puede referirse a otros objetos, como cálculos en la vejiga o granizo grueso.  '
		articuloDos.appendChild(parraTres);
		parraTres.className = 'parrafos3'

		const ImagenDos = document.createElement('img')
		articuloDos.appendChild(ImagenDos)
        ImagenDos.className = 'piedra2'
		ImagenDos.src = 'stone.png'
		ImagenDos.alt = 'stone'

		const parraCuatro = document.createElement('p');
		parraCuatro.textContent = 'Rocas metamórficas: Se forman por la transformación de rocas ígneas o sedimentarias debido a la presión y el calor. Usos: Se ha utilizado a lo largo de la historia para fabricar herramientas, construir estructuras y como objeto de arte y escultura.  '
		articuloDos.appendChild(parraCuatro);
		parraCuatro.className = 'parrafos4'


	}

	articuloPrincipal();
});

const menuButton = document.getElementById("menu")
const headerContainer = document.getElementById("header")
menuButton.addEventListener("click", () =>{
	headerContainer.classList.toggle("open")

	const homeLink = document.createElement('a')
	homeLink.textContent = 'Home';
	headerContainer.appendChild(homeLink);
	homeLink.className = 'links'

	const aboutLink = document.createElement('a')
	aboutLink.textContent = 'About';
	headerContainer.appendChild(aboutLink);
	aboutLink.className = 'links'

	const blogLink = document.createElement('a')
	blogLink.textContent = 'Blog';
	headerContainer.appendChild(blogLink);
	blogLink.className = 'links'
})