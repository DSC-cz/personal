import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center pt-3 pb-1 text-small">
            <p>Copyright &copy; DSC &bull; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer