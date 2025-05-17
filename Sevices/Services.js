import React from 'react';

const features = [
    {
        icon: "🏍️",
        title: "Curb-side pickup"
    },
    {
        icon: "📦",
        title: "Free shipping"
    },
    {
        icon: "📉",
        title: "Low prices guaranteed"
    },
    {
        icon: "🔄",
        title: "Available to you 24/7"
    },
];

const FeaturesSection = () => {
    return (
        <div style={styles.container}>
            {features.map((feature, index) => (
                <div key={index} style={styles.featureItem}>
                    <span style={styles.icon}>{feature.icon}</span>
                    <p style={styles.text}>{feature.title}</p>
                </div>
            ))}
        </div>
    );
};


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
        padding: '20px',
        backgroundColor: '#fff',
        flexWrap: 'wrap',
    },
    featureItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '200px',
    },
    icon: {
        fontSize: '40px',
        marginBottom: '10px',
    },
    text: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#000',
    },


    '@media (max-width: 768px)': {
        container: {
            flexDirection: 'column',
            gap: '50px',
        },
        featureItem: {
            width: '100%',
        },
    },
};

export default FeaturesSection;
