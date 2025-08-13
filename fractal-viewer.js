/**
 * 🍄 MICELIO FRACTAL VIEWER
 * Sistema de visualización interactiva para el Modelo MICELIO
 * Implementa navegación fractal-holográfica con D3.js
 */

class FractalViewer {
    constructor() {
        this.currentView = 'overview';
        this.currentZoom = 1;
        this.animationSpeed = 2;
        this.selectedDimension = 'all';
        
        // Contenedores de visualización
        this.containers = {
            fractal: '#fractal-visualization',
            network: '#network-visualization', 
            flow: '#flow-visualization',
            map: '#map-visualization',
            hero: '#hero-animation'
        };
        
        // Estado de los datos
        this.data = null;
        this.svg = null;
        this.simulation = null;
        
        this.init();
    }
    
    init() {
        console.log('🍄 Inicializando FractalViewer...');
        
        // Cargar datos si están disponibles
        if (window.MicelioData) {
            this.data = window.MicelioData;
            console.log('✅ Datos MICELIO cargados');
        } else {
            console.warn('⚠️ Datos MICELIO no encontrados, usando datos por defecto');
            this.generateDefaultData();
        }
        
        this.setupEventListeners();
        this.initHeroAnimation();
        this.setupControls();
    }
    
    generateDefaultData() {
        // Datos por defecto para funcionalidad básica
        this.data = {
            fractals: {
                genome: {
                    center: { id: 'genoma', label: 'Genoma Miceliar', type: 'core' },
                    nodes: [
                        { id: 'valores', label: 'Valores', type: 'adn', group: 'etico' },
                        { id: 'principios', label: 'Principios', type: 'arn', group: 'etico' },
                        { id: 'meta', label: 'Protocolos META', type: 'nervioso', group: 'sistema' },
                        { id: 'matriz', label: 'Matriz Crítica', type: 'nervioso', group: 'sistema' },
                        { id: 'fractales', label: 'Fractales', type: 'estructura', group: 'holografico' },
                        { id: 'hologramas', label: 'Hologramas', type: 'estructura', group: 'holografico' }
                    ],
                    links: [
                        { source: 'genoma', target: 'valores', strength: 0.8 },
                        { source: 'genoma', target: 'principios', strength: 0.8 },
                        { source: 'genoma', target: 'meta', strength: 0.9 },
                        { source: 'genoma', target: 'matriz', strength: 0.9 },
                        { source: 'genoma', target: 'fractales', strength: 1.0 },
                        { source: 'genoma', target: 'hologramas', strength: 1.0 },
                        { source: 'valores', target: 'principios', strength: 0.6 },
                        { source: 'meta', target: 'matriz', strength: 0.7 },
                        { source: 'fractales', target: 'hologramas', strength: 0.8 }
                    ]
                },
                matryoshka: {
                    munecas: [
                        {
                            level: 1,
                            name: 'Dimensiones Ontológicas',
                            elements: ['SER', 'TENER', 'HACER', 'ESTAR'],
                            color: '#E1BEE7'
                        },
                        {
                            level: 2, 
                            name: 'Niveles Socioecológicos',
                            elements: ['MICRO', 'MESO', 'EXO', 'MACRO', 'CRONO'],
                            color: '#BBDEFB'
                        },
                        {
                            level: 3,
                            name: 'Componentes Capacidad',
                            elements: ['ACTITUDES', 'VALORES', 'HABILIDADES', 'CONOCIMIENTOS', 'RECURSOS', 'APOYOS', 'INFORMACIÓN'],
                            color: '#C8E6C9'
                        },
                        {
                            level: 4,
                            name: 'Lentes Analíticos',
                            elements: ['PODER', 'AFECTIVO', 'CORPÓREO', 'DIÁLOGO'],
                            color: '#FFE0B2'
                        }
                    ]
                }
            },
            network: {
                filaments: [
                    { id: 'ser', label: 'Filamento SER', color: '#E1BEE7', flow: 'identidad' },
                    { id: 'tener', label: 'Filamento TENER', color: '#BBDEFB', flow: 'recursos' },
                    { id: 'hacer', label: 'Filamento HACER', color: '#C8E6C9', flow: 'accion' },
                    { id: 'estar', label: 'Filamento ESTAR', color: '#FFE0B2', flow: 'contexto' }
                ],
                nodes: [],
                links: []
            },
            flows: {
                transformation: [
                    { stage: 'voluntad', label: 'Voluntad', color: '#FF6B6B', x: 0 },
                    { stage: 'actitud', label: 'Actitud', color: '#4ECDC4', x: 1 },
                    { stage: 'accion', label: 'Acción', color: '#45B7D1', x: 2 },
                    { stage: 'capacidad', label: 'Capacidad', color: '#96CEB4', x: 3 },
                    { stage: 'funcionamientos', label: 'Funcionamientos', color: '#FFEAA7', x: 4 },
                    { stage: 'necesidades', label: 'Necesidades', color: '#DDA0DD', x: 5 },
                    { stage: 'bienestar', label: 'Bienestar', color: '#98D8C8', x: 6 }
                ]
            }
        };
    }
    
