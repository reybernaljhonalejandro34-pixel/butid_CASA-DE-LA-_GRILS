/* ==========================================
   BASE DE DATOS COMPLETA DE PRODUCTOS AURA
   ========================================== */

const PRODUCTOS = [
    // ==========================================
    // SECCIÓN KIDS (Imágenes 1 y 2)
    // ==========================================
    {
        id: "kids-01",
        nombre: "KIT PINK MIMOSA BODY CREEM",
        categoria: "kids",
        precio: 28000,
        imagen: "../imagenes/kids/1.jpeg",
        descripcion: "Hermoso artículo de la colección Kids para consentir a las más pequeñas de la casa.",
        destacado: true
    },
    {
        id: "kids-02",
        nombre: "KIT PINK MARTINI",
        categoria: "kids",
        precio: 40000,
        imagen: "../imagenes/kids/2.jpeg",
        descripcion: "Detalle perfecto de nuestra línea infantil. Estilo y frescura para cada día.",
        destacado: true
    },
    // ==========================================
    // SECCIÓN A: LÍNEA CAPILAR & BIENESTAR (42 Productos - Carpeta descargas)
    // ==========================================
    {
        id: "cap-01",
        nombre: "Shampoo (Control Grasa) Premium",
        categoria: "capilares",
        precio: 40000,
        imagen: "../imagenes/descargas/1.jpeg",
        descripcion: "Limpia profundamente el cuero cabelludo, regulando el exceso de sebo. Fórmula ideal para mantener el cabello fresco, ligero y libre de brillo graso a pesar del calor de Tocaima.",
        destacado: true
    },
    {
        id: "cap-02",
        nombre: "Miel para el Cabello (Elixir de Nutrición)",
        categoria: "capilares",
        precio: 60000,
        imagen: "../imagenes/descargas/2.jpeg",
        descripcion: "Tratamiento concentrado a base de extracto puro de miel que devuelve la vida, el brillo y la sedosidad a las fibras capilares más maltratadas.",
        destacado: true
    },
    {
        id: "cap-03",
        nombre: "Tratamiento de Restauración y Nutrición",
        categoria: "personal",
        precio: 49000,
        imagen: "../imagenes/descargas/3.jpeg",
        descripcion: "Mascarilla intensiva que rellena la hebra capilar y nutre la piel del cuero cabelludo. Devuelve la elasticidad y previene el envejecimiento capilar.",
        destacado: false
    },
    {
        id: "cap-04",
        nombre: "Crema para Peinar Desenredante & Antifrizz",
        categoria: "capilares",
        precio: 39000,
        imagen: "../imagenes/descargas/4.jpeg",
        descripcion: "Moldea tus peinados y controla el frizz rebelde causado por la humedad. Aporta suavidad, hidratación y facilita el peinado diario sin dejar pesado el cabello.",
        destacado: false
    },
    {
        id: "cap-05",
        nombre: "Shampoo Hidratante (Cabello Ondulado y Rizado)",
        categoria: "capilares",
        precio: 39000,
        imagen: "../imagenes/descargas/5.jpeg",
        descripcion: "Fórmula sin sulfatos diseñada especialmente para definir ondas y rizos. Limpia delicadamente reteniendo la humedad natural para un rebote espectacular.",
        destacado: false
    },
    {
        id: "cap-06",
        nombre: "Mascarilla Capilar Definidora de Rizos",
        categoria: "capilares",
        precio: 40000,
        imagen: "../imagenes/descargas/6.jpeg",
        descripcion: "Nutrición extrema para rizos definidos y elásticos. Aporta memoria al bucle, combate la sequedad extrema y protege contra el frizz del clima de Cundinamarca.",
        destacado: false
    },
    {
        id: "cap-07",
        nombre: "Tratamiento Sellador de Puntas Abiertas",
        categoria: "capilares",
        precio: 39000,
        imagen: "../imagenes/descargas/7.jpeg",
        descripcion: "Sella instantáneamente la cutícula capilar y repara las horquillas. Ideal para cabellos largos expuestos constantemente a planchas, secadores o el sol ardiente.",
        destacado: false
    },
    {
        id: "cap-08",
        nombre: "Shampoo Estimulante (Crecimiento & Control Caída)",
        categoria: "capilares",
        precio: 49000,
        imagen: "../imagenes/descargas/8.jpeg",
        descripcion: "Enriquecido con activos anticaída y extractos estimulantes. Fortalece el folículo piloso desde la raíz promoviendo el nacimiento de nuevas hebras capilares.",
        destacado: true
    },
    {
        id: "cap-09",
        nombre: "Gel Definidor de Rizos & Ondas Flexibles",
        categoria: "capilares",
        precio: 44000,
        imagen: "../imagenes/descargas/9.jpeg",
        descripcion: "Brinda una fijación natural y duradera sin acartonar. Define tus rizos con un brillo mojado espectacular y los blinda contra la humedad ambiental.",
        destacado: false
    },
    {
        id: "cap-10",
        nombre: "Suplemento Capilar de Banano (Desintoxica & Protege)",
        categoria: "capilares",
        precio: 40000,
        imagen: "../imagenes/descargas/10.jpeg",
        descripcion: "Una verdadera bomba vitamínica de banano que elimina toxinas acumuladas por el cloro de piscinas y la polución, devolviendo el vigor y brillo natural.",
        destacado: false
    },
    {
        id: "cap-11",
        nombre: "Shampoo de Cebolla (Fuerza & Anticaída)",
        categoria: "capilares",
        precio: 35000,
        imagen: "../imagenes/descargas/11.jpeg",
        descripcion: "Fórmula tradicional enriquecida que acelera el crecimiento del cabello y detiene la caída. Con un aroma delicioso libre de olores residuales.",
        destacado: false
    },
    {
        id: "cap-12",
        nombre: "Mascarilla Bomba (Reparación Ultra Profunda)",
        categoria: "capilares",
        precio: 37000,
        imagen: "../imagenes/descargas/12.jpeg",
        descripcion: "El tratamiento de emergencia definitivo. Repara el cabello dañado por procesos químicos severos, devolviendo la elasticidad, fuerza y brillo espejo.",
        destacado: false
    },
    {
        id: "cap-13",
        nombre: "Shampoo Revitalizante Brillo de Seda",
        categoria: "capilares",
        precio: 39000,
        imagen: "../imagenes/descargas/13.jpeg",
        descripcion: "Devuelve la energía a los cabellos apagados y sin vida. Limpia suavemente mientras infunde antioxidantes y vitaminas protectoras de color.",
        destacado: false
    },
    {
        id: "cap-14",
        nombre: "Shampoo de Romero (Fortalecedor y Estimulante)",
        categoria: "capilares",
        precio: 35000,
        imagen: "../imagenes/descargas/14.jpeg",
        descripcion: "Extracto natural de romero que estimula la circulación del cuero cabelludo, previene las canas prematuras y fortalece la estructura de la hebra.",
        destacado: false
    },
    {
        id: "cap-15",
        nombre: "Keratina Reparadora Express (120 ml)",
        categoria: "capilares",
        precio: 35000,
        imagen: "../imagenes/descargas/15.jpeg",
        descripcion: "Tratamiento de alisado y reconstrucción en formato práctico. Elimina el frizz, alisa progresivamente e hidrata profundamente el cabello seco.",
        destacado: false
    },
    {
        id: "cap-16",
        nombre: "Mantequilla Corporal Perfumada (Nutrición Seda)",
        categoria: "personal",
        precio: 27000,
        imagen: "../imagenes/descargas/16.jpeg",
        descripcion: "Crema corporal ultra-hidratante que deja tu piel suave como la seda y deliciosamente perfumada todo el día. Ideal para aplicar después de un baño refrescante.",
        destacado: false
    },
    {
        id: "cap-17",
        nombre: "Shampoo Crecimiento Acelerado Pro",
        categoria: "capilares",
        precio: 40000,
        imagen: "../imagenes/descargas/17.jpeg",
        descripcion: "Fórmula de salón que nutre las células capilares para acelerar el ritmo natural de crecimiento. Logra un cabello más largo y abundante en tiempo récord.",
        destacado: false
    },
    {
        id: "cap-18",
        nombre: "Cepillo Profesional Anti-Enredos (Flex Tech)",
        categoria: "capilares",
        precio: 24000,
        imagen: "../imagenes/descargas/18.jpeg",
        descripcion: "Cepillo ergonómico de cerdas flexibles que desenreda con suavidad sin tirar ni romper el cabello. Perfecto para usar sobre cabello seco o mojado.",
        destacado: false
    },
    {
        id: "cap-20",
        nombre: "Shampoo Reparación Absoluta",
        categoria: "capilares",
        precio: 45000,
        imagen: "../imagenes/descargas/20.jpeg",
        descripcion: "Limpia y reconstruye el cabello maltratado por el sol, plancha y químicos. Aporta lípidos esenciales para restaurar la suavidad y docilidad.",
        destacado: false
    },
    {
        id: "cap-21",
        nombre: "Acondicionador Reparación Absoluta",
        categoria: "capilares",
        precio: 45000,
        imagen: "../imagenes/descargas/21.jpeg",
        descripcion: "El complemento perfecto. Sella la cutícula capilar tras el shampoo, reteniendo los nutrientes esenciales y facilitando el desenredo inmediato.",
        destacado: false
    },
    {
        id: "cap-22",
        nombre: "Mascarilla Reparación Absoluta Profesional",
        categoria: "capilares",
        precio: 45000,
        imagen: "../imagenes/descargas/22.jpeg",
        descripcion: "Tratamiento intensivo semanal que blinda el cabello contra agresiones externas. Aporta brillo tridimensional y resistencia antirotura.",
        destacado: false
    },
    {
        id: "cap-23",
        nombre: "Perfume Capilar de Miel (Aroma & Brillo Destello)",
        categoria: "capilares",
        precio: 58000,
        imagen: "../imagenes/descargas/23.jpeg",
        descripcion: "Bruma aromática de lujo para el cabello con sutiles destellos de brillo. Neutraliza olores ambientales y deja una estela dulce de miel sumamente elegante.",
        destacado: false
    },
    {
        id: "cap-24",
        nombre: "Shampoo Concentrado de Romero (Fórmula Gold)",
        categoria: "capilares",
        precio: 50000,
        imagen: "../imagenes/descargas/24.jpeg",
        descripcion: "Versión de lujo con alta concentración de aceites esenciales de romero. Limpieza astringente premium que estimula el folículo piloso.",
        destacado: false
    },
    {
        id: "cap-25",
        nombre: "Shampoo Estimulante de Ají (Crecimiento Extremo)",
        categoria: "capilares",
        precio: 35000,
        imagen: "../imagenes/descargas/25.jpeg",
        descripcion: "Fórmula innovadora a base de extracto de ají que activa la microcirculación en el cuero cabelludo, logrando un crecimiento acelerado e impactante.",
        destacado: false
    },
    {
        id: "cap-26",
        nombre: "Shampoo Cabello Graso Clarificante",
        categoria: "capilares",
        precio: 44000,
        imagen: "../imagenes/descargas/26.jpeg",
        descripcion: "Remueve impurezas, sudor y exceso de sebo acumulado. Ideal para refrescar el cabello en días calurosos, dejándolo suelto y con volumen.",
        destacado: false
    },
    {
        id: "cap-27",
        nombre: "Keratina Reconstrucción Total (250 ml)",
        categoria: "capilares",
        precio: 60000,
        imagen: "../imagenes/descargas/27.jpeg",
        descripcion: "Restaura la queratina natural perdida por el sol y decoloraciones. Alisa las fibras, elimina el encrespamiento y deja un aspecto liso y pulido.",
        destacado: false
    },
    {
        id: "cap-28",
        nombre: "Perfume Termoprotector Desenredante Dual",
        categoria: "capilares",
        precio: 23000,
        imagen: "../imagenes/descargas/28.jpeg",
        descripcion: "Fórmula bifásica que desenreda, aporta un perfume exquisito de larga duración y protege el cabello del calor extremo del sol y herramientas térmicas.",
        destacado: false
    },
    {
        id: "cap-29",
        nombre: "Keratina Profesional Alisado Extremo (1 Litro)",
        categoria: "capilares",
        precio: 150000,
        imagen: "../imagenes/descargas/29.jpeg",
        descripcion: "Tratamiento profesional de gran volumen para el alisado definitivo del cabello. Elimina el volumen no deseado e inyecta brillo espejo duradero.",
        destacado: false
    },
    {
        id: "cap-30",
        nombre: "Acondicionador Ultra-Nutritivo Seda Líquida",
        categoria: "capilares",
        precio: 34000,
        imagen: "../imagenes/descargas/30.jpeg",
        descripcion: "Suaviza el cabello al instante, eliminando la aspereza. Su fórmula enriquecida aporta elasticidad y brillo sin engrasar el cuero cabelludo.",
        destacado: false
    },
    {
        id: "cap-31",
        nombre: "Acondicionador Antifrizz Escudo de Humedad",
        categoria: "capilares",
        precio: 35000,
        imagen: "../imagenes/descargas/31.jpeg",
        descripcion: "Crea una barrera protectora invisible sobre el cabello que repele la humedad de Tocaima, evitando que el cabello se esponje o pierda su peinado.",
        destacado: false
    },
    {
        id: "cap-32",
        nombre: "Acondicionador de Miel (Brillo y Suavidad Natural)",
        categoria: "capilares",
        precio: 44000,
        imagen: "../imagenes/descargas/32.jpeg",
        descripcion: "Desenreda con el poder natural nutritivo de la miel. Deja el cabello sumamente dócil, hidratado y con una fragancia celestial y fresca.",
        destacado: false
    },
    {
        id: "cap-33",
        nombre: "Mascarilla de Miel (Reparación Profunda)",
        categoria: "capilares",
        precio: 50000,
        imagen: "../imagenes/descargas/33.jpeg",
        descripcion: "Tratamiento intensivo hidratante que penetra en el corazón de la fibra capilar reseca, devolviendo la flexibilidad y un brillo radiante.",
        destacado: false
    },
    {
        id: "cap-34",
        nombre: "Shampoo de Miel Orgánica & Nutritiva",
        categoria: "capilares",
        precio: 46000,
        imagen: "../imagenes/descargas/34.jpeg",
        descripcion: "Limpieza dermo-protectora enriquecida con jalea real y miel. Nutre el cabello seco desde el primer uso dejándolo increíblemente sedoso.",
        destacado: false
    },
    {
        id: "cap-35",
        nombre: "Tratamiento Intensivo Rescate de Cabello",
        categoria: "personal",
        precio: 37000,
        imagen: "../imagenes/descargas/35.jpeg",
        descripcion: "Ampolla de nutrición profunda restauradora. Regenera las hebras capilares quebradizas y sin vida en solo 3 minutos de aplicación.",
        destacado: false
    },
    {
        id: "cap-36",
        nombre: "Mascarilla Capilar Hidro-Nutritiva Extra Brillo",
        categoria: "capilares",
        precio: 40000,
        imagen: "../imagenes/descargas/36.jpeg",
        descripcion: "Mascarilla que equilibra la hidratación del cabello. Restaura la flexibilidad y soltura natural aportando un brillo sano y sedoso.",
        destacado: false
    },
    {
        id: "cap-37",
        nombre: "Perfume Capilar Dulce Encanto (Edición Limitada)",
        categoria: "capilares",
        precio: 13000,
        imagen: "../imagenes/descargas/37.jpeg",
        descripcion: "Bruma perfumada ligera ideal para llevar en el bolso. Aporta un olor delicioso a flores frescas y sol, disipando olores de sudor o humo.",
        destacado: false
    },
    {
        id: "cap-38",
        nombre: "Bio-Repolarizador Capilar Multiactivo 10 en 1",
        categoria: "personal",
        precio: 15000,
        imagen: "../imagenes/descargas/38.jpeg",
        descripcion: "Un tratamiento multifuncional de bajo costo con 10 beneficios: protege, brilla, suaviza, repara, nutre, controla frizz y más. ¡Un súper ventas local!",
        destacado: false
    },
    {
        id: "cap-39",
        nombre: "Shampoo Nutritivo Multivitaminas",
        categoria: "capilares",
        precio: 40000,
        imagen: "../imagenes/descargas/39.jpeg",
        descripcion: "Shampoo fortificado con vitaminas A, E y provitamina B5. Nutre y limpia las fibras capilares aportando ligereza y suavidad.",
        destacado: false
    },
    {
        id: "cap-40",
        nombre: "Tratamiento Reparador Express de Puntas (Minitalla)",
        categoria: "personal",
        precio: 4000,
        imagen: "../imagenes/descargas/40.jpeg",
        descripcion: "Práctica minitalla de tratamiento reparador ideal para llevar de viaje o piscina. Nutre tus puntas al instante a un precio increíble.",
        destacado: false
    },
    {
        id: "cap-41",
        nombre: "Aceite Nutritivo Multiusos (Argán & Almendras)",
        categoria: "personal",
        precio: 3000,
        imagen: "../imagenes/descargas/41.jpeg",
        descripcion: "Aceite concentrado ideal para aplicar en puntas resecas, cutículas o zonas resecas de la piel. Máxima nutrición en formato económico.",
        destacado: false
    },
    {
        id: "cap-42",
        nombre: "Shampoo Hidratación Intensa (Clima Cálido)",
        categoria: "capilares",
        precio: 40000,
        imagen: "../imagenes/descargas/42.jpeg",
        descripcion: "Shampoo de hidratación profunda formulado para cabellos muy secos y expuestos a altas temperaturas. Hidrata sin aportar peso al peinado.",
        destacado: false
    },

    // ==========================================
    // SECCIÓN B: LÍNEA COSMÉTICA & MAQUILLAJE (32 Productos - Carpeta cosmeticos)
    // ==========================================
    {
        id: "cos-01",
        nombre: "Llavero de Gloss y Tinta - Trendy",
        categoria: "cosmeticos",
        precio: 25000,
        imagen: "../imagenes/cosmeticos/1.jpeg",
        descripcion: "El kit más tierno y práctico de Trendy. Incluye un hermoso llavero decorativo con un gloss hidratante y una tinta de labios de alta pigmentación.",
        destacado: true
    },
    {
        id: "cos-02",
        nombre: "Llavero Nude + Mini Gloss Hidratante - Bloomshell",
        categoria: "cosmeticos",
        precio: 28000,
        imagen: "../imagenes/cosmeticos/2.jpeg",
        descripcion: "Exclusivo llavero de Bloomshell con un labial en tono nude clásico mate de alta fijación y un mini gloss que aporta brillo cristalino.",
        destacado: true
    },
    {
        id: "cos-03",
        nombre: "Tinta y Mini Gloss - Bloomshell",
        categoria: "cosmeticos",
        precio: 25000,
        imagen: "../imagenes/cosmeticos/3.jpeg",
        descripcion: "Dúo perfecto para unos labios con efecto natural degradado. Aplica la tinta de larga duración y sella con el brillo ultra-hidratante.",
        destacado: false
    },
    {
        id: "cos-04",
        nombre: "Gloss Bloom Lush Petan - Bloomshell",
        categoria: "cosmeticos",
        precio: 16000,
        imagen: "../imagenes/cosmeticos/4.jpeg",
        descripcion: "Brillo labial enriquecido con aceites hidratantes y un suave tinte rosado que realza el color natural de tus labios con un acabado espejo.",
        destacado: false
    },
    {
        id: "cos-05",
        nombre: "Bloom Cushion Base - Bloomshell",
        categoria: "cosmeticos",
        precio: 35000,
        imagen: "../imagenes/cosmeticos/5.jpeg",
        descripcion: "Base de maquillaje formato cushion de textura ultraligera y cobertura construible. Acabado fresco, dewy y con protección contra el sol de Tocaima.",
        destacado: true
    },
    {
        id: "cos-06",
        nombre: "Corrector de Ojeras & Imperfecciones - Bloomshell",
        categoria: "cosmeticos",
        precio: 22000,
        imagen: "../imagenes/cosmeticos/6.jpeg",
        descripcion: "Alta cobertura que disimula imperfecciones, ojeras e hiperpigmentaciones. Textura cremosa, hidratante y de larga duración (Disponibilidad Tonos: 05, 06, 07, 08).",
        destacado: false
    },
    {
        id: "cos-07",
        nombre: "Gloss Dúo Perfecto - Bloomshell",
        categoria: "cosmeticos",
        precio: 25000,
        imagen: "../imagenes/cosmeticos/7.jpeg",
        descripcion: "El brillo labial de dos pasos definitivo. Por un extremo aporta color translúcido de alta adherencia y por el otro un brillo cristalino sin sensación pegajosa.",
        destacado: false
    },
    {
        id: "cos-08",
        nombre: "Gloss Bloom Cherry - Bloomshell",
        categoria: "cosmeticos",
        precio: 16000,
        imagen: "../imagenes/cosmeticos/8.jpeg",
        descripcion: "Brillo labial frutal de aroma a cereza que reacciona con el pH de tus labios para crear un tono rosado personalizado y ultra jugoso.",
        destacado: false
    },
    {
        id: "cos-09",
        nombre: "Bálsamo Baby Lip Balm - Bloomshell",
        categoria: "cosmeticos",
        precio: 12000,
        imagen: "../imagenes/cosmeticos/9.jpeg",
        descripcion: "Protector e hidratante labial diario de empaque tierno. Repara labios agrietados por el sol y la sequedad, dejándolos suaves y nutridos.",
        destacado: false
    },
    {
        id: "cos-10",
        nombre: "Pestañina Prosa (4 en 1) - Grande",
        categoria: "cosmeticos",
        precio: 22000,
        imagen: "../imagenes/cosmeticos/10.jpeg",
        descripcion: "La famosa pestañina mexicana enriquecida con aceites naturales (hueso de mamey, sábila, jojoba y germen de trigo). Alarga y aporta volumen extremo.",
        destacado: true
    },
    {
        id: "cos-11",
        nombre: "Pestañina Prosa (4 en 1) - Mini / Viaje",
        categoria: "cosmeticos",
        precio: 22000,
        imagen: "../imagenes/cosmeticos/11.jpeg",
        descripcion: "La misma fórmula legendaria Prosa en un tamaño compacto ideal para llevar en la cosmetiquera. Resistente al agua y al sudor de Tocaima.",
        destacado: false
    },
    {
        id: "cos-12",
        nombre: "Labial Hidratante Blooming Gelly - Bloomshell",
        categoria: "cosmeticos",
        precio: 18000,
        imagen: "../imagenes/cosmeticos/12.jpeg",
        descripcion: "Barra labial tipo gelatina que se desliza suavemente aportando un toque de color hidratante y un brillo jugoso y duradero.",
        destacado: false
    },
    {
        id: "cos-13",
        nombre: "Aura Mocca Gloss - Trendy",
        categoria: "cosmeticos",
        precio: 20000,
        imagen: "../imagenes/cosmeticos/13.jpeg",
        descripcion: "Gloss labial de la línea Aura en un sofisticado tono café mocca. Aporta volumen óptico, nutrición profunda y un brillo destellante chic.",
        destacado: false
    },
    {
        id: "cos-14",
        nombre: "Aura Gloss Cristal - Trendy",
        categoria: "cosmeticos",
        precio: 20000,
        imagen: "../imagenes/cosmeticos/14.jpeg",
        descripcion: "Brillo labial cristalino con partículas micro-reflectivas que atrapan la luz del sol, aportando un brillo húmedo y multidimensional espectacular.",
        destacado: false
    },
    {
        id: "cos-15",
        nombre: "Rubor Mia Blush Velvet - Trendy",
        categoria: "cosmeticos",
        precio: 25000,
        imagen: "../imagenes/cosmeticos/15.jpeg",
        descripcion: "Rubor compacto de textura aterciopelada y excelente pigmentación. Difumina suavemente sobre las mejillas dando un aspecto saludable y fresco.",
        destacado: true
    },
    {
        id: "cos-16",
        nombre: "Labial Candy Matte Larga Duración - Trendy",
        categoria: "cosmeticos",
        precio: 5000,
        imagen: "../imagenes/cosmeticos/16.jpeg",
        descripcion: "Labial en barra de acabado mate aterciopelado. No reseca los labios y viene en hermosos tonos dulces de alta cobertura a un precio increíble.",
        destacado: false
    },
    {
        id: "cos-17",
        nombre: "Super Corrector Hidratante e Iluminador - Trendy",
        categoria: "cosmeticos",
        precio: 20000,
        imagen: "../imagenes/cosmeticos/17.jpeg",
        descripcion: "Corrector de alta cobertura enriquecido con agentes humectantes. Cubre ojeras a la vez que hidrata la zona para evitar que se cuartee por el calor.",
        destacado: false
    },
    {
        id: "cos-18",
        nombre: "Tim Burton's Brillo Labial Líquido - Trendy",
        categoria: "cosmeticos",
        precio: 20000,
        imagen: "../imagenes/cosmeticos/18.jpeg",
        descripcion: "Edición limitada Tim Burton de Trendy. Un gloss labial de diseño gótico con excelente adherencia, hidratación y un destello oscuro misterioso y chic.",
        destacado: false
    },
    {
        id: "cos-19",
        nombre: "Tinta de Labios California Barbie - Trendy",
        categoria: "cosmeticos",
        precio: 15000,
        imagen: "../imagenes/cosmeticos/19.jpeg",
        descripcion: "Tinta líquida de alta pigmentación en la icónica colección Barbie. Aporta un tono rosado californiano duradero que no se transfiere con el tapabocas ni bebidas.",
        destacado: false
    },
    {
        id: "cos-20",
        nombre: "Brillo Labial Barbie Magic - Trendy",
        categoria: "cosmeticos",
        precio: 15000,
        imagen: "../imagenes/cosmeticos/20.jpeg",
        descripcion: "Gloss ultra brillante de la colección Barbie. Deja los labios sumamente suaves con un destello rosa holográfico de ensueño y un aroma frutal irresistible.",
        destacado: false
    },
    {
        id: "cos-21",
        nombre: "Desmaquillante Bifásico Rostro y Ojos - Trendy",
        categoria: "personal",
        precio: 20000,
        imagen: "../imagenes/cosmeticos/21.jpeg",
        descripcion: "Fórmula de dos fases (agua y óleo) que retira con suavidad el maquillaje a prueba de agua sin irritar los ojos ni dejar sensación grasosa.",
        destacado: false
    },
    {
        id: "cos-22",
        nombre: "Fijador de Maquillaje Dreams Mist - Trendy",
        categoria: "personal",
        precio: 15000,
        imagen: "../imagenes/cosmeticos/22.jpeg",
        descripcion: "Bruma ultrafina que fija el maquillaje, funde los polvos y aporta un acabado natural. Indispensable para que tu look dure impecable bajo el sol de Tocaima.",
        destacado: false
    },
    {
        id: "cos-23",
        nombre: "Beat Corrector de Alta Cobertura - Trendy",
        categoria: "cosmeticos",
        precio: 10000,
        imagen: "../imagenes/cosmeticos/23.jpeg",
        descripcion: "Corrector de consistencia ligera y de secado rápido. Se funde perfectamente con la piel disimulando rojeces, marcas y granitos de forma natural.",
        destacado: false
    },
    {
        id: "cos-24",
        nombre: "Tim Burton's Polvo Rosado Matificante - Trendy",
        categoria: "cosmeticos",
        precio: 30000,
        imagen: "../imagenes/cosmeticos/24.jpeg",
        descripcion: "Polvo suelto traslúcido en tono rosa pálido que neutraliza las ojeras oscuras e ilumina el rostro mientras controla los brillos grasos del día.",
        destacado: true
    },
    {
        id: "cos-25",
        nombre: "Bakery Polvo Suelto Traslúcido - Trendy",
        categoria: "cosmeticos",
        precio: 20000,
        imagen: "../imagenes/cosmeticos/25.jpeg",
        descripcion: "Polvo suelto ultra fino que sella tu base y corrector con efecto filtro. Controla el brillo en la zona T y da un acabado aterciopelado impecable.",
        destacado: false
    },
    {
        id: "cos-26",
        nombre: "Gel Fijador de Cejas Efecto Laminado Barbie - Trendy",
        categoria: "cosmeticos",
        precio: 10000,
        imagen: "../imagenes/cosmeticos/26.jpeg",
        descripcion: "Gel transparente de fijación extrema que mantiene tus cejas peinadas e impecables todo el día con el codiciado efecto laminado de salón.",
        destacado: false
    },
    {
        id: "cos-27",
        nombre: "Base Aura de Cobertura Fluida - Trendy",
        categoria: "cosmeticos",
        precio: 30000,
        imagen: "../imagenes/cosmeticos/27.jpeg",
        descripcion: "Base fluida hidratante con un acabado de segunda piel. Unifica el tono aportando luminosidad saludable sin sentirse pesada o acartonada.",
        destacado: false
    },
    {
        id: "cos-28",
        nombre: "Kit Petite Brillo + Sérum Facial - Trendy",
        categoria: "cosmeticos",
        precio: 15000,
        imagen: "../imagenes/cosmeticos/28.jpeg",
        descripcion: "Hermoso kit en formato miniatura que incluye un brillo labial hidratante y un mini sérum facial antioxidante que prepara la piel para un maquillaje radiante.",
        destacado: false
    },
    {
        id: "cos-29",
        nombre: "Fijador de Maquillaje Matte Finish - Trendy",
        categoria: "personal",
        precio: 15000,
        imagen: "../imagenes/cosmeticos/29.jpeg",
        descripcion: "Spray sellador de acabado mate que controla los brillos causados por el sudor. Blinda el maquillaje contra el roce y la humedad del día.",
        destacado: false
    },
    {
        id: "cos-30",
        nombre: "Espuma Limpiadora y Desmaquillante Aloe Vera - Trendy",
        categoria: "personal",
        precio: 15000,
        imagen: "../imagenes/cosmeticos/30.jpeg",
        descripcion: "Espuma suave con cepillo de silicona integrado que limpia los poros en profundidad, retira el maquillaje y refresca la piel gracias al aloe vera.",
        destacado: false
    },
    {
        id: "cos-31",
        nombre: "Sérum Encanto Nutritivo & Reparador - Trendy",
        categoria: "personal",
        precio: 20000,
        imagen: "../imagenes/cosmeticos/31.jpeg",
        descripcion: "Suero facial hidratante enriquecido con extractos botánicos. Nutre intensamente la piel maltratada por la sequedad y los rayos del sol.",
        destacado: true
    },
    {
        id: "cos-32",
        nombre: "Polvo de Hadas Mini Golden Glow - Trendy",
        categoria: "cosmeticos",
        precio: 12000,
        imagen: "../imagenes/cosmeticos/32.jpeg",
        descripcion: "Iluminador suelto en formato aplicador de esponja. Aporta destellos dorados hermosos sobre hombros, escote, rostro o cabello. ¡Brilla bajo el sol!",
        destacado: true
    },

    // ==========================================
    // SECCIÓN C: ropa_shein IMPORTADA (Mockup Inicial Preparado)
    // ==========================================




    {
        id: "she-05",
        nombre: "Camisa de Colombia",
        categoria: "shein",
        precio: 60000,
        imagen: "../imagenes/ropa_shein/1.jpeg",
        descripcion: "Camisa fresca de algodón con estilo colombiano, perfecta para el clima cálido de Tocaima.",
        destacado: true
    },
    // ==========================================
    // ==========================================
    // SECCIÓN D: cuidado_personal Y CORPORAL (Purpure & Trendy)
    // ==========================================
    {
        id: "per-01",
        nombre: "Splash Corporal con Brilli Brilli - Purpure",
        categoria: "personal",
        precio: 24000,
        imagen: "../imagenes/cuidado_personal/1.jpeg",
        descripcion: "Refrescante splash corporal que deja un destello sutil y luminoso sobre la piel. Ideal para brillar bajo el sol de Tocaima.",
        destacado: true
    },
    {
        id: "per-02",
        nombre: "Bubble Gum Splash Corporal (Cabello & Cuerpo) - Purpure",
        categoria: "personal",
        precio: 25000,
        imagen: "../imagenes/cuidado_personal/2.jpeg",
        descripcion: "Splash multiusos con delicioso aroma a chicle. Refresca e hidrata tanto la piel de tu cuerpo como tu cabello durante todo el día.",
        destacado: false
    },
    {
        id: "per-03",
        nombre: "Watermelon Body Splash - Purpure",
        categoria: "personal",
        precio: 16000,
        imagen: "../imagenes/cuidado_personal/3.jpeg",
        descripcion: "Fragancia frutal de sandía ultra refrescante. Perfecta para llevar en el bolso y combatir el calor con un aroma dulce y revitalizante.",
        destacado: false
    },
    {
        id: "per-04",
        nombre: "Watermelon Exfoliante Corporal - Purpure",
        categoria: "personal",
        precio: 28000,
        imagen: "../imagenes/cuidado_personal/4.jpeg",
        descripcion: "Exfoliante suave con aroma a sandía. Remueve células muertas dejando la piel renovada, suave y lista para broncearse.",
        destacado: false
    },
    {
        id: "per-05",
        nombre: "Bubble Gum Mantequilla Corporal (Grande) - Purpure",
        categoria: "personal",
        precio: 28000,
        imagen: "../imagenes/cuidado_personal/5.jpeg",
        descripcion: "Crema corporal ultra hidratante de rápida absorción con dulce aroma a chicle. Nutre profundamente la piel reseca (Disponible también en versión mini por $13.000).",
        destacado: true
    },
    {
        id: "per-06",
        nombre: "Girl Boss Body Splash - Purpure",
        categoria: "personal",
        precio: 16000,
        imagen: "../imagenes/cuidado_personal/6.jpeg",
        descripcion: "Una fragancia empoderadora y sofisticada en formato splash. Ideal para uso diario, aportando una estela de elegancia.",
        destacado: false
    },
    {
        id: "per-07",
        nombre: "Sexy Champagne Mantequilla Corporal - Purpure",
        categoria: "personal",
        precio: 25000,
        imagen: "../imagenes/cuidado_personal/7.jpeg",
        descripcion: "Mantequilla hidratante con un lujoso aroma a champagne. Deja tu piel con una textura aterciopelada y un aroma sumamente seductor.",
        destacado: false
    },
    {
        id: "per-08",
        nombre: "Mantequilla Corporal Honey Glow - Purpure",
        categoria: "personal",
        precio: 25000,
        imagen: "../imagenes/cuidado_personal/8.jpeg",
        descripcion: "Crema nutritiva intensiva a base de miel. Proporciona un brillo dorado natural (glow) mientras hidrata a profundidad.",
        destacado: false
    },
    {
        id: "per-09",
        nombre: "Mantequilla Corporal Honey Glow (Mini) - Purpure",
        categoria: "personal",
        precio: 10000,
        imagen: "../imagenes/cuidado_personal/9.jpeg",
        descripcion: "Versión miniatura de nuestra famosa mantequilla corporal Honey Glow. Perfecta para llevar en la cosmetiquera o de viaje.",
        destacado: false
    },
    {
        id: "per-10",
        nombre: "Candy Bum Gel - Purpure",
        categoria: "personal",
        precio: 27000,
        imagen: "../imagenes/cuidado_personal/10.jpeg",
        descripcion: "Gel corporal refrescante con aroma a caramelo. Ideal para calmar la piel después de la exposición solar en Tocaima.",
        destacado: false
    },
    {
        id: "per-11",
        nombre: "Gel de Ducha Corporal (Aromas Surtidos) - Purpure",
        categoria: "personal",
        precio: 28000,
        imagen: "../imagenes/cuidado_personal/11.jpeg",
        descripcion: "Jabón líquido corporal en gel disponible en aromas: Bubble Gum, Piña Colada, Watermelon, Caramel Crush o Strawberry. Limpia suavemente sin resecar.",
        destacado: false
    },
    {
        id: "per-12",
        nombre: "Kit Pink Martini - Purpure",
        categoria: "personal",
        precio: 40000,
        imagen: "../imagenes/cuidado_personal/12.jpeg",
        descripcion: "Un set espectacular con la exótica y elegante fragancia Pink Martini. Ideal para regalar o consentirte con una rutina de cuidado completa.",
        destacado: true
    },
    {
        id: "per-13",
        nombre: "Kit Pink Mimosa Body Cream - Purpure",
        categoria: "personal",
        precio: 28000,
        imagen: "../imagenes/cuidado_personal/13.jpeg",
        descripcion: "Kit de cuidado corporal que incluye crema hidratante con el chispeante y cítrico aroma de Pink Mimosa. Suavidad prolongada garantizada.",
        destacado: false
    },
    {
        id: "per-14",
        nombre: "Kit Piña Colada Shower Gel - Purpure",
        categoria: "personal",
        precio: 40000,
        imagen: "../imagenes/cuidado_personal/14.jpeg",
        descripcion: "Transforma tu baño en un oasis tropical con este kit de gel de ducha aroma Piña Colada. Limpieza refrescante con notas veraniegas.",
        destacado: false
    },
    {
        id: "per-15",
        nombre: "Crema Reparadora Nocturna - Trendy",
        categoria: "personal",
        precio: 20000,
        imagen: "../imagenes/cuidado_personal/15.jpeg",
        descripcion: "Tratamiento facial intensivo que trabaja mientras duermes. Restaura la barrera de la piel y combate la sequedad acumulada durante el día.",
        destacado: true
    },
    {
        id: "per-16",
        nombre: "Butters Cream Sandía - Trendy",
        categoria: "personal",
        precio: 28000,
        imagen: "../imagenes/cuidado_personal/16.jpeg",
        descripcion: "Mantequilla corporal extra nutritiva con un dulce y jugoso aroma a sandía. Sella la hidratación y deja la piel radiante.",
        destacado: false
    }
];

