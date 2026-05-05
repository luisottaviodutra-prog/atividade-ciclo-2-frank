// Módulo de Navegação
const Navigation = {
    showDashboard: function() {
        document.getElementById('home-page').classList.add('hidden');
        document.getElementById('dashboard-page').classList.remove('hidden');
        this.initializeDashboard();
    },
    
    showHome: function() {
        document.getElementById('dashboard-page').classList.add('hidden');
        document.getElementById('home-page').classList.remove('hidden');
    }
};

// Módulo de Animações
const Animations = {
    animateBars: function() {
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transform = 'scaleY(0)';
                bar.style.transformOrigin = 'bottom';
                setTimeout(() => {
                    bar.style.transition = 'transform 0.5s ease';
                    bar.style.transform = 'scaleY(1)';
                }, 100);
            }, index * 100);
        });
    },
    
    animateLineChart: function() {
        const linePoints = document.querySelectorAll('.line-point');
        linePoints.forEach((point, index) => {
            setTimeout(() => {
                point.style.opacity = '0';
                point.style.transform = 'translateX(-50%) scale(0)';
                setTimeout(() => {
                    point.style.transition = 'all 0.3s ease';
                    point.style.opacity = '1';
                    point.style.transform = 'translateX(-50%) scale(1)';
                }, 100);
            }, index * 150);
        });
    }
};

// Módulo de Interação
const Interactions = {
    handleActionButtons: function() {
        const actionButtons = document.querySelectorAll('.action-btn');
        actionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const actionText = this.getAttribute('data-action');
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                    alert(`Ação "${actionText}" clicada!`);
                }, 150);
            });
        });
    },
    
    handleStatCards: function() {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
};

// Módulo de Gráficos
const Charts = {
    initializeBarChart: function() {
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            const height = bar.getAttribute('data-height');
            const label = bar.getAttribute('data-label');
            
            if (height) {
                bar.style.height = height + 'px';
            }
            
            if (label) {
                const labelElement = document.createElement('div');
                labelElement.className = 'bar-label';
                labelElement.textContent = label;
                bar.appendChild(labelElement);
            }
        });
    },
    
    initializeLineChart: function() {
        const linePoints = document.querySelectorAll('.line-point');
        linePoints.forEach(point => {
            const x = point.getAttribute('data-x');
            const y = point.getAttribute('data-y');
            
            if (x) {
                point.style.left = x + '%';
            }
            
            if (y) {
                point.style.bottom = y + 'px';
            }
        });
    }
};

// Módulo de Inicialização
const App = {
    init: function() {
        this.setupEventListeners();
        this.initializeComponents();
    },
    
    setupEventListeners: function() {
        // Botões de navegação
        document.addEventListener('DOMContentLoaded', function() {
            Interactions.handleActionButtons();
            Interactions.handleStatCards();
        });
    },
    
    initializeComponents: function() {
        // Inicializar gráficos
        Charts.initializeBarChart();
        Charts.initializeLineChart();
        
        // Adicionar animações quando o dashboard for carregado
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.id === 'dashboard-page' && !target.classList.contains('hidden')) {
                        setTimeout(() => {
                            Animations.animateBars();
                            Animations.animateLineChart();
                        }, 300);
                    }
                }
            });
        });
        
        observer.observe(document.getElementById('dashboard-page'), {
            attributes: true,
            attributeFilter: ['class']
        });
    },
    
    initializeDashboard: function() {
        // Inicializar componentes específicos do dashboard
        setTimeout(() => {
            Animations.animateBars();
            Animations.animateLineChart();
        }, 300);
    }
};

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    App.init();
});

// Exportar módulos para uso global
window.Navigation = Navigation;
window.Animations = Animations;
window.Interactions = Interactions;
window.Charts = Charts;
window.App = App;