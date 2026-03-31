/* =============================================
   Greenfield Academy — Application Logic
   Nigerian Secondary School Management System
   =============================================
   HOW DATA WORKS:
   - All default data lives here in DB.data (your VS Code file).
   - On first load, data is saved to localStorage so the browser can
     remember changes (attendance, new signups, edits, etc.).
   - Whenever you ADD or EDIT users/students/teachers here in VS Code,
     call DB.hardReset() once in the Console → it wipes old localStorage
     and reloads fresh from this file. After that, your changes are live.
   - Shortcut: open browser Console (F12) and run:  DB.hardReset()
   ============================================= */


/* =============================================
   DATA STORE — Edit this section in VS Code
   to add students, teachers, and users.
   ============================================= */
const DB = {

  /* ---------- DEFAULT / SEED DATA ---------- */
  defaultData: {

    /* USERS — controls who can log in.
       Every person that needs to sign in MUST be listed here.
       roles: 'admin' | 'teacher' | 'student'  */
    users: [
      { id:1, name:'Mr. Olumide Adeyemi',   email:'admin@greenfield.edu.ng',   password:'admin123',   role:'admin' },
      { id:2, name:'Mrs. Ngozi Okonkwo',    email:'ngozi@greenfield.edu.ng',   password:'teacher123', role:'teacher', subject:'Mathematics' },
      { id:3, name:'Mr. Emeka Nwosu',       email:'emeka@greenfield.edu.ng',   password:'teacher456', role:'teacher', subject:'English Language' },
      { id:4, name:'Mrs. Amaka Eze',        email:'amaka@greenfield.edu.ng',   password:'teacher789', role:'teacher', subject:'Chemistry' },
      { id:5, name:'Mr. Babatunde Lawal',   email:'babatunde@greenfield.edu.ng',password:'teach001',  role:'teacher', subject:'Physics' },
      /* Add more users here — remember to also add them to students[] or teachers[] below */
    ],

    /* STUDENTS — full academic profile for each student */
    students: [
      { id:1,  name:'Chukwuemeka Obi',    email:'emeka.obi@student.ng',    grade:'SS1', classId:1, dob:'2008-03-14', phone:'080-1234-5678', gender:'Male',   parent:'Mr. Obi Senior',    enrollDate:'2023-09-05', status:'active', gpa:3.8 },
      { id:2,  name:'Fatimah Abdullahi',  email:'fatimah.a@student.ng',    grade:'SS1', classId:1, dob:'2008-07-22', phone:'080-2345-6789', gender:'Female', parent:'Alhaji Abdullahi', enrollDate:'2023-09-05', status:'active', gpa:3.9 },
      { id:3,  name:'Adaeze Nwachukwu',   email:'adaeze.n@student.ng',     grade:'SS1', classId:1, dob:'2008-01-10', phone:'080-3456-7890', gender:'Female', parent:'Mrs. Nwachukwu',  enrollDate:'2023-09-05', status:'active', gpa:3.5 },
      { id:4,  name:'Seun Adeleke',       email:'seun.a@student.ng',       grade:'SS2', classId:2, dob:'2007-11-05', phone:'080-4567-8901', gender:'Male',   parent:'Mr. Adeleke',     enrollDate:'2022-09-05', status:'active', gpa:3.7 },
      { id:5,  name:'Blessing Okeke',     email:'blessing.o@student.ng',   grade:'SS2', classId:2, dob:'2007-06-18', phone:'080-5678-9012', gender:'Female', parent:'Mrs. Okeke',      enrollDate:'2022-09-05', status:'active', gpa:3.2 },
      { id:6,  name:'Ibrahim Musa',       email:'ibrahim.m@student.ng',    grade:'SS2', classId:2, dob:'2007-02-28', phone:'080-6789-0123', gender:'Male',   parent:'Mallam Musa',     enrollDate:'2022-09-05', status:'active', gpa:3.6 },
      { id:7,  name:'Chidinma Ugwu',      email:'chidinma.u@student.ng',   grade:'SS3', classId:3, dob:'2006-09-12', phone:'080-7890-1234', gender:'Female', parent:'Mr. Ugwu',        enrollDate:'2021-09-05', status:'active', gpa:3.4 },
      { id:8,  name:'Tunde Fashola',      email:'tunde.f@student.ng',      grade:'SS3', classId:3, dob:'2006-04-25', phone:'080-8901-2345', gender:'Male',   parent:'Chief Fashola',   enrollDate:'2021-09-05', status:'active', gpa:3.9 },
      { id:9,  name:'Amara Obiora',       email:'amara.o@student.ng',      grade:'JSS1',classId:4, dob:'2009-12-08', phone:'080-9012-3456', gender:'Female', parent:'Mrs. Obiora',     enrollDate:'2024-09-05', status:'active', gpa:3.1 },
      { id:10, name:'Damilola Ogunyemi',  email:'dami.o@student.ng',       grade:'JSS1',classId:4, dob:'2009-05-20', phone:'080-0123-4567', gender:'Male',   parent:'Mr. Ogunyemi',   enrollDate:'2024-09-05', status:'active', gpa:3.5 },
      { id:11, name:'Kelechi Nnaji',      email:'kelechi.n@student.ng',    grade:'SS1', classId:1, dob:'2008-10-14', phone:'080-1122-3344', gender:'Male',   parent:'Mrs. Nnaji',      enrollDate:'2023-09-05', status:'inactive',gpa:2.8 },
      { id:12, name:'Zainab Yusuf',       email:'zainab.y@student.ng',     grade:'SS3', classId:3, dob:'2006-02-28', phone:'080-2233-4455', gender:'Female', parent:'Hajiya Yusuf',    enrollDate:'2021-09-05', status:'active', gpa:3.7 },
    ],

    /* TEACHERS — full staff profile */
    teachers: [
      { id:1, name:'Mrs. Ngozi Okonkwo',  email:'ngozi@greenfield.edu.ng',      subject:'Mathematics',     phone:'080-1001-2001', qualification:'B.Sc Mathematics (UNILAG)',    joinDate:'2020-08-01', status:'active',   classes:[1,2] },
      { id:2, name:'Mr. Emeka Nwosu',     email:'emeka@greenfield.edu.ng',      subject:'English Language', phone:'080-1002-2002', qualification:'B.A English (UNN)',            joinDate:'2019-08-01', status:'active',   classes:[1,3] },
      { id:3, name:'Mrs. Amaka Eze',      email:'amaka@greenfield.edu.ng',      subject:'Chemistry',        phone:'080-1003-2003', qualification:'B.Sc Chemistry (UI)',          joinDate:'2018-08-01', status:'active',   classes:[2,4] },
      { id:4, name:'Mr. Babatunde Lawal', email:'babatunde@greenfield.edu.ng',  subject:'Physics',          phone:'080-1004-2004', qualification:'B.Sc Physics (OAU)',           joinDate:'2021-08-01', status:'active',   classes:[3,4] },
      { id:5, name:'Miss. Chioma Ike',    email:'chioma@greenfield.edu.ng',     subject:'Biology',          phone:'080-1005-2005', qualification:'B.Sc Biology (UNIBEN)',        joinDate:'2022-08-01', status:'active',   classes:[1,2,3] },
      { id:6, name:'Mr. Yusuf Garba',     email:'yusuf@greenfield.edu.ng',      subject:'Further Maths',    phone:'080-1006-2006', qualification:'B.Sc Applied Maths (ABU)',    joinDate:'2020-01-15', status:'on-leave', classes:[4] },
      { id:7, name:'Mrs. Folake Balogun', email:'folake@greenfield.edu.ng',     subject:'Literature in Eng',phone:'080-1007-2007', qualification:'B.A Literature (UNILAG)',     joinDate:'2019-05-10', status:'active',   classes:[2,3] },
      { id:8, name:'Mr. Chukwudi Onwu',   email:'chukwudi@greenfield.edu.ng',   subject:'Economics',        phone:'080-1008-2008', qualification:'B.Sc Economics (UNIZIK)',     joinDate:'2023-01-09', status:'active',   classes:[1] },
    ],

    /* CLASSES — class sections */
    classes: [
      { id:1, name:'SS1 Science',  grade:'SS1',  teacherId:1, room:'Block A, Room 101', capacity:35 },
      { id:2, name:'SS2 Science',  grade:'SS2',  teacherId:3, room:'Block A, Room 202', capacity:32 },
      { id:3, name:'SS3 Science',  grade:'SS3',  teacherId:2, room:'Block B, Room 303', capacity:30 },
      { id:4, name:'JSS1 Alpha',   grade:'JSS1', teacherId:4, room:'Block C, Room 104', capacity:40 },
    ],

    /* ATTENDANCE — populated at runtime, starts empty */
    attendance: [],

    /* GRADES — initial academic records */
    grades: [
      { id:1,  studentId:1,  subject:'Mathematics',    score:88, grade:'B+', term:'1st Term' },
      { id:2,  studentId:1,  subject:'English Language',score:82, grade:'B',  term:'1st Term' },
      { id:3,  studentId:1,  subject:'Chemistry',       score:91, grade:'A',  term:'1st Term' },
      { id:4,  studentId:2,  subject:'Mathematics',     score:95, grade:'A',  term:'1st Term' },
      { id:5,  studentId:2,  subject:'English Language',score:89, grade:'B+', term:'1st Term' },
      { id:6,  studentId:3,  subject:'Mathematics',     score:76, grade:'C+', term:'1st Term' },
      { id:7,  studentId:4,  subject:'Physics',         score:84, grade:'B',  term:'1st Term' },
      { id:8,  studentId:5,  subject:'Biology',         score:70, grade:'C',  term:'1st Term' },
      { id:9,  studentId:6,  subject:'English Language',score:93, grade:'A',  term:'1st Term' },
      { id:10, studentId:7,  subject:'Economics',       score:80, grade:'B',  term:'1st Term' },
    ],

    /* TIMETABLE — weekly schedule */
    schedule: [
      { time:'07:30', mon:{sub:'Mathematics',   tch:'Mrs. Okonkwo',rm:'A101'}, tue:{sub:'English Lang', tch:'Mr. Nwosu',   rm:'A201'}, wed:{sub:'Chemistry',    tch:'Mrs. Eze',    rm:'Lab 1'}, thu:{sub:'Mathematics',   tch:'Mrs. Okonkwo',rm:'A101'}, fri:{sub:'Biology',      tch:'Miss. Ike',   rm:'Lab 2'} },
      { time:'08:30', mon:{sub:'English Lang',  tch:'Mr. Nwosu',   rm:'A201'}, tue:{sub:'Physics',      tch:'Mr. Lawal',   rm:'Lab 2'}, wed:{sub:'Further Maths', tch:'Mr. Garba',   rm:'A102'}, thu:{sub:'Literature',    tch:'Mrs. Balogun',rm:'B301'}, fri:{sub:'Mathematics',  tch:'Mrs. Okonkwo',rm:'A101'} },
      { time:'09:30', mon:{sub:'Chemistry',     tch:'Mrs. Eze',    rm:'Lab 1'}, tue:{sub:'Biology',      tch:'Miss. Ike',   rm:'Lab 2'}, wed:{sub:'English Lang',  tch:'Mr. Nwosu',   rm:'A201'}, thu:{sub:'Physics',       tch:'Mr. Lawal',   rm:'Lab 2'}, fri:{sub:'Economics',    tch:'Mr. Onwu',    rm:'B201'} },
      { time:'10:30', mon:{sub:'Break'},         tue:{sub:'Break'},              wed:{sub:'Break'},              thu:{sub:'Break'},              fri:{sub:'Break'} },
      { time:'11:00', mon:{sub:'Economics',     tch:'Mr. Onwu',    rm:'B201'}, tue:{sub:'Further Maths',tch:'Mr. Garba',   rm:'A102'}, wed:{sub:'Mathematics',   tch:'Mrs. Okonkwo',rm:'A101'}, thu:{sub:'Biology',       tch:'Miss. Ike',   rm:'Lab 2'}, fri:{sub:'English Lang', tch:'Mr. Nwosu',   rm:'A201'} },
      { time:'12:00', mon:{sub:'Lunch'},         tue:{sub:'Lunch'},              wed:{sub:'Lunch'},              thu:{sub:'Lunch'},              fri:{sub:'Lunch'} },
      { time:'13:00', mon:{sub:'Literature',    tch:'Mrs. Balogun',rm:'B301'}, tue:{sub:'Economics',    tch:'Mr. Onwu',    rm:'B201'}, wed:{sub:'Physics',       tch:'Mr. Lawal',   rm:'Lab 2'}, thu:{sub:'Chemistry',     tch:'Mrs. Eze',    rm:'Lab 1'}, fri:{sub:'Further Maths',tch:'Mr. Garba',   rm:'A102'} },
    ],
  },

  /* ---------- STORAGE METHODS ---------- */

  /* Load data: prefer localStorage, else use defaultData */
  init() {
    const saved = localStorage.getItem('greenfield_v1');
    this.data   = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(this.defaultData));
    if (!saved) this.save();
  },

  /* Persist current data to localStorage */
  save() {
    localStorage.setItem('greenfield_v1', JSON.stringify(this.data));
  },

  /* ★ DEVELOPER TOOL: call DB.hardReset() in Console after editing
     defaultData in VS Code. Wipes localStorage so fresh data loads. */
  hardReset() {
    localStorage.removeItem('greenfield_v1');
    sessionStorage.removeItem('greenfieldUser');
    location.reload();
  },

  /* Legacy alias so Settings reset button still works */
  reset() { this.hardReset(); },

  /* Auto-increment ID helper */
  nextId(arr) {
    return arr.length > 0 ? Math.max(...arr.map(i => i.id)) + 1 : 1;
  },
};

