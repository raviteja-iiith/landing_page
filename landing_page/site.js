const nav=document.getElementById('nav');
const ham=document.getElementById('ham');
const mob=document.getElementById('mob');
if(ham&&mob){ham.addEventListener('click',()=>mob.classList.toggle('open'));mob.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>mob.classList.remove('open')))}
document.querySelectorAll('.faq-q').forEach(question=>question.addEventListener('click',()=>{const item=question.parentElement;const wasOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(other=>other.classList.remove('open'));if(!wasOpen)item.classList.add('open')}));
document.querySelectorAll('[data-contact-form]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();form.style.display='none';const success=form.parentElement.querySelector('.form-success');if(success)success.classList.add('show')}));
