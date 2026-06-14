import { Project, ServiceDetail } from './types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'entertainment',
    title: 'Entertainment Marketing',
    iconName: 'Clapperboard',
    subtitle: 'High-Impact Promotional Campaigns & Key Art',
    description: 'Crafting visually striking posters and social media assets for major entertainment franchises. My work involves setting distinct cinematic tones, balancing complex typography, and maintaining strict brand consistency across long-running campaigns.',
    highlights: [
      'Cinematic Key Art for web series & films',
      'Long-run sustained promotional campaigns',
      'Complex typography & poster composition',
      'Dynamic key mood boards & character collages'
    ]
  },
  {
    id: 'ai-restoration',
    title: 'High-Fidelity AI Integration & Restoration',
    iconName: 'Sparkles',
    subtitle: 'Pure Upscaling & Invisible Retouching',
    description: 'Leveraging AI workflows for advanced image upscaling (4K to 8K) and seamless retouching. My process strictly prioritizes pure enhancement—meticulously removing unwanted background elements for a clean aesthetic while ensuring original subjects and facial structures are perfectly preserved without unprompted creative additions.',
    highlights: [
      'Pure face/surface structure preservation',
      'Advanced resolution multiplication (4K -> 8K)',
      'Background noise & error clearing',
      'Photoshop-embedded workflow integration'
    ]
  },
  {
    id: 'sports',
    title: 'Sports & Concept Design',
    iconName: 'Trophy',
    subtitle: 'High-Energy Assets & 1/7 Scale Figurine Outlines',
    description: 'Designing high-energy digital content, including dynamic cricket stadium backgrounds, detailed jersey replacements, and accurate tournament branding. Additionally, I develop highly detailed concept art, such as realistic 1/7 scale commercial model figurines complete with packaging and mounting specifications.',
    highlights: [
      'Dynamic cricket stadiums & stadium lighting',
      'Realistic textile, fabric, and jersey replacements',
      'Commercial 1/7 scale collector figurines specifications',
      'Sleek product model packaging & visual drafts'
    ]
  }
];

export const portfolioProjects: Project[] = [
  {
    id: 'broadcast-marketing-ui',
    title: 'Broadcast Marketing & UI Concepts',
    subtitle: 'Campaign overlay layouts & Voice Assistants',
    category: 'entertainment',
    description: 'A collection of promotional key art and digital overlays, including sustained campaign assets for Bigg Boss and conceptual voice-assistant UI integrations for popular titles like F.R.I.E.N.D.S.',
    fullDetails: 'Combining prime broadcast design with modern smart-TV interfaces. This project illustrates digital layouts that maintain the fiery tone of reality entertainment (Bigg Boss) while establishing a highly interactive voice-assistant layout modeled after iconic fictional shows.',
    image: 'https://picsum.photos/seed/bb-show/800/600',
    tags: ['UI Concept', 'Key Art', 'Voice widgets', 'Interactive Overlay'],
    colorPalette: ['#FFA500', '#111827', '#E5E7EB', '#EF4444'],
    toolsUsed: ['Adobe Photoshop', 'Figma', 'Generative Retouching'],
    keyFeatures: ['Live episode card triggers', 'Subtitles customization HUD', 'Dynamic voice request active waves', 'Sustained social toolkit templates']
  },
  {
    id: 'cinematic-key-art',
    title: 'Cinematic Key Art Design',
    subtitle: 'Raakh promo key campaign structure',
    category: 'entertainment',
    description: 'Dramatic, dialogue-driven poster designs for the thriller Raakh. Focused on deep color grading, textured typography, and collage-style compositions to tease narrative tension.',
    fullDetails: 'An exploration of suspense, shadows, and gritty high-contrast grading. Built explicitly around the thriller narrative of "Raakh", combining dialogue snippets, texture filters, and character silhouettes to deliver visual tension for potential digital audiences.',
    image: 'https://picsum.photos/seed/raakh-thriller/800/600',
    tags: ['Key Art', 'Movie Poster', 'Color Grading', 'Textured Typography'],
    colorPalette: ['#3F0000', '#0D0D11', '#B3B3B3', '#D4AF37'],
    toolsUsed: ['Adobe Photoshop', 'Raw Camera Filter', 'Digital Brush collages'],
    keyFeatures: ['Textured background grain overlay', 'Dramatic lighting grading', 'Slight motion blur action accents', 'High-end titanium text spacing']
  },
  {
    id: 'sports-figurine-concept',
    title: 'Sports & Concept Masterclass',
    subtitle: 'Cricket branding & 1/7 Scale figurine specs',
    category: 'sports-design',
    description: 'Dynamic sports artwork featuring cricket stadium environments, textile jersey simulation, and detailed specifications for commercial physical collector models.',
    fullDetails: 'Bridges physical product engineering with high-octane sports graphics. Designs include immersive stadium visual mockups, highly accurate fabric wrinkle jersey layers, and precise blueprints for a 1/7 scale figurine featuring clear protective retail box and custom stand specifications.',
    image: 'https://picsum.photos/seed/cricket-figurine/800/600',
    tags: ['Sports Graphic', 'Textile Replacement', 'Model Figurine Specs', 'Packaging Layout'],
    colorPalette: ['#1E3A8A', '#065F46', '#D97706', '#F3F4F6'],
    toolsUsed: ['Photoshop Pen Tool', 'Smart displacement mapping', 'AI Restoration'],
    keyFeatures: ['Stadium floodlight atmospheric rays', 'Clean stitch-by-stitch team uniform replacements', '1/7 scale figure acrylic pedestal layout', 'Product sleeve assembly diagrams']
  }
];
