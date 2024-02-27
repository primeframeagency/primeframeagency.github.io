document.addEventListener("DOMContentLoaded", function () {
    // Get all service containers
    var serviceContainers = document.querySelectorAll(".service-container");

    // Add click event listener to each service container
    serviceContainers.forEach(function (container) {
        container.addEventListener("click", function () {
            // Get the service name from the clicked container
            var serviceName = container.getAttribute('id');

            // Toggle display of the service description
            toggleServiceDescription(serviceName);
        });
    });
});

// Function to toggle the display of the service description
function toggleServiceDescription(serviceName) {
    // Find the corresponding service container
    var serviceContainer = document.getElementById(serviceName.toLowerCase().replace(/\s/g, '-'));

    // Check if the service container already has a description
    var existingDescription = serviceContainer.querySelector('.service-description');

    if (existingDescription) {
        // If a description is already displayed, remove it
        existingDescription.remove();
    } else {
        // If no description is displayed, display the description
        displayServiceDescription(serviceName, serviceContainer);
    }
}

// Function to display the service description
function displayServiceDescription(serviceName, serviceContainer) {
    // Define descriptions for each service
    var descriptions = {
        'social-media-management': 'This service includes managing your social media accounts, creating and scheduling posts, and engaging with your audience.',
        'photo-editing': 'Our photo editing service enhances your images to make them stand out, including color correction, retouching, and cropping.',
        'video-editing': 'We offer professional video editing to create compelling video content for your brand, including cutting, trimming, and adding effects.',
        'copywriting': 'Our copywriting service provides engaging and persuasive content for your website, social media, and marketing materials.',
        'instagram-animations': 'Create eye-catching animations for your Instagram stories with our animation service, designed to captivate your audience.',
        'logo-design': 'Our logo design service crafts unique and memorable logos tailored to your brand identity, helping you stand out in the market.'
    };

    // Check if the service has a description in the descriptions object
    if (serviceName in descriptions) {
        // Create the description element
        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = descriptions[serviceName];
        descriptionElement.classList.add('service-description'); // Add a class for easy identification

        // Append the description element to the service container
        serviceContainer.appendChild(descriptionElement);
    } else {
        // If no description is found, log a message
        console.log("No description available for " + serviceName);
    }
}
