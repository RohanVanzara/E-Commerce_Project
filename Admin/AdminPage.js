// import React, { useEffect, useState } from 'react';
// import './AdminPage.css';

// const AdminPanel = () => {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState(null);
//     const [subscribers, setSubscribers] = useState([]);
//     const [activeTab, setActiveTab] = useState('users');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [orders, setOrders] = useState([]);
//     const [feedbacks, setFeedbacks] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Registration 
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 setLoading(true);
//                 const response = await fetch("http://localhost:8081/admin/users");
//                 const data = await response.json();
//                 setUsers(data);
//                 setError(null);
//             } catch (error) {
//                 setError("Failed to fetch users. Please try again later.");
//                 console.error("User fetch error:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, []);

//     // New Arrival Subscriber 
//     useEffect(() => {
//         const fetchSubscribers = async () => {
//             try {
//                 setLoading(true);
//                 const response = await fetch("http://localhost:8081/api/subscribers");
//                 const data = await response.json();
//                 setSubscribers(data);
//             } catch (error) {
//                 console.error("Failed to fetch subscribers:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSubscribers();
//     }, []);

//     // Place order
//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 setLoading(true);
//                 const response = await fetch("http://localhost:8081/allorders");
//                 const data = await response.json();
//                 setOrders(data);
//             } catch (error) {
//                 console.error("Failed to fetch orders:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     // Feedback Page
//     useEffect(() => {
//         const fetchFeedbacks = async () => {
//             try {
//                 setLoading(true);
//                 const response = await fetch('http://localhost:8081/feedback');
//                 const data = await response.json();
//                 setFeedbacks(data);
//             } catch (error) {
//                 console.error('Error fetching feedback:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchFeedbacks();
//     }, []);

//     // Filter data based on search term
//     const filteredUsers = users.filter(user =>
//         (user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
//     );

//     const filteredSubscribers = subscribers.filter(subscriber =>
//         subscriber && subscriber.email &&
//         subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const filteredOrders = orders.filter(order =>
//         (order.firstName && order.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (order.lastName && order.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (order.email && order.email.toLowerCase().includes(searchTerm.toLowerCase()))
//     );

//     const filteredFeedbacks = feedbacks.filter(feedback =>
//         (feedback.name && feedback.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (feedback.email && feedback.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (feedback.comments && feedback.comments.toLowerCase().includes(searchTerm.toLowerCase()))
//     );

//     // Handle tab change
//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//         setSearchTerm('');
//     };

//     // Handle search input change
//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div className="admin-dashboard">
//             <div className="sidebar">
//                 <div className="logo">
//                     <h2>Admin Panel</h2>
//                 </div>
//                 <nav className="sidebar-nav">
//                     <button
//                         className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
//                         onClick={() => handleTabChange('users')}
//                     >
//                         <i className="icon users-icon"></i>
//                         Registered Users
//                     </button>
//                     <button
//                         className={`nav-item ${activeTab === 'subscribers' ? 'active' : ''}`}
//                         onClick={() => handleTabChange('subscribers')}
//                     >
//                         <i className="icon subscribers-icon"></i>
//                         Email Subscribers
//                     </button>
//                     <button
//                         className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
//                         onClick={() => handleTabChange('orders')}
//                     >
//                         <i className="icon orders-icon"></i>
//                         Orders
//                     </button>
//                     <button
//                         className={`nav-item ${activeTab === 'feedbacks' ? 'active' : ''}`}
//                         onClick={() => handleTabChange('feedbacks')}
//                     >
//                         <i className="icon feedback-icon"></i>
//                         Customer Feedbacks
//                     </button>
//                 </nav>
//             </div>

//             <div className="content-area">
//                 <div className="top-bar">
//                     <div className="search-container">
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchTerm}
//                             onChange={handleSearchChange}
//                             className="search-input"
//                         />
//                         <button className="search-button">
//                             <i className="search-icon">🔍</i>
//                         </button>
//                     </div>
//                     <div className="admin-info">
//                         <span className="admin-name">Admin</span>
//                         <div className="admin-avatar">👤</div>
//                     </div>
//                 </div>

//                 <div className="content-container">
//                     {/* Registration Tab */}
//                     {activeTab === 'users' && (
//                         <div className="panel">
//                             <div className="panel-header">
//                                 <h2>Registered Users</h2>
//                                 <div className="panel-actions">
//                                     <div className="user-count-badge">
//                                         Total: {users.length}
//                                     </div>
//                                 </div>
//                             </div>

