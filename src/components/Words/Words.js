const random_words = [
	"affix",
  "avenue",
  "awkward",
  "beekeeper",
  "boggle",
  "cobweb",
  "cycle",
  "disavow",
  "duplex",
  "equip",
  "exodus",
  "funny",
  "galaxy",
  "gossip",
  "icebox",
  "injury",
  "ivory",
  "jackpot",
  "jelly",
  "jockey",
  "joking",
  "joyful",
  "jumbo",
  "kayak",
  "khaki",
  "kiosk",
  "lengths",
  "lucky",
  "luxury",
  "lymph",
  "nightclub",
  "onyx",
  "ovary",
  "pajama",
  "pneumonia",
  "pshaw",
  "puppy",
  "scratch",
  "staff",
  "stretch"
]

function randomWord() {
  return random_words[Math.floor(Math.random() * random_words.length)]
}

export { randomWord }