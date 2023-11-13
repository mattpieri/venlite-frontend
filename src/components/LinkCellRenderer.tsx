// src/components/LinkCellRenderer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const LinkCellRenderer: React.FC<any> = (props) => {
    const { value } = props;
    return (
        <Link to={`/contract/${value}`}>
            {value}
        </Link>
    );
};

export default LinkCellRenderer;