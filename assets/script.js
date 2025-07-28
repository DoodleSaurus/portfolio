const Portfolio = (() => {
    const config = {
        skills: [
            { name: "HTML", category: "frontend", image: "assets/skills/html-icon.svg", learning: false },
            { name: "CSS", category: "frontend", image: "assets/skills/css-icon.svg", learning: false },
            { name: "Bootstrap", category: "frontend", image: "assets/skills/bootstrap-icon.svg", learning: false },
            { name: "XML", category: "frontend", image: "assets/skills/xml-icon.svg", learning: false },
            { name: "Wix", category: "frontend", image: "assets/skills/wix-icon.svg", learning: false },
            { name: "Java - Android Studio JDK", category: "backend", image: "assets/skills/java-icon.svg", learning: false },
            { name: "Python", category: "backend", image: "assets/skills/python-icon.svg", learning: false },
            { name: "PHP", category: "backend", image: "assets/skills/php-icon.svg", learning: false },
            { name: "MySQL", category: "backend", image: "assets/skills/mysql-icon.svg", learning: false },
            { name: "Firebase", category: "backend", image: "assets/skills/firebase-icon.svg", learning: false },
            { name: "Wordpress", category: "webmng", image: "assets/skills/wordpress-icon.svg", learning: false },
            { name: "FL Studio", category: "audio", image: "assets/skills/fl-studio-icon.svg", learning: false },
            { name: "Adobe Photoshop", category: "videographics", image: "assets/skills/photoshop-icon.svg", learning: false },
            { name: "Adobe Illustrator", category: "videographics", image: "assets/skills/illustrator-icon.svg", learning: true },
            { name: "Wondershare Filmora 12", category: "videographics", image: "assets/skills/filmora-icon.svg", learning: false },
            { name: "C#", category: "backend", image: "assets/skills/cs-icon.svg", learning: true },
            { name: "C++", category: "backend", image: "assets/skills/cpp-icon.svg", learning: true },
            { name: "Unity", category: "gameengine", image: "assets/skills/unity-icon.svg", learning: true },
            { name: "Unreal Engine", category: "gameengine", image: "assets/skills/ue-icon.svg", learning: true },,
            { name: "Blender", category: "videographics", image: "assets/skills/blender-icon.svg", learning: true },
            { name: "Git", category: "backend", image: "assets/skills/git-icon.svg", learning: true },
            { name: "Javascript", category: "backend", image: "assets/skills/js-icon.svg", learning: true },
            { name: "SEO", category: "other", image: "assets/skills/seo-icon.svg", learning: false },
            { name: "SEM", category: "other", image: "assets/skills/sem-icon.svg", learning: false },
            { name: "Copywriting", category: "other", image: "assets/skills/copywriting-icon.svg", learning: false },
            { name: "Prototyping", category: "other", image: "assets/skills/prototyping-icon.svg", learning: false }            
        ],

        languages: [
            { name: "Filipino", level: "Native", image: "assets/languages/filipino-icon.svg" },
            { name: "English", level: "Native", image: "assets/languages/english-icon.svg" },
            { name: "Italian", level: "C1", image: "assets/languages/italian-icon.svg" },
            { name: "French", level: "A1", image: "assets/languages/french-icon.svg" },
            { name: "Spanish", level: "A1", image: "assets/languages/spanish-icon.svg" },
            { name: "Turkish", level: "A1", image: "assets/languages/turkish-icon.svg" }
        ],
        projects: [
            {
                title: "Elfizzy",
                description: "Elfizzy is a vibrant brand concept created for a school marketing project. It features a fictional sparkling beverage company with a unique product line and original snack flavors. I developed a marketing strategy and built a responsive website using HTML, CSS, and Bootstrap to showcase the brand identity.",
                image: "assets/projects/elfizzy.png",
                languages: ["html", "css", "bootstrap", "photoshop", "copywriting", "prototyping"],
                link: "https://doodlesaurus.github.io/elfizzy/",
                status: ["online"], 
                hasLink: true
            },
            {
                title: "Flamewave",
                description: "FlameWave is a website developed by a team of three during a PCTO project. It showcases an innovative gym concept that combines fitness and wellness, focusing on transforming movement into energy. The site highlights personalized services, group classes, and a holistic approach to health through a multi-section layout.",
                image: "assets/projects/flamewave.png",
                languages: ["html", "css", "bootstrap", "photoshop", "copywriting", "prototyping"],
                link: "https://doodlesaurus.github.io/Flamewave/",
                status: ["online"], 
                hasLink: true
            },
            {
                title: "RendezVous",
                description: "Currently developing RendezVous, a mobile app that allows users to create, discover, and join local events and hangouts—designed to encourage real-world connections and community building.",
                image: "assets/projects/rendezvous.png",
                languages: ["androidstudio", "java", "xml","firebase", "photoshop", "prototyping"],
                link: "#",
                status: ["in-progress"], 
                hasLink: false
            },
            {
                title: "Curiobyte",
                description: "Created and managed a tech news and audio review website using WordPress. Gained hands-on experience in SEO and SEM, produced original, web-optimized content, and grew traffic to 5,000 monthly views, peaking at 6,200. Although the project concluded due to a personal reason, it was a key milestone in my digital marketing journey.",
                image: "assets/projects/curiobyte.png",
                languages: ["wordpress", "photoshop", "copywriting", "seo", "sem"],
                link: "#",
                status: ["concluded"], 
                hasLink: false
            },
            {
                title: "Bulut",
                description: "I developed Bulut, an innovative social platform focused on user safety, using Android Studio (Java, XML) and Firebase. The project was created for a national high school entrepreneurship competition and was selected among the top 20 out of over 1,000 entries—the only finalist from Puglia. I presented the project in Gaeta to a panel of entrepreneurs and finalist schools. After the competition, I began real development of the platform, which was later paused due to limited time and resources in the school context.",
                image: "assets/projects/bulut.png",
                languages: ["androidstudio", "java", "xml","firebase", "photoshop", "copywriting", "prototyping"],
                link: "#",
                status: ["concluded"], 
                hasLink: false
            },
            {
                title: "Romanazzi: Connect",
                description: "Developed the concept and prototype of a forum platform using Android Studio (Java, XML) and Firebase, in collaboration with the former vice principal. The app aimed to strengthen the school community by fostering collaboration between students and teachers. Conducted needs analysis and designed the platform structure. Although the project was canceled due to unforeseen events, it was a valuable experience in civic and participatory design.",
                image: "assets/projects/romanazzi.png",
                languages: ["androidstudio", "java", "xml","firebase", "photoshop", "copywriting", "prototyping"],
                link: "#",
                status: ["concluded"], 
                hasLink: false
            }
        ]
            // 'online': 'Online',
            // 'concluded': 'Concluded',
            // 'in-progress': 'In Progress',
            // 'private': 'Private'
    };

    // DOM Elements
    const dom = {
        sections: document.querySelectorAll("section"),
        navLinks: document.querySelectorAll(".sidebar a"),
        skillsContainer: document.querySelector(".skills-container"),
        projectsContainer: document.querySelector(".projects-container"),
        contactForm: document.getElementById("contactForm"),
        themeButtons: {
            light: document.getElementById("lightTheme"),
            dark: document.getElementById("darkTheme")
        }
    };

    // Initialize Intersection Observer
    const initObserver = () => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const current = entry.target.getAttribute("id");
                    dom.navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${current}`) {
                            link.classList.add("active");
                        }
                    });
                    entry.target.classList.add("section-visible");
                }
            });
        }, observerOptions);

        dom.sections.forEach(section => {
            observer.observe(section);
        });
    };

    // Smooth scroll for navigation
    const initSmoothScroll = () => {
        dom.navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href");
                const targetSection = document.querySelector(targetId);
                
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
            });
        });
    };

    // Gravity effect functionality
    const initGravityEffect = () => {
        const gravityToggle = document.getElementById("gravityToggle");
        if (!gravityToggle) return;

        gravityToggle.addEventListener("click", () => {
            if (document.body.classList.contains("gravity-active")) return;
            
            document.body.classList.add("gravity-active");
            
            // Reset after animation completes
            setTimeout(() => {
                document.body.classList.remove("gravity-active");
                void document.body.offsetWidth;
            }, 2500); 
        });
    };

    // Theme switcher functionality
    const initThemeSwitcher = () => {
        const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
        const themeToggle = document.getElementById("themeToggle");
        
        // Set initial theme
        document.body.classList.add(`${savedTheme}-theme`);
        if (savedTheme === "light") {
            themeToggle.classList.add("active");
        }
        
        themeToggle.addEventListener("click", () => {
            themeToggle.classList.toggle("active");
            if (themeToggle.classList.contains("active")) {
                // Switch to light theme
                document.body.classList.replace("dark-theme", "light-theme");
                localStorage.setItem("portfolio-theme", "light");
            } else {
                // Switch to dark theme
                document.body.classList.replace("light-theme", "dark-theme");
                localStorage.setItem("portfolio-theme", "dark");
            }
        });
    };

    // Typing animation
    const initTypingAnimation = () => {
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");
        
        if (!typedTextSpan || !cursorSpan) return;

        const textArray = [
            "an App Developer", 
            "a Web Developer", 
            "a Musician", 
            "a Music Producer",
            "a Sound Designer"
        ];
        
        const typingDelay = 150;
        const erasingDelay = 50;
        const newTextDelay = 1000;
        
        let textArrayIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = textArray[textArrayIndex];
            
            if (!isDeleting && charIndex < currentText.length) {
                typedTextSpan.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else if (isDeleting && charIndex > 0) {
                typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, erasingDelay);
            } else {
                isDeleting = !isDeleting;
                
                if (!isDeleting) {
                    textArrayIndex = (textArrayIndex + 1) % textArray.length;
                }
                
                setTimeout(type, isDeleting ? newTextDelay : typingDelay);
            }
        }

        // Start animation
        setTimeout(type, newTextDelay + 250);
    };

    const renderLanguages = () => {
        if (!document.querySelector(".languages-container")) return;
        
        const languagesHTML = config.languages.map(language => `
            <div class="col-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 language-card">
                    <div class="card-body text-center">
                        <img src="${language.image}" alt="${language.name}" class="language-icon mb-3">
                        <h5 class="card-title">${language.name}</h5>
                        <span class="language-level" data-level="${language.level}">${language.level}</span>
                    </div>
                </div>
            </div>
        `).join("");
        
        document.querySelector(".languages-container").innerHTML = `<div class="row">${languagesHTML}</div>`;
    };

    // Render skills with filtering
    const renderSkills = () => {
    if (!dom.skillsContainer) return;
    
    // Create filter buttons
    const filterHTML = `
        <div class="row mb-4">
            <div class="col-12 text-center">
                <div class="btn-group skill-filters" role="group">
                    <button type="button" class="btn btn-primary active" data-filter="all">All</button>
                    <button type="button" class="btn btn-primary" data-filter="frontend">Front-end</button>
                    <button type="button" class="btn btn-primary" data-filter="backend">Back-end</button>
                    <button type="button" class="btn btn-primary" data-filter="webmng">Web Management</button>
                    <button type="button" class="btn btn-primary" data-filter="gameengine">Game Engine</button>
                    <button type="button" class="btn btn-primary" data-filter="audio">Audio</button>
                    <button type="button" class="btn btn-primary" data-filter="videographics">Video & Graphics</button>
                    <button type="button" class="btn btn-primary" data-filter="other">Other</button>
                    <button type="button" class="btn btn-primary" data-filter="learning">Currently Learning</button>
                </div>
            </div>
        </div>
    `;
    
    // Create skills cards with learning indicator
    const skillsHTML = config.skills.map(skill => `
            <div class="col-6 col-md-4 col-lg-3 mb-4 skill-item" 
                data-category="${skill.category}" 
                data-learning="${skill.learning}">
                <div class="card h-100 skill-card ${skill.learning ? 'learning-skill' : ''}">
                    <div class="card-body text-center">
                        <img src="${skill.image}" alt="${skill.name}" class="skill-icon mb-3">
                        <h5 class="card-title">${skill.name}</h5>
                        ${skill.learning ? '<span class="badge bg-warning text-dark learning-badge">Learning</span>' : ''}
                    </div>
                </div>
            </div>
        `).join("");
    
        dom.skillsContainer.innerHTML = filterHTML + `<div class="row skills-grid">${skillsHTML}</div>`;
        
        // Add filter functionality
        document.querySelectorAll('.skill-filters button').forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                document.querySelector('.skill-filters .active').classList.remove('active');
                button.classList.add('active');
                
                const filter = button.dataset.filter;
                document.querySelectorAll('.skill-item').forEach(item => {
                    const categoryMatch = item.dataset.category === filter;
                    const learningMatch = item.dataset.learning === "true";
                    const showAll = filter === 'all';
                    const showLearning = filter === 'learning' && learningMatch;
                    
                    if (showAll || categoryMatch || showLearning) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    };

    // Render projects
    const renderProjects = () => {
        if (!dom.projectsContainer) return;
        
        const projectsHTML = config.projects.map(project => `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card project-card h-100">
                    <div class="project-image-container">
                        <img src="${project.image}" class="card-img-top project-image" alt="${project.title}" loading="lazy">
                        <div class="project-status-badges">
                            ${project.status.map(status => `
                                <span class="project-badge ${status}">${getStatusText(status)}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <div class="language-box">
                            <div class="language-icons">
                                ${project.languages.map(lang => `
                                    <div class="language-icon-wrapper" title="${lang}">
                                        <img src="assets/skills/${lang}-icon.svg" alt="${lang}" class="programme-icon">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        ${project.hasLink ? 
                            `<a href="${project.link}" target="_blank" class="btn btn-primary btn-sm project-link-btn">
                                <i class="fas fa-external-link-alt me-1"></i> View Project
                            </a>` : 
                            `<button class="btn btn-secondary btn-sm" disabled>
                                <i class="fas fa-lock me-1"></i> Not Available
                            </button>`
                        }
                    </div>
                </div>
            </div>
        `).join("");
        
        dom.projectsContainer.innerHTML = projectsHTML;
    };

    // Achievement system
    const initAchievementSystem = () => {
        const achievements = [
            { id: 'first_visit', name: 'First Step', description: 'Visited the portfolio for the first time!', timeRequired: 0 },
            { id: 'five_seconds', name: 'Quick Glance', description: 'Spent 5 seconds on the site.', timeRequired: 5 },
            { id: 'thirty_seconds', name: 'Deep Dive', description: 'Spent 30 seconds on the site.', timeRequired: 30 },
            { id: 'one_minute', name: 'Explorer', description: 'Spent 1 minute on the site.', timeRequired: 60 },
            { id: 'five_minutes', name: 'Dedicated Visitor', description: 'Spent 5 minutes on the site.', timeRequired: 300 },
            { id: 'gravity_first', name: 'Gravity Explorer', description: 'Activated gravity for the first time!', event: 'gravity' },
            { id: 'pet_first', name: 'Pet Owner', description: 'Interacted with your digital pet for the first time!', event: 'pet' },
            { id: 'pet_feed', name: 'Pet Feeder', description: 'Fed your digital pet for the first time!', event: 'pet_feed' },
            { id: 'theme_switch', name: 'Theme Shifter', description: 'Switched the website theme for the first time!', event: 'theme_switch' },
            { id: 'all_buttons', name: 'Button Master', description: 'Clicked all main sidebar buttons at least once!', event: 'all_buttons' },
            { id: 'pet_feed_10', name: 'Pet Gourmet', description: 'Fed your digital pet 10 times!', event: 'pet_feed_10' },
            { id: 'pet_play_20', name: 'Play Champion', description: 'Played with your digital pet 20 times!', event: 'pet_play_20' },
            { id: 'pet_happy_zero', name: 'Pet Neglect', description: 'Let your pet\'s happiness drop to 0%.', event: 'pet_happy_zero' },
            { id: 'pet_hunger_zero', name: 'Pet Starved', description: 'Let your pet\'s hunger drop to 0%.', event: 'pet_hunger_zero' },
            { id: 'birthday_visitor', name: 'Birthday Visitor', description: 'Visited during your birthday month!', event: 'birthday' },
            { id: 'holiday_special', name: 'Holiday Special', description: 'Visited during a major holiday!', event: 'holiday' },
            { id: 'new_year_code', name: 'New Year New Code', description: 'Visited in January!', event: 'january' },
            { id: 'leap_day', name: 'Leap Day Bonus', description: 'Visited on February 29th!', event: 'leapday' },
            { id: 'friday_13', name: 'Friday the 13th', description: 'Visited on Friday the 13th!', event: 'friday13' },
            { id: 'offline_challenger', name: 'Offline Challenger', description: 'Visited while offline!', event: 'offline' },
            { id: 'daily_visitor', name: 'Daily Visitor', description: 'Returned for 3 consecutive days!', event: 'daily' },
            { id: 'marathoner', name: 'Marathoner', description: 'Stayed for 30+ minutes in one session!', event: 'marathon' },
            { id: 'night_owl', name: 'Night Owl', description: 'Visited the site late at night (12am–4am).', event: 'night' },
            { id: 'early_bird', name: 'Early Bird', description: 'Visited the site early morning (5am–7am).', event: 'early' },
            { id: 'weekend_warrior', name: 'Weekend Warrior', description: 'Visited on a weekend.', event: 'weekend' },
            { id: 'social_butterfly', name: 'Social Butterfly', description: 'Clicked all social media links.', event: 'social' },
            { id: 'scroll_master', name: 'Scroll Master', description: 'Scrolled to the very bottom of the page.', event: 'scroll' },
            { id: 'bookmark_buddy', name: 'Bookmark Buddy', description: 'Bookmarked the portfolio site.', event: 'bookmark' },
            { id: 'flash_visit', name: 'Flash Visit', description: 'Visited the site for less than 10 seconds.', event: 'flash' },
            { id: 'time_traveler', name: 'Time Traveler', description: 'Spent a total of 5 hours on the site.', event: '5hours' }
        ];

        let timeSpent = parseInt(localStorage.getItem('portfolio_time_spent') || '0');
        let earnedAchievements = JSON.parse(localStorage.getItem('portfolio_achievements') || '[]');
        const notificationContainer = document.getElementById('achievement-notification-container');

        let feedCount = parseInt(localStorage.getItem('pet_feed_count') || '0');
        let playCount = parseInt(localStorage.getItem('pet_play_count') || '0');
        let sidebarClicks = JSON.parse(localStorage.getItem('sidebar_clicks') || '{}');
        let themeSwitched = localStorage.getItem('theme_switched') === 'true';

        const showAchievementNotification = (achievement) => {
            const notification = document.createElement('div');
            notification.classList.add('achievement-notification');
            notification.innerHTML = `<strong>Achievement Unlocked!</strong><br>${achievement.name}: ${achievement.description}`;
            notificationContainer.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3500);
        };

        const checkAchievements = () => {
            achievements.forEach(achievement => {
                if (
                    achievement.timeRequired !== undefined &&
                    timeSpent >= achievement.timeRequired &&
                    !earnedAchievements.includes(achievement.id)
                ) {
                    earnedAchievements.push(achievement.id);
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievement);
                }
            });
        };

        // Initial check for 'first_visit'
        if (!earnedAchievements.includes('first_visit')) {
            earnedAchievements.push('first_visit');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'first_visit'));
        }

        // Increment time spent every second
        setInterval(() => {
            timeSpent++;
            localStorage.setItem('portfolio_time_spent', timeSpent.toString());
            checkAchievements();
        }, 1000);

        // Gravity achievement
        const gravityToggle = document.getElementById("gravityToggle");
        if (gravityToggle) {
            gravityToggle.addEventListener("click", () => {
                if (!earnedAchievements.includes('gravity_first')) {
                    earnedAchievements.push('gravity_first');
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievements.find(a => a.id === 'gravity_first'));
                }
            });
        }

        // Theme switch achievement
        const themeToggle = document.getElementById("themeToggle");
        if (themeToggle) {
            themeToggle.addEventListener("click", () => {
                if (!themeSwitched) {
                    themeSwitched = true;
                    localStorage.setItem('theme_switched', 'true');
                    if (!earnedAchievements.includes('theme_switch')) {
                        earnedAchievements.push('theme_switch');
                        localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                        showAchievementNotification(achievements.find(a => a.id === 'theme_switch'));
                    }
                }
            });
        }

        // Sidebar button click achievement
        const sidebarLinks = document.querySelectorAll('.sidebar a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                const id = link.getAttribute('id');
                sidebarClicks[id] = true;
                localStorage.setItem('sidebar_clicks', JSON.stringify(sidebarClicks));
                // Check if all sidebar links have been clicked
                const allClicked = Array.from(sidebarLinks).every(l => sidebarClicks[l.getAttribute('id')]);
                if (allClicked && !earnedAchievements.includes('all_buttons')) {
                    earnedAchievements.push('all_buttons');
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievements.find(a => a.id === 'all_buttons'));
                }
            });
        });

        // Pet achievements
        const petImage = document.getElementById('digital-pet');
        const feedBtn = document.getElementById('feed-pet-btn');
        const playBtn = document.getElementById('play-pet-btn');
        let petInteracted = localStorage.getItem('portfolio_pet_interacted') === 'true';

        function unlockPetFirst() {
            if (!petInteracted) {
                petInteracted = true;
                localStorage.setItem('portfolio_pet_interacted', 'true');
                if (!earnedAchievements.includes('pet_first')) {
                    earnedAchievements.push('pet_first');
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievements.find(a => a.id === 'pet_first'));
                }
            }
        }

        if (petImage && playBtn) {
            playBtn.addEventListener('click', () => {
                unlockPetFirst();
                playCount++;
                localStorage.setItem('pet_play_count', playCount.toString());
                if (playCount >= 20 && !earnedAchievements.includes('pet_play_20')) {
                    earnedAchievements.push('pet_play_20');
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievements.find(a => a.id === 'pet_play_20'));
                }
            });
        }
        if (petImage && feedBtn) {
            feedBtn.addEventListener('click', () => {
                unlockPetFirst();
                if (!earnedAchievements.includes('pet_feed')) {
                    earnedAchievements.push('pet_feed');
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievements.find(a => a.id === 'pet_feed'));
                }
                feedCount++;
                localStorage.setItem('pet_feed_count', feedCount.toString());
                if (feedCount >= 10 && !earnedAchievements.includes('pet_feed_10')) {
                    earnedAchievements.push('pet_feed_10');
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievements.find(a => a.id === 'pet_feed_10'));
                }
            });
        }

        // Listen for pet happiness/hunger drop to 0%
        function checkPetZeroStats() {
            const petState = JSON.parse(localStorage.getItem('digital_pet_state') || '{}');
            if (petState && typeof petState.happiness === 'number' && petState.happiness <= 0 && !earnedAchievements.includes('pet_happy_zero')) {
                earnedAchievements.push('pet_happy_zero');
                localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                showAchievementNotification(achievements.find(a => a.id === 'pet_happy_zero'));
            }
            if (petState && typeof petState.hunger === 'number' && petState.hunger <= 0 && !earnedAchievements.includes('pet_hunger_zero')) {
                earnedAchievements.push('pet_hunger_zero');
                localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                showAchievementNotification(achievements.find(a => a.id === 'pet_hunger_zero'));
            }
        }
        // Check every 5 seconds
        setInterval(checkPetZeroStats, 5000);

        // Special Date Achievements 
        const now = new Date();
        const month = now.getMonth(); 
        const date = now.getDate();
        const day = now.getDay(); 

        // Birthday Visitor (July 23rd)
        const birthdayMonth = 6; 
        const birthdayDate = 23;
        if (
            month === birthdayMonth &&
            date === birthdayDate &&
            !earnedAchievements.includes('birthday_visitor')
        ) {
            earnedAchievements.push('birthday_visitor');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'birthday_visitor'));
        }

        // Holiday Special (simple check for Christmas, New Year, Halloween, etc.)
        const holidays = [
            { month: 11, date: 25 }, // Christmas
            { month: 0, date: 1 },   // New Year
            { month: 9, date: 31 },  // Halloween
            { month: 3, date: 9 },   // Easter 
        ];
        if (
            holidays.some(h => h.month === month && h.date === date) &&
            !earnedAchievements.includes('holiday_special')
        ) {
            earnedAchievements.push('holiday_special');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'holiday_special'));
        }

        // New Year New Code (January)
        if (month === 0 && !earnedAchievements.includes('new_year_code')) {
            earnedAchievements.push('new_year_code');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'new_year_code'));
        }

        // Leap Day Bonus
        if (month === 1 && date === 29 && !earnedAchievements.includes('leap_day')) {
            earnedAchievements.push('leap_day');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'leap_day'));
        }

        // Friday the 13th
        if (day === 5 && date === 13 && !earnedAchievements.includes('friday_13')) {
            earnedAchievements.push('friday_13');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'friday_13'));
        }

        // Offline Challenger (detect offline)
        window.addEventListener('offline', () => {
            if (!earnedAchievements.includes('offline_challenger')) {
                earnedAchievements.push('offline_challenger');
                localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                showAchievementNotification(achievements.find(a => a.id === 'offline_challenger'));
            }
        });

        // Daily Visitor (3 consecutive days)
        const lastVisit = localStorage.getItem('portfolio_last_visit');
        const todayStr = now.toISOString().slice(0, 10);
        let streak = parseInt(localStorage.getItem('portfolio_visit_streak') || '0');
        if (lastVisit) {
            const last = new Date(lastVisit);
            const diff = (now - last) / (1000 * 60 * 60 * 24);
            if (diff < 1 && diff > 0) {
                // Already visited today, do nothing
            } else if (diff < 2) {
                streak++;
            } else {
                streak = 1;
            }
        } else {
            streak = 1;
        }
        localStorage.setItem('portfolio_last_visit', todayStr);
        localStorage.setItem('portfolio_visit_streak', streak.toString());
        if (streak >= 3 && !earnedAchievements.includes('daily_visitor')) {
            earnedAchievements.push('daily_visitor');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'daily_visitor'));
        }

        // Marathoner (30+ minutes in one session)
        let sessionStart = Date.now();
        setInterval(() => {
            const sessionMinutes = (Date.now() - sessionStart) / 60000;
            if (sessionMinutes >= 30 && !earnedAchievements.includes('marathoner')) {
                earnedAchievements.push('marathoner');
                localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                showAchievementNotification(achievements.find(a => a.id === 'marathoner'));
            }
        }, 60000);

        // Time-based Achievements
        const hour = now.getHours();
        // Night Owl: 12am–4am
        if (hour >= 0 && hour < 4 && !earnedAchievements.includes('night_owl')) {
            earnedAchievements.push('night_owl');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'night_owl'));
        }
        // Early Bird: 5am–7am
        if (hour >= 5 && hour < 7 && !earnedAchievements.includes('early_bird')) {
            earnedAchievements.push('early_bird');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'early_bird'));
        }
        // Weekend Warrior: Saturday (6) or Sunday (0)
        if ((day === 0 || day === 6) && !earnedAchievements.includes('weekend_warrior')) {
            earnedAchievements.push('weekend_warrior');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'weekend_warrior'));
        }

        // Social Butterfly: Click all social media links
        const socialLinks = document.querySelectorAll('.social-btn');
        let socialClicks = JSON.parse(localStorage.getItem('social_clicks') || '{}');
        socialLinks.forEach(link => {
            link.addEventListener('click', () => {
                const id = link.getAttribute('class');
                socialClicks[id] = true;
                localStorage.setItem('social_clicks', JSON.stringify(socialClicks));
                const allSocialClicked = Array.from(socialLinks).every(l => socialClicks[l.getAttribute('class')]);
                if (allSocialClicked && !earnedAchievements.includes('social_butterfly')) {
                    earnedAchievements.push('social_butterfly');
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievements.find(a => a.id === 'social_butterfly'));
                }
            });
        });

        // Scroll Master: Scroll to the very bottom of the page
        let scrollMasterUnlocked = localStorage.getItem('scroll_master_unlocked') === 'true';
        window.addEventListener('scroll', () => {
            if (!scrollMasterUnlocked && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
                scrollMasterUnlocked = true;
                localStorage.setItem('scroll_master_unlocked', 'true');
                if (!earnedAchievements.includes('scroll_master')) {
                    earnedAchievements.push('scroll_master');
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievements.find(a => a.id === 'scroll_master'));
                }
            }
        });

        // Bookmark Buddy: Detect bookmark (Ctrl+D or Cmd+D)
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd') {
                if (!earnedAchievements.includes('bookmark_buddy')) {
                    earnedAchievements.push('bookmark_buddy');
                    localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                    showAchievementNotification(achievements.find(a => a.id === 'bookmark_buddy'));
                }
            }
        });

        // Flash Visit: Leave before 10 seconds
        let flashVisitTimeout = setTimeout(() => {}, 10000);
        window.addEventListener('beforeunload', () => {
            if (timeSpent < 10 && !earnedAchievements.includes('flash_visit')) {
                earnedAchievements.push('flash_visit');
                localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
                // No notification since user is leaving
            }
        });

        // Time Traveler: 5 hours (18000 seconds)
        if (timeSpent >= 18000 && !earnedAchievements.includes('time_traveler')) {
            earnedAchievements.push('time_traveler');
            localStorage.setItem('portfolio_achievements', JSON.stringify(earnedAchievements));
            showAchievementNotification(achievements.find(a => a.id === 'time_traveler'));
        }
    };

    function initAchievementsModal() {
    const achievements = [
        { id: 'first_visit', name: 'First Step', description: 'Visited the portfolio for the first time!', timeRequired: 0 },
        { id: 'five_seconds', name: 'Quick Glance', description: 'Spent 5 seconds on the site.', timeRequired: 5 },
        { id: 'thirty_seconds', name: 'Deep Dive', description: 'Spent 30 seconds on the site.', timeRequired: 30 },
        { id: 'one_minute', name: 'Explorer', description: 'Spent 1 minute on the site.', timeRequired: 60 },
        { id: 'five_minutes', name: 'Dedicated Visitor', description: 'Spent 5 minutes on the site.', timeRequired: 300 },
        { id: 'gravity_first', name: 'Gravity Explorer', description: 'Activated gravity for the first time!', event: 'gravity' },
        { id: 'pet_first', name: 'Pet Owner', description: 'Interacted with your digital pet for the first time!', event: 'pet' },
        { id: 'pet_feed', name: 'Pet Feeder', description: 'Fed your digital pet for the first time!', event: 'pet_feed' },
        { id: 'theme_switch', name: 'Theme Shifter', description: 'Switched the website theme for the first time!', event: 'theme_switch' },
        { id: 'all_buttons', name: 'Button Master', description: 'Clicked all main sidebar buttons at least once!', event: 'all_buttons' },
        { id: 'pet_feed_10', name: 'Pet Gourmet', description: 'Fed your digital pet 10 times!', event: 'pet_feed_10' },
        { id: 'pet_play_20', name: 'Play Champion', description: 'Played with your digital pet 20 times!', event: 'pet_play_20' },
        { id: 'pet_happy_zero', name: 'Pet Neglect', description: 'Let your pet\'s happiness drop to 0%.', event: 'pet_happy_zero' },
        { id: 'pet_hunger_zero', name: 'Pet Starved', description: 'Let your pet\'s hunger drop to 0%.', event: 'pet_hunger_zero' },
        { id: 'birthday_visitor', name: 'Birthday Visitor', description: 'Visited during your birthday month!', event: 'birthday' },
        { id: 'holiday_special', name: 'Holiday Special', description: 'Visited during a major holiday!', event: 'holiday' },
        { id: 'new_year_code', name: 'New Year New Code', description: 'Visited in January!', event: 'january' },
        { id: 'leap_day', name: 'Leap Day Bonus', description: 'Visited on February 29th!', event: 'leapday' },
        { id: 'friday_13', name: 'Friday the 13th', description: 'Visited on Friday the 13th!', event: 'friday13' },
        { id: 'offline_challenger', name: 'Offline Challenger', description: 'Visited while offline!', event: 'offline' },
        { id: 'daily_visitor', name: 'Daily Visitor', description: 'Returned for 3 consecutive days!', event: 'daily' },
        { id: 'marathoner', name: 'Marathoner', description: 'Stayed for 30+ minutes in one session!', event: 'marathon' },
        { id: 'night_owl', name: 'Night Owl', description: 'Visited the site late at night (12am–4am).', event: 'night' },
        { id: 'early_bird', name: 'Early Bird', description: 'Visited the site early morning (5am–7am).', event: 'early' },
        { id: 'weekend_warrior', name: 'Weekend Warrior', description: 'Visited on a weekend.', event: 'weekend' },
        { id: 'social_butterfly', name: 'Social Butterfly', description: 'Clicked all social media links.', event: 'social' },
        { id: 'scroll_master', name: 'Scroll Master', description: 'Scrolled to the very bottom of the page.', event: 'scroll' },
        { id: 'bookmark_buddy', name: 'Bookmark Buddy', description: 'Bookmarked the portfolio site.', event: 'bookmark' },
        { id: 'flash_visit', name: 'Flash Visit', description: 'Visited the site for less than 10 seconds.', event: 'flash' },
        { id: 'time_traveler', name: 'Time Traveler', description: 'Spent a total of 5 hours on the site.', event: '5hours' }
    ];

    const modal = document.getElementById('achievements-modal');
    const btn = document.getElementById('achievements-btn');
    const closeBtn = document.querySelector('.close-modal');
    const tabButtons = document.querySelectorAll('.tab-button');
    const earnedList = document.getElementById('earned-achievements');
    const lockedList = document.getElementById('locked-achievements');

    // Open modal
    btn.addEventListener('click', () => {
        updateAchievementsDisplay();
        modal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
        modal.style.display = 'none';
        }
    });

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        if (button.dataset.tab === 'earned') {
            earnedList.style.display = 'grid';
            lockedList.style.display = 'none';
        } else {
            earnedList.style.display = 'none';
            lockedList.style.display = 'grid';
        }
        });
    });

    function getAchievementBadge(achievement) {
        // Tiered logic: adjust as needed for your achievements
        // Example: time-based or milestone-based achievements get higher tiers
        let tier = 'bronze';
        if (
            ['pet_feed_10', 'pet_play_20', 'marathoner', 'time_traveler', 'daily_visitor', 'social_butterfly'].includes(achievement.id)
        ) {
            tier = 'silver';
        }
        if (
            ['time_traveler', 'marathoner', 'daily_visitor'].includes(achievement.id)
        ) {
            tier = 'gold';
        }
        const badgeClass = {
            bronze: 'badge-bronze',
            silver: 'badge-silver',
            gold: 'badge-gold'
        }[tier];
        const badgeIcon = {
            bronze: '🥉',
            silver: '🥈',
            gold: '🥇'
        }[tier];
        return `<span class="achievement-badge ${badgeClass}" title="${tier.charAt(0).toUpperCase() + tier.slice(1)} Tier">${badgeIcon}</span>`;
    }

    function updateAchievementsDisplay() {
        const earnedAchievements = JSON.parse(localStorage.getItem('portfolio_achievements') || '[]');
        earnedList.innerHTML = '';
        lockedList.innerHTML = '';

        achievements.forEach(achievement => {
            const isEarned = earnedAchievements.includes(achievement.id);
            const badge = getAchievementBadge(achievement);
            const achievementEl = document.createElement('div');
            achievementEl.className = `achievement-item achievement-${isEarned ? 'earned' : 'locked'}`;
            achievementEl.innerHTML = `
                <div class="achievement-icon">${badge} ${isEarned ? '✓' : '?'}</div>
                <div class="achievement-info">
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.description}</div>
                    ${!isEarned && achievement.timeRequired !== undefined ? `<div class="achievement-progress">Progress: ${Math.round(getAchievementProgress(achievement))}%</div>` : ''}
                </div>
            `;
            if (isEarned) {
                earnedList.appendChild(achievementEl);
            } else {
                lockedList.appendChild(achievementEl);
            }
        });
    }

    function getAchievementProgress(achievement) {
        const timeSpent = parseInt(localStorage.getItem('portfolio_time_spent') || '0');
        return Math.min(100, (timeSpent / achievement.timeRequired) * 100);
    }
    }


    // Inside the Portfolio module
    const initPetSystem = () => {
        const petImage = document.getElementById('digital-pet');
        const feedBtn = document.getElementById('feed-pet-btn');
        const playBtn = document.getElementById('play-pet-btn');
        const hungerDisplay = document.getElementById('pet-hunger');
        const happinessDisplay = document.getElementById('pet-happiness');

        let petState = JSON.parse(localStorage.getItem('digital_pet_state')) || {
            hunger: 50,
            happiness: 50,
            lastInteraction: Date.now()
        };

        const updatePetDisplay = () => {
            hungerDisplay.textContent = `${petState.hunger}%`;
            happinessDisplay.textContent = `${petState.happiness}%`;

            if (petState.happiness < 30 || petState.hunger < 30) {
                petImage.src = 'assets/gif/pet-sad.gif'; 
            } else if (petState.happiness > 80 && petState.hunger > 80) {
                petImage.src = 'assets/gif/pet-play.gif'; 
            } else {
                petImage.src = 'assets/gif/pet-idle.gif'; 
            }
        };

        const savePetState = () => {
            localStorage.setItem('digital_pet_state', JSON.stringify(petState));
        };

        const decayPetStats = () => {
            const now = Date.now();
            const timeElapsed = (now - petState.lastInteraction) / 1000; // in seconds

            // Decay rates (adjust as needed)
            const hungerDecayPerSecond = 0.1;
            const happinessDecayPerSecond = 0.05;

            petState.hunger = Math.max(0, petState.hunger - (hungerDecayPerSecond * timeElapsed));
            petState.happiness = Math.max(0, petState.happiness - (happinessDecayPerSecond * timeElapsed));
            petState.lastInteraction = now;

            updatePetDisplay();
            savePetState();
        };

        feedBtn.addEventListener('click', () => {
            petState.hunger = Math.min(100, petState.hunger + 20); // Increase hunger
            petState.happiness = Math.min(100, petState.happiness + 5); // Slight happiness boost
            petImage.classList.add('feeding');
            setTimeout(() => {
                petImage.classList.remove('feeding');
                updatePetDisplay();
                savePetState();
            }, 500);
        });

        playBtn.addEventListener('click', () => {
            petState.happiness = Math.min(100, petState.happiness + 25); // Increase happiness
            petState.hunger = Math.max(0, petState.hunger - 5); // Slight hunger decrease
            petImage.classList.add('playing');
            setTimeout(() => {
                petImage.classList.remove('playing');
                updatePetDisplay();
                savePetState();
            }, 1000);
        });

        // Initialize and set up decay
        decayPetStats(); // Initial decay calculation
        setInterval(decayPetStats, 60000); // Decay every minute
        updatePetDisplay(); // Initial display update
    };

    // Helper function to get status text
    const getStatusText = (status) => {
        const statusMap = {
            'online': 'Online',
            'concluded': 'Concluded',
            'in-progress': 'In Progress',
            'private': 'Private'
        };
        return statusMap[status] || status;
    };

    // Form validation
    const initFormValidation = () => {
        if (!dom.contactForm) return;
        
        dom.contactForm.addEventListener("submit", (e) => {
            if (!dom.contactForm.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            dom.contactForm.classList.add("was-validated");
        }, false);
    };

    // Initialize all components
    const init = () => {
        initObserver();
        initSmoothScroll();
        initThemeSwitcher();
        initTypingAnimation();
        renderSkills();
        renderProjects();
        initFormValidation();
        renderLanguages();
        initGravityEffect();
        initAchievementSystem();
        initPetSystem();
        initAchievementsModal();
        
        // Add loaded class to body when everything is ready
        document.body.classList.add("loaded");
    };
    

    // Public API
    return {
        init
    };
})();

// Initialize portfolio when DOM is loaded
document.addEventListener("DOMContentLoaded", Portfolio.init);
