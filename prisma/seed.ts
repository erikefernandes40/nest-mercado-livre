import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

let users = [
  {
    "id":"1",
		"email": "erickfernando@gmail.com",
		"password": "0a$Vj*!cOrvp",
		"name": "erick original"
  },
  {
  "id":"2",
  "email": "erickfernando2@gmail.com",
  "password": "0a$Vj*!cOrvp",
  "name": "erick 2"
  },
  {
  "id":"3",
  "email": "erickfefernando3@gmail.com",
  "password": "0a$Vj*!cOrvp",
  "name": "erick 3"
  },
  {
  "id":"6",
  "email": "erickfefffrnando4@gmail.com",
  "password": "0a$Vj*!cOrvp",
  "name": "erick 4"
}
]

let categories = [
  {
    "id": "MLB5672",
    "name": "Acessórios para Veículos"
  },
  {
    "id": "MLB271599",
    "name": "Agro"
  },
  {
    "id": "MLB1403",
    "name": "Alimentos e Bebidas"
  },
  {
    "id": "MLB1071",
    "name": "Animais"
  },
  {
    "id": "MLB1367",
    "name": "Antiguidades e Coleções"
  },
  {
    "id": "MLB1368",
    "name": "Arte, Papelaria e Armarinho"
  },
  {
    "id": "MLB1384",
    "name": "Bebês"
  },
  {
    "id": "MLB1246",
    "name": "Beleza e Cuidado Pessoal"
  },
  {
    "id": "MLB1132",
    "name": "Brinquedos e Hobbies"
  },
  {
    "id": "MLB1430",
    "name": "Calçados, Roupas e Bolsas"
  },
  {
    "id": "MLB1039",
    "name": "Câmeras e Acessórios"
  },
  {
    "id": "MLB1743",
    "name": "Carros, Motos e Outros"
  },
  {
    "id": "MLB1574",
    "name": "Casa, Móveis e Decoração"
  },
  {
    "id": "MLB1051",
    "name": "Celulares e Telefones"
  },
  {
    "id": "MLB1500",
    "name": "Construção"
  },
  {
    "id": "MLB5726",
    "name": "Eletrodomésticos"
  },
  {
    "id": "MLB1000",
    "name": "Eletrônicos, Áudio e Vídeo"
  },
  {
    "id": "MLB1276",
    "name": "Esportes e Fitness"
  },
  {
    "id": "MLB263532",
    "name": "Ferramentas"
  },
  {
    "id": "MLB12404",
    "name": "Festas e Lembrancinhas"
  },
  {
    "id": "MLB1144",
    "name": "Games"
  },
  {
    "id": "MLB1459",
    "name": "Imóveis"
  },
  {
    "id": "MLB1499",
    "name": "Indústria e Comércio"
  },
  {
    "id": "MLB1648",
    "name": "Informática"
  },
  {
    "id": "MLB218519",
    "name": "Ingressos"
  },
  {
    "id": "MLB1182",
    "name": "Instrumentos Musicais"
  },
  {
    "id": "MLB3937",
    "name": "Joias e Relógios"
  },
  {
    "id": "MLB1196",
    "name": "Livros, Revistas e Comics"
  },
  {
    "id": "MLB1168",
    "name": "Música, Filmes e Seriados"
  },
  {
    "id": "MLB264586",
    "name": "Saúde"
  },
  {
    "id": "MLB1540",
    "name": "Serviços"
  },
  {
    "id": "MLB1953",
    "name": "Mais Categorias"
  }
]

