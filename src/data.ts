import { Monument } from './types';

export const MONUMENTS: Monument[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    description: [
      'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
      'The mausoleum is the centerpiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.',
      'Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653.'
    ],
    builtYear: '1632–1653',
    architect: 'Ustad Ahmad Lahauri',
    significance: 'UNESCO World Heritage Site, New Seven Wonders of the World',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1000',
    nearbyAttractions: [
      {
        name: 'Agra Fort',
        description: 'A historical fort in the city of Agra in India.',
        distance: '2.5 km',
        image: 'https://images.unsplash.com/photo-1585462488224-15627fc9edad?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Mehtab Bagh',
        description: 'A charbagh garden complex located in Agra.',
        distance: '3.0 km',
        image: 'https://images.unsplash.com/photo-1598334398465-88916a4c44b8?auto=format&fit=crop&q=80&w=400'
      }
    ],
    restaurants: [
      { name: 'Peshawri', cuisine: 'North Indian', rating: 4.8, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' },
      { name: 'Esphahan', cuisine: 'Mughlai', rating: 4.7, image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400' }
    ],
    hotels: [
      { name: 'The Oberoi Amarvilas', priceRange: 'Luxury', rating: 5.0, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' },
      { name: 'ITC Mughal', priceRange: 'Premium', rating: 4.6, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400' }
    ],
    travelTips: [
      'Visit at sunrise for the best views and fewer crowds.',
      'Carry a valid ID as it is required for entry.',
      'Vehicles are not allowed within 500m of the Taj Mahal to prevent pollution.'
    ]
  },
  {
    id: 'qutub-minar',
    name: 'Qutub Minar',
    location: 'New Delhi, Delhi',
    description: [
      'The Qutub Minar is a minaret and "victory tower" that forms part of the Qutub complex, a UNESCO World Heritage Site in the Mehrauli area of New Delhi, India.',
      'The tower was built by Qutb-ud-din Aibak, the founder of the Delhi Sultanate, in 1192. It is a 73-metre (240 ft) tall tapering tower of five storeys, with a 14.3-metre (47 ft) base diameter, reducing to 2.7 metres (9 ft) at the top.',
      'It is built of red sandstone and marble. The tower contains a spiral staircase of 379 steps. It is surrounded by several other ancient and medieval structures and ruins, collectively known as the Qutub complex.'
    ],
    builtYear: '1192–1220',
    architect: 'Qutb-ud-din Aibak',
    significance: 'Tallest brick minaret in the world',
    image: 'https://images.unsplash.com/photo-1523544545175-92e04b96d26b?auto=format&fit=crop&q=80&w=1000',
    nearbyAttractions: [
      {
        name: 'Iron Pillar of Delhi',
        description: 'A 7-metre (23 ft) kirti stambha (column of victory) in the Qutub complex.',
        distance: '0.1 km',
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Garden of Five Senses',
        description: 'A park spread over 20 acres, in Said-Ul-Azaib village.',
        distance: '2.0 km',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400'
      }
    ],
    restaurants: [
      { name: 'Olive Bar & Kitchen', cuisine: 'Mediterranean', rating: 4.6, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' },
      { name: 'Qla', cuisine: 'European', rating: 4.5, image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400' }
    ],
    hotels: [
      { name: 'The Lodhi', priceRange: 'Luxury', rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' },
      { name: 'Sheraton New Delhi', priceRange: 'Premium', rating: 4.4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400' }
    ],
    travelTips: [
      'The complex is open from sunrise to sunset.',
      'Use the Delhi Metro (Yellow Line) to reach Qutub Minar station.',
      'The Iron Pillar is famous for its rust-resistant composition.'
    ]
  },
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal',
    location: 'Jaipur, Rajasthan',
    description: [
      'Hawa Mahal (English translation: "Palace of Winds" or "Palace of the Breeze") is a palace in Jaipur, India. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the zenana, or women\'s chambers.',
      'The structure was built in 1799 by Maharaja Sawai Pratap Singh, the grandson of Maharaja Sawai Jai Singh, who was the founder of Jaipur. He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace.',
      'Its unique five-floor exterior is akin to the honeycomb of a beehive with its 953 small windows called jharokhas decorated with intricate latticework.'
    ],
    builtYear: '1799',
    architect: 'Lal Chand Ustad',
    significance: 'Iconic landmark of the "Pink City"',
    image: 'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&q=80&w=1000',
    nearbyAttractions: [
      {
        name: 'City Palace',
        description: 'A palace complex in Jaipur, the seat of the Maharaja of Jaipur.',
        distance: '0.5 km',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Jantar Mantar',
        description: 'A collection of nineteen architectural astronomical instruments.',
        distance: '0.6 km',
        image: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc6bbd?auto=format&fit=crop&q=80&w=400'
      }
    ],
    restaurants: [
      { name: 'The Tattoo Cafe', cuisine: 'Cafe', rating: 4.4, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' },
      { name: 'Wind View Cafe', cuisine: 'Cafe', rating: 4.3, image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400' }
    ],
    hotels: [
      { name: 'Rambagh Palace', priceRange: 'Luxury', rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' },
      { name: 'Jai Mahal Palace', priceRange: 'Luxury', rating: 4.7, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400' }
    ],
    travelTips: [
      'The best view of the facade is from the cafes across the street.',
      'Visit early in the morning when the sun lights up the pink sandstone.',
      'The palace has no stairs; ramps lead to the upper floors.'
    ]
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    location: 'Konark, Odisha',
    description: [
      'Konark Sun Temple is a 13th-century CE (year 1250) Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri on the coastline of Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga Dynasty.',
      'Dedicated to the Hindu Sun God Surya, what remains of the temple complex has the appearance of a 100-foot (30 m) high chariot with immense wheels and horses, all carved from stone.',
      'The temple is a UNESCO World Heritage Site and is also featured on the Indian 10-rupee note to signify its importance to Indian cultural heritage.'
    ],
    builtYear: '1250',
    architect: 'Bisu Maharana',
    significance: 'UNESCO World Heritage Site, masterpiece of Odisha architecture',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=1000',
    nearbyAttractions: [
      {
        name: 'Chandrabhaga Beach',
        description: 'A beautiful beach located near the Konark Sun Temple.',
        distance: '3.0 km',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Puri Jagannath Temple',
        description: 'An important Hindu temple dedicated to Jagannath.',
        distance: '35.0 km',
        image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=400'
      }
    ],
    restaurants: [
      { name: 'Konark Restaurant', cuisine: 'Odia', rating: 4.2, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' }
    ],
    hotels: [
      { name: 'Lotus Resort', priceRange: 'Premium', rating: 4.3, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' }
    ],
    travelTips: [
      'The Konark Dance Festival is held here every December.',
      'Hire a government-approved guide to understand the intricate carvings.',
      'The wheels of the temple are actually sundials that can tell time.'
    ]
  }
];