//                             {loading ? (
//                                 <div className="loading-container">
//                                     <div className="loading-spinner"></div>
//                                     <p>Loading users...</p>
//                                 </div>
//                             ) : error ? (
//                                 <div className="error-container">
//                                     <p>{error}</p>
//                                     <button
//                                         className="retry-btn"
//                                         onClick={() => {
//                                             setLoading(true);
//                                             fetch("http://localhost:8081/admin/users")
//                                                 .then(res => res.json())
//                                                 .then(data => {
//                                                     setUsers(data);
//                                                     setError(null);
//                                                 })
//                                                 .catch(err => {
//                                                     setError("Failed to fetch users. Please try again later.");
//                                                 })
//                                                 .finally(() => setLoading(false));
//                                         }}
//                                     >
//                                         Retry
//                                     </button>
//                                 </div>
//                             ) : (
//                                 <div className="table-container">
//                                     <table className="data-table">
//                                         <thead>
//                                             <tr>
//                                                 <th>Username</th>
//                                                 <th>Email</th>
//                                                 <th>Phone</th>
//                                                 <th>Password</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {filteredUsers.length > 0 ? (
//                                                 filteredUsers.map((user, index) => (
//                                                     <tr key={index}>
//                                                         <td>{user.username}</td>
//                                                         <td>{user.email}</td>
//                                                         <td>{user.phone}</td>
//                                                         <td className="password-cell">{user.password && user.password.substring(0, 15)}...</td>
//                                                     </tr>
//                                                 ))
//                                             ) : (
//                                                 <tr>
//                                                     <td colSpan="4" className="no-data">No users found</td>
//                                                 </tr>
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* New Subscribers Tab */}
//                     {activeTab === 'subscribers' && (
//                         <div className="panel">
//                             <div className="panel-header">
//                                 <h2>Email Subscribers</h2>
//                                 <div className="panel-actions">
//                                     <div className="user-count-badge">
//                                         Total: {subscribers.length}
//                                     </div>
//                                 </div>
//                             </div>

//                             {loading ? (
//                                 <div className="loading-container">
//                                     <div className="loading-spinner"></div>
//                                     <p>Loading subscribers...</p>
//                                 </div>
//                             ) : (
//                                 <div className="table-container">
//                                     <table className="data-table">
//                                         <thead>
//                                             <tr>
//                                                 <th>Email</th>
//                                                 <th>Subscribed At</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {filteredSubscribers.length > 0 ? (
//                                                 filteredSubscribers.map((subscriber, index) => (
//                                                     <tr key={index}>
//                                                         <td>{subscriber.email}</td>
//                                                         <td>{new Date(subscriber.createdAt).toLocaleString()}</td>
//                                                     </tr>
//                                                 ))
//                                             ) : (
//                                                 <tr>
//                                                     <td colSpan="2" className="no-data">No subscribers found</td>
//                                                 </tr>
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* Orders Tab */}
//                     {activeTab === 'orders' && (
//                         <div className="panel">
//                             <div className="panel-header">
//                                 <h2>All Orders</h2>
//                                 <div className="panel-actions">
//                                     <div className="user-count-badge">
//                                         Total: {orders.length}
//                                     </div>
//                                 </div>
//                             </div>

//                             {loading ? (
//                                 <div className="loading-container">
//                                     <div className="loading-spinner"></div>
//                                     <p>Loading orders...</p>
//                                 </div>
//                             ) : (
//                                 <div className="table-container">
//                                     <table className="data-table">
//                                         <thead>
//                                             <tr>
//                                                 <th>Name</th>
//                                                 <th>Email</th>
//                                                 <th>Mobile</th>
//                                                 <th>Address</th>
//                                                 <th>Payment</th>
//                                                 <th>Total</th>
//                                                 <th>Items</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {filteredOrders.length > 0 ? (
//                                                 filteredOrders.map((order, index) => (
//                                                     <tr key={index}>
//                                                         <td>{order.firstName} {order.lastName}</td>
//                                                         <td>{order.email}</td>
//                                                         <td>{order.mobile}</td>
//                                                         <td>{order.address}, {order.pincode}</td>
//                                                         <td>{order.paymentMethod}</td>
//                                                         <td>₹{Math.round(order.grandTotal)}</td>
//                                                         <td>
//                                                             {order.cartItems && order.cartItems.map((item, i) => (
//                                                                 <div key={i} className="order-item">
//                                                                     {item.name} x {item.quantity}
//                                                                 </div>
//                                                             ))}
//                                                         </td>
//                                                     </tr>
//                                                 ))
//                                             ) : (
//                                                 <tr>
//                                                     <td colSpan="7" className="no-data">No orders found</td>
//                                                 </tr>
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* Feedbacks Tab */}
//                     {activeTab === 'feedbacks' && (
//                         <div className="panel">
//                             <div className="panel-header">
//                                 <h2>Customer Feedbacks</h2>
//                                 <div className="panel-actions">
//                                     <div className="user-count-badge">
//                                         Total: {feedbacks.length}
//                                     </div>
//                                 </div>
//                             </div>

