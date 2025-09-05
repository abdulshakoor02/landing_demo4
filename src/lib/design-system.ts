import { designSystem, COLORS, TYPOGRAPHY, SPACING, BREAKPOINTS, ANIMATION, SHADOWS, BORDER_RADIUS, mediaQueries } from '@/config/design-system.config';
import { fonts, FontFamily, FontWeight } from './fonts';

// Re-export all configs for easy access
export {
  designSystem,
  COLORS,
  TYPOGRAPHY,
  SPACING,
  BREAKPOINTS,
  ANIMATION,
  SHADOWS,
  BORDER_RADIUS,
  mediaQueries,
  fonts,
};

// Export types
export type { FontFamily, FontWeight };

// Design system utilities
/**
 * Get font CSS class for a given font family
 */
export function getFontClass(family: FontFamily): string {
  return `font-${family}`;
}

/**
 * Get font size class for typography tokens
 */
export function getFontSizeClass(size: keyof typeof TYPOGRAPHY.sizes): string {
  return `text-${size}`;
}

/**
 * Get spacing utility class
 */
export function getSpacingClass(
  property: 'm' | 'p' | 'mx' | 'my' | 'px' | 'py',
  size: keyof typeof SPACING
): string {
  return `${property}-${size}`;
}

/**
 * Get color utility class
 */
export function getColorClass(
  property: 'text' | 'bg' | 'border',
  color: keyof typeof COLORS | `${keyof typeof COLORS}-${keyof (typeof COLORS)[keyof typeof COLORS]}`
): string {
  return `${property}-${color}`;
}

/**
 * Get shadow utility class
 */
export function getShadowClass(shadow: keyof typeof SHADOWS): string {
  return `shadow-${shadow}`;
}

/**
 * Get border radius utility class
 */
export function getBorderRadiusClass(radius: keyof typeof BORDER_RADIUS): string {
  return `rounded-${radius}`;
}

/**
 * CSS-in-JS style generators for components
 */
export const styles = {
  // Button styles
  button: {
    primary: {
      backgroundColor: COLORS.accent,
      color: COLORS.primary,
      fontFamily: fonts.headings.family,
      fontWeight: fonts.headings.weights.semibold,
      padding: `${SPACING.sm} ${SPACING.lg}`,
      borderRadius: BORDER_RADIUS.lg,
      transition: `all ${ANIMATION.timing.normal} ${ANIMATION.easing.easeInOut}`,
      '&:hover': {
        backgroundColor: COLORS.primary,
        color: COLORS.secondary,
        transform: 'translateY(-1px)',
        boxShadow: SHADOWS.md,
      },
      '&:active': {
        transform: 'translateY(0)',
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: COLORS.primary,
      border: `2px solid ${COLORS.primary}`,
      fontFamily: fonts.headings.family,
      fontWeight: fonts.headings.weights.semibold,
      padding: `${SPACING.sm} ${SPACING.lg}`,
      borderRadius: BORDER_RADIUS.lg,
      transition: `all ${ANIMATION.timing.normal} ${ANIMATION.easing.easeInOut}`,
      '&:hover': {
        backgroundColor: COLORS.primary,
        color: COLORS.secondary,
        transform: 'translateY(-1px)',
      },
    },
  },
  
  // Card styles
  card: {
    base: {
      backgroundColor: COLORS.secondary,
      borderRadius: BORDER_RADIUS.lg,
      padding: SPACING.lg,
      boxShadow: SHADOWS.sm,
      transition: `all ${ANIMATION.timing.normal} ${ANIMATION.easing.easeInOut}`,
      '&:hover': {
        boxShadow: SHADOWS.md,
        transform: 'translateY(-2px)',
      },
    },
    elevated: {
      backgroundColor: COLORS.secondary,
      borderRadius: BORDER_RADIUS.lg,
      padding: SPACING.xl,
      boxShadow: SHADOWS.lg,
    },
  },
  
  // Animation utilities
  animations: {
    fadeIn: {
      animation: `fadeIn ${ANIMATION.timing.normal} ${ANIMATION.easing.easeInOut} forwards`,
    },
    slideUp: {
      animation: `slideUp ${ANIMATION.timing.normal} ${ANIMATION.easing.easeOut} forwards`,
    },
    shimmer: {
      background: `linear-gradient(90deg, transparent, ${COLORS.accent}20, transparent)`,
      backgroundSize: '200% 100%',
      animation: `shimmer 1.5s ${ANIMATION.easing.easeInOut} infinite`,
    },
  },
  
  // Responsive utilities
  responsive: {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: `0 ${SPACING.md}`,
      [`@media ${mediaQueries.sm}`]: {
        padding: `0 ${SPACING.lg}`,
      },
      [`@media ${mediaQueries.lg}`]: {
        padding: `0 ${SPACING.xl}`,
      },
    },
  },
};

