// este componente tiene la función de agrupar las cards
// debe tomar un array de usuarios y por cada usuario renderizar un componente card

// por ahora copio la salida el get al back

import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";// importo el hook para conectarr el estado global al componente

const CardsContainer = ({currentDogs}) =>{

        /* EJEMPLO DEL ARRAY
          "id": "1",
          "name": "Affenpinscher",
          "min_weight": 3,
          "max_weight": 6,
          "min_height": 23,
          "max_height": 29,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
          "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
        */

    /*
    ANULO EL ARRAY TEMPORAL
    const doggs = [
        {
          "id": "1",
          "name": "Affenpinscher",
          "min_weight": 3,
          "max_weight": 6,
          "min_height": 23,
          "max_height": 29,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
          "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
        },
        {
          "id": "2",
          "name": "Afghan Hound",
          "min_weight": 23,
          "max_weight": 27,
          "min_height": 64,
          "max_height": 69,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
          "temperament": "Aloof, Clownish, Dignified, Independent, Happy"
        },
        {
          "id": "3",
          "name": "African Hunting Dog",
          "min_weight": 20,
          "max_weight": 30,
          "min_height": 76,
          "max_height": 1,
          "life_span": "11 years",
          "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
          "temperament": "Wild, Hardworking, Dutiful"
        },
        {
          "id": "4",
          "name": "Airedale Terrier",
          "min_weight": 18,
          "max_weight": 29,
          "min_height": 53,
          "max_height": 58,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
          "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous"
        },
        {
          "id": "5",
          "name": "Akbash Dog",
          "min_weight": 41,
          "max_weight": 54,
          "min_height": 71,
          "max_height": 86,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
          "temperament": "Loyal, Independent, Intelligent, Brave"
        },
        {
          "id": "6",
          "name": "Akita",
          "min_weight": 29,
          "max_weight": 52,
          "min_height": 61,
          "max_height": 71,
          "life_span": "10 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
          "temperament": "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous"
        },
        {
          "id": "7",
          "name": "Alapaha Blue Blood Bulldog",
          "min_weight": 25,
          "max_weight": 41,
          "min_height": 46,
          "max_height": 61,
          "life_span": "12 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
          "temperament": "Loving, Protective, Trainable, Dutiful, Responsible"
        },
        {
          "id": "8",
          "name": "Alaskan Husky",
          "min_weight": 17,
          "max_weight": 23,
          "min_height": 58,
          "max_height": 66,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
          "temperament": "Friendly, Energetic, Loyal, Gentle, Confident"
        },
        {
          "id": "9",
          "name": "Alaskan Malamute",
          "min_weight": 29,
          "max_weight": 45,
          "min_height": 58,
          "max_height": 64,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
          "temperament": "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful"
        },
        {
          "id": "10",
          "name": "American Bulldog",
          "min_weight": 27,
          "max_weight": 54,
          "min_height": 56,
          "max_height": 69,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg",
          "temperament": "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant"
        },
        {
          "id": "11",
          "name": "American Bully",
          "min_weight": 14,
          "max_weight": 68,
          "min_height": 36,
          "max_height": 43,
          "life_span": "8 – 15 years",
          "image": "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg",
          "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous"
        },
        {
          "id": "12",
          "name": "American Eskimo Dog",
          "min_weight": 9,
          "max_weight": 18,
          "min_height": 38,
          "max_height": 48,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg",
          "temperament": "Friendly, Alert, Reserved, Intelligent, Protective"
        },
        {
          "id": "13",
          "name": "American Eskimo Dog (Miniature)",
          "min_weight": 3,
          "max_weight": 5,
          "min_height": 23,
          "max_height": 30,
          "life_span": "13 – 15 years",
          "image": "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg",
          "temperament": "Friendly, Alert, Reserved, Intelligent, Protective"
        },
        {
          "id": "14",
          "name": "American Foxhound",
          "min_weight": 29,
          "max_weight": 34,
          "min_height": 53,
          "max_height": 71,
          "life_span": "8 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg",
          "temperament": "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving"
        },
        {
          "id": "15",
          "name": "American Pit Bull Terrier",
          "min_weight": 14,
          "max_weight": 27,
          "min_height": 43,
          "max_height": 53,
          "life_span": "10 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/HkC31gcNm.png",
          "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous"
        },
        {
          "id": "16",
          "name": "American Staffordshire Terrier",
          "min_weight": 23,
          "max_weight": 27,
          "min_height": 43,
          "max_height": 48,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg",
          "temperament": "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous"
        },
        {
          "id": "17",
          "name": "American Water Spaniel",
          "min_weight": 11,
          "max_weight": 20,
          "min_height": 38,
          "max_height": 46,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg",
          "temperament": "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable"
        },
        {
          "id": "18",
          "name": "Anatolian Shepherd Dog",
          "min_weight": 36,
          "max_weight": 68,
          "min_height": 69,
          "max_height": 74,
          "life_span": "11 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg",
          "temperament": "Steady, Bold, Independent, Confident, Intelligent, Proud"
        },
        {
          "id": "19",
          "name": "Appenzeller Sennenhund",
          "min_weight": 22,
          "max_weight": 25,
          "min_height": 51,
          "max_height": 56,
          "life_span": "12 – 14 years",
          "image": "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg",
          "temperament": "Reliable, Fearless, Energetic, Lively, Self-assured"
        },
        {
          "id": "21",
          "name": "Australian Cattle Dog",
          "min_weight": 20,
          "max_weight": 28,
          "min_height": 43,
          "max_height": 51,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg",
          "temperament": "Cautious, Energetic, Loyal, Obedient, Protective, Brave"
        },
        {
          "id": "22",
          "name": "Australian Kelpie",
          "min_weight": 14,
          "max_weight": 21,
          "min_height": 43,
          "max_height": 51,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg",
          "temperament": "Friendly, Energetic, Alert, Loyal, Intelligent, Eager"
        },
        {
          "id": "23",
          "name": "Australian Shepherd",
          "min_weight": 16,
          "max_weight": 29,
          "min_height": 46,
          "max_height": 58,
          "life_span": "12 - 16 years",
          "image": "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg",
          "temperament": "Good-natured, Affectionate, Intelligent, Active, Protective"
        },
        {
          "id": "24",
          "name": "Australian Terrier",
          "min_weight": 6,
          "max_weight": 7,
          "min_height": 25,
          "max_height": 28,
          "life_span": "15 years",
          "image": "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg",
          "temperament": "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous"
        },
        {
          "id": "25",
          "name": "Azawakh",
          "min_weight": 15,
          "max_weight": 25,
          "min_height": 58,
          "max_height": 74,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg",
          "temperament": "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined"
        },
        {
          "id": "26",
          "name": "Barbet",
          "min_weight": 18,
          "max_weight": 29,
          "min_height": 51,
          "max_height": 66,
          "life_span": "13 – 15 years",
          "image": "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg",
          "temperament": "Obedient, Companionable, Intelligent, Joyful"
        },
        {
          "id": "28",
          "name": "Basenji",
          "min_weight": 10,
          "max_weight": 11,
          "min_height": 41,
          "max_height": 43,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg",
          "temperament": "Affectionate, Energetic, Alert, Curious, Playful, Intelligent"
        },
        {
          "id": "29",
          "name": "Basset Bleu de Gascogne",
          "min_weight": 16,
          "max_weight": 18,
          "min_height": 33,
          "max_height": 38,
          "life_span": "10 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/BkMQll94X.jpg",
          "temperament": "Affectionate, Lively, Agile, Curious, Happy, Active"
        },
        {
          "id": "30",
          "name": "Basset Hound",
          "min_weight": 23,
          "max_weight": 29,
          "min_height": 36,
          "max_height": 1,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg",
          "temperament": "Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle"
        },
        {
          "id": "31",
          "name": "Beagle",
          "min_weight": 9,
          "max_weight": 16,
          "min_height": 33,
          "max_height": 38,
          "life_span": "13 - 16 years",
          "image": "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg",
          "temperament": "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent"
        },
        {
          "id": "32",
          "name": "Bearded Collie",
          "min_weight": 20,
          "max_weight": 25,
          "min_height": 51,
          "max_height": 56,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg",
          "temperament": "Self-confidence, Hardy, Lively, Alert, Intelligent, Active"
        },
        {
          "id": "33",
          "name": "Beauceron",
          "min_weight": 36,
          "max_weight": 50,
          "min_height": 61,
          "max_height": 70,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg",
          "temperament": "Fearless, Friendly, Intelligent, Protective, Calm"
        },
        {
          "id": "34",
          "name": "Bedlington Terrier",
          "min_weight": 8,
          "max_weight": 10,
          "min_height": 38,
          "max_height": 41,
          "life_span": "14 - 16 years",
          "image": "https://cdn2.thedogapi.com/images/ByK8gx947.jpg",
          "temperament": "Affectionate, Spirited, Intelligent, Good-tempered"
        },
        {
          "id": "36",
          "name": "Belgian Malinois",
          "min_weight": 18,
          "max_weight": 36,
          "min_height": 56,
          "max_height": 66,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg",
          "temperament": "Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective"
        },
        {
          "id": "38",
          "name": "Belgian Tervuren",
          "min_weight": 18,
          "max_weight": 29,
          "min_height": 56,
          "max_height": 66,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg",
          "temperament": "Energetic, Alert, Loyal, Intelligent, Attentive, Protective"
        },
        {
          "id": "41",
          "name": "Bernese Mountain Dog",
          "min_weight": 29,
          "max_weight": 54,
          "min_height": 58,
          "max_height": 70,
          "life_span": "7 - 10 years",
          "image": "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg",
          "temperament": "Affectionate, Loyal, Intelligent, Faithful"
        },
        {
          "id": "42",
          "name": "Bichon Frise",
          "min_weight": 5,
          "max_weight": 8,
          "min_height": 24,
          "max_height": 29,
          "life_span": "15 years",
          "image": "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg",
          "temperament": "Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive"
        },
        {
          "id": "43",
          "name": "Black and Tan Coonhound",
          "min_weight": 29,
          "max_weight": 45,
          "min_height": 58,
          "max_height": 69,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg",
          "temperament": "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable"
        },
        {
          "id": "45",
          "name": "Bloodhound",
          "min_weight": 36,
          "max_weight": 50,
          "min_height": 58,
          "max_height": 69,
          "life_span": "8 - 10 years",
          "image": "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg",
          "temperament": "Stubborn, Affectionate, Gentle, Even Tempered"
        },
        {
          "id": "47",
          "name": "Bluetick Coonhound",
          "min_weight": 20,
          "max_weight": 36,
          "min_height": 53,
          "max_height": 69,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg",
          "temperament": "Friendly, Intelligent, Active"
        },
        {
          "id": "48",
          "name": "Boerboel",
          "min_weight": 50,
          "max_weight": 91,
          "min_height": 56,
          "max_height": 69,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg",
          "temperament": "Obedient, Confident, Intelligent, Dominant, Territorial"
        },
        {
          "id": "50",
          "name": "Border Collie",
          "min_weight": 14,
          "max_weight": 20,
          "min_height": 46,
          "max_height": 56,
          "life_span": "12 - 16 years",
          "image": "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg",
          "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent"
        },
        {
          "id": "51",
          "name": "Border Terrier",
          "min_weight": 5,
          "max_weight": 7,
          "min_height": 28,
          "max_height": 41,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg",
          "temperament": "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered"
        },
        {
          "id": "53",
          "name": "Boston Terrier",
          "min_weight": 5,
          "max_weight": 11,
          "min_height": 41,
          "max_height": 43,
          "life_span": "11 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg",
          "temperament": "Friendly, Lively, Intelligent"
        },
        {
          "id": "54",
          "name": "Bouvier des Flandres",
          "min_weight": 32,
          "max_weight": 50,
          "min_height": 60,
          "max_height": 70,
          "life_span": "10 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg",
          "temperament": "Protective, Loyal, Gentle, Intelligent, Familial, Rational"
        },
        {
          "id": "55",
          "name": "Boxer",
          "min_weight": 23,
          "max_weight": 32,
          "min_height": 55,
          "max_height": 64,
          "life_span": "8 - 10 years",
          "image": "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg",
          "temperament": "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm"
        },
        {
          "id": "56",
          "name": "Boykin Spaniel",
          "min_weight": 11,
          "max_weight": 18,
          "min_height": 36,
          "max_height": 46,
          "life_span": "10 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg",
          "temperament": "Friendly, Energetic, Companionable, Intelligent, Eager, Trainable"
        },
        {
          "id": "57",
          "name": "Bracco Italiano",
          "min_weight": 25,
          "max_weight": 40,
          "min_height": 55,
          "max_height": 67,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg",
          "temperament": "Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable"
        },
        {
          "id": "58",
          "name": "Briard",
          "min_weight": 32,
          "max_weight": 41,
          "min_height": 56,
          "max_height": 69,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg",
          "temperament": "Fearless, Loyal, Obedient, Intelligent, Faithful, Protective"
        },
        {
          "id": "59",
          "name": "Brittany",
          "min_weight": 14,
          "max_weight": 20,
          "min_height": 44,
          "max_height": 52,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg",
          "temperament": "Agile, Adaptable, Quick, Intelligent, Attentive, Happy"
        },
        {
          "id": "61",
          "name": "Bull Terrier",
          "min_weight": 23,
          "max_weight": 32,
          "min_height": 53,
          "max_height": 56,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg",
          "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active"
        },
        {
          "id": "62",
          "name": "Bull Terrier (Miniature)",
          "min_weight": 11,
          "max_weight": 15,
          "min_height": 25,
          "max_height": 36,
          "life_span": "11 – 14 years",
          "image": "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg",
          "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial"
        },
        {
          "id": "64",
          "name": "Bullmastiff",
          "min_weight": 45,
          "max_weight": 59,
          "min_height": 61,
          "max_height": 69,
          "life_span": "8 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg",
          "temperament": "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous"
        },
        {
          "id": "65",
          "name": "Cairn Terrier",
          "min_weight": 6,
          "max_weight": 6,
          "min_height": 23,
          "max_height": 25,
          "life_span": "14 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg",
          "temperament": "Hardy, Fearless, Assertive, Gay, Intelligent, Active"
        },
        {
          "id": "67",
          "name": "Cane Corso",
          "min_weight": 40,
          "max_weight": 54,
          "min_height": 60,
          "max_height": 70,
          "life_span": "10 - 11 years",
          "image": "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg",
          "temperament": "Trainable, Reserved, Stable, Quiet, Even Tempered, Calm"
        },
        {
          "id": "68",
          "name": "Cardigan Welsh Corgi",
          "min_weight": 11,
          "max_weight": 17,
          "min_height": 27,
          "max_height": 32,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg",
          "temperament": "Affectionate, Devoted, Alert, Companionable, Intelligent, Active"
        },
        {
          "id": "69",
          "name": "Catahoula Leopard Dog",
          "min_weight": 23,
          "max_weight": 43,
          "min_height": 51,
          "max_height": 66,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg",
          "temperament": "Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving"
        },
        {
          "id": "70",
          "name": "Caucasian Shepherd (Ovcharka)",
          "min_weight": 36,
          "max_weight": 45,
          "min_height": 61,
          "max_height": 85,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg",
          "temperament": "Alert, Quick, Dominant, Powerful, Calm, Strong"
        },
        {
          "id": "71",
          "name": "Cavalier King Charles Spaniel",
          "min_weight": 6,
          "max_weight": 8,
          "min_height": 30,
          "max_height": 33,
          "life_span": "10 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg",
          "temperament": "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable"
        },
        {
          "id": "76",
          "name": "Chesapeake Bay Retriever",
          "min_weight": 25,
          "max_weight": 36,
          "min_height": 53,
          "max_height": 66,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg",
          "temperament": "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective"
        },
        {
          "id": "78",
          "name": "Chinese Crested",
          "min_weight": 5,
          "max_weight": 6,
          "min_height": 28,
          "max_height": 33,
          "life_span": "10 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg",
          "temperament": "Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy"
        },
        {
          "id": "79",
          "name": "Chinese Shar-Pei",
          "min_weight": 20,
          "max_weight": 27,
          "min_height": 46,
          "max_height": 51,
          "life_span": "10 years",
          "image": "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg",
          "temperament": "Suspicious, Affectionate, Devoted, Reserved, Independent, Loving"
        },
        {
          "id": "80",
          "name": "Chinook",
          "min_weight": 23,
          "max_weight": 41,
          "min_height": 56,
          "max_height": 66,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg",
          "temperament": "Friendly, Alert, Dignified, Intelligent, Calm"
        },
        {
          "id": "81",
          "name": "Chow Chow",
          "min_weight": 18,
          "max_weight": 32,
          "min_height": 43,
          "max_height": 51,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg",
          "temperament": "Aloof, Loyal, Independent, Quiet"
        },
        {
          "id": "84",
          "name": "Clumber Spaniel",
          "min_weight": 25,
          "max_weight": 39,
          "min_height": 43,
          "max_height": 51,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg",
          "temperament": "Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted"
        },
        {
          "id": "86",
          "name": "Cocker Spaniel",
          "min_weight": 9,
          "max_weight": 14,
          "min_height": 36,
          "max_height": 38,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg",
          "temperament": "Trainable, Friendly, Affectionate, Playful, Quiet, Faithful"
        },
        {
          "id": "87",
          "name": "Cocker Spaniel (American)",
          "min_weight": 9,
          "max_weight": 14,
          "min_height": 36,
          "max_height": 38,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/HkRcZe547.jpg",
          "temperament": "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry"
        },
        {
          "id": "89",
          "name": "Coton de Tulear",
          "min_weight": 4,
          "max_weight": 7,
          "min_height": 23,
          "max_height": 28,
          "life_span": "13 - 16 years",
          "image": "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg",
          "temperament": "Affectionate, Lively, Playful, Intelligent, Trainable, Vocal"
        },
        {
          "id": "92",
          "name": "Dalmatian",
          "min_weight": 23,
          "max_weight": 25,
          "min_height": 48,
          "max_height": 58,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg",
          "temperament": "Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active"
        },
        {
          "id": "94",
          "name": "Doberman Pinscher",
          "min_weight": 30,
          "max_weight": 40,
          "min_height": 61,
          "max_height": 71,
          "life_span": "10 years",
          "image": "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg",
          "temperament": "Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent"
        },
        {
          "id": "95",
          "name": "Dogo Argentino",
          "min_weight": 36,
          "max_weight": 45,
          "min_height": 60,
          "max_height": 69,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg",
          "temperament": "Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective"
        },
        {
          "id": "98",
          "name": "Dutch Shepherd",
          "min_weight": 23,
          "max_weight": 32,
          "min_height": 56,
          "max_height": 62,
          "life_span": "15 years",
          "image": "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg",
          "temperament": "Reliable, Affectionate, Alert, Loyal, Obedient, Trainable"
        },
        {
          "id": "101",
          "name": "English Setter",
          "min_weight": 20,
          "max_weight": 36,
          "min_height": 61,
          "max_height": 64,
          "life_span": "12 years",
          "image": "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg",
          "temperament": "Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented"
        },
        {
          "id": "102",
          "name": "English Shepherd",
          "min_weight": 20,
          "max_weight": 30,
          "min_height": 46,
          "max_height": 58,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg",
          "temperament": "Kind, Energetic, Independent, Adaptable, Intelligent, Bossy"
        },
        {
          "id": "103",
          "name": "English Springer Spaniel",
          "min_weight": 16,
          "max_weight": 23,
          "min_height": 48,
          "max_height": 51,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg",
          "temperament": "Affectionate, Cheerful, Alert, Intelligent, Attentive, Active"
        },
        {
          "id": "104",
          "name": "English Toy Spaniel",
          "min_weight": 4,
          "max_weight": 6,
          "min_height": 25,
          "max_height": 1,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg",
          "temperament": "Affectionate, Reserved, Playful, Gentle, Happy, Loving"
        },
        {
          "id": "105",
          "name": "English Toy Terrier",
          "min_weight": 3,
          "max_weight": 4,
          "min_height": 25,
          "max_height": 30,
          "life_span": "12 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg",
          "temperament": "Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable"
        },
        {
          "id": "107",
          "name": "Eurasier",
          "min_weight": 18,
          "max_weight": 32,
          "min_height": 52,
          "max_height": 60,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg",
          "temperament": "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm"
        },
        {
          "id": "108",
          "name": "Field Spaniel",
          "min_weight": 16,
          "max_weight": 23,
          "min_height": 43,
          "max_height": 46,
          "life_span": "11 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg",
          "temperament": "Docile, Cautious, Sociable, Sensitive, Adaptable, Familial"
        },
        {
          "id": "110",
          "name": "Finnish Lapphund",
          "min_weight": 15,
          "max_weight": 24,
          "min_height": 41,
          "max_height": 53,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg",
          "temperament": "Friendly, Keen, Faithful, Calm, Courageous"
        },
        {
          "id": "111",
          "name": "Finnish Spitz",
          "min_weight": 10,
          "max_weight": 13,
          "min_height": 39,
          "max_height": 51,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg",
          "temperament": "Playful, Loyal, Independent, Intelligent, Happy, Vocal"
        },
        {
          "id": "113",
          "name": "French Bulldog",
          "min_weight": 13,
          "max_weight": 1,
          "min_height": 28,
          "max_height": 30,
          "life_span": "9 - 11 years",
          "image": "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg",
          "temperament": "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright"
        },
        {
          "id": "114",
          "name": "German Pinscher",
          "min_weight": 11,
          "max_weight": 20,
          "min_height": 43,
          "max_height": 51,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg",
          "temperament": "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial"
        },
        {
          "id": "115",
          "name": "German Shepherd Dog",
          "min_weight": 23,
          "max_weight": 41,
          "min_height": 56,
          "max_height": 66,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg",
          "temperament": "Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous"
        },
        {
          "id": "116",
          "name": "German Shorthaired Pointer",
          "min_weight": 20,
          "max_weight": 32,
          "min_height": 53,
          "max_height": 64,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg",
          "temperament": "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable"
        },
        {
          "id": "119",
          "name": "Giant Schnauzer",
          "min_weight": 29,
          "max_weight": 41,
          "min_height": 60,
          "max_height": 70,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg",
          "temperament": "Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful"
        },
        {
          "id": "120",
          "name": "Glen of Imaal Terrier",
          "min_weight": 15,
          "max_weight": 18,
          "min_height": 32,
          "max_height": 36,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg",
          "temperament": "Spirited, Agile, Loyal, Gentle, Active, Courageous"
        },
        {
          "id": "121",
          "name": "Golden Retriever",
          "min_weight": 25,
          "max_weight": 34,
          "min_height": 55,
          "max_height": 61,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg",
          "temperament": "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident"
        },
        {
          "id": "123",
          "name": "Gordon Setter",
          "min_weight": 20,
          "max_weight": 36,
          "min_height": 58,
          "max_height": 69,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg",
          "temperament": "Fearless, Alert, Loyal, Confident, Gay, Eager"
        },
        {
          "id": "124",
          "name": "Great Dane",
          "min_weight": 50,
          "max_weight": 86,
          "min_height": 71,
          "max_height": 81,
          "life_span": "7 - 10 years",
          "image": "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg",
          "temperament": "Friendly, Devoted, Reserved, Gentle, Confident, Loving"
        },
        {
          "id": "125",
          "name": "Great Pyrenees",
          "min_weight": 39,
          "max_weight": 52,
          "min_height": 64,
          "max_height": 81,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/B12uzg9V7.png",
          "temperament": "Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident"
        },
        {
          "id": "127",
          "name": "Greyhound",
          "min_weight": 23,
          "max_weight": 32,
          "min_height": 69,
          "max_height": 76,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg",
          "temperament": "Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered"
        },
        {
          "id": "128",
          "name": "Griffon Bruxellois",
          "min_weight": 5,
          "max_weight": 1,
          "min_height": 23,
          "max_height": 28,
          "life_span": "10 – 15 years",
          "image": "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg",
          "temperament": "Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful"
        },
        {
          "id": "129",
          "name": "Harrier",
          "min_weight": 18,
          "max_weight": 27,
          "min_height": 46,
          "max_height": 56,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg",
          "temperament": "Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active"
        },
        {
          "id": "130",
          "name": "Havanese",
          "min_weight": 3,
          "max_weight": 6,
          "min_height": 22,
          "max_height": 29,
          "life_span": "14 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg",
          "temperament": "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent"
        },
        {
          "id": "134",
          "name": "Irish Setter",
          "min_weight": 16,
          "max_weight": 32,
          "min_height": 61,
          "max_height": 69,
          "life_span": "10 - 11 years",
          "image": "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg",
          "temperament": "Affectionate, Energetic, Lively, Independent, Playful, Companionable"
        },
        {
          "id": "135",
          "name": "Irish Terrier",
          "min_weight": 11,
          "max_weight": 12,
          "min_height": 46,
          "max_height": 1,
          "life_span": "12 - 16 years",
          "image": "https://cdn2.thedogapi.com/images/By-hGecVX.jpg",
          "temperament": "Respectful, Lively, Intelligent, Dominant, Protective, Trainable"
        },
        {
          "id": "137",
          "name": "Irish Wolfhound",
          "min_weight": 48,
          "max_weight": 82,
          "min_height": 76,
          "max_height": 89,
          "life_span": "6 - 8 years",
          "image": "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg",
          "temperament": "Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous"
        },
        {
          "id": "138",
          "name": "Italian Greyhound",
          "min_weight": 3,
          "max_weight": 7,
          "min_height": 33,
          "max_height": 38,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg",
          "temperament": "Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent"
        },
        {
          "id": "140",
          "name": "Japanese Chin",
          "min_weight": 2,
          "max_weight": 4,
          "min_height": 20,
          "max_height": 28,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg",
          "temperament": "Alert, Loyal, Independent, Intelligent, Loving, Cat-like"
        },
        {
          "id": "141",
          "name": "Japanese Spitz",
          "min_weight": 7,
          "max_weight": 9,
          "min_height": 30,
          "max_height": 38,
          "life_span": "10 – 16 years",
          "image": "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg",
          "temperament": "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud"
        },
        {
          "id": "142",
          "name": "Keeshond",
          "min_weight": 16,
          "max_weight": 20,
          "min_height": 43,
          "max_height": 46,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg",
          "temperament": "Agile, Obedient, Playful, Quick, Sturdy, Bright"
        },
        {
          "id": "144",
          "name": "Komondor",
          "min_weight": 36,
          "max_weight": 45,
          "min_height": 65,
          "max_height": 70,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/Bko0fl547.jpg",
          "temperament": "Steady, Fearless, Affectionate, Independent, Gentle, Calm"
        },
        {
          "id": "145",
          "name": "Kooikerhondje",
          "min_weight": 9,
          "max_weight": 14,
          "min_height": 36,
          "max_height": 41,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/kOMy84GQE.jpg",
          "temperament": "Benevolent, Agile, Alert, Intelligent, Active, Territorial"
        },
        {
          "id": "147",
          "name": "Kuvasz",
          "min_weight": 32,
          "max_weight": 52,
          "min_height": 66,
          "max_height": 76,
          "life_span": "8 - 10 years",
          "image": "https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg",
          "temperament": "Clownish, Loyal, Patient, Independent, Intelligent, Protective"
        },
        {
          "id": "149",
          "name": "Labrador Retriever",
          "min_weight": 25,
          "max_weight": 36,
          "min_height": 55,
          "max_height": 62,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg",
          "temperament": "Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered"
        },
        {
          "id": "151",
          "name": "Lagotto Romagnolo",
          "min_weight": 11,
          "max_weight": 16,
          "min_height": 41,
          "max_height": 48,
          "life_span": "14 - 16 years",
          "image": "https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg",
          "temperament": "Keen, Loyal, Companionable, Loving, Active, Trainable"
        },
        {
          "id": "153",
          "name": "Lancashire Heeler",
          "min_weight": 3,
          "max_weight": 6,
          "min_height": 25,
          "max_height": 30,
          "life_span": "12 – 15 years",
          "image": "https://cdn2.thedogapi.com/images/S1RGml5Em.jpg",
          "temperament": "Clever, Friendly, Alert, Intelligent"
        },
        {
          "id": "155",
          "name": "Leonberger",
          "min_weight": 54,
          "max_weight": 77,
          "min_height": 65,
          "max_height": 80,
          "life_span": "6 - 8 years",
          "image": "https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg",
          "temperament": "Obedient, Fearless, Loyal, Companionable, Adaptable, Loving"
        },
        {
          "id": "156",
          "name": "Lhasa Apso",
          "min_weight": 5,
          "max_weight": 8,
          "min_height": 25,
          "max_height": 28,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg",
          "temperament": "Steady, Fearless, Friendly, Devoted, Assertive, Spirited, Energetic, Lively, Alert, Obedient, Playful, Intelligent"
        },
        {
          "id": "161",
          "name": "Maltese",
          "min_weight": 2,
          "max_weight": 3,
          "min_height": 20,
          "max_height": 25,
          "life_span": "15 - 18 years",
          "image": "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg",
          "temperament": "Playful, Docile, Fearless, Affectionate, Sweet-Tempered, Lively, Responsive, Easygoing, Gentle, Intelligent, Active"
        },
        {
          "id": "165",
          "name": "Miniature American Shepherd",
          "min_weight": 9,
          "max_weight": 18,
          "min_height": 33,
          "max_height": 46,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg",
          "temperament": "Energetic, Loyal, Intelligent, Trainable"
        },
        {
          "id": "167",
          "name": "Miniature Pinscher",
          "min_weight": 4,
          "max_weight": 5,
          "min_height": 25,
          "max_height": 32,
          "life_span": "15 years",
          "image": "https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg",
          "temperament": "Clever, Outgoing, Friendly, Energetic, Responsive, Playful"
        },
        {
          "id": "168",
          "name": "Miniature Schnauzer",
          "min_weight": 5,
          "max_weight": 9,
          "min_height": 30,
          "max_height": 36,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg",
          "temperament": "Fearless, Friendly, Spirited, Alert, Obedient, Intelligent"
        },
        {
          "id": "171",
          "name": "Newfoundland",
          "min_weight": 45,
          "max_weight": 68,
          "min_height": 66,
          "max_height": 71,
          "life_span": "8 - 10 years",
          "image": "https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg",
          "temperament": "Sweet-Tempered, Gentle, Trainable"
        },
        {
          "id": "172",
          "name": "Norfolk Terrier",
          "min_weight": 5,
          "max_weight": 5,
          "min_height": 23,
          "max_height": 25,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/B1ADQg94X.jpg",
          "temperament": "Self-confidence, Fearless, Spirited, Companionable, Happy, Lovable"
        },
        {
          "id": "176",
          "name": "Norwich Terrier",
          "min_weight": 5,
          "max_weight": 5,
          "min_height": 25,
          "max_height": 1,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg",
          "temperament": "Hardy, Affectionate, Energetic, Sensitive, Intelligent"
        },
        {
          "id": "177",
          "name": "Nova Scotia Duck Tolling Retriever",
          "min_weight": 16,
          "max_weight": 23,
          "min_height": 43,
          "max_height": 53,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg",
          "temperament": "Outgoing, Alert, Patient, Intelligent, Loving"
        },
        {
          "id": "178",
          "name": "Old English Sheepdog",
          "min_weight": 27,
          "max_weight": 45,
          "min_height": 53,
          "max_height": 1,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg",
          "temperament": "Sociable, Bubbly, Playful, Adaptable, Intelligent, Loving"
        },
        {
          "id": "179",
          "name": "Olde English Bulldogge",
          "min_weight": 0,
          "max_weight": 1,
          "min_height": 38,
          "max_height": 48,
          "life_span": "9 – 14 years",
          "image": "https://cdn2.thedogapi.com/images/B1d5me547.jpg",
          "temperament": "Friendly, Alert, Confident, Loving, Courageous, Strong"
        },
        {
          "id": "181",
          "name": "Papillon",
          "min_weight": 1,
          "max_weight": 5,
          "min_height": 20,
          "max_height": 28,
          "life_span": "13 - 17 years",
          "image": "https://cdn2.thedogapi.com/images/SkJj7e547.jpg",
          "temperament": "Hardy, Friendly, Energetic, Alert, Intelligent, Happy"
        },
        {
          "id": "183",
          "name": "Pekingese",
          "min_weight": 6,
          "max_weight": 1,
          "min_height": 15,
          "max_height": 23,
          "life_span": "14 - 18 years",
          "image": "https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg",
          "temperament": "Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent"
        },
        {
          "id": "184",
          "name": "Pembroke Welsh Corgi",
          "min_weight": 11,
          "max_weight": 14,
          "min_height": 25,
          "max_height": 30,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg",
          "temperament": "Tenacious, Outgoing, Friendly, Bold, Playful, Protective"
        },
        {
          "id": "185",
          "name": "Perro de Presa Canario",
          "min_weight": 40,
          "max_weight": 50,
          "min_height": 56,
          "max_height": 65,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg",
          "temperament": "Strong Willed, Suspicious, Gentle, Dominant, Calm"
        },
        {
          "id": "188",
          "name": "Pharaoh Hound",
          "min_weight": 18,
          "max_weight": 27,
          "min_height": 53,
          "max_height": 64,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg",
          "temperament": "Affectionate, Sociable, Playful, Intelligent, Active, Trainable"
        },
        {
          "id": "189",
          "name": "Plott",
          "min_weight": 18,
          "max_weight": 27,
          "min_height": 51,
          "max_height": 64,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg",
          "temperament": "Bold, Alert, Loyal, Intelligent"
        },
        {
          "id": "193",
          "name": "Pomeranian",
          "min_weight": 1,
          "max_weight": 3,
          "min_height": 20,
          "max_height": 30,
          "life_span": "15 years",
          "image": "https://cdn2.thedogapi.com/images/HJd0XecNX.jpg",
          "temperament": "Extroverted, Friendly, Sociable, Playful, Intelligent, Active"
        },
        {
          "id": "196",
          "name": "Poodle (Miniature)",
          "min_weight": 7,
          "max_weight": 8,
          "min_height": 28,
          "max_height": 38,
          "life_span": "12 – 15 years",
          "image": "https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg",
          "temperament": "None"
        },
        {
          "id": "197",
          "name": "Poodle (Toy)",
          "min_weight": 3,
          "max_weight": 4,
          "min_height": 23,
          "max_height": 28,
          "life_span": "18 years",
          "image": "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg",
          "temperament": "None"
        },
        {
          "id": "201",
          "name": "Pug",
          "min_weight": 6,
          "max_weight": 8,
          "min_height": 25,
          "max_height": 30,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg",
          "temperament": "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive"
        },
        {
          "id": "204",
          "name": "Puli",
          "min_weight": 11,
          "max_weight": 16,
          "min_height": 41,
          "max_height": 43,
          "life_span": "12 - 16 Years years",
          "image": "https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg",
          "temperament": "Energetic, Agile, Loyal, Obedient, Intelligent, Faithful"
        },
        {
          "id": "205",
          "name": "Pumi",
          "min_weight": 8,
          "max_weight": 15,
          "min_height": 38,
          "max_height": 47,
          "life_span": "13 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg",
          "temperament": "Lively, Reserved, Intelligent, Active, Protective, Vocal"
        },
        {
          "id": "207",
          "name": "Rat Terrier",
          "min_weight": 4,
          "max_weight": 11,
          "min_height": 25,
          "max_height": 33,
          "life_span": "12 - 18 years",
          "image": "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg",
          "temperament": "Affectionate, Lively, Inquisitive, Alert, Intelligent, Loving"
        },
        {
          "id": "208",
          "name": "Redbone Coonhound",
          "min_weight": 20,
          "max_weight": 36,
          "min_height": 53,
          "max_height": 69,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg",
          "temperament": "Affectionate, Energetic, Independent, Companionable, Familial, Unflappable"
        },
        {
          "id": "209",
          "name": "Rhodesian Ridgeback",
          "min_weight": 34,
          "max_weight": 36,
          "min_height": 61,
          "max_height": 69,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/By9zNgqE7.jpg",
          "temperament": "Strong Willed, Mischievous, Loyal, Dignified, Sensitive, Intelligent"
        },
        {
          "id": "210",
          "name": "Rottweiler",
          "min_weight": 34,
          "max_weight": 50,
          "min_height": 56,
          "max_height": 69,
          "life_span": "8 - 10 years",
          "image": "https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg",
          "temperament": "Steady, Good-natured, Fearless, Devoted, Alert, Obedient, Confident, Self-assured, Calm, Courageous"
        },
        {
          "id": "211",
          "name": "Russian Toy",
          "min_weight": 1,
          "max_weight": 3,
          "min_height": 19,
          "max_height": 27,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg",
          "temperament": "None"
        },
        {
          "id": "212",
          "name": "Saint Bernard",
          "min_weight": 59,
          "max_weight": 82,
          "min_height": 65,
          "max_height": 70,
          "life_span": "7 - 10 years",
          "image": "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png",
          "temperament": "Friendly, Lively, Gentle, Watchful, Calm"
        },
        {
          "id": "213",
          "name": "Saluki",
          "min_weight": 16,
          "max_weight": 29,
          "min_height": 58,
          "max_height": 71,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/fjFIuehNo.jpg",
          "temperament": "Aloof, Reserved, Intelligent, Quiet"
        },
        {
          "id": "214",
          "name": "Samoyed",
          "min_weight": 23,
          "max_weight": 27,
          "min_height": 48,
          "max_height": 60,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg",
          "temperament": "Stubborn, Friendly, Sociable, Lively, Alert, Playful"
        },
        {
          "id": "216",
          "name": "Schipperke",
          "min_weight": 5,
          "max_weight": 7,
          "min_height": 25,
          "max_height": 33,
          "life_span": "13 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/SyBvVgc47.jpg",
          "temperament": "Fearless, Agile, Curious, Independent, Confident, Faithful"
        },
        {
          "id": "218",
          "name": "Scottish Deerhound",
          "min_weight": 32,
          "max_weight": 59,
          "min_height": 71,
          "max_height": 81,
          "life_span": "8 - 10 years",
          "image": "https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg",
          "temperament": "Docile, Friendly, Dignified, Gentle"
        },
        {
          "id": "219",
          "name": "Scottish Terrier",
          "min_weight": 8,
          "max_weight": 10,
          "min_height": 25,
          "max_height": 1,
          "life_span": "11 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/Bklnce5NX.jpg",
          "temperament": "Feisty, Alert, Independent, Playful, Quick, Self-assured"
        },
        {
          "id": "221",
          "name": "Shetland Sheepdog",
          "min_weight": 14,
          "max_weight": 1,
          "min_height": 33,
          "max_height": 41,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/rJa29l9E7.jpg",
          "temperament": "Affectionate, Lively, Responsive, Alert, Loyal, Reserved, Playful, Gentle, Intelligent, Active, Trainable, Strong"
        },
        {
          "id": "222",
          "name": "Shiba Inu",
          "min_weight": 8,
          "max_weight": 10,
          "min_height": 34,
          "max_height": 42,
          "life_span": "12 - 16 years",
          "image": "https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg",
          "temperament": "Charming, Fearless, Keen, Alert, Confident, Faithful"
        },
        {
          "id": "223",
          "name": "Shih Tzu",
          "min_weight": 4,
          "max_weight": 7,
          "min_height": 20,
          "max_height": 28,
          "life_span": "10 - 18 years",
          "image": "https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg",
          "temperament": "Clever, Spunky, Outgoing, Friendly, Affectionate, Lively, Alert, Loyal, Independent, Playful, Gentle, Intelligent, Happy, Active, Courageous"
        },
        {
          "id": "225",
          "name": "Shiloh Shepherd",
          "min_weight": 54,
          "max_weight": 64,
          "min_height": 66,
          "max_height": 76,
          "life_span": "9 – 14 years",
          "image": "https://cdn2.thedogapi.com/images/SJJxjecEX.jpg",
          "temperament": "Outgoing, Loyal, Companionable, Gentle, Loving, Trainable"
        },
        {
          "id": "226",
          "name": "Siberian Husky",
          "min_weight": 16,
          "max_weight": 27,
          "min_height": 51,
          "max_height": 60,
          "life_span": "12 years",
          "image": "https://cdn2.thedogapi.com/images/S17ZilqNm.jpg",
          "temperament": "Outgoing, Friendly, Alert, Gentle, Intelligent"
        },
        {
          "id": "228",
          "name": "Silky Terrier",
          "min_weight": 4,
          "max_weight": 5,
          "min_height": 23,
          "max_height": 25,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg",
          "temperament": "Friendly, Responsive, Inquisitive, Alert, Quick, Joyful"
        },
        {
          "id": "232",
          "name": "Smooth Fox Terrier",
          "min_weight": 0,
          "max_weight": 8,
          "min_height": 39,
          "max_height": 1,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/Syszjx9Em.jpg",
          "temperament": "Fearless, Affectionate, Alert, Playful, Intelligent, Active"
        },
        {
          "id": "233",
          "name": "Soft Coated Wheaten Terrier",
          "min_weight": 14,
          "max_weight": 18,
          "min_height": 41,
          "max_height": 46,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg",
          "temperament": "Affectionate, Spirited, Energetic, Playful, Intelligent, Faithful"
        },
        {
          "id": "235",
          "name": "Spanish Water Dog",
          "min_weight": 14,
          "max_weight": 23,
          "min_height": 41,
          "max_height": 51,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg",
          "temperament": "Trainable, Diligent, Affectionate, Loyal, Athletic, Intelligent"
        },
        {
          "id": "236",
          "name": "Spinone Italiano",
          "min_weight": 28,
          "max_weight": 39,
          "min_height": 57,
          "max_height": 70,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg",
          "temperament": "Docile, Friendly, Affectionate, Loyal, Patient, Gentle"
        },
        {
          "id": "238",
          "name": "Staffordshire Bull Terrier",
          "min_weight": 11,
          "max_weight": 17,
          "min_height": 36,
          "max_height": 41,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/H1zSie9V7.jpg",
          "temperament": "Reliable, Fearless, Bold, Affectionate, Loyal, Intelligent, Courageous"
        },
        {
          "id": "239",
          "name": "Standard Schnauzer",
          "min_weight": 14,
          "max_weight": 23,
          "min_height": 44,
          "max_height": 50,
          "life_span": "13 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg",
          "temperament": "Trainable, Good-natured, Devoted, Lively, Playful, Intelligent"
        },
        {
          "id": "242",
          "name": "Swedish Vallhund",
          "min_weight": 9,
          "max_weight": 14,
          "min_height": 29,
          "max_height": 34,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg",
          "temperament": "Fearless, Friendly, Energetic, Alert, Intelligent, Watchful"
        },
        {
          "id": "243",
          "name": "Thai Ridgeback",
          "min_weight": 16,
          "max_weight": 25,
          "min_height": 51,
          "max_height": 61,
          "life_span": "10 - 12 years",
          "image": "https://cdn2.thedogapi.com/images/zv89hR-O8.jpg",
          "temperament": "Protective, Loyal, Independent, Intelligent, Loving, Familial"
        },
        {
          "id": "244",
          "name": "Tibetan Mastiff",
          "min_weight": 39,
          "max_weight": 64,
          "min_height": 61,
          "max_height": 66,
          "life_span": "10 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/SkM9sec47.jpg",
          "temperament": "Strong Willed, Tenacious, Aloof, Stubborn, Intelligent, Protective"
        },
        {
          "id": "245",
          "name": "Tibetan Spaniel",
          "min_weight": 4,
          "max_weight": 7,
          "min_height": 25,
          "max_height": 1,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/Hyjcol947.jpg",
          "temperament": "Willful, Aloof, Assertive, Independent, Playful, Intelligent, Happy"
        },
        {
          "id": "246",
          "name": "Tibetan Terrier",
          "min_weight": 9,
          "max_weight": 11,
          "min_height": 36,
          "max_height": 43,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg",
          "temperament": "Affectionate, Energetic, Amiable, Reserved, Gentle, Sensitive"
        },
        {
          "id": "248",
          "name": "Toy Fox Terrier",
          "min_weight": 2,
          "max_weight": 4,
          "min_height": 20,
          "max_height": 28,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/B17ase9V7.jpg",
          "temperament": "Friendly, Spirited, Alert, Loyal, Playful, Intelligent"
        },
        {
          "id": "250",
          "name": "Treeing Walker Coonhound",
          "min_weight": 20,
          "max_weight": 36,
          "min_height": 51,
          "max_height": 69,
          "life_span": "10 - 13 years",
          "image": "https://cdn2.thedogapi.com/images/SkRpsgc47.jpg",
          "temperament": "Clever, Affectionate, Confident, Intelligent, Loving, Trainable"
        },
        {
          "id": "251",
          "name": "Vizsla",
          "min_weight": 23,
          "max_weight": 29,
          "min_height": 53,
          "max_height": 61,
          "life_span": "10 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg",
          "temperament": "Affectionate, Energetic, Loyal, Gentle, Quiet"
        },
        {
          "id": "253",
          "name": "Weimaraner",
          "min_weight": 25,
          "max_weight": 41,
          "min_height": 58,
          "max_height": 69,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/SyU12l9V7.jpg",
          "temperament": "Steady, Aloof, Stubborn, Energetic, Alert, Intelligent, Powerful, Fast"
        },
        {
          "id": "254",
          "name": "Welsh Springer Spaniel",
          "min_weight": 16,
          "max_weight": 25,
          "min_height": 43,
          "max_height": 48,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg",
          "temperament": "Stubborn, Friendly, Affectionate, Loyal, Playful, Active"
        },
        {
          "id": "256",
          "name": "West Highland White Terrier",
          "min_weight": 7,
          "max_weight": 10,
          "min_height": 25,
          "max_height": 28,
          "life_span": "15 - 20 years",
          "image": "https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg",
          "temperament": "Hardy, Friendly, Alert, Independent, Gay, Active, Courageous"
        },
        {
          "id": "257",
          "name": "Whippet",
          "min_weight": 11,
          "max_weight": 16,
          "min_height": 46,
          "max_height": 56,
          "life_span": "12 - 15 years",
          "image": "https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg",
          "temperament": "Friendly, Affectionate, Lively, Gentle, Intelligent, Quiet"
        },
        {
          "id": "258",
          "name": "White Shepherd",
          "min_weight": 27,
          "max_weight": 39,
          "min_height": 56,
          "max_height": 64,
          "life_span": "12 – 14 years",
          "image": "https://cdn2.thedogapi.com/images/r14M3e9E7.jpg",
          "temperament": "Self-confidence, Aloof, Fearless, Alert, Companionable, Eager"
        },
        {
          "id": "259",
          "name": "Wire Fox Terrier",
          "min_weight": 7,
          "max_weight": 9,
          "min_height": 33,
          "max_height": 41,
          "life_span": "13 – 14 years",
          "image": "https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg",
          "temperament": "Fearless, Friendly, Bold, Keen, Alert, Quick"
        },
        {
          "id": "260",
          "name": "Wirehaired Pointing Griffon",
          "min_weight": 20,
          "max_weight": 32,
          "min_height": 51,
          "max_height": 61,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg",
          "temperament": "Loyal, Gentle, Vigilant, Trainable, Proud"
        },
        {
          "id": "261",
          "name": "Wirehaired Vizsla",
          "min_weight": 20,
          "max_weight": 29,
          "min_height": 55,
          "max_height": 64,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg",
          "temperament": "None"
        },
        {
          "id": "262",
          "name": "Xoloitzcuintli",
          "min_weight": 4,
          "max_weight": 14,
          "min_height": 25,
          "max_height": 58,
          "life_span": "12 - 14 years",
          "image": "https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg",
          "temperament": "Cheerful, Alert, Companionable, Intelligent, Protective, Calm"
        },
        {
          "id": "264",
          "name": "Yorkshire Terrier",
          "min_weight": 2,
          "max_weight": 3,
          "min_height": 20,
          "max_height": 23,
          "life_span": "12 - 16 years",
          "image": "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
          "temperament": "Bold, Independent, Confident, Intelligent, Courageous"
        },
        {
          "id": "586a257a-2a1e-49e5-9e5e-9376c8e73d9c",
          "name": "dog test3",
          "min_height": 10,
          "max_height": 20,
          "min_weight": 10,
          "max_weight": 30,
          "life_span": "15 years",
          "image": "https://cdn2.thedogapi.com/images/BJa4kx25X.jpg",
          "Temperaments": []
        }
      ]

      */

      // const doggs =useSelector(state=>state.doggsfiltered) //El componente está atento a los cambios del estado global
         const doggs = currentDogs;
      /*
      El objetivo es que los datos lleguen por estado
      y se almacene en el store de redux
      debe buscar la propiedad doggs que está en el estado global
      debemos usar redux
      const doggs =useSelector(state=>state.doggs)

      */
            // "min_weight": 3,
            // "max_weight": 6,
            // "min_height": 23,
            // "max_height": 29,

    return(
        <div className={style.container}>
                {doggs.map(doggie=>{
                    return <Card
                        id={doggie.id}
                        name={doggie.name}
                        life_span={doggie.life_span}
                        min_weight={doggie.min_weight}
                        max_weight={doggie.max_weight}
                        min_height={doggie.min_height}
                        max_height={doggie.max_height}
                        temperament={doggie.temperament}
                        image={doggie.image}

                        key={doggie.id}
                    />
                })}
        </div>


    )

}



export default CardsContainer;