
const selectDay = document.querySelector("#days")
const selectMonth = document.querySelector("#months")


// array of all the months in a year
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//make dropdown for month
for (let i = 0; i < months.length; i++) {
  const monthOption = document.createElement("option")
  selectMonth.add(monthOption)
  monthOption.innerHTML = months[i]
}

//Utility function to create the dropdown for days which will determine the number of days to be displayed based on the month selected
function displayDays(numberOfDays) {
  for (let i = 1; i < numberOfDays; i++) {
    const dayOption = document.createElement("option")
    selectDay.appendChild(dayOption)
    dayOption.innerHTML = parseInt(i)
  }
}

//grab the value of the month and then displays the number of days based on the month selected using displayDays function above
let month = ""
selectMonth.addEventListener('change', getMonth)


let day;
function getMonth() {
  //clear the day option drop down first to avoid the appending of additional days
  day = undefined; // this is so that the days goes to undefined so that last iteration for day isn't stored.
  month = selectMonth.value
  while(selectDay.firstChild){
    selectDay.removeChild(selectDay.firstChild) //loop to remove all child elements inside selectDay
  }
  const dayOption = document.createElement("option")
  selectDay.appendChild(dayOption)
  dayOption.innerHTML = "Day"
  //function start
  if (month === months[3] || month === months[5] || month === months[8] || month === months[10] ) {
    displayDays(31)
  } else if (month === months[1]) {
    displayDays(30)
  } else {
    displayDays(32)
  }
  }

//grab the value of day
selectDay.addEventListener('change', getDay)
function getDay() {
  day = parseInt(selectDay.value)
}


//construct the horoscopes using Objected-Oriented-Programming
const aquarius = {
  name: "Aquarius",
  description: "You are very independent and are constantly in search of freedom; so much so that you reject a conventional lifestyle and pursue your own path. As the penultimate zodiac sign, you are like real chameleons thanks to your adaptability and creativity. You also shine thanks to your originality, curiosity and unpredictability.",
  image: "img/horo_images/aquarius.svg",
  number: 01
}

const pisces = {
  name: "Pisces",
  description: "You are a lovely dreamer who live in bubbles. Natives of this sign are best described as hypersensitive emotional sponges, who are selfless and caring. In short, your personality is creative, sensual, and imaginative and you aspire to achieve total emotional and spiritual harmony.",
  image: "img/horo_images/pisces.svg",
  number: 02}

const aries = {
  name: "Aries",
  description: "You are a fire sign with an explosive temperament. You're a stubborn person and often do as you please. That said, your courage and your determination are exemplary as you like to be a pioneer and a leader. Your fiery personality is impatient and opinionated, yet on the flip side, strong, loving and kind.",
  image: "img/horo_images/aries.svg",
  number: 03
}

const taurus = {
  name: "Taurus",
  description: "You are an earth sign and like the earth, simple and natural. You aspire to live a quiet and comfortable life and you while you can, avoid complicatons and disputes to enjoy the pleasures of life.",
  image: "img/horo_images/taurus.svg",
  number: 04
}

const gemini = {
  name: "Gemini",
  description: "You are an air sign and spend your life searching for yourself and seeking knowledge. Driven by great curiosity, you open yourself up fearlessly and wholeheartedly to the world around you. Simply put, you are a gem.",
  image: "img/horo_images/gemini.svg",
  number: 05
}

const cancer = {
  name: "Cancer",
  description: "You are a water sign and are reputable for your tender, intuitive, loving and sweet personality, which helps you stand out from the crowd. You crave being surrounded, protected and made to feel safe at all times.",
  image: "img/horo_images/cancer.svg",
  number: 06
}

const leo = {
  name: "Leo",
  description: "When your planet is the sun, it's hard to be discreet! You radiate meaning. it's impossible not to notice your attractive charisma. You love the spot light and enjoy being the center of attention, but can also be very self-conscious at times, especially when you are in love.",
  image: "img/horo_images/leo.svg",
  number: 07
}
const virgo = {
  name: "Virgo",
  description: "Prudent and perfectionist, you do nothing at random. Everything is meticulously analyzed and studied. At times, you have a great tendency to engage in self-criticism but that only emphasizes your innate sense of organization and duty.",
  image: "img/horo_images/virgo.svg",
  number: 08
}
const libra = {
  name: "Libra",
  description: "Your zodiac symbol is the scales of justice, which represent fairness, balance and harmony. You are influenced by Venus, the planet of love and beauty making you extremely charming. You are constantly in search of peace, fairness and balance. Moreover, you are kind, understanding and compassionate with everyone you meet.",
  image: "img/horo_images/libra.svg",
  number: 09
}