//                             {loading ? (
//                                 <div className="loading-container">
//                                     <div className="loading-spinner"></div>
//                                     <p>Loading feedbacks...</p>
//                                 </div>
//                             ) : (
//                                 <div className="table-container">
//                                     <table className="data-table">
//                                         <thead>
//                                             <tr>
//                                                 <th>Name</th>
//                                                 <th>Email</th>
//                                                 <th>Phone</th>
//                                                 <th>Comments</th>
//                                                 <th>Product Quality</th>
//                                                 <th>Overall Satisfaction</th>
//                                                 <th>Store Collection</th>
//                                                 <th>Checkout Experience  </th>
//                                                 <th>Date</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {filteredFeedbacks.length > 0 ? (
//                                                 filteredFeedbacks.map((feedback, index) => (
//                                                     <tr key={index}>
//                                                         <td>{feedback.name}</td>
//                                                         <td>{feedback.email}</td>
//                                                         <td>{feedback.number}</td>
//                                                         <td className="comments-cell">{feedback.comments}</td>
//                                                         <td>{feedback.productQuality1}</td>
//                                                         <td>{feedback.overallSatisfaction}</td>
//                                                         <td>{feedback.storeCollection}</td>
//                                                         <td>{feedback.productQuality2}</td>
//                                                         <td>{new Date(feedback.createdAt).toLocaleString()}</td>
//                                                     </tr>
//                                                 ))
//                                             ) : (
//                                                 <tr>
//                                                     <td colSpan="9" className="no-data">No feedbacks found</td>
//                                                 </tr>
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminPanel;


