import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-0" // Ensure it stays behind everything
      options={{
        fullScreen: { enable: false }, // Important: keeps it contained in the hero div
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Connects lines to mouse on hover
            },
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#e62b1e", // TEDx Red
          },
          links: {
            color: "#e62b1e", // TEDx Red
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
          move: {
            direction: "none", // Moves randomly (more organic than "bottom")
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5, // Subtle speed
            straight: false,
          },
          number: {
            value: 80, // Good density
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}