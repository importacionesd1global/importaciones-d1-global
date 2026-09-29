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
  return '<article class="product-card reveal" data-gen="18"><div class="product-img"><span class="product-badge">Preventa</span><img src="https://d1storeperu.github.io/d1-store/public/phones/18-pro-max-silver.png" alt="iPhone 18 Dúo"></div><div class="product-body"><h3>iPhone 18 Dúo</h3><p class="product-spec">'+gb+' · Entregas desde 25 oct</p><div class="product-prices"><div class="price-main"><div class="label">Preventa</div><div class="amount">'+fmt(p)+'</div></div><div class="price-alt">Contra entrega<strong>'+fmt(e)+'</strong></div></div><a href="https://wa.me/51997610401?text='+encodeURIComponent('Hola, quiero iPhone 18 Dúo '+gb)+'" class="btn btn-white btn-block" target="_blank" rel="noopener">Reservar</a></div></article>';
}
function cardSimple(gen,name,spec,img,unit,p3,p10,badge){
  var b=badge?'<span class="product-badge">'+badge+'</span>':'';
  return '<article class="product-card reveal" data-gen="'+gen+'"><div class="product-img">'+b+'<img class="pm-img" src="'+img+'" alt="'+name+'"></div><div class="product-body"><h3>'+name+'</h3><p class="product-spec">'+spec+'</p><div class="product-prices"><div class="price-main"><div class="label">Unidad</div><div class="amount">'+fmt(unit)+'</div></div><div class="price-alt">+3: '+fmt(p3)+'<br>+10: '+fmt(p10)+'</div></div><a href="https://wa.me/51997610401?text='+encodeURIComponent('Hola, quiero '+name)+'" class="btn btn-white btn-block pm-wa" target="_blank" rel="noopener">Comprar</a></div></article>';
}
var html='';
html+=cardPro('256 GB',5799,6199);
html+=cardPro('512 GB',6399,6799);
html+=cardPro('1 TB',7799,7990);
html+=cardPM('256 GB',6599,6999,'iphone18');
html+=cardPM('512 GB',7399,7699);
html+=cardPM('1 TB',7999,8599);
html+=cardPM('2 TB',9490,9999);
html+=cardDuo('256 GB',8390,8790);
html+=cardDuo('512 GB',8990,9699);
html+=cardDuo('1 TB',10390,11290);
html+=cardDuo('2 TB',12390,13190);
html+=cardSimple('17','iPhone 17','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/17-black.png',3699,3599,3299,'Nuevo');
html+=cardSimple('17','iPhone 17 Pro','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/17-pro-blue.png',4499,4299,4099,'Nuevo');
html+=cardSimple('17','iPhone 17 Pro Max','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/17-pro-max-blue.png',4999,4799,4499,'Nuevo');
html+=cardSimple('16','iPhone 16','128 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-ultramarine.png',2899,2799,2499);
html+=cardSimple('16','iPhone 16 Pro','128 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-pro-desert.png',3799,3599,3399);
html+=cardSimple('16','iPhone 16 Pro Max','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-pro-max-black.png',4299,4099,3899);
html+=cardSimple('15','iPhone 15','128 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/15-black.png',2599,2399,2099);
html+=cardSimple('15','iPhone 15 Pro','128 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-pro-natural.png',3299,3099,2899);
html+=cardSimple('15','iPhone 15 Pro Max','256 GB eSIM','https://d1storeperu.github.io/d1-store/public/phones/16-pro-max-black.png',3799,3599,3299);
function inject(){
  var g=document.getElementById('productGrid');
  if(!g)return;
  g.innerHTML=html;
  document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('visible')});
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
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject);else inject();
})();
