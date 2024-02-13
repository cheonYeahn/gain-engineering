// page-header heading 애니메이션
gsap.from("#page-header .heading h2", {y: 60, autoAlpha: 0, duration: 1});

// heading 애니메이션
gsap.from(":not(#page-header) .heading h3", {x: 60, autoAlpha: 0, duration: 0.8, ease: "expo", delay: 0.3})
gsap.from(":not(#page-header) .heading .para", {x: 60, autoAlpha: 0, duration: 1.2, ease: "expo", delay: 0.3});