import React, { useEffect, useState } from 'react';
import './AdminPage.css';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [subscribers, setSubscribers] = useState([]);
    const [activeTab, setActiveTab] = useState('dashboard'); // Changed default to dashboard
    const [searchTerm, setSearchTerm] = useState('');
    const [orders, setOrders] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]); // Added products state

    // Registration 
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8081/admin/users");
                const data = await response.json();
                setUsers(data);
                setError(null);
            } catch (error) {
                setError("Failed to fetch users. Please try again later.");
                console.error("User fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // New Arrival Subscriber 
    useEffect(() => {
        const fetchSubscribers = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8081/api/subscribers");
                const data = await response.json();
                setSubscribers(data);
            } catch (error) {
                console.error("Failed to fetch subscribers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscribers();
    }, []);

    // Place order
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8081/allorders");
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error("Failed to fetch orders:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    // Feedback Page
    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:8081/feedback');
                const data = await response.json();
                setFeedbacks(data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    // Products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:8081/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Calculate total revenue from orders
    const calculateTotalRevenue = () => {
        return orders.reduce((total, order) => {
            return total + (order.grandTotal ? Math.round(order.grandTotal) : 0);
        }, 0);
    };

    // Filter data based on search term
    const filteredUsers = users.filter(user =>
        (user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const filteredSubscribers = subscribers.filter(subscriber =>
        subscriber && subscriber.email &&
        subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredOrders = orders.filter(order =>
        (order.firstName && order.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (order.lastName && order.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (order.email && order.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const filteredFeedbacks = feedbacks.filter(feedback =>
        (feedback.name && feedback.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (feedback.email && feedback.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (feedback.comments && feedback.comments.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSearchTerm('');
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <div className="logo">
                    <h2>Admin Panel</h2>
                </div>
                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => handleTabChange('dashboard')}
                    >
                        <i className="icon dashboard-icon"></i>
                        Dashboard
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
                        onClick={() => handleTabChange('users')}
                    >
                        <i className="icon users-icon"></i>
                        Registered Users
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
                        onClick={() => handleTabChange('products')}
                    >
                        <i className="icon products-icon"></i>
                        Products
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'subscribers' ? 'active' : ''}`}
                        onClick={() => handleTabChange('subscribers')}
                    >
                        <i className="icon subscribers-icon"></i>
                        Email Subscribers
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                        onClick={() => handleTabChange('orders')}
                    >
                        <i className="icon orders-icon"></i>
                        Orders
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'feedbacks' ? 'active' : ''}`}
                        onClick={() => handleTabChange('feedbacks')}
                    >
                        <i className="icon feedback-icon"></i>
                        Customer Feedbacks
                    </button>
                </nav>
            </div>

            <div className="content-area">
                <div className="top-bar">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                        <button className="search-button">
                            <i className="search-icon">🔍</i>
                        </button>
                    </div>
                    <div className="admin-info">
                        <span className="admin-name">Admin</span>
                        <div className="admin-avatar">👤</div>
                    </div>
                </div>

                <div className="content-container">
                    {/* Dashboard Tab */}
                    {activeTab === 'dashboard' && (
                        <div className="panel">
                            <div className="panel-header">
                                <h2>Dashboard Overview</h2>
                            </div>

                            {loading ? (
                                <div className="loading-container">
                                    <div className="loading-spinner"></div>
                                    <p>Loading dashboard data...</p>
                                </div>
                            ) : (
                                <>
                                    <div className="dashboard-stats">
                                        <div className="stat-card">
                                            <div className="stat-icon">👥</div>
                                            <div className="stat-details">
                                                <h3>Total Users</h3>
                                                <div className="stat-value">{users.length}</div>
                                            </div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-icon">📦</div>
                                            <div className="stat-details">
                                                <h3>Total Products</h3>
                                                <div className="stat-value">{products.length}</div>
                                            </div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-icon">🛒</div>
                                            <div className="stat-details">
                                                <h3>Total Orders</h3>
                                                <div className="stat-value">{orders.length}</div>
                                            </div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-icon">💰</div>
                                            <div className="stat-details">
                                                <h3>Total Revenue</h3>
                                                <div className="stat-value">₹{calculateTotalRevenue()}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dashboard-sections">
                                        <div className="dashboard-section">
                                            <h3>Recent Orders</h3>
                                            <div className="table-container">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Total</th>
                                                            <th>Payment Method</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {orders.slice(0, 5).map((order, index) => (
                                                            <tr key={index}>
                                                                <td>{order.firstName} {order.lastName}</td>
                                                                <td>{order.email}</td>
                                                                <td>₹{Math.round(order.grandTotal)}</td>
                                                                <td>{order.paymentMethod}</td>
                                                            </tr>
                                                        ))}
                                                        {orders.length === 0 && (
                                                            <tr>
                                                                <td colSpan="4" className="no-data">No orders found</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="dashboard-section">
                                            <h3>Recent Users</h3>
                                            <div className="table-container">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Username</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {users.slice(0, 5).map((user, index) => (
                                                            <tr key={index}>
                                                                <td>{user.username}</td>
                                                                <td>{user.email}</td>
                                                                <td>{user.phone}</td>
                                                            </tr>
                                                        ))}
                                                        {users.length === 0 && (
                                                            <tr>
                                                                <td colSpan="3" className="no-data">No users found</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* Products Tab */}
                    {activeTab === 'products' && (
                        <div className="panel">
                            <div className="panel-header">
                                <h2>Product Management</h2>
                                <div className="panel-actions">
                                    <button className="add-new-btn">Add New Product</button>
                                    <div className="user-count-badge">
                                        Total: {products.length}
                                    </div>
                                </div>
                            </div>

                            {loading ? (
                                <div className="loading-container">
                                    <div className="loading-spinner"></div>
                                    <p>Loading products...</p>
                                </div>
                            ) : (
                                <div className="table-container">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.length > 0 ? (
                                                products.map((product, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <img 
                                                                src={product.image || 'https://via.placeholder.com/50'} 
                                                                alt={product.name} 
                                                                className="product-thumbnail" 
                                                            />
                                                        </td>
                                                        <td>{product.name}</td>
                                                        <td>{product.category}</td>
                                                        <td>₹{product.price}</td>
                                                        <td>{product.stock}</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <button className="edit-button">Edit</button>
                                                                <button className="delete-button">Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" className="no-data">No products found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Registration Tab */}
                    {activeTab === 'users' && (
                        <div className="panel">
                            <div className="panel-header">
                                <h2>Registered Users</h2>
                                <div className="panel-actions">
                                    <div className="user-count-badge">
                                        Total: {users.length}
                                    </div>
                                </div>
                            </div>

                            {loading ? (
                                <div className="loading-container">
                                    <div className="loading-spinner"></div>
                                    <p>Loading users...</p>
                                </div>
                            ) : error ? (
                                <div className="error-container">
                                    <p>{error}</p>
                                    <button
                                        className="retry-btn"
                                        onClick={() => {
                                            setLoading(true);
                                            fetch("http://localhost:8081/admin/users")
                                                .then(res => res.json())
                                                .then(data => {
                                                    setUsers(data);
                                                    setError(null);
                                                })
                                                .catch(err => {
                                                    setError("Failed to fetch users. Please try again later.");
                                                })
                                                .finally(() => setLoading(false));
                                        }}
                                    >
                                        Retry
                                    </button>
                                </div>
                            ) : (
                                <div className="table-container">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Password</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredUsers.length > 0 ? (
                                                filteredUsers.map((user, index) => (
                                                    <tr key={index}>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td className="password-cell">{user.password && user.password.substring(0, 15)}...</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="no-data">No users found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* New Subscribers Tab */}
                    {activeTab === 'subscribers' && (
                        <div className="panel">
                            <div className="panel-header">
                                <h2>Email Subscribers</h2>
                                <div className="panel-actions">
                                    <div className="user-count-badge">
                                        Total: {subscribers.length}
                                    </div>
                                </div>
                            </div>

                            {loading ? (
                                <div className="loading-container">
                                    <div className="loading-spinner"></div>
                                    <p>Loading subscribers...</p>
                                </div>
                            ) : (
                                <div className="table-container">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Email</th>
                                                <th>Subscribed At</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredSubscribers.length > 0 ? (
                                                filteredSubscribers.map((subscriber, index) => (
                                                    <tr key={index}>
                                                        <td>{subscriber.email}</td>
                                                        <td>{new Date(subscriber.createdAt).toLocaleString()}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="2" className="no-data">No subscribers found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Orders Tab */}
                    {activeTab === 'orders' && (
                        <div className="panel">
                            <div className="panel-header">
                                <h2>All Orders</h2>
                                <div className="panel-actions">
                                    <div className="user-count-badge">
                                        Total: {orders.length}
                                    </div>
                                </div>
                            </div>

                            {loading ? (
                                <div className="loading-container">
                                    <div className="loading-spinner"></div>
                                    <p>Loading orders...</p>
                                </div>
                            ) : (
                                <div className="table-container">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Address</th>
                                                <th>Payment</th>
                                                <th>Total</th>
                                                <th>Items</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredOrders.length > 0 ? (
                                                filteredOrders.map((order, index) => (
                                                    <tr key={index}>
                                                        <td>{order.firstName} {order.lastName}</td>
                                                        <td>{order.email}</td>
                                                        <td>{order.mobile}</td>
                                                        <td>{order.address}, {order.pincode}</td>
                                                        <td>{order.paymentMethod}</td>
                                                        <td>₹{Math.round(order.grandTotal)}</td>
                                                        <td>
                                                            {order.cartItems && order.cartItems.map((item, i) => (
                                                                <div key={i} className="order-item">
                                                                    {item.name} x {item.quantity}
                                                                </div>
                                                            ))}
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="7" className="no-data">No orders found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Feedbacks Tab */}
                    {activeTab === 'feedbacks' && (
                        <div className="panel">
                            <div className="panel-header">
                                <h2>Customer Feedbacks</h2>
                                <div className="panel-actions">
                                    <div className="user-count-badge">
                                        Total: {feedbacks.length}
                                    </div>
                                </div>
                            </div>

                            {loading ? (
                                <div className="loading-container">
                                    <div className="loading-spinner"></div>
                                    <p>Loading feedbacks...</p>
                                </div>
                            ) : (
                                <div className="table-container">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Comments</th>
                                                <th>Product Quality</th>
                                                <th>Overall Satisfaction</th>
                                                <th>Store Collection</th>
                                                <th>Checkout Experience  </th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredFeedbacks.length > 0 ? (
                                                filteredFeedbacks.map((feedback, index) => (
                                                    <tr key={index}>
                                                        <td>{feedback.name}</td>
                                                        <td>{feedback.email}</td>
                                                        <td>{feedback.number}</td>
                                                        <td className="comments-cell">{feedback.comments}</td>
                                                        <td>{feedback.productQuality1}</td>
                                                        <td>{feedback.overallSatisfaction}</td>
                                                        <td>{feedback.storeCollection}</td>
                                                        <td>{feedback.productQuality2}</td>
                                                        <td>{new Date(feedback.createdAt).toLocaleString()}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="9" className="no-data">No feedbacks found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;