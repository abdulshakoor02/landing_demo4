// Design System Configuration - Managed by Queen Coordinator
// This file contains the complete design system specification for the immigration consultancy landing page

export interface DesignSystemConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: {
      100: string;
      500: string;
    };
  };
  typography: {
    fonts: {
      headings: string;
      body: string;
    };
    weights: {
      heading600: number;
      heading500: number;
      body400: number;
    };
    sizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body: string;
      small: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  animation: {
    timing: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
    };
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
}

export const designSystem: DesignSystemConfig = {
  // Color Palette - Based on design.md specifications
  colors: {
    primary: '#0D2F5B', // Deep Sapphire Blue
    secondary: '#FFFFFF', // White
    accent: '#D4AF37', // Soft Gold
    neutral: {
      100: '#F1F5F9', // Slate 100
      500: '#64748B', // Slate 500
    },
  },

  // Typography - Based on design.md specifications
  typography: {
    fonts: {
      headings: 'Poppins, system-ui, sans-serif',
      body: 'Lato, system-ui, sans-serif',
    },
    weights: {
      heading600: 600, // For main headings
      heading500: 500, // For sub-headings
      body400: 400, // For body text
    },
    sizes: {
      h1: '3.5rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.5rem',
      h5: '1.25rem',
      h6: '1rem',
      body: '1rem',
      small: '0.875rem',
    },
  },

  // Spacing system
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    xxl: '8rem',
  },

  // Responsive breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Animation timing and easing
  animation: {
    timing: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },

  // Border radius
  borderRadius: {
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
};

// Export individual constants for easy access
export const COLORS = designSystem.colors;
export const TYPOGRAPHY = designSystem.typography;
export const SPACING = designSystem.spacing;
export const BREAKPOINTS = designSystem.breakpoints;
export const ANIMATION = designSystem.animation;
export const SHADOWS = designSystem.shadows;
export const BORDER_RADIUS = designSystem.borderRadius;

// Helper function to generate CSS custom properties
export function generateCSSCustomProperties(): string {
  const properties: string[] = [];

  // Colors
  Object.entries(designSystem.colors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      properties.push(`--color-${key}: ${value};`);
    } else {
      Object.entries(value).forEach(([shade, shadeValue]) => {
        properties.push(`--color-${key}-${shade}: ${shadeValue};`);
      });
    }
  });

  // Typography
  Object.entries(designSystem.typography.fonts).forEach(([key, value]) => {
    properties.push(`--font-${key}: ${value};`);
  });

  Object.entries(designSystem.typography.weights).forEach(([key, value]) => {
    properties.push(`--font-weight-${key}: ${value};`);
  });

  Object.entries(designSystem.typography.sizes).forEach(([key, value]) => {
    properties.push(`--font-size-${key}: ${value};`);
  });

  // Spacing
  Object.entries(designSystem.spacing).forEach(([key, value]) => {
    properties.push(`--spacing-${key}: ${value};`);
  });

  // Breakpoints
  Object.entries(designSystem.breakpoints).forEach(([key, value]) => {
    properties.push(`--breakpoint-${key}: ${value};`);
  });

  // Animation
  Object.entries(designSystem.animation.timing).forEach(([key, value]) => {
    properties.push(`--animation-timing-${key}: ${value};`);
  });

  Object.entries(designSystem.animation.easing).forEach(([key, value]) => {
    properties.push(`--animation-easing-${key}: ${value};`);
  });

  // Shadows
  Object.entries(designSystem.shadows).forEach(([key, value]) => {
    properties.push(`--shadow-${key}: ${value};`);
  });

  // Border Radius
  Object.entries(designSystem.borderRadius).forEach(([key, value]) => {
    properties.push(`--border-radius-${key}: ${value};`);
  });

  return `:root {
  ${properties.join('\n  ')}
}`;
}

// Media query helpers
export const mediaQueries = {
  sm: `(min-width: ${designSystem.breakpoints.sm})`,
  md: `(min-width: ${designSystem.breakpoints.md})`,
  lg: `(min-width: ${designSystem.breakpoints.lg})`,
  xl: `(min-width: ${designSystem.breakpoints.xl})`,
  '2xl': `(min-width: ${designSystem.breakpoints['2xl']})`,
};

// Type utilities for TypeScript
export type ColorToken = keyof typeof COLORS;
export type TypographyToken = keyof typeof TYPOGRAPHY.sizes;
export type SpacingToken = keyof typeof SPACING;