// Portfolio Interactive Features

// Smooth scroll with offset for fixed header
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Update active navigation states
        updateActiveNav(id);
    }
}

// Update active navigation states
function updateActiveNav(activeId) {
    // Update top navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.target === activeId) {
            btn.classList.add('active');
        }
    });

    // Update sidebar navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === activeId) {
            link.classList.add('active');
        }
    });
}

// Intersection Observer for scroll spy
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateActiveNav(entry.target.id);
            
            // Add animation class
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// Modal Management
const modals = {
    project: document.getElementById('project-modal'),
    experience: document.getElementById('experience-modal')
};

function openModal(type) {
    const modal = modals[type];
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Add animation class
        setTimeout(() => {
            modal.querySelector('.modal-content').classList.add('modal-animate');
        }, 10);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        Object.keys(modals).forEach(key => {
            if (modals[key].style.display === 'flex') {
                closeModal(modals[key].id);
            }
        });
    }
});

// Project Data with detailed case studies
const projectsData = {
    'gan-unet': {
        title: 'Image Encryption using GAN + U-Net',
        subtitle: 'Novel Cryptographic Approach using Deep Learning',
        description: `
            <div class="project-section">
                <h3>Abstract</h3>
                <p>This research project introduces a hybrid image encryption framework that leverages the feature extraction capabilities of U-Net architecture combined with the adversarial training of GANs, further enhanced by chaotic map algorithms for permutation. The system addresses vulnerabilities in traditional encryption methods by introducing non-linearity through deep learning transformations.</p>
            </div>
            
            <div class="project-section">
                <h3>Problem Statement</h3>
                <p>Traditional encryption algorithms like AES and DES are vulnerable to quantum computing attacks and statistical analysis. Images have high redundancy and strong correlation between adjacent pixels, making them susceptible to brute-force attacks when encrypted with conventional methods.</p>
            </div>
            
            <div class="project-section">
                <h3>Methodology</h3>
                <div class="architecture-diagram">
                    <div class="arch-step">1. Input Image Preprocessing (Normalization)</div>
                    <div class="arrow">↓</div>
                    <div class="arch-step">2. U-Net Feature Extraction & Segmentation</div>
                    <div class="arrow">↓</div>
                    <div class="arch-step">3. GAN Generator Transformation</div>
                    <div class="arrow">↓</div>
                    <div class="arch-step">4. Arnold Cat Map Permutation (Chaotic)</div>
                    <div class="arrow">↓</div>
                    <div class="arch-step">5. Encrypted Cipher Image Output</div>
                </div>
            </div>
            
            <div class="project-section">
                <h3>Key Innovations</h3>
                <ul>
                    <li><strong>Dual-Layer Security:</strong> Combines deep learning transformation with chaotic permutation</li>
                    <li><strong>Adaptive Key Generation:</strong> Uses image features to generate encryption keys dynamically</li>
                    <li><strong>Resistance to Statistical Attacks:</strong> Histogram analysis shows uniform distribution</li>
                    <li><strong>Large Key Space:</strong> 2^128 possible combinations resisting brute-force</li>
                </ul>
            </div>
            
            <div class="project-section">
                <h3>Performance Metrics</h3>
                <div class="results-grid">
                    <div class="result-card">
                        <h4>Entropy</h4>
                        <p class="metric">7.997</p>
                        <p class="desc">Ideal: 8.0 (Higher is better)</p>
                    </div>
                    <div class="result-card">
                        <h4>PSNR</h4>
                        <p class="metric">8.42 dB</p>
                        <p class="desc">Low values indicate strength</p>
                    </div>
                    <div class="result-card">
                        <h4>Correlation</h4>
                        <p class="metric">0.0012</p>
                        <p class="desc">Near-zero is optimal</p>
                    </div>
                </div>
            </div>
            
            <div class="project-section">
                <h3>Technologies Used</h3>
                <div class="tech-grid">
                    <div class="tech-item">PyTorch</div>
                    <div class="tech-item">TensorFlow</div>
                    <div class="tech-item">OpenCV</div>
                    <div class="tech-item">NumPy</div>
                    <div class="tech-item">Matplotlib</div>
                    <div class="tech-item">Python 3.9</div>
                </div>
            </div>
        `,
        image: 'images/proj1.png',
        github: 'https://github.com/chakravarthi/image-encryption-gan',
        demo: null,
        tags: ['Deep Learning', 'Computer Vision', 'Cryptography', 'Python']
    },
    
    'plagiarism': {
        title: 'Plagiarism Checker using NLP',
        subtitle: 'Semantic Text Similarity Detection System',
        description: `
            <div class="project-section">
                <h3>Abstract</h3>
                <p>An advanced plagiarism detection system that utilizes Natural Language Processing to identify semantic similarity between documents, going beyond simple string matching to detect paraphrased content and idea theft.</p>
            </div>
            
            <div class="project-section">
                <h3>Problem Statement</h3>
                <p>Traditional plagiarism checkers rely on string matching, failing to detect intelligent plagiarism where sentences are reworded or ideas are stolen without exact text copying. This system addresses semantic similarity detection.</p>
            </div>
            
            <div class="project-section">
                <h3>System Architecture</h3>
                <div class="architecture-diagram">
                    <div class="arch-step">1. Document Ingestion (PDF, DOCX, TXT)</div>
                    <div class="arrow">↓</div>
                    <div class="arch-step">2. Text Preprocessing & Cleaning</div>
                    <div class="arrow">↓</div>
                    <div class="arch-step">3. TF-IDF Vectorization + Word2Vec Embeddings</div>
                    <div class="arrow">↓</div>
                    <div class="arch-step">4. Cosine Similarity & Jaccard Index</div>
                    <div class="arrow">↓</div>
                    <div class="arch-step">5. Similarity Report with Highlighting</div>
                </div>
            </div>
            
            <div class="project-section">
                <h3>Key Features</h3>
                <ul>
                    <li><strong>Semantic Analysis:</strong> Uses Word2Vec embeddings to understand context and meaning</li>
                    <li><strong>Multi-format Support:</strong> Processes PDF, DOCX, TXT, and HTML files</li>
                    <li><strong>Paraphrase Detection:</strong> Identifies reworded content through semantic similarity</li>
                    <li><strong>Real-time Comparison:</strong> Web interface for instant document checking</li>
                    <li><strong>Detailed Reports:</strong> Heatmaps showing similar sections</li>
                </ul>
            </div>
            
            <div class="project-section">
                <h3>Performance Results</h3>
                <div class="results-grid">
                    <div class="result-card">
                        <h4>Accuracy</h4>
                        <p class="metric">94.3%</p>
                        <p class="desc">On 1000 test documents</p>
                    </div>
                    <div class="result-card">
                        <h4>Precision</h4>
                        <p class="metric">92.8%</p>
                        <p class="desc">Low false positives</p>
                    </div>
                    <div class="result-card">
                        <h4>Speed</h4>
                        <p class="metric">0.3s</p>
                        <p class="desc">Per 1000 words</p>
                    </div>
                </div>
            </div>
            
            <div class="project-section">
                <h3>Tech Stack</h3>
                <div class="tech-grid">
                    <div class="tech-item">Python</div>
                    <div class="tech-item">scikit-learn</div>
                    <div class="tech-item">NLTK</div>
                    <div class="tech-item">spaCy</div>
                    <div class="tech-item">Flask</div>
                    <div class="tech-item">React</div>
                </div>
            </div>
        `,
        image: 'images/proj2.png',
        github: 'https://github.com/chakravarthi/plagiarism-checker',
        demo: 'https://plagiarism-checker-demo.herokuapp.com',
        tags: ['NLP', 'Machine Learning', 'Flask', 'React']
    }
};

