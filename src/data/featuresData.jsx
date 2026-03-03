import React from 'react';
import {
    FaUserShield, FaUserGraduate, FaMoneyBillWave, FaCalendarAlt, FaBook, FaIdBadge, FaBuilding, FaFolderOpen, FaDesktop,
    FaClipboardCheck, FaCheckSquare, FaRobot, FaTasks, FaChalkboardTeacher, FaChartLine, FaTrophy, FaBookOpen, FaGamepad,
    FaBullhorn, FaChartPie, FaMobileAlt, FaUserFriends, FaCalendarPlus, FaPoll, FaComments, FaBell, FaEnvelope
} from 'react-icons/fa';

import managementImg from '../assets/manage_ops_how_it_works.png';
import learningImg from '../assets/studentlogin.png';
import communicationImg from '../assets/communities_new.png';

// Management — generated images
import accessControlImg from '../assets/feature_access_control.png';
import studentMgmtImg from '../assets/feature_student_records.png';
import financeImg from '../assets/feature_finance.png';
import timetableImg from '../assets/feature_timetable.png';
import staffPayrollImg from '../assets/feature_staff_payroll.png';
import libraryImg from '../assets/feature_library.png';
import multiCampusImg from '../assets/feature_multi_campus.png';

// Learning — generated images
import assessmentImg from '../assets/feature_assessments.png';
import attendanceImg from '../assets/feature_attendance.png';
import courseImg from '../assets/feature_course_mgmt.png';
import assignmentImg from '../assets/feature_assignment_workflow.png';
import aiImg from '../assets/feature_ai_learning.png';
import interactiveImg from '../assets/feature_interactive_tools.png';
import performanceImg from '../assets/feature_performance_insights.png';

// Communication — generated images
import hubImg from '../assets/feature_communication_hub.png';
import parentPortalImg from '../assets/feature_parent_portal.png';
import notifImg from '../assets/feature_notifications.png';
import eventImg from '../assets/feature_event_management.png';
import feedbackImg from '../assets/feature_feedback_surveys.png';
import reportingImg from '../assets/feature_advanced_reporting.png';
import cloudImg from '../assets/feature_cloud_access.png';


