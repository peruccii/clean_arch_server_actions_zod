'use client'

import { Button } from "@/components/ui/button";
import { useSyncExternalStore } from "react";

export const ButtonForm = () => {
  const isRunningOnBrowser = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  return (
    <Button disabled={!isRunningOnBrowser} type="submit" className="w-full">
      Sign in
    </Button>
  );
};
