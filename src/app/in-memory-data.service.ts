import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Champion } from './champion/champion';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of, Observable } from 'rxjs';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const champions = [
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Monkey King",
        "id": 62,
        "key": "MonkeyKing",
        "name": "Wukong"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "Grandmaster at Arms",
        "id": 24,
        "key": "Jax",
        "name": "Jax"
      }, {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "the Harbinger of Doom",
        "id": 9,
        "key": "Fiddlesticks",
        "name": "Fiddlesticks"
      },
      {
        "tags": [
          "Assassin"
        ],
        "title": "the Demon Jester",
        "id": 35,
        "key": "Shaco",
        "name": "Shaco"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Uncaged Wrath of Zaun",
        "id": 19,
        "key": "Warwick",
        "name": "Warwick"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Rebel",
        "id": 498,
        "key": "Xayah",
        "name": "Xayah"
      },
      {
        "tags": [
          "Assassin",
          "Fighter"
        ],
        "title": "the Bestial Huntress",
        "id": 76,
        "key": "Nidalee",
        "name": "Nidalee"
      },
      {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "Rise of the Thorns",
        "id": 143,
        "key": "Zyra",
        "name": "Zyra"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Cantankerous Cavalier",
        "id": 240,
        "key": "Kled",
        "name": "Kled"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Burning Vengeance",
        "id": 63,
        "key": "Brand",
        "name": "Brand"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "the Armordillo",
        "id": 33,
        "key": "Rammus",
        "name": "Rammus"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Kraken Priestess",
        "id": 420,
        "key": "Illaoi",
        "name": "Illaoi"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Daring Bombardier",
        "id": 42,
        "key": "Corki",
        "name": "Corki"
      },
      {
        "tags": [
          "Support",
          "Tank"
        ],
        "title": "the Heart of the Freljord",
        "id": 201,
        "key": "Braum",
        "name": "Braum"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Hand of Noxus",
        "id": 122,
        "key": "Darius",
        "name": "Darius"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Barbarian King",
        "id": 23,
        "key": "Tryndamere",
        "name": "Tryndamere"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Bounty Hunter",
        "id": 21,
        "key": "MissFortune",
        "name": "Miss Fortune"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "Shepherd of Souls",
        "id": 83,
        "key": "Yorick",
        "name": "Yorick"
      },
      {
        "tags": [
          "Mage",
          "Assassin"
        ],
        "title": "the Magus Ascendant",
        "id": 101,
        "key": "Xerath",
        "name": "Xerath"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Battle Mistress",
        "id": 15,
        "key": "Sivir",
        "name": "Sivir"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Exile",
        "id": 92,
        "key": "Riven",
        "name": "Riven"
      },
      {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "the Lady of Clockwork",
        "id": 61,
        "key": "Orianna",
        "name": "Orianna"
      },
      {
        "tags": [
          "Fighter"
        ],
        "title": "the Saltwater Scourge",
        "id": 41,
        "key": "Gangplank",
        "name": "Gangplank"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "Shard of the Monolith",
        "id": 54,
        "key": "Malphite",
        "name": "Malphite"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "Keeper of the Hammer",
        "id": 78,
        "key": "Poppy",
        "name": "Poppy"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Deathsinger",
        "id": 30,
        "key": "Karthus",
        "name": "Karthus"
      },
      {
        "tags": [
          "Fighter",
          "Marksman"
        ],
        "title": "the Defender of Tomorrow",
        "id": 126,
        "key": "Jayce",
        "name": "Jayce"
      },
      {
        "tags": [
          "Support",
          "Fighter"
        ],
        "title": "the Yeti Rider",
        "id": 20,
        "key": "Nunu",
        "name": "Nunu"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Troll King",
        "id": 48,
        "key": "Trundle",
        "name": "Trundle"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Outlaw",
        "id": 104,
        "key": "Graves",
        "name": "Graves"
      },
      {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "Fallen Angel",
        "id": 25,
        "key": "Morgana",
        "name": "Morgana"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Missing Link",
        "id": 150,
        "key": "Gnar",
        "name": "Gnar"
      },
      {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "the Lady of Luminosity",
        "id": 99,
        "key": "Lux",
        "name": "Lux"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Half-Dragon",
        "id": 102,
        "key": "Shyvana",
        "name": "Shyvana"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Butcher of the Sands",
        "id": 58,
        "key": "Renekton",
        "name": "Renekton"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Grand Duelist",
        "id": 114,
        "key": "Fiora",
        "name": "Fiora"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Loose Cannon",
        "id": 222,
        "key": "Jinx",
        "name": "Jinx"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Spear of Vengeance",
        "id": 429,
        "key": "Kalista",
        "name": "Kalista"
      },
      {
        "tags": [
          "Assassin",
          "Fighter"
        ],
        "title": "the Tidal Trickster",
        "id": 105,
        "key": "Fizz",
        "name": "Fizz"
      },
      {
        "tags": [
          "Assassin",
          "Mage"
        ],
        "title": "the Void Walker",
        "id": 38,
        "key": "Kassadin",
        "name": "Kassadin"
      },
      {
        "tags": [
          "Support",
          "Mage"
        ],
        "title": "Maven of the Strings",
        "id": 37,
        "key": "Sona",
        "name": "Sona"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Will of the Blades",
        "id": 39,
        "key": "Irelia",
        "name": "Irelia"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Machine Herald",
        "id": 112,
        "key": "Viktor",
        "name": "Viktor"
      },
      {
        "tags": [
          "Support"
        ],
        "title": "The Charmer",
        "id": 497,
        "key": "Rakan",
        "name": "Rakan"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "The Eternal Hunters",
        "id": 203,
        "key": "Kindred",
        "name": "Kindred"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Serpent's Embrace",
        "id": 69,
        "key": "Cassiopeia",
        "name": "Cassiopeia"
      },
      {
        "tags": [
          "Tank",
          "Mage"
        ],
        "title": "the Twisted Treant",
        "id": 57,
        "key": "Maokai",
        "name": "Maokai"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "The Fire below the Mountain",
        "id": 516,
        "key": "Ornn",
        "name": "Ornn"
      },
      {
        "tags": [
          "Support",
          "Fighter"
        ],
        "title": "the Chain Warden",
        "id": 412,
        "key": "Thresh",
        "name": "Thresh"
      },
      {
        "tags": [
          "Fighter",
          "Support"
        ],
        "title": "The Judicator",
        "id": 10,
        "key": "Kayle",
        "name": "Kayle"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Shadow of War",
        "id": 120,
        "key": "Hecarim",
        "name": "Hecarim"
      },
      {
        "tags": [
          "Assassin",
          "Fighter"
        ],
        "title": "the Voidreaver",
        "id": 121,
        "key": "Khazix",
        "name": "Kha'Zix"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Berserker",
        "id": 2,
        "key": "Olaf",
        "name": "Olaf"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Hexplosives Expert",
        "id": 115,
        "key": "Ziggs",
        "name": "Ziggs"
      },
      {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "the Dark Sovereign",
        "id": 134,
        "key": "Syndra",
        "name": "Syndra"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Madman of Zaun",
        "id": 36,
        "key": "DrMundo",
        "name": "Dr. Mundo"
      },
      {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "the Enlightened One",
        "id": 43,
        "key": "Karma",
        "name": "Karma"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Dark Child",
        "id": 1,
        "key": "Annie",
        "name": "Annie"
      },
      {
        "tags": [
          "Assassin"
        ],
        "title": "the Fist of Shadow",
        "id": 84,
        "key": "Akali",
        "name": "Akali"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Thunder's Roar",
        "id": 106,
        "key": "Volibear",
        "name": "Volibear"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Unforgiven",
        "id": 157,
        "key": "Yasuo",
        "name": "Yasuo"
      },
      {
        "tags": [
          "Mage",
          "Marksman"
        ],
        "title": "the Heart of the Tempest",
        "id": 85,
        "key": "Kennen",
        "name": "Kennen"
      },
      {
        "tags": [
          "Assassin",
          "Fighter"
        ],
        "title": "the Pridestalker",
        "id": 107,
        "key": "Rengar",
        "name": "Rengar"
      },
      {
        "tags": [
          "Mage",
          "Fighter"
        ],
        "title": "the Rune Mage",
        "id": 13,
        "key": "Ryze",
        "name": "Ryze"
      },
      {
        "tags": [
          "Tank"
        ],
        "title": "the Eye of Twilight",
        "id": 98,
        "key": "Shen",
        "name": "Shen"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "the Secret Weapon",
        "id": 154,
        "key": "Zac",
        "name": "Zac"
      },
      {
        "tags": [
          "Assassin",
          "Fighter"
        ],
        "title": "the Blade's Shadow",
        "id": 91,
        "key": "Talon",
        "name": "Talon"
      },
      {
        "tags": [
          "Mage",
          "Fighter"
        ],
        "title": "the Master Tactician",
        "id": 50,
        "key": "Swain",
        "name": "Swain"
      },
      {
        "tags": [
          "Support",
          "Mage"
        ],
        "title": "the Wandering Caretaker",
        "id": 432,
        "key": "Bard",
        "name": "Bard"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "The Undead Juggernaut",
        "id": 14,
        "key": "Sion",
        "name": "Sion"
      },
      {
        "tags": [
          "Marksman",
          "Assassin"
        ],
        "title": "the Night Hunter",
        "id": 67,
        "key": "Vayne",
        "name": "Vayne"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Curator of the Sands",
        "id": 75,
        "key": "Nasus",
        "name": "Nasus"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Shadow Reaper",
        "id": 141,
        "key": "Kayn",
        "name": "Kayn"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Card Master",
        "id": 4,
        "key": "TwistedFate",
        "name": "Twisted Fate"
      },
      {
        "tags": [
          "Tank",
          "Mage"
        ],
        "title": "the Terror of the Void",
        "id": 31,
        "key": "Chogath",
        "name": "Cho'Gath"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Spirit Walker",
        "id": 77,
        "key": "Udyr",
        "name": "Udyr"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Purifier",
        "id": 236,
        "key": "Lucian",
        "name": "Lucian"
      },
      {
        "tags": [
          "Support",
          "Mage"
        ],
        "title": "the Green Father",
        "id": 427,
        "key": "Ivern",
        "name": "Ivern"
      },
      {
        "tags": [
          "Tank",
          "Support"
        ],
        "title": "the Radiant Dawn",
        "id": 89,
        "key": "Leona",
        "name": "Leona"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Sheriff of Piltover",
        "id": 51,
        "key": "Caitlyn",
        "name": "Caitlyn"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "Fury of the North",
        "id": 113,
        "key": "Sejuani",
        "name": "Sejuani"
      },
      {
        "tags": [
          "Assassin",
          "Fighter"
        ],
        "title": "the Eternal Nightmare",
        "id": 56,
        "key": "Nocturne",
        "name": "Nocturne"
      },
      {
        "tags": [
          "Support",
          "Mage"
        ],
        "title": "the Chronokeeper",
        "id": 26,
        "key": "Zilean",
        "name": "Zilean"
      },
      {
        "tags": [
          "Mage",
          "Marksman"
        ],
        "title": "the Emperor of the Sands",
        "id": 268,
        "key": "Azir",
        "name": "Azir"
      },
      {
        "tags": [
          "Fighter",
          "Mage"
        ],
        "title": "the Mechanized Menace",
        "id": 68,
        "key": "Rumble",
        "name": "Rumble"
      },
      {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "the Stoneweaver",
        "id": 163,
        "key": "Taliyah",
        "name": "Taliyah"
      },
      {
        "tags": [
          "Marksman",
          "Assassin"
        ],
        "title": "the Swift Scout",
        "id": 17,
        "key": "Teemo",
        "name": "Teemo"
      },
      {
        "tags": [
          "Fighter",
          "Marksman"
        ],
        "title": "the Dreadnought",
        "id": 6,
        "key": "Urgot",
        "name": "Urgot"
      },
      {
        "tags": [
          "Tank",
          "Mage"
        ],
        "title": "the Sad Mummy",
        "id": 32,
        "key": "Amumu",
        "name": "Amumu"
      },
      {
        "tags": [
          "Tank",
          "Mage"
        ],
        "title": "the Colossus",
        "id": 3,
        "key": "Galio",
        "name": "Galio"
      },
      {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "the Revered Inventor",
        "id": 74,
        "key": "Heimerdinger",
        "name": "Heimerdinger"
      },
      {
        "tags": [
          "Mage",
          "Support"
        ],
        "title": "the Cryophoenix",
        "id": 34,
        "key": "Anivia",
        "name": "Anivia"
      },
      {
        "tags": [
          "Marksman",
          "Support"
        ],
        "title": "the Frost Archer",
        "id": 22,
        "key": "Ashe",
        "name": "Ashe"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Eye of the Void",
        "id": 161,
        "key": "Velkoz",
        "name": "Vel'Koz"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "the Mad Chemist",
        "id": 27,
        "key": "Singed",
        "name": "Singed"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Crystal Vanguard",
        "id": 72,
        "key": "Skarner",
        "name": "Skarner"
      },
      {
        "tags": [
          "Marksman",
          "Mage"
        ],
        "title": "the Arrow of Retribution",
        "id": 110,
        "key": "Varus",
        "name": "Varus"
      },
      {
        "tags": [
          "Marksman",
          "Assassin"
        ],
        "title": "the Plague Rat",
        "id": 29,
        "key": "Twitch",
        "name": "Twitch"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "The Might of Demacia",
        "id": 86,
        "key": "Garen",
        "name": "Garen"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "the Great Steam Golem",
        "id": 53,
        "key": "Blitzcrank",
        "name": "Blitzcrank"
      },
      {
        "tags": [
          "Assassin",
          "Fighter"
        ],
        "title": "the Wuju Bladesman",
        "id": 11,
        "key": "MasterYi",
        "name": "Master Yi"
      },
      {
        "tags": [
          "Mage",
          "Fighter"
        ],
        "title": "the Spider Queen",
        "id": 60,
        "key": "Elise",
        "name": "Elise"
      },
      {
        "tags": [
          "Tank",
          "Support"
        ],
        "title": "the Minotaur",
        "id": 12,
        "key": "Alistar",
        "name": "Alistar"
      },
      {
        "tags": [
          "Assassin",
          "Mage"
        ],
        "title": "the Sinister Blade",
        "id": 55,
        "key": "Katarina",
        "name": "Katarina"
      },
      {
        "tags": [
          "Assassin",
          "Fighter"
        ],
        "title": "the Boy Who Shattered Time",
        "id": 245,
        "key": "Ekko",
        "name": "Ekko"
      },
      {
        "tags": [
          "Fighter"
        ],
        "title": "the Iron Revenant",
        "id": 82,
        "key": "Mordekaiser",
        "name": "Mordekaiser"
      },
      {
        "tags": [
          "Support",
          "Mage"
        ],
        "title": "the Fae Sorceress",
        "id": 117,
        "key": "Lulu",
        "name": "Lulu"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Steel Shadow",
        "id": 164,
        "key": "Camille",
        "name": "Camille"
      },
      {
        "tags": [
          "Fighter",
          "Tank"
        ],
        "title": "the Darkin Blade",
        "id": 266,
        "key": "Aatrox",
        "name": "Aatrox"
      },
      {
        "tags": [
          "Marksman"
        ],
        "title": "the Glorious Executioner",
        "id": 119,
        "key": "Draven",
        "name": "Draven"
      },
      {
        "tags": [
          "Support",
          "Tank"
        ],
        "title": "the River King",
        "id": 223,
        "key": "TahmKench",
        "name": "Tahm Kench"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Artisan of War",
        "id": 80,
        "key": "Pantheon",
        "name": "Pantheon"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Seneschal of Demacia",
        "id": 5,
        "key": "XinZhao",
        "name": "Xin Zhao"
      },
      {
        "tags": [
          "Mage",
          "Fighter"
        ],
        "title": "The Star Forger",
        "id": 136,
        "key": "AurelionSol",
        "name": "Aurelion Sol"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Blind Monk",
        "id": 64,
        "key": "LeeSin",
        "name": "Lee Sin"
      },
      {
        "tags": [
          "Support",
          "Fighter"
        ],
        "title": "the Shield of Valoran",
        "id": 44,
        "key": "Taric",
        "name": "Taric"
      },
      {
        "tags": [
          "Mage",
          "Assassin"
        ],
        "title": "the Prophet of the Void",
        "id": 90,
        "key": "Malzahar",
        "name": "Malzahar"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Ice Witch",
        "id": 127,
        "key": "Lissandra",
        "name": "Lissandra"
      },
      {
        "tags": [
          "Fighter",
          "Mage"
        ],
        "title": "Scorn of the Moon",
        "id": 131,
        "key": "Diana",
        "name": "Diana"
      },
      {
        "tags": [
          "Marksman",
          "Assassin"
        ],
        "title": "the Yordle Gunner",
        "id": 18,
        "key": "Tristana",
        "name": "Tristana"
      },
      {
        "tags": [
          "Fighter"
        ],
        "title": "the Void Burrower",
        "id": 421,
        "key": "RekSai",
        "name": "Rek'Sai"
      },
      {
        "tags": [
          "Mage",
          "Tank"
        ],
        "title": "the Crimson Reaper",
        "id": 8,
        "key": "Vladimir",
        "name": "Vladimir"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "the Exemplar of Demacia",
        "id": 59,
        "key": "JarvanIV",
        "name": "Jarvan IV"
      },
      {
        "tags": [
          "Support",
          "Mage"
        ],
        "title": "the Tidecaller",
        "id": 267,
        "key": "Nami",
        "name": "Nami"
      },
      {
        "tags": [
          "Marksman",
          "Assassin"
        ],
        "title": "the Virtuoso",
        "id": 202,
        "key": "Jhin",
        "name": "Jhin"
      },
      {
        "tags": [
          "Support",
          "Mage"
        ],
        "title": "the Starchild",
        "id": 16,
        "key": "Soraka",
        "name": "Soraka"
      },
      {
        "tags": [
          "Mage"
        ],
        "title": "the Tiny Master of Evil",
        "id": 45,
        "key": "Veigar",
        "name": "Veigar"
      },
      {
        "tags": [
          "Support",
          "Mage"
        ],
        "title": "the Storm's Fury",
        "id": 40,
        "key": "Janna",
        "name": "Janna"
      },
      {
        "tags": [
          "Tank",
          "Fighter"
        ],
        "title": "the Titan of the Depths",
        "id": 111,
        "key": "Nautilus",
        "name": "Nautilus"
      },
      {
        "tags": [
          "Assassin",
          "Mage"
        ],
        "title": "the Widowmaker",
        "id": 28,
        "key": "Evelynn",
        "name": "Evelynn"
      },
      {
        "tags": [
          "Fighter",
          "Mage"
        ],
        "title": "the Rabble Rouser",
        "id": 79,
        "key": "Gragas",
        "name": "Gragas"
      },
      {
        "tags": [
          "Assassin",
          "Fighter"
        ],
        "title": "the Master of Shadows",
        "id": 238,
        "key": "Zed",
        "name": "Zed"
      },
      {
        "tags": [
          "Fighter",
          "Assassin"
        ],
        "title": "the Piltover Enforcer",
        "id": 254,
        "key": "Vi",
        "name": "Vi"
      },
      {
        "tags": [
          "Marksman",
          "Mage"
        ],
        "title": "the Mouth of the Abyss",
        "id": 96,
        "key": "KogMaw",
        "name": "Kog'Maw"
      },
      {
        "tags": [
          "Mage",
          "Assassin"
        ],
        "title": "the Nine-Tailed Fox",
        "id": 103,
        "key": "Ahri",
        "name": "Ahri"
      },
      {
        "tags": [
          "Marksman",
          "Fighter"
        ],
        "title": "Demacia's Wings",
        "id": 133,
        "key": "Quinn",
        "name": "Quinn"
      },
      {
        "tags": [
          "Assassin",
          "Mage"
        ],
        "title": "the Deceiver",
        "id": 7,
        "key": "Leblanc",
        "name": "LeBlanc"
      },
      {
        "tags": [
          "Marksman",
          "Mage"
        ],
        "title": "the Prodigal Explorer",
        "id": 81,
        "key": "Ezreal",
        "name": "Ezreal"
      }
    ];

    const sorts = [
      {
        "id": 1,
        "summonerLevel": 6,
        "name": "Cleanse",
        "key": "SummonerBoost",
        "description": "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds."
      },
      {
        "id": 3,
        "summonerLevel": 4,
        "name": "Exhaust",
        "key": "SummonerExhaust",
        "description": "Exhausts target enemy champion, reducing their Movement Speed by 30%, and their damage dealt by 40% for 2.5 seconds."
      },
      {
        "id": 4,
        "summonerLevel": 8,
        "name": "Flash",
        "key": "SummonerFlash",
        "description": "Teleports your champion a short distance toward your cursor's location."
      },
      {
        "id": 6,
        "summonerLevel": 1,
        "name": "Ghost",
        "key": "SummonerHaste",
        "description": "Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of 28-45% (depending on champion level) Movement Speed after accelerating for 2 seconds."
      },
      {
        "id": 7,
        "summonerLevel": 1,
        "name": "Heal",
        "key": "SummonerHeal",
        "description": "Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal."
      },
      {
        "id": 11,
        "summonerLevel": 10,
        "name": "Smite",
        "key": "SummonerSmite",
        "description": "Deals 390-1000 true damage (depending on champion level) to target epic, large, or medium monster or enemy minion. Restores Health based on your maximum life when used against monsters."
      },
      {
        "id": 12,
        "summonerLevel": 6,
        "name": "Teleport",
        "key": "SummonerTeleport",
        "description": "After channeling for 4.5 seconds, teleports your champion to target allied structure, minion, or ward."
      },
      {
        "id": 13,
        "summonerLevel": 1,
        "name": "Clarity",
        "key": "SummonerMana",
        "description": "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana."
      },
      {
        "id": 14,
        "summonerLevel": 10,
        "name": "Ignite",
        "key": "SummonerDot",
        "description": "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration."
      },
      {
        "id": 21,
        "summonerLevel": 4,
        "name": "Barrier",
        "key": "SummonerBarrier",
        "description": "Shields your champion from 115-455 damage (depending on champion level) for 2 seconds."
      },
      {
        "id": 30,
        "summonerLevel": 1,
        "name": "To the King!",
        "key": "SummonerPoroRecall",
        "description": "Quickly travel to the Poro King's side."
      },
      {
        "id": 31,
        "summonerLevel": 1,
        "name": "Poro Toss",
        "key": "SummonerPoroThrow",
        "description": "Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up."
      },
      {
        "id": 32,
        "summonerLevel": 1,
        "name": "Mark",
        "key": "SummonerSnowball",
        "description": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up."
      },
      {
        "id": 33,
        "summonerLevel": 1,
        "name": "Nexus Siege: Siege Weapon Slot",
        "key": "SummonerSiegeChampSelect1",
        "description": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!"
      },
      {
        "id": 34,
        "summonerLevel": 1,
        "name": "Nexus Siege: Siege Weapon Slot",
        "key": "SummonerSiegeChampSelect2",
        "description": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!"
      },
      {
        "id": 35,
        "summonerLevel": 1,
        "name": "Disabled Summoner Spells",
        "key": "SummonerDarkStarChampSelect1",
        "description": "Summoner spells are disabled in this mode."
      },
      {
        "id": 36,
        "summonerLevel": 1,
        "name": "Disabled Summoner Spells",
        "key": "SummonerDarkStarChampSelect2",
        "description": "Summoner spells are disabled in this mode."
      }
    ];

    return { champions , sorts};
  }

}