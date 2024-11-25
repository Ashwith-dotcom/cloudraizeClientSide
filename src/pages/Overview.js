import React from 'react';
import './overview.css';

const Overview = () => {
  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: `url('./Pasted image.png')` }}
      >
        <div className="container">
          <h2 className="section-title">Company Overview</h2>
          <div className="content-box">
            <p>
              At CloudRaize-Elevating Expertise, we are pioneers in delivering
              technology-driven solutions that empower businesses to innovate,
              scale, and succeed in today’s fast-paced digital landscape. With
              expertise spanning <strong>DevOps</strong>,{' '}
              <strong>Cloud Computing</strong> (AWS, GCP, Azure),{' '}
              <strong>Data Science</strong>, <strong>Data Engineering</strong>, and{' '}
              <strong>Generative AI</strong>, we offer tailored services designed
              to meet the unique challenges of modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission">
        <div className="container1">
          <div className="content-box1 animate1">
            <img src="./mission.png" alt="Our Mission" className="section-img1" />
            <div>
              <h2>Our Mission</h2>
              <p>
                At Cloud Raize, our mission is to empower businesses with{' '}
                <strong>innovative cloud solutions</strong> and technology-driven
                services that foster growth, accelerate{' '}
                <strong>digital transformation</strong>, and leave a lasting
                impact on industries. By leveraging cutting-edge technologies
                such as <strong>DevOps services</strong>,{' '}
                <strong>cloud computing</strong> (AWS, GCP, Azure),{' '}
                <strong>data science</strong>, and <strong>generative AI</strong>, we
                provide tailored strategies that help businesses innovate, scale,
                and thrive in a competitive market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision">
        <div className="container2">
          <div className="content-box2 animate2">
            <img
              src="./data-pipeline-opt.jpg"
              alt="Our Vision"
              className="section-img2"
            />
            <div>
              <h2>Our Vision</h2>
              <p>
                At Cloud Raize, we envision a future where businesses seamlessly
                integrate <strong>cloud computing solutions</strong>,{' '}
                <strong>AI-driven strategies</strong>, and <strong>data engineering</strong>{' '}
                to achieve unparalleled growth. Our vision is to establish
                ourselves as a global leader in <strong>technology consulting</strong>,
                helping organizations across industries embrace{' '}
                <strong>digital innovation</strong> and maintain a competitive
                edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values">
        <div className="container3">
          <h2 className="section-title2">Core Values</h2>
          <div className="core-values-container">
            {['Innovation', 'Collaboration', 'Excellence', 'Integrity'].map((value, index) => (
              <div className="core-value-box animate" key={index}>
                <h3>{value}</h3>
                <p>
                  {/* Descriptions for each core value */}
                  {value === 'Innovation' &&
                    'At Cloud Raize, we prioritize staying ahead of the curve by exploring emerging trends in cloud infrastructure, DevOps automation, and AI technologies.'}
                  {value === 'Collaboration' &&
                    'Success is a shared journey. We partner with our clients to craft tailored cloud solutions.'}
                  {value === 'Excellence' &&
                    'Every project we undertake is backed by a commitment to high-quality service delivery.'}
                  {value === 'Integrity' &&
                    'We believe that transparency, accountability, and ethical practices form the foundation of lasting business relationships.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us">
        <div className="container4">
          <h2 className="section-title4">Why Choose Cloud Raize?</h2>
          <div className="content-box animate4">
            <img
              src="./Adtech-cloud-migration-opt.jpg"
              alt="Why Choose Us"
              className="section-img"
            />
            <ul>
              <li>
                <strong>Expertise Across Domains:</strong> Deep knowledge in DevOps
                services, cloud computing platforms like AWS, GCP, and Azure, as
                well as generative AI and data engineering.
              </li>
              <li>
                <strong>Tailored Strategies:</strong> Customized solutions to address
                the specific challenges and opportunities in your industry.
              </li>
              <li>
                <strong>Proven Track Record:</strong> We have a history of enabling
                businesses to achieve transformative outcomes through our expertise.
              </li>
              <li>
                <strong>Comprehensive Support:</strong> From strategy to execution, we
                provide end-to-end support for your digital transformation journey.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container5">
          <h2 className="section-title5">Contact Us</h2>
          <p>Ready to transform your business? Get in touch with us today!</p>
          <form action="#" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Overview;
