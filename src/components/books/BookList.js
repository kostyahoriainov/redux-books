import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const BookList = ({ books }) => 
    <div>
        <ul className="list-group">
            {
                books.map(book => <li className="list-group" key={book.id}>{book.title}</li>)
            }
        </ul>
    </div>


BookList.propTypes = {
    books: PropTypes.array
}

export default connect(
    ({books}) => ({books})
)(BookList)