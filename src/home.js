// JavaScript to dynamically load profiles with animations and connect buttons

document.addEventListener('DOMContentLoaded', () => {
  const studentsList = document.getElementById('students-list');

  // Mock student data - 10 profiles
  const students = [
    { id: 1, name: 'Alice Johnson', year: '3rd Year', department: 'Computer Science', college: 'MIT Academy of Engineering', isHacker: true, interests: 'AI, Machine Learning', profilePic: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Bob Smith', year: '2nd Year', department: 'Electrical Engineering', college: 'MIT Academy of Engineering', isHacker: false, interests: 'Robotics, IoT', profilePic: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Carol Lee', year: '4th Year', department: 'Information Technology', college: 'MIT Academy of Engineering', isHacker: true, interests: 'Web Development, UI/UX', profilePic: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, name: 'David Kim', year: '1st Year', department: 'Mechanical Engineering', college: 'MIT Academy of Engineering', isHacker: false, interests: 'CAD, 3D Printing', profilePic: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: 5, name: 'Eva Green', year: '3rd Year', department: 'Computer Science', college: 'MIT Academy of Engineering', isHacker: true, interests: 'Cybersecurity, Networking', profilePic: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 6, name: 'Frank White', year: '2nd Year', department: 'Electrical Engineering', college: 'MIT Academy of Engineering', isHacker: false, interests: 'Embedded Systems, IoT', profilePic: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { id: 7, name: 'Grace Park', year: '4th Year', department: 'Information Technology', college: 'MIT Academy of Engineering', isHacker: true, interests: 'Cloud Computing, DevOps', profilePic: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: 8, name: 'Henry Lee', year: '1st Year', department: 'Mechanical Engineering', college: 'MIT Academy of Engineering', isHacker: false, interests: 'Robotics, Automation', profilePic: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { id: 9, name: 'Isabella Brown', year: '3rd Year', department: 'Computer Science', college: 'MIT Academy of Engineering', isHacker: true, interests: 'AI, Data Science', profilePic: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { id: 10, name: 'Jack Wilson', year: '2nd Year', department: 'Electrical Engineering', college: 'MIT Academy of Engineering', isHacker: false, interests: 'Signal Processing, IoT', profilePic: 'https://randomuser.me/api/portraits/men/10.jpg' },
  ];

  function createStudentCard(student) {
    const card = document.createElement('div');
    card.className = 'profile-card bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 cursor-pointer hover:shadow-lg transition w-full';

    card.innerHTML = `
      <div class="flex items-center space-x-4 w-full">
        <img src="${student.profilePic}" alt="${student.name}" class="profile-avatar h-24 w-24 rounded-full object-cover" />
        <div class="flex flex-col w-full">
          <div class="flex items-center justify-between w-full">
            <h3 class="profile-name text-lg font-semibold">${student.name}</h3>
            <span class="text-sm font-semibold text-green-600 flex items-center space-x-1">${student.isHacker ? 'Coding 🥷 Hacker' : ''}</span>
          </div>
          <p class="profile-major text-sm">${student.year} - ${student.department}</p>
          <p class="text-sm italic">College: ${student.college || 'Unknown'}</p>
          <p class="text-sm italic">Interests: ${student.interests}</p>
        </div>
        <div class="profile-actions">
          <button class="connect-btn profile-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition self-start">Connect+</button>
        </div>
      </div>
    `;

    card.querySelector('.connect-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      const btn = e.target;
      if (btn.textContent === 'Connect+') {
        btn.textContent = 'Pending';
        btn.classList.remove('bg-green-500', 'hover:bg-green-600');
        btn.classList.add('bg-yellow-400', 'hover:bg-yellow-500');
      } else {
        btn.textContent = 'Connect+';
        btn.classList.remove('bg-yellow-400', 'hover:bg-yellow-500');
        btn.classList.add('bg-green-500', 'hover:bg-green-600');
      }
      alert(`Connection request sent to ${student.name}`);
      // Future: Store connection request in localStorage or state
    });

    card.addEventListener('click', () => {
      alert(`Clicked on ${student.name}. Profile page to be implemented.`);
      // Future: Navigate to student profile page
    });

    return card;
  }

  // Load profiles with fade-in animation
  students.forEach((student, index) => {
    const card = createStudentCard(student);
    card.style.animation = `fadeInUp 0.5s ease forwards`;
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.opacity = 0;
    studentsList.appendChild(card);
  });
});
