import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.2, 1)}
				className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
			>
				I&rsquo;m a&nbsp;Dynamic and results-oriented computer engineer with extensive experience in full-stack programming, machine learning, and data analysis. I have a proven track record of driving innovation across diverse technologies and leading high-impact initiatives. Proficient in Flask, Django, React, .NET, Node.js, Spring, and Flutter frameworks, as well as languages such as Python, C/C++, C#, JavaScript, Java, and Dart. I excel in problem-solving, leveraging critical thinking and advanced technical skills to deliver strategic solutions. Passionate about talent development, teaching, and mentoring, I am committed to lifelong learning and utilizing cutting-edge technologies to achieve organizational goals and foster growth. My technical competencies include: 
				<br />
				
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
