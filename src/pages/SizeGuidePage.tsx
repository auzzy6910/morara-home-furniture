import { useState } from 'react';
import { Ruler, Move, RotateCcw, Info, ChevronDown, ChevronUp } from 'lucide-react';

const roomTypes = [
  {
    name: 'Living Room',
    tips: [
      'Leave at least 90cm (3ft) of walking space between furniture pieces',
      'A sofa should be 2/3 the width of the wall it faces',
      'Coffee table should be about 2/3 the length of your sofa',
      'Place the TV at eye level when seated, typically 100-120cm from the floor',
      'Area rugs should extend at least 15cm beyond the furniture edges',
    ],
    dimensions: [
      { item: '3-Seater Sofa', width: '200-240cm', depth: '85-100cm', height: '80-90cm' },
      { item: 'Coffee Table', width: '100-130cm', depth: '50-70cm', height: '40-50cm' },
      { item: 'TV Stand', width: '120-180cm', depth: '40-50cm', height: '50-60cm' },
      { item: 'Bookshelf', width: '80-120cm', depth: '30-40cm', height: '180-200cm' },
    ],
  },
  {
    name: 'Bedroom',
    tips: [
      'Leave at least 60cm on each side of the bed for nightstands and walking',
      'A king bed needs a room at least 3.7m x 3.7m (12ft x 12ft)',
      'Wardrobe doors need at least 75cm of clearance to open fully',
      'Nightstands should be roughly the same height as your mattress top',
      'A dresser should have at least 90cm of clearance in front for drawers',
    ],
    dimensions: [
      { item: 'King Bed', width: '193cm', depth: '203cm', height: '35-50cm' },
      { item: 'Queen Bed', width: '153cm', depth: '203cm', height: '35-50cm' },
      { item: 'Nightstand', width: '45-60cm', depth: '40-50cm', height: '55-65cm' },
      { item: 'Wardrobe (3-door)', width: '150-180cm', depth: '55-60cm', height: '200-220cm' },
    ],
  },
  {
    name: 'Dining Room',
    tips: [
      'Allow 60cm of table width per person for comfortable dining',
      'Leave at least 90cm between the table edge and wall for chair movement',
      'Pendant lights should hang 75-90cm above the table surface',
      'A round table seats more people in less space than a rectangular one',
      'Bench seating can fit more people on one side vs individual chairs',
    ],
    dimensions: [
      { item: '6-Seater Table', width: '160-180cm', depth: '85-100cm', height: '75cm' },
      { item: '4-Seater Table', width: '120-140cm', depth: '80-90cm', height: '75cm' },
      { item: 'Dining Chair', width: '45-55cm', depth: '50-55cm', height: '85-95cm' },
      { item: 'Sideboard', width: '120-180cm', depth: '40-50cm', height: '80-90cm' },
    ],
  },
  {
    name: 'Office',
    tips: [
      'Your desk should be at elbow height when seated (roughly 73-76cm)',
      'Monitor should be an arm\'s length away, top of screen at eye level',
      'Chair seat height should allow feet flat on floor, knees at 90 degrees',
      'Leave at least 120cm behind your desk for chair movement',
      'Consider a standing desk converter for alternating positions',
    ],
    dimensions: [
      { item: 'Executive Desk', width: '150-180cm', depth: '75-80cm', height: '73-76cm' },
      { item: 'Office Chair', width: '60-70cm', depth: '60-70cm', height: '100-130cm' },
      { item: 'Filing Cabinet', width: '40-50cm', depth: '50-60cm', height: '60-130cm' },
      { item: 'Bookcase', width: '80-100cm', depth: '30-35cm', height: '180-200cm' },
    ],
  },
];

// Simple room planner
const furnitureItems = [
  { name: 'Sofa', width: 120, height: 50, color: '#dc2626' },
  { name: 'Table', width: 60, height: 40, color: '#92400e' },
  { name: 'Chair', width: 30, height: 30, color: '#1d4ed8' },
  { name: 'Bed', width: 100, height: 120, color: '#7c3aed' },
  { name: 'Desk', width: 80, height: 40, color: '#059669' },
  { name: 'Wardrobe', width: 90, height: 35, color: '#d97706' },
];

