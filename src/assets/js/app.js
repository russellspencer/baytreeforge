$(document).foundation();

window.sr = ScrollReveal({mobile: false});
sr.reveal('.card-1', { duration: 2000, origin:'left', distance:'0%', opacity:-1, scale:1 });
sr.reveal('.card-2', { delay: 0, duration: 2000, origin:'right', distance:'0%', opacity:-1, scale:1 });