export const featureCategories = {
    Management: {
        title: "Management",
        description: "Streamline operations and maintain full institutional control.",
        image: managementImg,
        items: [
            {
                id: 'm1', slug: 'user-access-control', name: "User & Access Control", icon: <FaUserShield />,
                shortDesc: "Control who can access what in your institution with secure, role-based permissions.",
                longDesc: "This module lets administrators decide exactly who can see and do what in the system. You can set different access levels for principals, teachers, staff, and students. This keeps your data safe and ensures everyone only sees information relevant to their role.",
                detailedBenefits: [
                    { title: "User Access", desc: "Set individual permissions for staff, teachers, and students." },
                    { title: "Activity History", desc: "Keep track of all system changes with a clear audit log." },
                    { title: "Extra Security", desc: "Protect sensitive info with two-step login verification." },
                    { title: "Onboarding", desc: "Easily add or remove user access when staff change roles." },
                    { title: "Data Safety", desc: "Keep all school records encrypted and secure 24/7." }
                ],
                image: accessControlImg
            },
            {
                id: 'm2', slug: 'student-records', name: "Student Records Management", icon: <FaUserGraduate />,
                shortDesc: "Store and manage all student information in one organised, easy-to-access place.",
                longDesc: "This module gives you a complete digital profile for every student. It stores personal details, academic results, attendance history, and important documents all in one place. Teachers and administrators can access the information they need quickly and easily.",
                detailedBenefits: [
                    { title: "Full Profiles", desc: "Access comprehensive records for every student instantly." },
                    { title: "Quick Reports", desc: "Generate transcripts and certificates with one click." },
                    { title: "Cloud Storage", desc: "Save all important documents in a safe online vault." },
                    { title: "Health Info", desc: "Manage medical and health records with private access." },
                    { title: "Simple Import", desc: "Move your old data into the new system with ease." }
                ],
                image: studentMgmtImg
            },
            {
                id: 'm3', slug: 'finance-management', name: "Fee & Finance Management", icon: <FaMoneyBillWave />,
                shortDesc: "Manage fee collection, payments, and financial reports simply and accurately.",
                longDesc: "This module handles all the financial tasks of your institution. You can collect fees online, generate payment receipts, manage scholarships, and produce financial reports without any manual calculations. It keeps your accounts clear and transparent.",
                detailedBenefits: [
                    { title: "Online Fees", desc: "Collect payments through various secure online channels." },
                    { title: "Fast Receipts", desc: "Send digital payment receipts to parents immediately." },
                    { title: "Fee Discounts", desc: "Apply scholarships and fee waivers in seconds." },
                    { title: "Money Reports", desc: "View real-time financial summaries and balance sheets." },
                    { title: "Tax Ready", desc: "Export clean financial records for audits and tax filing." }
                ],
                image: financeImg
            },
            {
                id: 'm4', slug: 'timetable-scheduling', name: "Timetable & Scheduling", icon: <FaCalendarAlt />,
                shortDesc: "Create conflict-free class and exam timetables quickly for your whole institution.",
                longDesc: "This module makes it simple to plan and manage schedules for classes, exams, and rooms. It automatically checks for conflicts and ensures teachers and students have a clear, well-organised timetable. Any changes are instantly visible to everyone.",
                detailedBenefits: [
                    { title: "Smart Planning", desc: "Create perfect class schedules without any time clashes." },
                    { title: "Staff Rota", desc: "Manage teacher workloads and daily substitutions." },
                    { title: "Exam Dates", desc: "Plan exam slots and room bookings automatically." },
                    { title: "Live Updates", desc: "Notify teachers and students about schedule changes." },
                    { title: "Room Usage", desc: "Optimize how classrooms and labs are used every day." }
                ],
                image: timetableImg
            },
            {
                id: 'm5', slug: 'staff-payroll', name: "Staff & Payroll Management", icon: <FaIdBadge />,
                shortDesc: "Manage staff records, attendance, leaves, and salary payments from one place.",
                longDesc: "This module covers everything related to your staff. You can maintain employee records, track attendance and leaves, process salaries, and handle performance reviews all from a single dashboard. It saves time and reduces the chance of errors.",
                detailedBenefits: [
                    { title: "Auto Payslips", desc: "Calculate salaries and taxes automatically every month." },
                    { title: "Digital Files", desc: "Store all staff contracts and documents in one place." },
                    { title: "Leave Tracker", desc: "Approve or deny leave requests from your dashboard." },
                    { title: "Work Reviews", desc: "Conduct staff performance reviews and set clear goals." },
                    { title: "Staff Portal", desc: "Let employees download their own payslips anytime." }
                ],
                image: staffPayrollImg
            },
            {
                id: 'm6', slug: 'library-management', name: "Library Management", icon: <FaBook />,
                shortDesc: "Track books, manage lending, and keep your library resources organised digitally.",
                longDesc: "This module helps you manage your institution's library without paperwork. You can catalogue books, track who has borrowed what, send return reminders, and manage fines. Students and staff can also search for available books online.",
                detailedBenefits: [
                    { title: "Easy Catalog", desc: "Organize books by category, author, and ISBN details." },
                    { title: "Smart Lending", desc: "Track book issues and returns with barcode scanning." },
                    { title: "Return Alerts", desc: "Send automated reminders for overdue books." },
                    { title: "Digital Books", desc: "Manage e-books and online resources alongside physical ones." },
                    { title: "Stock Check", desc: "Run quick inventory checks to prevent resource loss." }
                ],
                image: libraryImg
            },
            {
                id: 'm7', slug: 'multi-campus', name: "Multi-Campus Management", icon: <FaBuilding />,
                shortDesc: "Manage all your institution's branches from a single central dashboard.",
                longDesc: "If your institution has multiple campuses or branches, this module brings everything together in one place. Administrators at the head office can monitor the performance of all branches, share policies, and ensure every campus follows the same standards.",
                detailedBenefits: [
                    { title: "Global View", desc: "Monitor all branches from a single central dashboard." },
                    { title: "Shared Rules", desc: "Publish curriculum and policies across all campuses." },
                    { title: "Data Sync", desc: "Keep records updated across all locations in real-time." },
                    { title: "Joint Reports", desc: "Get combined financial and academic reports instantly." },
                    { title: "Master Control", desc: "Manage branch access while keeping central authority." }
                ],
                image: multiCampusImg
            }
        ]
    },
    Learning: {
        title: "Learning",
        description: "Empower educators and enhance student performance.",
        image: learningImg,
        items: [
            {
                id: 'l1', slug: 'online-assessments', name: "Online Assessments", icon: <FaClipboardCheck />,
                shortDesc: "Conduct exams and quizzes online and get results automatically.",
                longDesc: "This module lets teachers create and conduct tests fully online. Students can take exams from anywhere, and results are calculated and shared automatically. Teachers can also build question banks and reuse them for future assessments.",
                detailedBenefits: [
                    { title: "Online Exams", desc: "Create and hold secure tests for students anywhere." },
                    { title: "Quick Grades", desc: "Calculate and share test results automatically." },
                    { title: "Question Bank", desc: "Build a library of questions for recurring exams." },
                    { title: "Score Charts", desc: "See clear performance reports for every assessment." },
                    { title: "Easy Passing", desc: "Issue digital certificates as soon as students pass." }
                ],
                image: assessmentImg
            },
            {
                id: 'l2', slug: 'attendance-tracking', name: "Attendance Tracking", icon: <FaCheckSquare />,
                shortDesc: "Record and track student and staff attendance accurately every day.",
                longDesc: "This module replaces paper attendance registers with a simple digital system. Teachers can mark attendance on their phones or computers, and parents receive automatic alerts if their child is absent. Administrators can view attendance reports for any class or period.",
                detailedBenefits: [
                    { title: "Phone Marking", desc: "Record student attendance quickly from any phone." },
                    { title: "Auto Scanners", desc: "Connect with biometric or ID card systems easily." },
                    { title: "Safe Alerts", desc: "Promptly tell parents if their child is not in class." },
                    { title: "Stay Charts", desc: "Track attendance trends to prevent student dropout." },
                    { title: "Easy Leave", desc: "Handle student leave requests through the portal." }
                ],
                image: attendanceImg
            },
            {
                id: 'l3', slug: 'course-management', name: "Course Management", icon: <FaBookOpen />,
                shortDesc: "Plan, organise, and deliver course content effectively to your students.",
                longDesc: "This module helps teachers plan their courses and share materials with students. You can upload notes, videos, and other resources, set a syllabus, and track how far you have covered the curriculum. Students can access everything they need from one place.",
                detailedBenefits: [
                    { title: "Easy Setup", desc: "Build courses with videos, notes, and task lists." },
                    { title: "Shared Vault", desc: "Keep all study materials in one easy-to-find spot." },
                    { title: "Syllabus Plan", desc: "Map out your teaching plan and track your progress." },
                    { title: "Smart Paths", desc: "Guide students through topics in a logical order." },
                    { title: "Teacher Sync", desc: "Let staff work together on the best course content." }
                ],
                image: courseImg
            },
            {
                id: 'l4', slug: 'assignment-workflow', name: "Assignment Workflow", icon: <FaTasks />,
                shortDesc: "Set, collect, and grade assignments online with ease.",
                longDesc: "This module makes the assignment process fully digital. Teachers can post assignments, students submit their work online, and teachers can review and grade everything in one place. Automatic reminders help students keep track of deadlines.",
                detailedBenefits: [
                    { title: "Online Tasks", desc: "Set and collect homework in any digital format." },
                    { title: "Original Work", desc: "Check for copied content with automated tools." },
                    { title: "Staff Feedback", desc: "Write notes and grades directly on student files." },
                    { title: "Task Alerts", desc: "Send auto-reminders for upcoming work deadlines." },
                    { title: "Auto Scoring", desc: "Move task grades into the main report cards automatically." }
                ],
                image: assignmentImg
            },
            {
                id: 'l5', slug: 'ai-learning', name: "AI Personalized Learning", icon: <FaRobot />,
                shortDesc: "Give every student a learning experience suited to their own pace and level.",
                longDesc: "This module uses artificial intelligence to understand how each student learns. It suggests the right lessons and resources based on their past performance, helping weaker students catch up and stronger students move ahead at their own pace.",
                detailedBenefits: [
                    { title: "Smart Help", desc: "Suggest lessons based on each student's results." },
                    { title: "Extra Practice", desc: "Find extra help for students who are struggling." },
                    { title: "Early Warning", desc: "Identify students who need teacher support sooner." },
                    { title: "Gap Finder", desc: "Highlight what students don't know yet for teachers." },
                    { title: "Student Desk", desc: "Show students their own progress on a private page." }
                ],
                image: aiImg
            },
            {
                id: 'l6', slug: 'interactive-tools', name: "Interactive Tools", icon: <FaGamepad />,
                shortDesc: "Make learning more engaging with quizzes, games, videos, and collaborative activities.",
                longDesc: "This module gives teachers a set of tools to make their lessons more interactive and fun. You can add live quizzes, interactive videos, group exercises, and even elements of gamification like points and badges to keep students interested and motivated.",
                detailedBenefits: [
                    { title: "Fun Quiz", desc: "Use points and badges to make learning exciting." },
                    { title: "Smart Video", desc: "Add questions inside videos to check understanding." },
                    { title: "Team Board", desc: "Work together on shared digital whiteboards." },
                    { title: "Live Voting", desc: "Run quick polls during class for instant feedback." },
                    { title: "New Tech", desc: "Support for futuristic learning tools and experiences." }
                ],
                image: interactiveImg
            },
            {
                id: 'l7', slug: 'performance-insights', name: "Performance Insights", icon: <FaChartLine />,
                shortDesc: "View clear reports and charts on how students, classes, and departments are performing.",
                longDesc: "This module turns raw academic data into easy-to-understand charts and reports. Teachers and administrators can quickly see which students are doing well, which need support, and where the curriculum can be improved. All reports can be exported and shared.",
                detailedBenefits: [
                    { title: "Data Charts", desc: "See performance visually for classes and students." },
                    { title: "Track Goals", desc: "Compare current grades against past term targets." },
                    { title: "Your Reports", desc: "Build custom data views for your specific needs." },
                    { title: "Grades Drop", desc: "Get an alert if any student's results start to slip." },
                    { title: "Print Ready", desc: "Export professional reports for management meetings." }
                ],
                image: performanceImg
            }
        ]
    },
    Communication: {
        title: "Communication",
        description: "Strengthen collaboration and institutional transparency.",
        image: communicationImg,
        items: [
            {
                id: 'c1', slug: 'communication-hub', name: "Communication Hub", icon: <FaBullhorn />,
                shortDesc: "Share announcements and important updates with the entire institution easily.",
                longDesc: "This module gives your institution one central place to communicate. Administrators can send announcements to specific groups like teachers, parents, or students, or to everyone at once. All messages are delivered instantly and can be tracked to confirm they have been read.",
                detailedBenefits: [
                    { title: "Broadcasting", desc: "Send announcements to the whole school at once." },
                    { title: "Target Talk", desc: "Message specific classes or departments individually." },
                    { title: "Seen Status", desc: "See exactly who has read your important updates." },
                    { title: "Share Media", desc: "Send images, PDFs, and files to parents and staff." },
                    { title: "Safe Chat", desc: "Keep all school talking private and fully secure." }
                ],
                image: hubImg
            },
            {
                id: 'c2', slug: 'parent-student-portal', name: "Parent & Student Portal", icon: <FaUserFriends />,
                shortDesc: "Give parents and students easy access to grades, attendance, and schedules online.",
                longDesc: "This portal is a dedicated space for parents and students to stay informed and connected. Parents can log in to check their child's grades, attendance, and the school calendar. Students can view their timetable, results, and submit requests directly online.",
                detailedBenefits: [
                    { title: "Live Grades", desc: "Let parents see exam results as soon as they are out." },
                    { title: "Parent Chat", desc: "Allow direct, private talk between parents and teachers." },
                    { title: "Pay Online", desc: "Make it easy for parents to pay fees through the app." },
                    { title: "Safe Entry", desc: "Alert parents quickly if a student misses a class." },
                    { title: "Event Map", desc: "Show the latest school dates on a shared calendar." }
                ],
                image: parentPortalImg
            },
            {
                id: 'c3', slug: 'notifications', name: "Push Notifications", icon: <FaBell />,
                shortDesc: "Send important alerts directly to mobile phones so no one misses key updates.",
                longDesc: "This module ensures that urgent and important information reaches everyone instantly. Whether it is an emergency notice, a fee reminder, or an exam date change, the system sends a direct notification to the mobile devices of the relevant people.",
                detailedBenefits: [
                    { title: "Quick News", desc: "Send emergency alerts directly to every mobile phone." },
                    { title: "Date Alerts", desc: "Remind everyone about exams, fees, and holidays." },
                    { title: "All Phones", desc: "Works perfectly on both Android and Apple devices." },
                    { title: "Your Modes", desc: "Allow users to choose which alerts they want to get." },
                    { title: "Safe Send", desc: "Messages are held until users are back online again." }
                ],
                image: notifImg
            },
            {
                id: 'c4', slug: 'event-management', name: "Event Management", icon: <FaCalendarPlus />,
                shortDesc: "Plan and manage school events, meetings, and activities smoothly.",
                longDesc: "This module helps you organise any type of institutional event. You can plan the event, manage registrations, book venues, assign staff duties, and send invitations, all from one screen. After the event, you can collect feedback to improve future activities.",
                detailedBenefits: [
                    { title: "Event Plan", desc: "Organize school events and ceremonies from one page." },
                    { title: "Book Spot", desc: "Reserve rooms and halls for meetings automatically." },
                    { title: "Online Invite", desc: "Send digital invites and track who is coming." },
                    { title: "Task List", desc: "Assign duties to staff and track their progress." },
                    { title: "Party Polls", desc: "Collect feedback to make your next event even better." }
                ],
                image: eventImg
            },
            {
                id: 'c5', slug: 'feedback-surveys', name: "Feedback & Surveys", icon: <FaPoll />,
                shortDesc: "Gather opinions from students, parents, and staff through simple surveys.",
                longDesc: "This module makes it easy to create surveys and collect honest feedback from your community. You can ask about teaching quality, facilities, or any topic that matters. Results are shown in clear charts so you can take action and improve.",
                detailedBenefits: [
                    { title: "Easy Polls", desc: "Make surveys with simple questions for everyone." },
                    { title: "Secret Talk", desc: "Allow anonymous answers for honest school feedback." },
                    { title: "Live Totals", desc: "See survey results as charts as soon as people vote." },
                    { title: "Staff Score", desc: "Let students rate their courses and teaching quality." },
                    { title: "Plan Ahead", desc: "Use survey data to make smart changes in school." }
                ],
                image: feedbackImg
            },
            {
                id: 'c6', slug: 'advanced-reporting', name: "Advanced Reporting", icon: <FaChartPie />,
                shortDesc: "Get detailed reports on academics, finances, and operations in a few clicks.",
                longDesc: "This module provides comprehensive reports across all areas of your institution. Whether you need a financial summary, an attendance report, or an academic overview, the system can produce it instantly. Reports can be scheduled and shared with relevant people automatically.",
                detailedBenefits: [
                    { title: "Quick Stats", desc: "See all school data on one easy live dashboard." },
                    { title: "Dept Reports", desc: "Make reports for different parts of the institution." },
                    { title: "Send Timing", desc: "Set reports to be sent to your email automatically." },
                    { title: "Next Trends", desc: "Look at data to guess what will happen in the future." },
                    { title: "Get Files", desc: "Download any report as a PDF or Excel sheet easily." }
                ],
                image: reportingImg
            },
            {
                id: 'c7', slug: 'cloud-access', name: "Mobile & Cloud Access", icon: <FaMobileAlt />,
                shortDesc: "Access the platform from any phone, tablet, or computer, from anywhere.",
                longDesc: "This module ensures your institution's management system is always available. Everything runs on the cloud, so there is no need for local servers. Staff can log in and manage tasks on their mobile phones, tablets, or laptops from any location at any time.",
                detailedBenefits: [
                    { title: "Access All", desc: "Use the system on any phone, tablet, or web browser." },
                    { title: "Cloud Save", desc: "Your data is kept safe online with daily backups." },
                    { title: "Always On", desc: "Enjoy 99.9% uptime so your work never stops." },
                    { title: "Smart Screen", desc: "The app looks great on both small and large screens." },
                    { title: "Easy Login", desc: "Sign in from anywhere in the world with no hassle." }
                ],
                image: cloudImg
            }
        ]
    }
};
