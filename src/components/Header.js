import PropTypes from 'prop-types'

const Header = ({title}) => {
    return(
        <header>
            <div>
                <h1>{title}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker'    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

