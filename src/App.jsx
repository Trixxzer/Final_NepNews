import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

import Header from "./LandingPage/components/Header";
import Navigation from "./LandingPage/components/Navigation";
import SideMenu from "./LandingPage/components/SideMenu";
import Footer from "./LandingPage/components/Footer";

import HomePage from "./LandingPage/pages/HomePage";
import CategoryPage from "./LandingPage/pages/CategoryPage";
import ArticlePage from "./LandingPage/pages/ArticlePage";

import Login from "./LoginSignup/pages/Login";
import Signup from "./LoginSignup/pages/Signup";
import TermsAndConditions from "./LoginSignup/pages/TermsAndConditions";
import ForgotPassword from "./LoginSignup/pages/ForgotPassword";
import EditorDashboard from "./EditorPage/Page/EditorDashboard";
import AdminDashboard from "./AdminPage/components/AdminPanel";
import AuthorDashboard from "./AuthorPage/components/AuthorDashboard";
import USerPage from "./UserPage/UserPage";



import "./LandingPage/styles/global.css";
import "./LoginSignup/styles/auth.css";
import "./LoginSignup/styles/terms.css";
import "./App.css";
import { Home, ImportIcon } from "lucide-react";

function AppWrapper() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    role: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    profilePicture: null,
    bio: "",
    expertise: "",
    certificates: null,
    editorialOversight: "",
    emailVerification: false,
    userManagement: false,
    articleManagement: false,
    analytics: false,
  });

  useEffect(() => {
    if (profilePicture) {
      const objectUrl = URL.createObjectURL(profilePicture);
      setProfilePreview(objectUrl);
      setFormData((prev) => ({ ...prev, profilePicture }));
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [profilePicture]);

  useEffect(() => {
    if (selectedRole) {
      setFormData((prev) => ({ ...prev, role: selectedRole }));
    }
  }, [selectedRole]);

  const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SideMenu isOpen={sideMenuOpen} toggleSideMenu={toggleSideMenu} />
              <Header toggleSideMenu={toggleSideMenu} />
              <Navigation />
              <main className="content-container">
                <HomePage />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/category/:name"
          element={
            <>
              <SideMenu isOpen={sideMenuOpen} toggleSideMenu={toggleSideMenu} />
              <Header toggleSideMenu={toggleSideMenu} />
              <Navigation />
              <main className="content-container">
                <CategoryPageWrapper />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/article/:id"
          element={
            <>
              <SideMenu isOpen={sideMenuOpen} toggleSideMenu={toggleSideMenu} />
              <Header toggleSideMenu={toggleSideMenu} />
              <Navigation />
              <main className="content-container">
                <ArticlePageWrapper />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/signup"
          element={
            <Signup
              agreedToTerms={formData.agreeToTerms}
              formData={formData}
              onFormDataChange={setFormData}
              profilePicture={profilePicture}
              profilePreview={profilePreview}
              selectedRole={selectedRole}
              onProfilePictureChange={setProfilePicture}
              onRoleChange={setSelectedRole}
            />
          }
        />
        <Route
          path="/terms"
          element={
            <TermsAndConditions
              onAgree={() =>
                setFormData((prev) => ({
                  ...prev,
                  agreeToTerms: true,
                }))
              }
            />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ForgotPassword
              onNavigateToLogin={() => (window.location.href = "/login")}
              profilePicture={profilePicture}
              profilePreview={profilePreview}
              selectedRole={selectedRole}
              onProfilePictureChange={setProfilePicture}
              onRoleChange={setSelectedRole}
            />
          }
        />
        <Route path="/editor-dashboard" element={<EditorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/author-dashboard" element={<AuthorDashboard />} />
        <Route path="/user-dashboard" element={<USerPage />} />
      </Routes>
    </Router>
  );
}

function CategoryPageWrapper() {
  const { name } = useParams();
  const navigate = useNavigate();
  return (
    <CategoryPage
      category={name}
      onArticleClick={(id) => navigate(`/article/${id}`)}
    />
  );
}

function ArticlePageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <ArticlePage id={id} onNavigate={(page) => navigate(`/category/${page}`)} />
  );
}

export default AppWrapper;
