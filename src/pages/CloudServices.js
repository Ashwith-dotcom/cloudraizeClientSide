import React from 'react'
import './cloudservices.css';
const CloudServices = () => {
  return (
    <div>
        <section class="hero">
    <div class="hero-content">
        <h1>Empowering Businesses with Next-Gen Cloud Solutions</h1>
        <p>At CloudRaize, we offer comprehensive cloud services designed to empower your business with scalability, flexibility, and efficiency in today's digital-first world.</p>
    </div>
</section>
<section id="services" class="services">
    <div class="container">
        <h2>Our Comprehensive Cloud Service Offerings</h2>
        
        <div class="service-category">
            <h3>Cloud Infrastructure Services</h3>
            <div class="services-grid">
                <div class="service-box">
                    <img src="./cloud_images1/Screenshot from 2024-11-19 13-04-13.png" alt="Cloud Strategy" class="service-image"/>
                    <h4>Cloud Strategy and Consulting</h4>
                    <ul>
                        <li>Assess your current infrastructure and define a robust cloud adoption strategy.</li>
                        <li>Design tailored solutions to meet your business goals and industry requirements.</li>
                        <li>Ensure risk-free cloud migration with thorough planning and implementation.</li>
                    </ul>
                </div>
                <div class="service-box">
                    <img src="./cloud_images1/Screenshot from 2024-11-19 13-12-32.png" alt="Cloud Migration" class="service-image"/>
                    <h4>Cloud Migration Services</h4>
                    <ul>
                        <li>Execute seamless migrations from on-premises to cloud environments.</li>
                        <li>Support lift-and-shift, replatforming, and rearchitecting approaches.</li>
                        <li>Minimize downtime with robust data migration strategies.</li>
                    </ul>
                </div>
                <div class="service-box">
                    <img src="./cloud_images1/Screenshot from 2024-11-19 13-14-40.png" alt="Multi-Cloud Solutions" class="service-image"/>
                    <h4>Multi-Cloud and Hybrid Cloud Solutions</h4>
                    <ul>
                        <li>Optimize workloads across AWS, Azure, and Google Cloud platforms.</li>
                        <li>Implement secure and scalable hybrid-cloud solutions for flexibility.</li>
                        <li>Enable seamless integrations and workload portability.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="service-category">
            <h3>Cloud Development Services</h3>
            <div class="services-grid">
                <div class="service-box">
                    <img src="./cloud_images1/Screenshot from 2024-11-22 10-02-32.png" alt="PaaS Solutions" class="service-image"/>
                    <h4>Platform as a Service (PaaS)</h4>
                    <ul>
                        <li>Accelerate development with managed platforms for applications.</li>
                        <li>Integrate development tools, databases, and runtime environments.</li>
                        <li>Focus on innovation while we manage the underlying infrastructure.</li>
                    </ul>
                </div>
                <div class="service-box">
                    <img src="./cloud_images1/Screenshot from 2024-11-22 10-02-58.png" alt="Serverless Computing" class="service-image"/>
                    <h4>Serverless Computing</h4>
                    <ul>
                        <li>Enable event-driven applications with serverless architectures.</li>
                        <li>Reduce operational complexity and improve agility.</li>
                        <li>Utilize services like AWS Lambda, Azure Functions, and Google Cloud Functions.</li>
                    </ul>
                </div>
                <div class="service-box">
                    <img src="./cloud_images1/Screenshot from 2024-11-22 10-03-18.png" alt="Cloud-Native Development" class="service-image"/>
                    <h4>Cloud-Native Development</h4>
                    <ul>
                        <li>Build applications designed specifically for cloud environments.</li>
                        <li>Utilize microservices architecture and containerization.</li>
                        <li>Leverage Kubernetes, Docker, and service meshes like Istio.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default CloudServices