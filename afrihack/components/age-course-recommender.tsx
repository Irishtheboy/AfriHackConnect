"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock dataset of courses
const courses = [
  { name: "Introduction to Computer Science", ageRange: [18, 25], location: "MIT, USA" },
  { name: "Advanced Mathematics", ageRange: [20, 30], location: "University of Cambridge, UK" },
  { name: "Business Administration", ageRange: [22, 35], location: "INSEAD, France" },
  { name: "Environmental Science", ageRange: [18, 40], location: "University of Tokyo, Japan" },
  { name: "Digital Marketing", ageRange: [25, 45], location: "Singapore Management University, Singapore" },
  { name: "Artificial Intelligence", ageRange: [22, 35], location: "ETH Zurich, Switzerland" },
  { name: "Creative Writing", ageRange: [20, 60], location: "University of Iowa, USA" },
  { name: "Sustainable Energy", ageRange: [25, 50], location: "Technical University of Denmark, Denmark" },
  { name: "Data Science", ageRange: [22, 40], location: "University of Melbourne, Australia" },
  { name: "International Relations", ageRange: [20, 35], location: "Sciences Po, France" },
]

export function AgeCourseRecommender() {
  const [age, setAge] = useState('')
  const [recommendations, setRecommendations] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const userAge = parseInt(age)
    const suitableCourses = courses.filter(
      course => userAge >= course.ageRange[0] && userAge <= course.ageRange[1]
    )
    setRecommendations(suitableCourses)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>College Course Recommender</CardTitle>
            <CardDescription>Enter your age to find suitable courses around the world</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Your Age
                </label>
                <Input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  min="14"
                  max="25"
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full">
                Find Courses
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            {recommendations.length > 0 ? (
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Recommended Courses:</h3>
                <ul className="mt-2 divide-y divide-gray-200">
                  {recommendations.map((course, index) => (
                    <li key={index} className="py-4">
                      <p className="text-sm font-medium text-gray-900">{course.name}</p>
                      <p className="text-sm text-gray-500">{course.location}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Enter your age to see course recommendations.</p>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}