// Experience Data with detailed case studies
const experienceData = {
    'cdac': {
        title: 'C-DAC Cyber Gyan Virtual Internship',
        role: 'Cybersecurity Intern',
        duration: '4 Weeks (June 2024 - July 2024)',
        certificate: 'images/Cybergyan_Certificate.png',
        description: `
            <div class="exp-detail-section">
                <h3>Organization Overview</h3>
                <p><strong>Centre for Development of Advanced Computing (C-DAC)</strong> is India's premier R&D organization in IT and Electronics, operating under the Ministry of Electronics and Information Technology. The Cyber Gyan program is designed to build cybersecurity capacity among engineering students.</p>
            </div>
            
            <div class="exp-detail-section">
                <h3>Training Modules Completed</h3>
                <ul class="outcomes-list">
                    <li><strong>Module 1:</strong> Cybersecurity Fundamentals - CIA Triad, Risk Management, Compliance (GDPR, ISO 27001)</li>
                    <li><strong>Module 2:</strong> Network Security - Firewalls, IDS/IPS, VPN Configuration, Packet Analysis with Wireshark</li>
                    <li><strong>Module 3:</strong> Malware Analysis - Static analysis using IDA Pro, Dynamic analysis in sandboxed environments</li>
                    <li><strong>Module 4:</strong> Cryptography - Implementation of AES, RSA, and Hashing algorithms in Python</li>
                    <li><strong>Module 5:</strong> Web Application Security - OWASP Top 10, SQL Injection, XSS mitigation techniques</li>
                    <li><strong>Module 6:</strong> Incident Response - Forensics basics, Log analysis, Threat hunting methodologies</li>
                </ul>
            </div>
            
            <div class="exp-detail-section">
                <h3>Capstone Project: Fake News Detection System</h3>
                <div class="project-highlight">
                    <h4>Objective</h4>
                    <p>Develop a machine learning system to automatically identify fake news articles using linguistic features and source credibility analysis.</p>
                    
                    <h4>Implementation Details</h4>
                    <ul>
                        <li><strong>Dataset:</strong> LIAR dataset (12.8K labeled statements) + custom scraped news</li>
                        <li><strong>Features Extracted:</strong> TF-IDF vectors, sentiment polarity, readability scores, punctuation patterns</li>
                        <li><strong>Models Tested:</strong> Logistic Regression (85.2%), Random Forest (87.4%), LSTM (89.4%)</li>
                        <li><strong>Final Architecture:</strong> Ensemble of LSTM + BERT for 92.1% accuracy</li>
                    </ul>
                    
                    <h4>Key Features Delivered</h4>
                    <ul>
                        <li>Chrome extension for real-time news verification</li>
                        <li>Confidence scoring with explanation (LIME integration)</li>
                        <li>Source credibility database integration</li>
                        <li>Fact-checking API integration (Google Fact Check API)</li>
                    </ul>
                    
                    <h4>Outcome</h4>
                    <p>Presented project to C-DAC mentors; received commendation for innovative approach to combining NLP with cybersecurity (combating information warfare).</p>
                </div>
            </div>
            
            <div class="exp-detail-section">
                <h3>Tools & Technologies Mastered</h3>
                <div class="tech-grid">
                    <div class="tech-item">Wireshark</div>
                    <div class="tech-item">Metasploit</div>
                    <div class="tech-item">Nmap</div>
                    <div class="tech-item">Burp Suite</div>
                    <div class="tech-item">Kali Linux</div>
                    <div class="tech-item">Python</div>
                    <div class="tech-item">TensorFlow</div>
                    <div class="tech-item">Flask</div>
                </div>
            </div>
            
            <div class="exp-detail-section">
                <h3>Key Achievements</h3>
                <ul>
                    <li>🏆 <strong>Top Performer:</strong> Ranked in top 5% of 500+ participants nationwide</li>
                    <li>📝 <strong>Research Paper:</strong> Co-authored paper on "ML-Based Fake News Detection" (under review)</li>
                    <li>🎯 <strong>CTF Score:</strong> Solved 15/20 challenges in final Capture The Flag competition</li>
                </ul>
            </div>
        `
    },
    
    'bsnl': {
        title: 'BSNL Telecom Internship',
        role: 'Telecom Engineering Intern',
        duration: '2 Weeks (May 2024)',
        certificate: 'images/BSNL_Certificate.png',
        description: `
            <div class="exp-detail-section">
                <h3>Organization Overview</h3>
                <p><strong>Bharat Sanchar Nigam Limited (BSNL)</strong> is India's government-owned telecommunications company with over 63,000 employees and 121 million customers. The internship provided exposure to India's largest telecom infrastructure.</p>
            </div>
            
            <div class="exp-detail-section">
                <h3>Training Curriculum</h3>
                <ul class="outcomes-list">
                    <li><strong>Telecom Fundamentals:</strong> PSTN architecture, signaling systems (SS7), switching concepts</li>
                    <li><strong>Optical Fiber Communication:</strong> DWDM principles, OTDR testing, fiber splicing techniques</li>
                    <li><strong>Mobile Networks:</strong> GSM/CDMA architecture, 4G LTE core network, call flow procedures</li>
                    <li><strong>Broadband Technologies:</strong> ADSL2+, VDSL2, GPON deployment and troubleshooting</li>
                    <li><strong>Network Management:</strong> OSS/BSS systems, fault management, SLA monitoring</li>
                </ul>
            </div>
            
            <div class="exp-detail-section">
                <h3>Hands-on Industrial Experience</h3>
                <div class="project-highlight">
                    <h4>Site Visits & Practical Work</h4>
                    <ul>
                        <li><strong>Telephone Exchange Visit:</strong> Observed digital switching systems (Alcatel-Lucent), line termination equipment, and MDF (Main Distribution Frame)</li>
                        <li><strong>BTS Site Visit:</strong> Studied antenna configurations, RF power calculations, and baseband unit operations</li>
                        <li><strong>NOC Visit:</strong> Monitored live network traffic, alarm management systems, and performance metrics dashboards</li>
                        <li><strong>Fiber Distribution Hub:</strong> Learned fusion splicing, OTDR testing procedures, and optical power measurement</li>
                    </ul>
                    
                    <h4>Practical Skills Acquired</h4>
                    <ul>
                        <li>Cable termination and testing using OTDR (Optical Time Domain Reflectometer)</li>
                        <li>Signal strength measurement using spectrum analyzers</li>
                        <li>Basic fault isolation in copper and fiber networks</li>
                        <li>Understanding of QoS parameters: latency, jitter, packet loss</li>
                        <li>Emergency restoration procedures for fiber cuts</li>
                    </ul>
                </div>
            </div>
            
            <div class="exp-detail-section">
                <h3>Technical Documentation Prepared</h3>
                <ul>
                    <li>Network topology diagram of Jalandhar SSA (Short Service Area)</li>
                    <li>Call flow analysis report for mobile originated calls</li>
                    <li>Fiber optic cable loss budget calculation sheet</li>
                    <li>Comparative analysis of 4G vs 5G network architectures</li>
                </ul>
            </div>
            
            <div class="exp-detail-section">
                <h3>Technologies & Equipment</h3>
                <div class="tech-grid">
                    <div class="tech-item">DWDM</div>
                    <div class="tech-item">GPON</div>
                    <div class="tech-item">MPLS</div>
                    <div class="tech-item">4G LTE</div>
                    <div class="tech-item">OTDR</div>
                    <div class="tech-item">Spectrum Analyzer</div>
                    <div class="tech-item">Fusion Splicer</div>
                    <div class="tech-item">Power Meter</div>
                </div>
            </div>
            
            <div class="exp-detail-section">
                <h3>Key Learnings</h3>
                <ul>
                    <li>Understanding of telecom infrastructure scalability challenges in rural India</li>
                    <li>Importance of redundancy and disaster recovery in critical communication systems</li>
                    <li>Regulatory compliance requirements for government telecom operators</li>
                    <li>Evolution path from traditional PSTN to Next Generation Networks (NGN)</li>
                </ul>
            </div>
        `
    }
};

