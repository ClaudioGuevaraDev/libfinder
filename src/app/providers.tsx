"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import { Toaster } from "sonner";

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      <main>{children}</main>
      <Toaster richColors position="bottom-right" expand />
    </NextUIProvider>
  );
}

export default Providers;
