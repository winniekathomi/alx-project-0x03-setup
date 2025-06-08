import React from "react";

export interface PageRouteProps {
  pageRoute: string;
}

export interface LayoutProps {
    children: React.ReactNode;
    pageRoute?: string;
}
