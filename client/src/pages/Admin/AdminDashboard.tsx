import { useUser } from "@clerk/clerk-react";

const AdminDashboard = () => {
    const { user } = useUser();

    if (!user || user.publicMetadata.role !== "admin") {
        return <p>Access Denied</p>;
    }

    return <h1>Welcome, Admin!</h1>;
};

export default AdminDashboard;
