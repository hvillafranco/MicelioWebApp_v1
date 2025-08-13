/**
 * 🍄 MICELIO DATA STRUCTURE
 * Datos estructurados del Modelo MICELIO para visualización fractal-holográfica
 * Contiene toda la información sistémica organizada jerárquicamente
 */

window.MicelioData = {
    
    // Meta-información del modelo
    meta: {
        version: "1.0.0",
        lastUpdated: "2025-08-13",
        description: "Estructura de datos fractal-holográfica del Modelo MICELIO",
        totalElements: 0,
        relationships: 0
    },
    
    // 🧬 GENOMA MICELIAR - Núcleo fundamental
    genome: {
        core: {
            id: "genoma-miceliar",
            label: "Genoma Miceliar",
            type: "nucleus",
            description: "Centro holográfico que contiene toda la información sistémica",
            properties: {
                holographic: true,
                fractal: true,
                selfReplicating: true,
                emergent: true
            }
        },
        
        // ADN Ético - Valores fundamentales
        ethical_dna: {
            valores: [
                {
                    id: "dignidad",
                    label: "Dignidad",
                    description: "Reconocimiento del valor intrínseco de cada persona",
                    antidoto_a: "desprecio, humillación, invisibilización",
                    color: "#7B1FA2"
                },
                {
                    id: "justicia",
                    label: "Justicia",
                    description: "Distribución equitativa de oportunidades y recursos",
                    antidoto_a: "discriminación, exclusión, privilegio",
                    color: "#7B1FA2"
                },
                {
                    id: "solidaridad",
                    label: "Solidaridad",
                    description: "Apoyo mutuo y responsabilidad compartida",
                    antidoto_a: "individualismo, competencia destructiva",
                    color: "#7B1FA2"
                },
                {
                    id: "sustentabilidad",
                    label: "Sustentabilidad",
                    description: "Cuidado de la vida presente y futura",
                    antidoto_a: "extractivismo, cortoplacismo",
                    color: "#7B1FA2"
                }
            ]
        },
        
        // ARN Operativo - Principios de acción
        operational_rna: {
            principios: [
                {
                    id: "pertinencia",
                    label: "Pertinencia",
                    description: "Relevancia contextual y cultural",
                    regla: "Toda intervención debe ser significativa para las personas",
                    color: "#D32F2F"
                },
                {
                    id: "transparencia",
                    label: "Transparencia",
                    description: "Claridad en procesos y decisiones",
                    regla: "La información debe ser accesible y comprensible",
                    color: "#D32F2F"
                },
                {
                    id: "universalidad",
                    label: "Universalidad",
                    description: "Acceso sin discriminación",
                    regla: "Los beneficios deben estar disponibles para todos",
                    color: "#D32F2F"
                },
                {
                    id: "adaptabilidad",
                    label: "Adaptabilidad",
                    description: "Flexibilidad ante cambios",
                    regla: "El sistema debe evolucionar con las necesidades",
                    color: "#D32F2F"
                },
                {
                    id: "corresponsabilidad",
                    label: "Corresponsabilidad",
                    description: "Participación activa de todos los actores",
                    regla: "Cada actor asume su parte en la transformación",
                    color: "#D32F2F"
                },
                {
                    id: "inclusion",
                    label: "Inclusión",
                    description: "Incorporación de la diversidad",
                    regla: "Nadie queda fuera del proceso de desarrollo",
                    color: "#D32F2F"
                }
            ]
        },
        
        // Protocolos META - Sistema nervioso
        meta_protocols: [
            {
                id: "META-001",
                name: "Principio de Trazabilidad del Genoma Contextual",
                description: "Asegura que cada elemento pueda ser rastreado hasta los principios del modelo",
                function: "directriz_cero",
                color: "#1976D2"
            },
            {
                id: "META-002", 
                name: "Diagnóstico Crítico Contextual",
                description: "Matriz de Interrogación para análisis sistémico",
                function: "herramienta_cognitiva",
                color: "#1976D2"
            },
            {
                id: "META-003",
                name: "Análisis de Factores de Conversión",
                description: "Identifica factores que se convierten en funcionamientos valiosos",
                function: "herramienta_cognitiva",
                color: "#1976D2"
            },
            {
                id: "META-004",
                name: "Co-Creación Dialógica",
                description: "Marco para la colaboración horizontal",
                function: "proceso_etica",
                color: "#1976D2"
            },
            {
                id: "META-005",
                name: "Evaluación de Relevancia Dinámica",
                description: "Ajuste continuo de pertinencia contextual",
                function: "proceso_etica",
                color: "#1976D2"
            },
            {
                id: "META-006",
                name: "Mapeo Relacional Sistémico",
                description: "Define cómo establecer relaciones entre elementos",
                function: "herramienta_cognitiva",
                color: "#1976D2"
            },
            {
                id: "META-007",
                name: "Reconocimiento de la Ecología de Saberes",
                description: "Proceso ético para la gestión de fuentes diversas",
                function: "proceso_etica",
                color: "#1976D2"
            },
            {
                id: "META-008",
                name: "Descripción Crítica Multidimensional",
                description: "Guía el llenado de columnas analíticas",
                function: "herramienta_cognitiva",
                color: "#1976D2"
            },
            {
                id: "META-009",
                name: "Ciclo de Vida del Conocimiento",
                description: "Flujo: Propuesto → Validado → En Praxis",
                function: "proceso_etica",
                color: "#1976D2"
            }
        ]
    },
    
    // 🪆 PLAN MATRYOSHKA - Estructura analítica recursiva
    matryoshka: {
        description: "Muñecas anidadas para análisis multidimensional",
        
        muneca_1: {
            name: "Dimensiones Ontológicas",
            question: "¿QUÉ?",
            description: "Categorías existenciales fundamentales de Max-Neef",
            elements: {
                ser: {
                    id: "ser",
                    label: "SER",
                    subtitle: "Disposiciones Internas",
                    correlation: "Yo Soy",
                    description: "Núcleo de identidad, subjetividad y motivación",
                    color: "#E1BEE7",
                    components: [
                        "Identidad", "Valores", "Actitudes", "Conciencia",
                        "Narrativa Personal", "Propósito Existencial"
                    ]
                },
                tener: {
                    id: "tener", 
                    label: "TENER",
                    subtitle: "Recursos y Estructuras",
                    correlation: "Yo Tengo",
                    description: "Recursos, sistemas y estructuras disponibles",
                    color: "#BBDEFB",
                    components: [
                        "Recursos Materiales", "Servicios", "Información",
                        "Redes Sociales", "Infraestructura", "Capital"
                    ]
                },
                hacer: {
                    id: "hacer",
                    label: "HACER", 
                    subtitle: "Acciones y Habilidades",
                    correlation: "Yo Puedo",
                    description: "Acciones y habilidades para alcanzar metas",
                    color: "#C8E6C9",
                    components: [
                        "Habilidades Técnicas", "Conocimientos", "Praxis",
                        "Experiencia", "Competencias", "Destrezas"
                    ]
                },
                estar: {
                    id: "estar",
                    label: "ESTAR",
                    subtitle: "Contexto Habilitador", 
                    correlation: "Yo Estoy",
                    description: "Relaciones y contextos de desarrollo",
                    color: "#FFE0B2",
                    components: [
                        "Lugar", "Relaciones", "Cultura", "Temporalidad",
                        "Territorio", "Comunidad"
                    ]
                }
            }
        },
        
        muneca_2: {
            name: "Niveles Socioecológicos",
            question: "¿DÓNDE?",
            description: "Modelo de Bronfenbrenner expandido",
            elements: {
                microsistema: {
                    id: "micro",
                    label: "MICROSISTEMA",
                    description: "Entorno inmediato, interacciones directas",
                    examples: ["Hogar", "Familia", "Amigos cercanos", "Trabajo directo"],
                    color: "#FFCDD2"
                },
                mesosistema: {
                    id: "meso", 
                    label: "MESOSISTEMA",
                    description: "Conexiones entre entornos, coherencia sistémica",
                    examples: ["Escuela-Familia", "Trabajo-Comunidad", "Redes locales"],
                    color: "#F8BBD9"
                },
                exosistema: {
                    id: "exo",
                    label: "EXOSISTEMA", 
                    description: "Estructuras indirectas, políticas e instituciones",
                    examples: ["Gobierno local", "Medios de comunicación", "Servicios públicos"],
                    color: "#DCEDC8"
                },
                macrosistema: {
                    id: "macro",
                    label: "MACROSISTEMA",
                    description: "Cultura e ideología, narrativas hegemónicas",
                    examples: ["Sistema económico", "Valores culturales", "Ideología dominante"],
                    color: "#E1F5FE"
                },
                cronosistema: {
                    id: "crono",
                    label: "CRONOSISTEMA",
                    description: "Tiempo e historia, patrones temporales",
                    examples: ["Historia personal", "Cambios generacionales", "Eventos históricos"],
                    color: "#FFF3E0"
                }
            }
        },
        
        muneca_3: {
            name: "Componentes de la Capacidad",
            question: "¿CON QUÉ?",
            description: "Anatomía de la capacidad en 7 elementos",
            elements: {
                actitudes: {
                    id: "actitudes",
                    label: "ACTITUDES",
                    description: "Predisposiciones, motor motivacional",
                    examples: ["Adaptabilidad", "Iniciativa", "Curiosidad", "Responsabilidad"],
                    dimension_primary: "SER"
                },
                valores: {
                    id: "valores_comp",
                    label: "VALORES",
                    description: "Brújula ética, orientación teleológica", 
                    examples: ["Respeto", "Empatía", "Integridad", "Responsabilidad cívica"],
                    dimension_primary: "SER"
                },
                habilidades: {
                    id: "habilidades",
                    label: "HABILIDADES",
                    description: "Competencias técnicas, poder hacer",
                    examples: ["Técnicas", "Sociales", "Cognitivas", "Físicas"],
                    dimension_primary: "HACER"
                },
                conocimientos: {
                    id: "conocimientos", 
                    label: "CONOCIMIENTOS",
                    description: "Marco teórico, saber cómo",
                    examples: ["Disciplinario", "Transversal", "Práctico", "Experiencial"],
                    dimension_primary: "HACER"
                },
                recursos: {
                    id: "recursos",
                    label: "RECURSOS",
                    description: "Medios materiales, con qué actuar",
                    examples: ["Económicos", "Materiales", "Tecnológicos", "Naturales"],
                    dimension_primary: "TENER"
                },
                apoyos: {
                    id: "apoyos",
                    label: "APOYOS", 
                    description: "Redes de soporte, entorno facilitador",
                    examples: ["Interpersonales", "Institucionales", "Comunitarios", "Profesionales"],
                    dimension_primary: "ESTAR"
                },
                informacion: {
                    id: "informacion",
                    label: "INFORMACIÓN",
                    description: "Datos relevantes, combustible decisorio",
                    examples: ["Estratégica", "Operativa", "Contextual", "Prospectiva"],
                    dimension_primary: "TENER"
                }
            }
        },
        
        muneca_4: {
            name: "Lentes Analíticos Críticos",
            question: "¿CÓMO?",
            description: "Perspectivas transversales de análisis",
            elements: {
                lente_poder: {
                    id: "poder",
                    label: "LENTE PODER",
                    description: "Relaciones asimétricas, interseccionalidad",
                    focus: ["Dominación", "Resistencia", "Hegemonía", "Contra-hegemonía"],
                    theories: ["Fraser", "Crenshaw", "Foucault"]
                },
                lente_afectivo: {
                    id: "afectivo",
                    label: "LENTE AFECTIVO", 
                    description: "Dimensión emocional, trauma y sanación",
                    focus: ["Emociones", "Trauma", "Sanación", "Vínculos"],
                    theories: ["Van der Kolk", "Maté", "Porges"]
                },
                lente_corporeo: {
                    id: "corporeo",
                    label: "LENTE CORPÓREO",
                    description: "Embodiment, neurobiología",
                    focus: ["Cuerpo", "Neurobiología", "Sensorial", "Kinestésico"],
                    theories: ["Merleau-Ponty", "Damasio", "Lakoff"]
                },
                lente_dialogo: {
                    id: "dialogo",
                    label: "LENTE DIÁLOGO",
                    description: "Comunicación crítica, co-construcción",
                    focus: ["Comunicación", "Construcción social", "Narrativas", "Lenguaje"],
                    theories: ["Freire", "Habermas", "Vygotsky"]
                }
            }
        }
    },
    
    // 🌐 RED MICELIAR - Interconexiones sistémicas
    network: {
        description: "Red de filamentos, rizomas, nodos y espirales",
        
        // Filamentos primarios
        filaments: {
            ser_filament: {
                id: "filamento_ser",
                label: "Filamento SER",
                path: "Identidad → Valores → Actitudes → Conciencia",
                color: "#E1BEE7",
                flow_type: "identitario",
                connections: ["genoma", "actitudes", "valores_comp", "lente_afectivo"]
            },
            tener_filament: {
                id: "filamento_tener", 
                label: "Filamento TENER",
                path: "Recursos → Apoyos → Información → Capital",
                color: "#BBDEFB",
                flow_type: "material",
                connections: ["genoma", "recursos", "apoyos", "informacion"]
            },
            hacer_filament: {
                id: "filamento_hacer",
                label: "Filamento HACER", 
                path: "Habilidades → Conocimientos → Praxis → Experiencia",
                color: "#C8E6C9",
                flow_type: "transformativo",
                connections: ["genoma", "habilidades", "conocimientos", "lente_dialogo"]
            },
            estar_filament: {
                id: "filamento_estar",
                label: "Filamento ESTAR",
                path: "Contexto → Relaciones → Apoyo → Territorio",
                color: "#FFE0B2", 
                flow_type: "contextual",
                connections: ["genoma", "micro", "meso", "exo", "macro", "crono"]
            }
        },
        
        // Rizomas secundarios - conexiones transversales
        rhizomes: [
            {
                id: "rizoma_micro_meso",
                label: "Rizoma Micro-Meso",
                description: "Individual ↔ Relacional",
                connects: ["micro", "meso"],
                breaking_hierarchies: true
            },
            {
                id: "rizoma_meso_exo",
                label: "Rizoma Meso-Exo", 
                description: "Relacional ↔ Institucional",
                connects: ["meso", "exo"],
                breaking_hierarchies: true
            },
            {
                id: "rizoma_exo_macro",
                label: "Rizoma Exo-Macro",
                description: "Institucional ↔ Cultural", 
                connects: ["exo", "macro"],
                breaking_hierarchies: true
            },
            {
                id: "rizoma_macro_crono",
                label: "Rizoma Macro-Crono",
                description: "Cultural ↔ Temporal",
                connects: ["macro", "crono"],
                breaking_hierarchies: true
            }
        ],
        
        // Nodos de convergencia
        convergence_nodes: [
            {
                id: "nodo_poder",
                label: "Nodo Poder",
                description: "Donde se ejerce y se transforma",
                functions: ["ejercicio", "transformacion", "resistencia"],
                color: "#FFCDD2"
            },
            {
                id: "nodo_afectivo",
                label: "Nodo Afectivo",
                description: "Donde se siente y se sana",
                functions: ["sentir", "sanar", "vincular"],
                color: "#F8BBD9"
            },
            {
                id: "nodo_corporeo", 
                label: "Nodo Corpóreo",
                description: "Donde se encarna y se expresa",
                functions: ["encarnar", "expresar", "experimentar"], 
                color: "#DCEDC8"
            },
            {
                id: "nodo_dialogico",
                label: "Nodo Dialógico",
                description: "Donde se comunica y se co-crea",
                functions: ["comunicar", "co_crear", "construir"],
                color: "#E1F5FE"
            }
        ]
    },
    
    // 🌊 FLUJOS TRANSFORMATIVOS - Dinámicas de cambio
    flows: {
        description: "Rutas de transformación desde voluntad hasta bienestar",
        
        // Ruta conceptual principal
        transformation_route: [
            {
                id: "voluntad",
                label: "Voluntad",
                stage: 1,
                description: "Chispa inicial, deseo de transformación",
                color: "#FF6B6B",
                blockers: ["trauma", "desesperanza", "apatia"],
                catalysts: ["inspiracion", "necesidad", "crisis"],
                next: "actitud"
            },
            {
                id: "actitud",
                label: "Actitud", 
                stage: 2,
                description: "Predisposición psicológica, motor motivacional",
                color: "#4ECDC4",
                blockers: ["miedo", "pesimismo", "rigidez"],
                catalysts: ["confianza", "esperanza", "flexibilidad"],
                next: "accion"
            },
            {
                id: "accion",
                label: "Acción",
                stage: 3, 
                description: "Praxis transformadora, movimiento consciente",
                color: "#45B7D1",
                blockers: ["paralisis", "confusion", "recursos_insuficientes"],
                catalysts: ["claridad", "recursos", "apoyo"],
                next: "capacidad"
            },
            {
                id: "capacidad",
                label: "Capacidad",
                stage: 4,
                description: "Libertad sustantiva, poder de elección real",
                color: "#96CEB4", 
                blockers: ["barreras_estructurales", "discriminacion", "exclusion"],
                catalysts: ["factores_conversion", "oportunidades", "inclusion"],
                next: "funcionamientos"
            },
            {
                id: "funcionamientos",
                label: "Funcionamientos",
                stage: 5,
                description: "Estados y actividades valorados, vida que se valora",
                color: "#FFEAA7",
                blockers: ["contexto_adverso", "falta_reconocimiento"],
                catalysts: ["entorno_habilitador", "validacion_social"],
                next: "necesidades"
            },
            {
                id: "necesidades",
                label: "Necesidades",
                stage: 6, 
                description: "Fundamentales satisfechas, bienestar multidimensional",
                color: "#DDA0DD",
                blockers: ["satisfactores_destructivos", "pseudo_satisfactores"],
                catalysts: ["satisfactores_sinergicos", "satisfactores_singulares"],
                next: "bienestar"
            },
            {
                id: "bienestar",
                label: "Bienestar",
                stage: 7,
                description: "Buen Vivir, florecimiento humano",
                color: "#98D8C8",
                blockers: ["insostenibilidad", "inequidad"],
                catalysts: ["sustentabilidad", "justicia", "reciprocidad"],
                next: "regeneracion"
            }
        ],
        
        // Bucles de retroalimentación
        feedback_loops: [
            {
                id: "bucle_aprendizaje",
                label: "Bucle de Aprendizaje",
                path: ["bienestar", "voluntad"],
                type: "positivo",
                description: "El bienestar refuerza la voluntad de continuar"
            },
            {
                id: "bucle_expansion",
                label: "Bucle de Expansión", 
                path: ["funcionamientos", "accion"],
                type: "positivo",
                description: "Los logros motivan más acción"
            },
            {
                id: "bucle_capacitacion",
                label: "Bucle de Capacitación",
                path: ["capacidad", "actitud"],
                type: "positivo", 
                description: "Mayor capacidad mejora la actitud"
            }
        ],
        
        // Espirales emergentes
        emergence_spirals: [
            {
                id: "espiral_voluntad_accion",
                label: "Espiral Voluntad-Acción",
                description: "Del trauma a la agencia",
                phases: ["trauma", "sanacion", "voluntad", "accion", "empoderamiento"],
                direction: "ascendente"
            },
            {
                id: "espiral_individual_colectivo",
                label: "Espiral Individual-Colectivo", 
                description: "Del yo al nosotros",
                phases: ["individual", "relacional", "grupal", "comunitario", "social"],
                direction: "expansiva"
            },
            {
                id: "espiral_local_global",
                label: "Espiral Local-Global",
                description: "Del aquí al allá",
                phases: ["local", "regional", "nacional", "internacional", "global"],
                direction: "escalante"
            }
        ]
    },
    
    // 🗺️ MAPAS CONCEPTUALES - Cartografías navegables
    maps: {
        description: "Mapas navegables del espacio conceptual y existencial",
        
        // Mapa ontológico dimensional
        ontological_map: {
            center: {
                id: "centro_integral",
                label: "Centro Integral",
                description: "Convergencia de todas las dimensiones",
                coordinates: { x: 0, y: 0 },
                color: "#FFD54F"
            },
            
            dimensions: [
                {
                    id: "territorio_ser",
                    label: "Territorio SER",
                    question: "¿Quién Soy?",
                    coordinates: { x: -1, y: -1 },
                    color: "#E1BEE7",
                    components: ["identidad", "valores", "actitudes", "conciencia"],
                    boundaries: "Límites del autoconocimiento y la autenticidad"
                },
                {
                    id: "territorio_tener",
                    label: "Territorio TENER",
                    question: "¿Qué Poseo?", 
                    coordinates: { x: 1, y: -1 },
                    color: "#BBDEFB",
                    components: ["recursos", "servicios", "informacion", "redes"],
                    boundaries: "Límites del acceso y la disponibilidad"
                },
                {
                    id: "territorio_hacer",
                    label: "Territorio HACER",
                    question: "¿Qué Puedo?",
                    coordinates: { x: 1, y: 1 },
                    color: "#C8E6C9", 
                    components: ["habilidades", "conocimientos", "praxis", "experiencia"],
                    boundaries: "Límites de la competencia y la acción"
                },
                {
                    id: "territorio_estar",
                    label: "Territorio ESTAR",
                    question: "¿Dónde Estoy?",
                    coordinates: { x: -1, y: 1 },
                    color: "#FFE0B2",
                    components: ["lugar", "relaciones", "cultura", "temporalidad"],
                    boundaries: "Límites del contexto y la pertenencia"
                }
            ],
            
            // Intersecciones dinámicas
            intersections: [
                {
                    id: "ser_tener",
                    label: "SER ∩ TENER", 
                    description: "Recursos → Identidad: Lo que tengo me define",
                    coordinates: { x: 0, y: -1 },
                    dynamics: ["materialismo", "espiritualidad", "balance"]
                },
                {
                    id: "tener_hacer",
                    label: "TENER ∩ HACER",
                    description: "Recursos → Acción: Con qué actúo",
                    coordinates: { x: 1, y: 0 },
                    dynamics: ["eficiencia", "creatividad", "innovacion"]
                },
                {
                    id: "hacer_estar", 
                    label: "HACER ∩ ESTAR",
                    description: "Acción → Contexto: Dónde y cómo actúo",
                    coordinates: { x: 0, y: 1 },
                    dynamics: ["impacto", "sostenibilidad", "relevancia"]
                },
                {
                    id: "estar_ser",
                    label: "ESTAR ∩ SER",
                    description: "Contexto → Identidad: El lugar me configura",
                    coordinates: { x: -1, y: 0 },
                    dynamics: ["pertenencia", "adaptacion", "resistencia"]
                }
            ]
        },
        
        // Arquitectura multinivel
        multilevel_architecture: {
            levels: [
                {
                    id: "nivel_molecular",
                    label: "Nivel Molecular",
                    description: "Protocolos META, ADN/ARN del sistema",
                    scale: "nano",
                    elements: ["valores", "principios", "protocolos"],
                    metaphor: "genoma"
                },
                {
                    id: "nivel_celular",
                    label: "Nivel Celular",
                    description: "Anatomía de la Capacidad, 7 componentes vitales",
                    scale: "micro",
                    elements: ["actitudes", "valores", "habilidades", "conocimientos", "recursos", "apoyos", "informacion"],
                    metaphor: "celula"
                },
                {
                    id: "nivel_organismico",
                    label: "Nivel Organísmico", 
                    description: "Persona/Colectivo integral, sistema viviente completo",
                    scale: "individual",
                    elements: ["ser", "tener", "hacer", "estar"],
                    metaphor: "organismo"
                },
                {
                    id: "nivel_ecosistemico",
                    label: "Nivel Ecosistémico",
                    description: "Red de interacciones, micelio distribuido",
                    scale: "social",
                    elements: ["micro", "meso", "exo", "macro"],
                    metaphor: "ecosistema"
                },
                {
                    id: "nivel_biosferico",
                    label: "Nivel Biosférico",
                    description: "Límites planetarios, Sistema Tierra",
                    scale: "planetario",
                    elements: ["carbono", "agua", "nutrientes", "informacion"],
                    metaphor: "planeta"
                }
            ]
        }
    },
    
    // 🔗 RELACIONES SISTÉMICAS - Conexiones entre elementos
    relationships: [
        // Relaciones fundamentales
        { source: "genoma-miceliar", target: "ser", type: "genera", strength: 1.0 },
        { source: "genoma-miceliar", target: "tener", type: "genera", strength: 1.0 },
        { source: "genoma-miceliar", target: "hacer", type: "genera", strength: 1.0 },
        { source: "genoma-miceliar", target: "estar", type: "genera", strength: 1.0 },
        
        // Relaciones dimensionales
        { source: "ser", target: "actitudes", type: "contiene", strength: 0.9 },
        { source: "ser", target: "valores_comp", type: "contiene", strength: 0.9 },
        { source: "tener", target: "recursos", type: "contiene", strength: 0.9 },
        { source: "tener", target: "informacion", type: "contiene", strength: 0.9 },
        { source: "hacer", target: "habilidades", type: "contiene", strength: 0.9 },
        { source: "hacer", target: "conocimientos", type: "contiene", strength: 0.9 },
        { source: "estar", target: "apoyos", type: "contiene", strength: 0.9 },
        
        // Relaciones entre niveles
        { source: "micro", target: "ser", type: "influye", strength: 0.8 },
        { source: "meso", target: "hacer", type: "influye", strength: 0.8 },
        { source: "exo", target: "tener", type: "influye", strength: 0.8 },
        { source: "macro", target: "estar", type: "influye", strength: 0.8 },
        
        // Relaciones de flujo
        { source: "voluntad", target: "actitud", type: "fluye_a", strength: 0.9 },
        { source: "actitud", target: "accion", type: "fluye_a", strength: 0.9 },
        { source: "accion", target: "capacidad", type: "fluye_a", strength: 0.9 },
        { source: "capacidad", target: "funcionamientos", type: "fluye_a", strength: 0.9 },
        { source: "funcionamientos", target: "necesidades", type: "fluye_a", strength: 0.9 },
        { source: "necesidades", target: "bienestar", type: "fluye_a", strength: 0.9 },
        
        // Bucles de retroalimentación
        { source: "bienestar", target: "voluntad", type: "retroalimenta", strength: 0.7 },
        { source: "funcionamientos", target: "accion", type: "retroalimenta", strength: 0.6 },
        { source: "capacidad", target: "actitud", type: "retroalimenta", strength: 0.6 }
    ],
    
    // 📊 MÉTRICAS Y METADATOS
    metrics: {
        complexity: {
            total_nodes: 0, // Se calculará dinámicamente
            total_relationships: 0, // Se calculará dinámicamente
            fractal_depth: 4, // Niveles de la Matryoshka
            holographic_redundancy: 0.85 // Porcentaje de información replicada
        },
        
        coherence: {
            epistemological: 0.92, // Coherencia epistemológica evaluada
            operational: 0.88, // Coherencia operativa
            theoretical: 0.94 // Coherencia teórica
        },
        
        coverage: {
            dimensions_covered: 4, // SER, TENER, HACER, ESTAR
            levels_covered: 5, // Micro a Macro + Crono
            perspectives_covered: 4, // Lentes analíticos
            flows_mapped: 7 // Etapas de transformación
        }
    }
};

