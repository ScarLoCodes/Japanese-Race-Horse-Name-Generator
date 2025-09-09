function generateName() {
let Frags_First = [
  "Shin", "Hikari", "Admire", "Groove", "Mars", "Moon", "Rakti", "Vega",
  "Agnes", "Flight", "Flora", "Tachyon", "Air", "Groove", "Akai", "Ito", "Akaitorino", "Musume",
  "Al", "Ain", "Almond", "Eye", "Apapane", "Ascoli", "Piceno", "Ask", "Victor", "More", "Aventura", "Ayusan",
  "Blast", "One-piece", "Bubble", "Gum", "Fellow", "Buena", "Vista",
  "Cervinia", "Cesario", "Cheval", "Grand", "Chrono", "Genesis", "Circle of", "Life", "Continuous", "Contrail",
  "Copano", "Rickey", "Croix du", "Nord", "Curren", "Chan",
  "Daiwa", "Major", "Scarlet", "Dance", "The Dark", "Partner", "Danon", "Decile", "Fantasy",
  "Kingly", "Platina", "Premium", "Scorpion", "Smash", "The", "Kid",
  "Daring", "Tact", "Dee", "Majesty", "Deep", "Brillante", "Impact", "Sky", "Deirdre", "Delta", "Blues",
  "Do", "Deuce", "Dojima", "Fighter", "Dream", "Journey", "Duramente", "Durezza",
  "Efforia", "Eishin", "Flash", "Embroidery", "Epiphaneia", "Epoca", "d'Oro", "Equinox", "Espoir", "City",
  "Fenomeno", "Fierement", "Forever", "Young", "Fuji", "Kiseki",
  "Gentildonna", "Genuine", "Geoglyph", "Geraldina", "Glory", "Vase", "Gold", "Allure", "Ship",
  "Gran", "Alegria", "Grenadier", "Guards", "Over My", "Gilded",
  "Haiseiko", "Harp", "Star", "Haru", "Urara", "Heart's", "Cry", "Hokko", "Tarumae", "Hokuto", "Vega",
  "Indy", "Champ", "Ines", "Fujin", "Isla", "Bonita",
  "Jantar", "Mantar", "Jeweler", "Joie", "Vivre", "Jungle", "Pocket", "Just", "Way", "Justin", "Milano",
  "Kamunyak", "Kane", "Hekili", "Karakontie", "Katsuragi", "Ace", "Killer", "Ability", "King", "Halo",
  "Kamehameha", "Kitasan", "Black", "Kizuna", "Kurifuji",
  "Lauda", "Sion", "Legacy", "World", "Lei", "Papale", "Leontes", "Liberty", "Island", "Logi", "Universe", 
  "Lord", "Kanaloa", "Lovely", "Day", "Loves", "Only", "You", "Lucky", "Lilac", "Lys", "Gracieux",
  "Major", "Emblem", "Makahiki", "Manhattan", "Cafe", "Marche", "Lorraine", "Marialite", "Maruzensky",
  "Marvelous", "Crown", "Matsurida", "Gogh", "Maurice", "Mayano", "Top", "Gun", "Meisho", "Mambo", "Samson",
  "Tabaru", "Mejiro", "McQueen", "Ramonu", "Mikki", "Isle", "Queen", "Mr", "Museum", "Mile",
  "Nakayama", "Festa", "Naran", "Huleg", "Narita", "Brian", "Top", "Road", "Neo", "Universe", "Nice", "Nature",
  "Normcore", "Northern", "River", "Sushi", "Endless", "Eternal", "Masterful", "Colorful",
  "Oguri", "Cap", "Oju", "Chosan", "One and Only", "Only", "Orfevre",
  "Panja", "Tower", "Panthalassa", "Pixie", "Knight", "Pop", "Rock", "Potager",
  "Rainbow", "Line", "Real", "Steel", "Regaleira", "Reine", "Minoru", "Resistencia", "Reve", "d'Essor",
  "Rey", "Oro", "Rhein", "Kraft", "Rice", "Shower", "Roger", "Barows", "Rose", "Kingdom", "Rulership",
  "Salios", "Satono", "Crown", "Diamond", "Saturnalia", "Saxon", "Warrior", "Screen", "Hero",
  "Seiun", "Sky", "Shahryar", "Shinzan", "Shiva", "Shonan", "Adela", "Pandora", "Silence", "Suzuka",
  "Sinhalite", "Smart", "Falcon", "Snowfall", "Sodashi", "Sol", "Oriens", "Songline", "Soul", "Rush",
  "Stirring", "Special", "Week", "Lite", "Stars", "Earth", "Stay", "Gold", "Stellenbosch",
  "Still in", "Love", "Straight", "Girl", "Stunning", "Rose", "Suave", "Richard", "Super", "Creek", "Suzuka", "Mambo",
  "Sweep", "Tosho", "Symboli", "Rudolf", "Kalkite", "Best",
  "Opera", "Tall", "Poppy", "Tamamo", "Cross", "Tanino", "Gimlet", "Tastiera", "Tayasu", "Tsuyoshi",
  "Ten", "Point", "Titleholder", "Tokai", "Teio", "Tokino", "Minoru", "Tosen",
  "Uberleben", "Urban", "Chic", "Ushba", "Tesoro", "Jojo",
  "Vela", "Azul", "Verxina", "Victoire", "Pisa", "Vivlos", "Vodka",
  "Wagnerian", "Win", "Bright", "World", "Premiere",
  "Zenno", "Rob", "Roy", "Twin", "Azure", "Storm", "Sleek", "Luminous", "Crisp", "Kinetic", "Electric",
  "Stellar", "Vivid", "Razor-sharp", "Mercurial", "Pristine",
  "Nocturnal", "Mythic", "Ferocious", "Gilded", "Neon",
  "Cobalt", "Savage", "Maverick", "Untamed", "Sublime",
  "Volatile", "Magnetic", "Sinister", "Ruthless", "Unbreakable",
  "Golden","Brown","Caramel","Bronze","Ruby", "Hishi",
  "Mahogany", "Ebony", "Skibidi", "Matikane", "Strawhat"
];


let Frags_Second = [
  "Hikari", "Groove", "Mars", "Moon", "Rakti", "Vega",
  "Flight", "Flora", "Tachyon", "Groove", "Ito", "Musume",
  "Ain", "Eye", "Apapane", "Piceno", "More", "Aventura", "Ayusan", "Fellow", "Vista",
  "Cervinia", "Cesario", "Grand", "Genesis", "Life", "Continuous", "Contrail",
  "Rickey", "Nord", "Chan", "Jewel", "Flame", "Overdrive",
  "Major", "Scarlet", "Dark", "Partner", "Decile", "Fantasy",
  "Kingly", "Platina", "Premium", "Scorpion", "Smash", "Kid",
  "Tact", "Majesty", "Brillante", "Impact", "Sky", "Deirdre", "Blues",
  "Deuce", "Fighter", "Journey", "Duramente", "Durezza",
  "Efforia", "Flash", "Embroidery", "Epiphaneia", "d'Oro", "Equinox", "City",
  "Fenomeno", "Fierement", "Young", "Kiseki",
  "Gentildonna", "Genuine", "Geoglyph", "Geraldina", "Vase", "Allure", "Ship",
  "Alegria", "Guards", "Onigiri", "Akebono", "Amazon", "Lady",
  "Haiseiko", "Star", "Urara", "Cry", "Tarumae", "Vega",
  "Champ", "Fujin", "Bonita", "Train", "Roadster",
  "Mantar", "Jeweler", "Vivre", "Pocket", "Way", "Milano",
  "Kamunyak", "Hekili", "Karakontie", "Ace", "Ability", "Halo",
  "Kamehameha", "Black", "Kizuna", "Kurifuji",
  "Sion", "World", "Papale", "Leontes", "Island", "Universe",
  "Rizz", "Kanaloa", "Day", "You", "Lilac", "Gracieux",
  "Emblem", "Makahiki", "Cafe", "Lorraine", "Marialite", "Maruzensky",
  "Crown", "Gogh", "Maurice", "Gun", "Mambo", "Samson",
  "Tabaru", "McQueen", "Ramonu", "Isle", "Queen", "C", "B",
  "Mile", "Heart", "Emperor", "Countess",
  "Festa", "Huleg", "Brian", "Road", "Universe", "Nature",
  "Normcore", "River",
  "Cap", "Chosan", "Only", "Orfevre",
  "Tower", "Panthalassa", "Knight", "Rock", "Potager",
  "Line", "Steel", "Regaleira", "Minoru", "Resistencia", "Essor",
  "Oro", "Kraft", "Shower", "Barows", "Kingdom", "Rulership",
  "Salios", "Crown", "Diamond", "Saturnalia", "Warrior", "Hero",
  "Sky", "Shahryar", "Shinzan", "Shiva", "Adela", "Pandora", "Suzuka",
  "Sinhalite", "Falcon", "Snowfall", "Sodashi", "Oriens", "Songline", "Rush",
  "Stirring", "Week", "Lite", "Earth", "Gold", "Stellenbosch",
  "Love", "Girl", "Rose", "Richard", "Creek", "Mambo",
  "Tosho", "Rudolf",
  "O", "Poppy", "Cross", "Gimlet", "Tastiera",
  "Tsuyoshi", "Point", "Titleholder", "Teio", "Minoru", "Ra",
  "Uberleben", "Chic", "Tesoro",
  "Azul", "Verxina", "Pisa", "Vivlos", "Vodka",
  "Wagnerian", "Bright", "Premiere",
  "Roy", "Miku", "Yukina", "Hikari", "Yuzuki", "Haruka", "Akari", "Erika", "Ayaka", "Yuki",
  "Ichika", "Yuuka", "Himari", "Miharu", "Misaki", "Sayaka", "Yurika", "Saki",
  "Emika", "Honoka", "Yurina", "Kanami", "Haruna", "Yuka", "Arisa", "Minori",
  "Asana", "Kana", "Yuuki", "Miki", "Rinka", "Aya", "Hana", "Kimora", "Kaiya",
  "Kiera", "Ayana", "Amaya", "Reina", "Mei", "Rio", "Rei", "Michiko", "Sakura", "Lotus",
  "Lightning", "Ryu", "Storm", "Fukukitaru", "Nissan", "Honda", "Toyota", "Suzuki",
  "Emilia", "Hannah", "Sophia", "Emma", "Mia",
  "Lina", "Mila", "Ella", "Lea", "Clara", "X", "Z",
  "Charlotte", "Ida", "Marie", "Frieda", "Mathilda",
  "Greta", "Leni", "Johanna", "Luisa", "Helena",
  "Anneliese", "Klara", "Isabell", "Lotte", "Magdalena", "Tannhauser"
];

//Check for Add-ins
let FirstAddNames = document.forms["SettingsForm"]["FirstNameAddinsInput"].value
let SecondAddNames = document.forms["SettingsForm"]["SecondNameAddinsInput"].value
let AllFirstNames = Frags_First
let AllSecondNames = Frags_Second

if (FirstAddNames.length > 0) {
    AllFirstNames = FirstAddNames.split(',')
}

if (SecondAddNames.length > 0) {
    AllSecondNames = SecondAddNames.split(',')
}

return AllFirstNames[Math.floor(Math.random() * AllFirstNames.length)] + " " + AllSecondNames[Math.floor(Math.random() * AllSecondNames.length)]
};

function generateNames() {
    //Clear List
    document.getElementById("NamesList").innerHTML = "";

    //Get requested count
    let LoopCount = 0;
    LoopCount = document.forms["SettingsForm"]["NumOfNamesInput"].value;
    if (LoopCount < 1) {
        LoopCount = 1;
    }

    //Generate list
    for (let i = 0; i < LoopCount; i++) {
        document.getElementById("NamesList").innerHTML += `<li class=\"list-group-item">${generateName()}</li>`;
    }
}