interface PlacedItem {
  id: number;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

export default function SizeGuidePage() {
  const [activeRoom, setActiveRoom] = useState(0);
  const [expandedRoom, setExpandedRoom] = useState<number | null>(0);
  const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!draggedItem) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const item = furnitureItems.find(f => f.name === draggedItem);
    if (!item) return;
    setPlacedItems(prev => [...prev, {
      id: Date.now(),
      name: item.name,
      x: Math.max(0, x - item.width / 2),
      y: Math.max(0, y - item.height / 2),
      width: item.width,
      height: item.height,
      color: item.color,
    }]);
    setDraggedItem(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Planning Tools</span>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Size Guide & <span className="text-red-600">Room Planner</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Use our size guide to ensure your furniture fits perfectly, and try our room planner to visualize your layout.
        </p>
      </div>

      {/* Room Planner */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Move size={22} className="text-red-600" /> Room Planner
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Drag furniture items onto the room grid to plan your layout. Each grid square represents approximately 30cm.
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Furniture Palette */}
          <div className="lg:w-48 shrink-0">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Furniture Items</h3>
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-2">
              {furnitureItems.map(item => (
                <div
                  key={item.name}
                  draggable
                  onDragStart={() => setDraggedItem(item.name)}
                  className="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg cursor-grab active:cursor-grabbing text-center hover:shadow-md transition-shadow border dark:border-gray-600"
                >
                  <div className="w-8 h-8 rounded mx-auto mb-1" style={{ backgroundColor: item.color + '40', border: `2px solid ${item.color}` }} />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setPlacedItems([])} className="mt-3 w-full flex items-center justify-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors">
              <RotateCcw size={14} /> Clear All
            </button>
          </div>

          {/* Room Grid */}
          <div
            className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 relative overflow-hidden"
            style={{ minHeight: '400px', backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            onDragOver={e => e.preventDefault()}
            onDrop={handleDrop}
          >
            {placedItems.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <div className="text-center">
                  <Move size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Drag furniture here to plan your room</p>
                </div>
              </div>
            )}
            {placedItems.map(item => (
              <div
                key={item.id}
                className="absolute rounded shadow-md flex items-center justify-center text-white text-[10px] font-bold cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  left: item.x,
                  top: item.y,
                  width: item.width,
                  height: item.height,
                  backgroundColor: item.color,
                }}
                onClick={() => setPlacedItems(prev => prev.filter(p => p.id !== item.id))}
                title="Click to remove"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Size Guide */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Ruler size={22} className="text-red-600" /> Furniture Size Guide
        </h2>

        {/* Room Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {roomTypes.map((room, i) => (
            <button
              key={room.name}
              onClick={() => { setActiveRoom(i); setExpandedRoom(i); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeRoom === i
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Room Content */}
        {roomTypes.map((room, i) => (
          <div key={room.name} className={i === activeRoom ? 'block' : 'hidden'}>
            {/* Dimensions Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="text-left px-6 py-3 font-semibold text-gray-700 dark:text-gray-300">Item</th>
                      <th className="text-left px-6 py-3 font-semibold text-gray-700 dark:text-gray-300">Width</th>
                      <th className="text-left px-6 py-3 font-semibold text-gray-700 dark:text-gray-300">Depth</th>
                      <th className="text-left px-6 py-3 font-semibold text-gray-700 dark:text-gray-300">Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    {room.dimensions.map(dim => (
                      <tr key={dim.item} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">{dim.item}</td>
                        <td className="px-6 py-3 text-gray-600 dark:text-gray-400">{dim.width}</td>
                        <td className="px-6 py-3 text-gray-600 dark:text-gray-400">{dim.depth}</td>
                        <td className="px-6 py-3 text-gray-600 dark:text-gray-400">{dim.height}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => setExpandedRoom(expandedRoom === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                  <Info size={16} className="text-red-600" /> {room.name} Layout Tips
                </span>
                {expandedRoom === i ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
              </button>
              {expandedRoom === i && (
                <div className="px-6 pb-4">
                  <ul className="space-y-2">
                    {room.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
