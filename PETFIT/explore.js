// Search Functionality
document.getElementById("searchButton").addEventListener("click", function() {
  const searchQuery = document.getElementById("searchInput").value;
  alert(`You searched for: ${searchQuery}`);
});

// Smooth Scrolling Function
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Add event listeners to sidebar items
document.querySelectorAll(".sidebar li").forEach(item => {
  item.addEventListener("click", function() {
      const sectionId = this.getAttribute("data-section");
      if (sectionId) {
          scrollToSection(sectionId);
      }
  });
});

// Function to open a popup dynamically
function openPopup(videoId, content) {
  // Create a unique popup ID
  let popupId = `${videoId}-popupBox`;

  // Check if a popup with the same ID already exists
  if (document.getElementById(popupId)) return;

  // Create popup container
  let popup = document.createElement("div");
  popup.id = popupId;
  popup.className = "popup";

  // Popup content
  popup.innerHTML = `
      <span class="close-popup" onclick="closePopup('${popupId}')">&times;</span>
      <div class="popup-body">
          ${content}
      </div>
  `;

  // Append to body
  document.body.appendChild(popup);

  // Show popup
  popup.style.display = "block";
}

// Event listener for video1 popup
document.getElementById("video1").addEventListener("click", function () {
  let content = `
      <img src="assets/pindiag.jpg" alt="PETFIT Diagram" class="popup-image">
      <p>
          The PETFIT Smart Dog Collar is a wearable device designed to monitor a dog's health, safety, and activity in real time.
          <br><br>
          <b>Key Features:</b>
          <ul>
              <li>Heart Rate Monitoring (MAX30100) – The Collar monitors Heart Rate and pulse in real-time</li>
              <li>GPS Tracking (NEO-6M) – The Collar tracks location of the pet</li>
              <li>Step Counting (ADXL345) – The Collar measures daily activity to ensure proper exercise.</li>
          </ul>
      </p>
  `;
  openPopup("video1", content);
});

// Event listener for video2 popup
document.getElementById("video2").addEventListener("click", function () {
  let content = `
      <b>Circuit Design & Integration</b>
      <ul>
          <li>The GPS module communicates with NodeMCU via UART for reliable data transfer.</li>  
          <li>The ADXL345 accelerometer uses I2C for activity tracking.</li>  
          <li>The heart rate sensor connects via GPIO pins for smooth data collection.</li>  
          <li>Strong connections are ensured to minimize interference and provide stable, accurate readings.</li>  
      </ul>
  `;
  openPopup("video2", content);
});

// Event listener for video3 popup
document.getElementById("video3").addEventListener("click", function () {
  let content = `
      <p>This video explains the working of the PETFIT Smart Dog Collar.</p>
      <video class="popup-video" controls autoplay>
            <source src="assets/hardwarevideo.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      
  `;
  openPopup("video3", content);
});
 
// Event listener for video3 popup (YouTube Video)
document.getElementById("video4").addEventListener("click", function () {
  let content = `
      <iframe class="popup-video" width="560" height="300" 
          src="https://www.youtube.com/embed/67x0EhX7Wto?autoplay=1&rel=0" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
      </iframe>
  `;
  openPopup("video4", content);
});
document.getElementById("video5").addEventListener("click", function () {
  let content = `
      <iframe class="popup-video" width="560" height="300" 
          src="https://www.youtube.com/embed/_droCQsWzgg?autoplay=1&rel=0" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
      </iframe>
  `;
  openPopup("video5", content);
});
document.getElementById("video6").addEventListener("click", function () {
  let content = `
      <iframe class="popup-video" width="560" height="300" 
          src="https://www.youtube.com/embed/f4a0V8Q_k8Q?autoplay=1&rel=0" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
      </iframe>
  `;
  openPopup("video6", content);
});




// Function to close the pop-up box
function closePopup(popupId) {
  let popup = document.getElementById(popupId);
  if (popup) {
      popup.remove();
  }
}

// Close pop-up when clicking outside of it
window.addEventListener("click", function (event) {
  document.querySelectorAll(".popup").forEach(popup => {
      if (event.target === popup) {
          popup.remove();
      }
  });
});
