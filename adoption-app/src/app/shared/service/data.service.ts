import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  homepageNews: Object[] = [
    {
      img: "https://foothillsanimalshelter.org/wp-content/uploads/2021/01/Adoption-General-Images.jpg",
      des: "Dogs and cats are by far the most loved animals across the board, receiving much more attention than other domestic animals. According to a survey conducted by American Pet Products Association (APPA) through 2019 to 2020, 84.9 million of households in the United States own a pet. Amongthem, about 50% of the households have at least one dog, and about 34% have at least one cat. According to their current statistics, there are 6.5 million cats and dogs entering shelters annually, and 3.2 million of them were luckily adopted.",
      src: "https://humanepro.org/page/pets-by-the-numbers"
    },
    {
      img: "https://www.friendshiphospital.com/wp-content/uploads/2017/06/Adopt-a-Cat-Month-e1559149119114.jpg",
      des: "Some people say cats are like chips — you can’t have just one! As one of the 85 million1 cat owners out there, you may be considering adding a new feline friend to your home. Whether your current cat is lonely, her companion cat recently passed away or you simply love cats, it is important to take a few precautions to ensure that your cat-to-cat introductions go as smoothly as possible.",
      src: "https://www.americanhumane.org/fact-sheet/introducing-cats-to-cats/"
    }
  ]

  dogBreedList: String[] = [
    'American stafford',
    'Border collie',
    'Bulldog',
    'Chihuahua',
    'German Shepherd',
    'Hound',
    'Husky',
    'Labrador',
    'Mixed',
    'Poodle',
    'Pug',
    'Shepherd mixed'
  ];

  catBreedList: String[] = [
    'American shorthair',
    'American medium hair',
    'American longhair',
    'British shorthair',
    'Maine',
    'Mixed',
    'Ragdoll'
  ];

  stateList: String[] = [
    'Pennsylvania',
    'New York City',
    'Washington D.C.'
  ];

  shelterList: String[] = [
    'Cat Castle',
    'City Pet Rescue',
    "Hope's Dream",
    'Pet House',
    'Scratching Post'
  ]
  constructor() { }
}
