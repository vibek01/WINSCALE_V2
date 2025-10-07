// src/theme/colors.ts

export const colors = {
  surface: '#F9FAFB', // soft neutral background (off-white, not pure white)
  text: '#0D0F1C',    // deep ink text, softer than pure black
  textS: '#111111d8',
  primary: '#172554', // deep, rich navy blue
  accent: '#E023B2',  // vibrant magenta (energetic, high-contrast CTA)
  secondary: '#38BDF8', // sky blue (fresh, balances blue)
  muted: '#6B7280',   // neutral gray for secondary text

  // --- Premium gradients ---
  grad1: 'linear-gradient(115deg, #172554 45%, #F0F9FF 100%)',
  // --- UPDATED GRADIENT ---
  // Replaced violet → magenta with a more visually appealing dark teal → cyan
  grad2: 'linear-gradient(135deg, #b3fff9ff 0%, #22D3EE 100%)', 
  grad3: 'linear-gradient(135deg, #E023B2 0%, #38BDF8 100%)', // magenta → sky blue
};

export const cssVariables = `
  --color-surface: ${colors.surface};
  --color-text: ${colors.text};
  --color-primary: ${colors.primary};
  --color-accent: ${colors.accent};
  --color-secondary: ${colors.secondary};
  --color-muted: ${colors.muted};
  --gradient-1: ${colors.grad1};
  --gradient-2: ${colors.grad2};
  --gradient-3: ${colors.grad3};
`;