/* Builds the project and award sections from data/content.js.
   Nothing here needs editing to add content. */
(function () {
  'use strict';

  var D = window.PORTFOLIO || { projects: [], awards: [], leadership: [] };
  var ICONS = window.ICONS || {};
  var page = document.body.getAttribute('data-page');
  var ARROW = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12L12 4M5 4h7v7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function param(name) { return new URLSearchParams(location.search).get(name); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function icon(name) {
    return '<span class="icon" aria-hidden="true"><svg viewBox="0 0 48 48">' + (ICONS[name] || ICONS.gear || '') + '</svg></span>';
  }
  function chips(list) {
    if (!list || !list.length) return '';
    return '<ul class="chips" aria-label="Technologies">' + list.map(function (t) { return '<li class="chip">' + esc(t) + '</li>'; }).join('') + '</ul>';
  }
  function paras(list) {
    return (list || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
  }
  function cover(item, cls, alt) {
    if (!item.cover) return '';
    return '<figure class="cover ' + cls + '"><img src="' + esc(item.cover) + '" alt="' + esc(alt) + '" loading="lazy"></figure>';
  }
  function setTitle(t) { document.title = t + ' | Ranuga Amarasinghe'; }

  /* ---------- videos ---------- */
  function youtubeId(url) {
    var m = String(url).match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
  }
  function videoHtml(v, fallbackTitle, i) {
    var url = typeof v === 'string' ? v : v.url;
    var title = (typeof v === 'object' && v.title) || (fallbackTitle + ' video ' + (i + 1));
    var id = youtubeId(url);
    if (id) {
      return '<div class="video"><button class="video__facade" type="button" data-yt="' + id + '" data-title="' + esc(title) + '" aria-label="Play video: ' + esc(title) + '" style="background-image:url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)">' +
        '<span class="video__play"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></span><span class="video__label">' + esc(title) + '</span></button></div>';
    }
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
      return '<div class="video"><video controls preload="metadata" title="' + esc(title) + '"><source src="' + esc(url) + '"></video></div>';
    }
    return '';
  }
  function videosSection(item, name) {
    var html = (item.videos || []).map(function (v, i) { return videoHtml(v, name, i); }).join('');
    return html ? '<section aria-labelledby="vid-h"><div class="prose"><h2 id="vid-h">' + ((item.videos || []).length > 1 ? 'Videos' : 'Video') + '</h2></div><div class="videos">' + html + '</div></section>' : '';
  }
  /* ---------- PDF documents ---------- */
  function documentsSection(item) {
    var docs = (item.documents || []).map(function (d) { return typeof d === 'string' ? { src: d } : d; }).filter(function (d) { return d && d.src; });
    if (!docs.length) return '';
    return '<section aria-labelledby="doc-h"><div class="prose"><h2 id="doc-h">' + (docs.length > 1 ? 'Documents' : 'Document') + '</h2></div><div class="pdfs">' +
      docs.map(function (d, i) {
        var title = d.title || ('Document ' + (i + 1));
        var src = esc(d.src);
        return '<div class="pdf"><div class="pdf__bar"><span class="pdf__title">' + esc(title) + '</span>' +
          '<span class="pdf__actions"><a class="text-link" href="' + src + '" target="_blank" rel="noopener noreferrer">Open in new tab ' + ARROW + '</a>' +
          '<a class="text-link" href="' + src + '" download>Download</a></span></div>' +
          '<iframe class="pdf__frame" src="' + src + '#view=FitH" title="' + esc(title) + '" loading="lazy"></iframe>' +
          '<p class="pdf__fallback">If the document does not display on your device, <a class="text-link" href="' + src + '" target="_blank" rel="noopener noreferrer">open the PDF</a>.</p></div>';
      }).join('') + '</div></section>';
  }
  function gallerySection(item, name) {
    var g = item.gallery || [];
    if (!g.length) return '';
    return '<section aria-labelledby="gal-h"><div class="prose"><h2 id="gal-h">Photos</h2></div><div class="gallery">' +
      g.map(function (p, i) {
        var cap = p.caption || (name + ' photo ' + (i + 1));
        return '<figure><button type="button" data-full="' + esc(p.src) + '" data-cap="' + esc(p.caption || '') + '" aria-label="Enlarge photo: ' + esc(cap) + '"><img src="' + esc(p.src) + '" alt="' + esc(cap) + '" loading="lazy"></button>' +
          (p.caption ? '<figcaption>' + esc(p.caption) + '</figcaption>' : '') + '</figure>';
      }).join('') + '</div></section>';
  }
  function linkButtons(item) {
    var l = item.links || [];
    if (!l.length) return '';
    return '<div class="detail__links">' + l.map(function (x) {
      var ext = /^https?:/i.test(x.url);
      return '<a class="button button--secondary" href="' + esc(x.url) + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + esc(x.label) + ' ' + ARROW + '</a>';
    }).join('') + '</div>';
  }
  function fact(label, value) { return value ? '<div><dt>' + label + '</dt><dd>' + esc(value) + '</dd></div>' : ''; }
  function pager(list, idx, hrefBase, key) {
    var prev = list[idx - 1], next = list[idx + 1];
    if (!prev && !next) return '';
    return '<nav class="pager" aria-label="More">' +
      (prev ? '<a href="' + hrefBase + prev.id + '" rel="prev"><span>Previous</span><strong>' + esc(prev.title) + '</strong></a>' : '<span></span>') +
      (next ? '<a href="' + hrefBase + next.id + '" rel="next"><span>Next</span><strong>' + esc(next.title) + '</strong></a>' : '') + '</nav>';
  }

  /* ---------- cards ---------- */
  function projectIndex(p) { return pad(D.projects.indexOf(p) + 1) + ' / ' + pad(D.projects.length); }
  function href(p) { return 'project.html?id=' + encodeURIComponent(p.id); }

  function teaser(p) {
    return '<a class="teaser reveal" href="' + href(p) + '">' +
      (p.cover ? cover(p, 'teaser__cover', p.title) + '' : '') +
      '<div class="teaser__top">' + (p.cover ? '' : icon(p.icon)) + '<span class="project__index">' + projectIndex(p) + '</span></div>' +
      '<span class="label">' + esc(p.category) + '</span><h3>' + esc(p.title) + '</h3>' +
      '<p class="teaser__sub">' + esc(p.subtitle) + '</p>' +
      (p.outcome ? '<p class="teaser__result">' + esc(p.outcome.replace(/\s*\(.*\)$/, '')) + '</p>' : '') +
      chips(p.tech) + '</a>';
  }
  function projectCard(p) {
    var media = p.cover
      ? '<div class="pcard__media"><img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" loading="lazy"></div>'
      : '';
    return '<a class="pcard reveal" href="' + href(p) + '" aria-label="' + esc(p.title) + ': open project details">' + media +
      '<div class="pcard__top">' + (p.cover ? '' : icon(p.icon)) + '<span class="project__index">' + projectIndex(p) + '</span></div>' +
      '<span class="label">' + esc(p.category) + '</span><h3>' + esc(p.title) + '</h3>' +
      '<p class="pcard__sub">' + esc(p.subtitle) + '</p><p class="pcard__text">' + esc(p.summary) + '</p>' +
      (p.outcome ? '<p class="pcard__result">' + esc(p.outcome) + '</p>' : '') + chips(p.tech) +
      '<span class="pcard__cta">View project details ' + ARROW + '</span></a>';
  }

  function awardEntry(a) {
    var links = (a.links || []).map(function (x) {
      var ext = /^https?:/i.test(x.url);
      return '<a class="text-link entry__link" href="' + esc(x.url) + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + esc(x.label) + ' ' + ARROW + '</a>';
    }).join('');
    return '<li class="entry' + (a.highlight ? ' entry--highlight' : '') + ' reveal"><span class="entry__date">' + esc(a.date) + '</span>' +
      '<h3 class="entry__title"><span class="badge">' + esc(a.badge) + '</span>' + esc(a.title) +
      (a.detail ? '<small>' + esc(a.detail) + '</small>' : '') + links + '</h3>' +
      '<span class="entry__org">' + esc(a.org) + '</span></li>';
  }
  function leadEntry(l) {
    var cls = /president/i.test(l.role) ? ' badge--president' : /chief organi[sz]er/i.test(l.role) ? ' badge--organizer' : '';
    return '<li class="entry reveal"><span class="entry__date">' + esc(l.date) + '</span>' +
      '<h3 class="entry__title"><span class="badge' + cls + '">' + esc(l.role) + '</span>' + esc(l.title) + (l.detail ? '<small>' + esc(l.detail) + '</small>' : '') + '</h3>' +
      '<span class="entry__org">' + esc(l.org) + '</span></li>';
  }

  /* ---------- pages ---------- */
  function renderHome() {
    var f = D.projects.filter(function (p) { return p.featured; }).slice(0, 4);
    if ($('featured-projects')) $('featured-projects').innerHTML = f.map(teaser).join('');
    if ($('recent-awards')) $('recent-awards').innerHTML = D.awards.slice(0, 4).map(awardEntry).join('');
    var s = document.querySelectorAll('[data-count]');
    s.forEach(function (el) {
      var k = el.getAttribute('data-count');
      el.textContent = k === 'projects' ? D.projects.length : k === 'awards' ? D.awards.length : D.leadership.length;
    });
  }

  function renderProjects() {
    $('project-list').innerHTML = D.projects.map(projectCard).join('') +
      '<div class="pcard pcard--cta reveal"><span class="label">Source and notes</span><h3>More on GitHub</h3><p>Code and build notes are added to GitHub as projects are documented.</p>' +
      '<a class="text-link" href="https://github.com/ranuga-amarasinghe" target="_blank" rel="noopener noreferrer">Visit GitHub ' + ARROW + '</a></div>';
  }

  function notFound(kind, back) {
    $('detail-root').innerHTML = '<div class="container section"><div class="empty-note">That ' + kind + ' could not be found. <a class="text-link" href="' + back + '">Go back to the list ' + ARROW + '</a></div></div>';
    setTitle('Not found');
  }

  function renderProject() {
    var id = param('id');
    var idx = D.projects.findIndex(function (p) { return p.id === id; });
    if (idx < 0) return notFound('project', 'projects.html');
    var p = D.projects[idx];
    setTitle(p.title);
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', p.summary);
    var desc = (p.description && p.description.length) ? p.description : [p.summary];
    $('detail-root').innerHTML =
      '<header class="page-head"><div class="container"><a class="back-link" href="projects.html">' + ARROW + ' All projects</a>' +
      '<span class="label">' + esc(p.category) + ' · ' + projectIndex(p) + '</span><h1>' + esc(p.title) + '</h1><p>' + esc(p.subtitle) + '</p></div></header>' +
      '<section class="section"><div class="container"><div class="detail"><div class="detail__main">' +
      cover(p, 'detail__hero', p.title) +
      '<div class="prose"><h2>About this project</h2>' + paras(desc) + '</div>' +
      videosSection(p, p.title) + gallerySection(p, p.title) + documentsSection(p) + '</div>' +
      '<aside class="detail__aside" aria-label="Project facts"><dl>' + fact('Role', p.role) + fact('Context', p.context) + fact('Tools', p.tools) + (p.outcome ? '<div><dt>Outcome</dt><dd class="outcome">' + esc(p.outcome) + '</dd></div>' : '') +
      (p.tech && p.tech.length ? '<div><dt>Technologies</dt><dd>' + chips(p.tech) + '</dd></div>' : '') + '</dl>' + linkButtons(p) + '</aside></div>' +
      pager(D.projects, idx, 'project.html?id=') + '</div></section>';
  }

  function renderAwards() {
    $('awards-list').innerHTML = D.awards.map(awardEntry).join('');
    $('leadership-list').innerHTML = D.leadership.map(leadEntry).join('');
  }

  /* ---------- interactions ---------- */
  function setupMedia() {
    document.addEventListener('click', function (e) {
      var f = e.target.closest('.video__facade');
      if (f) {
        var wrap = f.parentNode;
        wrap.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + f.getAttribute('data-yt') + '?autoplay=1&rel=0" title="' + esc(f.getAttribute('data-title')) + '" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
        return;
      }
      var b = e.target.closest('.gallery button');
      if (b) openLightbox(b.getAttribute('data-full'), b.getAttribute('data-cap'));
    });
  }
  function openLightbox(src, cap) {
    var d = document.getElementById('lightbox');
    if (!d) {
      d = document.createElement('dialog');
      d.id = 'lightbox';
      d.className = 'lightbox';
      d.setAttribute('aria-label', 'Photo viewer');
      d.innerHTML = '<button class="lightbox__close" type="button" aria-label="Close photo viewer">×</button><img alt=""><p></p>';
      document.body.appendChild(d);
      d.addEventListener('click', function (e) { if (e.target === d || e.target.closest('.lightbox__close')) d.close(); });
    }
    d.querySelector('img').src = src;
    d.querySelector('img').alt = cap || '';
    d.querySelector('p').textContent = cap || '';
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  }

  var routes = { home: renderHome, projects: renderProjects, project: renderProject, awards: renderAwards };
  if (routes[page]) routes[page]();
  setupMedia();
  document.dispatchEvent(new Event('content:rendered'));
})();
