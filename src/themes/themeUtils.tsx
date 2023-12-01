
/**
 * Retrieves the value of a CSS variable.
 * @param variableName The name of the CSS variable.
 * @returns The value of the CSS variable.
 */
export function getCSS(key: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(key);
}

/**
 * Returns a style object with theme-based properties.
 * @returns Style object for components.
 */