/* Boot the database */
DB.init();


/* =============================================
   APPLICATION STATE
   ============================================= */
let user     = JSON.parse(sessionStorage.getItem('greenfieldUser') || 'null');
let page     = user ? 'd-dashboard' : 'home';  /* current public page */
let dashPage = 'dashboard';                     /* current dashboard section */

/* Table filter / pagination state */
let sFilter = '', sGrade = '', sPage = 1;
let tFilter = '', gFilter = '';
let attClass = DB.data.classes[0]?.id || 1;
let attDate  = new Date().toISOString().split('T')[0];
let settingsTab  = 'profile';
let selectedRole = 'student';

const PER_PAGE = 8; /* rows per table page */


/* =============================================
   UTILITY HELPERS
   ============================================= */
const $ = id => document.getElementById(id);                              /* getElementById shorthand */
const ini = n  => n.split(' ').map(x => x[0]).join('').toUpperCase().slice(0,2); /* "Ngozi Okonkwo" → "NO" */

/* Consistent colour from a name string */
function avatarColor(n) {
  const palette = ['#1a6b3c','#0e7490','#c89b2a','#7c3aed','#dc2626','#0891b2','#be185d','#15803d'];
  let h = 0;
  for (let i = 0; i < n.length; i++) h = n.charCodeAt(i) + ((h << 5) - h);
  return palette[Math.abs(h) % palette.length];
}

/* Colour-code a numeric score */
function scoreColor(s) {
  return s >= 70 ? 'var(--success)' : s >= 60 ? 'var(--primary)' : s >= 50 ? 'var(--warning)' : 'var(--danger)';
}

/* Nigerian WAEC-style letter grade from percentage */
function letterGrade(s) {
  if (s >= 75) return 'A1';
  if (s >= 70) return 'B2';
  if (s >= 65) return 'B3';
  if (s >= 60) return 'C4';
  if (s >= 55) return 'C5';
  if (s >= 50) return 'C6';
  if (s >= 45) return 'D7';
  if (s >= 40) return 'E8';
  return 'F9';
}


/* =============================================
   BOOT — render once DOM is ready
   ============================================= */
document.addEventListener('DOMContentLoaded', () => { render(); });


/* =============================================
   NAVBAR SCROLL EFFECT
   ============================================= */
