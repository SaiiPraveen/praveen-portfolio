// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  
  themeToggle.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
  });

  // Hero Section Background Animation
  const heroBackground = document.getElementById('heroBackground');
  
  // Data formulas and code snippets
  const formulas = [
    "y = mx + b",
    "f(x) = ∑(xᵢ - μ)²",
    "p-value < 0.05",
    "SELECT * FROM data",
    "df.groupby('category')",
    "model.fit(X, y)",
    "plt.plot(x, y)",
    "function analyze() {}",
    "const results = []",
    "npm run build",
    "git commit -m 'analysis'",
    "docker build -t app .",
    "JSON.parse(data)",
    "axios.get('/api')",
    "React.useEffect()",
    "λ = 1/μ",
    "σ = √(Σ(x-μ)²/N)",
    "R² = 1 - SSR/SST",
    "P(A|B) = P(B|A)P(A)/P(B)",
    "∇f(x,y) = [∂f/∂x, ∂f/∂y]"
  ];
  
  // Create floating formulas
  for (let i = 0; i < 15; i++) {
    const formula = document.createElement('div');
    formula.classList.add('formula');
    formula.textContent = formulas[Math.floor(Math.random() * formulas.length)];
    
    // Random vertical position (avoid center where content is)
    let top;
    if (i % 3 === 0) {
      top = 10 + Math.random() * 30; // Top section
    } else if (i % 3 === 1) {
      top = 60 + Math.random() * 30; // Bottom section
    } else {
      top = 35 + Math.random() * 10; // Middle but sparse
    }
    
    formula.style.top = `${top}%`;
    formula.style.setProperty('--formula-width', `${formula.textContent.length * 9}px`);
    formula.style.setProperty('--float-y', `${(Math.random() - 0.5) * 40}px`);
    
    // Random animation duration and delay
    const duration = 25 + Math.random() * 20;
    const delay = Math.random() * 15;
    
    formula.style.animation = `floatAcross ${duration}s linear ${delay}s infinite, formulaType ${duration}s linear ${delay}s infinite`;
    heroBackground.appendChild(formula);
  }
  
  // Create data points
  for (let i = 0; i < 25; i++) {
    const dataPoint = document.createElement('div');
    dataPoint.classList.add('data-point');
    
    // Random size between 3-8px
    const size = Math.random() * 5 + 3;
    dataPoint.style.width = `${size}px`;
    dataPoint.style.height = `${size}px`;
    
    // Random position
    dataPoint.style.left = `${Math.random() * 100}%`;
    dataPoint.style.top = `${Math.random() * 100}%`;
    
    // Random color with purple theme
    const hue = 270 + (Math.random() * 20 - 10);
    const saturation = 60 + Math.random() * 30;
    const lightness = 50 + Math.random() * 20;
    dataPoint.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
    
    // Random animation
    const duration = 8 + Math.random() * 12;
    const delay = Math.random() * 10;
    dataPoint.style.animation = `dataPointPulse ${duration}s ease-in-out ${delay}s infinite, subtleFloat ${duration * 2}s ease-in-out ${delay}s infinite`;
    
    heroBackground.appendChild(dataPoint);
  }
  
  // Create bar chart elements
  const barHeights = [80, 120, 60, 150, 90, 110, 70, 130];
  for (let i = 0; i < barHeights.length; i++) {
    const chartBar = document.createElement('div');
    chartBar.classList.add('chart-bar');
    
    // Position bars along bottom
    const left = 5 + i * 11;
    chartBar.style.left = `${left}%`;
    chartBar.style.setProperty('--target-height', `${barHeights[i]}px`);
    
    // Staggered animation with longer delay
    const delay = i * 0.5 + 2;
    chartBar.style.animation = `barGrow 3s ease-out ${delay}s forwards`;
    
    heroBackground.appendChild(chartBar);
  }
  
  // Create data flow lines
  for (let i = 0; i < 5; i++) {
    const flowLine = document.createElement('div');
    flowLine.classList.add('data-flow');
    
    // Random vertical position (avoid center)
    let top;
    if (i < 2) {
      top = 15 + Math.random() * 25; // Top section
    } else {
      top = 65 + Math.random() * 25; // Bottom section
    }
    
    flowLine.style.top = `${top}%`;
    
    // Random thickness
    const thickness = 0.5 + Math.random();
    flowLine.style.height = `${thickness}px`;
    
    // Random speed and delay
    const duration = 30 + Math.random() * 20;
    const delay = Math.random() * 10;
    flowLine.style.setProperty('--float-y', `${(Math.random() - 0.5) * 20}px`);
    
    flowLine.style.animation = `floatAcross ${duration}s linear ${delay}s infinite`;
    heroBackground.appendChild(flowLine);
  }
  
  // Create network nodes
  for (let i = 0; i < 20; i++) {
    const node = document.createElement('div');
    node.classList.add('network-node');
    
    // Random position
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    
    node.style.left = `${left}%`;
    node.style.top = `${top}%`;
    
    // Random animation
    const duration = 6 + Math.random() * 8;
    const delay = Math.random() * 5;
    
    node.style.animation = `nodePulse ${duration}s ease-in-out ${delay}s infinite`;
    heroBackground.appendChild(node);
  }

  // Filter functionality for certificates
  const filterBtns = document.querySelectorAll('.filter-btn');
  const certificateCards = document.querySelectorAll('.certificate-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      certificateCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});