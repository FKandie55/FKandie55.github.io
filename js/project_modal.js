/**
 * Project Modal Script
 * Enhanced gallery display for Felix Kandie's portfolio with multiple screenshots and descriptions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Project data with expanded image structure to include descriptions
    const projectData = {
        // E-commerce Project
        'ecommerce': {
            title: 'Moro clinic management system',
            client: 'Personal Project.',
            year: '2025',
            role: 'Full Stack Developer',
            description: 'A comprehensive e-commerce platform designed for professional photographers to showcase and sell their work directly to clients.',
            features: [
                'Patient management',
                'Billing management',
                'Inventory management',
                'Pharmacy',
                'Human resource',
                'Procurement',
                'Accounting',
                'Payroll',
                'Consultation'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
            images: [
                { src: 'img/projects/moroclininic_dashboard.png', description: 'Main dashboard with Quick links to Consultation, lab, pharmacy and cash sale. with also links to sales report.' },
                { src: 'img/projects/moroclinic_casher.png', description: 'Casher sale page for creating sells cart and posting bills, including viewing remaing stock.' },
                { src: 'img/projects/moroclinic_consultation.png', description: 'Consultation page for viewing patients in que and making new consulation including viewing patient information.' },
                { src: 'img/projects/moroclininic_patients.png', description: 'Patient management main page for viewing patient lists, with view, edit and delete action.' },
                { src: 'img/projects/moroclinic_add_medicine.png', description: 'medicine management main page for viewing medicine lists, stock, packaging, with view, edit,add, detelet and changing prices.' },
                { src: 'img/projects/moroclini_add_medicine.png', description: 'medicine management main page for viewing medicine lists, stock, packaging, with view, edit,add, detelet and changing prices.' },
                { src: 'img/projects/moroclininic_patients.png', description: 'Patient management main page for viewing patient lists, with view, edit and delete action.' },
                { src: 'img/projects/moroclinic_manage_labtests.png', description: 'lab tests management main page for viewing test lists, edit,add, detelet and changing prices' },
                { src: 'img/projects/moroclinic_lab.png', description: 'Main page for choosing a lab test based on the category and test for a particular diagnosis.' }
            ]
        },
        // Task Management App
        'taskapp': {
            title: 'Poster design & Photo Manipulation',
            client: 'A.I.C Cheptebo rural development centre',
            year: '2023',
            role: 'Graphic Design',
            description: 'Institutions advertisement posters and broncures that meet modern markert and social media marketing.',
            features: [
                'Graphic design with photoshop'
            ],
            technologies: ['Adope Photoshop & Illustrator'],
            images: [
                { src: 'img/projects/Certificate_design.png', description: 'Cheptebo Agricultural training and innovation centre certificate of participation.' },
                { src: 'img/projects/poster_design1.png', description: 'Moro clinic management system marketing poster for showcasing and adverticing in different platforms i.e facebook, whatsapp etc.' },
                { src: 'img/projects/poster_design2.png', description: 'Cheptebo agricultural college marketing poster for 9th to 14th february agricultural training.' },
                { src: 'img/projects/signpost_desin2.png', description: 'A.I.C cheptebo rural development centre new college sign post design.' },
                { src: 'img/projects/signpostdesign3.png', description: 'A.I.C cheptebo rural development centre, new conference centre sign post redesign.' },
                { src: 'img/projects/abu_campaign.png', description: 'Hon Abrah kipsang Kiplagat MCA poster, for 2027 MCA, in soy north ward. Keiyo south' },
                { src: 'img/projects/cheptebo_notebook.png', description: 'Cheptebo conference centre conference notebook design. with photos of dinning and conference halls for marketting.' },
                { src: 'img/projects/christmass_advert.png', description: 'Cheptebo conference centre christmas wishes and poster invitation for kids for recreational activities during the festive season.' },
                { src: 'img/projects/cyber_advert.png', description: 'Cheptebo conference centre cyber services poster for advertisement to the community and neighbour shopping centres.' }
            ]
        },
        // Restaurant Website
        'restaurant': {
            title: 'Moro clinic landing & Documentation Website',
            client: 'Moroclinic tech company',
            year: '2025',
            role: 'Full stack developer',
            description: 'A modern website designed for a restaurant featuring an online menu and reservation system.',
            features: [
                'Pricing section',
                'System modules',
                'System timeline',
                'System customer support',
                'demo link'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            images: [
                { src: 'img/projects/moroclincs_home.png', description: 'Homepage with hero section and featured dishes' },
                { src: 'img/projects/moroclinics_team.png', description: 'Interactive food menu with filtering options' },
                { src: 'img/projects/moroclinics_shop.png', description: 'Table reservation system with calendar view' },
                { src: 'img/projects/moroclicnic_demo.png', description: 'Online ordering interface with cart' },
                { src: 'img/projects/moroclinic_prices.png', description: 'Photo gallery showcasing restaurant ambiance' },
                { src: 'img/projects/moroclinic_timeline.png', description: 'About page featuring chef profiles and history' },
                { src: 'img/projects/moroclinis_shop1.png', description: 'Contact page with map and form' },
                { src: 'img/projects/moroclinc_modules.png', description: 'Special events and catering information page' },
                { src: 'img/projects/moroclic_why_choose_us.png', description: 'Customer testimonials and review section' },
                { src: 'img/projects/more_moroclinic_shop.png', description: 'Mobile responsive design for on-the-go ordering' },
                { src: 'img/projects/restaurant-checkout.jpg', description: 'Secure checkout process for online orders' },
                { src: 'img/projects/restaurant-confirmation.jpg', description: 'Order confirmation page with tracking information' }
            ]
        },
        // Real Estate Platform
        'realestate': {
            title: 'Photopia Photographer Platform',
            client: 'Personal Project',
            year: '2025',
            role: 'Full Stack Developer',
            description: 'Photopia connects clients with talented photographers for all your photography needs. Find the perfect photographer for your special moments.',
            features: [
                'Client accounts',
                'Photographers accounts',
                'Invoicing',
                'Bookings',
                'Album management',
                'Rating',
                'Messaging'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', , 'MYSQL', 'Bootstrap'],
            images: [
                { src: 'img/projects/photopia_booking_details.png', description: 'Booking page where you can see booking in detail' },
                { src: 'img/projects/photopia_bookings.png', description: 'Main page where you see booking from clients' },
                { src: 'img/projects/photopia_calender.png', description: 'Calender page where you set off days and working days' },
                { src: 'img/projects/photopia_clientdashboard.png', description: 'Main home page of clients where they can see shared photos' },
                { src: 'img/projects/photopia_client-details.png', description: 'Main section where clients can check booking status' },
                { src: 'img/projects/photopia_home.png', description: 'This the main landing page which dashboard to booking and statistics' },
                { src: 'img/projects/photopia_invoices.png', description: 'Invoicing page where photographers can create and change invoice status' },
                { src: 'img/projects/photopia_login.png', description: 'Main login page  for both client and photographer' },
                { src: 'img/projects/photopia_messages.png', description: 'Messaging module where a client and a photographer can communicate together' },
                { src: 'img/projects/photopia_photographer.png', description: 'Photographer perofile where he/she can update or change personal information' },
                { src: 'img/projects/photopia_photos.png', description: 'Main section where all the photos from different folders can be viewed' },
                { src: 'img/projects/photopia_profile.png', description: 'Main profile of the client that allows for updating and changing personal data' }
            ]
        },
        // Fitness Tracker
        'fitness': {
            title: '2025 Calender Design',
            client: 'A.I.C Cheptebo Rural Development Centre',
            year: '2025',
            role: 'Graphic designer',
            description: '2025 marketing calender.',
            features: [
                'Progress visualization'
            ],
            technologies: ['Photoshop & Illustrator'],
            images: [
                { src: 'img/projects/calender.png', description: 'Design inside adope illustrator in design mode' },
                { src: 'img/projects/Conference_calender1.png', description: 'May june calender with photos of the conference hall and dinning' },
                { src: 'img/projects/calender2.png', description: 'january/february and march/april calender page with photos of tree nursery, farm training and conference main building' },
                { src: 'img/projects/calender3.png', description: 'November and December calender page with photos of farm and farms field day' },
                { src: 'img/projects/calender4.png', description: 'September and October calender page with photos value addition, factory processing and Honey' },
                { src: 'img/projects/calender5.png', description: 'June and August calender page with photos of Tree nursery, dairy goats and some nice photos of the pawpaws farm' },
                { src: 'img/projects/calender6.png', description: 'January and February calender page with photos of Guest rooms, Receiption, tree nursery and cheptebo workers at the factory' },
                { src: 'img/projects/calender8.png', description: 'May and June calender page with photos of the dinning hall, guest room beds and the main board room conference hall' },
                { src: 'img/projects/calender7.png', description: 'March and April calender page with photos of demonstation farm, lecture hall and the main college building' }
            ]
        },
        // Portfolio Project
        'portfolio': {
            title: 'Moro tech company website',
            client: 'Personal project',
            year: '2025',
            role: 'Front-end developer',
            description: 'A complete redesign of a professional portfolio website with a focus on modern design.',
            features: [
                'Responsive design',
                'Project filtering',
                'Contact form with validation'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            images: [
                { src: 'img/projects/moro_landing.png', description: 'Moro tech company landing page with a photo of developers' },
                { src: 'img/projects/moro_bronchure.png', description: 'background image and a bronchure link button that redirect users to download our bronchure.' },
                { src: 'img/projects/moro_contact.png', description: 'Contact form for clients to reach out for services from moro developers' },
                { src: 'img/projects/moro_footer.png', description: 'Main page footer with contact information for potential clients to reach out' },
                { src: 'img/projects/moro_portfolio.png', description: 'A section of portfolio showcasing what we have accomplished as a company' },
                { src: 'img/projects/moro_services.png', description: 'Main section that show the services we give to our clients and potential clients' },
                { src: 'img/projects/moro_team.png', description: 'People behind the moro tech company foundation and progress in providing tech services' },
                { src: 'img/projects/moroabout.png', description: 'About section where clients and potential clients can read about us' }
            ]
        }
    };

    // Elements
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalLinks = document.querySelectorAll('.portfolio-modal-open');
    const galleryMain = document.querySelector('.gallery-main');
    const galleryThumbs = document.querySelector('.gallery-thumbs');
    const projectInfo = document.querySelector('.modal-project-info');
    
    // Remove slideshow navigation - no longer needed
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';

    // Open modal when clicking on a portfolio item
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Open modal when clicking on portfolio image
    document.querySelectorAll('.portfolio-image').forEach(img => {
        img.addEventListener('click', function(e) {
            const projectId = this.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Open modal function
    function openModal(projectId) {
        if (projectData[projectId]) {
            populateModal(projectId);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            
            // Add event listeners for lightbox functionality
            setupLightbox();
        }
    }

    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
        // Clear contents
        galleryMain.innerHTML = '';
        galleryThumbs.innerHTML = '';
        projectInfo.innerHTML = '';
    }

    // Lightbox functionality
    function setupLightbox() {
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('click', function() {
                const src = this.getAttribute('src');
                const description = this.getAttribute('data-description');
                
                // Create lightbox overlay
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox-overlay';
                lightbox.innerHTML = `
                    <div class="lightbox-container">
                        <img src="${src}" alt="Large preview" class="lightbox-image">
                        <p class="lightbox-description">${description}</p>
                        <button class="lightbox-close">&times;</button>
                    </div>
                `;
                
                document.body.appendChild(lightbox);
                
                // Close lightbox
                lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
                    document.body.removeChild(lightbox);
                });
                
                // Close lightbox when clicking outside the image
                lightbox.addEventListener('click', function(e) {
                    if (e.target === lightbox) {
                        document.body.removeChild(lightbox);
                    }
                });
            });
        });
    }

    // Populate modal with project data
    function populateModal(projectId) {
        const project = projectData[projectId];
        
        // Clear previous content
        galleryMain.innerHTML = '';
        galleryThumbs.innerHTML = '';
        projectInfo.innerHTML = '';
        
        // Create gallery display with descriptions
        galleryMain.innerHTML = `
            <div class="gallery-grid">
                ${project.images.map(image => 
                    `<div class="gallery-item">
                        <img src="${image.src}" alt="${project.title}" data-description="${image.description}" class="img-fluid">
                        <div class="image-description">
                            <p>${image.description}</p>
                        </div>
                    </div>`
                ).join('')}
            </div>
        `;
        
        // Hide thumbnails section as we're not using it
        galleryThumbs.style.display = 'none';
        
        // Populate project info
        projectInfo.innerHTML = `
            <h2>${project.title}</h2>
            <div class="project-meta">
                <div class="meta-item">
                    <h5>Client:</h5>
                    <p>${project.client}</p>
                </div>
                <div class="meta-item">
                    <h5>Year:</h5>
                    <p>${project.year}</p>
                </div>
                <div class="meta-item">
                    <h5>Role:</h5>
                    <p>${project.role}</p>
                </div>
            </div>
            <div class="project-description">
                <h4>Project Description</h4>
                <p>${project.description}</p>
            </div>
            <div class="project-features">
                <h4>Key Features</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="project-tech">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-links">
                <a href="#" class="btn">View Live</a>
                <a href="#" class="btn github-btn"><i class="fab fa-github"></i> View Code</a>
            </div>
        `;
    }

    // Add CSS for enhanced gallery display with descriptions and lightbox
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 20px;
            margin-bottom: 30px;
        }
        
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover {
            transform: translateY(-5px);
        }
        
        .gallery-item img {
            width: 100%;
            height: auto;
            display: block;
            cursor: pointer;
        }
        
        .image-description {
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover .image-description {
            transform: translateY(0);
        }
        
        .image-description p {
            margin: 0;
            font-size: 14px;
        }
        
        .gallery-nav {
            display: none; /* Hide navigation for slideshow */
        }
        
        .lightbox-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }
        
        .lightbox-container {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-image {
            max-width: 100%;
            max-height: 80vh;
            display: block;
            margin: 0 auto;
            border: 3px solid white;
        }
        
        .lightbox-description {
            color: white;
            text-align: center;
            padding: 15px;
            max-width: 80%;
            margin: 10px auto;
            background: rgba(0,0,0,0.5);
            border-radius: 5px;
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: -20px;
            background: none;
            border: none;
            color: white;
            font-size: 30px;
            cursor: pointer;
        }
        
        @media (max-width: 768px) {
            .gallery-grid {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                grid-gap: 15px;
            }
            
            .lightbox-container {
                max-width: 95%;
            }
        }
    `;
    document.head.appendChild(styleElement);
});