import React, { useState, useEffect } from 'react';
import { db, auth } from '../backend/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Users, Mail, ShieldAlert, Phone } from 'lucide-react';

const AdminDashboard = ({userAutentication}) => {
  const [usersList, setUsersList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = () => {
      const user = auth.currentUser;
      // Sirf aapki official email ko allow karega
      if (user && user.email === "theglobalimpactwelfare@gmail.com") {
        setIsAdmin(true);
        fetchUsers();
      } else {
        // Agar koi aur user hai toh home par bhej do
        alert("Access Denied! Only Admin can view this page.");
        navigate('/');
      }
    };
    checkAdmin();
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      console.log('querySnapshot', querySnapshot)
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsersList(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-5">Checking Admin Access...</div>;
console.log(usersList)
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center mb-4">
        <ShieldAlert className="text-danger me-2" size={32} />
        <h2 className="fw-bold mb-0">Admin Control Panel</h2>
      </div>

      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-header bg-white py-3">
          <h5 className="mb-0 fw-bold"><Users size={20} className="me-2"/>Registered Users List</h5>
        </div>
        {userAutentication && <div className="table-responsive p-3">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Mobile Number</th>
                <th>Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user) => (
                <tr key={user.id}>
                  <td className="fw-bold">{user.fullName || "N/A"}</td>
                  <td><Mail size={14} className="me-1"/> {user.email}</td>
                  <td><Phone size={14} className="me-1"/> {user.mobile}</td>
                  <td className="text-muted small">{user.createdAt || "Recent"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> }
      </div>
    </div>
  );
};

export default AdminDashboard;