// Calcular métricas dinámicamente
(function calculateMetrics() {
    let totalNodes = 0;
    let totalRelationships = window.MicelioData.relationships.length;
    
    // Contar nodos en todas las secciones
    function countNodes(obj) {
        let count = 0;
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                if (obj[key].id) count++; // Es un nodo
                else count += countNodes(obj[key]); // Buscar recursivamente
            }
        }
        return count;
    }
    
    totalNodes = countNodes(window.MicelioData);
    
    // Actualizar métricas
    window.MicelioData.metrics.complexity.total_nodes = totalNodes;
    window.MicelioData.metrics.complexity.total_relationships = totalRelationships;
    window.MicelioData.meta.totalElements = totalNodes;
    window.MicelioData.meta.relationships = totalRelationships;
    
    console.log(`🍄 MICELIO Data loaded: ${totalNodes} nodes, ${totalRelationships} relationships`);
})();

// Función de utilidad para búsqueda
window.MicelioData.search = function(query) {
    const results = [];
    
    function searchInObject(obj, path = '') {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                if (obj[key].label && obj[key].label.toLowerCase().includes(query.toLowerCase())) {
                    results.push({
                        ...obj[key],
                        path: path + '.' + key,
                        type: 'node'
                    });
                }
                if (obj[key].description && obj[key].description.toLowerCase().includes(query.toLowerCase())) {
                    results.push({
                        ...obj[key],
                        path: path + '.' + key,
                        type: 'description_match'
                    });
                }
                searchInObject(obj[key], path + '.' + key);
            }
        }
    }
    
    searchInObject(this);
    return results;
};

// Función para obtener elemento por ID
window.MicelioData.getElementById = function(id) {
    function findInObject(obj) {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                if (obj[key].id === id) return obj[key];
                const found = findInObject(obj[key]);
                if (found) return found;
            }
        }
        return null;
    }
    
    return findInObject(this);
};

console.log('🍄 MICELIO Data Structure loaded successfully');