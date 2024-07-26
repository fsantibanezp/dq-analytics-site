from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings

def index(request):
    return render(request, 'main/index.html')

def send_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        
        full_message = f"Email: {email}\nPhone: {phone}\n\nMessage:\n{message}"
        
        send_mail(
            'Contact Form Submission',
            full_message,
            settings.DEFAULT_FROM_EMAIL,
            ['fsantibanez@dataqu.cl'],
        )
        
        return redirect('index')
