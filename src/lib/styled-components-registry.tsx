'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(
    () => new ServerStyleSheet()
  );

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // On the server, use StyleSheetManager with the sheet
  // On the client, use StyleSheetManager without a sheet (normal behavior)
  return (
    <StyleSheetManager
      sheet={
        typeof window === 'undefined'
          ? styledComponentsStyleSheet.instance
          : undefined
      }
    >
      {children}
    </StyleSheetManager>
  );
}
