/**
 * RightSidebar Constants
 *
 * Style constants used across RightSidebar components.
 */

/**
 * CSS classes for consistent styling
 */
export const STYLES = {
  /** Sidebar container */
  sidebar:
    "w-96 shrink-0 border-l border-black/10 dark:border-white/10 bg-white dark:bg-[#141414] overflow-y-auto",

  /** Content wrapper */
  content: "p-4 space-y-6",

  /** Section container */
  section:
    "rounded-xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-[#1e1e1e] p-3.5",

  /** Section title */
  sectionTitle:
    "text-[11px] font-semibold text-neutral-700 dark:text-gray-200 uppercase tracking-wider mb-3",

  /** Section content */
  sectionContent: "space-y-3",

  /** Label text */
  label: "text-xs font-medium text-neutral-600 dark:text-gray-300",

  /** Small label text */
  labelSmall: "text-xs text-neutral-500 dark:text-gray-400",

  /** Range slider */
  rangeSlider: "w-full mt-1 accent-brand-500 dark:accent-brand-400",

  /** Color input */
  colorInput: "w-full h-8 rounded-lg cursor-pointer",

  /** Small color input */
  colorInputSmall: "w-6 h-6 rounded cursor-pointer",

  /** Toggle button container */
  toggle: "w-9 h-5 rounded-full transition-colors",

  /** Toggle button active */
  toggleActive: "bg-brand-500 dark:bg-brand-500",

  /** Toggle button inactive */
  toggleInactive: "bg-neutral-300 dark:bg-[#333]",

  /** Toggle knob */
  toggleKnob:
    "w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-transform",

  /** Toggle knob active position */
  toggleKnobActive: "translate-x-4",

  /** Toggle knob inactive position */
  toggleKnobInactive: "translate-x-0.5",

  /** Mode button */
  modeButton: "flex-1 text-xs font-medium py-1.5 rounded-md transition-colors",

  /** Mode button active */
  modeButtonActive:
    "bg-brand-500 text-white shadow-sm dark:bg-brand-500 dark:text-white",

  /** Mode button inactive */
  modeButtonInactive:
    "bg-transparent text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-gray-200",

  /** Upload button */
  uploadButton:
    "w-full bg-white border border-black/5 hover:bg-neutral-100 text-neutral-700 dark:bg-[#2a2a2a] dark:border-transparent dark:hover:bg-[#333] dark:text-gray-300 text-sm font-medium py-2 rounded-lg transition-colors",

  /** Dropdown button */
  dropdownButton:
    "w-full flex items-center justify-between bg-white border border-black/5 hover:bg-neutral-100 text-neutral-900 dark:bg-[#2a2a2a] dark:border-transparent dark:hover:bg-[#333] dark:text-white text-sm rounded-lg px-3 py-2 transition-colors outline-none focus:ring-2 focus:ring-brand-500/40 dark:focus:ring-brand-400/40",

  /** Gradient preset button */
  gradientButton: "h-6 rounded-md",

  /** Gradient preset active */
  gradientButtonActive:
    "ring-2 ring-brand-500 ring-offset-1 ring-offset-neutral-50 dark:ring-brand-400 dark:ring-offset-[#1e1e1e]",

  /** Overlay item */
  overlayItem:
    "flex items-center gap-2 p-2 rounded-xl cursor-pointer transition-all",

  /** Overlay item active */
  overlayItemActive:
    "bg-brand-50 ring-1 ring-brand-500 dark:bg-brand-500/15 dark:ring-brand-400",

  /** Overlay item inactive */
  overlayItemInactive:
    "bg-white border border-black/5 hover:bg-neutral-100 dark:bg-[#2a2a2a] dark:border-transparent dark:hover:bg-[#333]",

  /** Overlay thumbnail */
  overlayThumbnail: "w-10 h-10 object-cover rounded-lg",

  /** Icon button */
  iconButton:
    "p-1 rounded-md text-neutral-500 hover:text-brand-600 hover:bg-brand-500/10 dark:text-gray-400 dark:hover:text-brand-300 dark:hover:bg-brand-400/10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent",

  /** Delete icon button */
  iconButtonDelete:
    "p-1 text-neutral-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400",

  /** Properties panel */
  propertiesPanel:
    "p-3 bg-neutral-200/60 dark:bg-[#2a2a2a] rounded-lg border border-black/5 dark:border-white/5 space-y-3 mt-2",
} as const;

/**
 * Slider range configurations
 */
export const SLIDER_RANGES = {
  deviceScale: { min: 40, max: 90 },
  devicePosition: { min: 20, max: 60 },
  deviceRotation: { min: 0, max: 360 },
  headlineSize: { min: 32, max: 120 },
  subheadlineSize: { min: 20, max: 72 },
  textWidth: { min: 20, max: 120, step: 5 },
  shadowBlur: { min: 0, max: 100 },
  shadowOffset: { min: -50, max: 50 },
  imageSize: { min: 5, max: 100 },
  imageRotation: { min: 0, max: 360 },
  shapeSize: { min: 5, max: 120 },
  shapeOpacity: { min: 0, max: 100 },
  shapeCornerRadius: { min: 0, max: 50 },
  device3dRotateY: { min: -45, max: 45 },
  device3dRotateX: { min: -30, max: 30 },
} as const;
