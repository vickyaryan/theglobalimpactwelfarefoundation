import React, { useState, useEffect } from 'react';
import { auth, db } from '../backend/firebase'; // Path check kar lena
import { collection, query, where, getDocs } from 'firebase/firestore';
import { CreditCard, Calendar, CheckCircle, XCircle } from 'lucide-react';

const UserDashboard = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchMyDonations = async () => {
      if (user) {
        try {
          // Sirf is user ki email wali donations fetch karega
          const q = query(
            collection(db, "donations"), 
            where("donorEmail", "==", user.email)
          );
          
          const querySnapshot = await getDocs(q);
          const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setDonations(docs);
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchMyDonations();
  }, [user]);

  if (loading) return <div className="text-center py-5">Loading your history...</div>;

  return (
    <div className="container py-5">
      <div className="card border-0 shadow-sm rounded-4 p-4">
        <h3 className="fw-bold mb-4" style={{ color: '#1a365d' }}>My Donation History</h3>
        
        {donations.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted">Aapne abhi tak koi donation nahi ki hai.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr className="text-muted small">
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <Calendar size={16} className="me-2 text-primary"/>
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="fw-bold text-dark">₹{item.amount}</td>
                    <td>
                      {item.status === 'Success' ? (
                        <span className="badge bg-success-light text-success rounded-pill px-3">
                          <CheckCircle size={12} className="me-1"/> Paid
                        </span>
                      ) : (
                        <span className="badge bg-warning-light text-warning rounded-pill px-3">
                          <XCircle size={12} className="me-1"/> Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;