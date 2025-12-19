'use client';

import { Container, Title, Subtitle, IconsWrapper, IconLink } from './styles';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <Container>
            <Title>Contact </Title>
            <Subtitle>Feel free to reach out via social media!</Subtitle>

            <IconsWrapper>
                <IconLink
                    href="https://www.linkedin.com/in/ljau"
                    target="_blank"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </IconLink>

                <IconLink href="mailto:ljau07@gmail.com" target="_blank" aria-label="Email">
                    <FaEnvelope />
                </IconLink>

                <IconLink
                    href="https://wa.me/523121203328"
                    target="_blank"
                    aria-label="WhatsApp"
                >
                    <FaWhatsapp />
                </IconLink>
            </IconsWrapper>
        </Container>
    );
}

