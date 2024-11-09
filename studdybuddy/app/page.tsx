"use client"; 
import { useState } from 'react';
import axios from 'axios';

interface FormData {
    attendanceRate: string;
    previousGrade: string;
    extracurricularActivities: string;
    studyHoursPerDay: string;
    parentalSupport: string;
    gender: string;
}

export default function Home() {
    const [formData, setFormData] = useState<FormData>({
        attendanceRate: '',
        previousGrade: '',
        extracurricularActivities: '',
        studyHoursPerDay: '',
        parentalSupport: '',
        gender: '',
    });
    const [prediction, setPrediction] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/predict', formData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div>
            <h1>Student Performance Prediction</h1>
            <form onSubmit={handleSubmit}>
                <input name="attendanceRate" placeholder="Attendance Rate" onChange={handleChange} />
                <input name="previousGrade" placeholder="Previous Grade" onChange={handleChange} />
                <input name="extracurricularActivities" placeholder="Extracurricular Activities" onChange={handleChange} />
                <input name="studyHoursPerDay" placeholder="Study Hours per Day" onChange={handleChange} />
                <select name="parentalSupport" onChange={handleChange}>
                    <option value="">Parental Support</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select name="gender" onChange={handleChange}>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button type="submit">Get Prediction</button>
            </form>
            {prediction && <p>Prediction: {prediction}</p>}
        </div>
    );
}
