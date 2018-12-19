import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Book = ({ book }) => 
    <div>
        <h2>
            {book.title}
        </h2>
        <p>Category: {book.categoryId}</p>
        <p>Description: {book.description}</p>
    </div>


Book.propTypes = {
    books: PropTypes.array
}

export default connect(
    ({activeBook}) => ({book: activeBook})
)(Book)