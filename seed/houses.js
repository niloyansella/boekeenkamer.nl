require("dotenv").config();
const { nanoid } = require("nanoid");

const { House } = require("../models");

const seedHouses = async (houses) => {
  try {
    console.log("Seeding houses...");

    await House.insertMany(houses);

    console.log("Seeding complete...");
    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

const houses = [
  {
    id: nanoid(),
    address: {
      street_name: "Gustav Mahleraan",
      house_number: "270",
      zip_code: "1082 ME",
      city: "Amsterdam",
    },
    surface: 210,
    rooms: 4,
    price: 1750,
    type_id: "1",
    img: "https://terhaarmakelaars.nl/wp-content/uploads/realworks/wonen/6.231.228/122455690.jpg",
    status: "FREE",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Koninginneweg",
      house_number: "105bov",
      zip_code: "1075CK ",
      city: "Amsterdam",
    },
    surface: 150,
    rooms: 3,
    price: 1550,
    type_id: "2",
    img: "https://cloud.funda.nl/valentina_media/155/797/956_1080x720.jpg",
    status: "FREE",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Bos en Lommerplantsoen",
      house_number: "29B",
      zip_code: "1055AA",
      city: "Amsterdam",
    },
    surface: 31,
    rooms: 1,
    price: 450,
    type_id: "3",
    img: "https://cloud.funda.nl/valentina_media/155/670/273_1080x720.jpg",
    status: "FREE",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Rinus Michelslaan",
      house_number: "285",
      zip_code: "1061MB",
      city: "Amsterdam",
    },
    surface: 70,
    rooms: 2,
    price: 750,
    type_id: "2",
    img: "https://cloud.funda.nl/valentina_media/154/021/134_2160.jpg",
    status: "FREE",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Koekangestraat",
      house_number: "19",
      zip_code: "2541PT",
      city: "Den-Haag",
    },
    surface: 55,
    rooms: 2,
    price: 500,
    type_id: "2",
    img: "https://cloud.funda.nl/valentina_media/156/235/230_2160.jpg",
    status: "FREE",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Van der Hoevenplein",
      house_number: "237",
      zip_code: " 3072MK",
      city: "Rotterdam",
    },
    surface: 150,
    rooms: 2,
    price: 2500,
    type_id: "1",
    img: "https://cloud.funda.nl/valentina_media/155/662/624_2160.jpg",
    status: "FREE",
  },
];

exports.module = seedHouses(houses);
