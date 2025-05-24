// JavaScript for profile creation page

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('profile-form');
  const summarySection = document.getElementById('profile-summary');
  const summaryContent = document.getElementById('summary-content');

  // Load profile from localStorage if exists
  const savedProfile = localStorage.getItem('peerconnectProfile');
  if (savedProfile) {
    displayProfile(JSON.parse(savedProfile));
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const profileData = {
      name: form.name.value.trim(),
      collegeId: form.collegeId.value.trim(),
      year: form.year.value,
      department: form.department.value.trim(),
      profilePic: form.profilePic.value.trim(),
      skills: form.skills.value.trim(),
      projects: form.projects.value.trim(),
    };

    // Save to localStorage
    localStorage.setItem('peerconnectProfile', JSON.stringify(profileData));

    displayProfile(profileData);
  });

  function displayProfile(profile) {
    summaryContent.innerHTML = `
      <p><strong>Name:</strong> ${profile.name}</p>
      <p><strong>College ID:</strong> ${profile.collegeId}</p>
      <p><strong>Year:</strong> ${profile.year}</p>
      <p><strong>Department:</strong> ${profile.department}</p>
      ${profile.profilePic ? `<img src="${profile.profilePic}" alt="Profile Picture" class="h-24 w-24 rounded-full mb-4" />` : ''}
      <p><strong>Skills / Interests:</strong> ${profile.skills}</p>
      <p><strong>Project Areas:</strong> ${profile.projects}</p>
    `;
    summarySection.classList.remove('hidden');
  }
});
