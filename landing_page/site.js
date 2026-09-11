const nav=document.getElementById('nav');
const ham=document.getElementById('ham');
const mob=document.getElementById('mob');
if(ham&&mob){ham.addEventListener('click',()=>mob.classList.toggle('open'));mob.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>mob.classList.remove('open')))}
document.querySelectorAll('.faq-q').forEach(question=>question.addEventListener('click',()=>{const item=question.parentElement;const wasOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(other=>other.classList.remove('open'));if(!wasOpen)item.classList.add('open')}));
const googleFormEndpoint='https://docs.google.com/forms/d/e/1FAIpQLSdhX1bXd_vqzQQpa3FDRJOlxHAs1QT9sujd34M1pbz4j-kYZg/formResponse';
document.querySelectorAll('[data-contact-form]').forEach(form=>form.addEventListener('submit',async event=>{
	event.preventDefault();
	const data=new URLSearchParams();
	data.append('entry.92294288',form.elements.name.value);
	data.append('entry.828481956',form.elements.email.value);
	data.append('entry.1976110693',form.elements.school.value);
	data.append('entry.1682549231',form.elements.message.value);
	try{await fetch(googleFormEndpoint,{method:'POST',mode:'no-cors',body:data});}catch(error){console.error('Google Form submission failed',error)}
	form.style.display='none';
	const success=form.parentElement.querySelector('.form-success');
	if(success)success.classList.add('show');
}));
