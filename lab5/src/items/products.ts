import { Category } from "./categories";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  url: string;
  imgURL: string;
  category: Category;

}

export const products: Product[] = [
  {
    id: 1,
    name: "Сыр моцарелла Galbani",
    price: 1125,
    description: "Сыр Galbani мягкий моцарелла 48% 125 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-galbani-mjagkii-motsarella-48-125-g-101091778/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/h32/33937914101790/syr-galbani-motsarella-48-125-g-101091778-1.jpg",
    category: { name: "мягкий" }
  },
  {
    id: 2,
    name: "Сыр Galbani Santa Lucia",
    price: 1369,
    description: "Сыр Galbani Santa Lucia мягкий моцарелла 45% 150 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-galbani-santa-lucia-mjagkii-motsarella-45-150-g-101176726/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h53/33817745555486/syr-galbani-mozzarella-santa-lucia-myagkii-45-150-g-101176726-1.jpg",
    category: { name: "мягкий" }
  },
  {
    id: 3,
    name: "Сыр Hochland фетакса",
    price: 2215,
    description: "Сыр Hochland фетакса мягкий 45% 400 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-hochland-fetaksa-mjagkii-45-400-g-100235465/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h99/47119458926622/hochland-rassolnyj-fetaksa-45-400-g-100235465-1-Container.jpg",
    category: { name: "мягкий" }
  },
  {
    id: 4,
    name: "Сыр Pretto",
    price: 779,
    description: "Сыр Pretto мягкий рикотта 30% 200 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-pretto-mjagkii-rikotta-30-200-g-106680304/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/he0/62881287372830/syr-pretto-myagkii-rikotta-30-200-g-106680304-1.jpg",
    category: { name: "мягкий" }
  },
  {
    id: 5,
    name: "Сыр PRESIDENT Petit Brie",
    price: 1579,
    description: "Сыр PRESIDENT Petit Brie мягкий бри 60% 125 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-president-petit-brie-mjagkii-bri-60-125-g-101091075/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h77/34008230527006/syr-president-petit-brie-myagkii-bri-60-125-g-101091075-1.jpg",
    category: { name: "мягкий" }
  },
  {
    id: 6,
    name: "Сыр Hochland плавленый",
    price: 899,
    description: "Сыр Hochland плавленый Чизбургер 45% 150 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-hochland-plavlenyi-chizburger-45-150-g-101048939/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h1a/47117420396574/hochland-cizburger-150-g-101048939-1-Container.jpg",
    category: { name: "плавленый" }
  },
  {
    id: 7,
    name: "Сыр PRESIDENT плавленый",
    price: 2345,
    description: "Сыр PRESIDENT плавленый сливочный 45% 400 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-president-plavlenyi-slivochnyi-45-400-g-100236174/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/he4/47143159595038/syr-president-plavlenyi-slivochnyi-45-400-g-100236174-1.jpg",
    category: { name: "плавленый" }
  },
  {
    id: 8,
    name: "Сыр Плавыч Дружба",
    price: 153,
    description: "Сыр Плавыч Дружба плавленый сливочный 50% 70 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-plavych-druzhba-plavlenyi-slivochnyi-50-70-g-101157656/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h2f/47148345622558/plavyc-druzba-plavlenyj-50-70-g-101157656-1-Container.jpg",
    category: { name: "плавленый" }
  },
  {
    id: 9,
    name: "Сырный продукт Arla Foods Puck",
    price: 2129,
    description: "Сырный продукт Arla Foods Puck плавленый сливочный 68% 240 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syrnyi-produkt-arla-foods-puck-plavlenyi-slivochnyi-68-240-g-101052212/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h78/h2e/45194504536094/syr-arla-foods-syrnyi-produkt-240-g-101052212-1.jpg",
    category: { name: "плавленый" }
  },
  {
    id: 10,
    name: "Сыр Карат Дружба",
    price: 1019,
    description: "Сыр Карат Дружба плавленый сливочный 45% 200 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-karat-druzhba-plavlenyi-slivochnyi-45-200-g-106337277/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h4f/62235270643742/syr-karat-druzhba-plavlenyi-slivochnyi-45-200-g-106337277-1.jpg",
    category: { name: "плавленый" }
  },
  {
    id: 11,
    name: "Сыр Брест-Литовск",
    price: 1290,
    description: "Сыр Брест-Литовск полутвердый сливочный 50% 200 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-brest-litovsk-polutverdyi-slivochnyi-50-200-g-102726660/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/hfa/46860061212702/syr-brest-litovsk-slivochnyi-polutverdyi-50-200-g-102726660-1.jpg",
    category: { name: "полутвердый" }
  },
  {
    id: 12,
    name: "Сыр БЕЛОРУССКИЕ СЫРЫ",
    price: 1919,
    description: "Сыр БЕЛОРУССКИЕ СЫРЫ полутвердый сметанковый 50%",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-belorusskie-syry-polutverdyi-smetankovyi-50-102152199/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h73/65304557027358/syr-belorusskie-syry-smetankovyi-polutverdyi-50-102152199-1.jpg",
    category: { name: "полутвердый" }
  },
  {
    id: 13,
    name: "Сырный продукт СЫРОВАРОВ",
    price: 1627,
    description: "Сырный продукт СЫРОВАРОВ полутвердый сметанковый 50%",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syrnyi-produkt-syrovarov-polutverdyi-smetankovyi-50-103086554/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h14/51955826524190/syr-syrovarov-smetankovyi-syrnyi-produkt-slivochnyi-50-103086554-1.jpg",
    category: { name: "полутвердый" }
  },
  {
    id: 14,
    name: "Сыр Эмир",
    price: 2179,
    description: "Сыр Эмир полутвердый моцарелла 45%",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-emir-polutverdyi-motsarella-45-103036660/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/h55/47506228576286/syr-emir-polutverdyi-motsarella-45-103036660-1.jpg",
    category: { name: "полутвердый" }
  },
  {
    id: 15,
    name: "Сыр Эмир сулугуни",
    price: 1623,
    description: "Сыр Эмир полутвердый сулугуни 45%",
    rating: 4.5,
    url: "https://kaspi.kz/shop/p/syr-emir-polutverdyi-suluguni-45-103036666/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/hc8/47506229854238/emir-polutverdyj-suluguni-45-250-g-103036666-1.jpg",
    category: { name: "полутвердый" }
  },
  {
    id: 16,
    name: "Сыр Ламбер",
    price: 1899,
    description: "Сыр Ламбер твердый 50% 230 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-lamber-tverdyi-50-230-g-101102509/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h60/34009792643102/syr-lamber-tverdyi-50-230-g-101102509-1.jpg",
    category: { name: "твердый" }
  },
  {
    id: 17,
    name: "Сыр ДОБРЯНА Король Артур",
    price: 2398,
    description: "Сыр ДОБРЯНА Король Артур твердый сливочный 50%",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-dobrjana-korol-artur-tverdyi-slivochnyi-50-103306002/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/hd4/47980021973022/syr-dobryana-korol-artur-tverdyi-slivochnyi-50-103306002-1.jpg",
    category: { name: "твердый" }
  },
  {
    id: 18,
    name: "Сыр Cheese club",
    price: 2147,
    description: "Сыр Cheese club Нуар твердый голландский 45%",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-cheese-club-nuar-tverdyi-gollandskii-45-103306531/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/hc3/66700522979358/syr-cheese-club-nuar-tverdyi-gollandskii-45-103306531-1.jpg",
    category: { name: "твердый" }
  },
  {
    id: 19,
    name: "Сырный продукт Юговской",
    price: 1125,
    description: "Сырный продукт Юговской твердый голландский 50% 300 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syrnyi-produkt-jugovskoi-tverdyi-gollandskii-50-300-g-106950012/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h92/63378528829470/syr-yugovskii-syrnyi-produkt-gollandskii-50-300-g-106950012-1.jpg",
    category: { name: "твердый" }
  },
  {
    id: 20,
    name: "Сыр DZIUGAS",
    price: 1980,
    description: "Сыр DZIUGAS 36 твердый пармезан 40% 100 г",
    rating: 5,
    url: "https://kaspi.kz/shop/p/syr-dziugas-36-tverdyi-parmezan-40-100-g-103210464/?c=750000000#!/item",
    imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hd3/52655169830942/syr-dziugas-36-tverdyi-parmezan-40-100-g-103210464-1.jpg",
    category: { name: "твердый" }
  }
];
