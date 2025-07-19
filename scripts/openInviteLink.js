document.addEventListener('DOMContentLoaded', () => {
  const inviteButton = document.getElementById('inviteButton');

  if (inviteButton) {
    inviteButton.addEventListener('click', () => {
      const inviteUrl = 'https://discord.com/oauth2/authorize?client_id=1395776459854840008';
      window.open(inviteUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
