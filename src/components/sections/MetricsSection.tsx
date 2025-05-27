import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import useAnimatedCounter from '../../hooks/useAnimatedCounter';
import { formatNumber } from '../../lib/utils';

interface MetricCardProps {
  title: string;
  value: number;
  suffix?: string;
  delay: number;
}

function MetricCard({ title, value, suffix = '', delay }: MetricCardProps) {
  const count = useAnimatedCounter(value, 2000, delay);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 flex flex-col items-center text-center"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
        {formatNumber(count)}{suffix}
      </h3>
      <p className="text-white/70">{title}</p>
    </motion.div>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-black/90 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Auto Nexus Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Transforming the automotive industry with real results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard 
            title="Vehicles Listed" 
            value={12500} 
            delay={0} 
          />
          <MetricCard 
            title="Active Dealerships" 
            value={475} 
            delay={200} 
          />
          <MetricCard 
            title="Total Transactions" 
            value={28350} 
            delay={400} 
          />
          <MetricCard 
            title="Avg. Time Savings" 
            value={72} 
            suffix="%" 
            delay={600} 
          />
        </div>
      </Container>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-900/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary-900/20 blur-3xl" />
      </div>
    </section>
  );
}