import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  DollarSign, 
  Layout, 
  Image, 
  Database, 
  ShoppingBag 
} from 'lucide-react';
import Container from '../layout/Container';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
    >
      <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}

export default function FeatureSection() {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-primary-400" />,
      title: "Vehicle Information Collection",
      description: "Create customized forms for customers to provide details about vehicles they want to sell."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary-400" />,
      title: "Price Offer & Acquisition",
      description: "Send quick price offers based on submitted forms and register purchased vehicles in the system."
    },
    {
      icon: <Layout className="h-6 w-6 text-primary-400" />,
      title: "Exposé Generation",
      description: "Automatically generate professional presentation pages for vehicles with specifications and pricing."
    },
    {
      icon: <Image className="h-6 w-6 text-primary-400" />,
      title: "Image Editing Features",
      description: "Remove backgrounds from photos and blur license plates for privacy and professional appearance."
    },
    {
      icon: <Database className="h-6 w-6 text-primary-400" />,
      title: "Inventory Management",
      description: "Upload and manage vehicle inventory efficiently within the system."
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-primary-400" />,
      title: "Marketplace Integration",
      description: "Showcase vehicles to other Auto Nexus users and facilitate dealership transactions."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-black/90 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Comprehensive Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Streamline your dealership operations with our integrated platform
          </motion.p>
        </div>

        <Tabs defaultValue="dealer" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="dealer">Dealer View</TabsTrigger>
              <TabsTrigger value="customer">Customer View</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="dealer" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index} 
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description} 
                  index={index} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="customer" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<FileText className="h-6 w-6 text-primary-400" />}
                title="Easy Vehicle Submission" 
                description="Submit your vehicle details through a simple, intuitive form to get a quick offer."
                index={0}
              />
              <FeatureCard 
                icon={<DollarSign className="h-6 w-6 text-primary-400" />}
                title="Instant Price Quotes" 
                description="Receive competitive price offers promptly after submitting your vehicle information."
                index={1}
              />
              <FeatureCard 
                icon={<Layout className="h-6 w-6 text-primary-400" />}
                title="Transparent Process" 
                description="Experience a clear, straightforward selling process from submission to payment."
                index={2}
              />
            </div>
          </TabsContent>
        </Tabs>
      </Container>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary-900/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-secondary-900/20 blur-3xl" />
      </div>
    </section>
  );
}