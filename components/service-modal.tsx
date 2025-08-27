"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ServiceModalProps {
  title: string
  subtitle: string
  icon: string
  triggerContent: React.ReactNode
  children: React.ReactNode
}

export function ServiceModal({ title, subtitle, icon, triggerContent, children }: ServiceModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-900 to-black border border-slate-700">
        <DialogHeader className="pb-6 border-b border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{icon}</div>
            <div>
              <DialogTitle className="text-2xl font-bold text-white mb-2">{title}</DialogTitle>
              <p className="text-gray-400 text-lg">{subtitle}</p>
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="py-6">{children}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
