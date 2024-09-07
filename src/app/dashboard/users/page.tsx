"use client"
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const UserPage = () => {
    const url = 'http://localhost:3000';
    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([]);
    async function fetchUsers() {
        const response = await fetch(`${url}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if(response.ok) {
            const data = await response.json();
            console.log(data);
            setUsers(data);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])
  return (
    <div className = {`min-h-[50vh] flex flex-col place-items-center`}>
        <Table className = "">
            <TableCaption>Manage Users</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                    {users.map((user: any) => {
                        return <TableRow key = {user?.id}>
                            <TableCell>{user?.name}</TableCell>
                            <TableCell>{user?.email}</TableCell>
                            <TableCell>{user?.phone}</TableCell>
                            <TableCell>
                                <button className = "bg-red-500 text-white rounded-md px-2 py-1">Delete</button>
                            </TableCell>
                        </TableRow>
                    })}
            </TableBody>
        </Table>
    </div>
  )
}

export default UserPage