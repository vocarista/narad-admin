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
  

const ReportPage = () => {
    const url = 'http://localhost:3000';
    const token = localStorage.getItem('token');
    const [reports, setReports] = useState([]);
    async function fetchReports() {
        const response = await fetch(`${url}/reports`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if(response.ok) {
            const data = await response.json();
            console.log(data);
            setReports(data);
        }
    }

    useEffect(() => {
        fetchReports();
    }, [])
  return (
    <div className = {`min-h-[50vh] flex flex-col place-items-center`}>
        <Table className = "">
            <TableCaption>Manage Reports</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Latitude</TableHead>
                    <TableHead>Longitude</TableHead>
                    <TableHead>Upvotes</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                    {reports.map((report: any) => {
                        return <TableRow key = {report?.report_id}>
                            <TableCell>{report?.title}</TableCell>
                            <TableCell>{report?.description}</TableCell>
                            <TableCell>{report?.created_at}</TableCell>
                            <TableCell>{report?.incident_severity}</TableCell>
                            <TableCell>{report?.incident_type}</TableCell>
                            <TableCell>{report?.latitude}</TableCell>
                            <TableCell>{report?.longitude}</TableCell>
                            <TableCell>{report?.upvotes}</TableCell>
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

export default ReportPage;