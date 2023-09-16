import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

});

const PDFContent = ({ purchaseResult, content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.section}>Purchase Result:</Text>
      <Text style={[styles.section, styles.content]}>{JSON.stringify(purchaseResult, null, 2)}</Text>
      <Text style={styles.section}>Additional Content:</Text>
      <Text style={[styles.section, styles.content]}>{JSON.stringify(content, null, 2)}</Text>
    </Page>
  </Document>
);

export default PDFContent;