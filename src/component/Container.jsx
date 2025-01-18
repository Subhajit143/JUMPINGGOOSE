import React from 'react'
import { cn } from '../ui/cn.js'

export const Container = ({children,className}) => {
  return (
    <div className={cn(' px-14 mx-auto  ',className)}>{children}</div>
  )
}

