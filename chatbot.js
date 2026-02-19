// Chatbot functionality for SynthCV
class SynthCVChatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.initialX = 0;
    this.initialY = 0;
    this.hasDragged = false;
    this.welcomeShown = false;
    this.responses = {
      greeting: [
        "Hello! I'm SynthCV Assistant. How can I help you with your resume today?",
        "Hi there! Ready to build an amazing resume? What can I assist you with?",
        "Welcome to SynthCV! I'm here to help you create the perfect resume. What would you like to know?"
      ],
      templates: [
        "We offer 4 beautiful resume templates: Modern (clean & professional), Classic (traditional style), Creative (unique design), and Minimal (simple & elegant). You can choose any template in the Resume Builder!",
        "Our templates include Modern, Classic, Creative, and Minimal designs. Each one is fully customizable with different fonts and colors."
      ],
      skills: [
        "To add skills to your resume, go to the Skills section in the Resume Builder. You can add technical skills, soft skills, and rate your proficiency level from Beginner to Expert.",
        "Skills are important! In the Resume Builder, click on the Skills section to add your expertise. Don't forget to include both technical and soft skills."
      ],
      education: [
        "For education details, use the Education section in the Resume Builder. Include your degree, school name, location, and graduation dates. You can add multiple educational experiences.",
        "Education is key! Fill out the Education form with your degree information, school details, and dates. Mark if you're currently attending."
      ],
      experience: [
        "Work experience is crucial for your resume. In the Resume Builder, add your job titles, company names, dates, and detailed descriptions of your responsibilities and achievements.",
        "To add work experience, use the Work Experience section. Include your job title, company, dates worked, and a description of your accomplishments."
      ],
      summary: [
        "A professional summary is a 2-3 sentence overview of your career highlights. Write it in the Personal Details section of the Resume Builder.",
        "Your summary should highlight your key strengths and career goals. Keep it concise - aim for 2-3 sentences that grab attention."
      ],
      customize: [
        "You can customize your resume by choosing different templates, fonts (Arial, Times New Roman, Calibri, Georgia), and color schemes. Use the Customization section in the Resume Builder.",
        "Personalize your resume! Select from our templates, change fonts, and pick colors that match your style."
      ],
      download: [
        "Once your resume is complete, click the Download PDF button in the Resume Builder to save it as a PDF file.",
        "Ready to download? Use the Download PDF button in the preview section. Your resume will be saved as a professional PDF."
      ],
      profile: [
        "Your Bold Profile is your online presence. Add sections like summary, education, work history, and skills to create a comprehensive profile that employers can view.",
        "The Bold Profile lets you showcase your professional story online. Add relevant sections and customize the design to make it stand out."
      ],
      page: [
        "SynthCV is a free resume builder website offering multiple professional templates for creating impressive resumes. It also features a Bold Profile creation tool where you can build an online professional presence that employers can visit and hire you based on their specific needs. In the future, we plan to integrate the website with LinkedIn, enabling automatic resume matching based on job descriptions to streamline your job search process.",
        "SynthCV is a comprehensive, free resume building platform that provides users with multiple professionally designed templates to create standout resumes. The platform includes a powerful Bold Profile feature, allowing you to establish an online professional presence where potential employers can discover and hire you according to their requirements. Looking ahead, SynthCV will integrate with LinkedIn to automatically match your resume with relevant job descriptions, making the job search process more efficient and targeted."
      ],
      tips: [
        "Resume writing tips: Keep it to 1 page for most positions, use action verbs, quantify achievements, tailor to each job, proofread carefully, and use a clean, professional format. For ATS optimization, include relevant keywords from the job description.",
        "Career advice: Network regularly, customize your resume for each application, follow up on applications, continue learning new skills, and maintain a positive online presence. Focus on achievements rather than just duties in your experience section."
      ],
      interview: [
        "Interview preparation: Research the company thoroughly, prepare STAR method answers for behavioral questions, practice common questions like 'Tell me about yourself' and 'Why do you want this job', prepare questions for the interviewer, and follow up with a thank-you email.",
        "For interviews, dress professionally, arrive early, bring extra copies of your resume, research the company culture, and prepare specific examples of your achievements. Practice active listening and maintain good eye contact."
      ],
      linkedin: [
        "LinkedIn optimization: Use a professional profile photo, write a compelling headline and summary, list all relevant experience with detailed descriptions, get recommendations, join industry groups, and engage with content regularly. Connect with recruiters and alumni.",
        "To optimize your LinkedIn profile: Use keywords in your headline and summary, highlight achievements with metrics, get endorsements for skills, publish industry-related content, and customize your profile URL. Network strategically with 2nd and 3rd degree connections."
      ],
      coverletter: [
        "Cover letter tips: Address it to a specific person, keep it to 3-4 paragraphs, highlight relevant experience, explain why you're interested in the company, and end with a call to action. Customize for each application and proofread carefully.",
        "Structure your cover letter: Introduction (who you are and position), body (relevant experience and achievements), conclusion (enthusiasm and next steps). Keep it concise, error-free, and focused on how you can benefit the company."
      ],
      jobsearch: [
        "Job search strategies: Set up job alerts on multiple platforms, network on LinkedIn, attend industry events, tailor applications, track your progress, and follow up. Consider informational interviews and temporary/contract work.",
        "Effective job searching: Use keywords from job descriptions, apply to 10-15 positions per week, network with 5 new people weekly, customize each application, and follow up after 1-2 weeks. Track applications and results."
      ],
      ats: [
        "Our ATS Resume Score Checker analyzes your resume for ATS compatibility! It checks keyword matching, formatting, readability, and overall ATS-friendliness. Upload your resume to get a detailed score and improvement suggestions.",
        "The ATS checker evaluates your resume against Applicant Tracking Systems. It provides scores for keyword match, formatting, skills alignment, and overall compatibility. Perfect for ensuring your resume passes automated screening!"
      ],
      jobcriteria: [
        "Here are the key job criteria employers look for today:<br><br>• <strong>Skills > Degrees</strong> – Practical ability and results matter more than formal education.<br><br>• <strong>Digital & AI Literacy</strong> – Understanding how to use AI tools and digital platforms.<br><br>• <strong>Adaptability & Learning Mindset</strong> – Willingness to learn new skills and adjust to change.<br><br>• <strong>Strong Communication Skills</strong> – Clear speaking, writing, and collaboration (especially for remote work).<br><br>• <strong>Problem-Solving Ability</strong> – Creative and analytical thinking to handle new challenges.<br><br>• <strong>Teamwork & Emotional Intelligence</strong> – Working well with others, managing emotions, and staying professional.<br><br>• <strong>Project & Result Orientation</strong> – Showing what you've achieved, not just where you've worked.<br><br>• <strong>Cultural Fit & Work Ethics</strong> – Aligning with company values, showing responsibility and integrity.<br><br>• <strong>Flexibility</strong> – Comfort with remote, hybrid, or cross-functional roles.<br><br>• <strong>Tech Awareness</strong> (even for non-tech roles) – Understanding automation, data, and digital workflows."
      ],
      jobratio: [
        "Here are the latest employment statistics for India:<br><br>• <strong>National Unemployment Rate</strong>: 5.1% in April 2025 for persons aged 15+ (current weekly status basis)<br>• <em>Source: The Times of India</em><br><br>• <strong>Worker Population Ratio (WPR)</strong>: 58.2% in 2023-24 (proportion of employed persons aged 15+ in total population)<br>• <em>Source: Ministry of Labour and Employment</em><br><br>• <strong>Labour Force Participation Rate (LFPR)</strong>: 55.6% in April 2025 for 15+ age group<br>• <em>Source: The Times of India</em><br><br>• <strong>Youth Unemployment (age 15-29)</strong>: 13.8% in April 2025<br>• <em>Source: Various reports</em>"
      ],
      jobpercentage: [
        "Here are the latest IT sector hiring trends and projections for 2025:<br><br>• <strong>Entry-level Hiring Intent</strong>: Rose to 74% across industries in 2025<br>• <em>Source: Fortune India</em><br><br>• <strong>IT Sector Fresher Hiring</strong>: Increased to 59% (from ~45% in HY2 2024)<br>• <em>Source: Fortune India</em><br><br>• <strong>ITeS Sector Growth</strong>: Projected to grow by ~20% in 2025<br>• <em>Source: Business Standard</em><br><br>• <strong>IT Industry Job Opportunities</strong>: Expected to rise by 15-20% in 2025<br>• <em>Source: The Times of India, Business Standard</em><br><br>• <strong>IT Sector Hiring (May 2025)</strong>: 5% decline YoY overall, but AI/ML roles grew ~25%<br>• <em>Source: Business Standard</em><br><br>• <strong>IT Sector Hiring Activity (April 2025)</strong>: Increased by ~16% YoY<br>• <em>Source: The Hans India</em><br><br>• <strong>IT Sector Hiring Optimism (Q1 2025)</strong>: 50% net employment outlook<br>• <em>Source: ManpowerGroup</em>"
      ],
      jobscenario: [
        "Here's the current job market scenario in India:<br><br>• <strong>Overall Employment Improving</strong>: Unemployment rate down to 5.1% (Aug 2025)<br><br>• <strong>IT & ITeS Growth</strong>: Projected 15–20% increase in jobs; strong demand for AI, ML, cloud, and cybersecurity professionals<br><br>• <strong>Infrastructure-driven Opportunities</strong>: New tech hubs and Cyber Cities in regions like Himachal Pradesh and Thiruvananthapuram creating more jobs<br><br>• <strong>Corporate Upskilling</strong>: Companies like TCS doubling AI-skilled workforce; focus on future-ready skills"
      ],
      navigation: [
        "I'll take you there right away!",
        "Navigating to that section now.",
        "Let's go to that page."
      ],
      help: [
        "I can help you with: resume templates, adding skills/education/experience, writing summaries, customization options, downloading PDFs, using your Bold Profile, describing the current page, resume tips, career advice, interview preparation, LinkedIn optimization, cover letter writing, and job search strategies. What specific question do you have?",
        "I'm here to assist with resume building and career development! Ask me about templates, sections, customization, career tips, interview prep, LinkedIn, cover letters, job search, or the current page."
      ],
      default: [
        "I'm not sure about that specific question, but I can help with resume building, templates, sections, customization, and describing the current page. Try asking about skills, education, or experience!",
        "That's an interesting question! For resume-specific help, I can assist with templates, sections like skills and education, customization, and page details. What else can I help with?"
      ]
    };

    this.init();
  }

  init() {
    this.createChatbotHTML();
    this.setInitialPosition();
    this.bindEvents();
  }

  createChatbotHTML() {
    const chatbotHTML = `
      <div class="chatbot-container" id="chatbotContainer">
        <button class="chatbot-toggle" id="chatbotToggle"><img src="../image/clogo.jpg" alt="SynthCV Chatbot" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;"></button>
        <div class="chatbot-window" id="chatbotWindow">
          <div class="chatbot-header">
            <span>SynthCV Assistant</span>
            <button class="chatbot-close" id="chatbotClose">×</button>
          </div>
          <div class="chatbot-messages" id="chatbotMessages"></div>
          <div class="typing-indicator" id="typingIndicator">
            <span>Assistant is typing</span>
            <span class="typing-dots"></span>
          </div>
          <div class="chatbot-input-area">
            <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Ask me about resume building...">
            <button class="chatbot-send" id="chatbotSend">➤</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  setInitialPosition() {
    const container = document.getElementById('chatbotContainer');
    if (container) {
      const containerWidth = 80; // 60px button + 20px padding
      const margin = 20;
      const left = window.innerWidth - containerWidth - margin;
      const top = window.innerHeight - containerWidth - margin;
      container.style.position = 'absolute';
      container.style.left = left + 'px';
      container.style.top = top + 'px';
      container.style.bottom = 'auto';
      container.style.right = 'auto';
    }
  }

  bindEvents() {
    const toggle = document.getElementById('chatbotToggle');
    const close = document.getElementById('chatbotClose');
    const send = document.getElementById('chatbotSend');
    const input = document.getElementById('chatbotInput');
    const container = document.getElementById('chatbotContainer');

    toggle.addEventListener('click', (e) => {
      this.toggleChat();
    });
    close.addEventListener('click', () => this.closeChat());
    close.addEventListener('mousedown', (e) => e.stopPropagation());
    send.addEventListener('click', () => this.sendMessage());
    send.addEventListener('mousedown', (e) => e.stopPropagation());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });
    input.addEventListener('mousedown', (e) => e.stopPropagation());

    // Drag functionality
    container.addEventListener('mousedown', (e) => this.startDrag(e));
    document.addEventListener('mousemove', (e) => this.drag(e));
    document.addEventListener('mouseup', () => this.stopDrag());
  }

  toggleChat() {
    if (this.hasDragged) {
      this.hasDragged = false;
      return;
    }
    const window = document.getElementById('chatbotWindow');
    const typingIndicator = document.getElementById('typingIndicator');
    this.isOpen = !this.isOpen;
    window.style.display = this.isOpen ? 'flex' : 'none';
    if (this.isOpen && !this.welcomeShown) {
      this.welcomeShown = true;
      setTimeout(() => {
        this.addMessage(this.getRandomResponse('greeting'), 'bot');
      }, 500);
    }
    // Ensure typing indicator is hidden when opening
    typingIndicator.style.display = 'none';
  }

  closeChat() {
    const window = document.getElementById('chatbotWindow');
    this.isOpen = false;
    window.style.display = 'none';
  }

  sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();

    if (message) {
      this.addMessage(message, 'user');
      input.value = '';
      this.processMessage(message);
    }
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `
      <div class="message-bubble">${text}</div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  processMessage(message) {
    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.style.display = 'block';

    // Simulate typing delay
    setTimeout(() => {
      typingIndicator.style.display = 'none';
      const response = this.generateResponse(message.toLowerCase());
      if (response) {
        this.addMessage(response, 'bot');
      }
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  }

  generateResponse(message) {
    // Check for navigation requests
    if (message.includes('take me to') || message.includes('go to') || message.includes('navigate to') || message.includes('show me')) {
      const destination = this.extractDestination(message);
      if (destination) {
        this.navigateTo(destination); // Navigate immediately
        return null; // Don't show a message
      }
    }

    // Check for keywords and return appropriate response
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return this.getRandomResponse('greeting');
    } else if (message.includes('template') || message.includes('design')) {
      return this.getRandomResponse('templates');
    } else if (message.includes('skill')) {
      return this.getRandomResponse('skills');
    } else if (message.includes('education') || message.includes('school') || message.includes('degree')) {
      return this.getRandomResponse('education');
    } else if (message.includes('job criteria') || message.includes('job criteria') || message.includes('criteria')) {
      return this.getRandomResponse('jobcriteria');
    } else if (message.includes('job scenario') || message.includes('employment scenario') || message.includes('job market') || message.includes('market scenario')) {
      return this.getRandomResponse('jobscenario');
    } else if (message.includes('job percentage') || message.includes('hiring intent') || message.includes('job growth') || message.includes('hiring trend') || message.includes('it hiring')) {
      return this.getRandomResponse('jobpercentage');
    } else if (message.includes('job ratio') || message.includes('unemployment') || message.includes('labor force') || message.includes('worker population') || message.includes('employment rate')) {
      return this.getRandomResponse('jobratio');
    } else if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return this.getRandomResponse('experience');
    } else if (message.includes('summary') || message.includes('objective')) {
      return this.getRandomResponse('summary');
    } else if (message.includes('customize') || message.includes('custom') || message.includes('color') || message.includes('font')) {
      return this.getRandomResponse('customize');
    } else if (message.includes('download') || message.includes('pdf') || message.includes('save')) {
      return this.getRandomResponse('download');
    } else if (message.includes('profile') || message.includes('bold')) {
      return this.getRandomResponse('profile');
    } else if (message.includes('page') || message.includes('current') || message.includes('website') || message.includes('dashboard') || message.includes('site')) {
      return this.getRandomResponse('page');
    } else if (message.includes('tip') || message.includes('advice') || message.includes('career')) {
      return this.getRandomResponse('tips');
    } else if (message.includes('interview') || message.includes('prep')) {
      return this.getRandomResponse('interview');
    } else if (message.includes('linkedin') || message.includes('linked')) {
      return this.getRandomResponse('linkedin');
    } else if (message.includes('cover') || message.includes('letter')) {
      return this.getRandomResponse('coverletter');
    } else if (message.includes('search') || message.includes('find') || message.includes('apply')) {
      return this.getRandomResponse('jobsearch');
    } else if (message.includes('ats') || message.includes('resume score') || message.includes('checker')) {
      return this.getRandomResponse('ats');
    } else if (message.includes('help') || message.includes('what can you do')) {
      return this.getRandomResponse('help');
    } else {
      return this.getRandomResponse('default');
    }
  }

  getRandomResponse(category) {
    const responses = this.responses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  extractDestination(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('home') || lowerMessage.includes('dashboard')) {
      return 'index.html';
    } else if (lowerMessage.includes('document')) {
      return 'documents.html';
    } else if (lowerMessage.includes('profile') || lowerMessage.includes('bold')) {
      return 'profile.html';
    } else if (lowerMessage.includes('contact')) {
      return 'contact_us.html';
    } else if (lowerMessage.includes('skill')) {
      return '../Add_Section/skills.html';
    } else if (lowerMessage.includes('education')) {
      return '../Add_Section/education.html';
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      return '../Add_Section/work-history.html';
    } else if (lowerMessage.includes('software')) {
      return '../Add_Section/software.html';
    } else if (lowerMessage.includes('language')) {
      return '../Add_Section/languages.html';
    } else if (lowerMessage.includes('portfolio')) {
      return '../Add_Section/portfolio.html';
    } else if (lowerMessage.includes('certification')) {
      return '../Add_Section/certification.html';
    } else if (lowerMessage.includes('affiliation')) {
      return '../Add_Section/affiliations.html';
    } else if (lowerMessage.includes('interest')) {
      return '../Add_Section/interest.html';
    } else if (lowerMessage.includes('website')) {
      return '../Add_Section/websites.html';
    } else if (lowerMessage.includes('additional')) {
      return '../Add_Section/additional_information.html';
    } else if (lowerMessage.includes('upload') || lowerMessage.includes('photo')) {
      return '../Add_Section/upload_photo.html';
    } else if (lowerMessage.includes('summary')) {
      return '../Add_Section/summary.html';
    } else if (lowerMessage.includes('ats') || lowerMessage.includes('checker') || lowerMessage.includes('score')) {
      return '../Add_Section/ATS.html';
    } else if (lowerMessage.includes('resume') || lowerMessage.includes('builder')) {
      return 'resume-builder.html';
    }
    return null;
  }

  navigateTo(destination) {
    window.location.href = destination;
  }


  startDrag(e) {
    this.isDragging = true;
    this.hasDragged = false;
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    const container = document.getElementById('chatbotContainer');
    const rect = container.getBoundingClientRect();
    this.initialX = rect.left;
    this.initialY = rect.top;
    container.style.cursor = 'grabbing';
    e.preventDefault(); // Prevent text selection
  }

  drag(e) {
    if (!this.isDragging) return;
    e.preventDefault();
    const container = document.getElementById('chatbotContainer');
    const dx = e.clientX - this.dragStartX;
    const dy = e.clientY - this.dragStartY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      this.hasDragged = true;
    }
    const newX = this.initialX + dx;
    const newY = this.initialY + dy;

    container.style.left = newX + 'px';
    container.style.top = newY + 'px';
    container.style.right = 'auto';
    container.style.bottom = 'auto';
  }

  stopDrag() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const container = document.getElementById('chatbotContainer');
    container.style.cursor = 'grab';
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SynthCVChatbot();
});