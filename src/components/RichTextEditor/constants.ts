/**
 * RichTextEditor Constants
 *
 * Configuration and style constants for the editor.
 */

import type { ActiveStyles } from "./types";

/**
 * Default active styles state
 */
export const DEFAULT_ACTIVE_STYLES: ActiveStyles = {
  bold: false,
  italic: false,
  underline: false,
  alignLeft: true,
  alignCenter: false,
  alignRight: false,
};

/**
 * Default text color
 */
export const DEFAULT_TEXT_COLOR = "#ffffff";

/**
 * Default text highlight color
 */
export const DEFAULT_BACKGROUND_COLOR = "#fef08a";

/**
 * Icon size for toolbar buttons
 */
export const ICON_SIZE = 16;

/**
 * CSS classes for consistent styling
 */
export const STYLES = {
  /** Container wrapper */
  container:
    "rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#2a2a2a]",

  /** Toolbar section */
  toolbar:
    "flex items-center gap-0.5 px-1.5 py-1.5 bg-neutral-100 dark:bg-[#1e1e1e] border-b border-black/10 dark:border-white/10 rounded-t-lg",

  /** Toolbar button base */
  toolbarButton:
    "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded border-0 bg-transparent p-0 leading-none appearance-none transition-colors",

  /** Toolbar button active state */
  toolbarButtonActive: "bg-brand-500/15 text-brand-600 dark:bg-brand-400/25 dark:text-brand-300",

  /** Toolbar button inactive state */
  toolbarButtonInactive:
    "text-neutral-500 hover:text-neutral-900 hover:bg-black/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10",

  /** Separator between button groups */
  separator: "w-px h-4 shrink-0 bg-black/10 dark:bg-white/10 mx-0.5",

  /** Editor content area */
  editor:
    "min-h-[80px] px-3 py-2 text-sm text-neutral-900 dark:text-white outline-none [&:empty]:before:content-[attr(data-placeholder)] [&:empty]:before:text-neutral-400 dark:[&:empty]:before:text-gray-500 [&:empty]:before:pointer-events-none",

  /** Placeholder text */
  placeholder:
    "absolute top-2 left-3 text-sm text-neutral-400 dark:text-gray-500 pointer-events-none",

  /** Tooltip wrapper */
  tooltipWrapper: "relative flex shrink-0 group",

  /** Tooltip content */
  tooltip:
    "pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-1 rounded-md border border-white/10 bg-[#111111] px-2 py-1 text-[11px] font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100",
} as const;
