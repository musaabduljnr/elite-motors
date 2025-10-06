// Vehicle data
        const vehicles = {
            'sedan-x7': {
                name: 'Elite Sedan X7',
                price: '$45,999',
                description: 'The Elite Sedan X7 combines luxury and performance in a sleek package. With its advanced safety features, premium interior, and powerful engine, this vehicle offers an unparalleled driving experience.',
                features: ['Leather Seats', 'Sunroof', 'Premium Sound System', 'Navigation', 'Bluetooth', 'Backup Camera'],
                specifications: {
                    'Engine': '3.5L V6',
                    'Horsepower': '300 HP',
                    'Torque': '280 lb-ft',
                    'Transmission': '8-Speed Automatic',
                    'Drivetrain': 'Front-Wheel Drive',
                    'Fuel Economy': '22 City / 30 Highway'
                }
            },
            'suv-pro': {
                name: 'Sport SUV Pro',
                price: '$52,999',
                description: 'The Sport SUV Pro offers exceptional performance with a spacious interior perfect for families and adventurers alike. Its advanced all-wheel drive system ensures stability in all conditions.',
                features: ['Third Row Seating', 'All-Wheel Drive', 'Touchscreen Display', 'Climate Control', 'Keyless Entry', 'Parking Sensors'],
                specifications: {
                    'Engine': '3.0L V6 Turbo',
                    'Horsepower': '350 HP',
                    'Torque': '350 lb-ft',
                    'Transmission': '10-Speed Automatic',
                    'Drivetrain': 'All-Wheel Drive',
                    'Fuel Economy': '19 City / 26 Highway'
                }
            },
            'hybrid-elite': {
                name: 'Eco Hybrid Elite',
                price: '$38,999',
                description: 'The Eco Hybrid Elite combines efficiency with luxury. Its hybrid powertrain delivers impressive fuel economy without compromising on performance or comfort.',
                features: ['Hybrid Powertrain', 'Regenerative Braking', 'LED Headlights', 'Lane Keep Assist', 'Adaptive Cruise Control', 'Wireless Charging'],
                specifications: {
                    'Engine': '2.0L 4-Cylinder Hybrid',
                    'Horsepower': '200 HP',
                    'Torque': '190 lb-ft',
                    'Transmission': 'eCVT',
                    'Drivetrain': 'Front-Wheel Drive',
                    'Fuel Economy': '52 City / 48 Highway'
                }
            },
            'coupe-gt': {
                name: 'Luxury Coupe GT',
                price: '$67,999',
                description: 'The Luxury Coupe GT offers sporty performance with elegant styling. Its powerful engine and precision handling make every drive an exhilarating experience.',
                features: ['Panoramic Sunroof', 'Heated Seats', 'Ventilated Seats', 'Premium Audio', 'Head-Up Display', 'Parking Assist'],
                specifications: {
                    'Engine': '4.0L V8',
                    'Horsepower': '450 HP',
                    'Torque': '410 lb-ft',
                    'Transmission': '7-Speed Dual-Clutch',
                    'Drivetrain': 'Rear-Wheel Drive',
                    'Fuel Economy': '18 City / 25 Highway'
                }
            },
            'truck-xt': {
                name: 'Adventure Truck XT',
                price: '$58,999',
                description: 'The Adventure Truck XT is built for both work and play. With its rugged construction and advanced towing capabilities, it can handle any challenge you throw at it.',
                features: ['Four-Wheel Drive', 'Towing Package', 'Bed Liner', 'Off-Road Suspension', 'Skid Plates', 'All-Terrain Tires'],
                specifications: {
                    'Engine': '5.7L V8',
                    'Horsepower': '380 HP',
                    'Torque': '400 lb-ft',
                    'Transmission': '6-Speed Automatic',
                    'Drivetrain': 'Four-Wheel Drive',
                    'Fuel Economy': '15 City / 19 Highway'
                }
            },
            'minivan-lx': {
                name: 'Family Minivan LX',
                price: '$42,999',
                description: 'The Family Minivan LX offers unparalleled comfort and convenience for families. With its spacious interior and advanced safety features, it\'s the perfect vehicle for daily commutes and road trips.',
                features: ['Sliding Doors', 'Rear Entertainment System', 'Multiple USB Ports', 'Power Liftgate', 'Blind Spot Monitoring', 'Rear Cross Traffic Alert'],
                specifications: {
                    'Engine': '3.6L V6',
                    'Horsepower': '280 HP',
                    'Torque': '260 lb-ft',
                    'Transmission': '9-Speed Automatic',
                    'Drivetrain': 'Front-Wheel Drive',
                    'Fuel Economy': '20 City / 28 Highway'
                }
            }
        };

        // DOM Elements
        const pageSections = document.querySelectorAll('.page-section');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
        const bookTestDriveBtns = document.querySelectorAll('.book-test-drive-btn');
        const exploreVehiclesBtn = document.querySelector('.explore-vehicles-btn');
        const viewAllVehiclesBtn = document.querySelector('.view-all-vehicles-btn');
        const vehicleModal = document.getElementById('vehicleModal');
        const testDriveModal = document.getElementById('testDriveModal');
        const closeModal = document.getElementById('closeModal');
        const closeTestDriveModal = document.getElementById('closeTestDriveModal');
        const contactForm = document.getElementById('contactForm');
        const testDriveForm = document.getElementById('testDriveForm');

        // Navigation
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('data-page');
                
                // Update active nav link
                navLinks.forEach(nav => nav.classList.remove('nav-active'));
                link.classList.add('nav-active');
                
                // Show target page
                pageSections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === targetPage) {
                        section.classList.add('active');
                    }
                });
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            });
        });

        // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // View Vehicle Details
        viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const vehicleId = btn.getAttribute('data-vehicle');
                const vehicle = vehicles[vehicleId];
                
                if (vehicle) {
                    document.getElementById('modalTitle').textContent = vehicle.name;
                    
                    let featuresHtml = '';
                    vehicle.features.forEach(feature => {
                        featuresHtml += `<div class="flex items-center mb-2">
                            <i class="fas fa-check text-green-500 mr-2"></i>
                            <span>${feature}</span>
                        </div>`;
                    });
                    
                    let specsHtml = '';
                    for (const [key, value] of Object.entries(vehicle.specifications)) {
                        specsHtml += `<div class="flex justify-between border-b border-gray-200 py-2">
                            <span class="font-medium">${key}</span>
                            <span>${value}</span>
                        </div>`;
                    }
                    
                    document.getElementById('modalContent').innerHTML = `
                        <div class="mb-6">
                            <div class="text-3xl font-bold text-blue-600 mb-2">${vehicle.price}</div>
                            <p class="mb-4">${vehicle.description}</p>
                        </div>
                        
                        <div class="mb-6">
                            <h4 class="text-xl font-bold mb-3">Key Features</h4>
                            <div class="grid grid-cols-2 gap-2">
                                ${featuresHtml}
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-xl font-bold mb-3">Specifications</h4>
                            <div class="bg-gray-100 p-4 rounded-lg">
                                ${specsHtml}
                            </div>
                        </div>
                        
                        <div class="mt-6 flex justify-between">
                            <button class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition book-test-drive-btn" data-vehicle="${vehicleId}">Book Test Drive</button>
                            <button class="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition">Contact Sales</button>
                        </div>
                    `;
                    
                    vehicleModal.classList.remove('hidden');
                    
                    // Add event listener to the book test drive button in the modal
                    const modalBookBtn = vehicleModal.querySelector('.book-test-drive-btn');
                    modalBookBtn.addEventListener('click', () => {
                        vehicleModal.classList.add('hidden');
                        testDriveModal.classList.remove('hidden');
                        document.getElementById('testDriveVehicle').value = vehicleId;
                    });
                }
            });
        });

        // Book Test Drive
        bookTestDriveBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                testDriveModal.classList.remove('hidden');
            });
        });

        // Explore Vehicles Button
        if (exploreVehiclesBtn) {
            exploreVehiclesBtn.addEventListener('click', () => {
                navLinks.forEach(link => {
                    if (link.getAttribute('data-page') === 'vehicles') {
                        link.click();
                    }
                });
            });
        }

        // View All Vehicles Button
        if (viewAllVehiclesBtn) {
            viewAllVehiclesBtn.addEventListener('click', () => {
                navLinks.forEach(link => {
                    if (link.getAttribute('data-page') === 'vehicles') {
                        link.click();
                    }
                });
            });
        }

        // Close Modals
        closeModal.addEventListener('click', () => {
            vehicleModal.classList.add('hidden');
        });

        closeTestDriveModal.addEventListener('click', () => {
            testDriveModal.classList.add('hidden');
        });

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === vehicleModal) {
                vehicleModal.classList.add('hidden');
            }
            if (e.target === testDriveModal) {
                testDriveModal.classList.add('hidden');
            }
        });

        // Form Submissions
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }

        if (testDriveForm) {
            testDriveForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for booking a test drive! We will contact you shortly to confirm your appointment.');
                testDriveForm.reset();
                testDriveModal.classList.add('hidden');
            });
        }

        // Set minimum date for test drive to today
        const today = new Date().toISOString().split('T')[0];
        const testDriveDate = document.getElementById('testDriveDate');
        if (testDriveDate) {
            testDriveDate.setAttribute('min', today);
        }
 {const }
