export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'entertainment' | 'ai-restoration' | 'sports-design';
  description: string;
  fullDetails: string;
  image: string;
  tags: string[];
  colorPalette: string[];
  toolsUsed: string[];
  keyFeatures: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  iconName: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface WorkflowState {
  grain: number;
  exposure: number;
  contrast: number;
  saturation: number;
  sharpen: number;
  upscaleRatio: 4 | 8;
  noiseReduction: number;
}
