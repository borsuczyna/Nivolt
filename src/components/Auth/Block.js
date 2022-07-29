function Block({ children }) {
    return (
        <div id="auth-block">
            <div id="auth-inner">
                {children}
            </div>
        </div>
    );    
}

export default Block;