import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Container from '../layout/Container';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "Premier Auto Group",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      quote: "Auto Nexus has completely transformed our dealership operations. We've reduced the time spent on paperwork by 60% and increased our inventory turnover by 40%.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Owner",
      company: "Chen Motors",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      quote: "The exposé generation feature alone has been worth the investment. Our vehicle presentations look professional and we've seen a significant increase in customer engagement.",
      rating: 5
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "Sales Director",
      company: "AutoCity Dealerships",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      quote: "The marketplace integration has opened up new revenue streams for our dealership. We now have access to a wider network of vehicles and partners.",
      rating: 4
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black/90 to-black relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Hear from dealerships that have transformed their operations with Auto Nexus
          </motion.p>
        </div>

        <div className="relative px-12">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 z-10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 h-full"
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-white/70">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? 'text-accent-500 fill-accent-500' : 'text-white/30'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-white/80 text-lg italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 z-10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full mx-1 ${
                i === current ? 'bg-primary-500' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-accent-900/20 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary-900/20 blur-3xl" />
      </div>
    </section>
  );
}