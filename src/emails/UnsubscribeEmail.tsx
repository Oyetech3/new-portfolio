import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Heading,
    Text,
  } from '@react-email/components';
  import type { EmailTemplateProps } from '@/types';
  
  export default function UnsubscribeEmail({ email }: EmailTemplateProps) {
    return (
      <Html>
        <Head />
        <Preview>You've been unsubscribed</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={section}>
              <Heading style={h1}>Unsubscribed Successfully</Heading>
              
              <Text style={text}>Hi,</Text>
              
              <Text style={text}>
                You have been successfully unsubscribed from our newsletter.
              </Text>
              
              <Text style={text}>
                Email address: <strong>{email}</strong>
              </Text>
              
              <Text style={text}>
                We're sorry to see you go! If you change your mind, you can always 
                subscribe again from our website.
              </Text>
              
              <Text style={text}>
                Thank you for being part of our community.
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