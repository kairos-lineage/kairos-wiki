import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero       from '../../../components/ui/PageHero'

const ALT_B = import.meta.env.BASE_URL + 'images/lionna/alt-b/'
import SectionHeading from '../../../components/ui/SectionHeading'
import InfoBox        from '../../../components/ui/InfoBox'
import WikiCarousel   from '../../../components/ui/WikiCarousel'

const INSTANCES = [
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 1,
    boss: 'Greyclaw Kutis',
    drops: [
      { qty: '200,000', item: 'Adena' },
      { qty: '3,000',   item: 'Asofe' },
      { qty: 100,       item: 'Gold Einhasad' },
      { qty: 20,        item: 'Blessed Scroll: Enchant Weapon (B-Grade)' },
      { qty: 20,        item: 'Blessed Scroll: Enchant Armor (B-Grade)' },
      { qty: 10,        item: 'Avadon Robe Fabric' },
      { qty: 10,        item: 'Leather Armor of Doom Design' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 2,
    boss: 'Turek Mercenary Captain',
    drops: [
      { qty: '300,000', item: 'Adena' },
      { qty: 10,        item: 'Event-Coin' },
      { qty: 25,        item: 'Coke' },
      { qty: 10,        item: 'Fire Potion' },
      { qty: 75,        item: 'Gold Einhasad' },
      { qty: 25,        item: "Beleth's Blood Dragon" },
      { qty: 10,        item: 'Blessed Scroll: Enchant Weapon (A-Grade)' },
      { qty: 10,        item: 'Blessed Scroll: Enchant Armor (A-Grade)' },
      { qty: 10,        item: 'Fire Potion' },
      { qty: 10,        item: 'Maestro Holder' },
      { qty: 7,         item: 'Sealed Dark Crystal Leather Armor Pattern' },
      { qty: 7,         item: 'Sealed Dark Crystal Robe Fabric' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 3,
    boss: 'Retreat Spider Cletu',
    drops: [
      { qty: '500,000', item: 'Adena' },
      { qty: 10,        item: 'Event-Coin' },
      { qty: 100,       item: 'Gold Einhasad' },
      { qty: 10,        item: 'Water Potion' },
      { qty: 10,        item: 'Blessed Scroll: Enchant Armor (A-Grade)' },
      { qty: 10,        item: 'Blessed Scroll: Enchant Weapon (A-Grade)' },
      { qty: '1,000',   item: 'Freed Soul' },
      { qty: 1,         item: 'Earring of Orfen' },
      { qty: 1,         item: 'Ring of Core' },
      { qty: 25,        item: "Beleth's Blood Dragon" },
      { qty: 15,        item: 'Sealed Draconic Leather Armor Part' },
      { qty: 15,        item: 'Sealed Major Arcana Robe Part' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 4,
    boss: 'Furious Thiefs',
    drops: [
      { qty: '2,500,000', item: 'Adena' },
      { qty: 10,          item: 'Event-Coin' },
      { qty: 10,          item: 'Blessed Scroll: Enchant Weapon (S-Grade)' },
      { qty: 10,          item: 'Blessed Scroll: Enchant Armor (S-Grade)' },
      { qty: 5,           item: "Giant's Codex" },
      { qty: 10,          item: "Beast's Claws" },
      { qty: 10,          item: 'Water Potion' },
      { qty: 100,         item: 'Gold Einhasad' },
      { qty: 15,          item: "Beleth's Blood Dragon" },
      { qty: 50,          item: 'Event - Medal' },
      { qty: 25,          item: 'Stone of Anguish' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 5,
    boss: 'Ghost of Peasant Leader',
    drops: [
      { qty: '15,000,000',  item: 'Adena' },
      { qty: 10,            item: 'Event-Coin' },
      { qty: 10,            item: 'Eye of Infinity Stone' },
      { qty: 150,           item: 'Gold Einhasad' },
      { qty: 10,            item: 'Earth Potion' },
      { qty: 15,            item: 'Ancient Armor Enchant Crystal (S-Grade)' },
      { qty: 15,            item: 'Ancient Weapon Enchant Crystal (S-Grade)' },
      { qty: '1,000',       item: 'Sealed Moirai Leather Breastplate Piece' },
      { qty: '1,000',       item: 'Sealed Moirai Tunic Piece' },
      { qty: '5,000,000',   item: 'Ancient Adena' },
      { qty: 20,            item: "Beleth's Silver Dragon" },
      { qty: 35,            item: 'Event - Glittering Medal' },
      { qty: 500,           item: 'Essence of Kamaloka' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 6,
    boss: '...The 3rd Underwater Guar',
    drops: [
      { qty: '55,000,000', item: 'Adena' },
      { qty: 10,           item: 'Event-Coin' },
      { qty: 150,          item: 'Gold Einhasad' },
      { qty: 20,           item: 'Ancient Armor Enchant Crystal (S-Grade)' },
      { qty: 20,           item: 'Ancient Weapon Enchant Crystal (S-Grade)' },
      { qty: 50,           item: 'Shiny Cube Fragment Weapon - D' },
      { qty: 1,            item: 'Book of Aklantoth - Part 1' },
      { qty: 1,            item: 'Book of Aklantoth - Part 2' },
      { qty: 1,            item: 'Book of Aklantoth - Part 3' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 7,
    boss: 'Pan Druid',
    drops: [
      { qty: '75,000,000',  item: 'Adena' },
      { qty: 10,            item: 'Event-Coin' },
      { qty: 500,           item: 'Essence of Kamaloka' },
      { qty: 150,           item: 'Gold Einhasad' },
      { qty: '10,000,000',  item: 'Ancient Adena' },
      { qty: 50,            item: 'Shiny Cube Fragment Weapon - D' },
      { qty: 15,            item: 'Ancient Weapon Enchant Crystal (S-Grade)' },
      { qty: 15,            item: 'Ancient Armor Enchant Crystal (S-Grade)' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 8,
    boss: 'Queen',
    tattoo: 'Octavia > Queen Ant',
    drops: [
      { qty: 15,          item: 'Divine Armor Enchant Crystal (S-Grade)' },
      { qty: 2,           item: "Giant's Codex - Mastery" },
      { qty: 10,          item: 'Event-Coin' },
      { qty: 15,          item: 'Divine Weapon Enchant Crystal (S-Grade)' },
      { qty: 5,           item: "Giant's Codex - Mastery" },
      { qty: 10,          item: "Beast's Claws" },
      { qty: 10,          item: 'Eye of Infinity Stone' },
      { qty: '1,500',     item: 'Golden Apiga' },
      { qty: 20,          item: "Bottle of Freya's Soul" },
      { qty: 200,         item: 'Noble Enhancement Stone' },
      { qty: 1,           item: 'Gold Bar' },
      { qty: 250,         item: 'Festival Adena' },
      { qty: '2,000',     item: 'Kaldis Gold Dragon' },
      { qty: 150,         item: 'Gold Einhasad' },
      { qty: 300,         item: 'Water Dragon Scale' },
      { qty: 3,           item: 'Queen Ant' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 9,
    boss: 'Behe',
    tattoo: 'Octavia > Behe',
    drops: [
      { qty: 15,    item: 'Divine Weapon Enchant Crystal (S-Grade)' },
      { qty: 2,     item: "Giant's Codex - Mastery" },
      { qty: 10,    item: 'Event-Coin' },
      { qty: 15,    item: 'Divine Armor Enchant Crystal (S-Grade)' },
      { qty: 10,    item: 'Event-Coin' },
      { qty: 1,     item: 'Exp Potion' },
      { qty: 3,     item: 'Momumu Part' },
      { qty: 2,     item: 'Rebirth Coin' },
      { qty: 1,     item: 'Gracian Anniversary Coins' },
      { qty: 3,     item: 'Behemoth' },
      { qty: 150,   item: 'Gold Einhasad' },
      { qty: 250,   item: 'Festival Adena' },
      { qty: 300,   item: 'Water Dragon Scale' },
      { qty: 500,   item: 'Golden Apiga' },
      { qty: 1,     item: 'Gold Bar' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 10,
    boss: 'Zaken',
    tattoo: 'Octavia > Zaken',
    drops: [
      { qty: 15,    item: 'Divine Weapon Enchant Crystal (S-Grade)' },
      { qty: 2,     item: "Giant's Codex - Mastery" },
      { qty: 10,    item: 'Event-Coin' },
      { qty: 15,    item: 'Divine Armor Enchant Crystal (S-Grade)' },
      { qty: 5,     item: 'Gold Bar' },
      { qty: 20,    item: 'Event-Coin' },
      { qty: 3,     item: 'Exp Potion' },
      { qty: 3,     item: 'Aramantine Part' },
      { qty: 3,     item: 'Zaken' },
      { qty: 150,   item: 'Gold Einhasad' },
      { qty: 300,   item: 'Water Dragon Scale' },
      { qty: 500,   item: 'Golden Apiga' },
      { qty: 250,   item: 'Festival Adena' },
      { qty: 2,     item: 'Gracian Anniversary Coins' },
      { qty: 5,     item: 'Rebirth Coin' },
      { qty: 6,     item: 'Momumu Part' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 11,
    boss: 'Maloso',
    tattoo: "Olf's Scroll Level 1",
    drops: [
      { qty: 5,     item: 'Rebirth Coin' },
      { qty: 2,     item: "Giant's Codex - Mastery" },
      { qty: 10,    item: 'Event-Coin' },
      { qty: 3,     item: 'Gracian Anniversary Coins' },
      { qty: 500,   item: 'Gold Bar' },
      { qty: 250,   item: 'Gold Einhasad' },
      { qty: 450,   item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,   item: 'Festival Adena' },
      { qty: 1,     item: "Blessed Olf's T-shirt Enchant Scroll" },
      { qty: 1,     item: 'Top-Grade Life Stone - Level 86' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 12,
    boss: 'Ojoso',
    tattoo: "Olf's Scroll Level 1",
    drops: [
      { qty: 5,       item: 'Rebirth Coin' },
      { qty: 2,       item: "Giant's Codex - Mastery" },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Gracian Anniversary Coins' },
      { qty: 500,     item: 'Gold Bar' },
      { qty: 1,       item: "Blessed Olf's T-shirt Enchant Scroll" },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 1,       item: 'Top-Grade Life Stone - Level 86' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 13,
    boss: 'Boloso',
    tattoo: "Olf's Scroll Level 1",
    drops: [
      { qty: 5,       item: 'Rebirth Coin' },
      { qty: 2,       item: "Giant's Codex - Mastery" },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Gracian Anniversary Coins' },
      { qty: 500,     item: 'Gold Bar' },
      { qty: 1,       item: "Blessed Olf's T-shirt Enchant Scroll" },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 1,       item: 'Top-Grade Life Stone - Level 86' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 14,
    boss: 'Torakoso',
    tattoo: "Olf's Scroll Level 1 · Orfen Doll",
    drops: [
      { qty: 5,       item: 'Rebirth Coin' },
      { qty: 2,       item: "Giant's Codex - Mastery" },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Gracian Anniversary Coins' },
      { qty: 500,     item: 'Gold Bar' },
      { qty: 1,       item: "Blessed Olf's T-shirt Enchant Scroll" },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 3,       item: 'Orfen Doll' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 15,
    boss: 'Baylor',
    tattoo: 'Octavia > Baylor · Event Coins',
    drops: [
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Gracian Anniversary Coins' },
      { qty: 500,     item: 'Gold Bar' },
      { qty: 500,     item: 'Event-Coin' },
      { qty: 1,       item: 'Master Potion' },
      { qty: 10,      item: 'Dragon Claw' },
      { qty: 1,       item: 'Key of Enigma' },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 500,     item: 'Elf Stone' },
      { qty: 15,      item: "Olf's T-shirt Enchant Scroll" },
      { qty: 1,       item: 'Baylor' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 16,
    boss: 'Kechudo',
    drops: [
      { qty: 5,         item: "Olf's T-shirt Enchant Scroll" },
      { qty: 15,        item: 'Event-Coin' },
      { qty: 15,        item: 'Earth Jewel' },
      { qty: 15,        item: 'Fire Jewel' },
      { qty: 15,        item: 'Water Jewel' },
      { qty: 250,       item: 'Gold Einhasad' },
      { qty: 450,       item: 'Water Dragon Scale' },
      { qty: '1,500',   item: 'Golden Apiga' },
      { qty: 450,       item: 'Festival Adena' },
      { qty: '500,000', item: 'Dragon Torch' },
      { qty: '500,000', item: 'Dragon Breath' },
      { qty: '500,000', item: 'Dragon Arrow' },
      { qty: 1,         item: 'Two Demons' },
      { qty: 10,        item: 'Dragon Claw' },
      { qty: 20,        item: 'Gracian Anniversary Coins' },
      { qty: '1,000',   item: 'Gold Bar' },
      { qty: 3,         item: 'Master Potion' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 17,
    boss: 'Kartudo',
    drops: [
      { qty: 3,       item: 'Ancestral Keys' },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 15,      item: "Lidia's Dress" },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 18,
    boss: 'Verfudo',
    drops: [
      { qty: 10,      item: "Lidia's Dress" },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Ancestral Keys' },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 1,       item: 'Sphere of Contained Energy' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 19,
    boss: 'Antharas',
    drops: [
      { qty: 4,       item: 'Coin of Luck' },
      { qty: '4,000', item: 'Gold Bar' },
      { qty: 4,       item: 'Blue Eva' },
      { qty: 10,      item: 'Gracian Anniversary Coins' },
      { qty: 500,     item: 'Gold Einhasad' },
      { qty: 900,     item: 'Water Dragon Scale' },
      { qty: '3,000', item: 'Golden Apiga' },
      { qty: 900,     item: 'Festival Adena' },
      { qty: 10,      item: 'Top-Grade Life Stone - Level 86' },
      { qty: 3,       item: 'Antharas Slayer Circlet' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 20,
    boss: 'Baium',
    drops: [
      { qty: 4,       item: 'Coin of Luck' },
      { qty: '4,000', item: 'Gold Bar' },
      { qty: 4,       item: 'Blue Eva' },
      { qty: 10,      item: 'Gracian Anniversary Coins' },
      { qty: 10,      item: 'Top-Grade Life Stone - Level 86' },
      { qty: 500,     item: 'Gold Einhasad' },
      { qty: 900,     item: 'Water Dragon Scale' },
      { qty: '3,000', item: 'Golden Apiga' },
      { qty: 900,     item: 'Festival Adena' },
      { qty: 50,      item: 'Dragon Claw' },
      { qty: 3,       item: 'Improved Ring of Baium' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 21,
    boss: 'Valakas',
    drops: [
      { qty: 4,       item: 'Coin of Luck' },
      { qty: '4,000', item: 'Gold Bar' },
      { qty: 4,       item: 'Blue Eva' },
      { qty: 10,      item: 'Gracian Anniversary Coins' },
      { qty: 10,      item: 'Top-Grade Life Stone - Level 86' },
      { qty: 500,     item: 'Gold Einhasad' },
      { qty: 900,     item: 'Water Dragon Scale' },
      { qty: '3,000', item: 'Golden Apiga' },
      { qty: 900,     item: 'Festival Adena' },
      { qty: 50,      item: 'Dragon Claw' },
      { qty: 3,       item: 'Tattoo of Power' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 22,
    boss: 'Lindvior',
    drops: [
      { qty: 1,       item: 'Large Baby Dragon', note: 'quest only' },
      { qty: '4,000', item: 'Gold Bar' },
      { qty: 10,      item: 'Gracian Anniversary Coins' },
      { qty: 20,      item: 'Dragon Claw' },
      { qty: 6,       item: 'Top-Grade Life Stone - Level 86' },
      { qty: 500,     item: 'Gold Einhasad' },
      { qty: 900,     item: 'Water Dragon Scale' },
      { qty: '3,000', item: 'Golden Apiga' },
      { qty: 900,     item: 'Festival Adena' },
      { qty: 6,       item: 'Lindvior Egg' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 23,
    boss: 'Scarlet van Halisha & Frintezza',
    drops: [
      { qty: '4,000',   item: 'Gold Bar' },
      { qty: 50,        item: 'Vote Reward' },
      { qty: 40,        item: 'Gracian Anniversary Coins' },
      { qty: 20,        item: 'Event-Coin' },
      { qty: 20,        item: 'Top-Grade Life Stone - Level 86' },
      { qty: 500,       item: 'Gold Einhasad' },
      { qty: 900,       item: 'Water Dragon Scale' },
      { qty: '1,300',   item: 'Golden Apiga' },
      { qty: 900,       item: 'Festival Adena' },
      { qty: 40,        item: 'Rebirth Coin' },
      { qty: 15,        item: 'Frintezza Soul' },
      { qty: 3,         item: 'Frintezza Blood' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Extreme · +100 Rebirths',
    index: 24,
    boss: 'Lagarto',
    drops: [
      { qty: '5,000',  item: 'Gold Bar' },
      { qty: 25,       item: 'Rebirth Coin' },
      { qty: 30,       item: "Beast's Claws" },
      { qty: 35,       item: 'Gracian Anniversary Coins' },
      { qty: 1,        item: "Kali's Blood Dragon" },
      { qty: 1,        item: 'Chest of Destiny Doll' },
      { qty: 1,        item: 'Chest of Destiny Relic' },
      { qty: 5,        item: 'Chest Infernal' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Extreme · +100 Rebirths',
    index: 25,
    boss: 'Milei',
    drops: [
      { qty: '7,000', item: 'Gold Bar' },
      { qty: 30,      item: 'Rebirth Coin' },
      { qty: 30,      item: "Beast's Claws" },
      { qty: 45,      item: 'Gracian Anniversary Coins' },
      { qty: 1,       item: 'Chest of Destiny Doll' },
      { qty: 1,       item: 'Chest of Destiny Relic' },
      { qty: 5,       item: 'Chest Infernal' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Extreme · +100 Rebirths',
    index: 26,
    boss: 'Fletcher',
    drops: [
      { qty: '10,000', item: 'Gold Bar' },
      { qty: 60,       item: 'Rebirth Coin' },
      { qty: 30,       item: "Beast's Claws" },
      { qty: 55,       item: 'Gracian Anniversary Coins' },
      { qty: 1,        item: 'Chest of Destiny Doll' },
      { qty: 1,        item: 'Chest of Destiny Relic' },
      { qty: 5,        item: 'Chest Infernal' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 27,
    boss: 'Reborn Orfen',
    drops: [
      { qty: '16,000', item: 'Gold Bar' },
      { qty: 150,      item: 'Gracian Anniversary Coins' },
      { qty: 80,       item: "Lidia's Dress" },
      { qty: 4,        item: 'Ancestral Keys' },
      { qty: 150,      item: 'Rebirth Coin' },
      { qty: 6,        item: 'Chest of Destiny Doll' },
      { qty: 6,        item: 'Chest of Destiny Relic' },
      { qty: 2,        item: 'Talent Tree Potion' },
      { qty: 10,       item: 'Coin of Luck' },
      { qty: 10,       item: 'Blue Eva' },
      { qty: 10,       item: 'Gate Key: Darkness' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Extreme · +100 Rebirths',
    index: 28,
    boss: 'King Wind',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 29,
    boss: 'King Water',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 30,
    boss: 'King Fire',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 31,
    boss: 'King Earth',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 32,
    boss: 'Mechanical Engineer',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 33,
    boss: 'Mechanical Proletaries',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 34,
    boss: 'Mechanical Zahasher',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 35,
    boss: 'Mechanical Berserker',
    drops: [],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Extreme · +100 Rebirths',
    index: 36,
    boss: 'Heaven Angel Fighter',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 70,        item: 'Gracian Anniversary Coins' },
      { qty: 70,        item: "Lidia's Dress" },
      { qty: 200,       item: 'Event-Coin' },
      { qty: 6,         item: 'Ancestral Keys' },
      { qty: 70,        item: 'Coin of Luck' },
      { qty: 70,        item: 'Blue Eva' },
      { qty: 70,        item: 'Rebirth Coin' },
      { qty: 6,         item: 'Chest of Destiny Doll' },
      { qty: 6,         item: 'Chest of Destiny Relic' },
      { qty: 4,         item: 'Talent Tree Potion' },
      { qty: 10,        item: 'Gate Key: Darkness' },
      { qty: 4,         item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 37,
    boss: 'Heaven Angel Mage',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 70,        item: 'Gracian Anniversary Coins' },
      { qty: 70,        item: "Lidia's Dress" },
      { qty: 200,       item: 'Event-Coin' },
      { qty: 6,         item: 'Ancestral Keys' },
      { qty: 70,        item: 'Coin of Luck' },
      { qty: 70,        item: 'Blue Eva' },
      { qty: 70,        item: 'Rebirth Coin' },
      { qty: 6,         item: 'Chest of Destiny Doll' },
      { qty: 6,         item: 'Chest of Destiny Relic' },
      { qty: 4,         item: 'Talent Tree Potion' },
      { qty: 10,        item: 'Gate Key: Darkness' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 38,
    boss: 'Devil Knight',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 70,        item: 'Gracian Anniversary Coins' },
      { qty: 70,        item: "Lidia's Dress" },
      { qty: 200,       item: 'Event-Coin' },
      { qty: 6,         item: 'Ancestral Keys' },
      { qty: 70,        item: 'Coin of Luck' },
      { qty: 70,        item: 'Blue Eva' },
      { qty: 70,        item: 'Rebirth Coin' },
      { qty: 6,         item: 'Chest of Destiny Doll' },
      { qty: 6,         item: 'Chest of Destiny Relic' },
      { qty: 4,         item: 'Talent Tree Potion' },
      { qty: 10,        item: 'Gate Key: Darkness' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 39,
    boss: 'Moldy Dragonfly',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 70,        item: 'Gracian Anniversary Coins' },
      { qty: 70,        item: "Lidia's Dress" },
      { qty: 200,       item: 'Event-Coin' },
      { qty: 6,         item: 'Ancestral Keys' },
      { qty: 70,        item: 'Coin of Luck' },
      { qty: 70,        item: 'Blue Eva' },
      { qty: 70,        item: 'Rebirth Coin' },
      { qty: 6,         item: 'Chest of Destiny Doll' },
      { qty: 6,         item: 'Chest of Destiny Relic' },
      { qty: 4,         item: 'Talent Tree Potion' },
      { qty: 10,        item: 'Gate Key: Darkness' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 40,
    boss: 'Moldy Dragonfleyer',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 70,        item: 'Gracian Anniversary Coins' },
      { qty: 70,        item: "Lidia's Dress" },
      { qty: 200,       item: 'Event-Coin' },
      { qty: 6,         item: 'Ancestral Keys' },
      { qty: 70,        item: 'Coin of Luck' },
      { qty: 70,        item: 'Blue Eva' },
      { qty: 70,        item: 'Rebirth Coin' },
      { qty: 6,         item: 'Chest of Destiny Doll' },
      { qty: 6,         item: 'Chest of Destiny Relic' },
      { qty: 4,         item: 'Talent Tree Potion' },
      { qty: 10,        item: 'Gate Key: Darkness' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 41,
    boss: 'Moldy Soldier',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 70,        item: 'Gracian Anniversary Coins' },
      { qty: 70,        item: "Lidia's Dress" },
      { qty: 200,       item: 'Event-Coin' },
      { qty: 6,         item: 'Ancestral Keys' },
      { qty: 70,        item: 'Coin of Luck' },
      { qty: 70,        item: 'Blue Eva' },
      { qty: 70,        item: 'Rebirth Coin' },
      { qty: 6,         item: 'Chest of Destiny Doll' },
      { qty: 6,         item: 'Chest of Destiny Relic' },
      { qty: 4,         item: 'Talent Tree Potion' },
      { qty: 10,        item: 'Gate Key: Darkness' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 42,
    boss: 'Hard',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 90,        item: 'Gracian Anniversary Coins' },
      { qty: 90,        item: "Lidia's Dress" },
      { qty: 120,       item: 'Sphere of Contained Energy' },
      { qty: 240,       item: 'Event-Coin' },
      { qty: 10,        item: 'Ancestral Keys' },
      { qty: 90,        item: 'Coin of Luck' },
      { qty: 90,        item: 'Blue Eva' },
      { qty: 90,        item: 'Rebirth Coin' },
      { qty: 10,        item: 'Chest of Destiny Doll' },
      { qty: 10,        item: 'Chest of Destiny Relic' },
      { qty: 10,        item: 'Talent Tree Potion' },
      { qty: 16,        item: 'Gate Key: Darkness' },
      { qty: 10,        item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 43,
    boss: 'Beetle',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 6,         item: 'Mythic Claw' },
      { qty: 90,        item: 'Gracian Anniversary Coins' },
      { qty: 90,        item: "Lidia's Dress" },
      { qty: 130,       item: 'Sphere of Contained Energy' },
      { qty: 240,       item: 'Event-Coin' },
      { qty: 10,        item: 'Ancestral Keys' },
      { qty: 90,        item: 'Coin of Luck' },
      { qty: 90,        item: 'Blue Eva' },
      { qty: 90,        item: 'Rebirth Coin' },
      { qty: 10,        item: 'Chest of Destiny Doll' },
      { qty: 10,        item: 'Chest of Destiny Relic' },
      { qty: 10,        item: 'Talent Tree Potion' },
      { qty: 14,        item: 'Gate Key: Darkness' },
      { qty: 10,        item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 44,
    boss: 'Brigitte',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 6,         item: 'Mythic Claw' },
      { qty: 90,        item: 'Gracian Anniversary Coins' },
      { qty: 90,        item: "Lidia's Dress" },
      { qty: 130,       item: 'Sphere of Contained Energy' },
      { qty: 240,       item: 'Event-Coin' },
      { qty: 10,        item: 'Ancestral Keys' },
      { qty: 90,        item: 'Coin of Luck' },
      { qty: 90,        item: 'Blue Eva' },
      { qty: 90,        item: 'Rebirth Coin' },
      { qty: 10,        item: 'Chest of Destiny Doll' },
      { qty: 10,        item: 'Chest of Destiny Relic' },
      { qty: 10,        item: 'Talent Tree Potion' },
      { qty: 14,        item: 'Gate Key: Darkness' },
      { qty: 10,        item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 45,
    boss: 'Dante',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 6,         item: 'Mythic Claw' },
      { qty: 90,        item: 'Gracian Anniversary Coins' },
      { qty: 90,        item: "Lidia's Dress" },
      { qty: 130,       item: 'Sphere of Contained Energy' },
      { qty: 240,       item: 'Event-Coin' },
      { qty: 10,        item: 'Ancestral Keys' },
      { qty: 90,        item: 'Coin of Luck' },
      { qty: 90,        item: 'Blue Eva' },
      { qty: 90,        item: 'Rebirth Coin' },
      { qty: 10,        item: 'Chest of Destiny Doll' },
      { qty: 10,        item: 'Chest of Destiny Relic' },
      { qty: 10,        item: 'Talent Tree Potion' },
      { qty: 14,        item: 'Gate Key: Darkness' },
      { qty: 10,        item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 46,
    boss: 'Dwarsen',
    drops: [
      { qty: '200,000', item: 'Gold Bar' },
      { qty: 10,        item: 'Verdant Heartstone' },
      { qty: 10,        item: 'Celestial Aetherstone' },
      { qty: 170,       item: 'Gracian Anniversary Coins' },
      { qty: 170,       item: "Lidia's Dress" },
      { qty: 170,       item: 'Sphere of Contained Energy' },
      { qty: 70,        item: 'Seiya Coin' },
      { qty: 700,       item: 'Event-Coin' },
      { qty: 30,        item: 'Ancestral Keys' },
      { qty: 110,       item: 'Coin of Luck' },
      { qty: 170,       item: 'Blue Eva' },
      { qty: 170,       item: 'Rebirth Coin' },
      { qty: 20,        item: 'Chest of Destiny Doll' },
      { qty: 20,        item: 'Chest of Destiny Relic' },
      { qty: 20,        item: 'Talent Tree Potion' },
      { qty: 20,        item: 'Gate Key: Darkness' },
      { qty: 20,        item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 47,
    boss: 'Gunner',
    drops: [
      { qty: '200,000', item: 'Gold Bar' },
      { qty: 10,        item: 'Verdant Heartstone' },
      { qty: 10,        item: 'Celestial Aetherstone' },
      { qty: 170,       item: 'Gracian Anniversary Coins' },
      { qty: 170,       item: "Lidia's Dress" },
      { qty: 170,       item: 'Sphere of Contained Energy' },
      { qty: 70,        item: 'Seiya Coin' },
      { qty: 600,       item: 'Event-Coin' },
      { qty: 30,        item: 'Ancestral Keys' },
      { qty: 110,       item: 'Coin of Luck' },
      { qty: 170,       item: 'Blue Eva' },
      { qty: 170,       item: 'Rebirth Coin' },
      { qty: 20,        item: 'Chest of Destiny Doll' },
      { qty: 20,        item: 'Chest of Destiny Relic' },
      { qty: 20,        item: 'Talent Tree Potion' },
      { qty: 20,        item: 'Gate Key: Darkness' },
      { qty: 20,        item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 48,
    boss: 'ProdigyX',
    drops: [
      { qty: '200,000', item: 'Gold Bar' },
      { qty: 10,        item: 'Verdant Heartstone' },
      { qty: 10,        item: 'Celestial Aetherstone' },
      { qty: 170,       item: 'Gracian Anniversary Coins' },
      { qty: 170,       item: "Lidia's Dress" },
      { qty: 170,       item: 'Sphere of Contained Energy' },
      { qty: 70,        item: 'Seiya Coin' },
      { qty: 500,       item: 'Event-Coin' },
      { qty: 20,        item: 'Ancestral Keys' },
      { qty: 110,       item: 'Coin of Luck' },
      { qty: 170,       item: 'Blue Eva' },
      { qty: 170,       item: 'Rebirth Coin' },
      { qty: 20,        item: 'Chest of Destiny Doll' },
      { qty: 20,        item: 'Chest of Destiny Relic' },
      { qty: 20,        item: 'Talent Tree Potion' },
      { qty: 20,        item: 'Gate Key: Darkness' },
      { qty: 20,        item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 49,
    boss: 'Robusto',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 20,        item: 'Infernal Core Orb' },
      { qty: 20,        item: 'Battery of Arcane Energy' },
      { qty: 170,       item: 'Gracian Anniversary Coins' },
      { qty: 170,       item: "Lidia's Dress" },
      { qty: 196,       item: 'Sphere of Contained Energy' },
      { qty: 560,       item: 'Event-Coin' },
      { qty: 20,        item: 'Ancestral Keys' },
      { qty: 170,       item: 'Coin of Luck' },
      { qty: 170,       item: 'Blue Eva' },
      { qty: 170,       item: 'Rebirth Coin' },
      { qty: 14,        item: 'Chest of Destiny Doll' },
      { qty: 14,        item: 'Chest of Destiny Relic' },
      { qty: 14,        item: 'Talent Tree Potion' },
      { qty: 14,        item: 'Gate Key: Darkness' },
      { qty: 14,        item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 50,
    boss: 'Tiat',
    drops: [],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 51,
    boss: 'Robusto',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 20,        item: 'Infernal Core Orb' },
      { qty: 20,        item: 'Battery of Arcane Energy' },
      { qty: 170,       item: 'Gracian Anniversary Coins' },
      { qty: 170,       item: "Lidia's Dress" },
      { qty: 196,       item: 'Sphere of Contained Energy' },
      { qty: 560,       item: 'Event-Coin' },
      { qty: 20,        item: 'Ancestral Keys' },
      { qty: 170,       item: 'Coin of Luck' },
      { qty: 170,       item: 'Blue Eva' },
      { qty: 170,       item: 'Rebirth Coin' },
      { qty: 14,        item: 'Chest of Destiny Doll' },
      { qty: 14,        item: 'Chest of Destiny Relic' },
      { qty: 14,        item: 'Talent Tree Potion' },
      { qty: 14,        item: 'Gate Key: Darkness' },
      { qty: 14,        item: 'Two Demons' },
      { qty: 70,        item: "HarGunn's Ocular Gem" },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 52,
    boss: 'Robusto',
    drops: [
      { qty: '160,000', item: 'Gold Bar' },
      { qty: 20,        item: 'Infernal Core Orb' },
      { qty: 20,        item: 'Battery of Arcane Energy' },
      { qty: 170,       item: 'Gracian Anniversary Coins' },
      { qty: 170,       item: "Lidia's Dress" },
      { qty: 196,       item: 'Sphere of Contained Energy' },
      { qty: 560,       item: 'Event-Coin' },
      { qty: 20,        item: 'Ancestral Keys' },
      { qty: 170,       item: 'Coin of Luck' },
      { qty: 170,       item: 'Blue Eva' },
      { qty: 170,       item: 'Rebirth Coin' },
      { qty: 14,        item: 'Chest of Destiny Doll' },
      { qty: 14,        item: 'Chest of Destiny Relic' },
      { qty: 14,        item: 'Talent Tree Potion' },
      { qty: 14,        item: 'Gate Key: Darkness' },
      { qty: 14,        item: 'Two Demons' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 53,
    boss: 'Glacer',
    drops: [],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Immortal · +500 Rebirths',
    index: 54,
    boss: 'Freya',
    drops: [
      { qty: 30,  item: 'Freya Pants' },
      { qty: 30,  item: 'Freya Armor' },
      { qty: 30,  item: 'Freya Boots' },
      { qty: 30,  item: 'Freya Gloves' },
      { qty: 30,  item: 'Freya Wand' },
      { qty: 30,  item: 'Freya Crystal' },
      { qty: 500, item: 'Coin of Luck' },
      { qty: 500, item: 'Blue Eva' },
      { qty: 500, item: 'Gracian Anniversary Coins' },
    ],
  },
]

const TABS = [
  { key: 'all',     label: 'All' },
  { key: 'solo',    label: 'Solo Instance' },
  { key: 'party',   label: 'Party Instance' },
  { key: 'tiat',    label: 'Tiat Instance' },
  { key: 'card',    label: 'Card Instance' },
  { key: 'command', label: 'Command Channel' },
  { key: 'clan',    label: 'Clan Instance' },
]

const ALL_PAGES = [
  {
    src:     'images/lionna/instances/instances-page-1-marked.png',
    alt:     'Instance Keeper — Page 1',
    caption: 'Page 1 — Solo & Party Instances',
    filters: ['all', 'solo', 'party'],
  },
  {
    src:     'images/lionna/instances/instances-page-2-marked.png',
    alt:     'Instance Keeper — Page 2',
    caption: 'Page 2 — Party, Tiat & Command Channel',
    filters: ['all', 'party', 'tiat', 'command'],
  },
  {
    src:     'images/lionna/instances/instances-page-3.png',
    alt:     'Instance Keeper — Page 3',
    caption: 'Page 3 — Card Instances',
    filters: ['all', 'card'],
  },
  {
    src:     'images/lionna/instances/instances-page-4.png',
    alt:     'Instance Keeper — Page 4',
    caption: 'Page 4',
    filters: ['all'],
  },
  {
    src:     'images/lionna/instances/Instances-page-5.png',
    alt:     'Instance Keeper — Page 5',
    caption: 'Page 5 — Clan Instances',
    filters: ['all', 'clan'],
  },
]

const DUAL_BOSS_BOSSES = ['Lithorax', 'Sjerk', 'Wizzardy', 'Fafnir', 'Klauth']

const DUAL_BOSS_DROPS = [
  { qty: 10, item: 'Mythic Shard Common' },
  { qty: 10, item: 'Mythic Shard Regular' },
  { qty: 10, item: 'Mythic Shard Medium' },
  { qty: 10, item: 'Mythic Shard Rare' },
  { qty: 10, item: 'Mythic Shard Ultra Rare' },
  { qty: 6,  item: 'Kairos Random Card Box', highlight: true },
  { qty: 3,  item: 'Mythic Tatto Regular',    icon: 'cards-tattoo-regular.png' },
  { qty: 3,  item: 'Mythic Tatto Medium',     icon: 'cards-tattoo-medium.png' },
  { qty: 3,  item: 'Mythic Tatto Ultra Rare', icon: 'cards-tattoo-ultra-rare.png' },
]

function matches(str, q) {
  return q && str.toLowerCase().includes(q.toLowerCase())
}

function InstanceCard({ data, highlight }) {
  const q = highlight.trim()
  const headerClass = `instance-card__header instance-card__header--${data.type}`
  const bossMatch   = q && matches(data.boss, q)
  const tattooMatch = q && data.tattoo && matches(data.tattoo, q)

  return (
    <div className="instance-card">
      <div className={headerClass}>
        <span className="instance-card__label">{data.label}</span>
        <span className="instance-card__index">#{data.index}</span>
      </div>
      <div className="instance-card__body">
        {data.boss && (
          <p className={`instance-card__boss${bossMatch ? ' instance-card__boss--match' : ''}`}>
            Boss: {data.boss}
            {bossMatch && <span className="instance-match-badge">match</span>}
          </p>
        )}
        {tattooMatch && (
          <p className="instance-card__tattoo instance-card__tattoo--match">
            🔱 Tattoo unlock: <strong>{data.tattoo}</strong>
            <span className="instance-match-badge">match</span>
          </p>
        )}
        {!tattooMatch && data.tattoo && (
          <p className="instance-card__tattoo">
            🔱 Tattoo unlock: <strong>{data.tattoo}</strong>
          </p>
        )}
        {data.drops.length > 0 ? (
          <ul className="instance-card__drops">
            {data.drops.map((d, i) => {
              const hit = q && matches(d.item, q)
              return (
                <li key={i} className={`instance-card__drop${hit ? ' instance-card__drop--match' : ''}`}>
                  <span className="instance-card__drop-qty">×{d.qty}</span>
                  <span>{d.item}</span>
                  {d.note && <span className="instance-drop-note">{d.note}</span>}
                  {hit && <span className="instance-match-badge">match</span>}
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="instance-card__tbd">Drop data coming soon.</p>
        )}
      </div>
    </div>
  )
}

export default function SoloInstances() {
  const [search,    setSearch]    = useState('')
  const [highlight, setHighlight] = useState('')
  const [filter,    setFilter]    = useState('all')

  useEffect(() => {
    const t = setTimeout(() => setHighlight(search), 1000)
    return () => clearTimeout(t)
  }, [search])

  const gallerySlides = ALL_PAGES.filter(p => p.filters.includes(filter))

  const visible = useMemo(() => {
    let base = INSTANCES
    if      (filter === 'solo')    base = base.filter(i => i.type === 'solo')
    else if (filter === 'party')   base = base.filter(i => i.type === 'party')
    else if (filter === 'tiat')    base = base.filter(i => i.index === 50)
    else if (filter === 'command') base = base.filter(i => i.index === 53)
    else if (filter === 'card' || filter === 'clan') base = []
    const q = search.toLowerCase().trim()
    if (!q) return base
    return base.filter(inst => {
      if (inst.boss.toLowerCase().includes(q))                              return true
      if (inst.label.toLowerCase().includes(q))                             return true
      if (inst.tattoo && inst.tattoo.toLowerCase().includes(q))             return true
      if (String(inst.index).includes(q))                                   return true
      if (inst.drops.some(d => d.item.toLowerCase().includes(q)))           return true
      return false
    })
  }, [search, filter])

  return (
    <>
      <PageHero
        title="Solo & Party Instances"
        tagline="Every Instance Keeper challenge in one place — solo runs for lone adventurers and party instances for coordinated groups, each with unique bosses and rewards."
      />

      {/* ===== INSTANCE KEEPER ===== */}
      <SectionHeading id="instance-keeper">Instance Keeper</SectionHeading>
      <p>
        All instances — solo and party alike — are accessed through the{' '}
        <strong>Instance Keeper</strong> NPC located in <strong>Giran town</strong>. Open its
        menu to browse the available instance list organized by type and difficulty.
      </p>
      <p>
        With the exception of the <strong>Tiat Instance</strong> (which has a 1-minute
        cooldown), every instance operates on a <strong>24-hour cooldown</strong>. This
        means each instance can be visited once per day to fight its mini boss and collect
        its rewards.
      </p>
      <InfoBox variant="tip" label="When Does the Cooldown Reset?">
        <p>
          The cooldown timer starts the moment you <strong>enter</strong> the instance —
          not when you finish or exit it. If you enter an instance at <strong>13:00</strong>,
          your next available run will be the following day at <strong>13:00</strong>. Plan
          your daily runs accordingly to maximize efficiency.
        </p>
      </InfoBox>

      {/* ===== SOLO INSTANCES ===== */}
      <SectionHeading id="solo">Solo Instances</SectionHeading>
      <p>
        Solo instances are designed for individual players and are generally more accessible
        than their party counterparts. A new player can begin tackling the first few solo
        instances as soon as they have completed some of the starter{' '}
        <strong>Improved Skills</strong> from the <strong>Octavia NPC</strong> — having a
        solid base of passive improvements makes the early bosses manageable even without
        high-end gear.
      </p>
      <p>
        As the instance number increases so does the difficulty — each step up brings
        stronger mini bosses with more complex mechanics — but the{' '}
        <strong>rewards scale in kind</strong>. Higher instances drop better materials,
        rarer items, and greater quantities than the lower-tier runs, making the progression
        worth pushing into even when it feels challenging.
      </p>
      <InfoBox variant="tip" label="Getting Started">
        <p>
          If you are new to instances, focus first on the <strong>Octavia NPC</strong> to
          unlock your starter Improved Skills, then return to the Instance Keeper and work
          through the solo list from the beginning. Do not skip ahead — each instance is
          tuned to a specific power level and jumping too far will result in quick deaths
          and wasted cooldowns.
        </p>
      </InfoBox>

      {/* ===== INSTANCE MAP ===== */}
      <SectionHeading id="map">Instance Keeper</SectionHeading>
      <div className="instance-tabs">
        {TABS.map(t => (
          <button
            key={t.key}
            className={`instance-tab instance-tab--${t.key}${filter === t.key ? ' instance-tab--active' : ''}`}
            onClick={() => setFilter(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <WikiCarousel key={filter} slides={gallerySlides} />

      {/* ===== INSTANCE CARDS ===== */}
      <SectionHeading id="drops">Instance Bosses & Drops</SectionHeading>
      <div className="instance-search-bar">
        <input
          type="text"
          className="tattoo-filter-input tattoo-filter-input--wide"
          placeholder="Search by boss, item drop, difficulty, index…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className="tattoo-filter-clear" onClick={() => setSearch('')}>Clear</button>
        )}
        <span className="instance-search-count">
          {visible.length} of {INSTANCES.length} instances
        </span>
      </div>
      {filter === 'tiat' ? (
        <div className="instance-tiat-callout">
          <p>
            Tiat Instance is covered in full detail on its own dedicated page —{' '}
            <Link to="/lionna/instances/tiat" className="wiki-link">read the Tiat Instance guide</Link>.
          </p>
          <p>
            Running Tiat is the <strong>fastest way to improve two of the most impactful
            progression items</strong> in the game:
          </p>
          <ul>
            <li>
              <strong>Liora's Vengeance</strong> — a unique amulet that grows from level 1 to
              level 1000, continuously increasing attack and defense stats. Killing mobs inside
              the instance stacks levels on it automatically.
            </li>
            <li>
              <strong>Champion Lv.20 Tattoos</strong> — five tattoos purchased from{' '}
              <strong>Asta → Champion 20 Store</strong>, each improvable up to{' '}
              <strong>Improvement 4</strong>. On every Tiat kill there is up to an{' '}
              <strong>80% chance</strong> to upgrade one tattoo per party member. The five tattoos are:
              <ul className="instance-tiat-tattoo-list">
                <li>Heroic Audacity Improve</li>
                <li>Mastery of Arms Improve</li>
                <li>Natural Instinct</li>
                <li>Cunning Hunter Improved</li>
                <li>Balance of Warrior Improved</li>
              </ul>
            </li>
          </ul>
        </div>
      ) : filter === 'card' ? (
        <div className="instance-dualboss-callout">
          <p>
            The <strong>Dual Boss</strong> party instance is the only reliable daily source of cards —
            fight five bosses back to back to unlock the reward pool. Full system details on the{' '}
            <Link to="/lionna/alt-b/cards" className="wiki-link">Cards page</Link>.
          </p>
          <div className="instance-dualboss-bosses">
            {DUAL_BOSS_BOSSES.map((b, i) => (
              <span key={b} className="instance-dualboss-boss-pill">
                <span className="instance-dualboss-boss-num">{i + 1}</span>
                {b}
              </span>
            ))}
          </div>
          <p className="instance-dualboss-drop-label">Rewards per completion</p>
          <ul className="instance-card__drops">
            {DUAL_BOSS_DROPS.map((d, i) => (
              <li key={i} className={`instance-card__drop${d.highlight ? ' instance-dualboss-highlight' : ''}`}>
                <span className="instance-card__drop-qty">×{d.qty}</span>
                {d.icon && (
                  <img src={`${ALT_B}${d.icon}`} alt="" className="instance-dualboss-icon" />
                )}
                <span>{d.item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : filter === 'clan' ? (
        <p className="instance-card__tbd">Clan instance data coming soon.</p>
      ) : visible.length === 0 ? (
        <p className="instance-card__tbd">No instances match your search.</p>
      ) : (
        visible.map((inst) => (
          <InstanceCard key={inst.index} data={inst} highlight={highlight} />
        ))
      )}
    </>
  )
}
