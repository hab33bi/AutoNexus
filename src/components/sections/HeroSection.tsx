import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxBanner } from 'react-scroll-parallax';
import Container from '../layout/Container';
import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <ParallaxBanner
        layers={[
          {
            image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
            speed: -20,
          },
        ]}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90 backdrop-blur-[2px]" />
      </ParallaxBanner>

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Revolutionizing Car Dealership Operations
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-white/80 mb-8">
              Auto Nexus is an integrated platform designed to digitize and automate dealership workflows,
              from customer acquisition to inventory management and digital marketing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" variant="default">
              Get Started
            </Button>
            <Button size="lg" variant="glass">
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Abstract floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-secondary-500/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}