import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
        Aspiring Junior Software Engineer with 1 year of hands-on experience in full-stack development at Shiwansh Solutions. Proficient in designing, developing, and deploying scalable web applications using .NET Core and React, with a focus on core modules like Admin, Employee, and Employer. Passionate about leveraging modern frameworks and clean coding practices to deliver efficient, maintainable, and user-friendly software solutions.
      </p>
    </motion.section>
  );
}

export default Summary;
