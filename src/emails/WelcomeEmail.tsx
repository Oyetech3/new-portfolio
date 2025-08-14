import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Heading,
    Text,
    Button,
    Hr,
  } from '@react-email/components';
  import type { EmailTemplateProps } from '@/types';
  
  interface WelcomeEmailProps extends EmailTemplateProps {
    unsubscribeUrl: string;
  }
  
  export default function WelcomeEmail({ email, unsubscribeUrl }: WelcomeEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>Welcome to our newsletter!</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={section}>
              <Heading style={h1}>Welcome to Our Newsletter! 🎉</Heading>
              
              <Text style={text}>Hi there,</Text>
              
              <Text style={text}>
                Thank you for subscribing to our newsletter with the email address: <strong>{email}</strong>
              </Text>
              
              <Text style={text}>
                You'll receive updates about our latest content, product updates, and exclusive insights 
                directly in your inbox. We promise to keep it valuable and not spam you!
              </Text>
              
              <Section style={buttonContainer}>
                <Button style={button} href={process.env.NEXT_PUBLIC_BASE_URL}>
                  Visit Our Website
                </Button>
              </Section>
              
              <Hr style={hr} />
              
              <Text style={footer}>
                Don't want to receive these emails? 
                <a href={unsubscribeUrl} style={link}> Unsubscribe</a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
  
  const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };
  
  const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
  };
  
  const section = { padding: '0 48px' };
  
  const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '40px',
    margin: '0 0 20px',
  };
  
  const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0 0 16px',
  };
  
  const buttonContainer = {
    textAlign: 'center' as const,
    margin: '32px 0',
  };
  
  const button = {
    backgroundColor: '#007ee6',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '12px 24px',
  };
  
  const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
  };
  
  const link = {
    color: '#007ee6',
    textDecoration: 'underline',
  };