    setupEventListeners() {
        // Navegación principal
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.target.dataset.view;
                this.switchView(view);
            });
        });
        
        // Navegación de cards
        document.querySelectorAll('.card-action').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const navigate = e.target.dataset.navigate;
                this.switchView(navigate);
            });
        });
        
        // Tabs de fractales
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const fractal = e.target.dataset.fractal;
                this.showFractal(fractal);
            });
        });
        
        // Controles de flujo
        document.querySelectorAll('.flow-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const flow = e.target.dataset.flow;
                this.showFlow(flow);
            });
        });
        
        // Controles de mapa
        document.querySelectorAll('.map-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const map = e.target.dataset.map;
                this.showMap(map);
            });
        });
    }
    
    setupControls() {
        // Control de zoom
        const zoomControl = document.getElementById('zoom-control');
        const zoomValue = document.getElementById('zoom-value');
        
        if (zoomControl) {
            zoomControl.addEventListener('input', (e) => {
                this.currentZoom = parseFloat(e.target.value);
                zoomValue.textContent = this.currentZoom.toFixed(1) + 'x';
                this.updateVisualization();
            });
        }
        
        // Control de animación
        const animationControl = document.getElementById('animation-speed');
        const speedValue = document.getElementById('speed-value');
        const speedLabels = ['Parado', 'Lento', 'Normal', 'Rápido', 'Muy Rápido', 'Máximo'];
        
        if (animationControl) {
            animationControl.addEventListener('input', (e) => {
                this.animationSpeed = parseInt(e.target.value);
                speedValue.textContent = speedLabels[this.animationSpeed];
                this.updateAnimationSpeed();
            });
        }
        
        // Filtro de dimensión
        const dimensionFilter = document.getElementById('filter-dimension');
        if (dimensionFilter) {
            dimensionFilter.addEventListener('change', (e) => {
                this.selectedDimension = e.target.value;
                this.applyDimensionFilter();
            });
        }
        
        // Botón reset
        const resetBtn = document.getElementById('reset-view');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetView();
            });
        }
        
        // Botón pantalla completa
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                this.toggleFullscreen();
            });
        }
    }
    
    switchView(viewName) {
        console.log(`🔄 Cambiando a vista: ${viewName}`);
        
        // Actualizar estado
        this.currentView = viewName;
        
        // Actualizar navegación
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.view === viewName) {
                btn.classList.add('active');
            }
        });
        
        // Ocultar todas las secciones
        document.querySelectorAll('.view-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar sección activa
        const activeSection = document.getElementById(`${viewName}-view`);
        if (activeSection) {
            activeSection.classList.add('active');
            
            // Inicializar visualización específica
            setTimeout(() => {
                this.initViewVisualization(viewName);
            }, 100);
        }
    }
    
    initViewVisualization(viewName) {
        switch(viewName) {
            case 'fractals':
                this.showFractal('genome');
                break;
            case 'network':
                this.createNetworkVisualization();
                break;
            case 'flows':
                this.showFlow('transformation');
                break;
            case 'maps':
                this.showMap('ontological');
                break;
            case 'overview':
                this.initHeroAnimation();
                break;
        }
    }
    
    showFractal(fractalType) {
        console.log(`🔬 Mostrando fractal: ${fractalType}`);
        
        // Actualizar tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.fractal === fractalType) {
                btn.classList.add('active');
            }
        });
        
        // Limpiar contenedor
        const container = d3.select(this.containers.fractal);
        container.selectAll('*').remove();
        
        if (fractalType === 'genome') {
            this.createGenomeVisualization();
        } else if (fractalType === 'matryoshka') {
            this.createMatryoshkaVisualization();
        }
    }
    
    createGenomeVisualization() {
        const container = d3.select(this.containers.fractal);
        const width = 800;
        const height = 600;
        
        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .style('max-width', '100%')
            .style('height', 'auto');
        
        const g = svg.append('g');
        
        // Datos del genoma
        const genomeData = this.data.fractals.genome;
        const nodes = [genomeData.center, ...genomeData.nodes];
        const links = genomeData.links;
        
        // Simulación de fuerza
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(30));
        
        // Enlaces
        const link = g.append('g')
            .selectAll('line')
            .data(links)
            .join('line')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-width', d => Math.sqrt(d.strength * 3));
        
        // Nodos
        const node = g.append('g')
            .selectAll('circle')
            .data(nodes)
            .join('circle')
            .attr('r', d => d.type === 'core' ? 25 : 15)
            .attr('fill', d => this.getNodeColor(d))
            .attr('stroke', '#fff')
            .attr('stroke-width', 2)
            .call(this.drag(simulation));
        
        // Etiquetas
        const label = g.append('g')
            .selectAll('text')
            .data(nodes)
            .join('text')
            .text(d => d.label)
            .attr('font-size', '12px')
            .attr('dx', 20)
            .attr('dy', 4);
        
        // Actualización de la simulación
        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
            
            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);
            
            label
                .attr('x', d => d.x)
                .attr('y', d => d.y);
        });
        
        // Zoom
        const zoom = d3.zoom()
            .scaleExtent([0.1, 3])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });
        
        svg.call(zoom);
        
        // Información del nodo
        node.on('click', (event, d) => {
            this.showNodeDetails(d);
        });
    }
    
    createMatryoshkaVisualization() {
        const container = d3.select(this.containers.fractal);
        const width = 800;
        const height = 600;
        
        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .style('max-width', '100%')
            .style('height', 'auto');
        
        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = 250;
        
        const munecas = this.data.fractals.matryoshka.munecas;
        
        // Crear muñecas concéntricas
        munecas.forEach((muneca, i) => {
            const radius = maxRadius - (i * 50);
            
            // Círculo de la muñeca
            svg.append('circle')
                .attr('cx', centerX)
                .attr('cy', centerY)
                .attr('r', radius)
                .attr('fill', muneca.color)
                .attr('fill-opacity', 0.3)
                .attr('stroke', muneca.color)
                .attr('stroke-width', 2)
                .attr('stroke-dasharray', '5,5');
            
            // Etiqueta de la muñeca
            svg.append('text')
                .attr('x', centerX)
                .attr('y', centerY - radius + 20)
                .attr('text-anchor', 'middle')
                .attr('font-size', '14px')
                .attr('font-weight', 'bold')
                .attr('fill', muneca.color)
                .text(`${muneca.level}. ${muneca.name}`);
            
            // Elementos de la muñeca
            const angleStep = (2 * Math.PI) / muneca.elements.length;
            muneca.elements.forEach((elemento, j) => {
                const angle = j * angleStep;
                const elemRadius = radius - 30;
                const x = centerX + Math.cos(angle) * elemRadius;
                const y = centerY + Math.sin(angle) * elemRadius;
                
                // Círculo del elemento
                svg.append('circle')
                    .attr('cx', x)
                    .attr('cy', y)
                    .attr('r', 8)
                    .attr('fill', muneca.color)
                    .attr('stroke', '#fff')
                    .attr('stroke-width', 1);
                
                // Texto del elemento
                svg.append('text')
                    .attr('x', x)
                    .attr('y', y + 20)
                    .attr('text-anchor', 'middle')
                    .attr('font-size', '10px')
                    .attr('fill', '#333')
                    .text(elemento);
            });
        });
    }
    
    createNetworkVisualization() {
        console.log('🌐 Creando visualización de red...');
        
        const container = d3.select(this.containers.network);
        container.selectAll('*').remove();
        
        const width = 900;
        const height = 700;
        
        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .style('max-width', '100%')
            .style('height', 'auto');
        
        // Crear estructura de red básica
        const filaments = this.data.network.filaments;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = 200;
        
        // Nodo central
        svg.append('circle')
            .attr('cx', centerX)
            .attr('cy', centerY)
            .attr('r', 30)
            .attr('fill', '#FF6B35')
            .attr('stroke', '#fff')
            .attr('stroke-width', 3);
        
        svg.append('text')
            .attr('x', centerX)
            .attr('y', centerY + 5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px')
            .attr('fill', '#fff')
            .text('NÚCLEO');
        
        // Filamentos
        filaments.forEach((filament, i) => {
            const angle = (i * 2 * Math.PI) / filaments.length;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            // Línea del filamento
            svg.append('line')
                .attr('x1', centerX)
                .attr('y1', centerY)
                .attr('x2', x)
                .attr('y2', y)
                .attr('stroke', filament.color)
                .attr('stroke-width', 4)
                .attr('stroke-opacity', 0.7);
            
            // Nodo del filamento
            svg.append('circle')
                .attr('cx', x)
                .attr('cy', y)
                .attr('r', 20)
                .attr('fill', filament.color)
                .attr('stroke', '#fff')
                .attr('stroke-width', 2);
            
            // Etiqueta
            svg.append('text')
                .attr('x', x + Math.cos(angle) * 40)
                .attr('y', y + Math.sin(angle) * 40)
                .attr('text-anchor', 'middle')
                .attr('font-size', '11px')
                .attr('fill', filament.color)
                .attr('font-weight', 'bold')
                .text(filament.id.toUpperCase());
        });
    }
    
    showFlow(flowType) {
        console.log(`🌊 Mostrando flujo: ${flowType}`);
        
        // Actualizar controles
        document.querySelectorAll('.flow-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.flow === flowType) {
                btn.classList.add('active');
            }
        });
        
        const container = d3.select(this.containers.flow);
        container.selectAll('*').remove();
        
        if (flowType === 'transformation') {
            this.createTransformationFlow();
        }
    }
    
    createTransformationFlow() {
        const container = d3.select(this.containers.flow);
        const width = 1000;
        const height = 400;
        
        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .style('max-width', '100%')
            .style('height', 'auto');
        
        const stages = this.data.flows.transformation;
        const stageWidth = width / stages.length;
        const y = height / 2;
        
        stages.forEach((stage, i) => {
            const x = (i + 0.5) * stageWidth;
            
            // Círculo de la etapa
            const circle = svg.append('circle')
                .attr('cx', x)
                .attr('cy', y)
                .attr('r', 30)
                .attr('fill', stage.color)
                .attr('stroke', '#fff')
                .attr('stroke-width', 3)
                .style('cursor', 'pointer');
            
            // Etiqueta
            svg.append('text')
                .attr('x', x)
                .attr('y', y + 5)
                .attr('text-anchor', 'middle')
                .attr('font-size', '10px')
                .attr('fill', '#fff')
                .attr('font-weight', 'bold')
                .text(stage.label.toUpperCase());
            
            // Flecha hacia la siguiente etapa
            if (i < stages.length - 1) {
                const nextX = (i + 1.5) * stageWidth;
                svg.append('path')
                    .attr('d', `M ${x + 30} ${y} L ${nextX - 30} ${y}`)
                    .attr('stroke', '#666')
                    .attr('stroke-width', 2)
                    .attr('marker-end', 'url(#arrowhead)');
            }
            
            // Animación
            if (this.animationSpeed > 0) {
                circle
                    .transition()
                    .duration(2000 / this.animationSpeed)
                    .delay(i * 300)
                    .attr('r', 35)
                    .transition()
                    .duration(500)
                    .attr('r', 30)
                    .on('end', function() {
                        if (i < stages.length - 1) {
                            d3.select(this).style('opacity', 0.7);
                        }
                    });
            }
        });
        
        // Definir marcador de flecha
        svg.append('defs').append('marker')
            .attr('id', 'arrowhead')
            .attr('viewBox', '-0 -5 10 10')
            .attr('refX', 5)
            .attr('refY', 0)
            .attr('orient', 'auto')
            .attr('markerWidth', 5)
            .attr('markerHeight', 5)
            .attr('xoverflow', 'visible')
            .append('path')
            .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
            .attr('fill', '#666')
            .style('stroke', 'none');
    }
    
    showMap(mapType) {
        console.log(`🗺️ Mostrando mapa: ${mapType}`);
        
        // Actualizar controles
        document.querySelectorAll('.map-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.map === mapType) {
                btn.classList.add('active');
            }
        });
        
        const container = d3.select(this.containers.map);
        container.selectAll('*').remove();
        
        if (mapType === 'ontological') {
            this.createOntologicalMap();
        }
    }
    
    createOntologicalMap() {
        const container = d3.select(this.containers.map);
        const width = 800;
        const height = 600;
        
        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .style('max-width', '100%')
            .style('height', 'auto');
        
        const dimensions = [
            { name: 'SER', x: width * 0.3, y: height * 0.3, color: '#E1BEE7', question: '¿Quién Soy?' },
            { name: 'TENER', x: width * 0.7, y: height * 0.3, color: '#BBDEFB', question: '¿Qué Poseo?' },
            { name: 'HACER', x: width * 0.7, y: height * 0.7, color: '#C8E6C9', question: '¿Qué Puedo?' },
            { name: 'ESTAR', x: width * 0.3, y: height * 0.7, color: '#FFE0B2', question: '¿Dónde Estoy?' }
        ];
        
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Centro integral
        svg.append('circle')
            .attr('cx', centerX)
            .attr('cy', centerY)
            .attr('r', 40)
            .attr('fill', '#FFD54F')
            .attr('stroke', '#F57F17')
            .attr('stroke-width', 3);
        
        svg.append('text')
            .attr('x', centerX)
            .attr('y', centerY + 5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px')
            .attr('font-weight', 'bold')
            .text('CENTRO INTEGRAL');
        
        // Dimensiones
        dimensions.forEach(dim => {
            // Círculo de la dimensión
            svg.append('circle')
                .attr('cx', dim.x)
                .attr('cy', dim.y)
                .attr('r', 60)
                .attr('fill', dim.color)
                .attr('fill-opacity', 0.7)
                .attr('stroke', dim.color)
                .attr('stroke-width', 3)
                .style('cursor', 'pointer');
            
            // Nombre
            svg.append('text')
                .attr('x', dim.x)
                .attr('y', dim.y - 5)
                .attr('text-anchor', 'middle')
                .attr('font-size', '16px')
                .attr('font-weight', 'bold')
                .text(dim.name);
            
            // Pregunta
            svg.append('text')
                .attr('x', dim.x)
                .attr('y', dim.y + 15)
                .attr('text-anchor', 'middle')
                .attr('font-size', '10px')
                .text(dim.question);
            
            // Línea al centro
            svg.append('line')
                .attr('x1', dim.x)
                .attr('y1', dim.y)
                .attr('x2', centerX)
                .attr('y2', centerY)
                .attr('stroke', dim.color)
                .attr('stroke-width', 2)
                .attr('stroke-opacity', 0.5)
                .attr('stroke-dasharray', '5,5');
        });
    }
    
    initHeroAnimation() {
        const container = d3.select(this.containers.hero);
        container.selectAll('*').remove();
        
        const width = 400;
        const height = 300;
        
        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .style('max-width', '100%')
            .style('height', 'auto');
        
        // Animación simple del micelio
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Pulsos concéntricos
        for (let i = 0; i < 3; i++) {
            svg.append('circle')
                .attr('cx', centerX)
                .attr('cy', centerY)
                .attr('r', 20)
                .attr('fill', 'none')
                .attr('stroke', '#FF6B35')
                .attr('stroke-width', 2)
                .attr('stroke-opacity', 0)
                .transition()
                .duration(2000)
                .delay(i * 700)
                .attr('r', 100)
                .attr('stroke-opacity', 0.8)
                .transition()
                .duration(1000)
                .attr('stroke-opacity', 0)
                .on('end', function() {
                    d3.select(this).remove();
                });
        }
        
        // Núcleo central
        svg.append('circle')
            .attr('cx', centerX)
            .attr('cy', centerY)
            .attr('r', 20)
            .attr('fill', '#FF6B35')
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);
        
        svg.append('text')
            .attr('x', centerX)
            .attr('y', centerY + 5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px')
            .attr('fill', '#fff')
            .attr('font-weight', 'bold')
            .text('🍄');
    }
    
    // Utilidades
    getNodeColor(node) {
        const colors = {
            core: '#FF6B35',
            adn: '#7B1FA2',
            arn: '#D32F2F',
            nervioso: '#1976D2',
            estructura: '#388E3C'
        };
        return colors[node.type] || '#666';
    }
    
    drag(simulation) {
        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        
        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }
        
        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        
        return d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);
    }
    
    showNodeDetails(node) {
        const overlay = document.getElementById('detail-overlay');
        const body = document.getElementById('overlay-body');
        
        body.innerHTML = `
            <h3>${node.label}</h3>
            <p><strong>Tipo:</strong> ${node.type}</p>
            <p><strong>ID:</strong> ${node.id}</p>
            <p><strong>Grupo:</strong> ${node.group || 'No definido'}</p>
            <p>Información detallada sobre este elemento del modelo MICELIO...</p>
        `;
        
        overlay.classList.remove('hidden');
        
        // Cerrar overlay
        overlay.querySelector('.overlay-close').onclick = () => {
            overlay.classList.add('hidden');
        };
        
        overlay.onclick = (e) => {
            if (e.target === overlay) {
                overlay.classList.add('hidden');
            }
        };
    }
    
    updateVisualization() {
        // Aplicar zoom actual a todas las visualizaciones
        console.log(`🔍 Actualizando zoom: ${this.currentZoom}x`);
    }
    
    updateAnimationSpeed() {
        console.log(`⚡ Velocidad de animación: ${this.animationSpeed}`);
    }
    
    applyDimensionFilter() {
        console.log(`🔍 Filtro de dimensión: ${this.selectedDimension}`);
    }
    
    resetView() {
        this.currentZoom = 1;
        this.animationSpeed = 2;
        this.selectedDimension = 'all';
        
        document.getElementById('zoom-control').value = 1;
        document.getElementById('zoom-value').textContent = '1.0x';
        document.getElementById('animation-speed').value = 2;
        document.getElementById('speed-value').textContent = 'Normal';
        document.getElementById('filter-dimension').value = 'all';
        
        this.updateVisualization();
        console.log('🔄 Vista reiniciada');
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
}

// Hacer disponible globalmente
window.FractalViewer = FractalViewer;