
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= window.innerHeight - 35) nav.className = ''; else nav.className = 'scroll';
};