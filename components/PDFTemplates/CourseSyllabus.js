import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333'
  },
  section: {
    margin: 10,
    padding: 10
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#444'
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#666'
  }
});

const CourseSyllabus = ({ course }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>{course.title} - Course Syllabus</Text>
      
      <View style={styles.section}>
        <Text style={styles.title}>Course Overview</Text>
        <Text style={styles.text}>{course.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Course Details</Text>
        <Text style={styles.text}>Duration: {course.duration}</Text>
        <Text style={styles.text}>Level: {course.level}</Text>
        <Text style={styles.text}>Price: ${course.price}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>What You'll Learn</Text>
        {course.highlights?.map((highlight, index) => (
          <Text key={index} style={styles.text}>• {highlight}</Text>
        )) || (
          <Text style={styles.text}>• Comprehensive curriculum covering all aspects of {course.title}</Text>
        )}
      </View>
    </Page>
  </Document>
);

export default CourseSyllabus;