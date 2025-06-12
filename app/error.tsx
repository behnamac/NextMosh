'use client'
import React from 'react'

interface ErrorPageProps {
  error: Error
  reset: () => void
}


const ErrorPage = ({error,reset}:ErrorPageProps) => {
  return (
    <div>unexped error happend <button  className="rounded bg-red-300" onClick={()=>reset()}>reset</button></div>
  )
}

export default ErrorPage