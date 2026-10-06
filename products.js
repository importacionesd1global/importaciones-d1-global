(function(){
function fmt(n){return 'S/ '+Number(n).toLocaleString('en-US')}
function cardPro(gb,p,e){
  return '<article class="product-card reveal" data-gen="18"><div class="product-img"><span class="product-badge">Preventa</span><img src="https://d1storeperu.github.io/d1-store/public/phones/18-pro-black.png" alt="iPhone 18 Pro"></div><div class="product-body"><h3>iPhone 18 Pro</h3><p class="product-spec">'+gb+' eSIM</p><div class="product-prices"><div class="price-main"><div class="label">A pedido</div><div class="amount">'+fmt(p)+'</div></div><div class="price-alt">Contra entrega<strong>'+fmt(e)+'</strong></div></div><a href="https://wa.me/51997610401?text='+encodeURIComponent('Hola, quiero iPhone 18 Pro '+gb)+'" class="btn btn-white btn-block" target="_blank" rel="noopener">Reservar</a></div></article>';
}
function swatches(){
  return '<div class="color-row"><span class="color-label">Color</span><div class="color-swatches">'+
  '<button type="button" class="color-btn active" data-color="plata" data-extra="0" data-img="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-silver.png" title="Blanco"></button>'+
  '<button type="button" class="color-btn" data-color="negro" data-extra="100" data-img="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-black.png" title="Negro"></button>'+
  '<button type="button" class="color-btn" data-color="glaciar" data-extra="200" data-img="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-glacier.png" title="Gris glaciar"></button>'+
  '<button type="button" class="color-btn" data-color="borgona" data-extra="300" data-img="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-burgundy.png" title="Borgoña"></button>'+
  '</div></div>';
}
function cardPM(gb,p,e,id){
  var idAttr=id?' id="'+id+'"':'';
  return '<article class="product-card reveal promx-card" data-gen="18" data-base-pedido="'+p+'" data-base-entrega="'+e+'" data-gb="'+gb+'" data-model="iPhone 18 Pro Max"'+idAttr+'>'+
  '<div class="product-img"><span class="product-badge">Preventa</span><img class="pm-img" src="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-silver.png" alt="iPhone 18 Pro Max"></div>'+
  '<div class="product-body"><h3>iPhone 18 Pro Max</h3><p class="product-spec">'+gb+' eSIM · <span class="color-name">Blanco</span></p>'+swatches()+
  '<div class="product-prices"><div class="price-main"><div class="label">A pedido</div><div class="amount pm-pedido">'+fmt(p)+'</div></div><div class="price-alt">Contra entrega<strong class="pm-entrega">'+fmt(e)+'</strong></div></div>'+
  '<a href="https://wa.me/51997610401?text='+encodeURIComponent('Hola, quiero iPhone 18 Pro Max '+gb+' Blanco')+'" class="btn btn-white btn-block pm-wa" target="_blank" rel="noopener">Reservar</a></div></article>';
}
function cardDuo(gb,p,e){
  return '<article class="product-card reveal" data-gen="18"><div class="product-img"><span class="product-badge">Preventa</span><img src="https://litter.catbox.moe/398y2p.png" alt="iPhone Dúo"></div><div class="product-body"><h3>iPhone Dúo</h3><p class="product-spec">'+gb+' · Entregas desde 25 oct</p><div class="product-prices"><div class="price-main"><div class="label">Preventa</div><div class="amount">'+fmt(p)+'</div></div><div class="price-alt">Contra entrega<strong>'+fmt(e)+'</strong></div></div><a href="https://wa.me/51997610401?text='+encodeURIComponent('Hola, quiero iPhone Dúo '+gb)+'" class="btn btn-white btn-block" target="_blank" rel="noopener">Reservar</a></div></article>';
}
function cardSimple(gen,name,spec,img,unit,p3,p10,badge){
  var b=badge?'<span class="product-badge">'+badge+'</span>':'';
  return '<article class="product-card reveal" data-gen="'+gen+'"><div class="product-img">'+b+'<img class="pm-img" src="'+img+'" alt="'+name+'"></div><div class="product-body"><h3>'+name+'</h3><p class="product-spec">'+spec+'</p><div class="product-prices"><div class="price-main"><div class="label">Unidad</div><div class="amount">'+fmt(unit)+'</div></div><div class="price-alt">+3: '+fmt(p3)+'<br>+10: '+fmt(p10)+'</div></div><a href="https://wa.me/51997610401?text='+encodeURIComponent('Hola, quiero '+name)+'" class="btn btn-white btn-block pm-wa" target="_blank" rel="noopener">Comprar</a></div></article>';
}
var cards='';
cards+=cardPro('256 GB',5799,6199);
cards+=cardPro('512 GB',6399,6799);
cards+=cardPro('1 TB',7799,7990);
cards+=cardPM('256 GB',6599,6999,'iphone18');
cards+=cardPM('512 GB',7399,7699);
cards+=cardPM('1 TB',7999,8599);
cards+=cardPM('2 TB',9490,9999);
cards+=cardDuo('256 GB',8390,8790);
cards+=cardDuo('512 GB',8990,9699);
cards+=cardDuo('1 TB',10390,11290);
cards+=cardDuo('2 TB',12390,13190);
cards+=cardSimple('17','iPhone 17','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/17-black.png',3699,3599,3299,'Nuevo');
cards+=cardSimple('17','iPhone 17 Pro','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/17-pro-blue.png',4499,4299,4099,'Nuevo');
cards+=cardSimple('17','iPhone 17 Pro Max','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/17-pro-max-blue.png',4999,4799,4499,'Nuevo');
cards+=cardSimple('16','iPhone 16','128 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-ultramarine.png',2899,2799,2499);
cards+=cardSimple('16','iPhone 16 Pro','128 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-pro-desert.png',3799,3599,3399);
cards+=cardSimple('16','iPhone 16 Pro Max','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-pro-max-black.png',4299,4099,3899);
cards+=cardSimple('15','iPhone 15','128 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/15-black.png',2599,2399,2099);
cards+=cardSimple('15','iPhone 15 Pro','128 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-pro-natural.png',3299,3099,2899);
cards+=cardSimple('15','iPhone 15 Pro Max','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-pro-max-black.png',3799,3599,3299);

var bodyHtml=
'<section class="gallery" id="promos"><div class="gallery-track" id="galleryTrack">'+
'<div class="gallery-slide"><img src="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-silver.png" alt="Blanco"><span class="gallery-caption">iPhone 18 Pro Max · Blanco</span></div>'+
'<div class="gallery-slide"><img src="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-black.png" alt="Negro"><span class="gallery-caption">iPhone 18 Pro Max · Negro</span></div>'+
'<div class="gallery-slide"><img src="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-glacier.png" alt="Glaciar"><span class="gallery-caption">iPhone 18 Pro Max · Gris glaciar</span></div>'+
'<div class="gallery-slide"><img src="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-burgundy.png" alt="Borgoña"><span class="gallery-caption">iPhone 18 Pro Max · Borgoña</span></div>'+
'</div>'+
'<button type="button" class="gallery-nav prev" id="galPrev" aria-label="Anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>'+
'<button type="button" class="gallery-nav next" id="galNext" aria-label="Siguiente"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>'+
'<div class="gallery-dots" id="galleryDots"></div></section>'+
'<div class="trust reveal">'+
'<div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>1 año de garantía oficial</div>'+
'<div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>Equipos nuevos en caja sellada</div>'+
'<div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>Tiendas en Lima, Cusco y Arequipa</div>'+
'<div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="15" height="13" rx="2"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>Retiro en tienda · Envíos a todo el Perú</div>'+
'</div>'+
'<section class="section" id="catalogo"><div class="section-header reveal"><h2>Catálogo iPhone</h2><p>Preventa iPhone 18 Pro / Pro Max / Dúo · Stock 17, 16 y 15</p></div>'+
'<div class="filter-tabs reveal" id="filters">'+
'<button type="button" class="active" data-filter="all">Todos</button>'+
'<button type="button" data-filter="18">iPhone 18</button>'+
'<button type="button" data-filter="17">iPhone 17</button>'+
'<button type="button" data-filter="16">iPhone 16</button>'+
'<button type="button" data-filter="15">iPhone 15</button>'+
'</div><div class="product-grid" id="productGrid"></div></section>'+
'<section class="section" id="precios-colores"><div class="section-header reveal"><h2>Precios iPhone 18 Pro Max por color</h2><p>Elige tu color y capacidad</p></div>'+
'<div class="price-table-wrap reveal"><table class="price-table"><thead><tr>'+
'<th>Capacidad</th>'+
'<th><span class="color-dot" style="background:linear-gradient(145deg,#e8e8e8,#b0b0b0)"></span>Blanco</th>'+
'<th><span class="color-dot" style="background:linear-gradient(145deg,#3a3a3a,#0a0a0a)"></span>Negro</th>'+
'<th><span class="color-dot" style="background:linear-gradient(145deg,#c5d4e0,#7a9bb0)"></span>Glaciar</th>'+
'<th><span class="color-dot" style="background:linear-gradient(145deg,#8b3a4a,#4a1520)"></span>Borgoña</th>'+
'</tr></thead><tbody>'+
'<tr><td><strong>256 GB</strong><br><span class="muted">A pedido / Contra entrega</span></td><td class="num">S/ 6,599<br><span class="muted">S/ 6,999</span></td><td class="num">S/ 6,699<br><span class="muted">S/ 7,099</span></td><td class="num">S/ 6,799<br><span class="muted">S/ 7,199</span></td><td class="num">S/ 6,899<br><span class="muted">S/ 7,299</span></td></tr>'+
'<tr><td><strong>512 GB</strong><br><span class="muted">A pedido / Contra entrega</span></td><td class="num">S/ 7,399<br><span class="muted">S/ 7,699</span></td><td class="num">S/ 7,499<br><span class="muted">S/ 7,799</span></td><td class="num">S/ 7,599<br><span class="muted">S/ 7,899</span></td><td class="num">S/ 7,699<br><span class="muted">S/ 7,999</span></td></tr>'+
'<tr><td><strong>1 TB</strong><br><span class="muted">A pedido / Contra entrega</span></td><td class="num">S/ 7,999<br><span class="muted">S/ 8,599</span></td><td class="num">S/ 8,099<br><span class="muted">S/ 8,699</span></td><td class="num">S/ 8,199<br><span class="muted">S/ 8,799</span></td><td class="num">S/ 8,299<br><span class="muted">S/ 8,899</span></td></tr>'+
'<tr><td><strong>2 TB</strong><br><span class="muted">A pedido / Contra entrega</span></td><td class="num">S/ 9,490<br><span class="muted">S/ 9,999</span></td><td class="num">S/ 9,590<br><span class="muted">S/ 10,099</span></td><td class="num">S/ 9,690<br><span class="muted">S/ 10,199</span></td><td class="num">S/ 9,790<br><span class="muted">S/ 10,299</span></td></tr>'+
'</tbody></table></div></section>'+
'<section class="section" id="tienda"><div class="section-header reveal"><h2>Tiendas y oficinas</h2><p>Retiro en tienda · Envíos a todo el Perú</p></div>'+
'<div class="store-box reveal"><h3>Referencia Cusco</h3><p class="addr">IMA SUMAQ 265 · 2do piso<br>Cusco, Perú<br><br>También contamos con tiendas en Lima, Cusco y Arequipa.</p>'+
'<a href="https://wa.me/51997610401?text=Hola%2C%20quiero%20saber%20dónde%20retirar" class="btn btn-white" target="_blank" rel="noopener">Consultar por WhatsApp</a></div></section>'+
'<div class="cta reveal"><h2>¿Listo para tu nuevo iPhone?</h2><p>Preventa abierta · Pago contra entrega · Garantía 1 año</p>'+
'<div class="cta-row"><a href="https://wa.me/51997610401?text=Hola%2C%20quiero%20comprar" class="btn btn-wa" target="_blank" rel="noopener">Escribir por WhatsApp</a>'+
'<a href="#catalogo" class="btn btn-ghost">Ver catálogo</a></div></div>'+
'<footer class="footer"><div class="footer-inner">'+
'<div class="footer-col"><h4>Importaciones D1 Global</h4><ul><li><a href="#catalogo">Catálogo</a></li><li><a href="#precios-colores">Precios</a></li><li><a href="#tienda">Tiendas</a></li></ul></div>'+
'<div class="footer-col"><h4>Contacto</h4><ul><li><a href="https://wa.me/51997610401" target="_blank" rel="noopener">WhatsApp 997 610 401</a></li></ul></div>'+
'<div class="footer-col"><h4>Información</h4><ul><li>Equipos nuevos sellados</li><li>Garantía oficial 1 año</li><li>Pago contra entrega</li></ul></div>'+
'</div><div class="footer-bottom">© 2026 Importaciones D1 Global · Perú</div></footer>';

function inject(){
  var pb=document.getElementById('pageBody');
  if(pb)pb.innerHTML=bodyHtml;
  var g=document.getElementById('productGrid');
  if(g)g.innerHTML=cards;
  document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('visible')});
  document.querySelectorAll('#filters button').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('#filters button').forEach(function(b){b.classList.remove('active')});
      btn.classList.add('active');
      var f=btn.dataset.filter;
      document.querySelectorAll('.product-card').forEach(function(c){
        if(f==='all'||c.dataset.gen===f)c.classList.remove('hidden');else c.classList.add('hidden');
      });
    });
  });
  var track=document.getElementById('galleryTrack'),dotsWrap=document.getElementById('galleryDots');
  if(track){
    var slides=track.querySelectorAll('.gallery-slide');var i=0;
    slides.forEach(function(_,idx){var b=document.createElement('button');b.type='button';if(idx===0)b.classList.add('active');b.addEventListener('click',function(){go(idx)});dotsWrap.appendChild(b)});
    var dots=dotsWrap.querySelectorAll('button');
    function go(n){i=(n+slides.length)%slides.length;track.style.transform='translateX(-'+(i*100)+'%)';dots.forEach(function(d,di){d.classList.toggle('active',di===i)})}
    var prev=document.getElementById('galPrev');var next=document.getElementById('galNext');
    if(prev)prev.addEventListener('click',function(){go(i-1)});
    if(next)next.addEventListener('click',function(){go(i+1)});
    setInterval(function(){go(i+1)},4500);
  }
  var colorNames={plata:'Blanco',negro:'Negro',glaciar:'Gris glaciar',borgona:'Borgoña'};
  document.querySelectorAll('.promx-card').forEach(function(card){
    var baseP=+card.dataset.basePedido, baseE=+card.dataset.baseEntrega, gb=card.dataset.gb, model=card.dataset.model||'iPhone 18 Pro Max';
    card.querySelectorAll('.color-btn').forEach(function(btn){
      btn.addEventListener('click',function(){
        card.querySelectorAll('.color-btn').forEach(function(b){b.classList.remove('active')});
        btn.classList.add('active');
        var extra=+btn.dataset.extra||0, color=btn.dataset.color, img=btn.dataset.img;
        if(card.querySelector('.pm-pedido')){card.querySelector('.pm-pedido').textContent=fmt(baseP+extra);card.querySelector('.pm-entrega').textContent=fmt(baseE+extra)}
        var cn=card.querySelector('.color-name');if(cn)cn.textContent=colorNames[color]||color;
        if(img){var im=card.querySelector('.pm-img');if(im)im.src=img}
        var wa=card.querySelector('.pm-wa');if(wa)wa.href='https://wa.me/51997610401?text='+encodeURIComponent('Hola, quiero '+model+' '+gb+' '+(colorNames[color]||color));
      });
    });
  });
  var obs=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.08});
  document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el)});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject);else inject();
})();
