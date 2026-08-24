window.APP_CONFIG = {
  BUSINESS_NAME: 'Atacadão da Carne O Peitica',
  WHATSAPP: '5585989626829',
  WHATSAPP_BUSINESS_URL: 'https://wa.me/message/NW4MC6V5OVEIK1',
  ADDRESS: 'Rua Edison Martins, 530, Fortaleza - CE',
  MAPS_URL: 'https://www.google.com/maps/search/?api=1&query=Rua%20Edison%20Martins%2C%20530%2C%20Fortaleza%20-%20CE',
  INSTAGRAM_URL: 'https://www.instagram.com/atacadaodacarneopeitica?igsi=cDUyODF0ZTl5OGdv',
  SHEET_CSV_URL: '',
  ORDER_WEBAPP_URL: 'https://script.google.com/macros/s/AKfycbzD7yCVWL49ZNla13uAzNboyXQMSXHx01PLP0spp6niv_usPK-Fkx_lZjnlvvT4e1muVg/exec',
  DELIVERY_FEE: 0,
  DATA_TIMEOUT_MS: 7000,
  OFFICIAL_LOGO_URL: 'https://diegofreitas09.github.io/atacad-o-das-carnes-O-petica/logo-oficial.jpg'
};

(function(){
  const applyLogo=()=>{
    const img=document.getElementById('adminBrandLogo');
    if(img) img.src=window.APP_CONFIG.OFFICIAL_LOGO_URL;
  };
  const loadDeliveryAdmin=()=>{
    if(document.querySelector('script[data-delivery-admin]'))return;
    const s=document.createElement('script');
    s.src='./delivery-admin.js?v=1';
    s.dataset.deliveryAdmin='1';
    document.body.appendChild(s);
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',applyLogo,{once:true});
  else applyLogo();
  window.addEventListener('load',()=>setTimeout(loadDeliveryAdmin,150));
})();