import React from "react";
import "./Particles.scss";

function createParticle(x, y, type) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  // document.body.appendChild(particle);
  const particlesDis = document.getElementById("particlesDiv");
  particlesDis.appendChild(particle);

  let width = Math.floor(Math.random() * 30 + 8);
  let height = width;
  let destinationX = (Math.random() - 0.5) * 300;
  let destinationY = (Math.random() - 0.5) * 300;
  let rotation = Math.random() * 520;
  let delay = Math.random() * 200;

  switch (type) {
    case "square":
      particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
      particle.style.border = "1px solid white";
      break;
    case "like":
      particle.innerHTML = ["❤", "🧡", "💛", "💚", "💙", "💜", "🤎"][Math.floor(Math.random() * 7)];
      particle.style.fontSize = `${Math.random() * 24 + 10}px`;
      width = height = "auto";
      break;
    case "dislike":
      particle.innerHTML = ["😡", "😠", "😈", "💩"][Math.floor(Math.random() * 4)];
      particle.style.fontSize = `${Math.random() * 24 + 10}px`;
      width = height = "auto";
      break;
    case "negative":
      particle.style.backgroundImage =
        "url(https://symbl-world.akamaized.net/i/webp/80/864630847478ce2ab483c21c52d1a2.webp)";
      break;
    case "shadow":
      var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
      particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
      particle.style.background = color;
      particle.style.borderRadius = "50%";
      width = height = Math.random() * 5 + 4;
      break;
    default:
      break;
  }

  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  const animation = particle.animate(
    [
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1,
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: Math.random() * 1000 + 5000,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay,
    }
  );
  animation.onfinish = () => {
    particle.remove();
  };
}

function Particles({ text, type }) {
  function handleClick(e) {
    // console.log('Button clicked!');
    let amount = 30;
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = e.target.getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      // console.log(bbox.width)
      // console.log(bbox.height)
      // console.log(bbox.left)
      // console.log(bbox.top)
      for (let i = 0; i < 30; i++) {
        createParticle(x, y, type);
      }
    } else {
      for (let i = 0; i < amount; i++) {
        // console.log(e.clientX)
        // console.log(e.clientY + window.scrollY)
        createParticle(e.clientX - e.clientX / 2, e.clientY + window.scrollY - e.clientY / 2, type);
        // createParticle(e.clientX, e.clientY + window.scrollY, type);
      }
    }
  }

  return (
    <span className={`particleBTN btn-${type}`} onClick={handleClick}>
      {text}
    </span>
  );
}

export default Particles;
