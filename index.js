(() => {
        const splash = document.getElementById('clubSplash');
        if (!splash) return;
        if (window.location.hash) {
            splash.remove();
            return;
        }

        let isClosing = false;
        const closeTimer = window.setTimeout(closeSplash, 4000);

        function removeListeners() {
            splash.removeEventListener('click', closeSplash);
            splash.removeEventListener('touchstart', closeSplash);
            document.removeEventListener('keydown', closeSplash);
        }

        function closeSplash() {
            if (isClosing) return;
            isClosing = true;
            window.clearTimeout(closeTimer);
            removeListeners();
            splash.classList.add('is-closing');
            window.setTimeout(() => splash.remove(), 2050);
        }

        splash.addEventListener('click', closeSplash, { once: true });
        splash.addEventListener('touchstart', closeSplash, { once: true, passive: true });
        document.addEventListener('keydown', closeSplash, { once: true });
        splash.focus({ preventScroll: true });
    })();

    const openEscolarFotos = [
        "galeria-torneo-2026/pinargote-premilitar.jpg",
        "galeria-torneo-2026/premilitar.jpg",
        "galeria-torneo-2026/3b4cc8bc-316f-423c-9e2a-6c6a0f1b6526 (1).jpg",
        "galeria-torneo-2026/13c81e68-d5c8-48a8-aac8-59e1b0396a29.jpg",
        "galeria-torneo-2026/14b7e818-84de-4a8e-b0fd-f2b7ce0b7c44.jpg",
        "galeria-torneo-2026/c2af5ed4-fa16-4a4f-a51b-be8821d49eb9.jpg",
        "galeria-torneo-2026/renato.jpg",
        "galeria-torneo-2026/maximiliano-gajardo.jpg",
        "galeria-torneo-2026/bastian.jpg",
        "galeria-torneo-2026/renato-y-angelpremiados.jpg"
    ];
    const ligaRancoFotos = [
        "97bf08ff-cfc6-4ac2-87fd-c25c779d0fe1.jpg",
        "608eed63-6bf8-48e8-8d51-51f841d93e93.jpg",
        "ad6341f4-11d5-4986-8466-15e2cd3beff3.jpg",
        "058c2f7a-8239-4d0c-b333-cb580a54d0a4.jpg",
        "54165ba1-145b-4ffc-ab03-70e4fb100ecb.jpg",
        "027f4d38-c576-4a12-b921-8418b001053a.jpg",
        "3ecd1c39-e414-4d4c-9ca0-d972e3400801.jpg"
    ];
    const noticiasBase = [
        { fecha: "Séptimo Blitz · Osorno", titulo: "German Bielefeldt V. gana nuevamente un torneo del club tras más de una década", texto: "♟️ <strong>Después de más de una década, German Bielefeldt V. ganó nuevamente un torneo del Club de Ajedrez Osorno.</strong> Se quedó con el campeonato del Séptimo Blitz, en una jornada que reunió a <strong>22 jugadores</strong> en una tarde de partidas intensas y celebración. <br><br>Felicitamos al campeón y a todos quienes dieron vida al torneo. También celebramos a los premiados por categoría: <strong>Alelí Zamorano</strong> (Sub 8), <strong>Renato Conejeros</strong> (Sub 10), <strong>Maximiliano Gajardo</strong> (Sub 12), <strong>Bastián Obando</strong> (Sub 14), <strong>Lincoyán Vidarte</strong> (Sub 16) y <strong>Lucas Pailla</strong>, mejor jugador Sub Chess Academy. En la clasificación Open, <strong>Sergio Vera</strong> obtuvo el vicecampeonato y <strong>Nelson Coronado</strong> alcanzó el cuarto lugar. ¡Gracias a todas las familias y participantes por compartir esta gran jornada! ✨", imagen: "media/german-campeon-7°blitz.jpg", galeriaId: "galeria-septimo-blitz", galeria: [ { imagen: "media/premiados-7°blitz.jpg", caption: "Los premiados del 7.º Blitz" }, { imagen: "media/sergio-vera-vice-campeon.jpg", caption: "Sergio Vera, vicecampeón Open" }, { imagen: "media/nelson-coronado-4°lugar open.jpg", caption: "Nelson Coronado, cuarto lugar Open" }, { imagen: "media/Aleli-Zamorano-ganadoraSub 8.jpg", caption: "Alelí Zamorano, ganadora Sub 8" }, { imagen: "media/renato-conejeros-ganador-sub10.jpg", caption: "Renato Conejeros, ganador Sub 10" }, { imagen: "media/maximiliano-gajardo-mejor-sub12.jpg", caption: "Maximiliano Gajardo, mejor Sub 12" }, { imagen: "media/bastian-ganador-sub14.jpg", caption: "Bastián Obando, ganador Sub 14" }, { imagen: "media/Lincoyan-Vidarte-Sub-16.jpg", caption: "Lincoyán Vidarte, ganador Sub 16" }, { imagen: "media/lucas-pailla-mejor sub-chessacademy.jpg", caption: "Lucas Pailla, mejor Sub Chess Academy" }, { imagen: "media/aleli-vs-lincoyan.jpg", caption: "Alelí y Lincoyán durante una partida" }, { imagen: "media/ful-competencia.jpg", caption: "La sala, llena de ajedrez y concentración" }, { imagen: "media/intensos -juegos.jpg", caption: "Partidas intensas del torneo" }, { imagen: "media/loschicos-boris-lucas-aleli.jpg", caption: "Los jóvenes del club compartiendo la jornada" } ], enlace: "https://s2.chess-results.com/tnr1525636.aspx?lan=2&art=1&rd=6&SNode=S0", enlaceTexto: "Ver clasificación y resultados en Chess-Results", enlaces: [{ url: "#galeriaImagenesModal", texto: "Ver galería de imágenes del 7.º Blitz", icono: "fas fa-images", target: "_self", album: true }] },
        { fecha: "IRT 102 años · Resultados oficiales", titulo: "Resultados del IRT 102 años del Club de Ajedrez Osorno", texto: "Ya están disponibles los resultados oficiales del <strong>IRT 102 años</strong>, torneo aniversario del Club de Ajedrez Osorno. Revisa la clasificación final y las partidas en Chess-Results.", enlace: "https://s3.chess-results.com/tnr1476213.aspx?lan=2&art=1&rd=6&fed=CHI&SNode=S0", enlaceTexto: "Ver resultados oficiales del IRT 102 años", enlaces: [{ url: "https://www.instagram.com/p/DcI7-75G4q8/?img_index=17", texto: "Ver fotos del IRT 102 años en Instagram", icono: "fab fa-instagram" }] },
        { fecha: "18 de octubre de 2026 · Liga del Ranco", titulo: "Gran actuación del Club de Ajedrez Osorno en San Pablo", texto: "Nuestro club tuvo una gran jornada en San Pablo, en la Liga del Ranco. Felicitamos a <strong>Jorge Castilla, Renato Conejeros, Vicente Zárate, Lucas Pailla, Alelí Zamorano, Boris Zamorano, Nicolás Mundaca, Laura Puñanco, Maximiliano Guajardo y Sergio Vera</strong> por representar a Osorno. Mira el video de la jornada y revisa las fotografías del equipo.", video: "media/liga-ranco-san-pablo-2026.mp4", videoPoster: "media/liga-ranco-san-pablo-equipo.jpg", galeria: ["media/liga-ranco-san-pablo-equipo.jpg", "media/liga-ranco-san-pablo-delegacion.jpg"], enlace: "https://s3.chess-results.com/tnr1522031.aspx?lan=2&SNode=S0", enlaceTexto: "Ver resultados oficiales en Chess-Results" },
        { fecha: "Liga del Ranco 3 - Junio 2026", titulo: "Jorge Castilla campeón en la 3ª Liga del Ranco", texto: "El Club de Ajedrez Osorno destacó en la <strong>3ª versión de la Liga del Ranco</strong>. <strong>Jorge Castilla</strong> fue <strong>campeón</strong>, <strong>Sergio Vera</strong> obtuvo el <strong>segundo lugar</strong> y <strong>Renato Conejeros</strong> fue <strong>campeón Sub 10</strong>.", imagen: "junio/6fc47454-eeca-4028-be92-cc2664af5505.jpg", enlace: "https://s3.chess-results.com/tnr1446604.aspx?lan=29&art=1&rd=6&SNode=S0", enlaceTexto: "Ver Liga del Ranco 3 en Chess-Results" },
        { fecha: "IRT Puerto Montt - Junio 2026", titulo: "Sergio Vera campeón del IRT Puerto Montt", texto: "Gran resultado para el Club de Ajedrez Osorno en el <strong>IRT Puerto Montt</strong>: <strong>Sergio Vera</strong> se coronó <strong>campeón</strong> del torneo. También destacó <strong>Jorge Castilla</strong> como <strong>mejor Sub 1800</strong>.", imagen: "junio/campeon-irt-pmonttd8-b587-84d48984f161.jpg", enlace: "https://s3.chess-results.com/tnr1439522.aspx?lan=1&art=1&rd=5&SNode=S0", enlaceTexto: "Ver IRT Puerto Montt en Chess-Results" },
        { fecha: "Open Escolar Osorno · 2026", titulo: "Renato, Maximiliano y Bastián brillan en el Primer Open Escolar del Club", texto: "El <strong>Primer Open Escolar del Club de Ajedrez Osorno 2026</strong> reunió a <strong>40 jugadores</strong> y abrió una página luminosa para el ajedrez formativo de la ciudad. En una jornada de respeto, concentración y sana competencia, <strong>Renato Conejeros</strong> se coronó <strong>campeón Sub 10</strong>, <strong>Maximiliano Gajardo</strong> fue <strong>campeón Sub 12</strong> y <strong>Bastián Obando</strong> alcanzó el título <strong>Sub 14</strong>. También participaron representantes del <strong>Colegio Alemán de Osorno</strong> y <strong>La Unión</strong>, <strong>Colegio Francés</strong>, <strong>Escuela René Soriano</strong>, <strong>Liceo Premilitar</strong>, <strong>Escuela de San Pablo y Crucero</strong>, <strong>Agrícola de Pichil</strong> y <strong>Colegio Andalhue</strong>. En la competencia general, el ganador fue <strong>Isaac Pinargote</strong>. Este torneo reafirma al club como una casa abierta para la niñez, la familia y el futuro competitivo del sur de Chile.", galeria: openEscolarFotos, enlace: "https://s1.chess-results.com/tnr1425141.aspx?lan=2&art=1&SNode=S0", enlaceTexto: "Ver resultados oficiales en Chess-Results" },
        { fecha: "Liga del Ranco 2 · 2026", titulo: "Julián primero Sub 10 y gran actuación osornina", texto: "Nuestros niños dejaron una señal potente en la Liga del Ranco 2: <strong>Julián Keim Hott</strong> logró el <strong>1° lugar Sub 10</strong>, <strong>Renato Conejeros</strong> alcanzó un gran <strong>3° lugar</strong>, y también brillaron <strong>Ángel Ruiz</strong>, <strong>Vicente Zarate</strong>, <strong>Carlos</strong> y <strong>Maximiliano Gajardo</strong>.", galeria: ligaRancoFotos, enlace: "https://s3.chess-results.com/tnr1417607.aspx?lan=1&art=1&rd=6&SNode=S0", enlaceTexto: "Ver tabla oficial en Chess-Results" },
        { fecha: "3° Blitz de Mayo 2026", titulo: "Miguel Pacheco se queda con el 3° Blitz", texto: "Miguel Pacheco firmó una actuación sólida y se coronó campeón del 3° Blitz de Mayo, confirmando su buen momento competitivo dentro del club.", imagen: "mighel.pacheco-osorno.jpg", enlace: "https://s3.chess-results.com/tnr1414290.aspx?lan=2&art=1&SNode=S0", enlaceTexto: "Ver 3° Blitz en Chess-Results" },
        { fecha: "2° Blitz Mensual 2026", titulo: "Sergio Vera campeón del 2° Blitz mensual", texto: "Sergio Vera se quedó con el <strong>2° Blitz Mensual del Club de Ajedrez Osorno</strong>, sumando otro resultado destacado en el calendario interno del club.", imagen: "yo-segundo-blitz.jpg", enlace: "https://s3.chess-results.com/tnr1392491.aspx?lan=2&art=1&SNode=S0", enlaceTexto: "Ver 2° Blitz en Chess-Results" },
        { fecha: "La Unión 2026", titulo: "Sergio Vera campeón en la Primera Liga del Ranco", texto: "Sergio Vera Soto ganó el torneo de La Unión con campaña perfecta: <strong>1° lugar y 6 puntos</strong>, según la tabla oficial de Chess-Results. También estuvieron presentes Tomás Gebauer, Maximiliano Gajardo, Renato y Carlos, acompañando una nueva salida competitiva del ajedrez osornino.", imagen: "la-union724f975-400e-4a32-a4da-57757f835e35.jpg", enlace: "https://s2.chess-results.com/tnr1404022.aspx?lan=1&SNode=S0", enlaceTexto: "Ver Primera Liga del Ranco" },
        { fecha: "Primer Blitz 2026", titulo: "Eriberto Calderón campeón del primer blitz", texto: "El primer blitz del ciclo dejó como campeón a <strong>Eriberto Calderón</strong>, abriendo la temporada rápida del club con entusiasmo y buena participación.", imagen: "calderon.jpg", enlace: "https://s1.chess-results.com/tnr1421486.aspx?lan=2&art=4&SNode=S0", enlaceTexto: "Ver Primer Blitz en Chess-Results" },
        { fecha: "24 ago 1924", titulo: "Fundación y primeros pasos", texto: "El Club de Ajedrez Osorno nació oficialmente el <span class='highlight'>24 de agosto de 1924</span>, siendo uno de los más antiguos de Chile. En 2026 celebramos <strong>102 años</strong> de vida institucional, y nos preparamos para un gran IRT en nuestro aniversario." },
        { fecha: "Campeones y maestros", titulo: "Nuestra galería de estrellas", texto: "Grandes figuras han pasado por nuestras filas: <strong>Gustavo Sommer</strong>, <strong>Hugo López</strong>, <strong>Sergio Vera</strong>, <strong>Andrés Carrasco</strong> dejaron su huella con títulos regionales y nacionales." },
        { fecha: "Proyección 2026", titulo: "Un futuro con más torneos IRT", texto: "Este año seremos sede del <strong>IRT 102° Aniversario</strong> (válido para rating FIDE) y continuaremos con el <strong>Circuito Nacional de Clubes</strong>." }
    ];
    function urlBlogSegura(valor, permitirExterno = false) {
        if (typeof valor !== 'string' || !valor.trim()) return '';
        try {
            const url = new URL(valor, document.baseURI);
            if (!['http:', 'https:'].includes(url.protocol)) return '';
            if (!permitirExterno && url.origin !== location.origin) return '';
            return url.href;
        } catch (error) {
            return '';
        }
    }

    function crearTextoBlogSeguro(html) {
        const parsed = new DOMParser().parseFromString(String(html || ''), 'text/html');
        const tagsPermitidos = new Set(['STRONG', 'B', 'EM', 'I', 'SPAN', 'BR']);
        const tagsPeligrosos = new Set(['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'SVG', 'MATH']);
        function copiarSeguro(origen, destino) {
            origen.childNodes.forEach(nodo => {
                if (nodo.nodeType === Node.TEXT_NODE) {
                    destino.appendChild(document.createTextNode(nodo.nodeValue || ''));
                    return;
                }
                if (nodo.nodeType !== Node.ELEMENT_NODE || tagsPeligrosos.has(nodo.tagName)) return;
                if (!tagsPermitidos.has(nodo.tagName)) {
                    copiarSeguro(nodo, destino);
                    return;
                }
                const seguro = document.createElement(nodo.tagName.toLowerCase());
                if (nodo.tagName === 'SPAN' && nodo.classList.contains('highlight')) seguro.className = 'highlight';
                copiarSeguro(nodo, seguro);
                destino.appendChild(seguro);
            });
        }
        const fragmento = document.createDocumentFragment();
        copiarSeguro(parsed.body, fragmento);
        return fragmento;
    }

    async function cargarBlog() {
        const container = document.getElementById('blogContainer');
        if (!container) return;
        let noticias = noticiasBase;
        try {
            const response = await fetch('data/noticias.json', { cache: 'no-store' });
            if (response.ok) {
                const data = await response.json();
                if (Array.isArray(data.noticias) && data.noticias.length) {
                    const baseTitles = new Set(noticiasBase.map(n => n.titulo));
                    const extras = data.noticias.filter(n => n && typeof n === 'object' && typeof n.titulo === 'string' && n.titulo && !baseTitles.has(n.titulo));
                    noticias = [...noticiasBase, ...extras];
                }
            }
        } catch (error) {
            noticias = noticiasBase;
        }
        container.replaceChildren();
        noticias.forEach((noticia, idx) => {
            const card = document.createElement('div');
            card.className = 'blog-card';
            if (idx === 0 && noticia.fecha !== 'Séptimo Blitz · Osorno') card.classList.add('featured-news');
            const fecha = document.createElement('div');
            fecha.className = 'blog-date';
            fecha.textContent = String(noticia.fecha || '');
            const titulo = document.createElement('div');
            titulo.className = 'blog-title';
            titulo.textContent = String(noticia.titulo || '');
            const texto = document.createElement('div');
            texto.className = 'blog-text';
            texto.appendChild(crearTextoBlogSeguro(noticia.texto));
            card.append(fecha, titulo, texto);

            const agregarImagen = (ruta, alt, clase) => {
                const src = urlBlogSegura(ruta);
                if (!src) return;
                const imagen = document.createElement('img');
                imagen.src = src;
                imagen.alt = alt;
                imagen.loading = 'lazy';
                imagen.decoding = 'async';
                imagen.tabIndex = 0;
                imagen.setAttribute('role', 'button');
                imagen.setAttribute('aria-label', 'Ver imagen ampliada: ' + alt);
                imagen.addEventListener('click', () => openImageModal(src));
                imagen.addEventListener('keydown', event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        openImageModal(src);
                    }
                });
                imagen.addEventListener('error', () => imagen.closest('.blog-feature-image, .blog-photo-strip')?.remove(), { once: true });
                if (clase === 'blog-feature-image') {
                    const wrapper = document.createElement('div');
                    wrapper.className = clase;
                    wrapper.appendChild(imagen);
                    texto.appendChild(wrapper);
                } else {
                    let strip = texto.querySelector('.blog-photo-strip');
                    if (!strip) {
                        strip = document.createElement('div');
                        strip.className = 'blog-photo-strip';
                        if (noticia.galeriaId) strip.id = noticia.galeriaId;
                        texto.appendChild(strip);
                    }
                    strip.appendChild(imagen);
                }
            };

            if (noticia.imagen) agregarImagen(noticia.imagen, String(noticia.titulo || ''), 'blog-feature-image');
            const videoSrc = urlBlogSegura(noticia.video);
            if (videoSrc) {
                const video = document.createElement('video');
                video.className = 'blog-video';
                video.controls = true;
                video.preload = 'metadata';
                video.playsInline = true;
                video.setAttribute('aria-label', 'Video: ' + String(noticia.titulo || 'noticia del club'));
                const poster = urlBlogSegura(noticia.videoPoster);
                if (poster) video.poster = poster;
                const source = document.createElement('source');
                source.src = videoSrc;
                source.type = 'video/mp4';
                video.appendChild(source);
                video.appendChild(document.createTextNode('Tu navegador no puede reproducir este video.'));
                texto.appendChild(video);
            }
            if (Array.isArray(noticia.galeria)) {
                noticia.galeria.forEach(foto => {
                    const ruta = typeof foto === 'string' ? foto : (foto && (foto.foto || foto.imagen)) || '';
                    agregarImagen(ruta, (foto && typeof foto === 'object' && foto.caption) || ('Fotografía de ' + String(noticia.titulo || 'la noticia')), 'blog-photo-strip');
                });
            }
            const enlacesNoticia = [];
            const enlacePrincipal = urlBlogSegura(noticia.enlace, true);
            if (enlacePrincipal) enlacesNoticia.push({ url: enlacePrincipal, texto: '♟ ' + String(noticia.enlaceTexto || 'Ver más'), target: '_blank' });
            if (Array.isArray(noticia.enlaces)) {
                noticia.enlaces.forEach(enlaceExtra => {
                    const url = urlBlogSegura(enlaceExtra && enlaceExtra.url, true);
                    if (url) enlacesNoticia.push({ url, texto: String(enlaceExtra.texto || 'Ver más'), icono: enlaceExtra.icono || '', target: enlaceExtra.target || '_blank', scrollTarget: typeof enlaceExtra.url === 'string' && enlaceExtra.url.startsWith('#') && !enlaceExtra.album ? enlaceExtra.url.slice(1) : '', album: Boolean(enlaceExtra.album) });
                });
            }
            enlacesNoticia.forEach(enlace => {
                const link = document.createElement('a');
                link.className = 'blog-action-link';
                link.href = enlace.scrollTarget ? `#${enlace.scrollTarget}` : enlace.url;
                link.target = enlace.target;
                link.rel = 'noopener noreferrer';
                if (enlace.album) {
                    link.addEventListener('click', event => {
                        event.preventDefault();
                        let modalFotos = document.getElementById('galeriaFotosNoticiaModal');
                        if (!modalFotos) {
                            modalFotos = document.createElement('div');
                            modalFotos.id = 'galeriaFotosNoticiaModal';
                            modalFotos.className = 'modal-overlay';
                            const marco = document.createElement('div');
                            marco.className = 'modal-container';
                            marco.style.maxWidth = '1100px';
                            const cerrar = document.createElement('button');
                            cerrar.type = 'button';
                            cerrar.className = 'close-modal';
                            cerrar.setAttribute('aria-label', 'Cerrar galería del 7.º Blitz');
                            cerrar.textContent = '×';
                            const cerrarGaleria = () => {
                                cerrarModal(modalFotos);
                                if (!document.querySelector('.modal-overlay.active')) document.body.classList.remove('modal-open');
                            };
                            cerrar.addEventListener('click', cerrarGaleria);
                            const tituloGaleria = document.createElement('h2');
                            tituloGaleria.textContent = 'Galería de imágenes del 7.º Blitz';
                            const grilla = document.createElement('div');
                            grilla.className = 'galeria-netflix';
                            grilla.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;';
                            (noticia.galeria || []).forEach(foto => {
                                const ruta = typeof foto === 'string' ? foto : (foto && (foto.imagen || foto.foto)) || '';
                                const src = urlBlogSegura(ruta);
                                if (!src) return;
                                const tarjetaFoto = document.createElement('article');
                                tarjetaFoto.className = 'gallery-card';
                                const marcoFoto = document.createElement('div');
                                marcoFoto.className = 'gallery-img';
                                const imagenFoto = document.createElement('img');
                                imagenFoto.src = src;
                                imagenFoto.alt = (foto && foto.caption) || 'Fotografía del 7.º Blitz';
                                imagenFoto.loading = 'lazy';
                                imagenFoto.addEventListener('click', () => openImageModal(src));
                                marcoFoto.appendChild(imagenFoto);
                                tarjetaFoto.appendChild(marcoFoto);
                                if (foto && foto.caption) {
                                    const caption = document.createElement('h4');
                                    caption.textContent = foto.caption;
                                    tarjetaFoto.appendChild(caption);
                                }
                                grilla.appendChild(tarjetaFoto);
                            });
                            marco.append(cerrar, tituloGaleria, grilla);
                            modalFotos.appendChild(marco);
                            modalFotos.addEventListener('click', click => {
                                if (click.target === modalFotos) cerrarGaleria();
                            });
                            document.body.appendChild(modalFotos);
                        }
                        document.body.classList.add('modal-open');
                        abrirModal(modalFotos);
                    });
                }
                if (enlace.scrollTarget) {
                    link.addEventListener('click', event => {
                        const destino = document.getElementById(enlace.scrollTarget);
                        if (!destino) return;
                        event.preventDefault();
                        destino.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    });
                }
                if (enlace.icono) {
                    const icono = document.createElement('i');
                    icono.className = enlace.icono;
                    icono.setAttribute('aria-hidden', 'true');
                    link.append(icono, document.createTextNode(' ' + enlace.texto.trim()));
                } else link.textContent = enlace.texto;
                texto.appendChild(link);
            });
            if (noticia.titulo === 'Nuestra galería de estrellas') {
                card.tabIndex = 0;
                card.setAttribute('role', 'button');
                card.setAttribute('aria-label', 'Abrir galería de campeones de Osorno');
                card.addEventListener('click', event => {
                    if (!event.target.closest('a, img')) document.getElementById('championsModal')?.classList.add('active');
                });
                card.addEventListener('keydown', event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        document.getElementById('championsModal')?.classList.add('active');
                    }
                });
            }
            container.appendChild(card);
        });
    }
    
    const directiva = [
        { nombre: "Presidenta", imagen: "claudia-fernandez-club-ajedrez-osorno.jpg", desc: "Claudia Fernández" },
        { nombre: "Vicepresidente", imagen: "connni-ajedez-osorno.jpg", desc: "Constanza Treumun" },
        { nombre: "Secretaria", imagen: "carol-secretaria-club-osorno-ajedrez.jpg", desc: "Carol Moraga" },
        { nombre: "Tesorero", imagen: "nelson-club-ajedrez-osorno-anticucho.jpg", desc: "Nelson Coronado" },
        { nombre: "1° Director", imagen: "verito-ajedrez-osorno.jpg", desc: "Verónica Ruiz" },
        { nombre: "2° Director", imagen: "sergio-vera-ajedrez-osorno.jpg", desc: "Sergio Vera" },
        { nombre: "3° Director", imagen: "matias-ajedrez-osorno.jpg", desc: "Matías Andrade" },
        { nombre: "Finanzas 1", imagen: "claudia-ajedrez.jpg", desc: "Claudia Unión" },
        { nombre: "Finanzas 2", imagen: "fredy-ajedrez-osorno (2).jpg", desc: "Fredy Wompner" },
        { nombre: "Finanzas 3", imagen: "franco-ajedrez-osorno.jpg", desc: "Franco Troncoso" },
        { nombre: "Finanzas 4", imagen: "pipe-finanza-club-ajedrez-osorno.jpg", desc: "Felipe Vera" }
    ];
    
    const campeonesMundiales = [
        { nombre: "Wilhelm Steinitz", periodo: "1886-1894", imagen: "Wilhelm-Steinitz-516x315.jpg", desc: "Primer campeón oficial." },
        { nombre: "Emanuel Lasker", periodo: "1894-1921", imagen: "112lasker.jpg", desc: "Récord de permanencia (27 años)." },
        { nombre: "José Raúl Capablanca", periodo: "1921-1927", imagen: "109 capablanca.jpg", desc: "Genio natural." },
        { nombre: "Alexander Alekhine", periodo: "1927-1935, 1937-1946", imagen: "alekhine.jpg", desc: "Estilo agresivo." },
        { nombre: "Max Euwe", periodo: "1935-1937", imagen: "max-euwe-ca-1945.jpg", desc: "Matemático holandés." },
        { nombre: "Mikhail Botvinnik", periodo: "1948-1957, 1958-1960, 1961-1963", imagen: "107-botvinnik.jpg", desc: "Pionero soviético." },
        { nombre: "Vasily Smyslov", periodo: "1957-1958", imagen: "106-Vasili-Smyslov.jpg", desc: "Gran finalista." },
        { nombre: "Mikhail Tal", periodo: "1960-1961", imagen: "120Tahl-ajedrez-osorno.jpg", desc: "El mago de Riga." },
        { nombre: "Tigran Petrosian", periodo: "1963-1969", imagen: "petrosian.jpg", desc: "Defensa impenetrable." },
        { nombre: "Boris Spassky", periodo: "1969-1972", imagen: "115spassky.jpg", desc: "Universal." },
        { nombre: "Bobby Fischer", periodo: "1972-1975", imagen: "101fischer.jpg", desc: "Genio estadounidense." },
        { nombre: "Anatoly Karpov", periodo: "1975-1985", imagen: "karpop-4.jpg", desc: "Estilo posicional." },
        { nombre: "Garry Kasparov", periodo: "1985-2000", imagen: "kasparov.jpg", desc: "Considerado el mejor." },
        { nombre: "Vladimir Kramnik", periodo: "2000-2007", imagen: "108-kramnnik.jpg", desc: "Unificador del título." },
        { nombre: "Viswanathan Anand", periodo: "2007-2013", imagen: "104-annand.jpg", desc: "Rapidez y creatividad." },
        { nombre: "Magnus Carlsen", periodo: "2013-2023", imagen: "102-magnus-carlsen.jpg", desc: "Reinado absoluto." },
        { nombre: "Ding Liren", periodo: "2023-2024", imagen: "ding-2.jpg", desc: "Primer campeón chino." },
        { nombre: "Gukesh Dommaraju", periodo: "2024-presente", imagen: "100gukes.jpg", desc: "Campeón más joven." }
    ];
    
    let rankingList = [
        { nombre: "Fredy Wompner", img: "fredy-jugador-club-ajedrez-osorno.jpg", desc: "ELO FIDE 2076", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/14299/" },
        { nombre: "Sergio Vera", img: "sergio-vera-ajedrez-osorno.jpg", desc: "ELO FIDE 1978", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/20083/" },
        { nombre: "Agustín Ojeda", img: "agustin-ojeda-club-ajedrez.jpg", desc: "ELO FIDE 1966", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/585/" },
        { nombre: "Felipe Vera", img: "felipe-ajedrez-osorno.jpg", desc: "ELO FIDE 1908", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/20003/" },
        { nombre: "Alejandro Alvarado", img: "alvarado-ajedrez-osorno.jpg", desc: "ELO FIDE 1894", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/18342/" },
        { nombre: "Arturo Cárdenas", img: "arturo-ajedrez-osorno.jpg", desc: "ELO FIDE 1759", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/272/" },
        { nombre: "Jorge Castilla", img: "castilla-ajedrez-osorno.jpg", desc: "ELO FIDE 1728", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/285/" },
        { nombre: "Nelson Coronado", img: "nelson-club-ajedrez-osorno-anticucho.jpg", desc: "ELO FIDE 1653", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/328/" },
        { nombre: "Carlos Gálvez Araya", img: "galvezaraya-ajedrez-osorno.jpg", desc: "ELO FIDE 1639", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/18874/" },
        { nombre: "Carlos Gálvez Giordano", img: "galvez-papa-ajedrez-osorno.jpg", desc: "ELO FIDE 1564", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/18877/" },
        { nombre: "Constanza Treumun", img: "connni-ajedez-osorno.jpg", desc: "ELO FIDE 1550", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/19911/" },
        { nombre: "Santiago Rosas", img: "sssanti-osorno.jpg", desc: "ELO FIDE 1545", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/684/" },
        { nombre: "Tomás Gebauer", img: "tomy-osorno.jpg", desc: "ELO FIDE 1533", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/418/" },
        { nombre: "Franco Troncoso", img: "franco-ajedrez-osorno.jpg", desc: "ELO FIDE 1429", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/151/" },
        { nombre: "Miguel Pacheco", img: "mighel.pacheco-osorno.jpg", desc: "ELO FIDE SR", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/16058/" },
        { nombre: "Carlos Quintramán Fernández", img: "carlos-club-ajedrez-osorno-calbuco.jpg", desc: "Sin ranking", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/29146/" },
        { nombre: "Matías Andrade", img: "matias-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/5001/" },
        { nombre: "Marcelo Rodríguez", img: "marcelo-ajedrez-club.jpg", desc: "Sin ranking", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/32308/" },
        { nombre: "Josefa Clerc Saldivia", img: "josefita-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/313/" },
        { nombre: "Juan Clerc", img: "juan-ajedrez-osorno-club.jpg", desc: "Sin ranking", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/7793/" },
        { nombre: "Soraya Espinoza", img: "soraya-espinoza-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/11888/" },
        { nombre: "Mario Sepulveda Avello", img: "mario-ajedrez-club-osorno.jpg", desc: "Sin ranking", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/10817/" },
        { nombre: "Vicente Zarate Pradines", img: "vicente22-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "https://www.federacionchilenadeajedrez.cl/new/jugador/32096/" },
        { nombre: "Joaquin Kaiser", img: "joaquin-academia-ajedrez.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "José Soto", img: "galeria-torneo-2026/Jose-soto9-ae1f-c3d4fddb8d46.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Isidora Villarroel", img: "media/isidora-villarroel-academia.png", desc: "Sin ranking", enlace: "#" },
        { nombre: "Bernardita Contreras", img: "media/bernardita-contreras-2026.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Alfredo Suárez del Villar", img: "media/alfredo-suarez-del-villar-2026.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Laura Puñanco", img: "media/laura-puñanco-2026.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Nicolás Mundaca", img: "media/nicolas-mundaca-2026.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Lucas Pailla", img: "media/lucas-pailla.png", desc: "Sin ranking", enlace: "#" }
    ];
    rankingList = rankingList.filter((v,i,a)=>a.findIndex(t=>t.nombre===v.nombre)===i);
    const joseSotoRanking = rankingList.find(j => ["jose soto", "josé soto"].includes(j.nombre.toLowerCase()));
    if (joseSotoRanking) {
        joseSotoRanking.nombre = "José Soto";
        joseSotoRanking.img = "galeria-torneo-2026/Jose-soto9-ae1f-c3d4fddb8d46.jpg";
        joseSotoRanking.desc = joseSotoRanking.desc || "Sin ranking";
        joseSotoRanking.enlace = joseSotoRanking.enlace || "#";
    } else {
        rankingList.push({ nombre: "José Soto", img: "galeria-torneo-2026/Jose-soto9-ae1f-c3d4fddb8d46.jpg", desc: "Sin ranking", enlace: "#" });
    }
    
    const promesasParaRanking = [
        { nombre: "Julián", img: "julian-osorno.jpeg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Carlos", img: "carlos-club-ajedrez-osorno-calbuco.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Ángel Ruiz", img: "angel-ruiz-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Bastián", img: "bastian-osorno-ajedrez.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Mateo", img: "mateo.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Maxi", img: "maxi-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Benjamín", img: "benjamin-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Alonso", img: "alonso-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Fernando Villegas", img: "fernando-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Renato Conejeros", img: "renato-club-ajedrez-osorno.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Joaquin Kaiser", img: "joaquin-academia-ajedrez.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Aleli Zamorano", img: "junio/aleli-zamorano8-4fda-918d-c20f807bcd4b.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Boris Zamorano", img: "junio/boris-222e1a8b4d2b.jpg", desc: "Sin ranking", enlace: "#" },
        { nombre: "Adolfo Pereira", img: "junio/7efea9a8-f38f-48d7-ba5f-a9c5edd71c71.jpg", desc: "Sin ranking", enlace: "#" }
    ];
    const nombresExistentes = rankingList.map(j => j.nombre.toLowerCase());
    promesasParaRanking.forEach(p => { if (!nombresExistentes.includes(p.nombre.toLowerCase())) rankingList.push(p); });
    const joaquinRanking = rankingList.find(j => ["joaquin", "joaquín", "joaquin kaiser", "joaquín kaiser"].includes(j.nombre.toLowerCase()));
    if (joaquinRanking) joaquinRanking.img = "joaquin-academia-ajedrez.jpg";
    
    function extraerElo(desc) { const match = desc.match(/\d{3,4}/); return match ? parseInt(match[0]) : 0; }
    function ordenarRanking() {
        rankingList.sort((a, b) => {
            const eloA = extraerElo(a.desc);
            const eloB = extraerElo(b.desc);
            if (eloA === 0 && eloB === 0) return 0;
            if (eloA === 0) return 1;
            if (eloB === 0) return -1;
            return eloB - eloA;
        });
        generarGaleria('rankingGrid', rankingList, false, true);
    }
    
    let promesasFinal = [
        { nombre: "Nicolas Gallardo", img: "nicolas-ajedrez-club-osorno.jpg", flag: "chile" },
        { nombre: "Josefa Clerc", img: "jjosefa.JPG", flag: "chile" },
        { nombre: "Julián Keim Hott", img: "julian-osorno.jpeg", flag: "chile" },
        { nombre: "Santiago Rosas Valdes", img: "sssanti-osorno.jpg", flag: "chile" },
        { nombre: "Carlos Quintraman Fernández", img: "carlos-club-ajedrez-osorno-calbuco.jpg", flag: "chile" },
        { nombre: "Vicente Pradines Zarate", img: "vicente22-ajedrez-osorno.jpg", flag: "chile" },
        { nombre: "Ángel Ruiz", img: "angel-ruiz-ajedrez-osorno.jpg", flag: "chile" },
        { nombre: "Bastián", img: "bastian-osorno-ajedrez.jpg", flag: "chile" },
        { nombre: "Mateo", img: "mateo.jpg", flag: "us" },
        { nombre: "Tomas Gebauer Unión", img: "tomy-osorno.jpg", flag: "chile" },
        { nombre: "Agustín Ojeda Arévalo", img: "agustin-club.jpg", flag: "chile" },
        { nombre: "Maximiliano Gajardo", img: "maxi-ajedrez-osorno.jpg", flag: "chile" },
        { nombre: "Benjamín Alvarez", img: "benjamin-ajedrez-osorno.jpg", flag: "chile" },
        { nombre: "Alonso Renato Conejeros Moraga", img: "alonso-ajedrez-osorno.jpg", flag: "chile" },
        { nombre: "Fernando Villegas", img: "fernando-ajedrez-osorno.jpg", flag: "chile" },
        { nombre: "Joaquin Kaiser", img: "joaquin-academia-ajedrez.jpg", flag: "chile" },
        { nombre: "Renato Conejeros Moraga", img: "renato-club-ajedrez-osorno.jpg", flag: "chile" },
        { nombre: "Rosa Cárdenas", img: "rosa-cardenas-club-ajedrez-osorno.jpg", flag: "chile" },
        { nombre: "Aleli Zamorano", img: "junio/aleli-zamorano8-4fda-918d-c20f807bcd4b.jpg", flag: "chile" },
        { nombre: "Boris Zamorano", img: "junio/boris-222e1a8b4d2b.jpg", flag: "chile" },
        { nombre: "Adolfo Pereira", img: "junio/7efea9a8-f38f-48d7-ba5f-a9c5edd71c71.jpg", flag: "chile" },
        { nombre: "Jorge Castilla", img: "media/castilla-jorge-2026-cademia.png", flag: "chile" },
        { nombre: "Isidora Villarroel", img: "media/isidora-villarroel-academia.png", flag: "chile" },
        { nombre: "Bernardita Contreras", img: "media/bernardita-contreras-2026.jpg", flag: "chile" },
        { nombre: "Alfredo Suárez del Villar", img: "media/alfredo-suarez-del-villar-2026.jpg", flag: "chile" },
        { nombre: "Laura Puñanco", img: "media/laura-puñanco-2026.jpg", flag: "chile" },
        { nombre: "Nicolás Mundaca", img: "media/nicolas-mundaca-2026.jpg", flag: "chile" },
        { nombre: "Lucas Pailla", img: "media/lucas-pailla.png", flag: "chile" }
    ];
    for (let i = 1; i <= 5; i++) promesasFinal.push({ nombre: `Promesa ${promesasFinal.length+1}`, img: `promesa_extra_${i}.jpg`, flag: "chile" });
    
    // ACTIVIDADES CLUB CORREGIDO
    const actividadesList = [
        { nombre: "Liga del Ranco 2 - Julián y Renato", img: "3ecd1c39-e414-4d4c-9ca0-d972e3400801.jpg", desc: "Julián 1° Sub 10 y Renato 3° lugar" },
        { nombre: "Liga del Ranco 2 - delegación Osorno", img: "97bf08ff-cfc6-4ac2-87fd-c25c779d0fe1.jpg", desc: "Nueva actuación destacada de jóvenes osorninos" },
        { nombre: "Liga del Ranco 2 - premiación", img: "608eed63-6bf8-48e8-8d51-51f841d93e93.jpg", desc: "Registro de la jornada escolar" },
        { nombre: "Liga del Ranco 2 - tablero", img: "ad6341f4-11d5-4986-8466-15e2cd3beff3.jpg", desc: "Competencia y formación en la zona sur" },
        { nombre: "Liga del Ranco 2 - club presente", img: "058c2f7a-8239-4d0c-b333-cb580a54d0a4.jpg", desc: "Participación del Club de Ajedrez Osorno" },
        { nombre: "Liga del Ranco 2 - jóvenes talentos", img: "54165ba1-145b-4ffc-ab03-70e4fb100ecb.jpg", desc: "Nuevas generaciones en competencia" },
        { nombre: "Liga del Ranco 2 - cierre", img: "027f4d38-c576-4a12-b921-8418b001053a.jpg", desc: "Registro final de la actividad" },
        { nombre: "Miguel Pacheco campeón 3° Blitz", img: "miguelcampeon-32a7-4c49-acf5-6293c1f25b9c.jpg", desc: "Nueva actividad destacada del club" },
        { nombre: "Marcelo segundo lugar 3° Blitz", img: "marcelo-segundo-6b6-8259-507bd7701d83.jpg", desc: "Marcelo logra el segundo puesto" },
        { nombre: "Nelson tercer lugar 3° Blitz", img: "nelson-tercero--8e3c-44be-b14b-a0de8ef2d622.jpg", desc: "Nelson se queda con el tercer lugar" },
        { nombre: "Registro del 3° Blitz", img: "club3erblitz--7b19-437a-9dd9-c96358c69d42.jpg", desc: "Jornada mensual del Club de Ajedrez Osorno" },
        { nombre: "Sergio Vera campeón Liga del Ranco", img: "vera-la-unione-4a32-a4da-57757f835e35.jpg", desc: "Campeón de la Primera Fecha Liga del Ranco" },
        { nombre: "Delegación en La Unión", img: "launion3-c156-4ae1-8086-184f8f21799a.jpg", desc: "Participación osornina en la Liga del Ranco" },
        { nombre: "Liga del Ranco - Julián y Renato", img: "3ecd1c39-e414-4d4c-9ca0-d972e3400801.jpg", desc: "Julián 1° Sub 10 y Renato 3°" },
        { nombre: "Campeón Tercer Blitz Mayo - Miguel Pacheco", img: "mighel.pacheco-osorno.jpg", desc: "Miguel Pacheco campeón del 3° Blitz 2026" },
        { nombre: "2° Lugar Tercer Blitz", img: "marcelo.jpg", desc: "Marcelo, segundo puesto en el torneo blitz" },
        { nombre: "Bastian Campeón Sub 14", img: "bastian-club-ajedrez-osorno.jpg", desc: "Bastian logra el título en categoría Sub 14" },
        { nombre: "Carlos Campeón Sub 16", img: "carlos-mama-clun-mm.jpg", desc: "Carlos se corona campeón Sub 16" },
        { nombre: "Rosa Cárdenas - Destacada del Blitz de Mayo", img: "rosaan-ajedrez-osorno.jpg", desc: "Rosa tuvo una actuación sobresaliente en el torneo" },
        { nombre: "Nelson - Tercer Lugar Tercer Blitz", img: "07780cb8-bf30-4605-a0a1-5a7313cb5990.jpg", desc: "Nelson se adjudica el tercer puesto" },
        { nombre: "Campeones en La Unión", img: "la-union-campeones.jpg", desc: "Equipo campeón en torneo de La Unión" },
        { nombre: "Sergio Vera Campeón en La Unión", img: "sergio-campeon-launion.jpg", desc: "Sergio Vera celebrando su título en La Unión" },
        { nombre: "Premiación 2° Blitz", img: "blitz-directiva-ajedrez-osorno.jpg", desc: "Entrega de premios a los ganadores del torneo blitz" },
        { nombre: "Partida épica: Vera vs Vera", img: "vera-yvera.jpg", desc: "Duelo fratricida en el tablero" },
        { nombre: "Constanza Treumun – Ex Campeona IND", img: "Constanza treumun.jpg", desc: "Constanza, destacada ajedrecista" },
        { nombre: "Panorámica del Torneo Blitz", img: "panoramica-clubajedrez-osorno2°blitz.jpg", desc: "Vista general del evento" }
    ];
    for (let i = (actividadesList.length + 1); i <= 15; i++) {
        actividadesList.push({ nombre: `Actividad ${i}`, img: `actividad_${i}.jpg`, desc: "Próximamente imagen" });
    }
    
    const galeriaImagenesList = [
        { nombre: "Julián y Renato en Liga del Ranco", img: "3ecd1c39-e414-4d4c-9ca0-d972e3400801.jpg", desc: "Actuación destacada de la delegación osornina" },
        { nombre: "Sergio Vera campeón en La Unión", img: "sergio-campeon-launion.jpg", desc: "Campeón Liga del Ranco en La Unión" },
        { nombre: "Campeones en La Unión", img: "la-union-campeones.jpg", desc: "Delegación del Club de Ajedrez Osorno" },
        { nombre: "Miguel Pacheco campeón 3° Blitz", img: "mighel.pacheco-osorno.jpg", desc: "Campeón del 3° Blitz de Mayo 2026" },
        { nombre: "Eriberto Calderón", img: "calderon.jpg", desc: "Campeón del primer blitz" },
        { nombre: "Liga del Ranco - equipo", img: "97bf08ff-cfc6-4ac2-87fd-c25c779d0fe1.jpg", desc: "Registro de la delegación osornina" },
        { nombre: "Liga del Ranco - premiación", img: "608eed63-6bf8-48e8-8d51-51f841d93e93.jpg", desc: "Actuación destacada de nuestros jóvenes" },
        { nombre: "Liga del Ranco - tablero", img: "ad6341f4-11d5-4986-8466-15e2cd3beff3.jpg", desc: "Jornada competitiva escolar" },
        { nombre: "Liga del Ranco - Osorno", img: "058c2f7a-8239-4d0c-b333-cb580a54d0a4.jpg", desc: "Participación del club" },
        { nombre: "Liga del Ranco - jóvenes", img: "54165ba1-145b-4ffc-ab03-70e4fb100ecb.jpg", desc: "Nuevas generaciones del club" },
        { nombre: "Liga del Ranco - cierre", img: "027f4d38-c576-4a12-b921-8418b001053a.jpg", desc: "Registro del torneo" },
        { nombre: "IRT Chess Academy", img: "irt-chess-academy-ajedrez-osorno.jpg", desc: "Torneo IRT Chess Academy" },
        { nombre: "Nacional de Temuco 2019", img: "nacional-temuco-2019.jpg", desc: "Participación del club en el Nacional de Temuco" },
        { nombre: "Torneo Mayor 2009", img: "mayor-2009-osorno-ajedrez.jpg", desc: "Campeonato local" },
        { nombre: "Sergio Vera en Trevelyn 2010", img: "trevelyn-ajedrez-ajedrez-osorno.jpg", desc: "Participación destacada" },
        { nombre: "Osorno campeón torneo equipos Valdivia", img: "osorno-club-equipos.jpg", desc: "Equipo campeón" },
        { nombre: "Club imagen 2009", img: "pipe.jpg", desc: "Actividad social" },
        { nombre: "Katherine Velásquez en Sudamericano Paraguay", img: "IMG_20171201_170747.jpg", desc: "Representación internacional" },
        { nombre: "Sala club 2008", img: "club-sala-ajedrez.jpg", desc: "Nuestra sede" },
        { nombre: "Constanza Treumun y Sarita Álvarez", img: "IMG_20160824_164712 - copia.jpg", desc: "Jóvenes talentos" },
        { nombre: "Matías Andrade Campeón Torneo Invierno 2025", img: "campeon-torneo-de-invierno.jpg", desc: "Campeón absoluto" },
        { nombre: "Torneo por equipos de Valdivia", img: "briones-ajedrez-osorno.jpg", desc: "Participación del club en el torneo por equipos de Valdivia" },
        { nombre: "Benjamín López", img: "benjamin-lopez-ajedrez-osorno - copia.jpg", desc: "Mirando la partida" },
        { nombre: "Encuentro Osorno-Bariloche", img: "bariloche-osorno-ajedrez-osorno.jpg", desc: "Hermandad ajedrecística" },
        { nombre: "Tomás Gebauer 4° Chile Sub 8", img: "aleman 2018.jpg", desc: "Logro infantil" },
        { nombre: "Osorno vs Bariloche club", img: "ajedrez-osorno-bariloche-club.jpg", desc: "Encuentro de locales" },
        { nombre: "Agustín Ojeda Campeón Hamburgo Alemania", img: "a46a8cb6-8001-426a-a899-96f9d926714d.jpeg", desc: "Título internacional" },
        { nombre: "Torneo Paseo Patrimonial", img: "429807938_10229984340928786_7912276516318638005_n - copia.jpg", desc: "Evento callejero" },
        { nombre: "Cena Osorno y Bariloche", img: "43617994_10215469277501695_2334973736567963648_n - copia.jpg", desc: "Confraternidad" },
        { nombre: "Cena Osorno vs Bariloche 2", img: "43500627_10215469278941731_6898799358163025920_n.jpg", desc: "Celebración" },
        { nombre: "Match Osorno vs Puerto Montt", img: "33575997_10216082477477426_1559030616861704192_n.jpg", desc: "Encuentro regional" },
        { nombre: "Visitas Larraín y Vergara", img: "15-ajedrez osorno-larrain-vergara.jpg", desc: "Grandes maestros invitados" },
        { nombre: "Viernes de ajedrez", img: "4gfthgf.jpg", desc: "Sesión semanal" },
        { nombre: "Torneo padres e hijos", img: "torneo-padres-e-hijos.jpg", desc: "Actividad familiar del club" },
        { nombre: "Josefa y Jeremías nacional", img: "josefa y jeremias nacional - copia.jpg", desc: "Representación juvenil" },
        { nombre: "Archivo histórico 2021", img: "20211019_205953.jpg", desc: "Registro histórico del club" },
        { nombre: "Paseo Patrimonial Osorno", img: "031dad56-b92e-4da1-9aae-7b4512ddb04b.jpeg", desc: "Registro del encuentro de ajedrez en el paseo patrimonial" },
        { nombre: "Primer Torneo Paseo Patrimonial Osorno", img: "4062434a-f769-4076-b7d0-45f9ae00112d.jpeg", desc: "Primera edición del torneo en el paseo patrimonial" },
        { nombre: "Paseo Patrimonial Osorno · partidas", img: "77c0da51-3c6a-49c0-874d-0349a7d4fd39.jpeg", desc: "Partidas durante la actividad patrimonial" },
        { nombre: "Paseo Patrimonial Osorno · participantes", img: "d3e8d896-10b1-42c3-89db-444a3d2d0b05.jpeg", desc: "Participantes del encuentro en el paseo patrimonial" },
        { nombre: "Academia en el Nacional de Temuco", img: "e8ed7040-2db8-4bad-80b4-020bee6f1d31.jfif", desc: "Participación de la Academia en el Nacional de Temuco" },
        { nombre: "Archivo recuperado", img: "3efa133d-275c-47b6-b731-d389dbb4683d - copia.jpg", desc: "Foto antigua del club" },
        { nombre: "Osorno y Bariloche", img: "osorno-bariloche-ajedrez-osorno.jpg", desc: "Encuentro internacional de amistad" },
        { nombre: "Delegación de Osorno en Bariloche", img: "bariloche-osorno-ajedrez-osorno.jpg", desc: "Participación histórica" },
        { nombre: "Varas vs Eduardo Rojas", img: "vras-eduardo-rojas-club-ajedrez.jpg", desc: "Partida histórica del ajedrez osornino" },
        { nombre: "Foto histórica Osorno", img: "foto-historica-osorno.jpg", desc: "Archivo del club" }
    ];
    
    const eventosArchivo = [
        { fecha: "Por definir", titulo: "Histórico 1", descripcion: "Por definir", icono: "fas fa-chess-pawn" },
        { fecha: "Por definir", titulo: "Histórico 2", descripcion: "Por definir", icono: "fas fa-chess-pawn" },
        { fecha: "Por definir", titulo: "Histórico 3", descripcion: "Por definir", icono: "fas fa-chess-pawn" },
        { fecha: "Por definir", titulo: "Histórico 4", descripcion: "Por definir", icono: "fas fa-chess-pawn" },
        { fecha: "Por definir", titulo: "Histórico 5", descripcion: "Por definir", icono: "fas fa-chess-pawn" },
        { fecha: "Por definir", titulo: "Histórico 6", descripcion: "Por definir", icono: "fas fa-chess-pawn" },
        { fecha: "Por definir", titulo: "Histórico 7", descripcion: "Por definir", icono: "fas fa-chess-pawn" }
    ];
    
    const torneosEscolares = [
        { fecha: "30 de mayo de 2026", fechaISO: "2026-05-30", lugar: "Osorno - Open Escolar Osorno 2026", nota: "Revisa las bases oficiales del Open Escolar Osorno 2026.", bases: "descarga/Bases_Open_Escolar_Osorno_2026%20%281%29.pdf", basesAlt: "descargas/Bases_Open_Escolar_Osorno_2026.pdf" },
        { fecha: "11 de abril de 2026", fechaISO: "2026-04-11", lugar: "La Unión (Colegio Alemán de La Unión)" },
        { fecha: "16 de mayo de 2026", fechaISO: "2026-05-16", lugar: "Osorno (Colegio Alemán de Osorno)" },
        { fecha: "13 de junio de 2026", fechaISO: "2026-06-13", lugar: "Paillaco (Colegio Olegario Morales)" },
        { fecha: "8 de agosto de 2026", fechaISO: "2026-08-08", lugar: "Osorno (Liceo Osorno College)" },
        { fecha: "12 de septiembre de 2026", fechaISO: "2026-09-12", lugar: "Río Negro (lugar por confirmar)" },
        { fecha: "3 de octubre de 2026", fechaISO: "2026-10-03", lugar: "San Pablo (Gimnasio Municipal)" },
        { fecha: "21 de noviembre de 2026", fechaISO: "2026-11-21", lugar: "La Unión (Salón Consistorial Municipalidad de La Unión)", nota: "Última fecha de la Liga del Ranco." }
    ];
    
    function abrirModal(modal) {
        if (!modal) return;
        modal.classList.add('active');
    }
    function cerrarModal(modal) {
        if (!modal) return;
        modal.classList.remove('active');
        const hash = window.location.hash.toLowerCase();
        if (hash && hashToModal[hash]) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    }
    function cerrarModalSinHistorial(modal) {
        if (!modal) return;
        modal.classList.remove('active');
    }
    const hashToModal = {
        '#tesoreria': async () => {
            renderTesoreriaModal();
            abrirModal(document.getElementById('tesoreriaModal'));
        },
        '#directiva': () => { cargarDirectiva(); abrirModal(document.getElementById('directivaModal')); },
        '#torneos-escolares': () => abrirModal(document.getElementById('torneosEscolaresModal')),
        '#actividades-club': () => abrirModal(document.getElementById('actividadesClubModal')),
        '#escuela': () => abrirModal(document.getElementById('escuelaModal')),
        '#jovenes-promesas': () => abrirModal(document.getElementById('promesasModal')),
        '#galeria': () => { cargarGaleriaImagenes(); abrirModal(document.getElementById('galeriaImagenesModal')); },
        '#archivo': () => abrirModal(document.getElementById('archivoModal')),
        '#colaboradores': () => abrirModal(document.getElementById('colaboradoresModal'))
    };
    async function abrirDesdeHash() {
        document.querySelectorAll('.modal-overlay.active').forEach(cerrarModalSinHistorial);
        const abrir = hashToModal[window.location.hash.toLowerCase()];
        if (abrir) await abrir();
    }
    window.addEventListener('hashchange', abrirDesdeHash);
    window.addEventListener('popstate', abrirDesdeHash);

    async function compartirUrl(hash, titulo) {
        const url = new URL(hash || '', window.location.href).href;
        try {
            if (navigator.share) {
                await navigator.share({ title: titulo || document.title, url });
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(url);
                alert('Enlace copiado para compartir');
            } else {
                prompt('Copia este enlace:', url);
            }
        } catch (error) {
            if (navigator.clipboard) await navigator.clipboard.writeText(url);
        }
    }

    function obtenerUrlImagen(imgSrc) {
        try { return new URL(imgSrc, document.baseURI).href; } catch { return ''; }
    }
    function mostrarEstadoImagen(mensaje) {
        const status = document.getElementById('imageActionStatus');
        if (status) status.textContent = mensaje;
    }
    async function copiarTextoSeguro(texto) {
        if (navigator.clipboard && window.isSecureContext) {
            try { await navigator.clipboard.writeText(texto); return true; } catch (error) { /* usar alternativa */ }
        }
        const campo = document.createElement('textarea');
        campo.value = texto;
        campo.setAttribute('readonly', '');
        campo.style.position = 'fixed';
        campo.style.opacity = '0';
        document.body.appendChild(campo);
        campo.select();
        let copiado = false;
        try { copiado = document.execCommand('copy'); } catch (error) { copiado = false; }
        campo.remove();
        if (!copiado) window.prompt('Copia este enlace:', texto);
        return copiado;
    }
    function nombreArchivoImagen(url) {
        try { return decodeURIComponent(new URL(url).pathname.split('/').pop()) || 'imagen-club.png'; }
        catch { return 'imagen-club.png'; }
    }
    async function obtenerArchivoImagen(url) {
        const respuesta = await fetch(url, { credentials: 'same-origin' });
        if (!respuesta.ok) throw new Error('No se pudo cargar la imagen.');
        const blob = await respuesta.blob();
        return new File([blob], nombreArchivoImagen(url), { type: blob.type || 'image/jpeg' });
    }
    async function compartirImagen(url) {
        try {
            if (navigator.share && navigator.canShare) {
                const archivo = await obtenerArchivoImagen(url);
                if (navigator.canShare({ files: [archivo] })) {
                    await navigator.share({ files: [archivo], title: 'Club de Ajedrez Osorno' });
                    mostrarEstadoImagen('Imagen compartida.');
                    return;
                }
            }
            if (navigator.share) {
                await navigator.share({ title: 'Club de Ajedrez Osorno', url });
                mostrarEstadoImagen('Enlace de la imagen compartido.');
                return;
            }
            const copiado = await copiarTextoSeguro(url);
            mostrarEstadoImagen(copiado ? 'Enlace copiado. En este navegador puedes descargar la imagen para compartirla.' : 'Puedes descargar la imagen con el botón de abajo.');
        } catch (error) {
            if (error && error.name === 'AbortError') { mostrarEstadoImagen('Compartición cancelada.'); return; }
            try {
                if (navigator.share) {
                    await navigator.share({ title: 'Club de Ajedrez Osorno', url });
                    mostrarEstadoImagen('Enlace de la imagen compartido.');
                    return;
                }
                const copiado = await copiarTextoSeguro(url);
                mostrarEstadoImagen(copiado ? 'No se pudo compartir el archivo; copié el enlace.' : 'No se pudo compartir. Prueba con Descargar.');
            } catch (fallbackError) {
                mostrarEstadoImagen('No se pudo compartir. Prueba con Copiar enlace o Descargar.');
            }
        }
    }
    async function copiarImagenAlPortapapeles(url) {
        try {
            if (!navigator.clipboard || !navigator.clipboard.write || !window.ClipboardItem || !window.isSecureContext) {
                mostrarEstadoImagen('Tu navegador no permite copiar la imagen aquí. Usa Descargar o Copiar enlace.');
                return;
            }
            const respuesta = await fetch(url, { credentials: 'same-origin' });
            if (!respuesta.ok) throw new Error('No se pudo cargar la imagen.');
            const original = await respuesta.blob();
            const bitmap = await createImageBitmap(original);
            const canvas = document.createElement('canvas');
            canvas.width = bitmap.width;
            canvas.height = bitmap.height;
            canvas.getContext('2d').drawImage(bitmap, 0, 0);
            bitmap.close();
            const png = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            if (!png) throw new Error('No se pudo preparar la imagen.');
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })]);
            mostrarEstadoImagen('Imagen copiada. Ya puedes pegarla.');
        } catch (error) {
            mostrarEstadoImagen('No se pudo copiar la imagen. Prueba con Descargar o Copiar enlace.');
        }
    }
    function openImageModal(imgSrc) {
        const modal = document.getElementById('imagenMaxModal');
        const img = document.getElementById('imagenMaxSrc');
        const url = obtenerUrlImagen(imgSrc);
        if (!modal || !img || !url) return;
        img.src = url;
        mostrarEstadoImagen('');
        const download = document.getElementById('btnDescargarImagen');
        if (download) { download.href = url; download.download = nombreArchivoImagen(url); }
        const shareButton = document.getElementById('btnCompartirImagen');
        const copyImageButton = document.getElementById('btnCopiarImagen');
        const copyButton = document.getElementById('btnCopiarEnlaceImagen');
        if (shareButton) shareButton.onclick = () => compartirImagen(url);
        if (copyImageButton) copyImageButton.onclick = () => copiarImagenAlPortapapeles(url);
        if (copyButton) copyButton.onclick = async () => {
            const ok = await copiarTextoSeguro(url);
            mostrarEstadoImagen(ok ? 'Enlace copiado.' : 'No se pudo copiar automáticamente; usa el enlace disponible.');
        };
        abrirModal(modal);
        modal.onclick = function(e) { if (e.target === modal) cerrarModal(modal); };
    }
    function activarTarjetaImagen(card, imgSrc) {
        if (!card || !imgSrc) return;
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Ver imagen ampliada');
        card.addEventListener('click', (e) => {
            if (e.target.closest('a, button')) return;
            openImageModal(imgSrc);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openImageModal(imgSrc);
            }
        });
    }

    function activarImagenesSueltas(scope = document) {
        scope.querySelectorAll('#escuelaModal img, .blog-feature-image img, .blog-photo-strip img').forEach(img => {
            if (img.dataset.imageReady === 'true') return;
            img.dataset.imageReady = 'true';
            img.tabIndex = 0;
            img.setAttribute('role', 'button');
            img.setAttribute('aria-label', 'Ver imagen ampliada');
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openImageModal(img.getAttribute('src') || img.src);
                }
            });
        });
    }
    activarImagenesSueltas();
    
    function crearIconoAjedrez() {
        const icono = document.createElement('i');
        icono.className = 'fas fa-chess-piece';
        icono.setAttribute('aria-hidden', 'true');
        icono.style.fontSize = '3rem';
        return icono;
    }
    function crearImagenLocal(src, alt) {
        // These assets are shipped with the site. Permit file:// when the site
        // is opened from disk for local preview; urlBlogSegura intentionally
        // rejects that protocol for untrusted/content-managed URLs.
        let url = '';
        try {
            const candidata = new URL(String(src || ''), document.baseURI);
            const rutaRelativa = typeof src === 'string' && !/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(src.trim());
            const mismoOrigen = candidata.origin === location.origin;
            const vistaLocal = location.protocol === 'file:' && candidata.protocol === 'file:' && rutaRelativa;
            if (!['http:', 'https:', 'file:'].includes(candidata.protocol) || (!mismoOrigen && !vistaLocal)) return null;
            url = candidata.href;
        } catch (error) {
            return null;
        }
        const img = document.createElement('img');
        img.src = url;
        img.alt = String(alt || '');
        img.loading = 'lazy';
        img.decoding = 'async';
        img.addEventListener('error', () => {
            const marco = img.closest('.gallery-img');
            if (marco) marco.replaceChildren(crearIconoAjedrez());
            else img.remove();
        }, { once: true });
        return img;
    }
    function crearTexto(tag, valor, clase = '') {
        const elemento = document.createElement(tag);
        if (clase) elemento.className = clase;
        elemento.textContent = String(valor ?? '');
        return elemento;
    }

    function generarGaleria(containerId, items, conFlag = false, sinRankingClass = false) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.replaceChildren();
        items.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = 'gallery-card';
            if (containerId === 'rankingGrid') div.classList.add('ranking-card');
            if (sinRankingClass && item.desc === 'Sin ranking') div.classList.add('sin-ranking');
            if (containerId === 'rankingGrid') div.appendChild(crearTexto('span', idx + 1, 'ranking-position'));
            const marco = document.createElement('div');
            marco.className = 'gallery-img';
            const imagen = crearImagenLocal(item.img, item.nombre);
            if (imagen) marco.appendChild(imagen);
            else marco.appendChild(crearIconoAjedrez());
            div.appendChild(marco);
            const titulo = document.createElement('h4');
            titulo.appendChild(document.createTextNode(String(item.nombre || '')));
            if (conFlag && typeof item.flag === 'string') {
                const bandera = crearImagenLocal(item.flag + '.png', 'Bandera');
                if (bandera) bandera.className = 'flag-img';
                if (bandera) titulo.append(' ', bandera);
            }
            div.appendChild(titulo);
            const fideMatch = containerId === 'rankingGrid' ? String(item.desc || '').match(/FIDE\s+(\d{3,4}|SR)/i) : null;
            if (fideMatch) {
                const elos = document.createElement('div');
                elos.className = 'ranking-elos';
                const chip = document.createElement('div');
                chip.className = 'ranking-elo-chip';
                chip.append(crearTexto('span', 'FIDE'), crearTexto('strong', fideMatch[1]));
                elos.appendChild(chip);
                div.appendChild(elos);
            } else if (item.desc) div.appendChild(crearTexto('p', item.desc));
            const enlace = urlBlogSegura(item.enlace, true);
            if (enlace && item.enlace !== '#') {
                const parrafo = document.createElement('p');
                const link = crearTexto('a', '♟ Ver ficha oficial', 'ranking-official-link');
                link.href = enlace;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                parrafo.appendChild(link);
                div.appendChild(parrafo);
            }
            if (imagen) {
                imagen.addEventListener('click', event => { event.stopPropagation(); openImageModal(imagen.src); });
                activarTarjetaImagen(div, imagen.src);
            }
            container.appendChild(div);
        });
    }
    
    function cargarCampeonesMundiales() {
        const container = document.getElementById('campeonesMundialesContainer');
        if (!container) return;
        container.replaceChildren();
        campeonesMundiales.forEach(c => {
            const div = document.createElement('div');
            div.className = 'gallery-card';
            const marco = document.createElement('div');
            marco.className = 'gallery-img';
            const imagen = crearImagenLocal(c.imagen, c.nombre);
            if (imagen) marco.appendChild(imagen); else marco.appendChild(crearIconoAjedrez());
            div.append(marco, crearTexto('h4', `${c.nombre} (${c.periodo})`), crearTexto('p', c.desc));
            if (imagen) {
                imagen.addEventListener('click', event => { event.stopPropagation(); openImageModal(imagen.src); });
                activarTarjetaImagen(div, imagen.src);
            }
            container.appendChild(div);
        });
    }
    
    const campeonesOsorno = [
        { nombre: "Gustavo Sommer", img: "sommer-ajedrez-osorno.jpg", desc: "Gran campeón en los años 80." },
        { nombre: "Allan Elleberg", desc: "Campeón de Osorno 1980." },
        { nombre: "Germán Bielefeldt", img: "bielefeldt-ajedrez-osorno.jpg", desc: "Campeón en 2 ocasiones." },
        { nombre: "José Troncoso", img: "troncoso-ajedrez-osorno.jpg", desc: "Impulsor del ajedrez educativo." },
        { nombre: "Hugo López", img: "lopez-ajedrez-osorno.jpeg", desc: "Campeón nacional y de Osorno." },
        { nombre: "Sergio Vera", img: "sergio-vera-ajedrez-osorno.jpg", desc: "Instructor FIDE y múltiple campeón local." },
        { nombre: "Juan Pablo Varas", img: "varas4_10229190993938865_7838399157145470729_n.jpg", desc: "Campeón de Osorno 1990 y figura histórica del club." },
        { nombre: "Andrés Carrasco", img: "osorno-club-equipos.jpg", desc: "Referente competitivo del club." },
        { nombre: "Juan Sánchez Alarcón", img: "media/juan-sanchez-alarcon-2026.jpg", desc: "Figura destacada de la generación de los 90." }
    ];
    function cargarCampeonesOsornoNombres() {
        const container = document.getElementById('campeonesGrid');
        if (!container) return;
        container.classList.remove('names-list');
        container.replaceChildren();
        campeonesOsorno.forEach(c => {
            const card = document.createElement('div');
            card.className = 'gallery-card';
            const marco = document.createElement('div');
            marco.className = 'gallery-img';
            const imagen = crearImagenLocal(c.img, c.nombre);
            if (imagen) marco.appendChild(imagen); else marco.appendChild(crearIconoAjedrez());
            card.append(marco, crearTexto('h4', c.nombre), crearTexto('p', c.desc));
            if (imagen) {
                imagen.addEventListener('click', event => { event.stopPropagation(); openImageModal(imagen.src); });
                activarTarjetaImagen(card, imagen.src);
            }
            container.appendChild(card);
        });
    }
    cargarCampeonesOsornoNombres();

    let campeonOsornoSeleccionado = 0;
    function mostrarCampeonOsorno(indice) {
        const modal = document.getElementById('campeonOsornoDetalleModal');
        const campeon = campeonesOsorno[indice];
        if (!modal || !campeon) return;
        campeonOsornoSeleccionado = indice;
        document.getElementById('campeonOsornoDetalleNombre').textContent = campeon.nombre;
        document.getElementById('campeonOsornoDetalleDescripcion').textContent = campeon.desc || '';
        document.getElementById('campeonOsornoDetallePosicion').textContent = `${indice + 1} de ${campeonesOsorno.length}`;
        const foto = document.getElementById('campeonOsornoDetalleImagen');
        if (campeon.img) {
            const imagenLocal = crearImagenLocal(campeon.img, campeon.nombre);
            if (imagenLocal) {
                foto.src = imagenLocal.src;
                foto.alt = campeon.nombre;
                foto.hidden = false;
            } else {
                foto.removeAttribute('src');
                foto.hidden = true;
            }
        } else {
            foto.removeAttribute('src');
            foto.hidden = true;
        }
        modal.setAttribute('aria-hidden', 'false');
        abrirModal(modal);
    }
    document.querySelectorAll('[data-campeon-osorno]').forEach(boton => {
        boton.addEventListener('click', event => {
            event.stopPropagation();
            mostrarCampeonOsorno(Number(boton.dataset.campeonOsorno));
        });
    });
    document.getElementById('campeonOsornoAnterior')?.addEventListener('click', () => {
        mostrarCampeonOsorno((campeonOsornoSeleccionado - 1 + campeonesOsorno.length) % campeonesOsorno.length);
    });
    document.getElementById('campeonOsornoSiguiente')?.addEventListener('click', () => {
        mostrarCampeonOsorno((campeonOsornoSeleccionado + 1) % campeonesOsorno.length);
    });
    const campeonOsornoDetalleModal = document.getElementById('campeonOsornoDetalleModal');
    document.getElementById('closeCampeonOsornoDetalleBtn')?.addEventListener('click', () => {
        campeonOsornoDetalleModal?.setAttribute('aria-hidden', 'true');
        cerrarModal(campeonOsornoDetalleModal);
    });
    campeonOsornoDetalleModal?.addEventListener('click', event => {
        if (event.target === campeonOsornoDetalleModal) {
            campeonOsornoDetalleModal.setAttribute('aria-hidden', 'true');
            cerrarModal(campeonOsornoDetalleModal);
        }
    });
    
    let directivaRenderizada = false;
    function cargarDirectiva() {
        const contenedorDirectiva = document.getElementById('directivaNetflixContainer');
        if (!contenedorDirectiva || directivaRenderizada) return;
        directivaRenderizada = true;
        directiva.forEach(m => {
            const card = document.createElement('div');
            card.className = 'gallery-card';
            const marco = document.createElement('div');
            marco.className = 'gallery-img';
            const imagen = crearImagenLocal(m.imagen, m.nombre);
            if (imagen) marco.appendChild(imagen); else marco.appendChild(crearIconoAjedrez());
            card.append(marco, crearTexto('h4', m.nombre), crearTexto('p', m.desc));
            if (imagen) {
                imagen.addEventListener('click', event => { event.stopPropagation(); openImageModal(imagen.src); });
                activarTarjetaImagen(card, imagen.src);
            }
            contenedorDirectiva.appendChild(card);
        });
    }
    
    let galeriaImagenesRenderizada = false;
    function categoriaGaleria(item) {
        const texto = `${item.nombre || ''} ${item.img || ''} ${item.desc || ''}`.toLowerCase();
        if (texto.includes('benjamin-lopez-ajedrez-osorno')) return 'Históricas';
        if (texto.includes('liga del ranco') || texto.includes('pacheco') || texto.includes('calder') || texto.includes('la unión') || texto.includes('la-union') || texto.includes('blitz')) return 'Recientes';
        if (texto.includes('escuela') || texto.includes('academia') || texto.includes('josefa') || texto.includes('tomás') || texto.includes('tomas')) return 'Escuela';
        if (texto.includes('bariloche') || texto.includes('histórica') || texto.includes('historica')) return 'Históricas';
        return 'Torneos';
    }
    function cargarGaleriaImagenes() {
        const contenedorGaleria = document.getElementById('galeriaNetflixContainer');
        const tabs = document.getElementById('galeriaTabs');
        if (!contenedorGaleria || galeriaImagenesRenderizada) return;
        galeriaImagenesRenderizada = true;
        const categorias = ['Álbumes', 'Todas', 'Recientes', 'Históricas', 'Escuela', 'Torneos'];
        const albumDe = item => {
            const texto = `${item.nombre || ''} ${item.img || ''} ${item.desc || ''}`.toLowerCase();
            if (texto.includes('bariloche')) return 'Bariloche';
            if (texto.includes('paseo patrimonial')) return 'Paseo Patrimonial Osorno';
            if (texto.includes('ranco')) return 'Liga del Ranco';
            if (texto.includes('blitz') || texto.includes('calder') || texto.includes('pacheco')) return 'Torneos Blitz';
            if (texto.includes('match') || texto.includes('valdivia') || texto.includes('puerto montt')) return 'Encuentros entre clubes';
            if (categoriaGaleria(item) === 'Escuela') return 'Escuela y jóvenes';
            if (categoriaGaleria(item) === 'Históricas') return 'Archivo histórico';
            if (texto.includes('2008') || texto.includes('2009') || texto.includes('2010') || texto.includes('2014') || texto.includes('2017') || texto.includes('2018') || texto.includes('2021')) return 'Archivo histórico';
            return 'Torneos y vida del club';
        };
        const albumes = [...galeriaImagenesList.reduce((grupos, item) => {
            const nombre = albumDe(item);
            if (!grupos.has(nombre)) grupos.set(nombre, []);
            grupos.get(nombre).push(item);
            return grupos;
        }, new Map()).entries()];
        function renderGaleria(categoria = 'Todas') {
            contenedorGaleria.replaceChildren();
            if (categoria === 'Álbumes' || categoria === 'Volver a álbumes') {
                albumes.forEach(([nombre, fotos]) => {
                    const card = document.createElement('button');
                    card.type = 'button';
                    card.className = 'gallery-card album-card';
                    card.setAttribute('aria-label', `Abrir álbum ${nombre}, ${fotos.length} fotos`);
                    card.style.cssText = 'text-align:left; padding:0; overflow:hidden; cursor:pointer; color:inherit; font:inherit;';
                    const marco = document.createElement('div');
                    marco.className = 'gallery-img';
                    const imagen = crearImagenLocal(fotos[0].img, nombre);
                    if (imagen) marco.appendChild(imagen); else marco.appendChild(crearIconoAjedrez());
                    card.append(marco, crearTexto('h4', nombre), crearTexto('p', `${fotos.length} ${fotos.length === 1 ? 'fotografía' : 'fotografías'}`));
                    card.addEventListener('click', () => {
                        renderGaleria('Álbum: ' + nombre);
                    });
                    contenedorGaleria.appendChild(card);
                });
                return;
            }
            if (categoria.startsWith('Álbum: ')) {
                const nombre = categoria.slice('Álbum: '.length);
                const volver = document.createElement('button');
                volver.type = 'button';
                volver.className = 'gallery-tab album-back';
                volver.textContent = '← Volver a la galería';
                volver.addEventListener('click', () => renderGaleria('Álbumes'));
                contenedorGaleria.appendChild(volver);
                (albumes.find(([album]) => album === nombre)?.[1] || []).forEach(img => {
                    const card = document.createElement('div');
                    card.className = 'gallery-card';
                    const marco = document.createElement('div');
                    marco.className = 'gallery-img';
                    const imagen = crearImagenLocal(img.img, img.nombre);
                    if (imagen) marco.appendChild(imagen); else marco.appendChild(crearIconoAjedrez());
                    card.append(marco, crearTexto('h4', img.nombre), crearTexto('p', img.desc));
                    if (imagen) {
                        imagen.addEventListener('click', event => { event.stopPropagation(); openImageModal(imagen.src); });
                        activarTarjetaImagen(card, imagen.src);
                    }
                    contenedorGaleria.appendChild(card);
                });
                return;
            }
            galeriaImagenesList
                .filter(item => categoria === 'Todas' || categoriaGaleria(item) === categoria)
                .forEach(img => {
                    const card = document.createElement('div');
                    card.className = 'gallery-card';
                    const marco = document.createElement('div');
                    marco.className = 'gallery-img';
                    const imagen = crearImagenLocal(img.img, img.nombre);
                    if (imagen) marco.appendChild(imagen); else marco.appendChild(crearIconoAjedrez());
                    card.append(marco, crearTexto('h4', img.nombre), crearTexto('p', img.desc));
                    if (imagen) {
                        imagen.addEventListener('click', event => { event.stopPropagation(); openImageModal(imagen.src); });
                        activarTarjetaImagen(card, imagen.src);
                    }
                    contenedorGaleria.appendChild(card);
                });
        }
        if (tabs) {
            tabs.replaceChildren();
            categorias.forEach((categoria, index) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `gallery-tab${index === 0 ? ' active' : ''}`;
                btn.textContent = categoria;
                btn.addEventListener('click', () => {
                    tabs.querySelectorAll('.gallery-tab').forEach(tab => tab.classList.remove('active'));
                    btn.classList.add('active');
                    renderGaleria(categoria);
                });
                tabs.appendChild(btn);
            });
        }
        renderGaleria('Álbumes');
    }
    
    cargarCampeonesMundiales();
    generarGaleria('promesasGrid', promesasFinal, true);
    generarGaleria('actividadesGrid', actividadesList);
    generarGaleria('rankingGrid', rankingList, false, true);
    
    function estadoFechaEvento(fechaISO) {
        if (!fechaISO) return 'Fecha por confirmar';
        const [anio, mes, dia] = fechaISO.split('-').map(Number);
        const fechaEvento = new Date(anio, mes - 1, dia);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        if (fechaEvento < hoy) return 'Realizado';
        if (fechaEvento.getTime() === hoy.getTime()) return 'Hoy';
        return 'Próxima fecha';
    }
    document.querySelectorAll('.tournament-block[data-event-date]').forEach(torneo => {
        const estado = estadoFechaEvento(torneo.dataset.eventDate);
        const etiqueta = torneo.querySelector('.active-banner');
        if (etiqueta) etiqueta.textContent = estado === 'Hoy' ? 'HOY' : estado.toUpperCase();
        torneo.classList.toggle('featured-event', estado === 'Próxima fecha' || estado === 'Hoy');
    });
    document.querySelectorAll('.actividad-item[data-event-date]').forEach(actividad => {
        const etiqueta = document.createElement('span');
        etiqueta.className = 'actividad-status';
        const estado = estadoFechaEvento(actividad.dataset.eventDate);
        etiqueta.textContent = estado === 'Hoy' ? 'HOY' : estado.toUpperCase();
        actividad.querySelector('.actividad-fecha')?.append(' ', etiqueta);
    });

    const contenedorTorneos = document.getElementById('listaTorneosEscolares');
    if (contenedorTorneos) {
        torneosEscolares.forEach(t => {
            const div = document.createElement('div');
            div.className = 'torneo-escolar-item';
            const estado = estadoFechaEvento(t.fechaISO);
            if (estado === 'Próxima fecha' || estado === 'Hoy') div.classList.add('destacado');
            const acciones = t.bases ? `<div class="torneo-escolar-acciones"><a href="${t.bases}" class="btn-descargar" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> Ver bases</a><a href="${t.bases}" class="btn-descargar" download><i class="fas fa-download"></i> Descargar bases</a>${t.basesAlt ? `<a href="${t.basesAlt}" class="btn-descargar" target="_blank" rel="noopener"><i class="fas fa-link"></i> Alternativo</a>` : ''}</div>` : '';
            const etiqueta = estado;
            const fecha = document.createElement('div');
            fecha.className = 'torneo-escolar-fecha';
            fecha.append(crearTexto('small', etiqueta), crearTexto('span', `📅 ${t.fecha}`));
            div.appendChild(fecha);
            div.appendChild(crearTexto('div', `📍 ${t.lugar}`, 'torneo-escolar-lugar'));
            if (t.nota) div.appendChild(crearTexto('div', t.nota, 'torneo-escolar-nota'));
            const bases = urlBlogSegura(t.bases, true);
            const basesAlt = urlBlogSegura(t.basesAlt, true);
            if (bases || basesAlt) {
                const acciones = document.createElement('div');
                acciones.className = 'torneo-escolar-acciones';
                if (bases) {
                    const ver = crearTexto('a', '📄 Ver bases', 'btn-descargar');
                    ver.href = bases; ver.target = '_blank'; ver.rel = 'noopener noreferrer';
                    const descargar = crearTexto('a', '⬇ Descargar bases', 'btn-descargar');
                    descargar.href = bases; descargar.download = '';
                    acciones.append(ver, descargar);
                }
                if (basesAlt) {
                    const alternativo = crearTexto('a', '🔗 Alternativo', 'btn-descargar');
                    alternativo.href = basesAlt; alternativo.target = '_blank'; alternativo.rel = 'noopener noreferrer';
                    acciones.appendChild(alternativo);
                }
                div.appendChild(acciones);
            }
            contenedorTorneos.appendChild(div);
        });
    }
    
    const colaboradoresContainer = document.getElementById('colaboradoresContainer');
    if (colaboradoresContainer) {
        const colaboradores = [
            { img: "logoclub.jpg", caption: "Instagram Club de Ajedrez Osorno", link: "https://www.instagram.com/club.ajedrez.osorno/" },
            { img: "carol-secretaria-club-osorno-ajedrez.jpg", caption: "Carol Moraga - Colaboradora" },
            { img: "galeria-torneo-2026/hector-aviles-colaborador.png", caption: "Héctor Avilés - Colaborador" },
            { img: "oscar-club-ajedrez-osorno.jpg", caption: "Oscar Gebauer - Colaborador destacado" },
            { img: "mario-ajedrez-club-osorno.jpg", caption: "Mario Sepulveda Avello - Gran socio" },
            { img: "logoclub.jpg", caption: "Próximamente" }
        ];
        colaboradores.forEach(c => {
            const div = document.createElement('div');
            div.className = 'colaborador-box';
            div.tabIndex = 0;
            div.setAttribute('role', 'button');
            div.setAttribute('aria-label', `Ver imagen de ${c.caption}`);
            const imagenUrl = urlBlogSegura(c.img);
            const imgEl = document.createElement('img');
            if (imagenUrl) imgEl.src = imagenUrl;
            imgEl.alt = String(c.caption || '');
            imgEl.loading = 'lazy';
            imgEl.decoding = 'async';
            imgEl.addEventListener('error', () => imgEl.remove(), { once: true });
            div.append(imgEl, crearTexto('div', c.caption, 'colaborador-caption'));
            const abrirColaborador = () => {
                if (c.link) return;
                if (!imgEl) return;
                openImageModal(imgEl.currentSrc || imgEl.src || c.img);
            };
            div.addEventListener('click', abrirColaborador);
            if (imgEl) imgEl.addEventListener('click', (e) => {
                e.stopPropagation();
                abrirColaborador();
            });
            div.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    abrirColaborador();
                }
            });
            colaboradoresContainer.appendChild(div);
        });
    }
    
    let paginaActual = 0;
    const eventosPorPagina = 3;
    function mostrarArchivo() {
        const inicio = paginaActual * eventosPorPagina;
        const fin = inicio + eventosPorPagina;
        const eventosPagina = eventosArchivo.slice(inicio, fin);
        const container = document.getElementById('archivoContent');
        if (!container) return;
        container.replaceChildren();
        eventosPagina.forEach(ev => {
            const div = document.createElement('div');
            div.className = 'archivo-evento';
            const imagenUrl = urlBlogSegura(ev.imagen);
            if (ev.imagen) {
                const imgEl = imagenUrl ? document.createElement('img') : null;
                if (imgEl) {
                    imgEl.src = imagenUrl;
                    imgEl.alt = String(ev.titulo || '');
                    imgEl.loading = 'lazy';
                    imgEl.addEventListener('error', () => imgEl.remove(), { once: true });
                    imgEl.addEventListener('click', () => openImageModal(imagenUrl));
                    div.appendChild(imgEl);
                }
            } else {
                const icono = document.createElement('div');
                icono.className = 'icono-ajedrez';
                const pieza = document.createElement('i');
                pieza.className = 'fas fa-chess-piece';
                icono.appendChild(pieza);
                div.appendChild(icono);
            }
            const info = document.createElement('div');
            info.className = 'archivo-info';
            info.append(crearTexto('h4', ev.titulo), crearTexto('div', ev.fecha, 'archivo-fecha'), crearTexto('p', ev.descripcion));
            div.appendChild(info);
            container.appendChild(div);
        });
        const paginacionDiv = document.getElementById('archivoPaginacion');
        if (paginacionDiv) {
            const totalPaginas = Math.ceil(eventosArchivo.length / eventosPorPagina);
            const anterior = crearTexto('button', '← Anteriores');
            anterior.id = 'btnAnterior';
            anterior.disabled = paginaActual === 0;
            anterior.addEventListener('click', () => { if (paginaActual > 0) { paginaActual--; mostrarArchivo(); } });
            const resumen = crearTexto('span', `Página ${paginaActual + 1} de ${totalPaginas}`);
            resumen.style.margin = '0 1rem';
            const siguiente = crearTexto('button', 'Siguientes →');
            siguiente.id = 'btnSiguiente';
            siguiente.disabled = paginaActual >= totalPaginas - 1;
            siguiente.addEventListener('click', () => { if (paginaActual < totalPaginas - 1) { paginaActual++; mostrarArchivo(); } });
            paginacionDiv.replaceChildren(anterior, resumen, siguiente);
        }
    }
    mostrarArchivo();
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabEventos = document.getElementById('tabEventos');
    const tabDescargas = document.getElementById('tabDescargas');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.getAttribute('data-tab');
            if (tab === 'eventos') { tabEventos.classList.add('active'); tabDescargas.classList.remove('active'); }
            else { tabEventos.classList.remove('active'); tabDescargas.classList.add('active'); }
        });
    });
    
    let votos = { Carlsen: 0, Gukesh: 0 };
    try {
        const guardados = JSON.parse(localStorage.getItem('votosFavorito') || 'null');
        if (guardados && typeof guardados === 'object' && !Array.isArray(guardados)) {
            const carlsen = Number.isSafeInteger(guardados.Carlsen) && guardados.Carlsen >= 0 ? guardados.Carlsen : 0;
            const gukeshGuardado = guardados.Gukesh ?? guardados.Ding;
            const gukesh = Number.isSafeInteger(gukeshGuardado) && gukeshGuardado >= 0 ? gukeshGuardado : 0;
            votos = { Carlsen: carlsen, Gukesh: gukesh };
        }
    } catch (error) {
        // Si el almacenamiento local está dañado o bloqueado, las votaciones comienzan en cero.
    }
    function actualizarBarras() {
        const total = votos.Carlsen + votos.Gukesh;
        const porcCarlsen = total === 0 ? 0 : (votos.Carlsen / total) * 100;
        const porcGukesh = total === 0 ? 0 : (votos.Gukesh / total) * 100;
        const barraCarlsen = document.getElementById('barraCarlsen');
        const barraGukesh = document.getElementById('barraGukesh');
        const porcCarlsenSpan = document.getElementById('porcCarlsen');
        const porcGukeshSpan = document.getElementById('porcGukesh');
        if (barraCarlsen) barraCarlsen.style.width = porcCarlsen + '%';
        if (barraGukesh) barraGukesh.style.width = porcGukesh + '%';
        if (porcCarlsenSpan) porcCarlsenSpan.innerText = Math.round(porcCarlsen) + '%';
        if (porcGukeshSpan) porcGukeshSpan.innerText = Math.round(porcGukesh) + '%';
    }
    actualizarBarras();
    const votarBtn = document.getElementById('votarBtn');
    if (votarBtn) {
        votarBtn.addEventListener('click', () => {
            const seleccion = document.querySelector('input[name="favorito"]:checked');
            if (!seleccion) return;
            const valor = seleccion.value;
            if (valor === 'Carlsen') votos.Carlsen++;
            else if (valor === 'Gukesh') votos.Gukesh++;
            delete votos.Ding;
            try { localStorage.setItem('votosFavorito', JSON.stringify(votos)); } catch (error) { /* El voto se refleja en la página aunque no se pueda guardar. */ }
            actualizarBarras();
            alert('¡Gracias por tu voto!');
        });
    }
    
    document.querySelectorAll('.modal-container img').forEach(img => {
        if (img.id !== 'imagenMaxSrc') {
            img.removeEventListener('click', openImageModal);
            img.addEventListener('click', (e) => { e.stopPropagation(); openImageModal(img.src); });
        }
    });
    
    function renderTesoreriaModal() {
        const container = document.getElementById('tesoreriaContent');
        if (!container) return;
        try { localStorage.removeItem('cuotasClub'); } catch (error) { /* El estado de cuotas no se conserva en este sitio. */ }
        const panel = document.createElement('div');
        panel.className = 'tesoreria-panel';
        panel.append(
            crearTexto('h3', 'Consulta de cuotas'),
            crearTexto('p', 'Por seguridad y privacidad, el estado individual de cuotas no se publica en esta página.'),
            crearTexto('p', 'Para consultar tu situación como socio, escribe al correo oficial del club o contacta directamente a tesorería.')
        );
        const correo = crearTexto('a', '✉ Consultar por correo', 'btn-compartir');
        correo.href = 'mailto:clubdeajedrezosorno@gmail.com?subject=Consulta%20de%20cuotas%20Club%20de%20Ajedrez%20Osorno';
        panel.appendChild(correo);
        container.replaceChildren(panel);
    }
    
    const tesoreriaModal = document.getElementById('tesoreriaModal');
    const closeTesoreria = document.getElementById('closeTesoreriaModalBtn');
    const tesoreriaLink = document.getElementById('tesoreriaLink');
    tesoreriaLink.addEventListener('click', async (e) => {
        e.preventDefault();
        history.pushState(null, '', '#tesoreria');
        await abrirDesdeHash();
    });
    closeTesoreria.addEventListener('click', () => cerrarModal(tesoreriaModal));
    tesoreriaModal.addEventListener('click', (e) => { if (e.target === tesoreriaModal) cerrarModal(tesoreriaModal); });
    
    function setupModal(triggerId, modalId, closeId) {
        const trigger = document.getElementById(triggerId);
        const modal = document.getElementById(modalId);
        const closeBtn = document.getElementById(closeId);
        if (trigger && modal && closeBtn) {
            trigger.addEventListener('click', async (e) => {
                const href = trigger.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    history.pushState(null, '', href);
                    await abrirDesdeHash();
                    return;
                }
                abrirModal(modal);
            });
            closeBtn.addEventListener('click', () => cerrarModal(modal));
            modal.addEventListener('click', (e) => { if (e.target === modal) cerrarModal(modal); });
        }
    }
    setupModal('championsTrigger', 'championsModal', 'closeModalBtn');
    setupModal('directivaLink', 'directivaModal', 'closeDirectivaModalBtn');
    setupModal('directivaSuperior', 'directivaModal', 'closeDirectivaModalBtn');
    setupModal('personalidadJuridica', 'personalidadModal', 'closePersonalidadModalBtn');
    setupModal('rankingSuperior', 'rankingModal', 'closeRankingModalBtn');
    setupModal('actividadesClubLink', 'actividadesClubModal', 'closeActividadesClubModalBtn');
    setupModal('jovenesPromesasLink', 'promesasModal', 'closePromesasModalBtn');
    setupModal('escuelaLink', 'escuelaModal', 'closeEscuelaModalBtn');
    setupModal('octubreHeaderTrigger', 'octubreDestacadosModal', 'closeOctubreDestacadosModalBtn');
    setupModal('archivoLink', 'archivoModal', 'closeArchivoModalBtn');
    setupModal('galeriaImagenesLink', 'galeriaImagenesModal', 'closeGaleriaImagenesModalBtn');
    setupModal('contactFormBtn', 'contactoModal', 'closeContactoModalBtn');
    setupModal('torneosEscolaresLink', 'torneosEscolaresModal', 'closeTorneosEscolaresModalBtn');
    setupModal('colaboradoresLink', 'colaboradoresModal', 'closeColaboradoresModalBtn');
    setupModal('quickTorneosEscolares', 'torneosEscolaresModal', 'closeTorneosEscolaresModalBtn');
    setupModal('quickEscuela', 'escuelaModal', 'closeEscuelaModalBtn');
    setupModal('quickRanking', 'rankingModal', 'closeRankingModalBtn');
    setupModal('quickGaleria', 'galeriaImagenesModal', 'closeGaleriaImagenesModalBtn');
    ['directivaLink', 'directivaSuperior'].forEach(id => document.getElementById(id)?.addEventListener('click', cargarDirectiva));
    ['galeriaImagenesLink', 'quickGaleria'].forEach(id => document.getElementById(id)?.addEventListener('click', cargarGaleriaImagenes));
    setupModal('quickArchivo', 'archivoModal', 'closeArchivoModalBtn');
    
    const campeonesLink = document.getElementById('campeonesMundialesLink');
    const campeonesModal = document.getElementById('campeonMundialModal');
    const closeCampeonesModal = document.getElementById('closeCampeonMundialBtn');
    if (campeonesLink && campeonesModal && closeCampeonesModal) {
        campeonesLink.addEventListener('click', () => { cargarCampeonesMundiales(); abrirModal(campeonesModal); });
        closeCampeonesModal.addEventListener('click', () => cerrarModal(campeonesModal));
        campeonesModal.addEventListener('click', (e) => { if (e.target === campeonesModal) cerrarModal(campeonesModal); });
    }
    
    const quickTesoreria = document.getElementById('quickTesoreria');
    if (quickTesoreria) {
        quickTesoreria.addEventListener('click', async () => {
            history.pushState(null, '', '#tesoreria');
            await abrirDesdeHash();
        });
    }
    
    const closeImagenMax = document.getElementById('closeImagenMaxModalBtn');
    const imagenMaxModal = document.getElementById('imagenMaxModal');
    if (closeImagenMax && imagenMaxModal) {
        closeImagenMax.addEventListener('click', () => cerrarModal(imagenMaxModal));
        imagenMaxModal.addEventListener('click', (e) => { if(e.target === imagenMaxModal) cerrarModal(imagenMaxModal); });
    }
    
    const foroLink = document.getElementById('foroLink');
    if (foroLink) foroLink.addEventListener('click', (e) => { e.preventDefault(); history.pushState(null, '', '#foroPanel'); document.getElementById('foroPanel').scrollIntoView({ behavior: 'smooth' }); });
    const noticiasLink = document.getElementById('noticiasLink');
    if (noticiasLink) noticiasLink.addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState(null, '', '#ultimasNoticias');
        document.querySelector('.blog-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    cargarGaleriaImagenes();
    cargarBlog();
    ordenarRanking();
    abrirDesdeHash();

    // Mejoras de interacción: estado activo, cierre con Escape y scroll bloqueado en modales.
    const sidebarNavigation = document.querySelector('.sidebar-left');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    function setMobileMenuOpen(open) {
        if (!sidebarNavigation || !mobileMenuToggle) return;
        sidebarNavigation.classList.toggle('is-open', open);
        mobileMenuToggle.setAttribute('aria-expanded', String(open));
        const icon = mobileMenuToggle.querySelector('i');
        icon?.classList.toggle('fa-bars', !open);
        icon?.classList.toggle('fa-xmark', open);
    }
    mobileMenuToggle?.addEventListener('click', () => setMobileMenuOpen(mobileMenuToggle.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('click', event => {
        if (sidebarNavigation && !sidebarNavigation.contains(event.target)) setMobileMenuOpen(false);
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMobileMenuOpen(false); });
    document.querySelectorAll('.main-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.main-menu li').forEach(item => item.classList.remove('active'));
            link.closest('li')?.classList.add('active');
            setMobileMenuOpen(false);
        });
    });

    const observerModal = new MutationObserver(() => {
        document.body.classList.toggle('modal-open', !!document.querySelector('.modal-overlay.active'));
    });
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        observerModal.observe(modal, { attributes: true, attributeFilter: ['class'] });
    });

    document.addEventListener('click', event => {
        const compartir = event.target.closest('[data-share-url]');
        if (compartir) compartirUrl(compartir.dataset.shareUrl, compartir.dataset.shareTitle);
        const imagen = event.target.closest('[data-open-image]');
        if (imagen) {
            const src = urlBlogSegura(imagen.dataset.openImage);
            if (src) openImageModal(src);
        }
    });

    document.addEventListener('error', event => {
        const imagen = event.target;
        if (!(imagen instanceof HTMLImageElement)) return;
        if (imagen.id === 'clubLogo') {
            imagen.style.display = 'none';
            const respaldoLogo = imagen.parentElement?.querySelector('.logo-fallback');
            if (respaldoLogo) respaldoLogo.style.display = 'block';
        } else if (imagen.classList.contains('destacado-collage')) {
            imagen.style.display = 'none';
        } else if (imagen.classList.contains('tesorero-foto')) {
            const columna = imagen.closest('.tesoreria-datos-grid > div');
            if (columna) columna.style.display = 'none';
        } else if (imagen.closest('.escuela-grid')) {
            imagen.style.display = 'none';
        }
    }, true);

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            if (modal.id === 'campeonOsornoDetalleModal') modal.setAttribute('aria-hidden', 'true');
            cerrarModal(modal);
        });
    });
