import React, { useContext, useEffect } from 'react';
import { AppContext } from '../components/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import CartItem from './CartItem';
import NavBar from './NavBar';

const OrderConfirmationPage = () => {
    const { clearCart } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { orderNumber } = location.state;

    const handleContinueShopping = () => {
        clearCart();
        navigate('/product', { state: { category: 'fashion', subcategory: 'all' } });
    };

    useEffect(() => {
        const unlisten = () => clearCart();
        return unlisten;
    }, [clearCart]);

    return (
        <div style={styles.mainContainer}>
            <NavBar />
            <CartItem />
            <div style={styles.container}>
            <IoCheckmarkCircleOutline size={80} color="#75A358" />
                <h2 style={styles.title}>Thank You for Your Purchase!</h2>
                <p style={styles.orderNumber}>Order Number: {orderNumber}</p>
                <p style={styles.message}>
                    Your order has been successfully placed. We'll send you an email with the order details and tracking information once your item(s) have been shipped.
                </p>
                <button style={styles.button} onClick={handleContinueShopping}>
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    title: {
        fontSize: '24px',
        fontFamily: 'Oswald, sans-serif',
        margin: '20px 0',
        textAlign: 'center',
    },
    orderNumber: {
        fontSize: '18px',
        marginBottom: '20px',
    },
    message: {
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '30px',
    },
    button: {
        backgroundColor: '#75A358',
        padding: '15px',
        borderRadius: '5px',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
};

export default OrderConfirmationPage;
