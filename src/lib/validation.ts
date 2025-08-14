import { z } from 'zod';

export const subscriptionSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export const unsubscribeSchema = z.object({
  token: z.string().min(1, 'Invalid unsubscribe token'),
});