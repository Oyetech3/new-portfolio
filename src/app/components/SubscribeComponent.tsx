'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from 'react'
import { subscriptionSchema } from '@/lib/validation';
import type { ApiResponse } from '@/types';
import { motion } from "framer-motion"

interface openType {
    open: boolean,
    onOpenChange: (open: boolean) => void
}
  

export function DialogDemo({open, onOpenChange}: openType) {

  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const validation = subscriptionSchema.safeParse({ email });
      if (!validation.success) {
        setMessage({
          type: 'error',
          text: validation.error.issues[0].message,
        });
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data: ApiResponse = await response.json();

      setMessage({
        type: data.success ? 'success' : 'error',
        text: data.message,
      });

      if (data.success) {
        setEmail('');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if(message) {
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        
        <DialogContent className="sm:max-w-[425px] p-0 border-none">
            <DialogTitle className="hidden">Subscibe</DialogTitle>
            <div className="card gradient-purple p-6 border-none">
                <h3 className="text-xl font-semibold mb-4 text-white">📧 Weekly Newsletter</h3>
                <p className="text-white/90 mb-4">
                Get the latest tutorials and development tips delivered to your inbox every Monday.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                        required
                    />
                    <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#f04770] hover:bg-[#f04770] text-white py-3 rounded font-bold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed "
                    >
                        {isLoading ? (
                        <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Subscribing...
                        </div>
                    ) : (
                        'Subscribe Free'
                    )}
                    </button>
                </form>
                <p className="text-xs text-white/70 mt-2">Join {/*<span>2,500+</span>*/} developers</p>
                    {message && (
                    <motion.div className={`mt-4 p-3 rounded-md ${
                        message.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }}
                    >
                        {message.text}
                    </motion.div>
                )}
            </div>
          
        </DialogContent>
    </Dialog>
  )
}