// Keyframes for animations
export const keyframes = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
  slideUp: `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
  shimmer: `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `,
};

// Component color variants
export const colorVariants = {
  primary: {
    bg: COLORS.primary,
    text: COLORS.secondary,
    border: COLORS.primary,
  },
  secondary: {
    bg: COLORS.secondary,
    text: COLORS.primary,
    border: COLORS.neutral[100],
  },
  accent: {
    bg: COLORS.accent,
    text: COLORS.primary,
    border: COLORS.accent,
  },
  neutral: {
    bg: COLORS.neutral[100],
    text: COLORS.neutral[500],
    border: COLORS.neutral[100],
  },
};

// Typography scale utilities
export const typographyScale = {
  display: {
    fontSize: TYPOGRAPHY.sizes.h1,
    fontWeight: TYPOGRAPHY.weights.heading600,
    lineHeight: 1.2,
    fontFamily: TYPOGRAPHY.fonts.headings,
  },
  heading: {
    fontSize: TYPOGRAPHY.sizes.h2,
    fontWeight: TYPOGRAPHY.weights.heading600,
    lineHeight: 1.3,
    fontFamily: TYPOGRAPHY.fonts.headings,
  },
  subheading: {
    fontSize: TYPOGRAPHY.sizes.h3,
    fontWeight: TYPOGRAPHY.weights.heading500,
    lineHeight: 1.4,
    fontFamily: TYPOGRAPHY.fonts.headings,
  },
  body: {
    fontSize: TYPOGRAPHY.sizes.body,
    fontWeight: TYPOGRAPHY.weights.body400,
    lineHeight: 1.6,
    fontFamily: TYPOGRAPHY.fonts.body,
  },
  small: {
    fontSize: TYPOGRAPHY.sizes.small,
    fontWeight: TYPOGRAPHY.weights.body400,
    lineHeight: 1.5,
    fontFamily: TYPOGRAPHY.fonts.body,
  },
};

// Utility to generate CSS custom properties for usage in styled-components or CSS modules
export function generateCSSVariables(): Record<string, string> {
  const variables: Record<string, string> = {};
  
  // Colors
  Object.entries(COLORS).forEach(([key, value]) => {
    if (typeof value === 'string') {
      variables[`--color-${key}`] = value;
    } else {
      Object.entries(value).forEach(([shade, shadeValue]) => {
        variables[`--color-${key}-${shade}`] = shadeValue;
      });
    }
  });
  
  // Breakpoints
  Object.entries(BREAKPOINTS).forEach(([key, value]) => {
    variables[`--breakpoint-${key}`] = value;
  });
  
  return variables;
}

// Theme provider context utilities (for theming if needed)
export const DesignSystemProvider = {
  // You can expand this to a React context provider if needed
  getTheme: () => designSystem,
  getColor: (colorPath: string) => {
    const [parent, shade] = colorPath.split('.');
    const colorParent = COLORS[parent as keyof typeof COLORS];
    
    if (shade && typeof colorParent === 'object' && shade in colorParent) {
      // @ts-ignore - We know this exists because of the check above
      return colorParent[shade as keyof typeof colorParent];
    }
    
    if (typeof colorParent === 'string') {
      return colorParent;
    }
    
    return undefined;
  },
};