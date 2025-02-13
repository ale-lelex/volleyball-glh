// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN BÁSICA 😀 ▇▇▇▇▇▇▇▇▇


// 📝 NOMBRE DEL HOST
var NombreHost = '▶️▶️🟦🟩  UNETE Y JUEGA 🟩🟦◀️◀️';
// Definimos el nombre del host (dentro de las comillas)


// 👤 VISIBILIDAD DEL BOT
var BotVisible = false; 
// Elige true si quieres que el bot sea visible como jugador o false para que esté oculto.


// 🚩 NOMBRE DEL BOT
var NombreBot = "🚩 Árbitro Bot 🤖"; 
// Define el nombre del bot.


// 🔒 CONTRASEÑA DEL HOST
var PasswordDelHost = null;
// Contraseña para acceder al Host (dejar null si no quieres colocarle una contraseña). Si quieres una contraseña, reemplaza null y coloca la contraseña entre comillas (Ejemplo: var PasswordDelHost = "123";)


// 👁️ VISIBILIDAD DEL HOST 
var VisibilidadDelHost = true; 
// La sala es pública si está en "true", privada si está en "false"


// 👥 CANTIDAD MÁXIMA DE JUGADORES
var CantidadDeJugadores = 16; 
// Cantidad máxima de jugadores que permitirás ingresar a tu Host. Puedes elegir entre 1 y 30 jugadores


// 🔑 CONTRASEÑA PARA SER ADMINISTRADOR
var ClaveParaSerAdmin = "!axeso5"; 
// Clave para ser administrador. Pon la contraseña entre comillas.


// 🗺️ MAPA POR DEFECTO
var MapaPorDefecto = "Futsal x3"; 
// OPCIONES: Futsal x2, Futsal x3, Futsal x4, Futsal x5, Futsal x5 cesped, Futsal x7, Real Futsal, Campeones, Premios


// ⏱️ TIEMPO DE JUEGO
var TiempoDeJuego = 3;
// Duración por defecto de las partidas (En minutos)


// ⚽ LÍMITE DE GOLES
var LimiteDeGoles = 3;
// Limite de Goles por defecto


// 📏 TAMAÑO DE LOS JUGADORES

var TamanoMinimoPermitido = 15;
// Tamaño mínimo permitido para un jugador 

var TamanoMaximoPermitido = 15;
// Tamaño máximo permitido para un jugador


// 👑 ADMINISTRADORES DEL HOST
var AdministradoresDelHost = [""];
// Coloca los nicknames de los administradores. EJEMPLO: var AdministradoresDelHost = ["Messi10", "Neymar #11 PSG", "Ronaldinho BRA"];

// 🔐 CONTRASEÑA PARA ADMINISTRADORES
var contrasena = "reservado";
// Contraseña para reservar el espacio a los Administradores


// 🗳️ VOTACIONES

// Variable configurable para el porcentaje de votos requeridos

var PorcentajeDeVotosBan = 40; 
// Cambia este valor al porcentaje deseado (por ejemplo, 30 para 30% de los votos)

var PorcentajeDeVotosAdmin = 40; 
// Cambia este valor al porcentaje deseado (por ejemplo, 30 para 30% de los votos)



// ▇▇▇▇▇▇▇ 🚫 RESTRICCIONES DE ACCESO 🚫 ▇▇▇▇▇▇▇

// 🚫 BANEO DE IPs DUPLICADAS
var BanearIPsDuplicadas = "Si";
// Cambia "Si" por "No" si no deseas banear IPs duplicadas


// 🚫🌎 PAISES PROHIBIDOS
const PaisesProhibidos = [];
// Si un jugador es de alguno de estos países, será expulsado automáticamente al ingresar.
// EJEMPLO DE USO: const PaisesProhibidos = ["Argentina", "Brazil", "Chile"];
 

// 🚫📶 IPS BANEADAS
let IpPlayers = []; // Añade entre comillas las Ips de los jugadores que quieras prohibir su ingreso. EJEMPLO: let IpPlayers = ["123.456.789", "987.654.321"];

var MensajeBaneoPorIp = "❌ El admin ha baneado tu IP 📶"


// ❌📛 NICKNAMES PROHIBIDOS
const NicknamesPROHIBIDOS = ["@everyone", "@here", "@"]; 
// Lista de nicknames prohibidos
// Define los nicknames que no pueden ser utilizados

// ▇▇▇▇▇▇▇ 🎮 MODOS DE JUEGO  ▇▇▇▇▇▇▇


let autoBalanceEnabled = false; // true para ACTIVARLO - false para DESACTIVARLO | Equilibrar equipos en cantidad de jugadores

var cambioCami = false; // true para ACTIVARLO - false para DESACTIVARLO | Cambiar camisetas automáticamente cada vez que se reinicia un partido.

var powerShotMode = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar el Disparo Potente (PowerShot)

var JabulaniMode = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar el Disparo Potente (PowerShot) con comba

var combaMode = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar sólo la Comba (cada vez que se patea la pelota)

var GolDeOroActivado = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar Gol de Oro

var FairPlayActivado = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo FairPlay

var automatizadoActivado = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo Automatizado

var tiempoLimiteCambio = 30; // Tiempo límite (en segundos) para permitir cambiar mapa automaticamente

let ganasigueEnabled = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo Gana Sigue

let modoJueganTodos = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo Juegan Todos

let modoJueganAlgunos = false; // true para ACTIVARLO - false para DESACTIVARLO |Modo Juegan Algunos

let maxPlayersPerTeam = 1; // Establecer el número máximo de jugadores por equipo (Modo Juegan Algunos)

let isAFKpaused = false; // Estado inicial del detector de AFK



// ▇▇▇▇▇▇▇ ⚽👕 CAMISETAS POR DEFECTO ⚽👕 ▇▇▇▇▇▇▇

// CAMISETA EQUIPO RED 🔴
var camisetaRed = "/colors red 66 FFA649 DE0019 B80017 820217";
var NombreEquipoRojo = "RED";

// CAMISETA EQUIPO BLUE 🔵
var camisetaBlue = "/colors blue 55 c1ff00 052647 005DB3 03B2F0";
var NombreEquipoAzul = "BLUE";


// ▇▇▇▇▇▇▇ ⚽👕 AÑADIR CAMISETAS DE EQUIPOS ⚽👕 ▇▇▇▇▇▇▇

var camisetasEquipos = {

// BARCELONA
    "barcelona/titular/red": {
        codigo: "/colors red 180 F5B606 011EDE C80056",
        nombreEquipo: "BARCELONA FC"
    },
    "barcelona/titular/blue": {
        codigo: "/colors blue 180 F5B606 011EDE C80056",
        nombreEquipo: "BARCELONA FC"
    },

// REAL MADRID
    "realmadrid/titular/red": {
        codigo: "/colors red 73 0F2145 FFC10A FFFFFF FFFFFF",
        nombreEquipo: "REAL MADRID"
    },
    "realmadrid/titular/blue": {
        codigo: "/colors blue 73 0F2145 FFC10A FFFFFF FFFFFF",
        nombreEquipo: "REAL MADRID"
    }
};

// ▇▇▇▇▇▇▇▇▇ 🌐 FUNCIONES DE DISCORD 🤖 ▇▇▇▇▇▇▇▇▇

// 🔥 Webhook para ANUNCIAR que has CREADO UNA SALA. Reemplaza con tu propia URL de webhook.
var AnuncioHostAbierto = "https://discord.com/api/webhooks/1201825912958767134/g1BEoP1RNO_zSrQmf0nhkQRP_z3BnR2bJXfKYkK7CCPLk-KZf86tn-bPq_mDZ2UHwRMf";
var MensajeHostAbierto = 
`# 🚀 ¡NUEVO HOST ABIERTO! 🎮
## ⚽ ¡No te lo pierdas! Únete al partido ahora y demuestra tus habilidades en la cancha.
¡La diversión está por comenzar, no faltes! 🔥`;
var TagHostAbierto = "@here"; //  Dejar "@here" o Colocar el "ID del Rol de Discord" al que quieres avisarle que creaste Host


// 🎥 Webhook para GRABACIONES y RESÚMENES de las Partidas jugadas. Reemplaza con tu propia URL de webhook.
const WebhookGrabaciones = "https://discord.com/api/webhooks/1322348400531738835/oKP4BL4iz8XhKgjzufGqUYfV7owjVlsyOgrlCyhhnX0Dcu3rJTiBUeVZI_53-QIBAaeI";


// 📂 Link del servidor de Discord donde se subirán las GRABACIONES DE LAS PARTIDAS
const GrabacionesDiscord = "https://discord.gg/8x9e2uyeWX";


// 📞 Webhook para recibir el mensaje que han llamado a los Administradores. Reemplaza con tu propia URL de webhook.
var WebhookParaLlamarAdmins = "https://discord.com/api/webhooks/1201852308569464873/FPoPAp2x3kxHpS4XWLcMIASHBu-zl1C7IbMTQYpCxOmyM_ARRVpsFEU71W-x8PFwbNBv";


// 👮‍ Rol de Admin en Discord que se quiere llamar
var RolAdminHost = "@here"; // Dejar '@here' o colocar el ID del rol de Discord que se quiere llamar
var tiempoEsperaAdminsEnMinutos = 2;  // CANTIDAD DE MINUTOS A ESPERAR PARA REALIZAR UNA NUEVA LLAMADA A LOS ADMINS


// 🚫 Webhook para anunciar los KICKS y BANS de la sala. Reemplaza con tu propia URL de webhook.
const AnuncioKicksBans = "https://discord.com/api/webhooks/1304191735512961134/MIrXKhZrca3z1X-QYZL4czQY1FuK9EhehfMESJHqz6b3TJnRcchD9Z0JrMbC0hpDQYkI";


// 💬 Webhook para ver los MENSAJES DE LOS JUGADORES. Reemplaza con tu propia URL de webhook.
var webhookMensajesJugadores  = "https://discord.com/api/webhooks/1304184937070465045/MPx9I_v6w4_cngpuVwES6nMZNoDKJWT4DXOvBzvehM8K6K8F3U4WBTXvS27YbPG7th0p";



// 🎟️ Webhook para enviar los INGRESOS y SALIDAS de los jugadores a Discord
var webhookBoletero = "https://discord.com/api/webhooks/1215904770699690104/Cuk8W0gJLVhE9gSw54YseGe6KR5PnkeHcB7dvD_GGoGAO6f-JoAsQfMiOQnieiAfU84D";


// 🖊️ Webhook para firmar en partidos oficiales. Reemplaza con tu propia URL de webhook.
var WebhookParaFirmar = "https://discord.com/api/webhooks/1172720661706321980/bafHm5CRFCH4aQKlYnyTn2D2dJrct2vI8QFwGs9OYxQMYL3f-ksGhzPdDZZMdIMqteCj";


// 🔒 Webhook para enviar la IP de un jugador cuando se retire de la sala.
var webhookIPJugadores  = "https://discord.com/api/webhooks/1329078558857101374/ZyjKtX_NsleSgWex_-sLZ2ukjv3Mo6cy0M-zLXTwLMu3v6svJo8CxJtrokjcPj7aejbp";



// ▇▇▇▇▇▇▇ 🛠️ CONFIGURACIÓN INTERMEDIA 💡 ▇▇▇▇▇▇▇

// 👁️‍🗨️ MOSTRAR IPs A ADMINISTRADORES
var MostrarIps = "No"; 
// Cambia "Si" por "No" si no deseas mostrar las IPs a los administradores cuando un jugador se una a la sala

const ColocarJuntoAlNickname = "ID"; // Opciones disponibles: "ID", "Nivel" o "" (sin nada)


// ▇▇▇▇▇▇▇ TIEMPO AFK ▇▇▇▇▇▇▇


const SegundosPermitidosAFK = 15; // Establece el tiempo permitido en segundos para estar AFK (Cuando están en el Red o en el Blue)

const MinutosPermitidosAFK = 5;  // Establece el tiempo permitido en minutos para estar AFK (Cuando se encuentran Espectadores)


// ▇▇▇▇▇▇▇▇▇ REDES SOCIALES ▇▇▇▇▇▇▇▇▇

const DiscordLink = "discord.gg/tDEUbJU8QB";	// Link de tu Servidor de Discord
const YoutubeLink = "youtube.com/@GrandesLigasHaxBall"; 	// Link de tu canal de Youtube
const TwitchLink = "twitch.tv/stefano365p";	// Link de tu canal de Twitch


// ▇▇▇▇▇▇▇▇ 📢 ANUNCIOS Y MENSAJE DE BIENVENIDA ▇▇▇▇▇▇▇▇▇▇

// 🎉 MENSAJE DE BIENVENIDA  (Se envía al jugador que recién ingresa al host)

var MensajeDeBienvenida = `
Para ver estadísticas: !me, !stats ID, !goleadores, !asistidores, !vallas-invictas, !mvp, !racha-historica, !racha-actual, !viciosos, !ganadores, !presencias
Puedes utilizar el comando: !memide | AVATAR ANIMADO CON: !avatar 😈,👿  | !avatar HO,LA
`; 
// Escribe el mensaje de bienvenida que quieras (Dentro de las comillas)


// 🎨 PERSONALIZACIÓN DEL MENSAJE DE BIENVENIDA
var colormensaje = "FF69B4";

var TipoDeLetra = "bold"; 
// Puedes cambiar esta opción por: "normal", "bold", "italic", "small", "small-bold", y "small-italic"


// 📢 ANUNCIO (Se envía cada vez que inicia el partido)

var Anuncio = "✨ ÚNETE AL DISCORD DE GLH Y APRENDE A CREAR TU PROPIO HOST CON SCRIPT: discord.gg/tDEUbJU8QB"; 
// Anuncio que viene por Defecto (Se envía a los 10 segundos del inicio de cada partido)


// ⏲️ TIEMPO DEL ANUNCIO
var AnuncioMinuto = 0; 
//  Representa el minuto del partido en el que se desea mostrar el anuncio.

var AnuncioSegundos = 10; 
// Representa los segundos en el minuto del partido en el que se desea mostrar el anuncio.



// ▇▇▇▇▇▇▇ 📍 UBICACIÓN DEL HOST ▇▇▇▇▇▇▇

	var UbicacionDelHost = "myubication"; 


	// ES LA UBICACIÓN EN LA QUE APARECERÁ TU HOST | Puedes reemplazar "argentina" por alguna de estas opciones.


	// OPCIONES DISPONIBLES:

// TU GEOLOCALIZACIÓN POR DEFECTO: myubication

		// AMÉRICA:

			// argentina, haxarg, uruguay, brasil, colombia, chile, mexico

			// bolivia, peru, paraguay, venezuela, costa rica, united states, canada

		// EUROPA:

			// france, spain, italy, germany, netherlands, portugal

			// croatia, macedonia, serbia, poland, ukraine, russia, marruecos, united kingdom, turkey

		
		// ASIA:

			// south korea, japan, china, vietnam, israel


// ▇▇▇▇▇▇▇ BANDERA DEL HOST 🏳️ ▇▇▇▇▇▇▇


	var BanderaDelHost = 'Germany';  // Elige el país con la bandera que quieres para tu Sala


// OPCIONES DISPONIBLES POR CONTINENTE:

// ÁFRICA:
	// Algeria, Angola, Benin, Botswana, BurkinaFaso, Burundi, Cameroon, CapeVerde, CentralAfricanRepublic, Chad, Comoros,
	// Congo, CongoTheDemocraticRepublicOfThe, CoteDIvoire, Djibouti, Egypt, EquatorialGuinea, Eritrea, Ethiopia, Gabon,
	// Gambia, Ghana, Guinea, GuineaBissau, Kenya, Lesotho, Liberia, LibyanArabJamahiriya, Madagascar, Malawi, Mali, Mauritania,
	// Mauritius, Morocco, Mozambique, Namibia, Niger, Nigeria, Rwanda, SaoTomeAndPrincipe, Senegal, Seychelles, SierraLeone,
	// Somalia, SouthAfrica, SouthSudan, Sudan, Swaziland, Tanzania, Togo, Tunisia, Uganda, Zambia, Zimbabwe

// AMÉRICA:
	// AntiguaAndBarbuda, Argentina, Aruba, Bahamas, Barbados, Belize, Bermuda, Bolivia, BonaireSaintEustatiusAndSaba, Brazil,
	// BritishIndianOceanTerritory, Canada, CaymanIslands, Chile, Colombia, CostaRica, Cuba, Curacao, Dominica, DominicanRepublic,
	// Ecuador, ElSalvador, FalklandIslandsMalvinas, FrenchGuiana, Grenada, Guadeloupe, Guatemala, Guyana, Haiti, Honduras,
	// Jamaica, Martinique, Mexico, Montserrat, Nicaragua, Panama, Paraguay, Peru, PuertoRico, SaintBarthelemy, SaintKittsAndNevis,
	// SaintLucia, SaintMartin, SaintPierreAndMiquelon, SaintVincentAndTheGrenadines, SintMaartenDutchPart, Suriname, TrinidadAndTobago,
	// TurksAndCaicosIslands, UnitedStates, UnitedStatesMinorOutlyingIslands, Uruguay, Venezuela, VirginIslandsBritish, VirginIslandsUS

// ASIA:
	// Afghanistan, Armenia, Azerbaijan, Bahrain, Bangladesh, Bhutan, Brunei, Cambodia, China, ChristmasIsland, CocosKeelingIslands,
	// HongKong, India, Indonesia, Iran, Iraq, Israel, Japan, Jordan, Kazakhstan, Kuwait, Kyrgyzstan, LaoPeoplesDemocraticRepublic,
	// Lebanon, Macao, Malaysia, Maldives, Mongolia, Myanmar, Nepal, NorthKorea, Oman, Pakistan, Palestine, Philippines, Qatar,
	// SaudiArabia, Singapore, SouthKorea, SriLanka, Syria, Taiwan, Tajikistan, Thailand, TimorLeste, Turkey, Turkmenistan,
	// UnitedArabEmirates, Uzbekistan, VietNam, Yemen

// EUROPA:
	// Albania, Andorra, Austria, Belarus, Belgium, BosniaAndHerzegovina, Bulgaria, Croatia, Cyprus, CzechRepublic, Denmark,
	// Estonia, FaroeIslands, Finland, France, Germany, Gibraltar, Greece, Greenland, Hungary, Iceland, Ireland, Italy, Kosovo,
	// Latvia, Liechtenstein, Lithuania, Luxembourg, MacedoniaTheFormerYugoslavRepublicOf, Malta, Moldova, Monaco, Montenegro,
	// Netherlands, Norway, Poland, Portugal, Romania, Russia, SanMarino, Serbia, Slovakia, Slovenia, Spain, SvalbardAndJanMayen,
	// Sweden, Switzerland, Ukraine, UnitedKingdom

// OCEANÍA:
	// Australia, Fiji, FrenchPolynesia, Guam, Kiribati, MarshallIslands, MicronesiaFederatedStatesOf, Nauru, NewCaledonia,
	// NewZealand, Niue, NorfolkIsland, Palau, PapuaNewGuinea, Pitcairn, Samoa, SolomonIslands, Tokelau, Tonga, Tuvalu, Vanuatu

// OTROS:
	// Haxball, Antarctica, Anguilla, Antarctica, Bermuda, BouvetIsland, BritishIndianOceanTerritory, HeardIslandAndMcDonaldIslands,
	// HolySeeVaticanCityState, IsleOfMan, Jersey, Mayotte, Monaco, Montserrat, SouthGeorgiaAndTheSouthSandwichIslands


//  ▇▇▇▇▇▇▇  ASIGNAR ROLES ▇▇▇▇▇▇▇


// Definiciones de colores
const ColorDelChatROL1 = 0xFFD700;
const ColorDelChatROL2 = 0xffffff;
const ColorDelChatROL3 = 0xffffff;
const ColorDelChatROL4 = 0xffffff;
const ColorDelChatROL5 = 0xffffff;
const adminChatColor = 0xffdb72;
const RedChatColor = 0xff6363;
const BlueChatColor = 0x63f2ff;
const RedTeamChatColor = 0xFD2C2D;
const BlueTeamChatColor = 0x18fde8;
const SpectChatColor = 0xD3D3D3; // Color del chat para espectadores

// Listas de nombres de usuario por rol
const NickNamesRol1 = []; // Añadir nombres de usuarios para ROL1 entre comillas | EJEMPLO: const NickNamesRol1 = ["Messi", "Neymar"];
const NickNamesRol2 = []; // Añadir nombres de usuarios para ROL2 entre comillas | EJEMPLO: const NickNamesRol2 = ["ROMAN #10", "Martín Palermo 9"];
const NickNamesRol3 = []; // Añadir nombres de usuarios para ROL3 entre comillas | EJEMPLO: const NickNamesRol3 = ["Burrito Ortega"];
const NickNamesRol4 = []; // Añadir nombres de usuarios para ROL4 entre comillas
const NickNamesRol5 = []; // Añadir nombres de usuarios para ROL5 entre comillas

// Nombres de roles
const NombreROL1 = "🗦👑🗧𝗢𝗪𝗡𝗘𝗥";
const NombreROL2 = "🤝 CO-OWNER";
const NombreROL3 = "🌐 HOSTER";
const NombreROL4 = "🛠️ AYUDANTE";
const NombreROL5 = "🔧 SUBAYUDANTE";
const NombreROLAdmin = "👑 ADMIN";
const NombreROLRed = "🔴";
const NombreROLBlue = "🔵";
const NombreROLSpect = "👁️";

const RoleAttributes = {
    [NombreROL1]: { style: "bold", sound: 2 },
    [NombreROL2]: { style: "bold", sound: 2 },
    [NombreROL3]: { style: "normal", sound: 1 },
    [NombreROL4]: { style: "normal", sound: 1 },
    [NombreROL5]: { style: "normal", sound: 1 },
    [NombreROLAdmin]: { style: "normal", sound: 1 },
    [NombreROLRed]: { style: "normal", sound: 1 },
    [NombreROLBlue]: { style: "normal", sound: 1 },
    [NombreROLSpect]: { style: "normal", sound: 0 }
};


//  ▇▇▇▇▇▇▇  COOLDOWN CHAT ▇▇▇▇▇▇▇

let MESSAGE_COOLDOWN = 5000; // 5 segundos de cooldown
let SPAM_LIMIT = 5; // Mensajes permitidos antes de activar el cooldown
let COOLDOWN_TIME = 10000; // 10 segundos de cooldown después de enviar muchos mensajes
let cooldownEnabled = true; // Cooldown habilitado por defecto
let KICK_THRESHOLD = 3; // Número de advertencias antes de kickear por spam

// Variables para rastrear mensajes y cooldowns
let messageTimestamps = {};
let playerCooldowns = {};
let spamWarnings = {}; // Contador de advertencias por spam



//  ▇▇▇▇▇▇▇  COOLDOWN PARA EL USO DE COMANDOS ▇▇▇▇▇▇▇
// COOLDOWN PARA USO DE COMANDOS
let lastCommandTime = {}; // Objeto para registrar el tiempo del último comando enviado por cada jugador
const commandCooldown = 5000; // Tiempo de espera en milisegundos (5 segundos)

// COOLDOWN PARA COMANDOS
const cooldowns = {};
const COOLDOWN_TIEMPO = 5 * 1000; // 5 segundos


//  ▇▇▇▇▇▇▇  PELOTAS ▇▇▇▇▇▇▇

var PelotaRS = "FFFFFF"			// COLOR DE LA PELOTA DE REAL SOCCER
var PelotaRS_PowerShot = "FF4500"	// COLOR DE LA PELOTA DE REAL SOCCER con POWERSHOT ACTIVADO
var PotenciaPowerShotRS = 2 //  Referencia: La potencia sin PowerShot es 0.5

var PelotaFutsal = "FFFFFF"			// COLOR DE LA PELOTA DE REAL SOCCER
var PelotaFutsal_PowerShot = "FF4500"	// COLOR DE LA PELOTA DE REAL SOCCER con POWERSHOT ACTIVADO
var PotenciaPowerShot = 2.5  // Referencia: La Potencia sin PowerShot es 1.5




// ▇▇▇▇▇▇▇  PARA TORNEOS  ▇▇▇▇▇▇▇

var ChallongeLink = 'challonge.com/es/' // Link de tu torneo
var regla1 = '⯌ 4 vs 4'
var regla2 = '⯌ Equipo que gana el partido, continua jugando. 🏆'
var regla3 = '⯌ Dos jugadores ingresan por orden de Espectadores. Los otros dos restantes, los puede elegir.'
var regla4 = '⯌ El equipo ganador le toca el país con más probabilidades de ganar.'
var regla5 = '⯌ Si empatan, salen ambos equipos. Y los primeros cuatro jugadores de la lista de Espectadores pasan a ser capitanes, 2 en el Team Red y los otros 2 en el Team Blue.'



//  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  ADMINS NO OFICIALES ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇

var kickBanAttempts = {}; // Objeto para rastrear intentos de kick y ban
var maxAttempts = 1; // Número máximo de intentos permitidos en el intervalo de tiempo
var interval = 30000; // Intervalo de tiempo en milisegundos (30 segundos)
var alertThreshold = 2; // Umbral de alerta después del segundo intento
var cooldownTime = 60000; // Tiempo de cooldown en milisegundos 
var cooldownActive = {}; // Objeto para rastrear el estado de cooldown de cada administrador


//  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  CONFIGURACIÓN AVANZADA 🚀 ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇

// Define una variable global para llevar el seguimiento de los minutos jugados por cada jugador
let playerMinutesPlayed = JSON.parse(localStorage.getItem('playerMinutesPlayed')) || {};

// Define una variable global para llevar el seguimiento del tiempo que un jugador ha estado siendo el arquero
let playerGoalkeeperTime = JSON.parse(localStorage.getItem('playerGoalkeeperTime')) || {};


// ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ CÓDIGOS DE LAS BANDERAS ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇

var codigosBanderas = {
  Haxball: 'FAM',
  Afghanistan: 'AF', 
  Albania: 'AL', 
  Algeria: 'DZ', 
  Andorra: 'AD', 
  Angola: 'AO', 
  Anguilla: 'AI',
  Antarctica: 'AQ',
  AntiguaAndBarbuda: 'AG',
  Argentina: 'AR',
  Armenia: 'AM',
  Aruba: 'AW',
  Australia: 'AU',
  Austria: 'AT',
  Azerbaijan: 'AZ',
  Bahamas: 'BS',
  Bahrain: 'BH',
  Bangladesh: 'BD',
  Barbados: 'BB',
  Belarus: 'BY',
  Belgium: 'BE',
  Belize: 'BZ',
  Benin: 'BJ',
  Bermuda: 'BM',
  Bhutan: 'BT',
  Bolivia: 'BO',
  BonaireSaintEustatiusAndSaba: 'BQ',
  BosniaAndHerzegovina: 'BA',
  Botswana: 'BW',
  BouvetIsland: 'BV',
  Brazil: 'BR',
  BritishIndianOceanTerritory: 'IO',
  Brunei: 'BN',
  Bulgaria: 'BG',
  BurkinaFaso: 'BF',
  Burundi: 'BI',
  Cambodia: 'KH',
  Cameroon: 'CM',
  Canada: 'CA',
  CapeVerde: 'CV',
  CaymanIslands: 'KY',
  CentralAfricanRepublic: 'CF',
  Chad: 'TD',
  Chile: 'CL',
  China: 'CN',
  ChristmasIsland: 'CX',
  CocosKeelingIslands: 'CC',
  Colombia: 'CO',
  Comoros: 'KM',
  Congo: 'CG',
  CongoTheDemocraticRepublicOfThe: 'CD',
  CookIslands: 'CK',
  CostaRica: 'CR',
  CoteDIvoire: 'CI',
  Croatia: 'HR',
  Cuba: 'CU',
  Curacao: 'CW',
  Cyprus: 'CY',
  CzechRepublic: 'CZ',
  Denmark: 'DK',
  Djibouti: 'DJ',
  Dominica: 'DM',
  DominicanRepublic: 'DO',
  Ecuador: 'EC',
  Egypt: 'EG',
  ElSalvador: 'SV',
  EnglandUnitedKingdom: 'GB',
  EquatorialGuinea: 'GQ',
  Eritrea: 'ER',
  Estonia: 'EE',
  Ethiopia: 'ET',
  FalklandIslandsMalvinas: 'FK',
  FaroeIslands: 'FO',
  Fiji: 'FJ',
  Finland: 'FI',
  France: 'FR',
  FrenchPolynesia: 'PF',
  FrenchSouthernTerritories: 'TF',
  Gabon: 'GA',
  Gambia: 'GM',
  Georgia: 'GE',
  Germany: 'DE',
  Ghana: 'GH',
  Gibraltar: 'GI',
  GreatBritain: 'GB',
  Greece: 'GR',
  Greenland: 'GL',
  Grenada: 'GD',
  Guam: 'GU',
  Guatemala: 'GT',
  Guernsey: 'GG',
  Guinea: 'GN',
  GuineaBissau: 'GW',
  Guyana: 'GY',
  Haiti: 'HT',
  HeardIslandAndMcDonaldIslands: 'HM',
  HolySeeVaticanCityState: 'VA',
  Honduras: 'HN',
  HongKong: 'HK',
  Hungary: 'HU',
  Iceland: 'IS',
  India: 'IN',
  Indonesia: 'ID',
  Iran: 'IR',
  Iraq: 'IQ',
  Ireland: 'IE',
  IsleOfMan: 'IM',
  Israel: 'IL',
  Italy: 'IT',
  Jamaica: 'JM',
  Japan: 'JP',
  Jersey: 'JE',
  Jordan: 'JO',
  Kazakhstan: 'KZ',
  Kenya: 'KE',
  Kiribati: 'KI',
  KoreaDemocraticPeoplesRepublicOfNorthKorea: 'KP',
  KoreaRepublicOfSouthKorea: 'KR',
  Kosovo: 'XK',
  Kuwait: 'KW',
  Kyrgyzstan: 'KG',
  LaoPeoplesDemocraticRepublic: 'LA',
  Latvia: 'LV',
  Lebanon: 'LB',
  Lesotho: 'LS',
  Liberia: 'LR',
  LibyanArabJamahiriya: 'LY',
  Liechtenstein: 'LI',
  Lithuania: 'LT',
  Luxembourg: 'LU',
  Macao: 'MO',
  MacedoniaTheFormerYugoslavRepublicOf: 'MK',
  Madagascar: 'MG',
  Malawi: 'MW',
  Malaysia: 'MY',
  Maldives: 'MV',
  Mali: 'ML',
  Malta: 'MT',
  MarshallIslands: 'MH',
  Mauritania: 'MR',
  Mauritius: 'MU',
  Mexico: 'MX',
  MicronesiaFederatedStatesOf: 'FM',
  MissingData: 'U9',
  MoldovaRepublicOf: 'MD',
  Monaco: 'MC',
  Mongolia: 'MN',
  Montenegro: 'ME',
  Montserrat: 'MS',
  Morocco: 'MA',
  Mozambique: 'MZ',
  Myanmar: 'MM',
  Namibia: 'NA',
  Nauru: 'NR',
  Nepal: 'NP',
  Netherlands: 'NL',
  NetherlandsAntilles: 'AN',
  NewCaledonia: 'NC',
  NewZealand: 'NZ',
  Nicaragua: 'NI',
  Niger: 'NE',
  Nigeria: 'NG',
  Niue: 'NU',
  NorfolkIsland: 'NF',
  NorthernIrelandUnitedKingdom: 'GB',
  NorthernMarianaIslands: 'MP',
  Norway: 'NO',
  Oman: 'OM',
  Pakistan: 'PK',
  Palau: 'PW',
  PalestinianTerritoryOccupied: 'PS',
  Panama: 'PA',
  PapuaNewGuinea: 'PG',
  Paraguay: 'PY',
  Peru: 'PE',
  Philippines: 'PH',
  Pitcairn: 'PN',
  Poland: 'PL',
  Portugal: 'PT',
  PuertoRico: 'PR',
  Qatar: 'QA',
  Romania: 'RO',
  Russia: 'RU',
  Rwanda: 'RW',
  SaintLucia: 'LC',
  Samoa: 'WS',
  SanMarino: 'SM',
  SaoTomeAndPrincipe: 'ST',
  SaudiArabia: 'SA',
  ScotlandUnitedKingdom: 'GB',
  Senegal: 'SN',
  Serbia: 'RS',
  Seychelles: 'SC',
  SierraLeone: 'SL',
  Singapore: 'SG',
  SintMaartenDutchPart: 'SX',
  Slovakia: 'SK',
  Slovenia: 'SI',
  SolomonIslands: 'SB',
  Somalia: 'SO',
  SouthAfrica: 'ZA',
  SouthGeorgiaAndTheSouthSandwichIslands: 'GS',
  SouthSudan: 'SS',
  Spain: 'ES',
  SriLanka: 'LK',
  StHelena: 'SH',
  StKittsAndNevis: 'KN',
  StVincentAndTheGrenadines: 'VC',
  Sudan: 'SD',
  Suriname: 'SR',
  Swaziland: 'SZ',
  Sweden: 'SE',
  Switzerland: 'CH',
  SyrianArabRepublic: 'SY',
  Taiwan: 'TW',
  Tajikistan: 'TJ',
  Tanzania: 'TZ',
  Thailand: 'TH',
  TimorLeste: 'TL',
  Togo: 'TG',
  Tokelau: 'TK',
  Tonga: 'TO',
  TrinidadAndTobago: 'TT',
  Tunisia: 'TN',
  Turkey: 'TR',
  Turkmenistan: 'TM',
  TurksAndCaicosIslands: 'TC',
  Tuvalu: 'TV',
  Uganda: 'UG',
  Ukraine: 'UA',
  UnitedArabEmirates: 'AE',
  UnitedKingdom: 'GB',
  UnitedStates: 'US',
  UnitedStatesMinorOutlyingIslands: 'UM',
  Uruguay: 'UY',
  Uzbekistan: 'UZ',
  Vanuatu: 'VU',
  Venezuela: 'VE',
  VietNam: 'VN',
  VirginIslandsBritish: 'VG',
  VirginIslandsUS: 'VI',
  Yemen: 'YE',
  Zambia: 'ZM',
  Zimbabwe: 'ZW'
};

var countryCoords = {
    "argentina": [-34.6882652, -58.5685501], // Buenos Aires
    "haxarg": [-34.61, -58.42], // HaxARG Ubication
    "chile": [-33.45, -70.66], // Santiago
    "uruguay": [-34.90, -56.19], // Montevideo
    "brasil": [-23.55, -46.64], // São Paulo
    "peru": [-12.04, -77.03], // Lima
    "colombia": [4.61, -74.08], // Bogotá
    "venezuela": [10.49, -66.88], // Caracas
    "costa rica": [9.934739, -84.087502], // San José
    "mexico": [19.43, -99.13], // Ciudad de México
    "united states": [40.71, -74.01], // Nueva York
    "marruecos": [33.57, -7.65], // Casablanca
    "spain": [40.42, -3.70], // Madrid
    "portugal": [38.71, -9.14], // Lisboa
    "italy": [41.89, 12.49], // Milán
    "united kingdom": [51.51, -0.13], // Londres
    "germany": [52.52, 13.40], // Berlín
    "turkey": [41.01, 28.97], // Estambul
    "serbia": [44.8167494, 20.4654671], // Belgrado
    "poland": [52.2298, 21.0118], // Varsovia
    "ukraine": [50.45, 30.52], // Kiev
    "russia": [55.75, 37.62], // Moscú
    "china": [31.23, 121.47], // Shanghái
    "south korea": [37.56, 126.97], // Seúl
    "vietnam": [21.03, 105.85], // Hanói
    "france": [48.86, 2.34], // París
    "croatia": [45.8131406, 15.9772235], // Zagreb
    "macedonia": [41.61, 21.74], // Skopie
    "israel": [31.76, 35.21], // Tel Aviv (Israel)
    "canada": [45.42, -75.69], // Ottawa (Canadá)
    "bolivia": [-16.50, -68.12], // La Paz (Bolivia)
    "paraguay": [-25.27, -57.67], // Asunción (Paraguay)
    "honduras": [14.08, -87.21], // Tegucigalpa (Honduras)
    "myubication": null,

};

var VersionDelScript = "``📅 ᴠᴇʀsɪᴏ́ɴ ᴅᴇʟ sᴄʀɪᴘᴛ 25.01.25  | Futsal by GLH ``"

let equipoAzulPosesion = 0;
let equipoRojoPosesion = 0;
var currentMap = MapaPorDefecto; // Define y asigna un valor a currentMap antes de llamar a sendGameInfo
// Variables globales
var posesionEquipoA = 0;
var posesionEquipoB = 0;
var ColorFondoRS = '6d945b'
var RSRMap;
var PartidoArrancado;
const afkPlayerIDs = new Set()
var mutedPlayers = []; // Array where will be added muted players
var isTimeAddedShownseis = false;
var DetenerAnuncio = false;
var DetenerAviso = false;
var ReiniciarStatsEnCero = false;
var redTeam = [0, 0, 0, 0, 0, 0];
var blueTeam = [0, 0, 0, 0, 0, 0];
const votedPlayers = new Set()
let votekickTimes = {};
let votekickCount = {};
var votekickTimeout = 60000;

var PlayerFound = false;
var ListaDeJugadores = [];
var conexion = [];

var whoTouchedLast; // var representing the last player who touched the ball

var teamRed
var teamBlue
var palabrasSilenciadas = [];
// Variables para almacenar los datos de la publicidad
let advertisingInterval;
let advertisingMessage = '';
let advertisingMinutes = 0;
let lastAdvertisingTime = 0;

var _0x24f1 = ['floor', 'getPlayerDiscProperties', '      👋 Bɪᴇɴᴠᴇɴɪᴅᴏ ᴀʟ ʜᴏsᴛ ᴅᴇ G L H      ', 'ballOutPositionY', 'court', 'blueGK', 'toFixed', 'RSR', 'onRoomLink', 'secondLastKickerTeam', 'auth', 'method', 'El administrador se encuentra presente', 'ceil', 'clearBans', 'sendAnnouncement', 'blueScore', 'secondLastKickerId', 'secondLastKicker', 'normal', '50nCLuSN', '0x00ccff', '🔥 ÚLTIMA JUGADA DEL PARTIDO 🔥 - Si la pelota sale del terreno de juego, se finalizará el partido.', 'radius', '🚫 NO puedes cambiar el fondo del mapa cuando un partido se esta jugando.', 'xgravity', '𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 💬 ⌨: !rs, !rr, !bb, !clearbans, !swap, t [mensaje a tu equipo], !court, !court [hexcolor], !court reset', 'setPlayerDiscProperties', 'round', '478VrIjpd', 'team', 'onGameStop', 'lastKicker', '"},"playerPhysics":{"acceleration":0.12,"kickStrength":5.65},"ballPhysics":{"radius":9,"invMass":1.05,"color":"FFFF00","cGroup":["ball","kick","score"]},"vertexes":[{"x":0,"y":660,"trait":"kickOffBarrier"},{"x":0,"y":180,"trait":"kickOffBarrier"},{"x":0,"y":-180,"trait":"kickOffBarrier"},{"x":0,"y":-660,"trait":"kickOffBarrier"},{"x":1150,"y":320,"trait":"line"},{"x":840,"y":320,"trait":"line"},{"x":1150,"y":-320,"trait":"line"},{"x":840,"y":-320,"trait":"line"},{"x":1150,"y":180,"trait":"line"},{"x":1030,"y":180,"trait":"line"},{"x":1150,"y":-180,"trait":"line"},{"x":1030,"y":-180,"trait":"line"},{"x":840,"y":-130,"trait":"line","curve":-130},{"x":840,"y":130,"trait":"line","curve":-130},{"x":-1150,"y":-320,"trait":"line"},{"x":-840,"y":-320,"trait":"line"},{"x":-1150,"y":320,"trait":"line"},{"x":-840,"y":320,"trait":"line"},{"x":-1150,"y":-175,"trait":"line"},{"x":-1030,"y":-175,"trait":"line"},{"x":-1150,"y":175,"trait":"line"},{"x":-1030,"y":175,"trait":"line"},{"x":-840,"y":130,"trait":"line","curve":-130},{"x":-840,"y":-130,"trait":"line","curve":-130},{"x":935,"y":3,"trait":"line"},{"x":935,"y":-3,"trait":"line"},{"x":-935,"y":3,"trait":"line"},{"x":-935,"y":-3,"trait":"line"},{"x":-1150,"y":570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":-600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1150,"y":-570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":-570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":-600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-180},{"x":0,"y":-180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":-1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":-1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":-40,"trait":"line","color":"576C46"},{"x":1030,"y":40,"trait":"line","color":"576C46"},{"x":-1030,"y":-40,"trait":"line","color":"576C46"},{"x":-1030,"y":40,"trait":"line","color":"576C46"},{"x":0,"y":3,"trait":"line"},{"x":0,"y":-3,"trait":"line"},{"x":-1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1150,"y":-124,"bCoef":0,"cMask":["ball"]},{"x":-1210,"y":-124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1150,"y":124,"bCoef":0,"cMask":["ball"]},{"x":-1210,"y":124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":-1250,"y":158,"bCoef":0,"cMask":["ball"]},{"x":1150,"y":124,"bCoef":0,"cMask":["ball"]},{"x":1210,"y":124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1150,"y":-124,"bCoef":0,"cMask":["ball"]},{"x":1210,"y":-124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":1250,"y":158,"bCoef":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"trait":"kickOffBarrier"},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"line","y":320},{"v0":5,"v1":7,"trait":"line","x":840},{"v0":6,"v1":7,"trait":"line","y":-320},{"v0":8,"v1":9,"trait":"line","y":180},{"v0":9,"v1":11,"trait":"line","x":1030},{"v0":10,"v1":11,"trait":"line","y":-180},{"v0":12,"v1":13,"curve":-130,"trait":"line","x":840},{"v0":14,"v1":15,"trait":"line","y":-320},{"v0":15,"v1":17,"trait":"line","x":-840},{"v0":16,"v1":17,"trait":"line","y":320},{"v0":18,"v1":19,"trait":"line","y":-175},{"v0":19,"v1":21,"trait":"line","x":-1030},{"v0":20,"v1":21,"trait":"line","y":175},{"v0":22,"v1":23,"curve":-130,"trait":"line","x":-840},{"v0":24,"v1":25,"curve":-180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":90,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":-90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-90,"trait":"line","x":-935},{"v0":24,"v1":25,"trait":"line","x":935},{"v0":26,"v1":27,"trait":"line","x":-935},{"v0":28,"v1":29,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":30,"v1":31,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":32,"v1":33,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":34,"v1":35,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":37,"v1":36,"curve":-180,"vis":false,"bCoef":0.1,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"curve":70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":-1030},{"v0":41,"v1":42,"curve":-70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":1030},{"v0":37,"v1":38,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":43,"v1":44,"vis":true,"color":"576C46","trait":"line","x":1030},{"v0":45,"v1":46,"vis":true,"color":"576C46","trait":"line","x":-1030},{"v0":47,"v1":48,"curve":-180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":90,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":-90,"trait":"line","x":-935},{"v0":47,"v1":48,"trait":"line","x":-935},{"v0":49,"v1":50,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":51,"v1":52,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":53,"v1":54,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":55,"v1":56,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":57,"v1":58,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":-485},{"v0":59,"v1":60,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":485},{"v0":61,"v1":62,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":62,"v1":63,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":63,"v1":64,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":65,"v1":66,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":66,"v1":67,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":67,"v1":68,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":69,"v1":70,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":-124},{"v0":71,"v1":72,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":124},{"v0":72,"v1":70,"curve":5,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"bias":0},{"v0":70,"v1":73,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":72,"v1":74,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":75,"v1":76,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":124},{"v0":77,"v1":78,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":-124},{"v0":76,"v1":78,"curve":-5,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":78,"v1":79,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":76,"v1":80,"color":"FFFFFF","bCoef":0,"cMask":["ball"]}],"goals":[{"p0":[-1162,124],"p1":[-1162,-124],"team":"red"},{"p0":[1162,124],"p1":[1162,-124],"team":"blue","radius":0,"invMass":1}],"discs":[{"radius":0,"invMass":0,"pos":[-1311,-19],"color":"ffffffff","bCoef":0,"cMask":["red"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1310,29],"color":"ffffffff","bCoef":0,"cMask":["blue"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1308,62],"color":"ffffffff","bCoef":0,"cMask":["red","blue"],"cGroup":["ball"]},{"radius":2.7,"pos":[-1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":5,"invMass":0,"pos":[-1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[-1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2.7,"pos":[-1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]},{"pos":[-6.5,-3],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"radius":1.4,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[6.5,-3],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[0,-6.5],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[-4.5,5.5],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[4.5,5.5],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"radius":0.8,"invMass":1e+250,"color":"transparent","cGroup":["c0"]}],"planes":[{"normal":[0,1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-627,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,-627],"b":[1300,-627]}}},{"normal":[0,-1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-627,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,627],"b":[1300,627]}}},{"normal":[0,1],"dist":-660,"bCoef":0,"_data":{"extremes":{"normal":[0,1],"dist":-660,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,-660],"b":[1300,-660]}}},{"normal":[0,-1],"dist":-660,"bCoef":0,"_data":{"extremes":{"normal":[0,-1],"dist":-660,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,660],"b":[1300,660]}}},{"normal":[1,0],"dist":-1300,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-1300,"canvas_rect":[-1311,-660,1300,660],"a":[-1300,-660],"b":[-1300,660]}}},{"normal":[-1,0],"dist":-1300,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1300,"canvas_rect":[-1311,-660,1300,660],"a":[1300,-660],"b":[1300,660]}}},{"normal":[1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-1230,"canvas_rect":[-1311,-660,1300,660],"a":[-1230,-660],"b":[-1230,660]}}},{"normal":[-1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-1230,"canvas_rect":[-1311,-660,1300,660],"a":[1230,-660],"b":[1230,660]}}}],"traits":{"ballArea":{"vis":false,"bCoef":0,"cMask":["ball"],"cGroup":["ball"]},"goalPost":{"radius":5,"invMass":0,"bCoef":1,"cGroup":["ball"]},"rightNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c3"]},"leftNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c2"]},"stanchion":{"radius":3,"invMass":0,"bCoef":3,"cMask":["none"]},"cornerflag":{"radius":3,"invMass":0,"bCoef":0.2,"color":"FFFF00","cMask":["ball"]},"reargoalNetleft":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":10,"color":"C7E6BD"},"reargoalNetright":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-10,"color":"C7E6BD"},"sidegoalNet":{"vis":true,"bCoef":1,"cMask":["ball","red","blue"],"color":"C7E6BD"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":[],"color":"C7E6BD"}},"joints":[{"d0":16,"d1":17,"strength":"rigid","color":"678859","length":null},{"d0":18,"d1":19,"strength":"rigid","color":"678859","length":null},{"d0":20,"d1":21,"strength":"rigid","color":"678859","length":null},{"d0":22,"d1":23,"strength":"rigid","color":"678859","length":null},{"d0":0,"d1":25,"length":0,"color":"transparent"},{"d0":0,"d1":24,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":27,"length":6.5,"color":"transparent"},{"d0":0,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":0,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":25,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":27,"length":6.5,"color":"transparent"},{"d0":25,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":25,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":24,"d1":28,"length":8.73212459828649,"color":"transparent"},{"d0":28,"d1":29,"length":9,"color":"transparent"},{"d0":26,"d1":29,"length":8.73212459828649,"color":"transparent"},{"d0":26,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":26,"d1":28,"length":13.901438774457844,"color":"transparent"},{"d0":27,"d1":28,"length":12.816005617976296,"color":"transparent"},{"d0":27,"d1":29,"length":12.816005617976296,"color":"transparent"},{"d0":24,"d1":29,"length":13.901438774457844,"color":"transparent"},{"d0":24,"d1":26,"length":13,"color":"transparent"},{"d0":0,"d1":25,"length":0,"color":"transparent"},{"d0":0,"d1":24,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":27,"length":6.5,"color":"transparent"},{"d0":0,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":0,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":25,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":27,"length":6.5,"color":"transparent"},{"d0":25,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":25,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":24,"d1":28,"length":8.73212459828649,"color":"transparent"},{"d0":28,"d1":29,"length":9,"color":"transparent"},{"d0":26,"d1":29,"length":8.73212459828649,"color":"transparent"},{"d0":26,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":26,"d1":28,"length":13.901438774457844,"color":"transparent"},{"d0":27,"d1":28,"length":12.816005617976296,"color":"transparent"},{"d0":27,"d1":29,"length":12.816005617976296,"color":"transparent"},{"d0":0,"d1":30,"length":0,"color":"transparent"},{"d0":25,"d1":30,"length":0,"color":"transparent"}],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}', 'onPlayerLeave', 'setCustomStadium', 'extraTimeAnnounced', 'onPlayerJoin', 'application/json', '                                        ▒█▀▀█ ▒█░░░ ▒█░▒█', '⏱ FINAL DEL PARTIDO | Si empataron selecciona penales con: !pensred (para que pateen los rojos🔴) y !pensblue (para que pateen los azules🔵)', 'rsCorner', 'yspeed', 'kickPlayer', 'log', '                                        ▒█░▄▄ ▒█░░░ ▒█▀▀█', 'onPlayerTeamChange', 'lat', 'pauseGame', 'blueCK', '505050', 'boosterCount', 'invMass', 'warningCount', '811oRJfWz', 'stringify', 'ballRadius', 'extraTime', '0xff223c', 'getPlayerList', 'admin', 'rsSwingTimer', 'cGroup', ' 🟦 ⚊ 🕒 ', '✅ 🧹 Lᴏs ʙᴀɴs ғᴜᴇʀᴏɴ ʀᴇᴍᴏᴠɪᴅᴏs ᴘᴏʀ ', 'swap', 'ballOutPositionX', '{"name":"🗦⚽🗧𝚁𝙴𝙰𝙻 𝚂𝙾𝙲𝙲𝙴𝚁 🙼  ᴿ ᴱ ⱽ ᴼ ᴸ ᵁ ᵀ ᴵ ᴼ ᴺ  🙼","width":1300,"height":660,"spawnDistance":560,"bg":{"type":"grass","width":1150,"height":600,"kickOffRadius":180,"cornerRadius":0,"color":"', '👋 Hasta pronto! ', 'extraTimeCount', '2vpbxKS', '      ℹ Escribe !help para ver los comandos ⌨     ', 'secondLastKickerName', 'ticks', 'rsTimer', '] - [', 'help', 'substr', '🔥 ⚽ 𝙂𝙊𝙇! ', 'throwInPosY', '463eHQvaF', 'roomName', ColorFondoRS, 'clearbans', 'setPlayerAvatar', '🔐La clave ha sido cambiada por: ', 'redScore', 'name', 'Real Soccer Revolution', 'No hay admin, escribe el comando para ser administrador.', 'code', 'rsGoalKick', 'setpassword', '🏟🌈 El color del fondo del mapa actual es: ', NombreHost, 'noPlayer', 'clearpassword', 'time', 'lastKickerTeam', '🔐 Comando habilitado sólo para Admistradores ⚙️👤', 'cMask', 'rsReady', 'onPositionsReset', ' 🟥 ', 'getScores', '1823YwCEsH', 'then', 'POST', ' - ', 'username', 'bringThrowBack', 'outStatus', 'normal', 'xspeed', 'length', 'replace', 'position', '145825HWBoCM', '🔗 𝗗𝗶𝘀𝗰𝗼𝗿𝗱 𝗥𝗦𝗜: https://discord.gg/BZkDuSV', 'getDiscProperties', 'color', 'geo', ' (👟 Asistencia: ', 'boosterState', '134249tMXEkv', '🔄 Se han intercambiado los equipos', 'stopGame', 'rsActive', 'redCK', '84221WxdGJY', 'startsWith', 'lastPlayAnnounced', 'split', 'redThrow', 'setPlayerTeam', 'getBallPosition', 'extraTimeEnd', 'sqrt', '❌⚽ GOL EN CONTRA! ', 'setDiscProperties', 'onGameStart', '** Ha quitado la contraseña 🗝🔓 ', 'ygravity', '👟', 'forEach', 'redGK', 'onGameTick', 'paused', 'pushedOut', '107sAuBDh', 'public', ' 🗝🔓 La contraseña fue eliminada por ', 'reset', 'throwinKicked', '                                        ▒█▄▄█ ▒█▄▄█ ▒█░▒█', 'trim', 'lon', '0xFFFF00', 'setTimeLimit', '274921JuGtNr', 'rsTouchTeam', '🌐 𝐖𝐞𝐛 𝐆𝐋𝐇: https://grandesligashaxball.wixsite.com/grandesligashaxball/', 'blueThrow', 'token', 'onTeamGoal', 'timeLimit', 'startGame', 'content', 'body', 'setPassword', 'Content-Type', 'updateLastKicker', 'substring', 'custom', 'https://discord.com/api/webhooks/816061374504763402/Us5kMMIjcwUHylZ7-SBGnH2wkODNDHi24wvPk85wj6XecLB754wIHe-iEM776Sfk9_-Y', 'filter', ' Segundos', 'lastKickerId', 'onStadiumChange', ' by ', 'lastKickerName', 'headers', 'find', 'conn', 'maxPlayers'];
var _0x2ffa = function (_0x2ee94c, _0x596748) {
	_0x2ee94c = _0x2ee94c - 0x11f;
	var _0x24f126 = _0x24f1[_0x2ee94c];
	return _0x24f126;
};
var _0x3c81f9 = _0x2ffa;
(function (_0x35acd1, _0x5111e2) {
	var _0x22a73d = _0x2ffa;
	while (!![]) {
		try {
			var _0x4b7342 = parseInt(_0x22a73d(0x186)) * parseInt(_0x22a73d(0x150)) + -parseInt(_0x22a73d(0x140)) * parseInt(_0x22a73d(0x1d7)) + parseInt(_0x22a73d(0x173)) * parseInt(_0x22a73d(0x19f)) + -parseInt(_0x22a73d(0x1a9)) + -parseInt(_0x22a73d(0x17f)) + parseInt(_0x22a73d(0x15a)) * parseInt(_0x22a73d(0x127)) + -parseInt(_0x22a73d(0x18b));
			if (_0x4b7342 === _0x5111e2) break;
			else _0x35acd1['push'](_0x35acd1['shift']());
		} catch (_0x1c7a16) {
			_0x35acd1['push'](_0x35acd1['shift']());
		}
	}
}(_0x24f1, 0x2205c));
var throwTimeOut = 0x1a4,
	gkTimeOut = 0x258,
	ckTimeOut = 0x258,
	throwinDistance = 0x10e,
	mapBGColor = _0x3c81f9(0x15c),
	superAdminCode = _0x3c81f9(0x13c);

var allowPublicAdmin = true; // if true then !admin command is enabled


/*-------------------------------- STADIUMS ---------------------------------*/




function getFutx5cespedMap() {
	var Futx5cespedMap = `{

	"name" : "⚽️ Futsal x5 👑",

	"width" : 1080,

	"height" : 532,

	"bg" : { "kickOffRadius" : 6, "color" : "2B591C" },

	"vertexes" : [
		/* 0 */ { "x" : -950, "y" : 460, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		/* 1 */ { "x" : -950, "y" : 90, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		/* 2 */ { "x" : -950, "y" : -90, "bCoef" : 0.9, "cMask" : ["ball" ], "curve" : 0, "bias" : 12 },
		/* 3 */ { "x" : -950, "y" : -460, "bCoef" : 0.9, "cMask" : ["ball" ], "curve" : 0, "bias" : -12 },
		/* 4 */ { "x" : 950, "y" : 460, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		/* 5 */ { "x" : 950, "y" : 90, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		/* 6 */ { "x" : 950, "y" : -90, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		/* 7 */ { "x" : 950, "y" : -460, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		/* 8 */ { "x" : 0, "y" : 508, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 9 */ { "x" : 0, "y" : 150, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 10 */ { "x" : 0, "y" : -150, "bCoef" : 0, "cMask" : [ ] },
		/* 11 */ { "x" : 0, "y" : -508, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 12 */ { "x" : -995, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12 },
		/* 13 */ { "x" : 995, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		/* 14 */ { "x" : -995, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12 },
		/* 15 */ { "x" : 995, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12 },
		/* 16 */ { "x" : 951, "y" : 460, "bCoef" : 0.9, "cMask" : ["ball" ] },
		/* 17 */ { "x" : 951, "y" : -460, "bCoef" : 0.9, "cMask" : ["ball" ] },
		/* 18 */ { "x" : 0, "y" : 460, "bCoef" : 0, "cMask" : [ ] },
		/* 19 */ { "x" : 0, "y" : -460, "bCoef" : 0, "cMask" : [ ] },
		/* 20 */ { "x" : 0, "y" : 150, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 21 */ { "x" : 0, "y" : -150, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 22 */ { "x" : -950, "y" : 435, "bCoef" : 0.1, "cMask" : [ ] },
		/* 23 */ { "x" : -925, "y" : 460, "bCoef" : 0.1, "cMask" : [ ] },
		/* 24 */ { "x" : -950, "y" : -435, "bCoef" : 0.1, "cMask" : [ ] },
		/* 25 */ { "x" : -925, "y" : -460, "bCoef" : 0.1, "cMask" : [ ] },
		/* 26 */ { "x" : 950, "y" : -435, "bCoef" : 0.1, "cMask" : [ ] },
		/* 27 */ { "x" : 925, "y" : -460, "bCoef" : 0.1, "cMask" : [ ] },
		/* 28 */ { "x" : 950, "y" : 435, "bCoef" : 0.1, "cMask" : [ ] },
		/* 29 */ { "x" : 925, "y" : 460, "bCoef" : 0.1, "cMask" : [ ] },
		/* 30 */ { "x" : 948, "y" : -166, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 31 */ { "x" : -948, "y" : -166, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 32 */ { "x" : 948, "y" : -198, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 33 */ { "x" : -948, "y" : -198, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 34 */ { "x" : 948, "y" : 166, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 35 */ { "x" : -948, "y" : 166, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 36 */ { "x" : 948, "y" : 198, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 37 */ { "x" : -948, "y" : 198, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 38 */ { "x" : 948, "y" : 348, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 39 */ { "x" : -948, "y" : 348, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 40 */ { "x" : 948, "y" : 380, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 41 */ { "x" : -948, "y" : 380, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 42 */ { "x" : 948, "y" : -348, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 43 */ { "x" : -948, "y" : -348, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 44 */ { "x" : 948, "y" : -380, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 45 */ { "x" : -948, "y" : -380, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 46 */ { "x" : 948, "y" : 16, "bCoef" : 0, "cMask" : [ ], "color" : "123456" },
		/* 47 */ { "x" : -948, "y" : 16, "bCoef" : 0, "cMask" : [ ], "color" : "123456" },
		/* 48 */ { "x" : 948, "y" : 14, "bCoef" : 0, "cMask" : [ ] },
		/* 49 */ { "x" : -948, "y" : 14, "bCoef" : 0, "cMask" : [ ] },
		/* 50 */ { "x" : 948, "y" : 12, "bCoef" : 0, "cMask" : [ ] },
		/* 51 */ { "x" : -948, "y" : 12, "bCoef" : 0, "cMask" : [ ] },
		/* 52 */ { "x" : 948, "y" : 10, "bCoef" : 0, "cMask" : [ ] },
		/* 53 */ { "x" : -948, "y" : 10, "bCoef" : 0, "cMask" : [ ] },
		/* 54 */ { "x" : 948, "y" : 8, "bCoef" : 0, "cMask" : [ ] },
		/* 55 */ { "x" : -948, "y" : 8, "bCoef" : 0, "cMask" : [ ] },
		/* 56 */ { "x" : 948, "y" : 6, "bCoef" : 0, "cMask" : [ ] },
		/* 57 */ { "x" : -948, "y" : 6, "bCoef" : 0, "cMask" : [ ] },
		/* 58 */ { "x" : 948, "y" : 4, "bCoef" : 0, "cMask" : [ ] },
		/* 59 */ { "x" : -948, "y" : 4, "bCoef" : 0, "cMask" : [ ] },
		/* 60 */ { "x" : 948, "y" : 2, "bCoef" : 0, "cMask" : [ ] },
		/* 61 */ { "x" : -948, "y" : 2, "bCoef" : 0, "cMask" : [ ] },
		/* 62 */ { "x" : 948, "y" : 0, "bCoef" : 0, "cMask" : [ ] },
		/* 63 */ { "x" : -948, "y" : 0, "bCoef" : 0, "cMask" : [ ] },
		/* 64 */ { "x" : 948, "y" : -2, "bCoef" : 0, "cMask" : [ ] },
		/* 65 */ { "x" : -948, "y" : -2, "bCoef" : 0, "cMask" : [ ] },
		/* 66 */ { "x" : 948, "y" : -4, "bCoef" : 0, "cMask" : [ ] },
		/* 67 */ { "x" : -948, "y" : -4, "bCoef" : 0, "cMask" : [ ] },
		/* 68 */ { "x" : 948, "y" : -6, "bCoef" : 0, "cMask" : [ ] },
		/* 69 */ { "x" : -948, "y" : -6, "bCoef" : 0, "cMask" : [ ] },
		/* 70 */ { "x" : 948, "y" : -8, "bCoef" : 0, "cMask" : [ ] },
		/* 71 */ { "x" : -948, "y" : -8, "bCoef" : 0, "cMask" : [ ] },
		/* 72 */ { "x" : 948, "y" : -10, "bCoef" : 0, "cMask" : [ ] },
		/* 73 */ { "x" : -948, "y" : -10, "bCoef" : 0, "cMask" : [ ] },
		/* 74 */ { "x" : 948, "y" : -12, "bCoef" : 0, "cMask" : [ ] },
		/* 75 */ { "x" : -948, "y" : -12, "bCoef" : 0, "cMask" : [ ] },
		/* 76 */ { "x" : 948, "y" : -16, "bCoef" : 0, "cMask" : [ ], "color" : "123456" },
		/* 77 */ { "x" : -948, "y" : -16, "bCoef" : 0, "cMask" : [ ], "color" : "123456" },
		/* 78 */ { "x" : 0, "y" : 150, "bCoef" : 0, "cMask" : [ ] },
		/* 79 */ { "x" : 0, "y" : -150, "bCoef" : 0, "cMask" : [ ] },
		/* 80 */ { "x" : 0, "y" : 150, "bCoef" : 0, "cMask" : [ ] },
		/* 81 */ { "x" : 0, "y" : -150, "bCoef" : 0, "cMask" : [ ] },
		/* 82 */ { "x" : 948, "y" : 168, "bCoef" : 0, "cMask" : [ ] },
		/* 83 */ { "x" : -948, "y" : 168, "bCoef" : 0, "cMask" : [ ] },
		/* 84 */ { "x" : 948, "y" : 170, "bCoef" : 0, "cMask" : [ ] },
		/* 85 */ { "x" : -948, "y" : 170, "bCoef" : 0, "cMask" : [ ] },
		/* 86 */ { "x" : 948, "y" : 172, "bCoef" : 0, "cMask" : [ ] },
		/* 87 */ { "x" : -948, "y" : 172, "bCoef" : 0, "cMask" : [ ] },
		/* 88 */ { "x" : 948, "y" : 174, "bCoef" : 0, "cMask" : [ ] },
		/* 89 */ { "x" : -948, "y" : 174, "bCoef" : 0, "cMask" : [ ] },
		/* 90 */ { "x" : 948, "y" : 176, "bCoef" : 0, "cMask" : [ ] },
		/* 91 */ { "x" : -948, "y" : 176, "bCoef" : 0, "cMask" : [ ] },
		/* 92 */ { "x" : 948, "y" : 178, "bCoef" : 0, "cMask" : [ ] },
		/* 93 */ { "x" : -948, "y" : 178, "bCoef" : 0, "cMask" : [ ] },
		/* 94 */ { "x" : 948, "y" : 180, "bCoef" : 0, "cMask" : [ ] },
		/* 95 */ { "x" : -948, "y" : 180, "bCoef" : 0, "cMask" : [ ] },
		/* 96 */ { "x" : 948, "y" : 182, "bCoef" : 0, "cMask" : [ ] },
		/* 97 */ { "x" : -948, "y" : 182, "bCoef" : 0, "cMask" : [ ] },
		/* 98 */ { "x" : 948, "y" : 184, "bCoef" : 0, "cMask" : [ ] },
		/* 99 */ { "x" : -948, "y" : 184, "bCoef" : 0, "cMask" : [ ] },
		/* 100 */ { "x" : 948, "y" : 186, "bCoef" : 0, "cMask" : [ ] },
		/* 101 */ { "x" : -948, "y" : 186, "bCoef" : 0, "cMask" : [ ] },
		/* 102 */ { "x" : 948, "y" : 188, "bCoef" : 0, "cMask" : [ ] },
		/* 103 */ { "x" : -948, "y" : 188, "bCoef" : 0, "cMask" : [ ] },
		/* 104 */ { "x" : 948, "y" : 190, "bCoef" : 0, "cMask" : [ ] },
		/* 105 */ { "x" : -948, "y" : 190, "bCoef" : 0, "cMask" : [ ] },
		/* 106 */ { "x" : 948, "y" : 192, "bCoef" : 0, "cMask" : [ ] },
		/* 107 */ { "x" : -948, "y" : 192, "bCoef" : 0, "cMask" : [ ] },
		/* 108 */ { "x" : 948, "y" : 194, "bCoef" : 0, "cMask" : [ ] },
		/* 109 */ { "x" : -948, "y" : 194, "bCoef" : 0, "cMask" : [ ] },
		/* 110 */ { "x" : 948, "y" : 350, "bCoef" : 0, "cMask" : [ ] },
		/* 111 */ { "x" : -948, "y" : 350, "bCoef" : 0, "cMask" : [ ] },
		/* 112 */ { "x" : 948, "y" : 352, "bCoef" : 0, "cMask" : [ ] },
		/* 113 */ { "x" : -948, "y" : 352, "bCoef" : 0, "cMask" : [ ] },
		/* 114 */ { "x" : 948, "y" : 354, "bCoef" : 0, "cMask" : [ ] },
		/* 115 */ { "x" : -948, "y" : 354, "bCoef" : 0, "cMask" : [ ] },
		/* 116 */ { "x" : 948, "y" : 356, "bCoef" : 0, "cMask" : [ ] },
		/* 117 */ { "x" : -948, "y" : 356, "bCoef" : 0, "cMask" : [ ] },
		/* 118 */ { "x" : 948, "y" : 358, "bCoef" : 0, "cMask" : [ ] },
		/* 119 */ { "x" : -948, "y" : 358, "bCoef" : 0, "cMask" : [ ] },
		/* 120 */ { "x" : 948, "y" : 360, "bCoef" : 0, "cMask" : [ ] },
		/* 121 */ { "x" : -948, "y" : 360, "bCoef" : 0, "cMask" : [ ] },
		/* 122 */ { "x" : 948, "y" : 362, "bCoef" : 0, "cMask" : [ ] },
		/* 123 */ { "x" : -948, "y" : 362, "bCoef" : 0, "cMask" : [ ] },
		/* 124 */ { "x" : 948, "y" : 364, "bCoef" : 0, "cMask" : [ ] },
		/* 125 */ { "x" : -948, "y" : 364, "bCoef" : 0, "cMask" : [ ] },
		/* 126 */ { "x" : 948, "y" : 366, "bCoef" : 0, "cMask" : [ ] },
		/* 127 */ { "x" : -948, "y" : 366, "bCoef" : 0, "cMask" : [ ] },
		/* 128 */ { "x" : 948, "y" : 368, "bCoef" : 0, "cMask" : [ ] },
		/* 129 */ { "x" : -948, "y" : 368, "bCoef" : 0, "cMask" : [ ] },
		/* 130 */ { "x" : 948, "y" : 370, "bCoef" : 0, "cMask" : [ ] },
		/* 131 */ { "x" : -948, "y" : 370, "bCoef" : 0, "cMask" : [ ] },
		/* 132 */ { "x" : 948, "y" : 372, "bCoef" : 0, "cMask" : [ ] },
		/* 133 */ { "x" : -948, "y" : 372, "bCoef" : 0, "cMask" : [ ] },
		/* 134 */ { "x" : 948, "y" : 374, "bCoef" : 0, "cMask" : [ ] },
		/* 135 */ { "x" : -948, "y" : 374, "bCoef" : 0, "cMask" : [ ] },
		/* 136 */ { "x" : 948, "y" : 376, "bCoef" : 0, "cMask" : [ ] },
		/* 137 */ { "x" : -948, "y" : 376, "bCoef" : 0, "cMask" : [ ] },
		/* 138 */ { "x" : 948, "y" : -168, "bCoef" : 0, "cMask" : [ ] },
		/* 139 */ { "x" : -948, "y" : -168, "bCoef" : 0, "cMask" : [ ] },
		/* 140 */ { "x" : 948, "y" : -170, "bCoef" : 0, "cMask" : [ ] },
		/* 141 */ { "x" : -948, "y" : -170, "bCoef" : 0, "cMask" : [ ] },
		/* 142 */ { "x" : 948, "y" : -172, "bCoef" : 0, "cMask" : [ ] },
		/* 143 */ { "x" : -948, "y" : -172, "bCoef" : 0, "cMask" : [ ] },
		/* 144 */ { "x" : 948, "y" : -174, "bCoef" : 0, "cMask" : [ ] },
		/* 145 */ { "x" : -948, "y" : -174, "bCoef" : 0, "cMask" : [ ] },
		/* 146 */ { "x" : 948, "y" : -176, "bCoef" : 0, "cMask" : [ ] },
		/* 147 */ { "x" : -948, "y" : -176, "bCoef" : 0, "cMask" : [ ] },
		/* 148 */ { "x" : 948, "y" : -178, "bCoef" : 0, "cMask" : [ ] },
		/* 149 */ { "x" : -948, "y" : -178, "bCoef" : 0, "cMask" : [ ] },
		/* 150 */ { "x" : 948, "y" : -180, "bCoef" : 0, "cMask" : [ ] },
		/* 151 */ { "x" : -948, "y" : -180, "bCoef" : 0, "cMask" : [ ] },
		/* 152 */ { "x" : 948, "y" : -182, "bCoef" : 0, "cMask" : [ ] },
		/* 153 */ { "x" : -948, "y" : -182, "bCoef" : 0, "cMask" : [ ] },
		/* 154 */ { "x" : 948, "y" : -184, "bCoef" : 0, "cMask" : [ ] },
		/* 155 */ { "x" : -948, "y" : -184, "bCoef" : 0, "cMask" : [ ] },
		/* 156 */ { "x" : 948, "y" : -186, "bCoef" : 0, "cMask" : [ ] },
		/* 157 */ { "x" : -948, "y" : -186, "bCoef" : 0, "cMask" : [ ] },
		/* 158 */ { "x" : 948, "y" : -188, "bCoef" : 0, "cMask" : [ ] },
		/* 159 */ { "x" : -948, "y" : -188, "bCoef" : 0, "cMask" : [ ] },
		/* 160 */ { "x" : 948, "y" : -190, "bCoef" : 0, "cMask" : [ ] },
		/* 161 */ { "x" : -948, "y" : -190, "bCoef" : 0, "cMask" : [ ] },
		/* 162 */ { "x" : 948, "y" : -192, "bCoef" : 0, "cMask" : [ ] },
		/* 163 */ { "x" : -948, "y" : -192, "bCoef" : 0, "cMask" : [ ] },
		/* 164 */ { "x" : 948, "y" : -194, "bCoef" : 0, "cMask" : [ ] },
		/* 165 */ { "x" : -948, "y" : -194, "bCoef" : 0, "cMask" : [ ] },
		/* 166 */ { "x" : 948, "y" : -350, "bCoef" : 0, "cMask" : [ ] },
		/* 167 */ { "x" : -948, "y" : -350, "bCoef" : 0, "cMask" : [ ] },
		/* 168 */ { "x" : 948, "y" : -352, "bCoef" : 0, "cMask" : [ ] },
		/* 169 */ { "x" : -948, "y" : -352, "bCoef" : 0, "cMask" : [ ] },
		/* 170 */ { "x" : 948, "y" : -354, "bCoef" : 0, "cMask" : [ ] },
		/* 171 */ { "x" : -948, "y" : -354, "bCoef" : 0, "cMask" : [ ] },
		/* 172 */ { "x" : 948, "y" : -356, "bCoef" : 0, "cMask" : [ ] },
		/* 173 */ { "x" : -948, "y" : -356, "bCoef" : 0, "cMask" : [ ] },
		/* 174 */ { "x" : 948, "y" : -358, "bCoef" : 0, "cMask" : [ ] },
		/* 175 */ { "x" : -948, "y" : -358, "bCoef" : 0, "cMask" : [ ] },
		/* 176 */ { "x" : 948, "y" : -360, "bCoef" : 0, "cMask" : [ ] },
		/* 177 */ { "x" : -948, "y" : -360, "bCoef" : 0, "cMask" : [ ] },
		/* 178 */ { "x" : 948, "y" : -362, "bCoef" : 0, "cMask" : [ ] },
		/* 179 */ { "x" : -948, "y" : -362, "bCoef" : 0, "cMask" : [ ] },
		/* 180 */ { "x" : 948, "y" : -364, "bCoef" : 0, "cMask" : [ ] },
		/* 181 */ { "x" : -948, "y" : -364, "bCoef" : 0, "cMask" : [ ] },
		/* 182 */ { "x" : 948, "y" : -366, "bCoef" : 0, "cMask" : [ ] },
		/* 183 */ { "x" : -948, "y" : -366, "bCoef" : 0, "cMask" : [ ] },
		/* 184 */ { "x" : 948, "y" : -368, "bCoef" : 0, "cMask" : [ ] },
		/* 185 */ { "x" : -948, "y" : -368, "bCoef" : 0, "cMask" : [ ] },
		/* 186 */ { "x" : 948, "y" : -370, "bCoef" : 0, "cMask" : [ ] },
		/* 187 */ { "x" : -948, "y" : -370, "bCoef" : 0, "cMask" : [ ] },
		/* 188 */ { "x" : 948, "y" : -372, "bCoef" : 0, "cMask" : [ ] },
		/* 189 */ { "x" : -948, "y" : -372, "bCoef" : 0, "cMask" : [ ] },
		/* 190 */ { "x" : 948, "y" : -374, "bCoef" : 0, "cMask" : [ ] },
		/* 191 */ { "x" : -948, "y" : -374, "bCoef" : 0, "cMask" : [ ] },
		/* 192 */ { "x" : 948, "y" : -376, "bCoef" : 0, "cMask" : [ ] },
		/* 193 */ { "x" : -948, "y" : -376, "bCoef" : 0, "cMask" : [ ] },
		/* 194 */ { "x" : 0, "y" : -460, "bCoef" : 0, "cMask" : [ ] },
		/* 195 */ { "x" : 0, "y" : 460, "bCoef" : 0, "cMask" : [ ] },
		/* 196 */ { "x" : 0, "y" : 1, "bCoef" : 0, "cMask" : [ ] },
		/* 197 */ { "x" : 0, "y" : -1, "bCoef" : 0, "cMask" : [ ] },
		/* 198 */ { "x" : 0, "y" : 3, "bCoef" : 0, "cMask" : [ ] },
		/* 199 */ { "x" : 0, "y" : -3, "bCoef" : 0, "cMask" : [ ] },
		/* 200 */ { "x" : 0, "y" : 1, "bCoef" : 0, "cMask" : [ ] },
		/* 201 */ { "x" : 0, "y" : -1, "bCoef" : 0, "cMask" : [ ] },
		/* 202 */ { "x" : 0, "y" : 3, "bCoef" : 0, "cMask" : [ ] },
		/* 203 */ { "x" : 0, "y" : -3, "bCoef" : 0, "cMask" : [ ] },
		
		/* 204 */ { "x" : -950, "y" : -300, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 90 },
		/* 205 */ { "x" : -680, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 90 },
		/* 206 */ { "x" : -950, "y" : 300, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : -90 },
		/* 207 */ { "x" : -680, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : -90 },
		/* 208 */ { "x" : 950, "y" : -300, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : -90 },
		/* 209 */ { "x" : 680, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : -90 },
		/* 210 */ { "x" : 950, "y" : 300, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 90 },
		/* 211 */ { "x" : 680, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 90 },
		/* 212 */ { "x" : 680, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 0 },
		/* 213 */ { "x" : 680, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 0 },
		
		/* 214 */ { "x" : 680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 215 */ { "x" : 680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 216 */ { "x" : 680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 217 */ { "x" : 680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 218 */ { "x" : 680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 219 */ { "x" : 680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 220 */ { "x" : 680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 221 */ { "x" : 680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 222 */ { "x" : 680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 223 */ { "x" : 680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 224 */ { "x" : 680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 225 */ { "x" : 680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 226 */ { "x" : 680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 227 */ { "x" : 680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 228 */ { "x" : 680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 229 */ { "x" : 680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 230 */ { "x" : -680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 231 */ { "x" : -680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 232 */ { "x" : -680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 233 */ { "x" : -680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 234 */ { "x" : -680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 235 */ { "x" : -680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 236 */ { "x" : -680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 237 */ { "x" : -680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 238 */ { "x" : -680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 239 */ { "x" : -680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 240 */ { "x" : -680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 241 */ { "x" : -680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 242 */ { "x" : -680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 243 */ { "x" : -680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 244 */ { "x" : -680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 245 */ { "x" : -680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : false, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 2, "v1" : 3, "vis" : false, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 6, "v1" : 7, "vis" : false, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 8, "v1" : 9, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 9, "v1" : 10, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 10, "v1" : 9, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 10, "v1" : 11, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 2, "v1" : 12, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 6, "v1" : 13, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 1, "v1" : 14, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 5, "v1" : 15, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 12, "v1" : 14, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 13, "v1" : 15, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 1, "v1" : 0, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 5, "v1" : 4, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 2, "v1" : 3, "curve" : 0, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 6, "v1" : 7, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 0, "v1" : 16, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 3, "v1" : 17, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 18, "v1" : 19, "vis" : false, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 9, "v1" : 10, "curve" : 180, "vis" : false, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 21, "v1" : 20, "curve" : 180, "vis" : false, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 2, "v1" : 1, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 6, "v1" : 5, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 22, "v1" : 23, "curve" : 91.636910923379, "color" : "C5F0C9", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9718309859154628 },
		{ "v0" : 25, "v1" : 24, "curve" : 91.636910923384, "color" : "C5F0C9", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9718309859153781 },
		{ "v0" : 26, "v1" : 27, "curve" : 91.636910923386, "color" : "C5F0C9", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9718309859153441 },
		{ "v0" : 29, "v1" : 28, "curve" : 91.636910923367, "color" : "C5F0C9", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9718309859156665 },
		{ "v0" : 48, "v1" : 49, "color" : "376d21", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 50, "v1" : 51, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 52, "v1" : 53, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 54, "v1" : 55, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 56, "v1" : 57, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 58, "v1" : 59, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 60, "v1" : 61, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 62, "v1" : 63, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 64, "v1" : 65, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 66, "v1" : 67, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 68, "v1" : 69, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 70, "v1" : 71, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 72, "v1" : 73, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 74, "v1" : 75, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 78, "v1" : 79, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 81, "v1" : 80, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 82, "v1" : 83, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 84, "v1" : 85, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 86, "v1" : 87, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 88, "v1" : 89, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 90, "v1" : 91, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 92, "v1" : 93, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 94, "v1" : 95, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 96, "v1" : 97, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 98, "v1" : 99, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 100, "v1" : 101, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 102, "v1" : 103, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 104, "v1" : 105, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 106, "v1" : 107, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 108, "v1" : 109, "color" : "377f3d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 110, "v1" : 111, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 112, "v1" : 113, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 114, "v1" : 115, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 116, "v1" : 117, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 118, "v1" : 119, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 120, "v1" : 121, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 122, "v1" : 123, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 124, "v1" : 125, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 126, "v1" : 127, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 128, "v1" : 129, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 130, "v1" : 131, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 132, "v1" : 133, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 134, "v1" : 135, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 136, "v1" : 137, "color" : "377f3d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 138, "v1" : 139, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 140, "v1" : 141, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 142, "v1" : 143, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 144, "v1" : 145, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 146, "v1" : 147, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 148, "v1" : 149, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 150, "v1" : 151, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 152, "v1" : 153, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 154, "v1" : 155, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 156, "v1" : 157, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 158, "v1" : 159, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 160, "v1" : 161, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 162, "v1" : 163, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 164, "v1" : 165, "color" : "377f3d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 166, "v1" : 167, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 168, "v1" : 169, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 170, "v1" : 171, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 172, "v1" : 173, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 174, "v1" : 175, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 176, "v1" : 177, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 178, "v1" : 179, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 180, "v1" : 181, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 182, "v1" : 183, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 184, "v1" : 185, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 186, "v1" : 187, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 188, "v1" : 189, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 190, "v1" : 191, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 192, "v1" : 193, "color" : "377f3d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 194, "v1" : 195, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 196, "v1" : 197, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 198, "v1" : 199, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 201, "v1" : 200, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 203, "v1" : 202, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		
		{ "v0" : 204, "v1" : 205, "curve" : 90, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 206, "v1" : 207, "curve" : -90, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 205, "v1" : 207, "curve" : 0, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line", "x" : -680 },
		{ "v0" : 208, "v1" : 209, "curve" : -90, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 210, "v1" : 211, "curve" : 90, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 212, "v1" : 213, "curve" : 0, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line", "x" : 680 },
		
		{ "v0" : 214, "v1" : 215, "curve" : -180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 216, "v1" : 217, "curve" : -180.00000000000267, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 219, "v1" : 218, "curve" : -180.00000000000816, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 221, "v1" : 220, "curve" : -179.9999999999973, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 222, "v1" : 223, "curve" : -180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 224, "v1" : 225, "curve" : -180.00000000000267, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 227, "v1" : 226, "curve" : -180.00000000000816, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 229, "v1" : 228, "curve" : -179.9999999999973, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 230, "v1" : 231, "curve" : -180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 232, "v1" : 233, "curve" : -180.00000000000267, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 235, "v1" : 234, "curve" : -180.00000000000816, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 237, "v1" : 236, "curve" : -179.9999999999973, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 238, "v1" : 239, "curve" : -180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 240, "v1" : 241, "curve" : -180.00000000000267, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 243, "v1" : 242, "curve" : -180.00000000000816, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 245, "v1" : 244, "curve" : -179.9999999999973, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -460, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -460, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -508, "bCoef" : 0.2 },
		{ "normal" : [0,-1 ], "dist" : -508, "bCoef" : 0.2 },
		{ "normal" : [1,0 ], "dist" : -1002, "bCoef" : 0.2 },
		{ "normal" : [-1,0 ], "dist" : -1002, "bCoef" : 0.2 }

	],

	"goals" : [
		{ "p0" : [-959.1,-90 ], "p1" : [-959.1,90 ], "team" : "red" },
		{ "p0" : [959.1,90 ], "p1" : [959.1,-90 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6.4, "invMass" : 1.5, "pos" : [0,0 ], "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 5, "invMass" : 0, "pos" : [-950,90 ], "bCoef" : 1 },
		{ "radius" : 5, "invMass" : 0, "pos" : [-950,-90 ], "bCoef" : 1 },
		{ "radius" : 5, "invMass" : 0, "pos" : [950,90 ], "bCoef" : 1 },
		{ "radius" : 5, "invMass" : 0, "pos" : [950,-90 ], "bCoef" : 1 }

	],

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083

	},

	"ballPhysics" : "disc0",

	"spawnDistance" : 310,

	"traits" : {
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] }

	},

	"joints" : [
		

	],

	"redSpawnPoints" : [
		[ -264, 0
		],
		[ -264, 0
		],
		[ -264, 0
		],
		[ -264, 0
		],
		[ -264, 0
		],
		[ -350, 484
		]

	],

	"blueSpawnPoints" : [
		[ 264, 0
		],
		[ 264, 0
		],
		[ 264, 0
		],
		[ 264, 0
		],
		[ 264, 0
		],
		[ 350, 484
		]

	]
}`;
	RSRMap = false;
	return Futx5cespedMap;
}

function getPremiosMap() {
	var PremiosMap = `{

	"name" : "🌟 ɢᴀʟᴀ ᴅᴇ ᴘʀᴇᴍɪᴀᴄɪᴏɴᴇs 🎖️",

	"width" : 500,

	"height" : 300,

	"redSpawnPoints" : [
		[ -206, 47
		],
		[ -147, 47
		],
		[ -88, 47
		],
		[ -32, 47
		],
		[ 82, 47
		],
		[ 139, 47
		],
		[ 198, 47
		],
		[ 256, 47
		],
		[ -206, 130
		],
		[ -147, 130
		],
		[ -89, 130
		],
		[ -32, 130
		],
		[ 82, 130
		],
		[ 139, 130
		],
		[ 198, 130
		],
		[ 256, 130
		],
		[ -206, 202
		],
		[ -147, 202
		],
		[ -89, 202
		],
		[ -32, 202
		],
		[ 82, 202
		],
		[ 139, 202
		],
		[ 198, 202
		],
		[ 256, 202
		],
		[ -206, 263
		],
		[ -147, 263
		],
		[ -88, 263
		],
		[ -32, 263
		]

	],

	"blueSpawnPoints" : [
		[ -121, -125
		],
		[ -331, -75
		],
		[ 393, -75
		],
		[ -275, -75
		],
		[ 336, -75
		]

	],

	"bg" : { "type" : "none", "width" : 368, "height" : 171, "kickOffRadius" : 50, "cornerRadius" : 0, "color" : "51443f" },

	"vertexes" : [
		/* 0 */ { "x" : -224.5, "y" : 61.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 1 */ { "x" : -189.5, "y" : 61.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 2 */ { "x" : -226.16666666666666, "y" : 61.83333333333333, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 3 */ { "x" : -187.5, "y" : 62.16666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 4 */ { "x" : -166, "y" : 61.33333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 5 */ { "x" : -131, "y" : 61.33333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 6 */ { "x" : -167.66666666666666, "y" : 61.66666666666667, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 7 */ { "x" : -129, "y" : 62, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 8 */ { "x" : -108.83333333333333, "y" : 61.16666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 9 */ { "x" : -73.83333333333333, "y" : 61.16666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 10 */ { "x" : -110.49999999999999, "y" : 61.499999999999986, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 11 */ { "x" : -71.83333333333333, "y" : 61.833333333333314, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 12 */ { "x" : -50.333333333333336, "y" : 61, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 13 */ { "x" : -15.333333333333332, "y" : 61, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 14 */ { "x" : -51.99999999999999, "y" : 61.33333333333333, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 15 */ { "x" : -13.333333333333332, "y" : 61.66666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 16 */ { "x" : 63.5, "y" : 59.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 17 */ { "x" : 98.5, "y" : 59.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 18 */ { "x" : 61.83333333333334, "y" : 59.83333333333333, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 19 */ { "x" : 100.5, "y" : 60.16666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 20 */ { "x" : 122, "y" : 59.33333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 21 */ { "x" : 157, "y" : 59.33333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 22 */ { "x" : 120.33333333333334, "y" : 59.66666666666667, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 23 */ { "x" : 159, "y" : 60, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 24 */ { "x" : 179.16666666666669, "y" : 59.16666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 25 */ { "x" : 214.16666666666669, "y" : 59.16666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 26 */ { "x" : 177.5, "y" : 59.499999999999986, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 27 */ { "x" : 216.16666666666669, "y" : 59.833333333333314, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 28 */ { "x" : 237.66666666666666, "y" : 59, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 29 */ { "x" : 272.6666666666667, "y" : 59, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 30 */ { "x" : 236, "y" : 59.33333333333333, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 31 */ { "x" : 274.6666666666667, "y" : 59.66666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 32 */ { "x" : 64, "y" : 140, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 33 */ { "x" : 99, "y" : 140, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 34 */ { "x" : 62.33333333333334, "y" : 140.33333333333331, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 35 */ { "x" : 101, "y" : 140.66666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 36 */ { "x" : 122.5, "y" : 139.83333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 37 */ { "x" : 157.5, "y" : 139.83333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 38 */ { "x" : 120.83333333333334, "y" : 140.16666666666669, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 39 */ { "x" : 159.5, "y" : 140.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 40 */ { "x" : 179.66666666666669, "y" : 139.66666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 41 */ { "x" : 214.66666666666669, "y" : 139.66666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 42 */ { "x" : 178, "y" : 140, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 43 */ { "x" : 216.66666666666669, "y" : 140.33333333333331, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 44 */ { "x" : 238.16666666666666, "y" : 139.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 45 */ { "x" : 273.1666666666667, "y" : 139.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 46 */ { "x" : 236.5, "y" : 139.83333333333331, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 47 */ { "x" : 275.1666666666667, "y" : 140.16666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		
		/* 48 */ { "x" : -242, "y" : -50, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "5C3824" },
		/* 49 */ { "x" : 300, "y" : -50, "bCoef" : 0.2, "cMask" : ["all" ], "color" : "5C3824" },
		/* 50 */ { "x" : -242, "y" : -47.66666666666667, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "8F5738" },
		/* 51 */ { "x" : 300, "y" : -47.66666666666667, "bCoef" : 0.2, "cMask" : ["all" ], "color" : "8F5738" },
		/* 52 */ { "x" : -1000, "y" : -46, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "A6A619" },
		/* 53 */ { "x" : -241, "y" : -46, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "A6A619" },
		/* 54 */ { "x" : -1000, "y" : -43.66666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		/* 55 */ { "x" : -241, "y" : -43.66666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		/* 56 */ { "x" : 1000, "y" : -50, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "5C3824" },
		/* 57 */ { "x" : 1000, "y" : -47.66666666666667, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "8F5738" },
		/* 58 */ { "x" : 300, "y" : -46, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "A6A619" },
		/* 59 */ { "x" : 1000, "y" : -46, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "A6A619" },
		/* 60 */ { "x" : 300, "y" : -43.66666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		/* 61 */ { "x" : 1000, "y" : -43.66666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		/* 62 */ { "x" : 1000, "y" : -45.5, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "5C3824" },
		/* 63 */ { "x" : 1000, "y" : -43.16666666666667, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "8F5738" },
		/* 64 */ { "x" : 303.5, "y" : -41.5, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "A6A619" },
		/* 65 */ { "x" : 1000, "y" : -41.5, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "A6A619" },
		/* 66 */ { "x" : 303.5, "y" : -39.16666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		/* 67 */ { "x" : 1000, "y" : -39.16666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		/* 68 */ { "x" : 1000, "y" : -40.5, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "5C3824" },
		/* 69 */ { "x" : 1000, "y" : -38.16666666666667, "bCoef" : 0.2, "cMask" : ["red","blue" ], "color" : "8F5738" },
		/* 70 */ { "x" : 1000, "y" : -34.16666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		/* 71 */ { "x" : -242, "y" : -52.8, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "7A0B0B" },
		/* 72 */ { "x" : 300, "y" : -52.8, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "7A0B0B" },
		
		/* 73 */ { "x" : -120, "y" : -52.8, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "292929" },
		/* 74 */ { "x" : -120, "y" : -100, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "292929" },
		/* 75 */ { "x" : -67, "y" : -100, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 76 */ { "x" : -67, "y" : -52.8, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 77 */ { "x" : -100, "y" : -100.66666666666667, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 78 */ { "x" : -95, "y" : -114.66666666666667, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 79 */ { "x" : -90, "y" : -100.66666666666667, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 80 */ { "x" : 51.83333333333334, "y" : -53.3, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -30, "color" : "292929" },
		/* 81 */ { "x" : 51.83333333333334, "y" : -100, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -30, "color" : "292929" },
		/* 82 */ { "x" : 117.33333333333334, "y" : -100, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -30 },
		/* 83 */ { "x" : 117.33333333333334, "y" : -52.8, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -30 },
		/* 84 */ { "x" : 62.16666666666667, "y" : -99.66666666666667, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 85 */ { "x" : 67.16666666666667, "y" : -113.66666666666667, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 86 */ { "x" : 72.16666666666667, "y" : -99.66666666666667, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 87 */ { "x" : 71.96808055783823, "y" : -59.40878679783998, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 88 */ { "x" : 76.34148676363853, "y" : -71.90423310012652, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 89 */ { "x" : 65.72035740669497, "y" : -81.27581782684139, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 90 */ { "x" : 80.09012065432448, "y" : -81.27581782684139, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 91 */ { "x" : 84.46352686012476, "y" : -93.77126412912794, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 92 */ { "x" : 88.83693306592504, "y" : -81.27581782684139, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 93 */ { "x" : 103.20669631355456, "y" : -81.27581782684139, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 94 */ { "x" : 92.585566956611, "y" : -71.90423310012652, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 95 */ { "x" : 96.95897316241128, "y" : -59.40878679783998, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 96 */ { "x" : 84.46352686012476, "y" : -68.78037152455488, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 97 */ { "x" : -86.13703320742341, "y" : -116.66084959237983, "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		/* 98 */ { "x" : -86.13703320742341, "y" : -102.0964097434717, "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		/* 99 */ { "x" : -61.862966792576586, "y" : -102.0964097434717, "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		/* 100 */ { "x" : -61.862966792576586, "y" : -116.66084959237983, "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		/* 101 */ { "x" : -74, "y" : -106.95122302644108, "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		/* 102 */ { "x" : -74.08971147925712, "y" : -115.2889203852038, "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line", "curve" : -180 },
		/* 103 */ { "x" : -74.08971147925712, "y" : -109.90623162977636, "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line", "curve" : -180 },
		/* 104 */ { "x" : -74.08971147925712, "y" : -115.2889203852038, "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line", "curve" : 180 },
		/* 105 */ { "x" : -74.08971147925712, "y" : -109.90623162977636, "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line", "curve" : 180 },
		/* 106 */ { "x" : 88.33333333333333, "y" : -101.66666666666667, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 107 */ { "x" : 91.33333333333333, "y" : -107.33333333333333, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D92323" },
		/* 108 */ { "x" : 111, "y" : -106.66666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D92323" },
		/* 109 */ { "x" : 114.66666666666667, "y" : -101.33333333333333, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 110 */ { "x" : 116, "y" : -113, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 111 */ { "x" : 86, "y" : -113, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 112 */ { "x" : 116, "y" : -113, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "911717" },
		/* 113 */ { "x" : 86, "y" : -113, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "911717" },
		/* 114 */ { "x" : 94.19352169927113, "y" : -112.03852397514932, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 115 */ { "x" : 97.20544760874235, "y" : -117.05840049093467, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 116 */ { "x" : 104.23327473084184, "y" : -117.05840049093467, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 117 */ { "x" : 106.74321298873453, "y" : -112.03852397514932, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 118 */ { "x" : 93.23397862552042, "y" : -117.67709682008017, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 119 */ { "x" : 95.81530409297012, "y" : -125.05231244136505, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 120 */ { "x" : 89.54637081487797, "y" : -130.58372415732867, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 121 */ { "x" : 98.02786877935559, "y" : -130.58372415732867, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 122 */ { "x" : 100.60919424680529, "y" : -137.95893977861357, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 123 */ { "x" : 103.190519714255, "y" : -130.58372415732867, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 124 */ { "x" : 111.67201767873262, "y" : -130.58372415732867, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 125 */ { "x" : 105.40308440064047, "y" : -125.05231244136505, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 126 */ { "x" : 107.98440986809017, "y" : -117.67709682008017, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 127 */ { "x" : 100.60919424680529, "y" : -123.20850853604382, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "FEC83C" },
		/* 128 */ { "x" : 100.62717983328598, "y" : -117.05840049093467, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 129 */ { "x" : 100.75925602846796, "y" : -122.17538599981056, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 130 */ { "x" : -204.55878787878788, "y" : -54.666666666666664, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 131 */ { "x" : -208.4448484848485, "y" : -64.33333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 132 */ { "x" : -214.55151515151516, "y" : -54.666666666666664, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 133 */ { "x" : -210.3878787878788, "y" : -73, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 134 */ { "x" : -208.4448484848485, "y" : -64.33333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180 },
		/* 135 */ { "x" : -210.3878787878788, "y" : -73, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180 },
		/* 136 */ { "x" : -208.4426825275565, "y" : -66.04321728691477, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "FFFFFF" },
		/* 137 */ { "x" : -209.88945869256796, "y" : -72.49639855942377, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "FFFFFF" },
		
		/* 138 */ { "x" : -203.72606060606057, "y" : -71.66666666666669, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 139 */ { "x" : -195.67636363636362, "y" : -76.00000000000003, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 140 */ { "x" : -205.72606060606057, "y" : -74.66666666666669, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 141 */ { "x" : -202.00969696969693, "y" : -83.00000000000003, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 142 */ { "x" : -202.05939393939389, "y" : -67.33333333333337, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 143 */ { "x" : -193.6763636363636, "y" : -66.66666666666671, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		
		/* 144 */ { "x" : 277.3545454545455, "y" : -54.666666666666664, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 145 */ { "x" : 280.5929292929293, "y" : -64.33333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 146 */ { "x" : 285.6818181818182, "y" : -54.666666666666664, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 147 */ { "x" : 282.2121212121212, "y" : -73, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		/* 148 */ { "x" : 280.5929292929293, "y" : -64.33333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180 },
		/* 149 */ { "x" : 282.2121212121212, "y" : -73, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180 },
		/* 150 */ { "x" : 280.5911243285193, "y" : -66.04321728691477, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "FFFFFF" },
		/* 151 */ { "x" : 281.7967711326955, "y" : -72.49639855942377, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "FFFFFF" },
		
		/* 152 */ { "x" : 276.660606060606, "y" : -71.66666666666669, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 153 */ { "x" : 268.9525252525252, "y" : -74.33333333333336, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 154 */ { "x" : 278.32727272727266, "y" : -74.66666666666669, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 155 */ { "x" : 273.8969696969696, "y" : -80.66666666666669, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 156 */ { "x" : 274.5494949494949, "y" : -66.33333333333334, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 157 */ { "x" : 267.5080808080808, "y" : -64.00000000000004, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "C2C2C2" },
		/* 158 */ { "x" : -1000, "y" : -41.5, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "A6A619" },
		/* 159 */ { "x" : -243.5, "y" : -41.5, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "A6A619" },
		/* 160 */ { "x" : -1000, "y" : -39.16666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		/* 161 */ { "x" : -243.5, "y" : -39.16666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		/* 162 */ { "x" : -1000, "y" : -34.66666666666667, "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "color" : "D1D11F" },
		
		/* 163 */ { "x" : -99.1, "y" : -115, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "080808" },
		/* 164 */ { "x" : -91.1, "y" : -115, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "080808" },
		/* 165 */ { "x" : 63.1, "y" : -115, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "080808" },
		/* 166 */ { "x" : 71.1, "y" : -115, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "080808" },
		/* 167 */ { "x" : -224, "y" : 142, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 168 */ { "x" : -189, "y" : 142, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 169 */ { "x" : -225.66666666666666, "y" : 142.33333333333331, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 170 */ { "x" : -187, "y" : 142.66666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 171 */ { "x" : -165.5, "y" : 141.83333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 172 */ { "x" : -130.5, "y" : 141.83333333333334, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 173 */ { "x" : -167.16666666666666, "y" : 142.16666666666669, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 174 */ { "x" : -128.5, "y" : 142.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 175 */ { "x" : -108.33333333333333, "y" : 141.66666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 176 */ { "x" : -73.33333333333333, "y" : 141.66666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 177 */ { "x" : -109.99999999999999, "y" : 142, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 178 */ { "x" : -71.33333333333333, "y" : 142.33333333333331, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 179 */ { "x" : -49.833333333333336, "y" : 141.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 180 */ { "x" : -14.833333333333332, "y" : 141.5, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 181 */ { "x" : -51.49999999999999, "y" : 141.83333333333331, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 182 */ { "x" : -12.833333333333332, "y" : 142.16666666666666, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 183 */ { "x" : 63.89140381106196, "y" : 213.38340409507845, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 184 */ { "x" : 98.89140381106196, "y" : 213.38340409507845, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 185 */ { "x" : 62.224737144395306, "y" : 213.71673742841176, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 186 */ { "x" : 100.89140381106196, "y" : 214.0500707617451, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 187 */ { "x" : 122.39140381106196, "y" : 213.2167374284118, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 188 */ { "x" : 157.39140381106196, "y" : 213.2167374284118, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 189 */ { "x" : 120.7247371443953, "y" : 213.55007076174513, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 190 */ { "x" : 159.39140381106196, "y" : 213.88340409507845, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 191 */ { "x" : 179.55807047772865, "y" : 213.0500707617451, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 192 */ { "x" : 214.55807047772865, "y" : 213.0500707617451, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 193 */ { "x" : 177.89140381106196, "y" : 213.38340409507845, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 194 */ { "x" : 216.55807047772865, "y" : 213.71673742841176, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 195 */ { "x" : 238.05807047772862, "y" : 212.88340409507845, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 196 */ { "x" : 273.0580704777287, "y" : 212.88340409507845, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 197 */ { "x" : 236.39140381106196, "y" : 213.21673742841176, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 198 */ { "x" : 275.0580704777287, "y" : 213.5500707617451, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 199 */ { "x" : -224.51184317670894, "y" : 215.55641597444708, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 200 */ { "x" : -189.51184317670894, "y" : 215.55641597444708, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 201 */ { "x" : -226.1785098433756, "y" : 215.8897493077804, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 202 */ { "x" : -187.51184317670894, "y" : 216.22308264111373, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 203 */ { "x" : -166.01184317670894, "y" : 215.38974930778042, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 204 */ { "x" : -131.01184317670894, "y" : 215.38974930778042, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 205 */ { "x" : -167.6785098433756, "y" : 215.72308264111376, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 206 */ { "x" : -129.01184317670894, "y" : 216.05641597444708, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 207 */ { "x" : -108.84517651004226, "y" : 215.22308264111373, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 208 */ { "x" : -73.84517651004226, "y" : 215.22308264111373, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 209 */ { "x" : -110.51184317670892, "y" : 215.55641597444708, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 210 */ { "x" : -71.84517651004226, "y" : 215.8897493077804, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 211 */ { "x" : -50.345176510042286, "y" : 215.05641597444708, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 212 */ { "x" : -15.345176510042279, "y" : 215.05641597444708, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 213 */ { "x" : -52.01184317670894, "y" : 215.3897493077804, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 214 */ { "x" : -13.345176510042279, "y" : 215.72308264111373, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 215 */ { "x" : -224.51184317670894, "y" : 274.76287997444706, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 216 */ { "x" : -189.51184317670894, "y" : 274.76287997444706, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 217 */ { "x" : -226.1785098433756, "y" : 275.09621330778043, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 218 */ { "x" : -187.51184317670894, "y" : 275.42954664111375, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 219 */ { "x" : -166.01184317670894, "y" : 274.59621330778043, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 220 */ { "x" : -131.01184317670894, "y" : 274.59621330778043, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 221 */ { "x" : -167.6785098433756, "y" : 274.9295466411138, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 222 */ { "x" : -129.01184317670894, "y" : 275.26287997444706, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 223 */ { "x" : -108.84517651004226, "y" : 274.42954664111375, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 224 */ { "x" : -73.84517651004226, "y" : 274.42954664111375, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 225 */ { "x" : -110.51184317670892, "y" : 274.76287997444706, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 226 */ { "x" : -71.84517651004226, "y" : 275.09621330778043, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 227 */ { "x" : -50.345176510042286, "y" : 274.26287997444706, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 228 */ { "x" : -15.345176510042279, "y" : 274.26287997444706, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 229 */ { "x" : -52.01184317670894, "y" : 274.59621330778043, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" },
		/* 230 */ { "x" : -13.345176510042279, "y" : 274.92954664111375, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "5E0000" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 2, "v1" : 3, "curve" : -182.6127857129582, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 4, "v1" : 5, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 6, "v1" : 7, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 8, "v1" : 9, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 10, "v1" : 11, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 12, "v1" : 13, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 14, "v1" : 15, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 16, "v1" : 17, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 18, "v1" : 19, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 20, "v1" : 21, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 22, "v1" : 23, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 24, "v1" : 25, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 26, "v1" : 27, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 28, "v1" : 29, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 32, "v1" : 33, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 34, "v1" : 35, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 38, "v1" : 39, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 40, "v1" : 41, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 42, "v1" : 43, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 44, "v1" : 45, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 46, "v1" : 47, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 48, "v1" : 49, "vis" : true, "color" : "5C3824", "bCoef" : 0.2, "cMask" : ["all" ], "y" : -50 },
		{ "v0" : 50, "v1" : 51, "vis" : true, "color" : "8F5738", "bCoef" : 0.2, "cMask" : ["all" ], "y" : -50 },
		{ "v0" : 52, "v1" : 53, "vis" : true, "color" : "A6A619", "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "y" : -50 },
		{ "v0" : 54, "v1" : 55, "vis" : true, "color" : "D1D11F", "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "y" : -50 },
		{ "v0" : 58, "v1" : 59, "vis" : true, "color" : "A6A619", "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "y" : -50 },
		{ "v0" : 60, "v1" : 61, "vis" : true, "color" : "D1D11F", "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "y" : -50 },
		{ "v0" : 64, "v1" : 65, "vis" : true, "color" : "A6A619", "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "y" : -50 },
		{ "v0" : 66, "v1" : 67, "vis" : true, "color" : "D1D11F", "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "y" : -50 },
		{ "v0" : 71, "v1" : 72, "vis" : true, "color" : "7A0B0B", "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ] },
		
		{ "v0" : 73, "v1" : 74, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 74, "v1" : 75, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 75, "v1" : 76, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 77, "v1" : 78, "curve" : 0, "vis" : true, "color" : "D4D4D4", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 78, "v1" : 79, "curve" : 0, "vis" : true, "color" : "D4D4D4", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 80, "v1" : 81, "curve" : -30, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 81, "v1" : 82, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 82, "v1" : 83, "curve" : -30, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 84, "v1" : 85, "curve" : 0, "vis" : true, "color" : "D4D4D4", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 85, "v1" : 86, "curve" : 0, "vis" : true, "color" : "D4D4D4", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 87, "v1" : 88, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 89, "v1" : 90, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 90, "v1" : 91, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 91, "v1" : 92, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 92, "v1" : 93, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 93, "v1" : 94, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 94, "v1" : 95, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 95, "v1" : 96, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 96, "v1" : 87, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 97, "v1" : 98, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 98, "v1" : 99, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 99, "v1" : 100, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 100, "v1" : 97, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 97, "v1" : 101, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 101, "v1" : 100, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 102, "v1" : 103, "curve" : -180, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 104, "v1" : 105, "curve" : 180, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "320000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "320000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "D92323", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 108, "v1" : 110, "curve" : 0, "vis" : true, "color" : "D92323", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 107, "v1" : 111, "curve" : 0, "vis" : true, "color" : "D92323", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 111, "v1" : 110, "curve" : -56.17703193745971, "vis" : true, "color" : "D92323", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 113, "v1" : 112, "curve" : -100.21018089318501, "vis" : true, "color" : "911717", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 117, "v1" : 114, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 121, "v1" : 122, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 122, "v1" : 123, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 124, "v1" : 125, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 126, "v1" : 127, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 127, "v1" : 118, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 128, "v1" : 129, "curve" : 0, "vis" : true, "color" : "FEC83C", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 130, "v1" : 131, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 131, "v1" : 132, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 131, "v1" : 133, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 134, "v1" : 135, "curve" : 190.56025297135565, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 136, "v1" : 137, "curve" : -128.73605858799593, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 138, "v1" : 139, "curve" : 0, "vis" : true, "color" : "C2C2C2", "cMask" : ["wall" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 140, "v1" : 141, "curve" : 0, "vis" : true, "color" : "C2C2C2", "cMask" : ["wall" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 142, "v1" : 143, "curve" : 0, "vis" : true, "color" : "C2C2C2", "cMask" : ["wall" ], "cGroup" : ["red","blue" ] },
		
		{ "v0" : 144, "v1" : 145, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 145, "v1" : 146, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 145, "v1" : 147, "curve" : 0, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 148, "v1" : 149, "curve" : -201.24484895072413, "vis" : true, "color" : "292929", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 150, "v1" : 151, "curve" : 114.30593145146108, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 152, "v1" : 153, "curve" : 0, "vis" : true, "color" : "C2C2C2", "cMask" : ["wall" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 154, "v1" : 155, "curve" : 0, "vis" : true, "color" : "C2C2C2", "cMask" : ["wall" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "vis" : true, "color" : "C2C2C2", "cMask" : ["wall" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 158, "v1" : 159, "vis" : true, "color" : "A6A619", "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "y" : -50 },
		{ "v0" : 160, "v1" : 161, "vis" : true, "color" : "D1D11F", "bCoef" : 0.2, "cMask" : ["wall" ], "cGroup" : ["red","blue" ], "y" : -50 },
		
		{ "v0" : 163, "v1" : 164, "curve" : 0, "vis" : true, "color" : "080808", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 165, "v1" : 166, "curve" : 0, "vis" : true, "color" : "080808", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 167, "v1" : 168, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 169, "v1" : 170, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 171, "v1" : 172, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 173, "v1" : 174, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 175, "v1" : 176, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 177, "v1" : 178, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 179, "v1" : 180, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 181, "v1" : 182, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 183, "v1" : 184, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 185, "v1" : 186, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 187, "v1" : 188, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 189, "v1" : 190, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 191, "v1" : 192, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 193, "v1" : 194, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 195, "v1" : 196, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 197, "v1" : 198, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 199, "v1" : 200, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 201, "v1" : 202, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 203, "v1" : 204, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 205, "v1" : 206, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 207, "v1" : 208, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 209, "v1" : 210, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 211, "v1" : 212, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 213, "v1" : 214, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 215, "v1" : 216, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 217, "v1" : 218, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 219, "v1" : 220, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 221, "v1" : 222, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 223, "v1" : 224, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 225, "v1" : 226, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 227, "v1" : 228, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 229, "v1" : 230, "curve" : -180.87452846547475, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" }

	],

	"goals" : [
		

	],

	"discs" : [
		{ "radius" : 4, "pos" : [-95,-120 ], "color" : "080808", "cGroup" : ["" ], "trait" : "art" },
		{ "radius" : 4, "pos" : [67,-120 ], "color" : "080808", "cGroup" : ["" ], "trait" : "art" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -199, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [0,-1 ], "dist" : -300, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [5,0 ], "dist" : -500, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [-1,0 ], "dist" : -500, "bCoef" : 0.2, "cMask" : ["all" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },
		"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }

	},

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.1,
		"kickStrength" : 6.5,
		"radius" : 15,
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0
		],
		"kickingDamping" : 0.96,
		"kickback" : 0

	},

	"ballPhysics" : {
		"radius" : 0,
		"color" : "404040",
		"bCoef" : 10,
		"cMask" : [ 
		],
		"damping" : 1000,
		"invMass" : 4,
		"gravity" : [ 0, 0
		],
		"cGroup" : [ 
		]

	},

	"cameraWidth" : 0,

	"cameraHeight" : 0,

	"maxViewWidth" : 0,

	"cameraFollow" : "ball",

	"canBeStored" : true,

	"kickOffReset" : "partial",

	"joints" : [
		

	],

	"spawnDistance" : 170
}`;
	RSRMap = false;
isAFKpaused = true;
	return PremiosMap;
}

function getRealFutsal() {
	var RealFutsalMap = `{

	"name" : "👑 RᴇᴀʟFᴜᴛsᴀʟ⚽",

	"width" : 1300,

	"height" : 710,

	"spawnDistance" : 560,

	"redSpawnPoints" : [
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -396, 635
		]

	],

	"blueSpawnPoints" : [
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 396, 635
		]

	],

	"bg" : { "type" : "none", "width" : 1150, "height" : 600, "kickOffRadius" : 180, "cornerRadius" : 0, "color" : "2a3a40" },

	"playerPhysics" : {
		"bCoef" : 0.3,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.13,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65,
		"radius" : 15,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0
		],
		"kickback" : 0

	},

	"ballPhysics" : {
		"radius" : 6.4,
		"color" : "${PelotaRS}",
		"bCoef" : 0.5,
		"invMass" : 1.05,
		"damping" : 0.99,
		"cGroup" : [ "ball", "kick", "score"
		],
		"cMask" : [ "all"
		],
		"gravity" : [ 0, 0
		]

	},

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 1 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 2 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 3 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		
		/* 4 */ { "x" : 1150, "y" : 320, "trait" : "line", "vis" : false },
		/* 5 */ { "x" : 840, "y" : 320, "trait" : "line", "vis" : false },
		/* 6 */ { "x" : 1150, "y" : -320, "trait" : "line", "vis" : false },
		/* 7 */ { "x" : 840, "y" : -320, "trait" : "line", "vis" : false },
		/* 8 */ { "x" : 1150, "y" : 180, "trait" : "line", "vis" : false },
		/* 9 */ { "x" : 1030, "y" : 180, "trait" : "line", "vis" : false },
		/* 10 */ { "x" : 1150, "y" : -180, "trait" : "line", "vis" : false },
		/* 11 */ { "x" : 1030, "y" : -180, "trait" : "line", "vis" : false },
		/* 12 */ { "x" : 840, "y" : -130, "trait" : "line", "curve" : -130, "vis" : false },
		/* 13 */ { "x" : 840, "y" : 130, "trait" : "line", "curve" : -130, "vis" : false },
		/* 14 */ { "x" : -1150, "y" : -320, "trait" : "line", "vis" : false },
		/* 15 */ { "x" : -840, "y" : -320, "trait" : "line", "vis" : false },
		/* 16 */ { "x" : -1150, "y" : 320, "trait" : "line", "vis" : false },
		/* 17 */ { "x" : -840, "y" : 320, "trait" : "line", "vis" : false },
		/* 18 */ { "x" : -1150, "y" : -175, "trait" : "line", "vis" : false },
		/* 19 */ { "x" : -1030, "y" : -175, "trait" : "line", "vis" : false },
		/* 20 */ { "x" : -1150, "y" : 175, "trait" : "line", "vis" : false },
		/* 21 */ { "x" : -1030, "y" : 175, "trait" : "line", "vis" : false },
		/* 22 */ { "x" : -840, "y" : 130, "trait" : "line", "curve" : -130, "color" : "C7E6BD", "vis" : false },
		/* 23 */ { "x" : -840, "y" : -130, "trait" : "line", "curve" : -130, "color" : "C7E6BD", "vis" : false },
		/* 24 */ { "x" : 935, "y" : 3, "trait" : "line", "vis" : false },
		/* 25 */ { "x" : 935, "y" : -3, "trait" : "line", "vis" : false },
		/* 26 */ { "x" : -935, "y" : 3, "trait" : "line", "vis" : false },
		/* 27 */ { "x" : -935, "y" : -3, "trait" : "line", "vis" : false },
		/* 28 */ { "x" : -1150, "y" : 570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 29 */ { "x" : -1120, "y" : 600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 30 */ { "x" : -1120, "y" : -600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 31 */ { "x" : -1150, "y" : -570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 32 */ { "x" : 1120, "y" : 600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 33 */ { "x" : 1150, "y" : 570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 34 */ { "x" : 1150, "y" : -570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 35 */ { "x" : 1120, "y" : -600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		
		/* 36 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "curve" : -180, "vis" : true, "color" : "b3b6b6" },
		/* 37 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 180, "vis" : true, "color" : "b3b6b6" },
		/* 38 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 180, "vis" : true, "color" : "b3b6b6" },
		
		/* 39 */ { "x" : -1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "90a688", "vis" : false },
		/* 40 */ { "x" : -1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "90a688", "vis" : false },
		/* 41 */ { "x" : 1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "90a688", "vis" : false },
		/* 42 */ { "x" : 1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "90a688", "vis" : false },
		/* 43 */ { "x" : 1030, "y" : -40, "trait" : "line", "color" : "90a688", "vis" : false },
		/* 44 */ { "x" : 1030, "y" : 40, "trait" : "line", "color" : "90a688", "vis" : false },
		/* 45 */ { "x" : -1030, "y" : -40, "trait" : "line", "color" : "90a688", "vis" : false },
		/* 46 */ { "x" : -1030, "y" : 40, "trait" : "line", "color" : "90a688", "vis" : false },
		/* 47 */ { "x" : 0, "y" : 3, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : 0, "y" : -3, "trait" : "line", "color" : "b3b6b6" },
		
		/* 49 */ { "x" : -1157, "y" : 605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 50 */ { "x" : -1157, "y" : 655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 51 */ { "x" : -1157, "y" : -655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 52 */ { "x" : -1157, "y" : -605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 53 */ { "x" : 1157, "y" : 605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 54 */ { "x" : 1157, "y" : 655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 55 */ { "x" : 1157, "y" : -655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 56 */ { "x" : 1157, "y" : -605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 57 */ { "x" : -1300, "y" : -485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 58 */ { "x" : 1300, "y" : -485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 59 */ { "x" : -1300, "y" : 485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 60 */ { "x" : 1300, "y" : 485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 61 */ { "x" : -1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 62 */ { "x" : -750, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "curve" : 0, "color" : "ffffff" },
		/* 63 */ { "x" : -750, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "curve" : 0, "color" : "ffffff" },
		/* 64 */ { "x" : -1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 65 */ { "x" : 1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 66 */ { "x" : 750, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "curve" : 0 },
		/* 67 */ { "x" : 750, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "curve" : 0 },
		/* 68 */ { "x" : 1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 69 */ { "x" : -1150, "y" : -110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0 },
		/* 70 */ { "x" : -1210, "y" : -110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "curve" : 5, "radius" : 4.5, "color" : "f2d8d8" },
		/* 71 */ { "x" : -1150, "y" : 110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0 },
		/* 72 */ { "x" : -1210, "y" : 110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "curve" : 5, "radius" : 4.5, "vis" : false, "color" : "f2d8d8" },
		/* 73 */ { "x" : -1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "f2d8d8" },
		/* 74 */ { "x" : -1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "f2d8d8" },
		/* 75 */ { "x" : 1150, "y" : 110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "ffffff" },
		/* 76 */ { "x" : 1210, "y" : 110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "curve" : -5, "color" : "ffffff", "bias" : 12 },
		/* 77 */ { "x" : 1150, "y" : -110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "ffffff", "bias" : 0 },
		/* 78 */ { "x" : 1210, "y" : -110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "curve" : -5, "radius" : 6, "color" : "ffffff", "bias" : 0 },
		/* 79 */ { "x" : 1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "e3f9fe" },
		/* 80 */ { "x" : 1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "e3f9fe" },
		
		/* 81 */ { "x" : -1150, "y" : 600, "trait" : "line", "color" : "b3b6b6" },
		/* 82 */ { "x" : 1150, "y" : 600, "trait" : "line", "color" : "b3b6b6" },
		/* 83 */ { "x" : -1150, "y" : 600, "trait" : "line" },
		/* 84 */ { "x" : -1150, "y" : 600, "trait" : "line", "color" : "b3b6b6" },
		/* 85 */ { "x" : -1150, "y" : -600, "trait" : "line", "color" : "b3b6b6" },
		/* 86 */ { "x" : 1150, "y" : -600, "trait" : "line", "color" : "b3b6b6" },
		/* 87 */ { "x" : 1150, "y" : 600, "trait" : "line", "color" : "b3b6b6" },
		/* 88 */ { "x" : 1150, "y" : -600, "trait" : "line", "color" : "b3b6b6" },
		
		/* 89 */ { "x" : 1149, "y" : -600, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 90 */ { "x" : 1148.4570005362957, "y" : 600.139953970475, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 91 */ { "x" : -1149, "y" : -597, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 92 */ { "x" : -1147.8317517070022, "y" : 601.4275705819381, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 93 */ { "x" : 0, "y" : 600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 94 */ { "x" : 0, "y" : 703.3392000000002, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 95 */ { "x" : 0, "y" : -706.6984320000003, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		/* 96 */ { "x" : 0, "y" : 180, "trait" : "line", "color" : "b3b6b6" },
		/* 97 */ { "x" : 0, "y" : -180, "trait" : "line", "color" : "b3b6b6" },
		/* 98 */ { "x" : -502.5872388908341, "y" : 584.5824292806498, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 99 */ { "x" : -502.5872388908341, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 100 */ { "x" : -255.89950722166907, "y" : 584.5824292806498, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 101 */ { "x" : -255.89950722166907, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 102 */ { "x" : 484.1636877858256, "y" : 584.5824292806498, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 103 */ { "x" : 484.1636877858256, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 104 */ { "x" : 237.47595611666065, "y" : 584.5824292806498, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 105 */ { "x" : 237.47595611666065, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 106 */ { "x" : -792.4453236021028, "y" : 600.6012558845073, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 107 */ { "x" : -792.4453236021028, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 108 */ { "x" : 1168.3209933208252, "y" : 259.19223558917463, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 109 */ { "x" : 1150.1332655215529, "y" : 259.19223558917463, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 110 */ { "x" : 1167.3637444892845, "y" : -259.4075612793524, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 111 */ { "x" : 1149.176016690012, "y" : -259.4075612793524, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 112 */ { "x" : -805.0072732243943, "y" : -601.8119160675375, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 113 */ { "x" : -805.0072732243943, "y" : -617.8307426713949, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 114 */ { "x" : 774.0217724970943, "y" : 600.6012558845073, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 115 */ { "x" : 774.0217724970943, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 116 */ { "x" : 802.111670650284, "y" : -601.8119160675375, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 117 */ { "x" : 802.111670650284, "y" : -617.8307426713949, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 118 */ { "x" : -1167.7569476650856, "y" : -259.26432165652744, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 119 */ { "x" : -1149.569707910971, "y" : -259.4075612793524, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 120 */ { "x" : -1166.6540605638463, "y" : 259.19223558917463, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 121 */ { "x" : -1148.466820809732, "y" : 259.19223558917463, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 122 */ { "x" : -753.1966503273302, "y" : 210.8574116265289, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ff6363" },
		/* 123 */ { "x" : -753.1966503273302, "y" : -211.07273731670662, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901, "color" : "ff6363" },
		/* 124 */ { "x" : -753.1966503273302, "y" : -211.07273731670662, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "ff6363" },
		/* 125 */ { "x" : -1028.8843138110383, "y" : -483.78368724343204, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "ff6363" },
		/* 126 */ { "x" : -753.1966503273302, "y" : 210.8574116265289, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90, "color" : "ff6363" },
		/* 127 */ { "x" : -753.1966503273302, "y" : -5.253152466347835, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 128 */ { "x" : -753.1966503273302, "y" : 0.05307897492428726, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 129 */ { "x" : -753.1966503273302, "y" : -5.253152466347835, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 130 */ { "x" : -753.1966503273302, "y" : 4.641192290022411, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 131 */ { "x" : -753.1966503273302, "y" : 2.3471356324733677, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 132 */ { "x" : -753.1966503273302, "y" : -5.253152466347835, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 133 */ { "x" : -753.1966503273302, "y" : 5.037826776170104, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 134 */ { "x" : -753.1966503273302, "y" : -5.253152466347835, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 135 */ { "x" : -583.7636071446346, "y" : -1.2885528694224218, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 136 */ { "x" : -583.7636071446346, "y" : 2.0299088368119964, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 137 */ { "x" : -583.7636071446346, "y" : -4.607014575656841, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 138 */ { "x" : -583.7636071446346, "y" : 5.348370543046416, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 139 */ { "x" : -583.7636071446346, "y" : 3.689139689929225, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 140 */ { "x" : -583.7636071446346, "y" : -2.9477837225396217, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 141 */ { "x" : -583.7636071446346, "y" : 6.1779859696050305, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 142 */ { "x" : -583.7636071446346, "y" : -5.4366300022154395, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 143 */ { "x" : -583.7636071446346, "y" : -307.8079421963752, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 144 */ { "x" : -583.7636071446346, "y" : -304.7206484236199, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 145 */ { "x" : -583.7636071446346, "y" : 304.50532273344214, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 146 */ { "x" : -583.7636071446346, "y" : 307.59261650619754, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 147 */ { "x" : -1148.5404177536197, "y" : -483.78368724343204, "bCoef" : 0, "trait" : "line", "curve" : 0, "color" : "ff6363" },
		/* 148 */ { "x" : -1028.8843138110383, "y" : 483.5683615532543, "bCoef" : 0, "trait" : "line", "curve" : 90, "color" : "ff6363" },
		/* 149 */ { "x" : -1148.5404177536197, "y" : 483.5683615532543, "bCoef" : 0, "trait" : "line", "color" : "ff6363" },
		/* 150 */ { "x" : 753.513010517657, "y" : -211.07273731670662, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "0099ff" },
		/* 151 */ { "x" : 753.513010517657, "y" : 210.8574116265289, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901, "color" : "0099ff" },
		/* 152 */ { "x" : 753.513010517657, "y" : 210.8574116265289, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "0099ff" },
		/* 153 */ { "x" : 1029.200674001365, "y" : 483.5683615532543, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "0099ff" },
		/* 154 */ { "x" : 753.513010517657, "y" : -211.07273731670662, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90, "color" : "0099ff" },
		/* 155 */ { "x" : 753.513010517657, "y" : 5.187397115557433, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 156 */ { "x" : 753.513010517657, "y" : -0.11863695018542186, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 157 */ { "x" : 753.513010517657, "y" : 5.187259331479988, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 158 */ { "x" : 753.513010517657, "y" : -4.706560954555478, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 159 */ { "x" : 753.513010517657, "y" : -2.412598952370464, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 160 */ { "x" : 753.513010517657, "y" : 5.18732822351871, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 161 */ { "x" : 753.513010517657, "y" : -5.103156540293702, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 162 */ { "x" : 753.513010517657, "y" : 5.187224885460613, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 163 */ { "x" : 1148.8567779439466, "y" : 483.5683615532543, "bCoef" : 0, "trait" : "line", "curve" : 0, "color" : "0099ff" },
		/* 164 */ { "x" : 1029.200674001365, "y" : -483.78368724343204, "bCoef" : 0, "trait" : "line", "curve" : 90, "color" : "0099ff" },
		/* 165 */ { "x" : 1148.8567779439466, "y" : -483.78368724343204, "bCoef" : 0, "trait" : "line", "color" : "0099ff" },
		/* 166 */ { "x" : 584.0799673349616, "y" : -1.2885528694224218, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 167 */ { "x" : 584.0799673349616, "y" : 2.0299088368119964, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 168 */ { "x" : 584.0799673349616, "y" : -4.607014575656841, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 169 */ { "x" : 584.0799673349616, "y" : 5.348370543046416, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 170 */ { "x" : 584.0799673349616, "y" : 3.689139689929225, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 171 */ { "x" : 584.0799673349616, "y" : -2.9477837225396217, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 172 */ { "x" : 584.0799673349616, "y" : 6.1779859696050305, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 173 */ { "x" : 584.0799673349616, "y" : -5.4366300022154395, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 174 */ { "x" : 584.0799673349616, "y" : -307.8079421963752, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 175 */ { "x" : 584.0799673349616, "y" : -304.7206484236199, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 176 */ { "x" : 584.0799673349616, "y" : 304.50532273344214, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 177 */ { "x" : 584.0799673349616, "y" : 307.59261650619754, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 178 */ { "x" : -1150, "y" : 109.5, "bCoef" : 0, "trait" : "line", "color" : "ff3030" },
		/* 179 */ { "x" : -1150, "y" : -110, "bCoef" : 0, "trait" : "line", "color" : "ff3030" },
		/* 180 */ { "x" : -1150, "y" : 109.5, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 181 */ { "x" : -1150, "y" : 78.58, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 182 */ { "x" : -1150, "y" : 47.15, "bCoef" : 0, "trait" : "line", "color" : "ffffff", "radius" : 6.4 },
		/* 183 */ { "x" : -1150, "y" : 15.72, "bCoef" : 0, "trait" : "line", "color" : "ffffff", "radius" : 6.4 },
		/* 184 */ { "x" : -1150, "y" : -78.57, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 185 */ { "x" : -1150, "y" : -110, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 186 */ { "x" : -1150, "y" : -15.71, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 187 */ { "x" : -1150, "y" : -47.14, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 188 */ { "x" : 1150, "y" : 109.5, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 189 */ { "x" : 1150, "y" : -109.5, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 190 */ { "x" : 1150, "y" : 109.5, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 191 */ { "x" : 1150, "y" : 78.58, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 192 */ { "x" : 1150, "y" : 47.15, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 193 */ { "x" : 1150, "y" : 15.72, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 194 */ { "x" : 1150, "y" : -78.57, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 195 */ { "x" : 1150, "y" : -109.5, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 196 */ { "x" : 1150, "y" : -15.71, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 197 */ { "x" : 1150, "y" : -47.14, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : true, "color" : "b3b6b6", "trait" : "kickOffBarrier" },
		{ "v0" : 2, "v1" : 3, "vis" : true, "color" : "b3b6b6", "trait" : "kickOffBarrier" },
		
		{ "v0" : 4, "v1" : 5, "vis" : false, "trait" : "line", "y" : 320 },
		{ "v0" : 5, "v1" : 7, "vis" : false, "trait" : "line", "x" : 840 },
		{ "v0" : 6, "v1" : 7, "vis" : false, "trait" : "line", "y" : -320 },
		{ "v0" : 8, "v1" : 9, "vis" : false, "trait" : "line", "y" : 180 },
		{ "v0" : 9, "v1" : 11, "vis" : false, "trait" : "line", "x" : 1030 },
		{ "v0" : 10, "v1" : 11, "vis" : false, "trait" : "line", "y" : -180 },
		{ "v0" : 12, "v1" : 13, "curve" : -130, "vis" : false, "trait" : "line", "x" : 840 },
		{ "v0" : 14, "v1" : 15, "vis" : false, "trait" : "line", "y" : -320 },
		{ "v0" : 15, "v1" : 17, "vis" : false, "trait" : "line", "x" : -840 },
		{ "v0" : 16, "v1" : 17, "vis" : false, "trait" : "line", "y" : 320 },
		{ "v0" : 18, "v1" : 19, "vis" : false, "trait" : "line", "y" : -175 },
		{ "v0" : 19, "v1" : 21, "vis" : false, "trait" : "line", "x" : -1030 },
		{ "v0" : 20, "v1" : 21, "vis" : false, "trait" : "line", "y" : 175 },
		{ "v0" : 22, "v1" : 23, "curve" : -130, "vis" : false, "color" : "C7E6BD", "trait" : "line", "x" : -840 },
		{ "v0" : 24, "v1" : 25, "curve" : -180, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -180, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 180, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 180, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 90, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 90, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : -90, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -90, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 28, "v1" : 29, "curve" : 90, "color" : "b3b6b6", "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "curve" : 90, "color" : "b3b6b6", "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 32, "v1" : 33, "curve" : 90, "color" : "b3b6b6", "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 34, "v1" : 35, "curve" : 90, "color" : "b3b6b6", "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		
		{ "v0" : 37, "v1" : 36, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 39, "v1" : 40, "curve" : 70, "vis" : false, "color" : "90a688", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : -1030 },
		{ "v0" : 41, "v1" : 42, "curve" : -70, "vis" : false, "color" : "90a688", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : 1030 },
		
		{ "v0" : 37, "v1" : 38, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 43, "v1" : 44, "vis" : false, "color" : "90a688", "trait" : "line", "x" : 1030 },
		{ "v0" : 45, "v1" : 46, "vis" : false, "color" : "90a688", "trait" : "line", "x" : -1030 },
		{ "v0" : 47, "v1" : 48, "curve" : -180, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		{ "v0" : 47, "v1" : 48, "curve" : 180, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		{ "v0" : 47, "v1" : 48, "curve" : 90, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		{ "v0" : 47, "v1" : 48, "curve" : -90, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		{ "v0" : 47, "v1" : 48, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		
		{ "v0" : 49, "v1" : 50, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1157 },
		{ "v0" : 51, "v1" : 52, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1157 },
		{ "v0" : 53, "v1" : 54, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1157 },
		{ "v0" : 55, "v1" : 56, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1157 },
		
		{ "v0" : 57, "v1" : 58, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : -485 },
		{ "v0" : 59, "v1" : 60, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : 485 },
		{ "v0" : 61, "v1" : 62, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 62, "v1" : 63, "curve" : 0, "vis" : false, "color" : "ffffff", "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "x" : -750 },
		{ "v0" : 63, "v1" : 64, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 65, "v1" : 66, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 66, "v1" : 67, "curve" : 0, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "x" : 750 },
		{ "v0" : 67, "v1" : 68, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 69, "v1" : 70, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "y" : -110 },
		{ "v0" : 71, "v1" : 72, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "y" : 110 },
		{ "v0" : 70, "v1" : 73, "color" : "f2d8d8", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 72, "v1" : 74, "color" : "f2d8d8", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 75, "v1" : 76, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "y" : 110 },
		{ "v0" : 77, "v1" : 78, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "y" : -110 },
		{ "v0" : 78, "v1" : 79, "color" : "e3f9fe", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 76, "v1" : 80, "color" : "e3f9fe", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		
		{ "v0" : 81, "v1" : 82, "vis" : true, "color" : "b3b6b6", "trait" : "line", "y" : 600 },
		{ "v0" : 83, "v1" : 84, "vis" : true, "color" : "C7E6BD", "trait" : "line", "x" : -1150 },
		{ "v0" : 85, "v1" : 86, "curve" : 0.42311978919197857, "vis" : true, "color" : "b3b6b6", "trait" : "line", "y" : -600 },
		{ "v0" : 87, "v1" : 88, "vis" : true, "color" : "b3b6b6", "trait" : "line", "x" : 1150 },
		{ "v0" : 85, "v1" : 84, "vis" : true, "color" : "b3b6b6", "trait" : "line" },
		
		{ "v0" : 76, "v1" : 78, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 12 },
		{ "v0" : 70, "v1" : 72, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 12 },
		
		{ "v0" : 93, "v1" : 94, "vis" : false, "color" : "C7E6BD", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 3, "v1" : 95, "vis" : false, "color" : "C7E6BD", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		
		{ "v0" : 96, "v1" : 97, "vis" : true, "color" : "b3b6b6", "trait" : "line", "x" : 0 },
		{ "v0" : 98, "v1" : 99, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.9681483400014 },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 122, "v1" : 123, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 124, "v1" : 125, "curve" : -86.19094512117411, "vis" : true, "color" : "ff6363", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 128, "v1" : 127, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 127, "v1" : 128, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 130, "v1" : 129, "curve" : 180.00000000000264, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 129, "v1" : 130, "curve" : 179.99999999999739, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 132, "v1" : 131, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 131, "v1" : 132, "curve" : 180.23227975155584, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 134, "v1" : 133, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 133, "v1" : 134, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 136, "v1" : 135, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 135, "v1" : 136, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 138, "v1" : 137, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 137, "v1" : 138, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 140, "v1" : 139, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 139, "v1" : 140, "curve" : 179.79914984721913, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 142, "v1" : 141, "curve" : 179.6495181979579, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 141, "v1" : 142, "curve" : 180.35654237438484, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 143, "v1" : 144, "curve" : -198.66364834325964, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 144, "v1" : 143, "curve" : -215.6380023858894, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 145, "v1" : 146, "curve" : -198.66364834324287, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 146, "v1" : 145, "curve" : -215.63800238611827, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 125, "v1" : 147, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line", "y" : -470 },
		{ "v0" : 126, "v1" : 148, "curve" : 86.19094512117408, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 148, "v1" : 149, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line", "y" : 470 },
		{ "v0" : 150, "v1" : 151, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 152, "v1" : 153, "curve" : -86.19094512117407, "vis" : true, "color" : "0099ff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 156, "v1" : 155, "curve" : 179.83865615955762, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 155, "v1" : 156, "curve" : 180, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 158, "v1" : 157, "curve" : 179.69898573943476, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 157, "v1" : 158, "curve" : 180.3054738876212, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 160, "v1" : 159, "curve" : 180, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 159, "v1" : 160, "curve" : 180.23227975154748, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 162, "v1" : 161, "curve" : 179.68721314439955, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 161, "v1" : 162, "curve" : 180.3084189314784, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 153, "v1" : 163, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0, "trait" : "line", "y" : -470 },
		{ "v0" : 154, "v1" : 164, "curve" : 86.19094512117412, "vis" : true, "color" : "0099ff", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 164, "v1" : 165, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0, "trait" : "line", "y" : 470 },
		{ "v0" : 167, "v1" : 166, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 166, "v1" : 167, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 169, "v1" : 168, "curve" : 179.99999999999736, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 168, "v1" : 169, "curve" : 180.00000000000264, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 171, "v1" : 170, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 170, "v1" : 171, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 173, "v1" : 172, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 172, "v1" : 173, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 174, "v1" : 175, "curve" : -198.66364834438545, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 175, "v1" : 174, "curve" : -215.63800238592762, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 176, "v1" : 177, "curve" : -198.66364834380988, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 177, "v1" : 176, "curve" : -215.63800238564397, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 178, "v1" : 179, "curve" : 0, "vis" : true, "color" : "ff3030", "bCoef" : 0, "trait" : "line", "x" : -1150 },
		{ "v0" : 180, "v1" : 181, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1150 },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1150, "radius" : 6.4 },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1150 },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1150 },
		{ "v0" : 188, "v1" : 189, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1150 },
		{ "v0" : 190, "v1" : 191, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1150 },
		{ "v0" : 192, "v1" : 193, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1150 },
		{ "v0" : 194, "v1" : 195, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1150 },
		{ "v0" : 196, "v1" : 197, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1150 }

	],

	"goals" : [
		{ "p0" : [1159.0402530462036,-109.5 ], "p1" : [1159.0402530462036,109.5 ], "team" : "blue" },
		{ "p0" : [-1159.0402530462036,-109.5 ], "p1" : [-1159.0402530462036,109.5 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 0, "invMass" : 0, "pos" : [-1311,-19 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["ball" ] },
		{ "radius" : 0, "invMass" : 0, "pos" : [-1310,29 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["ball" ] },
		{ "radius" : 0, "invMass" : 0, "pos" : [-1308,62 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["ball" ] },
		
		{ "radius" : 2.7, "pos" : [-1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
		{ "radius" : 2.7, "pos" : [1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
		{ "radius" : 2.7, "pos" : [1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
		
		{ "radius" : 6, "invMass" : 0, "pos" : [-1150,-110 ], "color" : "ff3030", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 6, "invMass" : 0, "pos" : [-1150,110 ], "color" : "ff3030", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 2, "invMass" : 0, "pos" : [-1250,-158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 2, "invMass" : 0, "pos" : [-1250,158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 6, "invMass" : 0, "pos" : [1150,-110 ], "color" : "33b4ff", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 6, "invMass" : 0, "pos" : [1150,110 ], "color" : "33b4ff", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 2, "invMass" : 0, "pos" : [1250,-158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 2, "invMass" : 0, "pos" : [1250,158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
		
		{ "radius" : 2.7, "pos" : [-1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
		
		{ "radius" : 0, "pos" : [-1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [-1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [-1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [-1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,485 ], "cMask" : ["none" ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -627, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -627, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -706, "bCoef" : 0 },
		{ "normal" : [0,-1 ], "dist" : -706, "bCoef" : 0 },
		{ "normal" : [1,0 ], "dist" : -1300, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1300, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1240, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -1240, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 1, "cGroup" : ["ball" ] },
		"rightNet" : { "radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c3" ] },
		"leftNet" : { "radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c2" ] },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.2, "color" : "FFFF00", "cMask" : ["ball" ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "cGroup" : ["ball" ], "color" : "C7E6BD" }

	},

	"joints" : [
		{ "d0" : 16, "d1" : 17, "strength" : "rigid", "color" : "f5204b", "length" : null },
		{ "d0" : 18, "d1" : 19, "strength" : "rigid", "color" : "00e1ff", "length" : null },
		{ "d0" : 20, "d1" : 21, "strength" : "rigid", "color" : "f5204b", "length" : null },
		{ "d0" : 22, "d1" : 23, "strength" : "rigid", "color" : "00e1ff", "length" : null }

	]
}
`;
	RSRMap = true;
	return RealFutsalMap;
}







function getCampeonesMap() {
	var CampeonesMap = `{

	"name" : "🏆 CAMPEONES 🌿⭐🌿",

	"width" : 500,

	"height" : 150,

	"spawnDistance" : 170,

	"redSpawnPoints" : [
		[ -313.5, 31
		],
		[ -364.5, 31
		],
		[ -413.5, 31
		],
		[ -463.5, 31
		]

	],

	"blueSpawnPoints" : [
		[ 135.5, 131
		],
		[ 180.5, 131
		],
		[ 232.5, 131
		],
		[ 272.5, 131
		]

	],

	"bg" : { "color" : "375946" },

	"vertexes" : [
		/* 0 */ { "x" : 494.7861757312205, "y" : -7.309797894579809, "curve" : -50, "color" : "0f2027" },
		/* 1 */ { "x" : -497.2138242687795, "y" : -17.30979789457981, "curve" : -50, "color" : "112233" },
		/* 2 */ { "x" : 494.7861757312205, "y" : -9.309797894579809, "curve" : -50, "color" : "132434" },
		/* 3 */ { "x" : -497.2138242687795, "y" : -19.30979789457981, "curve" : -50, "color" : "152635" },
		/* 4 */ { "x" : 494.7861757312205, "y" : -11.309797894579809, "curve" : -50, "color" : "172836" },
		/* 5 */ { "x" : -497.2138242687795, "y" : -21.30979789457981, "curve" : -50, "color" : "193037" },
		/* 6 */ { "x" : 494.7861757312205, "y" : -13.309797894579809, "curve" : -50, "color" : "1b4048" },
		/* 7 */ { "x" : -497.2138242687795, "y" : -23.30979789457981, "curve" : -50, "color" : "1d5159" },
		/* 8 */ { "x" : 494.7861757312205, "y" : -15.309797894579809, "curve" : -50, "color" : "1f626a" },
		/* 9 */ { "x" : -497.2138242687795, "y" : -25.30979789457981, "curve" : -50, "color" : "21737b" },
		/* 10 */ { "x" : 494.7861757312205, "y" : -17.30979789457981, "curve" : -50, "color" : "23848c" },
		/* 11 */ { "x" : -497.2138242687795, "y" : -27.30979789457981, "curve" : -50, "color" : "25959d" },
		/* 12 */ { "x" : 494.7861757312205, "y" : -19.30979789457981, "curve" : -50, "color" : "27a6ae" },
		/* 13 */ { "x" : -497.2138242687795, "y" : -29.30979789457981, "curve" : -50, "color" : "29b7bf" },
		/* 14 */ { "x" : 494.7861757312205, "y" : -21.30979789457981, "curve" : -50, "color" : "2bc8d0" },
		/* 15 */ { "x" : -497.2138242687795, "y" : -31.30979789457981, "curve" : -50, "color" : "2dd9e1" },
		/* 16 */ { "x" : 494.7861757312205, "y" : -23.30979789457981, "curve" : -50, "color" : "2feaf2" },
		/* 17 */ { "x" : -497.2138242687795, "y" : -33.30979789457981, "curve" : -50, "color" : "31fbff" },
		/* 18 */ { "x" : 494.7861757312205, "y" : -25.30979789457981, "curve" : -50, "color" : "33fbff" },
		/* 19 */ { "x" : -497.2138242687795, "y" : -35.30979789457981, "curve" : -50, "color" : "35fbff" },
		/* 20 */ { "x" : 494.7861757312205, "y" : -27.30979789457981, "curve" : -50, "color" : "37fbff" },
		/* 21 */ { "x" : -497.2138242687795, "y" : -37.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 22 */ { "x" : 494.7861757312205, "y" : -29.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 23 */ { "x" : -497.2138242687795, "y" : -39.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 24 */ { "x" : 494.7861757312205, "y" : -31.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 25 */ { "x" : -497.2138242687795, "y" : -41.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 26 */ { "x" : 494.7861757312205, "y" : -3.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 27 */ { "x" : -497.2138242687795, "y" : -13.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 28 */ { "x" : 494.7861757312205, "y" : -5.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 29 */ { "x" : -497.2138242687795, "y" : -15.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 30 */ { "x" : 494.7861757312205, "y" : -1.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 31 */ { "x" : -497.2138242687795, "y" : -11.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 32 */ { "x" : 494.7861757312205, "y" : 0.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 33 */ { "x" : -497.2138242687795, "y" : -9.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 34 */ { "x" : 494.7861757312205, "y" : 2.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 35 */ { "x" : -497.2138242687795, "y" : -7.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 36 */ { "x" : 494.7861757312205, "y" : 4.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 37 */ { "x" : -497.2138242687795, "y" : -5.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 38 */ { "x" : 494.7861757312205, "y" : 6.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 39 */ { "x" : -497.2138242687795, "y" : -3.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 40 */ { "x" : 494.7861757312205, "y" : 8.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 41 */ { "x" : -497.2138242687795, "y" : -1.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 42 */ { "x" : -500, "y" : 57.56164977325504, "curve" : 0 },
		/* 43 */ { "x" : 500, "y" : 57.56164977325504, "curve" : 0 },
		/* 44 */ { "x" : -500, "y" : 59.56164977325504, "curve" : 0 },
		/* 45 */ { "x" : 500, "y" : 59.56164977325504, "curve" : 0 },
		/* 46 */ { "x" : -500, "y" : 61.56164977325504, "curve" : 0 },
		/* 47 */ { "x" : 500, "y" : 61.56164977325504, "curve" : 0 },
		/* 48 */ { "x" : -500, "y" : 63.56164977325504, "curve" : 0 },
		/* 49 */ { "x" : 500, "y" : 63.56164977325504, "curve" : 0 },
		/* 50 */ { "x" : -500, "y" : 65.56164977325504, "curve" : 0 },
		/* 51 */ { "x" : 500, "y" : 65.56164977325504, "curve" : 0 },
		/* 52 */ { "x" : -500, "y" : 67.56164977325504, "curve" : 0 },
		/* 53 */ { "x" : 500, "y" : 67.56164977325504, "curve" : 0 },
		/* 54 */ { "x" : -500, "y" : 69.56164977325504, "curve" : 0 },
		/* 55 */ { "x" : 500, "y" : 69.56164977325504, "curve" : 0 },
		/* 56 */ { "x" : -500, "y" : -319.43835022674494, "vis" : false },
		/* 57 */ { "x" : -500, "y" : 160.56164977325506, "vis" : false },
		/* 58 */ { "x" : 500, "y" : 160.56164977325506, "vis" : false },
		/* 59 */ { "x" : 500, "y" : -363.43835022674494, "vis" : false },
		/* 60 */ { "x" : -207, "y" : 43.561649773255034, "curve" : 0, "color" : "23357e" },
		/* 61 */ { "x" : 93, "y" : 43.561649773255034, "curve" : 0, "color" : "23357e" },
		/* 62 */ { "x" : -207, "y" : 45.561649773255034, "curve" : 0, "color" : "23357e" },
		/* 63 */ { "x" : 93, "y" : 45.561649773255034, "curve" : 0, "color" : "23357e" },
		/* 64 */ { "x" : -207, "y" : 47.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 65 */ { "x" : 93, "y" : 47.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 66 */ { "x" : -207, "y" : 49.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 67 */ { "x" : 93, "y" : 49.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 68 */ { "x" : -207, "y" : 51.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 69 */ { "x" : 93, "y" : 51.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 70 */ { "x" : -207, "y" : 53.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 71 */ { "x" : 93, "y" : 53.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 72 */ { "x" : -207, "y" : 55.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 73 */ { "x" : 93, "y" : 55.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 74 */ { "x" : -120, "y" : 30.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 75 */ { "x" : 1, "y" : 30.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 76 */ { "x" : -120, "y" : 32.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 77 */ { "x" : 1, "y" : 32.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 78 */ { "x" : -120, "y" : 34.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 79 */ { "x" : 1, "y" : 34.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 80 */ { "x" : -120, "y" : 36.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 81 */ { "x" : 1, "y" : 36.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 82 */ { "x" : -120, "y" : 38.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 83 */ { "x" : 1, "y" : 38.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 84 */ { "x" : -120, "y" : 40.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 85 */ { "x" : 1, "y" : 40.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 86 */ { "x" : -120, "y" : 42.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 87 */ { "x" : 1, "y" : 42.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 88 */ { "x" : -500, "y" : 70.56164977325504, "curve" : 0 },
		/* 89 */ { "x" : 500, "y" : 70.56164977325504, "curve" : 0 },
		/* 90 */ { "x" : -500, "y" : 72.56164977325504, "curve" : 0 },
		/* 91 */ { "x" : 500, "y" : 72.56164977325504, "curve" : 0 },
		/* 92 */ { "x" : -500, "y" : 74.56164977325504, "curve" : 0 },
		/* 93 */ { "x" : 500, "y" : 74.56164977325504, "curve" : 0 },
		/* 94 */ { "x" : -500, "y" : 76.56164977325504, "curve" : 0 },
		/* 95 */ { "x" : 500, "y" : 76.56164977325504, "curve" : 0 },
		/* 96 */ { "x" : -500, "y" : 78.56164977325504, "curve" : 0 },
		/* 97 */ { "x" : 500, "y" : 78.56164977325504, "curve" : 0 },
		/* 98 */ { "x" : -500, "y" : 80.56164977325504, "curve" : 0 },
		/* 99 */ { "x" : 500, "y" : 80.56164977325504, "curve" : 0 },
		/* 100 */ { "x" : -500, "y" : 82.56164977325504, "curve" : 0 },
		/* 101 */ { "x" : 500, "y" : 82.56164977325504, "curve" : 0 },
		/* 102 */ { "x" : -500, "y" : 83.56164977325504, "curve" : 0 },
		/* 103 */ { "x" : 500, "y" : 83.56164977325504, "curve" : 0 },
		/* 104 */ { "x" : -500, "y" : 85.56164977325504, "curve" : 0 },
		/* 105 */ { "x" : 500, "y" : 85.56164977325504, "curve" : 0 },
		/* 106 */ { "x" : -500, "y" : 87.56164977325504, "curve" : 0 },
		/* 107 */ { "x" : 500, "y" : 87.56164977325504, "curve" : 0 },
		/* 108 */ { "x" : -500, "y" : 89.56164977325504, "curve" : 0 },
		/* 109 */ { "x" : 500, "y" : 89.56164977325504, "curve" : 0 },
		/* 110 */ { "x" : -500, "y" : 91.56164977325504, "curve" : 0 },
		/* 111 */ { "x" : 500, "y" : 91.56164977325504, "curve" : 0 },
		/* 112 */ { "x" : -500, "y" : 93.56164977325504, "curve" : 0 },
		/* 113 */ { "x" : 500, "y" : 93.56164977325504, "curve" : 0 },
		/* 114 */ { "x" : -500, "y" : 95.56164977325504, "curve" : 0, "_selected" : "segment" },
		/* 115 */ { "x" : 500, "y" : 95.56164977325504, "curve" : 0, "_selected" : "segment" },
		/* 116 */ { "x" : -502, "y" : -319.43835022674494, "vis" : false },
		/* 117 */ { "x" : -502, "y" : 160.56164977325506, "vis" : false },
		/* 118 */ { "x" : 502, "y" : 160.56164977325506, "vis" : false },
		/* 119 */ { "x" : 502, "y" : -363.43835022674494, "vis" : false },
		/* 120 */ { "x" : -504, "y" : -319.43835022674494, "vis" : false },
		/* 121 */ { "x" : -504, "y" : 160.56164977325506, "vis" : false },
		/* 122 */ { "x" : 504, "y" : 160.56164977325506, "vis" : false },
		/* 123 */ { "x" : 504, "y" : -363.43835022674494, "vis" : false },
		/* 124 */ { "x" : -500, "y" : 162.56164977325506, "vis" : false },
		/* 125 */ { "x" : 500, "y" : 162.56164977325506, "vis" : false },
		/* 126 */ { "x" : -500, "y" : 164.56164977325506, "vis" : false },
		/* 127 */ { "x" : 500, "y" : 164.56164977325506, "vis" : false },
		/* 128 */ { "x" : -127.26222973756316, "y" : -132.3848081877582, "color" : "1b254e" },
		/* 129 */ { "x" : -139.78385080553804, "y" : -131.61186861566097, "color" : "1b254e" },
		/* 130 */ { "x" : -138.2435726727356, "y" : -106.65936286426175, "color" : "1b254e" },
		/* 131 */ { "x" : -125.72195160476073, "y" : -107.432302436359, "color" : "1b254e" },
		/* 132 */ { "x" : -115.19485069348019, "y" : -106.57926840135603, "color" : "1b254e" },
		/* 133 */ { "x" : -116.91996220221891, "y" : -134.52607484292315, "color" : "1b254e" },
		/* 134 */ { "x" : -102.6732296255053, "y" : -107.35220797345328, "color" : "1b254e" },
		/* 135 */ { "x" : -104.39834113424402, "y" : -135.2990144150204, "color" : "1b254e" },
		/* 136 */ { "x" : -116.05740644784956, "y" : -120.55267162213961, "color" : "1b254e" },
		/* 137 */ { "x" : -103.53578537987467, "y" : -121.32561119423683, "color" : "1b254e" },
		/* 138 */ { "x" : -92.09613786717209, "y" : -107.86943339391858, "color" : "1b254e" },
		/* 139 */ { "x" : -86.67869444925958, "y" : -137.0413105061603, "color" : "1b254e" },
		/* 140 */ { "x" : -79.55610603843748, "y" : -108.23825785946958, "color" : "1b254e" },
		/* 141 */ { "x" : -90.37291322018731, "y" : -119.44526195050672, "color" : "1b254e" },
		/* 142 */ { "x" : -83.19191267202388, "y" : -119.6564678489821, "color" : "1b254e" },
		/* 143 */ { "x" : -69.12077904029292, "y" : -109.04539545799422, "color" : "1b254e" },
		/* 144 */ { "x" : -69.94395248514581, "y" : -137.03329258299613, "color" : "1b254e" },
		/* 145 */ { "x" : -63.08490429293134, "y" : -117.19060736896593, "color" : "1b254e" },
		/* 146 */ { "x" : -57.40392065641119, "y" : -137.4021170485471, "color" : "1b254e" },
		/* 147 */ { "x" : -56.580747211558275, "y" : -109.41421992354522, "color" : "1b254e" },
		/* 148 */ { "x" : -42.99210757349505, "y" : -111.1687489274483, "color" : "1b254e" },
		/* 149 */ { "x" : -42.99210757349505, "y" : -139.1687489274483, "color" : "1b254e" },
		/* 150 */ { "x" : -32.170506543350655, "y" : -127.3206919773853, "color" : "1b254e" },
		/* 151 */ { "x" : -43.847753708043655, "y" : -124.31826551683399, "color" : "1b254e" },
		/* 152 */ { "x" : -22.08301666440413, "y" : -111.1687489274483, "color" : "1b254e" },
		/* 153 */ { "x" : -22.08301666440413, "y" : -139.1687489274483, "color" : "1b254e" },
		/* 154 */ { "x" : -7.744154865484049, "y" : -138.78913817998966, "color" : "1b254e" },
		/* 155 */ { "x" : -9.172540581262744, "y" : -113.82997725164593, "color" : "1b254e" },
		/* 156 */ { "x" : 3.352420175506116, "y" : -113.1131873288188, "color" : "1b254e" },
		/* 157 */ { "x" : 4.78080589128481, "y" : -138.0723482571625, "color" : "1b254e" },
		/* 158 */ { "x" : 13.704184329866749, "y" : -111.0183127374289, "color" : "1b254e" },
		/* 159 */ { "x" : 15.303976331538887, "y" : -138.97257297717385, "color" : "1b254e" },
		/* 160 */ { "x" : 26.229145086635608, "y" : -110.30152281460177, "color" : "1b254e" },
		/* 161 */ { "x" : 27.828937088307747, "y" : -138.25578305434675, "color" : "1b254e" },
		/* 162 */ { "x" : 37.95992786504899, "y" : -114.95818205451785, "color" : "1b254e" },
		/* 163 */ { "x" : 48.770332351744344, "y" : -121.76104744662534, "color" : "1b254e" },
		/* 164 */ { "x" : 41.5368568277516, "y" : -129.14249252312544, "color" : "1b254e" },
		/* 165 */ { "x" : 53.42996588548224, "y" : -130.771544446721, "color" : "1b254e" },
		/* 166 */ { "x" : -127.26222973756316, "y" : -135.88575055933103 },
		/* 167 */ { "x" : -139.78385080553804, "y" : -135.1128109872338 },
		/* 168 */ { "x" : -138.2435726727356, "y" : -110.16030523583457 },
		/* 169 */ { "x" : -125.72195160476073, "y" : -110.93324480793179 },
		/* 170 */ { "x" : -115.19485069348019, "y" : -110.08021077292885 },
		/* 171 */ { "x" : -116.9199622022189, "y" : -138.02701721449597 },
		/* 172 */ { "x" : -102.6732296255053, "y" : -110.85315034502607 },
		/* 173 */ { "x" : -104.39834113424402, "y" : -138.7999567865932 },
		/* 174 */ { "x" : -116.05740644784956, "y" : -124.05361399371243 },
		/* 175 */ { "x" : -103.53578537987467, "y" : -124.82655356580962 },
		/* 176 */ { "x" : -92.09613786717209, "y" : -111.3703757654914 },
		/* 177 */ { "x" : -86.67869444925958, "y" : -140.54225287773312 },
		/* 178 */ { "x" : -79.55610603843748, "y" : -111.7392002310424 },
		/* 179 */ { "x" : -90.37291322018731, "y" : -122.94620432207954 },
		/* 180 */ { "x" : -83.19191267202388, "y" : -123.1574102205549 },
		/* 181 */ { "x" : -69.12077904029292, "y" : -112.54633782956704 },
		/* 182 */ { "x" : -69.94395248514581, "y" : -140.53423495456894 },
		/* 183 */ { "x" : -63.08490429293134, "y" : -120.69154974053875 },
		/* 184 */ { "x" : -57.40392065641119, "y" : -140.90305942011992 },
		/* 185 */ { "x" : -56.580747211558275, "y" : -112.91516229511804 },
		/* 186 */ { "x" : -42.99210757349505, "y" : -114.66969129902112 },
		/* 187 */ { "x" : -42.99210757349505, "y" : -142.6696912990211 },
		/* 188 */ { "x" : -32.170506543350655, "y" : -130.82163434895813 },
		/* 189 */ { "x" : -43.847753708043655, "y" : -127.81920788840681 },
		/* 190 */ { "x" : -22.083016664404127, "y" : -114.66969129902112 },
		/* 191 */ { "x" : -22.083016664404127, "y" : -142.6696912990211 },
		/* 192 */ { "x" : -7.744154865484045, "y" : -142.29008055156243 },
		/* 193 */ { "x" : -9.17254058126274, "y" : -117.33091962321875 },
		/* 194 */ { "x" : 3.3524201755061185, "y" : -116.61412970039162 },
		/* 195 */ { "x" : 4.780805891284814, "y" : -141.57329062873532 },
		/* 196 */ { "x" : 13.704184329866752, "y" : -114.51925510900172 },
		/* 197 */ { "x" : 15.303976331538891, "y" : -142.47351534874667 },
		/* 198 */ { "x" : 26.22914508663561, "y" : -113.80246518617459 },
		/* 199 */ { "x" : 27.82893708830775, "y" : -141.7567254259195 },
		/* 200 */ { "x" : 37.959927865048996, "y" : -118.45912442609064 },
		/* 201 */ { "x" : 48.770332351744344, "y" : -125.26198981819813 },
		/* 202 */ { "x" : 41.536856827751606, "y" : -132.64343489469826 },
		/* 203 */ { "x" : 53.42996588548225, "y" : -134.27248681829377 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "curve" : -50, "color" : "0f2027", "y" : 30 },
		{ "v0" : 2, "v1" : 3, "curve" : -50, "color" : "001a26", "y" : 28 },
		{ "v0" : 4, "v1" : 5, "curve" : -50, "color" : "001c2e", "y" : 26 },
		{ "v0" : 6, "v1" : 7, "curve" : -50, "color" : "001d3c", "y" : 24 },
		{ "v0" : 8, "v1" : 9, "curve" : -50, "color" : "001e4a", "y" : 22 },
		{ "v0" : 10, "v1" : 11, "curve" : -50, "color" : "001f58", "y" : 20 },
		{ "v0" : 12, "v1" : 13, "curve" : -50, "color" : "002047", "y" : 18 },
		{ "v0" : 14, "v1" : 15, "curve" : -50, "color" : "002250", "y" : 16 },
		{ "v0" : 16, "v1" : 17, "curve" : -50, "color" : "002359", "y" : 14 },
		{ "v0" : 18, "v1" : 19, "curve" : -50, "color" : "002462", "y" : 12 },
		{ "v0" : 20, "v1" : 21, "curve" : -50, "color" : "00256b", "y" : 10 },
		{ "v0" : 22, "v1" : 23, "curve" : -50, "color" : "002774", "y" : 8 },
		{ "v0" : 24, "v1" : 25, "curve" : -50, "color" : "00287d", "y" : 6 },
		{ "v0" : 26, "v1" : 27, "curve" : -50, "color" : "002986", "y" : 34 },
		{ "v0" : 28, "v1" : 29, "curve" : -50, "color" : "002a8f", "y" : 32 },
		{ "v0" : 30, "v1" : 31, "curve" : -50, "color" : "002b98", "y" : 36 },
		{ "v0" : 32, "v1" : 33, "curve" : -50, "color" : "002ca1", "y" : 38 },
		{ "v0" : 34, "v1" : 35, "curve" : -50, "color" : "002daf", "y" : 40 },
		{ "v0" : 36, "v1" : 37, "curve" : -50, "color" : "002eb7", "y" : 42 },
		{ "v0" : 38, "v1" : 39, "curve" : -50, "color" : "002fc0", "y" : 44 },
		{ "v0" : 40, "v1" : 41, "curve" : -50, "color" : "0030c9", "y" : 46 },
	{ "v0" : 42, "v1" : 43, "curve" : 0, "color" : "001a26", "y" : 125 },
	{ "v0" : 44, "v1" : 45, "curve" : 0, "color" : "001c2e", "y" : 127 },
	{ "v0" : 46, "v1" : 47, "curve" : 0, "color" : "001d3c", "y" : 129 },
	{ "v0" : 48, "v1" : 49, "curve" : 0, "color" : "001e4a", "y" : 131 },
	{ "v0" : 50, "v1" : 51, "curve" : 0, "color" : "001f58", "y" : 133 },
	{ "v0" : 52, "v1" : 53, "curve" : 0, "color" : "002047", "y" : 135 },
	{ "v0" : 54, "v1" : 55, "curve" : 0, "color" : "002250", "y" : 137 },
	{ "v0" : 56, "v1" : 57, "curve" : 0, "vis" : false, "color" : "001a26", "x" : -500 },
	{ "v0" : 58, "v1" : 59, "curve" : 0, "vis" : false, "color" : "001a26", "x" : 500 },
	{ "v0" : 60, "v1" : 61, "curve" : 0, "color" : "00203e", "y" : 125 },
	{ "v0" : 62, "v1" : 63, "curve" : 0, "color" : "002249", "y" : 127 },
	{ "v0" : 64, "v1" : 65, "curve" : 0, "color" : "002554", "y" : 129 },
	{ "v0" : 66, "v1" : 67, "curve" : 0, "color" : "00275f", "y" : 131 },
	{ "v0" : 68, "v1" : 69, "curve" : 0, "color" : "002969", "y" : 133 },
	{ "v0" : 70, "v1" : 71, "curve" : 0, "color" : "002b74", "y" : 135 },
	{ "v0" : 72, "v1" : 73, "curve" : 0, "color" : "002d7f", "y" : 137 },
	{ "v0" : 74, "v1" : 75, "curve" : 0, "color" : "001f58", "y" : 125 },
	{ "v0" : 76, "v1" : 77, "curve" : 0, "color" : "002047", "y" : 127 },
	{ "v0" : 78, "v1" : 79, "curve" : 0, "color" : "002250", "y" : 129 },
	{ "v0" : 80, "v1" : 81, "curve" : 0, "color" : "002459", "y" : 131 },
	{ "v0" : 82, "v1" : 83, "curve" : 0, "color" : "002663", "y" : 133 },
	{ "v0" : 84, "v1" : 85, "curve" : 0, "color" : "00286e", "y" : 135 },
	{ "v0" : 86, "v1" : 87, "curve" : 0, "color" : "002a79", "y" : 137 },
	{ "v0" : 88, "v1" : 89, "curve" : 0, "color" : "001a26", "y" : 125 },
	{ "v0" : 90, "v1" : 91, "curve" : 0, "color" : "001c2e", "y" : 127 },
	{ "v0" : 92, "v1" : 93, "curve" : 0, "color" : "001d3c", "y" : 129 },
	{ "v0" : 94, "v1" : 95, "curve" : 0, "color" : "001e4a", "y" : 131 },
	{ "v0" : 96, "v1" : 97, "curve" : 0, "color" : "001f58", "y" : 133 },
	{ "v0" : 98, "v1" : 99, "curve" : 0, "color" : "002047", "y" : 135 },
	{ "v0" : 100, "v1" : 101, "curve" : 0, "color" : "002250", "y" : 137 },
	{ "v0" : 102, "v1" : 103, "curve" : 0, "color" : "002459", "y" : 125 },
	{ "v0" : 104, "v1" : 105, "curve" : 0, "color" : "002663", "y" : 127 },
	{ "v0" : 106, "v1" : 107, "curve" : 0, "color" : "00286e", "y" : 129 },
	{ "v0" : 108, "v1" : 109, "curve" : 0, "color" : "002a79", "y" : 131 },
	{ "v0" : 110, "v1" : 111, "curve" : 0, "color" : "002c83", "y" : 133 },
	{ "v0" : 112, "v1" : 113, "curve" : 0, "color" : "002e8e", "y" : 135 },
	{ "v0" : 114, "v1" : 115, "curve" : 0, "color" : "003097", "y" : 137, "_selected" : true },
	{ "v0" : 57, "v1" : 58, "curve" : 0, "vis" : false, "color" : "001a26", "y" : 228 },
	{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : false, "color" : "001a26", "x" : -502 },
	{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : false, "color" : "001a26", "x" : 502 },
	{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : false, "color" : "001a26", "x" : -504 },
	{ "v0" : 122, "v1" : 123, "curve" : 0, "vis" : false, "color" : "001a26", "x" : 504 },
	{ "v0" : 124, "v1" : 125, "curve" : 0, "vis" : false, "color" : "001a26", "y" : 230 },
	{ "v0" : 126, "v1" : 127, "curve" : 0, "vis" : false, "color" : "001a26", "y" : 232 },
		{ "v0" : 128, "v1" : 129, "curve" : 0, "color" : "1b254e", "y" : -237 },
		{ "v0" : 129, "v1" : 130, "curve" : 0, "color" : "1b254e", "x" : 0 },
		{ "v0" : 130, "v1" : 131, "curve" : 0, "color" : "1b254e", "y" : -212 },
		{ "v0" : 132, "v1" : 133, "curve" : 0, "color" : "1b254e", "x" : 22 },
		{ "v0" : 134, "v1" : 135, "curve" : 0, "color" : "1b254e", "x" : 34 },
		{ "v0" : 136, "v1" : 137, "curve" : 0, "color" : "1b254e", "y" : -224.5 },
		{ "v0" : 138, "v1" : 139, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 139, "v1" : 140, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 141, "v1" : 142, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 143, "v1" : 144, "curve" : 0, "color" : "1b254e", "x" : 66 },
		{ "v0" : 144, "v1" : 145, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 145, "v1" : 146, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 146, "v1" : 147, "curve" : 0, "color" : "1b254e", "x" : 78 },
		{ "v0" : 148, "v1" : 149, "curve" : 0, "color" : "1b254e", "x" : 88 },
		{ "v0" : 149, "v1" : 150, "curve" : 109.07645543215052, "color" : "1b254e" },
		{ "v0" : 150, "v1" : 151, "curve" : 90.20791541461715, "color" : "1b254e" },
		{ "v0" : 152, "v1" : 153, "curve" : 0, "color" : "1b254e", "x" : 108 },
		{ "v0" : 154, "v1" : 155, "curve" : 0, "color" : "1b254e", "x" : 118 },
		{ "v0" : 155, "v1" : 156, "curve" : 0, "color" : "1b254e", "y" : -212 },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "color" : "1b254e", "x" : 130 },
		{ "v0" : 157, "v1" : 154, "curve" : 0, "color" : "1b254e", "y" : -237 },
		{ "v0" : 158, "v1" : 159, "curve" : 0, "color" : "1b254e", "x" : 140 },
		{ "v0" : 159, "v1" : 160, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 160, "v1" : 161, "curve" : 0, "color" : "1b254e", "x" : 152 },
		{ "v0" : 162, "v1" : 163, "curve" : -210.20993926461884, "color" : "1b254e" },
		{ "v0" : 163, "v1" : 164, "curve" : 141.85752234867013, "color" : "1b254e" },
		{ "v0" : 164, "v1" : 165, "curve" : 170.7328685934713, "color" : "1b254e" },
		{ "v0" : 166, "v1" : 167, "curve" : 0, "color" : "f1cc7b", "y" : -237 },
		{ "v0" : 167, "v1" : 168, "curve" : 0, "color" : "f1cc7b", "x" : 0 },
		{ "v0" : 168, "v1" : 169, "curve" : 0, "color" : "f1cc7b", "y" : -212 },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "color" : "f1cc7b", "x" : 22 },
		{ "v0" : 172, "v1" : 173, "curve" : 0, "color" : "f1cc7b", "x" : 34 },
		{ "v0" : 174, "v1" : 175, "curve" : 0, "color" : "f1cc7b", "y" : -224.5 },
		{ "v0" : 176, "v1" : 177, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 177, "v1" : 178, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 179, "v1" : 180, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 181, "v1" : 182, "curve" : 0, "color" : "f1cc7b", "x" : 66 },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 183, "v1" : 184, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "color" : "f1cc7b", "x" : 78 },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "color" : "f1cc7b", "x" : 88 },
		{ "v0" : 187, "v1" : 188, "curve" : 109.07645543215052, "color" : "f1cc7b" },
		{ "v0" : 188, "v1" : 189, "curve" : 90.20791541461715, "color" : "f1cc7b" },
		{ "v0" : 190, "v1" : 191, "curve" : 0, "color" : "f1cc7b", "x" : 108 },
		{ "v0" : 192, "v1" : 193, "curve" : 0, "color" : "f1cc7b", "x" : 118 },
		{ "v0" : 193, "v1" : 194, "curve" : 0, "color" : "f1cc7b", "y" : -212 },
		{ "v0" : 194, "v1" : 195, "curve" : 0, "color" : "f1cc7b", "x" : 130 },
		{ "v0" : 195, "v1" : 192, "curve" : 0, "color" : "f1cc7b", "y" : -237 },
		{ "v0" : 196, "v1" : 197, "curve" : 0, "color" : "f1cc7b", "x" : 140 },
		{ "v0" : 197, "v1" : 198, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 198, "v1" : 199, "curve" : 0, "color" : "f1cc7b", "x" : 152 },
		{ "v0" : 200, "v1" : 201, "curve" : -210.20993926461884, "color" : "f1cc7b" },
		{ "v0" : 201, "v1" : 202, "curve" : 141.85752234867013, "color" : "f1cc7b" },
		{ "v0" : 202, "v1" : 203, "curve" : 170.7328685934713, "color" : "f1cc7b" }

	],

	"goals" : [
		

	],

	"discs" : [
		{ "radius" : 2, "invMass" : 1.5, "pos" : [-555,-555.5984 ], "color" : "FFFFFF", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ], "damping" : 0.99 },
		{ "radius" : 9, "pos" : [-58.49839743589746,17.91261131171658 ], "color" : "42804f", "bCoef" : 0, "cMask" : ["wall","red" ] },
		{ "radius" : 9, "pos" : [-58.49839743589746,13.16902156812683 ], "color" : "f6b900", "bCoef" : 0, "cMask" : ["wall","red" ] },
		{ "radius" : 9, "pos" : [-58.49839743589746,7.9126113117165815 ], "color" : "42804f", "bCoef" : 0, "cMask" : ["wall","red" ] },
		{ "radius" : 14.3, "pos" : [-58.49839743589746,-3.83097843187317 ], "color" : "f6b900", "bCoef" : 0, "cMask" : ["wall","red" ] }

	],

	"joints" : [
		{ "d0" : 1, "d1" : 2, "color" : "transparent", "length" : 2 },
		{ "d0" : 1, "d1" : 2, "color" : "transparent", "length" : 2 },
		{ "d0" : 2, "d1" : 3, "color" : "transparent", "length" : 2 },
		{ "d0" : 2, "d1" : 3, "color" : "transparent", "length" : 2 },
		{ "d0" : 3, "d1" : 4, "color" : "transparent", "length" : 4 },
		{ "d0" : 3, "d1" : 4, "color" : "transparent", "length" : 4 }

	],

	"planes" : [
		

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"radius" : 15,
		"acceleration" : 0.3,
		"invMass" : 1,
		"damping" : 0.9,
		"kickingAcceleration" : 0.3,
		"kickStrength" : 5,
		"kickback" : 0,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0.14
		],
		"kickingDamping" : 0.96,
		"bCoef" : 0.5

	},

	"cameraWidth" : 0,

	"cameraHeight" : 0,

	"maxViewWidth" : 0,

	"cameraFollow" : "ball",

	"canBeStored" : true,

	"kickOffReset" : "partial",

	"ballPhysics" : "disc0"
}`;
	RSRMap = false;
isAFKpaused = true;
	return CampeonesMap;
}


function getFutx2Map() {
	var Futx2Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯² 🏆 𝗚𝗟𝗛",

	"width" : 420,

	"height" : 230,

	"spawnDistance" : 180,

	"redSpawnPoints" : [
		[ -150, 0
		],
		[ -150, 0
		],
		[ -150, 0
		],
		[ -150, 0
		],
		[ -150, 0
		],
		[ -150, 0
		],
		[ -120, -205
		]

	],

	"blueSpawnPoints" : [
		[ 150, 0
		],
		[ 150, 0
		],
		[ 150, 0
		],
		[ 150, 0
		],
		[ 150, 0
		],
		[ 150, 0
		],
		[ 120, -205
		]

	],

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "2a3a40" },

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		
		/* 1 */ { "x" : 0, "y" : -65, "trait" : "line", "color" : "b3b6b6" },
		
		/* 2 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 3 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 4 */ { "x" : 0, "y" : 230, "trait" : "kickOffBarrier" },
		/* 5 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier", "color" : "00ff00" },
		/* 6 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier", "color" : "00ff00" },
		/* 7 */ { "x" : 0, "y" : -230, "trait" : "kickOffBarrier" },
		
		/* 8 */ { "x" : -368.53340356886, "y" : -64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "bias" : 12 },
		/* 9 */ { "x" : -400, "y" : -64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "bias" : 12 },
		/* 10 */ { "x" : -400, "y" : 64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "bias" : 12 },
		/* 11 */ { "x" : -368.53340356886, "y" : 64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "bias" : 12 },
		/* 12 */ { "x" : 368.09926357786, "y" : 64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "bias" : 12 },
		/* 13 */ { "x" : 400, "y" : 64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "bias" : 12 },
		/* 14 */ { "x" : 400, "y" : -64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "bias" : 12 },
		/* 15 */ { "x" : 368.9681846993, "y" : -64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "bias" : 12 },
		
		/* 16 */ { "x" : -368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : -90 },
		/* 17 */ { "x" : -260.90035258157, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 18 */ { "x" : -368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 19 */ { "x" : -358.5379338963, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 20 */ { "x" : -368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 90 },
		/* 21 */ { "x" : -260.90035258157, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 22 */ { "x" : -368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 23 */ { "x" : -358.5379338963, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 24 */ { "x" : 368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 25 */ { "x" : 358.36266315432, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 26 */ { "x" : 368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 27 */ { "x" : 358.36266315432, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 28 */ { "x" : 368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 29 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 30 */ { "x" : 368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 31 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 32 */ { "x" : -250.86909422732, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 33 */ { "x" : -250.86909422732, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 34 */ { "x" : -250.86909422732, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 35 */ { "x" : -250.86909422732, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 36 */ { "x" : -250.86909422732, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 37 */ { "x" : -250.86909422732, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 38 */ { "x" : -250.86909422732, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 39 */ { "x" : -250.86909422732, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 40 */ { "x" : 250.69382348534, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 41 */ { "x" : 250.69382348534, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 42 */ { "x" : 250.69382348534, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 43 */ { "x" : 250.69382348534, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 44 */ { "x" : 250.69382348534, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 45 */ { "x" : 250.69382348534, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 46 */ { "x" : 250.69382348534, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 47 */ { "x" : 250.69382348534, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 48 */ { "x" : -185.66591492467, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 49 */ { "x" : -185.66591492467, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 50 */ { "x" : -185.66591492467, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 51 */ { "x" : -185.66591492467, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 52 */ { "x" : -185.66591492467, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 53 */ { "x" : -185.66591492467, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 54 */ { "x" : -185.66591492467, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 55 */ { "x" : -185.66591492467, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 56 */ { "x" : 185.49064418269, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 57 */ { "x" : 185.49064418269, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 58 */ { "x" : 185.49064418269, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 59 */ { "x" : 185.49064418269, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 60 */ { "x" : 185.49064418269, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 61 */ { "x" : 185.49064418269, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 62 */ { "x" : 185.49064418269, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 63 */ { "x" : 185.49064418269, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 64 */ { "x" : -160.58776903904, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 65 */ { "x" : -160.58776903904, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 66 */ { "x" : -80.337702205015, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 67 */ { "x" : -80.337702205015, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 68 */ { "x" : 160.41249829706, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 69 */ { "x" : 160.41249829706, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 70 */ { "x" : 80.162431463036, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 71 */ { "x" : 80.162431463036, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 72 */ { "x" : -254.88159756902, "y" : -171, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 73 */ { "x" : -254.88159756902, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 74 */ { "x" : -371.91294503531, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 75 */ { "x" : -384.61920561736, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 76 */ { "x" : 371.73767429333, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 77 */ { "x" : 384.44393487538, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 78 */ { "x" : -371.91294503531, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 79 */ { "x" : -384.61920561736, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 80 */ { "x" : 371.73767429333, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 81 */ { "x" : 384.44393487538, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 82 */ { "x" : -254.88159756902, "y" : 171, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 83 */ { "x" : -254.88159756902, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 84 */ { "x" : 254.70632682704, "y" : -171, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 85 */ { "x" : 254.70632682704, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 86 */ { "x" : 254.70632682704, "y" : 171, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 87 */ { "x" : 254.70632682704, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		
		/* 88 */ { "x" : -368, "y" : 171, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 89 */ { "x" : 368, "y" : 171, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 90 */ { "x" : 368, "y" : 64, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 91 */ { "x" : 368, "y" : -64, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 92 */ { "x" : 368, "y" : -171, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 93 */ { "x" : -368, "y" : -171, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 94 */ { "x" : -368, "y" : -64, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 95 */ { "x" : -368, "y" : 64, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "vis" : true, "bias" : -12 },
		
		/* 96 */ { "x" : -368, "y" : 64, "bCoef" : 0, "trait" : "line" },
		/* 97 */ { "x" : -368, "y" : -64, "bCoef" : 0, "trait" : "line" },
		/* 98 */ { "x" : 368, "y" : 64, "bCoef" : 0, "trait" : "line" },
		/* 99 */ { "x" : 368, "y" : -64, "bCoef" : 0, "trait" : "line" },
		/* 100 */ { "x" : 0, "y" : 65, "bCoef" : 0, "trait" : "line" },
		/* 101 */ { "x" : 0, "y" : 171, "bCoef" : 0, "trait" : "line" },
		/* 102 */ { "x" : 0, "y" : -171, "bCoef" : 0, "trait" : "line" },
		/* 103 */ { "x" : 0, "y" : -65, "bCoef" : 0, "trait" : "line" },
		/* 104 */ { "x" : 0, "y" : -65, "bCoef" : 0, "trait" : "line" },
		/* 105 */ { "x" : 0, "y" : 65, "bCoef" : 0, "trait" : "line" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "curve" : 180, "color" : "b3b6b6", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 0, "v1" : 1, "curve" : -180, "color" : "b3b6b6", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 1, "v1" : 0, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 3, "v1" : 2, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		{ "v0" : 6, "v1" : 7, "trait" : "kickOffBarrier" },
		
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "pos" : [-700,-80 ], "y" : -64 },
		{ "v0" : 9, "v1" : 10, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "x" : -400 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "pos" : [-700,80 ], "y" : 64 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "pos" : [-700,-80 ], "y" : 64 },
		{ "v0" : 13, "v1" : 14, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "x" : -590 },
		{ "v0" : 14, "v1" : 15, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "pos" : [-700,80 ], "y" : -64 },
		
		{ "v0" : 16, "v1" : 17, "curve" : 94.0263701017, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 19, "v1" : 18, "curve" : 86.632306418889, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 20, "v1" : 21, "curve" : -94.026370101699, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 17, "v1" : 21, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 23, "v1" : 22, "curve" : -86.632306418888, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 25, "v1" : 24, "curve" : 86.632306418884, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 27, "v1" : 26, "curve" : -86.632306418899, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 28, "v1" : 29, "curve" : -94.026370101699, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "curve" : 94.026370101699, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 33, "v1" : 32, "curve" : -180.00692920292, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 32, "v1" : 33, "curve" : -180.00218240614, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 35, "v1" : 34, "curve" : -179.64823645332, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 34, "v1" : 35, "curve" : -180.35758668147, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 37, "v1" : 36, "curve" : -180.02357323962, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 36, "v1" : 37, "curve" : -180.00924102399, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 39, "v1" : 38, "curve" : -180.06885755885, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 38, "v1" : 39, "curve" : -180.02948353257, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 41, "v1" : 40, "curve" : -179.99869069543, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 40, "v1" : 41, "curve" : -179.99939258776, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 43, "v1" : 42, "curve" : -180.08826047163, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 42, "v1" : 43, "curve" : -179.91186753664, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 45, "v1" : 44, "curve" : -179.99528711105, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 44, "v1" : 45, "curve" : -179.99743836358, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 47, "v1" : 46, "curve" : -179.98626041101, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 46, "v1" : 47, "curve" : -179.99175181595, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 49, "v1" : 48, "curve" : -180.04715562398, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 48, "v1" : 49, "curve" : -179.95294709391, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 51, "v1" : 50, "curve" : -179.95715750564, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 50, "v1" : 51, "curve" : -179.89943871875, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 53, "v1" : 52, "curve" : -179.94773754738, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 52, "v1" : 53, "curve" : -179.98221351296, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 55, "v1" : 54, "curve" : -180.4151727218, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 54, "v1" : 55, "curve" : -179.58764458796, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 57, "v1" : 56, "curve" : -180.00086646359, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 56, "v1" : 57, "curve" : -180.01965986376, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 59, "v1" : 58, "curve" : -180.03532601389, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 58, "v1" : 59, "curve" : -179.99380079, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 61, "v1" : 60, "curve" : -180.0044468452, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 60, "v1" : 61, "curve" : -180.01386779847, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 63, "v1" : 62, "curve" : -180.05158287563, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 62, "v1" : 63, "curve" : -180.01212223878, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 66, "v1" : 67, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 68, "v1" : 69, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 70, "v1" : 71, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 72, "v1" : 73, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 74, "v1" : 75, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 76, "v1" : 77, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 78, "v1" : 79, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 80, "v1" : 81, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 82, "v1" : 83, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 84, "v1" : 85, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 31, "v1" : 29, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		
		{ "v0" : 88, "v1" : 89, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "y" : 171 },
		{ "v0" : 89, "v1" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "x" : 368 },
		{ "v0" : 91, "v1" : 92, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "x" : 368 },
		{ "v0" : 92, "v1" : 93, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "y" : -171 },
		{ "v0" : 93, "v1" : 94, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "x" : -368 },
		{ "v0" : 88, "v1" : 95, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : -12, "x" : -368 },
		
		{ "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : -368 },
		{ "v0" : 98, "v1" : 99, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : 368 },
		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : 0 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : 0 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : 0 }

	],

	"goals" : [
		{ "p0" : [-376.95,-62.053454903872 ], "p1" : [-376.95,64.043361696331 ], "team" : "red" },
		{ "p0" : [376.95,62 ], "p1" : [376.95,-62 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6.4, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFFFFF", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ], "damping" : 0.99 },
		{ "radius" : 0.4, "invMass" : 1e+300, "pos" : [-5,-1 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.4, "invMass" : 1e+300, "pos" : [5,-1 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.4, "invMass" : 1e+300, "pos" : [0,-5 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.4, "invMass" : 1e+300, "pos" : [-3,4 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.4, "invMass" : 1e+300, "pos" : [3,4 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.4, "invMass" : 1e+300, "pos" : [0,0 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		
		{ "radius" : 3.9405255187564, "pos" : [-368,64 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 3.9405255187564, "pos" : [-368,-64 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -80, "x" : -560 },
		{ "radius" : 3.9405255187564, "pos" : [368,-64 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 3.9405255187564, "pos" : [368,64 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -80, "x" : -560 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-368,-171 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-368,171 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [368,171 ], "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [368,-171 ], "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -171, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -171, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -230, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [0,-1 ], "dist" : -230, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },
		"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }

	},

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5,
		"bCoef" : 0

	},

	"ballPhysics" : "disc0",

"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]
}`;
	RSRMap = false;
	return Futx2Map;
}

function getFutx3Map() {
	var Futx3Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯³ 🏆 𝗚𝗟𝗛",

	"width" : 620,

	"height" : 300,

	"spawnDistance" : 350,

	"redSpawnPoints" : [
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -180, 275
		]

	],

	"blueSpawnPoints" : [
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 180, 275
		]

	],

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "2a3a40" },

	"vertexes" : [
		/* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea" },
		/* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea" },
		
		/* 2 */ { "x" : 0, "y" : 300, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -300, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "x" : -550, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 7 */ { "x" : -590, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 8 */ { "x" : -590, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 9 */ { "x" : -550, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 10 */ { "x" : 550, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 590, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 590, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 550, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		
		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,80 ] },
		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,-80 ] },
		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "_selected" : "segment" },
		/* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "_selected" : "segment" },
		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "color" : "b3b6b6" },
		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		
		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		
		/* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },
		/* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },
		/* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		
		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 52 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : -90 },
		/* 53 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 54 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 55 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 56 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 90 },
		/* 57 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 58 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 59 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 60 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 61 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 62 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 63 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 64 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 65 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 66 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 67 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 68 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 69 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 70 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 71 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 72 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 73 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 74 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 75 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 76 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 77 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 78 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 79 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 80 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 81 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 82 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 83 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 84 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 85 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 86 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 87 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 88 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 89 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 90 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 91 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 92 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 93 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 94 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 95 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 96 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 97 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 98 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 99 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 100 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 101 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 102 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 103 */ { "x" : -240, "y" : 224, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 104 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 105 */ { "x" : -120, "y" : 224, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 106 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 107 */ { "x" : 240, "y" : 224, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 108 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 109 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 110 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 111 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 112 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 113 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 114 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 115 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 116 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 117 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 118 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 119 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 120 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 121 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 122 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 123 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 124 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 125 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 126 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		
		/* 127 */ { "x" : 553, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 128 */ { "x" : 553, "y" : -80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ], "vis" : false },
		/* 129 */ { "x" : 553, "y" : 80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "vis" : false },
		/* 130 */ { "x" : 553, "y" : 240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 131 */ { "x" : -553, "y" : 80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ], "vis" : false },
		/* 132 */ { "x" : -553, "y" : 240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 133 */ { "x" : -553, "y" : -80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : false },
		/* 134 */ { "x" : -553, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -590 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : 590 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 },
		
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240, "_selected" : true },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },
		
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -550 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 550 },
		{ "v0" : 52, "v1" : 53, "curve" : -90, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 55, "v1" : 54, "curve" : -90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : 90, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 53, "v1" : 57, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 59, "v1" : 58, "curve" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 62, "v1" : 61, "curve" : -90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 64, "v1" : 63, "curve" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 90, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : -90, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 72, "v1" : 71, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 71, "v1" : 72, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 74, "v1" : 73, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 73, "v1" : 74, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 76, "v1" : 75, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 75, "v1" : 76, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 78, "v1" : 77, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 77, "v1" : 78, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 80, "v1" : 79, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 79, "v1" : 80, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 82, "v1" : 81, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 81, "v1" : 82, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 84, "v1" : 83, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 83, "v1" : 84, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 86, "v1" : 85, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 85, "v1" : 86, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 88, "v1" : 87, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 87, "v1" : 88, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 90, "v1" : 89, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 89, "v1" : 90, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 92, "v1" : 91, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 94, "v1" : 93, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 93, "v1" : 94, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 96, "v1" : 95, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 95, "v1" : 96, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 98, "v1" : 97, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 97, "v1" : 98, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 100, "v1" : 99, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 109, "v1" : 110, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 111, "v1" : 112, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 121, "v1" : 122, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		
		{ "v0" : 127, "v1" : 128, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 131, "v1" : 132, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 },
		{ "v0" : 133, "v1" : 134, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 }

	],

	"goals" : [
		{ "p0" : [-558.95,-80 ], "p1" : [-558.95,80 ], "team" : "red" },
		{ "p0" : [558.95,80 ], "p1" : [558.95,-80 ], "team" : "blue" }

	],

	"discs" : [
		{"radius":6.4,"color":"${PelotaFutsal}","bCoef":0.4,"invMass":1.5,"damping":0.99,"cGroup":["ball","kick","score"]},
		{"pos":[-5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[0,-5],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[-3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"radius":1.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{ "radius" : 5, "pos" : [-550,80 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [-550,-80 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -80, "x" : -560 },
		{ "radius" : 5, "pos" : [550,80 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [550,-80 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -80 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -300, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -300, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

"ballPhysics":"disc0",

"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]

}`;
	RSRMap = false;
	return Futx3Map;
}

function getFutx4Map() {
	var Futx4Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁴ 🏆 𝗚𝗟𝗛",

	"width" : 765,

	"height" : 380,

	"spawnDistance" : 350,

	"redSpawnPoints" : [
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -229, 350
		]

	],

	"blueSpawnPoints" : [
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 229, 350
		]

	],

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "2a3a40" },

	"vertexes" : [
		/* 0 */ { "x" : 700.1148409130134, "y" : 319.8124743008296, "trait" : "ballArea" },
		/* 1 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "trait" : "ballArea" },
		
		/* 2 */ { "x" : 0, "y" : 380, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 106.60415810027654, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -106.60415810027654, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -380, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "x" : -700.1148409130134, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 7 */ { "x" : -740, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 8 */ { "x" : -740, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 9 */ { "x" : -700.1148409130134, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 10 */ { "x" : 700.1148409130134, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 740, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 740, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 700.1148409130134, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		
		/* 14 */ { "x" : -700.1148409130134, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,80 ] },
		/* 15 */ { "x" : -700.1148409130134, "y" : 319.8124743008296, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 16 */ { "x" : -700.1148409130134, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,-80 ] },
		/* 17 */ { "x" : -700.1148409130134, "y" : -319.8124743008296, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 18 */ { "x" : -700.1148409130134, "y" : 319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 19 */ { "x" : 700.1148409130134, "y" : 319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 20 */ { "x" : 700.1148409130134, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "color" : "b3b6b6" },
		/* 21 */ { "x" : 700.1148409130134, "y" : 319.8124743008296, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 22 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 23 */ { "x" : 700.1148409130134, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -700.1148409130134, "y" : -319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 27 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		
		/* 28 */ { "x" : 0, "y" : -319.8124743008296, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 29 */ { "x" : 0, "y" : -106.60415810027654, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 30 */ { "x" : 0, "y" : 106.60415810027654, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 31 */ { "x" : 0, "y" : 319.8124743008296, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 32 */ { "x" : 0, "y" : -106.60415810027654, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 33 */ { "x" : 0, "y" : 106.60415810027654, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 34 */ { "x" : 0, "y" : 106.60415810027654, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -106.60415810027654, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 106.60415810027654, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -106.60415810027654, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		
		/* 38 */ { "x" : -709.661861470918, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },
		/* 39 */ { "x" : -709.661861470918, "y" : 319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -709.661861470918, "y" : -319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -709.661861470918, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },
		/* 42 */ { "x" : 709.661861470918, "y" : -319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 709.661861470918, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 709.661861470918, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 709.661861470918, "y" : 319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		
		/* 46 */ { "x" : 0, "y" : -106.60415810027654, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 47 */ { "x" : 0, "y" : 106.60415810027654, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : -700.1148409130134, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 49 */ { "x" : -700.1148409130134, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 50 */ { "x" : 700.1148409130134, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 51 */ { "x" : 700.1148409130134, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 52 */ { "x" : -700.1148409130134, "y" : 266.5103952506913, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : -90 },
		/* 53 */ { "x" : -496.4450690110458, "y" : 93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 54 */ { "x" : -700.1148409130134, "y" : 301.1567466332812, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 55 */ { "x" : -682.2937358715913, "y" : 319.8124743008296, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 56 */ { "x" : -700.1148409130134, "y" : -266.5103952506913, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 90 },
		/* 57 */ { "x" : -496.4450690110458, "y" : -93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 58 */ { "x" : -700.1148409130134, "y" : -301.1567466332812, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 59 */ { "x" : -682.2937358715913, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 60 */ { "x" : -484.9886443415601, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "00ff00" },
		/* 61 */ { "x" : 700.1148409130134, "y" : -301.1567466332812, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 62 */ { "x" : 682.2937358715913, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 63 */ { "x" : 700.1148409130134, "y" : 301.1567466332812, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 64 */ { "x" : 682.2937358715913, "y" : 319.8124743008296, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 65 */ { "x" : 700.1148409130134, "y" : 266.5103952506913, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 66 */ { "x" : 496.4450690110458, "y" : 93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 67 */ { "x" : 700.1148409130134, "y" : -266.5103952506913, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 68 */ { "x" : 496.4450690110458, "y" : -93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 69 */ { "x" : 496.4450690110458, "y" : 93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 70 */ { "x" : 496.4450690110458, "y" : -93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 71 */ { "x" : -477.3510278952363, "y" : 1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 72 */ { "x" : -477.3510278952363, "y" : -1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 73 */ { "x" : -477.3510278952363, "y" : 3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 74 */ { "x" : -477.3510278952363, "y" : -3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 75 */ { "x" : -477.3510278952363, "y" : -2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 76 */ { "x" : -477.3510278952363, "y" : 2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 77 */ { "x" : -477.3510278952363, "y" : -4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 78 */ { "x" : -477.3510278952363, "y" : 4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 79 */ { "x" : 477.3510278952363, "y" : 1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 80 */ { "x" : 477.3510278952363, "y" : -1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 81 */ { "x" : 477.3510278952363, "y" : 3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 82 */ { "x" : 477.3510278952363, "y" : -3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 83 */ { "x" : 477.3510278952363, "y" : -2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 84 */ { "x" : 477.3510278952363, "y" : 2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 85 */ { "x" : 477.3510278952363, "y" : -4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 86 */ { "x" : 477.3510278952363, "y" : 4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 87 */ { "x" : -353.23976064247483, "y" : 1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 88 */ { "x" : -353.23976064247483, "y" : -1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 89 */ { "x" : -353.23976064247483, "y" : 3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 90 */ { "x" : -353.23976064247483, "y" : -3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 91 */ { "x" : -353.23976064247483, "y" : -2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 92 */ { "x" : -353.23976064247483, "y" : 2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 93 */ { "x" : -353.23976064247483, "y" : -4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 94 */ { "x" : -353.23976064247483, "y" : 4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 95 */ { "x" : 353.23976064247483, "y" : 1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 96 */ { "x" : 353.23976064247483, "y" : -1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 97 */ { "x" : 353.23976064247483, "y" : 3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 98 */ { "x" : 353.23976064247483, "y" : -3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 99 */ { "x" : 353.23976064247483, "y" : -2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 100 */ { "x" : 353.23976064247483, "y" : 2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 101 */ { "x" : 353.23976064247483, "y" : -4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 102 */ { "x" : 353.23976064247483, "y" : 4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 103 */ { "x" : -305.5046578529513, "y" : 298.49164268077425, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 104 */ { "x" : -305.5046578529513, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 105 */ { "x" : -152.75232892647566, "y" : 298.49164268077425, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 106 */ { "x" : -152.75232892647566, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 107 */ { "x" : 305.5046578529513, "y" : 298.49164268077425, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 108 */ { "x" : 305.5046578529513, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 109 */ { "x" : 152.75232892647566, "y" : 298.49164268077425, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 110 */ { "x" : 152.75232892647566, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 111 */ { "x" : -484.9886443415601, "y" : 319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 112 */ { "x" : -484.9886443415601, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 113 */ { "x" : -707.7524573593371, "y" : 163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 114 */ { "x" : -731.9382427726956, "y" : 163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 115 */ { "x" : 707.7524573593371, "y" : 163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 116 */ { "x" : 731.9382427726956, "y" : 163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 117 */ { "x" : -707.7524573593371, "y" : -163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 118 */ { "x" : -731.9382427726956, "y" : -163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 119 */ { "x" : 707.7524573593371, "y" : -163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 120 */ { "x" : 731.9382427726956, "y" : -163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 121 */ { "x" : -484.9886443415601, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 122 */ { "x" : -484.9886443415601, "y" : -341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 123 */ { "x" : 484.9886443415601, "y" : 319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 124 */ { "x" : 484.9886443415601, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 125 */ { "x" : 484.9886443415601, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 126 */ { "x" : 484.9886443415601, "y" : -341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		
		/* 127 */ { "x" : 703.9336491361752, "y" : -319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 128 */ { "x" : 703.9336491361752, "y" : -90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ], "vis" : false },
		/* 129 */ { "x" : 703.9336491361752, "y" : 90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "vis" : false },
		/* 130 */ { "x" : 703.9336491361752, "y" : 319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 131 */ { "x" : -703.9336491361752, "y" : 90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ], "vis" : false },
		/* 132 */ { "x" : -703.9336491361752, "y" : 319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 133 */ { "x" : -703.9336491361752, "y" : -90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : false },
		/* 134 */ { "x" : -703.9336491361752, "y" : -319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -90 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -740 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 90 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -90 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : 740 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 90 },
		
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },
		
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -550 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 550 },
		{ "v0" : 52, "v1" : 53, "curve" : -93.12709821006908, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 55, "v1" : 54, "curve" : -87.37849984133219, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : 93.12709821006924, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 53, "v1" : 57, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 59, "v1" : 58, "curve" : 87.37849984134841, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 62, "v1" : 61, "curve" : -87.37849984133219, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 64, "v1" : 63, "curve" : 87.37849984134841, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 93.12709821006924, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : -93.12709821006919, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 72, "v1" : 71, "curve" : 180.1633721223104, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 71, "v1" : 72, "curve" : 179.83708930112383, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 74, "v1" : 73, "curve" : 179.99999999999838, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 73, "v1" : 74, "curve" : 180.00000000000165, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 76, "v1" : 75, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 75, "v1" : 76, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 78, "v1" : 77, "curve" : 180.5779697461612, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 77, "v1" : 78, "curve" : 179.42750016761278, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 80, "v1" : 79, "curve" : 179.83540351837757, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 79, "v1" : 80, "curve" : 180.1642154442635, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 82, "v1" : 81, "curve" : 180.00000000000165, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 81, "v1" : 82, "curve" : 179.99999999999835, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 84, "v1" : 83, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 83, "v1" : 84, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 86, "v1" : 85, "curve" : 179.4464958872327, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 85, "v1" : 86, "curve" : 180.55861544418315, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 88, "v1" : 87, "curve" : 180.1633721223104, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 87, "v1" : 88, "curve" : 179.83708930112874, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 90, "v1" : 89, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 89, "v1" : 90, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 92, "v1" : 91, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 94, "v1" : 93, "curve" : 179.4244807844529, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 93, "v1" : 94, "curve" : 180.56082341999925, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 96, "v1" : 95, "curve" : 179.83540351838244, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 95, "v1" : 96, "curve" : 180.16421544425376, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 98, "v1" : 97, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 97, "v1" : 98, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 100, "v1" : 99, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180.5921396617552, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 179.42448078445292, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 109, "v1" : 110, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 111, "v1" : 112, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 121, "v1" : 122, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		
		{ "v0" : 127, "v1" : 128, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 131, "v1" : 132, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 },
		{ "v0" : 133, "v1" : 134, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 }

	],

	"goals" : [
		{ "p0" : [-709.064840913,-90 ], "p1" : [-709.064840913,90 ], "team" : "red" },
		{ "p0" : [709.064840913,90 ], "p1" : [709.064840913,-90 ], "team" : "blue" }

	],

	"discs" : [
		{"radius":6.4,"color":"${PelotaFutsal}","bCoef":0.4,"invMass":1.5,"damping":0.99,"cGroup":["ball","kick","score"]},
		{"pos":[-5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[0,-5],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[-3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"radius":1.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{ "radius" : 5, "pos" : [-700.1148409130134,90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 90 },
		{ "radius" : 5, "pos" : [-700.1148409130134,-90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -90, "x" : -560 },
		{ "radius" : 5, "pos" : [700.1148409130134,90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 90 },
		{ "radius" : 5, "pos" : [700.1148409130134,-90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -90 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-700.1148409130134,319.8124743008296 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-700.1148409130134,-319.8124743008296 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [700.1148409130134,-319.8124743008296 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [700.1148409130134,319.8124743008296 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -319.8124743008296, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -319.8124743008296, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -380, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -380, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -789.2203661201241, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -789.2203661201241, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -789.2203661201241, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -789.2203661201241, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

"ballPhysics":"disc0",

"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]

}`;
	RSRMap = false;
	return Futx4Map;
}



function getFutx7Map() {
	var Futx7Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁷ 🏆 𝗚𝗟𝗛",

	"width" : 1275,

	"height" : 675,

	"spawnDistance" : 350,

	"redSpawnPoints" : [
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -396, 635
		]

	],

	"blueSpawnPoints" : [
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 396, 635
		]

	],

	"bg" : { "type" : "grass", "width" : 0, "height" : 0, "kickOffRadius" : 180, "cornerRadius" : 0, "color" : "2a3a40" },

	"vertexes" : [
		/* 0 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 1 */ { "x" : -1200, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 2 */ { "x" : -1250, "y" : -110, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 3 */ { "x" : -1250, "y" : 110, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "radius" : 7, "bias" : 12 },
		/* 4 */ { "x" : -1200, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 5 */ { "x" : 1200, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : -12 },
		/* 6 */ { "x" : 1250, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 7 */ { "x" : 1250, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 8 */ { "x" : 1200, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : -12 },
		
		/* 9 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 10 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 11 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 12 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 13 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 14 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 15 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 16 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 17 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 18 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 19 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 20 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 21 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 22 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 23 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 24 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 26 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 27 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 28 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6", "bias" : 12 },
		/* 29 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 30 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : -12 },
		/* 31 */ { "x" : -1200, "y" : 110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 32 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 33 */ { "x" : -1200, "y" : 110, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 34 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "bias" : -12 },
		/* 35 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 36 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "bias" : 12 },
		/* 37 */ { "x" : 1200, "y" : -110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 38 */ { "x" : 1200, "y" : -110, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		
		/* 39 */ { "x" : 1200, "y" : -110, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 40 */ { "x" : 1200, "y" : 110, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 41 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "b3b6b6" },
		/* 42 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "b3b6b6" },
		/* 43 */ { "x" : -525.1982581967213, "y" : 584, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 44 */ { "x" : -525.1982581967213, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 45 */ { "x" : -267.4933401639344, "y" : 584, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 46 */ { "x" : -267.4933401639344, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 47 */ { "x" : 505.62141393442624, "y" : 584, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : 505.62141393442624, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 49 */ { "x" : 247.91649590163934, "y" : 584, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 50 */ { "x" : 247.91649590163934, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 51 */ { "x" : -828.0015368852459, "y" : 600, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 52 */ { "x" : -828.0015368852459, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 53 */ { "x" : 1220.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 54 */ { "x" : 1201.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 55 */ { "x" : 1219.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 56 */ { "x" : 1200.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 57 */ { "x" : -841.1245088945966, "y" : -601, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 58 */ { "x" : -841.1245088945966, "y" : -617, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 59 */ { "x" : 808.4246926229508, "y" : 600, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 60 */ { "x" : 808.4246926229508, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 61 */ { "x" : 837.7690984113394, "y" : -601, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 62 */ { "x" : 837.7690984113394, "y" : -617, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 63 */ { "x" : -1220.0747488827305, "y" : -251.82895884262769, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 64 */ { "x" : -1201.0752587242073, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 65 */ { "x" : -1218.9226063416277, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 66 */ { "x" : -1199.9231161831044, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 67 */ { "x" : -1200, "y" : 570.456511053482, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 68 */ { "x" : -1171.6369452864983, "y" : 600, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 69 */ { "x" : -1200, "y" : -569.6420271253103, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 70 */ { "x" : -1170.6369452864983, "y" : -600, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 71 */ { "x" : 1200, "y" : -571.0124590189979, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 72 */ { "x" : 1170.319141439366, "y" : -600, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 73 */ { "x" : 1200, "y" : 569.9997004222528, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 74 */ { "x" : 1171.319141439366, "y" : 600, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 75 */ { "x" : -787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ff6363" },
		/* 76 */ { "x" : -787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901, "color" : "ff6363" },
		/* 77 */ { "x" : -787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "ff6363" },
		/* 78 */ { "x" : -1075, "y" : -470, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "ff6363" },
		/* 79 */ { "x" : -787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90, "color" : "ff6363" },
		/* 80 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 81 */ { "x" : -787, "y" : 0.1561968168675687, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 82 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 83 */ { "x" : -787, "y" : 4.614580423494619, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 84 */ { "x" : -787, "y" : 2.3853886201811116, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 85 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 86 */ { "x" : -787, "y" : 5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 87 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 88 */ { "x" : -610, "y" : -1.1475001518364962, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 89 */ { "x" : -610, "y" : 2.077131467790089, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 90 */ { "x" : -610, "y" : -4.372131771463081, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 91 */ { "x" : -610, "y" : 5.301763087416674, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 92 */ { "x" : -610, "y" : 3.6894472776033993, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 93 */ { "x" : -610, "y" : -2.759815961649778, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 94 */ { "x" : -610, "y" : 6.107920992323329, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 95 */ { "x" : -610, "y" : -5.178289676369722, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 96 */ { "x" : -610, "y" : -299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 97 */ { "x" : -610, "y" : -296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 98 */ { "x" : -610, "y" : 296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 99 */ { "x" : -610, "y" : 299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		
		/* 100 */ { "x" : -1252, "y" : -110, "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "vis" : false, "curve" : 0, "color" : "e0d5d6", "bias" : 12 },
		/* 101 */ { "x" : -1252, "y" : 110, "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "vis" : false, "curve" : 0, "color" : "e0d5d6", "bias" : 12 },
		/* 102 */ { "x" : 1252, "y" : -110, "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "vis" : false, "curve" : 0, "color" : "ffffff" },
		/* 103 */ { "x" : 1252, "y" : 110, "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "vis" : false, "curve" : 0, "color" : "ffffff" },
		
		/* 104 */ { "x" : -1200, "y" : 110, "bCoef" : 0, "trait" : "line", "color" : "ff3030" },
		/* 105 */ { "x" : -1200, "y" : -110, "bCoef" : 0, "trait" : "line", "color" : "ff3030" },
		/* 106 */ { "x" : -1200, "y" : 110, "bCoef" : 1, "trait" : "line", "color" : "ffffff", "bias" : -12 },
		/* 107 */ { "x" : -1200, "y" : 75, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 108 */ { "x" : -1200, "y" : 39, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 109 */ { "x" : -1200, "y" : 12, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 110 */ { "x" : -1200, "y" : -75, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 111 */ { "x" : -1200, "y" : -110, "bCoef" : 1, "trait" : "line", "color" : "ffffff", "bias" : 12 },
		/* 112 */ { "x" : -1200, "y" : -15, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 113 */ { "x" : -1200, "y" : -42, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 114 */ { "x" : 1200, "y" : 110, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 115 */ { "x" : 1200, "y" : -110, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 116 */ { "x" : 1200, "y" : 110, "bCoef" : 1, "trait" : "line", "color" : "ffffff", "bias" : 12 },
		/* 117 */ { "x" : 1200, "y" : 76, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 118 */ { "x" : 1200, "y" : 39, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 119 */ { "x" : 1200, "y" : 12, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 120 */ { "x" : 1200, "y" : -75, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 121 */ { "x" : 1200, "y" : -110, "bCoef" : 1, "trait" : "line", "color" : "ffffff", "bias" : -12 },
		/* 122 */ { "x" : 1200, "y" : -15, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 123 */ { "x" : 1200, "y" : -42, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 124 */ { "x" : -1200, "y" : -470, "bCoef" : 0, "trait" : "line", "curve" : 0, "color" : "ff6363" },
		/* 125 */ { "x" : -1075, "y" : 470, "bCoef" : 0, "trait" : "line", "curve" : 90, "color" : "ff6363" },
		/* 126 */ { "x" : -1200, "y" : 470, "bCoef" : 0, "trait" : "line", "color" : "ff6363" },
		/* 127 */ { "x" : 787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "4fbeff" },
		/* 128 */ { "x" : 1075, "y" : 470, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "4fbeff" },
		/* 129 */ { "x" : 787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "4fbeff" },
		/* 130 */ { "x" : 787, "y" : 5.145341211815264, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 131 */ { "x" : 787, "y" : -0.010663810350735048, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 132 */ { "x" : 787, "y" : 5.145207323606769, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 133 */ { "x" : 787, "y" : -4.468863459043746, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 134 */ { "x" : 787, "y" : -2.2397636346972547, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 135 */ { "x" : 787, "y" : 5.145274267711017, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 136 */ { "x" : 787, "y" : -4.854245235055558, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 137 */ { "x" : 787, "y" : 5.145173851554631, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 138 */ { "x" : 1200, "y" : 470, "bCoef" : 0, "trait" : "line", "curve" : 0, "color" : "4fbeff" },
		/* 139 */ { "x" : 1075, "y" : -470, "bCoef" : 0, "trait" : "line", "curve" : 90, "color" : "4fbeff" },
		/* 140 */ { "x" : 1200, "y" : -470, "bCoef" : 0, "trait" : "line", "color" : "4fbeff" },
		/* 141 */ { "x" : 610, "y" : -1.1475001518364962, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 142 */ { "x" : 610, "y" : 2.077131467790089, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 143 */ { "x" : 610, "y" : -4.372131771463081, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 144 */ { "x" : 610, "y" : 5.301763087416674, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 145 */ { "x" : 610, "y" : 3.6894472776033993, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 146 */ { "x" : 610, "y" : -2.759815961649778, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 147 */ { "x" : 610, "y" : 6.107920992323329, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 148 */ { "x" : 610, "y" : -5.178289676369722, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 149 */ { "x" : 610, "y" : -299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 150 */ { "x" : 610, "y" : -296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 151 */ { "x" : 610, "y" : 296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 152 */ { "x" : 610, "y" : 299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 153 */ { "x" : 0, "y" : -180, "bCoef" : 0, "trait" : "line", "curve" : 0 },
		/* 154 */ { "x" : 0, "y" : 180, "bCoef" : 0, "trait" : "line", "curve" : 0 },
		
		/* 155 */ { "x" : 0, "y" : 180, "bCoef" : 0, "trait" : "kickOffBarrier" },
		/* 156 */ { "x" : 0, "y" : 600, "bCoef" : 0, "trait" : "kickOffBarrier" },
		/* 157 */ { "x" : 0, "y" : -180, "bCoef" : 0, "trait" : "kickOffBarrier" },
		/* 158 */ { "x" : 0, "y" : -600, "bCoef" : 0, "trait" : "kickOffBarrier" },
		/* 159 */ { "x" : 0, "y" : -180, "bCoef" : 0, "trait" : "kickOffBarrier", "curve" : 180 },
		/* 160 */ { "x" : 0, "y" : 180, "bCoef" : 0, "trait" : "kickOffBarrier", "curve" : 180 },
		/* 161 */ { "x" : 0, "y" : -180, "bCoef" : 0, "trait" : "kickOffBarrier", "curve" : 180 },
		/* 162 */ { "x" : 0, "y" : 180, "bCoef" : 0, "trait" : "kickOffBarrier", "curve" : 180 },
		/* 163 */ { "x" : 0, "y" : 600, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 164 */ { "x" : 0, "y" : 670, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 165 */ { "x" : 0, "y" : -670, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 166 */ { "x" : 0, "y" : -600, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false }

	],

	"segments" : [
		{ "v0" : 1, "v1" : 2, "curve" : 0, "color" : "ffffff", "trait" : "goalNet", "bias" : 12, "y" : -110 },
		{ "v0" : 3, "v1" : 4, "curve" : 0, "color" : "ffffff", "trait" : "goalNet", "bias" : 12, "y" : 110 },
		{ "v0" : 5, "v1" : 6, "curve" : 0, "color" : "ffffff", "trait" : "goalNet", "bias" : -12, "y" : -110 },
		{ "v0" : 7, "v1" : 8, "curve" : 0, "color" : "ffffff", "trait" : "goalNet", "bias" : -12, "y" : 110 },
		
		{ "v0" : 11, "v1" : 12, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -600 },
		{ "v0" : 27, "v1" : 28, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 600 },
		
		{ "v0" : 39, "v1" : 40, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 41, "v1" : 42, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 43, "v1" : 44, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 45, "v1" : 46, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 47, "v1" : 48, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 49, "v1" : 50, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 51, "v1" : 52, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 53, "v1" : 54, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 55, "v1" : 56, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.9681483400014 },
		{ "v0" : 57, "v1" : 58, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 59, "v1" : 60, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 61, "v1" : 62, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 63, "v1" : 64, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 65, "v1" : 66, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 68, "v1" : 67, "curve" : -90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 70, "v1" : 69, "curve" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 72, "v1" : 71, "curve" : -90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 74, "v1" : 73, "curve" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 75, "v1" : 76, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 77, "v1" : 78, "curve" : -90, "vis" : true, "color" : "ff6363", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 81, "v1" : 80, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 80, "v1" : 81, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 83, "v1" : 82, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 82, "v1" : 83, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 85, "v1" : 84, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 84, "v1" : 85, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 87, "v1" : 86, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 86, "v1" : 87, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 89, "v1" : 88, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 88, "v1" : 89, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 91, "v1" : 90, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 90, "v1" : 91, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 93, "v1" : 92, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 92, "v1" : 93, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 95, "v1" : 94, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 94, "v1" : 95, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 96, "v1" : 97, "curve" : -197.38121949057748, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 97, "v1" : 96, "curve" : -213.29219661707097, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 98, "v1" : 99, "curve" : -197.38121949057748, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 99, "v1" : 98, "curve" : -213.29219661707097, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		
		{ "v0" : 3, "v1" : 2, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "goalNet" },
		{ "v0" : 7, "v1" : 6, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "goalNet", "bias" : 12 },
		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : false, "color" : "e0d5d6", "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "bias" : 12, "x" : -1252 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "x" : 1252 },
		
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "ff3030", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 122, "v1" : 123, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 78, "v1" : 124, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line", "y" : -470 },
		{ "v0" : 79, "v1" : 125, "curve" : 90, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line", "y" : 470 },
		{ "v0" : 127, "v1" : 128, "curve" : -90, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 131, "v1" : 130, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 130, "v1" : 131, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 133, "v1" : 132, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 132, "v1" : 133, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 135, "v1" : 134, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 134, "v1" : 135, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 137, "v1" : 136, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 136, "v1" : 137, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 128, "v1" : 138, "curve" : 0, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "trait" : "line", "y" : -470 },
		{ "v0" : 129, "v1" : 139, "curve" : 90, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 139, "v1" : 140, "curve" : 0, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "trait" : "line", "y" : 470 },
		{ "v0" : 142, "v1" : 141, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 141, "v1" : 142, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 144, "v1" : 143, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 143, "v1" : 144, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 146, "v1" : 145, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 145, "v1" : 146, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 148, "v1" : 147, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 147, "v1" : 148, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 149, "v1" : 150, "curve" : -197.38121949057748, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 150, "v1" : 149, "curve" : -213.29219661707097, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 151, "v1" : 152, "curve" : -197.38121949057748, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 152, "v1" : 151, "curve" : -213.29219661707097, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 127, "v1" : 129, "curve" : 0, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "trait" : "line" },
		
		{ "v0" : 34, "v1" : 106, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : -12 },
		{ "v0" : 36, "v1" : 111, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12 },
		{ "v0" : 28, "v1" : 116, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12 },
		{ "v0" : 30, "v1" : 121, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : -12 },
		
		{ "v0" : 42, "v1" : 41, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 41, "v1" : 153, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 42, "v1" : 154, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		
		{ "v0" : 155, "v1" : 156, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 157, "v1" : 158, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 159, "v1" : 160, "curve" : -180, "vis" : true, "color" : "b3b6b6", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 161, "v1" : 162, "curve" : 180, "vis" : true, "color" : "b3b6b6", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 163, "v1" : 164, "curve" : 0, "vis" : false, "color" : "b3b6b6", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 165, "v1" : 166, "curve" : 0, "vis" : false, "color" : "b3b6b6", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0 }

	],

	"goals" : [
		{ "p0" : [1208.75,109 ], "p1" : [1208.75,-109 ], "team" : "blue" },
		{ "p0" : [-1208.75,109 ], "p1" : [-1208.75,-109 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "${PelotaFutsal}", "bCoef" : 0.35, "cGroup" : ["ball","kick","score" ], "damping" : 0.99 },

		{"pos":[-5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[0,-5],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[-3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"radius":1.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		
		{ "radius" : 6, "pos" : [1200,110 ], "color" : "33b4ff", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1200,-110 ], "color" : "33b4ff", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,110 ], "color" : "ff3030", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-110 ], "color" : "ff3030", "trait" : "goalPost", "_selected" : true },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,600 ], "color" : "ffff00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,-600 ], "color" : "ffff00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 4, "invMass" : 0, "pos" : [1200,-600 ], "color" : "ffff00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 4, "invMass" : 0, "pos" : [1200,600 ], "color" : "ffff00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,-1 ], "dist" : -600, "bCoef" : 1, "trait" : "ballArea", "curve" : 0 },
		{ "normal" : [0,1 ], "dist" : -600, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		
		{ "normal" : [1,0 ], "dist" : -1275, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -675, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -675, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1275, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -1250, "bCoef" : 0.1, "trait" : "ballArea" },
		{ "normal" : [-1,0 ], "dist" : -1250, "bCoef" : 0.1, "trait" : "ballArea" }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5.2,
		"bCoef" : 0,
		"radius" : 15,
		"invMass" : 0.5,
		"damping" : 0.96,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0
		],
		"kickingDamping" : 0.96,
		"kickback" : 0

	},

	"ballPhysics" : "disc0",
"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]
}`;
	RSRMap = false;
	return Futx7Map;
}



function getFutx5Map() {
	var Futx5Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁵ 🏆 𝗚𝗟𝗛",

	"width" : 1080,

	"height" : 532,

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "2a3a40" },



	"redSpawnPoints" : [
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -311.4602437113554, 503
		]

	],

	"blueSpawnPoints" : [
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 311.4602437113554, 503
		]

	],

	"vertexes" : [
		/* 0 */ { "x" : 951.6840780069193, "y" : 460, "trait" : "ballArea" },
		/* 1 */ { "x" : 951.6840780069193, "y" : -460, "trait" : "ballArea" },
		
		/* 2 */ { "x" : 0, "y" : 547.606262899369, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 154.2553022744116, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -152.50026287232396, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -545.8512234972814, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "x" : -951.6840780069193, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 7 */ { "x" : -990, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 8 */ { "x" : -990, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 9 */ { "x" : -951.6840780069193, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 10 */ { "x" : 951.6840780069193, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 990, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 990, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 951.6840780069193, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		
		/* 14 */ { "x" : -950, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,80 ] },
		/* 15 */ { "x" : -950, "y" : 460, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 16 */ { "x" : -950, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,-80 ] },
		/* 17 */ { "x" : -950, "y" : -460, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 18 */ { "x" : -951.6840780069193, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 19 */ { "x" : 951.6840780069193, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 20 */ { "x" : 950, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "color" : "b3b6b6" },
		/* 21 */ { "x" : 950, "y" : 460, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 22 */ { "x" : 950, "y" : -460, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 23 */ { "x" : 950, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 951.6840780069193, "y" : -460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 951.6840780069193, "y" : -460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -951.6840780069193, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 27 */ { "x" : 951.6840780069193, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		
		/* 28 */ { "x" : 0, "y" : -460, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 29 */ { "x" : 0, "y" : -152.50026287232396, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 30 */ { "x" : 0, "y" : 154.2553022744116, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 31 */ { "x" : 0, "y" : 460, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 32 */ { "x" : 0, "y" : -152.50026287232396, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 33 */ { "x" : 0, "y" : 154.2553022744116, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 34 */ { "x" : 0, "y" : 154.2553022744116, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -152.50026287232396, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 154.2553022744116, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -152.50026287232396, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		
		/* 38 */ { "x" : -958, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },
		/* 39 */ { "x" : -958, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -958, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -958, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },
		/* 42 */ { "x" : 959.999, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 959.999, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 959.99, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 959.99, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		
		/* 46 */ { "x" : 0, "y" : -152.50026287232396, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 47 */ { "x" : 0, "y" : 154.2553022744116, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : -950, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 49 */ { "x" : -950, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 50 */ { "x" : 950, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 51 */ { "x" : 950, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 52 */ { "x" : -950, "y" : 384.3219761344632, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : -90 },
		/* 53 */ { "x" : -674.83052804127, "y" : 135.0830794527406, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 54 */ { "x" : -950, "y" : 434.16975547080773, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 55 */ { "x" : -927.4593923849251, "y" : 460, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 56 */ { "x" : -950, "y" : -382.5669367323756, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 90 },
		/* 57 */ { "x" : -674.83052804127, "y" : -133.328040050653, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 58 */ { "x" : -950, "y" : -432.4147160687201, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 59 */ { "x" : -927.4593923849251, "y" : -460, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 60 */ { "x" : -659.2575158557021, "y" : -460, "bCoef" : 0.1, "trait" : "line", "color" : "00ff00" },
		/* 61 */ { "x" : 950, "y" : -432.4147160687201, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 62 */ { "x" : 927.4593923849251, "y" : -460, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 63 */ { "x" : 950, "y" : 434.16975547080773, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 64 */ { "x" : 927.4593923849251, "y" : 460, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 65 */ { "x" : 950, "y" : 384.3219761344632, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 66 */ { "x" : 674.83052804127, "y" : 135.0830794527406, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 67 */ { "x" : 950, "y" : -382.5669367323756, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 68 */ { "x" : 674.83052804127, "y" : -133.328040050653, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 69 */ { "x" : 674.83052804127, "y" : 135.0830794527406, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 70 */ { "x" : 674.83052804127, "y" : -133.328040050653, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 71 */ { "x" : -648.8755077319904, "y" : 2.7947419832109137, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 72 */ { "x" : -648.8755077319904, "y" : -1.03970258112328, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 73 */ { "x" : -648.8755077319904, "y" : 6.629186547545109, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 74 */ { "x" : -648.8755077319904, "y" : -4.874147145457474, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 75 */ { "x" : -648.8755077319904, "y" : -2.9569248632903777, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 76 */ { "x" : -648.8755077319904, "y" : 4.711964265378011, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 77 */ { "x" : -648.8755077319904, "y" : -5.832758286541022, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 78 */ { "x" : -648.8755077319904, "y" : 7.5877976886286564, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 79 */ { "x" : 648.8755077319904, "y" : 2.7947419832109137, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 80 */ { "x" : 648.8755077319904, "y" : -1.03970258112328, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 81 */ { "x" : 648.8755077319904, "y" : 6.629186547545109, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 82 */ { "x" : 648.8755077319904, "y" : -4.874147145457474, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 83 */ { "x" : 648.8755077319904, "y" : -2.9569248632903777, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 84 */ { "x" : 648.8755077319904, "y" : 4.711964265378011, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 85 */ { "x" : 648.8755077319904, "y" : -5.832758286541022, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 86 */ { "x" : 648.8755077319904, "y" : 7.5877976886286564, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 87 */ { "x" : -480.1678757216728, "y" : 2.7947419832109137, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 88 */ { "x" : -480.1678757216728, "y" : -1.03970258112328, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 89 */ { "x" : -480.1678757216728, "y" : 6.629186547545109, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 90 */ { "x" : -480.1678757216728, "y" : -4.874147145457474, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 91 */ { "x" : -480.1678757216728, "y" : -2.9569248632903777, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 92 */ { "x" : -480.1678757216728, "y" : 4.711964265378011, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 93 */ { "x" : -480.1678757216728, "y" : -5.832758286541022, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 94 */ { "x" : -480.1678757216728, "y" : 7.5877976886286564, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 95 */ { "x" : 480.1678757216728, "y" : 2.7947419832109137, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 96 */ { "x" : 480.1678757216728, "y" : -1.03970258112328, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 97 */ { "x" : 480.1678757216728, "y" : 6.629186547545109, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 98 */ { "x" : 480.1678757216728, "y" : -4.874147145457474, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 99 */ { "x" : 480.1678757216728, "y" : -2.9569248632903777, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 100 */ { "x" : 480.1678757216728, "y" : 4.711964265378011, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 101 */ { "x" : 480.1678757216728, "y" : -5.832758286541022, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 102 */ { "x" : 480.1678757216728, "y" : 7.5877976886286564, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 103 */ { "x" : -415.28032494847383, "y" : 430.33531090647347, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 104 */ { "x" : -415.28032494847383, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 105 */ { "x" : -207.64016247423692, "y" : 430.33531090647347, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 106 */ { "x" : -207.64016247423692, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 107 */ { "x" : 415.28032494847383, "y" : 430.33531090647347, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 108 */ { "x" : 415.28032494847383, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 109 */ { "x" : 207.64016247423692, "y" : 430.33531090647347, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 110 */ { "x" : 207.64016247423692, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 111 */ { "x" : -659.2575158557021, "y" : 460, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 112 */ { "x" : -659.2575158557021, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 113 */ { "x" : -962.0660861306311, "y" : 236.6958604075968, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 114 */ { "x" : -994.9424451890517, "y" : 236.6958604075968, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 115 */ { "x" : 962.0660861306311, "y" : 236.6958604075968, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 116 */ { "x" : 994.9424451890517, "y" : 236.6958604075968, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 117 */ { "x" : -962.0660861306311, "y" : -234.94082100550915, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 118 */ { "x" : -994.9424451890517, "y" : -234.94082100550915, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 119 */ { "x" : 962.0660861306311, "y" : -234.94082100550915, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 120 */ { "x" : 994.9424451890517, "y" : -234.94082100550915, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 121 */ { "x" : -659.2575158557021, "y" : -460, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 122 */ { "x" : -659.2575158557021, "y" : -489.9313845337331, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 123 */ { "x" : 659.2575158557021, "y" : 460, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 124 */ { "x" : 659.2575158557021, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 125 */ { "x" : 659.2575158557021, "y" : -460, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 126 */ { "x" : 659.2575158557021, "y" : -489.9313845337331, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		
		/* 127 */ { "x" : 953.81880822316, "y" : -460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 128 */ { "x" : 953.81880822316, "y" : -90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ], "vis" : false },
		/* 129 */ { "x" : 953.81880822316, "y" : 90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "vis" : false },
		/* 130 */ { "x" : 953.81880822316, "y" : 460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 131 */ { "x" : -953.81880822316, "y" : 90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ], "vis" : false, "curve" : 0 },
		/* 132 */ { "x" : -953.81880822316, "y" : 460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false, "curve" : 0 },
		/* 133 */ { "x" : -953.81880822316, "y" : -90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : false, "curve" : 0 },
		/* 134 */ { "x" : -953.81880822316, "y" : -460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false, "curve" : 0 }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -90 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -990 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 90 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -90 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : 990 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 90 },
		
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -950 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -950 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 460 },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 950 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 950 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -460 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -460 },
		
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -958 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -958 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 959.999 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 959.99 },
		
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -950 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 950 },
		{ "v0" : 52, "v1" : 53, "curve" : -97.06816078941904, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 55, "v1" : 54, "curve" : -84.13387356451095, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : 97.0681607894192, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 53, "v1" : 57, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 59, "v1" : 58, "curve" : 84.13387356453157, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 62, "v1" : 61, "curve" : -84.13387356451999, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 64, "v1" : 63, "curve" : 84.13387356453006, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 97.06816078941918, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : -97.06816078941918, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 72, "v1" : 71, "curve" : 180.17291899624044, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 71, "v1" : 72, "curve" : 179.82756939105758, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 74, "v1" : 73, "curve" : 179.4796353292318, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 73, "v1" : 74, "curve" : 180.52486835318774, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 76, "v1" : 75, "curve" : 180.0000000000034, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 75, "v1" : 76, "curve" : 180.0000000000034, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 78, "v1" : 77, "curve" : 180.61174362649447, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 77, "v1" : 78, "curve" : 179.39404591210644, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 80, "v1" : 79, "curve" : 179.82578509754705, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 79, "v1" : 80, "curve" : 180.1738115987488, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 82, "v1" : 81, "curve" : 180.52486835319002, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 81, "v1" : 82, "curve" : 179.48760701172162, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 84, "v1" : 83, "curve" : 179.9999999999966, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 83, "v1" : 84, "curve" : 179.99999999999662, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 86, "v1" : 85, "curve" : 179.4141516159154, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 85, "v1" : 86, "curve" : 180.59125838829175, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 88, "v1" : 87, "curve" : 180.17291899623703, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 87, "v1" : 88, "curve" : 179.82756939106437, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 90, "v1" : 89, "curve" : 179.29450232925146, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 89, "v1" : 90, "curve" : 180.7116035817392, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 92, "v1" : 91, "curve" : 179.9999999999966, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 94, "v1" : 93, "curve" : 179.39085009654522, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 93, "v1" : 94, "curve" : 180.5935953836746, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 96, "v1" : 95, "curve" : 179.82578509754364, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 95, "v1" : 96, "curve" : 180.17381159872505, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 98, "v1" : 97, "curve" : 180.71160358173813, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 97, "v1" : 98, "curve" : 179.3053100193775, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 100, "v1" : 99, "curve" : 180.0000000000034, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180.6267415347291, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 179.39085009654622, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 109, "v1" : 110, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 111, "v1" : 112, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 121, "v1" : 122, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		
		{ "v0" : 127, "v1" : 128, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 953.81880822316 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 953.81880822316 },
		{ "v0" : 131, "v1" : 132, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -953.81880822316, "curve" : 0 },
		{ "v0" : 133, "v1" : 134, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -953.81880822316, "curve" : 0 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -460, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -460, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -545.8512234972814, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -547.606262899369, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1072.8075061168906, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1072.8075061168906, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -1072.8075061168906, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1072.8075061168906, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"goals" : [
		{ "p0" : [-958.95,-90 ], "p1" : [-958.95,90 ], "team" : "red" },
		{ "p0" : [958.95,90 ], "p1" : [958.95,-90 ], "team" : "blue" }

	],

	"discs" : [
		{"radius":6.4,"color":"${PelotaFutsal}","bCoef":0.4,"invMass":1.5,"damping":0.99,"cGroup":["ball","kick","score"]},
		{"pos":[-5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[0,-5],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[-3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"pos":[3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{"radius":1.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
		{ "radius" : 5, "pos" : [-950,90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 90 },
		{ "radius" : 5, "pos" : [-950,-90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -90, "x" : -560 },
		{ "radius" : 5, "pos" : [950,91 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 90 },
		{ "radius" : 5, "pos" : [950,-90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -90 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-950,460 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "y" : 460 },
		{ "radius" : 3, "invMass" : 0, "pos" : [-950,-460 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "y" : -460 },
		{ "radius" : 3, "invMass" : 0, "pos" : [950,-460 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "y" : -460 },
		{ "radius" : 3, "invMass" : 0, "pos" : [950,460 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "y" : 460 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

"ballPhysics":"disc0",

"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]
}`;
	RSRMap = false;
	return Futx5Map;
}





/*------------------------------ END OF STADIUMS ----------------------------*/

function whichTeam(){ // gives the players in the red or blue team
    var players = room.getPlayerList();
    var redTeam = players.filter(player => player.team == 1);
    var blueTeam = players.filter(player => player.team == 2);
    return [redTeam, blueTeam]
}






var roomName = NombreHost;
var roomPassword = ClaveParaSerAdmin;
var maxPlayers = CantidadDeJugadores;
var roomPublic = VisibilidadDelHost;
var roomLink = "";
var gameTime = TiempoDeJuego; // Tiempo de juego predeterminado si se selecciona 0
var map = "RSR";


var latitud = countryCoords[UbicacionDelHost] ? countryCoords[UbicacionDelHost][0] : null;
var longitud = countryCoords[UbicacionDelHost] ? countryCoords[UbicacionDelHost][1] : null;
var codigoBandera = codigosBanderas[BanderaDelHost] ? codigosBanderas[BanderaDelHost] : null;

var geoConfig = {};

// Comprobamos que todas las variables necesarias están definidas
if (UbicacionDelHost !== "myubication" && latitud !== null && longitud !== null && codigoBandera !== null) {
    geoConfig = {
        code: codigoBandera,
        lat: latitud,
        lon: longitud
    };
} else {
    console.warn("Usando configuración de geolocalización por defecto.");
}

// Crear la sala solo si geoConfig es válido
try {
    var roomConfig = {
        roomName: NombreHost,
        password: PasswordDelHost,
        maxPlayers: maxPlayers,
        public: roomPublic,
    	playerName: NombreBot,
   	noPlayer: !BotVisible
    };

    // Agregar geoConfig solo si es válido
    if (UbicacionDelHost !== "myubication" && latitud !== null && longitud !== null && codigoBandera !== null) {
        roomConfig.geo = geoConfig;
    }

    var room = HBInit(roomConfig);
    console.log("Sala creada exitosamente");
} catch (error) {
    console.error("Error al crear la sala:", error);
}


class Game {
	constructor() {
		this.time = 0;
		this.paused = false;
		this.ballRadius;
		this.rsTouchTeam = 0;
		this.rsActive = true;
		this.rsReady = false;
		this.rsCorner = false;
		this.rsGoalKick = false;
		this.rsSwingTimer = 1000;
		this.rsTimer;
		this.ballOutPositionX;
		this.ballOutPositionY;
		this.throwInPosY;
		this.outStatus = "";
		this.warningCount = 0;
		this.bringThrowBack = false;
		this.extraTime = false;
		this.extraTimeCount = 0;
		this.extraTimeEnd;
		this.extraTimeAnnounced = false;
		this.lastPlayAnnounced = false;
		this.boosterState;
		this.throwinKicked = false;
		this.pushedOut;
		this.lastKickerId;
		this.lastKickerName;
		this.lastKickerTeam;
		this.secondLastKickerId;
		this.secondLastKickerName;
		this.secondLastKickerTeam;
		this.redScore = 0;
		this.blueScore = 0;
		this.powershotCounter = 0;
		this.powershotID = 0;
		this.powershotTrigger = false;
	}
	
	updateLastKicker(id, name, team) {
		this.secondLastKickerId = this.lastKickerId;
		this.secondLastKickerName = this.lastKickerName;
		this.secondLastKickerTeam = this.lastKickerTeam;
		
		this.lastKickerId = id;
		this.lastKickerName = name;
		this.lastKickerTeam = team;
	}
}




var ArqueroRED = null;  // Variable para almacenar al arquero del equipo Rojo
var ArqueroBLUE = null;  // Variable para almacenar al arquero del equipo Azul


function setDefaultStadium() {
    switch (MapaPorDefecto) {
        case "Futsal x2":
            room.setCustomStadium(getFutx2Map());
            break;
        case "Futsal x3":
            room.setCustomStadium(getFutx3Map());
            break;
        case "Futsal x4":
            room.setCustomStadium(getFutx4Map());
            break;
        case "Futsal x5":
            room.setCustomStadium(getFutx5Map());
            break;
        case "Futsal x5 cesped":
            room.setCustomStadium(getFutx5cespedMap());
            break;
        case "Futsal x7":
            room.setCustomStadium(getFutx7Map());
            break;
        case "Real Futsal":
            room.setCustomStadium(getRealFutsal());
            break;

        case "Campeones":
            room.setCustomStadium(getCampeonesMap());
            break;
        case "Premios":
            room.setCustomStadium(getPremiosMap());
            break;
        // Puedes agregar más casos para otros mapas si lo deseas
        default:
            // Si la variable MapaPorDefecto no coincide con ningún caso, no se cambia el mapa
            break;
    }
}

// Función para enviar un mensaje al canal de Discord cuando un jugador es kickeado o baneado
function enviarMensajeExpulsion(playerName, expulsionType, motivo, expulsor) {
    // Emojis
    const banEmoji = "❌ Ban";
    const kickEmoji = "⚠️ Kick";
    const reasonEmoji = "📑";
    const byEmoji = "👮‍♂️";

    // Crear objeto con formato de mensaje embed
    const embedMessage = {
        embeds: [
            {
                title: "📋 Registro de Kicks y Bans 🔍",
                description: `**🚷👤 Jugador Echado:** ${playerName}\n**Tipo de Expulsión:** ${expulsionType === 'baneado' ? banEmoji : kickEmoji}`,
                color: expulsionType === 'baneado' ? 0xFF0000 : 0xFFA500, // Color rojo para baneos, naranja para kicks
                fields: [],
                footer: {
                    text: `${byEmoji} Expulsado por: ${expulsor}`
                }
            }
        ]
    };

    // Agregar campo de motivo si está presente
    if (motivo) {
        embedMessage.embeds[0].fields.push({
            name: `${reasonEmoji} Motivo`,
            value: motivo
        });
    }

    // Enviar mensaje usando el webhook
    const webhook = new XMLHttpRequest();
    webhook.open('POST', AnuncioKicksBans);

    webhook.setRequestHeader('Content-Type', 'application/json');

    webhook.send(JSON.stringify(embedMessage));
}




// Variables para llevar el seguimiento de goles, tiempo atajando y vallas invictas
var golesRecibidosRED = 0;
var golesRecibidosBlue = 0;
var tiempoAtajandoRED = 0;
var tiempoAtajandoBlue = 0;
var vallasInvictasRED = 0;
var vallasInvictasBlue = 0;
let autoBalancePaused = false; // Variable para controlar si la función autoBalanceTeams está pausada



room.setTeamsLock(true);
function parseColors(colorString) {
    let parts = colorString.split(' ');

    let angle = parseInt(parts[2]);
    let textColor = parseInt(parts[3], 16);
    let colors = parts.slice(4).map(color => parseInt(color, 16));

    return {
        angle: angle,
        textColor: textColor,
        colors: colors
    };
}

// Función para enviar la IP a Discord cuando un jugador se retira
function sendIPToDiscord(player) {
    // Obtiene la IP del jugador que se retiró
    const playerInfo = playerIPs.find(info => info.nickname === player.name);

    // Si se encuentra la IP, enviamos un mensaje al webhook de Discord
    if (playerInfo) {
        const embed = {
            embeds: [
                {
                    title: `⛔ El jugador "${player.name}" se ha retirado del host 🌐`,
                    description: `🔐📶 IP de **${player.name}**: \`${playerInfo.ip}\``,
                    color: 0xFF5733, // Color del embed
                    timestamp: new Date().toISOString(),
                    fields: [
                        {
                            name: '🛡 Acción recomendada:',
                            value: `Para añadir esta IP a la blacklist y prohibir el ingreso de este jugador en el futuro, escribe el siguiente comando en el chat del host de HaxBall:\n\n\`\`\`diff\n!banip ${playerInfo.ip}\n\`\`\`\n\nEste comando evitará que el jugador con esta IP ingrese a la sala nuevamente.`,
                        },
                    ],
                    footer: {
                        text: '🔒 Información confidencial',
                    },
                },
            ],
        };

        // Enviar el mensaje al webhook de Discord
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(embed),
        };

        // Realizar la solicitud HTTP al webhook
        fetch(webhookIPJugadores, requestOptions);
    }
}


var salaCerrada = false; // Variable para rastrear si la sala está cerrada

function verificarEspaciosDisponibles() {
    var jugadoresEnSala = room.getPlayerList().filter(p => p.id !== 0); // Filtra la lista para obtener solo los jugadores en la sala
    var cantidadJugadores = jugadoresEnSala.length;
    var hayAdministrador = jugadoresEnSala.some(p => AdministradoresDelHost.includes(p.name));
    var espaciosDisponibles = roomConfig.maxPlayers - cantidadJugadores;

    if (espaciosDisponibles === 1 && !hayAdministrador && !salaCerrada) {
        room.setPassword(contrasena); // Establecer la contraseña para reservar el espacio
        room.sendAnnouncement("🔒 La sala ha sido cerrada para reservar un lugar a los administradores.", null, 0xFF0000, "bold", 2);
        salaCerrada = true; // Actualizar el estado a 'cerrada'
    } else if ((espaciosDisponibles > 1 || hayAdministrador) && salaCerrada) {
        room.setPassword(null); // Quitar la contraseña
        room.sendAnnouncement("🔓 La sala ha sido abierta. Ya no se reserva un lugar para los administradores.", null, 0x00FF00, "bold", 2);
        salaCerrada = false; // Actualizar el estado a 'abierta'
    }
}


// Parses de las cadenas para obtener los datos correspondientes
var redData = parseColors(camisetaRed);
var blueData = parseColors(camisetaBlue);

// Asignación a variables específicas para cada equipo
var redAngle = redData.angle;
var blueAngle = blueData.angle;

var redTextColor = redData.textColor;
var blueTextColor = blueData.textColor;

var redColor = redData.colors;
var blueColor = blueData.colors;

// Establecer colores para el equipo rojo y azul
room.setTeamColors(1, redAngle, redTextColor, redColor);
room.setTeamColors(2, blueAngle, blueTextColor, blueColor);

teamRed = NombreEquipoRojo
teamBlue = NombreEquipoAzul
setDefaultStadium();
room.setScoreLimit(LimiteDeGoles);
room[_0x3c81f9(0x1a8)](TiempoDeJuego), room[_0x3c81f9(0x1cb)] = function (_0xde760) {
	var _0x56cb2d = _0x3c81f9;
	roomLink = _0xde760, console[_0x56cb2d(0x136)](roomLink);
}, room[_0x3c81f9(0x1bc)] = function (_0x1dd3ba, _0x5b2bac) {

	var _0x2c1a33 = _0x3c81f9;
	_0x5b2bac != null ? map = _0x2c1a33(0x1b7) : map = _0x2c1a33(0x1ca);
}, setInterval(function (_0x1b3d6f, _0x551b76) {
	var _0xd1b3a4 = _0x3c81f9;
	room[_0xd1b3a4(0x1d2)](_0xd1b3a4(0x1ab), _0x1b3d6f['id'], 0xffda82, _0xd1b3a4(0x1d6), 0x2), room[_0xd1b3a4(0x1d2)](_0xd1b3a4(0x180), _0x1b3d6f['id'], 0xffda82, _0xd1b3a4(0x1d6), 0x0);
}, 0x927c0);
var webhookID = _0x3c81f9(0x1b8);
room[_0x3c81f9(0x12f)] = function (_0x4a7fbc) {
	var _0x9060eb = _0x3c81f9,
		_0x436097 = {};
	_0x436097[_0x9060eb(0x1b1)] = '**' + _0x4a7fbc[_0x9060eb(0x161)] + ' -** [' + _0x4a7fbc[_0x9060eb(0x1c1)] + _0x9060eb(0x155) + _0x4a7fbc[_0x9060eb(0x1cd)] + ']', _0x436097['username'] = 'Real Soccer Revolution';
	var _0x275f9e = {};
	_0x275f9e['Content-Type'] = _0x9060eb(0x130);
	var _0x338ced = {};
	_0x338ced['method'] = _0x9060eb(0x175), _0x338ced[_0x9060eb(0x1b2)] = JSON[_0x9060eb(0x141)](_0x436097), _0x338ced[_0x9060eb(0x1bf)] = _0x275f9e, fetch(webhookID, _0x338ced)['then'](_0x169fd3 => _0x169fd3), whisper(_0x9060eb(0x131), _0x4a7fbc['id'], 0x61b3ff, _0x9060eb(0x17a), 0x0), whisper(_0x9060eb(0x137), _0x4a7fbc['id'], 0x61c5ff, 'bold', 0x0), whisper(_0x9060eb(0x1a4), _0x4a7fbc['id'], 0x61cdff, _0x9060eb(0x17a), 0x0), whisper(_0x9060eb(0x1c5), _0x4a7fbc['id'], 0x61ddff, _0x9060eb(0x17a), 0x0), whisper(_0x9060eb(0x151), _0x4a7fbc['id'], 0x61e7ff, _0x9060eb(0x17a), 0x0), displayAdminMessage();
}, room.onPlayerLeave = function(player) {
    // Llamamos a la función para enviar la IP al webhook
    sendIPToDiscord(player);
// Comando !avatar
    if (avatarIntervals[player.id]) {
        clearInterval(avatarIntervals[player.id]);
        delete avatarIntervals[player.id];
    }
  verificarEspaciosDisponibles();
    // Verificar si el jugador dejó la sala por ser expulsado
    if (player && room.getPlayer(player.id) && player.id !== room.getPlayer(player.id).id) {
        const expulsionType = room.isPlayerBanned(player.id) ? 'baneado' : 'kickeado';
        enviarMensajeExpulsion(player.name, expulsionType, null, 'Sistema');
    }

const totalPlayers = room.getPlayerList().length;
const NombreDelJugadorNickname = player.name;



// Verifica si el nombre del jugador contiene "@" "#", o "*"
if (!containsInvalidCharacters(NombreDelJugadorNickname)) {
  let message = `➡️🚪 ${NombreDelJugadorNickname} se ha ido del host -- ${totalPlayers}/${maxPlayers} 👋`;

  // Si no está llena la sala, muestra cuántos lugares quedan
  if (totalPlayers < maxPlayers) {
    const remainingSpots = maxPlayers - totalPlayers;

    // Verifica si queda solo 1 lugar
    if (remainingSpots === 1) {
      message += `\n\n**[🟢] QUEDA 1 LUGAR**`;
    } else {
      message += `\n\n**[🟢] QUEDAN ${remainingSpots} LUGARES**`;
    }
  }


  // Añadir estado de la sala (cerrada o abierta)
  if (salaCerrada) {
    message += `\n\n**🔒 La sala está momentáneamente con contraseña para reservarles el lugar a los administradores.**`;
  }

  // Verifica si el host tiene contraseña
  if (PasswordDelHost !== null && PasswordDelHost !== "") {
    message += `\n\n**🔒 ESTE HOST TIENE CONTRASEÑA**`;
  } else {
    message += `\n\n**🌍 HOST PÚBLICO**`;
  }

  sendBoleteroToDiscord(message, roomName, roomLink, 16711680); // Color rojo en formato decimal
}



  // Verificar si el jugador que se fue había votado y eliminar su voto
  for (const votedMap in mapVotes) {
    const index = mapVotes[votedMap].indexOf(player.id);
    if (index !== -1) {
      mapVotes[votedMap].splice(index, 1);
      room.sendAnnouncement(`[❌] ${player.name} ha abandonado el juego. Su voto por el mapa "${votedMap}" ha sido eliminado. (${mapVotes[votedMap].length} votos restantes).`, null, 0xff1759, 'bold', 1);
      room.sendAnnouncement(`🗳️ VOTOS REALIZADOS: ${getVoteResultsString()} | ⏳ VOTOS RESTANTES: ${getRemainingVotes()}`, null, 0xFFB600, 'bold', 1);
    }
  }
    if (automatizadoActivado) {
        activarModoAutomatizado();
    }
  if (room.getPlayerList().length >= MIN_PLAYERS_FOR_ADMIN_VOTE) {
    updateAdminVotesNeeded();
  }
  if (room.getPlayerList().length >= MIN_PLAYERS_FOR_KICK_VOTE) {
    updateKickVotesNeeded();
  }
    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ➡️ " + player.name + " [" + player.id + "] has left.");

    DeletePlayer(player.id);
	connections = connections.filter(a => a[0] !== player.id);
	displayAdminMessage();
}


function checkAttempts(byPlayer) {
    if (!AdministradoresDelHost.includes(byPlayer.name)) {
        var playerId = byPlayer.id;

        // Verificar y actualizar el estado de cooldown
        if (cooldownActive[playerId] && cooldownActive[playerId] > Date.now()) {
            // Si está en cooldown y aún no ha expirado, baneamos al administrador
            room.kickPlayer(playerId, "Baneado por abuso de kicks/bans durante cooldown", true);
            return;
        }

        if (!kickBanAttempts[playerId]) {
            kickBanAttempts[playerId] = [];
        }
        kickBanAttempts[playerId].push(Date.now());
        // Filtrar intentos que estén fuera del intervalo de tiempo
        kickBanAttempts[playerId] = kickBanAttempts[playerId].filter(attempt => Date.now() - attempt <= interval);

        if (kickBanAttempts[playerId].length > maxAttempts) {
            // Excedió el número máximo permitido de intentos en el intervalo de tiempo
            if (cooldownActive[playerId] && cooldownActive[playerId] <= Date.now()) {
                // Si el cooldown ha expirado, reseteamos los intentos
                kickBanAttempts[playerId] = [];
                cooldownActive[playerId] = undefined;
            } else {
                // Activar cooldown y advertir
                room.sendAnnouncement("¡Advertencia! Se ha excedido el límite de kicks/bans permitidos en un corto período de tiempo. Si continúas serás baneado.", playerId, 0xFF0000);
                cooldownActive[playerId] = Date.now() + cooldownTime;
                return;
            }
        }

        // Verificar umbral de alerta
        if (kickBanAttempts[playerId].length > alertThreshold && !cooldownActive[playerId]) {
            room.sendAnnouncement("¡Alerta! Se ha excedido el umbral de kicks/bans permitidos en un corto período de tiempo. Si continúas serás baneado.", playerId, 0xFFA500);
        }
    }
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
    if (ban && AdministradoresDelHost.includes(kickedPlayer.name)) {
        // Limpiar los bans de la sala
        room.clearBans();
        // Banear al admin que realizó el ban después de medio segundo
        setTimeout(() => {
            room.kickPlayer(byPlayer.id, "🚫 Baneado por banear a un admin del host 🚫", true);
        }, 500); // 500 ms de retraso
    }
    if (kickedPlayer) {
        const playerName = kickedPlayer.name || "Jugador Desconocido";
        const expulsionType = ban ? 'baneado' : 'kickeado';
        const byPlayerName = byPlayer ? byPlayer.name : "🤖 Sistema";
        enviarMensajeExpulsion(playerName, expulsionType, reason, byPlayerName);
    }
    if (byPlayer) {
        checkAttempts(byPlayer);
    }
}





var roomLink = null;

function sendLinkToDiscord(url) {
    let xhr = new XMLHttpRequest;
    xhr.open("POST", AnuncioHostAbierto),
    xhr.setRequestHeader("Content-type", "application/json");

    let message = {
        avatar_url: "https://cdn.discordapp.com/attachments/1138336866895142983/1233698632000208937/OIG3.jpg?ex=662e0ae2&is=662cb962&hm=610360377d1f5f5f131d2eeae3f92992ce9712516baff3e883850dd3557b542a&",
        username: "HAXHOST",
        content: url
    };

    xhr.send(JSON.stringify(message));
}


   // Obtener el país del host según la configuración
    const countryMapping = {
        argentina: "Argentina 🇦🇷",
        uruguay: "Uruguay 🇺🇾",
        brasil: "Brasil 🇧🇷",
        colombia: "Colombia 🇨🇴",
        chile: "Chile 🇨🇱",
        mexico: "México 🇲🇽",
        bolivia: "Bolivia 🇧🇴",
        peru: "Perú 🇵🇪",
        paraguay: "Paraguay 🇵🇾",
        venezuela: "Venezuela 🇻🇪",
        costa_rica: "Costa Rica 🇨🇷",
        united_states: "Estados Unidos 🇺🇸",
        canada: "Canadá 🇨🇦",
        france: "Francia 🇫🇷",
        spain: "España 🇪🇸",
        italy: "Italia 🇮🇹",
        germany: "Alemania 🇩🇪",
        netherlands: "Países Bajos 🇳🇱",
        portugal: "Portugal 🇵🇹",
        croatia: "Croacia 🇭🇷",
        macedonia: "Macedonia 🇲🇰",
        serbia: "Serbia 🇷🇸",
        poland: "Polonia 🇵🇱",
        ukraine: "Ucrania 🇺🇦",
        russia: "Rusia 🇷🇺",
        marruecos: "Marruecos 🇲🇦",
        united_kingdom: "Reino Unido 🇬🇧",
        turkey: "Turquía 🇹🇷",
        south_korea: "Corea del Sur 🇰🇷",
        japan: "Japón 🇯🇵",
        china: "China 🇨🇳",
        vietnam: "Vietnam 🇻🇳",
        israel: "Israel 🇮🇱",
        myubication: "Geolocalización por Defecto 🌍",
        haxarg: "HAXARG Ú&7 ⭐🧉",
    };

    const countryOfHost = countryMapping[UbicacionDelHost] || "Desconocido";


function containsInvalidCharacters(playerName) {
  // Verifica si el nombre del jugador contiene "@" "#", o "*"
  return playerName.includes('@') || playerName.includes('#') || playerName.includes('*');
}

function sendBoleteroToDiscord(message, roomName, roomLink, color) {
    var request = new XMLHttpRequest();
    request.open("POST", webhookBoletero); // Utiliza la variable con la webhook
    request.setRequestHeader('Content-type', 'application/json');

    // Configuración del Embed
    var params = {
        avatar_url: '',
        username: 'BOLETERO',
        embeds: [
          {
            title: `${roomName}`,
            description: message,
            fields: [
              {
                name: "🔗 LINK DEL HOST:",
                value: roomLink
              }
            ],
            color: color  // Cambiar el color según el parámetro recibido
          }
        ],
        allowed_mentions: { parse: [] }
    };
    
    request.send(JSON.stringify(params));
}


room.onRoomLink = function(url) {

    roomLink = url;

    // Agrega los mensajes adicionales
    let additionalMessage0 =  "\n\n# ``📎 Link`` "
    let additionalMessage1 = "\n\n## ``🌟 Nombre`` " + NombreHost + "\n\n" +
        "## ``📍 Ubicación`` " + countryOfHost; // Agrega más información si es posible, Gracias.
    let additionalMessage2 =  "\n\n" + VersionDelScript


    // Envía el mensaje principal y los mensajes adicionales al canal de Discord
    sendLinkToDiscord(MensajeHostAbierto + ` ||<@&${TagHostAbierto}> ||` + additionalMessage0 + roomLink + additionalMessage1 + additionalMessage2);

}


// Enviar datos (opcional)
function getDate() {
    let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        ano = data.getFullYear(),
        horas = data.getHours().toString().padStart(2, '0'),
        minutos = data.getMinutes().toString().padStart(2, '0');
    return `${dia}-${mes}-${ano}-${horas}h${minutos}m`;
}

// Enviar tiempo (opcional)
function getScoresObjectTime(scores) {
    return Math.floor(Math.floor(scores / 60) / 10).toString() + Math.floor(Math.floor(scores / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores - (Math.floor(scores / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores - (Math.floor(scores / 60) * 60)) % 10).toString();
}

let goalAnnouncementsSum = [];


function getMapName(command) {
  // Utiliza un objeto para mapear los comandos a los nombres de los mapas con emojis
  const mapNames = {
    '!futx2': '⚽ Futsal x2',
    '!futx3': '⚽ Futsal x3',
    '!futx4': '⚽ Futsal x4',
    '!futx5': '⚽ Futsal x5',
    '!futx5cesped': '⚽ Futsal x5 🟢',
    '!futx7': '⚽ Futsal x7',
    '!realfutsal': '⚽ RealFutsal',
    '!premios': '🌟 ɢᴀʟᴀ ᴅᴇ ᴘʀᴇᴍɪᴀᴄɪᴏɴᴇs 🎖️',
    '!campeones': '🏆 CAMPEONES 🌿⭐🌿',
  };

  return mapNames[command] || '🕵️‍♂️ Mapa Desconocido';
}



function getPlayersStats() {
    const red = room.getPlayerList().filter((player) => player.team == 1);
    const blue = room.getPlayerList().filter((player) => player.team == 2);
    const printRed = red.map((player) => { return player.name });
    const printBlue = blue.map((player) => { return player.name });

    const timeRemaining = room.getScores().time;
    if (room.getScores() == null) return false;

    let bluePoss = 0;
    let redPoss = 0;
    ballCarrying.forEach(updateTeamPoss);
    const redPossPercent = Math.round((redPoss / (redPoss + bluePoss + 0.000001)) * 100);
    const bluePossPercent = Math.round((bluePoss / (redPoss + bluePoss + 0.000001)) * 100);
    const totalPosesion = posesionEquipoA + posesionEquipoB;
    const porcentajeEquipoA = totalPosesion === 0 ? 0 : (posesionEquipoA / totalPosesion) * 100;
    const porcentajeEquipoB = totalPosesion === 0 ? 0 : (posesionEquipoB / totalPosesion) * 100;
    const timeOnRedHalf = Math.round((timeOnHalves[0] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    const timeOnBlueHalf = Math.round((timeOnHalves[1] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    const goalAnnouncementsSection = goalAnnouncementsSum.join('\n');

    const admins = room.getPlayerList().filter((player) => player.admin);
    const adminNames = admins.map((admin) => admin.name);
    const adminList = adminNames.length > 0 ? adminNames.join(', ') : 'Sin Administrador';

    const figuraDelPartido2 = getFiguraDelPartido2();

    return { 
        printRed, 
        printBlue, 
        porcentajeEquipoA, 
        porcentajeEquipoB, 
        timeOnRedHalf, 
        timeOnBlueHalf,
        adminList,
        figuraDelPartido2,
        timeRemaining,
        goalAnnouncementsSection
    };
}

function sendDiscordWebhook() {
    const { printRed, printBlue, porcentajeEquipoA, porcentajeEquipoB, timeOnRedHalf, timeOnBlueHalf, adminList, figuraDelPartido2, timeRemaining, goalAnnouncementsSection } = getPlayersStats();

    // Enviar la información del partido
    sendGameInfo(printRed, printBlue, porcentajeEquipoA, porcentajeEquipoB, timeOnRedHalf, timeOnBlueHalf, adminList, figuraDelPartido2, timeRemaining);

    // Esperar 500 milisegundos y luego enviar el resumen del gol como un segundo mensaje
    setTimeout(() => {
        sendGoalAnnouncements();
    }, 500); // 500 milisegundos
}


function sendGameInfo(printRed, printBlue, porcentajeEquipoA, porcentajeEquipoB, timeOnRedHalf, timeOnBlueHalf, adminList, figuraDelPartido2, timeRemaining) {
    const embed = {
        title: "🏆 RESULTADO FINAL:",
	color: 0x00ff77,
        description: `**🟥 ${teamRed} ${room.getScores().red}**\n**🟦 ${teamBlue} ${room.getScores().blue}**`,
        fields: [
            {
                name: `Formación ${teamRed} 🔴`,
                value: printRed.join('\n'),
                inline: true
            },
            {
                name: `Formación ${teamBlue} 🔵`,
                value: printBlue.join('\n'),
                inline: true
            },
            {
                name: "🌟 Figura del partido:",
                value: figuraDelPartido2
            },
            {
                name: "\n\n📊 ESTADÍSTICAS",
                value: `\n\n**⚽️ Posesión de balón:**\n🔴 ${teamRed}: ${porcentajeEquipoA.toFixed(2)}%\n🔵 ${teamBlue}: ${porcentajeEquipoB.toFixed(2)}%\n\n**🔄 Pelota en campo:**\n🔴 ${teamRed}: ${timeOnRedHalf}%\n🔵 ${teamBlue}: ${timeOnBlueHalf}%\n\n⏰ **Tiempo Jugado**: ${getScoresObjectTime(timeRemaining)}`
            },
            {
                name: "\n\n🛠️ CONFIGURACIÓN",
                value: `\n\n🎮 Nombre de la Sala:\n ${NombreHost}\n\n👑 Administradores: ${adminList}\n\n📍 Ubicación del Host: ${countryOfHost}\n\n🔗 Link de la Sala:\n ${roomLink || 'No disponible'}\n\n🏟️ Mapa Colocado: ${currentMap}\n\n⚽️ Límite de Goles: ${room.getScores().scoreLimit}\n\n⏱️ Límite de Tiempo: ${getScoresObjectTime(room.getScores().timeLimit)}`
            }
        ]
    };

    const webhookData = new FormData();
    webhookData.append("payload_json", JSON.stringify({ embeds: [embed] }));

    const webhook = new XMLHttpRequest();
    webhook.open("POST", WebhookGrabaciones);
    webhook.send(webhookData);

    // Espera 80 milisegundos y luego envía el archivo .hbr2
    setTimeout(() => {
        sendHBR2File();
    }, 80);
}

function sendHBR2File() {
    const form = new FormData();
    form.append(
        "archivo",
        new File([room.stopRecording()],
            `HBReplay-${getDate()}.hbr2`,
            { type: "text/plain" }
        )
    );

    const webhookData = new FormData();
    webhookData.append("content", `# 📥🎦 Descargar aquí la repetición del partido 👇`);
    webhookData.append("file", form.get("archivo"));

    const webhook = new XMLHttpRequest();
    webhook.open("POST", WebhookGrabaciones);
    webhook.send(webhookData);
}





function sendGoalAnnouncements() {
    const goalAnnouncementsSection = goalAnnouncementsSum.join('\n');

    const embed = {
        title: "📜 RESUMEN DEL PARTIDO:",
	color: 0x00ff77,
        description: goalAnnouncementsSection

    };

    const webhookData = new FormData();
    webhookData.append("payload_json", JSON.stringify({ embeds: [embed] }));

    const webhook = new XMLHttpRequest();
    webhook.open("POST", WebhookGrabaciones);
    webhook.send(webhookData);
}


// Declarar constantes
const PUNTOS_POR_GOL = 1;
const PUNTOS_POR_ASISTENCIA = 0.7;

// Agregar variables para mantener las estadísticas totales
let totalPlayerGoals = {};
let totalPlayerAssists = {};
let totalPlayerPoints = {};

// Declarar objetos para llevar el registro de puntos por jugador durante el juego actual
let playerGoals = {};
let playerAssists = {};
let playerPoints = {};
let playerGoals2 = {};
let playerAssists2 = {};
let playerPoints2 = {};
let playerFiguraCount = {};

// Función para calcular puntos totales
function calcularPuntosTotales(goals, assists) {
    const puntosPorGol = goals * PUNTOS_POR_GOL;
    const puntosPorAsistencia = assists * PUNTOS_POR_ASISTENCIA;
    return puntosPorGol + puntosPorAsistencia;
}

// Función para actualizar puntos (tanto totales como del juego actual)
function actualizarPuntos(jugador) {
    const CantidadGolesEnElPartido = playerGoals[jugador] || 0;
    const CantidadAsistenciasEnElPartido = playerAssists[jugador] || 0;
    const CantidadGolesTotales = playerGoals2[jugador] || 0;
    const CantidadAsistenciasTotales = playerAssists2[jugador] || 0;
    const points = calcularPuntosTotales(CantidadGolesEnElPartido, CantidadAsistenciasEnElPartido);

    // Actualizar estadísticas totales
    totalPlayerGoals[jugador] = CantidadGolesTotales;
    totalPlayerAssists[jugador] = CantidadAsistenciasTotales;
    totalPlayerPoints[jugador] = points;

    // Actualizar estadísticas del juego actual
    playerPoints[jugador] = points;

    // Actualizar estadísticas totales en localStorage
    localStorage.setItem('totalPlayerGoals', JSON.stringify(totalPlayerGoals));
    localStorage.setItem('totalPlayerAssists', JSON.stringify(totalPlayerAssists));
    localStorage.setItem('totalPlayerPoints', JSON.stringify(totalPlayerPoints));

}

// Modificar la función getFiguraDelPartido para considerar solo estadísticas del juego actual
function getFiguraDelPartido() {
    let figura = "";
    let maxPoints = -1;

    // Iterar sobre los jugadores y encontrar al que tiene más puntos durante el juego actual
    for (const playerName in playerPoints) {
        const points = playerPoints[playerName];

        if (points > maxPoints) {
            maxPoints = points;
            figura = playerName;
        }
    }

    // Incrementar el contador de figura para el jugador seleccionado
    playerFiguraCount[figura] = (playerFiguraCount[figura] || 0) + 1;

    // Almacenar playerFiguraCount en localStorage
    localStorage.setItem('playerFiguraCount', JSON.stringify(playerFiguraCount));

    return figura;
}


function getFiguraDelPartido2() {
    let figura2 = "";
    let maxPoints2 = -1;

    // Iterar sobre los jugadores y encontrar al que tiene más puntos
    for (const playerName in playerPoints) {
        const points2 = playerPoints[playerName];

        if (points2 > maxPoints2) {
            maxPoints2 = points2;
            figura2 = playerName;
        }
    }

    return figura2;
}


function enviarAnuncioFiguraDelPartido(figuraDelPartido) {
    room.sendAnnouncement(`🌟 FIGURA DEL PARTIDO: ${figuraDelPartido}`, null, 0xFFD700, 'bold', 1);
}



var opciones = [
    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xf5b606;
            redColor = [0x011ede, 0xc80056];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "BARCELONA";

            blueAngle = 73;
            blueTextColor = 0x0f2145;
            blueColor = [0xffc10a, 0xffffff, 0xffffff];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "REAL MADRID";
        },
        demanda: 300 // Demanda muy alta
    },
    {
        partido: function () {
            redAngle = 30;
            redTextColor = 0x231f20;
            redColor = [0xffffff, 0xee1b2c, 0xffffff];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "RIVER PLATE";

            blueAngle = 90;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x033f86, 0xfab900, 0x033f86];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "BOCA JRS.";
        },
        demanda: 300 // Alta demanda
    },
    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xffffff;
            redColor = [0xD90119, 0xC7011A, 0xAB0918];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "MANCHESTER UNITED";

            blueAngle = 90;
            blueTextColor = 0xffffff;
            blueColor = [0x95c1e6];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "MANCHESTER CITY";
        },
        demanda: 300 // Alta demanda
    },
    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xFFFFFF;
            redColor = [0xdc052d, 0xed0038, 0xed0038];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "BAYERN  DE MUNICH";

            blueAngle = 90;
            blueTextColor = 0x1d1d1b;
            blueColor = [0x1d1d1b, 0xfad515, 0xfad515];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "BORUSSIA DORTMUND";
        },
        demanda: 150 // Alta demanda
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xffffff;
            redColor = [0xdf061b, 0x000000, 0xdf061b];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "AC MILAN";

            blueAngle = 180;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x00239c, 0x000000, 0x00239c];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "INTER MILAN";
        },
        demanda: 150 // Alta demanda, partidos históricos en la Serie A
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xffffff;
            redColor = [0x1a2747, 0xde0319, 0x1a2747];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "PSG";

            blueAngle = 61;
            blueTextColor = 0xc99740;
            blueColor = [0x00a4dc, 0xffffff, 0xffffff];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "OLYMPIQUE MARSELLA";
        },
        demanda: 150 // Gran rivalidad en la Ligue 1 de Francia
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xffffff;
            redColor = [0xdf061b, 0x000000, 0xdf061b];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "AC MILAN";

            blueAngle = 180;
            blueTextColor = 0xf7c902;
            blueColor = [0x1f1a20, 0xffffff, 0x1f1a20];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "JUVENTUS";
        },
        demanda: 150 // Un enfrentamiento de alto nivel entre equipos históricos
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0x00a032;
            redColor = [0xffcd00];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "BRASIL";

            blueAngle = 180;
            blueTextColor = 0x1e2930;
            blueColor = [0x98cef0, 0xffffff, 0x98cef0];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "ARGENTINA";
        },
        demanda: 300 // Enfrentamiento entre dos de los equipos más grandes de América
    },


   {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xf3010f;
            redColor = [0xf8f8f8];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "INGLATERRA";

            blueAngle = 90;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x000000, 0xDD0000, 0xFFCE00];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "ALEMANIA";
        },
        demanda: 200 // Un clásico del fútbol europeo con dos de las selecciones más fuertes.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0x00a032;
            redColor = [0xffcd00];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "BRASIL";

            blueAngle = 90;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x000000, 0xDD0000, 0xFFCE00];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "ALEMANIA";
        },
        demanda: 150 // Ambos equipos tienen una enorme base de seguidores y tradición mundial.
    },

    {
        partido: function () {
            redAngle = 0;
            redTextColor = 0x0064aa;
            redColor = [0x009e3f, 0xFFFFFF, 0xe40321];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ITALIA";

            blueAngle = 90;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x000000, 0xDD0000, 0xFFCE00];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "ALEMANIA";
        },
        demanda: 200 // Italia y Alemania son selecciones históricas, aunque quizás con un poco menos de rivalidad directa.
    },

    {
        partido: function () {
            redAngle = 70;
            redTextColor = 0xffc000;
            redColor = [0xbb0c10];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ESPAÑA";

            blueAngle = 90;
            blueTextColor = 0xeabc78;
            blueColor = [0x1b2a4a];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "FRANCIA";
        },
        demanda: 200 // Un gran partido europeo con mucha rivalidad reciente en competiciones como la Eurocopa y la Copa del Mundo.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xffffff;
            redColor = [0xdd0125, 0x211f25, 0xdd0125];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "FLAMENGO";

            blueAngle = 69;
            blueTextColor = 0x801f32;
            blueColor = [0xffffff, 0xffffff, 0x621b21];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "FLUMINENSE";
        },
        demanda: 150 // Clásico carioca, una de las rivalidades más grandes de Brasil.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xfad948;
            redColor = [0xbc0021];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "LIVERPOOL";

            blueAngle = 69;
            blueTextColor = 0x1b1a20;
            blueColor = [0xc70317, 0xffffff, 0xffffff];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "MANCHESTER UNITED";
        },
        demanda: 150 // Enfrentamiento clásico de la Premier League con grandes seguidores en todo el mundo.
    },

    {
        partido: function () {
            redAngle = 60;
            redTextColor = 0xffffff;
            redColor = [0xec1c24];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "INDEPENDIENTE";

            blueAngle = 90;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x033f86, 0xfab900, 0x033f86];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "BOCA JRS.";
        },
        demanda: 120 // Clásico argentino, una de las rivalidades más intensas en el fútbol mundial.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0x292a6d;
            redColor = [0xe3221d, 0xffffff, 0xe3221d];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ATLÉTICO MADRID";

            blueAngle = 73;
            blueTextColor = 0x0f2145;
            blueColor = [0xffc10a, 0xffffff, 0xffffff];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "REAL MADRID";
        },
        demanda: 150 // Enfrentamiento de alto nivel en La Liga, con una gran rivalidad entre los dos grandes de Madrid.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xE3BA5B;
            redColor = [0xffffff, 0xe40615, 0xcd043a];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ARSENAL FC";

            blueAngle = 66;
            blueTextColor = 0xfbb700;
            blueColor = [0x001489];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "CHELSEA";
        },
        demanda: 150 // Clásico londinense, entre dos grandes rivales de la Premier League.
    },

    {
        partido: function () {
            redAngle = 0;
            redTextColor = 0xffb200;
            redColor = [0x8f001c];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "AS ROMA";

            blueAngle = 180;
            blueTextColor = 0xffffff;
            blueColor = [0x81c6ee, 0x8ccaee , 0x81c6ee];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "LAZIO";
        },
        demanda: 120 // Clásico italiano, aunque menos mediático que los de otras ligas.
    },

    {
        partido: function () {
            redAngle = 30;
            redTextColor = 0x231f20;
            redColor = [0xffffff, 0xee1b2c, 0xffffff];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "RIVER PLATE";

            blueAngle = 180;
            blueTextColor = 0x002942;
            blueColor = [0x00a5e3, 0xFFFFFF, 0x00a5e3];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "RACING";
        },
        demanda: 150 // Uno de los clásicos más importantes de Argentina, muy seguido en todo el país.
    },

    {
        partido: function () {
            redAngle = 60;
            redTextColor = 0xffffff;
            redColor = [0xec1c24];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "INDEPENDIENTE";

            blueAngle = 180;
            blueTextColor = 0x002942;
            blueColor = [0x00a5e3, 0xFFFFFF, 0x00a5e3];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "RACING";
        },
        demanda: 150 // Rivalidad argentina entre dos equipos de Avellaneda, con mucha historia.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xFFFFFF;
            redColor = [0xe9282d, 0x1d3b56, 0xe9282d];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "SAN LORENZO";

            blueAngle = 90;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x033f86, 0xfab900, 0x033f86];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "BOCA JRS.";
        },
        demanda: 150 // Clásico del fútbol argentino con una gran rivalidad, especialmente en Buenos Aires.
    },

    {
        partido: function () {
            redAngle = 0;
            redTextColor = 0xffffff;
            redColor = [0xee1d23, 0x000000];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "NEWELLS";

            blueAngle = 180;
            blueTextColor = 0xFFFFFF;
            blueColor = [0xfcd828, 0x144178, 0xfcd828];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "ROSARIO CENTRAL";
        },
        demanda: 150 // Un clásico rosarino con una gran historia, muy importante en la ciudad de Rosario.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xFFFFFF;
            redColor = [0x6a2331, 0x74192e, 0x74192e];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "LANÚS";

            blueAngle = 180;
            blueTextColor = 0xb59859;
            blueColor = [0x007836, 0xffffff, 0x007836];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "BANFIELD";
        },
        demanda: 50 // Clásico del fútbol argentino, aunque menos mediático que otros clásicos más populares.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xa7a9ab;
            redColor = [0x1e315a, 0xFFFFFF, 0x1e315a];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "TALLERES (C)";

            blueAngle = 70;
            blueTextColor = 0xffffff;
            blueColor = [0x1a120c, 0x009cd0, 0x009cd0];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "BELGRANO";
        },
        demanda: 50 // Clásico cordobés, con mucha rivalidad y apoyo de los hinchas en Córdoba.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0x000000;
            redColor = [0xF4F4F6];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "CORINTHIANS";

            blueAngle = 90;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x006337, 0x00713d, 0x00713d];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "PALMEIRAS";
        },
        demanda: 120 // Un clásico del fútbol brasileño con gran seguimiento, especialmente en São Paulo.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xffffff;
            redColor = [0x9e0424, 0x1c6137, 0x9e0424];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "FLUMINENSE";

            blueAngle = 29;
            blueTextColor = 0xd42a2a;
            blueColor = [0x19181B, 0xE6E6E4, 0x19181B];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "VASCO DA GAMA";
        },
        demanda: 50 // Un clásico carioca entre dos de los clubes más tradicionales de Río de Janeiro.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xFFFFFF;
            redColor = [0x006337, 0x00713d, 0x00713d];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "PALMEIRAS";

            blueAngle = 90;
            blueTextColor = 0x3b4043;
            blueColor = [0xf1f5f6];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "SANTOS FC";
        },
        demanda: 120 // Un clásico paulista entre dos gigantes del fútbol brasileño, con una gran rivalidad en São Paulo.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xFFFFFF;
            redColor = [0xff020c];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "SC INTERNACIONAL";

            blueAngle = 180;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x009ee2, 0x05171d, 0x009ee2];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "GREMIO";
        },
        demanda: 120 // Un clásico gaucho muy esperado por los hinchas de Porto Alegre, con una rivalidad histórica.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xced3d9;
            redColor = [0x0b245f, 0x214196, 0x7e6fb8];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ARGENTINA";

            blueAngle = 90;
            blueTextColor = 0x000000;
            blueColor = [0x75cbfa];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "URUGUAY";
        },
        demanda: 100 // El clásico rioplatense entre dos de las selecciones más grandes de Sudamérica.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xE0B85A;
            redColor = [0xffffff, 0xe40615, 0xe40615];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ARSENAL FC";

            blueAngle = 72;
            blueTextColor = 0x111836;
            blueColor = [0x0b0e1e, 0xffffff, 0xffffff];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "TOTTENHAM";
        },
        demanda: 70 // Un clásico del fútbol inglés con mucha rivalidad, especialmente en el norte de Londres.
    },

    {
        partido: function () {
            redAngle = 0;
            redTextColor = 0xFFFFFF;
            redColor = [0xfbba00, 0xab092e];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "GALATASARAY";

            blueAngle = 180;
            blueTextColor = 0x020E1F;
            blueColor = [0xfff100, 0x014582, 0xfff100];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "FENERBAHCE";
        },
        demanda: 120 // Un clásico turco entre dos de los equipos más grandes de Estambul, muy popular y lleno de historia.
    },

    {
        partido: function () {
            redAngle = 60;
            redTextColor = 0xFFFFFF;
            redColor = [0xdc0316, 0xdc0316, 0x08265c];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "MEDELLIN";

            blueAngle = 180;
            blueTextColor = 0x000000;
            blueColor = [0x018c4b, 0xffffff, 0x018c4b];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "ATL. NACIONAL (COL)";
        },
        demanda: 55 // Un clásico colombiano entre dos de los clubes más emblemáticos del país, muy disputado.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0x000000;
            redColor = [0x039940, 0xffffff, 0x039940];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "CELTIC";

            blueAngle = 180;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x01319f];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "RANGERS";
        },
        demanda: 55 // El Old Firm de Escocia, una de las rivalidades más intensas y antiguas del fútbol europeo.
    },

    {
        partido: function () {
            redAngle = 33;
            redTextColor = 0x000000;
            redColor = [0xF6F6F7];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "COLO COLO";

            blueAngle = 33;
            blueTextColor = 0xf4f4f4;
            blueColor = [0x1C2445];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "U DE CHILE";
        },
        demanda: 55 // Un clásico del fútbol chileno, conocido por la rivalidad entre los dos equipos más grandes del país.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xffffff;
            redColor = [0x00824A, 0x006327, 0x006327];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "FERRO";

            blueAngle = 180;
            blueTextColor = 0x0063a8;
            blueColor = [0xFFFFFF];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "VELEZ";
        },
        demanda: 56 // Un enfrentamiento argentino de gran historia, con dos clubes que representan diferentes estilos de fútbol.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xFFFFFF;
            redColor = [0xe9282d, 0x1d3b56, 0xe9282d];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "SAN LORENZO";

            blueAngle = 180;
            blueTextColor = 0x0063a8;
            blueColor = [0xFFFFFF];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "VELEZ";
        },
        demanda: 65 // Un clásico argentino entre dos equipos de gran tradición, ambos de la ciudad de Buenos Aires.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xFFFFFF;
            redColor = [0xe9282d, 0x1d3b56, 0xe9282d];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "SAN LORENZO";

            blueAngle = 52;
            blueTextColor = 0xff0000;
            blueColor = [0xFFFFFF];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "HURACÁN";
        },
        demanda: 66 // El clásico entre estos dos equipos del barrio de Boedo y Parque Patricios, siempre lleno de pasión.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0x323232;
            redColor = [0xe41815, 0xFFFFFF, 0xe41815];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ESTUDIANTES (LP)";

            blueAngle = 90;
            blueTextColor = 0x00afef;
            blueColor = [0xFFFFFF, 0x12175e, 0xFFFFFF];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "GIMNASIA (LP)";
        },
        demanda: 120 // El clásico platense, un enfrentamiento muy esperado en la ciudad de La Plata entre dos de sus clubes más representativos.
    },

    {
        partido: function () {
            redAngle = 0;
            redTextColor = 0x812124;
            redColor = [0xE1DCC5];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "UNIVERSITARIO";

            blueAngle = 180;
            blueTextColor = 0xd9030f;
            blueColor = [0x062247, 0xFFFFFF, 0x062247];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "ALIANZA LIMA";
        },
        demanda: 55 // Un enfrentamiento clásico del fútbol peruano, muy esperado en el país, entre dos de los clubes más grandes de Lima.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xFFFFFF;
            redColor = [0xF7F8FA, 0xd71716, 0xd71716];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "INDEPENDIENTE SANTA FE";

            blueAngle = 55;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x232937, 0x1252b3, 0x1252b3];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "MILLONARIOS";
        },
        demanda: 60 // Un clásico del fútbol colombiano entre dos equipos de gran rivalidad de Bogotá, conocidos por su historia.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xFFFFFF;
            redColor = [0xffca00, 0x000000, 0xffca00];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "PEÑAROL";

            blueAngle = 55;
            blueTextColor = 0xd0142c;
            blueColor = [0x003895, 0xFFFFFF, 0x003895];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "NACIONAL (UY)";
        },
        demanda: 150 // El clásico del fútbol uruguayo entre los dos clubes más grandes de Montevideo, con una rivalidad de larga data.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xFFFFFF;
            redColor = [0xe10602, 0x00158c, 0xe10602];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "CERRO PORTEÑO";

            blueAngle = 90;
            blueTextColor = 0xa28026;
            blueColor = [0xFFFFFF, 0x0d0d0d, 0xFFFFFF];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "OLIMPIA";
        },
        demanda: 125 // Un clásico del fútbol paraguayo entre los dos equipos más grandes de Asunción, cargado de historia y emoción.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xf7c902;
            redColor = [0x1f1a20, 0xffffff, 0x1f1a20];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "JUVENTUS";

            blueAngle = 180;
            blueTextColor = 0xffffff;
            blueColor = [0x01b9eb];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "NAPOLI";
        },
        demanda: 70 // El clásico italiano, un enfrentamiento entre los dos clubes más importantes del sur de Italia, con mucha historia y rivalidad.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xceac02;
            redColor = [0xffffff, 0xda0120, 0xffffff];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "AJAX";

            blueAngle = 180;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x0b826e, 0x02917f, 0x0b826e];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "FEYENOORD";
        },
        demanda: 100 // El clásico de los Países Bajos, con la rivalidad de estos dos grandes clubes de Ámsterdam y Rotterdam.
    },

    {
        partido: function () {
            redAngle = 0;
            redTextColor = 0xFFFFFF;
            redColor = [0xe30613];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "SL BENFICA";

            blueAngle = 180;
            blueTextColor = 0xd0000c;
            blueColor = [0x0747ab, 0xffffff, 0x0747ab];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "FC PORTO";
        },
        demanda: 120 // El clásico del fútbol portugués, un duelo tradicional entre los dos equipos más importantes de Lisboa y Oporto.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xFFFFFF;
            redColor = [0xff6300, 0x060902, 0xff6300];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "SHAKHTAR DONETSK";

            blueAngle = 65;
            blueTextColor = 0x027fd9;
            blueColor = [0x0289da, 0xffffff, 0xffffff];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "DYNAMO KYIV";
        },
        demanda: 70 // Un enfrentamiento de dos grandes equipos ucranianos con una gran rivalidad entre Shakhtar Donetsk y Dynamo Kyiv.
    },

    {
        partido: function () {
            redAngle = 0;
            redTextColor = 0xFFFFFF;
            redColor = [0xe30613];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "SL BENFICA";

            blueAngle = 90;
            blueTextColor = 0x000000;
            blueColor = [0x008359, 0xffffff, 0x008359];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "SPORTING CP";
        },
        demanda: 100 // El derbi lisboeta entre SL Benfica y Sporting CP, con una rivalidad centenaria en la ciudad de Lisboa.
    },

    {
        partido: function () {
            redAngle = 0;
            redTextColor = 0xffb200;
            redColor = [0x8f001c];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "AS ROMA";

            blueAngle = 180;
            blueTextColor = 0xffffff;
            blueColor = [0x01b9eb];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "NAPOLI";
        },
        demanda: 80 // El clásico italiano, una rivalidad entre dos de los clubes más grandes del país: Roma y Nápoles.
    },

    {
        partido: function () {
            redAngle = 180;
            redTextColor = 0xf7c902;
            redColor = [0x1f1a20, 0xffffff, 0x1f1a20];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "JUVENTUS";

            blueAngle = 180;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x00239c, 0x000000, 0x00239c];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "INTER MILAN";
        },
        demanda: 120 // Un enfrentamiento clásico de Italia, entre la Juventus y el Inter de Milán, dos de los equipos más exitosos de la Serie A.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0x0A1129;
            redColor = [0xffba00, 0x0033cc, 0xffba00];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "TIGRES UANL";

            blueAngle = 180;
            blueTextColor = 0xe50913;
            blueColor = [0x0e2141, 0xffffff, 0x0e2141];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "MONTERREY";
        },
        demanda: 65 // Un clásico regio de la liga mexicana, lleno de rivalidad y pasión.
    },

    {
        partido: function () {
            redAngle = 90;
            redTextColor = 0xffffff;
            redColor = [0xdd0125, 0x211f25, 0xdd0125];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "FLAMENGO";

            blueAngle = 90;
            blueTextColor = 0xFFFFFF;
            blueColor = [0x006337, 0x00713d, 0x00713d];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "PALMEIRAS";
        },
        demanda: 120 // Un clásico brasileño muy esperado entre estos dos equipos, con mucha historia y rivalidad.
    },

    {
        partido: function () {
            redAngle = 123;
            redTextColor = 0x005da4;
            redColor = [0xeb2a2f, 0xFFFFFF, 0xeb2a2f];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ARGENTINOS JRS.";

            blueAngle = 90;
            blueTextColor = 0xfd6f21;
            blueColor = [0xFFFFFF, 0x5a3e22, 0xFFFFFF];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "PLATENSE";
        },
        demanda: 65 // Un partido entre equipos del fútbol argentino con rivalidad y mucha historia local.
    },

    {
        partido: function () {
            redAngle = 130;
            redTextColor = 0xf9cd39;
            redColor = [0xa92121, 0xa92121, 0x01553e];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "PORTUGAL";

            blueAngle = 180;
            blueTextColor = 0x1e2930;
            blueColor = [0x98cef0, 0xffffff, 0x98cef0];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "ARGENTINA";
        },
        demanda: 200 // Un partido internacional entre selecciones de gran nivel con historia de enfrentamientos.
    },

    {
        partido: function () {
            redAngle = 66;
            redTextColor = 0xffffff;
            redColor = [0xf36b22];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "HOLANDA";

            blueAngle = 180;
            blueTextColor = 0x1e2930;
            blueColor = [0x98cef0, 0xffffff, 0x98cef0];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "ARGENTINA";
        },
        demanda: 100 // Otro clásico internacional, con equipos de renombre mundial enfrentándose.
    },

    {
        partido: function () {
            redAngle = 0;
            redTextColor = 0x0064aa;
            redColor = [0x009e3f, 0xFFFFFF, 0xe40321];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ITALIA";

            blueAngle = 90;
            blueTextColor = 0x000000;
            blueColor = [0x75cbfa];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "URUGUAY";
        },
        demanda: 140 // Un clásico de selecciones de nivel mundial, con mucha historia en la Copa del Mundo.
    },

   {
        partido: function () {
            redAngle = 0;
            redTextColor = 0x0064aa;
            redColor = [0x009e3f, 0xFFFFFF, 0xe40321];
            room.setTeamColors(1, redAngle, redTextColor, redColor);
            teamRed = "ITALIA";

            blueAngle = 90;
            blueTextColor = 0xeabc78;
            blueColor = [0x1b2a4a];
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);
            teamBlue = "FRANCIA";
        },
        demanda: 200 // Un enfrentamiento clásico entre dos selecciones de renombre mundial, con mucha historia en competiciones internacionales.
    },


    // Agregar más opciones según sea necesario
];

function toggleSwapColors() {
    cambioCami = !cambioCami;
    if (cambioCami) {
        room.sendAnnouncement("🔄👕 Cambio de Camisetas Automático ACTIVADO ✅", null, 0x00ff5e, "bold", 2);
    } else {
        room.sendAnnouncement("🔄👕 Cambio de Camisetas Automático DESACTIVADO ❌", null, 0xff363e, "bold", 2);
    }
}

var lastFiveGames = []; // Array para almacenar los últimos 5 partidos jugados

function shuffleOptions() {
    // Crear una lista ponderada de opciones en función de la demanda
    let weightedOptions = [];
    
    // Agregar los partidos tantas veces como su demanda
    opciones.forEach(option => {
        // Usamos directamente la demanda para determinar cuántas veces agregar la opción
        // La demanda va de 1 a 100, los más cercanos a 100 se agregarán más veces
        for (let i = 0; i < option.demanda; i++) {
            weightedOptions.push(option);
        }
    });

    // Mezclar las opciones ponderadas dos veces aleatoriamente
    let selectedOption = null;

    do {
        // Primera mezcla aleatoria
        weightedOptions.sort(function () {
            return 0.5 - Math.random();
        });

        // Segunda mezcla aleatoria
        weightedOptions.sort(function () {
            return 0.5 - Math.random();
        });

        // Seleccionamos el primer partido de la lista aleatoria
        selectedOption = weightedOptions[0];

    } while (lastFiveGames.includes(selectedOption) && lastFiveGames.length >= 5); // Verificamos que no haya estado en los últimos 5

    // Ejecutar el partido seleccionado
    selectedOption.partido();

    // Añadir el partido seleccionado a los últimos 5 partidos
    lastFiveGames.push(selectedOption);

    // Si hay más de 5 partidos en el array, eliminamos el más antiguo
    if (lastFiveGames.length > 5) {
        lastFiveGames.shift();
    }
}


function swapTeamColors() { 
    if (cambioCami) {
        // Mezclar las opciones antes de elegir
        shuffleOptions();

        // Ejecutar la opción elegida
        let selectedOption = lastFiveGames[lastFiveGames.length - 1]; // Obtener la última opción seleccionada
        selectedOption.partido(); // Llamar a la función del partido seleccionado
    }
}


// Objeto para registrar tiempos jugados durante el partido actual
var playerCurrentMatchTime = {}; // { playerId: { joinTime: timestamp, totalTime: seconds } }

// Evento al iniciar el partido (reiniciar registro y registrar inicio del partido)
var matchStartTime = Date.now();

room.onGameStart = function(byPlayer) {
    matchStartTime = Date.now();
    playerCurrentMatchTime = {}; // Reiniciar tiempos para este partido
    room.getPlayerList().forEach(player => {
        if (player.team !== 0) {
            playerCurrentMatchTime[player.id] = { joinTime: Date.now(), totalTime: 0 };
        }
    });
    swapTeamColors();


    // Reiniciar las variables al inicio de cada juego
    ArqueroRED = null;
    ArqueroBLUE = null;
    // Limpiar la lista de sumatoria para comenzar de nuevo
    goalAnnouncementsSum = [];
    room.sendAnnouncement("🎮 La partida está siendo grabada. 🎥");
    room.startRecording();
  posesionEquipoA = 0;
  posesionEquipoB = 0;
  let players = room.getPlayerList();
  let redTeam = players.filter(p => p.team === 1);
  let blueTeam = players.filter(p => p.team === 2);

  let redPlayers = redTeam.map(p => `${p.name}`);
  let bluePlayers = blueTeam.map(p => `${p.name}`);

  room.sendAnnouncement(`Formación ` + teamRed + `: ` + ` ${redPlayers.join(' - ')}`, null, 0xd28e9b, 'bold', 1);
  room.sendAnnouncement(`Formación ` + teamBlue + `: ` + ` ${bluePlayers.join(' - ')}`, null, 0x8ed2cc, 'bold', 1);

	    tookASize = {};
     [redTeam,blueTeam] = whichTeam();
    ballCarrying = initBallCarrying(redTeam, blueTeam);
    timeOnHalves = [0,0];
     isTimeAddedShownseis = false;
	DetenerAnuncio = false;
	DetenerAviso = false;
	ReiniciarStatsEnCero = false;
	var _0xefa5db = _0x3c81f9;
		if (RSRMap == false){
			game = new Game();
}
		if (RSRMap == true){
 		currentMap = "⚽ Real Soccer";
		if (byPlayer == null) {
			game = new Game();	
			announce("Duración del juego establecida en " + gameTime + " minutos");
		}
		else {
			if (room.getScores().timeLimit != 0) {
				gameTime = room.getScores().timeLimit / 60;
			}
			else {
				gameTime = 10;
			}
			room.stopGame();
			room.setTimeLimit(0);			
			room.startGame();
		}}

	}


room.onGameStop = function(byPlayer) {
    // Actualizar tiempos finales al detener el partido
    const currentTime = Date.now();
    for (let playerId in playerCurrentMatchTime) {
        const data = playerCurrentMatchTime[playerId];
        if (data.joinTime) {
            playerCurrentMatchTime[playerId].totalTime += Math.floor((currentTime - data.joinTime) / 1000);
        }
    }
	PartidoArrancado = false;
    whoTouchedLast = undefined;

		if (byPlayer == true) {
			room.setTimeLimit(gameTime);
		}
}

room.onPlayerBallKick = function(player) {
  // Incrementar la posesión de balón del equipo del jugador que realiza el disparo
  if (player.team === 1) {
    equipoAzulPosesion++;
  } else if (player.team === 2) {
    equipoRojoPosesion++;
  }
  
  game.rsTouchTeam = player.team;
  game.updateLastKicker(player.id, player.name, player.team);
  
  if (game.rsReady == true) {
    var players = room.getPlayerList().filter((player) => player.team != 0);
    players.forEach(function(player) {			
      if (room.getPlayerDiscProperties(player.id).invMass.toFixed(1) != 0.3 && RSRMap == true) {
        room.setPlayerDiscProperties(player.id, {invMass: 0.3});
      }
    });
  }

  //=========== GRAVEDAD (INDEPENDIENTE) ===========
  if (combaMode) { 
      room.setDiscProperties(0, {
          xgravity: -room.getPlayerDiscProperties(player.id).yspeed / 30,
          ygravity: -room.getPlayerDiscProperties(player.id).yspeed / 30
      });


          setTimeout(() => {
              room.setDiscProperties(0, { xgravity: 0, ygravity: 0 });
          }, 500);
  }

  //=========== POWERSHOT CODE ===========
  if (powerShotMode == true) { // Se ejecuta el PowerShot sin importar el valor de RSRMap
    if (game.powershotCounter > 52) {
        // Aplicar gravedad solo si JabulaniMode está activado
        if (JabulaniMode) {
            room.setDiscProperties(0, {
                xgravity: -room.getPlayerDiscProperties(player.id).yspeed / 30,
                ygravity: -room.getPlayerDiscProperties(player.id).yspeed / 30
            });

                setTimeout(() => {
                    room.setDiscProperties(0, { xgravity: 0, ygravity: 0 });
                }, 500);

        }

        game.rsSwingTimer = 50;
        room.sendAnnouncement("DISPARO POTENTE REALIZADO!", player.pm, 0x33dddd, "bold", 1);
    }

    game.powershotCounter = 0;
    game.powershotID = 0;
    game.powershotTrigger = false;

    if (RSRMap == true) {
        if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.05) {
            room.setDiscProperties(0, { invMass: 1.05, color: `0x${PelotaRS}` });
        }
    } else { // Cuando RSRMap == false
        if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.5) {
            room.setDiscProperties(0, { invMass: 1.5, color: `0x${PelotaFutsal}` });
        }
    }
  }
  //=========== POWERSHOT CODE ===========

  if (game.rsReady == true && RSRMap == false) {
    var players = room.getPlayerList().filter((player) => player.team != 0);
    players.forEach(function(player) {			
      if (room.getPlayerDiscProperties(player.id).acceleration.toFixed(1) != 0.11) {
        room.setPlayerDiscProperties(player.id, {"bCoef" : 0,"acceleration" : 0.11,"kickingAcceleration" : 0.083,"kickStrength" : 5});
      }
    });
  }
  
  if (game.rsReady == true && RSRMap == true) {
    var players = room.getPlayerList().filter((player) => player.team != 0);
    players.forEach(function(player) {			
      if (room.getPlayerDiscProperties(player.id).invMass.toFixed(1) != 0.3) {
        room.setPlayerDiscProperties(player.id, {invMass: 0.3});
      }
    });
  }
  
  if (game.rsActive == false && game.rsReady == true && (game.rsCorner == true || game.rsGoalKick == true)) { // make game active on kick from CK/GK
    game.boosterState = true;
    game.rsActive = true;
    game.rsReady = false;
    room.setDiscProperties(1, {x: 2000, y: 2000 });
    room.setDiscProperties(2, {x: 2000, y: 2000 });
    room.setDiscProperties(0, {color: `0x${PelotaRS}`});
    game.rsTimer = 1000000;
    game.warningCount++;	
    
    // set gravity for real soccer corners/goalkicks
    if (game.rsCorner == true) {
      if (room.getDiscProperties(0).y < 0) { //top corner
        room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/35*-1, ygravity: 0.05});
      }
      else { //bottom corner
        room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/35*-1, ygravity: -0.05});
      }
    }	
    if (game.rsGoalKick == true) {			
      room.setDiscProperties(0, {xgravity: 0, ygravity: room.getPlayerDiscProperties(player.id).yspeed/40*-1});		
    }
    
    game.rsCorner = false;
    game.rsGoalKick = false;
    game.rsCorner2 = false;
    game.rsGoalKick2 = false;
    game.outStatus = "";		
  }
  
  if (game.outStatus == "redThrow" || game.outStatus == "blueThrow") {
    game.throwinKicked = true;
  }

  // Código adicional para cuando el mapa no es "RSR"
  if (map !== "RSR") {
    // Agrega aquí tu lógica personalizada para cuando el mapa no es "RSR"
  }
}



var webhookPass = 'https://discord.com/api/webhooks/816063918781890580/hBOBmjKaR4sJHWNnK-MZIo68r7Np3bxtHf5N43VI-rVkyEYDW6axIXAHKkEDWe4190L3';

var ModoChatPausado = [];


const CensurarMensajes = ['rs', 'con', 'real', 'soccer', 'creo', ' con', '  con', '   con', '    con', ' rs', '  rs', '   rs', '    rs', 'R.S', 'R.S C.O.N T.I.A', 'r.s c.o.n t.i.a', 'c.on', 'co.n', 'c.o.n', 'C.ON', 'CO.N', 'C.O.N', 'r.s c.o.n t.i.a', 'R_S', 'R_S C_O_N T_I_A', 'r_s c_o_n t_i_a', 'c_on', 'co_n', 'c_o_n', 'C_ON', 'CO_N', 'C_O_N', 'r_s c_o_n t_i_a', 'R-S C-O-N T-I-A', 'r-s c-o-n t-i-a', 'c-on', 'co-n', 'c-o-n', 'C-ON', 'CO-N', 'C-O-N', 'C.REO', 'CR.EO', 'CRE.O', 'c.reo', 'cr.eo', 'cre.o', 'C-REO', 'CR-EO', 'CRE-O', 'c-reo', 'cr-eo', 'cre-o', 'c_reo', 'cr_eo', 'cre_o', 'C_REO', 'CR_EO', 'CRE_O', 'r.s', 'on', 'C.on', 'mogólico', 'mógolico', 'mogolíco', 'mogolicó', 'mógólícó', 'MOGÓLICO', 'MÓGOLICO', 'MOGOLÍCO', 'MOGOLICÓ', 'MÓGÓLÍCÓ', 'm.ogolico', 'mo.golico', 'mog.olico', 'mogo.lico', 'mogol.ico', 'mogoli.co', 'mogolic.o', 'M.OGOLICO', 'MO.GOLICO', 'MOG.OLICO', 'MOGO.LICO', 'MOGOL.ICO', 'MOOGOLI.CO', 'MOGOLIC.O', 'm-ogolico', 'mo-golico', 'mog-olico', 'mogo-lico', 'mogol-ico', 'mogoli-co', 'mogolic-o', 'M-OGOLICO', 'MO-GOLICO', 'MOG-OLICO', 'MOGO-LICO', 'MOGOL-ICO', 'MOOGOLI-CO', 'MOGOLIC-O', 'm_ogolico', 'mo_golico', 'mog_olico', 'mogo_lico', 'mogol_ico', 'mogoli_co', 'mogolic_o', 'M_OGOLICO', 'MO_GOLICO', 'MOG_OLICO', 'MOGO_LICO', 'MOGOL_ICO', 'MOOGOLI_CO', 'MOGOLIC_O', 'dawn', 'daun', 'doun', 'DÓWN', 'dówn', 'dáun', 'daún', 'dáún', 'DAWN', 'cancerígeno', 'CANCERÍGENO'];


function filter(message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("ఌ") ||message.includes("甈") ||message.includes("㐷") ||message.includes("怅") ||message.includes("瘪") ||message.includes("⑸") ||message.includes("㬆") ||message.includes("権") ||message.includes("怜") ||message.includes("∯") ||message.includes("㤒") ||message.includes("䉊") ||message.includes("匊") ||message.includes("ᙻ") ||message.includes("ൽ") ||message.includes("ᴧ") ||message.includes("爂") ||message.includes("爇") ||message.includes("त") ||message.includes("権") ||message.includes("怜") ||message.includes("∯") ||message.includes("㤒") ||message.includes("﷽") ||message.includes("m0g0l1c") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("䐃") ||message.includes("䉧") ||message.includes("瀩") ||message.includes("琐") ||message.includes("䳌") ||message.includes("氊") ||message.includes("瘠") ||message.includes("銡") ||message.includes("歘") ||message.includes("桋") ||message.includes("鼜") ||message.includes("窭") ||message.includes("谡") ||message.includes("輽") ||message.includes("怼") ||message.includes("霽") ||message.includes("椣") ||message.includes("䖎") ||message.includes("蘗") ||message.includes("徠"))
    {
        return true;
    }else return false;
}

function CensuradorDeSpammeros(message) {
    if (CensurarMensajes.includes(message)) {
        return true;
    }else return false;
}

function pmFun(player, message){ //!pv
    var pm = message.substr(4);
    var index = message.split(" ").slice(1);
    var playerID = index[0]
    var message2 = message.substr(5);
    var message3 = "[ ID: " + player.id + " - 💬🔒] " + player.name + ":" + message2;
    console.log(playerID);
    console.log(index);
    console.log(message);
    console.log(message2);
    console.log(message3);
    room.sendAnnouncement(message3, parseInt(playerID), 0xc7a2ff, "bold", 2);
    var players = room.getPlayerList().filter((player) => player.id != 0 );
    if ( players.find((player => player.id === playerID))) {room.sendAnnouncement("❌ Ese ID no funciona, escribe !ids para ver los ID de los jugadores del host.", player.id, 0xff3c3c, "normal", 0);}
    else {room.sendAnnouncement("[📨] Mensaje Privado enviado con éxito! ✅", player.id, 0x3fff6c, "normal", 0);};
    return false;
}


setInterval(function(player, message){
var isRoomMuted = false;
        isRoomMuted = false;
        mutedPlayers = [];
    room.sendAnnouncement('✅ 💬 Desmutee a todos los jugadores', null, 0xd733ff, "normal", 0); },1800000);

function ListaDeJugadoresFun(player) { // !help
	    Jugadores = room.getPlayerList();
	    playersString = "";
   let conn = connections.find(a => a[1] === player.conn);
	    for(i=0; i<Jugadores.length; i++){
		playersString = playersString + "      📛 NICKNAME: " +  Jugadores[i].name + "          🆔 ID:  " + Jugadores[i].id + "\n";
	    }
	    room.sendAnnouncement("ID DE LOS JUGADORES DEL HOST:",player.id,0xFFFF00,"normal",1);
	    room.sendAnnouncement(playersString,player.id,0xFFFF00,"normal",1);
	}


function helpFun(player) {


  var message = '📣 COMANDOS DISPONIBLES 📣:\n\n';
    message = '⯌ 💬 CHAT PRIVADO:\n';
    message += ' CON EQUIPO: "t + Mensaje"    -   CON JUGADOR: "@@Nickname + Mensaje"\n\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);

  setTimeout(function() {
  message = '⯌ 👋 SALIR DEL HOST: !nv    !acomer    !adormir   !bb\n';
    message += '   Salir de la sala y volver al lobby.\n\n';
  room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 3000);
 
  setTimeout(function() {
    message = '⯌ ❌ VOTAR BAN:      "!expulsar + IDdelJugador"  |    VOTAR JUGADOR PARA QUE SEA ADMIN: "!admin + IDdelJugador" \n';
    message += '   Inicia una votación para expulsar o hacer administrador a un jugador, para ver los IDs de los jugadores escribe !ids.\n\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 6000);

  setTimeout(function() {
    message = '👑 ADMINISTRACIÓN DEL HOST: !adminhelp      !mapas      !camisetas      !llamaradmins      !votarmapa" \n';
    message += '   Utiliza !adminhelp para ver los comandos para Admins. ¿Quieres llamar a un admin? utiliza !llamaradmins\n\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 9000);  


  setTimeout(function() {
    message = '⯌ 📊 TABLAS Y ESTADÍSTICAS: !me      !stats      !goleadores    !asistidores    !promedios      !mvp      !ganadores      !victorias      !presencias      !viciosos      !racha-actual      !racha-historica      !goles-recibidos      !vallas-invictas      !promedios-recibidos\n';
    message += '   !me (para ver tus estadísticas) | !stats ID (ver las estadísticas de otro jugador) | Ejemplo: !stats 15 \n\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 12000);

  setTimeout(function() {
    message = '⯌ ACTIVAR Y DESACTIVAR AFK: !afk\n';
    message += '   Cambiar tu estado a AFK (inactivo) o volver a estar activo.\n\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 15000);


  setTimeout(function() {
    message = '⯌ 📏 CAMBIAR DE TAMAÑO: "!size + Número"\n';
    message += '   Cambiar el tamaño del jugador (Número del ' + TamanoMinimoPermitido + ' al ' + TamanoMaximoPermitido + ').\n\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 18000);
  
  setTimeout(function() {
    message = '⯌ OTROS:      !poss      !avatar       !numeros      !script      !tutorial      !ids      !niveles\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 21000);
  

  setTimeout(function() {
    message = '⯌ ⌚ VER DURACIÓN DEL PARTIDO: !time\n';
    message += '   Ver la duración establecida del partido y los minutos o segundos de tiempo extra.\n\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 24000);
  

  setTimeout(function() {
    message = '⯌ 🏆 TORNEO: !resultados\n';
    message += '   Ver los resultados del torneo actual.\n\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 27000);

  setTimeout(function() {
    message = '⯌ AVATAR: !avatar\n';
    message += '   Ejemplo de uso: !avatar HO,LA | Ejemplo 2: !avatar 😈,👿\n\n';
    room.sendAnnouncement(message, player.id, 0xffffff, "small-bold", 1);
  }, 30000);


}

function TutorialFun(player) { // !tutorial
    room.sendAnnouncement('CREÁ TU PROPIO HOST CON BOT:', player.id, 0xbfff35, "normal", 0);
    room.sendAnnouncement('VIDEO TUTORIAL: https://youtu.be/Mkh7WcN8pSg', player.id, 0xbfff35, "normal", 0);

}

function ResultadosFun(player) { // !help
    room.sendAnnouncement('🏆 Tabla de posiciones: 🔗' + ChallongeLink + '/standings', player.id, 0xbfff35, "small-bold", 0);
}

function FixtureFun(player) { // !help
    room.sendAnnouncement('🏆 Fixture: 🔗' + ChallongeLink, player.id, 0xbfff35, "small-bold", 0);
}

function ReglamentoFun(player) { // !help
    room.sendAnnouncement('📜 𝐑𝐄𝐆𝐋𝐀𝐌𝐄𝐍𝐓𝐎 𝐃𝐄𝐋 𝐓𝐎𝐑𝐍𝐄𝐎', player.id, 0xbfff35, "small-bold", 0);

    room.sendAnnouncement(regla1, player.id, 0xea9999, "small-bold", 0);

    room.sendAnnouncement(regla2, player.id, 0xffe800, "small-bold", 0);

    room.sendAnnouncement(regla3, player.id, 0xff2e2e, "small-bold", 0);

    room.sendAnnouncement(regla4, player.id, 0x2efeb6, "small-bold", 0);

    room.sendAnnouncement(regla5, player.id, 0x94e5ff, "small-bold", 0);
}

function TenisFun(player){
    room.sendAnnouncement('PUEDES ELEGIR:', player.id, 0xE5FF00, "normal", 0);
    room.sendAnnouncement('!tenis-ladrillo', player.id, 0xFFAA00, "normal", 0);
    room.sendAnnouncement('!tenis-cemento', player.id, 0x0088FF, "normal", 0);
    room.sendAnnouncement('!tenis-pasto', player.id, 0x6FFF00, "normal", 0);

}



function resetFun(player){
    if (player.admin == true){
        room.stopGame();
        room.startGame();
    }
}

function leaveFun(player, message) {
if (message == "!nv")
room.kickPlayer(player.id, "Adiós vaquero! 👋", false);
else if (message == "!adormir")
room.kickPlayer(player.id, "💤 Buenas noches!! <3", false);
else if (message == "!bb")
room.kickPlayer(player.id, "Bye! 👋 😉", false);
else if (message == "!acomer")
room.kickPlayer(player.id, "😋 Bon appetit ! 🍽", false);
}










function swapFun(player){
			if (player.admin == true) {
					var players = room.getPlayerList().filter((player) => player.id != 0 );
					if ( players.length == 0 ) return false;
					players.forEach(function(player) {	
						if (player.team == 1) {
							room.setPlayerTeam(player.id, 2);
						}
						if (player.team == 2) {
							room.setPlayerTeam(player.id, 1);
						}
					});
					announce("🔄 Los equipos han cambiado");
				
			}
			else {
				whisper("Comando solo de administrador", player.id);
			}
		}





function MapasFun(player) { // !mapas
    room.sendAnnouncement('FUTSAL 🟡:  !futx2 - !futx3 - !futx4 - !futx5 - !futx5cesped - !futx7 - !realfutsal', player.id, 0xd32668, "normal", 0);
    room.sendAnnouncement('CAMPEONES 🏆: !campeones - !premios', player.id, 0xd32668, "normal", 0);

}




function sendAdminMessage(player, message, delay) {
  setTimeout(function() {
    room.sendAnnouncement(message, player.id, 0xffe400, "small", 0);
  }, delay);
}

function adminHelpFun(player) {
  room.sendAnnouncement('🌟 ¡Bienvenido, administrador! Aquí tienes los comandos que puedes usar:', player.id, 0xffbb00, "normal", 0);
  sendAdminMessage(player, 'J U G A D O R E S -- A F K ⚡', 2000);
  sendAdminMessage(player, 'Ver jugadores AFK: `!afks`', 4000);
  sendAdminMessage(player, 'Kickear jugadores AFK: `!kickafks`', 6000);

  sendAdminMessage(player, 'B A N E O -- Y -- D E S B A N E O 🚫', 8000);
  sendAdminMessage(player, 'Banear IP: `!banip + IpDeJugador`', 10000);
  sendAdminMessage(player, 'Desbanear IP: `!unbanip + IpDeJugador`', 12000);
  sendAdminMessage(player, 'Desbanear todas las IPs baneadas: `!unbanallips`', 14000);
  sendAdminMessage(player, 'Desbanear a todos los jugadores baneados: `!clearbans`', 16000);

  sendAdminMessage(player, 'S I L E N C I A R -- Y  -- D E S M U T E A R 🔇', 18000);
  sendAdminMessage(player, 'Mutear jugador: `!mute + ID`', 20000);
  sendAdminMessage(player, 'Desmutear jugador: `!unmute + ID`', 22000);
  sendAdminMessage(player, 'Desmutear a todos los jugadores muteados: `!unmuteall`', 24000);
  sendAdminMessage(player, 'Silenciar palabras: `!silenciar + palabra`', 26000);
  sendAdminMessage(player, 'Desilenciar palabras: `!desilenciar + palabra`', 28000);

  sendAdminMessage(player, ' M O D O S -- D E -- J U E G O 🎮', 30000);
  sendAdminMessage(player, 'Activar/Desactivar modo "Juegan Todos": `!juegantodos`', 32000);
  sendAdminMessage(player, 'Activar modo "Juegan Algunos": `!juegan <cantidad de jugadores máxima por equipo>`', 34000);
  sendAdminMessage(player, 'Desactivar modo "Juegan Algunos": `!juegan-off`', 36000);
  sendAdminMessage(player, 'Activar/Desactivar sistema "Gana Sigue": `!ganasigue`', 38000);
  sendAdminMessage(player, 'Activar/Desactivar el equilibrio equipos automático: `!auto_balance`', 40000);
  sendAdminMessage(player, 'Activar/Desactivar Power Shot: `!powershot`', 42000);
  sendAdminMessage(player, 'Activar/Desactivar Modo Automatizado: `!automatizado`', 44000);
  sendAdminMessage(player, 'Activar/Desactivar Modo FairPlay: `!fairplay`', 46000);
  sendAdminMessage(player, 'Activar/Desactivar Gol de Oro: `!goldeoro`', 48000);

  sendAdminMessage(player, ' H O S T -- C O N -- C O N T R A S E Ñ A 🔒', 50000);
  sendAdminMessage(player, 'Colocar contraseña: `!set_password + Contraseña`', 52000);
  sendAdminMessage(player, 'Quitar contraseña: `!clear_password`', 54000);

  sendAdminMessage(player, ' C O M A N D O S -- D E L -- J U E G O 🎲', 56000);
  sendAdminMessage(player, 'Reiniciar partido: `!rr`', 58000);
  sendAdminMessage(player, '(SÓLO PARA RS) Cambiar la cantidad de minutos de juego: `!minutos + CantidadDeMinutos`', 60000);
  sendAdminMessage(player, 'Mezclar aleatoriamente los equipos: `!random`', 62000);
  sendAdminMessage(player, 'Cambiar de lado a los jugadores: `!swap`', 64000);
  sendAdminMessage(player, '`!camisetas` (Ver camisetas disponibles)', 74000);
  sendAdminMessage(player, 'Activar/Desactivar el cambio automático de las camisetas: `!clubcolors`', 76000);
  sendAdminMessage(player, 'Invertir camisetas de los equipos: `!swapcolors`', 78000);
  sendAdminMessage(player, 'Equilibrar equipos por los niveles de los jugadores: `!equilibrar`', 80000);
  sendAdminMessage(player, 'Publicidad: `!publicidad <intervalo de minutos> <mensaje>`', 82000);
  sendAdminMessage(player, 'COOLDOWN:\n!spam_limit <Cantidad de Mensajes permitidos antes de activar el cooldown> | EJEMPLO: !spam_limit 5\n!cooldown_time <Cantidad de segundos de cooldown después de enviar muchos mensajes> | EJEMPLO: !cooldown_time 10\n!toggle_cooldown Activar/Desactivar Cooldown', 82000);
  sendAdminMessage(player, 'Establecer el tiempo de esperar entre cada llamada a los admins: `!minutosllamada <Cantidad de Minutos>`', 86000);
  sendAdminMessage(player, 'O F I C I A L E S:', 88000);
  sendAdminMessage(player, 'Activar/Desactivar las firmas: `!ofi`', 90000);
  sendAdminMessage(player, 'Para que los jugadores firmen: !firmo', 92000);
}




function clearbansFun(player){ // !clear
    if (player.admin == true){ room.clearBans(); room.sendAnnouncement(" [🗑️ 🧹]  Los bans han sido removidos por " + player.name + ".", player.id, 0xEB172D, "normal", 0);}
}

function setpasswordFun(player, message){  //!set_password  !confirm
    if (player.admin == true){
    code = message.substr(14)
    room.setPassword(code);
	room.sendAnnouncement("✳🔒 - " + player.name + " le ha colocado una contraseña al host.", null, 0xff8400, 'normal', 2);
    return false;
    }
}
 
function clearpasswordFun(player, message){  //!clear_password
    if (player.admin == true){
    room.setPassword();
	room.sendAnnouncement("🆓🔓 - " + player.name + " ha retirado la contraseña del host.", null, 0xff8400, 'normal', 2);
    return false;
    }
}



function ReglasFun(player) { // !reglas
    room.sendAnnouncement("📜 REGLAS DE LOS PENALES:", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒈ Sólo puede haber 1️⃣ (un) arquero.", player.id, 0x00FFBB, "normal", 1);
    room.sendAnnouncement("⒉ Los jugadores deben patear en orden. ✨", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒊ El jugador 𝐍𝐎 puede  ″𝙰𝙼𝙰𝙶𝙰𝚁″ en la ejecución del penal.​​", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("👨‍⚖️ Si incumple con ésta regla pero erra el penal, no hace falta repetir la ejecución.", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("Caso contrario, si el jugador amaga y convierte el penal, deberá ejecutarlo nuevamente. ⚖​ 🔁", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒋ Si un equipo tiene menos de 4 jugadores, tienen derecho a decidir si uno de ellos patea dos veces o eligen a un espectador.", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒌ No vale invadir el área mientras un jugador está por patear. 🚫", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒍ Si se ejecutaron todos los penales y aún persiste el empate:", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("Los arqueros deberán enfrentarse entre ellos hasta 5️⃣ v̲e̲c̲e̲s̲ c̲o̲m̲o̲ m̲á̲x̲i̲m̲o̲. ", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("Y si el empate persiste, t̲o̲d̲o̲s̲ l̲o̲s̲ j̲u̲g̲a̲d̲o̲r̲e̲s̲ d̲e̲b̲e̲r̲á̲n̲ p̲a̲t̲e̲a̲r̲ l̲o̲s̲ p̲e̲n̲a̲l̲e̲s̲ n̲u̲e̲v̲a̲m̲e̲n̲t̲e̲.", player.id, 0x00FFBB, "normal", 0);
}

const inactivityTimeout = MinutosPermitidosAFK * 60 * 1000; // 5 minutos
const playerInactivity = new Map(); // Mapa para rastrear la inactividad de los jugadores

function afkFun(player, message) {
    if (player.admin) {
        if (afkPlayerIDs.has(player.id)) {
            // Jugador regresó de AFK
            clearTimeout(playerInactivity.get(player.id)); // Elimina el temporizador de inactividad
            playerInactivity.delete(player.id); // Elimina la entrada del mapa de inactividad
            afkPlayerIDs.delete(player.id);
            if (modoJueganTodos) {
                const blueTeamCount = room.getPlayerList().filter(p => p.team === 1).length;
                const redTeamCount = room.getPlayerList().filter(p => p.team === 2).length;
                if (blueTeamCount <= redTeamCount) {
                    room.setPlayerTeam(player.id, 1); // Equipo azul (team = 1)
                } else {
                    room.setPlayerTeam(player.id, 2); // Equipo rojo (team = 2)
                }
            }
            room.sendAnnouncement("🚀 ¡" + player.name + " volvió y está listo para jugar! 🎮", null, 0x00FFBB, "bold", 0);
        } else {
            // Jugador se va a AFK
            afkPlayerIDs.add(player.id);
            room.setPlayerTeam(player.id, 0);
            setTimeout(() => {
                room.sendAnnouncement("🌴   ¡" + player.name + " se encuentra actualmente A F K! 🕒 💤", null, 0xff8400, 'bold', 2);

    // Después de enviar el anuncio, actualiza el tiempo de la última actividad del jugador a la hora actual
    if (playerPositions[playerId]) {
        playerPositions[playerId].lastUpdateTime = currentTime;
    }
}, 500);
            setTimeout(() => {
                room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️", player.id, 0xff8400, 'small-bold', 2);
            }, 1000);

            const admins = room.getPlayerList().filter(admin => admin.admin);
            if (admins.length > 0) {
                const adminNames = admins.map(admin => admin.name).join(", ");
                setTimeout(() => {
                    room.sendAnnouncement(`🛠️ Administrador(es): ${adminNames}, ¡Pueden usar !kickafks para expulsar a los jugadores AFK!`, null, 0x00FFBB, 'bold', 0);
                }, 3000);
            } else {
                setTimeout(() => {
                    room.sendAnnouncement("📣 El administrador puede echar a los jugadores AFK con el comando !kickafks.", null, 0x00FFBB, 'bold', 0);
                }, 3000);
            }
        }
    } else {
        if (afkPlayerIDs.has(player.id)) {
            // Jugador regresó de AFK
            clearTimeout(playerInactivity.get(player.id)); // Elimina el temporizador de inactividad
            playerInactivity.delete(player.id); // Elimina la entrada del mapa de inactividad
            afkPlayerIDs.delete(player.id);
            if (modoJueganTodos) {
                const blueTeamCount = room.getPlayerList().filter(p => p.team === 1).length;
                const redTeamCount = room.getPlayerList().filter(p => p.team === 2).length;
                if (blueTeamCount <= redTeamCount) {
                    room.setPlayerTeam(player.id, 1); // Equipo azul (team = 1)
                } else {
                    room.setPlayerTeam(player.id, 2); // Equipo rojo (team = 2)
                }
            }
            room.sendAnnouncement("🚀 ¡" + player.name + " volvió y está listo para jugar! 🎮", null, 0x00FFBB, "bold", 0);
        } else {
            // Jugador se va a AFK
            afkPlayerIDs.add(player.id);
            // Configura el temporizador de inactividad
            const inactivityTimer = setTimeout(() => {
                // Expulsa al jugador por inactividad
                room.kickPlayer(player.id, "⌛️ EXPULSADO por INACTIVIDAD 😴🚫", false);
                // Elimina la entrada del mapa de inactividad
                playerInactivity.delete(player.id);
            }, inactivityTimeout);
            playerInactivity.set(player.id, inactivityTimer);
            room.setPlayerTeam(player.id, 0);
            setTimeout(() => {
                room.sendAnnouncement("🌴   ¡" + player.name + " se encuentra actualmente A F K! 🕒 💤", null, 0xff8400, 'bold', 2);

    // Después de enviar el anuncio, actualiza el tiempo de la última actividad del jugador a la hora actual
    if (playerPositions[playerId]) {
        playerPositions[playerId].lastUpdateTime = currentTime;
    }
}, 500);
            setTimeout(() => {
                room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️", player.id, 0xff8400, 'small-bold', 2);
            }, 1000);
            setTimeout(() => {
                room.sendAnnouncement("🚨 ¡ATENCIÓN! Si te quedas AFK por " + MinutosPermitidosAFK + " MINUTOS ⌛, serás EXPULSADO del host. 🛑", player.id, 0xff8400, 'small-bold', 2);
            }, 1500);
            setTimeout(() => {
                room.sendAnnouncement("📌   RECUERDA QUE:        ⚠️ Si el administrador lo decide, puede echarte del host usando !kickafks. ⚠️", player.id, 0xff8400, 'small-bold', 2);
            }, 2000);

            const admins = room.getPlayerList().filter(admin => admin.admin);
            if (admins.length > 0) {
                const adminNames = admins.map(admin => admin.name).join(", ");
                setTimeout(() => {
                    room.sendAnnouncement(`🛠️ Administrador(es): ${adminNames}, ¡Pueden usar !kickafks para expulsar a los jugadores AFK!`, null, 0x00FFBB, 'bold', 0);
                }, 3000);
            } else {
                setTimeout(() => {
                    room.sendAnnouncement("📣 El administrador puede echar a los jugadores AFK con el comando !kickafks.", null, 0x00FFBB, 'bold', 0);
                }, 3000);
            }
        }
    }
}










function afksFun(player, message){ // !huge
    const afkPlayers = room.getPlayerList().filter(player => afkPlayerIDs.has(player.id));
    if (afkPlayers.length === 0) {
        room.sendAnnouncement("❎ No hay jugadores AFK en este host. ¡Todos están listos para jugar!", player.id, 0x00FFBB, "bold", 0);
    } else {
        const afkPlayersString = afkPlayers.map(player => player.name).join(", ");
        room.sendAnnouncement("💤 Jugadores AFK: " + afkPlayersString, player.id, 0x00FFBB, "bold", 0);
    }
}
 
function kickafksFun(player, message) {
    if (player.admin) {
        const adminName = player.name;
        const afkPlayers = room.getPlayerList().filter(x => afkPlayerIDs.has(x.id));
        for (const afkPlayer of afkPlayers) {
            if (!afkPlayer.admin) {
                // Excluir a los administradores de la expulsión
                room.kickPlayer(afkPlayer.id, "⚠️ ¡Expulsado por " + adminName + " por estar AFK!", false);
            }
        }
    }
}


function initBallCarrying(redTeam, blueTeam){
    var ballCarrying = new Map();
    var playing = redTeam.concat(blueTeam);
    for (var i = 0; i < playing.length; i++) {
        ballCarrying.set(playing[i].name, [0, playing[i].team]); // secs, team, %
    }
    return ballCarrying;
}
 
 
function updateTeamPoss(value){
    if (value[1] == 1) redPoss += value[0];
    if (value[1] == 2) bluePoss += value[0];
}
 
var bluePoss;
var redPoss;
var timeOnHalves;
function PosesionBalonFun(player, message){


    // Enviar el anuncio con el porcentaje de posesión de cada equipo

    if (room.getScores() == null) return false;
    bluePoss = 0;
    redPoss = 0;
    ballCarrying.forEach(updateTeamPoss);
    var redPossPercent = Math.round((redPoss / (redPoss + bluePoss + 0.000001)) * 100);
    var bluePossPercent = Math.round((bluePoss / (redPoss + bluePoss + 0.000001)) * 100);
    var totalPosesion = posesionEquipoA + posesionEquipoB;
    var porcentajeEquipoA = totalPosesion === 0 ? 0 : (posesionEquipoA / totalPosesion) * 100;
    var porcentajeEquipoB = totalPosesion === 0 ? 0 : (posesionEquipoB / totalPosesion) * 100;

var mensaje = 'Posesión de balón ⚽ 𒁂 [ 🔴 ' + teamRed + ': ' + porcentajeEquipoA.toFixed(2) + '% ] 🆚 [ 🔵 ' + teamBlue + ': ' + porcentajeEquipoB.toFixed(2) + '% ] 𒁂';
room.sendAnnouncement(mensaje, player.id, 0xc2ff33, "bold", 0);

    var timeOnRedHalf = Math.round((timeOnHalves[0] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    var timeOnBlueHalf = Math.round((timeOnHalves[1] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
var timeAnnouncement = 'Pelota en campo ⚽ 𒁂 [ 🔴 ' + teamRed + ' ' + timeOnRedHalf + '% ] 🆚 [ 🔵 ' + teamBlue + ' ' + timeOnBlueHalf + '% ] 𒁂';
room.sendAnnouncement(timeAnnouncement, player.id, 0xc2ff33, "bold", 0);}



function teamPossFun(player, message){

    // Enviar el anuncio con el porcentaje de posesión de cada equipo

    if (room.getScores() == null) return false;
    bluePoss = 0;
    redPoss = 0
    ballCarrying.forEach(updateTeamPoss);
    var redPossPercent = Math.round((redPoss / (redPoss + bluePoss + 0.000001)) * 100);
    var bluePossPercent = Math.round((bluePoss / (redPoss + bluePoss + 0.000001)) * 100);
    var totalPosesion = posesionEquipoA + posesionEquipoB;
    var porcentajeEquipoA = totalPosesion === 0 ? 0 : (posesionEquipoA / totalPosesion) * 100;
    var porcentajeEquipoB = totalPosesion === 0 ? 0 : (posesionEquipoB / totalPosesion) * 100;

var AnuncioPosesion = 'Posesión de balón ⚽ 𒁂 [ 🔴 ' + teamRed + ': ' + porcentajeEquipoA.toFixed(2) + '% ] 🆚 [ 🔵 ' + teamBlue + ': ' + porcentajeEquipoB.toFixed(2) + '% ] 𒁂';
room.sendAnnouncement(AnuncioPosesion, null, 0xc2ff33, "bold", 0);

    var timeOnRedHalf = Math.round((timeOnHalves[0] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    var timeOnBlueHalf = Math.round((timeOnHalves[1] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
var AnuncioPelotaEnCampo = 'Pelota en campo ⚽ 𒁂 [ 🔴 ' + teamRed + ' ' + timeOnRedHalf + '% ] 🆚 [ 🔵 ' + teamBlue + ' ' + timeOnBlueHalf + '% ] 𒁂';
room.sendAnnouncement(AnuncioPelotaEnCampo, null, 0xc2ff33, "bold", 0);
}  





function BanIpFun(player, message) {
    // Previene que alguien hable en la sala (utiliza el apodo, no el ID)
    // necesita ser administrador
    if (player.admin == true) {
        let ipToAdd = message.substr(7);

        // Busca el nombre asociado a la IP
        const NickDelJugador = getPlayerNameByIP(ipToAdd);

        // Agrega la IP a la lista
        if (!IpPlayers.includes(ipToAdd)) {
            IpPlayers.push(ipToAdd);

            // Envía el anuncio
            room.sendAnnouncement(`El Administrador ${player.name} ha añadido la IP de ${NickDelJugador} a la Blacklist`, null, 0x05ff02, "normal", 0);

            // Verifica si el jugador está presente en la sala
            const targetPlayer = room.getPlayerList().find(p => p.name === NickDelJugador);
            if (targetPlayer) {
                // Kickea al jugador y lo banea
                room.kickPlayer(targetPlayer.id, MensajeBaneoPorIp, true);
            } else {
                // Envía anuncios si el jugador es desconocido
                room.sendAnnouncement(`Admin ${player.name}: La forma correcta de usar !banip es: !banip <IP del Jugador> | Ejemplo: !banip 123.456.789`, player.id, 0xFF5252, "normal", 0);
                room.sendAnnouncement(`Para ver la IP de un jugador, utiliza el comando: !ip NICKNAME DEL JUGADOR | Ejemplo: !ip Lionel Messi #10`, player.id, 0x05ff02, "normal", 0);
            }
        }
    }
}


function unBanIpFun(player, message) {
    // Allow somebody to talk if he has been muted
    // need to be admin
    if (player.admin == true) {
        let ipToRemove = message.substr(9);

        // Busca el nombre asociado a la IP
        const NickDelJugador = getPlayerNameByIP(ipToRemove);

        // Elimina la IP de la lista
        let pos = IpPlayers.indexOf(ipToRemove);
        if (pos !== -1) {
            IpPlayers.splice(pos, 1);

            // Envía el anuncio
            room.sendAnnouncement(`El Administrador ${player.name} ha retirado la IP de ${NickDelJugador} de la Blacklist`, null, 0x05ff02, "normal", 0);
        }
    }
}

// Función para obtener el nombre de jugador asociado a una IP
function getPlayerNameByIP(ip) {
    const playerInfo = playerIPs.find(info => info.ip === ip);
    return playerInfo ? playerInfo.nickname : "Jugador Desconocido";
}


var JugadoresBaneadosXIp = false;
function unBanAllIpsFun(player, message){ // !mute Anddy
    // Prevent somebody to talk in the room (uses the nickname, not the id)
    // need to be admin
    if (player.admin == true){
        JugadoresBaneadosXIp = false;
        IpPlayers = [];
	room.clearBans();
    room.sendAnnouncement("[✅ 🔓] " + player.name + " ha eliminado la lista de jugadores baneados por IP.", null, 0xd733ff, "normal", 0);
    }
} 


// Función para mutear a un jugador
function pushMute(playerId, duration, adminName) {
    // Buscar el jugador con el ID especificado
    const targetPlayer = room.getPlayer(playerId);

    if (targetPlayer) {
        // Calcular el tiempo de muteo en milisegundos
        const muteTime = duration === Infinity ? Infinity : Date.now() + (duration * 60 * 1000); // Convertir minutos a milisegundos

        // Almacenar el tiempo de muteo para el jugador utilizando su nombre como clave
        mutedPlayers[targetPlayer.name] = { muteTime: muteTime, admin: adminName };

        // Formatear el anuncio con emojis para mayor impacto visual
        var announcement;
        if (duration === Infinity) {
            announcement = "🔇 " + targetPlayer.name + " ha sido MUTEADO 🤐 indefinidamente por " + adminName + ".";
        } else {
            announcement = "🔇 " + targetPlayer.name + " ha sido MUTEADO 🤐 por " + duration + " minutos por " + adminName + ".";
        }
        room.sendAnnouncement(announcement, null, 0xFF0000, "bold", 0);
    } else {
        var usageMessage = "❗️ No se encontró ningún jugador con el ID especificado. Por favor, asegúrate de usar el formato correcto: !mute ID [duration] ❗️";
        room.sendAnnouncement(usageMessage, null, 0xFF0000, "bold", 2);
    }
}

// Función para desmutear a un jugador
function unmuteFun(player, message) { // !unmute ID
    // Permitir que alguien hable si ha sido silenciado previamente
    // Debe ser administrador
    if (player.admin === true) {
        const spacePos = message.search(" ");
        const targetPlayerId = parseInt(message.substr(spacePos + 1)); // Parsear el ID como entero

        // Si el ID no es un número válido o si no se incluyó un ID en el comando
        if (isNaN(targetPlayerId) || spacePos === -1) {
            var usageMessage = "❗️ Uso incorrecto del comando !unmute. Por favor, asegúrate de usar el formato correcto: !unmute ID ❗️";
            room.sendAnnouncement(usageMessage, player.id, 0xFF0000, "bold", 2);
            return;
        }

        // Buscar el jugador con el ID especificado
        const targetPlayer = room.getPlayer(targetPlayerId);

        if (targetPlayer) {
            // Eliminar al jugador de la lista de jugadores muteados
            delete mutedPlayers[targetPlayer.name];

            // Formatear el anuncio con emojis para mayor impacto visual
            var announcement = "🔊 " + targetPlayer.name + " ha sido DESMUTEADO 🔓 por " + player.name + " 🔊";
            room.sendAnnouncement(announcement, null, 0x00FF00, "bold", 0);
        }
    }
}

var isRoomMuted = false;
function UnmuteAll(player, message){ // !mute Anddy
    // Prevent somebody to talk in the room (uses the nickname, not the id)
    // need to be admin
    if (player.admin == true){
        isRoomMuted = false;
        mutedPlayers = [];
    room.sendAnnouncement("📣 " + player.name + " ha desmuteado a todos los jugadores. 🗣️🔓", null, 0x32cd32, "bold", 0);
    }
}  
 

function EspecialesFun(player) { // !1
    room.sendAnnouncement('⎝༽  | ︻╦̵̵╤── | ඞ |  ⊹ | ✧ | ✦ | ツ | ♬ | ᕦ( ͡° ͜ʖ ͡°)ᕤ | 乡 | 『』 | 卍 | 〘〙| ༒ |  ௵ | 々| 𒆜 | 𒐫 | 𒈞', player.id, 0xFF003C, "normal", 0);
}
function NumeroUnoFun(player) { // !1
    room.sendAnnouncement('🔢  𝟭         ౹         𝟏          𝟷          𝟣         １         ߗ1𐰯¹₁⥠↿˥⒈         𝟏        𝟷𐰯 І        Ι         Ӏ        ᅵ        𝗹        ।         ⅂        𐐑        ⓵        ①         ➀         ➊         ⅼ   para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}
function NumeroDosFun(player) { // !1
    room.sendAnnouncement('🔢  𝟮        Ƨ        2️⃣        ౽        ੨ 	       ૨        ২        २        ௨        𝟐        ２        2        ᒿ        𝟤        ᒾ        ²        ₂        շ        𝟸        ᘖ        𝟚        Ձ        ⒉        ƻ        Չ        Զ        ϩ        ⓶        ②        ➁        ❷        ㈃        ⒛ para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}
function NumeroTresFun(player) { // !1
    room.sendAnnouncement('🔢  Ʒ        3        3️⃣        ३        ੩        ʒ        ӡ        Ӡ        ᴣ        ᶾ        э        Э        ℈        ぅ        う        ㄋ        ȝ        Ȝ        𝟯        𝟥        з        ɜ        ᴈ        ᢃ        ౩        ⓷        ③        ➂        ❸        ੩        ૩        ३ para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}
function NumeroCuatroFun(player) { // !1
    room.sendAnnouncement('🔢  𝟰        ㏣        ㍜        𝟒        ４        𝟺        𝟦        4        ₄        ⁴        Ϥ        կ        Կ        Ч        ч        ɥ        ౺        ⒋ para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}
function NumeroCincoFun(player) { // !1
    room.sendAnnouncement('🔢  Ƽ        ƽ        𐐠        𐑈        𝟱        𝟓        ５        ㏤        5        ㍝        5️⃣        𝟻        5        ₅        ⁵        ⒌ para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}
function NumeroSeisFun(player) { // !1
    room.sendAnnouncement('🔢  𝟲        𝟔        ６        𝟼        ㏥        ㍞        6        𝟨        ₆        ⁶        𝟞        ⒍        ⑥        ⓺        ➅        ➏        ❻        ɓ        ꕃ para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}
function NumeroSieteFun(player) { // !1
    room.sendAnnouncement('🔢 𐓒        𐒇        ⅂        𐐑        ヿ        ⏋        ⌉        𝟳        𝟕        𝟟        7        𝟽        ７        ⁊        ₇        ⁷        𝟩        7️⃣        ⒎        ꔔ para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}
function NumeroOchoFun(player) { // !1
    room.sendAnnouncement('🔢  𝟴        𝟖        8        𝟪        ৪        ⁸        ₈        ８        𐌚        𝟾        ꖉ        ⊟        𝛉        ⒏        ㏧        ㍠        8️⃣ para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}
function NumeroNueveFun(player) { // !1
    room.sendAnnouncement('🔢  𝟵        𝟗        9        𝟿        ９        𝟫        ⁹        ₉        ୨        ց        ɡ        ᕤ        ⒐        9        ㏨        ㍡        9️⃣        𝟡        ۹        ٩        ᑫ        ᑴ        𐒘 para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}
function NumeroDiezFun(player) { // !1
    room.sendAnnouncement('🔢  ⒑        🔟        ⑩        ➉        ➓        ❿        ю        Ю        ㍢        ㏩        ⑽ para más ve a https://tell.wtf', player.id, 0xFF003C, "normal", 0);
}

function LinkDiscordFun(player) { // !1
    room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", player.id, 0x7289da, "normal", 0)
    room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", player.id, 0x7289da, "normal", 0)
    room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", player.id, 0x7289da, "normal", 0);
    room.sendAnnouncement("                                        💬👥 𝑼𝑵𝑨𝑵𝑺𝑬 𝑨𝑳 𝑫𝑰𝑺𝑪𝑶𝑹𝑫 ➡ " + DiscordLink + " ⬅", player.id, 0xF6FF43, "normal", 0);
}

function LinkTwitchFun(player) { // !1
    room.sendAnnouncement("                                        ▀▀█▀▀ ▒█░░▒█ ▀█▀ ▀▀█▀▀ ▒█▀▀█ ▒█░▒█  ", player.id, 0x9146FF, "normal", 0)
    room.sendAnnouncement("                                        ░▒█░░ ▒█▒█▒█ ▒█░ ░▒█░░ ▒█░░░ ▒█▀▀█  ", player.id, 0x9146FF, "normal", 0)
    room.sendAnnouncement("                                        ░▒█░░ ▒█▄▀▄█ ▄█▄ ░▒█░░ ▒█▄▄█ ▒█░▒█ ", player.id, 0x9146FF, "normal", 0);
    room.sendAnnouncement("                                        💜🎮 𝑼𝑵𝑬𝑻𝑬 𝑨 𝑻𝑾𝑰𝑻𝑪𝑯 ➡ " + TwitchLink + " ⬅", player.id, 0xF6FF43, "normal", 0);
}

function LinkYoutubeFun(player) { // !1
    room.sendAnnouncement("                                        ▒█░░▒█ ▒█▀▀▀█ ▒█░▒█ ▀▀█▀▀ ▒█░▒█ ▒█▀▀█ ▒█▀▀▀   ", player.id, 0xe52d27, "normal", 0)
    room.sendAnnouncement("                                        ▒█▄▄▄█ ▒█░░▒█ ▒█░▒█ ░▒█░░ ▒█░▒█ ▒█▀▀▄ ▒█▀▀▀   ", player.id, 0xe52d27, "normal", 0)
    room.sendAnnouncement("                                        ░░▒█░░ ▒█▄▄▄█ ░▀▄▄▀ ░▒█░░ ░▀▄▄▀ ▒█▄▄█ ▒█▄▄▄ ", player.id, 0xe52d27, "normal", 0);
    room.sendAnnouncement("                                        🔴📺 𝑼𝑵𝑬𝑻𝑬 𝑨 𝒀𝑶𝑼𝑻𝑼𝑩𝑬 ➡ " + YoutubeLink + " ⬅", player.id, 0xF6FF43, "normal", 0);
}



function LinkScriptFun(player) { // !1
    var ColoresRandomBot2 = [0xF6FF43, 0x00ffd5, 0xbfff50, 0xffd050];
    var GeneradorColoresRandom2 = ColoresRandomBot2[(Math.random() * ColoresRandomBot2.length) | 0]
    room.sendAnnouncement('❔ SERVIDOR PARA REALIZAR CONSULTAS: discord.gg/tDEUbJU8QB', player.id, GeneradorColoresRandom2, "normal", 0);
    room.sendAnnouncement('📺 VIDEOTUTORIAL: youtu.be/xkgB_5V7BZk?si=RNG3LmGOh1EnKAaY', player.id, GeneradorColoresRandom2, "normal", 0);
    room.sendAnnouncement('🔗 LINK DEL SCRIPT: bit.ly/GLH-Script', player.id, GeneradorColoresRandom2, "normal", 0);

}

function AvatarNumerosFun(player) { // !1
    var ColoresRandomBot2 = [0xF6FF43, 0x00ffd5, 0xbfff50, 0xffd050];
    var GeneradorColoresRandom2 = ColoresRandomBot2[(Math.random() * ColoresRandomBot2.length) | 0]
    room.sendAnnouncement('Para ver números para tu avatar escribe !1, !2, !3, !4, !5, !6, !7, !8, !9 o !10.', player.id, GeneradorColoresRandom2, "normal", 0);
}

function TamanoJugadorFun(player) {
    var ColoresRandomBot2 = [0xF6FF43, 0x00ffd5, 0xbfff50, 0xffd050];
    var GeneradorColoresRandom2 = ColoresRandomBot2[(Math.random() * ColoresRandomBot2.length) | 0]
  room.sendAnnouncement('🏀 ¡Elige el tamaño de tu jugador! 📏 \n\nPara ajustar el tamaño de tu jugador, escribe "!size Número". Debe ser un número entre ' + TamanoMinimoPermitido + ' y ' + TamanoMaximoPermitido + ', siendo 15 el tamaño normal. \n\n🔽 Cuanto más pequeño sea el número, más pequeño será tu jugador. \n\n🔼 Si colocas un número grande, ¡tu jugador será más grande! 🎉', player.id, GeneradorColoresRandom2, "normal", 0);
  room.sendAnnouncement('Ejemplo: !size 12', player.id, 0x34F73A, "normal", 0);
}




function changeOurSize(player, message) {
    const DEFAULT_SIZE = 15;
    var MIN_SIZE = TamanoMinimoPermitido;
    var MAX_SIZE = TamanoMaximoPermitido;

    if (player.team !== 0 && !tookASize.hasOwnProperty(player.id)) {
        let size = message.substr("!size ".length);
        if (!isNaN(size) && size >= MIN_SIZE && size <= MAX_SIZE) {
            // Calculating invmass based on size
            let invMass = 0.5 + (DEFAULT_SIZE - size) * 0.02;

            room.setPlayerDiscProperties(player.id, {
                radius: size,
                invMass: invMass
            });
            tookASize[player.id] = size;
        } else {
            room.sendAnnouncement("📏 ¡Personaliza tu tamaño por el que quieras! 🏀\nSolo escribe !size seguido de un número entre " + MIN_SIZE + " y " + MAX_SIZE + " para ajustar tu tamaño. 😄 Si escribes !size 12, por ejemplo, te volverás más pequeño. El tamaño que tienen por defecto es 15.\n¡Diviértete jugando! 🎉", player.id, 0xbfff35, "normal", 0);
        }
    } else {
        room.sendAnnouncement("🔄 ¡Puedes cambiar tu tamaño una sola vez por partido! ⚽️\n\nRecuerda que solo puedes ajustar tu tamaño una vez. Así que elige sabiamente cuando decidas cambiarlo. ¡Diviértete jugando y aprovecha tu única oportunidad! 🎉", player.id, 0xbfff35, "normal", 0);
    }
    return false;
}

function InvertirColores(player) {
    if (player.admin == true) {
        // Intercambiar colores de los equipos
        room.setTeamColors(1, blueAngle, blueTextColor, blueColor);
        room.setTeamColors(2, redAngle, redTextColor, redColor);

        // Enviar anuncio
        room.sendAnnouncement("[🔄👕] ¡Camisetas intercambiadas con éxito!", null, 0x00FF00, "bold", 2);

        // Intercambiar valores de las variables
        let saveCamiAngle = blueAngle;
        let saveCamiColor = blueColor;
        let saveCamiText = blueTextColor;

        blueAngle = redAngle;
        blueTextColor = redTextColor;
        blueColor = redColor;

        redAngle = saveCamiAngle;
        redColor = saveCamiColor;
        redTextColor = saveCamiText;

        // Intercambiar nombres de equipos
        let tempTeamName = teamRed;
        teamRed = teamBlue;
        teamBlue = tempTeamName;
    }
}

var comandosGLH = {
    // Command that doesnt need to know players attributes.
    "!swapcolors": InvertirColores,
    "!help": helpFun,
    "!ayuda": helpFun,
    "!ids": ListaDeJugadoresFun,
    "!tutorial": TutorialFun,
    "!resultados": ResultadosFun,
    "!reglamento": ReglamentoFun,
    "!fixture": FixtureFun,
    "!size": changeOurSize,
    "!tamaño": TamanoJugadorFun,
    "!discord": LinkDiscordFun,
    "!youtube": LinkYoutubeFun,
    "!twitch": LinkTwitchFun,
    "!script": LinkScriptFun,
    "!avatar": AvatarNumerosFun,
    "!numeros": AvatarNumerosFun,
    "!1": NumeroUnoFun,
    "!especiales": EspecialesFun,
    "!2": NumeroDosFun,
    "!3": NumeroTresFun,
    "!4": NumeroCuatroFun,
    "!5": NumeroCincoFun,
    "!6": NumeroSeisFun,
    "!7": NumeroSieteFun,
    "!8": NumeroOchoFun,
    "!9": NumeroNueveFun,
    "!10": NumeroDiezFun,
    "!banip" : BanIpFun,
    "!unbanip" : unBanIpFun,
    "!unbanallips": unBanAllIpsFun,
    "!unmuteall" : UnmuteAll,
    "!afk" : afkFun,
    "!poss" : PosesionBalonFun,
    "!afks" : afksFun,
    "!kickafks" : kickafksFun,
    "!reglas": ReglasFun,
    "!clearbans": clearbansFun,
    "!clear_password": clearpasswordFun,
    "!swap": swapFun,
    "!tenis": TenisFun,
    "!mapas": MapasFun,
    "!rr": resetFun,
    "!nv" : leaveFun,
    "!bb" : leaveFun,
    "!adormir" : leaveFun,
    "!acomer" : leaveFun


}


var commands = {
    "!adminhelp": adminHelpFun,
    "!unmute": unmuteFun,
    "!md": pmFun,
    "!pv": pmFun,
    "!set_password": setpasswordFun
}

function LinkDelScript(player) {
    var scores = room.getScores();
    var ColoresRandomBot = [0xF6FF43, 0x00ffd5, 0xbfff50, 0xffd050];
    var GeneradorColoresRandom = ColoresRandomBot[(Math.random() * ColoresRandomBot.length) | 0]
    var AvisosRandomBot = ['🤖 CREÁ TU PROPIO HOST CON BOT:', '🔗 LINK DEL BOT DE ESTE HOST:', '📚 TUTORIAL PARA CREAR TU HOST CON BOT:', '🏟️ CREÁ TU PROPIA SALA DE REAL SOCCER REVOLUTION:', '📖 TUTORIAL PARA CREAR HOST DE RS REVOLUTION:']
    var GeneradorAvisosRandom = AvisosRandomBot[(Math.random() * AvisosRandomBot.length) | 0]
    if (scores.time > 3 && !isTimeAddedShownseis) {
    room.sendAnnouncement("                                        𒁂 ✨ " + GeneradorAvisosRandom  + "  ➡ https://youtu.be/Mkh7WcN8pSg ⬅ 𒁂", player, GeneradorColoresRandom, "normal", 0);
    isTimeAddedShownseis = true;
}
    if (scores.time > 0.3 && !isTimeAddedShownseis) {

  isGamePaused = false;
    room.sendAnnouncement("   🏆    E S T A N    J U G A N D O  :       " + teamRed + "   vs   " + teamBlue, player, GeneradorColoresRandom, "normal", 0);
    room.sendAnnouncement("Escribe !help para ver los comandos disponibles.", player, GeneradorColoresRandom, "normal", 0);    
isTimeAddedShownseis = true;


    }
}


function LinkDelScript3(player) {
    var scores = room.getScores();
    var TiempoEnElQueApareceElMensaje = AnuncioMinuto * 60 + AnuncioSegundos;
    if (scores.time > TiempoEnElQueApareceElMensaje && !DetenerAviso) {
        room.sendAnnouncement(Anuncio, player, 0xFFFFFF, "bold", 0);
        DetenerAviso = true;
    }
}



function LinkDelScript2(player) {
    if (room.getScores().time >= 5 && !DetenerAnuncio) {
        // Obtener la lista de jugadores
        var players = room.getPlayerList();

        // Filtrar jugadores por equipo Rojo
        var redPlayers = players.filter(player => player.team === 1);

        // Filtrar jugadores por equipo Azul
        var bluePlayers = players.filter(player => player.team === 2);

        // Encontrar al jugador del equipo Rojo con la posición en X más baja
        ArqueroRED = redPlayers.reduce((minXPlayer, currentPlayer) => {
            return minXPlayer.position.x < currentPlayer.position.x ? minXPlayer : currentPlayer;
        }, redPlayers[0]);

        // Encontrar al jugador del equipo Azul con la posición en X más alta
        ArqueroBLUE = bluePlayers.reduce((maxXPlayer, currentPlayer) => {
            return maxXPlayer.position.x > currentPlayer.position.x ? maxXPlayer : currentPlayer;
        }, bluePlayers[0]);

        // Enviar el anuncio con la información sobre los arqueros
        var message = "🔴 🧤⚽ GK " + teamRed + ": " +(ArqueroRED ? ArqueroRED.name : "No tiene") + " ------- 🔵 🧤⚽ GK " + teamBlue + ": " + (ArqueroBLUE ? ArqueroBLUE.name : "No tiene");
        room.sendAnnouncement(message, null, 0xFFFFFF, "bold", 0);  // Puedes ajustar el color según tus preferencias

        // Reiniciar las variables en cada tick (si es necesario)
        // ArqueroRED = null;
        // ArqueroBLUE = null;
DetenerAnuncio = true;

    }
}



function ReiniciarPuntosJugadores(player) {
    if (room.getScores().time > 0.1 && !ReiniciarStatsEnCero) {
    playerGoals = {};
    playerAssists = {};
    playerPoints = {};
ReiniciarStatsEnCero = true;

    }
}




function DetectorGK(player) {
    if (room.getScores().time >= 0.2) {
        // Obtener la lista de jugadores
        var players = room.getPlayerList();

        // Filtrar jugadores por equipo Rojo
        var redPlayers = players.filter(player => player.team === 1);

        // Filtrar jugadores por equipo Azul
        var bluePlayers = players.filter(player => player.team === 2);

        // Encontrar al jugador del equipo Rojo con la posición en X más baja
        ArqueroRED = redPlayers.reduce((minXPlayer, currentPlayer) => {
            return minXPlayer.position.x < currentPlayer.position.x ? minXPlayer : currentPlayer;
        }, redPlayers[0]);

        // Encontrar al jugador del equipo Azul con la posición en X más alta
        ArqueroBLUE = bluePlayers.reduce((maxXPlayer, currentPlayer) => {
            return maxXPlayer.position.x > currentPlayer.position.x ? maxXPlayer : currentPlayer;
        }, bluePlayers[0]);

        // Enviar el anuncio con la información sobre los arqueros
        var message = "🔴 🧤⚽ GK " + teamRed + ": " +(ArqueroRED ? ArqueroRED.name : "No tiene") + " ------- 🔵 🧤⚽ GK " + teamBlue + ": " + (ArqueroBLUE ? ArqueroBLUE.name : "No tiene");

    }
}


function GetTeam(id){
    return room.getPlayerList().filter((player) => player.id != 0 && player.team == id);
}

function CreatePlayer(player){
    ListaDeJugadores[ListaDeJugadores.length]={
	name:player.name,
	id:player.id,
	auth:undefined,
	conn:undefined,
	jointime:0
    };
}

function DeletePlayer(id){
    for(var i=0; i<ListaDeJugadores.length; i++){
	if(ListaDeJugadores[i].id==id){
	    ListaDeJugadores.splice(i,1);
	}
    }
}

function GetPlayer(id){
    for(var i=0; i<ListaDeJugadores.length; i++){
	if(ListaDeJugadores[i].id==id){
	    return ListaDeJugadores[i];
	}
    }
}

function GetIDByName(name){
    for(var i=0; i<ListaDeJugadores.length; i++){
	if(ListaDeJugadores[i].name==name){
	    return ListaDeJugadores[i].id;
	}
    }
}

function GetAuthByID(id){
    for(var i=0; i<ListaDeJugadores.length; i++){
	if(ListaDeJugadores[i].id==id){
	    return GetPlayer(ListaDeJugadores[i].id).auth;
	}
    }
}




function generar_respuesta_aleatoria() {
  // Lista de respuestas posibles
  var respuestas = [
    "Sí! ✅",
    "Naa, ni en pedo ❌",
    "Puede ser, ¿quién sabe? ಠ_ಠ",
    "No sé, boludo ಠ_ಠ",
    "Obvio que sí, papá (ง︡'-'︠)ง",
    "Ni a palos, hermano ❎",
    "Capaz, ¿por qué no? 🤔",
    "Sin duda alguna 💯",
    "No tengo ni idea, amigo 🤷‍♂️",
    "¿Te digo la posta? No tengo la más puta idea ಠ_ಠ",
    "¡Por supuesto que sí! (ง︡'-'︠)ง",
    "Es probable 🤔",
    "No ❌",
    "No tengo la menor idea ಠ_ಠ",
    "Sin duda alguna, hermano 💯",
    "¡Ni en pedo, flaco! ❌",
    "Podría ser, no te aseguro nada 🤔",
    "Totalmente afirmativo 💯",
    "No, olvidate ❎",
    "Ni en pedo, ni lo sueñes ❌",
    "Capaz, puede ser. 🤔",
    "Tristemente sí. ಥ_ಥ",
    "Tristemente no. ಥ_ಥ",
    "Puede ser, no sé, eh 🤔",
    "Puede que sí, puede que no, ¿quién carajo sabe? 🤔",
    "La posta es que no tengo idea 🤷‍♂️"
  ];

  // Selecciona una respuesta aleatoria de la lista
  var respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];

  return respuesta;
}







function removeAccents(str) {
  const accents = "ÁÉÍÓÚáéíóú";
  const replacements = "AEIOUaeiou";
  const accentMap = new Map();

  for (let i = 0; i < accents.length; i++) {
    accentMap.set(accents[i], replacements[i]);
  }

  return str.replace(/[ÁÉÍÓÚáéíóú]/g, (character) => accentMap.get(character));
}

// Función para mezclar aleatoriamente los jugadores de los equipos
function shuffleTeams() {
  const players = room.getPlayerList();

  // Filtrar jugadores activos y asignar a los equipos
  const activePlayers = players.filter(player => !player.spectator);
  const team1Players = activePlayers.filter(player => player.team === 1);
  const team2Players = activePlayers.filter(player => player.team === 2);

  // Mezclar los jugadores de los equipos
  const shuffledPlayers = shuffleArray(team1Players.concat(team2Players));

  // Asignar los jugadores a los equipos de forma alternativa
  const totalPlayers = shuffledPlayers.length;
  const halfPlayers = Math.floor(totalPlayers / 2);

  for (let i = 0; i < totalPlayers; i++) {
    const player = shuffledPlayers[i];
    const team = (i < halfPlayers) ? 1 : 2;
    room.setPlayerTeam(player.id, team);
  }

  // Colocar los jugadores restantes como espectadores
  const remainingPlayers = players.filter(player => !activePlayers.includes(player));
  for (const player of remainingPlayers) {
    room.setPlayerTeam(player.id, 0); // 0 representa el equipo de espectadores
  }

  room.sendAnnouncement("¡Los equipos han sido mezclados de forma aleatoria!");
}

// Función para equilibrar los equipos
function balanceTeams() {
  const players = room.getPlayerList();

  // Filtrar jugadores activos y asignar a los equipos
  const activePlayers = players.filter(player => !player.spectator);
  const totalPlayers = activePlayers.length;

  // Calcular el número objetivo de jugadores en cada equipo
  const targetPlayersPerTeam = Math.floor(totalPlayers / 2);

  const team1Players = activePlayers.filter(player => player.team === 1);
  const team2Players = activePlayers.filter(player => player.team === 2);

  const diff = Math.abs(team1Players.length - team2Players.length);

  if (diff > 1) {
    // Realizar el equilibrio de equipos solo si hay una disparidad mayor a 1 jugador
    const playersToMove = Math.floor(diff / 2);

    if (team1Players.length > team2Players.length) {
      const playersToMoveFromTeam1 = team1Players.slice(-playersToMove);
      for (const player of playersToMoveFromTeam1) {
        room.setPlayerTeam(player.id, 2);
      }
    } else {
      const playersToMoveFromTeam2 = team2Players.slice(-playersToMove);
      for (const player of playersToMoveFromTeam2) {
        room.setPlayerTeam(player.id, 1);
      }
    }

    room.sendAnnouncement("¡Los equipos han sido equilibrados!");
  } else {
    room.sendAnnouncement("No es necesario equilibrar los equipos.");
  }
}


// Función para equilibrar los equipos de forma automática
function autoBalanceTeams() {
  if (!autoBalanceEnabled || autoBalancePaused) {
    return; // Salir si el equilibrio automático está desactivado o pausado
  }

  const players = room.getPlayerList();

  // Filtrar jugadores activos y asignar a los equipos
  const activePlayers = players.filter(player => !player.spectator);
  const totalPlayers = activePlayers.length;

  // Calcular el número objetivo de jugadores en cada equipo
  const targetPlayersPerTeam = Math.floor(totalPlayers / 2);

  const team1Players = activePlayers.filter(player => player.team === 1);
  const team2Players = activePlayers.filter(player => player.team === 2);

  const diff = Math.abs(team1Players.length - team2Players.length);

  if (diff > 1) {
    // Realizar el equilibrio de equipos solo si hay una disparidad mayor a 1 jugador
    const playersToMove = Math.floor(diff / 2);

    if (team1Players.length > team2Players.length) {
      const playersToMoveFromTeam1 = team1Players.slice(-playersToMove);
      for (const player of playersToMoveFromTeam1) {
        room.setPlayerTeam(player.id, 2);
      }
    } else {
      const playersToMoveFromTeam2 = team2Players.slice(-playersToMove);
      for (const player of playersToMoveFromTeam2) {
        room.setPlayerTeam(player.id, 1);
      }
    }

	room.sendAnnouncement("¡Los equipos han sido equilibrados automáticamente! 🔄⚖️", null, 0x00ff00, "bold", 0);

  }
}




function sendAnnouncementInChat(message, targetId, color, style, sound) {
  room.sendAnnouncement(message, targetId, color, style, sound);
}



function getRankEmoji(rank) {
const rankEmojis = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "1️⃣0️⃣",
  "1️⃣1️⃣", "1️⃣2️⃣", "1️⃣3️⃣", "1️⃣4️⃣", "1️⃣5️⃣", "1️⃣6️⃣", "1️⃣7️⃣", "1️⃣8️⃣", "1️⃣9️⃣", "2️⃣0️⃣",
  "2️⃣1️⃣", "2️⃣2️⃣", "2️⃣3️⃣", "2️⃣4️⃣", "2️⃣5️⃣", "2️⃣6️⃣", "2️⃣7️⃣", "2️⃣8️⃣", "2️⃣9️⃣", "3️⃣0️⃣",
  "3️⃣1️⃣", "3️⃣2️⃣", "3️⃣3️⃣", "3️⃣4️⃣", "3️⃣5️⃣", "3️⃣6️⃣", "3️⃣7️⃣", "3️⃣8️⃣", "3️⃣9️⃣", "4️⃣0️⃣",
  "4️⃣1️⃣", "4️⃣2️⃣", "4️⃣3️⃣", "4️⃣4️⃣", "4️⃣5️⃣", "4️⃣6️⃣", "4️⃣7️⃣", "4️⃣8️⃣", "4️⃣9️⃣", "5️⃣0️⃣",
  "5️⃣1️⃣", "5️⃣2️⃣", "5️⃣3️⃣", "5️⃣4️⃣", "5️⃣5️⃣", "5️⃣6️⃣", "5️⃣7️⃣", "5️⃣8️⃣", "5️⃣9️⃣", "6️⃣0️⃣",
  "6️⃣1️⃣", "6️⃣2️⃣", "6️⃣3️⃣", "6️⃣4️⃣", "6️⃣5️⃣", "6️⃣6️⃣", "6️⃣7️⃣", "6️⃣8️⃣", "6️⃣9️⃣", "7️⃣0️⃣",
  "7️⃣1️⃣", "7️⃣2️⃣", "7️⃣3️⃣", "7️⃣4️⃣", "7️⃣5️⃣", "7️⃣6️⃣", "7️⃣7️⃣", "7️⃣8️⃣", "7️⃣9️⃣", "8️⃣0️⃣",
  "8️⃣1️⃣", "8️⃣2️⃣", "8️⃣3️⃣", "8️⃣4️⃣", "8️⃣5️⃣", "8️⃣6️⃣", "8️⃣7️⃣", "8️⃣8️⃣", "8️⃣9️⃣", "9️⃣0️⃣",
  "9️⃣1️⃣", "9️⃣2️⃣", "9️⃣3️⃣", "9️⃣4️⃣", "9️⃣5️⃣", "9️⃣6️⃣", "9️⃣7️⃣", "9️⃣8️⃣", "9️⃣9️⃣", "1️⃣0️⃣0️⃣", "1️⃣0️⃣1️⃣", "1️⃣0️⃣2️⃣", "1️⃣0️⃣3️⃣", "1️⃣0️⃣4️⃣", "1️⃣0️⃣5️⃣", "1️⃣0️⃣6️⃣", "1️⃣0️⃣7️⃣", "1️⃣0️⃣8️⃣", "1️⃣0️⃣9️⃣",
  "1️⃣1️⃣0️⃣", "1️⃣1️⃣1️⃣", "1️⃣1️⃣2️⃣", "1️⃣1️⃣3️⃣", "1️⃣1️⃣4️⃣", "1️⃣1️⃣5️⃣", "1️⃣1️⃣6️⃣", "1️⃣1️⃣7️⃣", "1️⃣1️⃣8️⃣", "1️⃣1️⃣9️⃣",
  "1️⃣2️⃣0️⃣", "1️⃣2️⃣1️⃣", "1️⃣2️⃣2️⃣", "1️⃣2️⃣3️⃣", "1️⃣2️⃣4️⃣", "1️⃣2️⃣5️⃣", "1️⃣2️⃣6️⃣", "1️⃣2️⃣7️⃣", "1️⃣2️⃣8️⃣", "1️⃣2️⃣9️⃣",
  "1️⃣3️⃣0️⃣", "1️⃣3️⃣1️⃣", "1️⃣3️⃣2️⃣", "1️⃣3️⃣3️⃣", "1️⃣3️⃣4️⃣", "1️⃣3️⃣5️⃣", "1️⃣3️⃣6️⃣", "1️⃣3️⃣7️⃣", "1️⃣3️⃣8️⃣", "1️⃣3️⃣9️⃣",
  "1️⃣4️⃣0️⃣", "1️⃣4️⃣1️⃣", "1️⃣4️⃣2️⃣", "1️⃣4️⃣3️⃣", "1️⃣4️⃣4️⃣", "1️⃣4️⃣5️⃣", "1️⃣4️⃣6️⃣", "1️⃣4️⃣7️⃣", "1️⃣4️⃣8️⃣", "1️⃣4️⃣9️⃣",
  "1️⃣5️⃣0️⃣", "1️⃣5️⃣1️⃣", "1️⃣5️⃣2️⃣", "1️⃣5️⃣3️⃣", "1️⃣5️⃣4️⃣", "1️⃣5️⃣5️⃣", "1️⃣5️⃣6️⃣", "1️⃣5️⃣7️⃣", "1️⃣5️⃣8️⃣", "1️⃣5️⃣9️⃣",
  "1️⃣6️⃣0️⃣", "1️⃣6️⃣1️⃣", "1️⃣6️⃣2️⃣", "1️⃣6️⃣3️⃣", "1️⃣6️⃣4️⃣", "1️⃣6️⃣5️⃣", "1️⃣6️⃣6️⃣", "1️⃣6️⃣7️⃣", "1️⃣6️⃣8️⃣", "1️⃣6️⃣9️⃣",
  "1️⃣7️⃣0️⃣", "1️⃣7️⃣1️⃣", "1️⃣7️⃣2️⃣", "1️⃣7️⃣3️⃣", "1️⃣7️⃣4️⃣", "1️⃣7️⃣5️⃣", "1️⃣7️⃣6️⃣", "1️⃣7️⃣7️⃣", "1️⃣7️⃣8️⃣", "1️⃣7️⃣9️⃣",
  "1️⃣8️⃣0️⃣", "1️⃣8️⃣1️⃣", "1️⃣8️⃣2️⃣", "1️⃣8️⃣3️⃣", "1️⃣8️⃣4️⃣", "1️⃣8️⃣5️⃣", "1️⃣8️⃣6️⃣", "1️⃣8️⃣7️⃣", "1️⃣8️⃣8️⃣", "1️⃣8️⃣9️⃣",
  "1️⃣9️⃣0️⃣", "1️⃣9️⃣1️⃣", "1️⃣9️⃣2️⃣", "1️⃣9️⃣3️⃣", "1️⃣9️⃣4️⃣", "1️⃣9️⃣5️⃣", "1️⃣9️⃣6️⃣", "1️⃣9️⃣7️⃣", "1️⃣9️⃣8️⃣", "1️⃣9️⃣9️⃣",
  "2️⃣0️⃣0️⃣"];

return rank < rankEmojis.length ? rankEmojis[rank] : rankEmojis[3];
}

// Función para obtener emojis numéricos
function getNumericEmoji(number) {
  const numericEmojis = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
  return number
    .toString()
    .split("")
    .map((digit) => numericEmojis[parseInt(digit)])
    .join("");
}


// Variables globales para la votación de administrador
let adminVotingActive = false;
let adminVotes = {};

// Variables globales para la votación de expulsión
let kickVotingActive = false;
let kickVotes = {};

// Cantidad mínima de jugadores para iniciar una votación de administrador
const MIN_PLAYERS_FOR_ADMIN_VOTE = 5;

// Cantidad mínima de jugadores para iniciar una votación de expulsión
const MIN_PLAYERS_FOR_KICK_VOTE = 5;

// Duración en segundos para ambas votaciones
const DURACION_VOTACION = 120;


function getLevelInfo(points) {
  if (points >= 0 && points < 0.7) {
    return { level: "Noob 😅 (Nivel 1)", nextPoints: 0.7 - points, nextLevel: "Amateur 🎮 (Nivel 2)" };
  } else if (points >= 0.7 && points < 1) {
    return { level: "Amateur 🎮 (Nivel 2)", nextPoints: 1 - points, nextLevel: "Aficionado ⚽️ (Nivel 3)" };
  } else if (points >= 1 && points < 2) {
    return { level: "Aficionado ⚽️ (Nivel 3)", nextPoints: 2 - points, nextLevel: "Promesa 🌱 (Nivel 4)" };
  } else if (points >= 2 && points < 3) {
    return { level: "Promesa 🌱 (Nivel 4)", nextPoints: 3 - points, nextLevel: "Avanzado 🚀 (Nivel 5)" };
  } else if (points >= 3 && points < 4) {
    return { level: "Avanzado 🚀 (Nivel 5)", nextPoints: 4 - points, nextLevel: "Experto 🧠 (Nivel 6)" };
  } else if (points >= 4 && points < 5) {
    return { level: "Experto 🧠 (Nivel 6)", nextPoints: 5 - points, nextLevel: "Profesional 🎯 (Nivel 7)" };
  } else if (points >= 5 && points < 10) {
    return { level: "Profesional 🎯 (Nivel 7)", nextPoints: 10 - points, nextLevel: "Estrella ⭐ (Nivel 8)" };
  } else if (points >= 10 && points < 20) {
    return { level: "Estrella ⭐ (Nivel 8)", nextPoints: 20 - points, nextLevel: "Distinto 👽 (Nivel 9)" };
  } else if (points >= 20 && points < 30) {
    return { level: "Distinto 👽 (Nivel 9)", nextPoints: 30 - points, nextLevel: "Maestro 🎓 (Nivel 10)" };
  } else if (points >= 30 && points < 40) {
    return { level: "Maestro 🎓 (Nivel 10)", nextPoints: 40 - points, nextLevel: "Sobrenatural 🌌 (Nivel 11)" };
  } else if (points >= 40 && points < 50) {
    return { level: "Sobrenatural 🌌 (Nivel 11)", nextPoints: 50 - points, nextLevel: "Crack 💥 (Nivel 12)" };
  } else if (points >= 50 && points < 60) {
    return { level: "Crack 💥 (Nivel 12)", nextPoints: 60 - points, nextLevel: "Figura Máxima 👑 (Nivel 13)" };
  } else if (points >= 60 && points < 70) {
    return { level: "Figura Máxima 👑 (Nivel 13)", nextPoints: 70 - points, nextLevel: "Elite 💎 (Nivel 14)" };
  } else if (points >= 70 && points < 80) {
    return { level: "Elite 💎 (Nivel 14)", nextPoints: 80 - points, nextLevel: "Invencible 🛡️ (Nivel 15)" };
  } else if (points >= 80 && points < 90) {
    return { level: "Invencible 🛡️ (Nivel 15)", nextPoints: 90 - points, nextLevel: "Prodigio 🌟 (Nivel 16)" };
  } else if (points >= 90 && points < 95) {
    return { level: "Prodigio 🌟 (Nivel 16)", nextPoints: 95 - points, nextLevel: "Leyenda 🏆 (Nivel 17)" };
  } else if (points >= 95 && points < 100) {
    return { level: "Leyenda 🏆 (Nivel 17)", nextPoints: 100 - points, nextLevel: "Legendario 🐉 Bronce (Nivel 18)" };
  } else if (points >= 100 && points < 110) {
    return { level: "Legendario 🐉 Bronce (Nivel 18) 🥉", nextPoints: 110 - points, nextLevel: "Legendario 🐉 Plata (Nivel 19) 🥈" };
  } else if (points >= 110 && points < 120) {
    return { level: "Legendario 🐉 Plata (Nivel 19) 🥈", nextPoints: 120 - points, nextLevel: "Legendario 🐉 Oro (Nivel 20) 🥇" };
  } else if (points >= 120 && points < 130) {
    return { level: "Legendario 🐉 Oro (Nivel 20) 🥇", nextPoints: 130 - points, nextLevel: "Legendario 🐉 Zafiro (Nivel 21) 🔷" };
  } else if (points >= 130 && points < 140) {
    return { level: "Legendario 🐉 Zafiro (Nivel 21) 🔷", nextPoints: 140 - points, nextLevel: "Legendario 🐉 Rubí (Nivel 22) 🔴" };
  } else if (points >= 140 && points < 150) {
    return { level: "Legendario 🐉 Rubí (Nivel 22) 🔴", nextPoints: 150 - points, nextLevel: "Legendario 🐉 Esmeralda (Nivel 23) 🟢" };
  } else if (points >= 150 && points < 160) {
    return { level: "Legendario 🐉 Esmeralda (Nivel 23) 🟢", nextPoints: 160 - points, nextLevel: "Legendario 🐉 Amatista (Nivel 24) 🟣" };
  } else if (points >= 160 && points < 170) {
    return { level: "Legendario 🐉 Amatista (Nivel 24) 🟣", nextPoints: 170 - points, nextLevel: "Legendario 🐉 Perla (Nivel 25) ⚪" };
  } else if (points >= 170 && points < 180) {
    return { level: "Legendario 🐉 Perla (Nivel 25) ⚪", nextPoints: 180 - points, nextLevel: "Legendario 🐉 Obsidiana (Nivel 26) ⚫" };
  } else if (points >= 180 && points < 190) {
    return { level: "Legendario 🐉 Obsidiana (Nivel 26) ⚫", nextPoints: 190 - points, nextLevel: "Legendario 🐉 Diamante (Nivel 27) 💎" };
  } else {
    return { level: "Legendario 🐉 Diamante (Nivel 27) 💎", nextPoints: 0, nextLevel: null };
  }
}




var configuracionActual = null;
var tiempoEsperaCambio = 5000; // 5000 ms = 5 segundos de espera

// Función para configurar el mapa y límites según el número de jugadores
function configurarMapaYLimites(numJugadores) {
    var nuevaConfiguracion = null;

    if (numJugadores >= 1 && numJugadores <= 4) {
        nuevaConfiguracion = {
            mapa: getFutx2Map(),
            scoreLimit: 3,
            timeLimit: 3
        };
    } else if (numJugadores >= 5 && numJugadores <= 7) {
        nuevaConfiguracion = {
            mapa: getFutx3Map(),
            scoreLimit: 3,
            timeLimit: 3
        };
    } else if (numJugadores >= 8 && numJugadores <= 13) {
        nuevaConfiguracion = {
            mapa: getFutx4Map(),
            scoreLimit: 4,
            timeLimit: 4
        };
    } else if (numJugadores >= 14) {
        nuevaConfiguracion = {
            mapa: getFutx7Map(),
            scoreLimit: 4,
            timeLimit: 10
        };
    }

    if (nuevaConfiguracion !== null) {
        // Comprobamos si la nueva configuración es igual a la configuración actual
        if (JSON.stringify(nuevaConfiguracion) === JSON.stringify(configuracionActual)) {
            // Si son iguales, no hacemos nada
            return;
        }

        // Obtener las puntuaciones actuales del partido
        var scores = room.getScores();

        if (scores !== null) {
            var gameTime = scores.time; // Obtener el tiempo transcurrido del partido

            if (gameTime <= tiempoLimiteCambio) {
                // Si el tiempo transcurrido es menor o igual al tiempo límite, aplicar el cambio después de 5 segundos
                configuracionActual = nuevaConfiguracion;
                setTimeout(function() {
                    room.stopGame();
                    room.setCustomStadium(configuracionActual.mapa);
                    room.setScoreLimit(configuracionActual.scoreLimit);
                    room.setTimeLimit(configuracionActual.timeLimit);
                    RSRMap = false;
                    room.startGame();
                }, tiempoEsperaCambio);
            }
        } else {
            // Si el partido no ha comenzado, simplemente guardar la nueva configuración para aplicarla en el futuro
            configuracionActual = nuevaConfiguracion;
        }
    }
}


// Función para activar el modo automatizado y realizar la verificación
function activarModoAutomatizado() {
    var numJugadores = room.getPlayerList().filter(function (p) {
        return p.team !== 0;
    }).length;
    configurarMapaYLimites(numJugadores);
}


var AnuncioGolDeOro = false;


// Objeto para almacenar estadísticas de victorias, empates, derrotas y partidos jugados
let playerStats = {};

// Función para obtener el mensaje de los últimos 10 partidos con el resultado más reciente primero
function getLastGamesMessage(playerName) {
    const lastGames = getLastGames(playerName);
    const reversedLastGames = lastGames.reverse(); // Invertir el orden de los últimos juegos
    const lastGamesMessage = `📊 Historial (Últimos 10 Partidos): ${reversedLastGames.map(getResultEmoji).join('')}`;
    return lastGamesMessage;
}

// Función para obtener los resultados de los últimos 10 partidos con el resultado más reciente primero
function getLastGames(playerName) {
    if (!playerStats[playerName] || !playerStats[playerName].gameResults) {
        return [];
    }

    const gameResults = playerStats[playerName].gameResults;
    const startIndex = Math.max(0, gameResults.length - 10);
    const lastGames = gameResults.slice(startIndex);
    return lastGames;
}

// Función para obtener el emoji correspondiente a cada resultado (victoria, empate, derrota)
function getResultEmoji(result) {
    if (result === 'victory') {
        return '✅';
    } else if (result === 'draw') {
        return '➖';
    } else if (result === 'defeat') {
        return '❌';
    }
    return '';
}

// Función para actualizar estadísticas después de cada juego
function updatePlayerStats(playerName, result) {
    if (!playerStats[playerName]) {
        playerStats[playerName] = { 
            victories: 0, 
            draws: 0, 
            defeats: 0, 
            totalGames: 0, 
            currentStreak: 0, 
            highestStreak: 0, 
            gameResults: [] 
        };
    }

    playerStats[playerName].totalGames++;

    if (result === 'victory') {
        playerStats[playerName].victories++;
        playerStats[playerName].currentStreak++;
        playerStats[playerName].highestStreak = Math.max(playerStats[playerName].highestStreak, playerStats[playerName].currentStreak);
    } else if (result === 'draw') {
        playerStats[playerName].draws++;
        playerStats[playerName].currentStreak = 0; // Reiniciar la racha en caso de empate
    } else if (result === 'defeat') {
        playerStats[playerName].defeats++;
        playerStats[playerName].currentStreak = 0; // Reiniciar la racha en caso de derrota
    }

    // Asegurarse de que gameResults sea un array
    if (!Array.isArray(playerStats[playerName].gameResults)) {
        playerStats[playerName].gameResults = [];
    }

    playerStats[playerName].gameResults.push(result);

    // Asegurarse de que highestStreak y currentStreak no sean undefined
    playerStats[playerName].highestStreak = playerStats[playerName].highestStreak || 0;
    playerStats[playerName].currentStreak = playerStats[playerName].currentStreak || 0;
    // Almacenar estadísticas en localStorage
    localStorage.setItem(playerName, JSON.stringify(playerStats[playerName]));


}




// Función para llamar a los admins
function llamarAdmins(playerName, motivo) {
    const mensaje = `# 🚨 LLAMARON A LOS ADMINS 🚨\n## El jugador ${playerName} está llamando a los administradores del host.   ||<@&${RolAdminHost}> ||\n# 🔗 LINK DEL HOST: ${roomLink}\n# 🔑 CLAVE PARA SER ADMINISTRADOR: ||${ClaveParaSerAdmin}|| \n# 📑 MOTIVO: ${motivo}`;

    const webhook = new XMLHttpRequest();
    webhook.open('POST', WebhookParaLlamarAdmins);

    const formData = new FormData();
    formData.append('content', mensaje);

    webhook.send(formData);
}


// Constants
const MIN_PLAYERS_FOR_MAP_VOTE = 3;
const MAP_VOTE_DURATION = 60; // en segundos

// Variables para la votación de mapas
let mapVotes = {};
let mapVotingActive = false;

// Función para iniciar la votación de mapas
function startMapVoting() {
  const totalPlayers = room.getPlayerList().length;
  const votesNeeded = Math.floor(totalPlayers / 2) + 1;

  if (!mapVotingActive && totalPlayers >= MIN_PLAYERS_FOR_MAP_VOTE) {
    mapVotingActive = true;
    mapVotes = {};

    setTimeout(function () {
      endMapVoting();
    }, MAP_VOTE_DURATION * 1000);

    room.sendAnnouncement(`🗳️ 🔄 ¡LA VOTACIÓN PARA CAMBIAR DE MAPA HA COMENZADO! Escribe "!votarmapa nombre_del_mapa" para votar por un mapa. Se necesitan al menos ${votesNeeded} votos para finalizar la votación. 🏟️✅`, null, 0xFFA359, "bold", 2);
  }
}

// Función para finalizar la votación de mapas y aplicar el mapa seleccionado
function endMapVoting() {
  if (mapVotingActive) {
    mapVotingActive = false;

    let maxVotes = 0;
    let winningMap = null;

    for (const votedMap in mapVotes) {
      const voteCount = mapVotes[votedMap].length;
      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        winningMap = votedMap;
      }
    }

    if (winningMap !== null && isMajorityVote(maxVotes, room.getPlayerList().length)) {
      applyMapConfiguration(winningMap);
      room.sendAnnouncement(`¡La Votación de Mapa ha llegado a su Fin! 🗳️ | 🌟 ¡Gracias a todos por participar! ${getVoteResultsString()} 🎉`, null, 0xffe32b, "bold", 0);
    } else {
      room.sendAnnouncement('La votación no ha tenido éxito. No se ha seleccionado un mapa mayoritario. ❌🗳️', null, 0xff4d4d, "bold", 0);
    }
  }
}



// Función para aplicar la configuración del mapa ganador
async function applyMapConfiguration(winningMap, message) {
  if (winningMap === 'rs' || winningMap === 'rs2' || winningMap === 'entrenamiento' || winningMap === 'estadiogl' || winningMap === 'rsoveja' || winningMap === 'pensred' || winningMap === 'pensblue' || winningMap === 'futx5' || winningMap === 'futx7' || winningMap === 'futx2' || winningMap === 'futx3' || winningMap === 'futx4' || winningMap === 'futx5cesped') {
    room.stopGame();

  // Verificar si el mapa más votado tiene más de la mitad de los votos
  if (isMajorityVote(mapVotes[winningMap].length, room.getPlayerList().length)) {
    // Esperar 500 milisegundos antes de cambiar la configuración
    await new Promise(resolve => setTimeout(resolve, 300));

    if  (winningMap === 'realfutsal') {
				currentMap = getMapName(message); 
				room.setCustomStadium(getRealFutsal());
                automatizadoActivado = false;
				RSRMap = true;
			room.setScoreLimit(0);
			room.setTimeLimit(0);	
    }
 else if (winningMap === 'futx5') {
				RSRMap = false;
				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx5Map());
	room.setScoreLimit(5);
	room.setTimeLimit(5);
    }
 else if (winningMap === 'futx5cesped') {
				RSRMap = false;
				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx5cespedMap());
	room.setScoreLimit(3);
	room.setTimeLimit(4);
    }
 else if (winningMap === 'futx7') {
				RSRMap = false;
				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx7Map());
	room.setScoreLimit(4);
	room.setTimeLimit(10);
    }
 else if (winningMap === 'campeones') {
				RSRMap = false;
isAFKpaused = true;
				currentMap = getMapName(message); 
				room.setCustomStadium(getCampeonesMap());
		room.setScoreLimit(0);
		room.setTimeLimit(0);	
    }
 else if (winningMap === 'futx2') {
				RSRMap = false;
				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx2Map());
				room.setScoreLimit(3);
				room.setTimeLimit(3);
    }
 else if (winningMap === 'futx3') {
				RSRMap = false;
				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx3Map());
				room.setScoreLimit(3);
				room.setTimeLimit(3);
    }
 else if (winningMap === 'futx4') {
				RSRMap = false;
				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx4Map());
				room.setScoreLimit(4);
				room.setTimeLimit(4);
    }
    // Esperar 500 milisegundos antes de iniciar el juego
    await new Promise(resolve => setTimeout(resolve, 300));

    room.startGame();
  } else {
    room.sendAnnouncement(`El mapa "${winningMap}" no ha obtenido más de la mitad de los votos. No se realizarán cambios. 🚫`, null, 0xff2b52, "bold", 0);
  }
}
}

// Función para verificar si un número es mayoritario respecto al total
function isMajorityVote(votes, totalPlayers) {
  return votes > Math.floor(totalPlayers / 2);
}


// Función para obtener una cadena de resultados de votación
function getVoteResultsString() {
  let resultsString = ''; // Eliminado 'Resultados: '
  for (const votedMap in mapVotes) {
    resultsString += `"${votedMap}": ${mapVotes[votedMap].length} votos, `;
  }
  return resultsString.slice(0, -2); // Elimina la coma y el espacio al final
}



// Función para enviar mensajes del chat como embeds al Discord
function sendChatToDiscord(player, message) {
    // Colores según el tipo de jugador
    var color = 0xf0f6ff; // Por defecto (espectadores)
    if (player.admin) {
        color = 0xFFD700; // Administradores
    } else if (player.team === 1) {
        color = 0xff8e8e; // Equipo rojo
    } else if (player.team === 2) {
        color = 0x8eb1ff; // Equipo azul
    }
    // Filtrar mensajes que contienen "@" "#", o "*"
    if (!/[@#*]/.test(message) && !/[#@*]/.test(player.name) && !message.includes(ClaveParaSerAdmin)) {
        const embed = {
            embeds: [
                {
                    author: {
                        name: NombreHost,
                        icon_url: player.avatar, // Puedes agregar la URL del avatar del jugador aquí
                    },
                    description: `**${player.name}:** ${message}`,
                    color: color, // Puedes cambiar el color según tus preferencias
                    timestamp: new Date().toISOString(),
                },
            ],
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(embed),
        };

        fetch(webhookMensajesJugadores, requestOptions);
    }
}


  // LLAMAR ADMINS WEBHOOK
var ultimaLlamadaAdmins = 0;
var TiempoEsperaEnMilisegundos = tiempoEsperaAdminsEnMinutos * 60 * 1000;


var ofiHabilitado = false;
// Variable para almacenar los jugadores que han firmado
var jugadoresFirmados = [];




var usedValues = {}; // Objeto para almacenar los valores asignados a los jugadores
var lastCommandUse = {}; // Objeto para almacenar la última vez que cada jugador usó el comando
var cooldown = 15 * 1000; // Cooldown de 15 segundos (60000 ms)

var comentarios = {
    micropene: [
        "¡Es más fácil encontrar a Wally que eso!",
        "¡Ese tiene que ser el Minion más pequeño que existe!",
        "¡Eso no es un pito, es un error de la fábrica!",
        "¿Necesitas pinzas para manejar eso?",
        "¡Es tan chiquito que ni el Viagra lo encuentra!",
        "¡Eso es más chico que la autoestima de un cornudo!",
        "¡Necesitás un microscopio para ver esa mierda!",
        "¡Parece que la madre naturaleza se quedó sin material!",
        "¡Eres la definición viviente de 'chiquito pero peligroso'!"
    ],
    debajoPromedio: [
        "¡Tranquilo! No todos pueden ser estrellas porno.",
        "¡A veces menos es más... o eso dicen!",
        "¡La compensación viene en otras áreas, amigo!",
        "¡No te preocupes, el carisma lo es todo!",
        "¡Vos te bajás los pantalones y sube la autoestima de todos!",
        "¡Con eso no hacés ni cosquillas!",
        "¡Eso es tan chico que ni para mear bien sirve!"


    ],
    promedio: [
        "¡Ni muy grande ni muy pequeño, perfecto para cualquier agujero!",
        "¡Eres el término medio, el equilibrio perfecto!",
    "¡Lo importante es cómo lo usas, dicen por ahí!",
    "¡No es el tamaño, es cómo lo mueves!",
        "¡Lo justo para no pasar vergüenza, pero tampoco para presumir!",
        "¡Cumplís, pero sin pena ni gloria!"

    ],
    encimaPromedio: [
        "¡Tenés un misil entre las piernas!",
        "¡El tamaño sí importa, y lo sabes!",
        "¡Te bajás los pantalones y aplauden!",
        "¡Con eso podés asustar hasta a King Kong!",
        "¡Tremenda anaconda tenes ahí!",
        "¡Te bajás los pantalones y parece una película porno!",
        "¡Con esa cosa puedes hacer feliz a varias de una vez!",
        "¡Cuidado, que eso podría necesitar un permiso de armas!"
    ],
    grande: [
        "¡Con eso hasta los caballos te respetan!",
        "¡Con eso podés colgar la ropa de toda la cuadra!",
        "¡Eso sí que es un 'paquete' de verdad!",
        "¡Eres el orgullo del Host!",
        "¡Con eso puedes hacer sombras en un día soleado!",
        "¡Eso podría causar un eclipse solar!",
        "¡Eso no es un pene, es un arma de destrucción masiva!"

    ]
};

function obtenerComentario(valor) {
    if (valor >= 1 && valor <= 7) {
        return comentarios.micropene[Math.floor(Math.random() * comentarios.micropene.length)];
    } else if (valor > 7 && valor <= 12) {
        return comentarios.debajoPromedio[Math.floor(Math.random() * comentarios.debajoPromedio.length)];
    } else if (valor > 12 && valor <= 16) {
        return comentarios.promedio[Math.floor(Math.random() * comentarios.promedio.length)];
    } else if (valor > 16 && valor <= 20) {
        return comentarios.encimaPromedio[Math.floor(Math.random() * comentarios.encimaPromedio.length)];
    } else {
        return comentarios.grande[Math.floor(Math.random() * comentarios.grande.length)];
    }
}

// Función para enviar mensajes de equipo
function sendTeamMessage(player, teamMsg) {
    const teamColor = player.team == 1 ? RedTeamChatColor : BlueTeamChatColor;
    const teamIcon = player.team == 1 ? '🔴' : '🔵';
    const teamPlayers = room.getPlayerList().filter(p => p.team == player.team);
    
    teamPlayers.forEach(p => {
        room.sendAnnouncement(`[TEAM CHAT ${teamIcon}] ${player.name}: ${teamMsg}`, p.id, teamColor, "bold", 2);
    });
}


// Obtener jugadores mencionados
function getMentionedPlayers(message) {
    return message.split(' ').reduce((mentioned, word) => {
        if (word.startsWith('@')) {
            const playerName = word.substring(1).replace(/_/g, ' ');
            const player = room.getPlayerList().find(p => p.name.toLowerCase() === playerName.toLowerCase());
            if (player) mentioned.push(player);
        }
        return mentioned;
    }, []);
}





// Función para obtener el prefijo según la configuración
function getPlayerPrefix(player) {
    const option = ColocarJuntoAlNickname.toLowerCase(); // Convertir a minúsculas

    if (option === "nivel") {
        // Obtener puntos y nivel
        const goals = totalPlayerGoals[player.name] || 0;
        const assists = totalPlayerAssists[player.name] || 0;
        const totalPoints = goals + (assists * 0.7);
        const levelInfo = getLevelInfo(totalPoints);

        return `«${levelInfo.level}»`;
    } else if (option === "id") {
        return `« 🆔: ${player.id} »`;
    } else {
        // Valor por defecto si no coincide con "nivel" ni "id"
        return ``;
    }
}


// Enviar mensaje a jugadores mencionados
function sendMentionedMessage(player, message, mentionedPlayers, color, roleName) {
    const prefix = getPlayerPrefix(player);
    mentionedPlayers.forEach(mentionedPlayer => {
        room.sendAnnouncement(
            `${prefix} ${roleName} ~ ${player.name}: ${message}`,
            mentionedPlayer.id,
            color,
            "bold",
            2
        );
    });
}

// Enviar mensaje al resto de los jugadores
function sendMessageToOthers(player, message, mentionedPlayers, color, roleName) {
    const prefix = getPlayerPrefix(player);
    room.getPlayerList().forEach(p => {
        if (!mentionedPlayers.includes(p)) {
            const roleAttr = RoleAttributes[roleName] || { style: "normal", sound: 1 };
            room.sendAnnouncement(
                `${prefix} ${roleName} ~ ${player.name}: ${message}`,
                p.id,
                color,
                roleAttr.style,
                roleAttr.sound
            );
        }
    });
}

// Manejar menciones especiales (@everyone, @here)
function handleMentions(player, message, color, roleName, isAdmin) {
    const prefix = getPlayerPrefix(player);
    const allPlayers = room.getPlayerList();

    if (message.toLowerCase().includes('@everyone') && isAdmin) {
        allPlayers.forEach(p => {
            room.sendAnnouncement(
                `${prefix} ${roleName} ~ ${player.name}: ${message}`,
                p.id,
                color,
                "bold",
                2
            );
        });
        return false;
    }

    if (message.toLowerCase().includes('@here') && isAdmin) {
        allPlayers.forEach(p => {
            const isAFK = afkPlayerIDs.has(p.id);
            room.sendAnnouncement(
                `${prefix} ${roleName} ~ ${player.name}: ${message}`,
                p.id,
                color,
                isAFK ? "normal" : "bold",
                isAFK ? 1 : 2
            );
        });
        return false;
    }
    return true;
}

// Función para gestionar mensajes de cooldown
function handleCooldown(player) {
    if (!cooldownEnabled) {
        return true;
    }

    const now = Date.now();

    // Si el jugador es administrador, no aplicar cooldown
    if (player.admin) {
        return true;
    }

    // Inicializar el registro de tiempos de mensajes y cooldowns para el jugador
    if (!messageTimestamps[player.id]) {
        messageTimestamps[player.id] = [];
    }

    // Limpiar los mensajes viejos
    messageTimestamps[player.id] = messageTimestamps[player.id].filter(timestamp => now - timestamp < MESSAGE_COOLDOWN);

    // Añadir la nueva marca de tiempo
    messageTimestamps[player.id].push(now);

    // Si el jugador está en cooldown, enviar un mensaje y salir
    if (playerCooldowns[player.id] && now < playerCooldowns[player.id]) {
        whisper(`[⚠️] Estás escribiendo demasiado rápido. Espera unos segundos antes de enviar otro mensaje.`, player.id);
        return false;
    }

    // Si el jugador ha enviado demasiados mensajes, activar el cooldown y registrar advertencia
    if (messageTimestamps[player.id].length > SPAM_LIMIT) {
        playerCooldowns[player.id] = now + COOLDOWN_TIME;
        spamWarnings[player.id] = (spamWarnings[player.id] || 0) + 1;

        if (spamWarnings[player.id] >= KICK_THRESHOLD) {
            room.kickPlayer(player.id, "Has sido expulsado por spam.", false);
            return false;
        } else {
            whisper(`[⚠️] Has enviado demasiados mensajes rápidamente. Estás en cooldown por ${COOLDOWN_TIME / 1000} segundos. Advertencia ${spamWarnings[player.id]} de ${KICK_THRESHOLD}.`, player.id);
        }

        return false;
    }

    return true;
}

// Función para manejar comandos administrativos
function handleAdminCommand(player, message) {
    const [command, ...args] = message.toLowerCase().split(" ");

    switch(command) {
        case "!spam_limit":
            if (args.length === 1 && !isNaN(args[0])) {
                SPAM_LIMIT = parseInt(args[0], 10);
                room.sendAnnouncement(`[INFO] ${player.name} ha actualizado SPAM_LIMIT a ${SPAM_LIMIT}`, null, adminChatColor, "bold", 1);
            } else {
                room.sendAnnouncement(`[ERROR] Uso: !SPAM_LIMIT <Cantidad de Mensajes>`, player.id, adminChatColor, "bold", 1);
            }
            return false;
        case "!cooldown_time":
            if (args.length === 1 && !isNaN(args[0])) {
                COOLDOWN_TIME = parseInt(args[0], 10) * 1000; // Convertir segundos a milisegundos
                room.sendAnnouncement(`[INFO] ${player.name} ha actualizado COOLDOWN_TIME a ${COOLDOWN_TIME / 1000} segundos`, null, adminChatColor, "bold", 1);
            } else {
                room.sendAnnouncement(`[ERROR] Uso: !COOLDOWN_TIME <Cantidad de Segundos>`, player.id, adminChatColor, "bold", 1);
            }
            return false;
        case "!toggle_cooldown":
            cooldownEnabled = !cooldownEnabled;
            room.sendAnnouncement(`[INFO] ${player.name} ha ${cooldownEnabled ? "habilitado" : "deshabilitado"} el cooldown`, null, adminChatColor, "bold", 1);
            return false;
        case "!kick_threshold":
            if (args.length === 1 && !isNaN(args[0])) {
                KICK_THRESHOLD = parseInt(args[0], 10);
                room.sendAnnouncement(`[INFO] ${player.name} ha actualizado KICK_THRESHOLD a ${KICK_THRESHOLD}`, null, adminChatColor, "bold", 1);
            } else {
                room.sendAnnouncement(`[ERROR] Uso: !KICK_THRESHOLD <Número de Advertencias>`, player.id, adminChatColor, "bold", 1);
            }
            return false;
        default:
            return true;
    }
}

function isCooldown(player, command) {
  const now = Date.now();
  if (!cooldowns[player.name]) {
    cooldowns[player.name] = {};
  }

  if (!cooldowns[player.name][command] || now - cooldowns[player.name][command] > COOLDOWN_TIEMPO) {
    cooldowns[player.name][command] = now;
    return false;
  }

  return true;
}



function obtenerCamiseta(equipoClave) {
    let equipo = camisetasEquipos[equipoClave];
    if (!equipo) {
        room.sendAnnouncement(`[❌] Equipo no encontrado: ${equipoClave}`, null, 0xFF0000, "bold", 2);
        return null;
    }

    let datos = parseColors(equipo.codigo);
    
    // Actualizamos las variables globales
    if (equipoClave.includes("red")) {
        redAngle = datos.angle;
        redTextColor = datos.textColor;
        redColor = datos.colors;
        teamRed = equipo.nombreEquipo;
    } else if (equipoClave.includes("blue")) {
        blueAngle = datos.angle;
        blueTextColor = datos.textColor;
        blueColor = datos.colors;
        teamBlue = equipo.nombreEquipo;
    }

    return {
        angle: datos.angle,
        textColor: datos.textColor,
        colors: datos.colors,
        nombreEquipo: equipo.nombreEquipo
    };
}


function asignarCamisetaPorClave(equipoClave) {
    let equipo = obtenerCamiseta(equipoClave);

    if (!equipo) return;

    if (equipoClave.endsWith("/red")) {
        room.setTeamColors(1, equipo.angle, equipo.textColor, equipo.colors);
        teamRed = equipo.nombreEquipo;
        room.sendAnnouncement(`[✅] Camiseta asignada al equipo rojo: ${teamRed}`, null, 0x00FF00, "bold", 2);
    } else if (equipoClave.endsWith("/blue")) {
        room.setTeamColors(2, equipo.angle, equipo.textColor, equipo.colors);
        teamBlue = equipo.nombreEquipo;
        room.sendAnnouncement(`[✅] Camiseta asignada al equipo azul: ${teamBlue}`, null, 0x00FF00, "bold", 2);
    } else {
        room.sendAnnouncement(`[❌] No se pudo determinar el equipo para la camiseta: ${equipoClave}`, null, 0xFF0000, "bold", 2);
    }
}

// Objeto para almacenar los ciclos de avatar de cada jugador. Comando !avatar
let avatarIntervals = {};
const AVATAR_COOLDOWN = 5000; // 5 segundos de cooldown
const playerAvatarCooldowns = {}; // Almacenar el tiempo del último uso del comando por jugador



room.onPlayerChat = function(player, message) {
    if (message.toLowerCase() === "!comba") {
        if (player.admin) {
            combaMode = !combaMode;
            room.sendAnnouncement(`Modo Comba ${combaMode ? "ACTIVADO ✅" : "DESACTIVADO ❌"}`, null, 0xFFD700, "bold", 1);
        } else {
            room.sendAnnouncement("❌ No tienes permisos para usar este comando.", player.id, 0xFF0000, "bold", 1);
        }
        return false;
    }
    if (message.toLowerCase() === "!jabulani") {
        if (player.admin) { // Solo administradores pueden cambiar el estado
            JabulaniMode = !JabulaniMode;
            powerShotMode = JabulaniMode; // Si jabulaniMode está activo, PowerShot también lo estará
            room.sendAnnouncement(`Modo Jabulani ${JabulaniMode ? "ACTIVADO ✅ (PowerShot también activado)" : "DESACTIVADO ❌"}`, null, 0xFF4500, "bold", 1);
        } else {
            room.sendAnnouncement("❌ No tienes permisos para usar este comando.", player.id, 0xFF0000, "bold", 1);
        }
        return false; // Evita que el mensaje aparezca en el chat
    }
    if (message.startsWith('!avatar ')) {
        let currentTime = Date.now();

        // Verificar si el jugador está en cooldown
        if (playerAvatarCooldowns[player.id] && currentTime - playerAvatarCooldowns[player.id] < AVATAR_COOLDOWN) {
            room.sendAnnouncement("⏳ Espera un momento antes de usar este comando nuevamente.", player.id, 0xFF0000, "bold", 7);
            return false; // Bloquea el comando mientras esté en cooldown
        }

        let avatars = message.substring(8).split(',');
        if (avatars.length < 2) {
            room.sendAnnouncement('Debes ingresar al menos dos avatares separados por comas.', player.id, 0xFF0000, 'normal', 1);
            return false;
        }

        // Detener ciclo si ya existía
        if (avatarIntervals[player.id]) {
            clearInterval(avatarIntervals[player.id]);
        }

        let index = 0;
        avatarIntervals[player.id] = setInterval(() => {
            room.setPlayerAvatar(player.id, avatars[index]);
            index = (index + 1) % avatars.length; // Ciclar avatares
        }, 1000); // Cambiar avatar cada 1 segundo

        room.sendAnnouncement(`¡Ciclo de avatares iniciado! Usa !avatarstop para detenerlo.`, player.id, 0x00FF00, 'normal', 1);
        
        // Enviar anuncio global
        room.sendAnnouncement(`${player.name} ha utilizado el comando !avatar ${message.substring(8)}`, null, 0xFFFFFF, 'bold', 1);
        
        // Registrar el tiempo del último uso del comando
        playerAvatarCooldowns[player.id] = currentTime;

        return false;
    }

    // Comando para detener el ciclo de avatares
    if (message === '!avatarstop') {
        if (avatarIntervals[player.id]) {
            clearInterval(avatarIntervals[player.id]);
            delete avatarIntervals[player.id];
            room.setPlayerAvatar(player.id, null); // Restablecer avatar original
            room.sendAnnouncement(`Ciclo de avatares detenido.`, player.id, 0xFFFF00, 'normal', 1);
        } else {
            room.sendAnnouncement(`No tienes un ciclo de avatares activo.`, player.id, 0xFF0000, 'normal', 1);
        }
        return false;
    }
    if (camisetasEquipos.hasOwnProperty(message) && player.admin) {
        asignarCamisetaPorClave(message);
    }
    if (message === "!pausarafk" && player.admin) { // Verifica si el jugador es admin
        isAFKpaused = !isAFKpaused; // Alterna entre true y false

        // Envía un mensaje con emojis indicando el estado actual del detector de AFK
        let status = isAFKpaused ? "⏸️ Detector de AFK PAUSADO." : "▶️ Detector de AFK ACTIVADO.";
        room.sendAnnouncement(status + " ⚠️", null, 0x00FF00, "bold", 2);

        return false; // Evita que el mensaje aparezca en el chat
    }
    const afkKeywords = ["mtm", "meteme", "volvi", "estoy", "listo"];

    // Verificar si el mensaje contiene alguna de las palabras clave
    if (afkKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
        
        // Verificar si el jugador está en cooldown
        let currentTime = Date.now();
        if (playerCooldowns[player.id] && currentTime - playerCooldowns[player.id] < MESSAGE_COOLDOWN) {
            // Si el jugador está en cooldown, enviar un mensaje y bloquear el comando
            room.sendAnnouncement("⏳ Espera un momento antes de usar ese comando nuevamente.", player.id, 0xFF0000, "bold", 7);
            return false; // Evita que el mensaje se envíe al chat
        }

        // Si el jugador ha superado el límite de mensajes, aplicar un cooldown largo
        if (!messageTimestamps[player.id]) {
            messageTimestamps[player.id] = [];
        }
        
        // Agregar el mensaje actual al registro de tiempos
        messageTimestamps[player.id].push(currentTime);

        // Filtrar los mensajes más antiguos que ya han pasado el límite de tiempo
        messageTimestamps[player.id] = messageTimestamps[player.id].filter(timestamp => currentTime - timestamp < COOLDOWN_TIME);

        // Verificar si el jugador ha superado el límite de mensajes
        if (messageTimestamps[player.id].length > SPAM_LIMIT) {
            // Si el jugador ha hecho demasiados mensajes en poco tiempo, aplicar un cooldown largo
            playerCooldowns[player.id] = currentTime;
            room.sendAnnouncement("🚫 Estás enviando demasiados comandos. Espera antes de volver a usar el comando.", player.id, 0xFF0000, "bold", 7);
            return false; // Evita que el mensaje se envíe al chat
        }

        // Establecer el tiempo del último comando para el jugador
        playerCooldowns[player.id] = currentTime;

        // Proceder con el resto del código si no hay spam o cooldown
        if (afkKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
            // Aquí va el código para manejar el caso cuando un jugador regresa de AFK
            if (afkPlayerIDs.has(player.id)) {
                // El jugador regresa de AFK
                clearTimeout(playerInactivity.get(player.id)); // Eliminar el temporizador de inactividad
                playerInactivity.delete(player.id); // Eliminar la entrada del mapa de inactividad
                afkPlayerIDs.delete(player.id);
                
                if (modoJueganTodos) {
                    const blueTeamCount = room.getPlayerList().filter(p => p.team === 1).length;
                    const redTeamCount = room.getPlayerList().filter(p => p.team === 2).length;

                    // Asignar al jugador al equipo con menos miembros
                    if (blueTeamCount <= redTeamCount) {
                        room.setPlayerTeam(player.id, 1); // Equipo azul
                    } else {
                        room.setPlayerTeam(player.id, 2); // Equipo rojo
                    }
                }

                room.sendAnnouncement("🚀 ¡" + player.name + " volvió y está listo para jugar! 🎮", null, 0x00FFBB, "bold", 0);
            }
        }
    }
  const mensajeEnMinusculas = message.toLowerCase();
  if (mensajeEnMinusculas === "!memide") {
    if (isCooldown(player, "!memide")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false;
    }

        if (usedValues[player.id] !== undefined) {
            // Si el jugador ya ha usado el comando, envía el valor previamente asignado con un comentario
            var comentario = obtenerComentario(usedValues[player.id]);
            room.sendAnnouncement("📏 A " + player.name + " le mide " + usedValues[player.id] + " cm 🍌 " + comentario, null, 0xFFFFFF, "bold");
        } else {
            // Genera un nuevo valor aleatorio entre 1 y 30 con posibilidad de decimales
            var randomValue = Math.random() * (30 - 1) + 1;
            // Redondea el valor a un decimal
            randomValue = Math.round(randomValue * 10) / 10;
            // Almacena el valor asignado al jugador
            usedValues[player.id] = randomValue;
            // Obtiene un comentario basado en el nuevo valor
            var comentarioNuevo = obtenerComentario(randomValue);
            // Envía un anuncio con el nuevo valor y el comentario
            room.sendAnnouncement("📏 A " + player.name + " le mide " + randomValue + " cm 🍌 " + comentarioNuevo, null, 0xFFFFFF, "bold");
	return true;
        }


        return false; // Devuelve false para evitar que el mensaje se envíe en el chat normalmente
    }
    // Verificar si el jugador está muteado
    if (mutedPlayers[player.name] && Date.now() < mutedPlayers[player.name].muteTime) {
        // No enviar el mensaje si el jugador está muteado
        return false;
    }

    // Verificar si el jugador tiene permisos de administrador
    if (player.admin === true) {
        // Verificar si el mensaje comienza con el comando de mute
        if (message.startsWith("!mute")) {
            // Dividir el mensaje en partes para extraer el ID del jugador y la duración del mute
            const parts = message.split(" ");
            if (parts.length >= 2) {
                const playerId = parseInt(parts[1]);
                const duration = parts.length >= 3 ? parseInt(parts[2]) : Infinity;
                
                // Llamar a la función de mutear con el ID del jugador, la duración y el nombre del administrador
                pushMute(playerId, duration, player.name);
                
                // Evitar que se envíe el mensaje original en el chat
                return false;
            }
        }
    }

    // Verificar si el mensaje es el comando !sorteo
    if (message === "!sorteo") {
        // Verificar si el jugador es un administrador
        if (player.admin) {
            // Elegir aleatoriamente uno de los dos equipos
            var team = Math.floor(Math.random() * 2) + 1;
            var teamName = (team === 1) ? teamRed : teamBlue;
            var emoji = (team === 1) ? "🔴" : "🔵";

            // Anunciar el resultado del sorteo con el emoji del equipo correspondiente
            room.sendAnnouncement("¡El equipo ganador del sorteo es: " + emoji + " " + teamName + "!", null, 0xFFFFFF, "bold", 2);
        } else {
            // Si el jugador no es un administrador, enviar un mensaje de error
            room.sendAnnouncement("¡Solo los administradores pueden utilizar este comando!", player.id, 0xFFFFFF, "normal", 1);
        }
    }
    // Comando !reset-stats para reiniciar las estadísticas de todos los jugadores
    if (player.admin && message === "!reset-stats") {        
        // Reiniciar todas las estadísticas a cero
        totalPlayerGoals = {};
        totalPlayerAssists = {};
        totalPlayerPoints = {};
        playerGoals = {};
        playerAssists = {};
        playerPoints = {};
        playerGoals2 = {};
        playerAssists2 = {};
        playerPoints2 = {};
        playerFiguraCount = {};
        playerMinutesPlayed = {};
        playerGoalkeeperTime = {};
        playerGoalsReceived = {};
        playerCleanSheets = {};
        // Añadir emojis al anuncio
        const announcement = "¡Todas las estadísticas han sido reiniciadas por el administrador " + player.name + "! 🔄📊🚀";
        room.sendAnnouncement(announcement, null, 0xff6a6a, "bold", 1);
    }
    // Verificar si el jugador es administrador y envió el comando "!ganasigue"
    if (player.admin && message === "!ganasigue") {
        ganasigueEnabled = !ganasigueEnabled; // Alternar el estado del sistema "gana sigue"
        var status = ganasigueEnabled ? "ACTIVADO ✅" : "DESACTIVADO ❌";
        room.sendAnnouncement("⏭️🎮 ¡El sistema 'gana sigue' ha sido " + status + " por " + player.name + "!", null, 0xFFFFFF, "bold", 1);
    }
    // Verificar si el mensaje comienza con "ac" y si el jugador es administrador
    if (message.startsWith("ac ") && player.admin) {
        // Construir el mensaje para el anuncio
        var adminMessage = "🌟👑 [ADMIN CHAT] - " + player.name + ": " + message.substring(2);
        
        // Enviar el mensaje como anuncio solo a los jugadores que son administradores
        var adminPlayers = room.getPlayerList().filter(function(p) {
            return p.admin;
        });
        for (var i = 0; i < adminPlayers.length; i++) {
            room.sendAnnouncement(adminMessage, adminPlayers[i].id, 0xffdb72, "bold", 1); // Color rojo por defecto
        }
        
        // Devolver false para evitar que el mensaje se envíe al chat general
        return false;
    }
    if (message.startsWith('t ') && player.team === 0) {
        // Eliminar el prefijo "t " del mensaje
        var teamMsg = message.slice(2);
        // Enviar el mensaje a todos los jugadores en el equipo de espectadores
        var spectators = room.getPlayerList().filter(function(player) {
            return player.team === 0; // Filtrar jugadores en el equipo de espectadores
        });
        spectators.forEach(function(spectator) {
            room.sendAnnouncement('[SPECT CHAT 👁️] ' + player.name + ': ' + teamMsg, spectator.id, 0xc0c0c0, "bold", 1); // 0xFFFFFF representa el color blanco
        });
        // Devolver false para evitar que el mensaje se envíe al chat general
        return false;
    }
    // Verificar si el jugador es administrador y el comando es !ofi
    if (player.admin && message === '!ofi') {
        ofiHabilitado = !ofiHabilitado; // Cambiar el estado de habilitación/deshabilitación
        NombreAdmin = player.name; // Guardar el nombre del administrador que realizó la acción
        var status = ofiHabilitado ? 'habilitado' : 'deshabilitado';
        var emoji = ofiHabilitado ? '✅' : '❌';
        var mensaje = `¡El sistema de firmas para partidos oficiales ha sido ${status} por ${NombreAdmin}! Los jugadores ${ofiHabilitado ? 'pueden' : 'ya no pueden'} firmar utilizando el comando !firmo.`;
        room.sendAnnouncement(`${emoji}📝 ${mensaje}`, null, 0xe5d72f, "bold", 2);
    }

    // Verificar si el comando !firmo está habilitado y el jugador escribe !firmo
    if (ofiHabilitado && message === '!firmo') {
        // Verificar si el jugador ya ha firmado
        const yaFirmado = jugadoresFirmados.includes(player.name);

        if (yaFirmado) {
            // Si el jugador ya ha firmado, enviar un mensaje diciéndole que ya ha firmado
            room.sendAnnouncement(`✋ ¡${player.name} ya has firmado anteriormente!`, player.id, 0xff352e, "bold", 0);
        } else {
            // Obtener la IP del jugador asociada al nombre
            const playerInfo = playerIPs.find(info => info.nickname === player.name);
            const playerIP = playerInfo ? playerInfo.ip : "IP Desconocida";

            // Añadir el jugador a la lista de firmados si aún no está en ella
            jugadoresFirmados.push(player.name);

            // Enviar mensaje a Discord con la firma del jugador
            sendFirmaToDiscord(player, playerIP);

            // Avisar al jugador que ha firmado
            room.sendAnnouncement(`✍️ ¡${player.name} ha firmado!`, player.id, 0x05ff02, "bold", 0);
        }
    }
    sendChatToDiscord(player, message);
    if (message === "!clubcolors" && player.admin) {
        toggleSwapColors();
    }
    if (message === "!gks") {
        sendGKAnnouncement(player);
    }
  const lowerCaseMensaje = message.toLowerCase();

  // Comando para iniciar la votación de mapas
  if (!mapVotingActive && room.getPlayerList().length >= MIN_PLAYERS_FOR_MAP_VOTE && lowerCaseMensaje.startsWith('!votarmapa')) {
    startMapVoting();
  }

  // Comando para votar por un mapa
  if (mapVotingActive && lowerCaseMensaje.startsWith('!votarmapa ')) {
    const votedMap = lowerCaseMensaje.slice(11);
    if (['rs', 'rs2', 'entrenamiento', 'estadiogl', 'rsoveja', 'pensred', 'pensblue', 'futx5', 'futx7', 'futx2', 'futx3', 'futx4', 'futx5cesped'].includes(votedMap) && !ElJugadorYaVoto(player.id, mapVotes)) {
      mapVotes[votedMap] = mapVotes[votedMap] || [];
      mapVotes[votedMap].push(player.id);

      room.sendAnnouncement(`🗳️ ¡@${player.name} ha votado por el mapa "${votedMap}"! (${mapVotes[votedMap].length} votos). ✔️`, null, 0x0EFF00, "bold", 0);
      room.sendAnnouncement(`🗳️ VOTOS REALIZADOS: ${getVoteResultsString()} | ⏳ VOTOS RESTANTES: ${getRemainingVotes()}`, null, 0xFFB600, "bold", 0);

      // Verificar si el mapa más votado tiene más de la mitad de los votos
      if (isMajorityVote(mapVotes[votedMap].length, room.getPlayerList().length)) {
        endMapVoting();  // Finalizar la votación inmediatamente
        return;
      }
    } else {
      room.sendAnnouncement(`[❌] ${player.name}, el mapa que mencionaste no es válido o ya has votado por ese mapa. Asegúrate de usar "!votarmapa <nombre del mapa> y que no hayas votado previamente.`, player.id, 0xff2b52, "bold", 0);
    }
  }
    // Verificar si el mensaje comienza con !puntajes
    if (message.startsWith('!puntajes')) {
        // Ordenar los jugadores por puntos de mayor a menor
        const sortedPlayers = Object.entries(playerPoints)
            .sort(([, pointsA], [, pointsB]) => pointsB - pointsA);

        // Construir el mensaje de anuncio con emojis y puntos de los jugadores
        let announcementMessage = "📋 PUNTUACIONES DEL PARTIDO ⚽️🕒:";
        sortedPlayers.forEach(([playerName, points], index) => {
            const emoji = index === 0 ? "🌟 FIGURA " : index === 1 ? "🥈" : index === 2 ? "🥉" : "➖";

            // Obtener las cantidades de goles y asistencias para el jugador actual
            const CantidadGolesEnElPartido = playerGoals[playerName] || 0;
            const CantidadAsistenciasEnElPartido = playerAssists[playerName] || 0;

            announcementMessage += `\n${emoji} ${playerName}: ${points} PUNTOS 🔥 (⚽️ GOLES: ${CantidadGolesEnElPartido} | 👟 ASISTENCIAS: ${CantidadAsistenciasEnElPartido} )`;
        });

        // Enviar el anuncio a todos los jugadores
        room.sendAnnouncement(announcementMessage, player.id, 0xFFD700, "bold", 0);
    }
    // Verifica si el mensaje es un comando de IP y si el jugador es administrador
    if (player.admin && message.startsWith('!ip')) {
// Extrae el nombre del jugador del mensaje (incluyendo espacios)
const ElNickname = message.substr(4).trim();


        // Busca la IP asociada al nombre del jugador
        const playerInfo = playerIPs.find(info => info.nickname === ElNickname);

        // Si se encuentra la información, envía un anuncio con la IP
        if (playerInfo) {
            room.sendAnnouncement(`🌐🔒 IP de "${ElNickname}": ${playerInfo.ip}`, player.id, 0x05ff02, "normal", 0);
        } else {
            room.sendAnnouncement(`🚫👤 No hubo ningún jugador que haya ingresado con el nickname: "${ElNickname}"`, player.id, 0xFF5252, "normal", 0);

        }
    }
    var args = message.split(" ");
    // Verificar si el jugador es un administrador y si el comando es válido
    if (args[0] === '!minutosllamada' && args.length === 2 && player.admin) {
        const newWaitTime = parseInt(args[1]);
        
        if (!isNaN(newWaitTime) && newWaitTime >= 0) {
            TiempoEsperaEnMilisegundos = newWaitTime * 60000; // Convertir minutos a milisegundos
            room.sendAnnouncement(`Tiempo de espera para !llamaradmins establecido a ${newWaitTime} minutos.`, null, 0x00FF00, 'bold');
        } else {
            room.sendAnnouncement('Por favor, ingrese un valor válido para el tiempo de espera.', player.id, 0xFF0000, 'bold');
        }
    }
    // Normalizar el mensaje a minúsculas para hacerlo insensible a mayúsculas/minúsculas
    var MensajeEnMinusculas = message.toLowerCase();

    // Usar expresión regular para verificar si el mensaje contiene "!llamaradmin" o "!llamaradmins"
    if (MensajeEnMinusculas.match(/^!llamaradmin(s)?\s*.*$/)) {
        var ahora = new Date().getTime();

        if (ahora - ultimaLlamadaAdmins >= TiempoEsperaEnMilisegundos) {
            // Suficiente tiempo ha pasado, puede llamar a los admins
            const motivo = args.length > 1 ? message.substring(message.indexOf(" ") + 1) : "No especifica"; // Obtener el motivo del mensaje
            llamarAdmins(player.name, motivo);
            room.sendAnnouncement(`¡${player.name} ha llamado a los administradores para que vengan al host! 🔔`, null, 0xFFC83D, 'bold');
            ultimaLlamadaAdmins = ahora;
        } else {
            // Todavía en tiempo de espera, informar al jugador
            room.sendAnnouncement(`Debes esperar al menos ${TiempoEsperaEnMilisegundos / 60000} minutos entre cada llamada a los admins ⏰`, player.id, 0xff6666, 'bold');
        }
    }

  if (message === "!mvp") {
    // Creamos una lista de jugadores destacados como figura del partido en orden descendente de veces
    let topMVPs = [];
    for (const playerName in playerFiguraCount) {
      const figuraCount = playerFiguraCount[playerName];
      topMVPs.push({ playerName, figuraCount });
    }
    topMVPs.sort((a, b) => b.figuraCount - a.figuraCount);

    // Construimos la cadena para cada jugador destacado
    topMVPs = topMVPs.map((entry, index) => `${getRankEmoji(index)} ${entry.playerName}: ${entry.figuraCount} ${entry.figuraCount === 1 ? 'vez MVP' : 'veces MVP'}`);
    
    // Unimos las cadenas con saltos de línea
    topMVPs = topMVPs.join("\n");

    // Mostramos la tabla de jugadores destacados como figura del partido en el chat del host
    room.sendAnnouncement("⚽✨ Tabla de Jugadores MVP ✨⚽\n\n" + topMVPs, player.id, 0xFFD700, "bold");
  }
  if (message === "!niveles") {
    const levelTablePart1 = `Tabla de Niveles:
Noob 😅 (Nivel 1) - 0 puntos
Amateur 🎮 (Nivel 2) - 1 punto
Aficionado ⚽️ (Nivel 3) - 2 puntos
Promesa 🌱 (Nivel 4) - 3 puntos
Avanzado 🚀 (Nivel 5) - 4 puntos
Experto 🧠 (Nivel 6) - 5 puntos
Profesional 🎯 (Nivel 7) - 10 puntos
Estrella ⭐ (Nivel 8) - 15 puntos
Distinto 👽 (Nivel 9) - 20 puntos
Maestro 🎓 (Nivel 10) - 30 puntos`;

    const levelTablePart2 = `Sobrenatural 🌌 (Nivel 11) - 40 puntos
Crack 💥 (Nivel 12) - 50 puntos
Figura Máxima 👑 (Nivel 13) - 60 puntos
Elite 💎 (Nivel 14) - 70 puntos
Invencible 🛡️ (Nivel 15) - 80 puntos
Prodigio 🌟 (Nivel 16) - 90 puntos
Leyenda 🏆 (Nivel 17) - 95 puntos
Legendario 🐉 Bronce (Nivel 18) 🥉 - 100 puntos
Legendario 🐉 Plata (Nivel 19) 🥈 - 110 puntos`;

    const levelTablePart3 = `Legendario 🐉 Oro (Nivel 20) 🥇 - 120 puntos
Legendario 🐉 Zafiro (Nivel 21) 🔷 - 130 puntos
Legendario 🐉 Rubí (Nivel 22) 🔴 - 140 puntos
Legendario 🐉 Esmeralda (Nivel 23) 🟢 - 150 puntos
Legendario 🐉 Amatista (Nivel 24) 🟣 - 160 puntos
Legendario 🐉 Perla (Nivel 25) ⚪ - 170 puntos
Legendario 🐉 Obsidiana (Nivel 26) ⚫ - 180 puntos
Legendario 🐉 Diamante (Nivel 27) 💎 - 190 puntos
Nota: 1 gol equivale a 1 punto y 1 asistencia equivale a 0.7 puntos`;

    setTimeout(function () {
      room.sendAnnouncement(levelTablePart1, player.id, 0xFFFFFF, "normal", 0);
    }, 0);

    setTimeout(function () {
      room.sendAnnouncement(levelTablePart2, player.id, 0xFFFFFF, "normal", 0);
    }, 1000);

    setTimeout(function () {
      room.sendAnnouncement(levelTablePart3, player.id, 0xFFFFFF, "normal", 0);
    }, 2000);
  }

    if (player.admin) { // Asegúrate de que solo los administradores pueden usar este comando
	if (message === "!goldeoro") {
            GolDeOroActivado = !GolDeOroActivado; // Invertir el estado actual
            if (GolDeOroActivado) {
                room.sendAnnouncement("🌟 El modo Gol de Oro está activado.", null, 0xFFD700, "bold");
            } else {
                room.sendAnnouncement("🌟 El modo Gol de Oro está desactivado.", null, 0xCCCC00, "bold");
            }
        }
    }
    if (player.admin) { // Asegúrate de que solo los administradores pueden usar este comando
        if (message === "!fairplay") {
            FairPlayActivado = !FairPlayActivado; // Invertir el estado actual
            if (FairPlayActivado) {
                room.sendAnnouncement("👍 El modo Fair Play está activado.", null, 0x00FF00, "bold");
            } else {
                room.sendAnnouncement("👎 El modo Fair Play está desactivado.", null, 0xFF0000, "bold");
            }
        }
    }
 if (player.admin) {
    if (message === "!automatizado") {
        if (RSRMap) {
            room.sendAnnouncement("❌ Modo automatizado no puede activarse con Real Soccer habilitado. Coloque otro mapa.", null, 0xFFFFFF, "bold");
        } else {
            if (automatizadoActivado) {
                automatizadoActivado = false;
                room.sendAnnouncement("🛑 Modo automatizado desactivado 🛑", null, 0x00FF00, "bold");
            } else {
                activarModoAutomatizado();
                automatizadoActivado = true;
                room.sendAnnouncement("✅ Modo automatizado activado ✅", null, 0x00FF00, "bold");
            }

        }
    }
}

  if (RSRMap && player.admin) {
    // Verifica si el mensaje comienza con "!minutos "
    if (message.startsWith("!minutos ")) {
      // Extrae el número después de "!minutos "
      var minutos = parseInt(message.substr(9));

      // Verifica si se proporcionó un número válido
      if (!isNaN(minutos)) {
        gameTime = minutos;
        room.sendAnnouncement("La duración del juego ha sido establecida en " + gameTime + " minutos por " + player.name + ".", null, 0x00FF00, "bold");
      }
    }
  }
  if (mensajeEnMinusculas === "!me") {
    if (isCooldown(player, "!me")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false;
    }
  const playerId = player.id;
  const playerName = player.name;
  const goals = totalPlayerGoals[playerName] || 0;
  const assists = totalPlayerAssists[playerName] || 0;
  const totalPoints = goals + assists * 0.7;
  const levelInfo = getLevelInfo(totalPoints);
  const minutesPlayed = playerMinutesPlayed[playerName] || 0;
  const goalkeeperTime = playerGoalkeeperTime[playerName] || 0; // Nueva línea

  const minutesPlayedInMinutes = (minutesPlayed / 60) / 60;
  const goalkeeperTimeInMinutes = (goalkeeperTime / 60) / 60; // Nueva línea
  const goalPerMinute = goals / minutesPlayedInMinutes; 

  const messageHeader = `🏆 Estadísticas de ${playerName} 🏆`;
  const goalsMessage = `⚽ Goles: ${getNumericEmoji(goals)}`;
  const assistsMessage = `👟 Asistencias: ${getNumericEmoji(assists)}`;
  const minutes = Math.floor(minutesPlayedInMinutes);
  const seconds = Math.floor((minutesPlayedInMinutes * 60) % 60);

  // ...

  let minutesPlayedMessage = "";

  if (minutesPlayedInMinutes >= 60) {
    const hours = Math.floor(minutesPlayedInMinutes / 60);
    const remainingMinutes = minutes - hours * 60;
    minutesPlayedMessage = `⏱️ Tiempo Jugado: ${hours} hora${hours > 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`;
  } else if (minutesPlayedInMinutes >= 1) {
    minutesPlayedMessage = `⏱️ Tiempo Jugado: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`;
  } else {
    minutesPlayedMessage = `⏱️ Tiempo Jugado: ${seconds} segundo${seconds > 1 ? 's' : ''}`;
  }

  let goalkeeperTimeMessage = "";

  if (goalkeeperTimeInMinutes >= 60) {
    const goalkeeperHours = Math.floor(goalkeeperTimeInMinutes / 60);
    const goalkeeperRemainingMinutes = goalkeeperTimeInMinutes - goalkeeperHours * 60;
    const goalkeeperMinutes = Math.floor(goalkeeperRemainingMinutes);
    const goalkeeperSeconds = Math.floor((goalkeeperRemainingMinutes * 60) % 60);

    goalkeeperTimeMessage = `⏱️🧤 Tiempo Atajando: ${goalkeeperHours} hora${goalkeeperHours > 1 ? 's' : ''}, ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`;
  } else if (goalkeeperTimeInMinutes >= 1) {
    const goalkeeperMinutes = Math.floor(goalkeeperTimeInMinutes);
    const goalkeeperSeconds = Math.floor((goalkeeperTimeInMinutes * 60) % 60);

    goalkeeperTimeMessage = `⏱️🧤 Tiempo Atajando: ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`;
  } else {
    const goalkeeperSeconds = Math.floor((goalkeeperTimeInMinutes * 60) % 60);

    goalkeeperTimeMessage = `⏱️🧤 Tiempo Atajando: ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`;
  }

  let goalPerMinuteMessage = "";
  let goalFrequencyMessage = "";

  if (goalPerMinute === 0) {
    goalPerMinuteMessage = "⚽🕒 Promedio de gol por minuto: 0 (No ha marcado goles)";
  } else {
    goalPerMinuteMessage = `⚽🕒 Promedio de gol por minuto: ${goalPerMinute.toFixed(2)}`;
    const goalFrequency = 60 / goalPerMinute;
    const hoursBetweenGoals = Math.floor(goalFrequency / 3600);
    const minutesBetweenGoals = Math.floor((goalFrequency % 3600) / 60);
    const secondsBetweenGoals = Math.floor(goalFrequency % 60);

    let frequencyMessage = "";

    if (hoursBetweenGoals > 0) {
      frequencyMessage += `${hoursBetweenGoals} hora${hoursBetweenGoals > 1 ? 's' : ''}`;
    }

    if (minutesBetweenGoals > 0) {
      if (frequencyMessage !== "") {
        frequencyMessage += ` ${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`;
      } else {
        frequencyMessage += `${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`;
      }
    }

    if (secondsBetweenGoals > 0) {
      if (frequencyMessage !== "") {
        frequencyMessage += ` ${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`;
      } else {
        frequencyMessage += `${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`;
      }
    }

    goalFrequencyMessage = ` (1 gol cada ${frequencyMessage})`;
  }

  const levelMessage = `🔝 Nivel: ${levelInfo.level} | [ ${totalPoints.toFixed(2)} Puntos ]`;
  const figuraCount = playerFiguraCount[playerName] || 0;
  const figuraCountMessage = `⭐️ Figura del Partido: ${getNumericEmoji(figuraCount)} ${figuraCount === 1 ? 'vez' : 'veces'}`;

  // Verificar si las estadísticas del jugador están definidas
  if (!playerStats[playerName]) {
    playerStats[playerName] = { victories: 0, draws: 0, defeats: 0, totalGames: 0 };
  }

  const totalGamesMessage = `🎮 Partidos Jugados: ${getNumericEmoji(playerStats[playerName].totalGames)}`;
  const victoryPercentage = (playerStats[playerName].victories / playerStats[playerName].totalGames) * 100;
  const victoryPercentageMessage = `📈 Porcentaje de Victorias: ${victoryPercentage.toFixed(2)}%`;

  const victoriesMessage = `✅ Victorias: ${getNumericEmoji(playerStats[playerName].victories)}`;
  const drawsMessage = `➖ Empates: ${getNumericEmoji(playerStats[playerName].draws)}`;
  const defeatsMessage = `❌ Derrotas: ${getNumericEmoji(playerStats[playerName].defeats)}`;
  const lastGamesMessage = getLastGamesMessage(playerName);
  const highestStreakMessage = `🏆 Racha Histórica: ${playerStats[playerName].highestStreak}`;
  const currentStreakMessage = `🔥 Racha Actual: ${playerStats[playerName].currentStreak}`;
  // Nuevas estadísticas
  const goalsReceived = playerGoalsReceived[playerName] || 0;
  const cleanSheets = playerCleanSheets[playerName] || 0;

  const goalsReceivedMessage = `🥅 Goles Recibidos: ${getNumericEmoji(goalsReceived)}`;
  const cleanSheetsMessage = `🧤 Vallas Invictas: ${getNumericEmoji(cleanSheets)}`;


// Calcula el promedio de goles recibidos por cada 5 minutos
const intervaloMinutos = 5;
const golesRecibidosPorIntervalo = goalsReceived / (goalkeeperTimeInMinutes / intervaloMinutos);

let golesRecibidosPorIntervaloMessage = "";

if (golesRecibidosPorIntervalo === 0) {
  golesRecibidosPorIntervaloMessage = `⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: 0 (No ha recibido goles)`;
} else {
  golesRecibidosPorIntervaloMessage = `⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: ${golesRecibidosPorIntervalo.toFixed(2)}`;
}


  const fullMessage = `${messageHeader}
${levelMessage}
${highestStreakMessage} ${currentStreakMessage}
${totalGamesMessage} ${minutesPlayedMessage} ${victoryPercentageMessage}
${victoriesMessage} ${drawsMessage} ${defeatsMessage}
${goalsMessage} ${assistsMessage} ${figuraCountMessage}
${lastGamesMessage}
${goalPerMinuteMessage}${goalFrequencyMessage}
${goalkeeperTimeMessage} ${goalsReceivedMessage} ${cleanSheetsMessage}
${golesRecibidosPorIntervaloMessage}`;

  room.sendAnnouncement(fullMessage, playerId, 0x04FF5D, "bold");
      return true;
}

  if (mensajeEnMinusculas.startsWith("!stats ")) {
    if (isCooldown(player, "!stats")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false;
    }

        const playerId = parseInt(message.split(" ")[1]);

        // Verificar si el playerId es un número válido
        if (!isNaN(playerId)) {
            const playerInfo = room.getPlayer(playerId);

  if (playerInfo) {
    const playerName = playerInfo.name;
    const goals = totalPlayerGoals[playerName] || 0;
    const assists = totalPlayerAssists[playerName] || 0;
    const totalPoints = goals + (assists * 0.7);
    const levelInfo = getLevelInfo(totalPoints);
    const minutesPlayed = playerMinutesPlayed[playerName] || 0;
    const minutesPlayedInMinutes = (minutesPlayed / 60) / 60;
    const goalPerMinute = goals / minutesPlayedInMinutes;
  const goalkeeperTime = playerGoalkeeperTime[playerName] || 0; // Nueva línea
  const goalkeeperTimeInMinutes = (goalkeeperTime / 60) / 60; // Nueva línea
    const playerIdMessage = `ID del jugador: ${playerId}`;
    const goalsMessage = `⚽ Goles: ${getNumericEmoji(goals)}`;
    const assistsMessage = `👟 Asistencias: ${getNumericEmoji(assists)}`;
    const minutes = Math.floor(minutesPlayedInMinutes);
    const seconds = Math.floor((minutesPlayedInMinutes * 60) % 60);

    let minutesPlayedMessage = "";

    if (minutesPlayedInMinutes >= 60) {
      const hours = Math.floor(minutesPlayedInMinutes / 60);
      const remainingMinutes = minutes - hours * 60;
      minutesPlayedMessage = `⏱️ Tiempo Jugado: ${hours} hora${hours > 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`;
    } else if (minutesPlayedInMinutes >= 1) {
      minutesPlayedMessage = `⏱️ Tiempo Jugado: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`;
    } else {
      minutesPlayedMessage = `⏱️ Tiempo Jugado: ${seconds} segundo${seconds > 1 ? 's' : ''}`;
    }

    let goalPerMinuteMessage = "";
    let goalFrequencyMessage = "";

  let goalkeeperTimeMessage = "";

  if (goalkeeperTimeInMinutes >= 60) {
    const goalkeeperHours = Math.floor(goalkeeperTimeInMinutes / 60);
    const goalkeeperRemainingMinutes = goalkeeperTimeInMinutes - goalkeeperHours * 60;
    const goalkeeperMinutes = Math.floor(goalkeeperRemainingMinutes);
    const goalkeeperSeconds = Math.floor((goalkeeperRemainingMinutes * 60) % 60);

    goalkeeperTimeMessage = `⏱️🧤 Tiempo Atajando: ${goalkeeperHours} hora${goalkeeperHours > 1 ? 's' : ''}, ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`;
  } else if (goalkeeperTimeInMinutes >= 1) {
    const goalkeeperMinutes = Math.floor(goalkeeperTimeInMinutes);
    const goalkeeperSeconds = Math.floor((goalkeeperTimeInMinutes * 60) % 60);

    goalkeeperTimeMessage = `⏱️🧤 Tiempo Atajando: ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`;
  } else {
    const goalkeeperSeconds = Math.floor((goalkeeperTimeInMinutes * 60) % 60);

    goalkeeperTimeMessage = `⏱️🧤 Tiempo Atajando: ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`;
  }



    if (goalPerMinute === 0) {
      goalPerMinuteMessage = "⚽🕒 Promedio de gol por minuto: 0 (No ha marcado goles)";
    } else {
      goalPerMinuteMessage = `⚽🕒 Promedio de gol por minuto: ${goalPerMinute.toFixed(2)}`;
      const goalFrequency = 60 / goalPerMinute;
      const hoursBetweenGoals = Math.floor(goalFrequency / 3600);
      const minutesBetweenGoals = Math.floor((goalFrequency % 3600) / 60);
      const secondsBetweenGoals = Math.floor(goalFrequency % 60);

      let frequencyMessage = "";

      if (hoursBetweenGoals > 0) {
        frequencyMessage += `${hoursBetweenGoals} hora${hoursBetweenGoals > 1 ? 's' : ''}`;
      }

      if (minutesBetweenGoals > 0) {
        if (frequencyMessage !== "") {
          frequencyMessage += ` ${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`;
        } else {
          frequencyMessage += `${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`;
        }
      }

      if (secondsBetweenGoals > 0) {
        if (frequencyMessage !== "") {
          frequencyMessage += ` ${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`;
        } else {
          frequencyMessage += `${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`;
        }
      }

      goalFrequencyMessage = ` (1 gol cada ${frequencyMessage})`;
    }

  const levelMessage = `🔝 Nivel: ${levelInfo.level} | [ ${totalPoints.toFixed(2)} Puntos ]`;
	const figuraCount = playerFiguraCount[playerName] || 0;
const figuraCountMessage = `⭐️ Figura del Partido: ${getNumericEmoji(figuraCount)} ${figuraCount === 1 ? 'vez' : 'veces'}`;
    // Verificar si las estadísticas del jugador están definidas
    if (!playerStats[playerName]) {
        playerStats[playerName] = { victories: 0, draws: 0, defeats: 0, totalGames: 0 };
    }

    const totalGamesMessage = `🎮 Partidos Jugados: ${getNumericEmoji(playerStats[playerName].totalGames)}`;
    const victoryPercentage = (playerStats[playerName].victories / playerStats[playerName].totalGames) * 100;
    const victoryPercentageMessage = `📈 Porcentaje de Victorias: ${victoryPercentage.toFixed(2)}%`;

    const victoriesMessage = `✅ Victorias: ${getNumericEmoji(playerStats[playerName].victories)}`;
    const drawsMessage = `➖ Empates: ${getNumericEmoji(playerStats[playerName].draws)}`;
    const defeatsMessage = `❌ Derrotas: ${getNumericEmoji(playerStats[playerName].defeats)}`;
        const lastGamesMessage = getLastGamesMessage(playerName);
        const highestStreakMessage = `🏆 Racha Histórica: ${playerStats[playerName].highestStreak}`;
        const currentStreakMessage = `🔥 Racha Actual: ${playerStats[playerName].currentStreak}`;
        const goalsReceived = playerGoalsReceived[playerName] || 0;
        const cleanSheets = playerCleanSheets[playerName] || 0;

        const goalsReceivedMessage = `🥅 Goles Recibidos: ${getNumericEmoji(goalsReceived)}`;
        const cleanSheetsMessage = `🧤 Vallas Invictas: ${getNumericEmoji(cleanSheets)}`;

// Calcula el promedio de goles recibidos por cada 5 minutos
const intervaloMinutos = 5;
const golesRecibidosPorIntervalo = goalsReceived / (goalkeeperTimeInMinutes / intervaloMinutos);

let golesRecibidosPorIntervaloMessage = "";

if (golesRecibidosPorIntervalo === 0) {
  golesRecibidosPorIntervaloMessage = `⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: 0 (No ha recibido goles)`;
} else {
  golesRecibidosPorIntervaloMessage = `⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: ${golesRecibidosPorIntervalo.toFixed(2)}`;
}


        const fullMessage = 
`${playerName} | ${playerIdMessage}
${levelMessage}
${highestStreakMessage} ${currentStreakMessage}
${totalGamesMessage} ${minutesPlayedMessage} ${victoryPercentageMessage}
${victoriesMessage} ${drawsMessage} ${defeatsMessage}
${goalsMessage} ${assistsMessage} ${figuraCountMessage}
${lastGamesMessage}
${goalPerMinuteMessage}${goalFrequencyMessage}
${goalkeeperTimeMessage} ${goalsReceivedMessage} ${cleanSheetsMessage}
${golesRecibidosPorIntervaloMessage}`
    room.sendAnnouncement(fullMessage, null, 0x04FF5D, "bold");
      return true;
            } else {
                room.sendAnnouncement("⚠️ Jugador no encontrado | Coloca !ids para ver los IDs de los jugadores", player.id, 0xFFFF00, "bold");
            }
        } else {
            // Enviar mensaje si el ID no es un número válido
            room.sendAnnouncement("⚠️ Debes poner !stats ID | Ejemplo: !stats 15 (Para ver las stats del jugador con ID 15). Con !ids puedes ver los IDs de todos los jugadores.", player.id, 0xFFFF00, "bold");
        }
    }
  if (mensajeEnMinusculas === "!stats") {
    if (isCooldown(player, "!stats")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false;
    }
        // Enviar mensaje si no se proporciona un ID después de !stats
        room.sendAnnouncement("⚠️ Debes poner !stats ID | Ejemplo: !stats 15 (Para ver las stats del jugador con ID 15). Con !ids puedes ver los IDs de todos los jugadores.", player.id, 0xFFFF00, "bold");
      return true;
    }
  if (mensajeEnMinusculas === "!racha-actual") {
    if (isCooldown(player, "!racha-actual")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false;
    }
  // Crear una lista de jugadores ordenada por racha actual
  let playersByCurrentStreak = Object.keys(playerStats).map(playerName => ({ playerName, currentStreak: playerStats[playerName].currentStreak }));
  playersByCurrentStreak.sort((a, b) => b.currentStreak - a.currentStreak);

  // Formatear el mensaje con la tabla de rachas actuales
  let currentStreakTable = playersByCurrentStreak.map((entry, index) => `${getRankEmoji(index)} ${entry.playerName}: ${entry.currentStreak} victorias consecutivas`);
  currentStreakTable = currentStreakTable.join("\n");

  // Enviar el anuncio con la tabla de rachas actuales
  room.sendAnnouncement("🔥 ¡Tabla de Rachas Actuales! 🔥\n\n" + currentStreakTable, player.id, 0xFF6347, "bold");
      return true;
}

  if (mensajeEnMinusculas === "!racha-historica") {
    if (isCooldown(player, "!racha-historica")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false;
    }
  // Crear una lista de jugadores ordenada por racha récord
  let playersByHighestStreak = Object.keys(playerStats).map(playerName => ({ playerName, highestStreak: playerStats[playerName].highestStreak }));
  playersByHighestStreak.sort((a, b) => b.highestStreak - a.highestStreak);

  // Formatear el mensaje con la tabla de rachas récord
  let highestStreakTable = playersByHighestStreak.map((entry, index) => `${getRankEmoji(index)} ${entry.playerName}: ${entry.highestStreak} victorias consecutivas`);
  highestStreakTable = highestStreakTable.join("\n");

  // Enviar el anuncio con la tabla de rachas récord
  room.sendAnnouncement("🏆 ¡Tabla Histórica de Rachas! 🏆\n\n" + highestStreakTable, player.id, 0xFFB915, "bold");
      return true;
}
  if (mensajeEnMinusculas === "!victorias") {
    if (isCooldown(player, "!victorias")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false;
    }
  // Creamos una lista de jugadores en orden descendente de victorias
  let topVictories = [];
  for (const player in playerStats) {
    topVictories.push({ player, victories: playerStats[player].victories });
  }
  topVictories.sort((a, b) => b.victories - a.victories); // Ordenamos por victorias
  topVictories = topVictories.map((entry, index) => `${getRankEmoji(index)} ${entry.player}: ${entry.victories} victorias`);
  topVictories = topVictories.join("\n");

  // Mostramos la tabla de victorias en el chat del host
  room.sendAnnouncement("🏆 ¡Tabla de Victorias! ✅\n\n" + topVictories, player.id, 0x00FF00, "bold");
      return true;
}
// Comando !valla-invicta para mostrar el ranking de vallas invictas
  if (mensajeEnMinusculas === "!vallas-invictas") {
    if (isCooldown(player, "!vallas-invictas")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false;
    }
  // Crear una lista de jugadores ordenada por vallas invictas
  let playersByCleanSheets = Object.keys(playerCleanSheets).map(playerName => ({ playerName, cleanSheets: playerCleanSheets[playerName] }));
  playersByCleanSheets.sort((a, b) => b.cleanSheets - a.cleanSheets);

  // Formatear el mensaje con la tabla de vallas invictas
  let cleanSheetsTable = playersByCleanSheets.map((entry, index) => `${getRankEmoji(index)} ${entry.playerName}: ${entry.cleanSheets} vallas invictas`);
  cleanSheetsTable = cleanSheetsTable.join("\n");

  // Enviar el anuncio con la tabla de vallas invictas
  room.sendAnnouncement("🥅⛔️ ¡Tabla de Vallas Invictas! ⛔🥅\n\n" + cleanSheetsTable, player.id, 0x04FF5D, "bold");
      return true;
}

// Comando !goles-recibidos para mostrar el ranking de mayor cantidad de goles recibidos
  if (mensajeEnMinusculas === "!goles-recibidos") {
    if (isCooldown(player, "!goles-recibidos")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false;
    }
  // Crear una lista de jugadores ordenada por goles recibidos
  let playersByGoalsReceived = Object.keys(playerGoalsReceived).map(playerName => ({ playerName, goalsReceived: playerGoalsReceived[playerName] }));
  playersByGoalsReceived.sort((a, b) => b.goalsReceived - a.goalsReceived);

  // Formatear el mensaje con la tabla de goles recibidos
  let goalsReceivedTable = playersByGoalsReceived.map((entry, index) => `${getRankEmoji(index)} ${entry.playerName}: ${entry.goalsReceived} goles recibidos`);
  goalsReceivedTable = goalsReceivedTable.join("\n");

  // Enviar el anuncio con la tabla de goles recibidos
  room.sendAnnouncement("⚽🥅 ¡Tabla de Goles Recibidos! 🥅⚽\n\n" + goalsReceivedTable, player.id, 0xFF5C29, "bold");
      return true;
}

  // Comando !promedios-recibidos para mostrar la tabla de promedios de goles recibidos
  if (mensajeEnMinusculas === "!promedios-recibidos") {
    if (isCooldown(player, "!promedios-recibidos")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false; // Evitar que se envíe el mensaje del comando
    }

    // Crear una lista de jugadores ordenada por el promedio de goles recibidos cada 5 minutos
    let playersByGoalAverage = Object.keys(playerStats).map(playerName => {
      const goalsReceived = playerGoalsReceived[playerName] || 0;
      const goalkeeperTime = playerGoalkeeperTime[playerName] || 0;
      const goalkeeperTimeInMinutes = (goalkeeperTime / 60) / 60;
      const intervaloMinutos = 5;
      const golesRecibidosPorIntervalo = goalsReceived / (goalkeeperTimeInMinutes / intervaloMinutos);

      return { playerName, goalAverage: golesRecibidosPorIntervalo };
    });

    // Ordenar de menor a mayor
    playersByGoalAverage.sort((a, b) => a.goalAverage - b.goalAverage);

    // Formatear el mensaje con la tabla de promedio de goles recibidos cada 5 minutos
    let goalAverageTable = playersByGoalAverage.map((entry, index) => `${getRankEmoji(index)} ${entry.playerName}: ${entry.goalAverage.toFixed(2)} goles cada 5 minutos`);
    goalAverageTable = goalAverageTable.join("\n");

    // Enviar el anuncio con la tabla de promedio de goles recibidos cada 5 minutos
    room.sendAnnouncement("📊🥅 ¡Promedio de Goles Recibidos Cada 5 Minutos! \n\n" + goalAverageTable, player.id, 0xF9FF08, "bold");

    return true; // Permitir que se envíe el mensaje del comando
  }


  if (mensajeEnMinusculas === "!presencias") {
    if (isCooldown(player, "!presencias")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false; // Evitar que se envíe el mensaje del comando
    }
  // Creamos una lista de jugadores en orden descendente de partidos jugados
  let topPresences = [];
  for (const player in playerStats) {
    topPresences.push({ player, totalGames: playerStats[player].totalGames });
  }
  topPresences.sort((a, b) => b.totalGames - a.totalGames); // Ordenamos por partidos jugados
  topPresences = topPresences.map((entry, index) => `${getRankEmoji(index)} ${entry.player}: ${entry.totalGames} partidos jugados`);
  topPresences = topPresences.join("\n");

  // Mostramos la tabla de partidos jugados en el chat del host
  room.sendAnnouncement("🏆 ¡Tabla de Partidos Jugados! 🎮\n\n" + topPresences, player.id, 0xFFB900, "bold");
return true;
}
  if (mensajeEnMinusculas === "!viciosos") {
    if (isCooldown(player, "!viciosos")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false; // Evitar que se envíe el mensaje del comando
    }
  // Creamos una lista de jugadores en orden descendente de tiempo jugado
  let topViciosos = [];
  for (const player in playerMinutesPlayed) {
    const minutesPlayedInMinutes = playerMinutesPlayed[player] / 60 / 60;
    const minutes = Math.floor(minutesPlayedInMinutes);
    const seconds = Math.floor((minutesPlayedInMinutes * 60) % 60);

    let timePlayedMessage = "";

    if (minutesPlayedInMinutes >= 60) {
      const hours = Math.floor(minutesPlayedInMinutes / 60);
      const remainingMinutes = minutes - hours * 60;
      timePlayedMessage = `⏱️ Tiempo Jugado: ${hours} hora${hours > 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`;
    } else if (minutesPlayedInMinutes >= 1) {
      timePlayedMessage = `⏱️ Tiempo Jugado: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`;
    } else {
      timePlayedMessage = `⏱️ Tiempo Jugado: ${seconds} segundo${seconds > 1 ? 's' : ''}`;
    }

    topViciosos.push({ player, minutesPlayed: playerMinutesPlayed[player], timePlayedMessage });
  }

  topViciosos.sort((a, b) => b.minutesPlayed - a.minutesPlayed); // Ordenamos por tiempo jugado
  topViciosos = topViciosos.map((entry, index) => `${getRankEmoji(index)} ${entry.player}: ${entry.timePlayedMessage}`);
  topViciosos = topViciosos.join("\n");

  // Mostramos la tabla de tiempo jugado en el chat del host
  room.sendAnnouncement("🏆 ¡Tabla de Tiempo Jugado! ⏱️\n\n" + topViciosos, player.id, 0xFFA500, "bold");
      return true;
}


  if (mensajeEnMinusculas === "!ganadores") {
    if (isCooldown(player, "!ganadores")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false; // Evitar que se envíe el mensaje del comando
    }
  // Creamos una lista de jugadores en orden descendente de porcentaje de victorias
  let topWinners = [];
  for (const player in playerStats) {
    const victories = playerStats[player].victories;
    const totalGames = playerStats[player].totalGames;
    const winPercentage = totalGames === 0 ? 0 : (victories / totalGames) * 100;
    topWinners.push({ player, winPercentage });
  }
  topWinners.sort((a, b) => b.winPercentage - a.winPercentage); // Ordenamos por porcentaje de victorias
  topWinners = topWinners.map((entry, index) => `${getRankEmoji(index)} ${entry.player}: ${entry.winPercentage.toFixed(2)}% de victorias`);
  topWinners = topWinners.join("\n");

  // Mostramos la tabla de porcentaje de victorias en el chat del host
  room.sendAnnouncement("🏆 ¡Tabla de Porcentaje de Victorias! 📈\n\n" + topWinners, player.id, 0xFFD700, "bold");
      return true;
}


// Comando !equilibrar para equilibrar equipos por nivel
if (message === "!equilibrar" && player.admin) {
  const players = room.getPlayerList();

  // Filtrar a los jugadores que están en el campo
  const activePlayers = players.filter(p => p.team !== 0 && p.position !== null);

  // Ordenar a los jugadores activos por nivel de mayor a menor
  const sortedPlayers = activePlayers.sort((a, b) => {
    const aPoints = (totalPlayerGoals[a.name] || 0) + ((totalPlayerAssists[a.name] || 0) * 0.7);
    const bPoints = (totalPlayerGoals[b.name] || 0) + ((totalPlayerAssists[b.name] || 0) * 0.7);
    return bPoints - aPoints;
  });

  // Distribuir a los jugadores en dos equipos equilibrados
  const team1 = [];
  const team2 = [];
  let totalPointsTeam1 = 0;
  let totalPointsTeam2 = 0;

  // Iterar sobre los jugadores y asignarlos a los equipos de manera equitativa
  for (let i = 0; i < sortedPlayers.length; i++) {
    const currentPlayer = sortedPlayers[i];
    const currentPlayerPoints = (totalPlayerGoals[currentPlayer.name] || 0) + ((totalPlayerAssists[currentPlayer.name] || 0) * 0.7);

    if (totalPointsTeam1 <= totalPointsTeam2) {
      team1.push(currentPlayer);
      totalPointsTeam1 += currentPlayerPoints;
    } else {
      team2.push(currentPlayer);
      totalPointsTeam2 += currentPlayerPoints;
    }
  }

  // Asignar los equipos a los jugadores
  team1.forEach(player => room.setPlayerTeam(player.id, 1));
  team2.forEach(player => room.setPlayerTeam(player.id, 2));

  room.sendAnnouncement("¡Equipos equilibrados según los niveles de los jugadores! ⚖️📊", null, 0xffff99, "bold", 0);
}
  if (mensajeEnMinusculas === "!puntos") {
    if (isCooldown(player, "!puntos")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false; // Evitar que se envíe el mensaje del comando
    }
  // Crear una lista de jugadores con sus puntajes y niveles
  let playerScoresAndLevels = [];
  for (const playerName in totalPlayerGoals) {
    const goals = totalPlayerGoals[playerName] || 0;
    const assists = totalPlayerAssists[playerName] || 0;
    const totalPoints = goals + (assists * 0.7);
    const levelInfo = getLevelInfo(totalPoints);
    playerScoresAndLevels.push({ playerName, totalPoints, level: levelInfo.level });
  }
  playerScoresAndLevels.sort((a, b) => b.totalPoints - a.totalPoints); // Ordenar en orden descendente
  playerScoresAndLevels = playerScoresAndLevels.map((entry, index) => `${getRankEmoji(index)} ${entry.playerName}: ${entry.totalPoints.toFixed(2)} puntos - Nivel: ${entry.level}`);
  playerScoresAndLevels = playerScoresAndLevels.join("\n");

  // Mostrar la lista de puntajes y niveles en el chat del host
  room.sendAnnouncement(`🏆 ¡Lista de Puntajes y Niveles! 📊\n\n${playerScoresAndLevels}`, player.id, 0x00ff00, "bold");
	return true;
}
  if (mensajeEnMinusculas === "!goleadores") {
    if (isCooldown(player, "!goleadores")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false; // Evitar que se envíe el mensaje del comando
    }
  // Creamos una lista de goleadores en orden descendente de cantidad de goles
  let topScorers = [];
  for (const player in totalPlayerGoals) {
    topScorers.push({ player, goals: totalPlayerGoals[player] });
  }
  topScorers.sort((a, b) => b.goals - a.goals); // Cambio en la función de ordenamiento
  topScorers = topScorers.map((entry, index) => `${getRankEmoji(index)} ${entry.player}: ${entry.goals} goles`);
  topScorers = topScorers.join("\n");

  // Mostramos la tabla de goleadores en el chat del host
  room.sendAnnouncement("🏆 ¡Tabla de Goleadores! ⚽\n\n" + topScorers, player.id, 0xffff00, "bold");
	return true;
}
  if (mensajeEnMinusculas === "!asistidores") {
    if (isCooldown(player, "!asistidores")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false; // Evitar que se envíe el mensaje del comando
    }
  // Creamos una lista de asistidores en orden descendente de cantidad de asistencias
  let topAssisters = [];
  for (const player in totalPlayerAssists) {
    topAssisters.push({ player, assists: totalPlayerAssists[player] });
  }
  topAssisters.sort((a, b) => b.assists - a.assists); // Cambio en la función de ordenamiento
  topAssisters = topAssisters.map((entry, index) => `${getRankEmoji(index)} ${entry.player}: ${entry.assists} asistencias`);
  topAssisters = topAssisters.join("\n");

  // Mostramos la tabla de asistidores en el chat del host
  room.sendAnnouncement("🏆 ¡Tabla de Asistidores! 👟\n\n" + topAssisters, player.id, 0x7DFFF9, "bold");
	return true;
}
  if (mensajeEnMinusculas === "!promedios") {
    if (isCooldown(player, "!promedios")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false; // Evitar que se envíe el mensaje del comando
    }
  // Creamos una lista de jugadores con sus promedios de gol por minuto en orden descendente
  let topGoalScorersPerMinute = [];
  for (const player in totalPlayerGoals) {
    const goals = totalPlayerGoals[player] || 0;
    const minutesPlayed = playerMinutesPlayed[player] || 1; // Evitar la división por cero
    const minutesPlayedInMinutes = (minutesPlayed / 60) / 60;
    const goalPerMinute = goals / minutesPlayedInMinutes;

    let frequencyMessage = "";
    if (goalPerMinute > 0) {
      const goalFrequency = 60 / goalPerMinute;
      const hoursBetweenGoals = Math.floor(goalFrequency / 3600);
      const minutesBetweenGoals = Math.floor((goalFrequency % 3600) / 60);
      const secondsBetweenGoals = Math.floor(goalFrequency % 60);

      if (hoursBetweenGoals > 0) {
        frequencyMessage += `${hoursBetweenGoals} hora${hoursBetweenGoals > 1 ? 's' : ''}`;
      }

      if (minutesBetweenGoals > 0) {
        if (frequencyMessage !== "") {
          frequencyMessage += ` ${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`;
        } else {
          frequencyMessage += `${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`;
        }
      }

      if (secondsBetweenGoals > 0) {
        if (frequencyMessage !== "") {
          frequencyMessage += ` ${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`;
        } else {
          frequencyMessage += `${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`;
        }
      }
    }

    topGoalScorersPerMinute.push({ player, goalPerMinute, frequencyMessage });
  }
  topGoalScorersPerMinute.sort((a, b) => b.goalPerMinute - a.goalPerMinute); // Ordenamos por promedio de gol por minuto
  topGoalScorersPerMinute = topGoalScorersPerMinute.map((entry, index) => `${getRankEmoji(index)} ${entry.player}: ${entry.goalPerMinute.toFixed(2)} goles por minuto${entry.frequencyMessage ? ` (1 gol cada ${entry.frequencyMessage})` : ''}`);
  topGoalScorersPerMinute = topGoalScorersPerMinute.join("\n");

  // Mostramos el ranking de promedios de gol por minuto en el chat del host
  room.sendAnnouncement("⚽🏆 ¡Ranking de Promedios de Gol por Minuto! ⏱️⚽\n\n" + topGoalScorersPerMinute, player.id, 0xFFB900, "bold");
	return true;
}



    var lowerCaseMessage = removeAccents(message.toLowerCase());

// Comando para iniciar la votación de administrador
  if (!adminVotingActive && room.getPlayerList().length >= MIN_PLAYERS_FOR_ADMIN_VOTE && message.startsWith('!admin')) {
    startAdminVoting();
  }

if (adminVotingActive && message.startsWith('!admin ')) {
  const votedPlayerId = parseInt(message.slice(7));
  if (!isNaN(votedPlayerId) && room.getPlayer(votedPlayerId) && votedPlayerId !== player.id && !isPlayerVoted(player.id, adminVotes)) {
    adminVotes[votedPlayerId] = adminVotes[votedPlayerId] || [];
    adminVotes[votedPlayerId].push(player.id);

    const voteCount = adminVotes[votedPlayerId].length;
    const votesNeededToBecomeAdmin = Math.ceil(room.getPlayerList().length * (PorcentajeDeVotosAdmin / 100)); // Calcula los votos según el porcentaje
    const votesRemaining = votesNeededToBecomeAdmin - voteCount;

    const voteType = voteCount === 1 ? 'voto' : 'votos';
    const votedPlayer = room.getPlayer(votedPlayerId);
    const votedPlayerInfo = votedPlayer ? `${votedPlayer.name} (ID: ${votedPlayerId})` : votedPlayerId.toString();

    room.sendAnnouncement(
      `🗳️ ¡@${player.name} ha votado a ${votedPlayerInfo} para ser ADMINISTRADOR del host! (${voteCount} ${voteType}). 🗦👑🗧 \n 📢 🗳️ VOTOS OBTENIDOS: ${voteCount} ✅ | ⏳ VOTOS RESTANTES: ${votesRemaining > 0 ? votesRemaining : 0}`,
      null, 0x00ff59, "bold", 2
    );

    if (voteCount >= votesNeededToBecomeAdmin) {
      // Si el jugador alcanza o supera los votos necesarios, se convierte en administrador
      room.setPlayerAdmin(votedPlayerId, true);
      room.sendAnnouncement(
        `🎉 ¡El jugador ${votedPlayerInfo} ha sido elegido como el nuevo administrador! (${voteCount} votos a favor) ¡Felicidades! 🥳`,
        null, 0x00FF00
      );
      endAdminVoting(); // Finalizar la votación de administrador ya que se ha seleccionado al nuevo administrador
    }
  } else {
    room.sendAnnouncement(
      `¨[❌] ${player.name}, el jugador que mencionaste no se encuentra en el host, ingresaste un valor incorrecto o ya has votado por ese jugador. Asegúrate de usar "!admin ID" con el número de ID correcto y que no hayas votado previamente. ✅  \n 📋🔍 Lista de IDs de jugadores: !ids`,
      player.id, 0xffbf00, "small-bold", 1
    );
  }
} else if (!adminVotingActive && room.getPlayerList().length < MIN_PLAYERS_FOR_ADMIN_VOTE && message.startsWith('!admin ')) {
  room.sendAnnouncement(
    `[❗] La votación para elegir administrador no se puede iniciar. \n ⏬ Se necesitan un mínimo de ${MIN_PLAYERS_FOR_ADMIN_VOTE} jugadores para iniciar una votación de administrador. 🗳️`,
    player.id, 0xffbf00, "small-bold", 1
  );
} else if (adminVotingActive && message.startsWith('!admin')) {
  room.sendAnnouncement(
    `[❗] ${player.name}, para votar a un jugador como administrador, usa "!admin ID" con el número de ID correcto. \n 📋🔍 Lista de IDs de jugadores: !ids`,
    player.id, 0xffbf00, "small-bold", 1
  );
}
  // Comando para iniciar la votación de expulsión
  if (!kickVotingActive && room.getPlayerList().length >= MIN_PLAYERS_FOR_KICK_VOTE && message.startsWith('!expulsar')) {
    startKickVoting();
  }

 if (kickVotingActive && message.startsWith('!expulsar ')) {
  const kickedPlayerId = parseInt(message.slice(9));
  if (!isNaN(kickedPlayerId) && room.getPlayer(kickedPlayerId) && kickedPlayerId !== player.id && !isPlayerVoted(player.id, kickVotes)) {
    kickVotes[kickedPlayerId] = kickVotes[kickedPlayerId] || [];
    kickVotes[kickedPlayerId].push(player.id);

    const voteCount = kickVotes[kickedPlayerId].length;
    const votesNeededToKick = Math.ceil(room.getPlayerList().length * (PorcentajeDeVotosBan / 100)); // Calcula los votos según el porcentaje
    const votesRemaining = votesNeededToKick - voteCount;

    const voteType = voteCount === 1 ? 'voto' : 'votos';
    const kickedPlayer = room.getPlayer(kickedPlayerId);
    const kickedPlayerInfo = kickedPlayer ? `${kickedPlayer.name} (ID: ${kickedPlayerId})` : kickedPlayerId.toString();

    room.sendAnnouncement(
      `🗳️ ¡@${player.name} ha votado para EXPULSAR a ${kickedPlayerInfo} del host! (${voteCount} ${voteType}). 🚫 \n 📢 🗳️ VOTOS OBTENIDOS: ${voteCount} ✅ | ⏳ VOTOS RESTANTES: ${votesRemaining > 0 ? votesRemaining : 0}`,
      null, 0xFFE000, "bold", 2
    );

    if (voteCount >= votesNeededToKick) {
      // Si el jugador alcanza o supera los votos necesarios, se expulsa al jugador
      room.kickPlayer(kickedPlayerId, "Expulsado por votación de la comunidad", true);
      room.sendAnnouncement(
        `👢 ¡El jugador ${kickedPlayerInfo} ha sido expulsado por votación de la comunidad! (${voteCount} votos a favor)`,
        null, 0xFF0000
      );
      endKickVoting(); // Finalizar la votación de expulsión después de expulsar al jugador
    }
  } else if (isNaN(kickedPlayerId)) {
    room.sendAnnouncement(
      `[❗] ${player.name}, después de "!expulsar" debes ingresar el número de ID del jugador que deseas expulsar. \n Ejemplo: !expulsar 123 \n 📋🔍 Lista de IDs de jugadores: !ids`,
      player.id, 0xffbf00, "small-bold", 1
    );
  } else {
    room.sendAnnouncement(
      `[❌] ${player.name}, el jugador que mencionaste no se encuentra en el host, ingresaste un valor incorrecto o ya has votado por ese jugador. Asegúrate de usar "!expulsar ID" con el número de ID correcto y que no hayas votado previamente. \n 📋🔍 Lista de IDs de jugadores: !ids`,
      player.id, 0xffbf00, "small-bold", 1
    );
  }
} else if (!kickVotingActive && room.getPlayerList().length < MIN_PLAYERS_FOR_KICK_VOTE && message.startsWith('!expulsar ')) {
  room.sendAnnouncement(
    `[❗] La votación para expulsar a un jugador no se puede iniciar. \n ⏬ Se necesitan un mínimo de ${MIN_PLAYERS_FOR_KICK_VOTE} jugadores para iniciar una votación de expulsión. 🗳️`,
    player.id, 0xffbf00, "small-bold", 1
  );
} else if (kickVotingActive && message.startsWith('!expulsar')) {
  room.sendAnnouncement(
    `[❗] ${player.name}, para votar la expulsión de un jugador, usa "!expulsar ID" con el número de ID correcto. \n Ejemplo: !expulsar 123 \n 📋🔍 Lista de IDs de jugadores: !ids`,
    player.id, 0xffbf00, "small-bold", 1
  );
}

  // Verificar si el jugador es el administrador y si el mensaje comienza con "!publicidad"
// Verificar si el jugador es el administrador y si el mensaje comienza con "!publicidad"
if (player.admin && message.startsWith('!publicidad')) {
  // Obtener la cantidad de minutos y el mensaje de la publicidad
  const command = message.split(' ');
  if (command.length >= 3) {
    const minutes = parseFloat(command[1]); // Utilizamos parseFloat en lugar de parseInt para permitir decimales
    const msg = command.slice(2).join(' ');

    // Verificar si los minutos son válidos
    if (!isNaN(minutes) && minutes > 0) { // Cambiamos la condición a minutes > 0
      // Actualizar los datos de la publicidad
      advertisingMinutes = minutes;
      advertisingMessage = msg;

      // Reiniciar el intervalo de publicidad
      clearInterval(advertisingInterval);
      advertisingInterval = setInterval(sendAdvertisingMessage, advertisingMinutes * 60 * 1000);

      // Enviar un mensaje de confirmación al administrador
      room.sendAnnouncement(`Publicidad programada para cada ${advertisingMinutes} minutos: "${advertisingMessage}"`);
    } else {
      // Enviar un mensaje de error al administrador si se ingresa 0 como cantidad de minutos
      if (minutes === 0) {
        room.sendAnnouncement('Error: La cantidad de minutos debe ser un número mayor a 0.');
      } else {
        // Enviar un mensaje de error al administrador si el formato es incorrecto
        room.sendAnnouncement('Error: La cantidad de minutos debe ser un número mayor a 0.');
      }
    }
  } else {
    // Enviar un mensaje de error al administrador
    room.sendAnnouncement('Error: Comando de publicidad inválido. Formato correcto: !publicidad <minutos> <mensaje>');
  }
}

  // Verificar si el jugador que envió el mensaje es el administrador del host
  if (player.admin) {
    // Verificar si el mensaje comienza con "!silenciar"
    if (message.indexOf('!silenciar') === 0) {
      // Obtener la palabra a silenciar
      var palabra = message.split(' ')[1];
      // Agregar la palabra a la lista de palabras silenciadas
      palabrasSilenciadas.push(palabra);
      // Enviar un anuncio al administrador confirmando la acción
      room.sendAnnouncement('La palabra "' + palabra + '" ha sido silenciada.', null, 0xFF0000, "bold");
    }
    // Verificar si el mensaje comienza con "!desilenciar"
    else if (message.indexOf('!desilenciar') === 0) {
      // Obtener la palabra a desilenciar
      var palabra = message.split(' ')[1];
      // Encontrar el índice de la palabra en la lista de palabras silenciadas
      var indice = palabrasSilenciadas.indexOf(palabra);
      // Verificar si la palabra se encontraba silenciada
      if (indice !== -1) {
        // Eliminar la palabra de la lista de palabras silenciadas
        palabrasSilenciadas.splice(indice, 1);
        // Enviar un anuncio al administrador confirmando la acción
        room.sendAnnouncement('La palabra "' + palabra + '" ha sido habilitada.', null, 0xFF0000, "bold");
      }
    }
  }
  else {
    // Verificar si el mensaje contiene alguna palabra silenciada
    if (palabrasSilenciadas.some(function (palabra) {
      return message.indexOf(palabra) !== -1;
    })) {
      // Cancelar el envío del mensaje del jugador
      return false;
    }
  }
if (player.admin) {
  if (message === "!random") {
    shuffleTeams();
  } else if (message === "!balance") {
    balanceTeams();
  } else if (message === "!auto_balance") {
    if (autoBalanceEnabled) {
      autoBalanceEnabled = false; // Desactivar el equilibrio automático
      room.sendAnnouncement("¡El equilibrio automático de equipos ha sido desactivado! ⚖️⚙️❌", null, 0xff2020, "bold");
    } else {
      autoBalanceEnabled = true; // Activar el equilibrio automático
      room.sendAnnouncement("¡El equilibrio automático de equipos ha sido activado! ⚖️⚙️✅", null, 0x00ff3c, "bold");
    }
  }
}
 var lowerCaseMessage = removeAccents(message.toLowerCase());

  if (
    lowerCaseMessage.includes("como me hago gordo") ||
    lowerCaseMessage.includes("como me hago pequeño") ||
    lowerCaseMessage.includes("como me hago grande") ||
    lowerCaseMessage.includes("porque hay un gordo") ||
    lowerCaseMessage.includes("porque hay uno pequeño") ||
    lowerCaseMessage.includes("porque hay un enano") ||
    lowerCaseMessage.includes("por que hay un gordo") ||
    lowerCaseMessage.includes("por que hay uno pequeño") ||
    lowerCaseMessage.includes("por que hay un enano") ||
    lowerCaseMessage.includes("quiero ser enano") ||
    lowerCaseMessage.includes("quiero ser gordo") ||
    lowerCaseMessage.includes("como me hago gigante")
  ) {
    // Responder al jugador con un anuncio
    room.sendAnnouncement("Para cambiar tu tamaño, utiliza el comando !size", player.id, 0xFF0000);
  }
  if (message === "!posesion") {
    const totalPosesion = equipoAzulPosesion + equipoRojoPosesion;
    let porcentajeAzul = 0;
    let porcentajeRojo = 0;

    // Calcular el porcentaje de posesión de cada equipo
    if (totalPosesion > 0) {
      porcentajeAzul = (equipoAzulPosesion / totalPosesion) * 100;
      porcentajeRojo = (equipoRojoPosesion / totalPosesion) * 100;
    }

    // Enviar el anuncio con el porcentaje de posesión de cada equipo
    room.sendAnnouncement(
      ` ` + teamRed + `  ${porcentajeAzul.toFixed(2)}% - ` + teamBlue + ` : ${porcentajeRojo.toFixed(2)}%`
    );
  }
    if (player.admin) {
        const parts = message.split(' ');
        if (parts[0] === '!juegan' && parts.length === 2) {
            const maxPlayers = parseInt(parts[1]);
            if (!isNaN(maxPlayers) && maxPlayers >= 1 && maxPlayers <= 15) {
                maxPlayersPerTeam = maxPlayers;
                room.sendAnnouncement(player.name + ' ha establecido el número máximo de jugadores por equipo en ' + maxPlayersPerTeam + ' 🏆', null, 0x00ff55, 'bold');
                // Activar el modo "Juegan Algunos"
                modoJueganAlgunos = true;
                // Desactivar el modo "Juegan Todos"
                modoJueganTodos = false;
            } else {
                room.sendAnnouncement(player.name + ', por favor, introduce un número válido entre 1 y 15. 🛑', player.id, 0xff6340, 'bold');
            }
        }  else if (parts[0] === '!juegantodos') {
            // Activar el modo "Juegan Todos" y desactivar el modo "Juegan Algunos"
            modoJueganTodos = !modoJueganTodos;
            modoJueganAlgunos = false;
            if (modoJueganTodos) {
                room.sendAnnouncement(player.name + ' ha ACTIVADO el Modo 🎮 JUEGAN TODOS 🤩', null, 0x00ff55, 'bold');
            } else {
                room.sendAnnouncement(player.name + ' ha DESACTIVADO el Modo 🎮 JUEGAN TODOS 🚫', null, 0xff6340, 'bold');
            }
        } else if (parts[0] === '!juegan-off') {
            // Desactivar el modo "Juegan Algunos"
            modoJueganAlgunos = false;
            room.sendAnnouncement(player.name + ' ha DESACTIVADO el Modo 🎮 JUEGAN ALGUNOS 🚫', null, 0xff6340, 'bold');
        }
    }

  if (mensajeEnMinusculas.startsWith("!pregunta")) {
    if (isCooldown(player, "!pregunta")) {
      room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.", player.id, 0xFFFF00, "bold");
      return false; // Evitar que se envíe el mensaje del comando
    }

    var pregunta = message.substring(9).trim(); // Obtiene la pregunta que sigue al comando
    var respuesta = generar_respuesta_aleatoria();
    var anuncio = player.name + " ha preguntado: " + pregunta + " || 🐵: Mi respuesta es \"" + respuesta + "\"";
    room.sendAnnouncement(anuncio, null, 0xffac5e, "bold");

    return true; // Permitir que se envíe el mensaje del comando
  }
	if (message.startsWith("@@")) {
		message = message.substr(2).trim();
		if (message.indexOf(' ') !== -1) {
			let args = message.match(/^(\S+)\s(.*)/).slice(1);
			
			if (args.length > 1) {
				var pmMsg = args[1];
				var players = room.getPlayerList();
				var pmSent = false;
				players.forEach(function(pmPlayer) {
					if (pmPlayer.name === args[0] || pmPlayer.name === args[0].replace(/_/g, ' ')) {
						whisper("[💬 PM ➤ " + pmPlayer.name + "] " + player.name + ": " + pmMsg, player.id, 0xc7a2ff, "bold", 1);	
						whisper("[💬 PM] " + player.name + ": " + pmMsg, pmPlayer.id, 0xc7a2ff, "bold", 2);
						pmSent = true;					
					}
				});
				if (pmSent == false) {
					whisper("No se pudo encontrar el usuario '" + args[0] + "'", player.id, 0xff20ff, "normal", 1);
				}
				return false;
			}
		}			
	}
    if(filter(message)) return false;
    var Jugadores = room.getPlayerList();

    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 💬 " + player.name + " [" + player.id + "]: " + message);
    if(message.includes(ClaveParaSerAdmin)) {     room.setPlayerAdmin(player.id, true);
    return false; 
		}
		playerFound = true;
	var _0x21989d = _0x3c81f9;
let spacePos = message.search(" ");
let command = message.substr(0, spacePos !== -1 ? spacePos : message.length);
if (commands.hasOwnProperty(command)) {
    let currentTime = Date.now();
    if (player.admin || !lastCommandTime[player.id] || currentTime - lastCommandTime[player.id] > commandCooldown) {
        commands[command](player, message);
        lastCommandTime[player.id] = currentTime;
        return true; // Mostrar el comando en el chat
    } else {
        room.sendAnnouncement("Por favor, espera antes de usar otro comando.", player.id);
        return false; // No mostrar el comando en el chat
    }
}

spacePos = message.search(" ");
let comandoGLH = message.substr(0, spacePos !== -1 ? spacePos : message.length).toLowerCase();
if (comandosGLH.hasOwnProperty(comandoGLH)) {
    let currentTime = Date.now();
    if (player.admin || !lastCommandTime[player.id] || currentTime - lastCommandTime[player.id] > commandCooldown) {
        comandosGLH[comandoGLH](player, message);
        lastCommandTime[player.id] = currentTime;
        return true; // Mostrar el comando en el chat
    } else {
        room.sendAnnouncement("Por favor, espera antes de usar otro comando.", player.id);
        return false; // No mostrar el comando en el chat
    }
}
    if (playerInactivity.has(player.id)) {
        clearTimeout(playerInactivity.get(player.id));
        const inactivityTimer = setTimeout(() => {
            // Expulsa al jugador por inactividad
            room.kickPlayer(player.id, "⌛️ EXPULSADO por INACTIVIDAD 😴🚫", false);
            // Elimina la entrada del mapa de inactividad
            playerInactivity.delete(player.id);
        }, inactivityTimeout);
        playerInactivity.set(player.id, inactivityTimer);
    }
    if(message.includes("cuando") && PartidoArrancado == true) return penalespregunta(player, message);
    if(message.includes("cuanto") && PartidoArrancado == true) return penalespregunta(player, message);
    if(message.includes("time") && PartidoArrancado == true) return penalespregunta(player, message);
    if(message.includes("tiempo") && PartidoArrancado == true) return penalespregunta(player, message);
    if(message.includes("equipos") && PartidoArrancado == true) return QuienJuegaPregunta(player, message);
	if (message == '!realfutsal' && player.admin == true) { 			
		if (room.getScores() == null) {
				currentMap = getMapName(message); 
				room.setCustomStadium(getRealFutsal());
                automatizadoActivado = false;
				RSRMap = true;
			}
			else {
				whisper("No puedes cambiar el mapa mientras el juego esta en progreso", player.id);
			}
		}

	if (message == '!futx5' && player.admin == true) { 
			if (room.getScores() == null) {
				RSRMap = false;

				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx5Map());
	room.setScoreLimit(5);
	room.setTimeLimit(5);

			}
			else {
				whisper("No puedes cambiar el mapa mientras el juego esta en progreso", player.id);
			}
		}
	if (message == '!futx5cesped' && player.admin == true) { 
			if (room.getScores() == null) {
				RSRMap = false;

				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx5cespedMap());
	room.setScoreLimit(3);
	room.setTimeLimit(4);

			}
			else {
				whisper("No puedes cambiar el mapa mientras el juego esta en progreso", player.id);
			}
		}
	if (message == '!futx7' && player.admin == true) { 
			if (room.getScores() == null) {
				RSRMap = false;

				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx7Map());
	room.setScoreLimit(4);
	room.setTimeLimit(10);

			}
			else {
				whisper("No puedes cambiar el mapa mientras el juego esta en progreso", player.id);
			}
		}

	if (message == '!campeones' && player.admin == true) { 
			if (room.getScores() == null) {
				RSRMap = false;
isAFKpaused = true;
				currentMap = getMapName(message); 
				room.setCustomStadium(getCampeonesMap());
		room.setScoreLimit(0);
		room.setTimeLimit(0);	
			}
			else {
				whisper("No puedes cambiar el mapa mientras el juego esta en progreso", player.id);
			}
		}
   if (message === '!premios' && player.admin === true) {
        if (room.getScores() === null) {
            // Cambios específicos para el modo premios
            cambioCami = false; // Desactiva cambio de camisetas en reinicio
            camisetaRed = "/colors red 180 F0F0F0 000000"; // Fondo gris claro, números negros
            NombreEquipoRojo = "Participantes";

            camisetaBlue = "/colors blue 180 000000 FFFFFF"; // Fondo negro, números blancos
            NombreEquipoAzul = "Staff";

            // Actualizar configuraciones de equipo para modo premios
            redData = parseColors(camisetaRed);
            blueData = parseColors(camisetaBlue);

            redAngle = redData.angle;
            blueAngle = blueData.angle;

            redTextColor = redData.textColor;
            blueTextColor = blueData.textColor;

            redColor = redData.colors;
            blueColor = blueData.colors;

            room.setTeamColors(1, redAngle, redTextColor, redColor);
            room.setTeamColors(2, blueAngle, blueTextColor, blueColor);

            teamRed = NombreEquipoRojo;
            teamBlue = NombreEquipoAzul;

            RSRMap = false;
            isAFKpaused = true;
            currentMap = getMapName(message); 
            room.setCustomStadium(getPremiosMap());
            room.setScoreLimit(0);
            room.setTimeLimit(0);
            autoBalanceEnabled = false;
            ganasigueEnabled = false;
            modoJueganAlgunos = false;

            var listajugadores = room.getPlayerList();
            // Asignación de equipos
            for (var i = 0; i < listajugadores.length; i++) {
                var currentPlayer = listajugadores[i];
                if (!currentPlayer.admin) {
                    room.setPlayerTeam(currentPlayer.id, 1); // Participantes al equipo rojo
                } else {
                    room.setPlayerTeam(currentPlayer.id, 2); // Staff al equipo azul
                }
            }
        } else {
            whisper("No puedes cambiar el mapa mientras el juego está en progreso", player.id);
        }
    }
	if (message == '!powershot' && player.admin == true) { 
			if (powerShotMode == false) {
				powerShotMode = true;
				announce("POWERSHOT ACTIVADO POR " + player.name, null, 0x00FF00);
			}
			else {
				powerShotMode = false;
				announce("POWERSHOT DESACTIVADO POR " + player.name, null, 0xFF0000);
			}
		}

	if (message == '!futx2' && player.admin == true) { 
			if (room.getScores() == null) {
				RSRMap = false;

				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx2Map());
				room.setScoreLimit(3);
				room.setTimeLimit(3);

			}
			else {
				whisper("No puedes cambiar el mapa mientras el juego esta en progreso", player.id);
			}
		}
	if (message == '!futx3' && player.admin == true) { 
			if (room.getScores() == null) {
				RSRMap = false;

				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx3Map());
				room.setScoreLimit(3);
				room.setTimeLimit(3);

			}
			else {
				whisper("No puedes cambiar el mapa mientras el juego esta en progreso", player.id);
			}
		}
	if (message == '!futx4' && player.admin == true) { 
			if (room.getScores() == null) {
				RSRMap = false;

				currentMap = getMapName(message); 
				room.setCustomStadium(getFutx4Map());
				room.setScoreLimit(4);
				room.setTimeLimit(4);
	
			}
			else {
				whisper("No puedes cambiar el mapa mientras el juego esta en progreso", player.id);
			}
		}

    if (message.indexOf("!") === 0) {
        if (player.admin) {
            return handleAdminCommand(player, message);
        }
        return false;
    }

    // Aplicar cooldown
    if (!handleCooldown(player)) return false;

    if (message.startsWith('t ')) {
        const teamMsg = message.substring(2).trim();
        
        if (player.team === 0) {
            whisper('[⚠️] Debes estar en el Equipo Rojo 🔴 o en el Equipo Azul 🔵 para poder utilizar el Team Chat', player.id);
            return false;
        }
        
        sendTeamMessage(player, teamMsg);
        return false;
    }
    
   const isAdmin = player.admin === true;
    const mentionedPlayers = getMentionedPlayers(message);

    if (!handleMentions(player, message, adminChatColor, NombreROLAdmin, isAdmin)) {
        return false;
    }

    // Jugadores mencionados reciben el mensaje una vez
    if (mentionedPlayers.length > 0) {
    const prefix = getPlayerPrefix(player);
        const playerRole = NickNamesRol1.includes(player.name) ? { name: NombreROL1, color: ColorDelChatROL1 } :
                           NickNamesRol2.includes(player.name) ? { name: NombreROL2, color: ColorDelChatROL2 } :
                           NickNamesRol3.includes(player.name) ? { name: NombreROL3, color: ColorDelChatROL3 } :
                           NickNamesRol4.includes(player.name) ? { name: NombreROL4, color: ColorDelChatROL4 } :
                           NickNamesRol5.includes(player.name) ? { name: NombreROL5, color: ColorDelChatROL5 } :
                           isAdmin ? { name: NombreROLAdmin, color: adminChatColor } :
                           player.team === 1 ? { name: NombreROLRed, color: RedChatColor } :
                           player.team === 2 ? { name: NombreROLBlue, color: BlueChatColor } :
                           { name: NombreROLSpect, color: SpectChatColor };

        // Enviar mensaje a mencionados
        mentionedPlayers.forEach(mentionedPlayer => {
            room.sendAnnouncement(
                `${prefix} ${playerRole.name} ~ ${player.name}: ${message}`,
                mentionedPlayer.id,
                playerRole.color,
                "bold",
                2
            );
        });

        // Filtrar mencionados para que no reciban el mensaje nuevamente
        const mentionedIDs = mentionedPlayers.map(p => p.id);
        const remainingPlayers = room.getPlayerList().filter(p => !mentionedIDs.includes(p.id));

        // Los no mencionados reciben el mensaje con el estilo y color del remitente
        remainingPlayers.forEach(p => {
            room.sendAnnouncement(
                `${prefix} ${playerRole.name} ~ ${player.name}: ${message}`,
                p.id,
                playerRole.color,
                RoleAttributes[playerRole.name]?.style || "normal",
                RoleAttributes[playerRole.name]?.sound || 1
            );
        });
        
        return false;
    }

    // Mensaje normal para jugadores no mencionados
    const prefix = getPlayerPrefix(player);
    const playerRole = NickNamesRol1.includes(player.name) ? { name: NombreROL1, color: ColorDelChatROL1 } :
                       NickNamesRol2.includes(player.name) ? { name: NombreROL2, color: ColorDelChatROL2 } :
                       NickNamesRol3.includes(player.name) ? { name: NombreROL3, color: ColorDelChatROL3 } :
                       NickNamesRol4.includes(player.name) ? { name: NombreROL4, color: ColorDelChatROL4 } :
                       NickNamesRol5.includes(player.name) ? { name: NombreROL5, color: ColorDelChatROL5 } :
                       isAdmin ? { name: NombreROLAdmin, color: adminChatColor } :
                       player.team === 1 ? { name: NombreROLRed, color: RedChatColor } :
                       player.team === 2 ? { name: NombreROLBlue, color: BlueChatColor } :
                       { name: NombreROLSpect, color: SpectChatColor };

    const roleAttr = RoleAttributes[playerRole.name] || { style: "normal", sound: 1 };
    room.sendAnnouncement(
        `${prefix} ${playerRole.name} ~ ${player.name}: ${message}`,
        null,
        playerRole.color,
        roleAttr.style,
        roleAttr.sound
    );

    return false;

    if(CensuradorDeSpammeros(message)) return false;
    if (message.indexOf("!") == 0) return false; 
    }

// Función para enviar un susurro (whisper)
function whisper(message, playerId) {
    room.sendAnnouncement(message, playerId, 0xFFFF00, "bold", 2);
}

// Función para enviar el mensaje de publicidad
function sendAdvertisingMessage() {
  const currentTimez = Date.now();

  // Verificar si ha pasado el tiempo suficiente desde el último envío de publicidad
  if (currentTimez - lastAdvertisingTime >= advertisingMinutes * 60 * 1000) {
    // Enviar el mensaje de publicidad como un anuncio a todos los jugadores
    room.sendAnnouncement("　",null,0xFFFFFF,"bold",0);
    room.sendAnnouncement("　　　　　　　　" + advertisingMessage,null,0xFFFFFF,"bold",2);
    // Actualizar el tiempo del último envío de publicidad
    lastAdvertisingTime = currentTimez;
  }
}


// Función para verificar si un jugador ya ha votado
function ElJugadorYaVoto(playerId, votesObject) {
  for (const votedMap in votesObject) {
    if (votesObject[votedMap].includes(playerId)) {
      return true;
    }
  }
  return false;
}

// Función para obtener la cantidad de votos restantes
function getRemainingVotes() {
  const totalPlayers = room.getPlayerList().length;
  let playersVoted = 0;

  for (const votedMap in mapVotes) {
    playersVoted += mapVotes[votedMap].length;
  }

  const remainingVotes = totalPlayers - playersVoted;

  if (remainingVotes === 0) {
    // Si no quedan votos, finalizar la votación automáticamente
    endMapVoting();
  }

  return Math.max(0, remainingVotes);
}



// Temporizador de la votación
let votacionTimer;

// Función para verificar si un jugador ya votó en una votación específica
function isPlayerVoted(playerId, votesObject) {
  for (const votedPlayerId in votesObject) {
    if (votesObject[votedPlayerId].includes(playerId)) {
      return true;
    }
  }
  return false;
}

// Función para iniciar la votación de administrador
function startAdminVoting() {
  if (!adminVotingActive) {
    if (room.getPlayerList().length >= MIN_PLAYERS_FOR_ADMIN_VOTE) {
      adminVotingActive = true;
      adminVotes = {};

      setTimeout(function() {
        endAdminVoting();
      }, DURACION_VOTACION * 1000); // Convertir la duración de la votación de segundos a milisegundos

      room.sendAnnouncement('📢 ¡La votación para elegir un nuevo administrador ha comenzado! Escribe "!admin id" para votar por agregar un jugador como administrador. 🗳️', null, 0xFF0000);
      room.sendAnnouncement('📝 Para votar, escribe "!admin id" donde "id" es el número de ID del jugador que deseas votar para ser administrador del host. ¡Con !ids podrás ver los IDs de todos los jugadores! 🗳️', null, 0xFFFFFF);
    } else {
      room.sendAnnouncement(`❗ Se necesitan al menos ${MIN_PLAYERS_FOR_ADMIN_VOTE} jugadores para iniciar la votación de administrador. ¡Espera a que se unan más jugadores! ❗`, null, 0xFF0000);
    }
  }
}

// Función para finalizar la votación de administrador y aplicar los cambios
function endAdminVoting() {
  if (adminVotingActive) {
    adminVotingActive = false;

    let maxVotes = 0;
    let adminToAdd = null;

    for (const votedPlayerId in adminVotes) {
      const voteCount = adminVotes[votedPlayerId].length;
      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        adminToAdd = votedPlayerId;
      }
    }

    const votesNeeded =  Math.ceil(room.getPlayerList().length * (PorcentajeDeVotosAdmin / 100)); 

    if (adminToAdd !== null && maxVotes >= votesNeeded) {
      room.setPlayerAdmin(adminToAdd, true);
      const votedPlayer = room.getPlayer(adminToAdd);
      const votedPlayerInfo = votedPlayer ? `${votedPlayer.name} (ID: ${adminToAdd})` : adminToAdd.toString();
      room.sendAnnouncement(`🎉 ¡El jugador ${votedPlayerInfo} ha sido elegido como el nuevo administrador! (${maxVotes} votos a favor) ¡Felicidades! 🥳`, null, 0x00FF00);
    } else {
      room.sendAnnouncement('¡La Votación de Administrador ha llegado a su Fin! 🗳️ |🌟 ¡Gracias a todos por participar! 🌟', null, 0xFF0000);
    }
  }
}

// Función para iniciar la votación de expulsión
function startKickVoting() {
  if (!kickVotingActive) {
    if (room.getPlayerList().length >= MIN_PLAYERS_FOR_KICK_VOTE) {
      kickVotingActive = true;
      kickVotes = {};

      setTimeout(function() {
        endKickVoting();
      }, DURACION_VOTACION * 1000); // Convertir la duración de la votación de segundos a milisegundos

      room.sendAnnouncement('📢 ¡La votación para expulsar a un jugador ha comenzado! Escribe "!expulsar id" para votar por la expulsión de un jugador. 🗳️', null, 0xFF0000);
      room.sendAnnouncement('📝 Para votar, escribe "!expulsar id" donde "id" es el número de ID del jugador que deseas expulsar. ¡Con !ids podrás ver los IDs de todos los jugadores! 🗳️', null, 0xFFFFFF);
    } else {
      room.sendAnnouncement(`❗ Se necesitan al menos ${MIN_PLAYERS_FOR_KICK_VOTE} jugadores para iniciar la votación de expulsión. ¡Espera a que se unan más jugadores! ❗`, null, 0xFF0000);
    }
  }
}

// Función para finalizar la votación de expulsión y aplicar los cambios
function endKickVoting() {
  if (kickVotingActive) {
    kickVotingActive = false;

    let maxVotes = 0;
    let playerToKick = null;

    for (const kickedPlayerId in kickVotes) {
      const voteCount = kickVotes[kickedPlayerId].length;
      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        playerToKick = kickedPlayerId;
      }
    }

    const votesNeeded =  Math.ceil(room.getPlayerList().length * (PorcentajeDeVotosBan / 100)); 

    if (playerToKick !== null && maxVotes >= votesNeeded) {
      room.kickPlayer(playerToKick, "Expulsado por votación de la comunidad", false);
      const kickedPlayer = room.getPlayer(playerToKick);
      const kickedPlayerInfo = kickedPlayer ? `${kickedPlayer.name} (ID: ${playerToKick})` : playerToKick.toString();
      room.sendAnnouncement(`👢 ¡El jugador ${kickedPlayerInfo} ha sido expulsado por votación de la comunidad! (${maxVotes} votos a favor)`, null, 0xFF0000);
    } else {
      room.sendAnnouncement('¡La Votación de Expulsión ha llegado a su Fin! 🗳️ |🌟 ¡Gracias a todos por participar! 🌟', null, 0xFF0000);
    }
  }
}





// Función para mezclar un array en orden aleatorio (algoritmo de Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Llamar a la función autoBalanceTeams() cada segundo para equilibrar los equipos automáticamente
setInterval(autoBalanceTeams, 1000);

function extraTime() {
    var extraSeconds = Math.ceil(game.extraTimeCount / 60);
    var extraMinutes = Math.floor(extraSeconds / 60);
    var remainingSeconds = extraSeconds - (extraMinutes * 60);

    game.extraTimeEnd = gameTime * 60 + extraSeconds;

    var timeAddedMessage = `⌚ TIEMPO DE JUEGO: ${gameTime} MINUTO${gameTime === 1 ? '' : 'S'} ➕ ⏳ TIEMPO ADICIONADO: `;
    
    if (extraMinutes > 0) {
        timeAddedMessage += `${extraMinutes} MINUTO`;
        if (extraMinutes > 1) {
            timeAddedMessage += "S";
        }
    }
    
    if (remainingSeconds > 0) {
        if (extraMinutes > 0) {
            timeAddedMessage += " y ";
        }
        timeAddedMessage += `${remainingSeconds} SEGUNDO`;
        if (remainingSeconds > 1) {
            timeAddedMessage += "S";
        }
    }

    announce(`                                   ${timeAddedMessage}`, null, null, null, 1);
}






function QuienJuegaPregunta(player, message){
	announce("--- ESTAN JUGANDO: " + teamRed + " vs " + teamBlue + " ---", player.id, null, null, 1);
}
function penalespregunta(player, message){
var extraSeconds = Math.ceil(game.extraTimeCount / 60);
    var extraMinutes = Math.round((extraSeconds-(100*0))/60);
    var SegundosDeSobra1min = Math.round((extraSeconds-(100*0))-60);
    var SegundosDeSobra2min = Math.round((extraSeconds-(100*0))-120);
    var SegundosDeSobra3min = Math.round((extraSeconds-(100*0))-180);
    var SegundosDeSobra4min = Math.round((extraSeconds-(100*0))-240);
    var SegundosDeSobra5min = Math.round((extraSeconds-(100*0))-300);
    var SegundosDeSobra6min = Math.round((extraSeconds-(100*0))-360);
	game.extraTimeEnd = (gameTime * 60) + extraSeconds;
	if (extraSeconds < 60){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO:  " + extraSeconds + " SEGUNDOS [Por ahora] ", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 59 && extraSeconds < 61){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 1 MINUTO [Por ahora] ", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 60 && extraSeconds < 120){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 1 MINUTO y " + SegundosDeSobra1min + " SEGUNDOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 119 && extraSeconds < 121){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 2 MINUTOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 120 && extraSeconds < 180){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 2 MINUTOS  y " + SegundosDeSobra2min + " SEGUNDOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 179 && extraSeconds < 181){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 3 MINUTOS ", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 180 && extraSeconds < 240){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 3 MINUTOS  y " + SegundosDeSobra3min + " SEGUNDOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 239 && extraSeconds < 241){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 4 MINUTOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 240 && extraSeconds < 300){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 4 MINUTOS  y " + SegundosDeSobra4min + " SEGUNDOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 299 && extraSeconds < 301){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 5 MINUTOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);
}
	else if (extraSeconds > 300 && extraSeconds < 360){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 5 MINUTOS  y " + SegundosDeSobra5min + " SEGUNDOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);

}
	else if (extraSeconds > 359 && extraSeconds < 361){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 6 MINUTOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);

}
	else if (extraSeconds > 360 && extraSeconds < 420){
	announce("                                   ⌚ TIEMPO DE JUEGO: " + gameTime + " MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 6 MINUTOS  y " + SegundosDeSobra6min + " SEGUNDOS [Por ahora]", player.id, null, null, 1);
		    room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1);

}



}

function displayHelp(_0x13aab6, _0x878a40) {
	var _0x37f4ef = _0x3c81f9;
	_0x878a40 == null && whisper(_0x37f4ef(0x124), _0x13aab6, null, 'small');
}

// Modifica la función sendGKAnnouncement para manejar casos en los que ArqueroRED y ArqueroBLUE son nulos
function sendGKAnnouncement(player) {
    // Obtener la lista de jugadores
    var players = room.getPlayerList();

    // Filtrar jugadores por equipo Rojo
    var redPlayers = players.filter(player => player.team === 1);

    // Filtrar jugadores por equipo Azul
    var bluePlayers = players.filter(player => player.team === 2);

    // Encontrar al jugador del equipo Rojo con la posición en X más baja
    ArqueroRED = redPlayers.reduce((minXPlayer, currentPlayer) => {
        return minXPlayer.position.x < currentPlayer.position.x ? minXPlayer : currentPlayer;
    }, redPlayers[0]);

    // Encontrar al jugador del equipo Azul con la posición en X más alta
    ArqueroBLUE = bluePlayers.reduce((maxXPlayer, currentPlayer) => {
        return maxXPlayer.position.x > currentPlayer.position.x ? maxXPlayer : currentPlayer;
    }, bluePlayers[0]);

    // Enviar el anuncio con la información sobre los arqueros
    var message = "";

    if (ArqueroRED) {
        message += "🔴 🧤⚽ GK " + teamRed + ": " + ArqueroRED.name;
    } else {
        message += "🔴 🧤⚽ GK " + teamRed + ": ❌ No tiene ";
    }

    message += " ------- ";

    if (ArqueroBLUE) {
        message += "🔵 🧤⚽ GK " + teamBlue + ": " + ArqueroBLUE.name;
    } else {
        message += "🔵 🧤⚽ GK " + teamBlue + ": ❌ No tiene ";
    }

    // Si ambos son nulos
    if (!ArqueroRED && !ArqueroBLUE) {
        message = "❌ 🧤⚽ No hay arqueros en ninguno de los dos equipos.";
    }

    room.sendAnnouncement(message, player.id, 0xFFFFFF, "bold", 0);  // Puedes ajustar el color según tus preferencias
}



room[_0x3c81f9(0x138)] = function (player) { // room.onPlayerTeamChange
    registerPlayerTime(player.id, player.team);

    if (automatizadoActivado) {
        activarModoAutomatizado();
    }
    if (room.getScores() != null){
        if (1 <= player.team <= 2) ballCarrying.set(player.name, [0, player.team]);
    }
	var _0x2dee93 = _0x3c81f9;
	map == _0x2dee93(0x1ca) && (room[_0x2dee93(0x172)]() != null && (game[_0x2dee93(0x189)] == ![] && room[_0x2dee93(0x145)]()[_0x2dee93(0x19a)](function (_0x96d16c) {
		var _0x50b12d = _0x2dee93;
		if (_0x96d16c != undefined) {
			if (game[_0x50b12d(0x165)] == !![] || game[_0x50b12d(0x133)] == !![]) {
				var _0x4bfeae = {};
				_0x4bfeae[_0x50b12d(0x13e)] = 0x98967f, room[_0x50b12d(0x125)](_0x96d16c['id'], _0x4bfeae);
			}
		}
	})));
    if (player.team !== 0 && afkPlayerIDs.has(player.id)) {
        room.setPlayerTeam(player.id, 0);
        room.sendAnnouncement("😴 ¡El jugador " + player.name + " sigue A F K!", null, 0xff8400, 'bold', 2);
        room.sendAnnouncement("🚨 Con !kickafks podrás kickearlo. Si " + player.name + " escribe !afk nuevamente saldrá del AFK. 🚨", null, 0xff8400, 'bold', 1);

    }}


function getRandomScorerMessage() {
  const scorerMessages = [
    "⚽ ¡Golazo de " + game.lastKickerName + "!",
    "🔥 ¡Impresionante remate de " + game.lastKickerName + "!",
    "💥⚽ ¡Espectacular gol de " + game.lastKickerName + "!",
    "💥😱 ¡Increíble golazo de " + game.lastKickerName + "!",
    "👌 ¡Bien definido por " + game.lastKickerName + "!",
    "La definición de " + game.lastKickerName + " definitivamente es cine! 🍷🚬 ",
    "¡Golazo de " + game.lastKickerName + " que está jugando desnudo! 🔞",
    "🔥 Eduque " + game.lastKickerName + ", eduque 👏 ",
    "🥵 ¡Golazo de " + game.lastKickerName + ", que definió a lo Czerro! 👑🐐",
    "Cuando sos crack, sos crack... ¡Y " + game.lastKickerName + " lo acaba de demostrar! 💪🔥",
    "⚡ ¡Golazo total de " + game.lastKickerName + "! 🚀",
    "🍾 ¡HaxBall Champagne! " + game.lastKickerName + " acaba de marcar un golazo ⚽🔥",
    "🤩 ¡Naa, golazo de " + game.lastKickerName + "! 😱",
    "🎯 ¡99 de definición, " + game.lastKickerName + " lo acaba de demostrar! 🔥",
    "💥⚽ ¡Ufff, qué golazo de " + game.lastKickerName + "! 😱",
    "😱 ¡Locura de gol de " + game.lastKickerName + "! 🥵",
    "👀 ¡Olfato de gol! " + game.lastKickerName + " lo ha hecho otra vez! ⚽"
  ];
  return scorerMessages[Math.floor(Math.random() * scorerMessages.length)];
}


function getRandomScorerMessage2() {
  const scorerMessages2 = [
    "⚽🔥 ¡**GOL** de **" + game.lastKickerName + "**!",
    "⚽💥 ¡**GOL** de **" + game.lastKickerName + "**!",
  ];
  return scorerMessages2[Math.floor(Math.random() * scorerMessages2.length)];
}


function getRandomOwnGoalScorerMessage() {
  const ownGoalScorerMessages = [
    "⚠️ ¡Qué desastre! " + game.lastKickerName + " anotó un gol en contra.",
    "🔥 ¡Increíble! " + game.lastKickerName + " marcó en su propia meta.",
    "🙈 ¡Vaya error! " + game.lastKickerName + " hizo gol en propia meta.",
    "💣 ¡Gol en propia puerta! " + game.lastKickerName + " cometió un autogol.",
    "😱 ¡Autogol involuntario! " + game.lastKickerName + " no pudo evitarlo.",
    "😫 ¡Qué mala suerte! " + game.lastKickerName + " anotó en su propia portería.",
    "💥 ¡Increíble autogol! " + game.lastKickerName + " se equivocó en la definición.",
    "😖 ¡Inesperado gol en propia meta! " + game.lastKickerName + " desvió el balón al arco equivocado.",
    "🚫 ¡Desviación desafortunada! " + game.lastKickerName + " desvía el balón a su propia red.",
    "💔 ¡Golpe desafortunado! " + game.lastKickerName + " termina marcando en su propia meta.",
    "😩 ¡Autogol desafortunado! " + game.lastKickerName + " no puede evitar el error.",
    "💢 ¡Terrible autogol! " + game.lastKickerName + " comete un grave error.",
    "😵 ¡Autogol sorprendente! " + game.lastKickerName + " no puede creer lo que acaba de hacer.",
    "😓 ¡Autogol desastroso! " + game.lastKickerName + " se lamenta por su propia anotación.",
    "⛔️ ¡Autogol trágico! " + game.lastKickerName + " sufre un duro golpe en su equipo.",
    "🤯 ¡Autogol catastrófico! " + game.lastKickerName + " vive una pesadilla en el campo.",
  ];
  return ownGoalScorerMessages[Math.floor(Math.random() * ownGoalScorerMessages.length)];
}

function getRandomOwnGoalScorerMessage2() {
  const ownGoalScorerMessages2 = [
    "💀 ¡**AUTOGOL** de **" + game.lastKickerName + "** !",
    "❌ ¡**GOL EN CONTRA** de **" + game.lastKickerName + "** !"
  ];
  return ownGoalScorerMessages2[Math.floor(Math.random() * ownGoalScorerMessages2.length)];
}


function getRandomGoalEmoji() {
  const goalEmojis = ["⚽", "🔥", "⭐️", "💥", "🐐"];
  return goalEmojis[Math.floor(Math.random() * goalEmojis.length)];
}

function getRandomAutoGoalEmoji() {
  const goalEmojis = ["💩", "😭", "🤡", "😅", "💀"];
  return goalEmojis[Math.floor(Math.random() * goalEmojis.length)];
}

var playerGoalsReceived = JSON.parse(localStorage.getItem("playerGoalsReceived")) || {};
var playerCleanSheets = JSON.parse(localStorage.getItem("playerCleanSheets")) || {};


function updateStats(team, goals) {
    // Obtener arquero del equipo contrario
    var goalkeeper = team === 1 ? ArqueroBLUE : ArqueroRED;

    // Verificar si hay arquero y actualizar estadísticas
    if (goalkeeper) {
        var playerName = goalkeeper.name;

        // Actualizar Goles Recibidos
        playerGoalsReceived[playerName] = (playerGoalsReceived[playerName] || 0) + 1;

        // Guardar en localStorage
        localStorage.setItem("playerGoalsReceived", JSON.stringify(playerGoalsReceived));
    }
}

room.onTeamGoal = function(team) {
     var scores = room.getScores();
    var goals = team === 1 ? scores.red : scores.blue;

    // Actualizar estadísticas de Goles Recibidos y Vallas Invictas
    updateStats(team, goals);
    // Obtener el nombre del goleador y del asistidor
    const goleador = game.lastKickerName;
    const asistidor = game.secondLastKickerName;



    if (goleador && game.lastKickerTeam === team) {
        playerGoals[goleador] = (playerGoals[goleador] || 0) + 1;
        playerGoals2[goleador] = (playerGoals2[goleador] || 0) + 1;
        actualizarPuntos(goleador);
    }

    if (asistidor && game.secondLastKickerTeam === team && game.lastKickerId !== game.secondLastKickerId) {
        playerAssists[asistidor] = (playerAssists[asistidor] || 0) + 1;
        playerAssists2[asistidor] = (playerAssists2[asistidor] || 0) + 1;
        actualizarPuntos(asistidor);
    }



		game.rsActive = false;
		
		let goalTime = secondsToMinutes(Math.floor(room.getScores().time));
		let scorer;
		let assister = "";
		let scorer2;
		let assister2 = "";
		let goalType;






		if (team == 1) {
			if (game.lastKickerTeam == 1) { //if goal type is goal
				const goalMessages = [
					"⚡ ¡GOOOLAZO!",
					"🔥 ¡GOLAZO INCREÍBLE!",
					"💥 ¡LA RED TIEMBLA CON ESE GOL!",
					"🚀 ¡GOLAZO DE OTRO PLANETA!",
					"⚽ ¡GOOOOOOL!",
				];
				goalType = goalMessages[Math.floor(Math.random() * goalMessages.length)];
				scorer = getRandomScorerMessage();
				scorer2 = getRandomScorerMessage2();
				avatarCelebration(game.lastKickerId, getRandomGoalEmoji());
				if (game.secondLastKickerTeam == 1 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
				const assistMessages = [
  "👟 ¡Gran pase de " + game.secondLastKickerName + "!",
  "🎯 ¡Preciso pase de " + game.secondLastKickerName + "!",
  "🔑 ¡La jugada se gestó con una asistencia de " + game.secondLastKickerName + "!",
  "🤝 ¡" + game.secondLastKickerName + " brinda la asistencia para el gol!",
  "⚽ ¡Asistencia perfecta de " + game.secondLastKickerName + "!",
  "👌 ¡Excelente pase de " + game.secondLastKickerName + "!",
  "🔥 ¡Jugada brillante de " + game.secondLastKickerName + "!",
  "🤩 ¡" + game.secondLastKickerName + " crea la oportunidad de gol!",
  "👏 ¡Fantástica asistencia de " + game.secondLastKickerName + "!",
  "💫 ¡" + game.secondLastKickerName + " demuestra su visión de juego!",
];
				const assistMessages2 = [
  "⚽👟 ¡**ASISTENCIA** de **" + game.secondLastKickerName + "**!",
  "👥⚽ ¡**PASE** de **" + game.secondLastKickerName + "**!"
];
					assister = " (" + assistMessages[Math.floor(Math.random() * assistMessages.length)] + ")";
					assister2 = " (" + assistMessages2[Math.floor(Math.random() * assistMessages2.length)] + ")";
					avatarCelebration(game.secondLastKickerId, "👟");
				}
			}		
			if (game.lastKickerTeam == 2) { //if goal type is owngoal
				const ownGoalMessages = [
					"❌ ¡HAN MARCADO UN AUTOGOL!",
					"❌ ¡GOL EN CONTRA INESPERADO!",
					"❌ ¡EL EQUIPO EQUIVOCADO MARCA EN SU PROPIA PORTERÍA!",
					"❌ ¡UN DESAFORTUNADO AUTOGOL!",
				];
				goalType = ownGoalMessages[Math.floor(Math.random() * ownGoalMessages.length)];
				scorer = getRandomOwnGoalScorerMessage();
				scorer2 = getRandomOwnGoalScorerMessage2();
				avatarCelebration(game.lastKickerId, getRandomAutoGoalEmoji());
				if (game.secondLastKickerTeam == 1) { // if owngoal was assisted
					const assistMessages = [
						"👟🌟 ¡El gol en contra es gracias a la jugada de " + game.secondLastKickerName + "!",
						"⚠️ ¡" + game.secondLastKickerName + "  contribuye al autogol del rival!",
						"🌟 ¡" + game.secondLastKickerName + " arma la jugada!",
						"⚠️ ¡Jugada maestra de " + game.secondLastKickerName + "! ¡El rival termina anotando un autogol! ⚽😮",
					];
					const assistMessages2 = [
						"👟 ¡**ASISTENCIA** de **" + game.secondLastKickerName + "**!",
						"🌟 ¡**JUGADA** de **" + game.secondLastKickerName + "**!",
					];
					assister = " (" + assistMessages[Math.floor(Math.random() * assistMessages.length)] + ")";
					assister2 = " (" + assistMessages2[Math.floor(Math.random() * assistMessages2.length)] + ")";
					avatarCelebration(game.secondLastKickerId, "👟");
				}
			}
			game.redScore++;
		}
		if (team == 2) {
			if (game.lastKickerTeam == 2) { //if goal type is goal
				const goalMessages = [
					"⚡ ¡GOOOLAZO!",
					"🔥 ¡GOLAZO INCREÍBLE!",
					"💥 ¡LA RED TIEMBLA CON ESE GOL!",
					"🚀 ¡GOLAZO DE OTRO PLANETA!",
					"⚽ ¡GOOOOOOL!",
				];
				goalType = goalMessages[Math.floor(Math.random() * goalMessages.length)];
				scorer = getRandomScorerMessage();
				scorer2 = getRandomScorerMessage2();
				avatarCelebration(game.lastKickerId, getRandomGoalEmoji());
				if (game.secondLastKickerTeam == 2 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
				const assistMessages = [
  "👟 ¡Gran pase de " + game.secondLastKickerName + "!",
  "🎯 ¡Preciso pase de " + game.secondLastKickerName + "!",
  " ¡⚽️ Que pelota, " + game.secondLastKickerName + "! 👏",
  "🤝 ¡" + game.secondLastKickerName + " brinda la asistencia para el gol!",
  "⚽ ¡Asistencia perfecta de " + game.secondLastKickerName + "!",
  "👌 ¡Excelente pase de " + game.secondLastKickerName + "!",
  "🔥 ¡Jugada brillante de " + game.secondLastKickerName + "!",
  "🤩 ¡" + game.secondLastKickerName + " crea la oportunidad de gol!",
  "👏 ¡Fantástica asistencia de " + game.secondLastKickerName + "! 💯 ",
  "💫 ¡" + game.secondLastKickerName + " demuestra su visión de juego!",
];
				const assistMessages2 = [
  "⚽👟 ¡**ASISTENCIA** de **" + game.secondLastKickerName + "**!",
  "👥⚽ ¡**PASE** de **" + game.secondLastKickerName + "**!"
];
					assister = " (" + assistMessages[Math.floor(Math.random() * assistMessages.length)] + ")";
					assister2 = " (" + assistMessages2[Math.floor(Math.random() * assistMessages2.length)] + ")";
					avatarCelebration(game.secondLastKickerId, "👟");
				}
			}		
			if (game.lastKickerTeam == 1) { //if goal type is owngoal
				const ownGoalMessages = [
					"❌ ¡HAN MARCADO UN AUTOGOL!",
					"❌ ¡GOL EN CONTRA INESPERADO!",
					"❌ ¡EL EQUIPO EQUIVOCADO MARCA EN SU PROPIA PORTERÍA!",
					"❌ ¡UN DESAFORTUNADO AUTOGOL!",
				];
				goalType = ownGoalMessages[Math.floor(Math.random() * ownGoalMessages.length)];
				scorer = getRandomOwnGoalScorerMessage();
				scorer2 = getRandomOwnGoalScorerMessage2();
				avatarCelebration(game.lastKickerId, getRandomAutoGoalEmoji());
				if (game.secondLastKickerTeam == 2) { // if owngoal was assisted
					const assistMessages = [
						"👟🌟 ¡El gol en contra es gracias a la jugada de " + game.secondLastKickerName + "!",
						"⚠️ ¡" + game.secondLastKickerName + "  contribuye al autogol del rival!",
						"🌟 ¡" + game.secondLastKickerName + " arma la jugada!",
						"⚠️ ¡Jugada maestra de " + game.secondLastKickerName + "! ¡El rival termina anotando un autogol! ⚽😮",
					];
					const assistMessages2 = [
						"👟 ¡**ASISTENCIA** de **" + game.secondLastKickerName + "**!",
						"⚠ ¡**JUGADA** de **" + game.secondLastKickerName + "**!",
					];
					assister = " (" + assistMessages[Math.floor(Math.random() * assistMessages.length)] + ")";
					assister2 = " (" + assistMessages2[Math.floor(Math.random() * assistMessages2.length)] + ")";
					avatarCelebration(game.secondLastKickerId, "👟");
				}
			}
			game.blueScore++;
		}

    // Reemplazar los números de game.redScore y game.blueScore
    const redScore = replaceNumbers(game.redScore);
    const blueScore = replaceNumbers(game.blueScore);

    announce(
      `${goalType}       ${toMathBoldSmall(teamRed)} ${redScore} 🆚 ${blueScore} ${toMathBoldSmall(teamBlue)}   A los ${goalTime} 🕒\n\n ${scorer}${assister}`
    );
goalAnnouncementsSum.push(
    `🟥 **${teamRed} ${redScore} **\n🟦 **${teamBlue} ${blueScore}**\n🕒 **${goalTime}**  ⚊ ${scorer2}${assister2}\n`
);

	game.lastKicker = undefined;
	game.secondLastKicker = undefined;
	game.lastKickerTeam = undefined;
	game.secondLastKickerTeam = undefined;
    if (AnuncioGolDeOro) { // GOL DE ORO
        AnuncioGolDeOro = false;

        setTimeout(function () {
    // Obtener los nombres de los jugadores en cada equipo
    const redTeamPlayerNames = room.getPlayerList().filter(player => player.team === 1).map(player => player.name);
    const blueTeamPlayerNames = room.getPlayerList().filter(player => player.team === 2).map(player => player.name);
    // Obtener el número de goles de cada equipo
    // Obtener el número de goles de cada equipo
    const GolesTotalesRED = room.getScores().red;
    const GolesTotalesBLUE = room.getScores().blue;

    // Verificar si el arquero del equipo Azul mantuvo la valla invicta
    if (GolesTotalesRED === 0 && ArqueroBLUE) {
        playerCleanSheets[ArqueroBLUE.name] = (playerCleanSheets[ArqueroBLUE.name] || 0) + 1;
    }
    // Verificar si el arquero del equipo Rojo mantuvo la valla invicta
    if (GolesTotalesBLUE === 0 && ArqueroRED) {
        playerCleanSheets[ArqueroRED.name] = (playerCleanSheets[ArqueroRED.name] || 0) + 1;
    }

    // Guardar playerCleanSheets en localStorage
    localStorage.setItem('playerCleanSheets', JSON.stringify(playerCleanSheets));



    // Obtener el número de goles de cada equipo
    const redTeamGoals = room.getScores().red;
    const blueTeamGoals = room.getScores().blue;

    // Actualizar las estadísticas para cada jugador en el equipo rojo
    redTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, redTeamGoals > blueTeamGoals ? 'victory' : (redTeamGoals < blueTeamGoals ? 'defeat' : 'draw'));
    });

    // Actualizar las estadísticas para cada jugador en el equipo azul
    blueTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, blueTeamGoals > redTeamGoals ? 'victory' : (blueTeamGoals < redTeamGoals ? 'defeat' : 'draw'));
    });
    // Seleccionar la Figura del partido
    const figuraDelPartido = getFiguraDelPartido();
    enviarAnuncioFiguraDelPartido(figuraDelPartido);
    teamPossFun();
            room.sendAnnouncement("███████████████████ " + teamRed + "  " + getNumericEmoji(room.getScores().red) + "      🞬      " + getNumericEmoji(room.getScores().blue) + "  " + teamBlue + " ███████████████████", null, 0xffd559, "normal", 1);
handleTeamVictory();
    // ENVIAR AL DISCORD DESPÚES DE 300 milisegundos
    setTimeout(function () {
    sendDiscordWebhook();
    room.sendAnnouncement("📼 La grabación de la partida fue enviada a " + GrabacionesDiscord + " . ¡Bien jugado! 🎉");
    }, 150);

        }, 800);

        setTimeout(function () {
            room.stopGame();
            var players = room.getPlayerList().filter(function (player) {
                return player.id !== 0;
            });

            if (players.length === 0) {
                return false;
            }

            players.forEach(function (player) {
                if (player.team === 1) {
                    room.setPlayerTeam(player.id, 2);
                }
                if (player.team === 2) {
                    room.setPlayerTeam(player.id, 1);
                }
            });
        }, 3000);

        setTimeout(function () {
            room.startGame();
        }, 4000);
    }
};


// Función para reemplazar los números con emojis en negrita
function replaceNumbers(number) {
	const replacements = {
		0: "0️⃣",
		1: "1️⃣",
		2: "2️⃣",
		3: "3️⃣",
		4: "4️⃣",
		5: "5️⃣",
		6: "6️⃣",
		7: "7️⃣",
		8: "8️⃣",
		9: "9️⃣"
	};

	return number.toString().replace(/\d/g, match => replacements[match]);
}

function toMathBoldSmall(text) {
    const mathBoldSmallMap = {
        a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞",
        f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣",
        k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨",
        p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭",
        u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲",
        z: "𝐳", A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃",
        E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈",
        J: "𝐉", K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍",
        O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒",
        T: "𝐓", U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗",
        Y: "𝐘", Z: "𝐙"
    };

    return text
        .split("")
        .map(char => mathBoldSmallMap[char] || char)
        .join("");
}


room.onPositionsReset = function() {
     const DEFAULT_SIZE = 15;
    var MIN_SIZE = TamanoMinimoPermitido;
    var MAX_SIZE = TamanoMaximoPermitido;

    let id = Object.keys(tookASize);
    let size;

    for (var i = 0; i < id.length; i++) {
        if (tookASize.hasOwnProperty(id[i])){
            size = tookASize[id[i]];

            if (size >= MIN_SIZE && size <= MAX_SIZE) {
                // Calculating invmass based on size
                let invMass = 0.5 + (DEFAULT_SIZE - size) * 0.02;

                room.setPlayerDiscProperties(id[i], {
                    radius: size,
                    invMass: invMass
                });
            }
        }
    }
    
	var _0x1a3b51 = _0x3c81f9;
		if (game.lastPlayAnnounced == true) {
			room.pauseGame(true);
			game.lastPlayAnnounced = false;


        if (GolDeOroActivado && room.getScores().red === room.getScores().blue) {
            room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥", null, 0xffd700, "bold", 2);
            AnuncioGolDeOro = true;

            setTimeout(function () {
                room.pauseGame(false);
            }, 1000); // Esto quitará la pausa después de un segundo.
        } else {
            // Si GolDeOroActivado es false o los equipos no están empatados, ejecuta el siguiente bloque de código
handleTeamVictory();
        setTimeout(function () {
    // Seleccionar la Figura del partido
    const figuraDelPartido = getFiguraDelPartido();
    enviarAnuncioFiguraDelPartido(figuraDelPartido);
    teamPossFun();
            room.sendAnnouncement("███████████████████ " + teamRed + "  " + getNumericEmoji(room.getScores().red) + "      🞬      " + getNumericEmoji(room.getScores().blue) + "  " + teamBlue + " ███████████████████", null, 0xffd559, "normal", 1);
    // ENVIAR AL DISCORD DESPÚES DE 300 milisegundos
    setTimeout(function () {
    sendDiscordWebhook();
    room.sendAnnouncement("📼 La grabación de la partida fue enviada a " + GrabacionesDiscord + " . ¡Bien jugado! 🎉");

    }, 150);

        }, 800);
    // Obtener los nombres de los jugadores en cada equipo
    const redTeamPlayerNames = room.getPlayerList().filter(player => player.team === 1).map(player => player.name);
    const blueTeamPlayerNames = room.getPlayerList().filter(player => player.team === 2).map(player => player.name);

    // Obtener el número de goles de cada equipo
    const GolesTotalesRED = room.getScores().red;
    const GolesTotalesBLUE = room.getScores().blue;

        // Verificar si el arquero del equipo Azul mantuvo la valla invicta
        if (GolesTotalesRED === 0 && ArqueroBLUE) {
            playerCleanSheets[ArqueroBLUE.name] = (playerCleanSheets[ArqueroBLUE.name] || 0) + 1;
        }
        // Verificar si el arquero del equipo Rojo mantuvo la valla invicta
        if (GolesTotalesBLUE === 0 && ArqueroRED) {
            playerCleanSheets[ArqueroRED.name] = (playerCleanSheets[ArqueroRED.name] || 0) + 1;
        }

    // Obtener el número de goles de cada equipo
    const redTeamGoals = room.getScores().red;
    const blueTeamGoals = room.getScores().blue;

    // Actualizar las estadísticas para cada jugador en el equipo rojo
    redTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, redTeamGoals > blueTeamGoals ? 'victory' : (redTeamGoals < blueTeamGoals ? 'defeat' : 'draw'));
    });

    // Actualizar las estadísticas para cada jugador en el equipo azul
    blueTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, blueTeamGoals > redTeamGoals ? 'victory' : (blueTeamGoals < redTeamGoals ? 'defeat' : 'draw'));
    });
        }

if (FairPlayActivado) {
                var scoreDifference = Math.abs(room.getScores().red - room.getScores().blue);


        if (scoreDifference === 1) {

            setTimeout(function () {
                room.stopGame();

                var players = room.getPlayerList().filter(function (player) {
                    return player.id !== 0;
                });

                if (players.length === 0) {
                    return false;
                }

                players.forEach(function (player) {
                    if (player.team === 1) {
                        room.setPlayerTeam(player.id, 2);
                    }
                    if (player.team === 2) {
                        room.setPlayerTeam(player.id, 1);
                    }
                });

                room.startGame();
            }, 3500); // PAUSA DE 3 SEGUNDOS
        } else if (scoreDifference === 2) {
            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                room.startGame();
            }, 3500); // PAUSA DE 3 SEGUNDOS
        } else if (scoreDifference >= 3) {

            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                const players = room.getPlayerList();

    // Filtrar a los jugadores que están en el campo
    const activePlayers = players.filter(p => p.team !== 0 && p.position !== null);

    // Ordenar a los jugadores activos por nivel de mayor a menor
    const sortedPlayers = activePlayers.sort((a, b) => {
        const aPoints = (totalPlayerGoals[a.name] || 0) + ((totalPlayerAssists[a.name] || 0) * 0.7);
        const bPoints = (totalPlayerGoals[b.name] || 0) + ((totalPlayerAssists[b.name] || 0) * 0.7);
        return bPoints - aPoints;
    });

    // Distribuir a los jugadores en dos equipos equilibrados
    const team1 = [];
    const team2 = [];
    let totalPointsTeam1 = 0;
    let totalPointsTeam2 = 0;

    // Iterar sobre los jugadores y asignarlos a los equipos de manera equitativa
    for (let i = 0; i < sortedPlayers.length; i++) {
        const currentPlayer = sortedPlayers[i];
        const currentPlayerPoints = (totalPlayerGoals[currentPlayer.name] || 0) + ((totalPlayerAssists[currentPlayer.name] || 0) * 0.7);

        if (totalPointsTeam1 <= totalPointsTeam2) {
            team1.push(currentPlayer);
            totalPointsTeam1 += currentPlayerPoints;
        } else {
            team2.push(currentPlayer);
            totalPointsTeam2 += currentPlayerPoints;
        }
    }

    // Asignar los equipos a los jugadores
    team1.forEach(player => room.setPlayerTeam(player.id, 1));
    team2.forEach(player => room.setPlayerTeam(player.id, 2));
    balanceTeams();
}, 3000); // PAUSA DE 3 SEGUNDOS
setTimeout(function() {
    balanceTeams();
}, 4000); // Esperar 
setTimeout(function() {
    room.startGame();
}, 4500); // Esperar 

        }
    }
		}
}


// Define una variable para llevar el seguimiento del estado de pausa
let isGamePaused = false;

function updatePlayerMinutes(player) {
  const playerId = player.id;
  const playerName = player.name;

  // Verifica que la partida no esté pausada y la posición de la pelota no sea constante
  if (!isGamePaused && isBallMoving()) {
    // Verifica si el jugador tiene una posición válida en el campo y no es un espectador
    if (player.position && player.team !== 0) {
      if (!playerMinutesPlayed[playerName]) {
        playerMinutesPlayed[playerName] = 0;
      }
      // Incrementa los minutos jugados para el jugador en milisegundos
      playerMinutesPlayed[playerName] += 1;

      // Almacena en localStorage
      localStorage.setItem('playerMinutesPlayed', JSON.stringify(playerMinutesPlayed));
    }
  }
}

function updateGoalkeeperTime(player) {
  const playerId = player.id;
  const playerName = player.name;

  // Verifica que la partida no esté pausada y la posición de la pelota no sea constante
  if (!isGamePaused && isBallMoving()) {
    // Verifica si el jugador tiene una posición válida en el campo y es el arquero
    if (player.position) {
      if (player.id === ArqueroRED?.id || player.id === ArqueroBLUE?.id) {
        const goalkeeperName = player.id === ArqueroRED?.id ? ArqueroRED.name : ArqueroBLUE.name;

        if (!playerGoalkeeperTime[goalkeeperName]) {
          playerGoalkeeperTime[goalkeeperName] = 0;
        }

        // Incrementa el tiempo que el jugador ha estado siendo el arquero en milisegundos
        playerGoalkeeperTime[goalkeeperName] += 1;

        // Almacena en localStorage
        localStorage.setItem('playerGoalkeeperTime', JSON.stringify(playerGoalkeeperTime));
      }
    }
  }
}



// Definir un objeto para rastrear las posiciones de los jugadores
const playerPositions = {};



/// Función para verificar y tratar a los jugadores inactivos
function checkPlayerActivity() {
  const players = room.getPlayerList();
  const currentTime = Date.now();

  players.forEach((player) => {
    const playerId = player.id;
    const playerPosition = player.position;

    if (!playerPositions[playerId] && player.team !== 0 && !player.admin) {
      // Si es la primera vez que se registra la posición del jugador y no es espectador ni administrador
      playerPositions[playerId] = {
        position: playerPosition,
        lastUpdateTime: currentTime,
      };
    } else if (player.team !== 0 && !player.admin) {
      // Verificar si la posición del jugador ha cambiado y no es espectador
      if (
        playerPositions[playerId] &&
        playerPositions[playerId].position.x === playerPosition.x &&
        playerPositions[playerId].position.y === playerPosition.y
      ) {
        const timeDifference = currentTime - playerPositions[playerId].lastUpdateTime;
        if (!isAFKpaused && !isGamePaused && timeDifference >= SegundosPermitidosAFK * 1000) { // 
          // Tratar al jugador como AFK
          if (!afkPlayerIDs.has(playerId)) {
            afkPlayerIDs.add(player.id);
            // Configura el temporizador de inactividad
            const inactivityTimeout =  MinutosPermitidosAFK * 60 * 1000; // 
            const inactivityTimer = setTimeout(() => {
              // Expulsa al jugador por inactividad
              room.kickPlayer(player.id, "⌛️ EXPULSADO por INACTIVIDAD 😴🚫", false);
              // Elimina la entrada del mapa de inactividad
              playerInactivity.delete(player.id);
            }, inactivityTimeout);
            playerInactivity.set(player.id, inactivityTimer);
            room.setPlayerTeam(player.id, 0);
        setTimeout(() => {
            room.sendAnnouncement("🌴   ¡" + player.name + " se encuentra actualmente A F K! 🕒 💤", null, 0xff8400, 'bold', 2);

    // Después de enviar el anuncio, actualiza el tiempo de la última actividad del jugador a la hora actual
    if (playerPositions[playerId]) {
        playerPositions[playerId].lastUpdateTime = currentTime;
    }
}, 500);
        setTimeout(() => {
            room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️", player.id, 0xff8400, 'small-bold', 2);
        }, 1000);
	setTimeout(() => {
  room.sendAnnouncement("🚨 ¡ATENCIÓN! Si te quedas AFK por " + MinutosPermitidosAFK + " MINUTOS ⌛, serás EXPULSADO del host. 🛑", player.id, 0xff8400, 'small-bold', 2);
}, 1500);
        setTimeout(() => {
            room.sendAnnouncement("📌   RECUERDA QUE:        ⚠️ Si el administrador lo decide, puede echarte del host usando !kickafks. ⚠️", player.id, 0xff8400, 'small-bold', 2);
        }, 2000);

        const admins = room.getPlayerList().filter(admin => admin.admin);
        if (admins.length > 0) {
            const adminNames = admins.map(admin => admin.name).join(", ");
            setTimeout(() => {
                room.sendAnnouncement(`🛠️ Administrador(es): ${adminNames}, ¡Pueden usar !kickafks para expulsar a los jugadores AFK!`, null, 0x00FFBB, 'bold', 0);
            }, 3000);
        } else {
            setTimeout(() => {
                room.sendAnnouncement("📣 El administrador puede echar a los jugadores AFK con el comando !kickafks.", null, 0x00FFBB, 'bold', 0);
            }, 3000);
        }
          }
        }
      } else {
        // El jugador ha cambiado de posición, reiniciar el contador
        playerPositions[playerId] = {
          position: playerPosition,
          lastUpdateTime: currentTime,
        };
        // Si el jugador estaba marcado como AFK, elimínalo de la lista
        if (afkPlayerIDs.has(playerId)) {
          afkPlayerIDs.delete(playerId);
          // También puedes realizar otras acciones aquí si el jugador deja de estar inactivo
        }
      }
    } else if (player.team !== 0 && player.admin) {
      if (
        playerPositions[playerId] &&
        playerPositions[playerId].position.x === playerPosition.x &&
        playerPositions[playerId].position.y === playerPosition.y
      ) {
        const timeDifference = currentTime - playerPositions[playerId].lastUpdateTime;
        if (!isAFKpaused && !isGamePaused && timeDifference >= SegundosPermitidosAFK * 1000) { // Cantidad de Segundos Para estar AFK
          // Tratar al jugador como AFK
          if (!afkPlayerIDs.has(playerId)) {
            afkPlayerIDs.add(player.id);
            room.setPlayerTeam(player.id, 0);
            setTimeout(() => {
              room.sendAnnouncement("🌴   ¡El administrador 👑 " + player.name + " se encuentra actualmente A F K! 🕒 💤", null, 0xff8400, 'bold', 2);

    // Después de enviar el anuncio, actualiza el tiempo de la última actividad del jugador a la hora actual
    if (playerPositions[playerId]) {
        playerPositions[playerId].lastUpdateTime = currentTime;
    }
}, 500);
            setTimeout(() => {
              room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️", player.id, 0xff8400, 'small-bold', 2);
            }, 1000);
          }
        }
      } else {
        // El jugador ha cambiado de posición, reiniciar el contador
        playerPositions[playerId] = {
          position: playerPosition,
          lastUpdateTime: currentTime,
        };
        // Si el jugador estaba marcado como AFK, elimínalo de la lista
        if (afkPlayerIDs.has(playerId)) {
          afkPlayerIDs.delete(playerId);
          // También puedes realizar otras acciones aquí si el jugador deja de estar inactivo
        }
      }
    }
  });
}






// Función para verificar si la pelota está en movimiento
function isBallMoving() {
  const ballPosition = room.getBallPosition();
  return ballPosition && (ballPosition.x !== 0 || ballPosition.y !== 0);
}

var gameTickPaused = false; // Bandera para controlar si handleGameTick está pausado

function handleGameTick() {
    if (modoJueganAlgunos){
    if (!gameTickPaused) {
        // Filtrar los jugadores para excluir a los AFK
        const activePlayers = room.getPlayerList().filter(p => !afkPlayerIDs.has(p.id));
        
        // Obtener el número de jugadores en cada equipo
        let blueTeamCount = activePlayers.filter(p => p.team === 1).length;
        let redTeamCount = activePlayers.filter(p => p.team === 2).length;

        // Mover jugadores entre equipos y espectadores si es necesario
        movePlayersIfNeeded(activePlayers, blueTeamCount, redTeamCount);
        

    }
}
}

// Función para mover jugadores entre equipos y espectadores según sea necesario
function movePlayersIfNeeded(activePlayers, blueTeamCount, redTeamCount) {
    const spectators = room.getPlayerList().filter(p => p.team === 0 && !afkPlayerIDs.has(p.id));

    // Mover jugadores de espectadores a equipos si es necesario
while (spectators.length > 0 && (blueTeamCount < maxPlayersPerTeam || redTeamCount < maxPlayersPerTeam)) {
    const spectatorToMove = spectators.shift(); // Cambiado de pop() a shift() para sacar el primer espectador en la lista
    if (blueTeamCount < redTeamCount) {
        room.setPlayerTeam(spectatorToMove.id, 1); // Mover al equipo azul
        blueTeamCount++;
    } else {
        room.setPlayerTeam(spectatorToMove.id, 2); // Mover al equipo rojo
        redTeamCount++;
    }
}


    // Mover jugadores de equipos a espectadores si es necesario
    while (blueTeamCount > maxPlayersPerTeam) {
        const playerToMove = activePlayers.find(p => p.team === 1);
        if (playerToMove) {
            room.setPlayerTeam(playerToMove.id, 0); // Mover a espectadores
            blueTeamCount--;
        }
    }

    while (redTeamCount > maxPlayersPerTeam) {
        const playerToMove = activePlayers.find(p => p.team === 2);
        if (playerToMove) {
            room.setPlayerTeam(playerToMove.id, 0); // Mover a espectadores
            redTeamCount--;
        }
    }
}

// Función para equilibrar los equipos
function balanceTeams2(activePlayers) {
    const bluePlayers = activePlayers.filter(p => p.team === 1);
    const redPlayers = activePlayers.filter(p => p.team === 2);

    // Mover jugadores del equipo azul si hay más de maxPlayersPerTeam
    while (bluePlayers.length > maxPlayersPerTeam) {
        const playerToMove = bluePlayers.pop();
        room.setPlayerTeam(playerToMove.id, 0); // Mover a espectadores
    }

    // Mover jugadores del equipo rojo si hay más de maxPlayersPerTeam
    while (redPlayers.length > maxPlayersPerTeam) {
        const playerToMove = redPlayers.pop();
        room.setPlayerTeam(playerToMove.id, 0); // Mover a espectadores
    }
}

// Función para pausar handleGameTick
function pauseGameTick() {
    gameTickPaused = true;
}

// Función para reanudar handleGameTick
function resumeGameTick() {
    gameTickPaused = false;
}

 room[_0x3c81f9(0x19c)] = function (player) { // Es el room.ongametick
    handleGameTick();
  checkPlayerActivity();

  const playersz = room.getPlayerList();
  for (const player of playersz) {
    updatePlayerMinutes(player);
        updateGoalkeeperTime(player); // Agrega esta línea para actualizar el tiempo del arquero

  }
  var players = room.getPlayerList();
  var ballPosition = room.getBallPosition();

  for (var i = 0; i < players.length; i++) {
    var player = players[i];

    // Verifica si el jugador tiene una posición válida
    if (player.position === null || player.position === undefined) {
      continue; // Salta al siguiente jugador si no tiene una posición válida
    }

    var playerPosition = room.getPlayerDiscProperties(player.id);

    // Calcula la distancia entre el jugador y la pelota
    var distance = Math.sqrt(
      Math.pow(playerPosition.x - ballPosition.x, 2) +
      Math.pow(playerPosition.y - ballPosition.y, 2)
    );

    // Actualiza la posesión del equipo correspondiente
    if (distance < 50) {
      if (player.team === 1) {
        posesionEquipoA++;
      } else if (player.team === 2) {
        posesionEquipoB++;
      }
    }
  }
 		PartidoArrancado = true;
    if (whoTouchedLast != undefined) {
 
        if (ballCarrying.get(whoTouchedLast.name)) {
            ballCarrying.get(whoTouchedLast.name)[0] += 1/60;
        }
    }
    updateTimeOnHalves();
DetectorGK();
LinkDelScript();
LinkDelScript2();
LinkDelScript3();
ReiniciarPuntosJugadores();
	var _0x59120c = _0x3c81f9;
 if (RSRMap == true) {
    updateGameStatus();
    handleBallTouch();
    realSoccerRef();
  } else {
    updateGameStatus();
    handleBallTouchFUTSAL();
  }

};





updateTimeOnHalves = function(){
    if(room.getBallPosition().x < 0){
        timeOnHalves[0] += 1/60;
    }else if(room.getBallPosition().x > 0){
        timeOnHalves[1] += 1/60;
    }
}

var ScoresNumbers = '0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣';

room.onGamePause = function () {
  isGamePaused = true;
};

// Agrega un manejador para el evento de reanudación del juego
room.onGameUnpause = function () {
  isGamePaused = false;
};


function scorerNumber(num){
    var result = '';
    var reversedDigits = [];
    do{
        reversedDigits.push(num % 10);
        num = Math.floor(num / 10);
    }while(num > 0);
    for (var i = reversedDigits.length; i-- > 0; ){
        result += ScoresNumbers.substr(reversedDigits[i]*3, 3);
    }
   
    return result;
}

function realSoccerRef() {
	blockThrowIn();
	blockGoalKick();
	removeBlock();

		if (game.time == gameTime){
		game.rsCorner2 = false;
		game.rsGoalKick2 = false;
		game.lateral2 = false;
	}

	if (game.time == gameTime * 60 && game.extraTimeAnnounced == false) {
		extraTime();
		game.extraTimeAnnounced = true;

	}
	
	if (game.time == game.extraTimeEnd && game.lastPlayAnnounced == false) {
	room.sendAnnouncement("                                    😱 ⏰  🔥          Ú L T I M A     J U G A D A    D E L    P A R T I D O      🔥  ⏰ 😱", null, 0xffff00, 'bold', 2);
	room.sendAnnouncement("                                                       💔 🚫   Si la pelota sale del terreno de juego, se finalizará el partido. ✋ 🛑", null, 0xf9fa00, 'small', 0);
		game.lastPlayAnnounced = true;
	}


	
	if (game.rsCorner2 == true || game.rsGoalKick2 == true || game.lateral2 == true) { //add extra time
		game.extraTimeCount++;
	}
	
	if (game.rsTimer < 99999 && game.paused == false && game.rsActive == false && game.rsReady == true) {
		game.rsTimer++;
	}
	
	if (game.rsSwingTimer < 150 && game.rsCorner == false && game.rsGoalKick == false) {
		game.rsSwingTimer++;
		if (game.rsSwingTimer > 5) {
			room.setDiscProperties(0, {xgravity: room.getDiscProperties(0).xgravity * 0.97, ygravity: room.getDiscProperties(0).ygravity * 0.97});
		}		
		if (game.rsSwingTimer == 150) {
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
		}
	}
	
	
	if (game.boosterState == true) {
		game.boosterCount++;
	}
	
	if (game.boosterCount > 30) {
		game.boosterState = false;
		game.boosterCount = 0;
		room.setDiscProperties(0, {cMask: 63});
	}
	
	
	if (room.getBallPosition().x == 0 && room.getBallPosition().y == 0) {	
		game.rsActive = true;
		game.outStatus = "";
	}
	
	if (game.rsActive == false && game.rsReady == true) { //expire barrier time
		if (game.outStatus == "redThrow") {
			if (game.rsTimer == throwTimeOut - 120) { // warning indicator
				ballWarning("0xff223c", ++game.warningCount);
			}
			if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to blue throw
				game.outStatus = "blueThrow";
				game.rsTimer = 0;				
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {color: "0x00ccff", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
		}
		else if (game.outStatus == "blueThrow") {
			if (game.rsTimer == throwTimeOut - 120) { // warning indicator
				ballWarning("0x00ccff", ++game.warningCount);
			}
			if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to red throw
				game.outStatus = "redThrow";
				game.rsTimer = 0;						
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {color: "0xff223c", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
		}
		else if (game.outStatus == "blueGK" || game.outStatus == "redGK") {
			if (game.rsTimer == gkTimeOut - 120) { // warning indicator
				if (game.outStatus == "blueGK") {
					ballWarning("0x00ccff", ++game.warningCount);
				}
				if (game.outStatus == "redGK") {
					ballWarning("0xff223c", ++game.warningCount);
				}
			}
			if (game.rsTimer == gkTimeOut) {
				game.outStatus = "";
				room.setDiscProperties(0, {color: `0x${PelotaRS}`});
				game.rsTimer = 1000000;							
			}
		}
		else if (game.outStatus == "blueCK" || game.outStatus == "redCK") {
			if (game.rsTimer == ckTimeOut - 120) {
				if (game.outStatus == "blueCK") {
					ballWarning("0x00ccff", ++game.warningCount);
				}
				if (game.outStatus == "redCK") {
					ballWarning("0xff223c", ++game.warningCount);
				}
			}
			if (game.rsTimer == ckTimeOut) {
				game.outStatus = "";
				room.setDiscProperties(1, {x: 0, y: 2000, radius: 0});
				room.setDiscProperties(2, {x: 0, y: 2000, radius: 0});
				room.setDiscProperties(0, {color: `0x${PelotaRS}`});
				game.rsTimer = 1000000;							
			}
		}
	}
	
	if (game.rsActive == true) {
		if ((room.getBallPosition().y > 612 || room.getBallPosition().y < -612)) {
			game.rsActive = false;
			if (game.lastPlayAnnounced == true) {
				room.pauseGame(true);
				game.lastPlayAnnounced = false;
        if (GolDeOroActivado && room.getScores().red === room.getScores().blue) {
            room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥", null, 0xffd700, "bold", 2);
            AnuncioGolDeOro = true;

            setTimeout(function () {
                room.pauseGame(false);
            }, 1000); // Esto quitará la pausa después de un segundo.
        } else {
            // Si GolDeOroActivado es false o los equipos no están empatados, ejecuta el siguiente bloque de código
handleTeamVictory();
        setTimeout(function () {
    // Seleccionar la Figura del partido
    const figuraDelPartido = getFiguraDelPartido();
    enviarAnuncioFiguraDelPartido(figuraDelPartido);
    teamPossFun();
            room.sendAnnouncement("███████████████████ " + teamRed + "  " + getNumericEmoji(room.getScores().red) + "      🞬      " + getNumericEmoji(room.getScores().blue) + "  " + teamBlue + " ███████████████████", null, 0xffd559, "normal", 1);
    // ENVIAR AL DISCORD DESPÚES DE 300 milisegundos
    setTimeout(function () {
    sendDiscordWebhook();
    room.sendAnnouncement("📼 La grabación de la partida fue enviada a " + GrabacionesDiscord + " . ¡Bien jugado! 🎉");
    }, 150);
        }, 800);
    // Obtener los nombres de los jugadores en cada equipo
    const redTeamPlayerNames = room.getPlayerList().filter(player => player.team === 1).map(player => player.name);
    const blueTeamPlayerNames = room.getPlayerList().filter(player => player.team === 2).map(player => player.name);

    // Obtener el número de goles de cada equipo
    const GolesTotalesRED = room.getScores().red;
    const GolesTotalesBLUE = room.getScores().blue;

        // Verificar si el arquero del equipo Azul mantuvo la valla invicta
        if (GolesTotalesRED === 0 && ArqueroBLUE) {
            playerCleanSheets[ArqueroBLUE.name] = (playerCleanSheets[ArqueroBLUE.name] || 0) + 1;
        }
        // Verificar si el arquero del equipo Rojo mantuvo la valla invicta
        if (GolesTotalesBLUE === 0 && ArqueroRED) {
            playerCleanSheets[ArqueroRED.name] = (playerCleanSheets[ArqueroRED.name] || 0) + 1;
        }

    // Obtener el número de goles de cada equipo
    const redTeamGoals = room.getScores().red;
    const blueTeamGoals = room.getScores().blue;

    // Actualizar las estadísticas para cada jugador en el equipo rojo
    redTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, redTeamGoals > blueTeamGoals ? 'victory' : (redTeamGoals < blueTeamGoals ? 'defeat' : 'draw'));
    });

    // Actualizar las estadísticas para cada jugador en el equipo azul
    blueTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, blueTeamGoals > redTeamGoals ? 'victory' : (blueTeamGoals < redTeamGoals ? 'defeat' : 'draw'));
    });
        }
if (FairPlayActivado) {
                var scoreDifference = Math.abs(room.getScores().red - room.getScores().blue);


        if (scoreDifference === 1) {

            setTimeout(function () {
                room.stopGame();

                var players = room.getPlayerList().filter(function (player) {
                    return player.id !== 0;
                });

                if (players.length === 0) {
                    return false;
                }

                players.forEach(function (player) {
                    if (player.team === 1) {
                        room.setPlayerTeam(player.id, 2);
                    }
                    if (player.team === 2) {
                        room.setPlayerTeam(player.id, 1);
                    }
                });

                room.startGame();
            }, 3500); // PAUSA DE 3 SEGUNDOS
        } else if (scoreDifference === 2) {


            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                room.startGame();
            }, 3500); // PAUSA DE 3 SEGUNDOS
        } else if (scoreDifference >= 3) {


            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                const players = room.getPlayerList();

    // Filtrar a los jugadores que están en el campo
    const activePlayers = players.filter(p => p.team !== 0 && p.position !== null);

    // Ordenar a los jugadores activos por nivel de mayor a menor
    const sortedPlayers = activePlayers.sort((a, b) => {
        const aPoints = (totalPlayerGoals[a.name] || 0) + ((totalPlayerAssists[a.name] || 0) * 0.7);
        const bPoints = (totalPlayerGoals[b.name] || 0) + ((totalPlayerAssists[b.name] || 0) * 0.7);
        return bPoints - aPoints;
    });

    // Distribuir a los jugadores en dos equipos equilibrados
    const team1 = [];
    const team2 = [];
    let totalPointsTeam1 = 0;
    let totalPointsTeam2 = 0;

    // Iterar sobre los jugadores y asignarlos a los equipos de manera equitativa
    for (let i = 0; i < sortedPlayers.length; i++) {
        const currentPlayer = sortedPlayers[i];
        const currentPlayerPoints = (totalPlayerGoals[currentPlayer.name] || 0) + ((totalPlayerAssists[currentPlayer.name] || 0) * 0.7);

        if (totalPointsTeam1 <= totalPointsTeam2) {
            team1.push(currentPlayer);
            totalPointsTeam1 += currentPlayerPoints;
        } else {
            team2.push(currentPlayer);
            totalPointsTeam2 += currentPlayerPoints;
        }
    }

    // Asignar los equipos a los jugadores
    team1.forEach(player => room.setPlayerTeam(player.id, 1));
    team2.forEach(player => room.setPlayerTeam(player.id, 2));
    balanceTeams();
}, 3000); // PAUSA DE 3 SEGUNDOS
setTimeout(function() {
    balanceTeams();
}, 4000); // Esperar 
setTimeout(function() {
    room.startGame();
}, 4500); // Esperar 
            

        }
    }

			}
			
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			
			game.ballOutPositionX = Math.round(room.getBallPosition().x * 10) / 10;
			if (room.getBallPosition().y > 612) {
				game.ballOutPositionY = 400485;
				game.throwInPosY = 618;
			}
			if (room.getBallPosition().y < -612) {
				game.ballOutPositionY = -400485;
				game.throwInPosY = -618;
			}
			if (room.getBallPosition().x > 1130) {
				game.ballOutPositionX = 1130;
			}
			if (room.getBallPosition().x < -1130) {
				game.ballOutPositionX = -1130;
			}
			
			
			if (game.rsTouchTeam == 1) {				
				room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "blueThrow";
					game.throwinKicked = false;
					game.rsTimer = 0;
					game.rsReady = true;
					game.lateral = true;
					game.lateral2 = true;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
					//announce("🖐️ Throw In: 🔵 Blue");
					room.setDiscProperties(0, {color: "0x00ccff"});				
				});	
				sleep(100).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
			else {				
				room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "redThrow";
					game.throwinKicked = false;
					game.rsTimer = 0;
					game.rsReady = true;
					game.lateral = true;
					game.lateral2 = true;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
					//announce("🖐️ Throw In: 🔴 Red");
					room.setDiscProperties(0, {color: "0xff223c"});				
				});	
				sleep(100).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
		}
	
		if (room.getBallPosition().x > 1162 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
			game.rsActive = false;	
			if (game.lastPlayAnnounced == true) {

				room.pauseGame(true);
				game.lastPlayAnnounced = false;
        if (GolDeOroActivado && room.getScores().red === room.getScores().blue) {
            room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥", null, 0xffd700, "bold", 2);
            AnuncioGolDeOro = true;

            setTimeout(function () {
                room.pauseGame(false);
            }, 1000); // Esto quitará la pausa después de un segundo.
        } else {
            // Si GolDeOroActivado es false o los equipos no están empatados, ejecuta el siguiente bloque de código
handleTeamVictory();
        setTimeout(function () {
    // Seleccionar la Figura del partido
    const figuraDelPartido = getFiguraDelPartido();
    enviarAnuncioFiguraDelPartido(figuraDelPartido);
    teamPossFun();
            room.sendAnnouncement("███████████████████ " + teamRed + "  " + getNumericEmoji(room.getScores().red) + "      🞬      " + getNumericEmoji(room.getScores().blue) + "  " + teamBlue + " ███████████████████", null, 0xffd559, "normal", 1);
    // ENVIAR AL DISCORD DESPÚES DE 300 milisegundos
    setTimeout(function () {
    sendDiscordWebhook();
    room.sendAnnouncement("📼 La grabación de la partida fue enviada a " + GrabacionesDiscord + " . ¡Bien jugado! 🎉");
    }, 150);

        }, 800);
    // Obtener los nombres de los jugadores en cada equipo
    const redTeamPlayerNames = room.getPlayerList().filter(player => player.team === 1).map(player => player.name);
    const blueTeamPlayerNames = room.getPlayerList().filter(player => player.team === 2).map(player => player.name);

    // Obtener el número de goles de cada equipo
    const GolesTotalesRED = room.getScores().red;
    const GolesTotalesBLUE = room.getScores().blue;

        // Verificar si el arquero del equipo Azul mantuvo la valla invicta
        if (GolesTotalesRED === 0 && ArqueroBLUE) {
            playerCleanSheets[ArqueroBLUE.name] = (playerCleanSheets[ArqueroBLUE.name] || 0) + 1;
        }
        // Verificar si el arquero del equipo Rojo mantuvo la valla invicta
        if (GolesTotalesBLUE === 0 && ArqueroRED) {
            playerCleanSheets[ArqueroRED.name] = (playerCleanSheets[ArqueroRED.name] || 0) + 1;
        }

    // Obtener el número de goles de cada equipo
    const redTeamGoals = room.getScores().red;
    const blueTeamGoals = room.getScores().blue;

    // Actualizar las estadísticas para cada jugador en el equipo rojo
    redTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, redTeamGoals > blueTeamGoals ? 'victory' : (redTeamGoals < blueTeamGoals ? 'defeat' : 'draw'));
    });

    // Actualizar las estadísticas para cada jugador en el equipo azul
    blueTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, blueTeamGoals > redTeamGoals ? 'victory' : (blueTeamGoals < redTeamGoals ? 'defeat' : 'draw'));
    });
        }


if (FairPlayActivado) {
                var scoreDifference = Math.abs(room.getScores().red - room.getScores().blue);


        if (scoreDifference === 1) {


            setTimeout(function () {
                room.stopGame();

                var players = room.getPlayerList().filter(function (player) {
                    return player.id !== 0;
                });

                if (players.length === 0) {
                    return false;
                }

                players.forEach(function (player) {
                    if (player.team === 1) {
                        room.setPlayerTeam(player.id, 2);
                    }
                    if (player.team === 2) {
                        room.setPlayerTeam(player.id, 1);
                    }
                });

                room.startGame();
            }, 3500); // PAUSA DE 3 SEGUNDOS
        } else if (scoreDifference === 2) {


            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                room.startGame();
            }, 3500); // PAUSA DE 3 SEGUNDOS
        } else if (scoreDifference >= 3) {


            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                const players = room.getPlayerList();

    // Filtrar a los jugadores que están en el campo
    const activePlayers = players.filter(p => p.team !== 0 && p.position !== null);

    // Ordenar a los jugadores activos por nivel de mayor a menor
    const sortedPlayers = activePlayers.sort((a, b) => {
        const aPoints = (totalPlayerGoals[a.name] || 0) + ((totalPlayerAssists[a.name] || 0) * 0.7);
        const bPoints = (totalPlayerGoals[b.name] || 0) + ((totalPlayerAssists[b.name] || 0) * 0.7);
        return bPoints - aPoints;
    });

    // Distribuir a los jugadores en dos equipos equilibrados
    const team1 = [];
    const team2 = [];
    let totalPointsTeam1 = 0;
    let totalPointsTeam2 = 0;

    // Iterar sobre los jugadores y asignarlos a los equipos de manera equitativa
    for (let i = 0; i < sortedPlayers.length; i++) {
        const currentPlayer = sortedPlayers[i];
        const currentPlayerPoints = (totalPlayerGoals[currentPlayer.name] || 0) + ((totalPlayerAssists[currentPlayer.name] || 0) * 0.7);

        if (totalPointsTeam1 <= totalPointsTeam2) {
            team1.push(currentPlayer);
            totalPointsTeam1 += currentPlayerPoints;
        } else {
            team2.push(currentPlayer);
            totalPointsTeam2 += currentPlayerPoints;
        }
    }

    // Asignar los equipos a los jugadores
    team1.forEach(player => room.setPlayerTeam(player.id, 1));
    team2.forEach(player => room.setPlayerTeam(player.id, 2));
    balanceTeams();
}, 3000); // PAUSA DE 3 SEGUNDOS
setTimeout(function() {
    balanceTeams();
}, 4000); // Esperar 
setTimeout(function() {
    room.startGame();
}, 4500); // Esperar 

        }
    }

			}
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			room.getPlayerList().forEach(function(player) {
				room.setPlayerDiscProperties(player.id, {invMass: 100000});
			});
			
			if (game.rsTouchTeam == 1) {				
				room.setDiscProperties(3, {x: 1060, y: 0, radius: 18 });
				sleep(100).then(() => {					
					game.outStatus = "blueGK";
					game.rsTimer = 0;
					game.rsReady = true;
					//announce("🥅 Goal Kick: 🔵 Blue");
					game.rsGoalKick = true;
					game.rsGoalKick2 = true;
					game.rsSwingTimer = 0;
					game.boosterCount = 0;
					game.boosterState = false;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: 1060, y: 0, color: "0x00ccff", cMask: 268435519, xgravity: 0, ygravity: 0});
				});
				sleep(3000).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
			else {	
				//announce("🚩 Corner Kick: 🔴 Red");							
				game.rsSwingTimer = 0;
				if (room.getBallPosition().y < -124) {					
					room.setDiscProperties(3, {x: 1140, y: -590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.rsCorner2 = true;
						game.outStatus = "redCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: 1140, y: -590, xspeed: 0, yspeed: 0, color: "0xff223c", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(2, {x: 1150, y: -670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
				if (room.getBallPosition().y > 124) {
					room.setDiscProperties(3, {x: 1140, y: 590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.rsCorner2 = true;
						game.outStatus = "redCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: 1140, y: 590, xspeed: 0, yspeed: 0, color: "0xff223c", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(2, {x: 1150, y: 670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
			}
		}
		if (room.getBallPosition().x < -1162 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
			game.rsActive = false;
			if (game.lastPlayAnnounced == true) {
				room.pauseGame(true);
				game.lastPlayAnnounced = false;
        if (GolDeOroActivado && room.getScores().red === room.getScores().blue) {
            room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥", null, 0xffd700, "bold", 2);
            AnuncioGolDeOro = true;

            setTimeout(function () {
                room.pauseGame(false);
            }, 1000); // Esto quitará la pausa después de un segundo.
        } else {
            // Si GolDeOroActivado es false o los equipos no están empatados, ejecuta el siguiente bloque de código
handleTeamVictory();
        setTimeout(function () {
    // Seleccionar la Figura del partido
    const figuraDelPartido = getFiguraDelPartido();
    enviarAnuncioFiguraDelPartido(figuraDelPartido);
    teamPossFun();
            room.sendAnnouncement("███████████████████ " + teamRed + "  " + getNumericEmoji(room.getScores().red) + "      🞬      " + getNumericEmoji(room.getScores().blue) + "  " + teamBlue + " ███████████████████", null, 0xffd559, "normal", 1);
    // ENVIAR AL DISCORD DESPÚES DE 300 milisegundos
    setTimeout(function () {
    sendDiscordWebhook();
    room.sendAnnouncement("📼 La grabación de la partida fue enviada a " + GrabacionesDiscord + " . ¡Bien jugado! 🎉");
    }, 150);

        }, 800);
    // Obtener los nombres de los jugadores en cada equipo
    const redTeamPlayerNames = room.getPlayerList().filter(player => player.team === 1).map(player => player.name);
    const blueTeamPlayerNames = room.getPlayerList().filter(player => player.team === 2).map(player => player.name);

    // Obtener el número de goles de cada equipo
    const GolesTotalesRED = room.getScores().red;
    const GolesTotalesBLUE = room.getScores().blue;

        // Verificar si el arquero del equipo Azul mantuvo la valla invicta
        if (GolesTotalesRED === 0 && ArqueroBLUE) {
            playerCleanSheets[ArqueroBLUE.name] = (playerCleanSheets[ArqueroBLUE.name] || 0) + 1;
        }
        // Verificar si el arquero del equipo Rojo mantuvo la valla invicta
        if (GolesTotalesBLUE === 0 && ArqueroRED) {
            playerCleanSheets[ArqueroRED.name] = (playerCleanSheets[ArqueroRED.name] || 0) + 1;
        }

    // Obtener el número de goles de cada equipo
    const redTeamGoals = room.getScores().red;
    const blueTeamGoals = room.getScores().blue;

    // Actualizar las estadísticas para cada jugador en el equipo rojo
    redTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, redTeamGoals > blueTeamGoals ? 'victory' : (redTeamGoals < blueTeamGoals ? 'defeat' : 'draw'));
    });

    // Actualizar las estadísticas para cada jugador en el equipo azul
    blueTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, blueTeamGoals > redTeamGoals ? 'victory' : (blueTeamGoals < redTeamGoals ? 'defeat' : 'draw'));
    });
        }



if (FairPlayActivado) {
                var scoreDifference = Math.abs(room.getScores().red - room.getScores().blue);


        if (scoreDifference === 1) {


            setTimeout(function () {
                room.stopGame();

                var players = room.getPlayerList().filter(function (player) {
                    return player.id !== 0;
                });

                if (players.length === 0) {
                    return false;
                }

                players.forEach(function (player) {
                    if (player.team === 1) {
                        room.setPlayerTeam(player.id, 2);
                    }
                    if (player.team === 2) {
                        room.setPlayerTeam(player.id, 1);
                    }
                });

                room.startGame();
            }, 3500); // PAUSA DE 3 SEGUNDOS
        } else if (scoreDifference === 2) {


            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                room.startGame();
            }, 3500); // PAUSA DE 3 SEGUNDOS
        } else if (scoreDifference >= 3) {


            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                const players = room.getPlayerList();

    // Filtrar a los jugadores que están en el campo
    const activePlayers = players.filter(p => p.team !== 0 && p.position !== null);

    // Ordenar a los jugadores activos por nivel de mayor a menor
    const sortedPlayers = activePlayers.sort((a, b) => {
        const aPoints = (totalPlayerGoals[a.name] || 0) + ((totalPlayerAssists[a.name] || 0) * 0.7);
        const bPoints = (totalPlayerGoals[b.name] || 0) + ((totalPlayerAssists[b.name] || 0) * 0.7);
        return bPoints - aPoints;
    });

    // Distribuir a los jugadores en dos equipos equilibrados
    const team1 = [];
    const team2 = [];
    let totalPointsTeam1 = 0;
    let totalPointsTeam2 = 0;

    // Iterar sobre los jugadores y asignarlos a los equipos de manera equitativa
    for (let i = 0; i < sortedPlayers.length; i++) {
        const currentPlayer = sortedPlayers[i];
        const currentPlayerPoints = (totalPlayerGoals[currentPlayer.name] || 0) + ((totalPlayerAssists[currentPlayer.name] || 0) * 0.7);

        if (totalPointsTeam1 <= totalPointsTeam2) {
            team1.push(currentPlayer);
            totalPointsTeam1 += currentPlayerPoints;
        } else {
            team2.push(currentPlayer);
            totalPointsTeam2 += currentPlayerPoints;
        }
    }

    // Asignar los equipos a los jugadores
    team1.forEach(player => room.setPlayerTeam(player.id, 1));
    team2.forEach(player => room.setPlayerTeam(player.id, 2));
    balanceTeams();
}, 3000); // PAUSA DE 3 SEGUNDOS
setTimeout(function() {
    balanceTeams();
}, 4000); // Esperar 
setTimeout(function() {
    room.startGame();
}, 4500); // Esperar 

        }
    }


			}
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			room.getPlayerList().forEach(function(player) {
				room.setPlayerDiscProperties(player.id, {invMass: 100000});
			});
			
			if (game.rsTouchTeam == 1) {				
				//announce("🚩 Corner Kick: 🔵 Blue");				
				game.rsSwingTimer = 0;
				if (room.getBallPosition().y < -124) {
					room.setDiscProperties(3, {x: -1140, y: -590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.rsCorner2 = true;
						game.outStatus = "blueCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: -1140, y: -590, xspeed: 0, yspeed: 0, color: "0x00ccff", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(1, {x: -1150, y: -670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});	
				}
				if (room.getBallPosition().y > 124) {
					room.setDiscProperties(3, {x: -1140, y: 590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.rsCorner2 = true;
						game.outStatus = "blueCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: -1140, y: 590, xspeed: 0, yspeed: 0, color: "0x00ccff", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(1, {x: -1150, y: 670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});		
				}				
			}
			else {				
				room.setDiscProperties(3, {x: -1060, y: 0, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "redGK";
					game.rsTimer = 0;
					game.rsReady = true;
					//announce("🥅 Goal Kick: 🔴 Red");
					game.rsGoalKick = true;
					game.rsGoalKick2 = true;
					game.rsSwingTimer = 0;
					game.boosterCount = 0;
					game.boosterState = false;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: -1060, y: 0, color: "0xff223c", cMask: 268435519, xgravity: 0, ygravity: 0});
				});
				sleep(3000).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
		}
	}
	
	if (game.rsActive == false && (game.outStatus == "redThrow" || game.outStatus == "blueThrow")) { 
		if ((room.getBallPosition().y > 612 || room.getBallPosition().y < -612) && (room.getBallPosition().x < game.ballOutPositionX - throwinDistance || room.getBallPosition().x > game.ballOutPositionX + throwinDistance) && game.bringThrowBack == false) { //if bad throw from run too far
			game.bringThrowBack	= true;
			if (game.outStatus == "redThrow") { //switch to blue throw
				game.rsTimer = 0;
				game.warningCount++;
				game.outStatus = "blueThrow";								
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0x00ccff", x: game.ballOutPositionX, y: game.throwInPosY});	
				});			
			}
			else if (game.outStatus == "blueThrow") { //switch to red throw
				game.rsTimer = 0;
				game.warningCount++;
				game.outStatus = "redThrow";										
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});	
				sleep(100).then(() => {
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0xff223c", x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
				
		}
		
		if (room.getBallPosition().y < 612 && room.getBallPosition().y > -612 && game.throwinKicked == false && game.pushedOut == false) { //if bad throw from push ball back into active without kick		
			if (game.outStatus == "redThrow") { //switch to blue throw
				game.rsTimer = 0;
				game.warningCount++;
				game.outStatus = "blueThrow";								
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0x00ccff", x: game.ballOutPositionX, y: game.throwInPosY});
				});					
			}
			else if (game.outStatus == "blueThrow") { //switch to red throw
				game.rsTimer = 0;
				game.warningCount++;
				game.outStatus = "redThrow";										
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});	
				sleep(100).then(() => {
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0xff223c", x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
			game.pushedOut = true;
		}
		
		if (room.getBallPosition().y < 612 && room.getBallPosition().y > -612 && game.throwinKicked == true) { // if throw is good
			game.lateral = false;
			game.lateral2 = false;
			game.outStatus = "";
			game.rsActive = true;
			game.rsReady = false;
			room.setDiscProperties(0, {color: `0x${PelotaRS}`});
			game.rsTimer = 1000000;
			game.warningCount++;
		}
		
		if (room.getBallPosition().y.toFixed(1) == game.throwInPosY.toFixed(1) && room.getBallPosition().x.toFixed(1) == game.ballOutPositionX.toFixed(1)) {
			game.bringThrowBack	= false;
			game.pushedOut = false;
		}
	}
}



function handleBallTouchFUTSAL() {
    var players = room.getPlayerList();
    var ballPosition = room.getBallPosition();
    var ballRadius = game.ballRadius;
    var triggerDistance = ballRadius + 0.01;
    var distanciaMinimaParaCancelarDisparo = 15; // Ajusta esta distancia según tus necesidades.

    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        if (player.position == null) continue;
        var distanceToBall = pointDistance(player.position, ballPosition);
        var playerRadius = room.getPlayerDiscProperties(player.id).radius;
        var triggerDistanceWithPlayer = ballRadius + playerRadius + 0.01;

        if (distanceToBall < triggerDistanceWithPlayer) {
            game.rsTouchTeam = player.team;
            game.throwinKicked = false;

            // POWERSHOT CODE
            if (game.rsCorner == false && game.rsGoalKick == false && game.outStatus != "blueThrow" && game.outStatus != "redThrow" && powerShotMode == true) {
                if (game.powershotID != player.id) {
                    game.powershotID = player.id;
                    game.powershotTrigger = false;
                    game.powershotCounter = 0;
                } else {
                    game.powershotCounter++;
                    if (game.powershotCounter > 52 && game.powershotTrigger == false && Math.round(room.getDiscProperties(0).invMass) != PotenciaPowerShot) {
				room.setDiscProperties(0, {"bCoef":0.4,"invMass":PotenciaPowerShot,"damping":0.99, color: `0x${PelotaFutsal_PowerShot}` }); // Cambia el color a naranja
                        room.sendAnnouncement("POWERSHOT ACTIVADO!", game.powershotID, 0x33dd33, "bold", 1);
                        game.powershotTrigger = true;
                    }
                }
            }
            // POWERSHOT CODE

            if (game.rsCorner == false && room.getDiscProperties(0).xgravity != 0) {
                room.setDiscProperties(0, { xgravity: 0, ygravity: 0 });
                game.rsSwingTimer = 5200;
            }
        } else if (distanceToBall > triggerDistanceWithPlayer + distanciaMinimaParaCancelarDisparo) {
            if (game.powershotID === player.id && game.powershotTrigger === true && powerShotMode === true) {
                game.powershotTrigger = false;
                game.powershotCounter = 0;
                game.powershotID = 0;
                if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) !== 1.5) {
				room.setDiscProperties(0, {"bCoef":0.4,"invMass":1.5,"damping":0.99, color: `0x${PelotaFutsal}` }); // Cambia el color a naranja
                    room.sendAnnouncement("POWERSHOT CANCELADO!", player.id, 0xdd3333, "bold", 2);
                }
            }
        }
    }
}


function handleBallTouch() {
    var players = room.getPlayerList();
    var ballPosition = room.getBallPosition();
    var ballRadius = game.ballRadius;
    var triggerDistance = ballRadius + 0.01;
    var distanciaMinimaParaCancelarDisparo = 15; // Ajusta esta distancia según tus necesidades.

    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        if (player.position == null) continue;
        var distanceToBall = pointDistance(player.position, ballPosition);
        var playerRadius = room.getPlayerDiscProperties(player.id).radius;
        var triggerDistanceWithPlayer = ballRadius + playerRadius + 0.01;

        if (distanceToBall < triggerDistanceWithPlayer) {
            game.rsTouchTeam = player.team;
            game.throwinKicked = false;

            // POWERSHOT CODE
            if (game.rsCorner == false && game.rsGoalKick == false && game.outStatus != "blueThrow" && game.outStatus != "redThrow" && powerShotMode == true) {
                if (game.powershotID != player.id) {
                    game.powershotID = player.id;
                    game.powershotTrigger = false;
                    game.powershotCounter = 0;
                } else {
                    game.powershotCounter++;
                    if (game.powershotCounter > 52 && game.powershotTrigger == false && Math.round(room.getDiscProperties(0).invMass) != PotenciaPowerShotRS) {
                        room.setDiscProperties(0, { invMass: PotenciaPowerShotRS, color: `0x${PelotaRS_PowerShot}` }); // Cambia el color a naranja
                        room.sendAnnouncement("POWERSHOT ACTIVADO!", game.powershotID, 0x33dd33, "bold", 1);
                        game.powershotTrigger = true;
                    }
                }
            }
            // POWERSHOT CODE

            if (game.rsCorner == false && room.getDiscProperties(0).xgravity != 0) {
                room.setDiscProperties(0, { xgravity: 0, ygravity: 0 });
                game.rsSwingTimer = 5200;
            }
        } else if (distanceToBall > triggerDistanceWithPlayer + distanciaMinimaParaCancelarDisparo) {
            if (game.powershotID === player.id && game.powershotTrigger === true && powerShotMode === true) {
                game.powershotTrigger = false;
                game.powershotCounter = 0;
                game.powershotID = 0;
                if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) !== 1.05) {
                    room.setDiscProperties(0, { invMass: 1.05, color: `0x${PelotaRS}` }); // Restaura el color original
                    room.sendAnnouncement("POWERSHOT CANCELADO!", player.id, 0xdd3333, "bold", 2);
                }
            }
        }
    }
}




var game = {
  time: 0,
  ballRadius: 0,
  ticks: 0
};

function updateGameStatus() {
  var _0x28cb48 = _0x3c81f9;
  game['time'] = Math[_0x28cb48(0x1c3)](room[_0x28cb48(0x172)]()['time']);
  game['ballRadius'] = room['getDiscProperties'](0x0)[_0x28cb48(0x121)];
  game['ticks']++;
}

function announce(_0x2f0a83, _0x3a75ce, _0x2c2aa7, _0x3614b0, _0x28f16f) {
	var _0xdb5dc1 = _0x3c81f9;
	_0x2c2aa7 == null && (_0x2c2aa7 = 0xfffd82), _0x3614b0 == null && (_0x3614b0 = _0xdb5dc1(0x17a)), _0x28f16f == null && (_0x28f16f = 0x0), room['sendAnnouncement'](_0x2f0a83, _0x3a75ce, _0x2c2aa7, _0x3614b0, _0x28f16f);
}

function whisper(_0x1efb47, _0x166a3c, _0x37ade9, _0x3c8c4c, _0x3d8947) {
	var _0x341048 = _0x3c81f9;
	_0x37ade9 == null && (_0x37ade9 = 0x66c7ff), _0x3c8c4c == null && (_0x3c8c4c = _0x341048(0x1d6)), _0x3d8947 == null && (_0x3d8947 = 0x0), room[_0x341048(0x1d2)](_0x1efb47, _0x166a3c, _0x37ade9, _0x3c8c4c, _0x3d8947);
}

function isAdminPresent() {
	var players = room.getPlayerList();
	if (players.find((player) => player.admin) != null) {
		return true;
	}
	else {
		return false;
	}
}

function displayAdminMessage() {
    if (isAdminPresent() === false && allowPublicAdmin === true) {
        room.sendAnnouncement("🔒 ¡No hay administrador en la sala! Para hacer a alguien administrador, escribe:", null, 0xFFFFFF, "small-bold", 1);
        setTimeout(function() {
            room.sendAnnouncement("       !admin NúmeroID         Por ejemplo: !admin 20 (Para votar al jugador con ID nº 20.)", null, 0x00FF00, "bold", 1);
        }, 500); // Esperar un segundo (500 milisegundos)
        setTimeout(function() {
            room.sendAnnouncement("¡RECUERDA, EL NÚMERO es el Nº de ID del JUGADOR que quieres VOTAR PARA ADMINISTRADOR! Puedes ver los IDs con !ids. Si más de la mitad de los jugadores vota por un mismo jugador, dicho jugador será administrador.", null, 0xFFFFFF, "small-bold", 1);
        }, 1000); // Esperar dos segundos (1000 milisegundos)
    }
}




function pointDistance(_0x6b9cc5, _0x21a1e7) {
	var _0x43d01b = _0x3c81f9,
		_0x132800 = _0x6b9cc5['x'] - _0x21a1e7['x'],
		_0x26e284 = _0x6b9cc5['y'] - _0x21a1e7['y'];
	return Math[_0x43d01b(0x193)](_0x132800 * _0x132800 + _0x26e284 * _0x26e284);
}

function sleep(_0x17ee36) {
	return new Promise(_0x1d5abb => setTimeout(_0x1d5abb, _0x17ee36));
}

function ballWarning(origColour, warningCount) {
	sleep(200).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: `0x${PelotaRS}`});
		}
	});
	sleep(400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: `0x${PelotaRS}`});
		}
	});
	sleep(800).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1000).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: `0x${PelotaRS}`});
		}
	});
	sleep(1200).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: `0x${PelotaRS}`});
		}
	});
	sleep(1600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1675).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: `0x${PelotaRS}`});
		}
	});
	sleep(1750).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
}


function avatarCelebration(_0x324e3c, _0x3eba06) {
	var _0x56d7e8 = _0x3c81f9;
	room[_0x56d7e8(0x15e)](_0x324e3c, _0x3eba06), sleep(0xfa)[_0x56d7e8(0x174)](() => {
		var _0x4c9cb0 = _0x56d7e8;
		room[_0x4c9cb0(0x15e)](_0x324e3c, null);
	}), sleep(0x1f4)[_0x56d7e8(0x174)](() => {
		var _0x6a5198 = _0x56d7e8;
		room[_0x6a5198(0x15e)](_0x324e3c, _0x3eba06);
	}), sleep(0x2ee)[_0x56d7e8(0x174)](() => {
		room['setPlayerAvatar'](_0x324e3c, null);
	}), sleep(0x3e8)[_0x56d7e8(0x174)](() => {
		var _0x431ddc = _0x56d7e8;
		room[_0x431ddc(0x15e)](_0x324e3c, _0x3eba06);
	}), sleep(0x4e2)[_0x56d7e8(0x174)](() => {
		var _0x2bea31 = _0x56d7e8;
		room[_0x2bea31(0x15e)](_0x324e3c, null);
	}), sleep(0x5dc)['then'](() => {
		var _0x5ca3a7 = _0x56d7e8;
		room[_0x5ca3a7(0x15e)](_0x324e3c, _0x3eba06);
	}), sleep(0x6d6)[_0x56d7e8(0x174)](() => {
		var _0x5225e9 = _0x56d7e8;
		room[_0x5225e9(0x15e)](_0x324e3c, null);
	}), sleep(0x7d0)[_0x56d7e8(0x174)](() => {
		var _0x5558dd = _0x56d7e8;
		room[_0x5558dd(0x15e)](_0x324e3c, _0x3eba06);
	}), sleep(0x8ca)[_0x56d7e8(0x174)](() => {
		var _0x6872e4 = _0x56d7e8;
		room[_0x6872e4(0x15e)](_0x324e3c, null);
	}), sleep(0x9c4)[_0x56d7e8(0x174)](() => {
		var _0x3f6153 = _0x56d7e8;
		room[_0x3f6153(0x15e)](_0x324e3c, _0x3eba06);
	}), sleep(0xabe)['then'](() => {
		var _0x170109 = _0x56d7e8;
		room[_0x170109(0x15e)](_0x324e3c, null);
	}), sleep(0xbb8)['then'](() => {
		var _0x47ef1d = _0x56d7e8;
		room[_0x47ef1d(0x15e)](_0x324e3c, _0x3eba06);
	}), sleep(0xcb2)[_0x56d7e8(0x174)](() => {
		var _0x3e1d25 = _0x56d7e8;
		room[_0x3e1d25(0x15e)](_0x324e3c, null);
	});
}

function secondsToMinutes(_0x46ebc4) {
	var _0x1b57ad = ~~ (_0x46ebc4 / 0xe10),
		_0x58786b = ~~ (_0x46ebc4 % 0xe10 / 0x3c),
		_0x43c8d3 = ~~_0x46ebc4 % 0x3c,
		_0x58bd92 = '';
	return _0x1b57ad > 0x0 && (_0x58bd92 += '' + _0x1b57ad + ':' + (_0x58786b < 0xa ? '0' : '')), _0x58bd92 += '' + _0x58786b + ':' + (_0x43c8d3 < 0xa ? '0' : ''), _0x58bd92 += '' + _0x43c8d3, _0x58bd92;
}

function blockThrowIn() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (room.getBallPosition().y < 0) { // top throw line
		if (game.outStatus == "redThrow") {
			players.forEach(function(player) {
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -485) {
						room.setPlayerDiscProperties(player.id, {y: -470});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(17).x != 1149) { // show top red line
					room.setDiscProperties(17, {x: 1149});
				}
				if (room.getDiscProperties(19).x != -1149) { // hide top blue line
					room.setDiscProperties(19, {x: -1149});
				}
			});
		}
		if (game.outStatus == "blueThrow") {
			players.forEach(function(player) {
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -485) {
						room.setPlayerDiscProperties(player.id, {y: -470});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(19).x != 1149) { // show top blue line
					room.setDiscProperties(19, {x: 1149});
				}
				if (room.getDiscProperties(17).x != -1149) { // hide top red line
					room.setDiscProperties(17, {x: -1149});
				}
			});
		}
	}
	if (room.getBallPosition().y > 0) { // bottom throw line
		if (game.outStatus == "redThrow") {
			players.forEach(function(player) {
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 485) {
						room.setPlayerDiscProperties(player.id, {y: 470});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(21).x != 1149) { // show bottom red line
					room.setDiscProperties(21, {x: 1149});
				}
				if (room.getDiscProperties(23).x != -1149) { // hide bottom blue line
					room.setDiscProperties(23, {x: -1149});
				}
			});
		}
		if (game.outStatus == "blueThrow") {
			players.forEach(function(player) {
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 485) {
						room.setPlayerDiscProperties(player.id, {y: 470});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(23).x != 1149) { // show bottom blue line
					room.setDiscProperties(23, {x: 1149});
				}
				if (room.getDiscProperties(21).x != -1149) { // hide bottom red line
					room.setDiscProperties(21, {x: -1149});
				}
			});
		}		
	}	
}


function blockGoalKick() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (room.getBallPosition().x < 0) { // left side red goal kick
		if (game.outStatus == "redGK") {
			players.forEach(function(player) {
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).x < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
						room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
					}
					if (player.position.x < -740 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: -700});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
			});
		}
	}
	if (room.getBallPosition().x > 0) { // right side blue goal kick
		if (game.outStatus == "blueGK") {
			players.forEach(function(player) {
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).x > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
						room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
					}
					if (player.position.x > 740 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: 700});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
			});
		}		
	}	
}



function removeBlock() {
  var players = room.getPlayerList().filter((player) => player.team !== 0);
  if (game.outStatus === "") {
    players.forEach(function(player) {
      if (player.team === 1 && room.getPlayerDiscProperties(player.id).cGroup !== room.CollisionFlags.red) {
        room.setPlayerDiscProperties(player.id, { cGroup: room.CollisionFlags.red });
      }
      if (player.team === 2 && room.getPlayerDiscProperties(player.id).cGroup !== room.CollisionFlags.blue) {
        room.setPlayerDiscProperties(player.id, { cGroup: room.CollisionFlags.blue });
      }
    });

    var disc17 = room.getDiscProperties(17);
    if (disc17 !== null && disc17.x !== -1149) {
      room.setDiscProperties(17, { x: -1149 });
    }

    var disc19 = room.getDiscProperties(19);
    if (disc19 !== null && disc19.x !== -1149) {
      room.setDiscProperties(19, { x: -1149 });
    }

    var disc21 = room.getDiscProperties(21);
    if (disc21 !== null && disc21.x !== -1149) {
      room.setDiscProperties(21, { x: -1149 });
    }

    var disc23 = room.getDiscProperties(23);
    if (disc23 !== null && disc23.x !== -1149) {
      room.setDiscProperties(23, { x: -1149 });
    }
  }
}






// Función para enviar la firma del jugador a Discord y mostrar qué jugadores han firmado y cuáles no
function sendFirmaToDiscord(player, playerIP) {
    // Obtener la lista de jugadores presentes en el host
    const jugadoresPresentes = room.getPlayerList().map(player => player.name);

    // Obtener la lista de jugadores que aún no han firmado
    const jugadoresNoFirmados = jugadoresPresentes.filter(jugador => !jugadoresFirmados.includes(jugador));

    // Construir el mensaje para enviar a Discord
    let mensaje = `\n`;

    mensaje += `**✅ YA FIRMARON:**\n`;
    mensaje += jugadoresFirmados.length > 0 ? jugadoresFirmados.join(', ') : 'Ninguno';

    mensaje += `\n\n**❎ AÚN NO HAN FIRMADO:**\n`;
    mensaje += jugadoresNoFirmados.length > 0 ? jugadoresNoFirmados.join(', ') : 'Todos los jugadores han firmado';

    // Agregar información sobre la firma del jugador actual
    mensaje += `\n\n✍️ El jugador ${player.name} ha firmado.\n\n🌐 IP del jugador: ${playerIP}`;

    const embed = {
        embeds: [{
            title: "📝 FIRMAS DE LOS JUGADORES",
            description: mensaje,
            color: 0x00e5ff,
            timestamp: new Date().toISOString(),
            footer: {
                text: `Firmado en ${NombreHost}`
            }
        }]
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(embed),
    };

    fetch(WebhookParaFirmar, requestOptions);
}



function decryptHex(str) {
  let hexString = str;
  let strOut = "";
  for (let x = 0; x < hexString.length; x += 2) {
    strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
  }
  return strOut;
}






// Lista original de claves API
const apiKeys = ['041e9455309144cdab1527ae21c925c2', '4a158c1a381f4dadaa5a797030297ece', '844f0f2d3e7c45c3a47f5d2f433bac7b', '208ba847068942e8a53966f5765b0a13', 'c0943ea614d547ba8b5b29503da49d93', '47876cef5b0f4a38889d2d2d1a6ac378', '441b309c470d4458bd93edeb76adcd07', 'af0fca4fb4954fd18e982db2ae21f05b', '8e924d6e57404131bcb4955f77d746f5', '5903e5d666094644949eaa626a009624', '7ba7f8ef9f4543d88d696a60e52538b9', '20b4cc00a9e0494691c9099de64bef11', '4b24dfcbeeb24792a05a3126b6083952', 'f395661119174b8d98aa026c1a41bb65', '1f5bad2a8ab94d52bd9024b1798f2a61', '8a4d55cfbf124c5881785daf6be80753', 'f260bad253f64867948c27db295b60d0', '4efde075a78e4313b98c9a3e03ef1710', 'c66cbb9d2bca49ae949fefde1026f473', '7be5c21189204fb9922cfd08c1baf09c', 'd786c98df4174d3aba4a52e825b7aa0e'];

// Mezclar el array de claves dos veces antes de empezar
function barajarClaves(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
  }
}

// Mezcla el array de claves dos veces
barajarClaves(apiKeys);
barajarClaves(apiKeys);

let currentApiKeyIndex = 0; // Inicia desde la primera clave de la lista barajada
let usedKeys = []; // Lista de claves ya usadas

function getGeoLocation(ip) {
  // Si hemos usado todas las claves, reiniciamos y volvemos a mezclar
  if (usedKeys.length === apiKeys.length) {
    usedKeys = [];
    barajarClaves(apiKeys);
    barajarClaves(apiKeys); // Barajar dos veces nuevamente
    currentApiKeyIndex = 0; // Volver a empezar desde el inicio
  }

  const apiKey = apiKeys[currentApiKeyIndex];
  usedKeys.push(currentApiKeyIndex); // Marcamos la clave como usada

  currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length; // Avanza al siguiente índice

  const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => ({
      country: data.country_name,
      region: data.state_prov,
      city: data.city
    }));
}

let connections = [];
let UsedNames = [];
const usedUsernames = {};




let playerIPs = [];
const jugadoresIngresados = new Set();

// Función para convertir a minúsculas
function toLowerCase(str) {
    return str.toLowerCase();
}

room.onPlayerJoin = function(player) {
  // Desencripta la IP del jugador
  const playerIp = decryptHex(player.conn);

  // Obtiene la ubicación y verifica si el país está prohibido
  getGeoLocation(playerIp).then(location => {
    // Si el país del jugador está en la lista de países prohibidos, lo expulsa
    if (PaisesProhibidos.includes(location.country)) {
      room.kickPlayer(player.id, "🚫 País restringido para jugar en esta sala 🚫", true);
      return; // Sale de la función para que no se ejecute el resto del código
    }
  verificarEspaciosDisponibles();
    // Verificar si el modo "Juegan Algunos" está activado y no hay espectadores AFK
    if (modoJueganAlgunos && room.getScores() && room.getScores().spectators === 0) {
        // Filtrar los jugadores para excluir a los AFK
        const activePlayers = room.getPlayerList().filter(p => !afkPlayerIDs.has(p.id));
        // Verificar el número de jugadores en cada equipo
        const blueTeamCount = activePlayers.filter(p => p.team === 1).length;
        const redTeamCount = activePlayers.filter(p => p.team === 2).length;

        // Mover al jugador al equipo con menos jugadores hasta que se alcance el máximo
        if (blueTeamCount <= maxPlayersPerTeam) {
            room.setPlayerTeam(player.id, 1); // Equipo azul (team = 1)
        } else if (redTeamCount <= maxPlayersPerTeam) {
            room.setPlayerTeam(player.id, 2); // Equipo rojo (team = 2)
        }
    }
const totalPlayers = room.getPlayerList().length;
const NombreDelJugadorNickname = player.name;

// Verifica si el nombre del jugador contiene "@" "#", o "*"
if (!containsInvalidCharacters(NombreDelJugadorNickname)) {
  let color = 65280; // Color verde por defecto
  let message = `🎮 ${NombreDelJugadorNickname} ha ingresado al host -- ${totalPlayers}/${maxPlayers} 🚀`;

  // Si la sala está llena, cambia el color a amarillo y agrega "SALA LLENA"
  if (totalPlayers >= maxPlayers) {
    color = 16776960; // Color amarillo en formato decimal
    message += "\n\n**[❌] SALA LLENA**";
  } else {
    // Si hay lugares disponibles, muestra cuántos quedan
    const remainingSpots = maxPlayers - totalPlayers;

    // Verifica si queda solo 1 lugar
    if (remainingSpots === 1) {
      message += `\n\n**[🟢] QUEDA 1 LUGAR**`;
    } else {
      message += `\n\n**[🟢] QUEDAN ${remainingSpots} LUGARES**`;
    }
  }

  // Añadir estado de la sala (cerrada o abierta)
  if (salaCerrada) {
    message += `\n\n**🔒 La sala está momentáneamente con contraseña para reservarles el lugar a los administradores.**`;
  }

  // Verifica si el host tiene contraseña
  if (PasswordDelHost !== null && PasswordDelHost !== "") {
    message += `\n\n**🔒 ESTE HOST TIENE CONTRASEÑA**`;
  } else {
    message += `\n\n**🌍 HOST PÚBLICO**`;
  }

  sendBoleteroToDiscord(message, roomName, roomLink, color);
}






    // Recuperar playerFiguraCount almacenado en localStorage
    const storedPlayerFiguraCount = JSON.parse(localStorage.getItem('playerFiguraCount')) || {};

    // Si el jugador tiene un contador almacenado, recuperarlo
    if (storedPlayerFiguraCount[player.name]) {
        playerFiguraCount[player.name] = storedPlayerFiguraCount[player.name];
    }
   // Verificar si el jugador tiene playerCleanSheets almacenado en localStorage
    if (localStorage.getItem(player.name + '_cleanSheets')) {
        playerCleanSheets[player.name] = parseInt(localStorage.getItem(player.name + '_cleanSheets'));
    }
    const jugadorName = player.name;
  playerMinutesPlayed[jugadorName] = playerMinutesPlayed[jugadorName] || 0;
  playerGoalkeeperTime[jugadorName] = playerGoalkeeperTime[jugadorName] || 0;

    // Verificar si hay datos almacenados en localStorage para el jugador
    if (localStorage.getItem('totalPlayerGoals') && JSON.parse(localStorage.getItem('totalPlayerGoals'))[jugadorName]) {
        // Recuperar los datos almacenados
        totalPlayerGoals = JSON.parse(localStorage.getItem('totalPlayerGoals'));
        totalPlayerAssists = JSON.parse(localStorage.getItem('totalPlayerAssists'));
        totalPlayerPoints = JSON.parse(localStorage.getItem('totalPlayerPoints'));

        // Actualizar las estadísticas del juego actual para el jugador recién unido
        playerGoals2[jugadorName] = totalPlayerGoals[jugadorName] || 0;
        playerAssists2[jugadorName] = totalPlayerAssists[jugadorName] || 0;
        actualizarPuntos(jugadorName);
    }
  if (room.getPlayerList().length >= MIN_PLAYERS_FOR_MAP_VOTE) {
    room.sendAnnouncement(`[💡] ${player.name}, la votación para elegir mapa está disponible. ¡Escribe "!votarmapa nombre_del_mapa" para votar! 🗳️`, player.id, 0xFFFFFF, 'bold', 0);
  } else {
    room.sendAnnouncement(`[🗳️] ${player.name} actualmente hay menos de ${MIN_PLAYERS_FOR_MAP_VOTE} jugadores en el host para la votación de mapa. La votación no puede iniciar. ❌`, player.id, 0xFF0000, 'normal', 0);
  }
    const NickNamedelJugador = player.name;

    // Verificar si el jugador ha ingresado antes
    if (!jugadoresIngresados.has(NickNamedelJugador)) {
        // Agregar el nombre del jugador al conjunto
        jugadoresIngresados.add(NickNamedelJugador);

        // Recuperar estadísticas almacenadas en localStorage
        const storedStats = localStorage.getItem(NickNamedelJugador);
        if (storedStats) {
            playerStats[NickNamedelJugador] = JSON.parse(storedStats);
        } else {
            // Asignar estadísticas predeterminadas si no hay almacenadas
            playerStats[NickNamedelJugador] = {
                victories: 0,
                draws: 0,
                defeats: 0,
                totalGames: 0,
                currentStreak: 0,
                highestStreak: 0,
                gameResults: []
            };
        }
    }
    // Verifica si el nombre del jugador está en la lista de nicknames prohibidos
    if (NicknamesPROHIBIDOS.includes(player.name)) {
        // Expulsa al jugador con un mensaje de razón
        room.kickPlayer(player.id, "NICKNAME PROHIBIDO 🚫", false);
    }
    if (AdministradoresDelHost.includes(player.name)) {
        room.setPlayerAdmin(player.id, true);
    }
    if (automatizadoActivado) {
        activarModoAutomatizado();
    }
    
    // Verifica si el nombre de usuario se ha utilizado previamente con otro 'auth'
    if (usedUsernames[player.name] && usedUsernames[player.name] !== player.auth) {
        // Expulsa al jugador si el nombre de usuario se ha utilizado previamente con un 'auth' diferente
        room.kickPlayer(player.id, "🚫 Ese NICKNAME ya está en uso por otro jugador 🚫", false);
    } else {
        // Almacena el nombre de usuario y su 'auth' en el registro
        usedUsernames[player.name] = player.auth;
    }

    if (room.getPlayerList().length >= MIN_PLAYERS_FOR_ADMIN_VOTE) {
        room.sendAnnouncement(`[💡] ${player.name} puedes escribir "!admin ID" para votar a un jugador para que sea administrador. 🗳️`, player.id, 0xFFFFFF, 'bold', 0);
        updateAdminVotesNeeded();
    } else {
        room.sendAnnouncement(`[🗳️] ${player.name} actualmente hay menos de ${MIN_PLAYERS_FOR_ADMIN_VOTE} jugadores en el host para la votación de administrador. La votación no puede iniciar. ❌`, player.id, 0xFF0000, 'normal', 0);
    }

    if (room.getPlayerList().length >= MIN_PLAYERS_FOR_KICK_VOTE) {
        room.sendAnnouncement(`[💡] ${player.name} puedes escribir "!expulsar ID" para votar la expulsión de un jugador. 🗳️`, player.id, 0xFFFFFF, 'bold', 0);
        updateKickVotesNeeded();
    } else {
        room.sendAnnouncement(`[🗳️]  ${player.name} actualmente hay menos de ${MIN_PLAYERS_FOR_KICK_VOTE} jugadores en el host para la votación de expulsión. La votación no puede iniciar. ❌👥`, player.id, 0xFF0000, 'normal', 0);
    }

    // Verificar si el "Modo Juegan Todos" está activado
    if (modoJueganTodos) {
        // Verificar el número de jugadores en cada equipo
        const blueTeamCount = room.getPlayerList().filter(p => p.team === 1).length;
        const redTeamCount = room.getPlayerList().filter(p => p.team === 2).length;

        // Asignar al jugador al equipo con menos jugadores
        if (blueTeamCount <= redTeamCount) {
            room.setPlayerTeam(player.id, 1); // Equipo azul (team = 1)
        } else {
            room.setPlayerTeam(player.id, 2); // Equipo rojo (team = 2)
        }
    }

  if (IpPlayers.includes(decryptHex(player.conn))) {
    room.kickPlayer(player.id, MensajeBaneoPorIp, true);
    return;
  }

    CreatePlayer(player);
    GetPlayer(player.id).auth = player.auth;
    GetPlayer(player.id).conn = player.conn;
    conexion.push([player.id, player.name, player.auth, player.conn]);
    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ➡️ " + player.name + " [" + player.id + "] has joined. (auth: " + player.auth + " | conn: " + player.conn + ")");
    GetPlayer(player.id).jointime = Date.now();

    if (localStorage.getItem(player.auth) == null) {
        var playerObject = { auth: player.auth, votes: 0 };
        localStorage.setItem(player.auth, JSON.stringify(playerObject));
    }
    if (toLowerCase(BanearIPsDuplicadas) === "si") {
        let conn = connections.find(a => a[1] === player.conn);
        if (conn) {
            room.kickPlayer(player.id, "🚫 Otro jugador tiene tu misma IP. No se permite duplicados.", true);
        } else {
            connections.push([player.id, player.conn]);
        }
    } else {
        connections.push([player.id, player.conn]);
    }

    UsedNames.push({ name: player.name, conn: player.conn });
    // Obtén la lista de jugadores en la sala
    const players = room.getPlayerList();
    let playerName = player.name.replace(/ /g, "_");
    // Verifica si hay un administrador en la sala
    const adminPlayer = players.find(player => player.admin);
    playerIPs.push({ nickname: player.name, ip: decryptHex(player.conn) });

getGeoLocation(decryptHex(player.conn)).then(location => {
    // Construir la parte del anuncio que siempre se muestra
    let announcementPart = `@${playerName}\n`;

    // Convertir el valor de MostrarIps a minúsculas
    const mostrarIpsLowerCase = MostrarIps.toLowerCase();

    // Verificar si se debe mostrar la dirección IP
    if (mostrarIpsLowerCase === "si") {
        announcementPart += `🌐🔒 IP Pública: ${decryptHex(player.conn)}\n`;
    }

    // Agregar la parte de la ubicación
    announcementPart += `🗺️ Provincia: ${location.region} ➖ 🏙️ Ciudad: ${location.city}`;

    if (adminPlayer && adminPlayer.id) {
        room.sendAnnouncement(announcementPart, adminPlayer.id, 0x19FF00, 'bold', 0);
    } else {
        // Manejar el caso en el que adminPlayer no está definido o no tiene una propiedad id
        console.log("No se encontró ningún administrador en la sala.");
        // También puedes optar por enviar el anuncio a todos los jugadores en lugar de a un administrador específico
        // room.sendAnnouncement(announcementPart, null, 0x19FF00, 'bold', 0);
    }
});

    getGeoLocation(decryptHex(player.conn)).then(location => {
        // Construir la parte del anuncio que siempre se muestra
        let announcementPart = `📛 Nickname: @${playerName} ➖ 🌎 Pais: ${location.country}`;

        // Enviar el anuncio
        room.sendAnnouncement(announcementPart, null, 0x19FF00, 'normal', 0);
    });
    setTimeout(function () {
        room.sendAnnouncement("⚽️ ¡EQUIPOS SELECCIONADOS! ⚔️ \n\nEquipo Rojo 🔴: " + teamRed + "  vs  Equipo Azul 🔵: " + teamBlue + " \n\n¡Que empiece el juego! 🎉⚽️", player.id, 0xA1E9AE, "normal", 0);
    }, 3000);

// Saludos cortos típicos argentinos
const shortGreetings = [
  "⚽ ¡Hola @" + playerName + "! ¿Todo bien?",
  "⚽️ ¡Qué onda @" + playerName + "?",
  "⚽ ¡Todo piola @" + playerName + "?",
  "👾 ¡¿Cómo va, @" + playerName + "?",
  "⚽ ¡Hey @" + playerName + "! ¿Cómo andás?",
  "⚽ ¡Qué hacés @" + playerName + "?",
  "🏆 ¡Hey @" + playerName + "! ¿Qué contas?",
  "⚽ ¡Qué tal, @" + playerName + "?"
];

const randomGreeting = shortGreetings[Math.floor(Math.random() * shortGreetings.length)];

const additionalPhrases = [
  "¡A meter huevo! ⚡",
  "¡Rompela toda, crack! 🚀",
  "¡Dejá la vida en la cancha! 🌟",
  "¡A demostrar quién manda! 💪",
  "¡Hoy la rompes! 🎯",
  "¡Jugá con el corazón! ❤️",
  "¡A dejar huella en el césped! 🌱",
  "¡Gambeta y magia en cada jugada! ✨",
  "¡A jugar como un campeón! 🏆",
  "¡Destaca en el campo, @" + playerName + "! 🌟",
  "¡Hoy es tu día, a brillar en la cancha! 🌈",
  "¡Hazte leyenda en el Haxball, @" + playerName + "! 🏅",
  "¡La victoria te espera, no te rindas! 🏁"
];

const randomPhrase = additionalPhrases[Math.floor(Math.random() * additionalPhrases.length)];

setTimeout(function () {
  room.sendAnnouncement(randomGreeting + " " + randomPhrase + " ¡Escribe '!help' en el chat para ver los comandos! ⚽", player.id, 0xA1E9AE, "normal", 0);
}, 5000);

setTimeout(function () {
  room.sendAnnouncement(MensajeDeBienvenida, player.id, `0x${colormensaje}`, `${TipoDeLetra}`, 0);  
}, 7000);
  });

};

// Función para actualizar la cantidad de votos necesarios para la votación de administrador
function updateAdminVotesNeeded() {
  if (adminVotingActive) {
    const votesNeeded =  Math.ceil(room.getPlayerList().length * (PorcentajeDeVotosAdmin / 100)); // Calcula los votos según el porcentaje
    room.sendAnnouncement(`📢 ¡La cantidad de votos necesarios para la votación de administrador ha sido actualizada a ${votesNeeded}! 🗳️`, null, 0xFF0000);
  }
}

// Función para actualizar la cantidad de votos necesarios para la votación de expulsión
function updateKickVotesNeeded() {
  if (kickVotingActive) {
    const votesNeeded =  Math.ceil(room.getPlayerList().length * (PorcentajeDeVotosBan / 100)); // Calcula los votos según el porcentaje
    room.sendAnnouncement(`📢 ¡La cantidad de votos necesarios para la votación de expulsión ha sido actualizada a ${votesNeeded}! 🗳️`, null, 0xFF0000);
  }
}

// Función para registrar tiempo al cambiar de equipo
function registerPlayerTime(playerId, team) {
    const currentTime = Date.now();

    if (!playerCurrentMatchTime[playerId]) {
        playerCurrentMatchTime[playerId] = { joinTime: null, totalTime: 0 };
    }

    // Si estaba en un equipo, sumar tiempo jugado
    if (playerCurrentMatchTime[playerId].joinTime) {
        const elapsedTime = Math.floor((currentTime - playerCurrentMatchTime[playerId].joinTime) / 1000); // Tiempo en segundos
        playerCurrentMatchTime[playerId].totalTime += elapsedTime;
    }

    // Si el jugador se une a un equipo, registrar tiempo de inicio
    if (team !== 0) {
        playerCurrentMatchTime[playerId].joinTime = currentTime;
    } else {
        playerCurrentMatchTime[playerId].joinTime = null; // Si va a espectadores, no registra más tiempo
    }
}

// Función para manejar el evento de victoria de equipo
function handleTeamVictory() {
    if (ganasigueEnabled) {
        pauseGameTick();
        autoBalancePaused = true;

        setTimeout(function() {
            const GolesTotalesRED = room.getScores().red;
            const GolesTotalesBLUE = room.getScores().blue;
            const totalMatchTime = Math.floor((Date.now() - matchStartTime) / 1000); // Tiempo total del partido

            var winningTeam = GolesTotalesRED > GolesTotalesBLUE ? 1 : 2;
            var losingTeam = winningTeam === 1 ? 2 : 1;

            // Mover a jugadores del equipo perdedor a espectadores en orden inverso
            setTimeout(function() {
                var losingTeamPlayers = room.getPlayerList()
                    .filter(player => player.team === losingTeam)
                    .reverse();

                losingTeamPlayers.forEach(player => {
                    registerPlayerTime(player.id, 0); // Registrar el cambio
                    room.setPlayerTeam(player.id, 0);
                });
            }, 400);

            // Mover jugadores a nuevo equipo perdedor con prioridad a los que jugaron menos del 50%
            setTimeout(function() {
                var winningPlayers = room.getPlayerList().filter(player => player.team === winningTeam).length;

                // Espectadores no AFK
                var spectatorsNotAFK = room.getPlayerList().filter(player => player.team === 0 && !afkPlayerIDs.has(player.id));

                // Priorizar jugadores que jugaron menos del 50% del partido
                var prioritizedPlayers = spectatorsNotAFK.sort((a, b) => {
                    const aTimePlayed = playerCurrentMatchTime[a.id]?.totalTime || 0;
                    const bTimePlayed = playerCurrentMatchTime[b.id]?.totalTime || 0;

                    const aPriority = aTimePlayed < totalMatchTime / 2 ? -1 : 1;
                    const bPriority = bTimePlayed < totalMatchTime / 2 ? -1 : 1;

                    return aPriority - bPriority; // Prioridad a los que jugaron menos del 50%
                });

                // Mover jugadores prioritarios al equipo perdedor
                prioritizedPlayers.slice(0, winningPlayers).forEach(player => {
                    registerPlayerTime(player.id, losingTeam); // Registrar el cambio
                    room.setPlayerTeam(player.id, losingTeam);
                });
            }, 1000);

            // Reiniciar el juego
            setTimeout(function() {
                room.stopGame();
                room.startGame();
                autoBalancePaused = false;
                resumeGameTick();
            }, 2600);
        }, 3000);
    }
}




room.onTeamVictory = function (scores) {
    handleTeamVictory();

    // Obtener el número de goles de cada equipo
    const GolesTotalesRED = room.getScores().red;
    const GolesTotalesBLUE = room.getScores().blue;

    // Verificar si el arquero del equipo Azul mantuvo la valla invicta
    if (GolesTotalesRED === 0 && ArqueroBLUE) {
        playerCleanSheets[ArqueroBLUE.name] = (playerCleanSheets[ArqueroBLUE.name] || 0) + 1;
    }
    // Verificar si el arquero del equipo Rojo mantuvo la valla invicta
    if (GolesTotalesBLUE === 0 && ArqueroRED) {
        playerCleanSheets[ArqueroRED.name] = (playerCleanSheets[ArqueroRED.name] || 0) + 1;
    }

    // Guardar playerCleanSheets en localStorage
    localStorage.setItem('playerCleanSheets', JSON.stringify(playerCleanSheets));

    // Obtener los nombres de los jugadores en cada equipo
    const redTeamPlayerNames = room.getPlayerList().filter(player => player.team === 1).map(player => player.name);
    const blueTeamPlayerNames = room.getPlayerList().filter(player => player.team === 2).map(player => player.name);

    // Obtener el número de goles de cada equipo
    const redTeamGoals = room.getScores().red;
    const blueTeamGoals = room.getScores().blue;

    // Actualizar las estadísticas para cada jugador en el equipo rojo
    redTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, redTeamGoals > blueTeamGoals ? 'victory' : (redTeamGoals < blueTeamGoals ? 'defeat' : 'draw'));
    });

    // Actualizar las estadísticas para cada jugador en el equipo azul
    blueTeamPlayerNames.forEach(playerName => {
        updatePlayerStats(playerName, blueTeamGoals > redTeamGoals ? 'victory' : (blueTeamGoals < redTeamGoals ? 'defeat' : 'draw'));
    });
         setTimeout(function () {
    // Seleccionar la Figura del partido
    const figuraDelPartido = getFiguraDelPartido();
    enviarAnuncioFiguraDelPartido(figuraDelPartido);
    var teamRedScore = scorerNumber(scores.red);
    var teamBlueScore = scorerNumber(scores.blue);
    teamPossFun();
    room.sendAnnouncement("███████████████████ " + teamRed + "  " + teamRedScore + "      🞬      " + teamBlueScore + "  " + teamBlue + " ███████████████████ ", null, 0xffd559, "normal", 1);
    // ENVIAR AL DISCORD DESPÚES DE 300 milisegundos
    setTimeout(function () {
    sendDiscordWebhook();
    room.sendAnnouncement("📼 La grabación de la partida fue enviada a " + GrabacionesDiscord + " . ¡Bien jugado! 🎉");
    }, 150);

        }, 800);
    // Aplicar cambios de configuración de mapa y límites al final del juego (cuando un equipo gana)
    if (configuracionActual !== null) {
        setTimeout(function() {
            room.setCustomStadium(configuracionActual.mapa);
            room.setScoreLimit(configuracionActual.scoreLimit);
            room.setTimeLimit(configuracionActual.timeLimit);
            RSRMap = false;
        }, tiempoEsperaCambio);
    }
    if (FairPlayActivado) {
        var scoreDifference = Math.abs(scores.red - scores.blue);

        if (scoreDifference === 1) {
            setTimeout(function () {
                room.stopGame();

                var players = room.getPlayerList().filter(function (player) {
                    return player.id !== 0;
                });

                if (players.length === 0) {
                    return false;
                }

                players.forEach(function (player) {
                    if (player.team === 1) {
                        room.setPlayerTeam(player.id, 2);
                    }
                    if (player.team === 2) {
                        room.setPlayerTeam(player.id, 1);
                    }
                });

                room.startGame();
            }, 4500); // Pausa de 4 segundos (4500 milisegundos)
        } else if (scoreDifference === 2) {
            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                room.startGame();
            }, 4500); // Pausa de 4 segundos (4500 milisegundos)
        } else if (scoreDifference >= 3) {
            setTimeout(function () {
                room.stopGame();
                shuffleTeams();
                const players = room.getPlayerList();

    // Filtrar a los jugadores que están en el campo
    const activePlayers = players.filter(p => p.team !== 0 && p.position !== null);

    // Ordenar a los jugadores activos por nivel de mayor a menor
    const sortedPlayers = activePlayers.sort((a, b) => {
        const aPoints = (totalPlayerGoals[a.name] || 0) + ((totalPlayerAssists[a.name] || 0) * 0.7);
        const bPoints = (totalPlayerGoals[b.name] || 0) + ((totalPlayerAssists[b.name] || 0) * 0.7);
        return bPoints - aPoints;
    });

    // Distribuir a los jugadores en dos equipos equilibrados
    const team1 = [];
    const team2 = [];
    let totalPointsTeam1 = 0;
    let totalPointsTeam2 = 0;

    // Iterar sobre los jugadores y asignarlos a los equipos de manera equitativa
    for (let i = 0; i < sortedPlayers.length; i++) {
        const currentPlayer = sortedPlayers[i];
        const currentPlayerPoints = (totalPlayerGoals[currentPlayer.name] || 0) + ((totalPlayerAssists[currentPlayer.name] || 0) * 0.7);

        if (totalPointsTeam1 <= totalPointsTeam2) {
            team1.push(currentPlayer);
            totalPointsTeam1 += currentPlayerPoints;
        } else {
            team2.push(currentPlayer);
            totalPointsTeam2 += currentPlayerPoints;
        }
    }

    // Asignar los equipos a los jugadores
    team1.forEach(player => room.setPlayerTeam(player.id, 1));
    team2.forEach(player => room.setPlayerTeam(player.id, 2));
    balanceTeams();
}, 3000); // PAUSA DE 3 SEGUNDOS
setTimeout(function() {
    balanceTeams();
}, 4000); // Esperar 
setTimeout(function() {
    room.startGame();
}, 4500); // Esperar 

        }
    }
}


function rfc3986EncodeURIComponent(_0x23ab4f) {
	var _0x151c08 = _0x3c81f9;
	return encodeURIComponent(_0x23ab4f)[_0x151c08(0x17d)](/[!'()*]/g, escape);
}

// Lista de estadios permitidos
const allowedStadiums = [
    "👑 RᴇᴀʟFᴜᴛsᴀʟ⚽",
    "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯² 🏆 𝗚𝗟𝗛",
    "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯³ 🏆 𝗚𝗟𝗛",
    "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁴ 🏆 𝗚𝗟𝗛",
    "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁵ 🏆 𝗚𝗟𝗛",
    "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁷ 🏆 𝗚𝗟𝗛",
    "⚽️ Futsal x5 👑",
    "🏆 CAMPEONES 🌿⭐🌿",
    "🌟 ɢᴀʟᴀ ᴅᴇ ᴘʀᴇᴍɪᴀᴄɪᴏɴᴇs 🎖️"
];


room.onStadiumChange = function(newStadiumName, byPlayer) {
    // Verifica si el nuevo estadio no está en la lista permitida
    if (!allowedStadiums.includes(newStadiumName)) {
	RSRMap = false;
 	currentMap = "❔ Desconocido";
    }
};