// Modal Functions
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const details = document.getElementById('project-details');
    
    details.innerHTML = `
        <div class="modal-header">
            <div class="modal-tags">
                ${project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
            </div>
            <h2>${project.title}</h2>
            <p class="modal-subtitle">${project.subtitle}</p>
        </div>
        
        <div class="modal-body">
            <div class="modal-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            ${project.description}
        </div>
        
        <div class="modal-actions">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source Code
            </a>
            ${project.demo ? `
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                    <span>Live Demo</span>
                </a>
            ` : ''}
        </div>
    `;
    
    openModal('project');
}

function openExperienceModal(expId) {
    const exp = experienceData[expId];
    if (!exp) return;
    
    const modal = document.getElementById('experience-modal');
    const details = document.getElementById('experience-details-content');
    
    details.innerHTML = `
        <div class="modal-header">
            <div class="exp-title-block">
                <h2>${exp.title}</h2>
                <p class="exp-role-large">${exp.role}</p>
                <p class="exp-duration-large">📅 ${exp.duration}</p>
            </div>
        </div>
        
        <div class="modal-body">
            <div class="exp-columns">
                <div class="exp-main">
                    ${exp.description}
                </div>
                
                <div class="exp-sidebar">
                    <div class="certificate-section">
                        <h3>Certificate</h3>
                        <div class="certificate-container" onclick="window.open('${exp.certificate}', '_blank')">
                            <img src="${exp.certificate}" alt="Certificate" class="certificate-img" loading="lazy">
                            <div class="certificate-overlay">
                                <span>Click to view full size</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    openModal('experience');
}

// Celebration Animation (Confetti)
(function initCelebration() {
    const canvas = document.getElementById('celebration');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#f72585', '#7209b7'];
    const pieces = [];
    const gravity = 0.15;
    const pieceCount = 150;

    for (let i = 0; i < pieceCount; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 100,
            vy: -(Math.random() * 8 + 6),
            vx: Math.random() * 4 - 2,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 4 - 2,
            shape: Math.random() > 0.5 ? 'rect' : 'circle'
        });
    }

    let animationId;
    let isAnimating = true;

    function animate() {
        if (!isAnimating) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        pieces.forEach(p => {
            p.vy += gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            
            if (p.shape === 'rect') {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.restore();

            // Reset if out of bounds
            if (p.y > canvas.height + 50) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
                p.vy = -(Math.random() * 8 + 6);
            }
        });
        
        animationId = requestAnimationFrame(animate);
    }

    animate();

    // Stop animation after 3.5 seconds
    setTimeout(() => {
        isAnimating = false;
        cancelAnimationFrame(animationId);
        canvas.style.display = 'none';
        
        // Smooth scroll to about section
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 3500);

    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
})();

// Mobile menu toggle (for responsive)
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// Initialize tooltips and other interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to cards
    document.querySelectorAll('.case-card, .exp-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openProjectModal = openProjectModal;
window.openExperienceModal = openExperienceModal;
window.closeModal = closeModal;
window.toggleMobileMenu = toggleMobileMenu;