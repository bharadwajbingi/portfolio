'use client';

import { useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ui/theme-provider';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    const doc = document as any;

    // If View Transitions API is not supported, just switch normally
    if (!doc.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Get the button position for the circle origin
    const button = buttonRef.current;
    if (!button) {
      setTheme(newTheme);
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate the max radius needed to cover the entire screen
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setTheme(newTheme);
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full bg-background/20 backdrop-blur-sm border border-white/10 hover:bg-background/30 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}