// script.js — interactions for portfolio
document.addEventListener('DOMContentLoaded', function(){
  // theme toggle (simple)
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('light');
    themeBtn.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';
  });

  // mobile menu
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('nav');
  mobileBtn.addEventListener('click', ()=>{nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'; nav.style.flexDirection='column'});

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });

  // download cv placeholder
  const download = document.getElementById('downloadCv');
  if(download){ download.addEventListener('click', (e)=>{ e.preventDefault(); alert('Replace this with your CV file link or generate a PDF download.'); }); }

  // help me -> open email
  const helpBtn = document.getElementById('helpMe');
  if(helpBtn){ helpBtn.addEventListener('click', (e)=>{ e.preventDefault(); window.location.href = 'mailto:naimimia1236@gmail.com?subject=Help%20Request&body=Hi%20Nayem,' }); }
});
