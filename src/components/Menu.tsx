import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChefHat, Leaf, Flame, ShieldAlert } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Truffle Ribeye Steak',
    description: 'Dry-aged ribeye with black truffle butter, roasted asparagus, and bone marrow jus.',
    price: '$42',
    category: 'mains',
    tags: ['spicy'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/menu-steak-da9a3755-1776971784222.webp',
  },
  {
    id: 2,
    name: 'Burrata & Basil Pizza',
    description: 'Sourdough crust, san marzano tomatoes, fresh burrata, and garden-grown basil.',
    price: '$24',
    category: 'mains',
    tags: ['vegan'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/menu-pizza-518e09c6-1776971784640.webp',
  },
  {
    id: 3,
    name: 'Citrus Medley Salad',
    description: 'Vibrant greens with blood orange, whipped feta, and toasted pine nuts.',
    price: '$18',
    category: 'starters',
    tags: ['vegan', 'gf'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/menu-salad-841a9544-1776971784625.webp',
  },
  {
    id: 4,
    name: 'Chocolate Lava Fondant',
    description: 'Valrhona chocolate, salted caramel core, and Madagascan vanilla bean gelato.',
    price: '$14',
    category: 'desserts',
    tags: ['gf'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/menu-dessert-b8fdafe7-1776971783376.webp',
  },
  {
    id: 5,
    name: 'Smoked Sage Old Fashioned',
    description: 'Hand-crafted bourbon with maple syrup, aromatic bitters, and smoked sage leaf.',
    price: '$16',
    category: 'drinks',
    tags: [],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/menu-cocktail-d337060b-1776971784356.webp',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Main Courses' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Beverages' },
];

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const filterMatch = !activeFilter || item.tags.includes(activeFilter);
    return categoryMatch && filterMatch;
  });

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Our Gastronomy</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
          >
            Seasonal Signature Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Meticulously crafted using farm-to-table ingredients sourced daily from local organic producers.
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-8 mb-12">
          <Tabs defaultValue="all" className="w-full max-w-3xl" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto p-1 bg-amber-50">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex gap-4">
            <button
              onClick={() => setActiveFilter(activeFilter === 'vegan' ? null : 'vegan')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${activeFilter === 'vegan' ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-white text-muted-foreground border-border'}`}
            >
              <Leaf className="h-4 w-4" />
              <span className="text-xs font-semibold">Vegetarian</span>
            </button>
            <button
              onClick={() => setActiveFilter(activeFilter === 'gf' ? null : 'gf')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${activeFilter === 'gf' ? 'bg-amber-100 border-amber-500 text-amber-700' : 'bg-white text-muted-foreground border-border'}`}
            >
              <ShieldAlert className="h-4 w-4" />
              <span className="text-xs font-semibold">Gluten-Free</span>
            </button>
            <button
              onClick={() => setActiveFilter(activeFilter === 'spicy' ? null : 'spicy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${activeFilter === 'spicy' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-white text-muted-foreground border-border'}`}
            >
              <Flame className="h-4 w-4" />
              <span className="text-xs font-semibold">Spicy</span>
            </button>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full border-none bg-amber-50/50">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-primary hover:bg-white text-lg font-serif px-3 py-1">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-3">
                      {item.tags.includes('vegan') && <Badge variant="outline" className="text-[10px] text-emerald-600 border-emerald-600 uppercase">Veg</Badge>}
                      {item.tags.includes('gf') && <Badge variant="outline" className="text-[10px] text-amber-600 border-amber-600 uppercase">GF</Badge>}
                      {item.tags.includes('spicy') && <Badge variant="outline" className="text-[10px] text-red-600 border-red-600 uppercase">Spicy</Badge>}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};