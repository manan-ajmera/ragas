// filepath: c:\Users\prakh\Desktop\All Folders\Intern-1\my-nextjs-app\types\index.ts

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    description: string;
}

export interface Testimonial {
    id: string;
    name: string;
    feedback: string;
    rating: number;
}

export interface BlogPost {
    slug: string;
    title: string;
    content: string;
    date: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface NewsletterSubscription {
    email: string;
}