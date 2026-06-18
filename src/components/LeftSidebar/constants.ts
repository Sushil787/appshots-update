/**
 * LeftSidebar Constants
 *
 * Style constants used across LeftSidebar components.
 */

/**
 * CSS classes for consistent styling
 */
export const STYLES = {
  /** Sidebar container */
  sidebar:
    "w-72 shrink-0 border-r border-black/10 dark:border-white/10 bg-white dark:bg-[#141414] flex flex-col",

  /** Header section */
  header: "p-4 border-b border-black/10 dark:border-white/10",

  /** Content area */
  content: "flex-1 overflow-y-auto p-4 space-y-4",

  /** Section container */
  section:
    "rounded-xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-[#1e1e1e] p-3.5",

  /** Section title */
  sectionTitle:
    "text-[11px] font-semibold text-neutral-700 dark:text-gray-200 uppercase tracking-wider mb-3",

  /** Button list container */
  buttonList: "space-y-1.5",

  /** Selection button base */
  selectionButton:
    "w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",

  /** Selection button active state */
  selectionButtonActive:
    "bg-brand-500 text-white shadow-sm dark:bg-brand-500 dark:text-white",

  /** Selection button inactive state */
  selectionButtonInactive:
    "bg-white text-neutral-700 border border-black/5 hover:bg-neutral-100 dark:bg-[#2a2a2a] dark:text-gray-300 dark:border-transparent dark:hover:bg-[#333]",

  /** Color picker container */
  colorPicker: "flex flex-wrap gap-2",

  /** Color button base */
  colorButton: "w-7 h-7 rounded-full border-2 transition-all",

  /** Color button active state */
  colorButtonActive:
    "border-brand-500 dark:border-brand-400 scale-110 ring-2 ring-brand-500/20 dark:ring-brand-400/20",

  /** Color button inactive state */
  colorButtonInactive: "border-black/10 dark:border-white/15",

  /** Primary action button */
  primaryButton:
    "w-full mt-3 bg-brand-500 hover:bg-brand-600 text-white dark:bg-brand-500 dark:hover:bg-brand-600 dark:text-white font-semibold py-2.5 rounded-lg shadow-sm transition-colors",
} as const;