const scorpio = {
  name: "Scorpio",
  description: "You are a tough nut to crack. Unlike other members of the zodiac, your personality is like no other and is extremely decisive, emotive and mysterious. Passionately expressive, strong, intense and rebellious are amongst some of the best adjectives to describe you.",
  image: "img/horo_images/scorpio.svg",
  number: 10
}

const sagittarius = {
  name: "Sagittarius",
  description: "You are naturally enthusiastic, curious, fun loving, and energetic. There's no question about it, You are one of the biggest wanderers of the zodiac and are on a constant quest for happiness. Your serene, optimistic, and adventurous personality knows no bound as you always strive for positivity. ",
  image: "img/horo_images/sagittarius.svg",
  number: 11
}

const capricorn = {
  name: "Capricorn",
  description: "You are especially great at establishing relationships with people. Your traits include being attentive, brave, patient and resistant. You often adopt a defensive and skeptical attitude and may seem cold at first glance but you are fiery underneath all that ice.",
  image: "img/horo_images/capricorn.svg",
  number: 12
}


const horoDescription = document.querySelector("#horoText")
const horoIntro = document.querySelector("#horoIntro")
const horoTitle = document.querySelector("#horoTitle")
const horoImage = document.querySelector(".horo-image img")
document.querySelector("#getHoroscope").addEventListener("click", getHoroscope)

//horoscope images varibles


//conditional statements to display the horoscopes in the DOM
function getHoroscope() {
  horoIntro.innerText = "Your zodiac sign is"
  document.querySelector(".horo-image").classList.remove("hidden") //allows images to show even after the else condition is applied
  if (month === "January" && day >= 20 || month === "February" && day <= 18) {
    horoTitle.innerHTML = aquarius.name
    horoDescription.innerHTML = aquarius.description
    horoImage.src = aquarius.image

  } else if (month === "February" && day >= 19 || month === "March" && day <= 20) {
    horoTitle.innerHTML = pisces.name
    horoDescription.innerHTML = pisces.description
    horoImage.src = pisces.image

  } else if (month === "March" && day >= 21 || month === "April" && day <= 19) {
    horoTitle.innerHTML = aries.name
    horoDescription.innerHTML = aries.description
    horoImage.src = aries.image

  } else if (month === "April" && day >= 20 || month === "May" && day <= 20) {
    horoTitle.innerHTML = taurus.name
    horoDescription.innerHTML = taurus.description
    horoImage.src = taurus.image

  } else if (month === "May" && day >= 21 || month === "June" && day <= 20) {
    horoTitle.innerHTML = gemini.name
    horoDescription.innerHTML = gemini.description
    horoImage.src = gemini.image

  } else if (month === "June" && day >= 21 || month === "July" && day <= 22) {
    horoTitle.innerHTML = cancer.name
    horoDescription.innerHTML = cancer.description
    horoImage.src = cancer.image

  } else if (month === "July" && day >= 23 || month === "August" && day <= 22) {
    horoTitle.innerHTML = leo.name
    horoDescription.innerHTML = leo.description
    horoImage.src = leo.image

  } else if (month === "August" && day >= 23 || month === "September" && day <= 22) {
    horoTitle.innerHTML = virgo.name
    horoDescription.innerHTML = virgo.description
    horoImage.src = virgo.image

  } else if (month === "September" && day >= 23 || month === "October" && day <= 22) {
    horoTitle.innerHTML = libra.name
    horoDescription.innerHTML = libra.description
    horoImage.src = libra.image

  } else if (month === "October" && day >= 23 || month === "November" && day <= 21) {
    horoTitle.innerHTML = scorpio.name
    horoDescription.innerHTML = scorpio.description
    horoImage.src = scorpio.image

  } else if (month === "November" && day >= 22 || month === "December" && day <= 21) {
    horoTitle.innerHTML = sagittarius.name
    horoDescription.innerHTML = sagittarius.description
    horoImage.src = sagittarius.image

  } else if (month === "December" && day >= 22 || month === "January" && day <= 19) {
    horoTitle.innerHTML = capricorn.name
    horoDescription.innerHTML = capricorn.description
    horoImage.src = capricorn.image

  } else if (day === undefined || month === undefined || isNaN(day)) {
    horoTitle.innerHTML = ""
    horoDescription.innerHTML = ""
    document.querySelector(".horo-description").style.width = "100%";
    horoIntro.innerHTML = "🙂 Please make sure you have selected a valid date."
    document.querySelector(".horo-image").classList.add("hidden")
  }
}






























//Gemrnay
