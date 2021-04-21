from django.shortcuts import render

# Create your views here.

def main(request, *args, **kwargs):
    template = 'frontend/index.html'
    return render(request, template, {})