window.addEventListener('scroll', () => {
  const nav = $('publicNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});
function toggleMobileMenu() { $('mobileMenu').classList.toggle('open') }
function closeMobile()      { $('mobileMenu').classList.remove('open') }


/* =============================================
   TOAST NOTIFICATIONS
   ============================================= */
function toast(type, msg) {
  const icons = { success:'✅', error:'❌', warning:'⚠️', info:'ℹ️' };
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `
    <span>${icons[type]}</span>
    <span class="toast-msg">${msg}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>`;
  $('toastContainer').appendChild(el);
  /* auto-dismiss after 3.5 s */
  setTimeout(() => { el.classList.add('removing'); setTimeout(() => el.remove(), 300); }, 3500);
}


/* =============================================
   MODAL & CONFIRM DIALOG
   ============================================= */
function openModal(title, body, cls = '') {
  $('modalTitle').textContent   = title;
  $('modalBody').innerHTML      = body;
  $('modalBox').className       = `modal ${cls}`;
  $('modalOverlay').classList.remove('hidden');
}
function closeModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) return;
  $('modalOverlay').classList.add('hidden');
}
function showConfirm(title, msg, fn) {
  $('confirmTitle').textContent = title;
  $('confirmMsg').textContent   = msg;
  $('confirmBtn').onclick       = () => { fn(); $('confirmOverlay').classList.add('hidden'); };
  $('confirmOverlay').classList.remove('hidden');
}
function closeConfirm() { $('confirmOverlay').classList.add('hidden') }


/* =============================================
   ROUTING / NAVIGATION
   ============================================= */
function navigate(p) {
  page = p;
  if (p === 'login' || p === 'signup') { render(); window.scrollTo(0,0); return; }
  if (p === 'logout') {
    user = null;
    sessionStorage.removeItem('greenfieldUser');
    page     = 'home';
    dashPage = 'dashboard';
    render();
    toast('info', 'You have been logged out.');
    return;
  }
  render();
  window.scrollTo({ top:0, behavior:'smooth' });
}

function render() {
  const isAuth = ['login','signup'].includes(page);
  const isDash = page.startsWith('d-');

  /* Show/hide the public navbar */
  $('publicNav').style.display = (isAuth || isDash) ? 'none' : '';

  /* Inject page HTML */
  $('pageView').innerHTML = isDash  ? renderDashboard()
                          : isAuth  ? renderAuth()
                          :           renderPublic();

  if (!isAuth && !isDash) {
    setTimeout(() => {
      const nav = $('publicNav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    }, 50);
  }

  if (isDash) setTimeout(initBarChart, 100);
  setTimeout(initCounters, 200);
}


/* =============================================
   PUBLIC PAGES — HTML generators
   ============================================= */
function renderPublic() {
  /* Sync active nav-link highlight */
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.nav === page));
  const pages = { home:pgHome, about:pgAbout, programs:pgPrograms, news:pgNews, contact:pgContact };
  return (pages[page] || pgHome)();
}

/* ---------- HOME PAGE ---------- */
function pgHome() {
  return `
<header class="hero" id="home">
  <div class="hero-content">

    <!-- Left: headline & CTAs -->
    <div class="hero-text">
      <div class="hero-badge">🏫 Federal Capital Territory, Abuja • Est. 1998</div>
      <h1>Nurturing <span class="gradient-text">Excellence</span> in Every Nigerian Child</h1>
      <p>Greenfield Academy combines academic rigour with character development — preparing students for WAEC, NECO, JAMB, and beyond through our world-class secondary education programme.</p>
      <div class="hero-buttons">
        <button class="btn btn-primary btn-lg" onclick="navigate('signup')">Apply for Admission →</button>
        <button class="btn btn-outline-white btn-lg" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">Learn More</button>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><div class="num">1,800+</div><div class="label">Students</div></div>
        <div class="hero-stat"><div class="num">120+</div><div class="label">Staff</div></div>
        <div class="hero-stat"><div class="num">97%</div><div class="label">WAEC Pass Rate</div></div>
      </div>
    </div>

    <!-- Right: floating dashboard preview -->
    <div class="hero-visual">
      <div class="hero-card">
        <h3>📊 School At a Glance</h3>
        <div class="hero-card-row"><span class="label">Active Students</span><span class="value">1,842</span></div>
        <div class="hero-card-row"><span class="label">Today's Attendance</span><span class="value" style="color:#2d9e5f">97.1%</span></div>
        <div class="hero-card-row"><span class="label">Average CGPA</span><span class="value">3.68</span></div>
        <div class="hero-card-row"><span class="label">Classes Running</span><span class="value">36</span></div>
        <div class="hero-card-row"><span class="label">Exams This Week</span><span class="value" style="color:#c89b2a">4</span></div>
      </div>
    </div>

  </div>
</header>

<!-- FEATURES -->
<section class="features-section section" id="features">
  <div class="container">
    <div class="section-header">
      <div class="overline">Why Greenfield Academy</div>
      <h2>Everything a World-Class School Needs</h2>
      <p>From academic tracking to staff management — our platform keeps parents, teachers, and administrators fully connected.</p>
    </div>
    <div class="features-grid">
      <div class="feature-card"><div class="feature-icon fi-green">📊</div><h3>Smart Dashboard</h3><p>Real-time analytics on student performance, attendance rates, and school-wide metrics at a single glance.</p></div>
      <div class="feature-card"><div class="feature-icon fi-blue">📋</div><h3>Attendance Tracking</h3><p>Daily register management with instant parent SMS alerts for absences and lateness.</p></div>
      <div class="feature-card"><div class="feature-icon fi-yellow">📝</div><h3>Grade Management</h3><p>WAEC-aligned grading (A1–F9), automatic GPA computation, and term report card generation.</p></div>
      <div class="feature-card"><div class="feature-icon fi-purple">📅</div><h3>Timetable Planner</h3><p>Conflict-free timetabling with classroom allocation and teacher assignment management.</p></div>
      <div class="feature-card"><div class="feature-icon fi-red">👨‍👩‍👧</div><h3>Parent Portal</h3><p>Parents get real-time access to wards' grades, attendance, school fees status, and announcements.</p></div>
      <div class="feature-card"><div class="feature-icon fi-cyan">🔒</div><h3>Secure & Reliable</h3><p>Role-based access control ensures each user sees only what they are permitted to see.</p></div>
    </div>
  </div>
</section>

<!-- PROGRAMMES PREVIEW -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <div class="overline">Academic Programmes</div>
      <h2>Our Curriculum Offerings</h2>
      <p>Aligned with the Nigerian Educational Research and Development Council (NERDC) and WAEC/NECO syllabuses.</p>
    </div>
    <div class="programs-grid">
      ${[
        {icon:'📐', bg:'pi-math',    t:'Mathematics & Further Maths', d:'Pure, applied and further mathematics preparing students for engineering and science careers.', tags:['Algebra','Calculus','Statistics']},
        {icon:'🔬', bg:'pi-science', t:'Sciences',                    d:'Biology, Chemistry, Physics with state-of-the-art laboratory sessions.', tags:['Biology','Chemistry','Physics']},
        {icon:'📖', bg:'pi-english', t:'Languages & Literature',      d:'English Language, Literature-in-English, Yoruba, Igbo, Hausa — oral and written.',  tags:['English','Literature','Languages']},
        {icon:'💻', bg:'pi-tech',    t:'Computer Studies',            d:'Practical ICT skills: Microsoft Office, coding basics, internet safety.',  tags:['ICT','Coding','Office Apps']},
        {icon:'🎨', bg:'pi-arts',    t:'Arts & Social Sciences',      d:'Government, Economics, CRK/IRK, Fine Arts, Music — broadening critical thought.', tags:['Economics','Govt','Fine Arts']},
        {icon:'⚽', bg:'pi-sports',  t:'Sports & Co-Curriculars',     d:'Football, volleyball, athletics, debate club, Red Cross, Boys/Girls Scout.', tags:['Football','Debate','Athletics']},
      ].map(p => `
        <div class="program-card" onclick="navigate('programs')">
          <div class="program-img ${p.bg}"><div class="p-overlay">${p.icon}</div></div>
          <div class="program-body">
            <h3>${p.t}</h3><p>${p.d}</p>
            <div class="program-tags">${p.tags.map(t => `<span class="program-tag">${t}</span>`).join('')}</div>
          </div>
        </div>`).join('')}
    </div>
  </div>
</section>

<!-- STATISTICS -->
<section class="stats-section section" style="padding:60px 24px">
  <div class="container">
    <div class="stats-grid" id="statsSection">
      <div class="stat-item"><div class="stat-num" data-count="1800">0</div><div class="stat-label">Total Students</div></div>
      <div class="stat-item"><div class="stat-num" data-count="120">0</div><div class="stat-label">Teaching Staff</div></div>
      <div class="stat-item"><div class="stat-num" data-count="36">0</div><div class="stat-label">Active Classes</div></div>
      <div class="stat-item"><div class="stat-num" data-count="97">0</div><div class="stat-label">% WAEC Pass Rate</div></div>
    </div>
  </div>
</section>

<!-- NEWS SECTION -->
<section class="news-section section" id="news">
  <div class="container">
    <div class="section-header">
      <div class="overline">Latest News</div>
      <h2>What's Happening at Greenfield</h2>
      <p>School events, achievements, and important announcements.</p>
    </div>
    <div class="news-grid">
      <div class="news-main">
        <div class="news-img pi-math" style="height:260px;border-radius:var(--radius-lg) var(--radius-lg) 0 0">🏆</div>
        <div class="news-body">
          <div class="news-date">March 2026 — Achievement</div>
          <h3>Greenfield Students Sweep WAEC 2025 with 14 A1s</h3>
          <p>Our SS3 class of 2025 recorded an unprecedented performance with 14 students obtaining straight A1s across all nine subjects — the best result in the school's history.</p>
          <button class="btn btn-ghost btn-sm" onclick="navigate('news')">Read Full Story →</button>
        </div>
      </div>
      <div class="news-sidebar">
        <div class="news-item-sm" onclick="navigate('news')"><div class="news-thumb nti-green">🎤</div><div class="info"><h4>Inter-School Debate Championship Won</h4><p>March 20, 2026</p></div></div>
        <div class="news-item-sm" onclick="navigate('news')"><div class="news-thumb nti-yellow">📚</div><div class="info"><h4>New Digital Library Unveiled</h4><p>March 14, 2026</p></div></div>
        <div class="news-item-sm" onclick="navigate('news')"><div class="news-thumb nti-purple">🤝</div><div class="info"><h4>MOU Signed with University of Lagos</h4><p>March 7, 2026</p></div></div>
        <div class="news-item-sm" onclick="navigate('news')"><div class="news-thumb nti-blue">💻</div><div class="info"><h4>New Computer Lab Commissioned</h4><p>March 1, 2026</p></div></div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonials-section section">
  <div class="container">
    <div class="section-header">
      <div class="overline">Testimonials</div>
      <h2>Voices from Our Community</h2>
      <p>What students, parents, and staff say about Greenfield Academy.</p>
    </div>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <blockquote>"Greenfield Academy gave my daughter the foundation she needed. She got admission to study Medicine at UNILAG after her WAEC result — all A1s and B2s!"</blockquote>
        <div class="testimonial-author">
          <div class="testimonial-avatar" style="background:#1a6b3c">AO</div>
          <div><div class="name">Mrs. Adunola Olawale</div><div class="role">Parent — Lagos State</div></div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <blockquote>"Teaching here is truly fulfilling. The management invests in staff development and the students are brilliant and motivated every day."</blockquote>
        <div class="testimonial-avatar" style="background:#c89b2a;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:0.85rem;margin-bottom:8px">NO</div>
        <div class="testimonial-author">
          <div class="testimonial-avatar" style="background:#c89b2a">NO</div>
          <div><div class="name">Mrs. Ngozi Okonkwo</div><div class="role">Mathematics Teacher</div></div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <blockquote>"I scored 342 in JAMB thanks to the solid UTME coaching at Greenfield. The teachers never gave up on me even when I was struggling."</blockquote>
        <div class="testimonial-author">
          <div class="testimonial-avatar" style="background:#0e7490">TF</div>
          <div><div class="name">Tunde Fashola</div><div class="role">SS3 Graduate — 2025</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section section">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to Join the Greenfield Family?</h2>
      <p>Admission is open for JSS1, SS1, and SS3 (WAEC candidates). Secure your child's future today.</p>
      <button class="btn btn-white btn-lg" onclick="navigate('signup')">Apply for Admission →</button>
    </div>
  </div>
</section>

${renderFooter()}`;
}

/* ---------- ABOUT PAGE ---------- */
function pgAbout() {
  return `
<section style="padding-top:100px">
  <div class="section" style="padding-top:40px;padding-bottom:40px">
    <div class="container">
      <div class="section-header">
        <div class="overline">About Us</div>
        <h2>Our Story & Mission</h2>
        <p>Founded in 1998, Greenfield Academy has served Abuja families for over 26 years with distinction.</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;margin-bottom:60px">
        <div>
          <h3 style="font-family:var(--font-head);font-size:1.4rem;font-weight:900;margin-bottom:16px;color:var(--gray-900)">Rooted in Nigeria, Reaching for the World</h3>
          <p style="color:var(--gray-500);line-height:1.85;margin-bottom:16px">Greenfield Academy was established in 1998 by a group of visionary Nigerians who believed that quality secondary education should be accessible, affordable, and anchored in African values. Over two decades later, we have produced senators, doctors, engineers, lawyers, and entrepreneurs.</p>
          <p style="color:var(--gray-500);line-height:1.85">Our campus in Gwarinpa, Abuja spans 8 hectares and includes modern science laboratories, a 2,000-volume library, a 400-seat auditorium, sports fields, and a fully equipped ICT centre.</p>
        </div>
        <div style="background:linear-gradient(145deg,#1a6b3c,#0d3d20);border-radius:var(--radius-lg);padding:48px;text-align:center">
          <div style="font-size:4rem;margin-bottom:16px">🏫</div>
          <h3 style="color:#fff;font-family:var(--font-head);font-size:1.4rem;margin-bottom:8px">26 Years</h3>
          <p style="color:rgba(255,255,255,0.7)">of Academic Excellence in Nigeria</p>
        </div>
      </div>
      <div class="dash-grid-eq">
        <div class="d-card"><div class="d-card-body" style="padding:32px">
          <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:16px">🎯 Our Mission</h3>
          <p style="color:var(--gray-500);line-height:1.85">To provide inclusive, values-driven secondary education that equips every student with the academic excellence, digital skills, and moral character needed to succeed in Nigeria and beyond.</p>
        </div></div>
        <div class="d-card"><div class="d-card-body" style="padding:32px">
          <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:16px">🌟 Our Core Values</h3>
          <ul style="color:var(--gray-500);line-height:2.4;font-size:0.88rem;list-style:none">
            <li>✦ Academic Excellence & Hard Work</li>
            <li>✦ Integrity & Honesty</li>
            <li>✦ Respect for Elders & Authority</li>
            <li>✦ Unity in Diversity</li>
            <li>✦ Service to Nation & Community</li>
          </ul>
        </div></div>
      </div>
    </div>
  </div>
</section>${renderFooter()}`;
}

/* ---------- PROGRAMMES PAGE ---------- */
function pgPrograms() {
  return `
<section style="padding-top:100px">
  <div class="section" style="padding-top:40px">
    <div class="container">
      <div class="section-header">
        <div class="overline">Academic Programmes</div>
        <h2>Our Curriculum</h2>
        <p>Comprehensive NERDC-aligned curriculum — from JSS1 to SS3 — designed to produce all-round graduates.</p>
      </div>
      <div class="programs-grid">
        ${[
          {icon:'📐',bg:'pi-math',    t:'Mathematics & Further Maths', d:'Rigorous mathematics curriculum covering algebra, geometry, calculus, and statistics, aligned with WAEC and NECO.',tags:['Algebra','Geometry','Calculus','Stats']},
          {icon:'🔬',bg:'pi-science', t:'Sciences (Biology, Chem, Phy)',d:'Hands-on laboratory work in all three sciences — preparing students for Medicine, Engineering, and Research.',tags:['Biology','Chemistry','Physics','Lab Work']},
          {icon:'📖',bg:'pi-english', t:'Languages & Literature',       d:'English Language, Literature-in-English, and Nigerian languages — building oral and written communication mastery.',tags:['English','Literature','Oral Skills','Languages']},
          {icon:'💻',bg:'pi-tech',    t:'Computer Studies & ICT',       d:'Microsoft Office, internet literacy, basic programming, and cybersecurity awareness for the digital age.',tags:['MS Office','Coding','Internet','ICT']},
          {icon:'🎨',bg:'pi-arts',    t:'Arts & Social Sciences',       d:'Government, Economics, CRK/IRK, Fine Art, Music — developing critical thinkers and creative problem-solvers.',tags:['Economics','Government','Fine Art','IRK']},
          {icon:'⚽',bg:'pi-sports',  t:'Sports & Co-Curriculars',      d:'Football, athletics, debate, Red Cross, Boys/Girls Scout, cultural dance — building character beyond the classroom.',tags:['Football','Debate','Athletics','Scouts']},
        ].map(p => `
          <div class="program-card">
            <div class="program-img ${p.bg}"><div class="p-overlay">${p.icon}</div></div>
            <div class="program-body">
              <h3>${p.t}</h3><p>${p.d}</p>
              <div class="program-tags">${p.tags.map(t => `<span class="program-tag">${t}</span>`).join('')}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>
</section>${renderFooter()}`;
}

/* ---------- NEWS PAGE ---------- */
function pgNews() {
  return `
<section style="padding-top:100px">
  <div class="section" style="padding-top:40px">
    <div class="container">
      <div class="section-header"><div class="overline">News & Events</div><h2>School News</h2></div>
      ${[
        {bg:'linear-gradient(145deg,#1a6b3c,#2d9e5f)',  icon:'🏆',t:'Greenfield Students Sweep WAEC 2025 with 14 A1s',                   d:'March 2026',c:'Achievement',b:'Our SS3 class of 2025 produced 14 students with straight A1s — the best result in the school\'s 26-year history. The principal commended teachers and parents alike.'},
        {bg:'linear-gradient(145deg,#0e7490,#22d3ee)',  icon:'🎤',t:'Inter-School Debate Championship — 1st Place',                       d:'March 20, 2026',c:'Competition',b:'Greenfield\'s debate team defeated 22 other Abuja schools to clinch the FCT Inter-Secondary School Debate Trophy for the third consecutive year.'},
        {bg:'linear-gradient(145deg,#c89b2a,#f5d87a)',  icon:'📚',t:'New 2,000-Volume Digital Library Unveiled',                          d:'March 14, 2026',c:'Facility',b:'The new digital library wing was commissioned by the FCT Education Board. It includes 40 computer workstations, e-book access, and a quiet reading lounge.'},
        {bg:'linear-gradient(145deg,#7c3aed,#a78bfa)',  icon:'🤝',t:'Greenfield Signs MOU with University of Lagos',                      d:'March 7, 2026',c:'Partnership',b:'A Memorandum of Understanding was signed giving Greenfield students priority access to UNILAG\'s summer STEM camps and undergraduate scholarship pathways.'},
      ].map(n => `
        <div class="d-card" style="margin-bottom:20px;display:flex;overflow:hidden">
          <div style="width:220px;min-height:180px;background:${n.bg};display:flex;align-items:center;justify-content:center;font-size:3rem;flex-shrink:0">${n.icon}</div>
          <div style="padding:24px;flex:1">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
              <span class="badge badge-info">${n.c}</span>
              <span style="font-size:0.76rem;color:var(--gray-400)">${n.d}</span>
            </div>
            <h3 style="font-family:var(--font-head);font-size:1.1rem;font-weight:700;color:var(--gray-900);margin-bottom:8px">${n.t}</h3>
            <p style="font-size:0.86rem;color:var(--gray-500);line-height:1.75">${n.b}</p>
          </div>
        </div>`).join('')}
    </div>
  </div>
</section>${renderFooter()}`;
}

/* ---------- CONTACT PAGE ---------- */
function pgContact() {
  return `
<section style="padding-top:100px">
  <div class="section" style="padding-top:40px">
    <div class="container">
      <div class="section-header"><div class="overline">Contact Us</div><h2>Get in Touch</h2></div>
      <div class="contact-grid">
        <div class="contact-info">
          <h3>School Contact Information</h3>
          <div class="contact-detail"><div class="cd-icon">📍</div><div><h4>Address</h4><p>Plot 15, Gwarinpa Estate, Abuja, FCT, Nigeria</p></div></div>
          <div class="contact-detail"><div class="cd-icon">📞</div><div><h4>Phone</h4><p>+234-805-395-0665 / +234-811-949-9210</p></div></div>
          <div class="contact-detail"><div class="cd-icon">✉️</div><div><h4>Email</h4><p>info@greenfield.edu.ng</p></div></div>
          <div class="contact-detail"><div class="cd-icon">🕐</div><div><h4>School Hours</h4><p>Mon – Fri: 7:00 AM – 4:00 PM<br>Sat (Prep): 8:00 AM – 12:00 PM</p></div></div>
          <div class="contact-detail"><div class="cd-icon">🏫</div><div><h4>Principal</h4><p>Mr. Olumide Adeyemi, B.Ed, M.Ed (ABU)</p></div></div>
        </div>
        <div class="contact-form">
          <h3 style="font-family:var(--font-head);font-size:1.15rem;font-weight:700;margin-bottom:20px">Send Us a Message</h3>
          <form onsubmit="event.preventDefault();$('contactMsg').innerHTML='<div class=form-msg success>✅ Message sent! We will respond within 24 hours.</div>';event.target.reset();setTimeout(()=>$('contactMsg').innerHTML='',6000)">
            <div class="form-row">
              <div class="form-group"><label>Full Name</label><input type="text" placeholder="e.g. Mrs. Bola Tinubu" required></div>
              <div class="form-group"><label>Email Address</label><input type="email" placeholder="you@example.com" required></div>
            </div>
            <div class="form-group"><label>Subject</label><input type="text" placeholder="e.g. Admission Enquiry for JSS1"></div>
            <div class="form-group"><label>Message</label><textarea placeholder="Type your message here..." rows="4"></textarea></div>
            <button type="submit" class="btn btn-primary btn-full">Send Message →</button>
            <div id="contactMsg"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>${renderFooter()}`;
}

/* ---------- FOOTER ---------- */
function renderFooter() {
  return `
<footer class="footer">
  <div class="footer-grid">
    <div>
      <div class="footer-brand"><span>🏫 Greenfield Academy</span></div>
      <p class="footer-desc">Nurturing excellence in every Nigerian child since 1998. Plot 15, Gwarinpa, Abuja, FCT.</p>
      <div class="footer-social">
        <a href="#" title="Twitter/X">𝕏</a>
        <a href="#" title="Facebook">📘</a>
        <a href="#" title="Instagram">📷</a>
      </div>
    </div>
    <div>
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="#" onclick="navigate('home')">Home</a></li>
        <li><a href="#" onclick="navigate('about')">About Us</a></li>
        <li><a href="#" onclick="navigate('programs')">Programmes</a></li>
        <li><a href="#" onclick="navigate('contact')">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4>Portal Access</h4>
      <ul class="footer-links">
        <li><a href="#" onclick="navigate('login')">Sign In</a></li>
        <li><a href="#" onclick="navigate('signup')">Create Account</a></li>
      </ul>
    </div>
    <div>
      <h4>Contact</h4>
      <ul class="footer-links">
        <li>📍 Gwarinpa, Abuja FCT</li>
        <li>📞 +234-805-395-0665</li>
        <li>✉️ info@greenfield.edu.ng</li>
        <li>🕐 Mon–Fri: 7:00 AM – 4:00 PM</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Greenfield Academy, lagos. All rights reserved.</span>
    <span>CAC Reg No: RC-1234567 | WAEC Centre: 12345</span>
  </div>
</footer>`;
}


/* =============================================
   AUTH PAGES — Login & Signup
   ============================================= */
function renderAuth() { return page === 'login' ? renderLogin() : renderSignup(); }

/* ---------- LOGIN FORM ---------- */
function renderLogin() {
  return `
<div class="auth-page">
  <div class="auth-box">
    <div style="text-align:center;margin-bottom:8px">
      <a href="#" onclick="navigate('home')" style="font-family:var(--font-head);font-size:1.6rem;font-weight:900;color:#fff;text-decoration:none">🏫 Greenfield Academy</a>
    </div>
    <h2>Welcome Back</h2>
    <p class="subtitle">Sign in to access the school portal</p>

    <form onsubmit="handleLogin(event)">
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="loginEmail" placeholder="you@greenfield.edu.ng" required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <div class="pw-wrap">
          <input type="password" id="loginPw" placeholder="Enter your password" required>
          <button type="button" class="pw-toggle" onclick="togglePw('loginPw',this)">👁</button>
        </div>
      </div>
      <div class="form-options">
        <label class="form-check"><input type="checkbox"> Remember me</label>
        <a href="#" class="forgot-link">Forgot password?</a>
      </div>
      <button type="submit" class="btn btn-primary btn-full btn-lg">Sign In →</button>
    </form>

    <!-- Quick-login shortcuts for development/demo -->
    <div class="divider">quick demo login</div>
    <div style="text-align:center;margin-bottom:16px">
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button onclick="$('loginEmail').value='admin@greenfield.edu.ng';   $('loginPw').value='admin123'"   class="btn btn-outline-white btn-sm">🔑 Admin</button>
        <button onclick="$('loginEmail').value='ngozi@greenfield.edu.ng';   $('loginPw').value='teacher123'" class="btn btn-outline-white btn-sm">👩‍🏫 Teacher</button>
        <button onclick="$('loginEmail').value='emeka@greenfield.edu.ng';   $('loginPw').value='teacher456'" class="btn btn-outline-white btn-sm">👨‍🏫 Staff</button>
      </div>
    </div>

    <div class="alt-link">Don't have an account? <a href="#" onclick="navigate('signup')">Apply for access</a></div>
  </div>
</div>`;
}

/* ---------- SIGNUP FORM ---------- */
function renderSignup() {
  return `
<div class="auth-page">
  <div class="auth-box" style="max-width:500px">
    <div style="text-align:center;margin-bottom:8px">
      <a href="#" onclick="navigate('home')" style="font-family:var(--font-head);font-size:1.6rem;font-weight:900;color:#fff;text-decoration:none">🏫 Greenfield Academy</a>
    </div>
    <h2>Create Account</h2>
    <p class="subtitle">Register for portal access</p>

    <!-- Role selector -->
    <div class="role-selector" id="roleSelector">
      <div class="role-option selected" onclick="selectRole('student',this)"><div class="ro-icon">🎓</div><div class="ro-label">Student</div></div>
      <div class="role-option"          onclick="selectRole('teacher',this)"><div class="ro-icon">👨‍🏫</div><div class="ro-label">Teacher</div></div>
      <div class="role-option"          onclick="selectRole('parent',this)"> <div class="ro-icon">👨‍👩‍👧</div><div class="ro-label">Parent</div></div>
    </div>

    <form onsubmit="handleSignup(event)">
      <div class="form-row">
        <div class="form-group"><label>First Name</label><input type="text" id="su_first" placeholder="e.g. Chukwuemeka" required></div>
        <div class="form-group"><label>Surname</label>    <input type="text" id="su_last"  placeholder="e.g. Obi"          required></div>
      </div>
      <div class="form-group"><label>Email Address</label><input type="email" id="su_email" placeholder="you@example.com" required></div>
      <div class="form-row">
        <div class="form-group">
          <label>Password</label>
          <div class="pw-wrap">
            <input type="password" id="su_pw" placeholder="Min 6 characters" minlength="6" required>
            <button type="button" class="pw-toggle" onclick="togglePw('su_pw',this)">👁</button>
          </div>
        </div>
        <div class="form-group"><label>Confirm Password</label><input type="password" id="su_pw2" placeholder="Re-enter password" required></div>
      </div>

      <!-- Extra field changes based on role -->
      <div class="form-group" id="su_extra">
        <label>Class / Level</label>
        <select id="su_grade">
          <option value="">Select level</option>
          ${['JSS1','JSS2','JSS3','SS1','SS2','SS3'].map(g => `<option>${g}</option>`).join('')}
        </select>
      </div>

      <label class="form-check" style="margin-bottom:20px">
        <input type="checkbox" required>
        I agree to the <a href="#" style="color:#2d9e5f">Terms & Conditions</a>
      </label>
      <button type="submit" class="btn btn-primary btn-full btn-lg">Create Account →</button>
    </form>
    <div class="alt-link">Already have an account? <a href="#" onclick="navigate('login')">Sign in here</a></div>
  </div>
</div>`;
}

/* Switch role in signup form */
function selectRole(r, el) {
  selectedRole = r;
  document.querySelectorAll('.role-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  const ex = $('su_extra');
  if (r === 'student') {
    ex.innerHTML = `<label>Class / Level</label><select id="su_grade"><option value="">Select level</option>${['JSS1','JSS2','JSS3','SS1','SS2','SS3'].map(g => `<option>${g}</option>`).join('')}</select>`;
  } else if (r === 'teacher') {
    ex.innerHTML = '<label>Subject Taught</label><input type="text" id="su_subject" placeholder="e.g. Mathematics">';
  } else {
    ex.innerHTML = '<label>Child\'s Full Name</label><input type="text" id="su_child" placeholder="Your child\'s full name">';
  }
}

/* Toggle password visibility */
function togglePw(id, btn) {
  const inp = $(id);
  inp.type   = inp.type === 'password' ? 'text' : 'password';
  btn.textContent = inp.type === 'password' ? '👁' : '🔒';
}

/* Process login */
function handleLogin(e) {
  e.preventDefault();
  const email = $('loginEmail').value;
  const pw    = $('loginPw').value;
  const found = DB.data.users.find(u => u.email === email && u.password === pw);
  if (found) {
    user = found;
    sessionStorage.setItem('greenfieldUser', JSON.stringify(user));
    page     = 'd-dashboard';
    dashPage = 'dashboard';
    render();
    toast('success', `Welcome back, ${user.name.split(' ')[0]}!`);
  } else {
    toast('error', 'Invalid email or password. Please try again.');
  }
}

/* Process signup — creates entry in users[], students[], or teachers[] */
function handleSignup(e) {
  e.preventDefault();
  const first = $('su_first').value;
  const last  = $('su_last').value;
  const email = $('su_email').value;
  const pw    = $('su_pw').value;
  const pw2   = $('su_pw2').value;

  if (pw !== pw2)                              { toast('error', 'Passwords do not match.'); return; }
  if (DB.data.users.find(u => u.email===email)) { toast('error', 'Email already registered.'); return; }

  /* Build user record */
  const nu = { id: DB.nextId(DB.data.users), name:`${first} ${last}`, email, password:pw, role:selectedRole };
  if (selectedRole === 'teacher') nu.subject = $('su_subject')?.value || '';
  if (selectedRole === 'student') {
    const grade = $('su_grade')?.value || 'JSS1';
    nu.grade   = grade;
    nu.classId = DB.data.classes.find(c => c.grade === grade)?.id || 1;
  }
  DB.data.users.push(nu);

  /* Also create matching student profile */
  if (selectedRole === 'student') {
    DB.data.students.push({
      id: DB.nextId(DB.data.students), name: nu.name, email,
      grade: nu.grade || 'JSS1', classId: nu.classId || 1,
      dob:'', phone:'', gender:'', parent:'',
      enrollDate: new Date().toISOString().split('T')[0],
      status:'active', gpa:0,
    });
  }

  /* Also create matching teacher profile */
  if (selectedRole === 'teacher') {
    DB.data.teachers.push({
      id: DB.nextId(DB.data.teachers), name: nu.name, email,
      subject: nu.subject || 'General', phone:'', qualification:'',
      joinDate: new Date().toISOString().split('T')[0], status:'active', classes:[],
    });
  }

  DB.save();
  user = nu;
  sessionStorage.setItem('greenfieldUser', JSON.stringify(user));
  page     = 'd-dashboard';
  dashPage = 'dashboard';
  render();
  toast('success', `Account created! Welcome, ${first}!`);
}


/* =============================================
   DASHBOARD SHELL
   ============================================= */
function renderDashboard() {
  return `
<div class="app-layout">

  <!-- SIDEBAR -->
  <aside class="dash-sidebar" id="dashSidebar">
    <div class="ds-header">
      <div class="ds-brand">
        <svg viewBox="0 0 40 40" fill="none" width="30" height="30">
          <path d="M20 3L3 13v14l17 10 17-10V13L20 3z" fill="#1a6b3c"/>
          <circle cx="20" cy="16" r="4" fill="white"/>
        </svg>
        <span class="ds-brand-text ds-text">Greenfield</span>
      </div>
    </div>

    <!-- Navigation links -->
    <nav class="ds-nav">
      <div class="ds-nav-section">
        <span class="ds-nav-label">Main</span>
        ${[
          {p:'dashboard', i:'📊', l:'Dashboard'},
          {p:'students',  i:'🎓', l:'Students'},
          {p:'teachers',  i:'👩‍🏫', l:'Teachers'},
          {p:'classes',   i:'📚', l:'Classes'},
        ].map(x => `
          <a href="#" class="ds-nav-link ${dashPage===x.p?'active':''}" onclick="event.preventDefault();dashNav('${x.p}')">
            <span class="ds-icon">${x.i}</span><span class="ds-text">${x.l}</span>
          </a>`).join('')}
      </div>
      <div class="ds-nav-section">
        <span class="ds-nav-label">Academic</span>
        ${[
          {p:'attendance', i:'📋', l:'Attendance'},
          {p:'grades',     i:'📝', l:'Grades'},
          {p:'schedule',   i:'📅', l:'Timetable'},
        ].map(x => `
          <a href="#" class="ds-nav-link ${dashPage===x.p?'active':''}" onclick="event.preventDefault();dashNav('${x.p}')">
            <span class="ds-icon">${x.i}</span><span class="ds-text">${x.l}</span>
          </a>`).join('')}
      </div>
      <div class="ds-nav-section">
        <span class="ds-nav-label">Account</span>
        <a href="#" class="ds-nav-link" onclick="event.preventDefault();dashNav('settings')"><span class="ds-icon">⚙️</span><span class="ds-text">Settings</span></a>
        <a href="#" class="ds-nav-link" onclick="event.preventDefault();navigate('logout')"><span class="ds-icon">🚪</span><span class="ds-text">Logout</span></a>
      </div>
    </nav>

    <!-- Logged-in user chip -->
    <div class="ds-footer">
      <div class="ds-user">
        <div class="ds-user-avatar" style="background:${avatarColor(user.name)}">${ini(user.name)}</div>
        <div class="ds-user-info ds-text">
          <span class="ds-user-name">${user.name}</span>
          <span class="ds-user-role">${user.role}</span>
        </div>
      </div>
    </div>
  </aside>

  <!-- MAIN AREA -->
  <div class="dash-main">

    <!-- Top bar -->
    <header class="dash-topbar">
      <div class="dash-topbar-left">
        <!-- Mobile hamburger (hidden on desktop) -->
        <button class="btn-icon dash-btn" onclick="toggleDashSidebar()" id="dashHamburger" style="display:none">☰</button>
        <div class="dash-search"><span>🔍</span><input type="text" placeholder="Search students, teachers..."></div>
      </div>
      <div class="dash-topbar-right">
        <button class="dash-btn" title="Notifications">🔔<span class="notif-badge">3</span></button>
        <span class="dash-date">${new Date().toLocaleDateString('en-NG',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</span>
      </div>
    </header>

    <!-- Page content -->
    <div class="dash-content" id="dashContent">${renderDashPage()}</div>
  </div>

</div>`;
}

/* Navigate within dashboard without full re-render */
function dashNav(p) {
  dashPage = p;
  $('dashContent').innerHTML = renderDashPage();
  /* Update active link highlight */
  document.querySelectorAll('.ds-nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector(`.ds-nav-link[onclick*="${p}"]`)?.classList.add('active');
  if (p === 'dashboard') setTimeout(initBarChart, 50);
}

function toggleDashSidebar() { $('dashSidebar').classList.toggle('mobile-open') }

/* Refresh only the content area */
function refreshDash() {
  const dc = $('dashContent');
  if (dc) dc.innerHTML = renderDashPage();
  if (dashPage === 'dashboard') setTimeout(initBarChart, 50);
}

/* Route to correct dashboard section */
function renderDashPage() {
  const pages = {
    dashboard: dashDashboard,
    students:  dashStudents,
    teachers:  dashTeachers,
    classes:   dashClasses,
    attendance:dashAttendance,
    grades:    dashGrades,
    schedule:  dashSchedule,
    settings:  dashSettings,
  };
  return (pages[dashPage] || dashDashboard)();
}


/* =============================================
   DASHBOARD — HOME / OVERVIEW
   ============================================= */
function dashDashboard() {
  const s = DB.data.students, t = DB.data.teachers, c = DB.data.classes;
  const avgGpa = (s.reduce((sum,x) => sum + (x.gpa||0), 0) / (s.length||1)).toFixed(1);
  return `
<div class="page-title">
  <h1>Dashboard</h1>
  <p>Welcome back, ${user.name.split(' ')[0]}! Here is today's overview.</p>
</div>

<!-- Stat cards -->
<div class="dash-stats">
  <div class="d-stat"><div class="d-stat-icon" style="background:#d0eddf">🎓</div><div><h3>${s.length}</h3><p>Total Students</p></div></div>
  <div class="d-stat"><div class="d-stat-icon" style="background:#dbeafe">👩‍🏫</div><div><h3>${t.length}</h3><p>Teaching Staff</p></div></div>
  <div class="d-stat"><div class="d-stat-icon" style="background:#f3e8ff">📚</div><div><h3>${c.length}</h3><p>Classes</p></div></div>
  <div class="d-stat"><div class="d-stat-icon" style="background:#fef3c7">📊</div><div><h3>${avgGpa}</h3><p>Average GPA</p></div></div>
</div>

<!-- Activity feed + Quick actions -->
<div class="dash-grid-2">
  <div class="d-card">
    <div class="d-card-header"><h3>Recent Activity</h3></div>
    <div class="d-card-body">
      <ul class="activity-list">
        <li class="act-item"><div class="act-dot" style="background:var(--primary)"></div><span class="act-text"><strong>Fatimah Abdullahi</strong> submitted Mathematics assignment</span><span class="act-time">5m ago</span></li>
        <li class="act-item"><div class="act-dot" style="background:var(--success)"></div><span class="act-text"><strong>Mrs. Okonkwo</strong> marked SS1 attendance</span><span class="act-time">20m ago</span></li>
        <li class="act-item"><div class="act-dot" style="background:var(--warning)"></div><span class="act-text"><strong>2 students</strong> absent without permission today</span><span class="act-time">1h ago</span></li>
        <li class="act-item"><div class="act-dot" style="background:var(--primary)"></div><span class="act-text"><strong>Mr. Nwosu</strong> posted English Literature notes</span><span class="act-time">2h ago</span></li>
        <li class="act-item"><div class="act-dot" style="background:var(--success)"></div><span class="act-text"><strong>Tunde Fashola</strong> scored 94% in Chemistry test</span><span class="act-time">3h ago</span></li>
      </ul>
    </div>
  </div>
  <div class="d-card">
    <div class="d-card-header"><h3>Quick Actions</h3></div>
    <div class="d-card-body">
      <div class="quick-grid">
        <button class="quick-btn" onclick="dashNav('students');setTimeout(()=>openStudentForm(),100)"><span>➕</span>Add Student</button>
        <button class="quick-btn" onclick="dashNav('attendance')"><span>📋</span>Attendance</button>
        <button class="quick-btn" onclick="dashNav('grades')">   <span>📝</span>Add Grades</button>
        <button class="quick-btn" onclick="dashNav('schedule')"> <span>📅</span>Timetable</button>
      </div>
    </div>
  </div>
</div>

<!-- Grade distribution chart + Upcoming events -->
<div class="dash-grid-eq">
  <div class="d-card">
    <div class="d-card-header"><h3>Grade Distribution</h3></div>
    <div class="d-card-body"><div class="bar-chart" id="barChart"></div></div>
  </div>
  <div class="d-card">
    <div class="d-card-header"><h3>Upcoming School Events</h3></div>
    <div class="d-card-body">
      ${[
        {d:'28',m:'Mar',t:'1st Term Exam Timetable Released', time:'Assembly'},
        {d:'05',m:'Apr',t:'Inter-House Sports Day',           time:'7:00 AM'},
        {d:'12',m:'Apr',t:'PTA Meeting',                     time:'3:30 PM'},
        {d:'25',m:'Apr',t:'1st Term Examinations Begin',     time:'All day'},
      ].map(e => `
        <div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--gray-50)">
          <div style="width:44px;height:44px;border-radius:8px;background:var(--primary-50);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0">
            <span style="font-size:1rem;font-weight:800;color:var(--primary);line-height:1">${e.d}</span>
            <span style="font-size:0.52rem;color:var(--primary);text-transform:uppercase;font-weight:600">${e.m}</span>
          </div>
          <div>
            <div style="font-size:0.83rem;font-weight:600;color:var(--gray-800)">${e.t}</div>
            <div style="font-size:0.7rem;color:var(--gray-400)">${e.time}</div>
          </div>
        </div>`).join('')}
    </div>
  </div>
</div>`;
}

/* Render bar chart using DOM (no external library) */
function initBarChart() {
  const chart = document.getElementById('barChart');
  if (!chart) return;
  const ranges = ['A1/B2 (70+)','C4/C5/C6 (50-69)','D7/E8 (40-49)','F9 (<40)'];
  const counts = [0,0,0,0];
  DB.data.grades.forEach(g => {
    if (g.score >= 70) counts[0]++;
    else if (g.score >= 50) counts[1]++;
    else if (g.score >= 40) counts[2]++;
    else counts[3]++;
  });
  const mx = Math.max(...counts, 1);
  const colors = ['#1a6b3c','#0e7490','#c89b2a','#dc2626'];
  chart.innerHTML = ranges.map((r,i) => `
    <div class="bar-col">
      <span class="bar-value">${counts[i]}</span>
      <div class="bar" style="height:${(counts[i]/mx)*100}%;background:${colors[i]}"></div>
      <span class="bar-label">${r}</span>
    </div>`).join('');
}


/* =============================================
   STUDENTS MODULE
   ============================================= */
function dashStudents() {
  const filtered = DB.data.students.filter(s =>
    s.name.toLowerCase().includes(sFilter.toLowerCase()) && (!sGrade || s.grade === sGrade)
  );
  const tp    = Math.ceil(filtered.length / PER_PAGE) || 1;
  if (sPage > tp) sPage = tp;
  const start = (sPage - 1) * PER_PAGE;
  const ps    = filtered.slice(start, start + PER_PAGE);
  const grades = [...new Set(DB.data.students.map(s => s.grade))];

  return `
<div class="page-title-row">
  <div class="page-title"><h1>Students</h1><p>${DB.data.students.length} enrolled</p></div>
  <button class="btn btn-primary" onclick="openStudentForm()">+ Add Student</button>
</div>
<div class="tbl-container">
  <div class="tbl-toolbar">
    <div class="tbl-toolbar-left">
      <div class="tbl-search">
        <span>🔍</span>
        <input placeholder="Search student name..." value="${sFilter}" oninput="sFilter=this.value;sPage=1;refreshDash()">
      </div>
      <select onchange="sGrade=this.value;sPage=1;refreshDash()">
        <option value="">All Levels</option>
        ${grades.map(g => `<option value="${g}" ${g===sGrade?'selected':''}>${g}</option>`).join('')}
      </select>
    </div>
  </div>

  ${filtered.length === 0
    ? '<div class="empty-state"><div class="es-icon">🎓</div><h3>No students found</h3><p>Try adjusting your search or filter.</p></div>'
    : `<div style="overflow-x:auto"><table>
        <thead><tr><th>Student</th><th>Level</th><th>GPA</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          ${ps.map(s => `
            <tr>
              <td>
                <div class="tbl-user">
                  <div class="tbl-avatar" style="background:${avatarColor(s.name)}">${ini(s.name)}</div>
                  <div class="tbl-user-info"><h4>${s.name}</h4><p>${s.email}</p></div>
                </div>
              </td>
              <td>${s.grade}</td>
              <td style="font-weight:700;color:${scoreColor(s.gpa*25)}">${s.gpa}</td>
              <td><span class="badge ${s.status==='active'?'badge-success':'badge-warning'}">${s.status}</span></td>
              <td>
                <div class="tbl-actions">
                  <button title="Edit"   onclick="openStudentForm(${s.id})">✏️</button>
                  <button title="Delete" class="del" onclick="delStudent(${s.id})">🗑️</button>
                </div>
              </td>
            </tr>`).join('')}
        </tbody>
      </table></div>
      <div class="tbl-pagination">
        <span>${start+1}–${Math.min(start+PER_PAGE,filtered.length)} of ${filtered.length}</span>
        <div class="pg-btns">
          <button ${sPage<=1?'disabled':''} onclick="sPage--;refreshDash()">‹</button>
          ${Array.from({length:tp},(_,i) => `<button class="${sPage===i+1?'active':''}" onclick="sPage=${i+1};refreshDash()">${i+1}</button>`).join('')}
          <button ${sPage>=tp?'disabled':''} onclick="sPage++;refreshDash()">›</button>
        </div>
      </div>`}
</div>`;
}

/* Open add/edit student modal */
function openStudentForm(id) {
  const s = id ? DB.data.students.find(x => x.id === id) : null;
  openModal(s ? 'Edit Student' : 'Add Student', `
<form onsubmit="saveStudent(event,${id||'null'})">
  <div class="form-row">
    <div class="form-group"><label>Full Name *</label><input id="sf_name" value="${s?.name||''}" required></div>
    <div class="form-group"><label>Email *</label><input type="email" id="sf_email" value="${s?.email||''}" required></div>
  </div>
  <div class="form-row">
    <div class="form-group"><label>Level</label>
      <select id="sf_grade">
        ${['JSS1','JSS2','JSS3','SS1','SS2','SS3'].map(g => `<option value="${g}" ${s?.grade===g?'selected':''}>${g}</option>`).join('')}
      </select>
    </div>
    <div class="form-group"><label>Class</label>
      <select id="sf_class">
        ${DB.data.classes.map(c => `<option value="${c.id}" ${s?.classId===c.id?'selected':''}>${c.name}</option>`).join('')}
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group"><label>Phone</label><input id="sf_phone" value="${s?.phone||''}"></div>
    <div class="form-group"><label>Gender</label>
      <select id="sf_gender">
        <option ${s?.gender==='Male'?'selected':''}>Male</option>
        <option ${s?.gender==='Female'?'selected':''}>Female</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group"><label>GPA (0–4)</label><input type="number" id="sf_gpa" step="0.1" min="0" max="4" value="${s?.gpa||''}"></div>
    <div class="form-group"><label>Status</label>
      <select id="sf_status">
        <option value="active"   ${s?.status==='active'?'selected':''}>Active</option>
        <option value="inactive" ${s?.status==='inactive'?'selected':''}>Inactive</option>
      </select>
    </div>
  </div>
  <div class="modal-actions">
    <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    <button type="submit" class="btn btn-primary">${s?'Update':'Add Student'}</button>
  </div>
</form>`);
}

function saveStudent(e, id) {
  e.preventDefault();
  const d = {
    name: $('sf_name').value, email: $('sf_email').value,
    grade: $('sf_grade').value, classId: +$('sf_class').value,
    phone: $('sf_phone').value, gender: $('sf_gender').value,
    gpa: +$('sf_gpa').value || 0, status: $('sf_status').value,
  };
  if (id) {
    const i = DB.data.students.findIndex(s => s.id === id);
    if (i !== -1) DB.data.students[i] = { ...DB.data.students[i], ...d };
    toast('success', 'Student updated.');
  } else {
    d.id = DB.nextId(DB.data.students); d.dob = ''; d.parent = '';
    d.enrollDate = new Date().toISOString().split('T')[0];
    DB.data.students.push(d);
    toast('success', 'Student added.');
  }
  DB.save(); closeModal(); refreshDash();
}

function delStudent(id) {
  const s = DB.data.students.find(x => x.id === id);
  showConfirm('Delete Student', `Remove ${s.name} from the system? This cannot be undone.`, () => {
    DB.data.students = DB.data.students.filter(x => x.id !== id);
    DB.save(); toast('success', 'Student removed.'); refreshDash();
  });
}


/* =============================================
   TEACHERS MODULE
   ============================================= */
function dashTeachers() {
  const filtered = DB.data.teachers.filter(t =>
    t.name.toLowerCase().includes(tFilter.toLowerCase()) ||
    t.subject.toLowerCase().includes(tFilter.toLowerCase())
  );
  return `
<div class="page-title-row">
  <div class="page-title"><h1>Teaching Staff</h1><p>${DB.data.teachers.length} faculty members</p></div>
  <button class="btn btn-primary" onclick="openTeacherForm()">+ Add Teacher</button>
</div>
<div class="tbl-container">
  <div class="tbl-toolbar">
    <div class="tbl-toolbar-left">
      <div class="tbl-search">
        <span>🔍</span>
        <input placeholder="Search by name or subject..." value="${tFilter}" oninput="tFilter=this.value;refreshDash()">
      </div>
    </div>
  </div>
  <div style="overflow-x:auto"><table>
    <thead><tr><th>Teacher</th><th>Subject</th><th>Qualification</th><th>Status</th><th>Actions</th></tr></thead>
    <tbody>
      ${filtered.map(t => `
        <tr>
          <td>
            <div class="tbl-user">
              <div class="tbl-avatar" style="background:${avatarColor(t.name)}">${ini(t.name)}</div>
              <div class="tbl-user-info"><h4>${t.name}</h4><p>${t.email}</p></div>
            </div>
          </td>
          <td>${t.subject}</td>
          <td style="font-size:0.8rem;color:var(--gray-500)">${t.qualification || '—'}</td>
          <td><span class="badge ${t.status==='active'?'badge-success':t.status==='on-leave'?'badge-warning':'badge-danger'}">${t.status}</span></td>
          <td>
            <div class="tbl-actions">
              <button title="Edit"   onclick="openTeacherForm(${t.id})">✏️</button>
              <button title="Delete" class="del" onclick="delTeacher(${t.id})">🗑️</button>
            </div>
          </td>
        </tr>`).join('')}
    </tbody>
  </table></div>
</div>`;
}

function openTeacherForm(id) {
  const t = id ? DB.data.teachers.find(x => x.id === id) : null;
  openModal(t ? 'Edit Teacher' : 'Add Teacher', `
<form onsubmit="saveTeacher(event,${id||'null'})">
  <div class="form-row">
    <div class="form-group"><label>Full Name *</label><input id="tf_name" value="${t?.name||''}" required></div>
    <div class="form-group"><label>Email *</label><input type="email" id="tf_email" value="${t?.email||''}" required></div>
  </div>
  <div class="form-row">
    <div class="form-group"><label>Subject *</label><input id="tf_subject" value="${t?.subject||''}" required></div>
    <div class="form-group"><label>Qualification</label><input id="tf_qual" value="${t?.qualification||''}" placeholder="e.g. B.Sc Mathematics (UNILAG)"></div>
  </div>
  <div class="form-row">
    <div class="form-group"><label>Phone</label><input id="tf_phone" value="${t?.phone||''}"></div>
    <div class="form-group"><label>Status</label>
      <select id="tf_status">
        <option value="active"   ${t?.status==='active'?'selected':''}>Active</option>
        <option value="on-leave" ${t?.status==='on-leave'?'selected':''}>On Leave</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label>Assigned Classes</label>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
      ${DB.data.classes.map(c => `
        <label class="form-check" style="background:var(--gray-50);padding:6px 12px;border-radius:20px;font-size:0.8rem">
          <input type="checkbox" class="tf_cls" value="${c.id}" ${t?.classes?.includes(c.id)?'checked':''}> ${c.name}
        </label>`).join('')}
    </div>
  </div>
  <div class="modal-actions">
    <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    <button type="submit" class="btn btn-primary">${t?'Update':'Add Teacher'}</button>
  </div>
</form>`);
}

function saveTeacher(e, id) {
  e.preventDefault();
  const cls = Array.from(document.querySelectorAll('.tf_cls:checked')).map(c => +c.value);
  const d = {
    name: $('tf_name').value, email: $('tf_email').value,
    subject: $('tf_subject').value, qualification: $('tf_qual').value,
    phone: $('tf_phone').value, status: $('tf_status').value, classes: cls,
  };
  if (id) {
    const i = DB.data.teachers.findIndex(t => t.id === id);
    if (i !== -1) DB.data.teachers[i] = { ...DB.data.teachers[i], ...d };
    toast('success', 'Teacher updated.');
  } else {
    d.id = DB.nextId(DB.data.teachers);
    d.joinDate = new Date().toISOString().split('T')[0];
    DB.data.teachers.push(d);
    toast('success', 'Teacher added.');
  }
  DB.save(); closeModal(); refreshDash();
}

function delTeacher(id) {
  showConfirm('Delete Teacher', 'Remove this teacher from the system?', () => {
    DB.data.teachers = DB.data.teachers.filter(x => x.id !== id);
    DB.save(); toast('success', 'Teacher removed.'); refreshDash();
  });
}


/* =============================================
   CLASSES MODULE
   ============================================= */
function dashClasses() {
  return `
<div class="page-title-row">
  <div class="page-title"><h1>Classes</h1><p>Manage class sections</p></div>
  <button class="btn btn-primary" onclick="openClassForm()">+ Add Class</button>
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px">
  ${DB.data.classes.map(c => {
    const t   = DB.data.teachers.find(x => x.id === c.teacherId);
    const sc  = DB.data.students.filter(s => s.classId === c.id && s.status === 'active').length;
    const pct = Math.min(100, (sc / c.capacity) * 100);
    return `
    <div class="d-card">
      <div class="d-card-body">
        <div style="display:flex;justify-content:space-between;margin-bottom:12px">
          <span class="badge badge-info">${c.grade}</span>
          <div class="tbl-actions">
            <button onclick="openClassForm(${c.id})">✏️</button>
            <button class="del" onclick="delClass(${c.id})">🗑️</button>
          </div>
        </div>
        <h3 style="font-size:0.97rem;font-weight:700;margin-bottom:4px">${c.name}</h3>
        <p style="font-size:0.78rem;color:var(--gray-500);margin-bottom:12px">${c.room} • ${t?.name||'No teacher assigned'}</p>
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:6px">
          <span>${sc}/${c.capacity} students</span><span>${Math.round(pct)}%</span>
        </div>
        <div style="height:6px;background:var(--gray-100);border-radius:3px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:${pct>90?'var(--danger)':'var(--primary)'};border-radius:3px"></div>
        </div>
      </div>
    </div>`;
  }).join('')}
</div>`;
}

function openClassForm(id) {
  const c = id ? DB.data.classes.find(x => x.id === id) : null;
  openModal(c ? 'Edit Class' : 'Add Class', `
<form onsubmit="saveClass(event,${id||'null'})">
  <div class="form-row">
    <div class="form-group"><label>Class Name *</label><input id="cf_name" value="${c?.name||''}" placeholder="e.g. SS1 Science" required></div>
    <div class="form-group"><label>Level</label>
      <select id="cf_grade">
        ${['JSS1','JSS2','JSS3','SS1','SS2','SS3'].map(g => `<option value="${g}" ${c?.grade===g?'selected':''}>${g}</option>`).join('')}
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group"><label>Form Teacher</label>
      <select id="cf_teacher">
        <option value="">Select teacher</option>
        ${DB.data.teachers.filter(t => t.status==='active').map(t => `<option value="${t.id}" ${c?.teacherId===t.id?'selected':''}>${t.name}</option>`).join('')}
      </select>
    </div>
    <div class="form-group"><label>Classroom</label><input id="cf_room" value="${c?.room||''}" placeholder="e.g. Block A, Room 101"></div>
  </div>
  <div class="form-group"><label>Capacity</label><input type="number" id="cf_cap" value="${c?.capacity||35}" min="1"></div>
  <div class="modal-actions">
    <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    <button type="submit" class="btn btn-primary">${c?'Update':'Add Class'}</button>
  </div>
</form>`);
}

function saveClass(e, id) {
  e.preventDefault();
  const d = {
    name: $('cf_name').value, grade: $('cf_grade').value,
    teacherId: +$('cf_teacher').value || null,
    room: $('cf_room').value, capacity: +$('cf_cap').value || 35,
  };
  if (id) {
    const i = DB.data.classes.findIndex(c => c.id === id);
    if (i !== -1) DB.data.classes[i] = { ...DB.data.classes[i], ...d };
    toast('success', 'Class updated.');
  } else {
    d.id = DB.nextId(DB.data.classes);
    DB.data.classes.push(d);
    toast('success', 'Class added.');
  }
  DB.save(); closeModal(); refreshDash();
}

function delClass(id) {
  showConfirm('Delete Class', 'Delete this class? Students in it will need to be reassigned.', () => {
    DB.data.classes = DB.data.classes.filter(c => c.id !== id);
    DB.save(); toast('success', 'Class deleted.'); refreshDash();
  });
}


/* =============================================
   ATTENDANCE MODULE
   ============================================= */
function dashAttendance() {
  const cs = DB.data.students.filter(s => s.classId === attClass && s.status === 'active');
  return `
<div class="page-title"><h1>Attendance</h1><p>Mark daily register by class</p></div>

<!-- Class & date selectors -->
<div class="d-card" style="margin-bottom:20px">
  <div class="d-card-body">
    <div class="form-row">
      <div class="form-group">
        <label>Select Class</label>
        <select onchange="attClass=+this.value;refreshDash()">
          ${DB.data.classes.map(c => `<option value="${c.id}" ${c.id===attClass?'selected':''}>${c.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" value="${attDate}" onchange="attDate=this.value;refreshDash()">
      </div>
    </div>
  </div>
</div>

${cs.length === 0
  ? '<div class="empty-state"><div class="es-icon">📋</div><h3>No active students in this class</h3></div>'
  : cs.map(s => {
      const ex = DB.data.attendance.find(a => a.studentId === s.id && a.date === attDate);
      const st = ex?.status || '';
      return `
      <div class="att-row">
        <div class="att-student">
          <div class="tbl-avatar" style="background:${avatarColor(s.name)};width:36px;height:36px;font-size:0.73rem">${ini(s.name)}</div>
          <span>${s.name}</span>
        </div>
        <div class="att-btns">
          <button class="att-btn ${st==='present'?'present':''}" onclick="markAtt(${s.id},'present')">Present</button>
          <button class="att-btn ${st==='absent'?'absent':''}"   onclick="markAtt(${s.id},'absent')">Absent</button>
          <button class="att-btn ${st==='late'?'late':''}"       onclick="markAtt(${s.id},'late')">Late</button>
          <button class="att-btn ${st==='excused'?'excused':''}" onclick="markAtt(${s.id},'excused')">Excused</button>
        </div>
      </div>`; }).join('')}

${cs.length > 0 ? `
<div style="margin-top:20px;text-align:center">
  <button class="btn btn-primary" onclick="DB.save();toast('success','Attendance saved!')">💾 Save Attendance</button>
</div>` : ''}`;
}

function markAtt(sid, status) {
  const idx = DB.data.attendance.findIndex(a => a.studentId === sid && a.date === attDate);
  if (idx !== -1) {
    DB.data.attendance[idx].status = status;
  } else {
    DB.data.attendance.push({ id: DB.nextId(DB.data.attendance), studentId:sid, date:attDate, status, classId:attClass });
  }
  refreshDash();
}


/* =============================================
   GRADES MODULE
   ============================================= */
function dashGrades() {
  const filtered = DB.data.grades.filter(g => {
    const st = DB.data.students.find(s => s.id === g.studentId);
    return (st?.name||'').toLowerCase().includes(gFilter.toLowerCase()) ||
           g.subject.toLowerCase().includes(gFilter.toLowerCase());
  });
  const a1 = filtered.filter(g => g.score >= 70).length;
  const b  = filtered.filter(g => g.score >= 50 && g.score < 70).length;
  const d  = filtered.filter(g => g.score >= 40 && g.score < 50).length;
  const f  = filtered.filter(g => g.score < 40).length;

  return `
<div class="page-title-row">
  <div class="page-title"><h1>Grades</h1><p>${DB.data.grades.length} records</p></div>
  <button class="btn btn-primary" onclick="openGradeForm()">+ Add Grade</button>
</div>

<!-- Grade band summary -->
<div class="dash-stats" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:20px">
  ${[
    {l:'A1/B2/B3 (70+)',c:'var(--success)',b:'var(--success-light)',n:a1},
    {l:'C4–C6 (50–69)', c:'var(--primary)',b:'var(--primary-50)',  n:b},
    {l:'D7/E8 (40–49)', c:'var(--warning)',b:'var(--warning-light)',n:d},
    {l:'F9 (Below 40)', c:'var(--danger)', b:'var(--danger-light)', n:f},
  ].map(s => `
    <div class="d-stat">
      <div style="width:40px;height:40px;border-radius:8px;background:${s.b};display:flex;align-items:center;justify-content:center;color:${s.c};font-weight:800;font-size:1.1rem">${s.n}</div>
      <div><p style="font-size:0.76rem;color:var(--gray-600)">${s.l}</p></div>
    </div>`).join('')}
</div>

<div class="tbl-container">
  <div class="tbl-toolbar">
    <div class="tbl-toolbar-left">
      <div class="tbl-search">
        <span>🔍</span>
        <input placeholder="Search by student or subject..." value="${gFilter}" oninput="gFilter=this.value;refreshDash()">
      </div>
    </div>
  </div>
  <div style="overflow-x:auto"><table>
    <thead><tr><th>Student</th><th>Subject</th><th>Score</th><th>Grade</th><th>Term</th><th>Actions</th></tr></thead>
    <tbody>
      ${filtered.map(g => {
        const st = DB.data.students.find(s => s.id === g.studentId);
        return `
        <tr>
          <td>
            <div class="tbl-user">
              <div class="tbl-avatar" style="background:${avatarColor(st?.name||'')}">${ini(st?.name||'??')}</div>
              <div class="tbl-user-info"><h4>${st?.name||'Unknown'}</h4></div>
            </div>
          </td>
          <td>${g.subject}</td>
          <td style="font-weight:700;color:${scoreColor(g.score)}">${g.score}%</td>
          <td><span class="badge ${g.score>=70?'badge-success':g.score>=50?'badge-info':g.score>=40?'badge-warning':'badge-danger'}">${g.grade}</span></td>
          <td style="font-size:0.8rem;color:var(--gray-500)">${g.term}</td>
          <td>
            <div class="tbl-actions">
              <button onclick="openGradeForm(${g.id})">✏️</button>
              <button class="del" onclick="delGrade(${g.id})">🗑️</button>
            </div>
          </td>
        </tr>`;}).join('')}
    </tbody>
  </table></div>
</div>`;
}

function openGradeForm(id) {
  const g    = id ? DB.data.grades.find(x => x.id === id) : null;
  const subs = [...new Set(DB.data.teachers.map(t => t.subject))];
  openModal(g ? 'Edit Grade' : 'Add Grade', `
<form onsubmit="saveGrade(event,${id||'null'})">
  <div class="form-row">
    <div class="form-group"><label>Student *</label>
      <select id="gf_stu" required>
        ${DB.data.students.map(s => `<option value="${s.id}" ${g?.studentId===s.id?'selected':''}>${s.name}</option>`).join('')}
      </select>
    </div>
    <div class="form-group"><label>Subject *</label>
      <select id="gf_sub" required onchange="autoLetter()">
        ${subs.map(s => `<option value="${s}" ${g?.subject===s?'selected':''}>${s}</option>`).join('')}
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group"><label>Score (0–100) *</label><input type="number" id="gf_score" min="0" max="100" value="${g?.score||''}" oninput="autoLetter()" required></div>
    <div class="form-group"><label>WAEC Grade (auto)</label><input id="gf_letter" value="${g?.grade||''}" readonly style="background:var(--gray-50)"></div>
  </div>
  <div class="form-group"><label>Term</label>
    <select id="gf_term">
      ${['1st Term','2nd Term','3rd Term'].map(t => `<option value="${t}" ${g?.term===t?'selected':''}>${t}</option>`).join('')}
    </select>
  </div>
  <div class="modal-actions">
    <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    <button type="submit" class="btn btn-primary">${g?'Update':'Save Grade'}</button>
  </div>
</form>`);
}

/* Auto-fill WAEC grade label when score changes */
function autoLetter() {
  const s  = +$('gf_score')?.value || 0;
  const el = $('gf_letter');
  if (el) el.value = letterGrade(s);
}

function saveGrade(e, id) {
  e.preventDefault();
  const d = {
    studentId: +$('gf_stu').value, subject: $('gf_sub').value,
    score: +$('gf_score').value, grade: $('gf_letter').value, term: $('gf_term').value,
  };
  if (id) {
    const i = DB.data.grades.findIndex(g => g.id === id);
    if (i !== -1) DB.data.grades[i] = { ...DB.data.grades[i], ...d };
    toast('success', 'Grade updated.');
  } else {
    d.id = DB.nextId(DB.data.grades);
    DB.data.grades.push(d);
    toast('success', 'Grade saved.');
  }
  DB.save(); closeModal(); refreshDash();
}

function delGrade(id) {
  showConfirm('Delete Grade', 'Remove this grade record?', () => {
    DB.data.grades = DB.data.grades.filter(g => g.id !== id);
    DB.save(); toast('success', 'Grade deleted.'); refreshDash();
  });
}


/* =============================================
   TIMETABLE MODULE
   ============================================= */
function dashSchedule() {
  const days = ['mon','tue','wed','thu','fri'];
  const dayLabels = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
  return `
<div class="page-title"><h1>Weekly Timetable</h1><p>School timetable — SS1 Science</p></div>
<div style="overflow-x:auto">
  <div class="sched-grid">
    <div class="sched-head">Time</div>
    ${dayLabels.map(d => `<div class="sched-head">${d}</div>`).join('')}
    ${DB.data.schedule.map(s => `
      <div class="sched-time">${s.time}</div>
      ${days.map(d => {
        const c = s[d];
        if (!c || c.sub === 'Break' || c.sub === 'Lunch') {
          return `<div class="sched-cell" style="background:var(--gray-50);display:flex;align-items:center;justify-content:center;color:var(--gray-400);font-size:0.73rem;font-weight:500">${c?.sub||''}</div>`;
        }
        return `<div class="sched-cell"><div class="sched-class"><h4>${c.sub}</h4><p>${c.tch} • Rm ${c.rm}</p></div></div>`;
      }).join('')}`).join('')}
  </div>
</div>`;
}


/* =============================================
   SETTINGS MODULE
   ============================================= */
function dashSettings() {
  return `
<div class="page-title"><h1>Settings</h1><p>Manage your account and data</p></div>
<div class="settings-layout">

  <!-- Settings nav tabs -->
  <div class="settings-nav">
    <a href="#" class="settings-link ${settingsTab==='profile'?'active':''}" onclick="event.preventDefault();settingsTab='profile';refreshDash()">👤 Profile</a>
    <a href="#" class="settings-link ${settingsTab==='data'?'active':''}"    onclick="event.preventDefault();settingsTab='data';refreshDash()">💾 Data</a>
    <a href="#" class="settings-link ${settingsTab==='help'?'active':''}"    onclick="event.preventDefault();settingsTab='help';refreshDash()">❓ Help</a>
  </div>

  <div>
    ${settingsTab === 'profile' ? `
    <div class="settings-card">
      <div class="settings-card-header"><h3>My Profile</h3><p>Update your account details</p></div>
      <div class="settings-card-body">
        <div class="profile-card">
          <div class="profile-avatar" style="background:${avatarColor(user.name)}">${ini(user.name)}</div>
          <div class="profile-info"><h2>${user.name}</h2><p>${user.email} • ${user.role}</p></div>
        </div>
        <form onsubmit="saveProfile(event)">
          <div class="form-row">
            <div class="form-group"><label>Full Name</label><input id="set_name" value="${user.name}"></div>
            <div class="form-group"><label>Email</label><input type="email" id="set_email" value="${user.email}"></div>
          </div>
          <div class="form-group"><label>New Password (leave blank to keep current)</label><input type="password" id="set_pw" placeholder="••••••••"></div>
          <div class="modal-actions"><button type="submit" class="btn btn-primary">Save Changes</button></div>
        </form>
      </div>
    </div>` : settingsTab === 'data' ? `
    <div class="settings-card">
      <div class="settings-card-header"><h3>Data Management</h3><p>Export or reset school data</p></div>
      <div class="settings-card-body">
        <div class="settings-row">
          <div><label>Export All Data</label><span style="display:block;font-size:0.78rem;color:var(--gray-500)">Download complete school data as JSON</span></div>
          <button class="btn btn-ghost btn-sm" onclick="exportData()">📥 Export</button>
        </div>
        <div class="settings-row">
          <div>
            <label style="color:var(--danger)">Reset to Default Data</label>
            <span style="display:block;font-size:0.78rem;color:var(--danger)">⚠️ Wipes all local changes. Use after editing VS Code data.</span>
          </div>
          <button class="btn btn-danger btn-sm" onclick="DB.hardReset()">🔄 Reset</button>
        </div>
      </div>
    </div>` : `
    <div class="settings-card">
      <div class="settings-card-header"><h3>Developer Help</h3><p>How to add students/teachers from VS Code</p></div>
      <div class="settings-card-body" style="font-size:0.86rem;color:var(--gray-600);line-height:1.9">
        <p><strong>1.</strong> Open <code>app.js</code> in VS Code.</p>
        <p><strong>2.</strong> Find the <code>users: [...]</code> array and add the person's login entry.</p>
        <p><strong>3.</strong> Also add them to <code>students: [...]</code> or <code>teachers: [...]</code> as needed.</p>
        <p><strong>4.</strong> Save the file, then open the browser Console (F12) and run:</p>
        <div style="background:var(--gray-900);color:#2d9e5f;padding:12px 16px;border-radius:8px;font-family:monospace;margin:12px 0">DB.hardReset()</div>
        <p>This clears old localStorage so your new data loads fresh. You only need to do this once per VS Code edit.</p>
        <p style="margin-top:12px"><strong>Tip:</strong> You can also click the <em>Reset</em> button in the Data tab above.</p>
      </div>
    </div>`}
  </div>
</div>`;
}

function saveProfile(e) {
  e.preventDefault();
  user.name  = $('set_name').value;
  user.email = $('set_email').value;
  const pw   = $('set_pw').value;
  if (pw) user.password = pw;
  const ui = DB.data.users.findIndex(u => u.id === user.id);
  if (ui !== -1) DB.data.users[ui] = user;
  sessionStorage.setItem('greenfieldUser', JSON.stringify(user));
  DB.save();
  toast('success', 'Profile updated successfully.');
  refreshDash();
}

function exportData() {
  const blob = new Blob([JSON.stringify(DB.data, null, 2)], { type:'application/json' });
  const a    = document.createElement('a');
  a.href     = URL.createObjectURL(blob);
  a.download = 'greenfield-data.json';
  a.click();
  toast('success', 'Data exported successfully.');
}


/* =============================================
   COUNTER ANIMATION (public stats section)
   ============================================= */
function initCounters() {
  const sec = document.getElementById('statsSection');
  if (!sec) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('[data-count]').forEach(el => {
          const target = +el.dataset.count;
          let cur = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) { cur = target; clearInterval(timer); }
            el.textContent = cur.toLocaleString() + (target === 97 ? '%' : '+');
          }, 25);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  obs.observe(sec);
}


/* =============================================
   KEYBOARD SHORTCUTS & RESPONSIVE HELPERS
   ============================================= */
/* Close modal/confirm on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeConfirm(); }
});

/* Show/hide hamburger based on screen width */
function checkResp() {
  const h  = $('dashHamburger');
  const sb = $('dashSidebar');
  if (h)  h.style.display  = window.innerWidth <= 768 ? 'flex' : 'none';
  if (sb && window.innerWidth > 768) sb.classList.remove('mobile-open');
}
window.addEventListener('resize', checkResp);
setTimeout(checkResp, 200);