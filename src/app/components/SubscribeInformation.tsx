"use client"

import React, { useState } from 'react'
import { DialogDemo } from './SubscribeComponent'

export default function SubscribeInformation() {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

  return (
    <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
        <DialogDemo open={open} onOpenChange={setOpen} />
        <p className="text-center text-white font-semibold mb-2">
        🫶 Thanks for reading!
        </p>
        <p className="text-center text-gray-400">
        <button onClick={handleOpen} className=" underline cursor-pointer text-gray-300">Subscribe</button> for more posts like this.
        </p>
    </div>
  )
}
