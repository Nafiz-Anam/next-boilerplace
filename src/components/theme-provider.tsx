"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps extends React.PropsWithChildren<{}> {
    [key: string]: any;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    ...props
}) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
