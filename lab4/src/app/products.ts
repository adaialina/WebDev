export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  url: string;
  imgURL: string;
}

export const products = [
  {
    id: 1,
    name: 'Сыр Hochland',
    price: 1299,
    description: 'Tворожный cыр Hochland, сливочный 60%, 220 г',
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-hochland-tvorozhnyi-slivochnyi-60-220-g-101176969/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/hc1/47118819754014/hochland-tvoroznyj-slivocnyj-60-220-g-101176969-1-Container.jpg",
  },
  {
    id: 2,
    name: 'Сыр Брест-Литовск',
    price: 1369,
    description: 'Полутвердый сливочный сыр, 50%, 200 г',
    rating: 4.1,
    url: "https://kaspi.kz/shop/p/syr-brest-litovsk-polutverdyi-slivochnyi-50-200-g-102726660/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/hfa/46860061212702/syr-brest-litovsk-slivochnyi-polutverdyi-50-200-g-102726660-1.jpg"
  },
  {
    id: 3,
    name: 'Сыр фетакса, Hochland',
    price: 1249,
    description: 'Сыр фетакса, Hochland, плавленый, 45%, 200 г',
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-hochland-fetaksa-plavlenyi-45-200-g-101176635/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h1c/47119144714270/hochland-plavlenyj-fetaksa-45-200-g-101176635-1-Container.jpg"
  },
  {
    id: 4,
    name: 'Сыр Galbani',
    price: 1125,
    description: 'Сыр Galbani, мягкий, моцарелла, 48%, 125 г',
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-galbani-mjagkii-motsarella-48-125-g-101091778/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/h32/33937914101790/syr-galbani-motsarella-48-125-g-101091778-1.jpg"
  },
  {
    id: 5,
    name: 'Сыр Ламбер',
    price: 1899,
    description: 'Сыр Ламбер, твердый, 50%, 230 г',
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-lamber-tverdyi-50-230-g-101102509/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h60/34009792643102/syr-lamber-tverdyi-50-230-g-101102509-1.jpg"
  },
  {
    id: 6,
    name: 'Сыр PRESIDENT',
    price: 2345,
    description: 'Сыр PRESIDENT, плавленый, сливочный, 45%, 400 г',
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-president-plavlenyi-slivochnyi-45-400-g-100236174/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/he4/47143159595038/syr-president-plavlenyi-slivochnyi-45-400-g-100236174-1.jpg"
  },
  {
    id: 7,
    name: 'Творожный сыр Hochland Almette',
    price: 949,
    description: 'Творожный сыр Hochland Almette, 60%, 150 г',
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-hochland-tvorozhnyi-almette-60-150-g-101106810/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/hf7/33184617594910/hochland-almette-tvoroznyj-60-150-g-101106810-1-Container.jpg"
  },  
  {
    id: 8,
    name: 'Сыр Умалат',
    price: 1089,
    description: 'Сыр Умалат, полутвердый, брынза, 45%, 200 г',
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-umalat-polutverdyi-brynza-45-200-g-106680248/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h76/62881171275806/syr-umalat-brynza-klassiceskaa-45-200gr-v-u-106680248-1.jpg"
  },  
  {
    id: 9,
    name: 'Сырный продукт СЫРОВАРОВ',
    price: 1627,
    description: 'Сырный продукт СЫРОВАРОВ, Российский полутвердый, сливочный, 50%',
    rating: 4.9,
    url: "https://kaspi.kz/shop/p/syrnyi-produkt-syrovarov-rossiiskii-polutverdyi-slivochnyi-50-103087311/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/hd7/51955825344542/syr-syrovarov-rossiiskii-polutverdyi-slivochnyi-50-103087311-1.jpg"
  },  
  {
    id: 10,
    name: 'Сыр Тульчинка',
    price: 1375,
    description: 'Сыр Тульчинка, полутвердый, моцарелла, 45%, 500 г',
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-tul-chinka-polutverdyi-motsarella-45-500-g-108830470/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAorKfBhC0ARIsAHDzslsRW5KPv9rzoV_ohS9RXUPK6e0MLWXq6jd--kqi_kClF06ePdJdviYaAuiDEALw_wcB#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/hf9/68836961157150/syr-tul-chinka-polutverdyi-motsarella-45-500g-108830470-1.jpg"
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/