
// main.js - interactions: smooth scroll, fade-in stagger, scroll-to-top
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // Intersection observer with stagger for elements
  var items = document.querySelectorAll('.fade-in, .project-card, .skill-card, section');
  var options = {threshold: 0.15};
  var observer = new IntersectionObserver(function(entries, obs){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        if(entry.target.classList.contains('project-card')){
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.add('visible');
        }
        obs.unobserve(entry.target);
      }
    });
  }, options);

  items.forEach(function(it){ observer.observe(it); });

  // Scroll-to-top button
  var scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 200) scrollBtn.classList.add('show');
    else scrollBtn.classList.remove('show');
  });
  if(scrollBtn) scrollBtn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
});


// Resume button pulse
document.addEventListener("DOMContentLoaded", () => {
  const resumeBtn = document.querySelector(".btn-resume");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
      resumeBtn.classList.add("pulse");
      setTimeout(() => resumeBtn.classList.remove("pulse"), 600);
    });
  }
});

// Lightbox for project previews
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card img");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  Object.assign(lightbox.style, {
    display: "none",
    position: "fixed",
    top: "0", left: "0",
    width: "100%", height: "100%",
    background: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: "1000",
    padding: "20px",
    textAlign: "center"
  });

  const img = document.createElement("img");
  Object.assign(img.style, {
    maxWidth: "80%", maxHeight: "70%",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(255,255,255,0.3)"
  });
  const caption = document.createElement("h2");
  caption.style.color = "#fff";
  caption.style.marginTop = "20px";
  const btnContainer = document.createElement("div");
  Object.assign(btnContainer.style, {
    marginTop: "15px", display: "flex", gap: "12px", justifyContent: "center"
  });
  const githubBtn = document.createElement("a");
  githubBtn.textContent = "💻 GitHub";
  githubBtn.className = "lightbox-btn";
  const demoBtn = document.createElement("a");
  demoBtn.textContent = "🔗 Live Demo";
  demoBtn.className = "lightbox-btn";
  btnContainer.appendChild(githubBtn);
  btnContainer.appendChild(demoBtn);
  lightbox.appendChild(img);
  lightbox.appendChild(caption);
  lightbox.appendChild(btnContainer);
  document.body.appendChild(lightbox);

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      img.src = card.src;
      caption.textContent = card.dataset.title || "Project Preview";
      githubBtn.href = card.dataset.github || "#";
      demoBtn.href = card.dataset.demo || "#";
      githubBtn.target = "_blank";
      demoBtn.target = "_blank";
      lightbox.style.display = "flex";
    });
  });
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
});

// Scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });
  elements.forEach(el => observer.observe(el));
});
