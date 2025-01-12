import { ProtectedPage } from "@/features/auth/ui/protected-page";
import React from "react";

const ProfilePage = () => {
  return <div>ProfilePage</div>;
};

export default ProtectedPage(ProfilePage, "client");
