'use client';

import { Form, Input, Textarea, Button } from './styles';

export default function ContactForm() {
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                alert('Form submitted!');
            }}
        >
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit">Send Message</Button>
        </Form>
    );
}
