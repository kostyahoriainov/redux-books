import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectBook } from '../../AC';

const BookList = ({ books, selectBook }) => 
    <div>
        <ul className="list-group">
            {
                books.map(book => <li className="list-group" 
                                    onClick={() => selectBook(book)}
                                    key={book.id}>{book.title}
                                    </li>)
            }
        </ul>
    </div>


BookList.propTypes = {
    books: PropTypes.array,
    selectBook: PropTypes.func.isRequired
}

export default connect(
    ({books}) => ({books}),
    { selectBook }
)(BookList)