let products = [
  { 
    "id": "MLB1889533817",
    "title": "Máquina De Solda Inverter Titanium Ti150 Preta 220v",
    "price": 395.9,
    "available_quantity": 594,
    "category_id": "MLB271599"
  },
   {
    "id": "MLB1524972038",
    "title": "Fecho Do Capo Agrale 4100",
    "price": 10,
    "available_quantity": 1,
    "category_id": "MLB271599"
   },
   {
    "id": "MLB2002183561",
    "title": "Bomba Periférica Amanco Xkm80 1hp Verde 220v",
    "price": 469,
    "available_quantity": 118,
    "category_id": "MLB271599"  
   },
   {
    "id": "MLB1891035355",
    "title": "Lavadora De Alta Pressão Kärcher K2 Portable Black Com 1600psi De Pressão Máxima 127v",
    "price": 511.9,
    "available_quantity": 239,
    "category_id": "MLB271599"
   },
   {
    "id": "MLB1542990967",
    "title": "10x Farol De Milha 14 Led 42w 12v/24v Redondo Off-road 6000k",
    "price": 202.2,
    "available_quantity": 5000,
    "category_id": "MLB5672"
   },
   {
    "id": "MLB1985412718",
    "title": "Acessório Carro Apoio Braço Encosto Descanso Porta Objetos",
    "price": 154.9,
    "available_quantity": 50000,
    "category_id": "MLB5672"
   },
   {
    "id": "MLB2096085553",
    "title": "Cadeira Infantil Para Carro Fisher-price All-stages Fix 2.0 Cinza",
    "price": 934,
    "available_quantity": 27,
    "category_id": "MLB5672"
   },
   {
    "id": "MLB1903752342",
    "title": "Geladeira Portátil Para Caminhão 31 Litros Resfriar 12/24v",
    "price": 2599,
    "available_quantity": 50,
    "category_id": "MLB5672"
   },
   {
    "id": "MLB2015079901",
    "title": "Vinho Tinto Meio Seco Merlot Santa Helena Reservado 2018 Adega Viña San Pedro Tarapacá 750 Ml",
    "price": 26.9,
    "available_quantity": 242,
    "category_id": "MLB1403"
   },
   {
    "id": "MLB2003341763",
    "title": "Salgadinho De Batata Pringles Original 114 G",
    "price": 10.97,
    "available_quantity": 51,
    "category_id": "MLB1403"
   },
   {
    "id": "MLB2079560719",
    "title": "Whisky Americano Apple Jack Daniel's Garrafa 1l",
    "price": 159,
    "available_quantity": 7,
    "category_id": "MLB1403"
   },
   {
    "id": "MLB1840796626",
    "title": "Molho De Tomate Tradicional Heinz Em Sachê 250 G",
    "price": 2.05,
    "available_quantity": 56,
    "category_id": "MLB1403"
   },
   {
      "id": "MLB2007226267",
      "title": "Alimento Whiskas 1+ Para Gato Adulto Sabor Carne Ao Molho Em Sachê De 85g",
      "price": 2.48,
      "available_quantity": 421,
      "category_id": "MLB1071"
   },
   {
    "id": "MLB2083618981",
    "title": "Alimento Special Dog Premium Especial Para Cachorro Adulto Todos Os Tamanhos Sabor Carne Em Sachê De 100g",
    "price": 2.15,
    "available_quantity": 2738,
    "category_id": "MLB1071"
   },
   {
    "id": "MLB2087052196",
    "title": "Alimento Special Dog Premium Especial Para Cachorro Filhote Todos Os Tamanhos Sabor Frango Em Sachê De 100g",
    "price": 2.49,
    "available_quantity": 443,
    "category_id": "MLB1071"
   },
   {
    "id": "MLB1884404482",
    "title": "Máquina De Tosar Pelo Animais Cães E Gatos S/fio Km - 6188",
    "price": 104,
    "available_quantity": 500,
    "category_id": "MLB1071"
   },
   {
    "id": "MLB2020049099",
    "title": "Faca Gaucha Churrasco Aço Inox Cabo Curvo Chifre E Couro 10´",
    "price": 149.99,
    "available_quantity": 1,
     "category_id": "MLB1367"
   },
   {
    "id": "MLB1588511630",
    "title": "Cruz Crucifixo De Parede Madeira E Metal São Bento 34cm",
    "price": 29.9,
    "available_quantity": 50,
    "category_id": "MLB1367"
   },
   {
    "id": "MLB2163111958",
    "title": "Vitrola Vicini Toca Disco Vinil Maleta Bluetooth Usb Bivolt",
    "price": 399,
    "available_quantity": 500,
    "category_id": "MLB1367"
   },
   {
    "id": "MLB1343797934",
    "title": "Bandeira Do Brasil Grande 3 Panos (1,92x1,35)",
    "price": 150,
    "available_quantity": 50,
    "category_id": "MLB1367"
   },
   {
    "id": "MLB2118491714",
    "title": "Escova Para Lavar Condor",
    "price": 3.41,
    "available_quantity": 39,
    "category_id": "MLB1368"
   },
   {
    "id": "MLB2214828523",
    "title": "Rolo Adesivo Tira Pelos Scotch-brite 100mm X 3,1m Refil",
    "price": 13.86,
    "available_quantity": 13,
    "category_id": "MLB1368"
   },
   {
    "id": "MLB2021871572",
    "title": "Folha Papel De Seda Para Embalagem Roupas Sapatos 100 Folhas",
    "price": 29.45,
    "available_quantity": 500,
    "category_id": "MLB1368"
   },
   {
    "id": "MLB1849154870",
    "title": "Rolo Adesivo Tira Pelos Scotch-brite 100mm X 3,1m 21 Folhas",
    "price": 21.29,
    "available_quantity": 49,
    "category_id": "MLB1368"
   },
   {
    "id": "MLB2030412524",
    "title": "Creme Preventivo De Assaduras Sem Perfume Bepantol Baby Caixa 120g Grátis 20g Leve Mais Pague Menos",
    "price": 41.69,
    "available_quantity": 391,
    "category_id": "MLB1384"
   },
   {
    "id": "MLB1503675678",
    "title": "Fórmula Infantil Em Pó Sem Glúten Danone Aptamil Premium 2 Em Lata De 800g - 6 A 10 Meses",
    "price": 47,
    "available_quantity": 256,
    "category_id": "MLB1384"
   },
   {
    "id": "MLB1489868685",
    "title": "Fórmula Infantil Em Pó Sem Glúten Danone Aptamil Premium 1 Em Lata De 800g - 0 A 6 Meses",
    "price": 44.38,
    "available_quantity": 216,
    "category_id": "MLB1384"
   },
   {
    "id": "MLB1357644023",
    "title": "Body Bebê+mijão Liso E Estampado Kit C/28 Roupa Bebê Atacado",
    "price": 128.16,
    "available_quantity": 5000,
    "category_id": "MLB1384"
   },
   {
    "id": "MLB2195398578",
    "title": "Leave-in Cicatri Renov Elseve 50ml",
    "price": 12.99,
    "available_quantity": 78,
    "category_id": "MLB1246"
   },
   {
    "id": "MLB1798199147",
    "title": "Repelente Loção Xô Inseto Squeeze 200ml",
    "price": 9.8,
    "available_quantity": 643,
    "category_id": "MLB1246"
   },
   {
    "id": "MLB2154319798",
    "title": "Sabonete Barra Original Dove Caixa 90g",
    "price": 2.99,
    "available_quantity": 13,
    "category_id": "MLB1246"
   },
   {
    "id": "MLB2146121992",
    "title": "Barbeador Y Cortador De Cabelo Relaxmedic Rb-am6800a Prateado 110v/220v",
    "price": 266.91,
    "available_quantity": 80,
    "category_id": "MLB1246"
   },
   {
    "id": "MLB1905714571",
    "title": "Jogo De Mesa Imagem & Ação 2 Grow 01709",
    "price": 74.9,
    "available_quantity": 1,
    "category_id": "MLB1132"
   },
   {
    "id": "MLB2045418710",
    "title": "Kunai Kakashi Colar Tsunade Verde+ Balaclava+ Brinde Top",
    "price": 31.97,
    "available_quantity": 100,
    "category_id": "MLB1132"
   },
   {
    "id": "MLB2105039627",
    "title": "Cama Elástica Henri Trampolim Premium Click 2.44 M, Cor Da Tela Preta",
    "price": 1187,
    "available_quantity": 916,
    "category_id": "MLB1132"
   },
   {
    "id": "MLB1638803626",
    "title": "Carrinho Controle Remoto Jipe Max Road Recarregável 2motores",
    "price": 148.71,
    "available_quantity": 150,
    "category_id": "MLB1132"
   },
   {
    "id": "MLB1611854038",
    "title": "Kit Com 10 Calcinhas Francesinha Cós Alto Algodão Penteado",
    "price": 89.1,
    "available_quantity": 5000,
    "category_id": "MLB1430"
   },
   {
    "id": "MLB1960987627",
    "title": "Jaleco Feminino Acinturado Gola Padre Oxford Várias Cores",
    "price": 89.9,
    "available_quantity": 250,
    "category_id": "MLB1430"
   },
   {
    "id": "MLB1667296007",
    "title": "Blusa De Frio Lillo E Stitch Careta Animado Feminino Casaco",
    "price": 78.99,
    "available_quantity": 50000,
    "category_id": "MLB1430"
   },
   {
    "id": "MLB1941234743",
    "title": "Jaqueta Jeans Moda Feminina Blusa Desfiada Tik Tok",
    "price": 78.83,
    "available_quantity": 500,
    "category_id": "MLB1430"
  },
  {
    "id": "MLB2159603694",
    "title": " Canon Eos Kit M50 Mark Ii + Lente Ef-m 15-45mm F/3.5-6.3 Is Stm Mirrorless Cor Preto",
    "price": 6138,
    "available_quantity": 1,
    "category_id": "MLB1039"
  },
  {
    "id": "MLB1307873729",
    "title": "Iluminador Ring Ligth Anel Luz 26cm Make Fotos Com Tripé 1.60 Kit Completo Dimmer Selfie Youtuber Blogueiro Maquiagem",
    "price": 79.99,
    "available_quantity": 500,
    "category_id": "MLB1039"
  },
  {
    "id": "MLB1975050429",
    "title": "Câmera De Vídeo Sjcam Sj6 Legend 4k Ntsc/pal Black",
    "price": 828,
    "available_quantity": 1,
    "category_id": "MLB1039"
  },
  {
    "id": "MLB2648313893",
    "title": " Nikon D7500 Dslr Cor Preto",
    "price": 7590,
    "available_quantity": 1,
    "category_id": "MLB1039"
  },
  {
    "id": "MLB2643211975",
    "title": "Toyota Corolla Xei 2.0 Flex 16v Aut",
    "price": 114890,
    "available_quantity": 1,
    "category_id": "MLB1743"
  },
  {
    "id": "MLB2627476009",
    "title": "Bmw 320i Modern 2.0 Turbo 2013 Interior Bicolor Impecável",
    "price": 98900,
    "available_quantity": 1,
    "category_id": "MLB1743"
  },
  {
    "id": "MLB2604904134",
    "title": "Chevrolet S-10 Advantage 2008",
    "price": 51499,
    "available_quantity": 1,
    "category_id": "MLB1743"
  },
  {
    "id": "MLB2644764579",
    "title": "Jac J3 1.4 16v 5p Jac Motors",
    "price": 28900,
    "available_quantity": 1,
    "category_id": "MLB1743"
  },
  {
    "id": "MLB2003269576",
    "title": "Detergente Líquido Neutro Ypê 500ml",
    "price": 2.15,
    "available_quantity": 12645,
    "category_id": "MLB1574"
  },
  {
    "id": "MLB1894291898",
    "title": "Sabão Em Pó Omo Lavagem Perfeita Caixa 800 G",
    "price": 10.98,
    "available_quantity": 1943,
    "category_id": "MLB1574"
  },
  {
    "id": "MLB2014805686",
    "title": "Limpador Original Veja Multiuso 500ml Com 10% Desconto",
    "price": 4.55,
    "available_quantity": 986,
    "category_id": "MLB1574"
  },
  {
    "id": "MLB1307681381",
    "title": "Cortina Blackout Com Voil 4,00m X 2,70m Blecaute Em Tecido Para Quarto E Sala ",
    "price": 216.1,
    "available_quantity": 500,
    "category_id": "MLB1574"
  },
  {
    "id": "MLB1931826203",
    "title": "Samsung Galaxy A71 Dual Sim 128 Gb Azul 6 Gb Ram",
    "price": 1879,
    "available_quantity": 851,
    "category_id": "MLB1051"
  },
  {
    "id": "MLB2156512006",
    "title": "Tectoy On Dual Sim 128 Gb Azul-camaleón 4 Gb Ram",
    "price": 988,
    "available_quantity": 13,
    "category_id": "MLB1051"
  },
  {
    "id": "MLB1987088151",
    "title": " Moto G20 Dual Sim 64 Gb Pink 4 Gb Ram",
    "price": 1246.96,
    "available_quantity": 737,
    "category_id": "MLB1051"
  },
  {
    "id": "MLB1867717610",
    "title": "Samsung Galaxy A32 Dual Sim 128 Gb Preto 4 Gb Ram",
    "price": 1499,
    "available_quantity": 157,
    "category_id": "MLB1051"
  },
  {
    "id": "MLB1797660426",
    "title": "Fio Cabo Elétrico Flexível 2,5mm X 100m Colorido Construção",
    "price": 110.47,
    "available_quantity": 5000,
    "category_id": "MLB1500"
  },
  {
    "id": "MLB1909230090",
    "title": "Alicate Amperímetro Digital Fluke 302+ 400a ",
    "price": 334.87,
    "available_quantity": 267,
    "category_id": "MLB1500"
  },
  {
    "id": "MLB2030213305",
    "title": "Chuveiro Elétrico De Parede Lorenzetti Duo Shower Quadra Multitemperaturas Branco 7500w 220v",
    "price": 195,
    "available_quantity": 220,
    "category_id": "MLB1500"
  },
  {
    "id": "MLB1953448706",
    "title": "Chuveiro Elétrico De Parede Lorenzetti Acqua Ultra Duo Branco-cromado 7800w 220v",
    "price": 455.94,
    "available_quantity": 100,
    "category_id": "MLB1500"
  },
  {
    "id": "MLB1725601784",
    "title": "Fritadeira Industrial Elétrica Metvisa Fie.20 38l 60 Hz 220v",
    "price": 1936.48,
    "available_quantity": 2000,
    "category_id": "MLB5726"
  },
  {
    "id": "MLB2047976831",
    "title": "Fogão De Piso Brastemp Clean Bfo4n Gás Engarrafado 4 Queimadores Branco 127v/220v Porta Com Visor 61.5l",
    "price": 1199,
    "available_quantity": 512,
    "category_id": "MLB5726"
  },
  {
    "id": "MLB2025348691",
    "title": "Máquina De Lavar Automática Brastemp Bwk12a Branca 12kg 110 v",
    "price": 2099,
    "available_quantity": 1401,
    "category_id": "MLB5726"
  },
  {
    "id": "MLB2025387354",
    "title": "Geladeira Frost Free Brastemp Brm44h Branca Com Freezer 375l 127v",
    "price": 2899,
    "available_quantity": 449,
    "category_id": "MLB5726"
  },
  {
    "id": "MLB1492188378",
    "title": "Alto-falante Briwax Fbx-103 Portátil Com Bluetooth Preto ",
    "price": 278,
    "available_quantity": 402,
    "category_id": "MLB1000"
  },
  {
    "id": "MLB2125093693",
    "title": "Smart Tv Philips 6800 Series 43pfg6825/78 Led Full Hd 43 110v/240v",
    "price": 1999,
    "available_quantity": 639,
    "category_id": "MLB1000"
  },
  {
    "id": "MLB2121414267",
    "title": "Alto-falante Philco Go Pbs25bt Portátil Com Bluetooth Preto 110v/220v ",
    "price": 119,
    "available_quantity": 1060,
    "category_id": "MLB1000"
  },
  {
    "id": "MLB2128522207",
    "title": "Smart Tv Philco Ptv32g70rch Led Hd 32 110v/220v",
    "price": 1286,
    "available_quantity": 2229,
    "category_id": "MLB1000"
  },
  {
    "id": "MLB1879323448",
    "title": "Lanterna X900 Zoom Recarregável",
    "price": 66.39,
    "available_quantity": 250,
    "category_id": "MLB1276"
  },
  {
    "id": "MLB1933116168",
    "title": "Kit 5 Camisetas Novastreet Dry Fit Anti Suor - Linha Premium",
    "price": 137.9,
    "available_quantity": 500,
    "category_id": "MLB1276"
  },
  {
    "id": "MLB963396589",
    "title": "Manguito Manga Proteção Solar Braços Motoqueiro Ciclismo",
    "price": 19.99,
    "available_quantity": 500,
    "category_id": "MLB1276"
  },
  {
    "id": "MLB2106498887",
    "title": "Suplemento Em Pó Black Skull Creatine Turbo Creatina Em Pote De 150g",
    "price": 37.69,
    "available_quantity": 22,
    "category_id": "MLB1276"
  },
  {
    "id": "MLB1219852569",
    "title": "Jogo Kit De Soquete 57 Peças 1/4 Catraca Chave Allen Stels",
    "price": 170.05,
    "available_quantity": 250,
    "category_id": "MLB263532"
  },
  {
    "id": "MLB1226513782",
    "title": "Jogo Kit Caixa Ferramentas 129 Pçs Estojo Plastico Maleta",
    "price": 98,
    "available_quantity": 500,
    "category_id": "MLB263532"
  },
  {      
    "id": "MLB1659744584",
    "title": "Esmerilhadeira Angular Hammer Em-710-1 Preta 710 W 110 V",
    "price": 165,
    "available_quantity": 6,
    "category_id": "MLB263532"
  },
  {
    "id": "MLB1931025195",
    "title": "Furadeira Martelete Sem Fio De 10mm Vonder Pfv 012i + Acessórios Com Maleta De Transporte 100v/240v 50hz/60hz",
    "price": 270,
    "available_quantity": 6,
    "category_id": "MLB263532"
  },
  {
    "id": "MLB1343852761",
    "title": "Pó Para Decoração Fab - Escolha As Cores",
    "price": 9.99,
    "available_quantity": 250,
    "category_id": "MLB12404"
  },
  {
    "id": "MLB1541709574",
    "title": "Corante Alimentício Soft Gel 25g Mix - Escolha A Cor",
    "price": 8.75,
    "available_quantity": 150,
    "category_id": "MLB12404"
  },
  {
    "id": "MLB1338446967",
    "title": "Lembrancinha Balde De Pipoca + Copo Personalizado 20 Itens",
    "price": 78.99,
    "available_quantity": 5000,
    "category_id": "MLB12404"
  },
  {
    "id": "MLB2090776024",
    "title": "100 Mini Aromatizador Lembrancinha Festa Casamento Noivado",
    "price": 71.9,
    "available_quantity": 50000,
    "category_id": "MLB12404"
  },
  {
    "id": "MLB2634763255",
    "title": "Controle Joystick Sem Fio Microsoft Xbox Xbox Series X|s Controller + Usb-c Cable Carbon Black",
    "price": 505.43,
    "available_quantity": 178,
    "category_id": "MLB1144"
  },
  {
    "id": "MLB2612840698",
    "title": "Microsoft Xbox Series S 512gb Standard Cor Branco",
    "price": 2313,
    "available_quantity": 1,
    "category_id": "MLB1144"
  },
  {
    "id": "MLB2018751528",
    "title": "Marvel's Spider-man Game Of The Year Edition Sony Ps4 Físico",
    "price": 126,
    "available_quantity": 91,
    "category_id": "MLB1144"
  },
  {
    "id": "MLB2159970801",
    "title": "Nintendo Switch 32gb Standard Cor Vermelho-néon, Azul-néon E Preto",
    "price": 2374.05,
    "available_quantity": 41,
    "category_id": "MLB1144"
  },
  {
    "id": "MLB2643093967",
    "title": "Casa Com 4 Dormitórios À Venda, 650 M² Por R$ 4.500.000,00 - Condomínio Jardim Primavera - Louveira/sp - Ca0471",
    "price": 4500000,
    "available_quantity": 1,
    "category_id": "MLB1459"
  },
  {
    "id": "MLB2643387466",
    "title": "Casa Moderna De Alto Padrão Com 4 Suítes À Venda, 392 M² Jardim Do Golfe 3 - São José Dos Campos/sp - Ca2579",
    "price": 4000000,
    "available_quantity": 1,
    "category_id": "MLB1459"
  },
  {
    "id": "MLB2642941868",
    "title": "Sobrado Em Condomínio Com 2 Dormitórios À Venda, 69 M² Por R$ 234.000 - Jardim Santo André - Santo André/sp - So1277",
    "price": 234000,
    "available_quantity": 1,
    "category_id": "MLB1459"
  },
  {
    "id": "MLB2643144285",
    "title": "Sobrado Em Itanhaém, Sion Com 2 Dormitorios, Piscina, Area Gourmet, 700 Metros Da Praia, Oportunidade, Bem Localizado, 82m²,r$349.900,00",
    "price": 349900,
    "available_quantity": 1,
    "category_id": "MLB1459"
  },
  {
    "id": "MLB916559736",
    "title": "Ganchos Expositores P/ Painel Canaletado 20cm - 100 Unidades",
    "price": 149.46,
    "available_quantity": 500,
    "category_id": "MLB1499"
  },
  {
    "id": "MLB2648243949",
    "title": "Luvas Descartáveis Descarpack Luva De Vinil Sem Pó Tamanho M De Vinilo X 100 Unidades ",
    "price": 17.54,
    "available_quantity": 18,
    "category_id": "MLB1499"
  },
  {
    "id": "MLB2097148873",
    "title": "Leitor De Código De Barras Elgin Flash Usb 1d Preto",
    "price": 139.41,
    "available_quantity": 1331,
    "category_id": "MLB1499"
  },
  {
    "id": "MLB2165499502",
    "title": "Luvas Descartáveis Supermax Premium Quality Procedimento Cor Branco Tamanho G De Látex Com Pó X 100 Unidades ",
    "price": 25.08,
    "available_quantity": 11,
    "category_id": "MLB1499"
  },
  {
    "id": "MLB2077070095",
    "title": "Notebook Positivo Bgh Motion Q4128c Gray 14.1 , Intel Atom Z8350 4gb De Ram 128gb Ssd, Intel Hd Graphics 1366x768px Windows 10 Home",
    "price": 1569,
    "available_quantity": 379,
    "category_id": "MLB1648"
  },
  {
    "id": "MLB1841147121",
    "title": "Fone De Ouvido Over-ear Gamer Evolut Têmis Eg301 Preto E Verde Com Luz Led",
    "price": 70.94,
    "available_quantity": 49,
    "category_id": "MLB1648"
  },
  {
    "id": "MLB1859236810",
    "title": "Apple Mac Mini M1 8gb 256gb Ssd Nota Fiscal E Garantia",
    "price": 5699,
    "available_quantity": 1,
    "category_id": "MLB1648"
  },
  {
    "id": "MLB1870300614",
    "title": "Mini Pc Beelink Intel 4k 4gb Hd 64gb Hdmi Usb 3.0 Win10 Br",
    "price": 1199,
    "available_quantity": 50,
    "category_id": "MLB1648"
  },
  {
    "id": "MLB1328852337",
    "title": "Espeto Golf 15cm Bambu C/ 500 Unid",
    "price": 68.9,
    "available_quantity": 5000,
    "category_id": "MLB218519"
  },
  {
    "id": "MLB1076259991",
    "title": "800 Folha Papel Manteiga Forrar Caixa Pizza N.35 Octogonal",
    "price": 159.99,
    "available_quantity": 500,
    "category_id": "MLB218519"
  },
  {
    "id": "MLB1057424658",
    "title": "Kit Pct C/ 30 Unids De Caixa Térmica Isopor 3 Litros S/alça",
    "price": 218.9,
    "available_quantity": 5000,
    "category_id": "MLB218519"
  },
  {
    "id": "MLB1044540635",
    "title": "Lona De Proteção Transparente 4x50 Metros Media - 1 Rolo",
    "price": 398.2,
    "available_quantity": 500,
    "category_id": "MLB218519"
  },
  {
    "id": "MLB2097657834",
    "title": "Violão Clássico Queen's Conthey D13751 Para Destros Preta Verniz",
    "price": 297.99,
    "available_quantity": 154,
    "category_id": "MLB1182"
  },
  {
    "id": "MLB2093305038",
    "title": "Microfone Vedo Bm800 Condensador Preto",
    "price": 185,
    "available_quantity": 129,
    "category_id": "MLB1182"
  },
  {
    "id": "MLB2636538550",
    "title": "Interface De Áudio Behringer U-phoria Umc202hd",
    "price": 752,
    "available_quantity": 3,
    "category_id": "MLB1182"
  },
  {
    "id": "MLB2008921393",
    "title": "Teclado Musical Queens D157281m 54 Teclas Preto",
    "price": 251.91,
    "available_quantity": 466,
    "category_id": "MLB1182"
  },
  {
    "id": "MLB1002446405",
    "title": "Relógio Champion Feminino Dourado Prova D´água Original",
    "price": 239.1,
    "available_quantity": 250,
    "category_id": "MLB3937"
  },
  {
    "id": "MLB1953128947",
    "title": "Colar Feminino Elo Português Folheado Pingent Árvore Da Vida",
    "price": 87.2,
    "available_quantity": 200,
    "category_id": "MLB3937"
  },
  {
    "id": "MLB1805845943",
    "title": "Apple Watch Se (gps, 44mm) - Caixa De Alumínio Cinza-espacial - Pulseira Esportiva Preto",
    "price": 2370,
    "available_quantity": 14,
    "category_id": "MLB3937"
  },
  {
    "id": "MLB1855364485",
    "title": "Corrente Masculina Prata 925 Legítima Com Garantia Vitalícia",
    "price": 106.7,
    "available_quantity": 1,
    "category_id": "MLB3937"
  },
  {
    "id": "MLB2027073392",
    "title": "Bíblia Infantil Histórias Ilustradas Para Crianças",
    "price": 13.03,
    "available_quantity": 500,
    "category_id": "MLB1196"
  },
  {
    "id": "MLB1765197148",
    "title": "Bíblia Sagrada Flores Preta | Capa Dura Nvi | Pão Diário",
    "price": 39.99,
    "available_quantity": 150,
    "category_id": "MLB1196"
  },
  {
    "id": "MLB1635700622",
    "title": " Turma Da Mônica Kit Com 10 Gibis Novos Sem Repetição.",
    "price": 51,
    "available_quantity": 250,
    "category_id": "MLB1196"
  },
  {
    "id": "MLB1518413410",
    "title": "Segredos Da Mente Milionária (os)",
    "price": 33.92,
    "available_quantity": 1,
    "category_id": "MLB1196"
  },
  {
    "id": "MLB899764841",
    "title": "100 Plásticos P/ Lp Vinil 50 Extra Grosso 0,20 + 50 Internos",
    "price": 74.9,
    "available_quantity": 1,
    "category_id": "MLB1168"
  },
  {
    "id": "MLB1127666170",
    "title": "Soroban Ábaco Calculadora Contador Japonês 13 Dígitos",
    "price": 33.75,
    "available_quantity": 1,
    "category_id": "MLB1168"
  },
  {
    "id": "MLB1346856756",
    "title": "Box O Planeta Dos Macacos - 5 Filmes",
    "price": 61.04,
    "available_quantity": 500,
    "category_id": "MLB1168"
  },
  {
    "id": "MLB733345100",
    "title": "200 Plásticos Interno Externo. Proteção Para Lp Disco Vinil",
    "price": 110,
    "available_quantity": 200,
    "category_id": "MLB1168"
  },
  {
    "id": "MLB2085907735",
    "title": "Gel Lubrificante Íntimo 2 Em 1 K-med Frasco 203g",
    "price": 11.59,
    "available_quantity": 901,
    "category_id": "MLB264586"
  },
  {
    "id": "MLB2136662738",
    "title": "Fraldas Para Adultos Plenitud Descartável Protect Plus G/xg X 16 U",
    "price": 43.92,
    "available_quantity": 354,
    "category_id": "MLB264586"
  },
  {
    "id": "MLB2080707306",
    "title": "Gel Lubrificante Íntimo Hot K-med Frasco 200g",
    "price": 12.69,
    "available_quantity": 286,
    "category_id": "MLB264586"
  },
  {
    "id": "MLB2106498887",
    "title": "Suplemento Em Pó Black Skull Creatine Turbo Creatina Em Pote De 150g",
    "price": 37.69,
    "available_quantity": 1,
    "category_id": "MLB264586"
  },
  {
    "id": "MLB2627272718",
    "title": "Aluguel De Freezer, Aluguel De Geladeira, Expositores",
    "price": 380,
    "available_quantity": 1,
    "category_id": "MLB1540"
  },
  {
    "id": "MLB2605677997",
    "title": "Aluguel De Cabine De Fotos E Espelho Mágico De Fotos",
    "price": 0,
    "available_quantity": 1,
    "category_id": "MLB1540"
  },
  {
    "id": "MLB2187304925",
    "title": "Locação / Aluguel De Mesas E Cadeiras Bar Para Festa Junina",
    "price": 28,
    "available_quantity": 1,
    "category_id": "MLB1540"
  },
  {
    "id": "MLB2186063527",
    "title": "Guia Comercial Online Cidades E Bairros (site + Aplicativo)",
    "price": 299.9,
    "available_quantity": 1,
    "category_id": "MLB1540"
  },
  {
    "id": "MLB901327140",
    "title": "Cartão Pré-pago Uber R$ 100 Reais",
    "available_quantity": 5000,
    "price": 118.99,
    "category_id": "MLB1953"
  },
  {
    "id": "MLB1890840583",
    "title": "Incenso Nirvana Natural De Longa Duração Escolha Seu Aroma",
    "price": 16.9,
    "available_quantity": 500,
    "category_id": "MLB1953"
  },
  {
    "id": "MLB1950776881",
    "title": "Kit Narguilé Completo Mini Monster+ Carvão+ Aluminio+ Brinde",
    "price": 96.55,
    "available_quantity": 250,
    "category_id": "MLB1953"
  },
  {
    "id": "MLB901323156",
    "title": "Cartão Pré-pago Uber R$ 50 Reais",
    "price": 62.99,
    "available_quantity": 100,
    "category_id": "MLB1953"
  }
]

let orders = [
	{
	"id": "1",
	"user_id": "1",
	"product_id": "MLB1588511630"
},
{
	"id": "2",
	"user_id": "2",
	"product_id": "MLB2020049099"
},
{
	"id": "3",
	"user_id": "3",
	"product_id": "MLB1889533817"
},
{
	"id": "6",
	"user_id": "4",
	"product_id": "MLB1889533817"
}
]

  async function main(){
    for (let order of orders){
      await prisma.order.createMany({data: order})
    }

    for (let product of products){
      await prisma.product.createMany({data: product})
    }

    for (let category of categories){
      await prisma.category.createMany({data: category})
    }

    for(let user of users){
      await prisma.user.createMany({data: user})
    }
  }

  main().catch((e) => {
    console.error(e)
    process.exit(1)
  }).finally(async () => {
    await prisma.$disconnect()
  })