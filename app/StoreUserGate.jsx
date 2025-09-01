"use client";

import { useStoreUser } from "@/hooks/use-store-user";

export default function StoreUserGate() {
  // Ensure the Convex user document exists on all routes
  useStoreUser();
  return null;
}

