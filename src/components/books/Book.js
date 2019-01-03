import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Book = ({ book, cat }) => 
    <div>
        <h2>
            {book.title}
        </h2>
        <p>Category: {cat[book.categoryId].title}</p>
        <p>Description: {book.description}</p>
    </div>


Book.propTypes = {
    book: PropTypes.object
}

Book.defaultProp = {
    book: null
}

export default connect(
    ({activeBook, categoryBooks}) => ({
        book: activeBook,
        cat: categoryBooks
    })
)(Book)