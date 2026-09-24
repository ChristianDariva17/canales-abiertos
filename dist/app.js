(() => {
  "use strict";

  const PLAYLIST_URL = "canales_publicos_unificados.m3u";
  const PERU_CHANNELS = [
    { name: "TVPerú", region: "Nacional", type: "Web oficial", kind: "web", url: "https://www.tvperu.gob.pe/", note: "Señal pública nacional" },
    { name: "TVPerú Noticias", region: "Nacional", type: "IRTP Play", kind: "web", url: "https://www.irtpplay.gob.pe/tvperu/envivo", note: "Noticias y actualidad" },
    { name: "TVPerú Internacional", region: "Nacional", type: "IRTP Play", kind: "web", url: "https://www.irtpplay.gob.pe/tvperu/envivo", note: "Señal internacional" },
    { name: "Canal IPe", region: "Nacional", type: "IRTP Play", kind: "web", url: "https://www.irtpplay.gob.pe/tvperu/envivo", note: "Cultura y contenidos para jóvenes" },
    { name: "ATV", region: "Nacional", type: "Web oficial", kind: "web", url: "https://www.atv.pe/envivo-atv/", note: "Señal en vivo 24/7" },
    { name: "ATV Sur", region: "Arequipa · Sur", type: "Web oficial", kind: "web", url: "https://www.atv.pe/envivo-atvsur/", note: "Noticias y programación del sur" },
    { name: "América TV", region: "Nacional", type: "Web oficial", kind: "web", url: "https://www.americatv.com.pe/envivo", note: "Señal abierta nacional" },
    { name: "América tvGO", region: "Nacional", type: "Plataforma", kind: "web", url: "https://tvgo.americatv.com.pe/", note: "Señal en vivo y contenidos" },
    { name: "Canal N", region: "Nacional", type: "Plataforma", kind: "web", url: "https://tvgo.americatv.com.pe/", note: "Disponible dentro de América tvGO" },
    { name: "Latina", region: "Nacional", type: "Web oficial", kind: "web", url: "https://www.latina.pe/vivo/", note: "Señal en vivo" },
    { name: "Panamericana TV", region: "Nacional", type: "Web oficial", kind: "web", url: "https://www.panamericana.pe/tvenvivo", note: "Televisión en vivo gratis" },
    { name: "Willax TV", region: "Nacional", type: "Web oficial", kind: "web", url: "https://willax.pe/en-vivo", note: "Señal en vivo" },
    { name: "Exitosa TV", region: "Nacional", type: "Web oficial", kind: "web", url: "https://tv.exitosanoticias.pe/", note: "Noticias y actualidad" },
    { name: "USMP TV", region: "Nacional · Universitario", type: "Web oficial", kind: "web", url: "https://usmptv.pe/en-vivo", note: "Educación, cultura e información" },
    { name: "Justicia TV", region: "Nacional · Judicial", type: "Web oficial", kind: "web", url: "https://justiciatv.pj.gob.pe/programacion/", note: "Canal del Poder Judicial" },
    { name: "Congreso del Perú", region: "Nacional · Institucional", type: "YouTube oficial", kind: "youtube", url: "https://www.youtube.com/watch?v=YYpmnIjddHs", note: "Sesiones y transmisiones parlamentarias" },
    { name: "CTV Perú", region: "Nacional", type: "Web oficial", kind: "web", url: "https://www.ctv.pe/", note: "Noticias, entrevistas y reportajes" },
    { name: "Sol TV", region: "Norte", type: "Web oficial", kind: "web", url: "https://soltvperu.com/canales-en-vivo/", note: "Tumbes, Piura, Chiclayo, Cajamarca, Huaraz, Trujillo, Pacasmayo, Chepén y Virú" },
    { name: "TV Cosmos", region: "Trujillo · Norte", type: "Web oficial", kind: "web", url: "https://cosmos.pe/", note: "Cobertura en Trujillo, Chepén, Piura, Chiclayo y Chimbote" },
    { name: "TV Cosmos", region: "Trujillo · Norte", type: "YouTube oficial", kind: "youtube", url: "https://www.youtube.com/@tvcosmosenvivo3315", note: "Eventos y programación regional" },
    { name: "TV Wanka / Canal 21", region: "Huancayo · Junín", type: "Iframe oficial", kind: "web", url: "https://canal21huancayo.com/en-vivo/", note: "Noticias, cultura y actualidad de Huancayo" },
    { name: "TV Wanka / Canal 21", region: "Huancayo · Junín", type: "YouTube oficial", kind: "youtube", url: "https://www.youtube.com/@canal21huancayo", note: "Señal y contenidos de Huancayo" },
    { name: "Yurivisión TV", region: "Yurimaguas · Loreto", type: "Web oficial", kind: "web", url: "https://www.yurivision.com/", note: "Noticias, cultura y entretenimiento" },
    { name: "RN Televisión", region: "Yurimaguas · Loreto", type: "Iframe oficial", kind: "web", url: "https://radionoticiastv.com/", note: "Noticias regionales" },
    { name: "Palmeras TV", region: "Piura · Sechura", type: "Web oficial", kind: "web", url: "https://palmerastv.com/tv-en-vivo/", note: "Bajo Piura y Sechura" },
    { name: "Región Teve", region: "Callao", type: "Streaming web", kind: "web", url: "https://regionteve.com/", note: "Región TV y Callao al Día" },
    { name: "TV Sur Perú", region: "Juliaca · Puno", type: "Web oficial", kind: "web", url: "https://www.tvsur.pe/", note: "Noticias, cultura y televisión regional" },
    { name: "TV Sur Perú", region: "Juliaca · Puno", type: "YouTube oficial", kind: "youtube", url: "https://www.youtube.com/@tvsurperujuliaca", note: "Programación local y regional" },
    { name: "TVPerú Sur", region: "Sur macroregional", type: "YouTube oficial", kind: "youtube", url: "https://www.youtube.com/watch?v=Iq63Pw27sTc", note: "Arequipa, Tacna, Moquegua, Puno, Cusco, Apurímac e Ica" },
    { name: "TVPerú Norte", region: "Norte macroregional", type: "YouTube oficial", kind: "youtube", url: "https://www.youtube.com/watch?v=nDxGXOtGCko", note: "Cobertura informativa macroregional" },
    { name: "TVPerú Oriente", region: "Oriente macroregional", type: "Web oficial", kind: "web", url: "https://www.tvperu.gob.pe/", note: "Programación regional para la Amazonía" },
    { name: "TEVESUR Cusco", region: "Cusco", type: "YouTube", kind: "youtube", url: "https://www.youtube.com/watch?v=xrhotXL6i8A", note: "Referencia audiovisual; disponibilidad variable" },
    { name: "ECO TV", region: "Ica", type: "Sitio del canal", kind: "web", url: "https://ecoperu.tv/", note: "Presencia regional; disponibilidad variable" },
    { name: "TV Mundo", region: "Cusco · Arequipa", type: "Registro MTC", kind: "registry", url: "https://rnf.mtc.gob.pe/Television", note: "Consultar señal y autorización en el registro oficial" }
  ];
  const MOVIE_SOURCES = [
    { name: "RTVE Play · Cine", region: "España", access: "Gratis", kind: "free", url: "https://www.rtve.es/play/cine/", note: "Películas españolas e internacionales" },
    { name: "Cine Club Play · RTVE", region: "España", access: "Gratis", kind: "free", url: "https://www.rtve.es/play/videos/cine-club-play/", note: "Cine de autor e independiente" },
    { name: "CINE.AR Play", region: "Argentina", access: "Gratis", kind: "free", url: "https://cine.ar/", note: "Películas, documentales y series argentinas" },
    { name: "Pluto TV · Películas", region: "Latinoamérica · España", access: "Gratis", kind: "free", url: "https://pluto.tv/es", note: "Películas bajo demanda y canales de cine" },
    { name: "Plex · Películas gratis", region: "Según país", access: "Gratis", kind: "free", url: "https://watch.plex.tv/es/on-demand", note: "Películas y series con publicidad" },
    { name: "Rakuten TV Gratis", region: "España · Europa", access: "Gratis", kind: "free", url: "https://www.rakuten.tv/es", note: "Selección gratuita con anuncios" },
    { name: "ViX · Películas", region: "Latinoamérica", access: "Gratis + Premium", kind: "mixed", url: "https://vix.com/es-es/ondemandplus/peliculas", note: "Películas en español y títulos exclusivos" },
    { name: "Netflix · Cine español", region: "Según país", access: "Premium", kind: "premium", url: "https://www.netflix.com/es/browse/genre/100396", note: "Películas y series españolas por suscripción" },
    { name: "Filmin · Cine en español", region: "España", access: "Premium / alquiler", kind: "premium", url: "https://www.filmin.es/", note: "Cine español, latinoamericano e independiente" },
    { name: "MUBI · Películas", region: "Según país", access: "Premium", kind: "premium", url: "https://mubi.com/es-es/films", note: "Selección curada de cine internacional" },
    { name: "JustWatch · Buscador legal", region: "Según país", access: "Buscador", kind: "search", url: "https://www.justwatch.com/es", note: "Encontrá dónde ver cada película legalmente" }
  ];
  const state = { channels: [], filtered: [], current: null, hls: null };
  const el = {
    count: document.querySelector("#channel-count"),
    visible: document.querySelector("#visible-count"),
    list: document.querySelector("#channel-list"),
    empty: document.querySelector("#empty-state"),
    search: document.querySelector("#search-input"),
    group: document.querySelector("#group-select"),
    clear: document.querySelector("#clear-filters"),
    video: document.querySelector("#video"),
    player: document.querySelector("#player-frame"),
    placeholder: document.querySelector("#player-placeholder"),
    now: document.querySelector("#now-playing"),
    nowTitle: document.querySelector("#now-title"),
    nowGroup: document.querySelector("#now-group"),
    note: document.querySelector("#player-note"),
    stop: document.querySelector("#stop-button"),
    peruCount: document.querySelector("#peru-count"),
    peruSearch: document.querySelector("#peru-search"),
    peruRegion: document.querySelector("#peru-region-select"),
    peruType: document.querySelector("#peru-type-select"),
    peruDirectory: document.querySelector("#peru-directory"),
    peruEmpty: document.querySelector("#peru-empty-state"),
    clearPeru: document.querySelector("#clear-peru-filters"),
    movieCount: document.querySelector("#movie-count"),
    movieSearch: document.querySelector("#movie-search"),
    movieAccess: document.querySelector("#movie-access-select"),
    movieRegion: document.querySelector("#movie-region-select"),
    movieDirectory: document.querySelector("#movie-directory"),
    movieEmpty: document.querySelector("#movie-empty-state"),
    clearMovies: document.querySelector("#clear-movie-filters")
  };

  function parseAttribute(line, name) {
    const match = line.match(new RegExp(`${name}="([^"]*)"`, "i"));
    return match ? match[1] : "";
  }

  function parsePlaylist(text) {
    const lines = text.replace(/^\uFEFF/, "").replace(/\r/g, "").split("\n");
    const channels = [];
    let metadata = null;
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line) continue;
      if (line.startsWith("#EXTINF")) {
        const comma = line.indexOf(",");
        metadata = {
          id: parseAttribute(line, "tvg-id"),
          logo: parseAttribute(line, "tvg-logo"),
          group: parseAttribute(line, "group-title") || "General",
          name: comma >= 0 ? line.slice(comma + 1).trim() : "Señal sin nombre"
        };
      } else if (metadata && /^(https?|rtmp|rtsp|udp):\/\//i.test(line)) {
        channels.push({ ...metadata, url: line });
        metadata = null;
      }
    }
    return channels;
  }

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "TV";
  }

  function renderGroups() {
    const groups = [...new Set(state.channels.map((channel) => channel.group).filter(Boolean))].sort((a, b) => a.localeCompare(b, "es"));
    el.group.innerHTML = '<option value="all">Todas las categorías</option>' + groups.map((group) => `<option value="${escapeHtml(group)}">${escapeHtml(group)}</option>`).join("");
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  }

  function applyFilters() {
    const query = el.search.value.trim().toLocaleLowerCase("es");
    const group = el.group.value;
    state.filtered = state.channels.filter((channel) => {
      const matchesQuery = !query || `${channel.name} ${channel.group} ${channel.id}`.toLocaleLowerCase("es").includes(query);
      const matchesGroup = group === "all" || channel.group === group;
      return matchesQuery && matchesGroup;
    });
    el.visible.textContent = state.filtered.length.toLocaleString("es");
    renderList();
  }

  function renderList() {
    if (!state.filtered.length) {
      el.list.innerHTML = "";
      el.empty.hidden = false;
      return;
    }
    el.empty.hidden = true;
    const fragment = document.createDocumentFragment();
    state.filtered.forEach((channel) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `channel-card${state.current?.url === channel.url ? " is-active" : ""}`;
      button.setAttribute("aria-label", `Reproducir ${channel.name}`);
      button.innerHTML = `
        <span class="channel-logo">${channel.logo ? `<img src="${escapeHtml(channel.logo)}" alt="" loading="lazy" referrerpolicy="no-referrer" />` : escapeHtml(initials(channel.name))}</span>
        <span class="channel-info"><span class="channel-name">${escapeHtml(channel.name)}</span><span class="channel-meta">${escapeHtml(channel.group)}</span></span>
        <span class="channel-arrow" aria-hidden="true">›</span>`;
      button.addEventListener("click", () => playChannel(channel));
      fragment.appendChild(button);
    });
    el.list.replaceChildren(fragment);
  }

  function directoryInitials(name) {
    return name.split(/[\s/·]+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "PE";
  }

  function renderPeruFilters() {
    const regions = [...new Set(PERU_CHANNELS.map((channel) => channel.region))].sort((a, b) => a.localeCompare(b, "es"));
    const types = [...new Set(PERU_CHANNELS.map((channel) => channel.type))].sort((a, b) => a.localeCompare(b, "es"));
    el.peruRegion.innerHTML = '<option value="all">Todas las regiones</option>' + regions.map((region) => `<option value="${escapeHtml(region)}">${escapeHtml(region)}</option>`).join("");
    el.peruType.innerHTML = '<option value="all">Todas las fuentes</option>' + types.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join("");
    el.peruCount.textContent = PERU_CHANNELS.length.toLocaleString("es");
  }

  function renderPeruDirectory() {
    const query = el.peruSearch.value.trim().toLocaleLowerCase("es");
    const region = el.peruRegion.value;
    const type = el.peruType.value;
    const filtered = PERU_CHANNELS.filter((channel) => {
      const haystack = `${channel.name} ${channel.region} ${channel.type} ${channel.note}`.toLocaleLowerCase("es");
      return (!query || haystack.includes(query)) && (region === "all" || channel.region === region) && (type === "all" || channel.type === type);
    });
    el.peruEmpty.hidden = filtered.length > 0;
    el.peruDirectory.replaceChildren(...filtered.map((channel) => {
      const link = document.createElement("a");
      link.className = `directory-card directory-card-${channel.kind}`;
      link.href = channel.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerHTML = `
        <span class="directory-mark" aria-hidden="true">${escapeHtml(directoryInitials(channel.name))}</span>
        <span class="directory-info"><strong>${escapeHtml(channel.name)}</strong><span>${escapeHtml(channel.region)}</span><small>${escapeHtml(channel.note)}</small></span>
        <span class="directory-action"><span class="source-tag">${escapeHtml(channel.type)}</span><span aria-hidden="true">↗</span></span>`;
      return link;
    }));
  }

  function renderMovieFilters() {
    const accesses = [...new Set(MOVIE_SOURCES.map((source) => source.access))].sort((a, b) => a.localeCompare(b, "es"));
    const regions = [...new Set(MOVIE_SOURCES.map((source) => source.region))].sort((a, b) => a.localeCompare(b, "es"));
    el.movieAccess.innerHTML = '<option value="all">Todos los accesos</option>' + accesses.map((access) => `<option value="${escapeHtml(access)}">${escapeHtml(access)}</option>`).join("");
    el.movieRegion.innerHTML = '<option value="all">Todas las regiones</option>' + regions.map((region) => `<option value="${escapeHtml(region)}">${escapeHtml(region)}</option>`).join("");
    el.movieCount.textContent = MOVIE_SOURCES.length.toLocaleString("es");
  }

  function renderMovieDirectory() {
    const query = el.movieSearch.value.trim().toLocaleLowerCase("es");
    const access = el.movieAccess.value;
    const region = el.movieRegion.value;
    const filtered = MOVIE_SOURCES.filter((source) => {
      const haystack = `${source.name} ${source.region} ${source.access} ${source.note}`.toLocaleLowerCase("es");
      return (!query || haystack.includes(query)) && (access === "all" || source.access === access) && (region === "all" || source.region === region);
    });
    el.movieEmpty.hidden = filtered.length > 0;
    el.movieDirectory.replaceChildren(...filtered.map((source) => {
      const link = document.createElement("a");
      link.className = `directory-card movie-card movie-card-${source.kind}`;
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerHTML = `
        <span class="directory-mark" aria-hidden="true">${escapeHtml(directoryInitials(source.name))}</span>
        <span class="directory-info"><strong>${escapeHtml(source.name)}</strong><span>${escapeHtml(source.region)}</span><small>${escapeHtml(source.note)}</small></span>
        <span class="directory-action"><span class="source-tag">${escapeHtml(source.access)}</span><span aria-hidden="true">↗</span></span>`;
      return link;
    }));
  }

  function setNote(message, type = "normal") {
    el.note.textContent = message;
    el.note.dataset.type = type;
  }

  function stopPlayback() {
    if (state.hls) {
      state.hls.destroy();
      state.hls = null;
    }
    el.video.pause();
    el.video.removeAttribute("src");
    el.video.load();
    el.placeholder.classList.remove("is-hidden");
    el.player.classList.remove("has-video");
    el.now.hidden = true;
    state.current = null;
    renderList();
    setNote("Los streams públicos pueden tener geobloqueo o cambiar de dirección.");
  }

  function playChannel(channel) {
    state.current = channel;
    el.placeholder.classList.add("is-hidden");
    el.player.classList.add("has-video");
    el.now.hidden = false;
    el.nowTitle.textContent = channel.name;
    el.nowGroup.textContent = channel.group;
    setNote("Conectando con la señal…");
    renderList();
    el.player?.scrollIntoView({ block: "nearest" });

    if (state.hls) {
      state.hls.destroy();
      state.hls = null;
    }
    el.video.pause();
    el.video.removeAttribute("src");
    el.video.load();

    if (window.Hls && window.Hls.isSupported()) {
      state.hls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
      state.hls.loadSource(channel.url);
      state.hls.attachMedia(el.video);
      state.hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
        el.video.play().then(() => setNote("Reproduciendo señal pública.")).catch(() => setNote("Presioná reproducir para iniciar la señal."));
      });
      state.hls.on(window.Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) setNote("No se pudo reproducir esta señal. Puede estar caída o restringida.", "error");
      });
    } else if (el.video.canPlayType("application/vnd.apple.mpegurl")) {
      el.video.src = channel.url;
      el.video.addEventListener("loadedmetadata", () => el.video.play().catch(() => setNote("Presioná reproducir para iniciar la señal.")), { once: true });
    } else {
      setNote("Tu navegador no soporta reproducción HLS directa.", "error");
    }
  }

  async function loadPlaylist() {
    try {
      const response = await fetch(PLAYLIST_URL, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      state.channels = parsePlaylist(await response.text());
      el.count.textContent = state.channels.length.toLocaleString("es");
      renderGroups();
      applyFilters();
    } catch (error) {
      console.error(error);
      el.list.innerHTML = "";
      el.empty.hidden = false;
      el.empty.querySelector("p").textContent = "No se pudo cargar la lista en este momento.";
      setNote("Revisá la conexión y volvé a cargar la página.", "error");
    }
  }

  el.search.addEventListener("input", applyFilters);
  el.group.addEventListener("change", applyFilters);
  el.clear.addEventListener("click", () => { el.search.value = ""; el.group.value = "all"; applyFilters(); });
  el.stop.addEventListener("click", stopPlayback);
  el.peruSearch.addEventListener("input", renderPeruDirectory);
  el.peruRegion.addEventListener("change", renderPeruDirectory);
  el.peruType.addEventListener("change", renderPeruDirectory);
  el.clearPeru.addEventListener("click", () => { el.peruSearch.value = ""; el.peruRegion.value = "all"; el.peruType.value = "all"; renderPeruDirectory(); });
  el.movieSearch.addEventListener("input", renderMovieDirectory);
  el.movieAccess.addEventListener("change", renderMovieDirectory);
  el.movieRegion.addEventListener("change", renderMovieDirectory);
  el.clearMovies.addEventListener("click", () => { el.movieSearch.value = ""; el.movieAccess.value = "all"; el.movieRegion.value = "all"; renderMovieDirectory(); });
  el.video.addEventListener("error", () => { if (state.current) setNote("La señal no responde o no permite reproducción desde el navegador.", "error"); });
  renderPeruFilters();
  renderPeruDirectory();
  renderMovieFilters();
  renderMovieDirectory();
  loadPlaylist();
})();

