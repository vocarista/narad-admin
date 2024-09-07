"use client"
import React from 'react';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"  
import logo from '../logo.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';


const loginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { toast } = useToast();
    const url = localStorage.getItem('url');
    async function loginHandler() {
        const response = await fetch(`http://localhost:3000/admin/login`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            router.push('/admin/dashboard');
            toast({
                title: 'Login Successful',
                description: 'You have been logged in',
            })
            router.push('/dashboard');
        }
    }

    return <div className = "flex flex-col w-screen h-screen place-items-center pt-10 justify-start" >
        <Image src = {logo} height={150} alt='Logo' className = "pb-10"/>
        <Card className='sm:w-[80vw] lg:w-[60vw] bg-zinc-950 flex flex-col place-items-center' >
        <CardTitle className = "text-3xl text-white my-5" >Admin Login</CardTitle>
          <CardContent className = "flex flex-col gap-2 mt-8">
            <Label htmlFor='email' className='text-white' >Email</Label>
            <Input className = "min-w-[300px] text-white" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Label htmlFor='password' className='text-white'>Password</Label>
            <Input className = "min-w-[300px] text-white" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </CardContent>
          <CardFooter className = "flex flex-col gap-2 mt-8">
            <Button className = "w-full" onClick={loginHandler} >Login</Button>
            <Button className = "w-full" onClick={() => console.log('Forgot Password')} >Forgot Password</Button>
          </CardFooter>
        </Card>
    </div>
}

export default loginPage;