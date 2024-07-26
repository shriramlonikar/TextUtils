import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    // Destructure props for easier access
    const { alert } = props;

    // Check if alert is defined before rendering
    if (!alert || !alert.type || !alert.msg) {
        return null; // Return null if alert or its properties are not defined
    }

    // Ensure valid alert type to avoid undefined CSS classes
    const alertType = ['success', 'warning', 'danger'].includes(alert.type) ? alert.type : 'info';

    return (
        <div>
            <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(alert.type)}</strong>: {alert.msg}
            </div>
        </div>
    );
}

// PropTypes for type checking
Alert.propTypes = {
    alert: PropTypes.shape({
        type: PropTypes.oneOf(['success', 'warning', 'danger', 'info']).isRequired,
        msg: PropTypes.string.isRequired
    }).isRequired
};

export default Alert;
