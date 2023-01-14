import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateCityService {
  constructor() {}

  states() {
    return [
      { state_id: 1, name: 'Uttarakhand', capital: 'Dehradun' },
      { state_id: 2, name: 'Maharashtra', capital: 'Mumbai' },
    ];
  }

  cities() {
    return [
      { city_id: 1, name: 'Roorkee', pincode: 247667, state_id: 1 },
      { city_id: 2, name: 'Haridwar', pincode: 247667, state_id: 1 },
      { city_id: 3, name: 'Dehradun', pincode: 247667, state_id: 1 },
      { city_id: 4, name: 'pune', pincode: 411044, state_id: 2 },
      { city_id: 5, name: 'Mumbai', pincode: 230532, state_id: 2 },
    ];
  }

  placesToVisit() {
    return [
      {
        place_id: 1,
        name: 'IIT Roorke',
        rating: 4,
        description:
          'Indian Institute of Technology Roorkee (abbreviated IIT Roorkee) is a technical university located in Roorkee, Uttarakhand, India. It is the oldest engineering institution in India, and was founded as the College of Civil Engineering in British India in 1847',
        wiki_link: 'https://en.wikipedia.org/wiki/Roorkee',
        city_id: 1,
      },
      {
        place_id: 2,
        name: 'Civil line',
        rating: 3,
        description: 'information',
        wiki_link: 'https://en.wikipedia.org/wiki/Roorkee',
        city_id: 1,
      },
      {
        place_id: 3,
        name: 'Ram Nagar',
        rating: 3,
        description:
          'According to Census 2011 information the location code or village code of Ramnagar village is 056557. Ramnagar village is located in Roorkee tehsil of Hardwar district in Uttarakhand, India.',
        wiki_link: 'https://en.wikipedia.org/wiki/Roorkee',
        city_id: 1,
      },
      {
        place_id: 4,
        name: 'Har Ki Pauri',
        rating: 5,
        description:
          'Har Ki Pauri is a famous ghat on the banks of the Ganges in Haridwar in the Indian state of Uttarakhand. This revered place is the major landmark of the holy city of Haridwar.',
        wiki_link: 'https://en.wikipedia.org/wiki/Har_Ki_Pauri',
        city_id: 2,
      },
      {
        place_id: 5,
        name: 'Mansa Devi Temple',
        rating: 4,
        description:
          'Mansa Devi Temple, Haridwar (Hindi: मंसा देवी मंदिर, हरिद्वार) is a Hindu temple dedicated to goddess Mansa Devi in the holy city of Haridwar in the Uttarakhand state of India.',
        wiki_link:
          'https://en.wikipedia.org/wiki/Mansa_Devi_Temple%2C_Haridwar',
        city_id: 2,
      },
      {
        place_id: 6,
        name: 'Shantikunj',
        rating: 3,
        description:
          'Shantikunj was established in 1971 by Shriram Sharma and Bhagwati Devi Sharma on a small piece of land.[4][5] It was expanded over Gayatri Nagar.',
        wiki_link: 'https://en.wikipedia.org/wiki/Shantikunj',
        city_id: 2,
      },
      {
        place_id: 7,
        name: 'Forest Research Institute ',
        rating: 3,
        description:
          'Forest Research Institute established in 1906 to organize and lead forestry research in the country. Its history is synonymous with the evolution and development of scientific forestry not only in India but in the entire Indian subcontinent',
        wiki_link: 'https://en.wikipedia.org/wiki/Dehradun',
        city_id: 3,
      },
      {
        place_id: 8,
        name: "Robber's Cave",
        rating: 3,
        description:
          'The area surrounding the present-day park has been a hunting ground for hundreds of years. Archaeological evidence suggests that the earliest people were related to the builders of the Spiro Mounds.',
        wiki_link: 'https://en.wikipedia.org/wiki/Robbers_Cave_State_Park',
        city_id: 3,
      },
      {
        place_id: 9,
        name: 'Tapkeshwar Mahadev Mandir',
        rating: 3,
        description:
          'It is a temple of Pashupati Lord Shiva. It is situated beside a forest on the bank of the Asan river and the main deity (Shivalinga) is housed in a natural cave. According to the holy epic Mahabharata, Guru Drona is said to have resided in this cave for a period of time.',
        wiki_link: 'https://en.wikipedia.org/wiki/Dehradun',
        city_id: 3,
      },
      {
        place_id: 10,
        name: 'Osho Teerth Park',
        rating: 5,
        description:
          'Pune has a plethora of beautiful gardens that exhibit rich flora and fauna that is soothing to the eyes as well as to the soul. Amongst these beautiful gardens, one of the most popular parks is Osho Teerth Garden in Koregaon Park. While this garden looks spectacular today, this place has not always been the same. Want to know more about this beauty? Keep reading to know more.',
        wiki_link:
          'https://en.wikipedia.org/wiki/Special:Search?go=Go&search=Osho+Teerth+Park&ns0=1',
        city_id: 4,
      },
      {
        place_id: 11,
        name: 'Katraj Snake Park',
        rating: 4,
        description:
          'Situated in Katraj, Maharashtra, this place is an exciting outing for lovers of nature and wildlife. It is one of the most famous Pune tourist attractions and offers an excellent tour of fascinating wildlife spotting various snakes, reptiles, birds and turtles. ',
        wiki_link:
          'https://en.wikipedia.org/wiki/Special:Search?go=Go&search=Katraj+Snake+Park&ns0=1',
        city_id: 4,
      },
      {
        place_id: 12,
        name: 'Shaniwar Wada',
        rating: 3,
        description:
          'it was the great seat of the Peshwas of the Maratha Empire until 1818. Following the rise of the Maratha Empire, the palace became the center of Indian politics in the 18th century.',
        wiki_link: 'https://en.wikipedia.org/wiki/Shaniwar_Wada',
        city_id: 4,
      },
      {
        place_id: 13,
        name: 'Gateway Of India Mumbai',
        rating: 3,
        description:
          'The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai (Bombay), India. It was erected to commemorate the landing of King-Emperor George V, the first British monarch to visit India, in December 1911 at Strand Road near Wellington Fountain.',
        wiki_link: 'https://en.wikipedia.org/wiki/Gateway_of_India',
        city_id: 5,
      },
      {
        place_id: 14,
        name: 'Shree Siddhivinayak Temple ',
        rating: 4,
        description:
          'The temple has a small mandap with the shrine for Siddhi Vinayak ("Ganesha who grants your wish"). The wooden doors to the sanctum are carved with images of the Ashtavinayak (the eight manifestations of Ganesha in Maharashtra).',
        wiki_link: 'https://en.wikipedia.org/wiki/Siddhivinayak_Temple,_Mumbai',
        city_id: 5,
      },
      {
        place_id: 15,
        name: ' Elephanta Caves',
        rating: 3,
        description:
          'Elephanta Island, or Gharapuri, is about 11 km (6.8 mi) east of the Gateway of India in the Mumbai Harbour and less than 2 km (1.2 mi) west of Jawaharlal Nehru Port.',
        wiki_link: 'https://en.wikipedia.org/wiki/Elephanta_Caves',
        city_id: 5,
      },
    ];
  }

  imagesOfPlaces() {
    return [
      {
        img_id: 1,
        url: 'https://bl-i.thgim.com/public/news/xe4vo3/article66182896.ece/alternates/FREE_1200/IIT%20Roorkee%20Campus.jpeg',
        place_id: 1,
      },
      {
        img_id: 2,
        url: 'https://www.iitr.ac.in/assets/56f4da26ed956730309fa1488611ee0f13b0ac95ebb1bc9b5d210e31ff70e79c_IIT-Roorkee--550x330.jpg',
        place_id: 1,
      },
      {
        img_id: 3,
        url: 'https://www.rceroorkee.in/assets/new_front/images/roorkee-glance-img1.jpg',
        place_id: 2,
      },
      {
        img_id: 4,
        url: 'https://static2.tripoto.com/media/filter/nxl/img/341682/TripDocument/1486036217_img_20161202_004604.jpg',
        place_id: 2,
      },
      {
        img_id: 5,
        url: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/106453940_3196041577118455_5119664560465183644_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=4A_9RkMxllgAX9gZPmp&_nc_ht=scontent-bom1-1.xx&oh=00_AfDUvxCvJrG-wNE7ttM0moMXhrSrHW3VqB4V9qXnrBrtog&oe=63E761E8',
        place_id: 3,
      },
      {
        img_id: 6,
        url: 'https://b.zmtcdn.com/data/pictures/5/19766285/75e3a7be23fdff052f71b750a79e5f3b.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        place_id: 3,
      },
      {
        img_id: 7,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_laNdna3H42v0v5oP0XwwOey11QFyyUYeIQ&usqp=CAU',
        place_id: 4,
      },
      {
        img_id: 8,
        url: 'https://live.staticflickr.com/7313/10780533793_504cdc9b11_b.jpg',
        place_id: 4,
      },
      {
        img_id: 9,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCLUBBb0Mg8pZazHz1aTViioExEf96OIkyA&usqp=CAU',
        place_id: 5,
      },
      {
        img_id: 10,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70IBmgiervYdHQU13Ir7ddl-F80bu_KXaQA&usqp=CAU',
        place_id: 5,
      },
      {
        img_id: 11,
        url: 'https://content.jdmagicbox.com/comp/haridwar/v4/9999p1334.1334.181219112121.w6v4/catalogue/shanti-kunj-gayatri-parivar-shantikunj-haridwar-4ld95wsfxo.jpg?clr=3f6600',
        place_id: 6,
      },
      {
        img_id: 12,
        url: 'https://haridwar.tourismindia.co.in/images//tourist-places/shantikunj-gayatri-parivar-haridwar/shantikunj-gayatri-parivar-haridwar-tourism-holidays-closed-on-timings.jpg',
        place_id: 6,
      },
      {
        img_id: 13,
        url: 'https://www.tourmyindia.com/states/uttarakhand/images/forest--research-institute1.jpg',
        place_id: 7,
      },
      {
        img_id: 14,
        url: 'https://monomousumi.com/wp-content/uploads/dehradun-forest-research-institute-149436606112o.jpg',
        place_id: 7,
      },
      {
        img_id: 15,
        url: 'https://travelandhappiness.files.wordpress.com/2021/09/inside-robbers-cave-dehradun.jpg?w=1200',
        place_id: 8,
      },
      {
        img_id: 16,
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Amazing_view_of_Robber_Cave_Dehradun_Uttarakhand_India.jpg',
        place_id: 8,
      },
      {
        img_id: 17,
        url: 'https://rishikeshdaytour.com/blog/wp-content/uploads/2019/12/Tapkeshwar-Mahadev-Temple-Drona-Cave-Dehradun.jpg',
        place_id: 9,
      },
      {
        img_id: 18,
        url: 'https://statichindi.holidayrider.com/wp-content/uploads/2019/06/compressed-2ugo.jpg',
        place_id: 9,
      },
      {
        img_id: 19,
        url: 'https://www.osho.com/sites/default/files/styles/osho-content-page-inline/public/OSHO%20Teerth%20Park_5.jpg?itok=iDb5VH2A',
        place_id: 10,
      },
      {
        img_id: 20,
        url: 'https://th-i.thgim.com/public/migration_catalog/article12040596.ece/alternates/FREE_1200/15bghb_osho_garden.1',
        place_id: 10,
      },
      {
        img_id: 21,
        url: 'https://map.sahapedia.org/admin//assets/images/20210512041634-5065257596Parks_10_Rajiv_Gandhi_Zoological_Park_banner.jpg?__imr__=bannerArticle',
        place_id: 11,
      },
      {
        img_id: 22,
        url: 'https://www.holidify.com/images/cmsuploads/compressed/800px-Botanical_Gardens_-_Ootacamund_(Ooty)_-_India_03_20181005132052.JPG',
        place_id: 11,
      },
      {
        img_id: 23,
        url: 'https://yometro.com/images/places/shaniwar-wada-palace.jpg',
        place_id: 12,
      },
      {
        img_id: 24,
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Shaniwaarwada_Pune.jpg',
        place_id: 12,
      },
      {
        img_id: 25,
        url: 'https://yometro.com/images/places/gateway-of-india.jpg',
        place_id: 13,
      },
      {
        img_id: 26,
        url: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gateway-to-India_0.jpg',
        place_id: 13,
      },
      {
        img_id: 27,
        url: 'https://www.pinkvilla.com/imageresize/siddhivinayak-closed.jpg?width=752&t=pvorg',
        place_id: 14,
      },
      {
        img_id: 28,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVxi3xrEoBnCPFRGTq1VgnDYW6g7Ql_kdyA&usqp=CAU',
        place_id: 14,
      },
      {
        img_id: 29,
        url: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_694433434_20191213110339_20191213110412.png',
        place_id: 15,
      },
      {
        img_id: 30,
        url: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/cave-2_0.jpg',
        place_id: 15,
      },
    ];
  }
}
