import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { Facebook, Instagram, Youtube, MessageSquare, MessageCircle, Mail, Phone, MapPin, Send, Book, Cpu, Briefcase } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_wbvurja',
        'template_wkv2bls',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'ohWXewVwqE1hTwVOB'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Navbar />
      <Hero />
      <About />

      {/* Education Section */}
      <section id="education" className="py-20 bg-black/20 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-2">Studying Bachelor's of Computer Engineering</h3>
              <p className="text-purple-200">Khwopa College of Engineering(TU) </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center"></h2>
          <div className="space-y-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-2">+2   Science</h3>
              <p className="text-purple-200">Capital College & Research Center(CCRC) </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['Programming', 'Web Development', '  AI/ML(Basics)', 'UI/UX Design', 'Database Management', 'Python(Basics)'].map((skill) => (
              <div key={skill} className="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-2">Stock Market Prediction using LSTM</h3>
              <p className="text-purple-200">Stock Market Prediction utilizes machine learning algorithms to forecast future stock prices, helping investors make informed decisions. This project analyzes historical data to identify trends and patterns for more accurate predictions.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-2">SmartFlow:Intelligent Traffic Managemant System for Speed Monitoring and Adaptive Signal Control</h3>
              <p className="text-purple-200">SmartFlow is an advanced traffic management system designed for real-time speed monitoring and adaptive signal control, enhancing road safety and reducing congestion. It leverages intelligent algorithms to optimize traffic flow and improve urban mobility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="text-purple-300" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-purple-200">sushilrijal57@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-purple-300" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-purple-200">+977 9863444903</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-purple-300" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-purple-200">Birendranagar,Surkhet,Nepal</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-purple-300/30 focus:border-purple-300 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-purple-300/30 focus:border-purple-300 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={4}
                  className="w-full p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-purple-300/30 focus:border-purple-300 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                <Send size={18} />
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-white/60 bg-black/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <MessageSquare size={24} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} SushilRijal. All rights reserved.</p>
          <p className="text-sm mt-2"></p>
        </div>
      </footer>
    </div>
  );
}

export default App;