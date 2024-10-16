"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { LoaderPinwheel } from "lucide-react";

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      {mounted ? (
        <Button onClick={toggleTheme} variant="ghost" size="icon">
          {resolvedTheme === "dark" ? (
            <SunIcon className="size-5" />
          ) : (
            <MoonIcon className="size-5" />
          )}
        </Button>
      ) : (
        <Button variant="ghost" size="icon">
          <LoaderPinwheel className="animate-spin size-5" />
        </Button>
      )}
    </>
  );
}
