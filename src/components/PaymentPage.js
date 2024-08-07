import React, { useContext, useState } from 'react';
import { AppContext } from '../components/AppContext';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import NavBar from '../components/NavBar';
import CartItem from './CartItem';
import BreadCrumb from '../components/BreadCrumb';
import ErrorModal from '../components/ErrorModal';
// import '../styles/PaymentPage.css';

const PaymentPage = () => {
    const { cartItems, calculateTotalItems, calculateSubtotal, clearCart } = useContext(AppContext);
    const navigate = useNavigate();
    const breadcrumbItems = ['Home', 'Cart', 'Shipping', 'Payment'];

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    const paymentMethods = [
        { id: 'chapa', name: 'Chapa', icon: require('../assets/images/paymentSystems/chapa.png') },
        { id: 'telebirr', name: 'Telebirr', icon: require('../assets/images/paymentSystems/teleBirr.png') },
        { id: 'cbebirr', name: 'CBE birr', icon: require('../assets/images/paymentSystems/cbeBirr.png') },
      ];

    const handlePaymentMethodSelect = (methodId) => {
        setSelectedPaymentMethod(methodId);
    };

    const handlePayNow = () => {
        if (!selectedPaymentMethod) {
            setErrorMessage('Please select a payment method');
            setErrorModalVisible(true);
            return;
        }

        setTimeout(() => {
            const orderNumber = Math.floor(100000 + Math.random() * 900000);
            clearCart();
            navigate('/orderConfirmation', { state: { orderNumber } });
        }, 2000);
    };

    const closeErrorModal = () => {
        setErrorModalVisible(false);
        if (paymentSuccessful) {
            clearCart();
            navigate('/');
        }
    };

    return (
        <div style={styles.mainContainer}>
            <NavBar />
            <CartItem />
            {/* <div style={styles.headerContainer}>
                <button onClick={() => navigate(-1)} style={styles.backButton}>
                    <IoArrowBack size={24} color="#75A358" />
                </button>
                <BreadCrumb items={breadcrumbItems} />
            </div> */}
         <h2 style={styles.title}>Payment</h2>
            <div style={styles.container}>
                

                <div style={styles.paymentMethodsContainer}>
                    {paymentMethods.map((method) => (
                        <button
                            key={method.id}
                            style={{
                                ...styles.paymentMethodButton,
                                ...(selectedPaymentMethod === method.id ? styles.selectedPaymentMethod : {})
                            }}
                            onClick={() => handlePaymentMethodSelect(method.id)}
                        >
                            <img src={method.icon} alt={method.name} style={styles.paymentMethodIcon} />
                        </button>
                    ))}
                </div>

                <div style={styles.ctaPayContainer}>
                <div style={styles.orderSummaryContainer}>
                    <h3 style={styles.orderSummaryTitle}>Order Summary</h3>
                    {cartItems.map((item) => (
                        <div key={item.id} style={styles.orderItem}>
                            <span style={styles.orderItemName}>{item.name}</span>
                            <span style={styles.orderItemQuantity}>x{item.quantity}</span>
                            <span style={styles.orderItemPrice}>ETB {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div style={styles.totalContainer}>
                        <span style={styles.totalText}>Total ({calculateTotalItems()} items):</span>
                        <span style={styles.totalAmount}>ETB {calculateSubtotal()}</span>
                    </div>
                </div>

                <button style={styles.payNowButton} onClick={handlePayNow}>
                    Pay Now
                </button>

                </div>

                
            </div>
            <ErrorModal
                visible={errorModalVisible}
                onClose={closeErrorModal}
                message={errorMessage}
            />
        </div>
    );
};

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        // height: '100vh',
        justifyContent: 'center',
        
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px',
    },
    backButton: {
        marginRight: '10px',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
    },
    container: {
        padding: '20px',
        display:'flex',

      
        width: '80%',
        margin: 'auto',
        gap: '42px',
        border: '1px solid red',
        justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '24px',
        fontFamily: 'Oswald, sans-serif',
        marginBottom: '20px',
    },
    paymentMethodsContainer: {
        marginBottom: '20px',
        display:'flex',
        gap: '12px',
        height: '70%',
    },
    paymentMethodButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        borderWidth: '1px',
        borderColor: '#ccc',
        borderRadius: '5px',
        marginBottom: '10px',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    selectedPaymentMethod: {
        borderColor: '#75A358',
        backgroundColor: '#e6f3e6',
    },
    paymentMethodIcon: {
        height: 'auto',
        width: '80px',
        objectFit: 'contain',
    },
    orderSummaryContainer: {
        marginBottom: '20px',
    },
    orderSummaryTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    orderItem: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
    },
    orderItemName: {
        flex: '1',
    },
    orderItemQuantity: {
        flex: '0.5',
        textAlign: 'right',
    },
    orderItemPrice: {
        flex: '1',
        textAlign: 'right',
    },
    totalContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
        fontWeight: 'bold',
    },
    totalText: {
        fontSize: '18px',
    },
    totalAmount: {
        fontSize: '18px',
    },
    payNowButton: {
        backgroundColor: '#75A358',
        padding: '15px',
        borderRadius: '5px',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
};

export default PaymentPage;
