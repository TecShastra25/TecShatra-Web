'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have Button in this path
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { pdf } from '@react-pdf/renderer';
import { BookOpen, Download } from 'lucide-react'; // Changed to lucide-react icons
import CourseSyllabus from './PDFTemplates/CourseSyllabus'; // Import the PDF templates
import CourseMaterials from './PDFTemplates/CourseMaterials';

// Dynamically import PDFDownloadLink with proper path
const PDFDownloadLink = dynamic(
    () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
    {
        ssr: false,
        loading: () => (
            <Button
                className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity w-full h-12 text-base flex items-center justify-center"
                disabled
            >
                <span className="mr-2"><Download className="w-5 h-5" /></span> {/* Using Download as a generic icon */}
                Loading PDF...
            </Button>
        )
    }
);

const PDFButton = ({ document, fileName, label, icon, course }) => { // Added course prop
    return (
        <div className="w-full">
            <PDFDownloadLink document={document} fileName={fileName}>
                {({ blob, url, loading, error }) => (
                    <Button
                        className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity w-full h-12 text-base flex items-center justify-center"
                        disabled={loading || error}
                    >
                        <span className="mr-2">{icon}</span>
                        {loading ? 'Loading...' : error ? 'Error' : label}
                    </Button>
                )}
            </PDFDownloadLink>
        </div>
    );
};

export default function PDFResource({ course }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Adjusted grid for 2 columns on medium screens and up */}
                <PDFButton
                    document={<CourseSyllabus course={course} />}
                    fileName={`${course.title.toLowerCase().replace(/\s+/g, '-')}-syllabus.pdf`}
                    label="Download Syllabus"
                    icon={<BookOpen className="w-5 h-5" />}
                    course={course}
                />


                <PDFButton
                    document={<CourseMaterials course={course} />}
                    fileName={`${course.title.toLowerCase().replace(/\s+/g, '-')}-materials.pdf`}
                    label="Download Materials"
                    icon={<Download className="w-5 h-5" />}
                    course={course}
                />
            </div>
        </div>
    );
}
