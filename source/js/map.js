ymaps.ready(init);
const geoObjects = [];
const marks = [
  {
    latitude: 59.938631,
    longitude: 30.323037,
    hintContent: '<div class="map__hint">CatEnergy</div>'
  }
]

let imageSource;

let mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (mobile) {
  imageSource = {
    src: '../img/icons/map-pin.svg',
    size: [67, 100],
    offset: [-33, -100]
  }
}else {
  imageSource = {
    src: '../img/icons/map-pin-desk.svg',
    size: [67, 100],
    offset: [-33, -100]
  }
};

function init(){
    // Создание карты.
    const myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323037],
        zoom: 14
    });

    marks.forEach(function(mark, i){
      geoObjects.push(new ymaps.Placemark([mark.latitude, mark.longitude], {
        hintContent: mark.hintContent
      },
      {
        iconLayout: 'default#image',
        iconImageHref: imageSource.src,
        iconImageSize: imageSource.size,
        iconImageOffset: imageSource.offset
      }))
    })

    myMap.geoObjects.add(geoObjects[0])
  }
