/**
 * Toolbar Component
 *
 * Top toolbar for the canvas preview area with screenshot management controls.
 */

import { Plus } from "lucide-react";
import { ORIGINAL_REPO_URL, ORIGINAL_REPO_LABEL } from "../../constants";

interface ToolbarProps {
  /** Callback to add a new screenshot */
  onAddScreenshot: () => void;
  /** Total number of screenshots */
  screenshotCount: number;
}

/**
 * Toolbar - Canvas top toolbar with controls
 *
 * Displays the "Add Screenshot" button and screenshot count.
 *
 * @param props - Component props
 * @param props.onAddScreenshot - Handler for adding new screenshot
 * @param props.screenshotCount - Current number of screenshots
 *
 * @example
 * <Toolbar onAddScreenshot={addScreenshot} screenshotCount={3} />
 */
export const Toolbar = ({ onAddScreenshot, screenshotCount }: ToolbarProps) => (
  <div className="h-14 border-b border-black/10 dark:border-white/10 bg-white dark:bg-[#141414] flex items-center px-4 gap-4">
    <div className="flex items-center gap-2">
      <button
        onClick={onAddScreenshot}
        className="flex items-center gap-1.5 bg-brand-500 hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-600 text-white text-sm font-semibold px-3.5 py-2 rounded-lg shadow-sm transition-colors"
      >
        <Plus className="w-4 h-4" />
        Add Screenshot
      </button>
    </div>
    <a
      href={ORIGINAL_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-neutral-500 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
      title="This project builds on the original open-source repo"
    >
      Based on{" "}
      <span className="underline underline-offset-2">{ORIGINAL_REPO_LABEL}</span>
    </a>
    <span className="text-xs text-neutral-400 dark:text-gray-500">
      · extended with added features
    </span>
    <div className="flex-1" />
    <span className="text-xs text-neutral-500 dark:text-gray-400">
      {screenshotCount} screenshot{screenshotCount !== 1 ? "s" : ""}
    </span>
  </div>
);
