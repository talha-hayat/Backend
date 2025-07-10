import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';

const Signup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        // Simulate signup success
        setSuccess('Signup successful!');
        setForm({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    background: '#fff',
                    padding: '2rem 2.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                    minWidth: '320px',
                    width: '100%',
                    maxWidth: '400px'
                }}
            >
                <h2 style={{ marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>Sign Up</h2>
                {error && <div style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                {success && <div style={{ color: '#22c55e', marginBottom: '1rem', textAlign: 'center' }}>{success}</div>}
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '.5rem', color: '#334155' }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '.75rem',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            outline: 'none'
                        }}
                        autoComplete="off"
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '.5rem', color: '#334155' }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '.75rem',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            outline: 'none'
                        }}
                        autoComplete="off"
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '.5rem', color: '#334155' }}>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '.75rem',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            outline: 'none'
                        }}
                        autoComplete="off"
                    />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '.5rem', color: '#334155' }}>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '.75rem',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            outline: 'none'
                        }}
                        autoComplete="off"
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '.75rem',
                        background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

const pageVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.5 } }
};

const formVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
};

const buttonVariants = {
    hover: {
        scale: 1.04,
        background: "linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)",
        boxShadow: "0 6px 24px rgba(56,189,248,0.15)",
        transition: { duration: 0.2 }
    }
};

const AnimatedSignup = (props) => (
    <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f0f4ff 0%, #c7d2fe 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}
    >
        <motion.form
            variants={formVariants}
            initial="initial"
            animate="animate"
            style={{
                background: 'rgba(255,255,255,0.95)',
                padding: '2.5rem 2.5rem 2rem 2.5rem',
                borderRadius: '18px',
                boxShadow: '0 8px 32px rgba(37,99,235,0.10)',
                minWidth: '340px',
                width: '100%',
                maxWidth: '420px',
                position: 'relative',
                zIndex: 2
            }}
            {...props}
        >
            {props.children}
        </motion.form>
        {/* Animated background blobs */}
        <motion.div
            style={{
                position: 'absolute',
                top: '-80px',
                left: '-80px',
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #38bdf8 0%, #2563eb 100%)',
                opacity: 0.18,
                zIndex: 1
            }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
        <motion.div
            style={{
                position: 'absolute',
                bottom: '-60px',
                right: '-60px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 70% 70%, #818cf8 0%, #38bdf8 100%)',
                opacity: 0.13,
                zIndex: 1
            }}
            animate={{ scale: [1, 1.12, 1], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
    </motion.div>
);

const SignupWithAnimation = (props) => {
    // Import everything from Signup component above
    // Copy the logic from Signup here
    // For brevity, we assume the logic is the same as your Signup component
    // Only the return JSX is replaced with AnimatedSignup

    // ... (copy all hooks and logic from Signup here)
    // For this snippet, we assume you have the logic in variables:
    // form, error, success, handleChange, handleSubmit

    // But since we can't reference those here, you should replace your return (
    // ... ) in Signup with the below JSX:

    return (
        <AnimatedSignup onSubmit={handleSubmit}>
            <h2 style={{
                marginBottom: '1.5rem',
                color: '#1e293b',
                textAlign: 'center',
                letterSpacing: '0.02em',
                fontWeight: 700,
                fontSize: '2rem'
            }}>
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Sign Up
                </motion.span>
            </h2>
            {error && <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    color: '#ef4444',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    fontWeight: 500
                }}>{error}</motion.div>}
            {success && <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    color: '#22c55e',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    fontWeight: 500
                }}>{success}</motion.div>}
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '.5rem', color: '#334155', fontWeight: 500 }}>Name</label>
                <motion.input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '.75rem',
                        borderRadius: '8px',
                        border: '1.5px solid #cbd5e1',
                        outline: 'none',
                        fontSize: '1rem',
                        background: '#f8fafc',
                        transition: 'border 0.2s'
                    }}
                    whileFocus={{ borderColor: "#2563eb" }}
                    autoComplete="off"
                />
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '.5rem', color: '#334155', fontWeight: 500 }}>Email</label>
                <motion.input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '.75rem',
                        borderRadius: '8px',
                        border: '1.5px solid #cbd5e1',
                        outline: 'none',
                        fontSize: '1rem',
                        background: '#f8fafc',
                        transition: 'border 0.2s'
                    }}
                    whileFocus={{ borderColor: "#2563eb" }}
                    autoComplete="off"
                />
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '.5rem', color: '#334155', fontWeight: 500 }}>Password</label>
                <motion.input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '.75rem',
                        borderRadius: '8px',
                        border: '1.5px solid #cbd5e1',
                        outline: 'none',
                        fontSize: '1rem',
                        background: '#f8fafc',
                        transition: 'border 0.2s'
                    }}
                    whileFocus={{ borderColor: "#2563eb" }}
                    autoComplete="off"
                />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '.5rem', color: '#334155', fontWeight: 500 }}>Confirm Password</label>
                <motion.input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '.75rem',
                        borderRadius: '8px',
                        border: '1.5px solid #cbd5e1',
                        outline: 'none',
                        fontSize: '1rem',
                        background: '#f8fafc',
                        transition: 'border 0.2s'
                    }}
                    whileFocus={{ borderColor: "#2563eb" }}
                    autoComplete="off"
                />
            </div>
            <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                style={{
                    width: '100%',
                    padding: '.85rem',
                    background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1.08rem',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
                    transition: 'background 0.2s, box-shadow 0.2s'
                }}
            >
                Create Account
            </motion.button>
        </AnimatedSignup>
    );
};

// Replace your export with this:
export default Signup;