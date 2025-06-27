import Image from "next/image";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, HTMLMotionProps } from 'framer-motion';
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Skills");

  // Animation variants for staggered appearance (general use)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for section headers
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // NEW: Letter by letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };


  return (
    <>
      <Head>
        <title>Chandni Gupta | Developer</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <nav>
        <div className="nav-container">
          <div className="content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 style={{ fontSize: '1.8rem' }}><span className="name-highlight">Chandni Gupta</span></h1>
            </motion.div>
          </div>
          <div className="links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <div style={{ paddingLeft: "130px", paddingRight: "80px", marginTop: "40px" }}>
        <section id="home">
          <div className="main-container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/profile.jpg"
                alt="Chandni Gupta"
                width={200}
                height={300}
                className="rounded-lg image"
              />
            </motion.div>
            <div className="content">
              <motion.h1
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
              >
                {"Hey I'm " .split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
                <span className="name-highlight">
                  {"Chandni".split("").map((char, index) => (
                    <motion.span key={char + "-" + index} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              <motion.h2
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
              >
                {"I'm "}
                <span className="name-highlight">
                  {"Developer".split("").map((char, index) => (
                    <motion.span key={char + "-" + index} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                Skilled in ReactJS, NodeJS, and Spring Boot, with a strong foundation in Data
                Structures and Algorithms. Passionate about building efficient and scalable applications.
              </motion.p>

              <motion.div {...{ className: "social-links" } as HTMLMotionProps<'div'>}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <a href="https://github.com/nainagupta4571" target="_blank" aria-label="GitHub">
                  <i><FaGithub /></i>
                </a>
                <a href="https://linkedin.com/in/chandni-gupta-171243251" target="_blank" aria-label="LinkedIn">
                  <i><FaLinkedin /></i>
                </a>
                <a href="mailto:nainagupta4571@gmail.com" aria-label="Email">
                  <i><FaEnvelope /></i>
                </a>
                <a href="https://leetcode.com/u/Nainagupta/" target="_blank" aria-label="LeetCode">
                  <i><FaCode /></i>
                </a>
              </motion.div>

              <motion.a {...{ href: "/Chandni_Gupta_SDE.pdf", download: true } as HTMLMotionProps<'a'>}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.1 }}
              >
                <button>Download CV</button>
              </motion.a>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="about">
          <div className="main-container" style={{ flexDirection: 'column', padding: '50px 20px' }}>

            <div className="content" style={{ width: '100%' }}>
              <motion.h1
                style={{ textAlign: 'center', marginTop: '-80px', marginBottom: '50px' }}
                variants={sectionHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                About <span>Me</span>
              </motion.h1>
              <motion.p
                style={{ textAlign: 'center', marginBottom: '20px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                Enthusiastic full-stack developer focused on scalable solutions using React and Spring Boot.<br />
                Passionionate about frontend performance, clean backend architecture, and solving real-world problems.<br />
                Experienced in agile teams, with hands-on dashboard and API integration work at ACKO.
              </motion.p>
            </div>

            <motion.div
              style={{
                display: 'flex',
                gap: '60px',
                justifyContent: 'flex-start',
                borderBottom: '1px solid #eee',
                paddingBottom: '10px'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {['Skills', 'Education', 'Experience'].map(tab => (
                <a
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '10px 0',
                    position: 'relative',
                    color: activeTab === tab ? 'rgb(109,67,0)' : '#333',
                    fontWeight: activeTab === tab ? '600' : '400',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: '0.3s',
                    borderBottom: activeTab === tab ? '2px solid rgb(109,67,0)' : 'none',
                    marginBottom: activeTab === tab ? '-12px' : '-10px'
                  }}
                >
                  {tab}
                </a>
              ))}
            </motion.div>


            {/* Skills Section */}
            {activeTab === 'Skills' && (
              <motion.div {...{ className: "skills-container" } as HTMLMotionProps<'div'>}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div {...{ className: "skills-left" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                  <h1 className="section-header"><span>Technical Skills</span></h1>
                  {[
                    { name: 'HTML', level: '90%' },
                    { name: 'CSS', level: '85%' },
                    { name: 'JavaScript', level: '80%' },
                    { name: 'ReactJS', level: '75%' },
                    { name: 'Next.js', level: '70%' },
                  ].map(skill => (
                    <motion.div key={skill.name} {...{ className: "line-bar-skill" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                      <label>{skill.name}</label>
                      <div className="bar-bg">
                        <motion.div
                          {...{ className: "bar-fill" } as HTMLMotionProps<'div'>}
                          style={{ width: 0 }}
                          animate={{ width: skill.level }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                      <span className="bar-label">{skill.level}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div {...{ className: "skills-right" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                  <h1 className="section-header"><span>Professional Skills</span></h1>
                  <div className="radial-bars">
                    {[
                      { name: 'Creativity', percent: 90 },
                      { name: 'Communication', percent: 65 },
                      { name: 'Teamwork', percent: 75 },
                      { name: 'Leadership', percent: 85 }
                    ].map(skill => (
                      <motion.div key={skill.name} {...{ className: "radial-bar" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                        <svg viewBox="0 0 36 36" className="circular-chart">
                          <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          {/* Corrected: Removed as="path" from motion.path */}
                          <motion.path
                            className="circle"
                            strokeDasharray="0, 100"
                            animate={{ strokeDasharray: `${skill.percent}, 100` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <text x="18" y="20.35" className="percentage">{skill.percent}%</text>
                        </svg>
                        <p>{skill.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Education Section */}
            {activeTab === 'Education' && (
              <motion.div
                style={{ marginTop: '60px', width: '100%' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch text-left">
                  <motion.div {...{ className: "bg-white rounded-lg shadow-sm p-6 flex-1 max-w-sm border border-gray-100" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">B.Tech in Computer Science</h3>
                    <p className="text-gray-700 font-medium mb-1">Galgotias College of Engineering and Technology, Greater Noida</p>
                    <p className="text-gray-600 text-sm mb-1">2021 - 2025</p>
                    <p className="text-gray-600 text-sm">
                      CGPA: <span className="font-semibold text-gray-800">8.7 / 10</span>
                    </p>
                  </motion.div>
                  <motion.div {...{ className: "bg-white rounded-lg shadow-sm p-6 flex-1 max-w-sm border border-gray-100" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Senior Secondary (12th CBSE)</h3>
                    <p className="text-gray-700 font-medium mb-1">Woodland Academy, Gorakhpur U.P. </p>
                    <p className="text-gray-600 text-sm mb-1">2019-2020</p>
                    <p className="text-gray-600 text-sm">
                      Percentage: <span className="font-semibold text-gray-800">82.8%</span>
                    </p>
                  </motion.div>
                  <motion.div {...{ className: "bg-white rounded-lg shadow-sm p-6 flex-1 max-w-sm border border-gray-100" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Secondary (10th CBSE)</h3>
                    <p className="text-gray-700 font-medium mb-1">RPM Academy, Gorakhpur U.P. </p>
                    <p className="text-gray-600 text-sm mb-1">2017-2018</p>
                    <p className="text-gray-600 text-sm">
                      Percentage: <span className="font-semibold text-gray-800">94.6%</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Experience Section */}
            {activeTab === 'Experience' && (
              <motion.div
                style={{ marginTop: '60px', width: '100%' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="rounded-lg p-6 max-w-3xl mx-auto text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">SDE Intern</h3>
                  <p className="text-gray-700 font-medium mb-1">ACKO</p>
                  <p className="text-gray-600 text-sm mb-2">Jan 2024 - Jan 2025</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <motion.li variants={itemVariants} as="li">Developed real-time dashboards for operations visibility.</motion.li>
                    <motion.li variants={itemVariants} as="li">Created reusable components using React, TypeScript, and Tailwind CSS.</motion.li>
                    <motion.li variants={itemVariants} as="li">Integrated secure APIs using Spring Boot with efficient backend logic.</motion.li>
                    <motion.li variants={itemVariants} as="li">Enhanced UX with lazy loading and performance optimization.</motion.li>
                    <motion.li variants={itemVariants} as="li">Collaborated actively in agile sprints and peer code reviews.</motion.li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        <div className="section-divider"></div>


        <section
          id="projects"
          style={{ scrollMarginTop: '-40px' }}
        >
          <div className="main-container" style={{ flexDirection: 'column', padding: '50px 20px' }}>
            <div className="content" style={{ width: '100%' }}>
              <motion.h1
                style={{ textAlign: 'center', marginTop: '100px', marginBottom: '50px' }}
                variants={sectionHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                My <span>Projects</span>
              </motion.h1>


              <motion.div
                style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Project 1 */}
                <motion.div {...{
                    style: {
                      width: '300px',
                      background: 'white',
                      borderRadius: '10px',
                      padding: '20px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      display: 'flex',
                      flexDirection: 'column'
                    }
                  } as HTMLMotionProps<'div'>}
                  variants={itemVariants}
                >
                  <Image
                    src="/ecommerce.png"
                    alt="E-Commerce Website"
                    width={300}
                    height={200}
                    style={{ borderRadius: '5px', marginBottom: '15px' }}
                  />
                  <h3 style={{ marginBottom: '10px' }}>E-Commerce Website</h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px' }}>
                    Full-stack shopping platform with product listing, cart, authentication and payments.
                  </p>
                  <a
                    href="https://github.com/nainagupta4571/Ecommerce-App"
                    target="_blank"
                    style={{
                      color: 'rgb(109,67,0)',
                      textDecoration: 'none',
                      marginTop: 'auto',
                      alignSelf: 'flex-start'
                    }}
                  >
                    View on GitHub
                  </a>
                </motion.div>

                {/* Project 2 */}
                <motion.div {...{
                    style: {
                      width: '300px',
                      background: 'white',
                      borderRadius: '10px',
                      padding: '20px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      display: 'flex',
                      flexDirection: 'column'
                    }
                  } as HTMLMotionProps<'div'>}
                  variants={itemVariants}
                >
                  <Image
                    src="/chatapp.png"
                    alt="Chat Application"
                    width={300}
                    height={200}
                    style={{ borderRadius: '5px', marginBottom: '15px' }}
                  />
                  <h3 style={{ marginBottom: '10px' }}>Real-Time Chat App</h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px' }}>
                    Real-time messaging using React, Node.js, Socket.io and MongoDB with JWT auth.
                  </p>
                  <a
                    href="https://github.com/nainagupta4571/Chat-Application"
                    target="_blank"
                    style={{
                      color: 'rgb(109,67,0)',
                      textDecoration: 'none',
                      marginTop: 'auto',
                      alignSelf: 'flex-start'
                    }}
                  >
                    View on GitHub
                  </a>
                </motion.div>

                {/* Project 3 */}
                <motion.div {...{
                    style: {
                      width: '300px',
                      background: 'white',
                      borderRadius: '10px',
                      padding: '20px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }
                  } as HTMLMotionProps<'div'>}
                  variants={itemVariants}
                >
                  <Image
                    src="/ai-tutor.png"
                    alt="Ai.tutor"
                    width={300}
                    height={200}
                    style={{ borderRadius: '5px', marginBottom: '15px' }}
                  />
                  <h3 style={{ marginBottom: '10px' }}>Ai Tutor</h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px' }}>
                    AI Learning Assistant – Responsive web app with real-time AI, tutor/quiz modes, dark mode, and PDF/DOCX export. Built using HTML, CSS, and JavaScript.
                  </p>
                  <a
                    href="https://github.com/nainagupta4571/Ai-tutor"
                    target="_blank"
                    style={{ color: 'rgb(109,67,0)', textDecoration: 'none' }}
                  >
                    View on GitHub
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>
        <section id="contact" >

          <div className="content" style={{ width: '100%' }}>
            <motion.h1
              style={{ textAlign: 'center', marginTop: '300px', marginBottom: '80px', scrollMarginTop: '80px' }}
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              Contact <span>Me</span>
            </motion.h1>

            {/* Contact Info Section */}
            <motion.div {...{ className: "flex flex-col md:flex-row justify-around items-center mb-16 text-center" } as HTMLMotionProps<'div'>}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Email */}
              <motion.div {...{ className: "flex flex-col items-center" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                <FaEnvelope style={{ fontSize: '2rem', color: 'rgb(109, 67, 0)' }} className="mb-2" />
                <h3>Email</h3>
                <p>nainagupta4571@gmail.com</p>
              </motion.div>

              {/* Phone */}
              <motion.div {...{ className: "flex flex-col items-center" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                <FaPhoneAlt style={{ fontSize: '2rem', color: 'rgb(109, 67, 0)' }} className="mb-2" />
                <h3>Phone</h3>
                <p>+91 854 307 8447</p>
              </motion.div>

              {/* Location */}
              <motion.div {...{ className: "flex flex-col items-center" } as HTMLMotionProps<'div'>} variants={itemVariants}>
                <FaMapMarkerAlt style={{ fontSize: '2rem', color: 'rgb(109, 67, 0)' }} className="mb-2" />
                <h3>Address</h3>
                <p>Greater Noida, UP</p>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div {...{ className: "text-center mt-8" } as HTMLMotionProps<'div'>}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Find me on</h3>
              <div className="flex justify-center gap-10">
                <a
                  href="https://x.com/NainaGu82772933?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '2rem', color: 'rgb(109, 67, 0)' }}
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com/in/chandni-gupta-171243251"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '2rem', color: 'rgb(109, 67, 0)' }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/chandni_gupta27?utm_source=qr&igsh=dW42cTFuY2ExaGZi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '2rem', color: 'rgb(109, 67, 0)' }}
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
