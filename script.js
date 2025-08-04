
tailwind.config = {
    theme: {
        extend: {
            colors: {
                greenly: {
                    50: '#f0f9f0',
                    100: '#daf1da',
                    200: '#b8e6b8',
                    300: '#89d489',
                    400: '#58ba58',
                    500: '#389e38',
                    600: '#2a7e2a',
                    700: '#236323',
                    800: '#1e4f1e',
                    900: '#183f18',
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            }
        }
    }
}
    
     
     // Simple script for smooth scrolling
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
         });
     });
     
     // Mobile menu toggle functionality would go here
     // This is just a placeholder for the real implementation
     const mobileMenuButton = document.querySelector('.md\\:hidden');
     mobileMenuButton.addEventListener('click', function() {
         alert('Menu mobile seria aberto aqui na implementação real');
     });
