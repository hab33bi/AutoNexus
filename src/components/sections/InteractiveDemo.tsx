import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Check } from 'lucide-react';
import Container from '../layout/Container';
import { Button } from '../ui/button';

export default function InteractiveDemo() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    email: '',
  });
  
  const [image, setImage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleImageChange = () => {
    // In a real implementation, this would handle file uploads
    setImage('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black/90 to-black relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            See How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Experience our streamlined vehicle submission and exposé generation process
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Submit Your Vehicle</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-1 text-sm">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="e.g., Toyota"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                />
              </div>
              
              <div>
                <label className="block text-white/80 mb-1 text-sm">Model</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="e.g., Camry"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-1 text-sm">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="e.g., 2019"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-1 text-sm">Mileage</label>
                  <input
                    type="text"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    placeholder="e.g., 45,000"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 mb-1 text-sm">Condition</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                >
                  <option value="" className="bg-gray-800">Select condition</option>
                  <option value="excellent" className="bg-gray-800">Excellent</option>
                  <option value="good" className="bg-gray-800">Good</option>
                  <option value="fair" className="bg-gray-800">Fair</option>
                  <option value="poor" className="bg-gray-800">Poor</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white/80 mb-1 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                />
              </div>
              
              <div className="pt-2">
                <button
                  onClick={handleImageChange}
                  className="w-full h-32 border-2 border-dashed border-white/30 rounded-md flex flex-col items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
                >
                  <Upload className="h-8 w-8 mb-2" />
                  <span>Upload Vehicle Images</span>
                  <span className="text-xs mt-1">Click to upload</span>
                </button>
              </div>
              
              <Button className="w-full">Submit Vehicle</Button>
            </div>
          </motion.div>
          
          {/* Preview side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Generated Exposé</h3>
            
            <div className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                {image ? (
                  <img 
                    src={image} 
                    alt="Vehicle preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white/40 text-center p-4">
                    <Upload className="h-10 w-10 mx-auto mb-2" />
                    <p>Vehicle image will appear here</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <h4 className="text-xl font-medium text-white">
                    {formData.brand ? formData.brand : 'Brand'} {formData.model ? formData.model : 'Model'}
                  </h4>
                  <div className="flex items-center mt-1">
                    <div className="flex space-x-3 text-white/70">
                      <span>{formData.year ? formData.year : 'Year'}</span>
                      <span>•</span>
                      <span>{formData.mileage ? `${formData.mileage} miles` : 'Mileage'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Condition</span>
                    <span className="text-white">{formData.condition || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Estimated Value</span>
                    <span className="text-white">$24,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Available for Purchase</span>
                    <span className="text-success-500 flex items-center">
                      <Check className="h-4 w-4 mr-1" />
                      Yes
                    </span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="secondary" className="w-full">View Full Details</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent-900/20 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-primary-900/20 blur-3xl" />
      </div>
    </section>
  );
}