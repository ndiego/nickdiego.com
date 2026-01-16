'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="flex h-9" />;
  }

  return (
    <div className="flex">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('light')}
        className={`h-8 w-8 ${
          theme === 'light'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Light theme"
      >
        <Sun />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('system')}
        className={`h-8 w-8 ${
          theme === 'system'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="System theme"
      >
        <Monitor />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('dark')}
        className={`h-8 w-8 ${
          theme === 'dark'
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Dark theme"
      >
        <Moon />
      </Button>
    </div>
  );
}
