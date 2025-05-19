import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { getCourseMaterials } from '../../lib/courseUtils';

// Register fonts
Font.register({
  family: 'Roca',
  fonts: [
    { src: '/fonts/Roca Regular.ttf' },
    { src: '/fonts/Roca Bold.ttf', fontWeight: 700 },
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    borderBottom: '1 solid #E2E8F0',
    paddingBottom: 10,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 24,
    color: '#1A365D',
    marginBottom: 4,
    fontFamily: 'Roca',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 20,
    fontFamily: 'Roca',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#2D3748',
    marginBottom: 10,
    backgroundColor: '#F7FAFC',
    padding: 8,
    borderRadius: 4,
  },
  content: {
    fontSize: 12,
    color: '#4A5568',
    lineHeight: 1.6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  gridItem: {
    width: '50%',
    padding: 8,
  },
  list: {
    marginLeft: 15,
  },
  listItem: {
    fontSize: 12,
    marginBottom: 5,
  },
  highlight: {
    backgroundColor: '#EBF8FF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#718096',
    fontSize: 10,
    borderTop: '1 solid #E2E8F0',
    paddingTop: 10,
  },
  courseInfo: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F7FAFC',
    borderRadius: 4,
  },
  tag: {
    backgroundColor: '#E9D8FD',
    color: '#553C9A',
    padding: '4 8',
    borderRadius: 4,
    fontSize: 10,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
});

const CourseMaterials = ({ course }) => {
  const { baseMaterials, specificMaterials } = getCourseMaterials(course.title);
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.subtitle}>Course Materials & Resources</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.tag}>{course.level}</Text>
            <Text style={styles.content}>{course.duration}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Overview</Text>
          <Text style={styles.content}>{course.description}</Text>
          <View style={styles.courseInfo}>
            <Text style={styles.content}>Duration: {course.duration}</Text>
            <Text style={styles.content}>Level: {course.level}</Text>
            <Text style={styles.content}>Price: ${course.price}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Materials</Text>
          <View style={styles.list}>
            {baseMaterials.map((material, index) => (
              <Text key={index} style={styles.listItem}>• {material}</Text>
            ))}
          </View>
        </View>

        {specificMaterials.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Specialized Resources</Text>
            <View style={styles.list}>
              {specificMaterials.map((material, index) => (
                <Text key={index} style={styles.listItem}>• {material}</Text>
              ))}
            </View>
          </View>
        )}

        {course.highlights && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Course Highlights</Text>
            <View style={styles.list}>
              {course.highlights.map((highlight, index) => (
                <Text key={index} style={styles.listItem}>• {highlight}</Text>
              ))}
            </View>
          </View>
        )}

        <View style={styles.highlight}>
          <Text style={[styles.content, { color: '#2B6CB0' }]}>
            Upon enrollment, you'll get immediate access to all course materials and resources through our learning platform.
          </Text>
        </View>

        <Text style={styles.footer}>
          © {new Date().getFullYear()} TecShastra Academy • All Rights Reserved
        </Text>
      </Page>
    </Document>
  );
};

export default CourseMaterials;